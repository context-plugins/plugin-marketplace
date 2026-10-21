import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaComment1Schema,
  type FunctionConfSchemaComment1,
} from "./function-conf-schema-comment1.js";

export type PipelineFunctionComment = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>comment</code> @default "comment" */
  id?: "comment";
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
  conf: FunctionConfSchemaComment1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionCommentSchema: Schema<PipelineFunctionComment> =
  s.object<PipelineFunctionComment>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("comment"), "comment"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaComment1Schema,
    groupId: s.optional(s.string()),
  });
