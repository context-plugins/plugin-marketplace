import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentSchema, type Agent } from "./agent.js";
import { creationStateSchema, type CreationState } from "./creation-state.js";
import { orderLineAttributeSchema, type OrderLineAttribute } from "./order-line-attribute.js";

export type OrderLine = {
  id?: string;
  orderId?: string;
  agentId?: string;
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  totalAmount?: number;
  billedAmountWithoutTax?: number;
  billedTax?: number;
  totalBilledAmount?: number;
  creationState?: CreationState;
  agent?: Agent;
  orderLineAttributes?: OrderLineAttribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderLineSchema: Schema<OrderLine> = s.object<OrderLine>(
  {
    id: s.optional(s.string()),
    orderId: s.optional(s.string()),
    agentId: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    totalAmount: s.optional(s.float64()),
    billedAmountWithoutTax: s.optional(s.float64()),
    billedTax: s.optional(s.float64()),
    totalBilledAmount: s.optional(s.float64()),
    creationState: s.optional(s.lazy(() => creationStateSchema)),
    agent: s.optional(s.lazy(() => agentSchema)),
    orderLineAttributes: s.optional(s.array(s.lazy(() => orderLineAttributeSchema))),
  },
  { additionalProperties: s.json() },
);
