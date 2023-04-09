import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import one from "../public/1.svg";
import two from "../public/2.svg";
import three from "../public/3.svg";
import four from "../public/4.svg";
import five from "../public/5.svg";
import six from "../public/6.svg";
import seven from "../public/7.svg";
import eight from "../public/8.svg";
import nine from "../public/9.svg";
import ten from "../public/10.svg";
import eleven from "../public/11.svg";
import twelve from "../public/12.svg";

export default function index() {
  const [date, setDate] = useState(null);
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(one);

  const arr = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
  ];

  async function getFormattedDate() {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const datetemp = new Date();
    setDate(datetemp.toLocaleDateString("en-US", options));
  }

  useEffect(() => {
    async function main() {
      await getFormattedDate();
    }

    main();
  }, [date]);

  useEffect(() => {
    async function change() {
      const randnum = Math.floor(Math.random() * 13);
      setIndex(randnum);
      setImg(arr[index]);
    }

    const intervalId = setInterval(change, 10000);

    return () => clearInterval(intervalId);
  }, [arr]);

  return (
    <Flex
      h={"100vh"}
      justify={"center"}
      align={"center"}
      bg={"black"}
      color={"white"}
      fontFamily={"Space Grotesk, sans-serif"}
      cursor={"default"}
      userSelect={"none"}
      style={{ backgroundImage: `url(${img.src})`, objectFit: "fill" }}
    >
      <Flex flexDir={"column"}>
        <Flex align={"center"}>
          <Text bg={"black"} fontSize={"30px"} fontWeight={"medium"} p={"15px"}>
            🌾Yieldbay
          </Text>
        </Flex>
        <Text fontSize={"80px"} fontWeight={"bold"}>
          {date}
        </Text>
        <Text fontSize={"40px"} fontWeight={"medium"}>
          gm, happy hacking!
        </Text>
      </Flex>
    </Flex>
  );
}
