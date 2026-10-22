import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type1, type1Schema } from "./type1.js";
import { overCaptureAmountSchema, type OverCaptureAmount } from "./unions/over-capture-amount.js";
import { overCapturePercentageSchema, type OverCapturePercentage } from "./unions/over-capture-percentage.js";

export type MerchantAccountSummary = {
  /** @default Type1.MerchantAccount */
  type?: Type1;
  id: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
  overCaptureAmount?: OverCaptureAmount;
  overCapturePercentage?: OverCapturePercentage;
};

export const merchantAccountSummarySchema: Schema<MerchantAccountSummary> = s.object<MerchantAccountSummary>({
  type: s.defaulted(type1Schema, Type1.MerchantAccount),
  id: s.string(),
  displayName: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  overCaptureAmount: s.optional(s.lazy(() => overCaptureAmountSchema)),
  overCapturePercentage: s.optional(s.lazy(() => overCapturePercentageSchema)),
  _keysMap: {
    displayName: "display_name",
    createdAt: "created_at",
    updatedAt: "updated_at",
    overCaptureAmount: "over_capture_amount",
    overCapturePercentage: "over_capture_percentage",
  },
});
