import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuthorizationRequest = {
  /** The Program ID Leadspace provided in the credentials email */
  user: string;
  /** The authentication secret Leadspace provided in the credentials email */
  pass: string;
  /** For API v4 services use API_GATEWAY */
  audience: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorizationRequestSchema: Schema<AuthorizationRequest> = s.object<AuthorizationRequest>(
  {
    user: s.string(),
    pass: s.string(),
    audience: s.string(),
  },
  { additionalProperties: s.json() },
);
