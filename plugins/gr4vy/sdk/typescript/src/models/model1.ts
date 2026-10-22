import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The report model type. */
export const Model1 = {
  AccountsReceivables: "accounts_receivables",
} as const;
export type Model1 = (typeof Model1)[keyof typeof Model1] | (string & {});

export const model1Schema: EnumSchema<Model1> = s.enumOf<Model1>(Model1);
