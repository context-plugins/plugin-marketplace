import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PostEmailCaptureTypeOverride = {
  None: "none",
  Gated: "gated",
  Popup: "popup",
} as const;
export type PostEmailCaptureTypeOverride =
  | (typeof PostEmailCaptureTypeOverride)[keyof typeof PostEmailCaptureTypeOverride]
  | (string & {});

export const postEmailCaptureTypeOverrideSchema: EnumSchema<PostEmailCaptureTypeOverride> =
  s.enumOf<PostEmailCaptureTypeOverride>(PostEmailCaptureTypeOverride);
