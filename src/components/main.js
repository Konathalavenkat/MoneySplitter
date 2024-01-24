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
    const changefromChild=()=>{
        setshowmoneyinput(!showmoneyinput)
        document.getElementById('numinput').style.display='block';
    }
    const getchilddata=(arr,names)=>{
        setArr(arr);
        setNames(names);
    }
    return (
        <>
                <div id='numinput' className='w-full flex justify-center'>
                    <div className='flex justify-center'>
                        <input type="number" id='num' class="bg-dark-700 rounded py-2 px-auto" placeholder="Enter No. of friends"></input>
                        <button className="text-bold text-white bg-green-700 rounded py-2 px-3 hover:bg-green-500 " onClick={fixn}>
                        Go!
                        </button>
                    </div>
                </div>
                {showmoneyinput && <Ex changefromChild={changefromChild} n={N}/>}

        </>
    )
}

export default Main
