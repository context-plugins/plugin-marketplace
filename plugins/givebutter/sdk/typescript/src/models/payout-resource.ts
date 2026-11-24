import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PayoutResource = {
  id: string;
  campaignId: string;
  method: string;
  status: string;
  amount: number;
  fee: number;
  tip: number;
  payout: number;
  currency: string;
  address?: string;
  memo: string;
  expectedAt: string;
  paidAt: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payoutResourceSchema: Schema<PayoutResource> = s.object<PayoutResource>(
  {
    id: s.string(),
    campaignId: s.string(),
    method: s.string(),
    status: s.string(),
    amount: s.float64(),
    fee: s.float64(),
    tip: s.float64(),
    payout: s.float64(),
    currency: s.string(),
    address: s.optional(s.string()),
    memo: s.string(),
    expectedAt: s.string(),
    paidAt: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      campaignId: "campaign_id",
      expectedAt: "expected_at",
      paidAt: "paid_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
