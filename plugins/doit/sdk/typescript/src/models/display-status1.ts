import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisplayStatus1 = {
  Actionable: "actionable",
  Acknowledged: "acknowledged",
  InProgress: "in progress",
  Optimized: "optimized",
  Dismissed: "dismissed",
} as const;
export type DisplayStatus1 = (typeof DisplayStatus1)[keyof typeof DisplayStatus1] | (string & {});

export const displayStatus1Schema: EnumSchema<DisplayStatus1> = s.enumOf<DisplayStatus1>(DisplayStatus1);
