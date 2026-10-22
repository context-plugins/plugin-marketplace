import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaJsonUnrollSchema,
  type FunctionConfSchemaJsonUnroll,
} from "./function-conf-schema-json-unroll.js";

export type PipelineFunctionJsonUnroll = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>json_unroll</code> @default "json_unroll" */
  id?: "json_unroll";
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
  conf: FunctionConfSchemaJsonUnroll;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionJsonUnrollSchema: Schema<PipelineFunctionJsonUnroll> =
  s.object<PipelineFunctionJsonUnroll>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("json_unroll"), "json_unroll"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaJsonUnrollSchema,
    groupId: s.optional(s.string()),
  });
