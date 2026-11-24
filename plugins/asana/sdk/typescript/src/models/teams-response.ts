import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamResponseSchema, type TeamResponse } from "./team-response.js";

export type TeamsResponse = {
  data?: TeamResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamsResponseSchema: Schema<TeamsResponse> = s.object<TeamsResponse>(
  {
    data: s.optional(s.lazy(() => teamResponseSchema)),
  },
  { additionalProperties: s.json() },
);
