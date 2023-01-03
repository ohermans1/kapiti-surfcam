import { useEffect, useState } from "react";
import "./Tides.scss";

const Tides = () => {
  // const [tides, setTides] = useState();
  const [tideStatus, setTideStatus] = useState("Fetching Tide Data");
  const [nextTideHeight, setNextTideHeight] = useState("Fetching Tide Data");
  const [nextTideTime, setNextTideTime] = useState<Date>();
  // let nextTide: any = "Fetching Tide Data";

  const computeTideStatus = async (data: string) => {
    let jsonData = await JSON.parse(data);
    console.log("🚀 ~ file: Tides.tsx:12 ~ computeTideStatus ~ jsonData", jsonData);
    const currentTime = new Date().getTime();
    let nextTideIndex: any = null;
    jsonData.values.forEach((value: any, index: number) => {
      if (nextTideIndex === null) {
        const time = new Date(value.time);
        const timeNumeric = time.getTime();
        if (timeNumeric >= currentTime) {

          setNextTideHeight(value.value);
          setNextTideTime(time);
          nextTideIndex = index;
        }
      }
    });
    if (nextTideHeight > jsonData.values[nextTideIndex - 1].value) {
      setTideStatus("The tide is coming in");
    } else {
      setTideStatus("The tide is going out");
    }
  };

  const getTides = () => {
    const url = "https://api.niwa.co.nz/tides/data?lat=-40.8972&long=175.1479&numberOfDays=2";
    const options = {
      method: "GET",
      headers: {
        "x-apikey": "DGZoo0JxdfFJtLpivigo5oLSXmLX1DWa",
        Accept: "application/json",
      },
    };
    fetch(url, options)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        return response.text().then(err => {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            errorMessage: err,
          });
        });
      })
      .then(data => {
        computeTideStatus(data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getTides();
  }, []);

  console.log(nextTideTime);

  return (
    <div className="tides">
      <h2 className="tides__header">Tides</h2>
      <p className="tides__content">{tideStatus}</p>
      <hr className="tides__content" />
      <p className="tides__content">Change of tide: {nextTideTime?.toTimeString().slice(0, -40)}</p>
    </div>
  );
};

export default Tides;
