import React, { useState } from "react";
import Cus from "./Component/Cus.json";

const Bill = () => {
  const [data2, setdata] = useState([]);
  const [count, setc] = useState(1);
  const [qty, setqty] = useState();
  const [tt, settt] = useState(0);
  const [ft, setft] = useState(0)
  const [di, setd] = useState(0)

  const [n1, setn1] = useState()
  const [a1, seta1] = useState()
  const [m1, setm1] = useState()
  const [c1, setc1] = useState()
  const [mp, setmp] = useState(0)

  const q = (w) => {
    setqty(Number(w.target.value));
  };

  const p = (q) => {

    setft(Number(ft) + d[q.target.value].sp)
    setmp(Number(mp) + d[q.target.value].price)
    setd((Number(di)) + ((Number(d[q.target.value].price) - Number(d[q.target.value].sp))))
    data2.splice(q.target.value, 1, {
      name1: d[q.target.value].name,
      price1: d[q.target.value].price,
      sale: d[q.target.value].sp,
      count5: Number(data2[q.target.value].count5) + 1,
    })
    setc(count + 1);
  };
  const m = (q) => {
    setft(Number(ft) - d[q.target.value].sp)
    setmp(Number(mp) - d[q.target.value].price)
    setd((Number(di)) - ((Number(d[q.target.value].price) + Number(d[q.target.value].sp))))
    data2.splice(q.target.value, 1, {
      name1: d[q.target.value].name,
      price1: d[q.target.value].price,
      sale: d[q.target.value].sp,
      count5: Number(data2[q.target.value].count5) - 1,
    })
    setc(count - 1);
  };

  const clr = () => {
    setdata([])
  }


  const Save = () => {
    var id3 = document.getElementById("billprint")
    var c = window.open('', '', 'height=500, width=400');
    c.document.write('<html>');
    c.document.write("<body>");
    c.document.write(id3.innerHTML);
    c.document.write('</body></html>');

    c.document.close();
    c.print();


  }
  let d = [
    {
      name: "khadisakhr",
      price: 50,
      sp: 40,
      count4: 1
    },
    {
      name: "oil",
      price: 50,
      sp: 30,
      count4: 1
    },
    {
      name: "amond",
      price: 30,
      sp: 28,
      count4: 1
    },
    {
      name: "sakhr",
      price: 32,
      sp: 25,
      count4: 1
    },
    {
      name: "sunflower oil",
      price: 80,
      sp: 72,
      count4: 1
    },
    {
      name: "jam",
      price: 40,
      sp: 35,
      count4: 1
    },
  ];
  const total = (a, b) => {
    return (Number(a) * Number(b))
    // (Number(data.sale) + Number(data.count5))
  }
const wp=()=>{
  // window.print()
  alert("hello")
}
  const sel = (q) => {
    settt(Number(tt) + Number(count))
    setft(Number(ft) + d[q.target.value].sp)
    setmp(Number(mp) + d[q.target.value].price)
    setd((Number(di)) + ((Number(d[q.target.value].price) - Number(d[q.target.value].sp))))
    setdata([
      ...data2,
      {
        name1: d[q.target.value].name,
        price1: d[q.target.value].price,
        sale: d[q.target.value].sp,
        count5: d[q.target.value].count4,

      },
    ]);
    setqty(Number(q.target.value));
  };

var date= new Date()
  const AAAA = (q) => {

    setn1(Cus[q.target.value].name)
    setm1(Cus[q.target.value].mobile_number)
    seta1(Cus[q.target.value].address)
    setc1(Cus[q.target.value].credit)
  }
  return (
    <div className="parent">
      <div className="container">
        <select onChange={sel} name="" id="s" className="s">
          <option>select</option>
          {d.map((da, index) => (
            <option value={index}>
              <table>
                <tr>
                  <td className="qqq" >
                    {da.name}
                  </td>
                </tr>
              </table>
            </option>
          ))}
        </select>
        <button>+
        </button>
        <hr></hr>
        <table>
          <tr>
            <th className="qqq">
              <label htmlFor="">NO</label>
            </th>
            <th className="qqq">
              <label htmlFor="">Item Name</label>
            </th>
            <th className="qqq">
              <label htmlFor="" onChange={q}>
                Qty
              </label>
            </th>
            <th className="qqq">
              <label htmlFor="">MRP</label>
            </th>
            <th className="qqq">
              <label htmlFor="">Seal Price</label>
            </th>
            <th className="qqq">
              <label htmlFor="" value={qty}>
                Total
              </label>
            </th>
            <th className="qqq">
              <label htmlFor="">Action</label>
            </th>
          </tr>

          {data2.map((data, index) => (
            <tr className="qqq" value={index} >
              <td className="qqq">{index + 1}</td>
              <td className="qqq">{data.name1}</td>
              <td className="qqq">
                {" "}
                <button value={index} onClick={m}>-</button>
                {data.count5}
                <button value={index} onClick={p}>+</button>
              </td>
              <td className="qqq">{data.price1}</td>
              <td className="qqq">{data.sale}</td>
              <td className="qqq">{(Number(data.sale) * Number(data.count5))}</td>
              <td><button style={{height:"25px",width:"60px",borderRadius:"50px",backgroundColor:"violet"}}>edit</button><button style={{height:"25px",width:"60px",borderRadius:"50px",backgroundColor:"violet"}} onClick={clr}>delete</button></td>
              
            </tr>
          ))}
        </table>
      </div>
      <div className="p">
        <div className="cus">
          <h5>Customer Details</h5>
          <select id="s" className="s" onChange={AAAA}>
            {
              Cus.map((s, index) => (
                <option value={index}>{s.name}</option>
              ))
            }
          </select>
          <br />
          <br />
          <table>
            <tr>
              <td>Customer Name:{n1}</td>
            </tr>
            <tr>
              <td>Customer mobile:{m1}</td>
            </tr>
            <tr>
              <td>Customer Address:{a1}</td>
            </tr>
            <tr>
              <td>Customer Name:{c1}</td>
            </tr>
          </table>
          <table>
            <h5>Bill Date</h5>
            <tr>
             {date.toDateString()}
            </tr>
          </table>
        </div>
        <div className="pp">
          <table>
            <tr>
              <h5>Payment Details</h5>
            </tr>
            <select id="s" className="s">
              <option value=""></option>
              <option value="">Cash</option>
              <option value="">Online</option>
              <option value="">Net Banking</option>
              <option value="">GPay</option>
            </select>
            <table>
              <tr>
                <td>
                  {" "}
                  <h5>RS:</h5>
                </td>
                <td>
                  {" "}
                  <h5 id="mo">Reamining Amt: RS.0</h5>
                </td>
              </tr>
            </table>
          </table>
        </div>
        <div className="am">
          <table>
            <tr>
              <td>
                <h5>Bill Details</h5>
              </td>
            </tr>
          </table>
          <br />
          <h4 id="ta">Total Amount:{ft}</h4>
        </div>
        <div className="bu">
          <button id="bv1" onClick={Save}>Save Bill</button>
          <button id="bv2" onClick={clr}>Clear</button>
        </div>
      </div>
      <div className="f">
        <table>
          <tr>
            <td id="a">
              <button>history</button>{" "}
            </td>
            <td id="b">last bill inv.no:1907|amount:$ |</td>
            <td id="c">total qty:{tt}</td>
            <td id="d">total mrp:{mp}</td>
            <td id="e">total discount:{di}</td>
            <td id="f">total bill:{ft}</td>
          </tr>
        </table>
      </div>
      <div>
        <div className='kkkkk d-none' id='billprint'>
          <div className='kkkkk3'>
            <h2 style={{ textAlign: "center" }}>SAI MART</h2>
            <h6 style={{ textAlign: "center" }}>Vabdeshwari, Shingnapur Road, Phaltan</h6>
            <h5>GST NO: 278549ACD88</h5>
          </div>
          <table>
            <div className='kkkkk1 row'>
              <tr> <td>
                <div className='col-lg-3'>Bill no:1907</div>
              </td>
                <td ><div className='col-lg-9' style={{ marginLeft: "100px" }}>Date:{ date.toDateString()}</div></td>
              </tr>

              <div className='col-lg-12'>Customer Name:{n1}</div>
            </div>
          </table>
          <div style={{ marginLeft: "50px", marginTop: "20px" }}>
            <table id='dede' border={2}>
              <tr className='kkkkk2'>
                <td>SN.</td>
                <td>Product Name </td>
                <td>Qty</td>
                <td>MRP</td>
                <td>Rate</td>
                <td>Total</td>
              </tr>
              {data2.map((data, index) => (
                <tr className="qq" value={index} >
                  <td className="qq">{index + 1}</td>
                  <td className="qq">{data.name1}</td>
                  <td className="qq">

                    {data.count5}

                  </td>
                  <td className="qq">{data.price1}</td>
                  <td className="qq">{data.sale}</td>
                  <td className="qq">{(Number(data.sale) * Number(data.count5))}</td>
                </tr>
              ))}


            </table>
          </div>
          <div className='row'>
            <div className='col-lg-12 ghgh' style={{ textAlign: "center", marginTop: "10px" }}>Your Savings:{di}</div>
            <div className='col-lg-6 ghgh' style={{ textAlign: "center", marginTop: "10px" }}>Total Qty:{tt}</div>
            <div className='col-lg-6 ghgh' style={{ textAlign: "center", marginTop: "10px" }}>Total Bill:{ft}</div>
            <div className='col-lg-12 ghgh' style={{ textAlign: "center", marginTop: "10px" }}>Thank You!</div>
            <table>
              <tr>
                <td><div className='col-lg-6 ghgh' style={{ textAlign: "center", marginTop: "10px",marginLeft:"40px",marginRight:"180px",backgroundColor:"red"}}><button onClick={wp}>Print</button></div> </td>
                <td><div className='col-lg-6 ghgh mb-3' style={{ textAlign: "center", marginTop: "10px"}}><button>Close</button></div>
                </td>
              </tr></table></div>
        </div>


      </div>
    </div>

  );
};

export default Bill;
