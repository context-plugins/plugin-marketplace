import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action7Schema, type Action7 } from "./action7.js";
import { pairSchema, type Pair } from "./pair.js";
import { propertySchema, type Property } from "./property.js";

export type UserinfoResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action7;
  /** The list of claims that the client application requests to be embedded in the ID token. */
  claims?: string[];
  /** The ID of the client application which is associated with the access token. */
  clientId?: number;
  /** The client ID alias when the authorization request for the access token was made. */
  clientIdAlias?: string;
  /**
   * The flag which indicates whether the client ID alias was used when the authorization request
   * for the access token was made.
   */
  clientIdAliasUsed?: boolean;
  /**
   * The content that the authorization server implementation can use as the value of
   * `WWW-Authenticate` header on errors.
   */
  responseContent?: string;
  /** The scopes covered by the access token. */
  scopes?: string[];
  /** The subject (= resource owner's ID). */
  subject?: string;
  /** The access token that came along with the userinfo request. */
  token?: string;
  /** The extra properties associated with the access token. */
  properties?: Property[];
  /**
   * The value of the `userinfo` property in the `claims` request parameter or in the `claims`
   * property in an authorization request object.
   */
  userInfoClaims?: string;
  /** The attributes of this service that the client application belongs to. */
  serviceAttributes?: Pair[];
  /** The attributes of the client. */
  clientAttributes?: Pair[];
  /** the claims that the user has consented for the client application to know. */
  consentedClaims?: string[];
  /**
   * Get names of claims that are requested indirectly by *"transformed claims"*. A client
   * application can request *"transformed claims"* by adding names of transformed claims in the
   * `claims` request parameter. The following is an example of the `claims` request parameter that
   * requests a predefined transformed claim named `18_or_over` and a transformed claim named
   * `nationality_usa` to be embedded in the response from the userinfo endpoint.
   * ```json
   * &#123;
   * "transformed_claims": &#123;
   * "nationality_usa": &#123;
   * "claim": "nationalities",
   * "fn": [
   * [ "eq", "USA" ],
   * "any"
   * ]
   * &#125;
   * &#125;,
   * "userinfo": &#123;
   * "::18_or_over": null,
   * ":nationality_usa": null
   * &#125;
   * &#125;
   * ```
   * The example above assumes that a transformed claim named `18_or_over` is predefined by the
   * authorization server like below.
   * ```json
   * &#123;
   * "18_or_over": &#123;
   * "claim": "birthdate",
   * "fn": [
   * "years_ago",
   * [ "gte", 18 ]
   * ]
   * &#125;
   * &#125;
   * ```
   * In the example, the `nationalities` claim is requested indirectly by the `nationality_usa`
   * transformed claim. Likewise, the `birthdate` claim is requested indirectly by the `18_or_over`
   * transformed claim. When the `claims` request parameter of an authorization request is like the
   * example above, this `requestedClaimsForTx` property will hold the following value.
   * ```json
   * [ "birthdate", "nationalities" ]
   * ```
   * It is expected that the authorization server implementation prepares values of the listed
   * claims and passes them as the value of the `claimsForTx` request parameter when it calls the
   * `/api/auth/userinfo/issue` API. The following is an example of the value of the `claimsForTx`
   * request parameter.
   * ```json
   * &#123;
   * "birthdate": "1970-01-23",
   * "nationalities": [ "DEU", "USA" ]
   * &#125;
   * ```
   */
  requestedClaimsForTx?: string[];
  /** Names of verified claims that will be referenced when transformed claims are computed. */
  requestedVerifiedClaimsForTx?: string[][];
  /**
   * the value of the `transformed_claims` property in the `claims` request parameter of an
   * authorization request or in the `claims` property in a request object.
   */
  transformedClaims?: string;
  /** The entity ID of the client. */
  clientEntityId?: string;
  /**
   * Flag which indicates whether the entity ID of the client was used when the request for the
   * access token was made.
   */
  clientEntityIdUsed?: boolean;
  /**
   * The expected nonce value for DPoP proof JWT, which should be used as the value of the
   * `DPoP-Nonce` HTTP header.
   */
  dpopNonce?: string;
  /**
   * The location of the client's metadata document that was used to resolve client metadata.
   *
   * This property is set when client metadata was retrieved via the [OAuth Client ID Metadata
   * Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/)
   * (CIMD) mechanism.
   */
  metadataDocumentLocation?: string;
  /**
   * Flag indicating whether a metadata document was used to resolve client metadata for this
   * request.
   *
   * When `true`, the client metadata was retrieved via the CIMD mechanism rather than from the
   * Authlete database.
   */
  metadataDocumentUsed?: boolean;
};

export const userinfoResponseSchema: Schema<UserinfoResponse> = s.object<UserinfoResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action7Schema)),
  claims: s.optional(s.array(s.string())),
  clientId: s.optional(s.int()),
  clientIdAlias: s.optional(s.string()),
  clientIdAliasUsed: s.optional(s.boolean()),
  responseContent: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
  subject: s.optional(s.string()),
  token: s.optional(s.string()),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  userInfoClaims: s.optional(s.string()),
  serviceAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
  clientAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
  consentedClaims: s.optional(s.array(s.string())),
  requestedClaimsForTx: s.optional(s.array(s.string())),
  requestedVerifiedClaimsForTx: s.optional(s.array(s.array(s.string()))),
  transformedClaims: s.optional(s.string()),
  clientEntityId: s.optional(s.string()),
  clientEntityIdUsed: s.optional(s.boolean()),
  dpopNonce: s.optional(s.string()),
  metadataDocumentLocation: s.optional(s.string()),
  metadataDocumentUsed: s.optional(s.boolean()),
});
