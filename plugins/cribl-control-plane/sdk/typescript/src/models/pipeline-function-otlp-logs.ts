import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaOtlpLogs1Schema,
  type FunctionConfSchemaOtlpLogs1,
} from "./function-conf-schema-otlp-logs1.js";

export type PipelineFunctionOtlpLogs = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>otlp_logs</code> @default "otlp_logs" */
  id?: "otlp_logs";
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
  conf: FunctionConfSchemaOtlpLogs1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionOtlpLogsSchema: Schema<PipelineFunctionOtlpLogs> =
  s.object<PipelineFunctionOtlpLogs>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("otlp_logs"), "otlp_logs"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaOtlpLogs1Schema,
    groupId: s.optional(s.string()),
  });
