import React from "react";
import { Outlet } from "react-router-dom";
const Main = () => {
  return(
      <>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Outlet />
          </main>
      </>
  )
}
export default Main;