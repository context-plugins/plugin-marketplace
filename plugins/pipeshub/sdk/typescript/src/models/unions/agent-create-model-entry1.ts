import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { agentCreateModelEntrySchema, type AgentCreateModelEntry } from "../agent-create-model-entry.js";

/**
 * Accepted model entry for `POST /agents/create`. The gateway accepts either a non-empty string
 * model entry or an object entry with a required `modelKey`.
 *
 * The `models` array itself is optional and may be empty (the agent then uses the organization's
 * default LLM). When the array is non-empty, it must include at least one object entry with
 * `isReasoning: true`. String-only entries are schema-valid but, if present without any
 * reasoning-flagged object entry, are rejected at the gateway with HTTP 400.
 */
export type AgentCreateModelEntry1 = string | AgentCreateModelEntry;

export const agentCreateModelEntry1Schema: Schema<AgentCreateModelEntry1> = s.of<AgentCreateModelEntry1>(
  s.union([s.string(), s.lazy(() => agentCreateModelEntrySchema)]),
);
