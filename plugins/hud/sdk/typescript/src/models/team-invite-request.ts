import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type TeamInviteRequest = {
  emails: string[];
  role: Role;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const teamInviteRequestProperties: s.Shape<TeamInviteRequest> = {
  emails: s.array(s.string()),
  role: roleSchema,
};

export const teamInviteRequestInternalSchema: Schema<TeamInviteRequest> = s.object<TeamInviteRequest>(
  teamInviteRequestProperties,
  { additionalProperties: s.json() },
);

export const teamInviteRequestSchema: Schema<TeamInviteRequest> = s.lazySchema(() =>
  s.object<TeamInviteRequest>(
    {
      ...teamInviteRequestProperties,
      emails: s.array(s.string().check(s.email())).check(s.minLength(1), s.maxLength(30)),
    },
    { additionalProperties: s.json() },
  ),
);
