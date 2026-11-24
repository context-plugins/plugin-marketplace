import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderLineCreateSchema, type OrderLineCreate } from "./order-line-create.js";

export type OrderCreate = {
  customerId?: string;
  customerExternalId?: string;
  billingContactId?: string;
  name: string;
  description?: string;
  startDate: string;
  endDate?: string;
  currency: string;
  /** Optional plan ID to associate with this order */
  planId?: string;
  orderLines?: OrderLineCreate[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderCreateSchema: Schema<OrderCreate> = s.object<OrderCreate>(
  {
    customerId: s.optional(s.string()),
    customerExternalId: s.optional(s.string()),
    billingContactId: s.optional(s.string()),
    name: s.string(),
    description: s.optional(s.string()),
    startDate: s.string(),
    endDate: s.optional(s.string()),
    currency: s.string(),
    planId: s.optional(s.string()),
    orderLines: s.optional(s.array(s.lazy(() => orderLineCreateSchema))),
  },
  { additionalProperties: s.json() },
);
