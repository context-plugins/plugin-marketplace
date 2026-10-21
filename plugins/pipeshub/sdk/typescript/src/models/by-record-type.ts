import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectorIndexingStatusCountsSchema,
  type ConnectorIndexingStatusCounts,
} from "./connector-indexing-status-counts.js";

export type ByRecordType = {
  recordType: string;
  total: number;
  /** Number of records in each indexing status. */
  indexingStatus: ConnectorIndexingStatusCounts;
};

export const byRecordTypeSchema: Schema<ByRecordType> = s.object<ByRecordType>({
  recordType: s.string(),
  total: s.int(),
  indexingStatus: connectorIndexingStatusCountsSchema,
});
