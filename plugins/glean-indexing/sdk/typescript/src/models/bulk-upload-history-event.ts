import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processingStateSchema, type ProcessingState } from "./processing-state.js";
import { statusSchema, type Status } from "./status.js";

/** Information about a successful bulk upload */
export type BulkUploadHistoryEvent = {
  /** The unique ID of the upload */
  uploadId?: string;
  /** The start time of the upload in ISO 8601 format */
  startTime?: string;
  /** The end time of the upload in ISO 8601 format, 'NA' if the upload is still active */
  endTime?: string;
  /** The status of the upload, an enum of ACTIVE, SUCCESSFUL */
  status?: Status;
  /**
   * The current state of the upload, an enum of UNAVAILABLE, UPLOAD STARTED, UPLOAD IN PROGRESS,
   * UPLOAD COMPLETED, DELETION PAUSED, INDEXING COMPLETED
   */
  processingState?: ProcessingState;
};

export const bulkUploadHistoryEventSchema: Schema<BulkUploadHistoryEvent> = s.object<BulkUploadHistoryEvent>({
  uploadId: s.optional(s.string()),
  startTime: s.optional(s.string()),
  endTime: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  processingState: s.optional(s.lazy(() => processingStateSchema)),
});
