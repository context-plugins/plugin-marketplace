import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaAutoTimestamp1Schema,
  type FunctionConfSchemaAutoTimestamp1,
} from "./function-conf-schema-auto-timestamp1.js";

export type PipelineFunctionAutoTimestamp = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>auto_timestamp</code> @default "auto_timestamp" */
  id?: "auto_timestamp";
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
  conf: FunctionConfSchemaAutoTimestamp1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionAutoTimestampSchema: Schema<PipelineFunctionAutoTimestamp> =
  s.object<PipelineFunctionAutoTimestamp>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("auto_timestamp"), "auto_timestamp"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaAutoTimestamp1Schema,
    groupId: s.optional(s.string()),
  });
