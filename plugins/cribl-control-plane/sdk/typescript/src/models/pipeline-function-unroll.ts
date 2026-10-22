import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaUnrollSchema,
  type FunctionConfSchemaUnroll,
} from "./function-conf-schema-unroll.js";

export type PipelineFunctionUnroll = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>unroll</code> @default "unroll" */
  id?: "unroll";
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
  conf: FunctionConfSchemaUnroll;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionUnrollSchema: Schema<PipelineFunctionUnroll> = s.object<PipelineFunctionUnroll>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("unroll"), "unroll"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: functionConfSchemaUnrollSchema,
  groupId: s.optional(s.string()),
});
