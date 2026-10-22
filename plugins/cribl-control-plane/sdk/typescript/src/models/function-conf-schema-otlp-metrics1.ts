import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { otlpVersion6Schema, type OtlpVersion6 } from "./otlp-version6.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaOtlpMetrics1 = {
  /**
   * Top-level event fields to promote as OTLP resource attributes. Entries without `*` match the
   * attribute name exactly (`cluster` matches only `cluster`). Append `*` for prefix matching
   * (`cluster*` also matches `cluster_id` and `cluster.name`). Use `!` to exclude names; list
   * exclusions before broader patterns (for example `!k8s.internal.*`, `k8s.*`). Matching is by
   * whole top-level field name only; it does not walk nested objects. Use Eval to copy nested
   * fields to the top level first.
   */
  resourceAttributes?: string[];
  /**
   * Deprecated. Prefer 'Resource attributes', which supports exact and wildcard matching. This
   * field lists prefixes of top-level attributes to add as resource attributes. Every entry is
   * treated as a prefix, so `cluster` also matches `cluster_foo`, with no way to match an attribute
   * name exactly. This field applies only when 'Resource attributes' is empty. Use Eval to copy
   * nested attributes to the top level for matching.
   */
  resourceAttributePrefixes?: string[];
  /** Drop events that are not OTLP metric data points. */
  dropNonMetricEvents?: boolean;
  /** OpenTelemetry Protocol (OTLP) version to use for metric serialization. */
  otlpVersion?: OtlpVersion6;
  /** Batch OTLP metrics by shared top-level `resource` attributes */
  batchOtlpMetrics?: boolean;
  /** Number of metric data points after which a batch will be sent, regardless of the timeout */
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

export const functionConfSchemaOtlpMetrics1Schema: Schema<FunctionConfSchemaOtlpMetrics1> =
  s.object<FunctionConfSchemaOtlpMetrics1>({
    resourceAttributes: s.optional(s.array(s.string())),
    resourceAttributePrefixes: s.optional(s.array(s.string())),
    dropNonMetricEvents: s.optional(s.boolean()),
    otlpVersion: s.optional(s.lazy(() => otlpVersion6Schema)),
    batchOtlpMetrics: s.optional(s.boolean()),
    sendBatchSize: s.optional(s.float64()),
    timeout: s.optional(s.float64()),
    sendBatchMaxSize: s.optional(s.float64()),
    metadataKeys: s.optional(s.array(s.string())),
    metadataCardinalityLimit: s.optional(s.float64()),
    _keysMap: {
      batchOtlpMetrics: "batchOTLPMetrics",
    },
  });
