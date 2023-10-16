import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
// import { FaBeer } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "মমতাজ এন্টারপ্রাইজ" },
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

export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <ul>
        <li>
          <Link
            to={"loanAccounts"}
            className="flex justify-center items-center gap-2 p-3 hover:text-blue-800 hover:underline transition-all duration-150"
          >
            <span className="text-[20px]">›</span>
            <span>কিস্তির সকল হিসাব</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
