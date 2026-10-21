import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaSuppressSchema,
  type FunctionConfSchemaSuppress,
} from "./function-conf-schema-suppress.js";

export type PipelineFunctionSuppress = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>suppress</code> @default "suppress" */
  id?: "suppress";
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
  conf: FunctionConfSchemaSuppress;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionSuppressSchema: Schema<PipelineFunctionSuppress> =
  s.object<PipelineFunctionSuppress>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("suppress"), "suppress"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaSuppressSchema,
    groupId: s.optional(s.string()),
  });
