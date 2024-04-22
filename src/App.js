// import ReactPlayer from "react-player";
import "./App.css";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BackgroundVideo src={"https://www.youtube.com/watch?v=wDchsz8nmbo"} />
        <BackgroundVideo src={"https://vimeo.com/347119375"} />
        <BackgroundVideo src={"/banner-video.mp4"} />
        {/* <ReactPlayer
          playing={true}
          loop={true}
          volume={0}
          muted
          width="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 0 },
            },
            facebook: {
              appId: "12345",
            },
          }}
          url="https://www.youtube.com/watch?v=wDchsz8nmbo"
        />
        <ReactPlayer
          playing={true}
          loop={true}
          volume={0}
          muted
          width="100vw"
          url="https://vimeo.com/347119375"
        />
        <video src="https://www.youtube.com/watch?v=hkXsoPZVvFE"></video>
        <div className="iframe-container">
          <iframe
            title={`Vimeo Video 347119375`}
            src={`https://player.vimeo.com/video/347119375?title=0&controls=0&mute=1&autoplay=1&loop=1&color=ef2200&byline=0&portrait=0`}
            width="100%"
            height="100%"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}
      </header>
    </div>
  );
}

export default App;
