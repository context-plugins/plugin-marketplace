import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action24Schema, type Action24 } from "./action24.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { propertySchema, type Property } from "./property.js";

export type TokenUpdateResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action24;
  /** The access token which has been specified by the request. */
  accessToken?: string;
  /** The date at which the access token will expire. */
  accessTokenExpiresAt?: number;
  /** The extra properties associated with the access token. */
  properties?: Property[];
  /** The scopes associated with the access token. */
  scopes?: string[];
  /**
   * The authorization details. This represents the value of the `authorization_details` request
   * parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich
   * Authorization Requests".
   */
  authorizationDetails?: AuthzDetails;
  /** The token type associated with the access token. */
  tokenType?: string;
  /** the flag which indicates whether the access token is for an external attachment. */
  forExternalAttachment?: boolean;
  /** Set the unique token identifier. */
  tokenId?: string;
  /**
   * The datetime at which the newly issued refresh token will expire. The value is represented in
   * milliseconds since the Unix epoch (1970-01-01).
   */
  refreshTokenExpiresAt?: number;
};

export const tokenUpdateResponseSchema: Schema<TokenUpdateResponse> = s.object<TokenUpdateResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action24Schema)),
  accessToken: s.optional(s.string()),
  accessTokenExpiresAt: s.optional(s.int()),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  scopes: s.optional(s.array(s.string())),
  authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
  tokenType: s.optional(s.string()),
  forExternalAttachment: s.optional(s.boolean()),
  tokenId: s.optional(s.string()),
  refreshTokenExpiresAt: s.optional(s.int()),
});
