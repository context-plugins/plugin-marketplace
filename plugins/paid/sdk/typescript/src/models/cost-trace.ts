import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { costAmountSchema, type CostAmount } from "./cost-amount.js";

/** A single cost trace record */
export type CostTrace = {
  /** The name/type of the operation (e.g., "trace.openai.agents.on_agent") */
  name: string;
  /** The vendor/provider (e.g., "openai", "anthropic", "mistral") */
  vendor: string;
  /** The model used for the operation (e.g., "gpt-4o-mini", "claude-3-sonnet") */
  model?: string;
  /** Cost amount with currency */
  cost: CostAmount;
  /** Unix timestamp in nanoseconds when the operation started */
  startTimeUnixNano: string;
  /** Unix timestamp in nanoseconds when the operation completed */
  endTimeUnixNano: string;
  /** Additional metadata about the trace (e.g., tokens, etc.) */
  attributes: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costTraceSchema: Schema<CostTrace> = s.object<CostTrace>(
  {
    name: s.string(),
    vendor: s.string(),
    model: s.optional(s.string()),
    cost: costAmountSchema,
    startTimeUnixNano: s.string(),
    endTimeUnixNano: s.string(),
    attributes: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
