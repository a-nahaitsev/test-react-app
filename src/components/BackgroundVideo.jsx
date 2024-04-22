import React from "react";

const BackgroundVideo = ({ src }) => {
  const getVideoId = (src) => {
    let videoId = src;

    if (src.includes("youtube.com")) {
      const urlParams = new URLSearchParams(new URL(src).search);
      videoId = urlParams.get("v");
    }

    if (src.includes("vimeo.com")) {
      videoId = src.split("/").pop();
    }

    return videoId;
  };

  const type = src.includes("youtube.com")
    ? "youtube"
    : src.includes("vimeo.com")
    ? "vimeo"
    : "other";
  const videoId = getVideoId(src);

  return (
    <div className="iframe-container">
      {type === "youtube" && (
        <iframe
          title={`YouTube Video ${videoId}`}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&mute=1&showinfo=0&controls=0&modestbranding=1&loop=1&playlist=${videoId}`}
          width="100%"
          height="100%"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
      {type === "vimeo" && (
        <iframe
          title={`Vimeo Video ${videoId}`}
          src={`https://player.vimeo.com/video/${videoId}?title=0&controls=0&mute=1&autoplay=1&loop=1&color=ef2200&byline=0&portrait=0`}
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {type === "other" && (
        <video
          autoPlay
          src={videoId}
          controls={false}
          muted
          loop
          width="100%"
          height="auto"
        ></video>
      )}

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* <p>Title</p> */}
        <button
          style={{
            backgroundColor: "#FFFFFF",
            color: "#005488",
            padding: "12px 24px",
            outline: "none",
            border: "none",
            lineHeight: "24px",
            fontWeight: 700,
          }}
        >
          CTA Button
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
