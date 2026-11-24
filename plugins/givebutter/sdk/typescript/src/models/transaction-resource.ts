import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  transactionLineItemResourceSchema,
  type TransactionLineItemResource,
} from "./transaction-line-item-resource.js";

export type TransactionResource = {
  id: string;
  planId: string;
  pledgeId: string;
  amount: number;
  fee: number;
  feeCovered: number;
  donated: number;
  payout: number;
  captured: string;
  capturedAt: string;
  timezone: string;
  refunded: string;
  refundedAt: string;
  lineItems: TransactionLineItemResource[];
  fairMarketValueAmount: string | null;
  taxDeductibleAmount: string | null;
  isRecurring: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionResourceSchema: Schema<TransactionResource> = s.object<TransactionResource>(
  {
    id: s.string(),
    planId: s.string(),
    pledgeId: s.string(),
    amount: s.float64(),
    fee: s.float64(),
    feeCovered: s.float64(),
    donated: s.float64(),
    payout: s.float64(),
    captured: s.string(),
    capturedAt: s.string(),
    timezone: s.string(),
    refunded: s.string(),
    refundedAt: s.string(),
    lineItems: s.array(s.lazy(() => transactionLineItemResourceSchema)),
    fairMarketValueAmount: s.nullable(s.string()),
    taxDeductibleAmount: s.nullable(s.string()),
    isRecurring: s.string(),
    _keysMap: {
      planId: "plan_id",
      pledgeId: "pledge_id",
      feeCovered: "fee_covered",
      capturedAt: "captured_at",
      refundedAt: "refunded_at",
      lineItems: "line_items",
      fairMarketValueAmount: "fair_market_value_amount",
      taxDeductibleAmount: "tax_deductible_amount",
      isRecurring: "is_recurring",
    },
  },
  { additionalProperties: s.json() },
);
