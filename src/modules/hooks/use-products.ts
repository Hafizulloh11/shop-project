import { useEffect, useState } from "react";
import { Api, Types } from "..";
import { notifications } from "@mantine/notifications";


export const useProducts = () => {
 const [state, setState] = useState<Types.IQuery.Products>({isLoading: true, products: []});

 useEffect(() => {
  const request = async () => {
   try {
    const {data: products} = await Api.Products.List();

   setState({products, isLoading: false});
   } catch (err: any) {
    notifications.show({ message: err?.message, color: 'red' });
    setState({products: [], isLoading: false});
   }
  }
  request();
 }, [])
 return state;
}