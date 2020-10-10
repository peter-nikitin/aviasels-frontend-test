import React, { FunctionComponent, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

import Filter from "./Filter";
import Tabs from "./Tabs";
import TicketList from "./TicketList";

import { FilterType, TicketType, SortingType } from "../data/types.d";

const useStyle = createUseStyles({
  tickets: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  ticketsList: {
    width: 502,
  },
});

interface TicketsProps {
  tickets: TicketType[];
  handleFilterChange: (newFilter: string) => void;
  selectedFilters: FilterType[];
  allFilters: FilterType[];
  sorting: string;
  setSorting: React.Dispatch<React.SetStateAction<SortingType>>;
}

const Tickets: FunctionComponent<TicketsProps> = ({
  tickets,
  handleFilterChange,
  selectedFilters,
  allFilters,
  sorting,
  setSorting,
}: TicketsProps) => {
  const style = useStyle();

  return (
    <div className={style.tickets}>
      <Filter
        handleFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
        filtersArray={allFilters}
      />
      <div className={style.ticketsList}>
        <Tabs selectedTab={sorting} handleTabChange={setSorting} />

        <TicketList ticketsArray={tickets} />
      </div>
    </div>
  );
};

export default Tickets;
