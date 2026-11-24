import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The strategy used when there was a name conflict between the imported resource and an existing
 * resource. When the merge strategy is FailOnConflict existing resources are not overwritten and
 * the import fails.
 */
export const MergeStrategy = {
  Overwrite: "Overwrite",
  FailOnConflict: "FailOnConflict",
  Append: "Append",
} as const;
export type MergeStrategy = (typeof MergeStrategy)[keyof typeof MergeStrategy] | (string & {});

export const mergeStrategySchema: EnumSchema<MergeStrategy> = s.enumOf<MergeStrategy>(MergeStrategy);
