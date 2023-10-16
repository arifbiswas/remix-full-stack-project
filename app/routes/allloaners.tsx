import { Form } from "@remix-run/react";
import TextFiled from "~/components/TextFiled";

export default function AllLoaners() {
  return (
    <div className="flex justify-center items-center h-[95vh]">
      <div>
        <h1 className="text-2xl my-5 font-bold text-gray-600">
          সংযোগ নতুন সদস্য
        </h1>
        <Form>
          <div>
            <TextFiled
              name="date"
              htmlFor="createdDate"
              labelText="তারিখ"
              type="date"
            />
          </div>
          <div>
            <TextFiled
              name="name"
              htmlFor="personName"
              labelText="নাম"
              type="text"
              placeholder="নাম লিখুন"
            />
          </div>
          <div>
            <TextFiled
              name="address"
              htmlFor="address"
              labelText="ঠিকানা"
              type="text"
              placeholder="ঠিকানা লিখুন"
              textArea={true}
            />
          </div>
          <div>
            <TextFiled
              name="amount"
              htmlFor="amount"
              labelText=" মোট টাকা "
              type="number"
              placeholder="লোন"
            />
          </div>

          <div>
            <TextFiled
              name="bookfee"
              htmlFor="bookfee"
              labelText=" বই জমার টাকা "
              type="number"
              placeholder="বই জমা"
            />
          </div>
          <div>
            <TextFiled
              name="amount"
              htmlFor="amount"
              labelText=" মোট টাকা "
              type="number"
              placeholder="মোট"
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
