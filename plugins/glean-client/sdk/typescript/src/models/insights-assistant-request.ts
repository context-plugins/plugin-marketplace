import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodSchema, type Period } from "./period.js";

export type InsightsAssistantRequest = {
  /** Departments for which Insights are requested. */
  departments?: string[];
  /** Manager emails whose teams should be filtered for. Empty array means no filtering. */
  managerEmails?: string[];
  dayRange?: Period;
};

export const insightsAssistantRequestSchema: Schema<InsightsAssistantRequest> =
  s.object<InsightsAssistantRequest>({
    departments: s.optional(s.array(s.string())),
    managerEmails: s.optional(s.array(s.string())),
    dayRange: s.optional(s.lazy(() => periodSchema)),
  });
