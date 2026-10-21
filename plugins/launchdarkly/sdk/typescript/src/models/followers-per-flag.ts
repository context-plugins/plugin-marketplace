import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { followFlagMemberSchema, type FollowFlagMember } from "./follow-flag-member.js";

export type FollowersPerFlag = {
  /** The flag key */
  flagKey?: string;
  /** A list of members who are following this flag */
  followers?: FollowFlagMember[];
};

export const followersPerFlagSchema: Schema<FollowersPerFlag> = s.object<FollowersPerFlag>({
  flagKey: s.optional(s.string()),
  followers: s.optional(s.array(s.lazy(() => followFlagMemberSchema))),
});
