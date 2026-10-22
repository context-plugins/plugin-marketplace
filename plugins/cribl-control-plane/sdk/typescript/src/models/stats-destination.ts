import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  exceptionRetrySettingConfOutputLocalSearchStorageSchema,
  type ExceptionRetrySettingConfOutputLocalSearchStorage,
} from "./exception-retry-setting-conf-output-local-search-storage.js";

/** Internal destination settings for batch metadata and statistics. */
export type StatsDestination = {
  /** URL of the database that stores batch metadata and statistics. */
  url?: string;
  /** Name of the database that stores batch metadata and statistics. */
  database?: string;
  /** Name of the table that stores batch metadata and statistics. */
  tableName?: string;
  /** Authentication method for the statistics destination. */
  authType?: string;
  /** Username for the statistics destination. */
  username?: string;
  /** SQL username for the statistics destination. */
  sqlUsername?: string;
  /** Password for the statistics destination. */
  password?: string;
  /** Whether to wait for asynchronous inserts to complete. */
  waitForAsyncInserts?: boolean;
  /** Maximum number of concurrent requests to the statistics destination. */
  concurrency?: number;
  /**
   * Retry automatically when ClickHouse reports a matching exception code, such as 241 (memory
   * limit exceeded) or 202 (too many simultaneous queries). These settings take precedence over
   * Settings for failed HTTP requests.
   */
  exceptionRetrySettings?: ExceptionRetrySettingConfOutputLocalSearchStorage[];
};

export const statsDestinationSchema: Schema<StatsDestination> = s.object<StatsDestination>({
  url: s.optional(s.string()),
  database: s.optional(s.string()),
  tableName: s.optional(s.string()),
  authType: s.optional(s.string()),
  username: s.optional(s.string()),
  sqlUsername: s.optional(s.string()),
  password: s.optional(s.string()),
  waitForAsyncInserts: s.optional(s.boolean()),
  concurrency: s.optional(s.float64()),
  exceptionRetrySettings: s.optional(
    s.array(s.lazy(() => exceptionRetrySettingConfOutputLocalSearchStorageSchema)),
  ),
});
