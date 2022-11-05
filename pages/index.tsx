import Router from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    Router.beforePopState(() => false);
  }, []);
  useEffect(() => {
    Router.push("one");
  }, []);
  return null;
}
