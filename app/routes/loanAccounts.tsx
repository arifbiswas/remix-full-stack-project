import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "কিস্তির হিসাব" },
    {
      property: "মমতাজ এন্টারপ্রাইজ সকল তথ্য",
      content: "মমতাজ এন্টারপ্রাইজ সকল তথ্য",
    },
    {
      name: "মমতাজ এন্টারপ্রাইজ সকল তথ্য",
      content: "মমতাজ এন্টারপ্রাইজ সকল তথ্য",
    },
  ];
};

export default function loanAccounts() {
  return (
    <div className=" ">
      <h1 className="text-2xl my-5 font-bold text-gray-600">কিস্তির হিসাব</h1>
      <div className="flex flex-col justify-center">
        {/* top section this section is */}
        <div className="flex justify-center gap-2">
          <div className="border h-[70px] w-[100px] p-5 rounded-md flex flex-col items-center justify-center">
            <h3>শিরোনাম</h3>
            <p>5</p>
          </div>
          <div className="border h-[70px] w-[100px] p-5 rounded-md flex flex-col items-center justify-center">
            <h3>শিরোনাম</h3>
            <p>5</p>
          </div>
          <div className="border h-[70px] w-[100px] p-5 rounded-md flex flex-col items-center justify-center">
            <h3>শিরোনাম</h3>
            <p>5</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <div>
            <Link
              to={"/allloaners"}
              className="flex justify-start items-center gap-2  hover:text-blue-800 hover:underline transition-all duration-150"
            >
              <span className="text-[20px]">›</span>
              <span>সকল সদস্য</span>
            </Link>
            <Link
              to={"/loanAccounts"}
              className="flex justify-start items-center gap-2  hover:text-blue-800 hover:underline transition-all duration-150"
            >
              <span className="text-[20px]">›</span>
              <span>সাপ্তাহিক জমা</span>
            </Link>

            <Link
              to={"/addnewaccount"}
              className="flex justify-start items-center gap-2  hover:text-blue-800 hover:underline transition-all duration-150"
            >
              <span className="text-[20px]">›</span>
              <span>নতুন সদস্য সংযোগ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
