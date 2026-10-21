import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaOtlpTraces1Schema,
  type FunctionConfSchemaOtlpTraces1,
} from "./function-conf-schema-otlp-traces1.js";

export type PipelineFunctionOtlpTraces = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>otlp_traces</code> @default "otlp_traces" */
  id?: "otlp_traces";
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
  conf: FunctionConfSchemaOtlpTraces1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionOtlpTracesSchema: Schema<PipelineFunctionOtlpTraces> =
  s.object<PipelineFunctionOtlpTraces>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("otlp_traces"), "otlp_traces"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaOtlpTraces1Schema,
    groupId: s.optional(s.string()),
  });
