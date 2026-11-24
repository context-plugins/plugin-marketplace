import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operation by which to filter the category. The following operations are possible: CO –
 * Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports are
 * listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ.
 * SessionId – EQ. OriginatingRequestId – EQ. UtteranceState – EQ. UtteranceText – EQ, CO.
 */
export const Operator5 = {
  Eq: "EQ",
  Gt: "GT",
  Lt: "LT",
} as const;
export type Operator5 = (typeof Operator5)[keyof typeof Operator5] | (string & {});

export const operator5Schema: EnumSchema<Operator5> = s.enumOf<Operator5>(Operator5);
