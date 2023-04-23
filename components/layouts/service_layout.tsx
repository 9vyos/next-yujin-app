import Head from "next/head";
import { Props } from "./props";
import { Header } from "../organisms/header";

export default async function ServiceLayout({ children, title }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </div>
  );
}
