import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlatformBundleSocialConversationApi = {
  Instagram: "INSTAGRAM",
  Facebook: "FACEBOOK",
} as const;
export type PlatformBundleSocialConversationApi =
  | (typeof PlatformBundleSocialConversationApi)[keyof typeof PlatformBundleSocialConversationApi]
  | (string & {});

export const platformBundleSocialConversationApiSchema: EnumSchema<PlatformBundleSocialConversationApi> =
  s.enumOf<PlatformBundleSocialConversationApi>(PlatformBundleSocialConversationApi);
