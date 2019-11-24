import React from "react"
import Logo from "../assets/logo.png"

const Header = (props) => {
  return (
    <table className="titleSearch" style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td style={{ width: "30%" }}>
            <img src={Logo} width="50" alt="app icon" />
            Vegashood Search
          </td>
          <td style={{ width: "70%", float: "right", textAlign: "right" }}>
            <a href="/#" onClick={props.viewLater}>
              View Later Movies
            </a>{" "}
            |{" "}
            <a onClick={props.viewFavorite} href="/#">
              Favorite Movies
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Header
