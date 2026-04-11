"use client"

import { useEffect, useRef } from "react"

type Leaf = {
  age: number
  bornAt: number
  drift: number
  kind: number
  rotation: number
  rotationSpeed: number
  scale: number
  startX: number
  startY: number
  sway: number
  velocityX: number
  velocityY: number
}

const SPAWN_INTERVAL_MS = 1500
const LEAF_LIFE_MS = 5200
const MAX_LEAVES = 16

const COLORS = {
  accent: "#fb7d4f",
  accentSoft: "#ffb07d",
  background: "#05080c",
  backgroundDeep: "#0b1118",
  foreground: "#f5efe8",
  muted: "#8d99a6",
  primary: "#1d2631",
  emerald: "#30d39f",
  sky: "#5cb5ff",
}

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3)
const easeInOutSine = (value: number) => -(Math.cos(Math.PI * value) - 1) / 2

function drawLeafPath(ctx: CanvasRenderingContext2D, size: number) {
  const half = size / 2
  ctx.beginPath()
  ctx.moveTo(0, -half)
  ctx.bezierCurveTo(half * 0.96, -half * 0.72, half * 0.98, -half * 0.05, half * 0.24, half * 0.52)
  ctx.bezierCurveTo(half * 0.1, half * 0.78, -half * 0.1, half * 0.78, -half * 0.24, half * 0.52)
  ctx.bezierCurveTo(-half * 0.98, -half * 0.05, -half * 0.96, -half * 0.72, 0, -half)
  ctx.closePath()
}

function drawVeins(ctx: CanvasRenderingContext2D, size: number, kind: number) {
  const half = size / 2
  const veinAlpha = kind === 0 ? 0.38 : 0.28

  ctx.save()
  ctx.lineCap = "round"
  ctx.lineJoin = "round"
  ctx.strokeStyle = `rgba(252, 250, 245, ${veinAlpha})`
  ctx.lineWidth = Math.max(1.2, size * 0.03)
  ctx.beginPath()
  ctx.moveTo(0, -half * 0.76)
  ctx.quadraticCurveTo(size * 0.03, 0, 0, half * 0.74)
  ctx.stroke()

  ctx.lineWidth = Math.max(0.9, size * 0.016)
  ctx.strokeStyle = `rgba(141, 123, 99, ${kind === 0 ? 0.34 : 0.24})`
  const branches = [-0.58, -0.28, 0.02, 0.31, 0.58]
  for (const branch of branches) {
    const y = half * branch
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.quadraticCurveTo(size * 0.2, y - size * 0.06, size * 0.28, y - size * 0.16)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.quadraticCurveTo(-size * 0.2, y - size * 0.06, -size * 0.28, y - size * 0.16)
    ctx.stroke()
  }
  ctx.restore()
}

function createStripedPattern(): CanvasPattern | null {
  const patternCanvas = document.createElement("canvas")
  patternCanvas.width = 40
  patternCanvas.height = 40
  const patternCtx = patternCanvas.getContext("2d")

  if (!patternCtx) {
    return null
  }

  patternCtx.fillStyle = COLORS.backgroundDeep
  patternCtx.fillRect(0, 0, 40, 40)
  patternCtx.strokeStyle = "rgba(255, 255, 255, 0.08)"
  patternCtx.lineWidth = 4
  patternCtx.beginPath()
  patternCtx.moveTo(-10, 42)
  patternCtx.lineTo(42, -10)
  patternCtx.stroke()
  patternCtx.strokeStyle = "rgba(251, 125, 79, 0.22)"
  patternCtx.lineWidth = 2
  patternCtx.beginPath()
  patternCtx.moveTo(2, 42)
  patternCtx.lineTo(42, 2)
  patternCtx.stroke()
  return patternCtx.createPattern(patternCanvas, "repeat")
}

