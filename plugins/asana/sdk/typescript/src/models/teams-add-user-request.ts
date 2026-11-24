import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamAddUserRequestSchema, type TeamAddUserRequest } from "./team-add-user-request.js";

export type TeamsAddUserRequest = {
  /** A user identification object for specification with the addUser/removeUser endpoints. */
  data?: TeamAddUserRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamsAddUserRequestSchema: Schema<TeamsAddUserRequest> = s.object<TeamsAddUserRequest>(
  {
    data: s.optional(s.lazy(() => teamAddUserRequestSchema)),
  },
  { additionalProperties: s.json() },
);
