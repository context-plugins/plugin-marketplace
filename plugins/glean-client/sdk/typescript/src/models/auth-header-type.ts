import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines the header structure for sending the API key or token to the server. Defaults to
 * AUTHORIZATION_BEARER. Select the specific header format the server expects for transmitting the
 * key.
 */
export const AuthHeaderType = {
  AuthorizationBearer: "AUTHORIZATION_BEARER",
  AuthorizationToken: "AUTHORIZATION_TOKEN",
  AuthorizationApiKey: "AUTHORIZATION_API_KEY",
  XApiKey: "X_API_KEY",
} as const;
export type AuthHeaderType = (typeof AuthHeaderType)[keyof typeof AuthHeaderType] | (string & {});

export const authHeaderTypeSchema: EnumSchema<AuthHeaderType> = s.enumOf<AuthHeaderType>(AuthHeaderType);
