import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamInviteFailureSchema, type TeamInviteFailure } from "./team-invite-failure.js";

/** Addresses that were invited, and why each remaining address was not. */
export type TeamInviteResponse = {
  succeeded: string[];
  failed: TeamInviteFailure[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamInviteResponseSchema: Schema<TeamInviteResponse> = s.object<TeamInviteResponse>(
  {
    succeeded: s.array(s.string()),
    failed: s.array(s.lazy(() => teamInviteFailureSchema)),
  },
  { additionalProperties: s.json() },
);
