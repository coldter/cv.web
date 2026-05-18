import { ImageResponse } from "next/og";

import { RESUME_DATA } from "@/data/resume-data";

export const alt = `${RESUME_DATA.name} | ${RESUME_DATA.about}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 4rem",
        }}
      >
        <img
          src={RESUME_DATA.avatarUrl}
          alt={RESUME_DATA.name}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginBottom: "2rem",
          }}
        />
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#111",
            marginBottom: "1rem",
          }}
        >
          {RESUME_DATA.name}
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            color: "#555",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          {RESUME_DATA.about}
        </div>
        {RESUME_DATA.personalWebsiteUrl && (
          <div
            style={{
              fontSize: "1rem",
              color: "#777",
              marginTop: "2rem",
            }}
          >
            {RESUME_DATA.personalWebsiteUrl.replace(/^https?:\/\//, "")}
          </div>
        )}
      </div>
    </div>,
    { ...size },
  );
}
