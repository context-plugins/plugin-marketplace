import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The email capture type to use for this post. */
export const PostEmailCaptureTypeOverride2 = {
  None: "none",
  Gated: "gated",
  Popup: "popup",
} as const;
export type PostEmailCaptureTypeOverride2 =
  | (typeof PostEmailCaptureTypeOverride2)[keyof typeof PostEmailCaptureTypeOverride2]
  | (string & {});

export const postEmailCaptureTypeOverride2Schema: EnumSchema<PostEmailCaptureTypeOverride2> =
  s.enumOf<PostEmailCaptureTypeOverride2>(PostEmailCaptureTypeOverride2);
