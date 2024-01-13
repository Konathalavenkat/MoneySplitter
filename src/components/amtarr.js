import { useEffect, useState } from "react";

function Ex(props){
    const [arr, setArr] = useState([])
    const [names, setNames] = useState([])
    const [N,setN]=useState(0);
    const [showtable,setshowtable]=useState(false);
    useEffect(()=>{
        const n=Number(props.n);
        setN(n);
        const name=Array(n).fill("");
        const splits = [];
        for (let i = 0; i < n; i++) {
            splits.push(new Array(n).fill(0));
        }
        setArr(splits);
        setNames(name);
    },0);
    const setamount=(event)=>{
        const splited_amount=(event.target.value)/N;
        const idx=event.target.id;
        for(let i=0;i<N;i++){
            arr[i][idx]=splited_amount;
        }
        console.log(arr);
    }
    const setname=(event)=>{
        const idx=event.target.id;
        names[idx]=event.target.value;
        console.log(names);
    }
    const getinput=()=>{
        return names.map((val,idx)=>{
            return <div className="p-5 bg-blue-500">
                <input type="text" id={idx} onChange={setname} placeholder={`Enter the name of Member ${idx+1}`}/>
                <br/>
                <input type="number" id={idx} onChange={setamount} placeholder="enter money spent" /> 
            </div>
        })
    }
    const splitmoney=()=>{
        const n=arr.length;
        for(var i=0;i<n;i++){
          arr[i][i]=0;
          for(var j=i+1;j<n;j++){
            if(arr[i][j]>arr[j][i]){
              arr[i][j]=arr[i][j]-arr[j][i];
              arr[j][i]=0;
            }
            else{
              arr[j][i]=arr[j][i]-arr[i][j];
              arr[i][j]=0;
            }
          }
        }
        console.log(arr);
        setshowtable(true);
      }
      const getnames=()=>{
        return names.map((val)=>{return <th>{val}</th>})
      }
      const gettable=()=>{
        return arr.map((val,idx)=>{return <tr><th>{names[idx]}</th>{getindividualamount(val)}</tr>})
      }
      const getindividualamount=(arr)=>{
        return arr.map((amount)=>{return <td>{amount}</td>})
    }   
    return (
        <>
            {getinput()}
            <button onClick={splitmoney}>split</button>
            {showtable && <>
                <table border={'1px'}>
                    <tr>
                        <th>-------</th>
                        {getnames()}
                    </tr>
                    {gettable()}
                </table>
            </>}
        </>
    )



}
export default Ex;