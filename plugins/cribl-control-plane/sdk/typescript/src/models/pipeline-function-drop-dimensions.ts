import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaDropDimensionsSchema,
  type FunctionConfSchemaDropDimensions,
} from "./function-conf-schema-drop-dimensions.js";

export type PipelineFunctionDropDimensions = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>drop_dimensions</code> @default "drop_dimensions" */
  id?: "drop_dimensions";
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
  conf: FunctionConfSchemaDropDimensions;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionDropDimensionsSchema: Schema<PipelineFunctionDropDimensions> =
  s.object<PipelineFunctionDropDimensions>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("drop_dimensions"), "drop_dimensions"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaDropDimensionsSchema,
    groupId: s.optional(s.string()),
  });
