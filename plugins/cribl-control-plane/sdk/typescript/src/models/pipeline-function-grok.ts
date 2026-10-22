import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { functionConfSchemaGrokSchema, type FunctionConfSchemaGrok } from "./function-conf-schema-grok.js";

export type PipelineFunctionGrok = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>grok</code> @default "grok" */
  id?: "grok";
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
  conf: FunctionConfSchemaGrok;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionGrokSchema: Schema<PipelineFunctionGrok> = s.object<PipelineFunctionGrok>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("grok"), "grok"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: functionConfSchemaGrokSchema,
  groupId: s.optional(s.string()),
});
