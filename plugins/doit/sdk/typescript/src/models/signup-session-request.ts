import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignupSessionRequest = {
  /** The one-time token returned by verifySignupRequest. */
  activationToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signupSessionRequestSchema: Schema<SignupSessionRequest> = s.object<SignupSessionRequest>(
  {
    activationToken: s.string(),
  },
  { additionalProperties: s.json() },
);
