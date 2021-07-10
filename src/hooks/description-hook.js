import React, { useCallback, useEffect, useState } from "react";

const TempData = {
  airtel: {
    title: "Airtel",
    description:
      "Bharti Airtel Limited, also known as Airtel, is an Indian multinational telecommunications services company based in New Delhi, India. It operates in 18 countries across South Asia and Africa, as well as the Channel Islands.",
  },
  jio: {
    title: "Jio",
    description:
      "Reliance Jio Infocomm Limited, doing business as Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Mumbai, Maharashtra, India. It operates a national LTE network with coverage across all 22 telecom circles.",
  },
  vodafone: {
    title: "Vodafone",
    description:
      "Vodafone Group Plc is a British multinational telecommunications company. Its registered office and global headquarters are in Newbury, Berkshire, England. It predominantly operates services in Asia, Africa, Europe, and Oceania.",
  },
};
const keys = Object.keys(TempData);

export const useDescription = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const setContent = useCallback((title = "airtel") => {
    setData(TempData[title]);
  }, []);

  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
  }, [data]);

  return { title, description, keys, setContent };
};
