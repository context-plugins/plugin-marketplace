import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current state of the upload, an enum of UNAVAILABLE, UPLOAD STARTED, UPLOAD IN PROGRESS,
 * UPLOAD COMPLETED, DELETION PAUSED, INDEXING COMPLETED
 */
export const ProcessingState = {
  Unavailable: "UNAVAILABLE",
  UploadStarted: "UPLOAD STARTED",
  UploadInProgress: "UPLOAD IN PROGRESS",
  UploadCompleted: "UPLOAD COMPLETED",
  DeletionPaused: "DELETION PAUSED",
  IndexingCompleted: "INDEXING COMPLETED",
} as const;
export type ProcessingState = (typeof ProcessingState)[keyof typeof ProcessingState] | (string & {});

export const processingStateSchema: EnumSchema<ProcessingState> = s.enumOf<ProcessingState>(ProcessingState);
