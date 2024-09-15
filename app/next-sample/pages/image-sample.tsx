import { NextPage } from "next";
import Image from "next/image";
import BirdImage from "../public/images/animal_mimizuku.png";


const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>img タグで表示した場合</p>
      <img src="/images/animal_mimizuku.png" />
      <p>Image コンポーネントで表示した場合</p>
      <Image src={BirdImage} alt={""} />
    </div>
  )
}

export default ImageSample;