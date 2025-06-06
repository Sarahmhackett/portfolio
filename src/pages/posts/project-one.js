import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Project Name</h1>
      <h2>Core Skills</h2>
      <ol>
        <li>skill </li>
        <li>skill </li>
        <li>skill </li>
        <li>skill </li>
      </ol>
      <p> Extra information</p>
    </Layout>
  );
}
