import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invitationSchema, type Invitation } from "./invitation.js";
import { memberSchema, type Member } from "./member.js";

/** Never includes credentials. */
export type WorkspaceMembers = {
  members: Member[];
  /** Pending, unexpired invitations only. */
  invitations: Invitation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceMembersSchema: Schema<WorkspaceMembers> = s.object<WorkspaceMembers>(
  {
    members: s.array(s.lazy(() => memberSchema)),
    invitations: s.array(s.lazy(() => invitationSchema)),
  },
  { additionalProperties: s.json() },
);
