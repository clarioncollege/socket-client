import moment from "moment";

export const formatDate = (date) =>
  moment.utc(date, "YYYY-MM-DD HH:mm:ss").local().fromNow();
