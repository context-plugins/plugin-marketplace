import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentPricePointTiersSchema, type AgentPricePointTiers } from "./agent-price-point-tiers.js";

export type AgentPricePoint = {
  unitPrice?: number;
  minQuantity?: number;
  includedQuantity?: number;
  tiers?: AgentPricePointTiers[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentPricePointSchema: Schema<AgentPricePoint> = s.object<AgentPricePoint>(
  {
    unitPrice: s.optional(s.float64()),
    minQuantity: s.optional(s.float64()),
    includedQuantity: s.optional(s.float64()),
    tiers: s.optional(s.array(s.lazy(() => agentPricePointTiersSchema))),
  },
  { additionalProperties: s.json() },
);
