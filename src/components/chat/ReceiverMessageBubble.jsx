import { formatDate } from "../../helpers/date";

const ReceiverMessageBubble = ({ message, createdAt, sender }) => {
  return (
    <div className="flex justify-start">
      <div className="max-w-md px-4 py-3 rounded-[14px] bg-white/5 border border-white/10 text-white rounded-bl-none">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-cyan-800">{sender}:</p>
          <p className="text-sm">{message}</p>
        </div>
        <p className="text-[10px] mt-1 text-gray-300">
          {formatDate(createdAt)}
        </p>
      </div>
    </div>
  );
};

export default ReceiverMessageBubble;
