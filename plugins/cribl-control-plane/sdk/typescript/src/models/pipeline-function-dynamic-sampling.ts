import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaDynamicSamplingSchema,
  type FunctionConfSchemaDynamicSampling,
} from "./function-conf-schema-dynamic-sampling.js";

export type PipelineFunctionDynamicSampling = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /**
   * Identifier of the Function. Always <code>dynamic_sampling</code>
   *
   * @default "dynamic_sampling"
   */
  id?: "dynamic_sampling";
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
  conf: FunctionConfSchemaDynamicSampling;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionDynamicSamplingSchema: Schema<PipelineFunctionDynamicSampling> =
  s.object<PipelineFunctionDynamicSampling>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("dynamic_sampling"), "dynamic_sampling"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaDynamicSamplingSchema,
    groupId: s.optional(s.string()),
  });
