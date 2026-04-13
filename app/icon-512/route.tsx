import { ImageResponse } from "next/og"

export const dynamic = "force-dynamic"

function CameraMark() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" aria-label="Camera icon 512">
      <rect width="100" height="100" rx="26" fill="#eff8ea" />
      <rect x="15" y="25" width="70" height="50" rx="8" fill="#2f7d32" />
      <circle cx="50" cy="50" r="20" fill="#4c9f50" />
      <circle cx="50" cy="50" r="12" fill="#6bbf69" />
      <circle cx="50" cy="50" r="6" fill="#9fd98f" />
      <rect x="35" y="20" width="30" height="10" rx="5" fill="#8a5a2b" />
      <circle cx="72" cy="28" r="5" fill="#9fd98f" opacity="0.85" />
    </svg>
  )
}

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 35% 30%, #b7f7d1 0%, #4f8f5f 55%, #10231a 100%)",
          padding: 52,
          borderRadius: 102,
        }}
      >
        <CameraMark />
      </div>
    ),
    {
      width: 512,
      height: 512,
    },
  )
}
