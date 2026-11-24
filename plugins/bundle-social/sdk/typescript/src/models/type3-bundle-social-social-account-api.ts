import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type3BundleSocialSocialAccountApi = {
  Facebook: "FACEBOOK",
  Instagram: "INSTAGRAM",
  Linkedin: "LINKEDIN",
  Youtube: "YOUTUBE",
  GoogleBusiness: "GOOGLE_BUSINESS",
} as const;
export type Type3BundleSocialSocialAccountApi =
  | (typeof Type3BundleSocialSocialAccountApi)[keyof typeof Type3BundleSocialSocialAccountApi]
  | (string & {});

export const type3BundleSocialSocialAccountApiSchema: EnumSchema<Type3BundleSocialSocialAccountApi> =
  s.enumOf<Type3BundleSocialSocialAccountApi>(Type3BundleSocialSocialAccountApi);
