import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";
import { avatarUrlSchema, type AvatarUrl } from "./unions/avatar-url.js";
import { emailSchema, type Email } from "./unions/email.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";

export type TeamMemberItem = {
  userId: string;
  membershipId: number;
  role: Role;
  name?: NameHudPlatformJobsApi;
  email?: Email;
  avatarUrl?: AvatarUrl;
  joinedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamMemberItemSchema: Schema<TeamMemberItem> = s.object<TeamMemberItem>(
  {
    userId: s.string(),
    membershipId: s.int(),
    role: roleSchema,
    name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
    email: s.optional(s.lazy(() => emailSchema)),
    avatarUrl: s.optional(s.lazy(() => avatarUrlSchema)),
    joinedAt: s.dateTime(),
    _keysMap: {
      userId: "user_id",
      membershipId: "membership_id",
      avatarUrl: "avatar_url",
      joinedAt: "joined_at",
    },
  },
  { additionalProperties: s.json() },
);
