import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type3BundleSocialConversationApi = {
  Image: "IMAGE",
  Video: "VIDEO",
  Audio: "AUDIO",
  File: "FILE",
  Post: "POST",
  StoryMention: "STORY_MENTION",
  Unknown: "UNKNOWN",
} as const;
export type Type3BundleSocialConversationApi =
  | (typeof Type3BundleSocialConversationApi)[keyof typeof Type3BundleSocialConversationApi]
  | (string & {});

export const type3BundleSocialConversationApiSchema: EnumSchema<Type3BundleSocialConversationApi> =
  s.enumOf<Type3BundleSocialConversationApi>(Type3BundleSocialConversationApi);
