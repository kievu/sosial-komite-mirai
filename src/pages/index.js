import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import marenImg from "../images/maren.png"
import kienImg from "../images/kien.png"
import rimpaImg from "../images/rimpa.png"
import SupriseIcon from "../components/SupriseIcon"
import useSound from "use-sound"
import Fireworks from "../components/Fireworks"
import StartIcon from "../components/StartIcon"

const IndexPage = () => {
  const [play] = useSound("/vocaroo.mp3")
  const [fire, setFire] = React.useState(false)
  const [kien, setKien] = React.useState(false)
  const [rimpa, setRimpa] = React.useState(false)
  const [maren, setMaren] = React.useState(false)

  return (
    <Layout>
      <Seo title="Sosialkomite 2021" />
      <Fireworks />
      <div className="top-space" />
      <div style={{ maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
        {maren ? (
          <h1 style={{ textAlign: "center" }}>
            La meg presentere Mirai sin sosialkomite 2021
          </h1>
        ) : (
          <h1 style={{ textAlign: "center" }}>
            🎈Avslørersel av sosialkomiteen til Mirai 2021
          </h1>
        )}
      </div>
      <div className="bottom-space" />
      <div className="mini-container">
        <div className="rimpa">
          <h3 style={{ textAlign: "center" }}>Den litt gale</h3>
          <div style={{ position: "relative" }}>
            <img
              className="fade-in-image"
              src={rimpaImg}
              style={{
                height: 200,
                width: 200,
                margin: 0,
                display: rimpa ? "block" : "none",
              }}
            />
            <div
              style={{
                display: rimpa ? "flex" : "none",
                background: "#FBE2FF",
                border: "1px solid #E586F5",
                borderRadius: 22,
                height: 45,
                width: 123,
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                bottom: -20,
                left: 0,
                right: 0,
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ margin: 0 }}>Party-Rimpa!</h4>
            </div>
          </div>
          <SupriseIcon
            style={{
              height: 170,
              width: 170,
              display: rimpa ? "none" : "block",
              cursor: "pointer",
            }}
            onClick={() => {
              if (maren) {
                setRimpa(true)
              }
            }}
          />
          {maren && !rimpa && (
            <div
              style={{
                position: "absolute",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
              }}
            >
              <p style={{ textAlign: "center" }}>Trykk på meg</p>
            </div>
          )}
        </div>
        <div className="maren">
          <div style={{ height: 48 }}>
            <h3
              style={{ textAlign: "center", display: maren ? "block" : "none" }}
            >
              The Chief of Social Commitee
            </h3>
          </div>
          <img
            src={marenImg}
            className="App-logo"
            style={{
              height: 280,
              width: 280,
              margin: 0,
              display: maren ? "block" : "none",
            }}
          />
          <StartIcon
            style={{
              height: 280,
              width: 280,
              display: maren ? "none" : "block",
              cursor: "pointer",
            }}
            onClick={() => {
              setMaren(true)
              setFire(true)
              play()
            }}
          />
          <div
            style={{
              background: "#FBE2FF",
              border: "1px solid #E586F5",
              borderRadius: 22,
              height: 45,
              width: 123,
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              bottom: -20,
              left: 0,
              right: 0,
              textAlign: "center",
              display: maren ? "flex" : "none",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ margin: 0 }}>Dj-marn</h4>
          </div>
        </div>

        <div className="kien">
          <h3 style={{ textAlign: "center" }}>Den fornuftige</h3>
          <div style={{ position: "relative" }}>
            <img
              className="fade-in-image"
              src={kienImg}
              style={{
                height: 200,
                width: 200,
                margin: 0,
                display: kien ? "block" : "none",
              }}
            />
            <div
              style={{
                display: kien ? "flex" : "none",
                background: "#FBE2FF",
                border: "1px solid #E586F5",
                borderRadius: 22,
                height: 45,
                width: 123,
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                bottom: -20,
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ margin: 0 }}>Shotte-kix</h4>
            </div>
          </div>
          <SupriseIcon
            style={{
              height: 170,
              width: 170,
              display: kien ? "none" : "block",
              cursor: "pointer",
            }}
            onClick={() => {
              if (maren) {
                setKien(true)
              }
            }}
          />
          {maren && !kien && (
            <div
              style={{
                position: "absolute",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
              }}
            >
              <p style={{ textAlign: "center" }}>Trykk på meg</p>
            </div>
          )}
        </div>
      </div>
      {maren && rimpa && kien && (
        <div
          className="fade-in-image"
          style={{
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 80,
            marginBottom: 40,
          }}
        >
          <p>
            Tusen takk for alle de fantastiske søknadene som har kommet inn!
            Denne gjengen skal sørge for det sosiale for å booste opp
            arbeidsmoralen! Vi lover å arrangere tidenes fest når verden åpner
            opp igjen, og før det skal vi sørge for kos remote! ❤️
          </p>
        </div>
      )}
      <Fireworks play={fire} />
    </Layout>
  )
}

export default IndexPage
