import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The email capture type to use for this post. If not provided, the default value will be used. */
export const PostEmailCaptureTypeOverride1 = {
  None: "none",
  Gated: "gated",
  Popup: "popup",
} as const;
export type PostEmailCaptureTypeOverride1 =
  | (typeof PostEmailCaptureTypeOverride1)[keyof typeof PostEmailCaptureTypeOverride1]
  | (string & {});

export const postEmailCaptureTypeOverride1Schema: EnumSchema<PostEmailCaptureTypeOverride1> =
  s.enumOf<PostEmailCaptureTypeOverride1>(PostEmailCaptureTypeOverride1);
