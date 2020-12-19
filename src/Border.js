import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import axios from "axios";

export class Border extends Component {
    constructor(props){
        super(props);
        this.state = {
          currentName : '',
          dataList : [{"Month":"2010-04","Count":100}]
        }  
      }
      componentDidMount(){
        axios.get(`/queryfunction`)
        .then((response) => {
          console.log(response.data.body);
            console.log(JSON.parse(response.data.body)["datarows"]);
            this.setState({
                dataList : JSON.parse(response.data.body)["datarows"]
          })
          })
          .catch((e) => 
          {
            console.error(e);
          }); 
      }
    render() {
        return (
            <div>
              <LineChart width={1200} height={400} data={this.state.dataList}
            margin={{ top: 50, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Count" stroke="#8884d8" />
          </LineChart>
            </div>
          );
      }
}
export default Border;

