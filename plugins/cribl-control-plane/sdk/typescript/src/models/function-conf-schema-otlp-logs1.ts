import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaOtlpLogs1 = {
  /** Drop events that are not OTLP log records. */
  dropNonLogEvents?: boolean;
  /**
   * Body and attribute values already in OTLP AnyValue form (e.g. {string_value: "..."}) are
   * preserved rather than being re-wrapped
   */
  preserveNativeAnyValue?: boolean;
  /** Batch OTLP log records by shared top-level `resource` attributes */
  batchOtlpLogs?: boolean;
  /** Number of log records after which a batch will be sent, regardless of the timeout */
  sendBatchSize?: number;
  /** Time duration after which a batch will be sent, regardless of size */
  timeout?: number;
  /** Maximum batch size. Enter 0 for no maximum. */
  sendBatchMaxSize?: number;
  /**
   * When set, this processor will create one batcher instance per distinct combination of values in
   * the metadata
   */
  metadataKeys?: string[];
  /**
   * Limit the number of unique combinations of metadata key values that will be processed over the
   * lifetime of the process. After the limit is reached, events with new metadata key value
   * combinations will be dropped.
   */
  metadataCardinalityLimit?: number;
};

export const functionConfSchemaOtlpLogs1Schema: Schema<FunctionConfSchemaOtlpLogs1> =
  s.object<FunctionConfSchemaOtlpLogs1>({
    dropNonLogEvents: s.optional(s.boolean()),
    preserveNativeAnyValue: s.optional(s.boolean()),
    batchOtlpLogs: s.optional(s.boolean()),
    sendBatchSize: s.optional(s.float64()),
    timeout: s.optional(s.float64()),
    sendBatchMaxSize: s.optional(s.float64()),
    metadataKeys: s.optional(s.array(s.string())),
    metadataCardinalityLimit: s.optional(s.float64()),
    _keysMap: {
      batchOtlpLogs: "batchOTLPLogs",
    },
  });
