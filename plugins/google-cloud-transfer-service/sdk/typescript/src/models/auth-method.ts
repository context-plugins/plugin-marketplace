import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the authentication and authorization method used by the storage service. When not
 * specified, Transfer Service will attempt to determine right auth method to use.
 */
export const AuthMethod = {
  AuthMethodUnspecified: "AUTH_METHOD_UNSPECIFIED",
  AuthMethodAwsSignatureV4: "AUTH_METHOD_AWS_SIGNATURE_V4",
  AuthMethodAwsSignatureV2: "AUTH_METHOD_AWS_SIGNATURE_V2",
} as const;
export type AuthMethod = (typeof AuthMethod)[keyof typeof AuthMethod] | (string & {});

export const authMethodSchema: EnumSchema<AuthMethod> = s.enumOf<AuthMethod>(AuthMethod);
