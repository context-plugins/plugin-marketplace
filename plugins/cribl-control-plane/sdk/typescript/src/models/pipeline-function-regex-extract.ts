import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaRegexExtractSchema,
  type FunctionConfSchemaRegexExtract,
} from "./function-conf-schema-regex-extract.js";

export type PipelineFunctionRegexExtract = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>regex_extract</code> @default "regex_extract" */
  id?: "regex_extract";
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
  conf: FunctionConfSchemaRegexExtract;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionRegexExtractSchema: Schema<PipelineFunctionRegexExtract> =
  s.object<PipelineFunctionRegexExtract>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("regex_extract"), "regex_extract"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaRegexExtractSchema,
    groupId: s.optional(s.string()),
  });
