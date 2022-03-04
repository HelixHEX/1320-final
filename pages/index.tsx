import { Flex, Grid, GridItem, Input, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import Band from "../components/band";
import Heading from "../components/heading";
import data from "../utils/metal.json";

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <Flex flexDir={"column"} p={10}>
        <Heading />
        <Input color='white' variant='flushed' mt={5} placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
        <SimpleGrid columnGap={5} mt={10} rowGap={20} columns={[1, 2, 3, 3]} >
          {data.filter(band => band.band_name.includes(search)).map((band: BandProps, index: number) => (
            <Band key={index} band={band} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Home;
