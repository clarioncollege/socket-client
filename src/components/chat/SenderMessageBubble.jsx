import { formatDate } from "../../helpers/date";

const SenderMessageBubble = ({ message, createdAt }) => {
  return (
    <>
      <div className="flex justify-end">
        <div className="max-w-md px-4 py-3 rounded-[14px]  bg-orange-500 text-white rounded-br-none">
          <p className="text-sm">{message}</p>
          <p className="text-[10px] mt-1 text-gray-300">
            {formatDate(createdAt)}
          </p>
        </div>
      </div>
    </>
  );
};

export default SenderMessageBubble;
