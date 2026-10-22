import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { followFlagMemberSchema, type FollowFlagMember } from "./follow-flag-member.js";
import { linkSchema, type Link } from "./link.js";

export type FlagFollowersGetRep = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** An array of members who are following this flag */
  items: FollowFlagMember[];
};

export const flagFollowersGetRepSchema: Schema<FlagFollowersGetRep> = s.object<FlagFollowersGetRep>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  items: s.array(s.lazy(() => followFlagMemberSchema)),
  _keysMap: {
    links: "_links",
  },
});
