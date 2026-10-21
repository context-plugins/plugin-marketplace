import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UnmatchedCreditTransferActionType = {
  Match: "match",
  Return: "return",
} as const;
export type UnmatchedCreditTransferActionType =
  | (typeof UnmatchedCreditTransferActionType)[keyof typeof UnmatchedCreditTransferActionType]
  | (string & {});

export const unmatchedCreditTransferActionTypeSchema: EnumSchema<UnmatchedCreditTransferActionType> =
  s.enumOf<UnmatchedCreditTransferActionType>(UnmatchedCreditTransferActionType);
