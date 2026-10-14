"use client";
import {useState} from "react";
export default function Pledge(){
 const [f,setF]=useState({name:"",email:"",msg:""});const [sent,setSent]=useState(false);
 const on=k=>e=>setF({...f,[k]:e.target.value});
 const submit=e=>{e.preventDefault();
  window.location.href=`mailto:info@isgofarms.com?subject=${encodeURIComponent("Enquiry from "+f.name)}&body=${encodeURIComponent(f.msg+"\n\n"+f.name+" <"+f.email+">")}`;setSent(true)};
 const c="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-leaf";
 return(<form onSubmit={submit} className="space-y-3">
  <input required className={c} placeholder="Your name" value={f.name} onChange={on("name")}/>
  <input required type="email" className={c} placeholder="Email" value={f.email} onChange={on("email")}/>
  <textarea required rows={4} className={c} placeholder="How would you like to partner or support?" value={f.msg} onChange={on("msg")}/>
  <button className="w-full rounded-lg bg-sun py-3 font-bold text-leaf-dark hover:brightness-95">Send message</button>
  {sent&&<p className="text-sm text-leaf">Opening your email app… thank you!</p>}
 </form>)}
