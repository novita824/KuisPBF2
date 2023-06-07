import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { app, db } from "../firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

const Dashboard = () => {
  // const [banks, setBanks] = React.useState([]);
  // const [brands, setBrand] = React.useState([]);
  // const [category, setCategory] = React.useState([]);
  // const [barang, setVehicle] = React.useState([]);

  // React.useEffect(() => {
  //   const bnk = onSnapshot(collection(db, "banks"), (snapshot) => {
  //     setBanks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });

  //   const brn = onSnapshot(collection(db, "brands"), (snapshot) => {
  //     setBrand(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });

  //   const ctg = onSnapshot(collection(db, "category"), (snapshot) => {
  //     setCategory(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });

  //   const vhc = onSnapshot(collection(db, "barang"), (snapshot) => {
  //     setVehicle(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });
  // }, []);
  return (
    <>
      <div className="max-h-screen ">
        <h1 className="my-5 text-5xl font-bold text-center text-white">QITATRONIK STORE</h1>
      </div>
      <div className="hero mt-36 rounded-xl bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">Deskripsi Toko</h1>
            <p className="py-5">
              Qitatronik Store adalah sebuah toko elektronik terpercaya dalam menyediakan berbagai macam perangkat elektronik dan komponen di dalamnya. Toko ini menawarkan berbagai produk elektronik dari merek-merek terkemuka dan berkualitas tinggi.
            </p>
            <p className="py-1">
              Toko ini menawarkan beragam jenis produk elektronik, seperti telepon seluler, laptop, tablet, kamera digital, televisi, peralatan audio, perangkat rumah pintar, peralatan elektronik rumah tangga, dan aksesori elektronik lainnya.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="max-h-screen ">
        <h1 className="my-6 text-5xl font-bold text-center text-white">KUIS 2 RIZQITA</h1>
        <p className='text-white text-center text-2xl'>Qitatronik Store adalah sebuah toko elektronik terpercaya dalam menyediakan berbagai macam perangkat elektronik dan komponen di dalamnya. Toko ini menawarkan berbagai produk elektronik dari merek-merek terkemuka dan berkualitas tinggi. </p>
        <p className='text-white text-center text-2xl'>Toko ini menawarkan beragam jenis produk elektronik, seperti telepon seluler, laptop, tablet, kamera digital, televisi, peralatan audio, perangkat rumah pintar, peralatan elektronik rumah tangga, dan aksesori elektronik lainnya. </p>
      
      </div> */}
    </>
  )
}

export default Dashboard