import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AgentPricePointTiers = {
  minQuantity?: number;
  maxQuantity?: number;
  unitPrice: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentPricePointTiersSchema: Schema<AgentPricePointTiers> = s.object<AgentPricePointTiers>(
  {
    minQuantity: s.optional(s.float64()),
    maxQuantity: s.optional(s.float64()),
    unitPrice: s.float64(),
  },
  { additionalProperties: s.json() },
);
