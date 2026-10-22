import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { excludedActionSchema, type ExcludedAction } from "./excluded-action.js";
import {
  flagCopyConfigEnvironmentSchema,
  type FlagCopyConfigEnvironment,
} from "./flag-copy-config-environment.js";
import { includedActionSchema, type IncludedAction } from "./included-action.js";

export type FlagCopyConfigPost = {
  source: FlagCopyConfigEnvironment;
  target: FlagCopyConfigEnvironment;
  /** Optional comment */
  comment?: string;
  /**
   * Optional list of the flag changes to copy from the source environment to the target
   * environment. You may include either <code>includedActions</code> or
   * <code>excludedActions</code>, but not both. If you include neither, then all flag changes will
   * be copied.
   */
  includedActions?: IncludedAction[];
  /**
   * Optional list of the flag changes NOT to copy from the source environment to the target
   * environment. You may include either <code>includedActions</code> or
   * <code>excludedActions</code>, but not both. If you include neither, then all flag changes will
   * be copied.
   */
  excludedActions?: ExcludedAction[];
};

export const flagCopyConfigPostSchema: Schema<FlagCopyConfigPost> = s.object<FlagCopyConfigPost>({
  source: flagCopyConfigEnvironmentSchema,
  target: flagCopyConfigEnvironmentSchema,
  comment: s.optional(s.string()),
  includedActions: s.optional(s.array(s.lazy(() => includedActionSchema))),
  excludedActions: s.optional(s.array(s.lazy(() => excludedActionSchema))),
});
