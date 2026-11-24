import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 0 = Delete 1 = Awaiting 5 = Approved 9 = Void -9 = ResetVoid -5 = ResetApproved -1 =
 * ResetAwaiting
 */
export const BookOfAccountStatus = {
  _0: 0,
  _1: 1,
  _5: 5,
  _9: 9,
  _Minus9: -9,
  _Minus5: -5,
  _Minus1: -1,
} as const;
export type BookOfAccountStatus =
  | (typeof BookOfAccountStatus)[keyof typeof BookOfAccountStatus]
  | (number & {});

export const bookOfAccountStatusSchema: EnumSchema<BookOfAccountStatus> =
  s.enumOf<BookOfAccountStatus>(BookOfAccountStatus);