export function NotFoundLeafReveal() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const spawnRef = useRef<number | null>(null)
  const leavesRef = useRef<Leaf[]>([])
  const sizeRef = useRef({ height: 0, width: 0 })
  const patternRef = useRef<CanvasPattern | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext("2d")
    if (!context) {
      return
    }

    patternRef.current = createStripedPattern()

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const dpr = window.devicePixelRatio || 1

      sizeRef.current = { width, height }
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawnLeaf = () => {
      const { width, height } = sizeRef.current
      if (!width || !height) {
        return
      }

      leavesRef.current = leavesRef.current
        .filter((leaf) => performance.now() - leaf.bornAt < LEAF_LIFE_MS)
        .slice(-MAX_LEAVES + 1)

      const centerX = width * 0.5
      const centerY = height * 0.55
      const spreadX = width * 0.32
      const spreadY = height * 0.16
      const sign = Math.random() > 0.5 ? 1 : -1

      leavesRef.current.push({
        age: 0,
        bornAt: performance.now(),
        drift: (Math.random() - 0.5) * 28,
        kind: leavesRef.current.length % 2,
        rotation: (Math.random() - 0.5) * 1.2,
        rotationSpeed: (Math.random() - 0.5) * 0.018 + sign * 0.01,
        scale: 0.68 + Math.random() * 0.56,
        startX: centerX + (Math.random() - 0.5) * spreadX,
        startY: centerY + (Math.random() - 0.5) * spreadY,
        sway: 12 + Math.random() * 18,
        velocityX: (Math.random() - 0.5) * 42,
        velocityY: -38 - Math.random() * 52,
      })
    }

    const draw = (now: number) => {
      const { width, height } = sizeRef.current
      const leaves = leavesRef.current

      context.clearRect(0, 0, width, height)

      const background = context.createLinearGradient(0, 0, width, height)
      background.addColorStop(0, COLORS.background)
      background.addColorStop(0.52, COLORS.backgroundDeep)
      background.addColorStop(1, "#0f1822")
      context.fillStyle = background
      context.fillRect(0, 0, width, height)

      const glow = context.createRadialGradient(width * 0.5, height * 0.38, 20, width * 0.5, height * 0.38, Math.max(width, height) * 0.44)
      glow.addColorStop(0, "rgba(251, 125, 79, 0.15)")
      glow.addColorStop(0.4, "rgba(48, 211, 159, 0.08)")
      glow.addColorStop(1, "rgba(5, 8, 12, 0)")
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)

      context.save()
      context.globalAlpha = 0.16
      context.strokeStyle = "rgba(92, 181, 255, 0.12)"
      context.lineWidth = 1
      for (let i = 0; i < 7; i += 1) {
        const x = (width / 8) * (i + 0.7)
        context.beginPath()
        context.moveTo(x, 0)
        context.lineTo(x - width * 0.05, height)
        context.stroke()
      }
      context.restore()

      const aliveLeaves: Leaf[] = []

      for (const leaf of leaves) {
        const progress = Math.min(1, (now - leaf.bornAt) / LEAF_LIFE_MS)
        const rise = easeOutCubic(progress)
        const floatPhase = easeInOutSine(progress)
        const x = leaf.startX + leaf.velocityX * rise + Math.sin(progress * Math.PI * 2.4) * leaf.sway * 0.55
        const y = leaf.startY + leaf.velocityY * rise - floatPhase * 26
        const size = 82 * leaf.scale * (0.58 + rise * 0.48)
        const alphaIn = Math.min(1, progress / 0.16)
        const alphaOut = Math.max(0, 1 - Math.max(0, progress - 0.72) / 0.28)
        const alpha = alphaIn * alphaOut
        const rotation = leaf.rotation + leaf.rotationSpeed * now + Math.sin(progress * Math.PI * 1.5) * 0.25

        if (progress < 1) {
          aliveLeaves.push(leaf)
        }

        context.save()
        context.translate(x, y)
        context.rotate(rotation)
        context.scale(1, 0.92)
        context.globalAlpha = alpha
        drawLeafPath(context, size)
        context.shadowColor = "rgba(2, 6, 23, 0.45)"
        context.shadowBlur = 18
        context.shadowOffsetY = 8
        context.fillStyle = leaf.kind === 0 ? COLORS.accent : COLORS.primary
        context.fill()
        context.shadowColor = "transparent"
        context.lineWidth = Math.max(1.1, size * 0.02)
        context.strokeStyle = "rgba(255, 255, 255, 0.18)"
        context.stroke()

        context.save()
        context.clip()
        context.globalAlpha = alpha * 0.95
        const inner = context.createLinearGradient(-size * 0.5, -size * 0.5, size * 0.5, size * 0.5)
          inner.addColorStop(0, leaf.kind === 0 ? COLORS.accentSoft : COLORS.sky)
          inner.addColorStop(0.55, leaf.kind === 0 ? COLORS.backgroundDeep : COLORS.emerald)
          inner.addColorStop(1, leaf.kind === 0 ? COLORS.background : COLORS.muted)
        context.fillStyle = inner
        context.fillRect(-size / 2, -size / 2, size, size)

        if (patternRef.current && leaf.kind === 1) {
          context.globalAlpha = alpha * 0.28
          context.fillStyle = patternRef.current
          context.fillRect(-size / 2, -size / 2, size, size)
        }
        context.restore()

        drawVeins(context, size, leaf.kind)
        context.restore()
      }

      leavesRef.current = aliveLeaves

      const stampAlpha = 0.28 + Math.sin(now / 1700) * 0.06
      context.save()
      context.globalAlpha = stampAlpha
      context.fillStyle = "rgba(255, 255, 255, 0.04)"
      context.beginPath()
      context.arc(width * 0.5, height * 0.42, Math.min(width, height) * 0.21, 0, Math.PI * 2)
      context.fill()
      context.restore()

      frameRef.current = window.requestAnimationFrame(draw)
    }

    resize()
    spawnLeaf()
    spawnLeaf()
    spawnLeaf()

    window.addEventListener("resize", resize)
    spawnRef.current = window.setInterval(spawnLeaf, SPAWN_INTERVAL_MS)
    frameRef.current = window.requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      if (spawnRef.current) {
        window.clearInterval(spawnRef.current)
      }
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  )
}
