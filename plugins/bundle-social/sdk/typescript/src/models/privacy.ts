import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Privacy = {
  SelfOnly: "SELF_ONLY",
  PublicToEveryone: "PUBLIC_TO_EVERYONE",
  MutualFollowFriends: "MUTUAL_FOLLOW_FRIENDS",
  FollowerOfCreator: "FOLLOWER_OF_CREATOR",
} as const;
export type Privacy = (typeof Privacy)[keyof typeof Privacy] | (string & {});

export const privacySchema: EnumSchema<Privacy> = s.enumOf<Privacy>(Privacy);
