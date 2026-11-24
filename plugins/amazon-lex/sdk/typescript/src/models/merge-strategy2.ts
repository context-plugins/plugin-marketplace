import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The strategy to use when there is a name conflict between the imported resource and an existing
 * resource. When the merge strategy is FailOnConflict existing resources are not overwritten and
 * the import fails.
 */
export const MergeStrategy2 = {
  Overwrite: "Overwrite",
  FailOnConflict: "FailOnConflict",
  Append: "Append",
} as const;
export type MergeStrategy2 = (typeof MergeStrategy2)[keyof typeof MergeStrategy2] | (string & {});

export const mergeStrategy2Schema: EnumSchema<MergeStrategy2> = s.enumOf<MergeStrategy2>(MergeStrategy2);
