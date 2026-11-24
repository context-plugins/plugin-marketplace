import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creationStateSchema, type CreationState } from "./creation-state.js";
import { customerSchema, type Customer } from "./customer.js";
import { orderLineSchema, type OrderLine } from "./order-line.js";

export type Order = {
  id?: string;
  name?: string;
  description?: string;
  customerId?: string;
  organizationId?: string;
  startDate?: string;
  endDate?: string;
  totalAmount?: number;
  estimatedTax?: number;
  billedAmountNoTax?: number;
  billedTax?: number;
  totalBilledAmount?: number;
  pendingBillingAmount?: number;
  creationState?: CreationState;
  orderLines?: OrderLine[];
  customer?: Customer;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderSchema: Schema<Order> = s.object<Order>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    customerId: s.optional(s.string()),
    organizationId: s.optional(s.string()),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    totalAmount: s.optional(s.float64()),
    estimatedTax: s.optional(s.float64()),
    billedAmountNoTax: s.optional(s.float64()),
    billedTax: s.optional(s.float64()),
    totalBilledAmount: s.optional(s.float64()),
    pendingBillingAmount: s.optional(s.float64()),
    creationState: s.optional(s.lazy(() => creationStateSchema)),
    orderLines: s.optional(s.array(s.lazy(() => orderLineSchema))),
    customer: s.optional(s.lazy(() => customerSchema)),
  },
  { additionalProperties: s.json() },
);
