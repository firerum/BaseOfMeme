import * as React from "react"

const Footer = () => {
  return (
    <footer>
      <hr />
      <p>
        Disclaimer: The information provided shall not in any way constitute a
        recommendation as to whether you should invest in any product discussed.
        BOME’s team accepts no liability for any loss occasioned to any person
        acting or refraining from action as a result of any material provided or
        published. BOME is not a security as per US financial regulation,
        Europe, UK, Canada, or any other regulation. BOME’s team, developers,
        and other stakeholders created this as a fun community token only. The
        ownership of $BOME coin does not give any right of return, vote,
        management, or any other right.
      </p>
      © {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
