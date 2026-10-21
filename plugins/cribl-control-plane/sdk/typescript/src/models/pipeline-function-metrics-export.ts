import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  metricsExportConfigurationSchema,
  type MetricsExportConfiguration,
} from "./metrics-export-configuration.js";

export type PipelineFunctionMetricsExport = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>metrics_export</code> @default "metrics_export" */
  id?: "metrics_export";
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
  conf: MetricsExportConfiguration;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionMetricsExportSchema: Schema<PipelineFunctionMetricsExport> =
  s.object<PipelineFunctionMetricsExport>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("metrics_export"), "metrics_export"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: metricsExportConfigurationSchema,
    groupId: s.optional(s.string()),
  });
