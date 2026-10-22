import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaWindowSchema,
  type FunctionConfSchemaWindow,
} from "./function-conf-schema-window.js";

export type PipelineFunctionWindow = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>window</code> @default "window" */
  id?: "window";
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
  conf: FunctionConfSchemaWindow;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionWindowSchema: Schema<PipelineFunctionWindow> = s.object<PipelineFunctionWindow>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("window"), "window"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: functionConfSchemaWindowSchema,
  groupId: s.optional(s.string()),
});
