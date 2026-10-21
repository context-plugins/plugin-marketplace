import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaRename1Schema,
  type FunctionConfSchemaRename1,
} from "./function-conf-schema-rename1.js";

export type PipelineFunctionRename = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>rename</code> @default "rename" */
  id?: "rename";
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
  conf: FunctionConfSchemaRename1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionRenameSchema: Schema<PipelineFunctionRename> = s.object<PipelineFunctionRename>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("rename"), "rename"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: functionConfSchemaRename1Schema,
  groupId: s.optional(s.string()),
});
