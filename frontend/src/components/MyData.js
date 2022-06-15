import {
  Box,
  Center,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  VStack,
  Tag,
  Avatar,
  TagLabel,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js';
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function MyData() {
  const [currentData, setCurrentData] = useState(null);
  const [temps, setTemps] = useState([]);
  const [times, setTimes] = useState([]);

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(res => res.json())
      .then(data => {
        let dummyTempArray = [];
        let dummyTimeArray = [];

        data.map(temp => {
          dummyTempArray.push(temp.Temperature);
          dummyTimeArray.push(temp.Time);
          return null;
        });

        setTemps(dummyTempArray);
        setTimes(dummyTimeArray);
        setData({
          labels: dummyTimeArray.reverse(),
          datasets: [
            {
              label: 'Temperatures (Celcius)',
              data: dummyTempArray.reverse(),
              backgroundColor: '#FFC300',
              borderColor: 'green',
              tension: 0.4,
              fill: true,
              pointStyle: 'rect',
              pointBorderColor: 'blue',
              pointBackgroundColor: '#fff',
              showLine: true,
            },
          ],
        });
        setCurrentData(data[0]);
      });
  }, []);

  return (
    <>
      <Center>
        {currentData && (
          <>
            <VStack w="100%">
              <Box
                //       bg="green.100"
                m={3}
                p={5}
                borderRadius={4}
                w="60%"
                boxShadow="base"
                border="1px"
                borderColor="gray.200"
              >
                <Center>
                  <VStack w="100%">
                    <Text fontSize="3xl" p={3} fontWeight="500">
                      {currentData.ID}{' '}
                    </Text>

                    <TableContainer w="80%">
                      <Table>
                        <Tbody>
                          <Tr>
                            <Td>
                              <Tag
                                size="lg"
                                colorScheme="green"
                                borderRadius="full"
                              >
                                <Avatar
                                  src="https://bit.ly/sage-adebayo"
                                  size="xs"
                                  name="Date"
                                  ml={-1}
                                  mr={2}
                                />
                                <TagLabel>Date</TagLabel>
                              </Tag>
                            </Td>
                            <Td>{currentData.Date}</Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <Tag
                                size="lg"
                                colorScheme="green"
                                borderRadius="full"
                              >
                                <Avatar
                                  src="https://bit.ly/sage-adebayo"
                                  size="xs"
                                  name="Time"
                                  ml={-1}
                                  mr={2}
                                />
                                <TagLabel>Time</TagLabel>
                              </Tag>
                            </Td>
                            <Td>{currentData.Time}</Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <Tag
                                size="lg"
                                colorScheme="green"
                                borderRadius="full"
                              >
                                <Avatar
                                  src="https://bit.ly/sage-adebayo"
                                  size="xs"
                                  name="Temperature"
                                  ml={-1}
                                  mr={2}
                                />
                                <TagLabel>Temp</TagLabel>
                              </Tag>
                            </Td>
                            <Td>{currentData.Temperature} C</Td>
                          </Tr>

                          <Tr>
                            <Td>
                              <Tag
                                size="lg"
                                colorScheme="green"
                                borderRadius="full"
                              >
                                <Avatar
                                  src="https://bit.ly/sage-adebayo"
                                  size="xs"
                                  name="La Ti"
                                  ml={-1}
                                  mr={2}
                                />
                                <TagLabel>Latitude</TagLabel>
                              </Tag>
                            </Td>
                            <Td>{currentData.Latitude}</Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <Tag
                                size="lg"
                                colorScheme="green"
                                borderRadius="full"
                              >
                                <Avatar
                                  src="https://bit.ly/sage-adebayo"
                                  size="xs"
                                  name="Lo Gi"
                                  ml={-1}
                                  mr={2}
                                />
                                <TagLabel>Longitude</TagLabel>
                              </Tag>
                            </Td>
                            <Td>{currentData.Longitude}</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </VStack>
                </Center>
              </Box>

              <VStack w="100%">
                <Box
                  //       bg="green.100"
                  m={3}
                  p={5}
                  borderRadius={4}
                  w="60%"
                  boxShadow="base"
                  border="1px"
                  borderColor="gray.200"
                >
                  <Text fontSize="xl" p={3} fontWeight="500">
                    Temperature
                  </Text>

                  <Box>
                    <Line data={data}></Line>
                  </Box>
                </Box>
              </VStack>
            </VStack>
          </>
        )}
      </Center>
    </>
  );
}

export default MyData;
