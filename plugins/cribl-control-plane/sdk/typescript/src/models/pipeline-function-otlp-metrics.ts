import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaOtlpMetrics1Schema,
  type FunctionConfSchemaOtlpMetrics1,
} from "./function-conf-schema-otlp-metrics1.js";

export type PipelineFunctionOtlpMetrics = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>otlp_metrics</code> @default "otlp_metrics" */
  id?: "otlp_metrics";
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
  conf: FunctionConfSchemaOtlpMetrics1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionOtlpMetricsSchema: Schema<PipelineFunctionOtlpMetrics> =
  s.object<PipelineFunctionOtlpMetrics>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("otlp_metrics"), "otlp_metrics"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaOtlpMetrics1Schema,
    groupId: s.optional(s.string()),
  });
