import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightToolProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  Description: "description",
  ToolArguments: "tool_arguments",
  InsightToolDefinitionId: "insight_tool_definition_id",
  UpdatedAt: "updated_at",
  LifecycleStatus: "lifecycle_status",
} as const;
export type InsightToolProperties =
  | (typeof InsightToolProperties)[keyof typeof InsightToolProperties]
  | (string & {});

export const insightToolPropertiesSchema: EnumSchema<InsightToolProperties> =
  s.enumOf<InsightToolProperties>(InsightToolProperties);
