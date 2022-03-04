import { Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import Band from "../components/band";
import Heading from "../components/heading";
import data from "../utils/metal.json";

const Home: NextPage = () => {
  return (
    <>
      <Flex flexDir={"column"} p={10}>
        <Heading />
        <SimpleGrid columnGap={5} mt={10} rowGap={20} columns={[1, 2, 3, 3]} >
          {data.map((band: BandProps, index: number) => (
            <Band key={index} band={band} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Home;
