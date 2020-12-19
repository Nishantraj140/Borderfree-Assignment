import './App.css';
import Border from './Border';

// function App() {
//   var data = [
//     {
//       "Month":"2009-02",
//       "Count":100
//     }
//   ]
//   const[load, SetLoad] = useState()

//   SetLoad(false)

//   axios.get(`/queryfunction`)
//   .then(function (response) {
//     console.log(response.data.body);
//     data = response.data.body
//     data = data.json()
//     SetLoad(true)
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   setTimeout(function () {
//     if (load === false) {
//         alert('VIDEO HAS STOPPED');
//     }
// }, 5000);

//   return (
//     <div className="App">
//       <LineChart width={730} height={250} data={data}
//     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="Month" />
//     <YAxis />
//     <Tooltip />
//     <Line type="monotone" dataKey="Count" stroke="#8884d8" />
//   </LineChart>
//     </div>
//   );
// }

// export default App;

function App() {

  return (
    <div className="App">
    <Border></Border>
    </div>
  );
}

export default App;