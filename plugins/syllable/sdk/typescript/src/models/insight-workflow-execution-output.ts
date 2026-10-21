import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorMessage2Schema, type ErrorMessage2 } from "./unions/error-message2.js";
import { eventTypeSchema, type EventType } from "./unions/event-type.js";
import { sessionId3Schema, type SessionId3 } from "./unions/session-id3.js";
import { startedAt1Schema, type StartedAt1 } from "./unions/started-at1.js";
import { uploadFileId1Schema, type UploadFileId1 } from "./unions/upload-file-id1.js";

/** Response model for a row in the insight_workflow_execution table. */
export type InsightWorkflowExecutionOutput = {
  /** Unique ID of the workflow execution row */
  id: number;
  /** ID of the workflow this execution belongs to */
  workflowId: number;
  /** Status of the workflow execution */
  status: string;
  /** Priority of the workflow execution */
  priority: number;
  /** Session ID processed by this execution, if applicable */
  sessionId?: SessionId3;
  /** Upload file ID processed by this execution, if applicable */
  uploadFileId?: UploadFileId1;
  /** Number of times this execution has been retried */
  retryCount: number;
  /** Error message from the last processing attempt, if any */
  errorMessage?: ErrorMessage2;
  /** Timestamp at which the most recent processing attempt started */
  startedAt?: StartedAt1;
  /** Timestamp at which the execution row was created (i.e. when the work was queued) */
  createdAt: Date;
  /** Event type that triggered the execution, if applicable */
  eventType?: EventType;
};

export const insightWorkflowExecutionOutputSchema: Schema<InsightWorkflowExecutionOutput> =
  s.object<InsightWorkflowExecutionOutput>({
    id: s.int(),
    workflowId: s.int(),
    status: s.string(),
    priority: s.int(),
    sessionId: s.optional(s.lazy(() => sessionId3Schema)),
    uploadFileId: s.optional(s.lazy(() => uploadFileId1Schema)),
    retryCount: s.int(),
    errorMessage: s.optional(s.lazy(() => errorMessage2Schema)),
    startedAt: s.optional(s.lazy(() => startedAt1Schema)),
    createdAt: s.dateTime(),
    eventType: s.optional(s.lazy(() => eventTypeSchema)),
    _keysMap: {
      workflowId: "workflow_id",
      sessionId: "session_id",
      uploadFileId: "upload_file_id",
      retryCount: "retry_count",
      errorMessage: "error_message",
      startedAt: "started_at",
      createdAt: "created_at",
      eventType: "event_type",
    },
  });
