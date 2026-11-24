import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { organizationMemberSchema, type OrganizationMember } from "./organization-member.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";

export type MemberList = {
  members: OrganizationMember[];
  nextCursor: NextCursor;
};

export const memberListSchema: Schema<MemberList> = s.object<MemberList>({
  members: s.array(s.lazy(() => organizationMemberSchema)),
  nextCursor: nextCursorSchema,
});
