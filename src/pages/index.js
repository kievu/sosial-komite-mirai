import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import maren from "../images/maren.png"
import kienImg from "../images/kien.png"
import rimpaImg from "../images/rimpa.png"
import SupriseIcon from "../components/SupriseIcon"
import useSound from "use-sound"
import Fireworks from "../components/Fireworks"

const IndexPage = () => {
  const [play] = useSound("/vocaroo.mp3")
  const [fire, setFire] = React.useState(false)
  const [kien, setKien] = React.useState(false)
  const [rimpa, setRimpa] = React.useState(false)

  React.useEffect(() => {
    if (fire) {
      setTimeout(() => {
        setFire(false)
      }, 2000)
    }
  }, [fire])

  return (
    <Layout>
      <Seo title="Sosialkomite 2021" />
      <Fireworks />
      <div style={{ display: "hidden", marginTop: 100 }} />
      <div style={{ maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
        <h1 style={{ textAlign: "center" }}>
          La meg presentere Mirai sin sosialkomite 2021
        </h1>
      </div>
      <div style={{ display: "hidden", marginTop: 50 }} />
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: 70 }}>
          <h3 style={{ textAlign: "center" }}>Den litt gale</h3>
          {rimpa ? (
            <div style={{ position: "relative" }}>
              <img
                src={rimpaImg}
                style={{ height: 200, width: 200, margin: 0 }}
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4 style={{ margin: 0 }}>Party-Rimpa!</h4>
              </div>
            </div>
          ) : (
            <SupriseIcon
              style={{ height: 170, width: 170 }}
              onClick={() => {
                setRimpa(true)
                setFire(true)
              }}
            />
          )}
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ textAlign: "center" }}>The Chief of Social Commitee</h3>
          <img
            src={maren}
            style={{ height: 280, width: 280, margin: 0 }}
            onClick={() => {
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ margin: 0 }}>Dj-marn</h4>
          </div>
        </div>

        <div style={{ marginLeft: 70 }}>
          <h3 style={{ textAlign: "center" }}>Den fornuftige</h3>
          {kien ? (
            <div style={{ position: "relative" }}>
              <img
                src={kienImg}
                style={{ height: 200, width: 200, margin: 0 }}
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4 style={{ margin: 0 }}>Shotte-kix</h4>
              </div>
            </div>
          ) : (
            <SupriseIcon
              style={{ height: 170, width: 170 }}
              onClick={() => {
                setKien(true)
                setFire(true)
              }}
            />
          )}
        </div>
      </div>
      <Fireworks play={fire} />
    </Layout>
  )
}

export default IndexPage
