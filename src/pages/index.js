import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.bannerContent}>
      <div>
        <h1 className={styles.bannerHeading}>
          Welcome to <br></br>
          <span className={{ color: "green" }}>
            <b>Base of Meme</b>
          </span>
        </h1>
        <a href="#">Buy</a>
      </div>
      <StaticImage
        src="../images/bomemain.jpeg"
        loading="eager"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ borderRadius: "100%" }}
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
