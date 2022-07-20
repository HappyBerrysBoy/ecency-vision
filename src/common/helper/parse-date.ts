import moment from "moment";

export const dateToRelative = (d: string): string => {
  const isTimeZoned =
    d.indexOf(".") !== -1 || d.indexOf("+") !== -1 ? d : `${d}.000Z`;
  const dm = moment(new Date(isTimeZoned));
  const dd = dm.fromNow(true);
  return dd
    .replace("a few seconds", "~1s")
    .replace(" seconds", "s")
    .replace(" minutes", "m")
    .replace("a minute", "1m")
    .replace(" hours", "h")
    .replace("an hour", "1h")
    .replace(" days", "d")
    .replace("a day", "1d")
    .replace(" months", "M")
    .replace("a month", "1M")
    .replace(" years", "y")
    .replace("a year", "1y");
};

export const dateToFullRelative = (d: string): string => {
  console.log("dateToFullRelative:", d);
  try {
    const isTimeZoned =
      d.indexOf(".") !== -1 || d.indexOf("+") !== -1 ? d : `${d}.000Z`;
    const dm = moment(new Date(isTimeZoned));
    return dm.fromNow();
  } catch (err) {
    return "";
  }
};

export const dateToFormatted = (d: string, format: string = "LLLL"): string => {
  try {
    const isTimeZoned =
      d.indexOf(".") !== -1 || d.indexOf("+") !== -1 ? d : `${d}.000Z`;
    const dm = moment(new Date(isTimeZoned));
    return dm.format(format);
  } catch (err) {
    return "";
  }
};

export const dayDiff = (d: string) => {
  console.log("dayDiff:", d);
  try {
    const isTimeZoned =
      d.indexOf(".") !== -1 || d.indexOf("+") !== -1 ? d : `${d}.000Z`;
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const a = new Date(isTimeZoned);
    const b = new Date();

    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  } catch (err) {
    return "";
  }
};

const parseDate = (d: string): Date => new Date(`${d}.000Z`);

export default parseDate;
