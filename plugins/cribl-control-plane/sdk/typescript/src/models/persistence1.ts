import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataCompressionFormatSchema, type DataCompressionFormat } from "./data-compression-format.js";

/** Disk spooling settings for collected system state data. */
export type Persistence1 = {
  /** Spool metrics to disk for Cribl Edge and Search */
  enable?: boolean;
  /** Time span for each file bucket */
  timeWindow?: string;
  /**
   * Maximum disk space allowed to be consumed (examples: 420MB, 4GB). When limit is reached, older
   * data will be deleted.
   */
  maxDataSize?: string;
  /**
   * Maximum amount of time to retain data (examples: 2h, 4d). When limit is reached, older data
   * will be deleted.
   */
  maxDataTime?: string;
  /** Data compression format */
  compress?: DataCompressionFormat;
  /** Path to use to write metrics. Defaults to $CRIBL_HOME/state/system_state */
  destPath?: string;
};

export const persistence1Schema: Schema<Persistence1> = s.object<Persistence1>({
  enable: s.optional(s.boolean()),
  timeWindow: s.optional(s.string()),
  maxDataSize: s.optional(s.string()),
  maxDataTime: s.optional(s.string()),
  compress: s.optional(s.lazy(() => dataCompressionFormatSchema)),
  destPath: s.optional(s.string()),
});
