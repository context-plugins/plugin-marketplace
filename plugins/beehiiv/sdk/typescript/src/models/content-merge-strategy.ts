import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Controls how provided blocks interact with the post's existing content on update. */
export const ContentMergeStrategy = {
  Replace: "replace",
  AppendToTemplate: "append_to_template",
  Append: "append",
  Prepend: "prepend",
} as const;
export type ContentMergeStrategy =
  | (typeof ContentMergeStrategy)[keyof typeof ContentMergeStrategy]
  | (string & {});

export const contentMergeStrategySchema: EnumSchema<ContentMergeStrategy> =
  s.enumOf<ContentMergeStrategy>(ContentMergeStrategy);
