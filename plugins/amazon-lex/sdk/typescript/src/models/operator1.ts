import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operation by which to filter the category. The following operations are possible: CO –
 * Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports are
 * listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ.
 * SessionId – EQ. OriginatingRequestId – EQ. IntentName – EQ, CO. IntentEndState – EQ, CO.
 */
export const Operator1 = {
  Eq: "EQ",
  Gt: "GT",
  Lt: "LT",
} as const;
export type Operator1 = (typeof Operator1)[keyof typeof Operator1] | (string & {});

export const operator1Schema: EnumSchema<Operator1> = s.enumOf<Operator1>(Operator1);
