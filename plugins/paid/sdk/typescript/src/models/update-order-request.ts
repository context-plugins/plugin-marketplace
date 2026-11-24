import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderCreationStateSchema, type OrderCreationState } from "./order-creation-state.js";

export type UpdateOrderRequest = {
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
  billingCustomerId?: string;
  billingContactIds?: string[];
  autoPostInvoices?: boolean;
  autoSendBillingEmails?: boolean;
  autoSendPaymentEmails?: boolean;
  /** Purchase order number printed on invoices generated from this order. */
  purchaseOrderReference?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateOrderRequestSchema: Schema<UpdateOrderRequest> = s.object<UpdateOrderRequest>(
  {
    name: s.optional(s.string()),
    startDate: s.optional(s.dateTime()),
    endDate: s.optional(s.dateTime()),
    subscriptionTerms: s.optional(s.int()),
    creationState: s.optional(s.lazy(() => orderCreationStateSchema)),
    billingAnchor: s.optional(s.int()),
    paymentTerms: s.optional(s.string()),
    externalId: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    billingCustomerId: s.optional(s.string()),
    billingContactIds: s.optional(s.array(s.string())),
    autoPostInvoices: s.optional(s.boolean()),
    autoSendBillingEmails: s.optional(s.boolean()),
    autoSendPaymentEmails: s.optional(s.boolean()),
    purchaseOrderReference: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
