import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { functionConfSchemaCef1Schema, type FunctionConfSchemaCef1 } from "./function-conf-schema-cef1.js";

export type PipelineFunctionCef = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>cef</code> @default "cef" */
  id?: "cef";
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
  conf: FunctionConfSchemaCef1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionCefSchema: Schema<PipelineFunctionCef> = s.object<PipelineFunctionCef>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("cef"), "cef"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: functionConfSchemaCef1Schema,
  groupId: s.optional(s.string()),
});
