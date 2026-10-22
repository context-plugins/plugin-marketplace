import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountUpdaterInquirySummarySchema,
  type AccountUpdaterInquirySummary,
} from "./account-updater-inquiry-summary.js";
import { Type4, type4Schema } from "./type4.js";

export type AccountUpdaterJob = {
  /** Always `account-updater-job` @default Type4.AccountUpdaterJob */
  type?: Type4;
  /** The ID for the account updater job. */
  id: string;
  /** The ID of the merchant account this job belongs to. */
  merchantAccountId: string;
  /** A list of the payment methods that have been scheduled for an update. */
  inquiries: AccountUpdaterInquirySummary[];
  /** The date and time when this payment method was first created in our system. */
  createdAt: Date;
  /** The date and time when this payment method was last updated in our system. */
  updatedAt: Date;
};

export const accountUpdaterJobSchema: Schema<AccountUpdaterJob> = s.object<AccountUpdaterJob>({
  type: s.defaulted(type4Schema, Type4.AccountUpdaterJob),
  id: s.string(),
  merchantAccountId: s.string(),
  inquiries: s.array(s.lazy(() => accountUpdaterInquirySummarySchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
