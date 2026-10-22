import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaPublishMetrics1Schema,
  type FunctionConfSchemaPublishMetrics1,
} from "./function-conf-schema-publish-metrics1.js";

export type PipelineFunctionPublishMetrics = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>publish_metrics</code> @default "publish_metrics" */
  id?: "publish_metrics";
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
  conf: FunctionConfSchemaPublishMetrics1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionPublishMetricsSchema: Schema<PipelineFunctionPublishMetrics> =
  s.object<PipelineFunctionPublishMetrics>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("publish_metrics"), "publish_metrics"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaPublishMetrics1Schema,
    groupId: s.optional(s.string()),
  });
