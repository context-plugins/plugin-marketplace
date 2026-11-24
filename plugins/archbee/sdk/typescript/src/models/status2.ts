import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Response Status */
export const Status2 = {
  Ok: "OK",
  NotOk: "Not OK",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
