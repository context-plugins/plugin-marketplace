import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentNumberSchema, type AgentNumber } from "./unions/agent-number.js";
import { callIdSchema, type CallId } from "./unions/call-id.js";
import { customerNumberSchema, type CustomerNumber } from "./unions/customer-number.js";
import { durationSchema, type Duration } from "./unions/duration.js";
import { endTimeSchema, type EndTime } from "./unions/end-time.js";
import { errorMessage3Schema, type ErrorMessage3 } from "./unions/error-message3.js";
import { metadata4Schema, type Metadata4 } from "./unions/metadata4.js";
import { startTimeSchema, type StartTime } from "./unions/start-time.js";

/** Response model for an insight upload file. */
export type InsightsUploadFile = {
  /** System-assigned ID for the upload file */
  id: number;
  /** System-assigned ID for the folder to which the file belongs */
  folderId: number;
  /** Name of the uploaded file */
  filename: string;
  /** Object-store key of the uploaded file */
  objectKey: string;
  /** Unique identifier for the call associated with the uploaded file */
  callId?: CallId;
  /** Agent number associated with the uploaded file */
  agentNumber?: AgentNumber;
  /** Customer number associated with the uploaded file */
  customerNumber?: CustomerNumber;
  /** Length in seconds of the uploaded recording */
  duration?: Duration;
  /** Start time of the uploaded file */
  startTime?: StartTime;
  /** End time of the uploaded file */
  endTime?: EndTime;
  /** Error message associated with the uploaded file */
  errorMessage?: ErrorMessage3;
  /** Meta-data associated with the uploaded file */
  metadata?: Metadata4;
  /** Timestamp at which insight upload file was created */
  createdAt?: Date;
};

export const insightsUploadFileSchema: Schema<InsightsUploadFile> = s.object<InsightsUploadFile>({
  id: s.int(),
  folderId: s.int(),
  filename: s.string(),
  objectKey: s.string(),
  callId: s.optional(s.lazy(() => callIdSchema)),
  agentNumber: s.optional(s.lazy(() => agentNumberSchema)),
  customerNumber: s.optional(s.lazy(() => customerNumberSchema)),
  duration: s.optional(s.lazy(() => durationSchema)),
  startTime: s.optional(s.lazy(() => startTimeSchema)),
  endTime: s.optional(s.lazy(() => endTimeSchema)),
  errorMessage: s.optional(s.lazy(() => errorMessage3Schema)),
  metadata: s.optional(s.lazy(() => metadata4Schema)),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    folderId: "folder_id",
    objectKey: "object_key",
    callId: "call_id",
    agentNumber: "agent_number",
    customerNumber: "customer_number",
    startTime: "start_time",
    endTime: "end_time",
    errorMessage: "error_message",
    createdAt: "created_at",
  },
});
