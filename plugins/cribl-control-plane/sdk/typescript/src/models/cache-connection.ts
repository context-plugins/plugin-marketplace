import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  lakehouseConnectionType1Schema,
  type LakehouseConnectionType1,
} from "./lakehouse-connection-type1.js";

export type CacheConnection = {
  /** Accelerated fields (materialized columns) for the cache connection. */
  acceleratedFields?: string[];
  /** Unique identifier for the Lakehouse cache referenced by the Dataset. */
  cacheRef: string;
  /**
   * Timestamp (in Unix time) when the continuous data feed to the Lakehouse cache started, in
   * milliseconds.
   */
  createdAt: number;
  /**
   * If <code>new</code>, the Lakehouse was attached before data existed in the Dataset. If
   * <code>existing</code>, the Lakehouse was attached after data existed in the Dataset.
   */
  lakehouseConnectionType?: LakehouseConnectionType1;
  /**
   * Unique identifier for the active Lakehouse migration query. Omitted if no migration is in
   * progress.
   */
  migrationQueryId?: string;
  /** Retention period for the Lakehouse cache connection, in days. */
  retentionInDays: number;
};

export const cacheConnectionSchema: Schema<CacheConnection> = s.object<CacheConnection>({
  acceleratedFields: s.optional(s.array(s.string())),
  cacheRef: s.string(),
  createdAt: s.float64(),
  lakehouseConnectionType: s.optional(s.lazy(() => lakehouseConnectionType1Schema)),
  migrationQueryId: s.optional(s.string()),
  retentionInDays: s.float64(),
});
