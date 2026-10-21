import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaLookupSchema,
  type FunctionConfSchemaLookup,
} from "./function-conf-schema-lookup.js";

export type PipelineFunctionLookup = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>lookup</code> @default "lookup" */
  id?: "lookup";
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
  conf: FunctionConfSchemaLookup;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionLookupSchema: Schema<PipelineFunctionLookup> = s.object<PipelineFunctionLookup>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("lookup"), "lookup"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: functionConfSchemaLookupSchema,
  groupId: s.optional(s.string()),
});
