<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceManagement — operations

Accessor: `client.serviceManagement` · Source: `src/resources/service-management.ts` · 8 operations · Request and error types: namespace `ServiceManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### serviceConfigurationApi

- **Signature**: `serviceConfigurationApi(request: ServiceManagement.ServiceConfigurationApiRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ServiceManagement.ServiceConfigurationApiError>`
- **Wire**: `GET /api/{serviceId}/service/configuration`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ServiceManagement.ServiceConfigurationApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceManagement.ServiceConfigurationApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `pretty` | `query` | `boolean` | no |
| `patch` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result` | `resultSchema` | `src/models/result.ts` |

### serviceCreateApi

- **Signature**: `serviceCreateApi(request: ServiceManagement.ServiceCreateApiRequest, options?: RequestOptions): ApiPromise<Service, ServiceManagement.ServiceCreateApiError>`
- **Wire**: `POST /api/service/create`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Service`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ServiceManagement.ServiceCreateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceManagement.ServiceCreateApiRequest` (198):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `number` | `form` | — | `number` | no |
| `serviceName` | `form` | — | `string` | no |
| `issuer` | `form` | — | `string` | no |
| `description` | `form` | — | `string` | no |
| `apiKey` | `form` | — | `number` | no |
| `apiSecret` | `form` | — | `string` | no |
| `tokenBatchNotificationEndpoint` | `form` | — | `string` | no |
| `clientAssertionAudRestrictedToIssuer` | `form` | — | `boolean` | no |
| `serviceOwnerNumber` | `form` | — | `number` | no |
| `clientsPerDeveloper` | `form` | — | `number` | no |
| `developerAuthenticationCallbackEndpoint` | `form` | — | `string` | no |
| `developerAuthenticationCallbackApiKey` | `form` | — | `string` | no |
| `developerAuthenticationCallbackApiSecret` | `form` | — | `string` | no |
| `supportedSnses` | `form` | — | `Sns[]` | no |
| `snsCredentials` | `form` | — | `SnsCredentials[]` | no |
| `supportedDeveloperSnses` | `form` | — | `Sns[]` | no |
| `developerSnsCredentials` | `form` | — | `SnsCredentials[]` | no |
| `clientIdAliasEnabled` | `form` | — | `boolean` | no |
| `metadata` | `form` | — | `Pair[]` | no |
| `createdAt` | `form` | — | `number` | no |
| `modifiedAt` | `form` | — | `number` | no |
| `authenticationCallbackEndpoint` | `form` | — | `string` | no |
| `authenticationCallbackApiKey` | `form` | — | `string` | no |
| `authenticationCallbackApiSecret` | `form` | — | `string` | no |
| `supportedAcrs` | `form` | — | `string[]` | no |
| `supportedGrantTypes` | `form` | — | `GrantType[]` | no |
| `supportedResponseTypes` | `form` | — | `ResponseType[]` | no |
| `supportedAuthorizationDetailsTypes` | `form` | — | `string[]` | no |
| `supportedServiceProfiles` | `form` | — | `ServiceProfile[]` | no |
| `errorDescriptionOmitted` | `form` | — | `boolean` | no |
| `errorUriOmitted` | `form` | — | `boolean` | no |
| `authorizationEndpoint` | `form` | — | `string` | no |
| `directAuthorizationEndpointEnabled` | `form` | — | `boolean` | no |
| `supportedUiLocales` | `form` | — | `string[]` | no |
| `supportedDisplays` | `form` | — | `Display[]` | no |
| `pkceRequired` | `form` | — | `boolean` | no |
| `pkceS256Required` | `form` | — | `boolean` | no |
| `authorizationResponseDuration` | `form` | — | `number` | no |
| `authorizationCodeDuration` | `form` | — | `number` | no |
| `tokenEndpoint` | `form` | — | `string` | no |
| `directTokenEndpointEnabled` | `form` | — | `boolean` | no |
| `supportedTokenAuthMethods` | `form` | — | `ClientAuthMethod[]` | no |
| `missingClientIdAllowed` | `form` | — | `boolean` | no |
| `revocationEndpoint` | `form` | — | `string` | no |
| `directRevocationEndpointEnabled` | `form` | — | `boolean` | no |
| `supportedRevocationAuthMethods` | `form` | — | `ClientAuthMethod[]` | no |
| `introspectionEndpoint` | `form` | — | `string` | no |
| `directIntrospectionEndpointEnabled` | `form` | — | `boolean` | no |
| `supportedIntrospectionAuthMethods` | `form` | — | `ClientAuthMethod[]` | no |
| `pushedAuthReqEndpoint` | `form` | — | `string` | no |
| `pushedAuthReqDuration` | `form` | — | `number` | no |
| `parRequired` | `form` | — | `boolean` | no |
| `requestObjectRequired` | `form` | — | `boolean` | no |
| `traditionalRequestObjectProcessingApplied` | `form` | — | `boolean` | no |
| `mutualTlsValidatePkiCertChain` | `form` | — | `boolean` | no |
| `trustedRootCertificates` | `form` | — | `string[]` | no |
| `mtlsEndpointAliases` | `form` | — | `NamedUri[]` | no |
| `accessTokenType` | `form` | — | `string` | no |
| `tlsClientCertificateBoundAccessTokens` | `form` | — | `boolean` | no |
| `accessTokenDuration` | `form` | — | `number` | no |
| `singleAccessTokenPerSubject` | `form` | — | `boolean` | no |
| `accessTokenSignAlg` | `form` | — | `JwsAlg` | no |
| `accessTokenSignatureKeyId` | `form` | — | `string` | no |
| `refreshTokenDuration` | `form` | — | `number` | no |
| `refreshTokenDurationKept` | `form` | — | `boolean` | no |
| `refreshTokenDurationReset` | `form` | — | `boolean` | no |
| `refreshTokenKept` | `form` | — | `boolean` | no |
| `supportedScopes` | `form` | — | `Scope[]` | no |
| `scopeRequired` | `form` | — | `boolean` | no |
| `idTokenDuration` | `form` | — | `number` | no |
| `allowableClockSkew` | `form` | — | `number` | no |
| `supportedClaimTypes` | `form` | — | `ClaimType[]` | no |
| `supportedClaimLocales` | `form` | — | `string[]` | no |
| `supportedClaims` | `form` | — | `string[]` | no |
| `claimShortcutRestrictive` | `form` | — | `boolean` | no |
| `jwksUri` | `form` | — | `string` | no |
| `directJwksEndpointEnabled` | `form` | — | `boolean` | no |
| `jwks` | `form` | — | `string` | no |
| `idTokenSignatureKeyId` | `form` | — | `string` | no |
| `userInfoSignatureKeyId` | `form` | — | `string` | no |
| `authorizationSignatureKeyId` | `form` | — | `string` | no |
| `userInfoEndpoint` | `form` | — | `string` | no |
| `directUserInfoEndpointEnabled` | `form` | — | `boolean` | no |
| `dynamicRegistrationSupported` | `form` | — | `boolean` | no |
| `registrationEndpoint` | `form` | — | `string` | no |
| `registrationManagementEndpoint` | `form` | — | `string` | no |
| `policyUri` | `form` | — | `string` | no |
| `tosUri` | `form` | — | `string` | no |
| `serviceDocumentation` | `form` | — | `string` | no |
| `backchannelAuthenticationEndpoint` | `form` | — | `string` | no |
| `supportedBackchannelTokenDeliveryModes` | `form` | — | `DeliveryMode[]` | no |
| `backchannelAuthReqIdDuration` | `form` | — | `number` | no |
| `backchannelPollingInterval` | `form` | — | `number` | no |
| `backchannelUserCodeParameterSupported` | `form` | — | `boolean` | no |
| `backchannelBindingMessageRequiredInFapi` | `form` | — | `boolean` | no |
| `deviceAuthorizationEndpoint` | `form` | — | `string` | no |
| `deviceVerificationUri` | `form` | — | `string` | no |
| `deviceVerificationUriComplete` | `form` | — | `string` | no |
| `deviceFlowCodeDuration` | `form` | — | `number` | no |
| `deviceFlowPollingInterval` | `form` | — | `number` | no |
| `userCodeCharset` | `form` | — | `UserCodeCharset` | no |
| `userCodeLength` | `form` | — | `number` | no |
| `supportedTrustFrameworks` | `form` | — | `string[]` | no |
| `supportedEvidence` | `form` | — | `string[]` | no |
| `supportedIdentityDocuments` | `form` | — | `string[]` | no |
| `supportedVerificationMethods` | `form` | — | `string[]` | no |
| `supportedVerifiedClaims` | `form` | — | `string[]` | no |
| `verifiedClaimsValidationSchemaSet` | `form` | — | `VerifiedClaimsValidationSchema` | no |
| `attributes` | `form` | — | `Pair[]` | no |
| `nbfOptional` | `form` | — | `boolean` | no |
| `issSuppressed` | `form` | — | `boolean` | no |
| `supportedCustomClientMetadata` | `form` | — | `string[]` | no |
| `tokenExpirationLinked` | `form` | — | `boolean` | no |
| `frontChannelRequestObjectEncryptionRequired` | `form` | — | `boolean` | no |
| `requestObjectEncryptionAlgMatchRequired` | `form` | — | `boolean` | no |
| `requestObjectEncryptionEncMatchRequired` | `form` | — | `boolean` | no |
| `hsmEnabled` | `form` | — | `boolean` | no |
| `hsks` | `form` | — | `Hsk[]` | no |
| `grantManagementEndpoint` | `form` | — | `string` | no |
| `grantManagementActionRequired` | `form` | — | `boolean` | no |
| `unauthorizedOnClientConfigSupported` | `form` | — | `boolean` | no |
| `dcrScopeUsedAsRequestable` | `form` | — | `boolean` | no |
| `endSessionEndpoint` | `form` | — | `string` | no |
| `challengeEndpoint` | `form` | — | `string` | no |
| `loopbackRedirectionUriVariable` | `form` | — | `boolean` | no |
| `requestObjectAudienceChecked` | `form` | — | `boolean` | no |
| `accessTokenForExternalAttachmentEmbedded` | `form` | — | `boolean` | no |
| `authorityHints` | `form` | — | `string[]` | no |
| `federationEnabled` | `form` | — | `boolean` | no |
| `federationJwks` | `form` | — | `string` | no |
| `federationSignatureKeyId` | `form` | — | `string` | no |
| `federationConfigurationDuration` | `form` | — | `number` | no |
| `federationRegistrationEndpoint` | `form` | — | `string` | no |
| `organizationName` | `form` | — | `string` | no |
| `predefinedTransformedClaims` | `form` | — | `string` | no |
| `refreshTokenIdempotent` | `form` | — | `boolean` | no |
| `signedJwksUri` | `form` | — | `string` | no |
| `supportedAttachments` | `form` | — | `AttachmentType[]` | no |
| `supportedDigestAlgorithms` | `form` | — | `string[]` | no |
| `supportedDocuments` | `form` | — | `string[]` | no |
| `supportedDocumentsMethods` | `form` | — | `string[]` | no |
| `supportedDocumentsValidationMethods` | `form` | — | `string[]` | no |
| `supportedDocumentsVerificationMethods` | `form` | — | `string[]` | no |
| `supportedElectronicRecords` | `form` | — | `string[]` | no |
| `supportedClientRegistrationTypes` | `form` | — | `ClientRegistrationType[]` | no |
| `tokenExchangeByIdentifiableClientsOnly` | `form` | — | `boolean` | no |
| `tokenExchangeByConfidentialClientsOnly` | `form` | — | `boolean` | no |
| `tokenExchangeByPermittedClientsOnly` | `form` | — | `boolean` | no |
| `tokenExchangeEncryptedJwtRejected` | `form` | — | `boolean` | no |
| `tokenExchangeUnsignedJwtRejected` | `form` | — | `boolean` | no |
| `jwtGrantByIdentifiableClientsOnly` | `form` | — | `boolean` | no |
| `jwtGrantEncryptedJwtRejected` | `form` | — | `boolean` | no |
| `jwtGrantUnsignedJwtRejected` | `form` | — | `boolean` | no |
| `dcrDuplicateSoftwareIdBlocked` | `form` | — | `boolean` | no |
| `trustAnchors` | `form` | — | `TrustAnchor[]` | no |
| `openidDroppedOnRefreshWithoutOfflineAccess` | `form` | — | `boolean` | no |
| `idTokenDroppedOnIssueWithoutOpenid` | `form` | — | `boolean` | no |
| `supportedDocumentsCheckMethods` | `form` | — | `string[]` | no |
| `rsResponseSigned` | `form` | — | `boolean` | no |
| `cnonceDuration` | `form` | — | `number` | no |
| `dpopNonceRequired` | `form` | — | `boolean` | no |
| `verifiableCredentialsEnabled` | `form` | — | `boolean` | no |
| `credentialJwksUri` | `form` | — | `string` | no |
| `credentialOfferDuration` | `form` | — | `number` | no |
| `dpopNonceDuration` | `form` | — | `number` | no |
| `preAuthorizedGrantAnonymousAccessSupported` | `form` | — | `boolean` | no |
| `credentialTransactionDuration` | `form` | — | `number` | no |
| `introspectionSignatureKeyId` | `form` | — | `string` | no |
| `resourceSignatureKeyId` | `form` | — | `string` | no |
| `userPinLength` | `form` | — | `number` | no |
| `supportedPromptValues` | `form` | — | `Prompt[]` | no |
| `idTokenReissuable` | `form` | — | `boolean` | no |
| `credentialJwks` | `form` | — | `string` | no |
| `fapiModes` | `form` | — | `FapiMode[]` | no |
| `credentialDuration` | `form` | — | `number` | no |
| `credentialIssuerMetadata` | `form` | — | `CredentialIssuerMetadata` | no |
| `idTokenAudType` | `form` | — | `string` | no |
| `nativeSsoSupported` | `form` | — | `boolean` | no |
| `oid4VciVersion` | `form` | `oid4vciVersion` | `string` | no |
| `cimdMetadataPolicyEnabled` | `form` | — | `boolean` | no |
| `clientIdMetadataDocumentSupported` | `form` | — | `boolean` | no |
| `cimdAllowlistEnabled` | `form` | — | `boolean` | no |
| `cimdAllowlist` | `form` | — | `string[]` | no |
| `cimdAlwaysRetrieved` | `form` | — | `boolean` | no |
| `cimdHttpPermitted` | `form` | — | `boolean` | no |
| `cimdQueryPermitted` | `form` | — | `boolean` | no |
| `cimdMetadataPolicy` | `form` | — | `string` | no |
| `httpAliasProhibited` | `form` | — | `boolean` | no |
| `attestationChallengeTimeWindow` | `form` | — | `number` | no |
| `clientAttesterRootsEnabled` | `form` | — | `boolean` | no |
| `clientAttesterRootsOnly` | `form` | — | `boolean` | no |
| `keyAttesterRootsEnabled` | `form` | — | `boolean` | no |
| `keyAttesterRootsOnly` | `form` | — | `boolean` | no |
| `clientAttesterRoots` | `form` | — | `string[]` | no |
| `keyAttesterRoots` | `form` | — | `string[]` | no |
| `backchannelLogoutSupported` | `form` | — | `boolean` | no |
| `backchannelLogoutSessionSupported` | `form` | — | `boolean` | no |
| `haipVersion` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sns` | `snsSchema` | `src/models/sns.ts` |
| `SnsCredentials` | `snsCredentialsSchema` | `src/models/sns-credentials.ts` |
| `Pair` | `pairSchema` | `src/models/pair.ts` |
| `GrantType` | `grantTypeSchema` | `src/models/grant-type.ts` |
| `ResponseType` | `responseTypeSchema` | `src/models/response-type.ts` |
| `ServiceProfile` | `serviceProfileSchema` | `src/models/service-profile.ts` |
| `Display` | `displaySchema` | `src/models/display.ts` |
| `ClientAuthMethod` | `clientAuthMethodSchema` | `src/models/client-auth-method.ts` |
| `NamedUri` | `namedUriSchema` | `src/models/named-uri.ts` |
| `JwsAlg` | `jwsAlgSchema` | `src/models/jws-alg.ts` |
| `Scope` | `scopeSchema` | `src/models/scope.ts` |
| `ClaimType` | `claimTypeSchema` | `src/models/claim-type.ts` |
| `DeliveryMode` | `deliveryModeSchema` | `src/models/delivery-mode.ts` |
| `UserCodeCharset` | `userCodeCharsetSchema` | `src/models/user-code-charset.ts` |
| `VerifiedClaimsValidationSchema` | `verifiedClaimsValidationSchemaSchema` | `src/models/verified-claims-validation-schema.ts` |
| `Hsk` | `hskSchema` | `src/models/hsk.ts` |
| `AttachmentType` | `attachmentTypeSchema` | `src/models/attachment-type.ts` |
| `ClientRegistrationType` | `clientRegistrationTypeSchema` | `src/models/client-registration-type.ts` |
| `TrustAnchor` | `trustAnchorSchema` | `src/models/trust-anchor.ts` |
| `Prompt` | `promptSchema` | `src/models/prompt.ts` |
| `FapiMode` | `fapiModeSchema` | `src/models/fapi-mode.ts` |
| `CredentialIssuerMetadata` | `credentialIssuerMetadataSchema` | `src/models/credential-issuer-metadata.ts` |
| `Service` | `serviceSchema` | `src/models/service.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### serviceCreateIdpApi

- **Signature**: `serviceCreateIdpApi(request: ServiceManagement.ServiceCreateIdpApiRequest, options?: RequestOptions): ApiPromise<Service, ServiceManagement.ServiceCreateIdpApiError>`
- **Wire**: `POST /api/service`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Service`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ServiceManagement.ServiceCreateIdpApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"idpError"` [400] `IdpError` · `"idpError2"` [401] `IdpError` · `"idpError3"` [403] `IdpError` · `"idpError4"` [500] `IdpError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceManagement.ServiceCreateIdpApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ServiceCreateIdpRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceCreateIdpRequest` | `serviceCreateIdpRequestSchema` | `src/models/service-create-idp-request.ts` |
| `Service` | `serviceSchema` | `src/models/service.ts` |
| `IdpError` | `idpErrorSchema` | `src/models/idp-error.ts` |

### serviceDeleteApi

- **Signature**: `serviceDeleteApi(request: ServiceManagement.ServiceDeleteApiRequest, options?: RequestOptions): ApiPromise<undefined, ServiceManagement.ServiceDeleteApiError>`
- **Wire**: `DELETE /api/{serviceId}/service/delete`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ServiceManagement.ServiceDeleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceManagement.ServiceDeleteApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result` | `resultSchema` | `src/models/result.ts` |

### serviceGetApi

- **Signature**: `serviceGetApi(request: ServiceManagement.ServiceGetApiRequest, options?: RequestOptions): ApiPromise<Service, ServiceManagement.ServiceGetApiError>`
- **Wire**: `GET /api/{serviceId}/service/get`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Service`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ServiceManagement.ServiceGetApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceManagement.ServiceGetApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Service` | `serviceSchema` | `src/models/service.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### serviceGetListApi

- **Signature**: `serviceGetListApi(request: ServiceManagement.ServiceGetListApiRequest, options?: RequestOptions): ApiPromise<ServiceGetListResponse, ServiceManagement.ServiceGetListApiError>`
- **Wire**: `GET /api/service/get/list`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceGetListResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ServiceManagement.ServiceGetListApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceManagement.ServiceGetListApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `start` | `query` | `number` | no |
| `end` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceGetListResponse` | `serviceGetListResponseSchema` | `src/models/service-get-list-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### serviceRemoveIdpApi

- **Signature**: `serviceRemoveIdpApi(request: ServiceManagement.ServiceRemoveIdpApiRequest, options?: RequestOptions): ApiPromise<undefined, ServiceManagement.ServiceRemoveIdpApiError>`
- **Wire**: `POST /api/service/remove`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ServiceManagement.ServiceRemoveIdpApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"idpError"` [400] `IdpError` · `"idpError2"` [401] `IdpError` · `"idpError3"` [403] `IdpError` · `"idpError4"` [500] `IdpError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceManagement.ServiceRemoveIdpApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ServiceRemoveIdpRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceRemoveIdpRequest` | `serviceRemoveIdpRequestSchema` | `src/models/service-remove-idp-request.ts` |
| `IdpError` | `idpErrorSchema` | `src/models/idp-error.ts` |

### serviceUpdateApi

- **Signature**: `serviceUpdateApi(request: ServiceManagement.ServiceUpdateApiRequest, options?: RequestOptions): ApiPromise<Service, ServiceManagement.ServiceUpdateApiError>`
- **Wire**: `POST /api/{serviceId}/service/update`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Service`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `ServiceManagement.ServiceUpdateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServiceManagement.ServiceUpdateApiRequest` (199):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceId` | `path` | — | `string` | yes |
| `number` | `form` | — | `number` | no |
| `serviceName` | `form` | — | `string` | no |
| `issuer` | `form` | — | `string` | no |
| `description` | `form` | — | `string` | no |
| `apiKey` | `form` | — | `number` | no |
| `apiSecret` | `form` | — | `string` | no |
| `tokenBatchNotificationEndpoint` | `form` | — | `string` | no |
| `clientAssertionAudRestrictedToIssuer` | `form` | — | `boolean` | no |
| `serviceOwnerNumber` | `form` | — | `number` | no |
| `clientsPerDeveloper` | `form` | — | `number` | no |
| `developerAuthenticationCallbackEndpoint` | `form` | — | `string` | no |
| `developerAuthenticationCallbackApiKey` | `form` | — | `string` | no |
| `developerAuthenticationCallbackApiSecret` | `form` | — | `string` | no |
| `supportedSnses` | `form` | — | `Sns[]` | no |
| `snsCredentials` | `form` | — | `SnsCredentials[]` | no |
| `supportedDeveloperSnses` | `form` | — | `Sns[]` | no |
| `developerSnsCredentials` | `form` | — | `SnsCredentials[]` | no |
| `clientIdAliasEnabled` | `form` | — | `boolean` | no |
| `metadata` | `form` | — | `Pair[]` | no |
| `createdAt` | `form` | — | `number` | no |
| `modifiedAt` | `form` | — | `number` | no |
| `authenticationCallbackEndpoint` | `form` | — | `string` | no |
| `authenticationCallbackApiKey` | `form` | — | `string` | no |
| `authenticationCallbackApiSecret` | `form` | — | `string` | no |
| `supportedAcrs` | `form` | — | `string[]` | no |
| `supportedGrantTypes` | `form` | — | `GrantType[]` | no |
| `supportedResponseTypes` | `form` | — | `ResponseType[]` | no |
| `supportedAuthorizationDetailsTypes` | `form` | — | `string[]` | no |
| `supportedServiceProfiles` | `form` | — | `ServiceProfile[]` | no |
| `errorDescriptionOmitted` | `form` | — | `boolean` | no |
| `errorUriOmitted` | `form` | — | `boolean` | no |
| `authorizationEndpoint` | `form` | — | `string` | no |
| `directAuthorizationEndpointEnabled` | `form` | — | `boolean` | no |
| `supportedUiLocales` | `form` | — | `string[]` | no |
| `supportedDisplays` | `form` | — | `Display[]` | no |
| `pkceRequired` | `form` | — | `boolean` | no |
| `pkceS256Required` | `form` | — | `boolean` | no |
| `authorizationResponseDuration` | `form` | — | `number` | no |
| `authorizationCodeDuration` | `form` | — | `number` | no |
| `tokenEndpoint` | `form` | — | `string` | no |
| `directTokenEndpointEnabled` | `form` | — | `boolean` | no |
| `supportedTokenAuthMethods` | `form` | — | `ClientAuthMethod[]` | no |
| `missingClientIdAllowed` | `form` | — | `boolean` | no |
| `revocationEndpoint` | `form` | — | `string` | no |
| `directRevocationEndpointEnabled` | `form` | — | `boolean` | no |
| `supportedRevocationAuthMethods` | `form` | — | `ClientAuthMethod[]` | no |
| `introspectionEndpoint` | `form` | — | `string` | no |
| `directIntrospectionEndpointEnabled` | `form` | — | `boolean` | no |
| `supportedIntrospectionAuthMethods` | `form` | — | `ClientAuthMethod[]` | no |
| `pushedAuthReqEndpoint` | `form` | — | `string` | no |
| `pushedAuthReqDuration` | `form` | — | `number` | no |
| `parRequired` | `form` | — | `boolean` | no |
| `requestObjectRequired` | `form` | — | `boolean` | no |
| `traditionalRequestObjectProcessingApplied` | `form` | — | `boolean` | no |
| `mutualTlsValidatePkiCertChain` | `form` | — | `boolean` | no |
| `trustedRootCertificates` | `form` | — | `string[]` | no |
| `mtlsEndpointAliases` | `form` | — | `NamedUri[]` | no |
| `accessTokenType` | `form` | — | `string` | no |
| `tlsClientCertificateBoundAccessTokens` | `form` | — | `boolean` | no |
| `accessTokenDuration` | `form` | — | `number` | no |
| `singleAccessTokenPerSubject` | `form` | — | `boolean` | no |
| `accessTokenSignAlg` | `form` | — | `JwsAlg` | no |
| `accessTokenSignatureKeyId` | `form` | — | `string` | no |
| `refreshTokenDuration` | `form` | — | `number` | no |
| `refreshTokenDurationKept` | `form` | — | `boolean` | no |
| `refreshTokenDurationReset` | `form` | — | `boolean` | no |
| `refreshTokenKept` | `form` | — | `boolean` | no |
| `supportedScopes` | `form` | — | `Scope[]` | no |
| `scopeRequired` | `form` | — | `boolean` | no |
| `idTokenDuration` | `form` | — | `number` | no |
| `allowableClockSkew` | `form` | — | `number` | no |
| `supportedClaimTypes` | `form` | — | `ClaimType[]` | no |
| `supportedClaimLocales` | `form` | — | `string[]` | no |
| `supportedClaims` | `form` | — | `string[]` | no |
| `claimShortcutRestrictive` | `form` | — | `boolean` | no |
| `jwksUri` | `form` | — | `string` | no |
| `directJwksEndpointEnabled` | `form` | — | `boolean` | no |
| `jwks` | `form` | — | `string` | no |
| `idTokenSignatureKeyId` | `form` | — | `string` | no |
| `userInfoSignatureKeyId` | `form` | — | `string` | no |
| `authorizationSignatureKeyId` | `form` | — | `string` | no |
| `userInfoEndpoint` | `form` | — | `string` | no |
| `directUserInfoEndpointEnabled` | `form` | — | `boolean` | no |
| `dynamicRegistrationSupported` | `form` | — | `boolean` | no |
| `registrationEndpoint` | `form` | — | `string` | no |
| `registrationManagementEndpoint` | `form` | — | `string` | no |
| `policyUri` | `form` | — | `string` | no |
| `tosUri` | `form` | — | `string` | no |
| `serviceDocumentation` | `form` | — | `string` | no |
| `backchannelAuthenticationEndpoint` | `form` | — | `string` | no |
| `supportedBackchannelTokenDeliveryModes` | `form` | — | `DeliveryMode[]` | no |
| `backchannelAuthReqIdDuration` | `form` | — | `number` | no |
| `backchannelPollingInterval` | `form` | — | `number` | no |
| `backchannelUserCodeParameterSupported` | `form` | — | `boolean` | no |
| `backchannelBindingMessageRequiredInFapi` | `form` | — | `boolean` | no |
| `deviceAuthorizationEndpoint` | `form` | — | `string` | no |
| `deviceVerificationUri` | `form` | — | `string` | no |
| `deviceVerificationUriComplete` | `form` | — | `string` | no |
| `deviceFlowCodeDuration` | `form` | — | `number` | no |
| `deviceFlowPollingInterval` | `form` | — | `number` | no |
| `userCodeCharset` | `form` | — | `UserCodeCharset` | no |
| `userCodeLength` | `form` | — | `number` | no |
| `supportedTrustFrameworks` | `form` | — | `string[]` | no |
| `supportedEvidence` | `form` | — | `string[]` | no |
| `supportedIdentityDocuments` | `form` | — | `string[]` | no |
| `supportedVerificationMethods` | `form` | — | `string[]` | no |
| `supportedVerifiedClaims` | `form` | — | `string[]` | no |
| `verifiedClaimsValidationSchemaSet` | `form` | — | `VerifiedClaimsValidationSchema` | no |
| `attributes` | `form` | — | `Pair[]` | no |
| `nbfOptional` | `form` | — | `boolean` | no |
| `issSuppressed` | `form` | — | `boolean` | no |
| `supportedCustomClientMetadata` | `form` | — | `string[]` | no |
| `tokenExpirationLinked` | `form` | — | `boolean` | no |
| `frontChannelRequestObjectEncryptionRequired` | `form` | — | `boolean` | no |
| `requestObjectEncryptionAlgMatchRequired` | `form` | — | `boolean` | no |
| `requestObjectEncryptionEncMatchRequired` | `form` | — | `boolean` | no |
| `hsmEnabled` | `form` | — | `boolean` | no |
| `hsks` | `form` | — | `Hsk[]` | no |
| `grantManagementEndpoint` | `form` | — | `string` | no |
| `grantManagementActionRequired` | `form` | — | `boolean` | no |
| `unauthorizedOnClientConfigSupported` | `form` | — | `boolean` | no |
| `dcrScopeUsedAsRequestable` | `form` | — | `boolean` | no |
| `endSessionEndpoint` | `form` | — | `string` | no |
| `challengeEndpoint` | `form` | — | `string` | no |
| `loopbackRedirectionUriVariable` | `form` | — | `boolean` | no |
| `requestObjectAudienceChecked` | `form` | — | `boolean` | no |
| `accessTokenForExternalAttachmentEmbedded` | `form` | — | `boolean` | no |
| `authorityHints` | `form` | — | `string[]` | no |
| `federationEnabled` | `form` | — | `boolean` | no |
| `federationJwks` | `form` | — | `string` | no |
| `federationSignatureKeyId` | `form` | — | `string` | no |
| `federationConfigurationDuration` | `form` | — | `number` | no |
| `federationRegistrationEndpoint` | `form` | — | `string` | no |
| `organizationName` | `form` | — | `string` | no |
| `predefinedTransformedClaims` | `form` | — | `string` | no |
| `refreshTokenIdempotent` | `form` | — | `boolean` | no |
| `signedJwksUri` | `form` | — | `string` | no |
| `supportedAttachments` | `form` | — | `AttachmentType[]` | no |
| `supportedDigestAlgorithms` | `form` | — | `string[]` | no |
| `supportedDocuments` | `form` | — | `string[]` | no |
| `supportedDocumentsMethods` | `form` | — | `string[]` | no |
| `supportedDocumentsValidationMethods` | `form` | — | `string[]` | no |
| `supportedDocumentsVerificationMethods` | `form` | — | `string[]` | no |
| `supportedElectronicRecords` | `form` | — | `string[]` | no |
| `supportedClientRegistrationTypes` | `form` | — | `ClientRegistrationType[]` | no |
| `tokenExchangeByIdentifiableClientsOnly` | `form` | — | `boolean` | no |
| `tokenExchangeByConfidentialClientsOnly` | `form` | — | `boolean` | no |
| `tokenExchangeByPermittedClientsOnly` | `form` | — | `boolean` | no |
| `tokenExchangeEncryptedJwtRejected` | `form` | — | `boolean` | no |
| `tokenExchangeUnsignedJwtRejected` | `form` | — | `boolean` | no |
| `jwtGrantByIdentifiableClientsOnly` | `form` | — | `boolean` | no |
| `jwtGrantEncryptedJwtRejected` | `form` | — | `boolean` | no |
| `jwtGrantUnsignedJwtRejected` | `form` | — | `boolean` | no |
| `dcrDuplicateSoftwareIdBlocked` | `form` | — | `boolean` | no |
| `trustAnchors` | `form` | — | `TrustAnchor[]` | no |
| `openidDroppedOnRefreshWithoutOfflineAccess` | `form` | — | `boolean` | no |
| `idTokenDroppedOnIssueWithoutOpenid` | `form` | — | `boolean` | no |
| `supportedDocumentsCheckMethods` | `form` | — | `string[]` | no |
| `rsResponseSigned` | `form` | — | `boolean` | no |
| `cnonceDuration` | `form` | — | `number` | no |
| `dpopNonceRequired` | `form` | — | `boolean` | no |
| `verifiableCredentialsEnabled` | `form` | — | `boolean` | no |
| `credentialJwksUri` | `form` | — | `string` | no |
| `credentialOfferDuration` | `form` | — | `number` | no |
| `dpopNonceDuration` | `form` | — | `number` | no |
| `preAuthorizedGrantAnonymousAccessSupported` | `form` | — | `boolean` | no |
| `credentialTransactionDuration` | `form` | — | `number` | no |
| `introspectionSignatureKeyId` | `form` | — | `string` | no |
| `resourceSignatureKeyId` | `form` | — | `string` | no |
| `userPinLength` | `form` | — | `number` | no |
| `supportedPromptValues` | `form` | — | `Prompt[]` | no |
| `idTokenReissuable` | `form` | — | `boolean` | no |
| `credentialJwks` | `form` | — | `string` | no |
| `fapiModes` | `form` | — | `FapiMode[]` | no |
| `credentialDuration` | `form` | — | `number` | no |
| `credentialIssuerMetadata` | `form` | — | `CredentialIssuerMetadata` | no |
| `idTokenAudType` | `form` | — | `string` | no |
| `nativeSsoSupported` | `form` | — | `boolean` | no |
| `oid4VciVersion` | `form` | `oid4vciVersion` | `string` | no |
| `cimdMetadataPolicyEnabled` | `form` | — | `boolean` | no |
| `clientIdMetadataDocumentSupported` | `form` | — | `boolean` | no |
| `cimdAllowlistEnabled` | `form` | — | `boolean` | no |
| `cimdAllowlist` | `form` | — | `string[]` | no |
| `cimdAlwaysRetrieved` | `form` | — | `boolean` | no |
| `cimdHttpPermitted` | `form` | — | `boolean` | no |
| `cimdQueryPermitted` | `form` | — | `boolean` | no |
| `cimdMetadataPolicy` | `form` | — | `string` | no |
| `httpAliasProhibited` | `form` | — | `boolean` | no |
| `attestationChallengeTimeWindow` | `form` | — | `number` | no |
| `clientAttesterRootsEnabled` | `form` | — | `boolean` | no |
| `clientAttesterRootsOnly` | `form` | — | `boolean` | no |
| `keyAttesterRootsEnabled` | `form` | — | `boolean` | no |
| `keyAttesterRootsOnly` | `form` | — | `boolean` | no |
| `clientAttesterRoots` | `form` | — | `string[]` | no |
| `keyAttesterRoots` | `form` | — | `string[]` | no |
| `backchannelLogoutSupported` | `form` | — | `boolean` | no |
| `backchannelLogoutSessionSupported` | `form` | — | `boolean` | no |
| `haipVersion` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sns` | `snsSchema` | `src/models/sns.ts` |
| `SnsCredentials` | `snsCredentialsSchema` | `src/models/sns-credentials.ts` |
| `Pair` | `pairSchema` | `src/models/pair.ts` |
| `GrantType` | `grantTypeSchema` | `src/models/grant-type.ts` |
| `ResponseType` | `responseTypeSchema` | `src/models/response-type.ts` |
| `ServiceProfile` | `serviceProfileSchema` | `src/models/service-profile.ts` |
| `Display` | `displaySchema` | `src/models/display.ts` |
| `ClientAuthMethod` | `clientAuthMethodSchema` | `src/models/client-auth-method.ts` |
| `NamedUri` | `namedUriSchema` | `src/models/named-uri.ts` |
| `JwsAlg` | `jwsAlgSchema` | `src/models/jws-alg.ts` |
| `Scope` | `scopeSchema` | `src/models/scope.ts` |
| `ClaimType` | `claimTypeSchema` | `src/models/claim-type.ts` |
| `DeliveryMode` | `deliveryModeSchema` | `src/models/delivery-mode.ts` |
| `UserCodeCharset` | `userCodeCharsetSchema` | `src/models/user-code-charset.ts` |
| `VerifiedClaimsValidationSchema` | `verifiedClaimsValidationSchemaSchema` | `src/models/verified-claims-validation-schema.ts` |
| `Hsk` | `hskSchema` | `src/models/hsk.ts` |
| `AttachmentType` | `attachmentTypeSchema` | `src/models/attachment-type.ts` |
| `ClientRegistrationType` | `clientRegistrationTypeSchema` | `src/models/client-registration-type.ts` |
| `TrustAnchor` | `trustAnchorSchema` | `src/models/trust-anchor.ts` |
| `Prompt` | `promptSchema` | `src/models/prompt.ts` |
| `FapiMode` | `fapiModeSchema` | `src/models/fapi-mode.ts` |
| `CredentialIssuerMetadata` | `credentialIssuerMetadataSchema` | `src/models/credential-issuer-metadata.ts` |
| `Service` | `serviceSchema` | `src/models/service.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

