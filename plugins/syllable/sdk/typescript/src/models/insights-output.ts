import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jsonValueSchema, type JsonValue } from "./unions/json-value.js";
import { numericValueSchema, type NumericValue } from "./unions/numeric-value.js";
import { sessionId4Schema, type SessionId4 } from "./unions/session-id4.js";
import { stringValueSchema, type StringValue } from "./unions/string-value.js";
import { uploadFileId2Schema, type UploadFileId2 } from "./unions/upload-file-id2.js";
import { workflowIdSchema, type WorkflowId } from "./unions/workflow-id.js";

/** Response model for an insight tool. */
export type InsightsOutput = {
  /** Unique ID of the insight */
  id: number;
  /** Unique ID for the session */
  sessionId?: SessionId4;
  /** Unique ID for uploaded file */
  uploadFileId?: UploadFileId2;
  /** Unique ID for insight tool configuration */
  insightToolId: number;
  /** Version of insight tool configuration */
  insightToolVersion: number;
  /** Insight workflow that produced this row, if applicable */
  workflowId?: WorkflowId;
  /** Key for insight tool result */
  insightKey: string;
  /** String value of insight tool result */
  stringValue?: StringValue;
  /** Numeric value of insight tool result */
  numericValue?: NumericValue;
  /** JSON value of insight tool result */
  jsonValue: Record<string, JsonValue>;
  /** Timestamp at which insight tool result was created */
  createdAt?: Date;
  /** Timestamp at which insight tool result was last updated */
  updatedAt?: Date;
  /** Metadata associated with the uploaded file */
  uploadFileMetadata?: Record<string, unknown>;
};

export const insightsOutputSchema: Schema<InsightsOutput> = s.object<InsightsOutput>({
  id: s.int(),
  sessionId: s.optional(s.lazy(() => sessionId4Schema)),
  uploadFileId: s.optional(s.lazy(() => uploadFileId2Schema)),
  insightToolId: s.int(),
  insightToolVersion: s.int(),
  workflowId: s.optional(s.lazy(() => workflowIdSchema)),
  insightKey: s.string(),
  stringValue: s.optional(s.lazy(() => stringValueSchema)),
  numericValue: s.optional(s.lazy(() => numericValueSchema)),
  jsonValue: s.record(
    s.string(),
    s.lazy(() => jsonValueSchema),
  ),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  uploadFileMetadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    sessionId: "session_id",
    uploadFileId: "upload_file_id",
    insightToolId: "insight_tool_id",
    insightToolVersion: "insight_tool_version",
    workflowId: "workflow_id",
    insightKey: "insight_key",
    stringValue: "string_value",
    numericValue: "numeric_value",
    jsonValue: "json_value",
    createdAt: "created_at",
    updatedAt: "updated_at",
    uploadFileMetadata: "upload_file_metadata",
  },
});
