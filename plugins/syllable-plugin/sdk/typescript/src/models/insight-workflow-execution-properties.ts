import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightWorkflowExecutionProperties = {
  Id: "id",
  Status: "status",
  CreatedAt: "created_at",
  StartedAt: "started_at",
  Priority: "priority",
  SessionId: "session_id",
  UploadFileId: "upload_file_id",
  EventType: "event_type",
  Filename: "filename",
} as const;
export type InsightWorkflowExecutionProperties =
  | (typeof InsightWorkflowExecutionProperties)[keyof typeof InsightWorkflowExecutionProperties]
  | (string & {});

export const insightWorkflowExecutionPropertiesSchema: EnumSchema<InsightWorkflowExecutionProperties> =
  s.enumOf<InsightWorkflowExecutionProperties>(InsightWorkflowExecutionProperties);
