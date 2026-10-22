import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attachmentTypeSchema, type AttachmentType } from "./attachment-type.js";
import { claimTypeSchema, type ClaimType } from "./claim-type.js";
import { clientAuthMethodSchema, type ClientAuthMethod } from "./client-auth-method.js";
import { clientRegistrationTypeSchema, type ClientRegistrationType } from "./client-registration-type.js";
import {
  credentialIssuerMetadataSchema,
  type CredentialIssuerMetadata,
} from "./credential-issuer-metadata.js";
import { deliveryModeSchema, type DeliveryMode } from "./delivery-mode.js";
import { displaySchema, type Display } from "./display.js";
import { fapiModeSchema, type FapiMode } from "./fapi-mode.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";
import { hskSchema, type Hsk } from "./hsk.js";
import { jwsAlgSchema, type JwsAlg } from "./jws-alg.js";
import { namedUriSchema, type NamedUri } from "./named-uri.js";
import { pairSchema, type Pair } from "./pair.js";
import { promptSchema, type Prompt } from "./prompt.js";
import { responseTypeSchema, type ResponseType } from "./response-type.js";
import { scopeSchema, type Scope } from "./scope.js";
import { serviceProfileSchema, type ServiceProfile } from "./service-profile.js";
import { snsCredentialsSchema, type SnsCredentials } from "./sns-credentials.js";
import { snsSchema, type Sns } from "./sns.js";
import { trustAnchorSchema, type TrustAnchor } from "./trust-anchor.js";
import { userCodeCharsetSchema, type UserCodeCharset } from "./user-code-charset.js";
import {
  verifiedClaimsValidationSchemaSchema,
  type VerifiedClaimsValidationSchema,
} from "./verified-claims-validation-schema.js";

