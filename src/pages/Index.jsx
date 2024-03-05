import React, { useState } from "react";
import { Box, Flex, Text, Input, IconButton, VStack, HStack, useColorModeValue, Heading, Spacer } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Flex direction="column" align="center" justify="center" h="100vh" bg={bgColor}>
      <VStack spacing={8} w="full" maxW="md" px={4}>
        <Heading>Todo App</Heading>
        <HStack w="full">
          <Input placeholder="Add a task..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTask()} />
          <IconButton icon={<FaPlus />} onClick={handleAddTask} colorScheme="blue" aria-label="Add task" />
        </HStack>
        <VStack w="full" borderWidth="1px" borderColor={borderColor} borderRadius="md" overflow="hidden">
          {tasks.map((task, index) => (
            <HStack key={index} w="full" px={4} py={2} spacing={4}>
              <Text>{task}</Text>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(index)} colorScheme="red" variant="ghost" aria-label="Delete task" size="sm" />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Index;
