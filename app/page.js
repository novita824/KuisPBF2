'use client';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import BanksCreate from './pages/banks/Create';
import BanksEdit from './pages/banks/Edit';
import BanksIndex from './pages/banks/Index';
import BrandsCreate from './pages/brands/Create';
import BrandsEdit from './pages/brands/Edit';
import BrandsIndex from './pages/brands/Index';
import CategorysIndex from './pages/categories';
import CategoryCreate from './pages/categories/Create';
import CategoryEdit from './pages/categories/Edit';
import VehicleCreate from './pages/Barang/Create';
import VehicleEdit from './pages/Barang/Edit';
import VechicleIndex from './pages/Barang/Index';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

export default function Home() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Barang" element={<VechicleIndex/>} />
        <Route path="/Barang/create" element={<VehicleCreate/>} />
        <Route path="/Barang/edit/:id" element={<VehicleEdit/>} />
        <Route path="/brands" element={<BrandsIndex/>} />
        <Route path="/brands/create" element={<BrandsCreate/>} />
        <Route path="/brands/edit/:id" element={<BrandsEdit/>} />
        <Route path="/banks" element={<BanksIndex/>} />
        <Route path="/banks/create" element={<BanksCreate/>} />
        <Route path="/banks/edit/:id" element={<BanksEdit/>} />
        <Route path="/category" element={<CategorysIndex/>} />
        <Route path="/category/create" element={<CategoryCreate/>} />
        <Route path="/category/edit/:id" element={<CategoryEdit/>} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}
