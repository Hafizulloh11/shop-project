import {Flex} from "@mantine/core";
import { IconShoppingBagPlus } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";
interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
 const navigate = useNavigate();
 return (
   <Flex bg="#eee" p={10} align="center" justify="space-between">
   <h1 style={{margin: "0"}}>Products</h1>
   <IconShoppingBagPlus onClick={() => navigate("/cart")}/>
   </Flex>
 )
}

export default Navbar;