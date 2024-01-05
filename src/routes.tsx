import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.tsx";
import List from "./pages/List/List.tsx";
import ListMonthly from "./pages/List/ListMonthly.tsx";
import ListYearly from "./pages/List/ListYearly.tsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/lists">
        <Route path="/lists/weekly" element={<List />} />
        <Route path="/lists/monthly" element={<ListMonthly />} />
        <Route path="/lists/yearly" element={<ListYearly />} />
      </Route>
    </Routes>
  );
}
