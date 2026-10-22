import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The report model type. */
export const Model4 = {
  Transactions: "transactions",
} as const;
export type Model4 = (typeof Model4)[keyof typeof Model4] | (string & {});

export const model4Schema: EnumSchema<Model4> = s.enumOf<Model4>(Model4);
