import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PrivacyLevelOption = {
  SelfOnly: "SELF_ONLY",
  PublicToEveryone: "PUBLIC_TO_EVERYONE",
  MutualFollowFriends: "MUTUAL_FOLLOW_FRIENDS",
  FollowerOfCreator: "FOLLOWER_OF_CREATOR",
} as const;
export type PrivacyLevelOption = (typeof PrivacyLevelOption)[keyof typeof PrivacyLevelOption] | (string & {});

export const privacyLevelOptionSchema: EnumSchema<PrivacyLevelOption> =
  s.enumOf<PrivacyLevelOption>(PrivacyLevelOption);
