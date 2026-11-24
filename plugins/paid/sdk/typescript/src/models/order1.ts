import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderBillingFrequencyOverrideSchema,
  type OrderBillingFrequencyOverride,
} from "./order-billing-frequency-override.js";
import { orderCreationStateSchema, type OrderCreationState } from "./order-creation-state.js";

export type Order1 = {
  id: string;
  customerId: string;
  billingCustomerId: string | null;
  billingContactIds: string[];
  createdAt: Date;
  updatedAt: Date;
  endDate: Date | null;
  name: string;
  startDate: Date;
  subscriptionTerms: number | null;
  billedAmountNoTax: number;
  billedTax: number;
  estimatedTax: number;
  orderAmount: number;
  pendingBillingAmount: number;
  totalAmount: number;
  totalBilledAmount: number;
  creationState: OrderCreationState;
  paymentTerms: string | null;
  number: number;
  metadata: Record<string, unknown> | null;
  showPaymentLink: boolean | null;
  showBankDetails: boolean | null;
  autoPostInvoices: boolean | null;
  autoSendBillingEmails: boolean | null;
  autoSendPaymentEmails: boolean | null;
  version: number;
  billingFrequencyOverridden: boolean;
  billingFrequencyOverride?: OrderBillingFrequencyOverride;
  purchaseOrderReference: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const order1Schema: Schema<Order1> = s.object<Order1>(
  {
    id: s.string(),
    customerId: s.string(),
    billingCustomerId: s.nullable(s.string()),
    billingContactIds: s.array(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    endDate: s.nullable(s.dateTime()),
    name: s.string(),
    startDate: s.dateTime(),
    subscriptionTerms: s.nullable(s.int()),
    billedAmountNoTax: s.float64(),
    billedTax: s.float64(),
    estimatedTax: s.float64(),
    orderAmount: s.float64(),
    pendingBillingAmount: s.float64(),
    totalAmount: s.float64(),
    totalBilledAmount: s.float64(),
    creationState: orderCreationStateSchema,
    paymentTerms: s.nullable(s.string()),
    number: s.float64(),
    metadata: s.nullable(s.record(s.string(), s.unknown())),
    showPaymentLink: s.nullable(s.boolean()),
    showBankDetails: s.nullable(s.boolean()),
    autoPostInvoices: s.nullable(s.boolean()),
    autoSendBillingEmails: s.nullable(s.boolean()),
    autoSendPaymentEmails: s.nullable(s.boolean()),
    version: s.int(),
    billingFrequencyOverridden: s.boolean(),
    billingFrequencyOverride: s.optional(s.lazy(() => orderBillingFrequencyOverrideSchema)),
    purchaseOrderReference: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
