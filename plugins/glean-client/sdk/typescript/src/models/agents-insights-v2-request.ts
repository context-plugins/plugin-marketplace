import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodSchema, type Period } from "./period.js";

export type AgentsInsightsV2Request = {
  /** IDs of the Agents for which Insights should be returned. An empty array signifies all. */
  agentIds?: string[];
  /** Departments for which Insights are requested. */
  departments?: string[];
  /** Manager emails whose teams should be filtered for. Empty array means no filtering. */
  managerEmails?: string[];
  dayRange?: Period;
};

export const agentsInsightsV2RequestSchema: Schema<AgentsInsightsV2Request> =
  s.object<AgentsInsightsV2Request>({
    agentIds: s.optional(s.array(s.string())),
    departments: s.optional(s.array(s.string())),
    managerEmails: s.optional(s.array(s.string())),
    dayRange: s.optional(s.lazy(() => periodSchema)),
  });
