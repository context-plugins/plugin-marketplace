import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightWorkflowProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  Description: "description",
  Status: "status",
  Conditions: "conditions",
  InsightToolIds: "insight_tool_ids",
  UpdatedAt: "updated_at",
  LifecycleStatus: "lifecycle_status",
} as const;
export type InsightWorkflowProperties =
  | (typeof InsightWorkflowProperties)[keyof typeof InsightWorkflowProperties]
  | (string & {});

export const insightWorkflowPropertiesSchema: EnumSchema<InsightWorkflowProperties> =
  s.enumOf<InsightWorkflowProperties>(InsightWorkflowProperties);