export type Service = {
  /** The sequential number of the service. The value of this property is assigned by Authlete. */
  number?: number;
  /** The name of this service. */
  serviceName?: string | null;
  /**
   * The issuer identifier of the service.
   *
   * A URL that starts with https:// and has no query or fragment component.
   *
   * The value of this property is used as `iss` claim in an [ID
   * token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) and `issuer` property in
   * the [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  issuer?: string | null;
  /** The description about the service. */
  description?: string | null;
  /**
   * The service ID used in Authlete API calls. The value of this property is assigned by Authlete.
   */
  apiKey?: number;
  /**
   * The API secret of this service. This value is assigned by Authlete and is used for service
   * authentication in API calls.
   */
  apiSecret?: string | null;
  /**
   * The endpoint for batch token notifications. This endpoint is called when multiple tokens are
   * issued or revoked in a batch operation.
   */
  tokenBatchNotificationEndpoint?: string | null;
  /**
   * The flag indicating whether the audience of client assertion JWTs must match the issuer
   * identifier of this service.
   */
  clientAssertionAudRestrictedToIssuer?: boolean;
  /** The number of the organization that owns this service. This value is assigned by Authlete. */
  serviceOwnerNumber?: number;
  /** The maximum number of client applications that a developer can have. */
  clientsPerDeveloper?: number;
  /**
   * The endpoint for developer authentication callbacks. This is used when developers log into the
   * developer portal.
   */
  developerAuthenticationCallbackEndpoint?: string | null;
  /** The API key for basic authentication at the developer authentication callback endpoint. */
  developerAuthenticationCallbackApiKey?: string | null;
  /** The API secret for basic authentication at the developer authentication callback endpoint. */
  developerAuthenticationCallbackApiSecret?: string | null;
  /** Social login services (SNS) that this service supports for end-user authentication. */
  supportedSnses?: Sns[] | null;
  /** The credentials for social login services (SNS) that are used for end-user authentication. */
  snsCredentials?: SnsCredentials[] | null;
  /** Social login services (SNS) that this service supports for developer authentication. */
  supportedDeveloperSnses?: Sns[] | null;
  /** The credentials for social login services (SNS) that are used for developer authentication. */
  developerSnsCredentials?: SnsCredentials[] | null;
  /** Deprecated. Always `true`. */
  clientIdAliasEnabled?: boolean;
  /**
   * The `metadata` of the service. The content of the returned array depends on contexts. The
   * predefined service metadata is listed in the following table.
   *
   *   | Key | Description |
   *   | --- | --- |
   *   | `clientCount` | The number of client applications which belong to this service.  |
   */
  metadata?: Pair[] | null;
  /**
   * The time at which this service was created. The value is represented as milliseconds since the
   * UNIX epoch (`1970-01-01`).
   */
  createdAt?: number;
  /**
   * The time at which this service was last modified. The value is represented as milliseconds
   * since the UNIX epoch (1970-01-01).
   */
  modifiedAt?: number;
  /**
   * A Web API endpoint for user authentication which is to be prepared on the service side.
   *
   * The endpoint must be implemented if you do not implement the UI at the authorization endpoint
   * but use the one provided by Authlete.
   *
   * The user authentication at the authorization endpoint provided by Authlete is performed by
   * making a `POST` request to this endpoint.
   */
  authenticationCallbackEndpoint?: string | null;
  /**
   * API key for basic authentication at the authentication callback endpoint.
   *
   * If the value is not empty, Authlete generates Authorization header for Basic authentication
   * when making a request to the authentication callback endpoint.
   */
  authenticationCallbackApiKey?: string | null;
  /** API secret for `basic` authentication at the authentication callback endpoint. */
  authenticationCallbackApiSecret?: string | null;
  /**
   * Values of acrs (authentication context class references) that the service supports.
   *
   * The value of this property is used as `acr_values_supported` property in the [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  supportedAcrs?: string[] | null;
  /**
   * Values of `grant_type` request parameter that the service supports.
   *
   * The value of this property is used as `grant_types_supported property` in the [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  supportedGrantTypes?: GrantType[] | null;
  /**
   * Values of `response_type` request parameter that the service supports. Valid values are listed
   * in Response Type.
   *
   * The value of this property is used as `response_types_supported` property in the [OpenID
   * Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  supportedResponseTypes?: ResponseType[] | null;
  /**
   * The supported data types that can be used as values of the type field in
   * `authorization_details`.
   *
   * This property corresponds to the `authorization_details_types_supported` metadata. See "OAuth
   * 2.0 Rich Authorization Requests" (RAR) for details.
   */
  supportedAuthorizationDetailsTypes?: string[] | null;
  /** The profiles that this service supports. */
  supportedServiceProfiles?: ServiceProfile[] | null;
  /**
   * The flag to indicate whether the `error_description` response parameter is omitted.
   *
   * According to [RFC 6749](https://tools.ietf.org/html/rfc6749), an authorization server may
   * include the `error_description` response parameter in error responses.
   *
   * If `true`, Authlete does not embed the `error_description` response parameter in error
   * responses.
   */
  errorDescriptionOmitted?: boolean;
  /**
   * The flag to indicate whether the `error_uri` response parameter is omitted.
   *
   * According to [RFC 6749](https://tools.ietf.org/html/rfc6749), an authorization server may
   * include the `error_uri` response parameter in error responses.
   *
   * If `true`, Authlete does not embed the `error_uri` response parameter in error responses.
   */
  errorUriOmitted?: boolean;
  /**
   * The authorization endpoint of the service.
   *
   * A URL that starts with `https://` and has no fragment component. For example,
   * `https://example.com/auth/authorization`.
   *
   * The value of this property is used as `authorization_endpoint` property in the [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  authorizationEndpoint?: string | null;
  /**
   * Deprecated. The direct authorization endpoint was removed in Authlete 3.0.15, so this flag has
   * no effect and is always returned as `false`.
   *
   * @deprecated
   */
  directAuthorizationEndpointEnabled?: boolean;
  /**
   * UI locales that the service supports.
   *
   * Each element is a language tag defined in [RFC 5646](https://tools.ietf.org/html/rfc5646). For
   * example, `en-US` and `ja-JP`.
   *
   * The value of this property is used as `ui_locales_supported` property in the [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  supportedUiLocales?: string[] | null;
  /**
   * Values of `display` request parameter that service supports.
   *
   * The value of this property is used as `display_values_supported` property in the Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  supportedDisplays?: Display[] | null;
  /**
   * The flag to indicate whether the use of Proof Key for Code Exchange (PKCE) is always required
   * for authorization requests by Authorization Code Flow.
   *
   * If `true`, `code_challenge` request parameter is always required for authorization requests
   * using Authorization Code Flow.
   *
   * See [RFC 7636](https://tools.ietf.org/html/rfc7636) (Proof Key for Code Exchange by OAuth
   * Public Clients) for details about `code_challenge` request parameter.
   */
  pkceRequired?: boolean;
  /**
   * The flag to indicate whether `S256` is always required as the code challenge method whenever
   * [PKCE (RFC 7636)](https://tools.ietf.org/html/rfc7636) is used.
   *
   * If this flag is set to `true`, `code_challenge_method=S256` must be included in the
   * authorization request whenever it includes the `code_challenge` request parameter. Neither
   * omission of the `code_challenge_method` request parameter nor use of plain
   * (`code_challenge_method=plain`) is allowed.
   */
  pkceS256Required?: boolean;
  /**
   * The duration of authorization response JWTs in seconds.
   *
   * [Financial-grade API: JWT Secured Authorization Response Mode for OAuth 2.0
   * (JARM)](https://openid.net/specs/openid-financial-api-jarm.html) defines new values for the
   * `response_mode` request parameter. They are `query.jwt`, `fragment.jwt`, `form_post.jwt` and
   * `jwt`. If one of them is specified as the response mode, response parameters from the
   * authorization endpoint will be packed into a JWT. This property is used to compute the value of
   * the `exp` claim of the JWT.
   */
  authorizationResponseDuration?: number;
  /** The duration of authorization codes in seconds. */
  authorizationCodeDuration?: number;
  /**
   * The [token endpoint](https://tools.ietf.org/html/rfc6749#section-3.2) of the service.
   *
   * A URL that starts with `https://` and has not fragment component. For example,
   * `https://example.com/auth/token`.
   *
   * The value of this property is used as `token_endpoint` property in the [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  tokenEndpoint?: string | null;
  /**
   * Deprecated. The direct token endpoint was removed in Authlete 3.0.15, so this flag has no
   * effect and is always returned as `false`.
   *
   * @deprecated
   */
  directTokenEndpointEnabled?: boolean;
  /**
   * Client authentication methods supported by the token endpoint of the service.
   *
   * The value of this property is used as `token_endpoint_auth_methods_supports` property in the
   * [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  supportedTokenAuthMethods?: ClientAuthMethod[] | null;
  /**
   * The flag to indicate token requests from public clients without the `client_id` request
   * parameter are allowed when the client can be guessed from `authorization_code` or
   * `refresh_token`.
   *
   * This flag should not be set unless you have special reasons.
   */
  missingClientIdAllowed?: boolean;
  /**
   * The [revocation endpoint](https://tools.ietf.org/html/rfc7009) of the service.
   *
   * A URL that starts with `https://`. For example, `https://example.com/auth/revocation`.
   */
  revocationEndpoint?: string | null;
  /**
   * Deprecated. The direct revocation endpoint was removed in Authlete 3.0.15, so this flag has no
   * effect and is always returned as `false`.
   *
   * @deprecated
   */
  directRevocationEndpointEnabled?: boolean;
  /** Client authentication methods supported at the revocation endpoint. */
  supportedRevocationAuthMethods?: ClientAuthMethod[] | null;
  /** The URI of the introspection endpoint. */
  introspectionEndpoint?: string | null;
  /**
   * Deprecated. The direct introspection endpoint was removed in Authlete 3.0.15, so this flag has
   * no effect and is always returned as `false`.
   *
   * @deprecated
   */
  directIntrospectionEndpointEnabled?: boolean;
  /** Client authentication methods supported at the introspection endpoint. */
  supportedIntrospectionAuthMethods?: ClientAuthMethod[] | null;
  /**
   * The URI of the pushed authorization request endpoint.
   *
   * This property corresponds to the `pushed_authorization_request_endpoint` metadata defined in
   * "[5. Authorization Server
   * Metadata](https://tools.ietf.org/html/draft-lodderstedt-oauth-par#section-5)" of OAuth 2.0
   * Pushed Authorization Requests.
   */
  pushedAuthReqEndpoint?: string | null;
  /** The duration of pushed authorization requests in seconds. */
  pushedAuthReqDuration?: number;
  /**
   * The flag to indicate whether this service requires that clients use the pushed authorization
   * request endpoint.
   *
   * This property corresponds to the `require_pushed_authorization_requests` server metadata
   * defined in [OAuth 2.0 Pushed Authorization
   * Requests](https://tools.ietf.org/html/draft-lodderstedt-oauth-par).
   */
  parRequired?: boolean;
  /**
   * The flag to indicate whether this service requires that authorization requests always utilize a
   * request object by using either request or `request_uri` request parameter.
   *
   * If this flag is set to `true` and the value of `traditionalRequestObjectProcessingApplied` is
   * `false`, the value of `require_signed_request_object` server metadata of this service is
   * reported as `true` in the discovery document. The metadata is defined in JAR (JWT Secured
   * Authorization Request). That `require_signed_request_object` is `true` means that authorization
   * requests which don't conform to the JAR specification are rejected.
   */
  requestObjectRequired?: boolean;
  /**
   * The flag to indicate whether a request object is processed based on rules defined in [OpenID
   * Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) or JAR (JWT Secured
   * Authorization Request).
   */
  traditionalRequestObjectProcessingApplied?: boolean;
  /**
   * The flag to indicate whether this service validates certificate chains during PKI-based client
   * mutual TLS authentication.
   */
  mutualTlsValidatePkiCertChain?: boolean;
  /**
   * The list of root certificates trusted by this service for PKI-based client mutual TLS
   * authentication.
   */
  trustedRootCertificates?: string[] | null;
  /** The MTLS endpoint aliases. */
  mtlsEndpointAliases?: NamedUri[] | null;
  /**
   * The access token type.
   *
   * This value is used as the value of `token_type` property in access token responses. If this
   * service complies with [RFC 6750](https://tools.ietf.org/html/rfc6750), the value of this
   * property should be `Bearer`.
   *
   * See [RFC 6749 (OAuth 2.0), 7.1. Access Token
   * Types](https://tools.ietf.org/html/rfc6749#section-7.1) for details.
   */
  accessTokenType?: string | null;
  /**
   * The flag to indicate whether this service supports issuing TLS client certificate bound access
   * tokens.
   */
  tlsClientCertificateBoundAccessTokens?: boolean;
  /**
   * The duration of access tokens in seconds. This value is used as the value of `expires_in`
   * property in access token responses. `expires_in` is defined [RFC 6749, 5.1. Successful
   * Response](https://tools.ietf.org/html/rfc6749#section-5.1).
   */
  accessTokenDuration?: number;
  /**
   * The flag to indicate whether the number of access tokens per subject (and per client) is at
   * most one or can be more.
   *
   * If `true`, an attempt to issue a new access token invalidates existing access tokens that are
   * associated with the same subject and the same client.
   *
   * Note that, however, attempts by [Client Credentials
   * Flow](https://tools.ietf.org/html/rfc6749#section-4.4) do not invalidate existing access tokens
   * because access tokens issued by Client Credentials Flow are not associated with any end-user's
   * subject. Also note that an attempt by [Refresh Token
   * Flow](https://tools.ietf.org/html/rfc6749#section-6) invalidates the coupled access token only
   * and this invalidation is always performed regardless of whether the value of this setting item
   * is `true` or `false`.
   */
  singleAccessTokenPerSubject?: boolean;
  /**
   * The signature algorithm for JWT. This value is represented on 'alg' attribute of the header of
   * JWT.
   *
   * it's semantics depends upon where is this defined, for instance:
   *   - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm
   *     used to sign it. Check your [KB
   *     article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).
   *   - as client authorizationSignAlg value, it represents the signature algorithm used when
   *     [creating a JARM
   *     response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).
   *   - or as client requestSignAlg value, it specifies which is the expected signature used by
   *     [client on a Request
   *     Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects).
   */
  accessTokenSignAlg?: JwsAlg | null;
  /**
   * The key ID to identify a JWK used for signing access tokens.
   *
   * A JWK Set can be registered as a property of a service. A JWK Set can contain 0 or more JWKs.
   * Authlete Server has to pick up one JWK for signing from the JWK Set when it generates a
   * JWT-based access token. Authlete Server searches the registered JWK Set for a JWK which
   * satisfies conditions for access token signature. If the number of JWK candidates which satisfy
   * the conditions is 1, there is no problem. On the other hand, if there exist multiple
   * candidates, a Key ID is needed to be specified so that Authlete Server can pick up one JWK from
   * among the JWK candidates.
   */
  accessTokenSignatureKeyId?: string | null;
  /**
   * The duration of refresh tokens in seconds. The related specifications have no requirements on
   * refresh token duration, but Authlete sets expiration for refresh tokens.
   */
  refreshTokenDuration?: number;
  /**
   * The flag to indicate whether the remaining duration of the used refresh token is taken over to
   * the newly issued refresh token.
   */
  refreshTokenDurationKept?: boolean;
  /**
   * The flag which indicates whether duration of refresh tokens are reset when they are used even
   * if the `refreshTokenKept` property of this service set to is `true` (= even if "Refresh Token
   * Continuous Use" is "Kept").
   *
   * This flag has no effect when the `refreshTokenKept` property is set to `false`. In other words,
   * if this service issues a new refresh token on every refresh token request, the refresh token
   * will have fresh duration (unless `refreshTokenDurationKept` is set to `true`) and this
   * `refreshTokenDurationReset` property is not referenced.
   */
  refreshTokenDurationReset?: boolean;
  /**
   * The flag to indicate whether a refresh token remains unchanged or gets renewed after its use.
   *
   * If `true`, a refresh token used to get a new access token remains valid after its use.
   * Otherwise, if `false`, a refresh token is invalidated after its use and a new refresh token is
   * issued.
   *
   * See [RFC 6749 6. Refreshing an Access Token](https://tools.ietf.org/html/rfc6749#section-6), as
   * to how to get a new access token using a refresh token.
   */
  refreshTokenKept?: boolean;
  /** Scopes supported by the service. */
  supportedScopes?: Scope[] | null;
  /** The flag to indicate whether requests that request no scope are rejected or not. */
  scopeRequired?: boolean;
  /**
   * 'The duration of [ID token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken)s in
   * seconds. This value is used to calculate the value of `exp` claim in an ID token.'
   */
  idTokenDuration?: number;
  /**
   * The allowable clock skew between the server and clients in seconds.
   *
   * The clock skew is taken into consideration when time-related claims in a JWT (e.g. `exp`,
   * `iat`, `nbf`) are verified.
   */
  allowableClockSkew?: number;
  /**
   * Claim types supported by the service. Valid values are listed in Claim Type. Note that Authlete
   * currently doesn't provide any API to help implementations for `AGGREGATED` and `DISTRIBUTED`.
   *
   * The value of this property is used as `claim_types_supported` property in the [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  supportedClaimTypes?: ClaimType[] | null;
  /**
   * Claim locales that the service supports. Each element is a language tag defined in [RFC
   * 5646](https://tools.ietf.org/html/rfc5646). For example, `en-US` and `ja-JP`. See [OpenID
   * Connect Core 1.0, 5.2. Languages and
   * Scripts](https://openid.net/specs/openid-connect-core-1_0.html#ClaimsLanguagesAndScripts) for
   * details.
   *
   * The value of this property is used as `claims_locales_supported` property in the [OpenID
   * Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  supportedClaimLocales?: string[] | null;
  /**
   * Claim names that the service supports. The standard claim names listed in [OpenID Connect Core
   * 1.0, 5.1. Standard Claim](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)
   * should be supported. The following is the list of standard claims.
   */
  supportedClaims?: string[] | null;
  /**
   * The flag indicating whether claims specified by shortcut scopes (e.g. `profile`) are included
   * in the issued ID token only when no access token is issued.
   */
  claimShortcutRestrictive?: boolean;
  /**
   * The URL of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517) document. For
   * example, `http://example.com/auth/jwks`.
   *
   * Client applications accesses this URL (1) to get the public key of the service to validate the
   * signature of an ID token issued by the service and (2) to get the public key of the service to
   * encrypt an request object of the client application. See [OpenID Connect Core 1.0, 10.
   * Signatures and Encryption](https://openid.net/specs/openid-connect-core-1_0.html#SigEnc) for
   * details.
   *
   * The value of this property is used as `jwks_uri` property in the [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  jwksUri?: string | null;
  /**
   * Deprecated. The direct JWKS endpoint was removed in Authlete 3.0.15, so this flag has no effect
   * and is always returned as `false`.
   *
   * @deprecated
   */
  directJwksEndpointEnabled?: boolean;
  /**
   * The content of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517) document.
   *
   * If this property is not `null` in a `/service/create` request or a `/service/update` request,
   * Authlete hosts the content in the database. This property must not be `null` and must contain
   * pairs of public/private keys if the service wants to support asymmetric signatures for ID
   * tokens and asymmetric encryption for request objects. See [OpenID Connect Core 1.0, 10.
   * Signatures and Encryption](https://openid.net/specs/openid-connect-core-1_0.html#SigEnc) for
   * details.
   */
  jwks?: string | null;
  /** The key ID to identify a JWK used for ID token signature using an asymmetric key. */
  idTokenSignatureKeyId?: string | null;
  /** The key ID to identify a JWK used for user info signature using an asymmetric key. */
  userInfoSignatureKeyId?: string | null;
  /**
   * The key ID to identify a JWK used for signing authorization responses using an asymmetric key.
   */
  authorizationSignatureKeyId?: string | null;
  /**
   * The [user info endpoint](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo) of the
   * service. A URL that starts with `https://`. For example, `https://example.com/auth/userinfo`.
   *
   * The value of this property is used as `userinfo_endpoint` property in the [OpenID Provider
   * Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  userInfoEndpoint?: string | null;
  /**
   * Deprecated. The direct userinfo endpoint was removed in Authlete 3.0.15, so this flag has no
   * effect and is always returned as `false`.
   *
   * @deprecated
   */
  directUserInfoEndpointEnabled?: boolean;
  /**
   * The boolean flag which indicates whether the [OAuth 2.0 Dynamic Client Registration
   * Protocol](https://tools.ietf.org/html/rfc7591) is supported.
   */
  dynamicRegistrationSupported?: boolean;
  /**
   * The [registration
   * endpoint](http://openid.net/specs/openid-connect-registration-1_0.html#ClientRegistration) of
   * the service. A URL that starts with `https://`. For example,
   * `https://example.com/auth/registration`.
   *
   * The value of this property is used as `registration_endpoint` property in the [OpenID Provider
   * Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  registrationEndpoint?: string | null;
  /**
   * The URI of the registration management endpoint. If dynamic client registration is supported,
   * and this is set, this URI will be used as the basis of the client's management endpoint by
   * appending `/clientid&#125;/` to it as a path element. If this is unset, the value of
   * `registrationEndpoint` will be used as the URI base instead.
   */
  registrationManagementEndpoint?: string | null;
  /**
   * The URL of the "Policy" of the service.
   *
   * The value of this property is used as `op_policy_uri` property in the [OpenID Provider
   * Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  policyUri?: string | null;
  /**
   * The URL of the "Terms Of Service" of the service.
   *
   * The value of this property is used as `op_tos_uri` property in the [OpenID Provider
   * Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  tosUri?: string | null;
  /**
   * The URL of a page where documents for developers can be found.
   *
   * The value of this property is used as `service_documentation` property in the [OpenID Provider
   * Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  serviceDocumentation?: string | null;
  /**
   * The URI of backchannel authentication endpoint, which is defined in the specification of [CIBA
   * (Client Initiated Backchannel
   * Authentication)](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html).
   */
  backchannelAuthenticationEndpoint?: string | null;
  /**
   * The supported backchannel token delivery modes. This property corresponds to the
   * `backchannel_token_delivery_modes_supported` metadata.
   *
   * Backchannel token delivery modes are defined in the specification of [CIBA (Client Initiated
   * Backchannel
   * Authentication)](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html).
   */
  supportedBackchannelTokenDeliveryModes?: DeliveryMode[] | null;
  /**
   * The duration of backchannel authentication request IDs issued from the backchannel
   * authentication endpoint in seconds. This is used as the value of the `expires_in` property in
   * responses from the backchannel authentication endpoint.
   */
  backchannelAuthReqIdDuration?: number;
  /**
   * The minimum interval between polling requests to the token endpoint from client applications in
   * seconds. This is used as the value of the `interval` property in responses from the backchannel
   * authentication endpoint.
   */
  backchannelPollingInterval?: number;
  /**
   * The boolean flag which indicates whether the `user_code` request parameter is supported at the
   * backchannel authentication endpoint. This property corresponds to the
   * `backchannel_user_code_parameter_supported` metadata.
   */
  backchannelUserCodeParameterSupported?: boolean;
  /**
   * The flag to indicate whether the `binding_message` request parameter is always required
   * whenever a backchannel authentication request is judged as a request for Financial-grade API.
   */
  backchannelBindingMessageRequiredInFapi?: boolean;
  /**
   * The URI of the device authorization endpoint.
   *
   * Device authorization endpoint is defined in the specification of OAuth 2.0 Device Authorization
   * Grant.
   */
  deviceAuthorizationEndpoint?: string | null;
  /**
   * The verification URI for the device flow. This URI is used as the value of the
   * `verification_uri` parameter in responses from the device authorization endpoint.
   */
  deviceVerificationUri?: string | null;
  /**
   * The verification URI for the device flow with a placeholder for a user code. This URI is used
   * to build the value of the `verification_uri_complete` parameter in responses from the device
   * authorization endpoint.
   */
  deviceVerificationUriComplete?: string | null;
  /**
   * The duration of device verification codes and end-user verification codes issued from the
   * device authorization endpoint in seconds. This is used as the value of the `expires_in`
   * property in responses from the device authorization endpoint.
   */
  deviceFlowCodeDuration?: number;
  /**
   * The minimum interval between polling requests to the token endpoint from client applications in
   * seconds in device flow. This is used as the value of the `interval` property in responses from
   * the device authorization endpoint.
   */
  deviceFlowPollingInterval?: number;
  userCodeCharset?: UserCodeCharset | null;
  /** The length of end-user verification codes (`user_code`) for Device Flow. */
  userCodeLength?: number;
  /**
   * Trust frameworks supported by this service. This corresponds to the
   * `trust_frameworks_supported`
   * [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7).
   */
  supportedTrustFrameworks?: string[] | null;
  /**
   * Evidence supported by this service. This corresponds to the `evidence_supported`
   * [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7).
   */
  supportedEvidence?: string[] | null;
  /**
   * Identity documents supported by this service. This corresponds to the `id_documents_supported`
   * [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7).
   */
  supportedIdentityDocuments?: string[] | null;
  /**
   * Verification methods supported by this service. This corresponds to the
   * `id_documents_verification_methods_supported`
   * [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7).
   */
  supportedVerificationMethods?: string[] | null;
  /**
   * Verified claims supported by this service. This corresponds to the
   * `claims_in_verified_claims_supported`
   * [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7).
   */
  supportedVerifiedClaims?: string[] | null;
  /** The verified claims validation schema set. */
  verifiedClaimsValidationSchemaSet?: VerifiedClaimsValidationSchema;
  /** The attributes of this service. */
  attributes?: Pair[] | null;
  /**
   * The flag indicating whether the nbf claim in the request object is optional even when the
   * authorization request is regarded as a FAPI-Part2 request.
   */
  nbfOptional?: boolean;
  /** The flag indicating whether generation of the iss response parameter is suppressed. */
  issSuppressed?: boolean;
  /** custom client metadata supported by this service. */
  supportedCustomClientMetadata?: string[] | null;
  /**
   * The flag indicating whether the expiration date of an access token never exceeds that of the
   * corresponding refresh token.
   */
  tokenExpirationLinked?: boolean;
  /**
   * The flag indicating whether encryption of request object is required when the request object is
   * passed through the front channel.
   */
  frontChannelRequestObjectEncryptionRequired?: boolean;
  /**
   * The flag indicating whether the JWE alg of encrypted request object must match the
   * `request_object_encryption_alg` client metadata of the client that has sent the request object.
   */
  requestObjectEncryptionAlgMatchRequired?: boolean;
  /**
   * The flag indicating whether the JWE `enc` of encrypted request object must match the
   * `request_object_encryption_enc` client metadata of the client that has sent the request object.
   */
  requestObjectEncryptionEncMatchRequired?: boolean;
  /**
   * The flag indicating whether HSM (Hardware Security Module) support is enabled for this service.
   *
   * When this flag is `false`, keys managed in HSMs are not used even if they exist. In addition,
   * `/api/hsk/*` APIs reject all requests.
   *
   * Even if this flag is `true`, HSM-related features do not work if the configuration of the
   * Authlete server you are using does not support HSM.
   */
  hsmEnabled?: boolean;
  /**
   * The information about keys managed on HSMs (Hardware Security Modules).
   *
   * This `hsks` property is output only, meaning that `hsks` in requests to `/api/service/create`
   * API and `/api/service/update` API do not have any effect. The contents of this property is
   * controlled only by `/api/hsk/*` APIs.
   */
  hsks?: Hsk[] | null;
  /** The URL of the grant management endpoint. */
  grantManagementEndpoint?: string | null;
  /**
   * The flag indicating whether every authorization request (and any request serving as an
   * authorization request such as CIBA backchannel authentication request and device authorization
   * request) must include the `grant_management_action` request parameter.
   */
  grantManagementActionRequired?: boolean;
  /**
   * The flag indicating whether Authlete's `/api/client/registration` API uses `UNAUTHORIZED` as a
   * value of the `action` response parameter when appropriate.
   */
  unauthorizedOnClientConfigSupported?: boolean;
  /**
   * The flag indicating whether the `scope` request parameter in dynamic client registration and
   * update requests (RFC 7591 and RFC 7592) is used as scopes that the client can request.
   *
   * Limiting the range of scopes that a client can request is achieved by listing scopes in the
   * `client.extension.requestableScopes` property and setting the
   * `client.extension.requestableScopesEnabled` property to `true`. This feature is called
   * "requestable scopes".
   *
   * This property affects behaviors of `/api/client/registration` and other family APIs.
   */
  dcrScopeUsedAsRequestable?: boolean;
  /**
   * The endpoint for clients ending the sessions.
   *
   * A URL that starts with `https://` and has no fragment component. For example,
   * `https://example.com/auth/endSession`.
   *
   * The value of this property is used as `end_session_endpoint` property in the [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   */
  endSessionEndpoint?: string | null;
  /**
   * The URL of the challenge endpoint, which is defined in OAuth 2.0 Attestation-Based Client
   * Authentication.
   */
  challengeEndpoint?: string | null;
  /**
   * The flag indicating whether the port number component of redirection URIs can be variable when
   * the host component indicates loopback.
   */
  loopbackRedirectionUriVariable?: boolean;
  /**
   * The flag indicating whether Authlete checks whether the `aud` claim of request objects matches
   * the issuer identifier of this service.
   */
  requestObjectAudienceChecked?: boolean;
  /**
   * The flag indicating whether Authlete generates access tokens for external attachments and
   * embeds them in ID tokens and userinfo responses.
   */
  accessTokenForExternalAttachmentEmbedded?: boolean;
  /**
   * Identifiers of entities that can issue entity statements for this service. This property
   * corresponds to the `authority_hints` property that appears in a self-signed entity statement
   * that is defined in OpenID Connect Federation 1.0.
   */
  authorityHints?: string[] | null;
  /** flag indicating whether this service supports OpenID Connect Federation 1 */
  federationEnabled?: boolean;
  /**
   * JWK Set document containing keys that are used to sign (1) self-signed entity statement of this
   * service and (2) the response from `signed_jwks_uri`.
   */
  federationJwks?: string | null;
  /** A key ID to identify a JWK used to sign the entity configuration and the signed JWK Set. */
  federationSignatureKeyId?: string | null;
  /** The duration of the entity configuration in seconds. */
  federationConfigurationDuration?: number;
  /**
   * The URI of the federation registration endpoint. This property corresponds to the
   * `federation_registration_endpoint` server metadata that is defined in OpenID Connect Federation
   * 1.0.
   */
  federationRegistrationEndpoint?: string | null;
  /**
   * The human-readable name representing the organization that operates this service. This property
   * corresponds to the `organization_name` server metadata that is defined in OpenID Connect
   * Federation 1.0.
   */
  organizationName?: string | null;
  /**
   * The transformed claims predefined by this service in JSON format. This property corresponds to
   * the `transformed_claims_predefined` server metadata.
   */
  predefinedTransformedClaims?: string | null;
  /**
   * flag indicating whether refresh token requests with the same refresh token can be made multiple
   * times in quick succession and they can obtain the same renewed refresh token within the short
   * period.
   */
  refreshTokenIdempotent?: boolean;
  /**
   * The URI of the endpoint that returns this service's JWK Set document in the JWT format. This
   * property corresponds to the `signed_jwks_uri` server metadata defined in OpenID Connect
   * Federation 1.0.
   */
  signedJwksUri?: string | null;
  /**
   * Supported attachment types. This property corresponds to the &#123;@code
   * attachments_supported&#125; server metadata which was added by the third implementer's draft of
   * OpenID Connect for Identity Assurance 1.0.
   */
  supportedAttachments?: AttachmentType[] | null;
  /**
   * Supported algorithms used to compute digest values of external attachments. This property
   * corresponds to the `digest_algorithms_supported` server metadata which was added by the third
   * implementer's draft of OpenID Connect for Identity Assurance 1.0.
   */
  supportedDigestAlgorithms?: string[] | null;
  /**
   * Document types supported by this service. This property corresponds to the
   * `documents_supported` server metadata.
   */
  supportedDocuments?: string[] | null;
  /**
   * validation and verification processes supported by this service. This property corresponds to
   * the `documents_methods_supported` server metadata.
   *
   * The third implementer's draft of [OpenID Connect for Identity Assurance
   * 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html) renamed the
   * `id_documents_verification_methods_supported` server metadata to `documents_methods_supported`.
   */
  supportedDocumentsMethods?: string[] | null;
  /**
   * Document validation methods supported by this service. This property corresponds to the
   * `documents_validation_methods_supported` server metadata which was added by the third
   * implementer's draft of
   */
  supportedDocumentsValidationMethods?: string[] | null;
  /**
   * Document verification methods supported by this service. This property corresponds to the
   * `documents_verification_methods_supported` server metadata which was added by the third
   * implementer's draft of [OpenID Connect for Identity Assurance
   * 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html)
   */
  supportedDocumentsVerificationMethods?: string[] | null;
  /**
   * Electronic record types supported by this service. This property corresponds to the
   * `electronic_records_supported` server metadata which was added by the third implementer's draft
   * of [OpenID Connect for Identity Assurance
   * 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html)
   */
  supportedElectronicRecords?: string[] | null;
  supportedClientRegistrationTypes?: ClientRegistrationType[] | null;
  /**
   * The flag indicating whether to prohibit unidentifiable clients from making token exchange
   * requests.
   */
  tokenExchangeByIdentifiableClientsOnly?: boolean;
  /** The flag indicating whether to prohibit public clients from making token exchange requests. */
  tokenExchangeByConfidentialClientsOnly?: boolean;
  /**
   * The flag indicating whether to prohibit clients that have no explicit permission from making
   * token exchange requests.
   */
  tokenExchangeByPermittedClientsOnly?: boolean;
  /**
   * The flag indicating whether to reject token exchange requests which use encrypted JWTs as input
   * tokens.
   */
  tokenExchangeEncryptedJwtRejected?: boolean;
  /**
   * The flag indicating whether to reject token exchange requests which use unsigned JWTs as input
   * tokens.
   */
  tokenExchangeUnsignedJwtRejected?: boolean;
  /**
   * The flag indicating whether to prohibit unidentifiable clients from using the grant type
   * "urn:ietf:params:oauth:grant-type:jwt-bearer".
   */
  jwtGrantByIdentifiableClientsOnly?: boolean;
  /**
   * The flag indicating whether to reject token requests that use an encrypted JWT as an
   * authorization grant with the grant type "urn:ietf:params:oauth:grant-type:jwt-bearer".
   */
  jwtGrantEncryptedJwtRejected?: boolean;
  /**
   * The flag indicating whether to reject token requests that use an unsigned JWT as an
   * authorization grant with the grant type "urn:ietf:params:oauth:grant-type:jwt-bearer".
   */
  jwtGrantUnsignedJwtRejected?: boolean;
  /**
   * The flag indicating whether to block DCR (Dynamic Client Registration) requests whose
   * "software_id" has already been used previously.
   */
  dcrDuplicateSoftwareIdBlocked?: boolean;
  /**
   * The trust anchors that are referenced when this service resolves trust chains of relying
   * parties.
   *
   * If this property is empty, client registration fails regardless of whether its type is
   * `automatic` or `explicit`. It means that OpenID Connect Federation 1.0 does not work.
   */
  trustAnchors?: TrustAnchor[] | null;
  /**
   * The flag indicating whether the openid scope should be dropped from scopes list assigned to
   * access token issued when a refresh token grant is used.
   */
  openidDroppedOnRefreshWithoutOfflineAccess?: boolean;
  /**
   * The flag indicating whether to refrain from issuing an ID token when the `openid` scope has
   * been removed from the scopes to be granted by the `scopes` request parameter of the
   * `/auth/authorization/issue` API.
   *
   * Flows whose `response_type` contains `id_token`, and flows that requested Native SSO, are not
   * affected, because both require an ID token.
   */
  idTokenDroppedOnIssueWithoutOpenid?: boolean;
  /**
   * Supported document check methods. This property corresponds to the
   * `documents_check_methods_supported` server metadata which was added by the fourth implementer's
   * draft of OpenID Connect for Identity Assurance 1.0.
   */
  supportedDocumentsCheckMethods?: string[] | null;
  /** The flag indicating whether this service signs responses from the resource server. */
  rsResponseSigned?: boolean;
  /** The duration of `c_nonce`. */
  cnonceDuration?: number;
  /**
   * Whether to require DPoP proof JWTs to include the `nonce` claim whenever they are presented.
   */
  dpopNonceRequired?: boolean;
  /**
   * Get the flag indicating whether the feature of Verifiable Credentials for this service is
   * enabled or not.
   */
  verifiableCredentialsEnabled?: boolean;
  /** The URL at which the JWK Set document of the credential issuer is exposed. */
  credentialJwksUri?: string | null;
  /** The default duration of credential offers in seconds. */
  credentialOfferDuration?: number;
  /** The duration of nonce values for DPoP proof JWTs in seconds. */
  dpopNonceDuration?: number;
  /**
   * The flag indicating whether token requests using the pre-authorized code grant flow by
   * unidentifiable clients are allowed.
   */
  preAuthorizedGrantAnonymousAccessSupported?: boolean;
  /**
   * The duration of transaction ID in seconds that may be issued as a result of a credential
   * request or a batch credential request.
   */
  credentialTransactionDuration?: number;
  /** The key ID of the key for signing introspection responses. */
  introspectionSignatureKeyId?: string | null;
  /** The key ID of the key for signing introspection responses. */
  resourceSignatureKeyId?: string | null;
  /** The default length of user PINs. */
  userPinLength?: number;
  /** The supported `prompt` values. */
  supportedPromptValues?: Prompt[] | null;
  /**
   * The flag indicating whether to enable the feature of ID token reissuance in the refresh token
   * flow.
   */
  idTokenReissuable?: boolean;
  /** The JWK Set document containing private keys that are used to sign verifiable credentials. */
  credentialJwks?: string | null;
  /**
   * FAPI modes for this service.
   *
   * When the value of this property is not `null`, Authlete always processes requests to this
   * service based on the specified FAPI modes if the FAPI feature is enabled in Authlete and the
   * FAPI profile is supported by this service.
   *
   * For instance, when this property is set to an array containing `FAPI1_ADVANCED` only, Authlete
   * always processes requests to this service based on "Financial-grade API Security Profile 1.0 -
   * Part 2: Advanced" if the FAPI feature is enabled in Authlete and the FAPI profile is supported
   * by this service.
   */
  fapiModes?: FapiMode[] | null;
  /** The default duration of verifiable credentials in seconds. */
  credentialDuration?: number;
  credentialIssuerMetadata?: CredentialIssuerMetadata | null;
  /** The type of the `aud` claim in ID tokens. */
  idTokenAudType?: string | null;
  /**
   * Flag that enables the [OpenID Connect Native SSO for Mobile Apps
   * 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) specification (“Native SSO”).
   * When this property is **not** `true`, Native SSO specific parameters are ignored or treated as
   * errors. For example:
   *
   * * The `device_sso` scope has no special meaning (Authlete does not embed the `sid` claim in ID
   *   tokens).
   * * The `urn:openid:params:token-type:device-secret` token type is treated as unknown and results
   *   in an error.
   *
   * When set to `true`, the server metadata advertises `"native_sso_supported": true`. See [OpenID
   * Connect Discovery
   * 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) and [RFC 8414
   * §2](https://www.rfc-editor.org/rfc/rfc8414.html#section-2) for background. Native SSO is
   * available in Authlete 3.0 and later.
   */
  nativeSsoSupported?: boolean;
  /**
   * Version of the [OpenID for Verifiable Credential
   * Issuance](https://www.authlete.com/developers/oid4vci/) (OID4VCI) specification to support.
   *
   * Accepted values are:
   *
   * * `null` or `"1.0-ID1"` → Implementer’s Draft 1.
   * * `"1.0"` or `"1.0-Final"` → Final 1.0 specification.
   *
   * Choose the value that matches the OID4VCI behaviour your service should expose. See the OID4VCI
   * documentation for details.
   */
  oid4VciVersion?: string | null;
  /**
   * Flag that controls whether the CIMD metadata policy is applied to client metadata obtained
   * through the Client ID Metadata Document (CIMD) mechanism.
   */
  cimdMetadataPolicyEnabled?: boolean;
  /**
   * Indicates whether the Client ID Metadata Document (CIMD) mechanism is supported. When `true`,
   * the service will attempt to retrieve client metadata via CIMD where applicable.
   */
  clientIdMetadataDocumentSupported?: boolean;
  /**
   * Enables the allowlist for CIMD. When `true`, only CIMD endpoints that are on the allowlist are
   * used.
   */
  cimdAllowlistEnabled?: boolean;
  /**
   * The allowlist of CIMD endpoints (hosts/URIs) that may be used when retrieving client metadata
   * via Client ID Metadata Documents.
   */
  cimdAllowlist?: string[] | null;
  /** If `true`, CIMD retrieval is always attempted for clients, regardless of other conditions. */
  cimdAlwaysRetrieved?: boolean;
  /** Allows CIMD retrieval over plain HTTP. When `false`, only HTTPS CIMD endpoints are allowed. */
  cimdHttpPermitted?: boolean;
  /**
   * Allows the use of query parameters when retrieving CIMD metadata. When `false`, query
   * parameters are disallowed for CIMD requests.
   */
  cimdQueryPermitted?: boolean;
  /**
   * The metadata policy applied to client metadata obtained through the CIMD mechanism. The value
   * must follow the metadata policy grammar defined in [OpenID Federation 1.0 §6.1 Metadata
   * Policy](https://openid.net/specs/openid-federation-1_0.html#name-metadata-policy).
   */
  cimdMetadataPolicy?: string | null;
  /** When `true`, client ID aliases starting with `https://` or `http://` are prohibited. */
  httpAliasProhibited?: boolean;
  /**
   * The time window of attestation challenges in seconds. This is used for OAuth 2.0
   * Attestation-Based Client Authentication.
   */
  attestationChallengeTimeWindow?: number;
  /**
   * The flag indicating whether the attester roots for Client Attestation JWT x5c chain validation
   * are enabled.
   */
  clientAttesterRootsEnabled?: boolean;
  /**
   * The flag indicating whether only client authentication validated via attester roots is
   * accepted.
   */
  clientAttesterRootsOnly?: boolean;
  /**
   * The flag indicating whether the attester roots for Key Attestation JWT x5c chain validation are
   * enabled.
   */
  keyAttesterRootsEnabled?: boolean;
  /** The flag indicating whether only key attestation validated via attester roots is accepted. */
  keyAttesterRootsOnly?: boolean;
  /**
   * The trusted root certificates (PEM-encoded X.509) for validating the x5c chain in Client
   * Attestation JWTs.
   */
  clientAttesterRoots?: string[] | null;
  /**
   * The trusted root certificates (PEM-encoded X.509) for validating the x5c chain in Key
   * Attestation JWTs.
   */
  keyAttesterRoots?: string[] | null;
  /** The flag indicating whether this service supports OpenID Connect Back-Channel Logout 1.0. */
  backchannelLogoutSupported?: boolean;
  /**
   * The flag indicating whether this service includes a `sid` (session ID) claim in ID tokens,
   * supporting per-session backchannel logout.
   */
  backchannelLogoutSessionSupported?: boolean;
  /**
   * The HAIP version to comply with. Valid values for this property are as follows: `"1.0"`. If
   * this property is set, requests to this service undergo additional validation based on the
   * specified version of the
   * [HAIP](https://openid.net/specs/openid4vc-high-assurance-interoperability-profile-1_0.html)
   * specification.
   */
  haipVersion?: string | null;
};

