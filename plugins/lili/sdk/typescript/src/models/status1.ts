import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment status */
export const Status1 = {
  Success: "SUCCESS",
  AccountNotFound: "ACCOUNT_NOT_FOUND",
  AccountClosed: "ACCOUNT_CLOSED",
  NotReleasedEarly: "NOT_RELEASED_EARLY",
  TechnicalError: "TECHNICAL_ERROR",
  BadData: "BAD_DATA",
  EffectiveDatePast: "EFFECTIVE_DATE_PAST",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
