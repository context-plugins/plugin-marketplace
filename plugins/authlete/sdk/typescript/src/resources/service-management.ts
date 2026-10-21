import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { attachmentTypeSchema, type AttachmentType } from "../models/attachment-type.js";
import { claimTypeSchema, type ClaimType } from "../models/claim-type.js";
import { clientAuthMethodSchema, type ClientAuthMethod } from "../models/client-auth-method.js";
import {
  clientRegistrationTypeSchema,
  type ClientRegistrationType,
} from "../models/client-registration-type.js";
import {
  credentialIssuerMetadataSchema,
  type CredentialIssuerMetadata,
} from "../models/credential-issuer-metadata.js";
import { deliveryModeSchema, type DeliveryMode } from "../models/delivery-mode.js";
import { displaySchema, type Display } from "../models/display.js";
import { fapiModeSchema, type FapiMode } from "../models/fapi-mode.js";
import { grantTypeSchema, type GrantType } from "../models/grant-type.js";
import { hskSchema, type Hsk } from "../models/hsk.js";
import { idpErrorSchema, type IdpError } from "../models/idp-error.js";
import { jwsAlgSchema, type JwsAlg } from "../models/jws-alg.js";
import { namedUriSchema, type NamedUri } from "../models/named-uri.js";
import { pairSchema, type Pair } from "../models/pair.js";
import { promptSchema, type Prompt } from "../models/prompt.js";
import { responseTypeSchema, type ResponseType } from "../models/response-type.js";
import { resultSchema, type Result } from "../models/result.js";
import { scopeSchema, type Scope } from "../models/scope.js";
import {
  serviceCreateIdpRequestSchema,
  type ServiceCreateIdpRequest,
} from "../models/service-create-idp-request.js";
import {
  serviceGetListResponseSchema,
  type ServiceGetListResponse,
} from "../models/service-get-list-response.js";
import { serviceProfileSchema, type ServiceProfile } from "../models/service-profile.js";
import {
  serviceRemoveIdpRequestSchema,
  type ServiceRemoveIdpRequest,
} from "../models/service-remove-idp-request.js";
import { serviceSchema, type Service } from "../models/service.js";
import { snsCredentialsSchema, type SnsCredentials } from "../models/sns-credentials.js";
import { snsSchema, type Sns } from "../models/sns.js";
import { trustAnchorSchema, type TrustAnchor } from "../models/trust-anchor.js";
import { userCodeCharsetSchema, type UserCodeCharset } from "../models/user-code-charset.js";
import {
  verifiedClaimsValidationSchemaSchema,
  type VerifiedClaimsValidationSchema,
} from "../models/verified-claims-validation-schema.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for managing services, including creation, update, and deletion of services.
 */
