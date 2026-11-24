import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type AuthTokenRequest = {
  /** Your account email address */
  email: string;
  /** Your account password */
  password: string;
  /** Optional device identifier. Tokens with the same device name will be revoked and replaced. */
  deviceName?: string;
  /**
   * Optional. Restricts the token to the given scopes. `sign-requests:read` / `sign-requests:write`
   * also cover the templates and bulk-* endpoints. Omit to receive all 5 scopes (default, unchanged
   * behavior for existing integrations).
   */
  scopes?: Scope[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const authTokenRequestProperties: s.Shape<AuthTokenRequest> = {
  email: s.string(),
  password: s.string(),
  deviceName: s.optional(s.string()),
  scopes: s.optional(s.array(s.lazy(() => scopeSchema))),
  _keysMap: {
    deviceName: "device_name",
  },
};

export const authTokenRequestInternalSchema: Schema<AuthTokenRequest> = s.object<AuthTokenRequest>(
  authTokenRequestProperties,
  { additionalProperties: s.json() },
);

export const authTokenRequestSchema: Schema<AuthTokenRequest> = s.lazySchema(() =>
  s.object<AuthTokenRequest>(
    {
      ...authTokenRequestProperties,
      email: s.string().check(s.email()),
      deviceName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
