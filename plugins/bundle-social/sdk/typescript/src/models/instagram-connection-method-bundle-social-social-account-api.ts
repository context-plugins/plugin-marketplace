import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Instagram only - connection method */
export const InstagramConnectionMethodBundleSocialSocialAccountApi = {
  Facebook: "FACEBOOK",
  Instagram: "INSTAGRAM",
} as const;
export type InstagramConnectionMethodBundleSocialSocialAccountApi =
  | (typeof InstagramConnectionMethodBundleSocialSocialAccountApi)[keyof typeof InstagramConnectionMethodBundleSocialSocialAccountApi]
  | (string & {});

export const instagramConnectionMethodBundleSocialSocialAccountApiSchema: EnumSchema<InstagramConnectionMethodBundleSocialSocialAccountApi> =
  s.enumOf<InstagramConnectionMethodBundleSocialSocialAccountApi>(
    InstagramConnectionMethodBundleSocialSocialAccountApi,
  );
