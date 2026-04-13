import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

function CameraMark() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" aria-label="Camera favicon">
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

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 35% 30%, #f6fff1 0%, #d7ecd0 55%, #b7d8af 100%)",
          padding: 3,
        }}
      >
        <CameraMark />
      </div>
    ),
    {
      ...size,
    },
  )
}
