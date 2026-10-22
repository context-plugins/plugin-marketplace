import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaAggregateMetricsSchema,
  type FunctionConfSchemaAggregateMetrics,
} from "./function-conf-schema-aggregate-metrics.js";

export type PipelineFunctionAggregateMetrics = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /**
   * Identifier of the Function. Always <code>aggregate_metrics</code>
   *
   * @default "aggregate_metrics"
   */
  id?: "aggregate_metrics";
  /** Brief description of the Pipeline function. */
  description?: string;
  /**
   * If <code>true</code>, disable the Pipeline function so that events are not passed through it.
   * Otherwise, <code>false</code>.
   */
  disabled?: boolean;
  /**
   * If <code>true</code>, stop passing events to downstream Pipeline Functions after the Function
   * executes. Otherwise, <code>false</code>.
   */
  final?: boolean;
  /** Configuration specific to the Pipeline Function. */
  conf: FunctionConfSchemaAggregateMetrics;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionAggregateMetricsSchema: Schema<PipelineFunctionAggregateMetrics> =
  s.object<PipelineFunctionAggregateMetrics>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("aggregate_metrics"), "aggregate_metrics"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaAggregateMetricsSchema,
    groupId: s.optional(s.string()),
  });
