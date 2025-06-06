import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          My personal projects, tutorials and learnings from the first two years
          as a software engineer
        </p>

        <div>
          <Link href="/posts/project-one">Project Name</Link>
        </div>
        <div>
          <Link href="/posts/project-two">Project Name</Link>
        </div>
      </section>
    </Layout>
  );
}
