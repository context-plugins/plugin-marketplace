import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { propertySchema, type Property } from "./property.js";

export type TokenIssueRequest = {
  /** The ticket issued from Authlete `/auth/token` API. */
  ticket: string;
  /** The subject (= unique identifier) of the authenticated user. */
  subject: string;
  /**
   * Extra properties to associate with a newly created access token. Note that properties parameter
   * is accepted only when `Content-Type` of the request is `application/json`, so don't use
   * `application/x-www-form-urlencoded` if you want to specify properties.
   */
  properties?: Property[];
  /** Additional claims that are added to the payload part of the JWT access token. */
  jwtAtClaims?: string;
  /**
   * The representation of an access token that may be issued as a result of the Authlete API call.
   */
  accessToken?: string;
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
};

export const tokenIssueRequestSchema: Schema<TokenIssueRequest> = s.object<TokenIssueRequest>({
  ticket: s.string(),
  subject: s.string(),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  jwtAtClaims: s.optional(s.string()),
  accessToken: s.optional(s.string()),
  accessTokenDuration: s.optional(s.int()),
  refreshTokenDuration: s.optional(s.int()),
});
