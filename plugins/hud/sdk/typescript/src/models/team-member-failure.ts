import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "./error-response.js";

export type TeamMemberFailure = {
  membershipId: number;
  /** The uniform `{error, source, detail}` envelope returned for every 4xx/5xx. */
  error: ErrorResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamMemberFailureSchema: Schema<TeamMemberFailure> = s.object<TeamMemberFailure>(
  {
    membershipId: s.int(),
    error: errorResponseSchema,
    _keysMap: {
      membershipId: "membership_id",
    },
  },
  { additionalProperties: s.json() },
);
