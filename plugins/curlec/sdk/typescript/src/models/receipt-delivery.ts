import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReceiptDelivery = {
  Digital: "digital",
  Print: "print",
  DigitalAndPrint: "digital_and_print",
} as const;
export type ReceiptDelivery = (typeof ReceiptDelivery)[keyof typeof ReceiptDelivery] | (string & {});

export const receiptDeliverySchema: EnumSchema<ReceiptDelivery> = s.enumOf<ReceiptDelivery>(ReceiptDelivery);
