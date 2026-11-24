import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1BundleSocialOrganizationApi = {
  Instagram: "INSTAGRAM",
  Facebook: "FACEBOOK",
  Tiktok: "TIKTOK",
} as const;
export type Type1BundleSocialOrganizationApi =
  | (typeof Type1BundleSocialOrganizationApi)[keyof typeof Type1BundleSocialOrganizationApi]
  | (string & {});

export const type1BundleSocialOrganizationApiSchema: EnumSchema<Type1BundleSocialOrganizationApi> =
  s.enumOf<Type1BundleSocialOrganizationApi>(Type1BundleSocialOrganizationApi);
