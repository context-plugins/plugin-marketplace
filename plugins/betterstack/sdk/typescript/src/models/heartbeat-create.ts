import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HeartbeatCreate = {
  name: string;
  /** Expected interval in seconds. */
  period: number;
  /** Grace period in seconds. */
  grace?: number;
  call?: boolean;
  sms?: boolean;
  email?: boolean;
  push?: boolean;
  teamWait?: number;
  paused?: boolean;
  policyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const heartbeatCreateSchema: Schema<HeartbeatCreate> = s.object<HeartbeatCreate>(
  {
    name: s.string(),
    period: s.int(),
    grace: s.optional(s.int()),
    call: s.optional(s.boolean()),
    sms: s.optional(s.boolean()),
    email: s.optional(s.boolean()),
    push: s.optional(s.boolean()),
    teamWait: s.optional(s.int()),
    paused: s.optional(s.boolean()),
    policyId: s.optional(s.string()),
    _keysMap: {
      teamWait: "team_wait",
      policyId: "policy_id",
    },
  },
  { additionalProperties: s.json() },
);
