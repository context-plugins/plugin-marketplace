import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { propertySchema, type Property } from "./property.js";
import { result1Schema, type Result1 } from "./result1.js";

export type DeviceCompleteRequest = {
  /** A user code. */
  userCode: string;
  /**
   * The result of the end-user authentication and authorization. One of the following. Details are
   * described in the description.
   */
  result: Result1;
  /** The subject (= unique identifier) of the end-user. */
  subject: string;
  /** The value of the sub claim that should be used in the ID token. */
  sub?: string;
  /**
   * The time at which the end-user was authenticated. Its value is the number of seconds from
   * `1970-01-01`.
   */
  authTime?: number;
  /**
   * The reference of the authentication context class which the end-user authentication satisfied.
   */
  acr?: string;
  /** Additional claims which will be embedded in the ID token. */
  claims?: string;
  /** The extra properties associated with the access token. */
  properties?: Property[];
  /**
   * Scopes to replace the scopes specified in the original device authorization request with. When
   * nothing is specified for this parameter, replacement is not performed.
   */
  scopes?: string[];
  /**
   * The description of the error. If this optional request parameter is given, its value is used as
   * the value of the `error_description` property, but it is used only when the result is not
   * `AUTHORIZED`. To comply with the specification strictly, the description must not include
   * characters outside the set `%x20-21 / %x23-5B / %x5D-7E`.
   */
  errorDescription?: string;
  /**
   * The URI of a document which describes the error in detail. This corresponds to the `error_uri`
   * property in the response to the client.
   */
  errorUri?: string;
  /** JSON that represents additional JWS header parameters for ID tokens. */
  idtHeaderParams?: string;
  /** the claims that the user has consented for the client application to know. */
  consentedClaims?: string[];
  /** Additional claims that are added to the payload part of the JWT access token. */
  jwtAtClaims?: string;
  /**
   * The duration (in seconds) of the access token that may be issued as a result of the Authlete
   * API call.
   *
   * When this request parameter holds a positive integer, it is used as the duration of the access
   * token in. In other cases, this request parameter is ignored.
   */
  accessTokenDuration?: number;
  /**
   * The duration (in seconds) of the refresh token that may be issued as a result of the Authlete
   * API call.
   *
   * When this request parameter holds a positive integer, it is used as the duration of the refresh
   * token in. In other cases, this request parameter is ignored.
   */
  refreshTokenDuration?: number;
  /**
   * The type of the `aud` claim of the ID token being issued. Valid values are as follows.
   *
   * | Value | Description |
   * | ----- | ----------- |
   * | "array" | The type of the aud claim is always an array of strings. |
   * | "string" | The type of the aud claim is always a single string. |
   * | null | The type of the aud claim remains the same as before. |
   *
   * This request parameter takes precedence over the `idTokenAudType` property of the service.
   */
  idTokenAudType?: string;
};

export const deviceCompleteRequestSchema: Schema<DeviceCompleteRequest> = s.object<DeviceCompleteRequest>({
  userCode: s.string(),
  result: result1Schema,
  subject: s.string(),
  sub: s.optional(s.string()),
  authTime: s.optional(s.int()),
  acr: s.optional(s.string()),
  claims: s.optional(s.string()),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  scopes: s.optional(s.array(s.string())),
  errorDescription: s.optional(s.string()),
  errorUri: s.optional(s.string()),
  idtHeaderParams: s.optional(s.string()),
  consentedClaims: s.optional(s.array(s.string())),
  jwtAtClaims: s.optional(s.string()),
  accessTokenDuration: s.optional(s.int()),
  refreshTokenDuration: s.optional(s.int()),
  idTokenAudType: s.optional(s.string()),
});
