import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planLimitSchema, type PlanLimit } from "./plan-limit.js";

export type PlanLimits = {
  references?: Record<string, string>;
  organizationGuid?: string;
  planLimits?: PlanLimit[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planLimitsSchema: Schema<PlanLimits> = s.object<PlanLimits>(
  {
    references: s.optional(s.record(s.string(), s.string())),
    organizationGuid: s.optional(s.string()),
    planLimits: s.optional(s.array(s.lazy(() => planLimitSchema))),
    _keysMap: {
      organizationGuid: "organization_guid",
      planLimits: "plan_limits",
    },
  },
  { additionalProperties: s.json() },
);
