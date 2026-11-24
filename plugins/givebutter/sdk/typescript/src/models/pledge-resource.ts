import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PledgeResource = {
  id: string;
  contactId: string;
  campaignId: string;
  fundId: string;
  type: string;
  status: string;
  statusFriendly: string;
  amount: string;
  amountFulfilled: string;
  amountRemaining: string;
  allowCustomAmount: string;
  installmentFrequency: string;
  firstInstallmentDate: string;
  nextInstallmentDate: string;
  expectedFulfillmentDate: string;
  memo: string;
  autoRemind: string;
  lastRemindedAt: string;
  feeCoverageType: string;
  feeCoverageVisibility: string;
  includeInCampaignGoal: string;
  tipsEnabled: string;
  canceledAt: string;
  pledgedAt: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pledgeResourceSchema: Schema<PledgeResource> = s.object<PledgeResource>(
  {
    id: s.string(),
    contactId: s.string(),
    campaignId: s.string(),
    fundId: s.string(),
    type: s.string(),
    status: s.string(),
    statusFriendly: s.string(),
    amount: s.string(),
    amountFulfilled: s.string(),
    amountRemaining: s.string(),
    allowCustomAmount: s.string(),
    installmentFrequency: s.string(),
    firstInstallmentDate: s.string(),
    nextInstallmentDate: s.string(),
    expectedFulfillmentDate: s.string(),
    memo: s.string(),
    autoRemind: s.string(),
    lastRemindedAt: s.string(),
    feeCoverageType: s.string(),
    feeCoverageVisibility: s.string(),
    includeInCampaignGoal: s.string(),
    tipsEnabled: s.string(),
    canceledAt: s.string(),
    pledgedAt: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      contactId: "contact_id",
      campaignId: "campaign_id",
      fundId: "fund_id",
      statusFriendly: "status_friendly",
      amountFulfilled: "amount_fulfilled",
      amountRemaining: "amount_remaining",
      allowCustomAmount: "allow_custom_amount",
      installmentFrequency: "installment_frequency",
      firstInstallmentDate: "first_installment_date",
      nextInstallmentDate: "next_installment_date",
      expectedFulfillmentDate: "expected_fulfillment_date",
      autoRemind: "auto_remind",
      lastRemindedAt: "last_reminded_at",
      feeCoverageType: "fee_coverage_type",
      feeCoverageVisibility: "fee_coverage_visibility",
      includeInCampaignGoal: "include_in_campaign_goal",
      tipsEnabled: "tips_enabled",
      canceledAt: "canceled_at",
      pledgedAt: "pledged_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
