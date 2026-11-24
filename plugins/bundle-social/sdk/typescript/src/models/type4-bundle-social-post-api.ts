import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type4BundleSocialPostApi = {
  Video: "VIDEO",
  Image: "IMAGE",
} as const;
export type Type4BundleSocialPostApi =
  | (typeof Type4BundleSocialPostApi)[keyof typeof Type4BundleSocialPostApi]
  | (string & {});

export const type4BundleSocialPostApiSchema: EnumSchema<Type4BundleSocialPostApi> =
  s.enumOf<Type4BundleSocialPostApi>(Type4BundleSocialPostApi);
