interface ITextFiled {
  htmlFor: string;
  name: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  labelText: string;
  textArea?: boolean;
}

const TextFiled = ({
  htmlFor,
  className,
  name,
  onBlur,
  onChange,
  onChangeArea,
  onBlurArea,
  placeholder,
  type,
  value,
  labelText,
  textArea,
}: ITextFiled) => {
  return (
    <div className="flex flex-col ">
      <label className="my-2" htmlFor={htmlFor}>
        {labelText}
      </label>
      {textArea ? (
        <textarea
          id={htmlFor}
          placeholder={placeholder}
          name={name}
          className={`border w-96 p-2 rounded-md outline-gray-300 ${className}`}
          onChange={onChangeArea}
          onBlur={onBlurArea}
          value={value}
        />
      ) : (
        <input
          id={htmlFor}
          type={type}
          placeholder={placeholder}
          name={name}
          className={`border w-96 p-2 rounded-md outline-gray-300 ${className}`}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
    </div>
  );
};

export default TextFiled;
