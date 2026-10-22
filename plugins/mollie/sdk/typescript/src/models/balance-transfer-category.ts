import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the transfer. Different fees may apply to different types of transfers. */
export const BalanceTransferCategory = {
  InvoiceCollection: "invoice_collection",
  Purchase: "purchase",
  Chargeback: "chargeback",
  Refund: "refund",
  ServicePenalty: "service_penalty",
  DiscountCompensation: "discount_compensation",
  ManualCorrection: "manual_correction",
  OtherFee: "other_fee",
} as const;
export type BalanceTransferCategory =
  | (typeof BalanceTransferCategory)[keyof typeof BalanceTransferCategory]
  | (string & {});

export const balanceTransferCategorySchema: EnumSchema<BalanceTransferCategory> =
  s.enumOf<BalanceTransferCategory>(BalanceTransferCategory);
