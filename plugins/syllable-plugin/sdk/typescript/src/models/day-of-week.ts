import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Available options for day of the week for use in message rules. */
export const DayOfWeek = {
  Mo: "mo",
  Tu: "tu",
  We: "we",
  Th: "th",
  Fr: "fr",
  Sa: "sa",
  Su: "su",
} as const;
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek] | (string & {});

export const dayOfWeekSchema: EnumSchema<DayOfWeek> = s.enumOf<DayOfWeek>(DayOfWeek);
