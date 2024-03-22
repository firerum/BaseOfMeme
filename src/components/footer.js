import * as React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()} &middot; Built with
      {` `}
      <a href="#">Gatsby</a>
    </footer>
  )
}

export default Footer
