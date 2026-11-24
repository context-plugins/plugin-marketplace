import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of payment purpose. */
export const PaymentPurposeType = {
  Code: "CODE",
  Text: "TEXT",
} as const;
export type PaymentPurposeType = (typeof PaymentPurposeType)[keyof typeof PaymentPurposeType] | (string & {});

export const paymentPurposeTypeSchema: EnumSchema<PaymentPurposeType> =
  s.enumOf<PaymentPurposeType>(PaymentPurposeType);
