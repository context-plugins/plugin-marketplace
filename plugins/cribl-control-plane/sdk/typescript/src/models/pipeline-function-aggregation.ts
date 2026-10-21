import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaAggregationSchema,
  type FunctionConfSchemaAggregation,
} from "./function-conf-schema-aggregation.js";

export type PipelineFunctionAggregation = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>aggregation</code> @default "aggregation" */
  id?: "aggregation";
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
  conf: FunctionConfSchemaAggregation;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionAggregationSchema: Schema<PipelineFunctionAggregation> =
  s.object<PipelineFunctionAggregation>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("aggregation"), "aggregation"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaAggregationSchema,
    groupId: s.optional(s.string()),
  });
