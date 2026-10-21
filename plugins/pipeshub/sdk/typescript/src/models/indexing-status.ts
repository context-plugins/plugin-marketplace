import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current indexing/processing status:
 * - NOT_STARTED: Awaiting indexing
 * - QUEUED: In indexing queue
 * - IN_PROGRESS: Currently being indexed
 * - COMPLETED: Successfully indexed and searchable
 * - FAILED: Indexing failed (check error details)
 * - PAUSED: Indexing paused by user
 * - FILE_TYPE_NOT_SUPPORTED: Unsupported file format
 * - AUTO_INDEX_OFF: Auto-indexing disabled for this record
 * - EMPTY: File has no extractable content
 * - ENABLE_MULTIMODAL_MODELS: Requires multimodal AI models
 */
export const IndexingStatus = {
  NotStarted: "NOT_STARTED",
  Paused: "PAUSED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  FileTypeNotSupported: "FILE_TYPE_NOT_SUPPORTED",
  AutoIndexOff: "AUTO_INDEX_OFF",
  Empty: "EMPTY",
  EnableMultimodalModels: "ENABLE_MULTIMODAL_MODELS",
  Queued: "QUEUED",
} as const;
export type IndexingStatus = (typeof IndexingStatus)[keyof typeof IndexingStatus] | (string & {});

export const indexingStatusSchema: EnumSchema<IndexingStatus> = s.enumOf<IndexingStatus>(IndexingStatus);
