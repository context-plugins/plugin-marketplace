import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightsProperties = {
  Id: "id",
  SessionId: "session_id",
  UploadFileId: "upload_file_id",
  WorkflowId: "workflow_id",
  UploadFolderId: "upload_folder_id",
  InsightKey: "insight_key",
  InsightToolId: "insight_tool_id",
} as const;
export type InsightsProperties = (typeof InsightsProperties)[keyof typeof InsightsProperties] | (string & {});

export const insightsPropertiesSchema: EnumSchema<InsightsProperties> =
  s.enumOf<InsightsProperties>(InsightsProperties);
