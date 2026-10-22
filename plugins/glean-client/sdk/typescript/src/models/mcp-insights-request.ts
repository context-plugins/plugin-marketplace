import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodSchema, type Period } from "./period.js";

export type McpInsightsRequest = {
  /** Departments for which Insights are requested. */
  departments?: string[];
  /** Manager user IDs whose teams should be filtered for. Empty array means no filtering. */
  managerIds?: string[];
  /** Manager emails whose teams should be filtered for. Empty array means no filtering. */
  managerEmails?: string[];
  dayRange?: Period;
};

export const mcpInsightsRequestSchema: Schema<McpInsightsRequest> = s.object<McpInsightsRequest>({
  departments: s.optional(s.array(s.string())),
  managerIds: s.optional(s.array(s.string())),
  managerEmails: s.optional(s.array(s.string())),
  dayRange: s.optional(s.lazy(() => periodSchema)),
});
