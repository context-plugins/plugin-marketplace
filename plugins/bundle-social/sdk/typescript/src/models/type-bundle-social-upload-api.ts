import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeBundleSocialUploadApi = {
  Image: "image",
  Video: "video",
  Document: "document",
} as const;
export type TypeBundleSocialUploadApi =
  | (typeof TypeBundleSocialUploadApi)[keyof typeof TypeBundleSocialUploadApi]
  | (string & {});

export const typeBundleSocialUploadApiSchema: EnumSchema<TypeBundleSocialUploadApi> =
  s.enumOf<TypeBundleSocialUploadApi>(TypeBundleSocialUploadApi);
