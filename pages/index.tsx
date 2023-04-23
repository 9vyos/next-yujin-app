import Image from "next/image";
import { Inter } from "next/font/google";
import ServiceLayout from "@/components/layouts/service_layout";
import { graphqlQuery } from "@/lib/graphql";
import { gql } from "@apollo/client";

export default async function IndexPage() {
  const response = await graphqlQuery(gql`
    query ExampleQuery {
      company {
        ceo
      }
      roadster {
        apoapsis_au
      }
    }
  `);

  console.log(response);

  return (
    <ServiceLayout title="test">
      <h1 className="text-lg">Test</h1>
    </ServiceLayout>
  );
}
