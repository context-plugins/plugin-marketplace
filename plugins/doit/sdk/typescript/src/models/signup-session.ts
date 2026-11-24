import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignupSession = {
  /** Firebase custom token for the tenant admin; exchange it with signInWithCustomToken. */
  customToken: string;
  tenantId: string;
  customerId: string;
  consoleUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signupSessionProperties: s.Shape<SignupSession> = {
  customToken: s.string(),
  tenantId: s.string(),
  customerId: s.string(),
  consoleUrl: s.optional(s.string()),
};

export const signupSessionInternalSchema: Schema<SignupSession> = s.object<SignupSession>(
  signupSessionProperties,
  { additionalProperties: s.json() },
);

export const signupSessionSchema: Schema<SignupSession> = s.lazySchema(() =>
  s.object<SignupSession>(
    {
      ...signupSessionProperties,
      consoleUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
