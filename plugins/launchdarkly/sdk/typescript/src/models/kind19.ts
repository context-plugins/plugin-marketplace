import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of change to make to the user's removal date from this segment */
export const Kind19 = {
  AddExpireUserTargetDate: "addExpireUserTargetDate",
  UpdateExpireUserTargetDate: "updateExpireUserTargetDate",
  RemoveExpireUserTargetDate: "removeExpireUserTargetDate",
} as const;
export type Kind19 = (typeof Kind19)[keyof typeof Kind19] | (string & {});

export const kind19Schema: EnumSchema<Kind19> = s.enumOf<Kind19>(Kind19);
