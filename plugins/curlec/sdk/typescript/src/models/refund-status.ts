import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RefundStatus = {
  Null: "null",
  Partial: "partial",
  Full: "full",
} as const;
export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus] | (string & {});

export const refundStatusSchema: EnumSchema<RefundStatus> = s.enumOf<RefundStatus>(RefundStatus);
