import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type7BundleSocialSocialAccountApi = {
  Discord: "DISCORD",
  Slack: "SLACK",
  Reddit: "REDDIT",
  Pinterest: "PINTEREST",
  Facebook: "FACEBOOK",
  Instagram: "INSTAGRAM",
  Linkedin: "LINKEDIN",
  Youtube: "YOUTUBE",
  GoogleBusiness: "GOOGLE_BUSINESS",
} as const;
export type Type7BundleSocialSocialAccountApi =
  | (typeof Type7BundleSocialSocialAccountApi)[keyof typeof Type7BundleSocialSocialAccountApi]
  | (string & {});

export const type7BundleSocialSocialAccountApiSchema: EnumSchema<Type7BundleSocialSocialAccountApi> =
  s.enumOf<Type7BundleSocialSocialAccountApi>(Type7BundleSocialSocialAccountApi);
