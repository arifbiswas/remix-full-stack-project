import { ActionFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { db } from "~/db.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const data = {
    loanerName: formData.get("loanerName"),
    fatherName: formData.get("fatherName"),
    motherName: formData.get("motherName"),
    house: formData.get("house"),
    postoffice: formData.get("postoffice"),
    state: formData.get("state"),
    city: formData.get("city"),
    number: formData.get("number"),
    cardNumber: formData.get("cardNumber"),
    loanAmount: formData.get("loanAmount"),
    benefit: formData.get("benefit"),
    bookCost: formData.get("bookCost"),
    referenceName: formData.get("referenceName"),
    referenceNumber: formData.get("referenceNumber"),
    loanDate: formData.get("loanDate"),
    img: formData.get("img"),
  };

  return json(data);
};

export default function AddNewAccount() {
  const navigation = useNavigation();
  const actionData = useActionData();
  const [formImage, setFromImage] = useState(null);
  const [img, setImage] = useState(null);
  console.log(actionData);

  const converImage = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  useEffect(() => {
    converImage(formImage).then((image) => setImage(image));
  }, [formImage]);

  return (
    <div className="flex justify-center items-center py-2">
      <div className="relative  border border-gray-300 pt-5 pb-10 px-10   max-w-[850px] h-full rounded-md">
        {/*----------- image -------------- */}
        <div className="flex justify-center ">
          <label
            onDrop={(e) => {
              e.preventDefault();
              setFromImage(e.dataTransfer.files[0]);
            }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            htmlFor="profileImage"
            className={`md:absolute top-5 right-5 border border-gray-300 w-48 h-48 rounded-md ${
              img ? "p-1" : "p-5"
            }`}
          >
            {img ? (
              <img src={actionData?.img} alt="" className="w-full h-full" />
            ) : (
              <div className=" border border-dashed border-gray-500 w-full h-full flex justify-center items-center">
                <p className="font-bold text-sm text-gray-600">
                  {" "}
                  Drag and Drop
                </p>
              </div>
            )}
          </label>
        </div>
        {/*-------------- from heading ------------ */}
        <div className="my-20 flex justify-center flex-col">
          <h1 className="text-lg text-gray-700 font-bold text-center">
            কিস্তির নতুন ফরম
          </h1>
          <h3 className="text-sm text-center font-semibold underline text-gray-500">
            কিস্তির গ্রাহীতা
          </h3>
        </div>
        {/*-------------------- main body ----------------- */}
        <Form method="post" action="/addnewaccount">
          <input
            type="file"
            onChange={(e) => setFromImage(e.target.files[0])}
            id="profileImage"
            className="hidden"
          />
          <input type="text" value={img || ""} name="img" className="hidden" />
          <div className="">
            <div className="flex flex-col relative pt-5">
              <input
                type="date"
                id="loanDate"
                name="loanDate"
                className="text-xs outline-none z-20 absolute left-11 appearance-none bg-transparent py-1 bottom-[2px]  px-1"
              />
              <label
                htmlFor="loanDate"
                className="relative  text-gray-600 text-sm"
              >
                তারিখ
                <span className="relative -bottom-2">
                  -----------------------
                </span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2   gap-5 mt-10 items-center">
              <div className="flex items-center ">
                <label htmlFor="loanerName" className="  text-gray-600 text-sm">
                  নাম
                </label>
                <input
                  id="loanerName"
                  type="text"
                  name="loanerName"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>

              <div className="flex items-center ">
                <label htmlFor="fatherName" className="  text-gray-600 text-sm">
                  পিতার নাম
                </label>
                <input
                  id="fatherName"
                  name="fatherName"
                  type="text"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>
              <div className="flex items-center ">
                <label htmlFor="motherName" className="  text-gray-600 text-sm">
                  মাতার নাম
                </label>
                <input
                  id="motherName"
                  name="motherName"
                  type="text"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>

              <div className="flex items-center ">
                <label htmlFor="house" className="  text-gray-600 text-sm">
                  ঠিকানা গ্রাম/মহল্লা
                </label>
                <input
                  id="house"
                  name="house"
                  type="text"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>

              <div className="flex items-center ">
                <label htmlFor="postoffice" className="  text-gray-600 text-sm">
                  ডারঘর
                </label>
                <input
                  id="postoffice"
                  name="postoffice"
                  type="text"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>
              <div className="flex items-center ">
                <label htmlFor="state" className="  text-gray-600 text-sm">
                  থানা
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>

              <div className="flex items-center ">
                <label htmlFor="city" className="  text-gray-600 text-sm">
                  জেলা
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>

              <div className="flex items-center ">
                <label
                  htmlFor="mobileNumber"
                  className="  text-gray-600 text-sm"
                >
                  মোবাইল নাম্বার
                </label>
                <input
                  id="mobileNumber"
                  name="number"
                  type="number"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>
              <div className="flex items-center ">
                <label htmlFor="cardNumber" className="  text-gray-600 text-sm">
                  আইডি কার্ডের নাম্বার
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="number"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>

              <div className="flex items-center ">
                <label htmlFor="loanAmount" className="  text-gray-600 text-sm">
                  কিস্তি লোনের পরিমান
                </label>
                <input
                  id="loanAmount"
                  name="loanAmount"
                  type="number"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>
              <div className="flex items-center ">
                <label htmlFor="benefit" className="  text-gray-600 text-sm">
                  লাভ{" "}
                </label>
                <input
                  id="benefit"
                  name="benefit"
                  type="number"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>
              <div className="flex items-center ">
                <label htmlFor="bookCost" className="  text-gray-600 text-sm">
                  কিস্তির বইজমা
                </label>
                <input
                  id="bookCost"
                  name="bookCost"
                  type="number"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-center text-lg font-bold">জামিনদার</h1>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2  gap-5">
                <div className="flex items-center ">
                  <label
                    htmlFor="referenceName"
                    className="  text-gray-600 text-sm"
                  >
                    নাম
                  </label>
                  <input
                    id="referenceName"
                    name="referenceName"
                    type="text"
                    className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                  />
                </div>
                <div className="flex items-center ">
                  <label
                    htmlFor="referenceNumber"
                    className="  text-gray-600 text-sm"
                  >
                    মোবাইল{" "}
                  </label>
                  <input
                    id="referenceNumber"
                    name="referenceNumber"
                    type="number"
                    className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                  />
                </div>
              </div>
            </div>
            {/* <div className="mt-12 grid grid-cols-1 gap-5">
              <div className="flex items-center ">
                <label className=" text-sm text-gray-600">
                  জামিনদারের স্বাক্ষর
                </label>
                <input
                  type="text"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>
              <div className="flex items-center ">
                <label className=" text-sm text-gray-600">
                  কর্তিপক্ষের স্বাক্ষর{" "}
                </label>
                <input
                  type="text"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>
              <div className="flex items-center ">
                <label className="text-sm  text-gray-600">
                  ঋন গ্রহনকারীর স্বাক্ষর{" "}
                </label>
                <input
                  type="text"
                  className=" outline-none z-20  appearance-none flex-1 py-1   px-2 text-xs  border mx-2"
                />
              </div>
            </div> */}
          </div>
          <div className="mt-12 flex justify-end">
            {navigation.state === "submitting" ? (
              <button
                disabled={true}
                type="submit"
                className=" text-center text-xs py-3 px-1 w-24 text-white bg-blue-600 hover:to-blue-800"
              >
                সংযোগ...
              </button>
            ) : (
              <button
                type="submit"
                className=" text-center text-xs py-3 px-1 w-24 text-white bg-blue-600 hover:to-blue-800"
              >
                নতুন সংযোগ
              </button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}
