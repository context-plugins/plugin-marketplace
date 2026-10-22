import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataCompressionFormatSchema, type DataCompressionFormat } from "./data-compression-format.js";

/** Persistence */
export type Persistence4 = {
  /** Spool events and metrics on disk for Cribl Edge and Search */
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
  /** Path to use to write metrics. Defaults to $CRIBL_HOME/state/appscope */
  destPath?: string;
};

export const persistence4Schema: Schema<Persistence4> = s.object<Persistence4>({
  enable: s.optional(s.boolean()),
  timeWindow: s.optional(s.string()),
  maxDataSize: s.optional(s.string()),
  maxDataTime: s.optional(s.string()),
  compress: s.optional(s.lazy(() => dataCompressionFormatSchema)),
  destPath: s.optional(s.string()),
});
