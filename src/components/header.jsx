import { Menu } from "./menu"

export const Header=()=>{
      return (<div className="header">
        <img src="./logo.png" alt="logo" />
        <div className="menu">
          <Menu />
        </div>
    </div>
      )
}