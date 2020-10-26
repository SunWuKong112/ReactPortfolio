import React from "react";

function RickRoll(){
     const youtubeId = "dQw4w9WgXcQ";
     return (
       <div>
       <button >Back</button>
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1 `}
              frameBorder="0"
            />
          </div>
        </div>
        );
}

export default RickRoll;