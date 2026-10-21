import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Processing history event for a datasource */
export type ProcessingHistoryEvent = {
  /** The start time of the processing in ISO 8601 format */
  startTime?: string;
  /** The end time of the processing in ISO 8601 format, 'NA' if still in progress */
  endTime?: string;
};

export const processingHistoryEventSchema: Schema<ProcessingHistoryEvent> = s.object<ProcessingHistoryEvent>({
  startTime: s.optional(s.string()),
  endTime: s.optional(s.string()),
});
