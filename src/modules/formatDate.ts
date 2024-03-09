import dayjs from "dayjs";
import ja from "dayjs/locale/ja";

dayjs.locale(ja);

export const formatDate = (date: Date): string => {
  const day = dayjs(date);
  return day.format("YYYY/MM/DD HH:mm:ss");
};
