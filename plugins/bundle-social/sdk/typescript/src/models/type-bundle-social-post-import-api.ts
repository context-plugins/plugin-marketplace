import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeBundleSocialPostImportApi = {
  Post: "POST",
  Reel: "REEL",
  Story: "STORY",
  Video: "VIDEO",
  Image: "IMAGE",
} as const;
export type TypeBundleSocialPostImportApi =
  | (typeof TypeBundleSocialPostImportApi)[keyof typeof TypeBundleSocialPostImportApi]
  | (string & {});

export const typeBundleSocialPostImportApiSchema: EnumSchema<TypeBundleSocialPostImportApi> =
  s.enumOf<TypeBundleSocialPostImportApi>(TypeBundleSocialPostImportApi);
