import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentsSchema, type Agents } from "./agents.js";
import { jobsSchema, type Jobs } from "./jobs.js";
import { organizationSchema, type Organization } from "./organization.js";

export type MetricsResponse = {
  agents?: Agents;
  jobs?: Jobs;
  organization?: Organization;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricsResponseSchema: Schema<MetricsResponse> = s.object<MetricsResponse>(
  {
    agents: s.optional(s.lazy(() => agentsSchema)),
    jobs: s.optional(s.lazy(() => jobsSchema)),
    organization: s.optional(s.lazy(() => organizationSchema)),
  },
  { additionalProperties: s.json() },
);
