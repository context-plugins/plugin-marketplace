import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bandwidthLimit2Schema, type BandwidthLimit2 } from "./bandwidth-limit2.js";
import { stateSchema, type State } from "./state.js";

/** Represents an agent pool. */
export type AgentPool = {
  /** Specifies the client-specified AgentPool description. */
  displayName?: string;
  /**
   * Required. Specifies a unique string that identifies the agent pool. Format:
   * `projects/{project_id}/agentPools/{agent_pool_id}`
   */
  name?: string;
  /** Output only. Specifies the state of the AgentPool. */
  state?: State;
  /**
   * Specifies the bandwidth limit details. If this field is unspecified, the default value is set
   * as 'No Limit'.
   */
  bandwidthLimit?: BandwidthLimit2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentPoolSchema: Schema<AgentPool> = s.object<AgentPool>(
  {
    displayName: s.optional(s.string()),
    name: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateSchema)),
    bandwidthLimit: s.optional(s.lazy(() => bandwidthLimit2Schema)),
  },
  { additionalProperties: s.json() },
);
