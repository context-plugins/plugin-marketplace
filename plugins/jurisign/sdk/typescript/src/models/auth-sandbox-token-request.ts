import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuthSandboxTokenRequest = {
  /** Your account email address */
  email: string;
  /** Your account password */
  password: string;
  /** Optional device identifier. Tokens with the same device name will be revoked and replaced. */
  deviceName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const authSandboxTokenRequestProperties: s.Shape<AuthSandboxTokenRequest> = {
  email: s.string(),
  password: s.string(),
  deviceName: s.optional(s.string()),
  _keysMap: {
    deviceName: "device_name",
  },
};

export const authSandboxTokenRequestInternalSchema: Schema<AuthSandboxTokenRequest> =
  s.object<AuthSandboxTokenRequest>(authSandboxTokenRequestProperties, { additionalProperties: s.json() });

export const authSandboxTokenRequestSchema: Schema<AuthSandboxTokenRequest> = s.lazySchema(() =>
  s.object<AuthSandboxTokenRequest>(
    {
      ...authSandboxTokenRequestProperties,
      email: s.string().check(s.email()),
      deviceName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
