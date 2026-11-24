import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required when type is IDENTITY_VERIFICATION. At least one field must be provided. */
export type IdentityVerificationData = {
  /** Full name to verify. */
  name?: string;
  /** Email address to verify. */
  email?: string;
  /** Phone number to verify (E.164 format recommended). */
  phone?: string;
  /** Address to verify. */
  address?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const identityVerificationDataProperties: s.Shape<IdentityVerificationData> = {
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  address: s.optional(s.string()),
};

export const identityVerificationDataInternalSchema: Schema<IdentityVerificationData> =
  s.object<IdentityVerificationData>(identityVerificationDataProperties, { additionalProperties: s.json() });

export const identityVerificationDataSchema: Schema<IdentityVerificationData> = s.lazySchema(() =>
  s.object<IdentityVerificationData>(
    {
      ...identityVerificationDataProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
