import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Carousel from "../components/carousel"

const IndexPage = () => (
  <Layout>
    <div className={styles.bannerContent}>
      <div>
        <h1 className={styles.bannerHeading}>
          Welcome to <br></br>
          <span className={styles.title}>
            <b>Base of Meme</b>
          </span>
        </h1>
        <div className={styles.buyLink}>
          <a href="#">Buy</a>
        </div>
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
    <div className={styles.carouselMargin}>
      <Carousel />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
