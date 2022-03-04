import { Text } from "@chakra-ui/react";
import React from "react";
import data from "../utils/metal.json";

const MetalMeta = () => {
  return (
    <>
      <Text fontSize={25} fontWeight={200} color="gray.300">Metal Bands 🤘</Text>
      <Text fontSize={25} fontWeight={200} color="gray.300">Total Bands: {data.length}</Text>
    </>
  );
};

export default MetalMeta;
