import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SocialAccountType1BundleSocialOrganizationApi = {
  Instagram: "INSTAGRAM",
  Facebook: "FACEBOOK",
  Tiktok: "TIKTOK",
} as const;
export type SocialAccountType1BundleSocialOrganizationApi =
  | (typeof SocialAccountType1BundleSocialOrganizationApi)[keyof typeof SocialAccountType1BundleSocialOrganizationApi]
  | (string & {});

export const socialAccountType1BundleSocialOrganizationApiSchema: EnumSchema<SocialAccountType1BundleSocialOrganizationApi> =
  s.enumOf<SocialAccountType1BundleSocialOrganizationApi>(SocialAccountType1BundleSocialOrganizationApi);
