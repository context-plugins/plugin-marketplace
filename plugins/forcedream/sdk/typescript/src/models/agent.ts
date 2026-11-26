import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentMetricsSchema, type AgentMetrics } from "./agent-metrics.js";
import { agentReliabilitySchema, type AgentReliability } from "./agent-reliability.js";

export type Agent = {
  slug?: string;
  name?: string;
  description?: string;
  version?: string;
  capabilities?: string[];
  pricePerCallPence?: number;
  /** System-derived from proofs/ledger. Never self-reported. */
  metrics?: AgentMetrics;
  /** Honestly null where no real reliability data exists yet. */
  health?: AgentReliability | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentSchema: Schema<Agent> = s.object<Agent>(
  {
    slug: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    version: s.optional(s.string()),
    capabilities: s.optional(s.array(s.string())),
    pricePerCallPence: s.optional(s.int()),
    metrics: s.optional(s.lazy(() => agentMetricsSchema)),
    health: s.optionalNullable(s.lazy(() => agentReliabilitySchema)),
    _keysMap: {
      pricePerCallPence: "price_per_call_pence",
    },
  },
  { additionalProperties: s.json() },
);
