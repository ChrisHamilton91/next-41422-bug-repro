import * as React from "react";
import Router from "next/router";

export default function TwoPage() {
  return (
    <>
      <h1>Component Two</h1>
      <p>Go forward a few times, then back</p>
      <p>Notice how the url changes when the component does not</p>
      <button onClick={() => history.back()}>BACK</button>
      <button onClick={() => Router.push("/one")}>FORWARD</button>
    </>
  );
}
