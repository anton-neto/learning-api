'use client'
import Model from "@/app/Model";
import View from "@/app/View";
import Presenter from "./presenter";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const presenter = new Presenter(
    new Model(),
    useSearchParams()
  )
  const data = presenter.execute();

  const pageStyle = {
    backgroundColor: 'pink',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  // return (
  //   <div style={pageStyle}>
  //     <div>
  //       {data.map((item, index) => (
  //         <View key={index} name={item.name} rgm={item.rgm} job={item.job} />
  //       ))}
  //     </div>
  //   </div>
  // );
//}

  return (
    <View 
      name={data.name}
      rgm={data.rgm}
      job={data.job}
    />
  );
}

  

