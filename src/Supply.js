import React, { useState } from "react";
import MaterialTable from 'material-table';
import {
  createMuiTheme
} from '@material-ui/core'
import './App.css';

import { supplyData } from "./data";




function Supply() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function rowStyle(rowData) {
   return rowData.tableData.id % 2 === 0
     ? {
         color: "black",
         padding: 0.5,
         height: 3,
         fontsize: 10,
         backgroundColor: "#EEEE"
       }
     : {
         color: "black",
         padding: 0.5,
         height: 3,
         fontsize: 10,
         backgroundColor: "#fff9e6"
       };
     }

     const columns = [
    { title: "App Bundle", field: "app_bundle" },
    { title: "Name", field: "name" },
    { title: "Category", field: "category"},
    { title: "Premium", field: "premium" },
    { title: "Interstitial", field: "interstitial" }
  ];

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#4caf50"
      },
      secondary: {
        main: "#ff9100"
      }
    },
    typography: {
      fontSize: 16
    }
  });

    const [data, setData] = useState(supplyData);

    const options = {
      toolbar: false,
      draggable: true,
      header: true,
      grouping: false,
      sorting: true,
      columnsButton: true,
      addRowPosition: "first",
      paging: false,
      showFirstLastPageButtons: false,
      showTitle: false,
      padding: "dense",
      filtering: false,
      search: false,
      selection: false,

      cellStyle: { padding: "0.3em", fontSize: 12 },
      headerStyle: { padding: "0.3em", fontSize: 16, position: "sticky" },
      root: {
        "&:nth-child(odd)": {
          backgroundColor: "#fff9e6" //theme.palette.background.default,
        },
        color: "#eee",
        padding: 0.5,
        height: 3,
        hover: true
      },

      rowStyle: rowStyle
    };


  return (
    <MaterialTable
    title="Mobile In App"
    data={data}
    setData={setData}
    columns={columns}
    options={options}
    />
  )
}


export default Supply;
