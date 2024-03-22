import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const links = [
  { name: "home", href: "" },
  { name: "about", href: "" },
  { name: "tokenomics", href: "" },
  { name: "socials", href: "#socials" },
]

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo-wrapper">
      <StaticImage
        src="../images/bomelogo.png"
        loading="eager"
        height={50}
        style={{ margin: 0, borderRadius: 100 }}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="bome logo"
      />
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="menu-wrapper">
      <ul>
        {links.map((l, index) => (
          <li key={index}>
            <Link to={l.href}>{l.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
)

export default Header
