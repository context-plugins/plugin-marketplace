import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operation by which to filter the category. The following operations are possible: CO –
 * Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports are
 * listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ.
 * Duration – EQ, GT, LT. conversationEndState – EQ, CO. SessionId – EQ. OriginatingRequestId – EQ.
 * IntentPath – EQ.
 */
export const Operator4 = {
  Eq: "EQ",
  Gt: "GT",
  Lt: "LT",
} as const;
export type Operator4 = (typeof Operator4)[keyof typeof Operator4] | (string & {});

export const operator4Schema: EnumSchema<Operator4> = s.enumOf<Operator4>(Operator4);
