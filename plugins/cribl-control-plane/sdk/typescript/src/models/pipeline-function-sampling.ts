import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaSampling1Schema,
  type FunctionConfSchemaSampling1,
} from "./function-conf-schema-sampling1.js";

export type PipelineFunctionSampling = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>sampling</code> @default "sampling" */
  id?: "sampling";
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
  conf: FunctionConfSchemaSampling1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionSamplingSchema: Schema<PipelineFunctionSampling> =
  s.object<PipelineFunctionSampling>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("sampling"), "sampling"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaSampling1Schema,
    groupId: s.optional(s.string()),
  });
