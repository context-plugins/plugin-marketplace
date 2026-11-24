import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Set to `archived` to archive this credit currency, or `active` to restore it. */
export const UpdateCreditCurrencyRequestStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type UpdateCreditCurrencyRequestStatus =
  | (typeof UpdateCreditCurrencyRequestStatus)[keyof typeof UpdateCreditCurrencyRequestStatus]
  | (string & {});

export const updateCreditCurrencyRequestStatusSchema: EnumSchema<UpdateCreditCurrencyRequestStatus> =
  s.enumOf<UpdateCreditCurrencyRequestStatus>(UpdateCreditCurrencyRequestStatus);
