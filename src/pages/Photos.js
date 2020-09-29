import React, { useContext } from "react";

import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos() {
  const { photos } = useContext(Context);
  
  const images = photos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  return <main className="photos">{images}</main>;
}

export default Photos;
