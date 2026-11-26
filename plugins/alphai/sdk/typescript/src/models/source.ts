import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Source = {
  PublisherNews: "publisher_news",
  SecForm4: "sec_form4",
  SecForm8K: "sec_form8k",
  SecForm6K: "sec_form6k",
  EarningsReads: "earnings_reads",
  EarningsSchedule: "earnings_schedule",
  EconomicCalendar: "economic_calendar",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
