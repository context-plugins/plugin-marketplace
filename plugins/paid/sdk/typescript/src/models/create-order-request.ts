import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createOrderLineRequestSchema, type CreateOrderLineRequest } from "./create-order-line-request.js";
import {
  orderBillingFrequencyOverrideSchema,
  type OrderBillingFrequencyOverride,
} from "./order-billing-frequency-override.js";
import { orderCreationStateSchema, type OrderCreationState } from "./order-creation-state.js";

export type CreateOrderRequest = {
  customerId: string;
  billingCustomerId?: string;
  billingContactIds?: string[];
  name?: string;
  startDate?: Date;
  endDate?: Date;
  subscriptionTerms?: number;
  creationState?: OrderCreationState;
  /** Day of month for billing anchor (1-31). Defaults to start date day if not provided. */
  billingAnchor?: number;
  paymentTerms?: string;
  externalId?: string;
  metadata?: Record<string, unknown>;
  currency?: string;
  autoPostInvoices?: boolean;
  autoSendBillingEmails?: boolean;
  autoSendPaymentEmails?: boolean;
  lines?: CreateOrderLineRequest[];
  billingFrequencyOverride?: OrderBillingFrequencyOverride;
  /** Purchase order number printed on invoices generated from this order. */
  purchaseOrderReference?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOrderRequestSchema: Schema<CreateOrderRequest> = s.object<CreateOrderRequest>(
  {
    customerId: s.string(),
    billingCustomerId: s.optional(s.string()),
    billingContactIds: s.optional(s.array(s.string())),
    name: s.optional(s.string()),
    startDate: s.optional(s.dateTime()),
    endDate: s.optional(s.dateTime()),
    subscriptionTerms: s.optional(s.int()),
    creationState: s.optional(s.lazy(() => orderCreationStateSchema)),
    billingAnchor: s.optional(s.int()),
    paymentTerms: s.optional(s.string()),
    externalId: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    currency: s.optional(s.string()),
    autoPostInvoices: s.optional(s.boolean()),
    autoSendBillingEmails: s.optional(s.boolean()),
    autoSendPaymentEmails: s.optional(s.boolean()),
    lines: s.optional(s.array(s.lazy(() => createOrderLineRequestSchema))),
    billingFrequencyOverride: s.optional(s.lazy(() => orderBillingFrequencyOverrideSchema)),
    purchaseOrderReference: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
