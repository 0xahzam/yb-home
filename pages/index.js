import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function index() {
  const [date, setDate] = useState(null);
  const [index, setIndex] = useState(8);
  const [img, setImg] = useState("1.svg");

  const arr = [
    "1.svg",
    "2.svg",
    "3.svg",
    "4.svg",
    "5.svg",
    "6.svg",
    "7.svg",
    "8.svg",
    "9.svg",
    "10.svg",
    "11.svg",
    "12.svg",
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
      backgroundImage={img}
      objectFit={"fill"}
    >
      <motion.div
        initial={{ opacity: "0" }}
        animate={{ opacity: "100%" }}
        transition={{ delay: "0.15" }}
      >
        <Flex flexDir={"column"}>
          <Flex
            align={"center"}
            onClick={() => {
              const randnum = Math.floor(Math.random() * 13);
              setIndex(randnum);
              setImg(arr[index]);
            }}
            cursor={"pointer"}
          >
            <Text
              bg={"black"}
              fontSize={"30px"}
              fontWeight={"medium"}
              p={"15px"}
            >
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
      </motion.div>
    </Flex>
  );
}
