import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationTypeSchema, type ApplicationType } from "./application-type.js";
import { clientAuthMethodSchema, type ClientAuthMethod } from "./client-auth-method.js";
import { clientExtensionSchema, type ClientExtension } from "./client-extension.js";
import { clientRegistrationTypeSchema, type ClientRegistrationType } from "./client-registration-type.js";
import { clientSourceSchema, type ClientSource } from "./client-source.js";
import { clientTypeSchema, type ClientType } from "./client-type.js";
import { fapiModeSchema, type FapiMode } from "./fapi-mode.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";
import { jweAlgSchema, type JweAlg } from "./jwe-alg.js";
import { jweEncSchema, type JweEnc } from "./jwe-enc.js";
import { jwsAlgSchema, type JwsAlg } from "./jws-alg.js";
import { pairSchema, type Pair } from "./pair.js";
import { responseModeSchema, type ResponseMode } from "./response-mode.js";
import { responseTypeSchema, type ResponseType } from "./response-type.js";
import { subjectTypeSchema, type SubjectType } from "./subject-type.js";
import { taggedValueSchema, type TaggedValue } from "./tagged-value.js";

export type Client = {
  /** The sequential number of the client. The value of this property is assigned by Authlete. */
  number?: number;
  /**
   * The sequential number of the service of the client application. The value of this property is
   * assigned by Authlete.
   */
  serviceNumber?: number;
  /**
   * The name of the client application. This property corresponds to `client_name` in [OpenID
   * Connect Dynamic Client Registration 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  clientName?: string;
  /**
   * Client names with language tags. If the client application has different names for different
   * languages, this property can be used to register the names.
   */
  clientNames?: TaggedValue[];
  /** The description about the client application. */
  description?: string;
  /**
   * Descriptions about the client application with language tags. If the client application has
   * different descriptions for different languages, this property can be used to register the
   * descriptions.
   */
  descriptions?: TaggedValue[];
  /**
   * The client identifier used in Authlete API calls. The value of this property is assigned by
   * Authlete.
   */
  clientId?: number;
  /**
   * The client secret. A random 512-bit value encoded by base64url (86 letters). The value of this
   * property is assigned by Authlete.
   */
  clientSecret?: string;
  /**
   * The value of the client's `client_id` property used in OAuth and OpenID Connect calls. By
   * default, this is a string version of the `clientId` property.
   */
  clientIdAlias?: string;
  /** Deprecated. Always set to `true`. */
  clientIdAliasEnabled?: boolean;
  /**
   * The client type, either `CONFIDENTIAL` or `PUBLIC`. See [RFC 6749, 2.1. Client
   * Types](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1) for details.
   */
  clientType?: ClientType;
  /**
   * The application type. The value of this property affects the validation steps for a redirect
   * URI. See the description about `redirectUris` property for more details.
   */
  applicationType?: ApplicationType;
  /**
   * The URL pointing to the logo image of the client application.
   *
   * This property corresponds to `logo_uri` in [OpenID Connect Dynamic Client Registration 1.0, 2.
   * Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  logoUri?: string;
  /**
   * Logo image URLs with language tags. If the client application has different logo images for
   * different languages, this property can be used to register URLs of the images.
   */
  logoUris?: TaggedValue[];
  /**
   * An array of email addresses of people responsible for the client application.
   *
   * This property corresponds to contacts in [OpenID Connect Dynamic Client Registration 1.0, 2.
   * Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  contacts?: string[];
  /** The flag to indicate whether this client use TLS client certificate bound access tokens. */
  tlsClientCertificateBoundAccessTokens?: boolean;
  /**
   * The flag to indicate whether this client has been registered dynamically. For more details, see
   * [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591).
   */
  dynamicallyRegistered?: boolean;
  /**
   * The unique identifier string assigned by the client developer or software publisher used by
   * registration endpoints to identify the client software to be dynamically registered.
   *
   * This property corresponds to the `software_id metadata` defined in [2. Client
   * Metadata](https://datatracker.ietf.org/doc/html/rfc7591#section-2) of [RFC
   * 7591](https://datatracker.ietf.org/doc/html/rfc7591).
   */
  softwareId?: string;
  /** The unique identifier of the developer who created this client application. */
  developer?: string;
  /**
   * The version identifier string for the client software identified by the software ID.
   *
   * This property corresponds to the software_version metadata defined in [2. Client
   * Metadata](https://datatracker.ietf.org/doc/html/rfc7591#section-2) of [RFC
   * 7591](https://datatracker.ietf.org/doc/html/rfc7591).
   */
  softwareVersion?: string;
  /** The hash of the registration access token for this client. */
  registrationAccessTokenHash?: string;
  /**
   * The time at which this client was created. The value is represented as milliseconds since the
   * UNIX epoch (1970-01-01).
   */
  createdAt?: number;
  /**
   * The time at which this client was last modified. The value is represented as milliseconds since
   * the UNIX epoch (1970-01-01).
   */
  modifiedAt?: number;
  /**
   * A string array of grant types which the client application declares that it will restrict
   * itself to using. This property corresponds to `grant_types` in [OpenID Connect Dynamic Client
   * Registration 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  grantTypes?: GrantType[];
  /**
   * A string array of response types which the client application declares that it will restrict
   * itself to using. This property corresponds to `response_types` in [OpenID Connect Dynamic
   * Client Registration 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  responseTypes?: ResponseType[];
  /**
   * Redirect URIs that the client application uses to receive a response from the authorization
   * endpoint. Requirements for a redirect URI are as follows.
   */
  redirectUris?: string[];
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
  authorizationSignAlg?: JwsAlg | null;
  /**
   * this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this
   * refers to key transport scheme to be used by the client and by the server. For instance:
   * - as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server for
   *   transporting they keys on JARM objects
   * - as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm
   *   that server expect from client when encrypting a Request Object
   * - as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key
   *   transport of id_tokens
   *
   * **Please note that some of the algorithms are more secure than others, some are not supported
   * very well cross platforms and some (like RSA1_5) is known to be weak**.
   */
  authorizationEncryptionAlg?: JweAlg | null;
  /**
   * This is the encryption algorithm to be used when encrypting a JWT on client or server side.
   * Depending upon the context, this refers to encryption done by the client or by the server. For
   * instance:
   *   - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by server
   *     when creating a JARM response
   *   - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by the
   *     client when encrypting a Request Object
   *   - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt
   *     id_tokens
   */
  authorizationEncryptionEnc?: JweEnc | null;
  /**
   * The client authentication method that the client application declares that it uses at the token
   * endpoint. This property corresponds to `token_endpoint_auth_method` in [OpenID Connect Dynamic
   * Client Registration 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  tokenAuthMethod?: ClientAuthMethod;
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
  tokenAuthSignAlg?: JwsAlg | null;
  /** The key ID of a JWK containing a self-signed certificate of this client. */
  selfSignedCertificateKeyId?: string;
  /**
   * The string representation of the expected subject distinguished name of the certificate this
   * client will use in mutual TLS authentication.
   *
   * See `tls_client_auth_subject_dn` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client
   * Registration" for details.
   */
  tlsClientAuthSubjectDn?: string;
  /**
   * The string representation of the expected DNS subject alternative name of the certificate this
   * client will use in mutual TLS authentication.
   *
   * See `tls_client_auth_san_dns` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client
   * Registration" for details.
   */
  tlsClientAuthSanDns?: string;
  /**
   * The string representation of the expected URI subject alternative name of the certificate this
   * client will use in mutual TLS authentication.
   *
   * See `tls_client_auth_san_uri` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client
   * Registration" for details.
   */
  tlsClientAuthSanUri?: string;
  /**
   * The string representation of the expected IP address subject alternative name of the
   * certificate this client will use in mutual TLS authentication.
   *
   * See `tls_client_auth_san_ip` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client
   * Registration" for details.
   */
  tlsClientAuthSanIp?: string;
  /**
   * The string representation of the expected email address subject alternative name of the
   * certificate this client will use in mutual TLS authentication.
   *
   * See `tls_client_auth_san_email` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client
   * Registration" for details.
   */
  tlsClientAuthSanEmail?: string;
  /**
   * The flag to indicate whether this client is required to use the pushed authorization request
   * endpoint. This property corresponds to the `require_pushed_authorization_requests` client
   * metadata defined in "OAuth 2.0 Pushed Authorization Requests".
   */
  parRequired?: boolean;
  /**
   * The flag to indicate whether authorization requests from this client are always required to
   * utilize a request object by using either `request` or `request_uri` request parameter.
   *
   * If this flag is set to `true` and the service's `traditionalRequestObjectProcessingApplied` is
   * set to `false`, authorization requests from this client are processed as if
   * `require_signed_request_object` client metadata of this client is `true`. The metadata is
   * defined in "JAR (JWT Secured Authorization Request)".
   */
  requestObjectRequired?: boolean;
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
  requestSignAlg?: JwsAlg | null;
  /**
   * this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this
   * refers to key transport scheme to be used by the client and by the server. For instance:
   * - as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server for
   *   transporting they keys on JARM objects
   * - as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm
   *   that server expect from client when encrypting a Request Object
   * - as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key
   *   transport of id_tokens
   *
   * **Please note that some of the algorithms are more secure than others, some are not supported
   * very well cross platforms and some (like RSA1_5) is known to be weak**.
   */
  requestEncryptionAlg?: JweAlg | null;
  /**
   * This is the encryption algorithm to be used when encrypting a JWT on client or server side.
   * Depending upon the context, this refers to encryption done by the client or by the server. For
   * instance:
   *   - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by server
   *     when creating a JARM response
   *   - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by the
   *     client when encrypting a Request Object
   *   - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt
   *     id_tokens
   */
  requestEncryptionEnc?: JweEnc | null;
  /**
   * An array of URLs each of which points to a request object.
   *
   * Authlete requires that URLs used as values for `request_uri` request parameter be
   * pre-registered. This property is used for the pre-registration. See [OpenID Connect Core 1.0,
   * 6.2. Passing a Request Object by
   * Reference](https://openid.net/specs/openid-connect-core-1_0.html#RequestUriParameter) for
   * details.
   */
  requestUris?: string[];
  /**
   * The default maximum authentication age in seconds. This value is used when an authorization
   * request from the client application does not have `max_age` request parameter.
   *
   * This property corresponds to `default_max_age` in [OpenID Connect Dynamic Client Registration
   * 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  defaultMaxAge?: number;
  /**
   * The default ACRs (Authentication Context Class References). This value is used when an
   * authorization request from the client application has neither `acr_values` request parameter
   * nor `acr` claim in claims request parameter.
   */
  defaultAcrs?: string[];
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
  idTokenSignAlg?: JwsAlg | null;
  /**
   * this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this
   * refers to key transport scheme to be used by the client and by the server. For instance:
   * - as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server for
   *   transporting they keys on JARM objects
   * - as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm
   *   that server expect from client when encrypting a Request Object
   * - as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key
   *   transport of id_tokens
   *
   * **Please note that some of the algorithms are more secure than others, some are not supported
   * very well cross platforms and some (like RSA1_5) is known to be weak**.
   */
  idTokenEncryptionAlg?: JweAlg | null;
  /**
   * This is the encryption algorithm to be used when encrypting a JWT on client or server side.
   * Depending upon the context, this refers to encryption done by the client or by the server. For
   * instance:
   *   - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by server
   *     when creating a JARM response
   *   - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by the
   *     client when encrypting a Request Object
   *   - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt
   *     id_tokens
   */
  idTokenEncryptionEnc?: JweEnc | null;
  /**
   * The flag to indicate whether this client requires `auth_time` claim to be embedded in the ID
   * token.
   *
   * This property corresponds to `require_auth_time` in [OpenID Connect Dynamic Client Registration
   * 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  authTimeRequired?: boolean;
  /**
   * The subject type that the client application requests. Details about the subject type are
   * described in [OpenID Connect Core 1.0, 8. Subjct Identifier
   * Types](https://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes).
   *
   * This property corresponds to `subject_type` in [OpenID Connect Dynamic Client Registration 1.0,
   * 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  subjectType?: SubjectType;
  /**
   * The value of the sector identifier URI. This represents the `sector_identifier_uri` client
   * metadata which is defined in [OpenID Connect Dynamic Client Registration 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata)
   */
  sectorIdentifierUri?: string;
  /**
   * The sector identifier host component as derived from either the `sector_identifier_uri` or the
   * registered redirect URI. If no `sector_identifier_uri` is registered and multiple redirect URIs
   * are also registered, the value of this property is `null`.
   */
  derivedSectorIdentifier?: string;
  /**
   * The URL pointing to the JWK Set of the client application. The content pointed to by the URL is
   * JSON which complies with the format described in [JSON Web Key (JWK), 5. JWK Set
   * Format](https://datatracker.ietf.org/doc/html/rfc7517#section-5). The JWK Set must not include
   * private keys of the client application.
   */
  jwksUri?: string;
  /**
   * The content of the JWK Set of the client application. The format is described in [JSON Web Key
   * (JWK), 5. JWK Set Format](https://datatracker.ietf.org/doc/html/rfc7517#section-5). The JWK Set
   * must not include private keys of the client application.
   */
  jwks?: string;
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
  userInfoSignAlg?: JwsAlg | null;
  /**
   * this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this
   * refers to key transport scheme to be used by the client and by the server. For instance:
   * - as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server for
   *   transporting they keys on JARM objects
   * - as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm
   *   that server expect from client when encrypting a Request Object
   * - as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key
   *   transport of id_tokens
   *
   * **Please note that some of the algorithms are more secure than others, some are not supported
   * very well cross platforms and some (like RSA1_5) is known to be weak**.
   */
  userInfoEncryptionAlg?: JweAlg | null;
  /**
   * This is the encryption algorithm to be used when encrypting a JWT on client or server side.
   * Depending upon the context, this refers to encryption done by the client or by the server. For
   * instance:
   *   - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by server
   *     when creating a JARM response
   *   - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by the
   *     client when encrypting a Request Object
   *   - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt
   *     id_tokens
   */
  userInfoEncryptionEnc?: JweEnc | null;
  /**
   * The URL which a third party can use to initiate a login by the client application.
   *
   * This property corresponds to `initiate_login_uri` in [OpenID Connect Dynamic Client
   * Registration 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  loginUri?: string;
  /**
   * The URL pointing to the "Terms Of Service" page.
   *
   * This property corresponds to `tos_uri` in [OpenID Connect Dynamic Client Registration 1.0, 2.
   * Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  tosUri?: string;
  /**
   * URLs of "Terms Of Service" pages with language tags.
   *
   * If the client application has different "Terms Of Service" pages for different languages, this
   * property can be used to register the URLs.
   */
  tosUris?: TaggedValue[];
  /**
   * The URL pointing to the page which describes the policy as to how end-user's profile data is
   * used.
   *
   * This property corresponds to `policy_uri` in [OpenID Connect Dynamic Client Registration 1.0,
   * 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  policyUri?: string;
  /**
   * URLs of policy pages with language tags. If the client application has different policy pages
   * for different languages, this property can be used to register the URLs.
   */
  policyUris?: TaggedValue[];
  /**
   * The URL pointing to the home page of the client application.
   *
   * This property corresponds to `client_uri` in [OpenID Connect Dynamic Client Registration 1.0,
   * 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  clientUri?: string;
  /**
   * Home page URLs with language tags. If the client application has different home pages for
   * different languages, this property can be used to register the URLs.
   */
  clientUris?: TaggedValue[];
  /**
   * The backchannel token delivery mode.
   *
   * This property corresponds to the `backchannel_token_delivery_mode` metadata. The backchannel
   * token delivery mode is defined in the specification of "CIBA (Client Initiated Backchannel
   * Authentication)".
   */
  bcDeliveryMode?: string;
  /**
   * The backchannel client notification endpoint.
   *
   * This property corresponds to the `backchannel_client_notification_endpoint` metadata. The
   * backchannel token delivery mode is defined in the specification of "CIBA (Client Initiated
   * Backchannel Authentication)".
   */
  bcNotificationEndpoint?: string;
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
  bcRequestSignAlg?: JwsAlg | null;
  /**
   * The boolean flag to indicate whether a user code is required when this client makes a
   * backchannel authentication request.
   *
   * This property corresponds to the `backchannel_user_code_parameter` metadata.
   */
  bcUserCodeRequired?: boolean;
  /**
   * The backchannel logout URI for this client. Used by the service to deliver logout tokens when
   * OpenID Connect Back-Channel Logout 1.0 is triggered.
   */
  backchannelLogoutUri?: string;
  /**
   * The flag indicating whether the client requires that a `sid` (session ID) claim be included in
   * the logout token sent to `backchannelLogoutUri`.
   */
  backchannelLogoutSessionRequired?: boolean;
  /** The attributes of this client. */
  attributes?: Pair[];
  extension?: ClientExtension;
  /**
   * The authorization details types that this client may use as values of the `type` field in
   * `authorization_details`.
   *
   * This property corresponds to the `authorization_details_types` metadata. See [OAuth 2.0 Rich
   * Authorization Requests (RAR)](https://datatracker.ietf.org/doc/draft-ietf-oauth-rar/) for
   * details.
   *
   * Note that the property name was renamed from authorizationDataTypes to
   * authorizationDetailsTypes to align with the change made by the 5th draft of the RAR
   * specification.
   */
  authorizationDetailsTypes?: string[];
  /** The custom client metadata in JSON format. */
  customMetadata?: string;
  /**
   * The flag indicating whether encryption of request object is required when the request object is
   * passed through the front channel.
   */
  frontChannelRequestObjectEncryptionRequired?: boolean;
  /**
   * The flag indicating whether the JWE alg of encrypted request object must match the
   * `request_object_encryption_alg` client metadata.
   */
  requestObjectEncryptionAlgMatchRequired?: boolean;
  /**
   * The flag indicating whether the JWE enc of encrypted request object must match the
   * `request_object_encryption_enc` client metadata.
   */
  requestObjectEncryptionEncMatchRequired?: boolean;
  /**
   * The digest algorithm that this client requests the server to use when it computes digest values
   * of [external
   * attachments](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#name-external-attachments),
   * which may be referenced from within ID tokens or userinfo responses (or any place that can have
   * the `verified_claims` claim). Possible values are listed in the [Hash Algorithm
   * Registry](https://www.iana.org/assignments/named-information/named-information.xhtml#hash-alg)
   * of IANA (Internet Assigned Numbers Authority), but the server does not necessarily support all
   * the values there. When this property is omitted, `sha-256` is used as the default algorithm.
   * This property corresponds to the `digest_algorithm` client metadata which was defined by the
   * third implementer's draft of [OpenID Connect for Identity Assurance
   * 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html).
   */
  digestAlgorithm?: string;
  /**
   * If `Enabled` is selected, an attempt to issue a new access token invalidates existing access
   * tokens that are associated with the same combination of subject and client.
   *
   * Note that, however, attempts by Client Credentials Flow do not invalidate existing access
   * tokens because access tokens issued by Client Credentials Flow are not associated with any
   * end-user's subject.
   *
   * Even if `Disabled` is selected here, single access token per subject is effective if
   * `singleAccessTokenPerSubject` of the `Service` this client belongs to is Enabled.
   */
  singleAccessTokenPerSubject?: boolean;
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
  /** If the DPoP is required for this client */
  dpopRequired?: boolean;
  /**
   * The flag indicating whether this client was registered by the "automatic" client registration
   * of OIDC Federation.
   */
  automaticallyRegistered?: boolean;
  /**
   * The flag indicating whether this client was registered by the "explicit" client registration of
   * OIDC Federation.
   */
  explicitlyRegistered?: boolean;
  /** The flag indicating whether this service signs responses from the resource server. */
  rsRequestSigned?: boolean;
  /**
   * The key ID of a JWK containing the public key used by this client to sign requests to the
   * resource server.
   */
  rsSignedRequestKeyId?: string;
  /** The client registration types that the client has declared it may use. */
  clientRegistrationTypes?: ClientRegistrationType[];
  /**
   * The human-readable name representing the organization that manages this client. This property
   * corresponds to the organization_name client metadata that is defined in OpenID Connect
   * Federation 1.0.
   */
  organizationName?: string;
  /**
   * The URI of the endpoint that returns this client's JWK Set document in the JWT format. This
   * property corresponds to the `signed_jwks_uri` client metadata defined in OpenID Connect
   * Federation 1.0.
   */
  signedJwksUri?: string;
  /** the entity ID of this client. */
  entityId?: string;
  /**
   * The entity ID of the trust anchor of the trust chain that was used when this client was
   * registered or updated by the mechanism defined in OpenID Connect Federation 1.0
   */
  trustAnchorId?: string;
  /**
   * The trust chain that was used when this client was registered or updated by the mechanism
   * defined in OpenID Connect Federation 1.0
   */
  trustChain?: string[];
  /**
   * the expiration time of the trust chain that was used when this client was registered or updated
   * by the mechanism defined in OpenID Connect Federation 1.0. The value is represented as
   * milliseconds elapsed since the Unix epoch (1970-01-01).
   */
  trustChainExpiresAt?: number;
  /**
   * the time at which the trust chain was updated by the mechanism defined in OpenID Connect
   * Federation 1.0
   */
  trustChainUpdatedAt?: number;
  /** The flag which indicates whether this client is locked. */
  locked?: boolean;
  /**
   * The URL of the credential offer endpoint at which this client (wallet) receives a credential
   * offer from the credential issuer.
   */
  credentialOfferEndpoint?: string;
  /** The FAPI modes for this client. */
  fapiModes?: FapiMode[];
  /** The response modes that this client may use. */
  responseModes?: ResponseMode[];
  /** True if credential responses to this client must be always encrypted. */
  credentialResponseEncryptionRequired?: boolean;
  /**
   * The flag indicating whether the client intends to prefer mutual TLS endpoints over non-MTLS
   * endpoints.
   *
   * This property corresponds to the `use_mtls_endpoint_aliases` client metadata that is defined in
   * [FAPI 2.0 Security Profile, 8.1.1.
   * use_mtls_endpoint_aliases](https://openid.bitbucket.io/fapi/fapi-2_0-security-profile.html#section-8.1.1).
   */
  mtlsEndpointAliasesUsed?: boolean;
  /** The flag indicating whether this client is in scope for token migration operations. */
  inScopeForTokenMigration?: boolean;
  /** Location of the Client ID Metadata Document that was used for this client. */
  metadataDocumentLocation?: string;
  /** Expiration time of the metadata document (UNIX time in milliseconds). */
  metadataDocumentExpiresAt?: number;
  /** Last-updated time of the metadata document (UNIX time in milliseconds). */
  metadataDocumentUpdatedAt?: number;
  /** Indicates whether this client was discovered via a Client ID Metadata Document. */
  discoveredByMetadataDocument?: boolean;
  /** Source of this client record. */
  clientSource?: ClientSource;
  /**
   * The SPIFFE ID of the client. Used for SPIFFE-based client authentication (`SPIFFE_JWT`).
   * Corresponds to the `spiffe_id` client metadata parameter.
   */
  spiffeId?: string;
  /**
   * The endpoint URL of the SPIFFE bundle for this client. Used to fetch the SPIFFE trust bundle
   * for validating JWT-SVIDs. Corresponds to the `spiffe_bundle_endpoint` client metadata
   * parameter.
   */
  spiffeBundleEndpoint?: string;
};

