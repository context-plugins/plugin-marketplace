import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "./error-response.js";

export type TeamInvitationFailure = {
  invitationId: string;
  /** The uniform `{error, source, detail}` envelope returned for every 4xx/5xx. */
  error: ErrorResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamInvitationFailureSchema: Schema<TeamInvitationFailure> = s.object<TeamInvitationFailure>(
  {
    invitationId: s.string(),
    error: errorResponseSchema,
    _keysMap: {
      invitationId: "invitation_id",
    },
  },
  { additionalProperties: s.json() },
);
