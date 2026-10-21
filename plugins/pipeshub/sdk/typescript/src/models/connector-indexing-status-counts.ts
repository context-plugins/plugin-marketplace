import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Number of records in each indexing status. */
export type ConnectorIndexingStatusCounts = {
  notStarted?: number;
  paused?: number;
  inProgress?: number;
  completed?: number;
  failed?: number;
  fileTypeNotSupported?: number;
  autoIndexOff?: number;
  empty?: number;
  enableMultimodalModels?: number;
  queued?: number;
};

export const connectorIndexingStatusCountsSchema: Schema<ConnectorIndexingStatusCounts> =
  s.object<ConnectorIndexingStatusCounts>({
    notStarted: s.optional(s.int()),
    paused: s.optional(s.int()),
    inProgress: s.optional(s.int()),
    completed: s.optional(s.int()),
    failed: s.optional(s.int()),
    fileTypeNotSupported: s.optional(s.int()),
    autoIndexOff: s.optional(s.int()),
    empty: s.optional(s.int()),
    enableMultimodalModels: s.optional(s.int()),
    queued: s.optional(s.int()),
    _keysMap: {
      notStarted: "NOT_STARTED",
      paused: "PAUSED",
      inProgress: "IN_PROGRESS",
      completed: "COMPLETED",
      failed: "FAILED",
      fileTypeNotSupported: "FILE_TYPE_NOT_SUPPORTED",
      autoIndexOff: "AUTO_INDEX_OFF",
      empty: "EMPTY",
      enableMultimodalModels: "ENABLE_MULTIMODAL_MODELS",
      queued: "QUEUED",
    },
  });
