import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamCompactSchema, type TeamCompact } from "./team-compact.js";

export type UsersTeamsResponse = {
  data?: TeamCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersTeamsResponseSchema: Schema<UsersTeamsResponse> = s.object<UsersTeamsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => teamCompactSchema))),
  },
  { additionalProperties: s.json() },
);
