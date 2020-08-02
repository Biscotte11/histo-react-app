import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Histo = ({ data }) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data.map((maison) => {
        maison.prix /= 1000;
        return maison;
      })}
      margin={{
        top: 20,
        right: 50,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="localisation" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="volume" stroke="#8884d8" />
      <Line type="monotone" dataKey="prix" unit="k" stroke="#82ca9d" />
    </LineChart>
  );
};
export default Histo;
