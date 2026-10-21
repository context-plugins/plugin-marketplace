import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaClone1Schema,
  type FunctionConfSchemaClone1,
} from "./function-conf-schema-clone1.js";

export type PipelineFunctionClone = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>clone</code> @default "clone" */
  id?: "clone";
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
  conf: FunctionConfSchemaClone1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionCloneSchema: Schema<PipelineFunctionClone> = s.object<PipelineFunctionClone>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("clone"), "clone"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: functionConfSchemaClone1Schema,
  groupId: s.optional(s.string()),
});
