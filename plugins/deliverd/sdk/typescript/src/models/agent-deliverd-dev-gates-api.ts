import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Who you are, when you ask through a person's connection. Registered on first sight and bound to
 * that person. An agent key already says who it is
 */
export type AgentDeliverdDevGatesApi = {
  /** A Deliverd agent id */
  id?: string;
  /** openai_dot, openai_chatgpt, openai_codex, anthropic, google, custom, … */
  provider?: string;
  /** Your id on that platform */
  externalId?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const agentDeliverdDevGatesApiProperties: s.Shape<AgentDeliverdDevGatesApi> = {
  id: s.optional(s.string()),
  provider: s.optional(s.string()),
  externalId: s.optional(s.string()),
  name: s.optional(s.string()),
};

export const agentDeliverdDevGatesApiInternalSchema: Schema<AgentDeliverdDevGatesApi> =
  s.object<AgentDeliverdDevGatesApi>(agentDeliverdDevGatesApiProperties, { additionalProperties: s.json() });

export const agentDeliverdDevGatesApiSchema: Schema<AgentDeliverdDevGatesApi> = s.lazySchema(() =>
  s.object<AgentDeliverdDevGatesApi>(
    {
      ...agentDeliverdDevGatesApiProperties,
      provider: s.optional(s.string().check(s.pattern("^[a-z][a-z0-9_]{1,39}$"))),
      externalId: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      name: s.optional(s.string().check(s.maxLength(120))),
    },
    { additionalProperties: s.json() },
  ),
);