export const serviceSchema: Schema<Service> = s.object<Service>({
  number: s.optional(s.int()),
  serviceName: s.optionalNullable(s.string()),
  issuer: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  apiKey: s.optional(s.int()),
  apiSecret: s.optionalNullable(s.string()),
  tokenBatchNotificationEndpoint: s.optionalNullable(s.string()),
  clientAssertionAudRestrictedToIssuer: s.optional(s.boolean()),
  serviceOwnerNumber: s.optional(s.int()),
  clientsPerDeveloper: s.optional(s.int()),
  developerAuthenticationCallbackEndpoint: s.optionalNullable(s.string()),
  developerAuthenticationCallbackApiKey: s.optionalNullable(s.string()),
  developerAuthenticationCallbackApiSecret: s.optionalNullable(s.string()),
  supportedSnses: s.optionalNullable(s.array(s.lazy(() => snsSchema))),
  snsCredentials: s.optionalNullable(s.array(s.lazy(() => snsCredentialsSchema))),
  supportedDeveloperSnses: s.optionalNullable(s.array(s.lazy(() => snsSchema))),
  developerSnsCredentials: s.optionalNullable(s.array(s.lazy(() => snsCredentialsSchema))),
  clientIdAliasEnabled: s.optional(s.boolean()),
  metadata: s.optionalNullable(s.array(s.lazy(() => pairSchema))),
  createdAt: s.optional(s.int()),
  modifiedAt: s.optional(s.int()),
  authenticationCallbackEndpoint: s.optionalNullable(s.string()),
  authenticationCallbackApiKey: s.optionalNullable(s.string()),
  authenticationCallbackApiSecret: s.optionalNullable(s.string()),
  supportedAcrs: s.optionalNullable(s.array(s.string())),
  supportedGrantTypes: s.optionalNullable(s.array(s.lazy(() => grantTypeSchema))),
  supportedResponseTypes: s.optionalNullable(s.array(s.lazy(() => responseTypeSchema))),
  supportedAuthorizationDetailsTypes: s.optionalNullable(s.array(s.string())),
  supportedServiceProfiles: s.optionalNullable(s.array(s.lazy(() => serviceProfileSchema))),
  errorDescriptionOmitted: s.optional(s.boolean()),
  errorUriOmitted: s.optional(s.boolean()),
  authorizationEndpoint: s.optionalNullable(s.string()),
  directAuthorizationEndpointEnabled: s.optional(s.boolean()),
  supportedUiLocales: s.optionalNullable(s.array(s.string())),
  supportedDisplays: s.optionalNullable(s.array(s.lazy(() => displaySchema))),
  pkceRequired: s.optional(s.boolean()),
  pkceS256Required: s.optional(s.boolean()),
  authorizationResponseDuration: s.optional(s.int()),
  authorizationCodeDuration: s.optional(s.int()),
  tokenEndpoint: s.optionalNullable(s.string()),
  directTokenEndpointEnabled: s.optional(s.boolean()),
  supportedTokenAuthMethods: s.optionalNullable(s.array(s.lazy(() => clientAuthMethodSchema))),
  missingClientIdAllowed: s.optional(s.boolean()),
  revocationEndpoint: s.optionalNullable(s.string()),
  directRevocationEndpointEnabled: s.optional(s.boolean()),
  supportedRevocationAuthMethods: s.optionalNullable(s.array(s.lazy(() => clientAuthMethodSchema))),
  introspectionEndpoint: s.optionalNullable(s.string()),
  directIntrospectionEndpointEnabled: s.optional(s.boolean()),
  supportedIntrospectionAuthMethods: s.optionalNullable(s.array(s.lazy(() => clientAuthMethodSchema))),
  pushedAuthReqEndpoint: s.optionalNullable(s.string()),
  pushedAuthReqDuration: s.optional(s.int()),
  parRequired: s.optional(s.boolean()),
  requestObjectRequired: s.optional(s.boolean()),
  traditionalRequestObjectProcessingApplied: s.optional(s.boolean()),
  mutualTlsValidatePkiCertChain: s.optional(s.boolean()),
  trustedRootCertificates: s.optionalNullable(s.array(s.string())),
  mtlsEndpointAliases: s.optionalNullable(s.array(s.lazy(() => namedUriSchema))),
  accessTokenType: s.optionalNullable(s.string()),
  tlsClientCertificateBoundAccessTokens: s.optional(s.boolean()),
  accessTokenDuration: s.optional(s.int()),
  singleAccessTokenPerSubject: s.optional(s.boolean()),
  accessTokenSignAlg: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
  accessTokenSignatureKeyId: s.optionalNullable(s.string()),
  refreshTokenDuration: s.optional(s.int()),
  refreshTokenDurationKept: s.optional(s.boolean()),
  refreshTokenDurationReset: s.optional(s.boolean()),
  refreshTokenKept: s.optional(s.boolean()),
  supportedScopes: s.optionalNullable(s.array(s.lazy(() => scopeSchema))),
  scopeRequired: s.optional(s.boolean()),
  idTokenDuration: s.optional(s.int()),
  allowableClockSkew: s.optional(s.int()),
  supportedClaimTypes: s.optionalNullable(s.array(s.lazy(() => claimTypeSchema))),
  supportedClaimLocales: s.optionalNullable(s.array(s.string())),
  supportedClaims: s.optionalNullable(s.array(s.string())),
  claimShortcutRestrictive: s.optional(s.boolean()),
  jwksUri: s.optionalNullable(s.string()),
  directJwksEndpointEnabled: s.optional(s.boolean()),
  jwks: s.optionalNullable(s.string()),
  idTokenSignatureKeyId: s.optionalNullable(s.string()),
  userInfoSignatureKeyId: s.optionalNullable(s.string()),
  authorizationSignatureKeyId: s.optionalNullable(s.string()),
  userInfoEndpoint: s.optionalNullable(s.string()),
  directUserInfoEndpointEnabled: s.optional(s.boolean()),
  dynamicRegistrationSupported: s.optional(s.boolean()),
  registrationEndpoint: s.optionalNullable(s.string()),
  registrationManagementEndpoint: s.optionalNullable(s.string()),
  policyUri: s.optionalNullable(s.string()),
  tosUri: s.optionalNullable(s.string()),
  serviceDocumentation: s.optionalNullable(s.string()),
  backchannelAuthenticationEndpoint: s.optionalNullable(s.string()),
  supportedBackchannelTokenDeliveryModes: s.optionalNullable(s.array(s.lazy(() => deliveryModeSchema))),
  backchannelAuthReqIdDuration: s.optional(s.int()),
  backchannelPollingInterval: s.optional(s.int()),
  backchannelUserCodeParameterSupported: s.optional(s.boolean()),
  backchannelBindingMessageRequiredInFapi: s.optional(s.boolean()),
  deviceAuthorizationEndpoint: s.optionalNullable(s.string()),
  deviceVerificationUri: s.optionalNullable(s.string()),
  deviceVerificationUriComplete: s.optionalNullable(s.string()),
  deviceFlowCodeDuration: s.optional(s.int()),
  deviceFlowPollingInterval: s.optional(s.int()),
  userCodeCharset: s.optionalNullable(s.lazy(() => userCodeCharsetSchema)),
  userCodeLength: s.optional(s.int()),
  supportedTrustFrameworks: s.optionalNullable(s.array(s.string())),
  supportedEvidence: s.optionalNullable(s.array(s.string())),
  supportedIdentityDocuments: s.optionalNullable(s.array(s.string())),
  supportedVerificationMethods: s.optionalNullable(s.array(s.string())),
  supportedVerifiedClaims: s.optionalNullable(s.array(s.string())),
  verifiedClaimsValidationSchemaSet: s.optional(s.lazy(() => verifiedClaimsValidationSchemaSchema)),
  attributes: s.optionalNullable(s.array(s.lazy(() => pairSchema))),
  nbfOptional: s.optional(s.boolean()),
  issSuppressed: s.optional(s.boolean()),
  supportedCustomClientMetadata: s.optionalNullable(s.array(s.string())),
  tokenExpirationLinked: s.optional(s.boolean()),
  frontChannelRequestObjectEncryptionRequired: s.optional(s.boolean()),
  requestObjectEncryptionAlgMatchRequired: s.optional(s.boolean()),
  requestObjectEncryptionEncMatchRequired: s.optional(s.boolean()),
  hsmEnabled: s.optional(s.boolean()),
  hsks: s.optionalNullable(s.array(s.lazy(() => hskSchema))),
  grantManagementEndpoint: s.optionalNullable(s.string()),
  grantManagementActionRequired: s.optional(s.boolean()),
  unauthorizedOnClientConfigSupported: s.optional(s.boolean()),
  dcrScopeUsedAsRequestable: s.optional(s.boolean()),
  endSessionEndpoint: s.optionalNullable(s.string()),
  challengeEndpoint: s.optionalNullable(s.string()),
  loopbackRedirectionUriVariable: s.optional(s.boolean()),
  requestObjectAudienceChecked: s.optional(s.boolean()),
  accessTokenForExternalAttachmentEmbedded: s.optional(s.boolean()),
  authorityHints: s.optionalNullable(s.array(s.string())),
  federationEnabled: s.optional(s.boolean()),
  federationJwks: s.optionalNullable(s.string()),
  federationSignatureKeyId: s.optionalNullable(s.string()),
  federationConfigurationDuration: s.optional(s.int()),
  federationRegistrationEndpoint: s.optionalNullable(s.string()),
  organizationName: s.optionalNullable(s.string()),
  predefinedTransformedClaims: s.optionalNullable(s.string()),
  refreshTokenIdempotent: s.optional(s.boolean()),
  signedJwksUri: s.optionalNullable(s.string()),
  supportedAttachments: s.optionalNullable(s.array(s.lazy(() => attachmentTypeSchema))),
  supportedDigestAlgorithms: s.optionalNullable(s.array(s.string())),
  supportedDocuments: s.optionalNullable(s.array(s.string())),
  supportedDocumentsMethods: s.optionalNullable(s.array(s.string())),
  supportedDocumentsValidationMethods: s.optionalNullable(s.array(s.string())),
  supportedDocumentsVerificationMethods: s.optionalNullable(s.array(s.string())),
  supportedElectronicRecords: s.optionalNullable(s.array(s.string())),
  supportedClientRegistrationTypes: s.optionalNullable(s.array(s.lazy(() => clientRegistrationTypeSchema))),
  tokenExchangeByIdentifiableClientsOnly: s.optional(s.boolean()),
  tokenExchangeByConfidentialClientsOnly: s.optional(s.boolean()),
  tokenExchangeByPermittedClientsOnly: s.optional(s.boolean()),
  tokenExchangeEncryptedJwtRejected: s.optional(s.boolean()),
  tokenExchangeUnsignedJwtRejected: s.optional(s.boolean()),
  jwtGrantByIdentifiableClientsOnly: s.optional(s.boolean()),
  jwtGrantEncryptedJwtRejected: s.optional(s.boolean()),
  jwtGrantUnsignedJwtRejected: s.optional(s.boolean()),
  dcrDuplicateSoftwareIdBlocked: s.optional(s.boolean()),
  trustAnchors: s.optionalNullable(s.array(s.lazy(() => trustAnchorSchema))),
  openidDroppedOnRefreshWithoutOfflineAccess: s.optional(s.boolean()),
  idTokenDroppedOnIssueWithoutOpenid: s.optional(s.boolean()),
  supportedDocumentsCheckMethods: s.optionalNullable(s.array(s.string())),
  rsResponseSigned: s.optional(s.boolean()),
  cnonceDuration: s.optional(s.int()),
  dpopNonceRequired: s.optional(s.boolean()),
  verifiableCredentialsEnabled: s.optional(s.boolean()),
  credentialJwksUri: s.optionalNullable(s.string()),
  credentialOfferDuration: s.optional(s.int()),
  dpopNonceDuration: s.optional(s.int()),
  preAuthorizedGrantAnonymousAccessSupported: s.optional(s.boolean()),
  credentialTransactionDuration: s.optional(s.int()),
  introspectionSignatureKeyId: s.optionalNullable(s.string()),
  resourceSignatureKeyId: s.optionalNullable(s.string()),
  userPinLength: s.optional(s.int()),
  supportedPromptValues: s.optionalNullable(s.array(s.lazy(() => promptSchema))),
  idTokenReissuable: s.optional(s.boolean()),
  credentialJwks: s.optionalNullable(s.string()),
  fapiModes: s.optionalNullable(s.array(s.lazy(() => fapiModeSchema))),
  credentialDuration: s.optional(s.int()),
  credentialIssuerMetadata: s.optionalNullable(s.lazy(() => credentialIssuerMetadataSchema)),
  idTokenAudType: s.optionalNullable(s.string()),
  nativeSsoSupported: s.optional(s.boolean()),
  oid4VciVersion: s.optionalNullable(s.string()),
  cimdMetadataPolicyEnabled: s.optional(s.boolean()),
  clientIdMetadataDocumentSupported: s.optional(s.boolean()),
  cimdAllowlistEnabled: s.optional(s.boolean()),
  cimdAllowlist: s.optionalNullable(s.array(s.string())),
  cimdAlwaysRetrieved: s.optional(s.boolean()),
  cimdHttpPermitted: s.optional(s.boolean()),
  cimdQueryPermitted: s.optional(s.boolean()),
  cimdMetadataPolicy: s.optionalNullable(s.string()),
  httpAliasProhibited: s.optional(s.boolean()),
  attestationChallengeTimeWindow: s.optional(s.int()),
  clientAttesterRootsEnabled: s.optional(s.boolean()),
  clientAttesterRootsOnly: s.optional(s.boolean()),
  keyAttesterRootsEnabled: s.optional(s.boolean()),
  keyAttesterRootsOnly: s.optional(s.boolean()),
  clientAttesterRoots: s.optionalNullable(s.array(s.string())),
  keyAttesterRoots: s.optionalNullable(s.array(s.string())),
  backchannelLogoutSupported: s.optional(s.boolean()),
  backchannelLogoutSessionSupported: s.optional(s.boolean()),
  haipVersion: s.optionalNullable(s.string()),
  _keysMap: {
    oid4VciVersion: "oid4vciVersion",
  },
});
