import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>In the Moment</title>
        <meta name="description" content="In the Moment Photography" />
        {/* todo: change favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
      </main>
    </>
  );
};

export default Home;
