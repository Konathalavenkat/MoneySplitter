import {useState, useEffect} from 'react'
import Ex from './amtarr';
function Main() {
    const [N, setN] = useState(0)
    const [arr, setArr] = useState([])
    const [names, setNames] = useState([])
    const [showmoneyinput,setshowmoneyinput]=useState(false);
    const fixn=()=>{
        setN(Number(document.getElementById('num').value));
        document.getElementById('numinput').style.display='none';
        setshowmoneyinput(true)
        console.log(N);
    }
    const getchilddata=(arr,names)=>{
        setArr(arr);
        setNames(names);
    }
    return (
        <>
                <div id='numinput'>
                    <input type="number" id='num' class="bg-dark-700 py-2" placeholder="Enter No. of friends"></input>
                <button className="text-bold text-white bg-green-700 rounded py-2 px-3 hover:bg-green-500" onClick={fixn}>
                    S3t
                </button>
                </div>
                {showmoneyinput && <Ex n={N}/>}

        </>
    )
}

export default Main
