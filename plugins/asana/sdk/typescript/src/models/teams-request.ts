import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamRequestSchema, type TeamRequest } from "./team-request.js";

export type TeamsRequest = {
  data?: TeamRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamsRequestSchema: Schema<TeamsRequest> = s.object<TeamsRequest>(
  {
    data: s.optional(s.lazy(() => teamRequestSchema)),
  },
  { additionalProperties: s.json() },
);
