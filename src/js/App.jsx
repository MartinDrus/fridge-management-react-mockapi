import '../css/App.css'

import useFetch from './components/service/useFetch'

function App() {
  const { response, createData, updateData, deleteData } = useFetch();

  console.log("🚀 ~ file: App.jsx:7 ~ App ~ data", response.data)

  // if (response.loading) return <h1> LOADING... </h1>;

  // if(response.error) console.log(error);

  let newProducts =  {
    "name": "AAAAAAAAAAAAAAAAAAAAAAA",
    "stock": 12,
    "volume": 24,
    "categoryId": 98,
    "expDate": 1672998690,
    "hasIcon": false,
    "isWanted": false,
    "shoppingCart": [],
    "id": "1"
   }


  return (
    <div className="App">
      <h1>{"hallo"}</h1>
      <button onClick={() => createData("fridgeproducts",newProducts)}>create</button>
      <button onClick={() => deleteData("fridgeproducts",90)}>delete</button>

    </div>
  )
}

export default App
