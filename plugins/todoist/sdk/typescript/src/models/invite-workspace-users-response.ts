import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InviteWorkspaceUsersResponse = {
  /** Emails successfully invited to the workspace. */
  invitedEmails: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inviteWorkspaceUsersResponseSchema: Schema<InviteWorkspaceUsersResponse> =
  s.object<InviteWorkspaceUsersResponse>(
    {
      invitedEmails: s.array(s.string()),
      _keysMap: {
        invitedEmails: "invited_emails",
      },
    },
    { additionalProperties: s.json() },
  );
