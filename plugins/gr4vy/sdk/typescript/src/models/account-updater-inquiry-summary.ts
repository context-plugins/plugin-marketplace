import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type3, type3Schema } from "./type3.js";

export type AccountUpdaterInquirySummary = {
  /** Always `account-updater-inquiry` @default Type3.AccountUpdaterInquiry */
  type?: Type3;
  /** The ID for the account updater inquiry. */
  id: string;
  /** The ID of the payment method */
  paymentMethodId: string;
};

export const accountUpdaterInquirySummarySchema: Schema<AccountUpdaterInquirySummary> =
  s.object<AccountUpdaterInquirySummary>({
    type: s.defaulted(type3Schema, Type3.AccountUpdaterInquiry),
    id: s.string(),
    paymentMethodId: s.string(),
    _keysMap: {
      paymentMethodId: "payment_method_id",
    },
  });
