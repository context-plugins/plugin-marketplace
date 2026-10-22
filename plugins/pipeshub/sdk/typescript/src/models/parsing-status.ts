import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Parse-phase status (ahead of indexing/extraction):
 * - NOT_STARTED: Awaiting parsing
 * - QUEUED: In parsing queue
 * - IN_PROGRESS: Currently being parsed
 * - COMPLETED: Successfully parsed
 * - FAILED: Parsing failed
 * - FILE_TYPE_NOT_SUPPORTED: Unsupported file format
 * - AUTO_INDEX_OFF: Auto-indexing disabled for this record
 * - EMPTY: File has no extractable content
 */
export const ParsingStatus = {
  NotStarted: "NOT_STARTED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
  FileTypeNotSupported: "FILE_TYPE_NOT_SUPPORTED",
  AutoIndexOff: "AUTO_INDEX_OFF",
  Empty: "EMPTY",
  Queued: "QUEUED",
} as const;
export type ParsingStatus = (typeof ParsingStatus)[keyof typeof ParsingStatus] | (string & {});

export const parsingStatusSchema: EnumSchema<ParsingStatus> = s.enumOf<ParsingStatus>(ParsingStatus);
