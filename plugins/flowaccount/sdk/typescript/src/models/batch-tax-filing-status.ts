import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Awaiting 3 = Refunded */
export const BatchTaxFilingStatus = {
  _1: 1,
  _3: 3,
} as const;
export type BatchTaxFilingStatus =
  | (typeof BatchTaxFilingStatus)[keyof typeof BatchTaxFilingStatus]
  | (number & {});

export const batchTaxFilingStatusSchema: EnumSchema<BatchTaxFilingStatus> =
  s.enumOf<BatchTaxFilingStatus>(BatchTaxFilingStatus);
