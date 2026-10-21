import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaMvExpandSchema,
  type FunctionConfSchemaMvExpand,
} from "./function-conf-schema-mv-expand.js";

export type PipelineFunctionMvExpand = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>mv_expand</code> @default "mv_expand" */
  id?: "mv_expand";
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
  conf: FunctionConfSchemaMvExpand;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionMvExpandSchema: Schema<PipelineFunctionMvExpand> =
  s.object<PipelineFunctionMvExpand>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("mv_expand"), "mv_expand"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaMvExpandSchema,
    groupId: s.optional(s.string()),
  });
