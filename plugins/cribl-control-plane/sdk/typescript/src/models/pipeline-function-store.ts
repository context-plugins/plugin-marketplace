import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  storeFunctionConfigurationSchema,
  type StoreFunctionConfiguration,
} from "./store-function-configuration.js";

export type PipelineFunctionStore = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>store</code> @default "store" */
  id?: "store";
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
  conf: StoreFunctionConfiguration;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionStoreSchema: Schema<PipelineFunctionStore> = s.object<PipelineFunctionStore>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("store"), "store"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: storeFunctionConfigurationSchema,
  groupId: s.optional(s.string()),
});