export class ServiceManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Service Configuration
   *
   * @remarks
   * This API gathers configuration information about a service.
   *
   * This API is supposed to be called from within the implementation of the configuration endpoint
   * of the service where the service that supports OpenID Connect and [OpenID Connect Discovery
   * 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html) must expose its configuration
   * information in a JSON format. Details about the format are described in "[3. OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata)" in
   * OpenID Connect Discovery 1.0.
   *
   * @returns Service configuration retrieved successfully
   *
   * @throws {@link ServiceManagement.ServiceConfigurationApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceConfigurationApi(
    request: ServiceManagement.ServiceConfigurationApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ServiceManagement.ServiceConfigurationApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/service/configuration"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [
          { name: "pretty", value: request.pretty, schema: s.optional(s.boolean()) },
          { name: "patch", value: request.patch, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ServiceManagement.ServiceConfigurationApiError,
      },
      options,
    );
  }

  /**
   * Create Service
   *
   * @remarks
   * Create a new service.
   *
   * @returns Service created successfully (legacy compatibility)
   *
   * @throws {@link ServiceManagement.ServiceCreateApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceCreateApi(
    request: ServiceManagement.ServiceCreateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Service, ServiceManagement.ServiceCreateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/service/create"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "number", value: request.number, schema: s.optional(s.int()) },
            { name: "serviceName", value: request.serviceName, schema: s.optionalNullable(s.string()) },
            { name: "issuer", value: request.issuer, schema: s.optionalNullable(s.string()) },
            { name: "description", value: request.description, schema: s.optionalNullable(s.string()) },
            { name: "apiKey", value: request.apiKey, schema: s.optional(s.int()) },
            { name: "apiSecret", value: request.apiSecret, schema: s.optionalNullable(s.string()) },
            {
              name: "tokenBatchNotificationEndpoint",
              value: request.tokenBatchNotificationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "clientAssertionAudRestrictedToIssuer",
              value: request.clientAssertionAudRestrictedToIssuer,
              schema: s.optional(s.boolean()),
            },
            { name: "serviceOwnerNumber", value: request.serviceOwnerNumber, schema: s.optional(s.int()) },
            { name: "clientsPerDeveloper", value: request.clientsPerDeveloper, schema: s.optional(s.int()) },
            {
              name: "developerAuthenticationCallbackEndpoint",
              value: request.developerAuthenticationCallbackEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "developerAuthenticationCallbackApiKey",
              value: request.developerAuthenticationCallbackApiKey,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "developerAuthenticationCallbackApiSecret",
              value: request.developerAuthenticationCallbackApiSecret,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "supportedSnses",
              value: request.supportedSnses,
              schema: s.optionalNullable(s.array(s.lazy(() => snsSchema))),
            },
            {
              name: "snsCredentials",
              value: request.snsCredentials,
              schema: s.optionalNullable(s.array(s.lazy(() => snsCredentialsSchema))),
            },
            {
              name: "supportedDeveloperSnses",
              value: request.supportedDeveloperSnses,
              schema: s.optionalNullable(s.array(s.lazy(() => snsSchema))),
            },
            {
              name: "developerSnsCredentials",
              value: request.developerSnsCredentials,
              schema: s.optionalNullable(s.array(s.lazy(() => snsCredentialsSchema))),
            },
            {
              name: "clientIdAliasEnabled",
              value: request.clientIdAliasEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "metadata",
              value: request.metadata,
              schema: s.optionalNullable(s.array(s.lazy(() => pairSchema))),
            },
            { name: "createdAt", value: request.createdAt, schema: s.optional(s.int()) },
            { name: "modifiedAt", value: request.modifiedAt, schema: s.optional(s.int()) },
            {
              name: "authenticationCallbackEndpoint",
              value: request.authenticationCallbackEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "authenticationCallbackApiKey",
              value: request.authenticationCallbackApiKey,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "authenticationCallbackApiSecret",
              value: request.authenticationCallbackApiSecret,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "supportedAcrs",
              value: request.supportedAcrs,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedGrantTypes",
              value: request.supportedGrantTypes,
              schema: s.optionalNullable(s.array(s.lazy(() => grantTypeSchema))),
            },
            {
              name: "supportedResponseTypes",
              value: request.supportedResponseTypes,
              schema: s.optionalNullable(s.array(s.lazy(() => responseTypeSchema))),
            },
            {
              name: "supportedAuthorizationDetailsTypes",
              value: request.supportedAuthorizationDetailsTypes,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedServiceProfiles",
              value: request.supportedServiceProfiles,
              schema: s.optionalNullable(s.array(s.lazy(() => serviceProfileSchema))),
            },
            {
              name: "errorDescriptionOmitted",
              value: request.errorDescriptionOmitted,
              schema: s.optional(s.boolean()),
            },
            { name: "errorUriOmitted", value: request.errorUriOmitted, schema: s.optional(s.boolean()) },
            {
              name: "authorizationEndpoint",
              value: request.authorizationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "directAuthorizationEndpointEnabled",
              value: request.directAuthorizationEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedUiLocales",
              value: request.supportedUiLocales,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDisplays",
              value: request.supportedDisplays,
              schema: s.optionalNullable(s.array(s.lazy(() => displaySchema))),
            },
            { name: "pkceRequired", value: request.pkceRequired, schema: s.optional(s.boolean()) },
            { name: "pkceS256Required", value: request.pkceS256Required, schema: s.optional(s.boolean()) },
            {
              name: "authorizationResponseDuration",
              value: request.authorizationResponseDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "authorizationCodeDuration",
              value: request.authorizationCodeDuration,
              schema: s.optional(s.int()),
            },
            { name: "tokenEndpoint", value: request.tokenEndpoint, schema: s.optionalNullable(s.string()) },
            {
              name: "directTokenEndpointEnabled",
              value: request.directTokenEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedTokenAuthMethods",
              value: request.supportedTokenAuthMethods,
              schema: s.optionalNullable(s.array(s.lazy(() => clientAuthMethodSchema))),
            },
            {
              name: "missingClientIdAllowed",
              value: request.missingClientIdAllowed,
              schema: s.optional(s.boolean()),
            },
            {
              name: "revocationEndpoint",
              value: request.revocationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "directRevocationEndpointEnabled",
              value: request.directRevocationEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedRevocationAuthMethods",
              value: request.supportedRevocationAuthMethods,
              schema: s.optionalNullable(s.array(s.lazy(() => clientAuthMethodSchema))),
            },
            {
              name: "introspectionEndpoint",
              value: request.introspectionEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "directIntrospectionEndpointEnabled",
              value: request.directIntrospectionEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedIntrospectionAuthMethods",
              value: request.supportedIntrospectionAuthMethods,
              schema: s.optionalNullable(s.array(s.lazy(() => clientAuthMethodSchema))),
            },
            {
              name: "pushedAuthReqEndpoint",
              value: request.pushedAuthReqEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "pushedAuthReqDuration",
              value: request.pushedAuthReqDuration,
              schema: s.optional(s.int()),
            },
            { name: "parRequired", value: request.parRequired, schema: s.optional(s.boolean()) },
            {
              name: "requestObjectRequired",
              value: request.requestObjectRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "traditionalRequestObjectProcessingApplied",
              value: request.traditionalRequestObjectProcessingApplied,
              schema: s.optional(s.boolean()),
            },
            {
              name: "mutualTlsValidatePkiCertChain",
              value: request.mutualTlsValidatePkiCertChain,
              schema: s.optional(s.boolean()),
            },
            {
              name: "trustedRootCertificates",
              value: request.trustedRootCertificates,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "mtlsEndpointAliases",
              value: request.mtlsEndpointAliases,
              schema: s.optionalNullable(s.array(s.lazy(() => namedUriSchema))),
            },
            {
              name: "accessTokenType",
              value: request.accessTokenType,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "tlsClientCertificateBoundAccessTokens",
              value: request.tlsClientCertificateBoundAccessTokens,
              schema: s.optional(s.boolean()),
            },
            { name: "accessTokenDuration", value: request.accessTokenDuration, schema: s.optional(s.int()) },
            {
              name: "singleAccessTokenPerSubject",
              value: request.singleAccessTokenPerSubject,
              schema: s.optional(s.boolean()),
            },
            {
              name: "accessTokenSignAlg",
              value: request.accessTokenSignAlg,
              schema: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
            },
            {
              name: "accessTokenSignatureKeyId",
              value: request.accessTokenSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "refreshTokenDuration",
              value: request.refreshTokenDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "refreshTokenDurationKept",
              value: request.refreshTokenDurationKept,
              schema: s.optional(s.boolean()),
            },
            {
              name: "refreshTokenDurationReset",
              value: request.refreshTokenDurationReset,
              schema: s.optional(s.boolean()),
            },
            { name: "refreshTokenKept", value: request.refreshTokenKept, schema: s.optional(s.boolean()) },
            {
              name: "supportedScopes",
              value: request.supportedScopes,
              schema: s.optionalNullable(s.array(s.lazy(() => scopeSchema))),
            },
            { name: "scopeRequired", value: request.scopeRequired, schema: s.optional(s.boolean()) },
            { name: "idTokenDuration", value: request.idTokenDuration, schema: s.optional(s.int()) },
            { name: "allowableClockSkew", value: request.allowableClockSkew, schema: s.optional(s.int()) },
            {
              name: "supportedClaimTypes",
              value: request.supportedClaimTypes,
              schema: s.optionalNullable(s.array(s.lazy(() => claimTypeSchema))),
            },
            {
              name: "supportedClaimLocales",
              value: request.supportedClaimLocales,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedClaims",
              value: request.supportedClaims,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "claimShortcutRestrictive",
              value: request.claimShortcutRestrictive,
              schema: s.optional(s.boolean()),
            },
            { name: "jwksUri", value: request.jwksUri, schema: s.optionalNullable(s.string()) },
            {
              name: "directJwksEndpointEnabled",
              value: request.directJwksEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            { name: "jwks", value: request.jwks, schema: s.optionalNullable(s.string()) },
            {
              name: "idTokenSignatureKeyId",
              value: request.idTokenSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "userInfoSignatureKeyId",
              value: request.userInfoSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "authorizationSignatureKeyId",
              value: request.authorizationSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "userInfoEndpoint",
              value: request.userInfoEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "directUserInfoEndpointEnabled",
              value: request.directUserInfoEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "dynamicRegistrationSupported",
              value: request.dynamicRegistrationSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "registrationEndpoint",
              value: request.registrationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "registrationManagementEndpoint",
              value: request.registrationManagementEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            { name: "policyUri", value: request.policyUri, schema: s.optionalNullable(s.string()) },
            { name: "tosUri", value: request.tosUri, schema: s.optionalNullable(s.string()) },
            {
              name: "serviceDocumentation",
              value: request.serviceDocumentation,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "backchannelAuthenticationEndpoint",
              value: request.backchannelAuthenticationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "supportedBackchannelTokenDeliveryModes",
              value: request.supportedBackchannelTokenDeliveryModes,
              schema: s.optionalNullable(s.array(s.lazy(() => deliveryModeSchema))),
            },
            {
              name: "backchannelAuthReqIdDuration",
              value: request.backchannelAuthReqIdDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "backchannelPollingInterval",
              value: request.backchannelPollingInterval,
              schema: s.optional(s.int()),
            },
            {
              name: "backchannelUserCodeParameterSupported",
              value: request.backchannelUserCodeParameterSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "backchannelBindingMessageRequiredInFapi",
              value: request.backchannelBindingMessageRequiredInFapi,
              schema: s.optional(s.boolean()),
            },
            {
              name: "deviceAuthorizationEndpoint",
              value: request.deviceAuthorizationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "deviceVerificationUri",
              value: request.deviceVerificationUri,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "deviceVerificationUriComplete",
              value: request.deviceVerificationUriComplete,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "deviceFlowCodeDuration",
              value: request.deviceFlowCodeDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "deviceFlowPollingInterval",
              value: request.deviceFlowPollingInterval,
              schema: s.optional(s.int()),
            },
            {
              name: "userCodeCharset",
              value: request.userCodeCharset,
              schema: s.optionalNullable(s.lazy(() => userCodeCharsetSchema)),
            },
            { name: "userCodeLength", value: request.userCodeLength, schema: s.optional(s.int()) },
            {
              name: "supportedTrustFrameworks",
              value: request.supportedTrustFrameworks,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedEvidence",
              value: request.supportedEvidence,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedIdentityDocuments",
              value: request.supportedIdentityDocuments,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedVerificationMethods",
              value: request.supportedVerificationMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedVerifiedClaims",
              value: request.supportedVerifiedClaims,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "verifiedClaimsValidationSchemaSet",
              value: request.verifiedClaimsValidationSchemaSet,
              schema: s.optional(s.lazy(() => verifiedClaimsValidationSchemaSchema)),
            },
            {
              name: "attributes",
              value: request.attributes,
              schema: s.optionalNullable(s.array(s.lazy(() => pairSchema))),
            },
            { name: "nbfOptional", value: request.nbfOptional, schema: s.optional(s.boolean()) },
            { name: "issSuppressed", value: request.issSuppressed, schema: s.optional(s.boolean()) },
            {
              name: "supportedCustomClientMetadata",
              value: request.supportedCustomClientMetadata,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "tokenExpirationLinked",
              value: request.tokenExpirationLinked,
              schema: s.optional(s.boolean()),
            },
            {
              name: "frontChannelRequestObjectEncryptionRequired",
              value: request.frontChannelRequestObjectEncryptionRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "requestObjectEncryptionAlgMatchRequired",
              value: request.requestObjectEncryptionAlgMatchRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "requestObjectEncryptionEncMatchRequired",
              value: request.requestObjectEncryptionEncMatchRequired,
              schema: s.optional(s.boolean()),
            },
            { name: "hsmEnabled", value: request.hsmEnabled, schema: s.optional(s.boolean()) },
            {
              name: "hsks",
              value: request.hsks,
              schema: s.optionalNullable(s.array(s.lazy(() => hskSchema))),
            },
            {
              name: "grantManagementEndpoint",
              value: request.grantManagementEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "grantManagementActionRequired",
              value: request.grantManagementActionRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "unauthorizedOnClientConfigSupported",
              value: request.unauthorizedOnClientConfigSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "dcrScopeUsedAsRequestable",
              value: request.dcrScopeUsedAsRequestable,
              schema: s.optional(s.boolean()),
            },
            {
              name: "endSessionEndpoint",
              value: request.endSessionEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "challengeEndpoint",
              value: request.challengeEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "loopbackRedirectionUriVariable",
              value: request.loopbackRedirectionUriVariable,
              schema: s.optional(s.boolean()),
            },
            {
              name: "requestObjectAudienceChecked",
              value: request.requestObjectAudienceChecked,
              schema: s.optional(s.boolean()),
            },
            {
              name: "accessTokenForExternalAttachmentEmbedded",
              value: request.accessTokenForExternalAttachmentEmbedded,
              schema: s.optional(s.boolean()),
            },
            {
              name: "authorityHints",
              value: request.authorityHints,
              schema: s.optionalNullable(s.array(s.string())),
            },
            { name: "federationEnabled", value: request.federationEnabled, schema: s.optional(s.boolean()) },
            { name: "federationJwks", value: request.federationJwks, schema: s.optionalNullable(s.string()) },
            {
              name: "federationSignatureKeyId",
              value: request.federationSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "federationConfigurationDuration",
              value: request.federationConfigurationDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "federationRegistrationEndpoint",
              value: request.federationRegistrationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "organizationName",
              value: request.organizationName,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "predefinedTransformedClaims",
              value: request.predefinedTransformedClaims,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "refreshTokenIdempotent",
              value: request.refreshTokenIdempotent,
              schema: s.optional(s.boolean()),
            },
            { name: "signedJwksUri", value: request.signedJwksUri, schema: s.optionalNullable(s.string()) },
            {
              name: "supportedAttachments",
              value: request.supportedAttachments,
              schema: s.optionalNullable(s.array(s.lazy(() => attachmentTypeSchema))),
            },
            {
              name: "supportedDigestAlgorithms",
              value: request.supportedDigestAlgorithms,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDocuments",
              value: request.supportedDocuments,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDocumentsMethods",
              value: request.supportedDocumentsMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDocumentsValidationMethods",
              value: request.supportedDocumentsValidationMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDocumentsVerificationMethods",
              value: request.supportedDocumentsVerificationMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedElectronicRecords",
              value: request.supportedElectronicRecords,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedClientRegistrationTypes",
              value: request.supportedClientRegistrationTypes,
              schema: s.optionalNullable(s.array(s.lazy(() => clientRegistrationTypeSchema))),
            },
            {
              name: "tokenExchangeByIdentifiableClientsOnly",
              value: request.tokenExchangeByIdentifiableClientsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "tokenExchangeByConfidentialClientsOnly",
              value: request.tokenExchangeByConfidentialClientsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "tokenExchangeByPermittedClientsOnly",
              value: request.tokenExchangeByPermittedClientsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "tokenExchangeEncryptedJwtRejected",
              value: request.tokenExchangeEncryptedJwtRejected,
              schema: s.optional(s.boolean()),
            },
            {
              name: "tokenExchangeUnsignedJwtRejected",
              value: request.tokenExchangeUnsignedJwtRejected,
              schema: s.optional(s.boolean()),
            },
            {
              name: "jwtGrantByIdentifiableClientsOnly",
              value: request.jwtGrantByIdentifiableClientsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "jwtGrantEncryptedJwtRejected",
              value: request.jwtGrantEncryptedJwtRejected,
              schema: s.optional(s.boolean()),
            },
            {
              name: "jwtGrantUnsignedJwtRejected",
              value: request.jwtGrantUnsignedJwtRejected,
              schema: s.optional(s.boolean()),
            },
            {
              name: "dcrDuplicateSoftwareIdBlocked",
              value: request.dcrDuplicateSoftwareIdBlocked,
              schema: s.optional(s.boolean()),
            },
            {
              name: "trustAnchors",
              value: request.trustAnchors,
              schema: s.optionalNullable(s.array(s.lazy(() => trustAnchorSchema))),
            },
            {
              name: "openidDroppedOnRefreshWithoutOfflineAccess",
              value: request.openidDroppedOnRefreshWithoutOfflineAccess,
              schema: s.optional(s.boolean()),
            },
            {
              name: "idTokenDroppedOnIssueWithoutOpenid",
              value: request.idTokenDroppedOnIssueWithoutOpenid,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedDocumentsCheckMethods",
              value: request.supportedDocumentsCheckMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            { name: "rsResponseSigned", value: request.rsResponseSigned, schema: s.optional(s.boolean()) },
            { name: "cnonceDuration", value: request.cnonceDuration, schema: s.optional(s.int()) },
            { name: "dpopNonceRequired", value: request.dpopNonceRequired, schema: s.optional(s.boolean()) },
            {
              name: "verifiableCredentialsEnabled",
              value: request.verifiableCredentialsEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "credentialJwksUri",
              value: request.credentialJwksUri,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "credentialOfferDuration",
              value: request.credentialOfferDuration,
              schema: s.optional(s.int()),
            },
            { name: "dpopNonceDuration", value: request.dpopNonceDuration, schema: s.optional(s.int()) },
            {
              name: "preAuthorizedGrantAnonymousAccessSupported",
              value: request.preAuthorizedGrantAnonymousAccessSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "credentialTransactionDuration",
              value: request.credentialTransactionDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "introspectionSignatureKeyId",
              value: request.introspectionSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "resourceSignatureKeyId",
              value: request.resourceSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            { name: "userPinLength", value: request.userPinLength, schema: s.optional(s.int()) },
            {
              name: "supportedPromptValues",
              value: request.supportedPromptValues,
              schema: s.optionalNullable(s.array(s.lazy(() => promptSchema))),
            },
            { name: "idTokenReissuable", value: request.idTokenReissuable, schema: s.optional(s.boolean()) },
            { name: "credentialJwks", value: request.credentialJwks, schema: s.optionalNullable(s.string()) },
            {
              name: "fapiModes",
              value: request.fapiModes,
              schema: s.optionalNullable(s.array(s.lazy(() => fapiModeSchema))),
            },
            { name: "credentialDuration", value: request.credentialDuration, schema: s.optional(s.int()) },
            {
              name: "credentialIssuerMetadata",
              value: request.credentialIssuerMetadata,
              schema: s.optionalNullable(s.lazy(() => credentialIssuerMetadataSchema)),
            },
            { name: "idTokenAudType", value: request.idTokenAudType, schema: s.optionalNullable(s.string()) },
            {
              name: "nativeSsoSupported",
              value: request.nativeSsoSupported,
              schema: s.optional(s.boolean()),
            },
            { name: "oid4vciVersion", value: request.oid4VciVersion, schema: s.optionalNullable(s.string()) },
            {
              name: "cimdMetadataPolicyEnabled",
              value: request.cimdMetadataPolicyEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "clientIdMetadataDocumentSupported",
              value: request.clientIdMetadataDocumentSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "cimdAllowlistEnabled",
              value: request.cimdAllowlistEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "cimdAllowlist",
              value: request.cimdAllowlist,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "cimdAlwaysRetrieved",
              value: request.cimdAlwaysRetrieved,
              schema: s.optional(s.boolean()),
            },
            { name: "cimdHttpPermitted", value: request.cimdHttpPermitted, schema: s.optional(s.boolean()) },
            {
              name: "cimdQueryPermitted",
              value: request.cimdQueryPermitted,
              schema: s.optional(s.boolean()),
            },
            {
              name: "cimdMetadataPolicy",
              value: request.cimdMetadataPolicy,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "httpAliasProhibited",
              value: request.httpAliasProhibited,
              schema: s.optional(s.boolean()),
            },
            {
              name: "attestationChallengeTimeWindow",
              value: request.attestationChallengeTimeWindow,
              schema: s.optional(s.int()),
            },
            {
              name: "clientAttesterRootsEnabled",
              value: request.clientAttesterRootsEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "clientAttesterRootsOnly",
              value: request.clientAttesterRootsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "keyAttesterRootsEnabled",
              value: request.keyAttesterRootsEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "keyAttesterRootsOnly",
              value: request.keyAttesterRootsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "clientAttesterRoots",
              value: request.clientAttesterRoots,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "keyAttesterRoots",
              value: request.keyAttesterRoots,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "backchannelLogoutSupported",
              value: request.backchannelLogoutSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "backchannelLogoutSessionSupported",
              value: request.backchannelLogoutSessionSupported,
              schema: s.optional(s.boolean()),
            },
            { name: "haipVersion", value: request.haipVersion, schema: s.optionalNullable(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: serviceSchema },
        errorFactory: ServiceManagement.ServiceCreateApiError,
      },
      options,
    );
  }

  /**
   * Create Service (IDP)
   *
   * @remarks
   * Create a new service on the API server, belonging to the specified organization. A service can
   * be created with an organization token or by a user with the CREATE_SERVICE role.
   *
   * This endpoint is hosted on the Authlete IdP server (`https://login.authlete.com`), not on the
   * regional API clusters.
   *
   * @returns Service created successfully.
   *
   * @throws {@link ServiceManagement.ServiceCreateIdpApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceCreateIdpApi(
    request: ServiceManagement.ServiceCreateIdpApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Service, ServiceManagement.ServiceCreateIdpApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/service"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: serviceCreateIdpRequestSchema },
      },
      {
        success: { kind: "json", schema: serviceSchema },
        errorFactory: ServiceManagement.ServiceCreateIdpApiError,
      },
      options,
    );
  }

  /**
   * Delete Service ⚡
   *
   * @remarks
   * Delete a service.
   *
   * @returns The service was successfully deleted.
   *
   * @throws {@link ServiceManagement.ServiceDeleteApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceDeleteApi(
    request: ServiceManagement.ServiceDeleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ServiceManagement.ServiceDeleteApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/{serviceId}/service/delete"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ServiceManagement.ServiceDeleteApiError,
      },
      options,
    );
  }

  /**
   * Get Service
   *
   * @remarks
   * Get a service.
   *
   * If the access token can only view or modify clients underneath this service, but does not have
   * access to view this service directly, a limited view of the service will be returned.
   *
   * @throws {@link ServiceManagement.ServiceGetApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceGetApi(
    request: ServiceManagement.ServiceGetApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Service, ServiceManagement.ServiceGetApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/service/get"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceSchema },
        errorFactory: ServiceManagement.ServiceGetApiError,
      },
      options,
    );
  }

  /**
   * List Services
   *
   * @remarks
   * Get a list of services.
   *
   * If the access token can only view or modify clients underneath a service, but does not have
   * access to view that service directly, a limited view of the service will be returned.
   * Otherwise, all properties of the service are returned.
   *
   * If the access token is an administrative token, this returns a list of all services on the
   * Authlete instance. Otherwise, all services that the access token can view, even in a limited
   * fashion, are returned.
   *
   * @throws {@link ServiceManagement.ServiceGetListApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceGetListApi(
    request: ServiceManagement.ServiceGetListApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceGetListResponse, ServiceManagement.ServiceGetListApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/service/get/list"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.int()) },
          { name: "end", value: request.end, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceGetListResponseSchema },
        errorFactory: ServiceManagement.ServiceGetListApiError,
      },
      options,
    );
  }

  /**
   * Remove Service (IDP) ⚡
   *
   * @remarks
   * Delete a service from the API server. A service can be deleted with an organization token or by
   * a user with the MODIFY_SERVICE role.
   *
   * This endpoint is hosted on the Authlete IdP server (`https://login.authlete.com`), not on the
   * regional API clusters.
   *
   * @returns Service removed successfully.
   *
   * @throws {@link ServiceManagement.ServiceRemoveIdpApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceRemoveIdpApi(
    request: ServiceManagement.ServiceRemoveIdpApiRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ServiceManagement.ServiceRemoveIdpApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/service/remove"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: serviceRemoveIdpRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ServiceManagement.ServiceRemoveIdpApiError,
      },
      options,
    );
  }

  /**
   * Update Service
   *
   * @remarks
   * Update a service.
   *
   * @throws {@link ServiceManagement.ServiceUpdateApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceUpdateApi(
    request: ServiceManagement.ServiceUpdateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Service, ServiceManagement.ServiceUpdateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/service/update"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "number", value: request.number, schema: s.optional(s.int()) },
            { name: "serviceName", value: request.serviceName, schema: s.optionalNullable(s.string()) },
            { name: "issuer", value: request.issuer, schema: s.optionalNullable(s.string()) },
            { name: "description", value: request.description, schema: s.optionalNullable(s.string()) },
            { name: "apiKey", value: request.apiKey, schema: s.optional(s.int()) },
            { name: "apiSecret", value: request.apiSecret, schema: s.optionalNullable(s.string()) },
            {
              name: "tokenBatchNotificationEndpoint",
              value: request.tokenBatchNotificationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "clientAssertionAudRestrictedToIssuer",
              value: request.clientAssertionAudRestrictedToIssuer,
              schema: s.optional(s.boolean()),
            },
            { name: "serviceOwnerNumber", value: request.serviceOwnerNumber, schema: s.optional(s.int()) },
            { name: "clientsPerDeveloper", value: request.clientsPerDeveloper, schema: s.optional(s.int()) },
            {
              name: "developerAuthenticationCallbackEndpoint",
              value: request.developerAuthenticationCallbackEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "developerAuthenticationCallbackApiKey",
              value: request.developerAuthenticationCallbackApiKey,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "developerAuthenticationCallbackApiSecret",
              value: request.developerAuthenticationCallbackApiSecret,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "supportedSnses",
              value: request.supportedSnses,
              schema: s.optionalNullable(s.array(s.lazy(() => snsSchema))),
            },
            {
              name: "snsCredentials",
              value: request.snsCredentials,
              schema: s.optionalNullable(s.array(s.lazy(() => snsCredentialsSchema))),
            },
            {
              name: "supportedDeveloperSnses",
              value: request.supportedDeveloperSnses,
              schema: s.optionalNullable(s.array(s.lazy(() => snsSchema))),
            },
            {
              name: "developerSnsCredentials",
              value: request.developerSnsCredentials,
              schema: s.optionalNullable(s.array(s.lazy(() => snsCredentialsSchema))),
            },
            {
              name: "clientIdAliasEnabled",
              value: request.clientIdAliasEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "metadata",
              value: request.metadata,
              schema: s.optionalNullable(s.array(s.lazy(() => pairSchema))),
            },
            { name: "createdAt", value: request.createdAt, schema: s.optional(s.int()) },
            { name: "modifiedAt", value: request.modifiedAt, schema: s.optional(s.int()) },
            {
              name: "authenticationCallbackEndpoint",
              value: request.authenticationCallbackEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "authenticationCallbackApiKey",
              value: request.authenticationCallbackApiKey,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "authenticationCallbackApiSecret",
              value: request.authenticationCallbackApiSecret,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "supportedAcrs",
              value: request.supportedAcrs,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedGrantTypes",
              value: request.supportedGrantTypes,
              schema: s.optionalNullable(s.array(s.lazy(() => grantTypeSchema))),
            },
            {
              name: "supportedResponseTypes",
              value: request.supportedResponseTypes,
              schema: s.optionalNullable(s.array(s.lazy(() => responseTypeSchema))),
            },
            {
              name: "supportedAuthorizationDetailsTypes",
              value: request.supportedAuthorizationDetailsTypes,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedServiceProfiles",
              value: request.supportedServiceProfiles,
              schema: s.optionalNullable(s.array(s.lazy(() => serviceProfileSchema))),
            },
            {
              name: "errorDescriptionOmitted",
              value: request.errorDescriptionOmitted,
              schema: s.optional(s.boolean()),
            },
            { name: "errorUriOmitted", value: request.errorUriOmitted, schema: s.optional(s.boolean()) },
            {
              name: "authorizationEndpoint",
              value: request.authorizationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "directAuthorizationEndpointEnabled",
              value: request.directAuthorizationEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedUiLocales",
              value: request.supportedUiLocales,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDisplays",
              value: request.supportedDisplays,
              schema: s.optionalNullable(s.array(s.lazy(() => displaySchema))),
            },
            { name: "pkceRequired", value: request.pkceRequired, schema: s.optional(s.boolean()) },
            { name: "pkceS256Required", value: request.pkceS256Required, schema: s.optional(s.boolean()) },
            {
              name: "authorizationResponseDuration",
              value: request.authorizationResponseDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "authorizationCodeDuration",
              value: request.authorizationCodeDuration,
              schema: s.optional(s.int()),
            },
            { name: "tokenEndpoint", value: request.tokenEndpoint, schema: s.optionalNullable(s.string()) },
            {
              name: "directTokenEndpointEnabled",
              value: request.directTokenEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedTokenAuthMethods",
              value: request.supportedTokenAuthMethods,
              schema: s.optionalNullable(s.array(s.lazy(() => clientAuthMethodSchema))),
            },
            {
              name: "missingClientIdAllowed",
              value: request.missingClientIdAllowed,
              schema: s.optional(s.boolean()),
            },
            {
              name: "revocationEndpoint",
              value: request.revocationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "directRevocationEndpointEnabled",
              value: request.directRevocationEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedRevocationAuthMethods",
              value: request.supportedRevocationAuthMethods,
              schema: s.optionalNullable(s.array(s.lazy(() => clientAuthMethodSchema))),
            },
            {
              name: "introspectionEndpoint",
              value: request.introspectionEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "directIntrospectionEndpointEnabled",
              value: request.directIntrospectionEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedIntrospectionAuthMethods",
              value: request.supportedIntrospectionAuthMethods,
              schema: s.optionalNullable(s.array(s.lazy(() => clientAuthMethodSchema))),
            },
            {
              name: "pushedAuthReqEndpoint",
              value: request.pushedAuthReqEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "pushedAuthReqDuration",
              value: request.pushedAuthReqDuration,
              schema: s.optional(s.int()),
            },
            { name: "parRequired", value: request.parRequired, schema: s.optional(s.boolean()) },
            {
              name: "requestObjectRequired",
              value: request.requestObjectRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "traditionalRequestObjectProcessingApplied",
              value: request.traditionalRequestObjectProcessingApplied,
              schema: s.optional(s.boolean()),
            },
            {
              name: "mutualTlsValidatePkiCertChain",
              value: request.mutualTlsValidatePkiCertChain,
              schema: s.optional(s.boolean()),
            },
            {
              name: "trustedRootCertificates",
              value: request.trustedRootCertificates,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "mtlsEndpointAliases",
              value: request.mtlsEndpointAliases,
              schema: s.optionalNullable(s.array(s.lazy(() => namedUriSchema))),
            },
            {
              name: "accessTokenType",
              value: request.accessTokenType,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "tlsClientCertificateBoundAccessTokens",
              value: request.tlsClientCertificateBoundAccessTokens,
              schema: s.optional(s.boolean()),
            },
            { name: "accessTokenDuration", value: request.accessTokenDuration, schema: s.optional(s.int()) },
            {
              name: "singleAccessTokenPerSubject",
              value: request.singleAccessTokenPerSubject,
              schema: s.optional(s.boolean()),
            },
            {
              name: "accessTokenSignAlg",
              value: request.accessTokenSignAlg,
              schema: s.optionalNullable(s.lazy(() => jwsAlgSchema)),
            },
            {
              name: "accessTokenSignatureKeyId",
              value: request.accessTokenSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "refreshTokenDuration",
              value: request.refreshTokenDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "refreshTokenDurationKept",
              value: request.refreshTokenDurationKept,
              schema: s.optional(s.boolean()),
            },
            {
              name: "refreshTokenDurationReset",
              value: request.refreshTokenDurationReset,
              schema: s.optional(s.boolean()),
            },
            { name: "refreshTokenKept", value: request.refreshTokenKept, schema: s.optional(s.boolean()) },
            {
              name: "supportedScopes",
              value: request.supportedScopes,
              schema: s.optionalNullable(s.array(s.lazy(() => scopeSchema))),
            },
            { name: "scopeRequired", value: request.scopeRequired, schema: s.optional(s.boolean()) },
            { name: "idTokenDuration", value: request.idTokenDuration, schema: s.optional(s.int()) },
            { name: "allowableClockSkew", value: request.allowableClockSkew, schema: s.optional(s.int()) },
            {
              name: "supportedClaimTypes",
              value: request.supportedClaimTypes,
              schema: s.optionalNullable(s.array(s.lazy(() => claimTypeSchema))),
            },
            {
              name: "supportedClaimLocales",
              value: request.supportedClaimLocales,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedClaims",
              value: request.supportedClaims,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "claimShortcutRestrictive",
              value: request.claimShortcutRestrictive,
              schema: s.optional(s.boolean()),
            },
            { name: "jwksUri", value: request.jwksUri, schema: s.optionalNullable(s.string()) },
            {
              name: "directJwksEndpointEnabled",
              value: request.directJwksEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            { name: "jwks", value: request.jwks, schema: s.optionalNullable(s.string()) },
            {
              name: "idTokenSignatureKeyId",
              value: request.idTokenSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "userInfoSignatureKeyId",
              value: request.userInfoSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "authorizationSignatureKeyId",
              value: request.authorizationSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "userInfoEndpoint",
              value: request.userInfoEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "directUserInfoEndpointEnabled",
              value: request.directUserInfoEndpointEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "dynamicRegistrationSupported",
              value: request.dynamicRegistrationSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "registrationEndpoint",
              value: request.registrationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "registrationManagementEndpoint",
              value: request.registrationManagementEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            { name: "policyUri", value: request.policyUri, schema: s.optionalNullable(s.string()) },
            { name: "tosUri", value: request.tosUri, schema: s.optionalNullable(s.string()) },
            {
              name: "serviceDocumentation",
              value: request.serviceDocumentation,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "backchannelAuthenticationEndpoint",
              value: request.backchannelAuthenticationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "supportedBackchannelTokenDeliveryModes",
              value: request.supportedBackchannelTokenDeliveryModes,
              schema: s.optionalNullable(s.array(s.lazy(() => deliveryModeSchema))),
            },
            {
              name: "backchannelAuthReqIdDuration",
              value: request.backchannelAuthReqIdDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "backchannelPollingInterval",
              value: request.backchannelPollingInterval,
              schema: s.optional(s.int()),
            },
            {
              name: "backchannelUserCodeParameterSupported",
              value: request.backchannelUserCodeParameterSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "backchannelBindingMessageRequiredInFapi",
              value: request.backchannelBindingMessageRequiredInFapi,
              schema: s.optional(s.boolean()),
            },
            {
              name: "deviceAuthorizationEndpoint",
              value: request.deviceAuthorizationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "deviceVerificationUri",
              value: request.deviceVerificationUri,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "deviceVerificationUriComplete",
              value: request.deviceVerificationUriComplete,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "deviceFlowCodeDuration",
              value: request.deviceFlowCodeDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "deviceFlowPollingInterval",
              value: request.deviceFlowPollingInterval,
              schema: s.optional(s.int()),
            },
            {
              name: "userCodeCharset",
              value: request.userCodeCharset,
              schema: s.optionalNullable(s.lazy(() => userCodeCharsetSchema)),
            },
            { name: "userCodeLength", value: request.userCodeLength, schema: s.optional(s.int()) },
            {
              name: "supportedTrustFrameworks",
              value: request.supportedTrustFrameworks,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedEvidence",
              value: request.supportedEvidence,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedIdentityDocuments",
              value: request.supportedIdentityDocuments,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedVerificationMethods",
              value: request.supportedVerificationMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedVerifiedClaims",
              value: request.supportedVerifiedClaims,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "verifiedClaimsValidationSchemaSet",
              value: request.verifiedClaimsValidationSchemaSet,
              schema: s.optional(s.lazy(() => verifiedClaimsValidationSchemaSchema)),
            },
            {
              name: "attributes",
              value: request.attributes,
              schema: s.optionalNullable(s.array(s.lazy(() => pairSchema))),
            },
            { name: "nbfOptional", value: request.nbfOptional, schema: s.optional(s.boolean()) },
            { name: "issSuppressed", value: request.issSuppressed, schema: s.optional(s.boolean()) },
            {
              name: "supportedCustomClientMetadata",
              value: request.supportedCustomClientMetadata,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "tokenExpirationLinked",
              value: request.tokenExpirationLinked,
              schema: s.optional(s.boolean()),
            },
            {
              name: "frontChannelRequestObjectEncryptionRequired",
              value: request.frontChannelRequestObjectEncryptionRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "requestObjectEncryptionAlgMatchRequired",
              value: request.requestObjectEncryptionAlgMatchRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "requestObjectEncryptionEncMatchRequired",
              value: request.requestObjectEncryptionEncMatchRequired,
              schema: s.optional(s.boolean()),
            },
            { name: "hsmEnabled", value: request.hsmEnabled, schema: s.optional(s.boolean()) },
            {
              name: "hsks",
              value: request.hsks,
              schema: s.optionalNullable(s.array(s.lazy(() => hskSchema))),
            },
            {
              name: "grantManagementEndpoint",
              value: request.grantManagementEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "grantManagementActionRequired",
              value: request.grantManagementActionRequired,
              schema: s.optional(s.boolean()),
            },
            {
              name: "unauthorizedOnClientConfigSupported",
              value: request.unauthorizedOnClientConfigSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "dcrScopeUsedAsRequestable",
              value: request.dcrScopeUsedAsRequestable,
              schema: s.optional(s.boolean()),
            },
            {
              name: "endSessionEndpoint",
              value: request.endSessionEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "challengeEndpoint",
              value: request.challengeEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "loopbackRedirectionUriVariable",
              value: request.loopbackRedirectionUriVariable,
              schema: s.optional(s.boolean()),
            },
            {
              name: "requestObjectAudienceChecked",
              value: request.requestObjectAudienceChecked,
              schema: s.optional(s.boolean()),
            },
            {
              name: "accessTokenForExternalAttachmentEmbedded",
              value: request.accessTokenForExternalAttachmentEmbedded,
              schema: s.optional(s.boolean()),
            },
            {
              name: "authorityHints",
              value: request.authorityHints,
              schema: s.optionalNullable(s.array(s.string())),
            },
            { name: "federationEnabled", value: request.federationEnabled, schema: s.optional(s.boolean()) },
            { name: "federationJwks", value: request.federationJwks, schema: s.optionalNullable(s.string()) },
            {
              name: "federationSignatureKeyId",
              value: request.federationSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "federationConfigurationDuration",
              value: request.federationConfigurationDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "federationRegistrationEndpoint",
              value: request.federationRegistrationEndpoint,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "organizationName",
              value: request.organizationName,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "predefinedTransformedClaims",
              value: request.predefinedTransformedClaims,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "refreshTokenIdempotent",
              value: request.refreshTokenIdempotent,
              schema: s.optional(s.boolean()),
            },
            { name: "signedJwksUri", value: request.signedJwksUri, schema: s.optionalNullable(s.string()) },
            {
              name: "supportedAttachments",
              value: request.supportedAttachments,
              schema: s.optionalNullable(s.array(s.lazy(() => attachmentTypeSchema))),
            },
            {
              name: "supportedDigestAlgorithms",
              value: request.supportedDigestAlgorithms,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDocuments",
              value: request.supportedDocuments,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDocumentsMethods",
              value: request.supportedDocumentsMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDocumentsValidationMethods",
              value: request.supportedDocumentsValidationMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedDocumentsVerificationMethods",
              value: request.supportedDocumentsVerificationMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedElectronicRecords",
              value: request.supportedElectronicRecords,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "supportedClientRegistrationTypes",
              value: request.supportedClientRegistrationTypes,
              schema: s.optionalNullable(s.array(s.lazy(() => clientRegistrationTypeSchema))),
            },
            {
              name: "tokenExchangeByIdentifiableClientsOnly",
              value: request.tokenExchangeByIdentifiableClientsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "tokenExchangeByConfidentialClientsOnly",
              value: request.tokenExchangeByConfidentialClientsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "tokenExchangeByPermittedClientsOnly",
              value: request.tokenExchangeByPermittedClientsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "tokenExchangeEncryptedJwtRejected",
              value: request.tokenExchangeEncryptedJwtRejected,
              schema: s.optional(s.boolean()),
            },
            {
              name: "tokenExchangeUnsignedJwtRejected",
              value: request.tokenExchangeUnsignedJwtRejected,
              schema: s.optional(s.boolean()),
            },
            {
              name: "jwtGrantByIdentifiableClientsOnly",
              value: request.jwtGrantByIdentifiableClientsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "jwtGrantEncryptedJwtRejected",
              value: request.jwtGrantEncryptedJwtRejected,
              schema: s.optional(s.boolean()),
            },
            {
              name: "jwtGrantUnsignedJwtRejected",
              value: request.jwtGrantUnsignedJwtRejected,
              schema: s.optional(s.boolean()),
            },
            {
              name: "dcrDuplicateSoftwareIdBlocked",
              value: request.dcrDuplicateSoftwareIdBlocked,
              schema: s.optional(s.boolean()),
            },
            {
              name: "trustAnchors",
              value: request.trustAnchors,
              schema: s.optionalNullable(s.array(s.lazy(() => trustAnchorSchema))),
            },
            {
              name: "openidDroppedOnRefreshWithoutOfflineAccess",
              value: request.openidDroppedOnRefreshWithoutOfflineAccess,
              schema: s.optional(s.boolean()),
            },
            {
              name: "idTokenDroppedOnIssueWithoutOpenid",
              value: request.idTokenDroppedOnIssueWithoutOpenid,
              schema: s.optional(s.boolean()),
            },
            {
              name: "supportedDocumentsCheckMethods",
              value: request.supportedDocumentsCheckMethods,
              schema: s.optionalNullable(s.array(s.string())),
            },
            { name: "rsResponseSigned", value: request.rsResponseSigned, schema: s.optional(s.boolean()) },
            { name: "cnonceDuration", value: request.cnonceDuration, schema: s.optional(s.int()) },
            { name: "dpopNonceRequired", value: request.dpopNonceRequired, schema: s.optional(s.boolean()) },
            {
              name: "verifiableCredentialsEnabled",
              value: request.verifiableCredentialsEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "credentialJwksUri",
              value: request.credentialJwksUri,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "credentialOfferDuration",
              value: request.credentialOfferDuration,
              schema: s.optional(s.int()),
            },
            { name: "dpopNonceDuration", value: request.dpopNonceDuration, schema: s.optional(s.int()) },
            {
              name: "preAuthorizedGrantAnonymousAccessSupported",
              value: request.preAuthorizedGrantAnonymousAccessSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "credentialTransactionDuration",
              value: request.credentialTransactionDuration,
              schema: s.optional(s.int()),
            },
            {
              name: "introspectionSignatureKeyId",
              value: request.introspectionSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "resourceSignatureKeyId",
              value: request.resourceSignatureKeyId,
              schema: s.optionalNullable(s.string()),
            },
            { name: "userPinLength", value: request.userPinLength, schema: s.optional(s.int()) },
            {
              name: "supportedPromptValues",
              value: request.supportedPromptValues,
              schema: s.optionalNullable(s.array(s.lazy(() => promptSchema))),
            },
            { name: "idTokenReissuable", value: request.idTokenReissuable, schema: s.optional(s.boolean()) },
            { name: "credentialJwks", value: request.credentialJwks, schema: s.optionalNullable(s.string()) },
            {
              name: "fapiModes",
              value: request.fapiModes,
              schema: s.optionalNullable(s.array(s.lazy(() => fapiModeSchema))),
            },
            { name: "credentialDuration", value: request.credentialDuration, schema: s.optional(s.int()) },
            {
              name: "credentialIssuerMetadata",
              value: request.credentialIssuerMetadata,
              schema: s.optionalNullable(s.lazy(() => credentialIssuerMetadataSchema)),
            },
            { name: "idTokenAudType", value: request.idTokenAudType, schema: s.optionalNullable(s.string()) },
            {
              name: "nativeSsoSupported",
              value: request.nativeSsoSupported,
              schema: s.optional(s.boolean()),
            },
            { name: "oid4vciVersion", value: request.oid4VciVersion, schema: s.optionalNullable(s.string()) },
            {
              name: "cimdMetadataPolicyEnabled",
              value: request.cimdMetadataPolicyEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "clientIdMetadataDocumentSupported",
              value: request.clientIdMetadataDocumentSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "cimdAllowlistEnabled",
              value: request.cimdAllowlistEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "cimdAllowlist",
              value: request.cimdAllowlist,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "cimdAlwaysRetrieved",
              value: request.cimdAlwaysRetrieved,
              schema: s.optional(s.boolean()),
            },
            { name: "cimdHttpPermitted", value: request.cimdHttpPermitted, schema: s.optional(s.boolean()) },
            {
              name: "cimdQueryPermitted",
              value: request.cimdQueryPermitted,
              schema: s.optional(s.boolean()),
            },
            {
              name: "cimdMetadataPolicy",
              value: request.cimdMetadataPolicy,
              schema: s.optionalNullable(s.string()),
            },
            {
              name: "httpAliasProhibited",
              value: request.httpAliasProhibited,
              schema: s.optional(s.boolean()),
            },
            {
              name: "attestationChallengeTimeWindow",
              value: request.attestationChallengeTimeWindow,
              schema: s.optional(s.int()),
            },
            {
              name: "clientAttesterRootsEnabled",
              value: request.clientAttesterRootsEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "clientAttesterRootsOnly",
              value: request.clientAttesterRootsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "keyAttesterRootsEnabled",
              value: request.keyAttesterRootsEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "keyAttesterRootsOnly",
              value: request.keyAttesterRootsOnly,
              schema: s.optional(s.boolean()),
            },
            {
              name: "clientAttesterRoots",
              value: request.clientAttesterRoots,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "keyAttesterRoots",
              value: request.keyAttesterRoots,
              schema: s.optionalNullable(s.array(s.string())),
            },
            {
              name: "backchannelLogoutSupported",
              value: request.backchannelLogoutSupported,
              schema: s.optional(s.boolean()),
            },
            {
              name: "backchannelLogoutSessionSupported",
              value: request.backchannelLogoutSessionSupported,
              schema: s.optional(s.boolean()),
            },
            { name: "haipVersion", value: request.haipVersion, schema: s.optionalNullable(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: serviceSchema },
        errorFactory: ServiceManagement.ServiceUpdateApiError,
      },
      options,
    );
  }
}

export namespace ServiceManagement {
  export type ServiceConfigurationApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * This boolean value indicates whether the JSON in the response should be formatted or not. If
     * `true`, the JSON in the response is pretty-formatted. The default value is `false`.
     */
    pretty?: boolean;
    /**
     * Get the JSON Patch [RFC 6902 JavaScript Object Notation (JSON)
     * Patch](https://www.rfc-editor.org/rfc/rfc6902) to be applied.
     */
    patch?: string;
  };

  export class ServiceConfigurationApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServiceConfigurationApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ServiceCreateApiRequest = {
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
     * token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) and `issuer` property
     * in the [OpenID Provider
     * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    issuer?: string | null;
    /** The description about the service. */
    description?: string | null;
    /**
     * The service ID used in Authlete API calls. The value of this property is assigned by
     * Authlete.
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
    /**
     * The number of the organization that owns this service. This value is assigned by Authlete.
     */
    serviceOwnerNumber?: number;
    /** The maximum number of client applications that a developer can have. */
    clientsPerDeveloper?: number;
    /**
     * The endpoint for developer authentication callbacks. This is used when developers log into
     * the developer portal.
     */
    developerAuthenticationCallbackEndpoint?: string | null;
    /** The API key for basic authentication at the developer authentication callback endpoint. */
    developerAuthenticationCallbackApiKey?: string | null;
    /**
     * The API secret for basic authentication at the developer authentication callback endpoint.
     */
    developerAuthenticationCallbackApiSecret?: string | null;
    /** Social login services (SNS) that this service supports for end-user authentication. */
    supportedSnses?: Sns[] | null;
    /**
     * The credentials for social login services (SNS) that are used for end-user authentication.
     */
    snsCredentials?: SnsCredentials[] | null;
    /** Social login services (SNS) that this service supports for developer authentication. */
    supportedDeveloperSnses?: Sns[] | null;
    /**
     * The credentials for social login services (SNS) that are used for developer authentication.
     */
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
     * The time at which this service was created. The value is represented as milliseconds since
     * the UNIX epoch (`1970-01-01`).
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
     * The value of this property is used as `grant_types_supported property` in the [OpenID
     * Provider
     * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    supportedGrantTypes?: GrantType[] | null;
    /**
     * Values of `response_type` request parameter that the service supports. Valid values are
     * listed in Response Type.
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
     * The value of this property is used as `authorization_endpoint` property in the [OpenID
     * Provider
     * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    authorizationEndpoint?: string | null;
    /**
     * Deprecated. The direct authorization endpoint was removed in Authlete 3.0.15, so this flag
     * has no effect and is always returned as `false`.
     */
    directAuthorizationEndpointEnabled?: boolean;
    /**
     * UI locales that the service supports.
     *
     * Each element is a language tag defined in [RFC 5646](https://tools.ietf.org/html/rfc5646).
     * For example, `en-US` and `ja-JP`.
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
     * authorization endpoint will be packed into a JWT. This property is used to compute the value
     * of the `exp` claim of the JWT.
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
     * Deprecated. The direct revocation endpoint was removed in Authlete 3.0.15, so this flag has
     * no effect and is always returned as `false`.
     */
    directRevocationEndpointEnabled?: boolean;
    /** Client authentication methods supported at the revocation endpoint. */
    supportedRevocationAuthMethods?: ClientAuthMethod[] | null;
    /** The URI of the introspection endpoint. */
    introspectionEndpoint?: string | null;
    /**
     * Deprecated. The direct introspection endpoint was removed in Authlete 3.0.15, so this flag
     * has no effect and is always returned as `false`.
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
     * The flag to indicate whether this service requires that authorization requests always utilize
     * a request object by using either request or `request_uri` request parameter.
     *
     * If this flag is set to `true` and the value of `traditionalRequestObjectProcessingApplied` is
     * `false`, the value of `require_signed_request_object` server metadata of this service is
     * reported as `true` in the discovery document. The metadata is defined in JAR (JWT Secured
     * Authorization Request). That `require_signed_request_object` is `true` means that
     * authorization requests which don't conform to the JAR specification are rejected.
     */
    requestObjectRequired?: boolean;
    /**
     * The flag to indicate whether a request object is processed based on rules defined in [OpenID
     * Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) or JAR (JWT Secured
     * Authorization Request).
     */
    traditionalRequestObjectProcessingApplied?: boolean;
    /**
     * The flag to indicate whether this service validates certificate chains during PKI-based
     * client mutual TLS authentication.
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
     * The flag to indicate whether this service supports issuing TLS client certificate bound
     * access tokens.
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
     * Flow](https://tools.ietf.org/html/rfc6749#section-4.4) do not invalidate existing access
     * tokens because access tokens issued by Client Credentials Flow are not associated with any
     * end-user's subject. Also note that an attempt by [Refresh Token
     * Flow](https://tools.ietf.org/html/rfc6749#section-6) invalidates the coupled access token
     * only and this invalidation is always performed regardless of whether the value of this
     * setting item is `true` or `false`.
     */
    singleAccessTokenPerSubject?: boolean;
    /**
     * The signature algorithm for JWT. This value is represented on 'alg' attribute of the header
     * of JWT.
     *
     * it's semantics depends upon where is this defined, for instance:
     *   - as service accessTokenSignAlg value, it defines that access token are JWT and the
     *     algorithm used to sign it. Check your [KB
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
     * satisfies conditions for access token signature. If the number of JWK candidates which
     * satisfy the conditions is 1, there is no problem. On the other hand, if there exist multiple
     * candidates, a Key ID is needed to be specified so that Authlete Server can pick up one JWK
     * from among the JWK candidates.
     */
    accessTokenSignatureKeyId?: string | null;
    /**
     * The duration of refresh tokens in seconds. The related specifications have no requirements on
     * refresh token duration, but Authlete sets expiration for refresh tokens.
     */
    refreshTokenDuration?: number;
    /**
     * The flag to indicate whether the remaining duration of the used refresh token is taken over
     * to the newly issued refresh token.
     */
    refreshTokenDurationKept?: boolean;
    /**
     * The flag which indicates whether duration of refresh tokens are reset when they are used even
     * if the `refreshTokenKept` property of this service set to is `true` (= even if "Refresh Token
     * Continuous Use" is "Kept").
     *
     * This flag has no effect when the `refreshTokenKept` property is set to `false`. In other
     * words, if this service issues a new refresh token on every refresh token request, the refresh
     * token will have fresh duration (unless `refreshTokenDurationKept` is set to `true`) and this
     * `refreshTokenDurationReset` property is not referenced.
     */
    refreshTokenDurationReset?: boolean;
    /**
     * The flag to indicate whether a refresh token remains unchanged or gets renewed after its use.
     *
     * If `true`, a refresh token used to get a new access token remains valid after its use.
     * Otherwise, if `false`, a refresh token is invalidated after its use and a new refresh token
     * is issued.
     *
     * See [RFC 6749 6. Refreshing an Access Token](https://tools.ietf.org/html/rfc6749#section-6),
     * as to how to get a new access token using a refresh token.
     */
    refreshTokenKept?: boolean;
    /** Scopes supported by the service. */
    supportedScopes?: Scope[] | null;
    /** The flag to indicate whether requests that request no scope are rejected or not. */
    scopeRequired?: boolean;
    /**
     * 'The duration of [ID token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken)s
     * in seconds. This value is used to calculate the value of `exp` claim in an ID token.'
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
     * Claim types supported by the service. Valid values are listed in Claim Type. Note that
     * Authlete currently doesn't provide any API to help implementations for `AGGREGATED` and
     * `DISTRIBUTED`.
     *
     * The value of this property is used as `claim_types_supported` property in the [OpenID
     * Provider
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
     * Claim names that the service supports. The standard claim names listed in [OpenID Connect
     * Core 1.0, 5.1. Standard
     * Claim](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) should be
     * supported. The following is the list of standard claims.
     */
    supportedClaims?: string[] | null;
    /**
     * The flag indicating whether claims specified by shortcut scopes (e.g. `profile`) are included
     * in the issued ID token only when no access token is issued.
     */
    claimShortcutRestrictive?: boolean;
    /**
     * The URL of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517) document.
     * For example, `http://example.com/auth/jwks`.
     *
     * Client applications accesses this URL (1) to get the public key of the service to validate
     * the signature of an ID token issued by the service and (2) to get the public key of the
     * service to encrypt an request object of the client application. See [OpenID Connect Core 1.0,
     * 10. Signatures and Encryption](https://openid.net/specs/openid-connect-core-1_0.html#SigEnc)
     * for details.
     *
     * The value of this property is used as `jwks_uri` property in the [OpenID Provider
     * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    jwksUri?: string | null;
    /**
     * Deprecated. The direct JWKS endpoint was removed in Authlete 3.0.15, so this flag has no
     * effect and is always returned as `false`.
     */
    directJwksEndpointEnabled?: boolean;
    /**
     * The content of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517)
     * document.
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
     * The key ID to identify a JWK used for signing authorization responses using an asymmetric
     * key.
     */
    authorizationSignatureKeyId?: string | null;
    /**
     * The [user info endpoint](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo) of
     * the service. A URL that starts with `https://`. For example,
     * `https://example.com/auth/userinfo`.
     *
     * The value of this property is used as `userinfo_endpoint` property in the [OpenID Provider
     * Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    userInfoEndpoint?: string | null;
    /**
     * Deprecated. The direct userinfo endpoint was removed in Authlete 3.0.15, so this flag has no
     * effect and is always returned as `false`.
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
     * The value of this property is used as `registration_endpoint` property in the [OpenID
     * Provider
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
     * The value of this property is used as `service_documentation` property in the [OpenID
     * Provider
     * Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    serviceDocumentation?: string | null;
    /**
     * The URI of backchannel authentication endpoint, which is defined in the specification of
     * [CIBA (Client Initiated Backchannel
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
     * The minimum interval between polling requests to the token endpoint from client applications
     * in seconds. This is used as the value of the `interval` property in responses from the
     * backchannel authentication endpoint.
     */
    backchannelPollingInterval?: number;
    /**
     * The boolean flag which indicates whether the `user_code` request parameter is supported at
     * the backchannel authentication endpoint. This property corresponds to the
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
     * Device authorization endpoint is defined in the specification of OAuth 2.0 Device
     * Authorization Grant.
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
     * The minimum interval between polling requests to the token endpoint from client applications
     * in seconds in device flow. This is used as the value of the `interval` property in responses
     * from the device authorization endpoint.
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
     * Identity documents supported by this service. This corresponds to the
     * `id_documents_supported`
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
     * The flag indicating whether encryption of request object is required when the request object
     * is passed through the front channel.
     */
    frontChannelRequestObjectEncryptionRequired?: boolean;
    /**
     * The flag indicating whether the JWE alg of encrypted request object must match the
     * `request_object_encryption_alg` client metadata of the client that has sent the request
     * object.
     */
    requestObjectEncryptionAlgMatchRequired?: boolean;
    /**
     * The flag indicating whether the JWE `enc` of encrypted request object must match the
     * `request_object_encryption_enc` client metadata of the client that has sent the request
     * object.
     */
    requestObjectEncryptionEncMatchRequired?: boolean;
    /**
     * The flag indicating whether HSM (Hardware Security Module) support is enabled for this
     * service.
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
     * authorization request such as CIBA backchannel authentication request and device
     * authorization request) must include the `grant_management_action` request parameter.
     */
    grantManagementActionRequired?: boolean;
    /**
     * The flag indicating whether Authlete's `/api/client/registration` API uses `UNAUTHORIZED` as
     * a value of the `action` response parameter when appropriate.
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
     * The flag indicating whether the port number component of redirection URIs can be variable
     * when the host component indicates loopback.
     */
    loopbackRedirectionUriVariable?: boolean;
    /**
     * The flag indicating whether Authlete checks whether the `aud` claim of request objects
     * matches the issuer identifier of this service.
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
     * JWK Set document containing keys that are used to sign (1) self-signed entity statement of
     * this service and (2) the response from `signed_jwks_uri`.
     */
    federationJwks?: string | null;
    /** A key ID to identify a JWK used to sign the entity configuration and the signed JWK Set. */
    federationSignatureKeyId?: string | null;
    /** The duration of the entity configuration in seconds. */
    federationConfigurationDuration?: number;
    /**
     * The URI of the federation registration endpoint. This property corresponds to the
     * `federation_registration_endpoint` server metadata that is defined in OpenID Connect
     * Federation 1.0.
     */
    federationRegistrationEndpoint?: string | null;
    /**
     * The human-readable name representing the organization that operates this service. This
     * property corresponds to the `organization_name` server metadata that is defined in OpenID
     * Connect Federation 1.0.
     */
    organizationName?: string | null;
    /**
     * The transformed claims predefined by this service in JSON format. This property corresponds
     * to the `transformed_claims_predefined` server metadata.
     */
    predefinedTransformedClaims?: string | null;
    /**
     * flag indicating whether refresh token requests with the same refresh token can be made
     * multiple times in quick succession and they can obtain the same renewed refresh token within
     * the short period.
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
     * attachments_supported&#125; server metadata which was added by the third implementer's draft
     * of OpenID Connect for Identity Assurance 1.0.
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
     * `id_documents_verification_methods_supported` server metadata to
     * `documents_methods_supported`.
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
     * `electronic_records_supported` server metadata which was added by the third implementer's
     * draft of [OpenID Connect for Identity Assurance
     * 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html)
     */
    supportedElectronicRecords?: string[] | null;
    supportedClientRegistrationTypes?: ClientRegistrationType[] | null;
    /**
     * The flag indicating whether to prohibit unidentifiable clients from making token exchange
     * requests.
     */
    tokenExchangeByIdentifiableClientsOnly?: boolean;
    /**
     * The flag indicating whether to prohibit public clients from making token exchange requests.
     */
    tokenExchangeByConfidentialClientsOnly?: boolean;
    /**
     * The flag indicating whether to prohibit clients that have no explicit permission from making
     * token exchange requests.
     */
    tokenExchangeByPermittedClientsOnly?: boolean;
    /**
     * The flag indicating whether to reject token exchange requests which use encrypted JWTs as
     * input tokens.
     */
    tokenExchangeEncryptedJwtRejected?: boolean;
    /**
     * The flag indicating whether to reject token exchange requests which use unsigned JWTs as
     * input tokens.
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
     * `documents_check_methods_supported` server metadata which was added by the fourth
     * implementer's draft of OpenID Connect for Identity Assurance 1.0.
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
    /**
     * The JWK Set document containing private keys that are used to sign verifiable credentials.
     */
    credentialJwks?: string | null;
    /**
     * FAPI modes for this service.
     *
     * When the value of this property is not `null`, Authlete always processes requests to this
     * service based on the specified FAPI modes if the FAPI feature is enabled in Authlete and the
     * FAPI profile is supported by this service.
     *
     * For instance, when this property is set to an array containing `FAPI1_ADVANCED` only,
     * Authlete always processes requests to this service based on "Financial-grade API Security
     * Profile 1.0 - Part 2: Advanced" if the FAPI feature is enabled in Authlete and the FAPI
     * profile is supported by this service.
     */
    fapiModes?: FapiMode[] | null;
    /** The default duration of verifiable credentials in seconds. */
    credentialDuration?: number;
    credentialIssuerMetadata?: CredentialIssuerMetadata | null;
    /** The type of the `aud` claim in ID tokens. */
    idTokenAudType?: string | null;
    /**
     * Flag that enables the [OpenID Connect Native SSO for Mobile Apps
     * 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) specification (“Native
     * SSO”). When this property is **not** `true`, Native SSO specific parameters are ignored or
     * treated as errors. For example:
     *
     * * The `device_sso` scope has no special meaning (Authlete does not embed the `sid` claim in
     *   ID tokens).
     * * The `urn:openid:params:token-type:device-secret` token type is treated as unknown and
     *   results in an error.
     *
     * When set to `true`, the server metadata advertises `"native_sso_supported": true`. See
     * [OpenID Connect Discovery
     * 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) and [RFC
     * 8414 §2](https://www.rfc-editor.org/rfc/rfc8414.html#section-2) for background. Native SSO is
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
     * Choose the value that matches the OID4VCI behaviour your service should expose. See the
     * OID4VCI documentation for details.
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
     * Enables the allowlist for CIMD. When `true`, only CIMD endpoints that are on the allowlist
     * are used.
     */
    cimdAllowlistEnabled?: boolean;
    /**
     * The allowlist of CIMD endpoints (hosts/URIs) that may be used when retrieving client metadata
     * via Client ID Metadata Documents.
     */
    cimdAllowlist?: string[] | null;
    /**
     * If `true`, CIMD retrieval is always attempted for clients, regardless of other conditions.
     */
    cimdAlwaysRetrieved?: boolean;
    /**
     * Allows CIMD retrieval over plain HTTP. When `false`, only HTTPS CIMD endpoints are allowed.
     */
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
     * The flag indicating whether the attester roots for Client Attestation JWT x5c chain
     * validation are enabled.
     */
    clientAttesterRootsEnabled?: boolean;
    /**
     * The flag indicating whether only client authentication validated via attester roots is
     * accepted.
     */
    clientAttesterRootsOnly?: boolean;
    /**
     * The flag indicating whether the attester roots for Key Attestation JWT x5c chain validation
     * are enabled.
     */
    keyAttesterRootsEnabled?: boolean;
    /**
     * The flag indicating whether only key attestation validated via attester roots is accepted.
     */
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

  export class ServiceCreateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServiceCreateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ServiceCreateIdpApiRequest = {
    body: ServiceCreateIdpRequest;
  };

  export class ServiceCreateIdpApiError extends ApiError {
    declare readonly payload:
      | Declared<"idpError", IdpError>
      | Declared<"idpError2", IdpError>
      | Declared<"idpError3", IdpError>
      | Declared<"idpError4", IdpError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServiceCreateIdpApiError> = [
      { on: 400, kind: "idpError", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 401, kind: "idpError2", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 403, kind: "idpError3", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 500, kind: "idpError4", decode: { kind: "json", schema: idpErrorSchema } },
    ];
  }

  export type ServiceDeleteApiRequest = {
    /** A service ID. */
    serviceId: string;
  };

  export class ServiceDeleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServiceDeleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ServiceGetApiRequest = {
    /** A service ID. */
    serviceId: string;
  };

  export class ServiceGetApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServiceGetApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ServiceGetListApiRequest = {
    /**
     * Start index (inclusive) of the result set. The default value is 0. Must not be a negative
     * number.
     */
    start?: number;
    /**
     * End index (exclusive) of the result set. The default value is 5. Must not be a negative
     * number.
     */
    end?: number;
  };

  export class ServiceGetListApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServiceGetListApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ServiceRemoveIdpApiRequest = {
    body: ServiceRemoveIdpRequest;
  };

  export class ServiceRemoveIdpApiError extends ApiError {
    declare readonly payload:
      | Declared<"idpError", IdpError>
      | Declared<"idpError2", IdpError>
      | Declared<"idpError3", IdpError>
      | Declared<"idpError4", IdpError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServiceRemoveIdpApiError> = [
      { on: 400, kind: "idpError", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 401, kind: "idpError2", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 403, kind: "idpError3", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 500, kind: "idpError4", decode: { kind: "json", schema: idpErrorSchema } },
    ];
  }

  export type ServiceUpdateApiRequest = {
    /** A service ID. */
    serviceId: string;
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
     * token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) and `issuer` property
     * in the [OpenID Provider
     * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    issuer?: string | null;
    /** The description about the service. */
    description?: string | null;
    /**
     * The service ID used in Authlete API calls. The value of this property is assigned by
     * Authlete.
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
    /**
     * The number of the organization that owns this service. This value is assigned by Authlete.
     */
    serviceOwnerNumber?: number;
    /** The maximum number of client applications that a developer can have. */
    clientsPerDeveloper?: number;
    /**
     * The endpoint for developer authentication callbacks. This is used when developers log into
     * the developer portal.
     */
    developerAuthenticationCallbackEndpoint?: string | null;
    /** The API key for basic authentication at the developer authentication callback endpoint. */
    developerAuthenticationCallbackApiKey?: string | null;
    /**
     * The API secret for basic authentication at the developer authentication callback endpoint.
     */
    developerAuthenticationCallbackApiSecret?: string | null;
    /** Social login services (SNS) that this service supports for end-user authentication. */
    supportedSnses?: Sns[] | null;
    /**
     * The credentials for social login services (SNS) that are used for end-user authentication.
     */
    snsCredentials?: SnsCredentials[] | null;
    /** Social login services (SNS) that this service supports for developer authentication. */
    supportedDeveloperSnses?: Sns[] | null;
    /**
     * The credentials for social login services (SNS) that are used for developer authentication.
     */
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
     * The time at which this service was created. The value is represented as milliseconds since
     * the UNIX epoch (`1970-01-01`).
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
     * The value of this property is used as `grant_types_supported property` in the [OpenID
     * Provider
     * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    supportedGrantTypes?: GrantType[] | null;
    /**
     * Values of `response_type` request parameter that the service supports. Valid values are
     * listed in Response Type.
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
     * The value of this property is used as `authorization_endpoint` property in the [OpenID
     * Provider
     * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    authorizationEndpoint?: string | null;
    /**
     * Deprecated. The direct authorization endpoint was removed in Authlete 3.0.15, so this flag
     * has no effect and is always returned as `false`.
     */
    directAuthorizationEndpointEnabled?: boolean;
    /**
     * UI locales that the service supports.
     *
     * Each element is a language tag defined in [RFC 5646](https://tools.ietf.org/html/rfc5646).
     * For example, `en-US` and `ja-JP`.
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
     * authorization endpoint will be packed into a JWT. This property is used to compute the value
     * of the `exp` claim of the JWT.
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
     * Deprecated. The direct revocation endpoint was removed in Authlete 3.0.15, so this flag has
     * no effect and is always returned as `false`.
     */
    directRevocationEndpointEnabled?: boolean;
    /** Client authentication methods supported at the revocation endpoint. */
    supportedRevocationAuthMethods?: ClientAuthMethod[] | null;
    /** The URI of the introspection endpoint. */
    introspectionEndpoint?: string | null;
    /**
     * Deprecated. The direct introspection endpoint was removed in Authlete 3.0.15, so this flag
     * has no effect and is always returned as `false`.
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
     * The flag to indicate whether this service requires that authorization requests always utilize
     * a request object by using either request or `request_uri` request parameter.
     *
     * If this flag is set to `true` and the value of `traditionalRequestObjectProcessingApplied` is
     * `false`, the value of `require_signed_request_object` server metadata of this service is
     * reported as `true` in the discovery document. The metadata is defined in JAR (JWT Secured
     * Authorization Request). That `require_signed_request_object` is `true` means that
     * authorization requests which don't conform to the JAR specification are rejected.
     */
    requestObjectRequired?: boolean;
    /**
     * The flag to indicate whether a request object is processed based on rules defined in [OpenID
     * Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) or JAR (JWT Secured
     * Authorization Request).
     */
    traditionalRequestObjectProcessingApplied?: boolean;
    /**
     * The flag to indicate whether this service validates certificate chains during PKI-based
     * client mutual TLS authentication.
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
     * The flag to indicate whether this service supports issuing TLS client certificate bound
     * access tokens.
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
     * Flow](https://tools.ietf.org/html/rfc6749#section-4.4) do not invalidate existing access
     * tokens because access tokens issued by Client Credentials Flow are not associated with any
     * end-user's subject. Also note that an attempt by [Refresh Token
     * Flow](https://tools.ietf.org/html/rfc6749#section-6) invalidates the coupled access token
     * only and this invalidation is always performed regardless of whether the value of this
     * setting item is `true` or `false`.
     */
    singleAccessTokenPerSubject?: boolean;
    /**
     * The signature algorithm for JWT. This value is represented on 'alg' attribute of the header
     * of JWT.
     *
     * it's semantics depends upon where is this defined, for instance:
     *   - as service accessTokenSignAlg value, it defines that access token are JWT and the
     *     algorithm used to sign it. Check your [KB
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
     * satisfies conditions for access token signature. If the number of JWK candidates which
     * satisfy the conditions is 1, there is no problem. On the other hand, if there exist multiple
     * candidates, a Key ID is needed to be specified so that Authlete Server can pick up one JWK
     * from among the JWK candidates.
     */
    accessTokenSignatureKeyId?: string | null;
    /**
     * The duration of refresh tokens in seconds. The related specifications have no requirements on
     * refresh token duration, but Authlete sets expiration for refresh tokens.
     */
    refreshTokenDuration?: number;
    /**
     * The flag to indicate whether the remaining duration of the used refresh token is taken over
     * to the newly issued refresh token.
     */
    refreshTokenDurationKept?: boolean;
    /**
     * The flag which indicates whether duration of refresh tokens are reset when they are used even
     * if the `refreshTokenKept` property of this service set to is `true` (= even if "Refresh Token
     * Continuous Use" is "Kept").
     *
     * This flag has no effect when the `refreshTokenKept` property is set to `false`. In other
     * words, if this service issues a new refresh token on every refresh token request, the refresh
     * token will have fresh duration (unless `refreshTokenDurationKept` is set to `true`) and this
     * `refreshTokenDurationReset` property is not referenced.
     */
    refreshTokenDurationReset?: boolean;
    /**
     * The flag to indicate whether a refresh token remains unchanged or gets renewed after its use.
     *
     * If `true`, a refresh token used to get a new access token remains valid after its use.
     * Otherwise, if `false`, a refresh token is invalidated after its use and a new refresh token
     * is issued.
     *
     * See [RFC 6749 6. Refreshing an Access Token](https://tools.ietf.org/html/rfc6749#section-6),
     * as to how to get a new access token using a refresh token.
     */
    refreshTokenKept?: boolean;
    /** Scopes supported by the service. */
    supportedScopes?: Scope[] | null;
    /** The flag to indicate whether requests that request no scope are rejected or not. */
    scopeRequired?: boolean;
    /**
     * 'The duration of [ID token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken)s
     * in seconds. This value is used to calculate the value of `exp` claim in an ID token.'
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
     * Claim types supported by the service. Valid values are listed in Claim Type. Note that
     * Authlete currently doesn't provide any API to help implementations for `AGGREGATED` and
     * `DISTRIBUTED`.
     *
     * The value of this property is used as `claim_types_supported` property in the [OpenID
     * Provider
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
     * Claim names that the service supports. The standard claim names listed in [OpenID Connect
     * Core 1.0, 5.1. Standard
     * Claim](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) should be
     * supported. The following is the list of standard claims.
     */
    supportedClaims?: string[] | null;
    /**
     * The flag indicating whether claims specified by shortcut scopes (e.g. `profile`) are included
     * in the issued ID token only when no access token is issued.
     */
    claimShortcutRestrictive?: boolean;
    /**
     * The URL of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517) document.
     * For example, `http://example.com/auth/jwks`.
     *
     * Client applications accesses this URL (1) to get the public key of the service to validate
     * the signature of an ID token issued by the service and (2) to get the public key of the
     * service to encrypt an request object of the client application. See [OpenID Connect Core 1.0,
     * 10. Signatures and Encryption](https://openid.net/specs/openid-connect-core-1_0.html#SigEnc)
     * for details.
     *
     * The value of this property is used as `jwks_uri` property in the [OpenID Provider
     * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    jwksUri?: string | null;
    /**
     * Deprecated. The direct JWKS endpoint was removed in Authlete 3.0.15, so this flag has no
     * effect and is always returned as `false`.
     */
    directJwksEndpointEnabled?: boolean;
    /**
     * The content of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517)
     * document.
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
     * The key ID to identify a JWK used for signing authorization responses using an asymmetric
     * key.
     */
    authorizationSignatureKeyId?: string | null;
    /**
     * The [user info endpoint](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo) of
     * the service. A URL that starts with `https://`. For example,
     * `https://example.com/auth/userinfo`.
     *
     * The value of this property is used as `userinfo_endpoint` property in the [OpenID Provider
     * Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    userInfoEndpoint?: string | null;
    /**
     * Deprecated. The direct userinfo endpoint was removed in Authlete 3.0.15, so this flag has no
     * effect and is always returned as `false`.
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
     * The value of this property is used as `registration_endpoint` property in the [OpenID
     * Provider
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
     * The value of this property is used as `service_documentation` property in the [OpenID
     * Provider
     * Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     */
    serviceDocumentation?: string | null;
    /**
     * The URI of backchannel authentication endpoint, which is defined in the specification of
     * [CIBA (Client Initiated Backchannel
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
     * The minimum interval between polling requests to the token endpoint from client applications
     * in seconds. This is used as the value of the `interval` property in responses from the
     * backchannel authentication endpoint.
     */
    backchannelPollingInterval?: number;
    /**
     * The boolean flag which indicates whether the `user_code` request parameter is supported at
     * the backchannel authentication endpoint. This property corresponds to the
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
     * Device authorization endpoint is defined in the specification of OAuth 2.0 Device
     * Authorization Grant.
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
     * The minimum interval between polling requests to the token endpoint from client applications
     * in seconds in device flow. This is used as the value of the `interval` property in responses
     * from the device authorization endpoint.
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
     * Identity documents supported by this service. This corresponds to the
     * `id_documents_supported`
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
     * The flag indicating whether encryption of request object is required when the request object
     * is passed through the front channel.
     */
    frontChannelRequestObjectEncryptionRequired?: boolean;
    /**
     * The flag indicating whether the JWE alg of encrypted request object must match the
     * `request_object_encryption_alg` client metadata of the client that has sent the request
     * object.
     */
    requestObjectEncryptionAlgMatchRequired?: boolean;
    /**
     * The flag indicating whether the JWE `enc` of encrypted request object must match the
     * `request_object_encryption_enc` client metadata of the client that has sent the request
     * object.
     */
    requestObjectEncryptionEncMatchRequired?: boolean;
    /**
     * The flag indicating whether HSM (Hardware Security Module) support is enabled for this
     * service.
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
     * authorization request such as CIBA backchannel authentication request and device
     * authorization request) must include the `grant_management_action` request parameter.
     */
    grantManagementActionRequired?: boolean;
    /**
     * The flag indicating whether Authlete's `/api/client/registration` API uses `UNAUTHORIZED` as
     * a value of the `action` response parameter when appropriate.
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
     * The flag indicating whether the port number component of redirection URIs can be variable
     * when the host component indicates loopback.
     */
    loopbackRedirectionUriVariable?: boolean;
    /**
     * The flag indicating whether Authlete checks whether the `aud` claim of request objects
     * matches the issuer identifier of this service.
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
     * JWK Set document containing keys that are used to sign (1) self-signed entity statement of
     * this service and (2) the response from `signed_jwks_uri`.
     */
    federationJwks?: string | null;
    /** A key ID to identify a JWK used to sign the entity configuration and the signed JWK Set. */
    federationSignatureKeyId?: string | null;
    /** The duration of the entity configuration in seconds. */
    federationConfigurationDuration?: number;
    /**
     * The URI of the federation registration endpoint. This property corresponds to the
     * `federation_registration_endpoint` server metadata that is defined in OpenID Connect
     * Federation 1.0.
     */
    federationRegistrationEndpoint?: string | null;
    /**
     * The human-readable name representing the organization that operates this service. This
     * property corresponds to the `organization_name` server metadata that is defined in OpenID
     * Connect Federation 1.0.
     */
    organizationName?: string | null;
    /**
     * The transformed claims predefined by this service in JSON format. This property corresponds
     * to the `transformed_claims_predefined` server metadata.
     */
    predefinedTransformedClaims?: string | null;
    /**
     * flag indicating whether refresh token requests with the same refresh token can be made
     * multiple times in quick succession and they can obtain the same renewed refresh token within
     * the short period.
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
     * attachments_supported&#125; server metadata which was added by the third implementer's draft
     * of OpenID Connect for Identity Assurance 1.0.
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
     * `id_documents_verification_methods_supported` server metadata to
     * `documents_methods_supported`.
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
     * `electronic_records_supported` server metadata which was added by the third implementer's
     * draft of [OpenID Connect for Identity Assurance
     * 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html)
     */
    supportedElectronicRecords?: string[] | null;
    supportedClientRegistrationTypes?: ClientRegistrationType[] | null;
    /**
     * The flag indicating whether to prohibit unidentifiable clients from making token exchange
     * requests.
     */
    tokenExchangeByIdentifiableClientsOnly?: boolean;
    /**
     * The flag indicating whether to prohibit public clients from making token exchange requests.
     */
    tokenExchangeByConfidentialClientsOnly?: boolean;
    /**
     * The flag indicating whether to prohibit clients that have no explicit permission from making
     * token exchange requests.
     */
    tokenExchangeByPermittedClientsOnly?: boolean;
    /**
     * The flag indicating whether to reject token exchange requests which use encrypted JWTs as
     * input tokens.
     */
    tokenExchangeEncryptedJwtRejected?: boolean;
    /**
     * The flag indicating whether to reject token exchange requests which use unsigned JWTs as
     * input tokens.
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
     * `documents_check_methods_supported` server metadata which was added by the fourth
     * implementer's draft of OpenID Connect for Identity Assurance 1.0.
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
    /**
     * The JWK Set document containing private keys that are used to sign verifiable credentials.
     */
    credentialJwks?: string | null;
    /**
     * FAPI modes for this service.
     *
     * When the value of this property is not `null`, Authlete always processes requests to this
     * service based on the specified FAPI modes if the FAPI feature is enabled in Authlete and the
     * FAPI profile is supported by this service.
     *
     * For instance, when this property is set to an array containing `FAPI1_ADVANCED` only,
     * Authlete always processes requests to this service based on "Financial-grade API Security
     * Profile 1.0 - Part 2: Advanced" if the FAPI feature is enabled in Authlete and the FAPI
     * profile is supported by this service.
     */
    fapiModes?: FapiMode[] | null;
    /** The default duration of verifiable credentials in seconds. */
    credentialDuration?: number;
    credentialIssuerMetadata?: CredentialIssuerMetadata | null;
    /** The type of the `aud` claim in ID tokens. */
    idTokenAudType?: string | null;
    /**
     * Flag that enables the [OpenID Connect Native SSO for Mobile Apps
     * 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) specification (“Native
     * SSO”). When this property is **not** `true`, Native SSO specific parameters are ignored or
     * treated as errors. For example:
     *
     * * The `device_sso` scope has no special meaning (Authlete does not embed the `sid` claim in
     *   ID tokens).
     * * The `urn:openid:params:token-type:device-secret` token type is treated as unknown and
     *   results in an error.
     *
     * When set to `true`, the server metadata advertises `"native_sso_supported": true`. See
     * [OpenID Connect Discovery
     * 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) and [RFC
     * 8414 §2](https://www.rfc-editor.org/rfc/rfc8414.html#section-2) for background. Native SSO is
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
     * Choose the value that matches the OID4VCI behaviour your service should expose. See the
     * OID4VCI documentation for details.
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
     * Enables the allowlist for CIMD. When `true`, only CIMD endpoints that are on the allowlist
     * are used.
     */
    cimdAllowlistEnabled?: boolean;
    /**
     * The allowlist of CIMD endpoints (hosts/URIs) that may be used when retrieving client metadata
     * via Client ID Metadata Documents.
     */
    cimdAllowlist?: string[] | null;
    /**
     * If `true`, CIMD retrieval is always attempted for clients, regardless of other conditions.
     */
    cimdAlwaysRetrieved?: boolean;
    /**
     * Allows CIMD retrieval over plain HTTP. When `false`, only HTTPS CIMD endpoints are allowed.
     */
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
     * The flag indicating whether the attester roots for Client Attestation JWT x5c chain
     * validation are enabled.
     */
    clientAttesterRootsEnabled?: boolean;
    /**
     * The flag indicating whether only client authentication validated via attester roots is
     * accepted.
     */
    clientAttesterRootsOnly?: boolean;
    /**
     * The flag indicating whether the attester roots for Key Attestation JWT x5c chain validation
     * are enabled.
     */
    keyAttesterRootsEnabled?: boolean;
    /**
     * The flag indicating whether only key attestation validated via attester roots is accepted.
     */
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

  export class ServiceUpdateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServiceUpdateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
