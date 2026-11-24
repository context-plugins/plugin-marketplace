import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AgentKeyRequest = {
  /** What you are evaluating. Recorded, never verified, never gates — but required. */
  purpose: string;
  /** Who or what is calling: an agent name, product or host. Recorded, unverified, required. */
  source: string;
  /** Optional. A URL or address we can reach you at. */
  contact?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const agentKeyRequestProperties: s.Shape<AgentKeyRequest> = {
  purpose: s.string(),
  source: s.string(),
  contact: s.optional(s.string()),
};

export const agentKeyRequestInternalSchema: Schema<AgentKeyRequest> = s.object<AgentKeyRequest>(
  agentKeyRequestProperties,
  { additionalProperties: s.json() },
);

export const agentKeyRequestSchema: Schema<AgentKeyRequest> = s.lazySchema(() =>
  s.object<AgentKeyRequest>(
    {
      ...agentKeyRequestProperties,
      purpose: s.string().check(s.minLength(10)),
    },
    { additionalProperties: s.json() },
  ),
);
