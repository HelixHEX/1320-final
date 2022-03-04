import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Like = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Flex>
        <Button alignSelf={'center'} onClick={() => setCount(count - 1)}>👎</Button>
        <Text ml={2} mr={2} fontSize={[35, 35, 45, 45]} color='white'>{count}</Text>
        <Button alignSelf={'center'} onClick={() => setCount(count + 1)}>👍</Button>
      </Flex>
    </>
  );
};

export default Like;
