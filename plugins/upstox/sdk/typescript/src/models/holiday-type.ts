import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HolidayType = {
  All: "ALL",
  SettlementHoliday: "SETTLEMENT_HOLIDAY",
  TradingHoliday: "TRADING_HOLIDAY",
  SpecialTiming: "SPECIAL_TIMING",
} as const;
export type HolidayType = (typeof HolidayType)[keyof typeof HolidayType] | (string & {});

export const holidayTypeSchema: EnumSchema<HolidayType> = s.enumOf<HolidayType>(HolidayType);
