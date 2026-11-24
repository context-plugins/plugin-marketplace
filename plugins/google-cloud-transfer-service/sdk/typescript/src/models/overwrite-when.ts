import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When to overwrite objects that already exist in the sink. If not set, overwrite behavior is
 * determined by overwrite_objects_already_existing_in_sink.
 */
export const OverwriteWhen = {
  OverwriteWhenUnspecified: "OVERWRITE_WHEN_UNSPECIFIED",
  Different: "DIFFERENT",
  Never: "NEVER",
  Always: "ALWAYS",
} as const;
export type OverwriteWhen = (typeof OverwriteWhen)[keyof typeof OverwriteWhen] | (string & {});

export const overwriteWhenSchema: EnumSchema<OverwriteWhen> = s.enumOf<OverwriteWhen>(OverwriteWhen);
