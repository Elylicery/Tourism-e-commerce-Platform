import React from "react";
import { useParams } from "react-router-dom";

export const DetailPage:React.FC = () =>{
  let params = useParams();
  return (<h1>detailpage,ID:{params.touristRouteId}</h1>);
}
