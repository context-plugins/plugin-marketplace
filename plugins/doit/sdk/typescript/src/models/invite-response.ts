import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invitedUserBodySchema, type InvitedUserBody } from "./invited-user-body.js";

/** Response returned after creating a user invitation. */
export type InviteResponse = {
  /** Success message */
  message?: string;
  user?: InvitedUserBody;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inviteResponseSchema: Schema<InviteResponse> = s.object<InviteResponse>(
  {
    message: s.optional(s.string()),
    user: s.optional(s.lazy(() => invitedUserBodySchema)),
  },
  { additionalProperties: s.json() },
);
