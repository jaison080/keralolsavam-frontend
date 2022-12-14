import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DataGrid, selectedGridRowsCountSelector } from "@mui/x-data-grid";
import { Loader, Navbar } from "../../../components";
import CustomTitle from "../../../utils/customTitle";
import styles from "../../../styles/official/dashboard/Dashboard.module.css";
import EventDetail from "../../../components/EventDetail/EventDetail";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../utils/firebase";
import Footer from "../../../components/Footer/Footer";
import { CircularProgress, Typography } from "@mui/material";
import { ClipLoader } from "react-spinners";

const columns = [
  {
    field: "participant_name",
    headerName: "Name",
    width: 400,
    editable: false,
  },
  {
    field: "serial_no",
    headerName: "Chest No:",
    type: "number",
    editable: true,
  },
  { field: "score", headerName: "Score", type: "number", editable: true },
];

// const rows = [
//   {
//     id: 1,
//     name: "hello",
//     age: 25,
//     dateCreated: new Date(),
//     lastLogin: new Date(),
//   },
//   {
//     id: 2,
//     name: "hello2",
//     age: 36,
//     dateCreated: new Date(),
//     lastLogin: new Date(),
//   },
// ];

function MyDataGrid() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const { authToken } = useContext(AuthContext);

  const router = useRouter();
  const { id } = router.query;

  const getParticipants = async () => {
    if (!authToken) return;
    //console.log(id);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/officer/participants/${id}`, {
        headers: {
          "x-auth-token": authToken,
        },
      })
      .then((res) => {
        //console.log(res.data);
        res.data.forEach((user, index) => {
          user.id = user._id;
          delete user._id;
        });
        setRows(res.data);
      });
  };

  useEffect(() => {
    getParticipants();
  }, [authToken, id]);

  const gridRef = React.useRef(null);
  const onUpdate = (newData, oldData) => {
    if (JSON.stringify(newData) != JSON.stringify(oldData)) {
      setData([newData, ...data]);
      //console.log(newData, oldData);
    }
  };
  function handleSave() {
    setLoading(true);
    // Get the updated data

    // const updatedData = gridRef.current.getRows();
    // console.log(updatedData);

    // Send the updated data to the server using axios
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API_URL}/officer/participants/${id}`,
        data,
        {
          headers: {
            "x-auth-token": authToken,
          },
        }
      )
      .then((response) => {
        // Handle success
        //console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        // Handle error
      });
  }

  useEffect(() => {
    //console.log(data);
  }, [data]);

  return (
    <div>
      <div className={styles.heading_1}>
        <Typography variant="h6" gutterBottom color="error">
          * Edit the required details and then press Enter or Click(Tap) on another row and the press the Save Button to save the changes.
        </Typography>
      </div>
      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          // onProcessRowUpdateError={(params) => console.log(params)}
          processRowUpdate={(newData, oldData) => {
            onUpdate(newData, oldData);
            return newData;
          }}
          autoHeight
          editMode="row"
          experimentalFeatures={{ newEditingApi: true }}
        />
        <div onClick={handleSave} className={styles.register_btn_1}>
          {loading ? <ClipLoader color="#ffffff" /> : "Save"}
        </div>
      </div>
    </div>
  );
}

function Event() {
  const auth = getAuth(app);
  const router = useRouter();
  const [status, setStatus] = useState(true);
  function handleStatus() {
    setStatus(true);
  }
  function handleParticipants() {
    setStatus(false);
  }
  async function signOutOfGoogle() {
    signOut(auth)
      .then(() => {
        router.push("/official");
      })
      .catch((error) => {});
  }
  return (
    <>
      <CustomTitle title="Official Dashboard" />
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>Official Dashboard</div>
          <div
            className={styles.register_btn}
            onClick={() => {
              signOutOfGoogle();
            }}
          >
            Logout
          </div>
        </div>
        <div className={styles.tabs_wrapper}>
          <div className={styles.tabs}>
            <div
              className={status ? styles.sub_heading_1 : styles.sub_heading}
              onClick={() => {
                handleStatus();
              }}
            >
              Status
            </div>
            <div
              className={status ? styles.sub_heading : styles.sub_heading_1}
              onClick={() => {
                handleParticipants();
              }}
            >
              Participants
            </div>
          </div>
        </div>
        <div>{status ? <EventDetail /> : <MyDataGrid />}</div>
      </div>
      <Footer />
    </>
  );
}

export default Event;
