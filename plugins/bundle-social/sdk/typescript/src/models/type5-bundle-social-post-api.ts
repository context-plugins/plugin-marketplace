import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type5BundleSocialPostApi = {
  Video: "VIDEO",
  Short: "SHORT",
} as const;
export type Type5BundleSocialPostApi =
  | (typeof Type5BundleSocialPostApi)[keyof typeof Type5BundleSocialPostApi]
  | (string & {});

export const type5BundleSocialPostApiSchema: EnumSchema<Type5BundleSocialPostApi> =
  s.enumOf<Type5BundleSocialPostApi>(Type5BundleSocialPostApi);
