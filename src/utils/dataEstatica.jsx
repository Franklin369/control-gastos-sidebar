import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import {RiDashboard3Line} from "react-icons/ri"
import {TbPig} from "react-icons/tb"

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: v.iconoUser,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: v.iconoSettings,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: v.iconoCerrarSesion,
    tipo: "cerrarsesion",
  },
];

export const DataDesplegableTipo = [
  {
    text: "Categorias gastos",
    color: v.colorGastos,
    tipo: "g",
  },
  {
    text: "Categorias ingresos",
    color: v.colorIngresos,
    tipo: "i",
  },
];


//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Categorias",
    icon: <MdOutlineAnalytics />,
    to: "/categorias",
  },
  {
    label: "Movimientos",
    icon: <AiOutlineApartment />,
    to: "/movimientos",
  },
  {
    label: "Informes",
    icon: <MdOutlineAnalytics />,
    to: "/informes",
  },
  {
    label: "Dashboard",
    icon: <RiDashboard3Line />,
    to: "/dashboard",
  },
];
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },
  {
    label: "Acerca de",
    icon: <TbPig />,
    to: "/acercade",
  },
];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
   
  },
  {
    icono: "🌚",
    descripcion: "dark",
    
  },
];
