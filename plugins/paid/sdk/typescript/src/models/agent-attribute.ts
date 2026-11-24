import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pricingSchema, type Pricing } from "./pricing.js";

export type AgentAttribute = {
  name: string;
  active: boolean;
  pricing: Pricing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentAttributeSchema: Schema<AgentAttribute> = s.object<AgentAttribute>(
  {
    name: s.string(),
    active: s.boolean(),
    pricing: pricingSchema,
  },
  { additionalProperties: s.json() },
);
