import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** All available named holidays */
export const Holiday = {
  ChristmasDay: "christmas-day",
  ChristmasDayObserved: "christmas-day-observed",
  ChristmasEve: "christmas-eve",
  IndependenceDay: "independence-day",
  IndependenceDayObserved: "independence-day-observed",
  IndigenousPeoplesDay: "indigenous-peoples-day",
  ColumbusDay: "columbus-day",
  Juneteenth: "juneteenth",
  JuneteenthObserved: "juneteenth-observed",
  LaborDay: "labor-day",
  MemorialDay: "memorial-day",
  MlkDay: "mlk-day",
  NewYearsDay: "new-years-day",
  NewYearsDayObserved: "new-years-day-observed",
  NewYearsEve: "new-years-eve",
  PresidentsDay: "presidents-day",
  ThanksgivingDay: "thanksgiving-day",
  ThanksgivingDayAfter: "thanksgiving-day-after",
  ThanksgivingDayBefore: "thanksgiving-day-before",
  VeteransDay: "veterans-day",
  VeteransDayObserved: "veterans-day-observed",
  GoodFriday: "good-friday",
} as const;
export type Holiday = (typeof Holiday)[keyof typeof Holiday] | (string & {});

export const holidaySchema: EnumSchema<Holiday> = s.enumOf<Holiday>(Holiday);
