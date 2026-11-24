import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operation by which to filter the category. The following operations are possible: CO –
 * Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports are
 * listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ.
 * SessionId – EQ. OriginatingRequestId – EQ. IntentName – EQ, CO. IntentStageName – EQ, CO.
 */
export const Operator2 = {
  Eq: "EQ",
  Gt: "GT",
  Lt: "LT",
} as const;
export type Operator2 = (typeof Operator2)[keyof typeof Operator2] | (string & {});

export const operator2Schema: EnumSchema<Operator2> = s.enumOf<Operator2>(Operator2);
