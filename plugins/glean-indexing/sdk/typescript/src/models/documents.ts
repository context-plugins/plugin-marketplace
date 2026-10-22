import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkUploadHistoryEventSchema, type BulkUploadHistoryEvent } from "./bulk-upload-history-event.js";
import { countsSchema, type Counts } from "./counts.js";
import { processingHistoryEventSchema, type ProcessingHistoryEvent } from "./processing-history-event.js";

export type Documents = {
  /** Information about active and recent successful uploads for the datasource */
  bulkUploadHistory?: BulkUploadHistoryEvent[];
  counts?: Counts;
  /** Information about processing history for the datasource */
  processingHistory?: ProcessingHistoryEvent[];
};

export const documentsSchema: Schema<Documents> = s.object<Documents>({
  bulkUploadHistory: s.optional(s.array(s.lazy(() => bulkUploadHistoryEventSchema))),
  counts: s.optional(s.lazy(() => countsSchema)),
  processingHistory: s.optional(s.array(s.lazy(() => processingHistoryEventSchema))),
});
