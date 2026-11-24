import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeBundleSocialMiscApi = {
  User: "USER",
  Page: "PAGE",
} as const;
export type TypeBundleSocialMiscApi =
  | (typeof TypeBundleSocialMiscApi)[keyof typeof TypeBundleSocialMiscApi]
  | (string & {});

export const typeBundleSocialMiscApiSchema: EnumSchema<TypeBundleSocialMiscApi> =
  s.enumOf<TypeBundleSocialMiscApi>(TypeBundleSocialMiscApi);
