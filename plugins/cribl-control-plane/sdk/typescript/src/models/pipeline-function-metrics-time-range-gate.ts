import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PipelineFunctionMetricsTimeRangeGate = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /**
   * Identifier of the Function. Always <code>metrics_time_range_gate</code>
   *
   * @default "metrics_time_range_gate"
   */
  id?: "metrics_time_range_gate";
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
  conf: Record<string, unknown>;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionMetricsTimeRangeGateSchema: Schema<PipelineFunctionMetricsTimeRangeGate> =
  s.object<PipelineFunctionMetricsTimeRangeGate>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("metrics_time_range_gate"), "metrics_time_range_gate"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: s.record(s.string(), s.unknown()),
    groupId: s.optional(s.string()),
  });
