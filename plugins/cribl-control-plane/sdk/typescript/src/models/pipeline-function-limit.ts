import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaLimit1Schema,
  type FunctionConfSchemaLimit1,
} from "./function-conf-schema-limit1.js";

export type PipelineFunctionLimit = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>limit</code> @default "limit" */
  id?: "limit";
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
  conf: FunctionConfSchemaLimit1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionLimitSchema: Schema<PipelineFunctionLimit> = s.object<PipelineFunctionLimit>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("limit"), "limit"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: functionConfSchemaLimit1Schema,
  groupId: s.optional(s.string()),
});
