import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaRegexFilter1Schema,
  type FunctionConfSchemaRegexFilter1,
} from "./function-conf-schema-regex-filter1.js";

export type PipelineFunctionRegexFilter = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>regex_filter</code> @default "regex_filter" */
  id?: "regex_filter";
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
  conf: FunctionConfSchemaRegexFilter1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionRegexFilterSchema: Schema<PipelineFunctionRegexFilter> =
  s.object<PipelineFunctionRegexFilter>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("regex_filter"), "regex_filter"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaRegexFilter1Schema,
    groupId: s.optional(s.string()),
  });
