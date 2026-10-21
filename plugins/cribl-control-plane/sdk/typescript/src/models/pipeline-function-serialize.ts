import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaSerializeSchema,
  type FunctionConfSchemaSerialize,
} from "./function-conf-schema-serialize.js";

export type PipelineFunctionSerialize = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>serialize</code> @default "serialize" */
  id?: "serialize";
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
  conf: FunctionConfSchemaSerialize;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionSerializeSchema: Schema<PipelineFunctionSerialize> =
  s.object<PipelineFunctionSerialize>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("serialize"), "serialize"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaSerializeSchema,
    groupId: s.optional(s.string()),
  });
