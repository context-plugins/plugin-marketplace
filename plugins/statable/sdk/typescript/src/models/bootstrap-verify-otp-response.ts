import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiKeySchema, type ApiKey } from "./api-key.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type BootstrapVerifyOtpResponse = {
  /** The raw bearer token, returned exactly once. */
  token: string;
  /**
   * The non-secret view of a key. The raw token is never stored and never appears here — only in
   * the create/rotate responses.
   */
  key: ApiKey;
  user: User;
  /**
   * True when this call registered a new account; false when the address already had one and simply
   * received an additional key.
   */
  created: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bootstrapVerifyOtpResponseProperties: s.Shape<BootstrapVerifyOtpResponse> = {
  token: s.string(),
  key: apiKeySchema,
  user: userInternalSchema,
  created: s.boolean(),
};

export const bootstrapVerifyOtpResponseInternalSchema: Schema<BootstrapVerifyOtpResponse> =
  s.object<BootstrapVerifyOtpResponse>(bootstrapVerifyOtpResponseProperties, {
    additionalProperties: s.json(),
  });

export const bootstrapVerifyOtpResponseSchema: Schema<BootstrapVerifyOtpResponse> = s.lazySchema(() =>
  s.object<BootstrapVerifyOtpResponse>(
    {
      ...bootstrapVerifyOtpResponseProperties,
      user: userSchema,
    },
    { additionalProperties: s.json() },
  ),
);
