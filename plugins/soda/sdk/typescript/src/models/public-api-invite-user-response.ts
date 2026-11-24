import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { failedInvitationDtoSchema, type FailedInvitationDto } from "./failed-invitation-dto.js";

export type PublicApiInviteUserResponse = {
  failedInvitations?: FailedInvitationDto[];
  validInvitations?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiInviteUserResponseSchema: Schema<PublicApiInviteUserResponse> =
  s.object<PublicApiInviteUserResponse>(
    {
      failedInvitations: s.optional(s.array(s.lazy(() => failedInvitationDtoSchema))),
      validInvitations: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
