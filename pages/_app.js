import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  console.log(asPath);

  if (asPath === "/") {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
