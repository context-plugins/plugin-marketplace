import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether to add a tag to each S3 object after processing. */
export const TagAfterProcessingOptions = {
  False: "false",
  True: "true",
} as const;
export type TagAfterProcessingOptions =
  | (typeof TagAfterProcessingOptions)[keyof typeof TagAfterProcessingOptions]
  | (string & {});

export const tagAfterProcessingOptionsSchema: EnumSchema<TagAfterProcessingOptions> =
  s.enumOf<TagAfterProcessingOptions>(TagAfterProcessingOptions);
