import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaTrimTimestamp1Schema,
  type FunctionConfSchemaTrimTimestamp1,
} from "./function-conf-schema-trim-timestamp1.js";

export type PipelineFunctionTrimTimestamp = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>trim_timestamp</code> @default "trim_timestamp" */
  id?: "trim_timestamp";
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
  conf: FunctionConfSchemaTrimTimestamp1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionTrimTimestampSchema: Schema<PipelineFunctionTrimTimestamp> =
  s.object<PipelineFunctionTrimTimestamp>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("trim_timestamp"), "trim_timestamp"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaTrimTimestamp1Schema,
    groupId: s.optional(s.string()),
  });
