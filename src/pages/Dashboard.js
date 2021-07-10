import React, { useEffect } from "react";
import { AppHeader } from "../components/app-header/app-header";
import { Descriptor } from "../components/descriptor/descriptor";
import { Sidebar } from "../components/sidebar/sidebar";
import { DescriptionContext } from "../context/description-context";
import { useDescription } from "../hooks/description-hook";

export const Dashboard = () => {
  const { title, description, data, setContent } = useDescription();
  useEffect(() => {
    setContent();
  }, []);

  return (
    <React.Fragment>
      <DescriptionContext.Provider
        value={{
          data: data,
          title: title,
          description: description,
          setContent: setContent,
        }}
      >
        <AppHeader />
        <Sidebar />
        <Descriptor />
      </DescriptionContext.Provider>
    </React.Fragment>
  );
};
