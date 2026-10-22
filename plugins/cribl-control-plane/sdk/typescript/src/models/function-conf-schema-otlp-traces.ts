import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { otlpVersion1Schema, type OtlpVersion1 } from "./otlp-version1.js";

export type FunctionConfSchemaOtlpTraces = {
  /** Drop events that are not OTLP trace spans. */
  dropNonTraceEvents?: boolean;
  /** OpenTelemetry Protocol (OTLP) version to use for trace serialization. */
  otlpVersion?: OtlpVersion1;
  /** Batch OTLP traces by shared top-level `resource` attributes */
  batchOtlpTraces?: boolean;
  /** Number of spans after which a batch will be sent, regardless of the timeout */
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

export const functionConfSchemaOtlpTracesSchema: Schema<FunctionConfSchemaOtlpTraces> =
  s.object<FunctionConfSchemaOtlpTraces>({
    dropNonTraceEvents: s.optional(s.boolean()),
    otlpVersion: s.optional(s.lazy(() => otlpVersion1Schema)),
    batchOtlpTraces: s.optional(s.boolean()),
    sendBatchSize: s.optional(s.float64()),
    timeout: s.optional(s.float64()),
    sendBatchMaxSize: s.optional(s.float64()),
    metadataKeys: s.optional(s.array(s.string())),
    metadataCardinalityLimit: s.optional(s.float64()),
    _keysMap: {
      batchOtlpTraces: "batchOTLPTraces",
    },
  });
