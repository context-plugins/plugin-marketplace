import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { evaluateFieldSchema, type EvaluateField } from "./evaluate-field.js";

export type FunctionConfSchemaAggregation = {
  /** Pass through the original events along with the aggregation events */
  passthrough?: boolean;
  /** Preserve the structure of the original aggregation event's groupby fields */
  preserveGroupBys?: boolean;
  /** Output only statistics that are sufficient for the supplied aggregations */
  sufficientStatsOnly?: boolean;
  /** Enable to output the aggregates as metrics. When disabled, aggregates are output as events. */
  metricsMode?: boolean;
  /** A prefix that is prepended to all of the fields output by this Aggregations Function */
  prefix?: string;
  /**
   * The time span of the tumbling window for aggregating events. Must be a valid time string (such
   * as 10s).
   */
  timeWindow?: string;
  /**
   * Aggregate function to perform on events. Example:
   * sum(bytes).where(action=='REJECT').as(TotalBytes)
   */
  aggregations?: string[];
  /**
   * Optional: One or more fields to group aggregates by. Supports wildcard expressions. Warning:
   * Using wildcard '*' causes all fields in the event to be included, which can result in high
   * cardinality and increased memory usage. Exclude fields that can result in high cardinality
   * before using wildcards. Example: !_time, !_numericValue, *
   */
  groupbys?: string[];
  /** The maximum number of events to include in any given aggregation event */
  flushEventLimit?: number;
  /**
   * The memory usage limit to impose upon aggregations. Defaults to 80% of the process memory;
   * value configured above default limit is ignored. Accepts numerals with units like KB and MB
   * (example: 128MB).
   */
  flushMemLimit?: string;
  /**
   * Enable to retain aggregations for cumulative aggregations when flushing out an aggregation
   * table event. When disabled (the default), aggregations are reset to 0 on flush.
   */
  cumulative?: boolean;
  /** Allows Cribl Search-specific aggregation configuration */
  searchAggMode?: string;
  /** Set of key-value pairs to evaluate and add/set */
  add?: EvaluateField[];
  /**
   * Treat dots in dimension names as literals. This is useful for top-level dimensions that contain
   * dots, such as 'service.name'.
   */
  shouldTreatDotsAsLiterals?: boolean;
  /**
   * Flush aggregations when an input stream is closed. If disabled, Time Window Settings control
   * flush behavior.
   */
  flushOnInputClose?: boolean;
  /**
   * When enabled (e.g. for Cribl Search), convert undefined expression results to null so
   * requested-but-missing fields appear in JSON output. When disabled (default), undefined is
   * preserved.
   */
  printUndefineds?: boolean;
  /** The tumbling window tolerance to late events. Must be a valid time string (such as 10s). */
  lagTolerance?: string;
  /**
   * How long to wait before flushing a bucket that has not received events. Must be a valid time
   * string (such as 10s).
   */
  idleTimeLimit?: string;
};

export const functionConfSchemaAggregationSchema: Schema<FunctionConfSchemaAggregation> =
  s.object<FunctionConfSchemaAggregation>({
    passthrough: s.optional(s.boolean()),
    preserveGroupBys: s.optional(s.boolean()),
    sufficientStatsOnly: s.optional(s.boolean()),
    metricsMode: s.optional(s.boolean()),
    prefix: s.optional(s.string()),
    timeWindow: s.optional(s.string()),
    aggregations: s.optional(s.array(s.string())),
    groupbys: s.optional(s.array(s.string())),
    flushEventLimit: s.optional(s.float64()),
    flushMemLimit: s.optional(s.string()),
    cumulative: s.optional(s.boolean()),
    searchAggMode: s.optional(s.string()),
    add: s.optional(s.array(s.lazy(() => evaluateFieldSchema))),
    shouldTreatDotsAsLiterals: s.optional(s.boolean()),
    flushOnInputClose: s.optional(s.boolean()),
    printUndefineds: s.optional(s.boolean()),
    lagTolerance: s.optional(s.string()),
    idleTimeLimit: s.optional(s.string()),
  });
