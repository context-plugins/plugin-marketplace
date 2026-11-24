import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls how provided `blocks` interact with the post's existing content. Defaults to `replace`.
 * Use `append_to_template` to preserve template header blocks when updating posts that were created
 * from a template.
 */
export const ContentMergeStrategy1 = {
  Replace: "replace",
  AppendToTemplate: "append_to_template",
  Append: "append",
  Prepend: "prepend",
} as const;
export type ContentMergeStrategy1 =
  | (typeof ContentMergeStrategy1)[keyof typeof ContentMergeStrategy1]
  | (string & {});

export const contentMergeStrategy1Schema: EnumSchema<ContentMergeStrategy1> =
  s.enumOf<ContentMergeStrategy1>(ContentMergeStrategy1);
