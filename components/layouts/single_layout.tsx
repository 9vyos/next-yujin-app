import Head from "next/head";
import { Props } from "./props";

export const SingleLayout = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};
