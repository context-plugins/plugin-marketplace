import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamInvitationFailureSchema, type TeamInvitationFailure } from "./team-invitation-failure.js";

/** Invitations that are no longer pending, and why each remaining one still is. */
export type TeamInvitationRevokeResponse = {
  succeeded: string[];
  failed: TeamInvitationFailure[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamInvitationRevokeResponseSchema: Schema<TeamInvitationRevokeResponse> =
  s.object<TeamInvitationRevokeResponse>(
    {
      succeeded: s.array(s.string()),
      failed: s.array(s.lazy(() => teamInvitationFailureSchema)),
    },
    { additionalProperties: s.json() },
  );
