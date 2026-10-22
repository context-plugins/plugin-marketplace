import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { compression101Schema, type Compression101 } from "./compression101.js";

export type OutputDiskSpool = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "disk_spool" */
  type?: "disk_spool";
  /** Pipeline to process data before sending out to this output */
  pipeline?: string;
  /** Fields to automatically add to events, such as cribl_pipe. Supports wildcards. */
  systemFields?: string[];
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /** Time period for grouping spooled events. Default is 10m. */
  timeWindow?: string;
  /**
   * Maximum disk space that can be consumed before older buckets are deleted. Examples: 420MB, 4GB.
   * Default is 1GB.
   */
  maxDataSize?: string;
  /**
   * Maximum amount of time to retain data before older buckets are deleted. Examples: 2h, 4d.
   * Default is 24h.
   */
  maxDataTime?: string;
  /** Data compression format. Default is gzip. */
  compress?: Compression101;
  /**
   * JavaScript expression defining how files are partitioned and organized within the time-buckets.
   * If blank, the event's __partition property is used and otherwise, events go directly into the
   * time-bucket directory.
   */
  partitionExpr?: string;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
};

export const outputDiskSpoolSchema: Schema<OutputDiskSpool> = s.object<OutputDiskSpool>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("disk_spool"), "disk_spool"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  timeWindow: s.optional(s.string()),
  maxDataSize: s.optional(s.string()),
  maxDataTime: s.optional(s.string()),
  compress: s.optional(s.lazy(() => compression101Schema)),
  partitionExpr: s.optional(s.string()),
  description: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateStreamtags: "__template_streamtags",
  },
});
