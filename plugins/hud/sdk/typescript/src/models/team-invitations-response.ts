import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamInvitationItemSchema, type TeamInvitationItem } from "./team-invitation-item.js";

export type TeamInvitationsResponse = {
  invitations: TeamInvitationItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamInvitationsResponseSchema: Schema<TeamInvitationsResponse> =
  s.object<TeamInvitationsResponse>(
    {
      invitations: s.array(s.lazy(() => teamInvitationItemSchema)),
    },
    { additionalProperties: s.json() },
  );
