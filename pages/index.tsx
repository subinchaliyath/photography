import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner";
import PhotoFrame from "../components/photoframe";

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
        <section className="flex flex-wrap justify-center gap-4">
          <PhotoFrame />
          <PhotoFrame />
          <PhotoFrame />
          <PhotoFrame />
        </section>
      </main>
    </>
  );
};

export default Home;
