import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operation by which to filter the category. The following operations are possible: CO –
 * Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports are
 * listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ.
 */
export const Operator3 = {
  Eq: "EQ",
  Gt: "GT",
  Lt: "LT",
} as const;
export type Operator3 = (typeof Operator3)[keyof typeof Operator3] | (string & {});

export const operator3Schema: EnumSchema<Operator3> = s.enumOf<Operator3>(Operator3);
