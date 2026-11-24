import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The strategy used to merge existing bot or bot locale definitions with the imported definition.
 */
export const MergeStrategy1 = {
  Overwrite: "Overwrite",
  FailOnConflict: "FailOnConflict",
  Append: "Append",
} as const;
export type MergeStrategy1 = (typeof MergeStrategy1)[keyof typeof MergeStrategy1] | (string & {});

export const mergeStrategy1Schema: EnumSchema<MergeStrategy1> = s.enumOf<MergeStrategy1>(MergeStrategy1);
