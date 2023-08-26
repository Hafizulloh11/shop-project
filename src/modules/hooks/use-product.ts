import { useEffect, useState } from "react";
import { Api, Types } from "..";
import { notifications } from "@mantine/notifications";


export const useProduct = (id: number) => {
 const [state, setState] = useState<Types.IQuery.Product>({isLoading: true, product: {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
   rate: 0,
   count: 0
  }
 }});

 useEffect(() => {
  const request = async () => {
   try {
    const {data: product} = await Api.Products.Single(id);

   setState({product, isLoading: false});
   } catch (err: any) {
    notifications.show({ message: err?.message, color: 'red' });
    setState({product: {
     id: 0,
     title: "",
     price: 0,
     description: "",
     category: "",
     image: "",
     rating: {
      rate: 0,
      count: 0
     }
    }, isLoading: false});
   }
  }
  request();
 })
 return state;
}