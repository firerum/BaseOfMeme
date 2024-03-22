import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Carousel from "../components/carousel"

const socials = [
  { name: "telegram", href: "https://t.me/BaseBOME" },
  { name: "discord", href: "/" },
  { name: "twitter", href: "https://twitter.com/baseofmemes" },
  {
    name: "dextools",
    href: "https://www.dextools.io/app/en/base/pair-explorer/0xd4c92Eb9Da8ed7B4EFD4774e47cAe59F939E222a?t=1711119596698",
  },
]

const IndexPage = () => (
  <Layout>
    <div className={styles.bannerContent}>
      <div>
        <h1 className={styles.bannerHeading}>
          Welcome to <br></br>
          <span>
            <b>Base of Memes</b>
          </span>
        </h1>

        <a
          href="https://app.uniswap.org/swap?chain=base&outputCurrency=0xd4c92Eb9Da8ed7B4EFD4774e47cAe59F939E222a"
          className={styles.buyLink}
        >
          Buy
        </a>
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
    <div className={styles.socials} id="socials">
      <h2>Socials:</h2>
      <ul>
        {socials.map((l, index) => (
          <li key={index} className={styles.list}>
            <a href={l.href}>{l.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
