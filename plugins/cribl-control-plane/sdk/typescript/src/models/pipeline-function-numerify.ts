import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaNumerify1Schema,
  type FunctionConfSchemaNumerify1,
} from "./function-conf-schema-numerify1.js";

export type PipelineFunctionNumerify = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>numerify</code> @default "numerify" */
  id?: "numerify";
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
  conf: FunctionConfSchemaNumerify1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionNumerifySchema: Schema<PipelineFunctionNumerify> =
  s.object<PipelineFunctionNumerify>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("numerify"), "numerify"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaNumerify1Schema,
    groupId: s.optional(s.string()),
  });
