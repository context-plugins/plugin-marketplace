import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Which agent is asking, in your words. Recorded and shown as declared by you; nothing is decided
 * on it
 */
export type AgentDeliverdDevApprovalsApi = {
  /** What the agent is called, as people know it — "Claims triage" */
  name?: string;
  /** Who makes or runs it: anthropic, openai, cursor, your own company */
  provider?: string;
  /** Your own id for this agent, returned unchanged */
  externalId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const agentDeliverdDevApprovalsApiProperties: s.Shape<AgentDeliverdDevApprovalsApi> = {
  name: s.optional(s.string()),
  provider: s.optional(s.string()),
  externalId: s.optional(s.string()),
};

export const agentDeliverdDevApprovalsApiInternalSchema: Schema<AgentDeliverdDevApprovalsApi> =
  s.object<AgentDeliverdDevApprovalsApi>(agentDeliverdDevApprovalsApiProperties, {
    additionalProperties: s.json(),
  });

export const agentDeliverdDevApprovalsApiSchema: Schema<AgentDeliverdDevApprovalsApi> = s.lazySchema(() =>
  s.object<AgentDeliverdDevApprovalsApi>(
    {
      ...agentDeliverdDevApprovalsApiProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      provider: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      externalId: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
