import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TeamInvitationRevokeRequest = {
  invitationIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const teamInvitationRevokeRequestProperties: s.Shape<TeamInvitationRevokeRequest> = {
  invitationIds: s.array(s.string()),
  _keysMap: {
    invitationIds: "invitation_ids",
  },
};

export const teamInvitationRevokeRequestInternalSchema: Schema<TeamInvitationRevokeRequest> =
  s.object<TeamInvitationRevokeRequest>(teamInvitationRevokeRequestProperties, {
    additionalProperties: s.json(),
  });

export const teamInvitationRevokeRequestSchema: Schema<TeamInvitationRevokeRequest> = s.lazySchema(() =>
  s.object<TeamInvitationRevokeRequest>(
    {
      ...teamInvitationRevokeRequestProperties,
      invitationIds: s.array(s.string()).check(s.minLength(1), s.maxLength(30)),
    },
    { additionalProperties: s.json() },
  ),
);
