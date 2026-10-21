import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notifyConfigurationSchema, type NotifyConfiguration } from "./notify-configuration.js";

export type PipelineFunctionNotify = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>notify</code> @default "notify" */
  id?: "notify";
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
  conf: NotifyConfiguration;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionNotifySchema: Schema<PipelineFunctionNotify> = s.object<PipelineFunctionNotify>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("notify"), "notify"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: notifyConfigurationSchema,
  groupId: s.optional(s.string()),
});
