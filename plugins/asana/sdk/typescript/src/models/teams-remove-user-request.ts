import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamRemoveUserRequestSchema, type TeamRemoveUserRequest } from "./team-remove-user-request.js";

export type TeamsRemoveUserRequest = {
  /** A user identification object for specification with the addUser/removeUser endpoints. */
  data?: TeamRemoveUserRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamsRemoveUserRequestSchema: Schema<TeamsRemoveUserRequest> = s.object<TeamsRemoveUserRequest>(
  {
    data: s.optional(s.lazy(() => teamRemoveUserRequestSchema)),
  },
  { additionalProperties: s.json() },
);
