import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approvalPolicySchema, type ApprovalPolicy } from "./approval-policy.js";

export type AgentGrant = {
  /** The grant id — also the value a revocation must confirm with. */
  id: string;
  client: string;
  scopes: string[];
  /**
   * `ask` sends every outward action to a human approval link first; `auto` runs Tier B directly.
   * Destructive actions always need the link.
   */
  approvalPolicy: ApprovalPolicy;
  createdAt: Date;
  lastUsedAt: Date | null;
  expiresAt: Date | null;
  expired: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentGrantSchema: Schema<AgentGrant> = s.object<AgentGrant>(
  {
    id: s.string(),
    client: s.string(),
    scopes: s.array(s.string()),
    approvalPolicy: approvalPolicySchema,
    createdAt: s.dateTime(),
    lastUsedAt: s.nullable(s.dateTime()),
    expiresAt: s.nullable(s.dateTime()),
    expired: s.boolean(),
  },
  { additionalProperties: s.json() },
);
