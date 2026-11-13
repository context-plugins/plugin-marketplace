import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SessionAccessActiveRequest = {
  /** Email of the user to make active */
  email: string;
  /** Organization subdomain or 'current' */
  org?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionAccessActiveRequestSchema: Schema<SessionAccessActiveRequest> =
  s.object<SessionAccessActiveRequest>(
    {
      email: s.string(),
      org: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
