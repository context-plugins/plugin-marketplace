import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { costAmountSchema, type CostAmount } from "./cost-amount.js";

/** A single cost trace record with customer and product info */
export type Trace = {
  /** The name/type of the operation (e.g., "trace.openai.agents.on_agent") */
  name: string;
  /** The vendor/provider (e.g., "openai", "anthropic", "mistral") */
  vendor: string;
  /** The model used for the operation (e.g., "gpt-4o-mini", "claude-3-sonnet") */
  model: string;
  /** Cost amount with currency */
  cost: CostAmount;
  /** Unix timestamp in nanoseconds when the operation started */
  startTimeUnixNano: string;
  /** Unix timestamp in nanoseconds when the operation completed */
  endTimeUnixNano: string;
  /** Additional metadata about the trace (e.g., tokens, etc.) */
  attributes: Record<string, unknown>;
  /** The internal customer ID associated with this trace */
  customerId?: string;
  /** Your system's customer ID associated with this trace */
  externalCustomerId?: string | null;
  /** The product ID associated with this trace */
  productId?: string | null;
  /** Your system's product ID associated with this trace */
  externalProductId?: string | null;
  /** DEPRECATED: Use productId instead. The product/agent ID associated with this trace. */
  agentId?: string | null;
  /** DEPRECATED: Use externalProductId instead. Your system's agent/product ID. */
  externalAgentId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceSchema: Schema<Trace> = s.object<Trace>(
  {
    name: s.string(),
    vendor: s.string(),
    model: s.string(),
    cost: costAmountSchema,
    startTimeUnixNano: s.string(),
    endTimeUnixNano: s.string(),
    attributes: s.record(s.string(), s.unknown()),
    customerId: s.optional(s.string()),
    externalCustomerId: s.optionalNullable(s.string()),
    productId: s.optionalNullable(s.string()),
    externalProductId: s.optionalNullable(s.string()),
    agentId: s.optionalNullable(s.string()),
    externalAgentId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
