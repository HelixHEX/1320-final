import { Flex, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Like from "./like";

interface BandProps {
  band: {
    ID: number;
    band_name: string;
    fans: number;
    formed: string;
    origin: string;
    split: string;
    style: string;
  };
}
const Band = ({ band }: BandProps) => {
  return (
    <>
      <Flex p={10} borderColor={"white"} borderWidth={1} flexDir={"column"}>
        <Heading color="cyan.400">{band.band_name}</Heading>
        <Flex mt={5} flexDir={"column"} color={"white"}>
          <Flex>
            <Text fontWeight={600}>Origin: </Text>
            <Text ml={2} fontWeight={200}>
              {band.origin}
            </Text>
          </Flex>

          <Flex>
            <Text fontWeight={600}>Fans: </Text>
            <Text ml={2} fontWeight={200}>
              {(band.fans * 1000).toLocaleString('en')}
            </Text>
          </Flex>

          <Flex>
            <Text fontWeight={600}>Formed: </Text>
            <Text ml={2} fontWeight={200}>
              {band.formed}
            </Text>
          </Flex>

          <Flex>
            <Text fontWeight={600}>Split: </Text>
            <Text ml={2} fontWeight={200}>
              {band.split}
            </Text>
          </Flex>

          <Flex mt={5}>
            <UnorderedList>
              {band.style.split(",").map((style: string, index: number) => (
                <ListItem key={index}>
                  <Text key={index} fontWeight={200}>
                    {style}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Flex>
        {band.split === "-" ? <Like /> : null}
      </Flex>
    </>
  );
};

export default Band;
