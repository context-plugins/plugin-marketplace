import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IncidentCreate = {
  summary: string;
  description?: string;
  requesterEmail: string;
  call?: boolean;
  sms?: boolean;
  email?: boolean;
  push?: boolean;
  teamWait?: number;
  policyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const incidentCreateProperties: s.Shape<IncidentCreate> = {
  summary: s.string(),
  description: s.optional(s.string()),
  requesterEmail: s.string(),
  call: s.optional(s.boolean()),
  sms: s.optional(s.boolean()),
  email: s.optional(s.boolean()),
  push: s.optional(s.boolean()),
  teamWait: s.optional(s.int()),
  policyId: s.optional(s.string()),
  _keysMap: {
    requesterEmail: "requester_email",
    teamWait: "team_wait",
    policyId: "policy_id",
  },
};

export const incidentCreateInternalSchema: Schema<IncidentCreate> = s.object<IncidentCreate>(
  incidentCreateProperties,
  { additionalProperties: s.json() },
);

export const incidentCreateSchema: Schema<IncidentCreate> = s.lazySchema(() =>
  s.object<IncidentCreate>(
    {
      ...incidentCreateProperties,
      requesterEmail: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
