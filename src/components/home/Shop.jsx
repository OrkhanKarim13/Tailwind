import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import star from "../../assets/images/iwwa_star.svg";


const Shop = () => {
const images =[
  {id:0, value:"https://s3-alpha-sig.figma.com/img/e400/24e7/2589f2f903a77015fea35ee572d1d6f3?Expires=1693785600&Signature=Q-U2ikcWEk3ogLasK0QwtRI1uD2aGUCc4lcRk3A1lFkOtdNO3vxV4wRV-HCAcKnFQB9xzcLhlDFN2WYyhvbKPmyFufsCuK73kAr49oVM8DawnvVHIDuenHsWprEfUUAGcUMhue4mNMTWvEnjtI~IB0Z9GZDoobkNOIVDnrfPUSLXLtiOXlSDkpBzvBlWZjs6VbmjvD0WmQFbQpyo6-r7R5PKtUL0miNJPPolv7B-s0EqtqIDz2fia5uquVm6qYenp0ul0GenH1TAhlZiZHQeAZKDi3oOd~oTPpXoDEvY4LjdTpfd2pAqXAdm8tGDUcTSiKU9JELSQbH1kiqKyI7gtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
  {id:1, value:"https://s3-alpha-sig.figma.com/img/e70f/0940/270a0c767478acbef3695bb88d45f83c?Expires=1693785600&Signature=VFHnGiIMe7hei6V9aT88Vlpp48Wpsnxpb75pTmx~1BhJAsLFvKznwUJQXtZ~MYrE9IOWZHr9aAhmffMQXFE1v--yP9QzRAic28Aqpr2T4mymx2niTQsaqZBMmWETTNq8VKcUvBVlkNFZR-5jWcK07-ZUxHnlLcPXfV-fuxFR~r7m3pGJuPGsgXXTfmr1p26AJUqVzpGqzcjk~~KpNjevbekMqOIsDJxlLqg2RwOsI7IODeswwYADQ7ArbfTEr25IGjtHfpSkNhoawRuUu5xQHbs5CfmiqmNeLYX6w3Toy-elgDNlBWeDUlkFpFiAdx-ViGB5L89kaRZjvmB-d~7tQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
  {id:2, value:"https://s3-alpha-sig.figma.com/img/b6d0/de9b/7cddd97379b7d7a6dfa736c4c2b25a8e?Expires=1693785600&Signature=SaQrdoKks-pgcWZX91pdBstO-8FcagpNPGDYVJSmIK2MqDANl9yi4ZtMpyBkQxg3MC7AYg97Fy2kWDT6~pLEZiLOYyjtTDhKHfzaYdO2HYLjSuMbZKKdY5Lp1AYsqRLjK-8VJeR3f7MDNH8l5G0webL~8YaIv7lixmD878jjJQH3M1FDJBMfxwKL7zxqS9Skr6i9ygOr6ycdtBshKUvcVmEXtp9Ra6t4ET0AG4No0QVnfddLwOIy3w2d8Bm4HoRg~ujc4nzR1xC~zqDPQ3ZKvvHQAtuMLiFasJtfPj8zOILLHrIUXd9UbalfUxBrgZnSXxWuhx~r1yCQspADRtefeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
];

const [ sliderData, setSliderData]= useState(images[0])
const handleClick =(index)=>{
  console.log(index);
  const slider=images[index];
  setSliderData(slider)
}

  
  return (
    <section className="flex justify-center items-center w-full py-[50px] bg-gray-200">
      <div className="flex justify-center items-center  flex-col  w-10/12">
        <h1 className="flex justify-start items-center bg-transparent w-full h-full text-black-700 text-[96px] font-medium">
          Products
        </h1>

        <div className="w-full h-[80px]  bg-white ">
          <div className="flex justify-center p-5">
            <img className=" w-[100px]" src={logo} alt="logo" />
          </div>

          <div className="flex justify-between bg-white w-full">
            <div className="flex  bg-white w-full">
              <div className="flex flex-col justify-center bg-white; w-1/10 px-5">
                <div className="rounded-full  py-2 w-[100px]">
                  {
                    images.map((data,i)=> <img key={data.id} className="rounded-full  py-2 w-[100px]" src={data.value} onClick={()=>handleClick(i)} alt="img"/>)
                  }
                </div>
                
              </div>
              <div className="flex flex-col items-center justify-center bg-white; w-1/3">
                <img src={sliderData.value} className=" w-[300px]" alt="productimg4" />
              </div>
              <div className="flex flex-col items-center justify-center bg-white; w-1/2">
                <div className="flex flex-col gap-5">
                  <h4 className="text-[40px]">OTTO</h4>
                  <p className="text-[20px]">WEIMAR - 40MM</p>
                  <div className="flex items-center gap-3 py-5  ">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <div className="flex text-black-400 items-center gap-5">
                    <p>price:</p> <span className=" text-3xl">2.299.000 đ</span>
                  </div>
                  <div className=" w-[300px] text-[14px] leading-tight">
                    Thiết kế Bauhaus tối giản của Weimar Otto được Curnon thể
                    hiện trên nền của sự kết hợp màu sắc tinh tế và hiện đại.
                    Cặp dây da màu Sand cùng chi tiết kim xanh chính là điểm
                    nhấn giúp bạn kết hợp hoàn hảo với bất kì bộ trang phục nào.
                  </div>
                  <div className="flex flex-col gap-3">
                  <button className="w-full bg-black p-3 text-white">
                      THÊM VÀO GIỎ
                    </button>
                    <button className="w-full bg-transparent p-3 border">
                      MUA NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
