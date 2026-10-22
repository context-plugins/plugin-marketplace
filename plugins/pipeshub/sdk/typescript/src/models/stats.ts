import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectorIndexingStatusCountsSchema,
  type ConnectorIndexingStatusCounts,
} from "./connector-indexing-status-counts.js";

export type Stats = {
  /** Records synced from the connector */
  total: number;
  /** Number of records in each indexing status. */
  indexingStatus: ConnectorIndexingStatusCounts;
};

export const statsSchema: Schema<Stats> = s.object<Stats>({
  total: s.int(),
  indexingStatus: connectorIndexingStatusCountsSchema,
});
