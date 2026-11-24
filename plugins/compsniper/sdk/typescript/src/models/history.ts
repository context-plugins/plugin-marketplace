import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Market price history range */
export const History = {
  None: "none",
  Month: "month",
  Quarter: "quarter",
  Annual: "annual",
} as const;
export type History = (typeof History)[keyof typeof History] | (string & {});

export const historySchema: EnumSchema<History> = s.enumOf<History>(History);
