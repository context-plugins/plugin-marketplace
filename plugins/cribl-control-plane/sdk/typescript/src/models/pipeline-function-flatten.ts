import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaFlatten1Schema,
  type FunctionConfSchemaFlatten1,
} from "./function-conf-schema-flatten1.js";

export type PipelineFunctionFlatten = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>flatten</code> @default "flatten" */
  id?: "flatten";
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
  conf: FunctionConfSchemaFlatten1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionFlattenSchema: Schema<PipelineFunctionFlatten> =
  s.object<PipelineFunctionFlatten>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("flatten"), "flatten"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaFlatten1Schema,
    groupId: s.optional(s.string()),
  });
