import { Text, Heading as Header, Flex} from "@chakra-ui/react";
import React from "react";
import MetalMeta from "./metalmeta";

const Heading = () => {
  return (
    <>
      <Flex flexDir={'column'}>
        <Header color="white">ACS 1320 Final Assessment</Header>
        <Text fontSize={35} color="gray.300">
          Elias Wambugu
        </Text>
        <MetalMeta />
      </Flex>
    </>
  );
};

export default Heading;
