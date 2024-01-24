import { useEffect, useState } from "react";

function Ex(props){
    const [arr, setArr] = useState([])
    const [names, setNames] = useState([])
    const [amounts,setamounts]=useState([]);
    const [N,setN]=useState(0);
    const [showtable,setshowtable]=useState(false);
    const [flag,setflag]=useState([]);
    useEffect(()=>{
        const n=Number(props.n);
        setN(n);
        const amountss=Array(n).fill(0);
        const name=Array(n).fill("");
        const flags=Array(n).fill(true);
        for(let curr=0;curr<n;curr++){
            name[curr]="Member"+(curr+1);
        }
        const splits = [];
        for (let i = 0; i < n; i++) {
            splits.push(new Array(n).fill(0));
        }
        setflag(flags);
        setArr(splits);
        setNames(name);
        setamounts(amountss);
    },0);
    const setamount=(event)=>{
        setshowtable(false);
        const idx=event.target.id;
        const spanid="amount"+idx;
        if(event.target.value>=0){
            flag[idx]=true;
            document.getElementById(idx).style.borderColor="black";
            document.getElementById(spanid).innerHTML="";
            amounts[idx]=event.target.value;
            console.log(arr);
        }
        else{
            flag[idx]=false
            document.getElementById(idx).style.borderColor="red";
            document.getElementById(spanid).innerHTML="Amount cannot be negative"
            document.getElementById(spanid).style.color="red";
        }
        
    }
    const setname=(event)=>{
      setshowtable(false);
        const idx=event.target.id;
        names[idx]=event.target.value;
        console.log(names);
    }
    const getinput = () => {
        return names.map((val, idx) => {
          return (
            <div className="container-lg px-3 w-full border">
              <div className="flex-col ">
                <input
                    type="text"
                    className="px-2 w-full rounded m-3 text-center"
                    id={idx}
                    onChange={setname}
                    placeholder={`Enter the name of Member ${idx + 1}`}
                />
                <input
                  type="number"
                  className="px-2 w-full rounded m-3 text-center"
                  id={idx}
                  onChange={setamount}
                  placeholder="Enter money spent"
                  min="0"
                  required
                />
                <span id={"amount"+idx} className="text-center"></span>
              </div>
            </div>
          );
        });
      };
      
    const splitmoney=()=>{
        const n=arr.length;
        var f=true;
        for(let x=0;x<N;x++){
          const splitted_amount=amounts[x]/N;
          for(let y=0;y<N;y++){
            arr[y][x]=splitted_amount;
          }
        }
        for(let ii=0;ii<n;ii++){
            if(!flag[ii]){
                f=false;
            }
        }
        if(f){
            
            for(var i=0;i<n;i++){
                arr[i][i]=0;
                for(var j=i+1;j<n;j++){
                  if(arr[i][j]>arr[j][i]){
                    arr[i][j]=(arr[i][j]-arr[j][i]).toFixed(2);
                    arr[j][i]=0;
                  }
                  else{
                    arr[j][i]=(arr[j][i]-arr[i][j]).toFixed(2);
                    arr[i][j]=0;
                  }
                }
              }
              console.log(arr);
              setshowtable(true);
              document.getElementById("inputfield").display = "None"
        }

      }
      const getnames=()=>{
        return names.map((val)=>{return <th>{val}</th>})
      }
      const gettable=()=>{
        return arr.map((val,idx)=>{return <tr><th className="px-2">{names[idx]}</th>{getindividualamount(val)}</tr>})
      }
      const getindividualamount=(arr)=>{
        return arr.map((amount)=>{return <td className="text-center">{amount}</td>})
    }   
    return (
        <>
            <div className="flex flex-col justify-center" id="inputfield">
                <div className="flex-row">{getinput()}</div>
                <div className="flex justify-center">
                    <button className="text-bold text-white bg-red-700 rounded py-2 px-3 mx-2 hover:bg-red-500 " onClick={props.changefromChild}>Go Back</button>
                    <button className="text-bold text-white bg-green-700 rounded py-2 px-3 mx-2 hover:bg-green-500 " onClick={splitmoney}>split</button>
                </div>

            {showtable && <>
                <table className=" mt-10 min-w-full divide-y  divide-gray-800" border={'1px'}>
                    <tr>
                        <th>From/To</th>
                        {getnames()}
                    </tr>
                    {gettable()}
                </table>
            </>}
            </div>
        </>
    )



}
export default Ex;