export const clientSchema: Schema<Client> = s.object<Client>({
  number: s.optional(s.int()),
  serviceNumber: s.optional(s.int()),
  clientName: s.optional(s.string()),
  clientNames: s.optional(s.array(s.lazy(() => taggedValueSchema))),
  description: s.optional(s.string()),
  descriptions: s.optional(s.array(s.lazy(() => taggedValueSchema))),
  clientId: s.optional(s.int()),
  clientSecret: s.optional(s.string()),
  clientIdAlias: s.optional(s.string()),
  clientIdAliasEnabled: s.optional(s.boolean()),
  clientType: s.optional(s.lazy(() => clientTypeSchema)),
  applicationType: s.optional(s.lazy(() => applicationTypeSchema)),
  logoUri: s.optional(s.string()),
  logoUris: s.optional(s.array(s.lazy(() => taggedValueSchema))),
  contacts: s.optional(s.array(s.string())),
  tlsClientCertificateBoundAccessTokens: s.optional(s.boolean()),
  dynamicallyRegistered: s.optional(s.boolean()),
  softwareId: s.optional(s.string()),
  developer: s.optional(s.string()),
  softwareVersion: s.optional(s.string()),
  registrationAccessTokenHash: s.optional(s.string()),
  createdAt: s.optional(s.int()),
  modifiedAt: s.optional(s.int()),
  grantTypes: s.optional(s.array(s.lazy(() => grantTypeSchema))),
  responseTypes: s.optional(s.array(s.lazy(() => responseTypeSchema))),
  redirectUris: s.optional(s.array(s.string())),
  authorizationSignAlg: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
  authorizationEncryptionAlg: s.optionalNullable(s.lazy(() => jweAlgSchema)),
  authorizationEncryptionEnc: s.optionalNullable(s.lazy(() => jweEncSchema)),
  tokenAuthMethod: s.optional(s.lazy(() => clientAuthMethodSchema)),
  tokenAuthSignAlg: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
  selfSignedCertificateKeyId: s.optional(s.string()),
  tlsClientAuthSubjectDn: s.optional(s.string()),
  tlsClientAuthSanDns: s.optional(s.string()),
  tlsClientAuthSanUri: s.optional(s.string()),
  tlsClientAuthSanIp: s.optional(s.string()),
  tlsClientAuthSanEmail: s.optional(s.string()),
  parRequired: s.optional(s.boolean()),
  requestObjectRequired: s.optional(s.boolean()),
  requestSignAlg: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
  requestEncryptionAlg: s.optionalNullable(s.lazy(() => jweAlgSchema)),
  requestEncryptionEnc: s.optionalNullable(s.lazy(() => jweEncSchema)),
  requestUris: s.optional(s.array(s.string())),
  defaultMaxAge: s.optional(s.int()),
  defaultAcrs: s.optional(s.array(s.string())),
  idTokenSignAlg: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
  idTokenEncryptionAlg: s.optionalNullable(s.lazy(() => jweAlgSchema)),
  idTokenEncryptionEnc: s.optionalNullable(s.lazy(() => jweEncSchema)),
  authTimeRequired: s.optional(s.boolean()),
  subjectType: s.optional(s.lazy(() => subjectTypeSchema)),
  sectorIdentifierUri: s.optional(s.string()),
  derivedSectorIdentifier: s.optional(s.string()),
  jwksUri: s.optional(s.string()),
  jwks: s.optional(s.string()),
  userInfoSignAlg: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
  userInfoEncryptionAlg: s.optionalNullable(s.lazy(() => jweAlgSchema)),
  userInfoEncryptionEnc: s.optionalNullable(s.lazy(() => jweEncSchema)),
  loginUri: s.optional(s.string()),
  tosUri: s.optional(s.string()),
  tosUris: s.optional(s.array(s.lazy(() => taggedValueSchema))),
  policyUri: s.optional(s.string()),
  policyUris: s.optional(s.array(s.lazy(() => taggedValueSchema))),
  clientUri: s.optional(s.string()),
  clientUris: s.optional(s.array(s.lazy(() => taggedValueSchema))),
  bcDeliveryMode: s.optional(s.string()),
  bcNotificationEndpoint: s.optional(s.string()),
  bcRequestSignAlg: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
  bcUserCodeRequired: s.optional(s.boolean()),
  backchannelLogoutUri: s.optional(s.string()),
  backchannelLogoutSessionRequired: s.optional(s.boolean()),
  attributes: s.optional(s.array(s.lazy(() => pairSchema))),
  extension: s.optional(s.lazy(() => clientExtensionSchema)),
  authorizationDetailsTypes: s.optional(s.array(s.string())),
  customMetadata: s.optional(s.string()),
  frontChannelRequestObjectEncryptionRequired: s.optional(s.boolean()),
  requestObjectEncryptionAlgMatchRequired: s.optional(s.boolean()),
  requestObjectEncryptionEncMatchRequired: s.optional(s.boolean()),
  digestAlgorithm: s.optional(s.string()),
  singleAccessTokenPerSubject: s.optional(s.boolean()),
  pkceRequired: s.optional(s.boolean()),
  pkceS256Required: s.optional(s.boolean()),
  dpopRequired: s.optional(s.boolean()),
  automaticallyRegistered: s.optional(s.boolean()),
  explicitlyRegistered: s.optional(s.boolean()),
  rsRequestSigned: s.optional(s.boolean()),
  rsSignedRequestKeyId: s.optional(s.string()),
  clientRegistrationTypes: s.optional(s.array(s.lazy(() => clientRegistrationTypeSchema))),
  organizationName: s.optional(s.string()),
  signedJwksUri: s.optional(s.string()),
  entityId: s.optional(s.string()),
  trustAnchorId: s.optional(s.string()),
  trustChain: s.optional(s.array(s.string())),
  trustChainExpiresAt: s.optional(s.int()),
  trustChainUpdatedAt: s.optional(s.int()),
  locked: s.optional(s.boolean()),
  credentialOfferEndpoint: s.optional(s.string()),
  fapiModes: s.optional(s.array(s.lazy(() => fapiModeSchema))),
  responseModes: s.optional(s.array(s.lazy(() => responseModeSchema))),
  credentialResponseEncryptionRequired: s.optional(s.boolean()),
  mtlsEndpointAliasesUsed: s.optional(s.boolean()),
  inScopeForTokenMigration: s.optional(s.boolean()),
  metadataDocumentLocation: s.optional(s.string()),
  metadataDocumentExpiresAt: s.optional(s.int()),
  metadataDocumentUpdatedAt: s.optional(s.int()),
  discoveredByMetadataDocument: s.optional(s.boolean()),
  clientSource: s.optional(s.lazy(() => clientSourceSchema)),
  spiffeId: s.optional(s.string()),
  spiffeBundleEndpoint: s.optional(s.string()),
});
