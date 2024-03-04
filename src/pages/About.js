import React from "react";
import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  Avatar,
  Heading,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import osama from "../images/osama.jpg";
import omar from "../images/omar.jpg";
import Mohammed from "../images/Mohammed.jpg";

function About() {
  const listOfAvatars = [
    {
      id: 1,
      name: "Osama Alibrahim",
      image: osama,
    },
    {
      id: 2,
      name: "Omar Alomran",
      image: omar,
    },
    {
      id: 3,
      name: "Sohaib Aledlah",
      image: omar,
    },
    {
      id: 4,
      name: "Rayyan Alsuhaibani",
      image: omar,
    },
    {
      id: 5,
      name: "Mohammed Alsedais",
      image: Mohammed,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Stack
        bg={useColorModeValue("gray.50", "gray.900")}
        py={{ base: 20, md: 28 }}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={"center"}
        direction={"column"}
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign={"center"}
          maxW={"3xl"}
        >
          We believe the wonders of the universe should be within reach for
          everyone, everywhere. With our exportly curated selection of
          telescopes and our dedication to dymistifiying astronomy, we are here
          to guide you from your first glance through a lens to your lifelong
          journey among the stars.
        </Text>
        <Heading
          fontWeight={600}
          fontSize={{ base: "5xl", sm: "5xl", md: "6xl" }}
          lineHeight={"110%"}
          align={"center"}
        >
          Meet Our{" "}
          <Text as={"span"} color={"blue.400"}>
            Team!
          </Text>
        </Heading>
        <Flex direction="row" wrap="wrap" justify="center" align="center" p={4}>
          {listOfAvatars.map((avatar) => (
            <AvatarBox
              key={avatar.id}
              name={avatar.name}
              image={avatar.image}
            />
          ))}
        </Flex>
      </Stack>
    </motion.div>
  );
}

function AvatarBox({ name, image }) {
  return (
    <Box textAlign={"center"} p={10}>
      <Avatar src={image} mb={2} size={"2xl"} />

      <Heading fontSize={"xl"} fontWeight={700}>
        {name}
      </Heading>
    </Box>
  );
}

export default About;
