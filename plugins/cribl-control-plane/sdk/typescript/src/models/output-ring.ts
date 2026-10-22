import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { backpressureBehavior81Schema, type BackpressureBehavior81 } from "./backpressure-behavior81.js";
import { dataCompressionFormatSchema, type DataCompressionFormat } from "./data-compression-format.js";
import { dataFormat7Schema, type DataFormat7 } from "./data-format7.js";

export type OutputRing = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "ring" */
  type?: "ring";
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
  /** Format of the output data. */
  format?: DataFormat7;
  /**
   * JS expression to define how files are partitioned and organized. If left blank, Cribl Stream
   * will fallback on event.__partition.
   */
  partitionExpr?: string;
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
  /** Path to use to write metrics. Defaults to $CRIBL_HOME/state/<id> */
  destPath?: string;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior81;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
};

export const outputRingSchema: Schema<OutputRing> = s.object<OutputRing>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("ring"), "ring"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  format: s.optional(s.lazy(() => dataFormat7Schema)),
  partitionExpr: s.optional(s.string()),
  maxDataSize: s.optional(s.string()),
  maxDataTime: s.optional(s.string()),
  compress: s.optional(s.lazy(() => dataCompressionFormatSchema)),
  destPath: s.optional(s.string()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehavior81Schema)),
  description: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  _keysMap: {
    templateStreamtags: "__template_streamtags",
    templateOnBackpressure: "__template_onBackpressure",
  },
});
