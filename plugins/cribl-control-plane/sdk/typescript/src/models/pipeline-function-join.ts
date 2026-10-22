import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { joinConfigurationSchema, type JoinConfiguration } from "./join-configuration.js";

export type PipelineFunctionJoin = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>join</code> @default "join" */
  id?: "join";
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
  conf: JoinConfiguration;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionJoinSchema: Schema<PipelineFunctionJoin> = s.object<PipelineFunctionJoin>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("join"), "join"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: joinConfigurationSchema,
  groupId: s.optional(s.string()),
});
