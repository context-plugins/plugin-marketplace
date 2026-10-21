# Reference

> Source: [AuthleteApiClient](src/client.ts)

## ServiceManagement

> Source: [ServiceManagement](src/resources/service-management.ts)

<details>
<summary><code>serviceConfigurationApi(request: ServiceManagement.ServiceConfigurationApiRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ServiceManagement.ServiceConfigurationApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gathers configuration information about a service.

This API is supposed to be called from within the implementation of the configuration endpoint of the service where the service that supports OpenID Connect and [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html) must expose its configuration information in a JSON format. Details about the format are described in "[3. OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata)" in OpenID Connect Discovery 1.0.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceManagement.serviceConfigurationApi({
    serviceId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ServiceManagement.ServiceConfigurationApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceManagement.serviceConfigurationApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>pretty?</code> | <code>boolean</code> | This boolean value indicates whether the JSON in the response should be formatted or not. If `true`, the JSON in the response is pretty-formatted. The default value is `false`. |
| <code>patch?</code> | <code>string</code> | Get the JSON Patch [RFC 6902 JavaScript Object Notation (JSON) Patch](https://www.rfc-editor.org/rfc/rfc6902) to be applied. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceManagement.serviceConfigurationApi(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ServiceManagement.ServiceConfigurationApiError](src/resources/service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceManagement.serviceConfigurationApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ServiceManagement.ServiceConfigurationApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceCreateApi(request: ServiceManagement.ServiceCreateApiRequest, options?: RequestOptions): ApiPromise&lt;Service, ServiceManagement.ServiceCreateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new service.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceManagement.serviceCreateApi({
    number: 715948317,
    serviceName: "My Test Service",
    issuer: "https://example.com",
    supportedGrantTypes: [GrantType.AuthorizationCode, GrantType.RefreshToken],
    supportedResponseTypes: [ResponseType.Code],
  });
  // TODO: Handle 'response' of type Service
} catch (err) {
  // TODO: Handle 'err' of type ServiceManagement.ServiceCreateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceManagement.serviceCreateApi({
  number: 715948317,
  serviceName: "My Test Service",
  issuer: "https://example.com",
  supportedGrantTypes: [GrantType.AuthorizationCode, GrantType.RefreshToken],
  supportedResponseTypes: [ResponseType.Code],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Service
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>number?</code> | <code>number</code> | The sequential number of the service. The value of this property is assigned by Authlete. |
| <code>serviceName?</code> | <code>string</code> | The name of this service. |
| <code>issuer?</code> | <code>string</code> | The issuer identifier of the service.<br><br>A URL that starts with  https:// and has no query or fragment component.<br><br>The value of this property is used as `iss` claim in an [ID token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) and `issuer` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>description?</code> | <code>string</code> | The description about the service. |
| <code>apiKey?</code> | <code>number</code> | The service ID used in Authlete API calls. The value of this property is assigned by Authlete. |
| <code>apiSecret?</code> | <code>string</code> | The API secret of this service. This value is assigned by Authlete and is used for service authentication in API calls. |
| <code>tokenBatchNotificationEndpoint?</code> | <code>string</code> | The endpoint for batch token notifications. This endpoint is called when multiple tokens are issued or revoked in a batch operation. |
| <code>clientAssertionAudRestrictedToIssuer?</code> | <code>boolean</code> | The flag indicating whether the audience of client assertion JWTs must match the issuer identifier of this service. |
| <code>serviceOwnerNumber?</code> | <code>number</code> | The number of the organization that owns this service. This value is assigned by Authlete. |
| <code>clientsPerDeveloper?</code> | <code>number</code> | The maximum number of client applications that a developer can have. |
| <code>developerAuthenticationCallbackEndpoint?</code> | <code>string</code> | The endpoint for developer authentication callbacks. This is used when developers log into the developer portal. |
| <code>developerAuthenticationCallbackApiKey?</code> | <code>string</code> | The API key for basic authentication at the developer authentication callback endpoint. |
| <code>developerAuthenticationCallbackApiSecret?</code> | <code>string</code> | The API secret for basic authentication at the developer authentication callback endpoint. |
| <code>supportedSnses?</code> | <code>[Sns](src/models/sns.ts)[]</code> | Social login services (SNS) that this service supports for end-user authentication. |
| <code>snsCredentials?</code> | <code>[SnsCredentials](src/models/sns-credentials.ts)[]</code> | The credentials for social login services (SNS) that are used for end-user authentication. |
| <code>supportedDeveloperSnses?</code> | <code>[Sns](src/models/sns.ts)[]</code> | Social login services (SNS) that this service supports for developer authentication. |
| <code>developerSnsCredentials?</code> | <code>[SnsCredentials](src/models/sns-credentials.ts)[]</code> | The credentials for social login services (SNS) that are used for developer authentication. |
| <code>clientIdAliasEnabled?</code> | <code>boolean</code> | Deprecated. Always `true`. |
| <code>metadata?</code> | <code>[Pair](src/models/pair.ts)[]</code> | The `metadata` of the service. The content of the returned array depends on contexts. The predefined service metadata is listed in the following table.<br><br>  \| Key \| Description \|<br>  \| --- \| --- \|<br>  \| `clientCount` \| The number of client applications which belong to this service.  \| |
| <code>createdAt?</code> | <code>number</code> | The time at which this service was created. The value is represented as milliseconds since the UNIX epoch (`1970-01-01`). |
| <code>modifiedAt?</code> | <code>number</code> | The time at which this service was last modified. The value is represented as milliseconds since the UNIX epoch (1970-01-01). |
| <code>authenticationCallbackEndpoint?</code> | <code>string</code> | A Web API endpoint for user authentication which is to be prepared on the service side.<br><br>The endpoint must be implemented if you do not implement the UI at the authorization endpoint but use the one provided by Authlete.<br><br>The user authentication at the authorization endpoint provided by Authlete is performed by making a `POST` request to this endpoint. |
| <code>authenticationCallbackApiKey?</code> | <code>string</code> | API key for basic authentication at the authentication callback endpoint.<br><br>If the value is not empty, Authlete generates Authorization header for Basic authentication when making a request to the authentication callback endpoint. |
| <code>authenticationCallbackApiSecret?</code> | <code>string</code> | API secret for `basic` authentication at the authentication callback endpoint. |
| <code>supportedAcrs?</code> | <code>string[]</code> | Values of acrs (authentication context class references) that the service supports.<br><br>The value of this property is used as `acr_values_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedGrantTypes?</code> | <code>[GrantType](src/models/grant-type.ts)[]</code> | Values of `grant_type` request parameter that the service supports.<br><br>The value of this property is used as `grant_types_supported property` in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedResponseTypes?</code> | <code>[ResponseType](src/models/response-type.ts)[]</code> | Values of `response_type` request parameter that the service supports. Valid values are listed in Response Type.<br><br>The value of this property is used as `response_types_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedAuthorizationDetailsTypes?</code> | <code>string[]</code> | The supported data types that can be used as values of the type field in `authorization_details`.<br><br>This property corresponds to the `authorization_details_types_supported` metadata. See "OAuth 2.0 Rich Authorization Requests" (RAR) for details. |
| <code>supportedServiceProfiles?</code> | <code>[ServiceProfile](src/models/service-profile.ts)[]</code> | The profiles that this service supports. |
| <code>errorDescriptionOmitted?</code> | <code>boolean</code> | The flag to indicate whether the `error_description` response parameter is omitted.<br><br>According to [RFC 6749](https://tools.ietf.org/html/rfc6749), an authorization server may include the `error_description` response parameter in error responses.<br><br>If `true`, Authlete does not embed the `error_description` response parameter in error responses. |
| <code>errorUriOmitted?</code> | <code>boolean</code> | The flag to indicate whether the `error_uri` response parameter is omitted.<br><br>According to [RFC 6749](https://tools.ietf.org/html/rfc6749), an authorization server may include the `error_uri` response parameter in error responses.<br><br>If `true`, Authlete does not embed the `error_uri` response parameter in error responses. |
| <code>authorizationEndpoint?</code> | <code>string</code> | The authorization endpoint of the service.<br><br>A URL that starts with `https://` and has no fragment component. For example, `https://example.com/auth/authorization`.<br><br>The value of this property is used as `authorization_endpoint` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>directAuthorizationEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct authorization endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>supportedUiLocales?</code> | <code>string[]</code> | UI locales that the service supports.<br><br>Each element is a language tag defined in [RFC 5646](https://tools.ietf.org/html/rfc5646). For example, `en-US` and `ja-JP`.<br><br>The value of this property is used as `ui_locales_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedDisplays?</code> | <code>[Display](src/models/display.ts)[]</code> | Values of `display` request parameter that service supports.<br><br>The value of this property is used as `display_values_supported` property in the Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>pkceRequired?</code> | <code>boolean</code> | The flag to indicate whether the use of Proof Key for Code Exchange (PKCE) is always required for authorization requests by Authorization Code Flow.<br><br>If `true`, `code_challenge` request parameter is always required for authorization requests using Authorization Code Flow.<br><br>See [RFC 7636](https://tools.ietf.org/html/rfc7636) (Proof Key for Code Exchange by OAuth Public Clients) for details about `code_challenge` request parameter. |
| <code>pkceS256Required?</code> | <code>boolean</code> | The flag to indicate whether `S256` is always required as the code challenge method whenever [PKCE (RFC 7636)](https://tools.ietf.org/html/rfc7636) is used.<br><br>If this flag is set to `true`, `code_challenge_method=S256` must be included in the authorization request whenever it includes the `code_challenge` request parameter. Neither omission of the `code_challenge_method` request parameter nor use of plain (`code_challenge_method=plain`) is allowed. |
| <code>authorizationResponseDuration?</code> | <code>number</code> | The duration of authorization response JWTs in seconds.<br><br>[Financial-grade API: JWT Secured Authorization Response Mode for OAuth 2.0 (JARM)](https://openid.net/specs/openid-financial-api-jarm.html) defines new values for the `response_mode` request parameter. They are `query.jwt`, `fragment.jwt`, `form_post.jwt` and `jwt`. If one of them is specified as the response mode, response parameters from the authorization endpoint will be packed into a JWT. This property is used to compute the value of the `exp` claim of the JWT. |
| <code>authorizationCodeDuration?</code> | <code>number</code> | The duration of authorization codes in seconds. |
| <code>tokenEndpoint?</code> | <code>string</code> | The [token endpoint](https://tools.ietf.org/html/rfc6749#section-3.2) of the service.<br><br>A URL that starts with `https://` and has not fragment component. For example, `https://example.com/auth/token`.<br><br>The value of this property is used as `token_endpoint` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>directTokenEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct token endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>supportedTokenAuthMethods?</code> | <code>[ClientAuthMethod](src/models/client-auth-method.ts)[]</code> | Client authentication methods supported by the token endpoint of the service.<br><br>The value of this property is used as `token_endpoint_auth_methods_supports` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>missingClientIdAllowed?</code> | <code>boolean</code> | The flag to indicate token requests from public clients without the `client_id` request parameter are allowed when the client can be guessed from `authorization_code` or `refresh_token`.<br><br>This flag should not be set unless you have special reasons. |
| <code>revocationEndpoint?</code> | <code>string</code> | The [revocation endpoint](https://tools.ietf.org/html/rfc7009) of the service.<br><br>A URL that starts with `https://`. For example, `https://example.com/auth/revocation`. |
| <code>directRevocationEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct revocation endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>supportedRevocationAuthMethods?</code> | <code>[ClientAuthMethod](src/models/client-auth-method.ts)[]</code> | Client authentication methods supported at the revocation endpoint. |
| <code>introspectionEndpoint?</code> | <code>string</code> | The URI of the introspection endpoint. |
| <code>directIntrospectionEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct introspection endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>supportedIntrospectionAuthMethods?</code> | <code>[ClientAuthMethod](src/models/client-auth-method.ts)[]</code> | Client authentication methods supported at the introspection endpoint. |
| <code>pushedAuthReqEndpoint?</code> | <code>string</code> | The URI of the pushed authorization request endpoint.<br><br>This property corresponds to the `pushed_authorization_request_endpoint` metadata defined in "[5. Authorization Server Metadata](https://tools.ietf.org/html/draft-lodderstedt-oauth-par#section-5)" of OAuth 2.0 Pushed Authorization Requests. |
| <code>pushedAuthReqDuration?</code> | <code>number</code> | The duration of pushed authorization requests in seconds. |
| <code>parRequired?</code> | <code>boolean</code> | The flag to indicate whether this service requires that clients use the pushed authorization request endpoint.<br><br>This property corresponds to the `require_pushed_authorization_requests` server metadata defined in [OAuth 2.0 Pushed Authorization Requests](https://tools.ietf.org/html/draft-lodderstedt-oauth-par). |
| <code>requestObjectRequired?</code> | <code>boolean</code> | The flag to indicate whether this service requires that authorization requests always utilize a request object by using either request or `request_uri` request parameter.<br><br>If this flag is set to `true` and the value of `traditionalRequestObjectProcessingApplied` is `false`, the value of `require_signed_request_object` server metadata of this service is reported as `true` in the discovery document. The metadata is defined in JAR (JWT Secured Authorization Request). That `require_signed_request_object` is `true` means that authorization requests which don't conform to the JAR specification are rejected. |
| <code>traditionalRequestObjectProcessingApplied?</code> | <code>boolean</code> | The flag to indicate whether a request object is processed based on rules defined in [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) or JAR (JWT Secured Authorization Request). |
| <code>mutualTlsValidatePkiCertChain?</code> | <code>boolean</code> | The flag to indicate whether this service validates certificate chains during PKI-based client mutual TLS authentication. |
| <code>trustedRootCertificates?</code> | <code>string[]</code> | The list of root certificates trusted by this service for PKI-based client mutual TLS authentication. |
| <code>mtlsEndpointAliases?</code> | <code>[NamedUri](src/models/named-uri.ts)[]</code> | The MTLS endpoint aliases. |
| <code>accessTokenType?</code> | <code>string</code> | The access token type.<br><br>This value is used as the value of `token_type` property in access token responses. If this service complies with [RFC 6750](https://tools.ietf.org/html/rfc6750), the value of this property should be `Bearer`.<br><br>See [RFC 6749 (OAuth 2.0), 7.1. Access Token Types](https://tools.ietf.org/html/rfc6749#section-7.1) for details. |
| <code>tlsClientCertificateBoundAccessTokens?</code> | <code>boolean</code> | The flag to indicate whether this service supports issuing TLS client certificate bound access tokens. |
| <code>accessTokenDuration?</code> | <code>number</code> | The duration of access tokens in seconds. This value is used as the value of `expires_in` property in access token responses. `expires_in` is defined [RFC 6749, 5.1. Successful Response](https://tools.ietf.org/html/rfc6749#section-5.1). |
| <code>singleAccessTokenPerSubject?</code> | <code>boolean</code> | The flag to indicate whether the number of access tokens per subject (and per client) is at most one or can be more.<br><br>If `true`, an attempt to issue a new access token invalidates existing access tokens that are associated with the same subject and the same client.<br><br>Note that, however, attempts by [Client Credentials Flow](https://tools.ietf.org/html/rfc6749#section-4.4) do not invalidate existing access tokens because access tokens issued by Client Credentials Flow are not associated with any end-user's subject. Also note that an attempt by [Refresh Token Flow](https://tools.ietf.org/html/rfc6749#section-6) invalidates the coupled access token only and this invalidation is always performed regardless of whether the value of this setting item is `true` or `false`. |
| <code>accessTokenSignAlg?</code> | <code>[JwsAlg](src/models/jws-alg.ts)</code> | The signature algorithm for JWT. This value is represented on 'alg' attribute of the header of JWT.<br><br>it's semantics depends upon where is this defined, for instance:<br>  - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm used to sign it. Check your [KB article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).<br>  - as client authorizationSignAlg value, it represents the signature algorithm used when [creating a JARM response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).<br>  - or as client requestSignAlg value, it specifies which is the expected signature used by [client on a Request Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects). |
| <code>accessTokenSignatureKeyId?</code> | <code>string</code> | The key ID to identify a JWK used for signing access tokens.<br><br>A JWK Set can be registered as a property of a service. A JWK Set can contain 0 or more JWKs. Authlete Server has to pick up one JWK for signing from the JWK Set when it generates a JWT-based access token. Authlete Server searches the registered JWK Set for a JWK which satisfies conditions for access token signature. If the number of JWK candidates which satisfy the conditions is 1, there is no problem. On the other hand, if there exist multiple candidates, a Key ID is needed to be specified so that Authlete Server can pick up one JWK from among the JWK candidates. |
| <code>refreshTokenDuration?</code> | <code>number</code> | The duration of refresh tokens in seconds. The related specifications have no requirements on refresh token duration, but Authlete sets expiration for refresh tokens. |
| <code>refreshTokenDurationKept?</code> | <code>boolean</code> | The flag to indicate whether the remaining duration of the used refresh token is taken over to the newly issued refresh token. |
| <code>refreshTokenDurationReset?</code> | <code>boolean</code> | The flag which indicates whether duration of refresh tokens are reset when they are used even if the `refreshTokenKept` property of this service set to is `true` (= even if "Refresh Token Continuous Use" is "Kept").<br><br>This flag has no effect when the `refreshTokenKept` property is set to `false`. In other words, if this service issues a new refresh token on every refresh token request, the refresh token will have fresh duration (unless `refreshTokenDurationKept` is set to `true`) and this `refreshTokenDurationReset` property is not referenced. |
| <code>refreshTokenKept?</code> | <code>boolean</code> | The flag to indicate whether a refresh token remains unchanged or gets renewed after its use.<br><br>If `true`, a refresh token used to get a new access token remains valid after its use. Otherwise, if `false`, a refresh token is invalidated after its use and a new refresh token is issued.<br><br>See [RFC 6749 6. Refreshing an Access Token](https://tools.ietf.org/html/rfc6749#section-6), as to how to get a new access token using a refresh token. |
| <code>supportedScopes?</code> | <code>[Scope](src/models/scope.ts)[]</code> | Scopes supported by the service. |
| <code>scopeRequired?</code> | <code>boolean</code> | The flag to indicate whether requests that request no scope are rejected or not. |
| <code>idTokenDuration?</code> | <code>number</code> | 'The duration of [ID token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken)s in seconds. This value is used to calculate the value of `exp` claim in an ID token.' |
| <code>allowableClockSkew?</code> | <code>number</code> | The allowable clock skew between the server and clients in seconds.<br><br>The clock skew is taken into consideration when time-related claims in a JWT (e.g. `exp`, `iat`, `nbf`) are verified. |
| <code>supportedClaimTypes?</code> | <code>[ClaimType](src/models/claim-type.ts)[]</code> | Claim types supported by the service. Valid values are listed in Claim Type. Note that Authlete currently doesn't provide any API to help implementations for `AGGREGATED` and `DISTRIBUTED`.<br><br>The value of this property is used as `claim_types_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedClaimLocales?</code> | <code>string[]</code> | Claim locales that the service supports. Each element is a language tag defined in [RFC 5646](https://tools.ietf.org/html/rfc5646). For example, `en-US` and `ja-JP`. See [OpenID Connect Core 1.0, 5.2. Languages and Scripts](https://openid.net/specs/openid-connect-core-1_0.html#ClaimsLanguagesAndScripts) for details.<br><br>The value of this property is used as `claims_locales_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedClaims?</code> | <code>string[]</code> | Claim names that the service supports. The standard claim names listed in [OpenID Connect Core 1.0, 5.1. Standard Claim](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) should be supported. The following is the list of standard claims. |
| <code>claimShortcutRestrictive?</code> | <code>boolean</code> | The flag indicating whether claims specified by shortcut scopes (e.g. `profile`) are included in the issued ID token only when no access token is issued. |
| <code>jwksUri?</code> | <code>string</code> | The URL of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517) document. For example, `http://example.com/auth/jwks`.<br><br>Client applications accesses this URL (1) to get the public key of the service to validate the signature of an ID token issued by the service and (2) to get the public key of the service to encrypt an request object of the client application. See [OpenID Connect Core 1.0, 10. Signatures and Encryption](https://openid.net/specs/openid-connect-core-1_0.html#SigEnc) for details.<br><br>The value of this property is used as `jwks_uri` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>directJwksEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct JWKS endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>jwks?</code> | <code>string</code> | The content of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517) document.<br><br>If this property is not `null` in a `/service/create` request or a `/service/update` request, Authlete hosts the content in the database. This property must not be `null` and must contain pairs of public/private keys if the service wants to support asymmetric signatures for ID tokens and asymmetric encryption for request objects. See [OpenID Connect Core 1.0, 10. Signatures and Encryption](https://openid.net/specs/openid-connect-core-1_0.html#SigEnc) for details. |
| <code>idTokenSignatureKeyId?</code> | <code>string</code> | The key ID to identify a JWK used for ID token signature using an asymmetric key. |
| <code>userInfoSignatureKeyId?</code> | <code>string</code> | The key ID to identify a JWK used for user info signature using an asymmetric key. |
| <code>authorizationSignatureKeyId?</code> | <code>string</code> | The key ID to identify a JWK used for signing authorization responses using an asymmetric key. |
| <code>userInfoEndpoint?</code> | <code>string</code> | The [user info endpoint](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo) of the service. A URL that starts with `https://`. For example, `https://example.com/auth/userinfo`.<br><br>The value of this property is used as `userinfo_endpoint` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>directUserInfoEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct userinfo endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>dynamicRegistrationSupported?</code> | <code>boolean</code> | The boolean flag which indicates whether the [OAuth 2.0 Dynamic Client Registration Protocol](https://tools.ietf.org/html/rfc7591) is supported. |
| <code>registrationEndpoint?</code> | <code>string</code> | The [registration endpoint](http://openid.net/specs/openid-connect-registration-1_0.html#ClientRegistration) of the service. A URL that starts with `https://`. For example, `https://example.com/auth/registration`.<br><br>The value of this property is used as `registration_endpoint` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>registrationManagementEndpoint?</code> | <code>string</code> | The URI of the registration management endpoint. If dynamic client registration is supported, and this is set, this URI will be used as the basis of the client's management endpoint by appending `/clientid&#125;/` to it as a path element. If this is unset, the value of `registrationEndpoint` will be used as the URI base instead. |
| <code>policyUri?</code> | <code>string</code> | The URL of the "Policy" of the service.<br><br>The value of this property is used as `op_policy_uri` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>tosUri?</code> | <code>string</code> | The URL of the "Terms Of Service" of the service.<br><br>The value of this property is used as `op_tos_uri` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>serviceDocumentation?</code> | <code>string</code> | The URL of a page where documents for developers can be found.<br><br>The value of this property is used as `service_documentation` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>backchannelAuthenticationEndpoint?</code> | <code>string</code> | The URI of backchannel authentication endpoint, which is defined in the specification of [CIBA (Client Initiated Backchannel Authentication)](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html). |
| <code>supportedBackchannelTokenDeliveryModes?</code> | <code>[DeliveryMode](src/models/delivery-mode.ts)[]</code> | The supported backchannel token delivery modes. This property corresponds to the `backchannel_token_delivery_modes_supported` metadata.<br><br>Backchannel token delivery modes are defined in the specification of [CIBA (Client Initiated Backchannel Authentication)](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html). |
| <code>backchannelAuthReqIdDuration?</code> | <code>number</code> | The duration of backchannel authentication request IDs issued from the backchannel authentication endpoint in seconds. This is used as the value of the `expires_in` property in responses from the backchannel authentication endpoint. |
| <code>backchannelPollingInterval?</code> | <code>number</code> | The minimum interval between polling requests to the token endpoint from client applications in seconds. This is used as the value of the `interval` property in responses from the backchannel authentication endpoint. |
| <code>backchannelUserCodeParameterSupported?</code> | <code>boolean</code> | The boolean flag which indicates whether the `user_code` request parameter is supported at the backchannel authentication endpoint. This property corresponds to the `backchannel_user_code_parameter_supported` metadata. |
| <code>backchannelBindingMessageRequiredInFapi?</code> | <code>boolean</code> | The flag to indicate whether the `binding_message` request parameter is always required whenever a backchannel authentication request is judged as a request for Financial-grade API. |
| <code>deviceAuthorizationEndpoint?</code> | <code>string</code> | The URI of the device authorization endpoint.<br><br>Device authorization endpoint is defined in the specification of OAuth 2.0 Device Authorization Grant. |
| <code>deviceVerificationUri?</code> | <code>string</code> | The verification URI for the device flow. This URI is used as the value of the `verification_uri` parameter in responses from the device authorization endpoint. |
| <code>deviceVerificationUriComplete?</code> | <code>string</code> | The verification URI for the device flow with a placeholder for a user code. This URI is used to build the value of the `verification_uri_complete` parameter in responses from the device authorization endpoint. |
| <code>deviceFlowCodeDuration?</code> | <code>number</code> | The duration of device verification codes and end-user verification codes issued from the device authorization endpoint in seconds. This is used as the value of the `expires_in` property in responses from the device authorization endpoint. |
| <code>deviceFlowPollingInterval?</code> | <code>number</code> | The minimum interval between polling requests to the token endpoint from client applications in seconds in device flow. This is used as the value of the `interval` property in responses from the device authorization endpoint. |
| <code>userCodeCharset?</code> | <code>[UserCodeCharset](src/models/user-code-charset.ts)</code> | - |
| <code>userCodeLength?</code> | <code>number</code> | The length of end-user verification codes (`user_code`) for Device Flow. |
| <code>supportedTrustFrameworks?</code> | <code>string[]</code> | Trust frameworks supported by this service. This corresponds to the `trust_frameworks_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>supportedEvidence?</code> | <code>string[]</code> | Evidence supported by this service. This corresponds to the `evidence_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>supportedIdentityDocuments?</code> | <code>string[]</code> | Identity documents supported by this service. This corresponds to the `id_documents_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>supportedVerificationMethods?</code> | <code>string[]</code> | Verification methods supported by this service. This corresponds to the `id_documents_verification_methods_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>supportedVerifiedClaims?</code> | <code>string[]</code> | Verified claims supported by this service. This corresponds to the `claims_in_verified_claims_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>verifiedClaimsValidationSchemaSet?</code> | <code>[VerifiedClaimsValidationSchema](src/models/verified-claims-validation-schema.ts)</code> | The verified claims validation schema set. |
| <code>attributes?</code> | <code>[Pair](src/models/pair.ts)[]</code> | The attributes of this service. |
| <code>nbfOptional?</code> | <code>boolean</code> | The flag indicating whether the nbf claim in the request object is optional even when the authorization request is regarded as a FAPI-Part2 request. |
| <code>issSuppressed?</code> | <code>boolean</code> | The flag indicating whether generation of the iss response parameter is suppressed. |
| <code>supportedCustomClientMetadata?</code> | <code>string[]</code> | custom client metadata supported by this service. |
| <code>tokenExpirationLinked?</code> | <code>boolean</code> | The flag indicating whether the expiration date of an access token never exceeds that of the corresponding refresh token. |
| <code>frontChannelRequestObjectEncryptionRequired?</code> | <code>boolean</code> | The flag indicating whether encryption of request object is required when the request object is passed through the front channel. |
| <code>requestObjectEncryptionAlgMatchRequired?</code> | <code>boolean</code> | The flag indicating whether the JWE alg of encrypted request object must match the `request_object_encryption_alg` client metadata of the client that has sent the request object. |
| <code>requestObjectEncryptionEncMatchRequired?</code> | <code>boolean</code> | The flag indicating whether the JWE `enc` of encrypted request object must match the `request_object_encryption_enc` client metadata of the client that has sent the request object. |
| <code>hsmEnabled?</code> | <code>boolean</code> | The flag indicating whether HSM (Hardware Security Module) support is enabled for this service.<br><br>When this flag is `false`, keys managed in HSMs are not used even if they exist. In addition, `/api/hsk/*` APIs reject all requests.<br><br>Even if this flag is `true`, HSM-related features do not work if the configuration of the Authlete server you are using does not support HSM. |
| <code>hsks?</code> | <code>[Hsk](src/models/hsk.ts)[]</code> | The information about keys managed on HSMs (Hardware Security Modules).<br><br>This `hsks` property is output only, meaning that `hsks` in requests to `/api/service/create` API and `/api/service/update` API do not have any effect. The contents of this property is controlled only by `/api/hsk/*` APIs. |
| <code>grantManagementEndpoint?</code> | <code>string</code> | The URL of the grant management endpoint. |
| <code>grantManagementActionRequired?</code> | <code>boolean</code> | The flag indicating whether every authorization request (and any request serving as an authorization request such as CIBA backchannel authentication request and device authorization request) must include the `grant_management_action` request parameter. |
| <code>unauthorizedOnClientConfigSupported?</code> | <code>boolean</code> | The flag indicating whether Authlete's `/api/client/registration` API uses `UNAUTHORIZED` as a value of the `action` response parameter when appropriate. |
| <code>dcrScopeUsedAsRequestable?</code> | <code>boolean</code> | The flag indicating whether the `scope` request parameter in dynamic client registration and update requests (RFC 7591 and RFC 7592) is used as scopes that the client can request.<br><br>Limiting the range of scopes that a client can request is achieved by listing scopes in the `client.extension.requestableScopes` property and setting the `client.extension.requestableScopesEnabled` property to `true`. This feature is called "requestable scopes".<br><br>This property affects behaviors of `/api/client/registration` and other family APIs. |
| <code>endSessionEndpoint?</code> | <code>string</code> | The endpoint for clients ending the sessions.<br><br>A URL that starts with `https://` and has no fragment component. For example, `https://example.com/auth/endSession`.<br><br>The value of this property is used as `end_session_endpoint` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>challengeEndpoint?</code> | <code>string</code> | The URL of the challenge endpoint, which is defined in OAuth 2.0 Attestation-Based Client Authentication. |
| <code>loopbackRedirectionUriVariable?</code> | <code>boolean</code> | The flag indicating whether the port number component of redirection URIs can be variable when the host component indicates loopback. |
| <code>requestObjectAudienceChecked?</code> | <code>boolean</code> | The flag indicating whether Authlete checks whether the `aud` claim of request objects matches the issuer identifier of this service. |
| <code>accessTokenForExternalAttachmentEmbedded?</code> | <code>boolean</code> | The flag indicating whether Authlete generates access tokens for external attachments and embeds them in ID tokens and userinfo responses. |
| <code>authorityHints?</code> | <code>string[]</code> | Identifiers of entities that can issue entity statements for this service. This property corresponds to the `authority_hints` property that appears in a self-signed entity statement that is defined in OpenID Connect Federation 1.0. |
| <code>federationEnabled?</code> | <code>boolean</code> | flag indicating whether this service supports OpenID Connect Federation 1 |
| <code>federationJwks?</code> | <code>string</code> | JWK Set document containing keys that are used to sign (1) self-signed entity statement of this service and (2) the response from `signed_jwks_uri`. |
| <code>federationSignatureKeyId?</code> | <code>string</code> | A key ID to identify a JWK used to sign the entity configuration and the signed JWK Set. |
| <code>federationConfigurationDuration?</code> | <code>number</code> | The duration of the entity configuration in seconds. |
| <code>federationRegistrationEndpoint?</code> | <code>string</code> | The URI of the federation registration endpoint. This property corresponds to the `federation_registration_endpoint` server metadata that is defined in OpenID Connect Federation 1.0. |
| <code>organizationName?</code> | <code>string</code> | The human-readable name representing the organization that operates this service. This property corresponds to the `organization_name` server metadata that is defined in OpenID Connect Federation 1.0. |
| <code>predefinedTransformedClaims?</code> | <code>string</code> | The transformed claims predefined by this service in JSON format. This property corresponds to the `transformed_claims_predefined` server metadata. |
| <code>refreshTokenIdempotent?</code> | <code>boolean</code> | flag indicating whether refresh token requests with the same refresh token can be made multiple times in quick succession and they can obtain the same renewed refresh token within the short period. |
| <code>signedJwksUri?</code> | <code>string</code> | The URI of the endpoint that returns this service's JWK Set document in the JWT format. This property corresponds to the `signed_jwks_uri` server metadata defined in OpenID Connect Federation 1.0. |
| <code>supportedAttachments?</code> | <code>[AttachmentType](src/models/attachment-type.ts)[]</code> | Supported attachment types. This property corresponds to the &#123;@code attachments_supported&#125; server metadata which was added by the third implementer's draft of OpenID Connect for Identity Assurance 1.0. |
| <code>supportedDigestAlgorithms?</code> | <code>string[]</code> | Supported algorithms used to compute digest values of external attachments. This property corresponds to the `digest_algorithms_supported` server metadata which was added by the third implementer's draft of OpenID Connect for Identity Assurance 1.0. |
| <code>supportedDocuments?</code> | <code>string[]</code> | Document types supported by this service. This property corresponds to the `documents_supported` server metadata. |
| <code>supportedDocumentsMethods?</code> | <code>string[]</code> | validation and verification processes supported by this service. This property corresponds to the `documents_methods_supported` server metadata.<br><br>The third implementer's draft of [OpenID Connect for Identity Assurance 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html) renamed the `id_documents_verification_methods_supported` server metadata to `documents_methods_supported`. |
| <code>supportedDocumentsValidationMethods?</code> | <code>string[]</code> | Document validation methods supported by this service. This property corresponds to the `documents_validation_methods_supported` server metadata which was added by the third implementer's draft of |
| <code>supportedDocumentsVerificationMethods?</code> | <code>string[]</code> | Document verification methods supported by this service. This property corresponds to the `documents_verification_methods_supported` server metadata which was added by the third implementer's draft of [OpenID Connect for Identity Assurance 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html) |
| <code>supportedElectronicRecords?</code> | <code>string[]</code> | Electronic record types supported by this service. This property corresponds to the `electronic_records_supported` server metadata which was added by the third implementer's draft of [OpenID Connect for Identity Assurance 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html) |
| <code>supportedClientRegistrationTypes?</code> | <code>[ClientRegistrationType](src/models/client-registration-type.ts)[]</code> | - |
| <code>tokenExchangeByIdentifiableClientsOnly?</code> | <code>boolean</code> | The flag indicating whether to prohibit unidentifiable clients from making token exchange requests. |
| <code>tokenExchangeByConfidentialClientsOnly?</code> | <code>boolean</code> | The flag indicating whether to prohibit public clients from making token exchange requests. |
| <code>tokenExchangeByPermittedClientsOnly?</code> | <code>boolean</code> | The flag indicating whether to prohibit clients that have no explicit permission from making token exchange requests. |
| <code>tokenExchangeEncryptedJwtRejected?</code> | <code>boolean</code> | The flag indicating whether to reject token exchange requests which use encrypted JWTs as input tokens. |
| <code>tokenExchangeUnsignedJwtRejected?</code> | <code>boolean</code> | The flag indicating whether to reject token exchange requests which use unsigned JWTs as input tokens. |
| <code>jwtGrantByIdentifiableClientsOnly?</code> | <code>boolean</code> | The flag indicating whether to prohibit unidentifiable clients from using the grant type "urn:ietf:params:oauth:grant-type:jwt-bearer". |
| <code>jwtGrantEncryptedJwtRejected?</code> | <code>boolean</code> | The flag indicating whether to reject token requests that use an encrypted JWT as an authorization grant with the grant type "urn:ietf:params:oauth:grant-type:jwt-bearer". |
| <code>jwtGrantUnsignedJwtRejected?</code> | <code>boolean</code> | The flag indicating whether to reject token requests that use an unsigned JWT as an authorization grant with the grant type "urn:ietf:params:oauth:grant-type:jwt-bearer". |
| <code>dcrDuplicateSoftwareIdBlocked?</code> | <code>boolean</code> | The flag indicating whether to block DCR (Dynamic Client Registration) requests whose "software_id" has already been used previously. |
| <code>trustAnchors?</code> | <code>[TrustAnchor](src/models/trust-anchor.ts)[]</code> | The trust anchors that are referenced when this service resolves trust chains of relying parties.<br><br>If this property is empty, client registration fails regardless of whether its type is `automatic` or `explicit`. It means that OpenID Connect Federation 1.0 does not work. |
| <code>openidDroppedOnRefreshWithoutOfflineAccess?</code> | <code>boolean</code> | The flag indicating whether the openid scope should be dropped from scopes list assigned to access token issued when a refresh token grant is used. |
| <code>idTokenDroppedOnIssueWithoutOpenid?</code> | <code>boolean</code> | The flag indicating whether to refrain from issuing an ID token when the `openid` scope has been removed from the scopes to be granted by the `scopes` request parameter of the `/auth/authorization/issue` API.<br><br>Flows whose `response_type` contains `id_token`, and flows that requested Native SSO, are not affected, because both require an ID token. |
| <code>supportedDocumentsCheckMethods?</code> | <code>string[]</code> | Supported document check methods. This property corresponds to the `documents_check_methods_supported` server metadata which was added by the fourth implementer's draft of OpenID Connect for Identity Assurance 1.0. |
| <code>rsResponseSigned?</code> | <code>boolean</code> | The flag indicating whether this service signs responses from the resource server. |
| <code>cnonceDuration?</code> | <code>number</code> | The duration of `c_nonce`. |
| <code>dpopNonceRequired?</code> | <code>boolean</code> | Whether to require DPoP proof JWTs to include the `nonce` claim whenever they are presented. |
| <code>verifiableCredentialsEnabled?</code> | <code>boolean</code> | Get the flag indicating whether the feature of Verifiable Credentials for this service is enabled or not. |
| <code>credentialJwksUri?</code> | <code>string</code> | The URL at which the JWK Set document of the credential issuer is exposed. |
| <code>credentialOfferDuration?</code> | <code>number</code> | The default duration of credential offers in seconds. |
| <code>dpopNonceDuration?</code> | <code>number</code> | The duration of nonce values for DPoP proof JWTs in seconds. |
| <code>preAuthorizedGrantAnonymousAccessSupported?</code> | <code>boolean</code> | The flag indicating whether token requests using the pre-authorized code grant flow by unidentifiable clients are allowed. |
| <code>credentialTransactionDuration?</code> | <code>number</code> | The duration of transaction ID in seconds that may be issued as a result of a credential request or a batch credential request. |
| <code>introspectionSignatureKeyId?</code> | <code>string</code> | The key ID of the key for signing introspection responses. |
| <code>resourceSignatureKeyId?</code> | <code>string</code> | The key ID of the key for signing introspection responses. |
| <code>userPinLength?</code> | <code>number</code> | The default length of user PINs. |
| <code>supportedPromptValues?</code> | <code>[Prompt](src/models/prompt.ts)[]</code> | The supported `prompt` values. |
| <code>idTokenReissuable?</code> | <code>boolean</code> | The flag indicating whether to enable the feature of ID token reissuance in the refresh token flow. |
| <code>credentialJwks?</code> | <code>string</code> | The JWK Set document containing private keys that are used to sign verifiable credentials. |
| <code>fapiModes?</code> | <code>[FapiMode](src/models/fapi-mode.ts)[]</code> | FAPI modes for this service.<br><br>When the value of this property is not `null`, Authlete always processes requests to this service based on the specified FAPI modes if the FAPI feature is enabled in Authlete and the FAPI profile is supported by this service.<br><br>For instance, when this property is set to an array containing `FAPI1_ADVANCED` only, Authlete always processes requests to this service based on "Financial-grade API Security Profile 1.0 - Part 2: Advanced" if the FAPI feature is enabled in Authlete and the FAPI profile is supported by this service. |
| <code>credentialDuration?</code> | <code>number</code> | The default duration of verifiable credentials in seconds. |
| <code>credentialIssuerMetadata?</code> | <code>[CredentialIssuerMetadata](src/models/credential-issuer-metadata.ts)</code> | - |
| <code>idTokenAudType?</code> | <code>string</code> | The type of the `aud` claim in ID tokens. |
| <code>nativeSsoSupported?</code> | <code>boolean</code> | Flag that enables the [OpenID Connect Native SSO for Mobile Apps 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) specification (“Native SSO”). When this property is **not** `true`, Native SSO specific parameters are ignored or treated as errors. For example:<br><br>* The `device_sso` scope has no special meaning (Authlete does not embed the `sid` claim in ID tokens).<br>* The `urn:openid:params:token-type:device-secret` token type is treated as unknown and results in an error.<br><br>When set to `true`, the server metadata advertises `"native_sso_supported": true`. See [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) and [RFC 8414 §2](https://www.rfc-editor.org/rfc/rfc8414.html#section-2) for background. Native SSO is available in Authlete 3.0 and later. |
| <code>oid4VciVersion?</code> | <code>string</code> | Version of the [OpenID for Verifiable Credential Issuance](https://www.authlete.com/developers/oid4vci/) (OID4VCI) specification to support.<br><br>Accepted values are:<br><br>* `null` or `"1.0-ID1"` → Implementer’s Draft 1.<br>* `"1.0"` or `"1.0-Final"` → Final 1.0 specification.<br><br>Choose the value that matches the OID4VCI behaviour your service should expose. See the OID4VCI documentation for details. |
| <code>cimdMetadataPolicyEnabled?</code> | <code>boolean</code> | Flag that controls whether the CIMD metadata policy is applied to client metadata obtained through the Client ID Metadata Document (CIMD) mechanism. |
| <code>clientIdMetadataDocumentSupported?</code> | <code>boolean</code> | Indicates whether the Client ID Metadata Document (CIMD) mechanism is supported. When `true`, the service will attempt to retrieve client metadata via CIMD where applicable. |
| <code>cimdAllowlistEnabled?</code> | <code>boolean</code> | Enables the allowlist for CIMD. When `true`, only CIMD endpoints that are on the allowlist are used. |
| <code>cimdAllowlist?</code> | <code>string[]</code> | The allowlist of CIMD endpoints (hosts/URIs) that may be used when retrieving client metadata via Client ID Metadata Documents. |
| <code>cimdAlwaysRetrieved?</code> | <code>boolean</code> | If `true`, CIMD retrieval is always attempted for clients, regardless of other conditions. |
| <code>cimdHttpPermitted?</code> | <code>boolean</code> | Allows CIMD retrieval over plain HTTP. When `false`, only HTTPS CIMD endpoints are allowed. |
| <code>cimdQueryPermitted?</code> | <code>boolean</code> | Allows the use of query parameters when retrieving CIMD metadata. When `false`, query parameters are disallowed for CIMD requests. |
| <code>cimdMetadataPolicy?</code> | <code>string</code> | The metadata policy applied to client metadata obtained through the CIMD mechanism. The value must follow the metadata policy grammar defined in [OpenID Federation 1.0 §6.1 Metadata Policy](https://openid.net/specs/openid-federation-1_0.html#name-metadata-policy). |
| <code>httpAliasProhibited?</code> | <code>boolean</code> | When `true`, client ID aliases starting with `https://` or `http://` are prohibited. |
| <code>attestationChallengeTimeWindow?</code> | <code>number</code> | The time window of attestation challenges in seconds. This is used for OAuth 2.0 Attestation-Based Client Authentication. |
| <code>clientAttesterRootsEnabled?</code> | <code>boolean</code> | The flag indicating whether the attester roots for Client Attestation JWT x5c chain validation are enabled. |
| <code>clientAttesterRootsOnly?</code> | <code>boolean</code> | The flag indicating whether only client authentication validated via attester roots is accepted. |
| <code>keyAttesterRootsEnabled?</code> | <code>boolean</code> | The flag indicating whether the attester roots for Key Attestation JWT x5c chain validation are enabled. |
| <code>keyAttesterRootsOnly?</code> | <code>boolean</code> | The flag indicating whether only key attestation validated via attester roots is accepted. |
| <code>clientAttesterRoots?</code> | <code>string[]</code> | The trusted root certificates (PEM-encoded X.509) for validating the x5c chain in Client Attestation JWTs. |
| <code>keyAttesterRoots?</code> | <code>string[]</code> | The trusted root certificates (PEM-encoded X.509) for validating the x5c chain in Key Attestation JWTs. |
| <code>backchannelLogoutSupported?</code> | <code>boolean</code> | The flag indicating whether this service supports OpenID Connect Back-Channel Logout 1.0. |
| <code>backchannelLogoutSessionSupported?</code> | <code>boolean</code> | The flag indicating whether this service includes a `sid` (session ID) claim in ID tokens, supporting per-session backchannel logout. |
| <code>haipVersion?</code> | <code>string</code> | The HAIP version to comply with. Valid values for this property are as follows: `"1.0"`. If this property is set, requests to this service undergo additional validation based on the specified version of the [HAIP](https://openid.net/specs/openid4vc-high-assurance-interoperability-profile-1_0.html) specification. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceManagement.serviceCreateApi(request)`

- **OnSuccess**: <code>[Service](src/models/service.ts)</code>
- **OnError**: throws <code>[ServiceManagement.ServiceCreateApiError](src/resources/service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceManagement.serviceCreateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Service, ServiceManagement.ServiceCreateApiError&gt;</code>, with `result.value` of type <code>[Service](src/models/service.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceCreateIdpApi(request: ServiceManagement.ServiceCreateIdpApiRequest, options?: RequestOptions): ApiPromise&lt;Service, ServiceManagement.ServiceCreateIdpApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new service on the API server, belonging to the specified organization. A service can be created with an organization token or by a user with the CREATE_SERVICE role.

This endpoint is hosted on the Authlete IdP server (`https://login.authlete.com`), not on the regional API clusters.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceManagement.serviceCreateIdpApi({
    body: {
      apiServerId: 76281,
      organizationId: 123456789012345,
      service: { serviceName: "My service", issuer: "https://my-service.example.com" },
    },
  });
  // TODO: Handle 'response' of type Service
} catch (err) {
  // TODO: Handle 'err' of type ServiceManagement.ServiceCreateIdpApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceManagement.serviceCreateIdpApi({
  body: {
    apiServerId: 76281,
    organizationId: 123456789012345,
    service: { serviceName: "My service", issuer: "https://my-service.example.com" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Service
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ServiceCreateIdpRequest](src/models/service-create-idp-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceManagement.serviceCreateIdpApi(request)`

- **OnSuccess**: <code>[Service](src/models/service.ts)</code>
- **OnError**: throws <code>[ServiceManagement.ServiceCreateIdpApiError](src/resources/service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceManagement.serviceCreateIdpApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Service, ServiceManagement.ServiceCreateIdpApiError&gt;</code>, with `result.value` of type <code>[Service](src/models/service.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceDeleteApi(request: ServiceManagement.ServiceDeleteApiRequest, options?: RequestOptions): ApiPromise&lt;undefined, ServiceManagement.ServiceDeleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a service.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.serviceManagement.serviceDeleteApi({ serviceId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ServiceManagement.ServiceDeleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceManagement.serviceDeleteApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceManagement.serviceDeleteApi(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ServiceManagement.ServiceDeleteApiError](src/resources/service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceManagement.serviceDeleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ServiceManagement.ServiceDeleteApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceGetApi(request: ServiceManagement.ServiceGetApiRequest, options?: RequestOptions): ApiPromise&lt;Service, ServiceManagement.ServiceGetApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a service.

If the access token can only view or modify clients underneath this service, but does not have access to view this service directly, a limited view of the service will be returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceManagement.serviceGetApi({ serviceId: "some example string" });
  // TODO: Handle 'response' of type Service
} catch (err) {
  // TODO: Handle 'err' of type ServiceManagement.ServiceGetApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceManagement.serviceGetApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Service
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceManagement.serviceGetApi(request)`

- **OnSuccess**: <code>[Service](src/models/service.ts)</code>
- **OnError**: throws <code>[ServiceManagement.ServiceGetApiError](src/resources/service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceManagement.serviceGetApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Service, ServiceManagement.ServiceGetApiError&gt;</code>, with `result.value` of type <code>[Service](src/models/service.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceGetListApi(request: ServiceManagement.ServiceGetListApiRequest, options?: RequestOptions): ApiPromise&lt;ServiceGetListResponse, ServiceManagement.ServiceGetListApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of services.

If the access token can only view or modify clients underneath a service, but does not have access to view that service directly, a limited view of the service will be returned. Otherwise, all properties of the service are returned.

If the access token is an administrative token, this returns a list of all services on the Authlete instance. Otherwise, all services that the access token can view, even in a limited fashion, are returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceManagement.serviceGetListApi();
  // TODO: Handle 'response' of type ServiceGetListResponse
} catch (err) {
  // TODO: Handle 'err' of type ServiceManagement.ServiceGetListApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceManagement.serviceGetListApi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceGetListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start?</code> | <code>number</code> | Start index (inclusive) of the result set. The default value is 0. Must not be a negative number. |
| <code>end?</code> | <code>number</code> | End index (exclusive) of the result set. The default value is 5. Must not be a negative number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceManagement.serviceGetListApi(request)`

- **OnSuccess**: <code>[ServiceGetListResponse](src/models/service-get-list-response.ts)</code>
- **OnError**: throws <code>[ServiceManagement.ServiceGetListApiError](src/resources/service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceManagement.serviceGetListApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceGetListResponse, ServiceManagement.ServiceGetListApiError&gt;</code>, with `result.value` of type <code>[ServiceGetListResponse](src/models/service-get-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceRemoveIdpApi(request: ServiceManagement.ServiceRemoveIdpApiRequest, options?: RequestOptions): ApiPromise&lt;undefined, ServiceManagement.ServiceRemoveIdpApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a service from the API server. A service can be deleted with an organization token or by a user with the MODIFY_SERVICE role.

This endpoint is hosted on the Authlete IdP server (`https://login.authlete.com`), not on the regional API clusters.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.serviceManagement.serviceRemoveIdpApi({
    body: { apiServerId: 76281, organizationId: 123456789012345, serviceId: 21653835348762 },
  });
} catch (err) {
  // TODO: Handle 'err' of type ServiceManagement.ServiceRemoveIdpApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceManagement.serviceRemoveIdpApi({
  body: { apiServerId: 76281, organizationId: 123456789012345, serviceId: 21653835348762 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ServiceRemoveIdpRequest](src/models/service-remove-idp-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceManagement.serviceRemoveIdpApi(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ServiceManagement.ServiceRemoveIdpApiError](src/resources/service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceManagement.serviceRemoveIdpApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ServiceManagement.ServiceRemoveIdpApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serviceUpdateApi(request: ServiceManagement.ServiceUpdateApiRequest, options?: RequestOptions): ApiPromise&lt;Service, ServiceManagement.ServiceUpdateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a service.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceManagement.serviceUpdateApi({
    serviceId: "some example string",
    number: 715948317,
    serviceName: "My Test Service",
    issuer: "https://example.com",
    supportedGrantTypes: [GrantType.AuthorizationCode, GrantType.RefreshToken],
    supportedResponseTypes: [ResponseType.Code],
  });
  // TODO: Handle 'response' of type Service
} catch (err) {
  // TODO: Handle 'err' of type ServiceManagement.ServiceUpdateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceManagement.serviceUpdateApi({
  serviceId: "some example string",
  number: 715948317,
  serviceName: "My Test Service",
  issuer: "https://example.com",
  supportedGrantTypes: [GrantType.AuthorizationCode, GrantType.RefreshToken],
  supportedResponseTypes: [ResponseType.Code],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Service
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>number?</code> | <code>number</code> | The sequential number of the service. The value of this property is assigned by Authlete. |
| <code>serviceName?</code> | <code>string</code> | The name of this service. |
| <code>issuer?</code> | <code>string</code> | The issuer identifier of the service.<br><br>A URL that starts with  https:// and has no query or fragment component.<br><br>The value of this property is used as `iss` claim in an [ID token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) and `issuer` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>description?</code> | <code>string</code> | The description about the service. |
| <code>apiKey?</code> | <code>number</code> | The service ID used in Authlete API calls. The value of this property is assigned by Authlete. |
| <code>apiSecret?</code> | <code>string</code> | The API secret of this service. This value is assigned by Authlete and is used for service authentication in API calls. |
| <code>tokenBatchNotificationEndpoint?</code> | <code>string</code> | The endpoint for batch token notifications. This endpoint is called when multiple tokens are issued or revoked in a batch operation. |
| <code>clientAssertionAudRestrictedToIssuer?</code> | <code>boolean</code> | The flag indicating whether the audience of client assertion JWTs must match the issuer identifier of this service. |
| <code>serviceOwnerNumber?</code> | <code>number</code> | The number of the organization that owns this service. This value is assigned by Authlete. |
| <code>clientsPerDeveloper?</code> | <code>number</code> | The maximum number of client applications that a developer can have. |
| <code>developerAuthenticationCallbackEndpoint?</code> | <code>string</code> | The endpoint for developer authentication callbacks. This is used when developers log into the developer portal. |
| <code>developerAuthenticationCallbackApiKey?</code> | <code>string</code> | The API key for basic authentication at the developer authentication callback endpoint. |
| <code>developerAuthenticationCallbackApiSecret?</code> | <code>string</code> | The API secret for basic authentication at the developer authentication callback endpoint. |
| <code>supportedSnses?</code> | <code>[Sns](src/models/sns.ts)[]</code> | Social login services (SNS) that this service supports for end-user authentication. |
| <code>snsCredentials?</code> | <code>[SnsCredentials](src/models/sns-credentials.ts)[]</code> | The credentials for social login services (SNS) that are used for end-user authentication. |
| <code>supportedDeveloperSnses?</code> | <code>[Sns](src/models/sns.ts)[]</code> | Social login services (SNS) that this service supports for developer authentication. |
| <code>developerSnsCredentials?</code> | <code>[SnsCredentials](src/models/sns-credentials.ts)[]</code> | The credentials for social login services (SNS) that are used for developer authentication. |
| <code>clientIdAliasEnabled?</code> | <code>boolean</code> | Deprecated. Always `true`. |
| <code>metadata?</code> | <code>[Pair](src/models/pair.ts)[]</code> | The `metadata` of the service. The content of the returned array depends on contexts. The predefined service metadata is listed in the following table.<br><br>  \| Key \| Description \|<br>  \| --- \| --- \|<br>  \| `clientCount` \| The number of client applications which belong to this service.  \| |
| <code>createdAt?</code> | <code>number</code> | The time at which this service was created. The value is represented as milliseconds since the UNIX epoch (`1970-01-01`). |
| <code>modifiedAt?</code> | <code>number</code> | The time at which this service was last modified. The value is represented as milliseconds since the UNIX epoch (1970-01-01). |
| <code>authenticationCallbackEndpoint?</code> | <code>string</code> | A Web API endpoint for user authentication which is to be prepared on the service side.<br><br>The endpoint must be implemented if you do not implement the UI at the authorization endpoint but use the one provided by Authlete.<br><br>The user authentication at the authorization endpoint provided by Authlete is performed by making a `POST` request to this endpoint. |
| <code>authenticationCallbackApiKey?</code> | <code>string</code> | API key for basic authentication at the authentication callback endpoint.<br><br>If the value is not empty, Authlete generates Authorization header for Basic authentication when making a request to the authentication callback endpoint. |
| <code>authenticationCallbackApiSecret?</code> | <code>string</code> | API secret for `basic` authentication at the authentication callback endpoint. |
| <code>supportedAcrs?</code> | <code>string[]</code> | Values of acrs (authentication context class references) that the service supports.<br><br>The value of this property is used as `acr_values_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedGrantTypes?</code> | <code>[GrantType](src/models/grant-type.ts)[]</code> | Values of `grant_type` request parameter that the service supports.<br><br>The value of this property is used as `grant_types_supported property` in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedResponseTypes?</code> | <code>[ResponseType](src/models/response-type.ts)[]</code> | Values of `response_type` request parameter that the service supports. Valid values are listed in Response Type.<br><br>The value of this property is used as `response_types_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedAuthorizationDetailsTypes?</code> | <code>string[]</code> | The supported data types that can be used as values of the type field in `authorization_details`.<br><br>This property corresponds to the `authorization_details_types_supported` metadata. See "OAuth 2.0 Rich Authorization Requests" (RAR) for details. |
| <code>supportedServiceProfiles?</code> | <code>[ServiceProfile](src/models/service-profile.ts)[]</code> | The profiles that this service supports. |
| <code>errorDescriptionOmitted?</code> | <code>boolean</code> | The flag to indicate whether the `error_description` response parameter is omitted.<br><br>According to [RFC 6749](https://tools.ietf.org/html/rfc6749), an authorization server may include the `error_description` response parameter in error responses.<br><br>If `true`, Authlete does not embed the `error_description` response parameter in error responses. |
| <code>errorUriOmitted?</code> | <code>boolean</code> | The flag to indicate whether the `error_uri` response parameter is omitted.<br><br>According to [RFC 6749](https://tools.ietf.org/html/rfc6749), an authorization server may include the `error_uri` response parameter in error responses.<br><br>If `true`, Authlete does not embed the `error_uri` response parameter in error responses. |
| <code>authorizationEndpoint?</code> | <code>string</code> | The authorization endpoint of the service.<br><br>A URL that starts with `https://` and has no fragment component. For example, `https://example.com/auth/authorization`.<br><br>The value of this property is used as `authorization_endpoint` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>directAuthorizationEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct authorization endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>supportedUiLocales?</code> | <code>string[]</code> | UI locales that the service supports.<br><br>Each element is a language tag defined in [RFC 5646](https://tools.ietf.org/html/rfc5646). For example, `en-US` and `ja-JP`.<br><br>The value of this property is used as `ui_locales_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedDisplays?</code> | <code>[Display](src/models/display.ts)[]</code> | Values of `display` request parameter that service supports.<br><br>The value of this property is used as `display_values_supported` property in the Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>pkceRequired?</code> | <code>boolean</code> | The flag to indicate whether the use of Proof Key for Code Exchange (PKCE) is always required for authorization requests by Authorization Code Flow.<br><br>If `true`, `code_challenge` request parameter is always required for authorization requests using Authorization Code Flow.<br><br>See [RFC 7636](https://tools.ietf.org/html/rfc7636) (Proof Key for Code Exchange by OAuth Public Clients) for details about `code_challenge` request parameter. |
| <code>pkceS256Required?</code> | <code>boolean</code> | The flag to indicate whether `S256` is always required as the code challenge method whenever [PKCE (RFC 7636)](https://tools.ietf.org/html/rfc7636) is used.<br><br>If this flag is set to `true`, `code_challenge_method=S256` must be included in the authorization request whenever it includes the `code_challenge` request parameter. Neither omission of the `code_challenge_method` request parameter nor use of plain (`code_challenge_method=plain`) is allowed. |
| <code>authorizationResponseDuration?</code> | <code>number</code> | The duration of authorization response JWTs in seconds.<br><br>[Financial-grade API: JWT Secured Authorization Response Mode for OAuth 2.0 (JARM)](https://openid.net/specs/openid-financial-api-jarm.html) defines new values for the `response_mode` request parameter. They are `query.jwt`, `fragment.jwt`, `form_post.jwt` and `jwt`. If one of them is specified as the response mode, response parameters from the authorization endpoint will be packed into a JWT. This property is used to compute the value of the `exp` claim of the JWT. |
| <code>authorizationCodeDuration?</code> | <code>number</code> | The duration of authorization codes in seconds. |
| <code>tokenEndpoint?</code> | <code>string</code> | The [token endpoint](https://tools.ietf.org/html/rfc6749#section-3.2) of the service.<br><br>A URL that starts with `https://` and has not fragment component. For example, `https://example.com/auth/token`.<br><br>The value of this property is used as `token_endpoint` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>directTokenEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct token endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>supportedTokenAuthMethods?</code> | <code>[ClientAuthMethod](src/models/client-auth-method.ts)[]</code> | Client authentication methods supported by the token endpoint of the service.<br><br>The value of this property is used as `token_endpoint_auth_methods_supports` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>missingClientIdAllowed?</code> | <code>boolean</code> | The flag to indicate token requests from public clients without the `client_id` request parameter are allowed when the client can be guessed from `authorization_code` or `refresh_token`.<br><br>This flag should not be set unless you have special reasons. |
| <code>revocationEndpoint?</code> | <code>string</code> | The [revocation endpoint](https://tools.ietf.org/html/rfc7009) of the service.<br><br>A URL that starts with `https://`. For example, `https://example.com/auth/revocation`. |
| <code>directRevocationEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct revocation endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>supportedRevocationAuthMethods?</code> | <code>[ClientAuthMethod](src/models/client-auth-method.ts)[]</code> | Client authentication methods supported at the revocation endpoint. |
| <code>introspectionEndpoint?</code> | <code>string</code> | The URI of the introspection endpoint. |
| <code>directIntrospectionEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct introspection endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>supportedIntrospectionAuthMethods?</code> | <code>[ClientAuthMethod](src/models/client-auth-method.ts)[]</code> | Client authentication methods supported at the introspection endpoint. |
| <code>pushedAuthReqEndpoint?</code> | <code>string</code> | The URI of the pushed authorization request endpoint.<br><br>This property corresponds to the `pushed_authorization_request_endpoint` metadata defined in "[5. Authorization Server Metadata](https://tools.ietf.org/html/draft-lodderstedt-oauth-par#section-5)" of OAuth 2.0 Pushed Authorization Requests. |
| <code>pushedAuthReqDuration?</code> | <code>number</code> | The duration of pushed authorization requests in seconds. |
| <code>parRequired?</code> | <code>boolean</code> | The flag to indicate whether this service requires that clients use the pushed authorization request endpoint.<br><br>This property corresponds to the `require_pushed_authorization_requests` server metadata defined in [OAuth 2.0 Pushed Authorization Requests](https://tools.ietf.org/html/draft-lodderstedt-oauth-par). |
| <code>requestObjectRequired?</code> | <code>boolean</code> | The flag to indicate whether this service requires that authorization requests always utilize a request object by using either request or `request_uri` request parameter.<br><br>If this flag is set to `true` and the value of `traditionalRequestObjectProcessingApplied` is `false`, the value of `require_signed_request_object` server metadata of this service is reported as `true` in the discovery document. The metadata is defined in JAR (JWT Secured Authorization Request). That `require_signed_request_object` is `true` means that authorization requests which don't conform to the JAR specification are rejected. |
| <code>traditionalRequestObjectProcessingApplied?</code> | <code>boolean</code> | The flag to indicate whether a request object is processed based on rules defined in [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) or JAR (JWT Secured Authorization Request). |
| <code>mutualTlsValidatePkiCertChain?</code> | <code>boolean</code> | The flag to indicate whether this service validates certificate chains during PKI-based client mutual TLS authentication. |
| <code>trustedRootCertificates?</code> | <code>string[]</code> | The list of root certificates trusted by this service for PKI-based client mutual TLS authentication. |
| <code>mtlsEndpointAliases?</code> | <code>[NamedUri](src/models/named-uri.ts)[]</code> | The MTLS endpoint aliases. |
| <code>accessTokenType?</code> | <code>string</code> | The access token type.<br><br>This value is used as the value of `token_type` property in access token responses. If this service complies with [RFC 6750](https://tools.ietf.org/html/rfc6750), the value of this property should be `Bearer`.<br><br>See [RFC 6749 (OAuth 2.0), 7.1. Access Token Types](https://tools.ietf.org/html/rfc6749#section-7.1) for details. |
| <code>tlsClientCertificateBoundAccessTokens?</code> | <code>boolean</code> | The flag to indicate whether this service supports issuing TLS client certificate bound access tokens. |
| <code>accessTokenDuration?</code> | <code>number</code> | The duration of access tokens in seconds. This value is used as the value of `expires_in` property in access token responses. `expires_in` is defined [RFC 6749, 5.1. Successful Response](https://tools.ietf.org/html/rfc6749#section-5.1). |
| <code>singleAccessTokenPerSubject?</code> | <code>boolean</code> | The flag to indicate whether the number of access tokens per subject (and per client) is at most one or can be more.<br><br>If `true`, an attempt to issue a new access token invalidates existing access tokens that are associated with the same subject and the same client.<br><br>Note that, however, attempts by [Client Credentials Flow](https://tools.ietf.org/html/rfc6749#section-4.4) do not invalidate existing access tokens because access tokens issued by Client Credentials Flow are not associated with any end-user's subject. Also note that an attempt by [Refresh Token Flow](https://tools.ietf.org/html/rfc6749#section-6) invalidates the coupled access token only and this invalidation is always performed regardless of whether the value of this setting item is `true` or `false`. |
| <code>accessTokenSignAlg?</code> | <code>[JwsAlg](src/models/jws-alg.ts)</code> | The signature algorithm for JWT. This value is represented on 'alg' attribute of the header of JWT.<br><br>it's semantics depends upon where is this defined, for instance:<br>  - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm used to sign it. Check your [KB article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).<br>  - as client authorizationSignAlg value, it represents the signature algorithm used when [creating a JARM response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).<br>  - or as client requestSignAlg value, it specifies which is the expected signature used by [client on a Request Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects). |
| <code>accessTokenSignatureKeyId?</code> | <code>string</code> | The key ID to identify a JWK used for signing access tokens.<br><br>A JWK Set can be registered as a property of a service. A JWK Set can contain 0 or more JWKs. Authlete Server has to pick up one JWK for signing from the JWK Set when it generates a JWT-based access token. Authlete Server searches the registered JWK Set for a JWK which satisfies conditions for access token signature. If the number of JWK candidates which satisfy the conditions is 1, there is no problem. On the other hand, if there exist multiple candidates, a Key ID is needed to be specified so that Authlete Server can pick up one JWK from among the JWK candidates. |
| <code>refreshTokenDuration?</code> | <code>number</code> | The duration of refresh tokens in seconds. The related specifications have no requirements on refresh token duration, but Authlete sets expiration for refresh tokens. |
| <code>refreshTokenDurationKept?</code> | <code>boolean</code> | The flag to indicate whether the remaining duration of the used refresh token is taken over to the newly issued refresh token. |
| <code>refreshTokenDurationReset?</code> | <code>boolean</code> | The flag which indicates whether duration of refresh tokens are reset when they are used even if the `refreshTokenKept` property of this service set to is `true` (= even if "Refresh Token Continuous Use" is "Kept").<br><br>This flag has no effect when the `refreshTokenKept` property is set to `false`. In other words, if this service issues a new refresh token on every refresh token request, the refresh token will have fresh duration (unless `refreshTokenDurationKept` is set to `true`) and this `refreshTokenDurationReset` property is not referenced. |
| <code>refreshTokenKept?</code> | <code>boolean</code> | The flag to indicate whether a refresh token remains unchanged or gets renewed after its use.<br><br>If `true`, a refresh token used to get a new access token remains valid after its use. Otherwise, if `false`, a refresh token is invalidated after its use and a new refresh token is issued.<br><br>See [RFC 6749 6. Refreshing an Access Token](https://tools.ietf.org/html/rfc6749#section-6), as to how to get a new access token using a refresh token. |
| <code>supportedScopes?</code> | <code>[Scope](src/models/scope.ts)[]</code> | Scopes supported by the service. |
| <code>scopeRequired?</code> | <code>boolean</code> | The flag to indicate whether requests that request no scope are rejected or not. |
| <code>idTokenDuration?</code> | <code>number</code> | 'The duration of [ID token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken)s in seconds. This value is used to calculate the value of `exp` claim in an ID token.' |
| <code>allowableClockSkew?</code> | <code>number</code> | The allowable clock skew between the server and clients in seconds.<br><br>The clock skew is taken into consideration when time-related claims in a JWT (e.g. `exp`, `iat`, `nbf`) are verified. |
| <code>supportedClaimTypes?</code> | <code>[ClaimType](src/models/claim-type.ts)[]</code> | Claim types supported by the service. Valid values are listed in Claim Type. Note that Authlete currently doesn't provide any API to help implementations for `AGGREGATED` and `DISTRIBUTED`.<br><br>The value of this property is used as `claim_types_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedClaimLocales?</code> | <code>string[]</code> | Claim locales that the service supports. Each element is a language tag defined in [RFC 5646](https://tools.ietf.org/html/rfc5646). For example, `en-US` and `ja-JP`. See [OpenID Connect Core 1.0, 5.2. Languages and Scripts](https://openid.net/specs/openid-connect-core-1_0.html#ClaimsLanguagesAndScripts) for details.<br><br>The value of this property is used as `claims_locales_supported` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>supportedClaims?</code> | <code>string[]</code> | Claim names that the service supports. The standard claim names listed in [OpenID Connect Core 1.0, 5.1. Standard Claim](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) should be supported. The following is the list of standard claims. |
| <code>claimShortcutRestrictive?</code> | <code>boolean</code> | The flag indicating whether claims specified by shortcut scopes (e.g. `profile`) are included in the issued ID token only when no access token is issued. |
| <code>jwksUri?</code> | <code>string</code> | The URL of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517) document. For example, `http://example.com/auth/jwks`.<br><br>Client applications accesses this URL (1) to get the public key of the service to validate the signature of an ID token issued by the service and (2) to get the public key of the service to encrypt an request object of the client application. See [OpenID Connect Core 1.0, 10. Signatures and Encryption](https://openid.net/specs/openid-connect-core-1_0.html#SigEnc) for details.<br><br>The value of this property is used as `jwks_uri` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>directJwksEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct JWKS endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>jwks?</code> | <code>string</code> | The content of the service's [JSON Web Key Set](https://tools.ietf.org/html/rfc7517) document.<br><br>If this property is not `null` in a `/service/create` request or a `/service/update` request, Authlete hosts the content in the database. This property must not be `null` and must contain pairs of public/private keys if the service wants to support asymmetric signatures for ID tokens and asymmetric encryption for request objects. See [OpenID Connect Core 1.0, 10. Signatures and Encryption](https://openid.net/specs/openid-connect-core-1_0.html#SigEnc) for details. |
| <code>idTokenSignatureKeyId?</code> | <code>string</code> | The key ID to identify a JWK used for ID token signature using an asymmetric key. |
| <code>userInfoSignatureKeyId?</code> | <code>string</code> | The key ID to identify a JWK used for user info signature using an asymmetric key. |
| <code>authorizationSignatureKeyId?</code> | <code>string</code> | The key ID to identify a JWK used for signing authorization responses using an asymmetric key. |
| <code>userInfoEndpoint?</code> | <code>string</code> | The [user info endpoint](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo) of the service. A URL that starts with `https://`. For example, `https://example.com/auth/userinfo`.<br><br>The value of this property is used as `userinfo_endpoint` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>directUserInfoEndpointEnabled?</code> | <code>boolean</code> | Deprecated. The direct userinfo endpoint was removed in Authlete 3.0.15, so this flag has no effect and is always returned as `false`. |
| <code>dynamicRegistrationSupported?</code> | <code>boolean</code> | The boolean flag which indicates whether the [OAuth 2.0 Dynamic Client Registration Protocol](https://tools.ietf.org/html/rfc7591) is supported. |
| <code>registrationEndpoint?</code> | <code>string</code> | The [registration endpoint](http://openid.net/specs/openid-connect-registration-1_0.html#ClientRegistration) of the service. A URL that starts with `https://`. For example, `https://example.com/auth/registration`.<br><br>The value of this property is used as `registration_endpoint` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>registrationManagementEndpoint?</code> | <code>string</code> | The URI of the registration management endpoint. If dynamic client registration is supported, and this is set, this URI will be used as the basis of the client's management endpoint by appending `/clientid&#125;/` to it as a path element. If this is unset, the value of `registrationEndpoint` will be used as the URI base instead. |
| <code>policyUri?</code> | <code>string</code> | The URL of the "Policy" of the service.<br><br>The value of this property is used as `op_policy_uri` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>tosUri?</code> | <code>string</code> | The URL of the "Terms Of Service" of the service.<br><br>The value of this property is used as `op_tos_uri` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>serviceDocumentation?</code> | <code>string</code> | The URL of a page where documents for developers can be found.<br><br>The value of this property is used as `service_documentation` property in the [OpenID Provider Metadata](http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>backchannelAuthenticationEndpoint?</code> | <code>string</code> | The URI of backchannel authentication endpoint, which is defined in the specification of [CIBA (Client Initiated Backchannel Authentication)](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html). |
| <code>supportedBackchannelTokenDeliveryModes?</code> | <code>[DeliveryMode](src/models/delivery-mode.ts)[]</code> | The supported backchannel token delivery modes. This property corresponds to the `backchannel_token_delivery_modes_supported` metadata.<br><br>Backchannel token delivery modes are defined in the specification of [CIBA (Client Initiated Backchannel Authentication)](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html). |
| <code>backchannelAuthReqIdDuration?</code> | <code>number</code> | The duration of backchannel authentication request IDs issued from the backchannel authentication endpoint in seconds. This is used as the value of the `expires_in` property in responses from the backchannel authentication endpoint. |
| <code>backchannelPollingInterval?</code> | <code>number</code> | The minimum interval between polling requests to the token endpoint from client applications in seconds. This is used as the value of the `interval` property in responses from the backchannel authentication endpoint. |
| <code>backchannelUserCodeParameterSupported?</code> | <code>boolean</code> | The boolean flag which indicates whether the `user_code` request parameter is supported at the backchannel authentication endpoint. This property corresponds to the `backchannel_user_code_parameter_supported` metadata. |
| <code>backchannelBindingMessageRequiredInFapi?</code> | <code>boolean</code> | The flag to indicate whether the `binding_message` request parameter is always required whenever a backchannel authentication request is judged as a request for Financial-grade API. |
| <code>deviceAuthorizationEndpoint?</code> | <code>string</code> | The URI of the device authorization endpoint.<br><br>Device authorization endpoint is defined in the specification of OAuth 2.0 Device Authorization Grant. |
| <code>deviceVerificationUri?</code> | <code>string</code> | The verification URI for the device flow. This URI is used as the value of the `verification_uri` parameter in responses from the device authorization endpoint. |
| <code>deviceVerificationUriComplete?</code> | <code>string</code> | The verification URI for the device flow with a placeholder for a user code. This URI is used to build the value of the `verification_uri_complete` parameter in responses from the device authorization endpoint. |
| <code>deviceFlowCodeDuration?</code> | <code>number</code> | The duration of device verification codes and end-user verification codes issued from the device authorization endpoint in seconds. This is used as the value of the `expires_in` property in responses from the device authorization endpoint. |
| <code>deviceFlowPollingInterval?</code> | <code>number</code> | The minimum interval between polling requests to the token endpoint from client applications in seconds in device flow. This is used as the value of the `interval` property in responses from the device authorization endpoint. |
| <code>userCodeCharset?</code> | <code>[UserCodeCharset](src/models/user-code-charset.ts)</code> | - |
| <code>userCodeLength?</code> | <code>number</code> | The length of end-user verification codes (`user_code`) for Device Flow. |
| <code>supportedTrustFrameworks?</code> | <code>string[]</code> | Trust frameworks supported by this service. This corresponds to the `trust_frameworks_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>supportedEvidence?</code> | <code>string[]</code> | Evidence supported by this service. This corresponds to the `evidence_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>supportedIdentityDocuments?</code> | <code>string[]</code> | Identity documents supported by this service. This corresponds to the `id_documents_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>supportedVerificationMethods?</code> | <code>string[]</code> | Verification methods supported by this service. This corresponds to the `id_documents_verification_methods_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>supportedVerifiedClaims?</code> | <code>string[]</code> | Verified claims supported by this service. This corresponds to the `claims_in_verified_claims_supported` [metadata](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#rfc.section.7). |
| <code>verifiedClaimsValidationSchemaSet?</code> | <code>[VerifiedClaimsValidationSchema](src/models/verified-claims-validation-schema.ts)</code> | The verified claims validation schema set. |
| <code>attributes?</code> | <code>[Pair](src/models/pair.ts)[]</code> | The attributes of this service. |
| <code>nbfOptional?</code> | <code>boolean</code> | The flag indicating whether the nbf claim in the request object is optional even when the authorization request is regarded as a FAPI-Part2 request. |
| <code>issSuppressed?</code> | <code>boolean</code> | The flag indicating whether generation of the iss response parameter is suppressed. |
| <code>supportedCustomClientMetadata?</code> | <code>string[]</code> | custom client metadata supported by this service. |
| <code>tokenExpirationLinked?</code> | <code>boolean</code> | The flag indicating whether the expiration date of an access token never exceeds that of the corresponding refresh token. |
| <code>frontChannelRequestObjectEncryptionRequired?</code> | <code>boolean</code> | The flag indicating whether encryption of request object is required when the request object is passed through the front channel. |
| <code>requestObjectEncryptionAlgMatchRequired?</code> | <code>boolean</code> | The flag indicating whether the JWE alg of encrypted request object must match the `request_object_encryption_alg` client metadata of the client that has sent the request object. |
| <code>requestObjectEncryptionEncMatchRequired?</code> | <code>boolean</code> | The flag indicating whether the JWE `enc` of encrypted request object must match the `request_object_encryption_enc` client metadata of the client that has sent the request object. |
| <code>hsmEnabled?</code> | <code>boolean</code> | The flag indicating whether HSM (Hardware Security Module) support is enabled for this service.<br><br>When this flag is `false`, keys managed in HSMs are not used even if they exist. In addition, `/api/hsk/*` APIs reject all requests.<br><br>Even if this flag is `true`, HSM-related features do not work if the configuration of the Authlete server you are using does not support HSM. |
| <code>hsks?</code> | <code>[Hsk](src/models/hsk.ts)[]</code> | The information about keys managed on HSMs (Hardware Security Modules).<br><br>This `hsks` property is output only, meaning that `hsks` in requests to `/api/service/create` API and `/api/service/update` API do not have any effect. The contents of this property is controlled only by `/api/hsk/*` APIs. |
| <code>grantManagementEndpoint?</code> | <code>string</code> | The URL of the grant management endpoint. |
| <code>grantManagementActionRequired?</code> | <code>boolean</code> | The flag indicating whether every authorization request (and any request serving as an authorization request such as CIBA backchannel authentication request and device authorization request) must include the `grant_management_action` request parameter. |
| <code>unauthorizedOnClientConfigSupported?</code> | <code>boolean</code> | The flag indicating whether Authlete's `/api/client/registration` API uses `UNAUTHORIZED` as a value of the `action` response parameter when appropriate. |
| <code>dcrScopeUsedAsRequestable?</code> | <code>boolean</code> | The flag indicating whether the `scope` request parameter in dynamic client registration and update requests (RFC 7591 and RFC 7592) is used as scopes that the client can request.<br><br>Limiting the range of scopes that a client can request is achieved by listing scopes in the `client.extension.requestableScopes` property and setting the `client.extension.requestableScopesEnabled` property to `true`. This feature is called "requestable scopes".<br><br>This property affects behaviors of `/api/client/registration` and other family APIs. |
| <code>endSessionEndpoint?</code> | <code>string</code> | The endpoint for clients ending the sessions.<br><br>A URL that starts with `https://` and has no fragment component. For example, `https://example.com/auth/endSession`.<br><br>The value of this property is used as `end_session_endpoint` property in the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). |
| <code>challengeEndpoint?</code> | <code>string</code> | The URL of the challenge endpoint, which is defined in OAuth 2.0 Attestation-Based Client Authentication. |
| <code>loopbackRedirectionUriVariable?</code> | <code>boolean</code> | The flag indicating whether the port number component of redirection URIs can be variable when the host component indicates loopback. |
| <code>requestObjectAudienceChecked?</code> | <code>boolean</code> | The flag indicating whether Authlete checks whether the `aud` claim of request objects matches the issuer identifier of this service. |
| <code>accessTokenForExternalAttachmentEmbedded?</code> | <code>boolean</code> | The flag indicating whether Authlete generates access tokens for external attachments and embeds them in ID tokens and userinfo responses. |
| <code>authorityHints?</code> | <code>string[]</code> | Identifiers of entities that can issue entity statements for this service. This property corresponds to the `authority_hints` property that appears in a self-signed entity statement that is defined in OpenID Connect Federation 1.0. |
| <code>federationEnabled?</code> | <code>boolean</code> | flag indicating whether this service supports OpenID Connect Federation 1 |
| <code>federationJwks?</code> | <code>string</code> | JWK Set document containing keys that are used to sign (1) self-signed entity statement of this service and (2) the response from `signed_jwks_uri`. |
| <code>federationSignatureKeyId?</code> | <code>string</code> | A key ID to identify a JWK used to sign the entity configuration and the signed JWK Set. |
| <code>federationConfigurationDuration?</code> | <code>number</code> | The duration of the entity configuration in seconds. |
| <code>federationRegistrationEndpoint?</code> | <code>string</code> | The URI of the federation registration endpoint. This property corresponds to the `federation_registration_endpoint` server metadata that is defined in OpenID Connect Federation 1.0. |
| <code>organizationName?</code> | <code>string</code> | The human-readable name representing the organization that operates this service. This property corresponds to the `organization_name` server metadata that is defined in OpenID Connect Federation 1.0. |
| <code>predefinedTransformedClaims?</code> | <code>string</code> | The transformed claims predefined by this service in JSON format. This property corresponds to the `transformed_claims_predefined` server metadata. |
| <code>refreshTokenIdempotent?</code> | <code>boolean</code> | flag indicating whether refresh token requests with the same refresh token can be made multiple times in quick succession and they can obtain the same renewed refresh token within the short period. |
| <code>signedJwksUri?</code> | <code>string</code> | The URI of the endpoint that returns this service's JWK Set document in the JWT format. This property corresponds to the `signed_jwks_uri` server metadata defined in OpenID Connect Federation 1.0. |
| <code>supportedAttachments?</code> | <code>[AttachmentType](src/models/attachment-type.ts)[]</code> | Supported attachment types. This property corresponds to the &#123;@code attachments_supported&#125; server metadata which was added by the third implementer's draft of OpenID Connect for Identity Assurance 1.0. |
| <code>supportedDigestAlgorithms?</code> | <code>string[]</code> | Supported algorithms used to compute digest values of external attachments. This property corresponds to the `digest_algorithms_supported` server metadata which was added by the third implementer's draft of OpenID Connect for Identity Assurance 1.0. |
| <code>supportedDocuments?</code> | <code>string[]</code> | Document types supported by this service. This property corresponds to the `documents_supported` server metadata. |
| <code>supportedDocumentsMethods?</code> | <code>string[]</code> | validation and verification processes supported by this service. This property corresponds to the `documents_methods_supported` server metadata.<br><br>The third implementer's draft of [OpenID Connect for Identity Assurance 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html) renamed the `id_documents_verification_methods_supported` server metadata to `documents_methods_supported`. |
| <code>supportedDocumentsValidationMethods?</code> | <code>string[]</code> | Document validation methods supported by this service. This property corresponds to the `documents_validation_methods_supported` server metadata which was added by the third implementer's draft of |
| <code>supportedDocumentsVerificationMethods?</code> | <code>string[]</code> | Document verification methods supported by this service. This property corresponds to the `documents_verification_methods_supported` server metadata which was added by the third implementer's draft of [OpenID Connect for Identity Assurance 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html) |
| <code>supportedElectronicRecords?</code> | <code>string[]</code> | Electronic record types supported by this service. This property corresponds to the `electronic_records_supported` server metadata which was added by the third implementer's draft of [OpenID Connect for Identity Assurance 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html) |
| <code>supportedClientRegistrationTypes?</code> | <code>[ClientRegistrationType](src/models/client-registration-type.ts)[]</code> | - |
| <code>tokenExchangeByIdentifiableClientsOnly?</code> | <code>boolean</code> | The flag indicating whether to prohibit unidentifiable clients from making token exchange requests. |
| <code>tokenExchangeByConfidentialClientsOnly?</code> | <code>boolean</code> | The flag indicating whether to prohibit public clients from making token exchange requests. |
| <code>tokenExchangeByPermittedClientsOnly?</code> | <code>boolean</code> | The flag indicating whether to prohibit clients that have no explicit permission from making token exchange requests. |
| <code>tokenExchangeEncryptedJwtRejected?</code> | <code>boolean</code> | The flag indicating whether to reject token exchange requests which use encrypted JWTs as input tokens. |
| <code>tokenExchangeUnsignedJwtRejected?</code> | <code>boolean</code> | The flag indicating whether to reject token exchange requests which use unsigned JWTs as input tokens. |
| <code>jwtGrantByIdentifiableClientsOnly?</code> | <code>boolean</code> | The flag indicating whether to prohibit unidentifiable clients from using the grant type "urn:ietf:params:oauth:grant-type:jwt-bearer". |
| <code>jwtGrantEncryptedJwtRejected?</code> | <code>boolean</code> | The flag indicating whether to reject token requests that use an encrypted JWT as an authorization grant with the grant type "urn:ietf:params:oauth:grant-type:jwt-bearer". |
| <code>jwtGrantUnsignedJwtRejected?</code> | <code>boolean</code> | The flag indicating whether to reject token requests that use an unsigned JWT as an authorization grant with the grant type "urn:ietf:params:oauth:grant-type:jwt-bearer". |
| <code>dcrDuplicateSoftwareIdBlocked?</code> | <code>boolean</code> | The flag indicating whether to block DCR (Dynamic Client Registration) requests whose "software_id" has already been used previously. |
| <code>trustAnchors?</code> | <code>[TrustAnchor](src/models/trust-anchor.ts)[]</code> | The trust anchors that are referenced when this service resolves trust chains of relying parties.<br><br>If this property is empty, client registration fails regardless of whether its type is `automatic` or `explicit`. It means that OpenID Connect Federation 1.0 does not work. |
| <code>openidDroppedOnRefreshWithoutOfflineAccess?</code> | <code>boolean</code> | The flag indicating whether the openid scope should be dropped from scopes list assigned to access token issued when a refresh token grant is used. |
| <code>idTokenDroppedOnIssueWithoutOpenid?</code> | <code>boolean</code> | The flag indicating whether to refrain from issuing an ID token when the `openid` scope has been removed from the scopes to be granted by the `scopes` request parameter of the `/auth/authorization/issue` API.<br><br>Flows whose `response_type` contains `id_token`, and flows that requested Native SSO, are not affected, because both require an ID token. |
| <code>supportedDocumentsCheckMethods?</code> | <code>string[]</code> | Supported document check methods. This property corresponds to the `documents_check_methods_supported` server metadata which was added by the fourth implementer's draft of OpenID Connect for Identity Assurance 1.0. |
| <code>rsResponseSigned?</code> | <code>boolean</code> | The flag indicating whether this service signs responses from the resource server. |
| <code>cnonceDuration?</code> | <code>number</code> | The duration of `c_nonce`. |
| <code>dpopNonceRequired?</code> | <code>boolean</code> | Whether to require DPoP proof JWTs to include the `nonce` claim whenever they are presented. |
| <code>verifiableCredentialsEnabled?</code> | <code>boolean</code> | Get the flag indicating whether the feature of Verifiable Credentials for this service is enabled or not. |
| <code>credentialJwksUri?</code> | <code>string</code> | The URL at which the JWK Set document of the credential issuer is exposed. |
| <code>credentialOfferDuration?</code> | <code>number</code> | The default duration of credential offers in seconds. |
| <code>dpopNonceDuration?</code> | <code>number</code> | The duration of nonce values for DPoP proof JWTs in seconds. |
| <code>preAuthorizedGrantAnonymousAccessSupported?</code> | <code>boolean</code> | The flag indicating whether token requests using the pre-authorized code grant flow by unidentifiable clients are allowed. |
| <code>credentialTransactionDuration?</code> | <code>number</code> | The duration of transaction ID in seconds that may be issued as a result of a credential request or a batch credential request. |
| <code>introspectionSignatureKeyId?</code> | <code>string</code> | The key ID of the key for signing introspection responses. |
| <code>resourceSignatureKeyId?</code> | <code>string</code> | The key ID of the key for signing introspection responses. |
| <code>userPinLength?</code> | <code>number</code> | The default length of user PINs. |
| <code>supportedPromptValues?</code> | <code>[Prompt](src/models/prompt.ts)[]</code> | The supported `prompt` values. |
| <code>idTokenReissuable?</code> | <code>boolean</code> | The flag indicating whether to enable the feature of ID token reissuance in the refresh token flow. |
| <code>credentialJwks?</code> | <code>string</code> | The JWK Set document containing private keys that are used to sign verifiable credentials. |
| <code>fapiModes?</code> | <code>[FapiMode](src/models/fapi-mode.ts)[]</code> | FAPI modes for this service.<br><br>When the value of this property is not `null`, Authlete always processes requests to this service based on the specified FAPI modes if the FAPI feature is enabled in Authlete and the FAPI profile is supported by this service.<br><br>For instance, when this property is set to an array containing `FAPI1_ADVANCED` only, Authlete always processes requests to this service based on "Financial-grade API Security Profile 1.0 - Part 2: Advanced" if the FAPI feature is enabled in Authlete and the FAPI profile is supported by this service. |
| <code>credentialDuration?</code> | <code>number</code> | The default duration of verifiable credentials in seconds. |
| <code>credentialIssuerMetadata?</code> | <code>[CredentialIssuerMetadata](src/models/credential-issuer-metadata.ts)</code> | - |
| <code>idTokenAudType?</code> | <code>string</code> | The type of the `aud` claim in ID tokens. |
| <code>nativeSsoSupported?</code> | <code>boolean</code> | Flag that enables the [OpenID Connect Native SSO for Mobile Apps 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) specification (“Native SSO”). When this property is **not** `true`, Native SSO specific parameters are ignored or treated as errors. For example:<br><br>* The `device_sso` scope has no special meaning (Authlete does not embed the `sid` claim in ID tokens).<br>* The `urn:openid:params:token-type:device-secret` token type is treated as unknown and results in an error.<br><br>When set to `true`, the server metadata advertises `"native_sso_supported": true`. See [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) and [RFC 8414 §2](https://www.rfc-editor.org/rfc/rfc8414.html#section-2) for background. Native SSO is available in Authlete 3.0 and later. |
| <code>oid4VciVersion?</code> | <code>string</code> | Version of the [OpenID for Verifiable Credential Issuance](https://www.authlete.com/developers/oid4vci/) (OID4VCI) specification to support.<br><br>Accepted values are:<br><br>* `null` or `"1.0-ID1"` → Implementer’s Draft 1.<br>* `"1.0"` or `"1.0-Final"` → Final 1.0 specification.<br><br>Choose the value that matches the OID4VCI behaviour your service should expose. See the OID4VCI documentation for details. |
| <code>cimdMetadataPolicyEnabled?</code> | <code>boolean</code> | Flag that controls whether the CIMD metadata policy is applied to client metadata obtained through the Client ID Metadata Document (CIMD) mechanism. |
| <code>clientIdMetadataDocumentSupported?</code> | <code>boolean</code> | Indicates whether the Client ID Metadata Document (CIMD) mechanism is supported. When `true`, the service will attempt to retrieve client metadata via CIMD where applicable. |
| <code>cimdAllowlistEnabled?</code> | <code>boolean</code> | Enables the allowlist for CIMD. When `true`, only CIMD endpoints that are on the allowlist are used. |
| <code>cimdAllowlist?</code> | <code>string[]</code> | The allowlist of CIMD endpoints (hosts/URIs) that may be used when retrieving client metadata via Client ID Metadata Documents. |
| <code>cimdAlwaysRetrieved?</code> | <code>boolean</code> | If `true`, CIMD retrieval is always attempted for clients, regardless of other conditions. |
| <code>cimdHttpPermitted?</code> | <code>boolean</code> | Allows CIMD retrieval over plain HTTP. When `false`, only HTTPS CIMD endpoints are allowed. |
| <code>cimdQueryPermitted?</code> | <code>boolean</code> | Allows the use of query parameters when retrieving CIMD metadata. When `false`, query parameters are disallowed for CIMD requests. |
| <code>cimdMetadataPolicy?</code> | <code>string</code> | The metadata policy applied to client metadata obtained through the CIMD mechanism. The value must follow the metadata policy grammar defined in [OpenID Federation 1.0 §6.1 Metadata Policy](https://openid.net/specs/openid-federation-1_0.html#name-metadata-policy). |
| <code>httpAliasProhibited?</code> | <code>boolean</code> | When `true`, client ID aliases starting with `https://` or `http://` are prohibited. |
| <code>attestationChallengeTimeWindow?</code> | <code>number</code> | The time window of attestation challenges in seconds. This is used for OAuth 2.0 Attestation-Based Client Authentication. |
| <code>clientAttesterRootsEnabled?</code> | <code>boolean</code> | The flag indicating whether the attester roots for Client Attestation JWT x5c chain validation are enabled. |
| <code>clientAttesterRootsOnly?</code> | <code>boolean</code> | The flag indicating whether only client authentication validated via attester roots is accepted. |
| <code>keyAttesterRootsEnabled?</code> | <code>boolean</code> | The flag indicating whether the attester roots for Key Attestation JWT x5c chain validation are enabled. |
| <code>keyAttesterRootsOnly?</code> | <code>boolean</code> | The flag indicating whether only key attestation validated via attester roots is accepted. |
| <code>clientAttesterRoots?</code> | <code>string[]</code> | The trusted root certificates (PEM-encoded X.509) for validating the x5c chain in Client Attestation JWTs. |
| <code>keyAttesterRoots?</code> | <code>string[]</code> | The trusted root certificates (PEM-encoded X.509) for validating the x5c chain in Key Attestation JWTs. |
| <code>backchannelLogoutSupported?</code> | <code>boolean</code> | The flag indicating whether this service supports OpenID Connect Back-Channel Logout 1.0. |
| <code>backchannelLogoutSessionSupported?</code> | <code>boolean</code> | The flag indicating whether this service includes a `sid` (session ID) claim in ID tokens, supporting per-session backchannel logout. |
| <code>haipVersion?</code> | <code>string</code> | The HAIP version to comply with. Valid values for this property are as follows: `"1.0"`. If this property is set, requests to this service undergo additional validation based on the specified version of the [HAIP](https://openid.net/specs/openid4vc-high-assurance-interoperability-profile-1_0.html) specification. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceManagement.serviceUpdateApi(request)`

- **OnSuccess**: <code>[Service](src/models/service.ts)</code>
- **OnError**: throws <code>[ServiceManagement.ServiceUpdateApiError](src/resources/service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceManagement.serviceUpdateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Service, ServiceManagement.ServiceUpdateApiError&gt;</code>, with `result.value` of type <code>[Service](src/models/service.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ClientManagement

> Source: [ClientManagement](src/resources/client-management.ts)

<details>
<summary><code>clientAuthorizationDeleteApi(request: ClientManagement.ClientAuthorizationDeleteApiRequest, options?: RequestOptions): ApiPromise&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete all existing access tokens issued to a client application by an end-user.

The subject parameter is required and must be provided as a query parameter.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientAuthorizationDeleteApi({
    serviceId: "some example string",
    clientId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type ClientAuthorizationDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientAuthorizationDeleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientAuthorizationDeleteApi({
  serviceId: "some example string",
  clientId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientAuthorizationDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientAuthorizationDeleteApi(request)`

- **OnSuccess**: <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientAuthorizationDeleteApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientAuthorizationDeleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteApiError&gt;</code>, with `result.value` of type <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientAuthorizationDeleteApiPost(request: ClientManagement.ClientAuthorizationDeleteApiPostRequest, options?: RequestOptions): ApiPromise&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteApiPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete all existing access tokens issued to a client application by an end-user.

The subject parameter is required.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientAuthorizationDeleteApiPost({
    serviceId: "some example string",
    clientId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type ClientAuthorizationDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientAuthorizationDeleteApiPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientAuthorizationDeleteApiPost({
  serviceId: "some example string",
  clientId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientAuthorizationDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientAuthorizationDeleteApiPost(request)`

- **OnSuccess**: <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientAuthorizationDeleteApiPostError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientAuthorizationDeleteApiPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteApiPostError&gt;</code>, with `result.value` of type <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientAuthorizationDeleteBySubjectApi(request: ClientManagement.ClientAuthorizationDeleteBySubjectApiRequest, options?: RequestOptions): ApiPromise&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteBySubjectApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete all existing access tokens issued to a client application by an end-user. In this variant, the subject is provided in the path.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientAuthorizationDeleteBySubjectApi({
    serviceId: "some example string",
    clientId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type ClientAuthorizationDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientAuthorizationDeleteBySubjectApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientAuthorizationDeleteBySubjectApi({
  serviceId: "some example string",
  clientId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientAuthorizationDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientAuthorizationDeleteBySubjectApi(request)`

- **OnSuccess**: <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientAuthorizationDeleteBySubjectApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientAuthorizationDeleteBySubjectApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientAuthorizationDeleteBySubjectApiError&gt;</code>, with `result.value` of type <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientAuthorizationGetListApi(request: ClientManagement.ClientAuthorizationGetListApiRequest, options?: RequestOptions): ApiPromise&lt;ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of client applications that an end-user has authorized.

The subject parameter is required and can be provided as a query parameter.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientAuthorizationGetListApi({
    serviceId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type ClientAuthorizationGetListResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientAuthorizationGetListApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientAuthorizationGetListApi({
  serviceId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientAuthorizationGetListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |
| <code>developer?</code> | <code>string</code> | Unique ID of a client developer. |
| <code>start?</code> | <code>number</code> | Start index of search results (inclusive). The default value is 0. |
| <code>end?</code> | <code>number</code> | End index of search results (exclusive). The default value is 5. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientAuthorizationGetListApi(request)`

- **OnSuccess**: <code>[ClientAuthorizationGetListResponse](src/models/client-authorization-get-list-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientAuthorizationGetListApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientAuthorizationGetListApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListApiError&gt;</code>, with `result.value` of type <code>[ClientAuthorizationGetListResponse](src/models/client-authorization-get-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientAuthorizationGetListApiPost(request: ClientManagement.ClientAuthorizationGetListApiPostRequest, options?: RequestOptions): ApiPromise&lt;ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListApiPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of client applications that an end-user has authorized.

The subject parameter is required.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientAuthorizationGetListApiPost({
    serviceId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type ClientAuthorizationGetListResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientAuthorizationGetListApiPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientAuthorizationGetListApiPost({
  serviceId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientAuthorizationGetListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |
| <code>developer?</code> | <code>string</code> | Unique ID of a client developer. |
| <code>start?</code> | <code>number</code> | Start index of search results (inclusive). |
| <code>end?</code> | <code>number</code> | End index of search results (exclusive). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientAuthorizationGetListApiPost(request)`

- **OnSuccess**: <code>[ClientAuthorizationGetListResponse](src/models/client-authorization-get-list-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientAuthorizationGetListApiPostError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientAuthorizationGetListApiPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListApiPostError&gt;</code>, with `result.value` of type <code>[ClientAuthorizationGetListResponse](src/models/client-authorization-get-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientAuthorizationGetListBySubjectApi(request: ClientManagement.ClientAuthorizationGetListBySubjectApiRequest, options?: RequestOptions): ApiPromise&lt;ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListBySubjectApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of client applications that an end-user has authorized. In this variant, the subject is provided in the path.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientAuthorizationGetListBySubjectApi({
    serviceId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type ClientAuthorizationGetListResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientAuthorizationGetListBySubjectApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientAuthorizationGetListBySubjectApi({
  serviceId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientAuthorizationGetListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |
| <code>developer?</code> | <code>string</code> | Unique ID of a client developer. |
| <code>start?</code> | <code>number</code> | Start index of search results (inclusive). The default value is 0. |
| <code>end?</code> | <code>number</code> | End index of search results (exclusive). The default value is 5. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientAuthorizationGetListBySubjectApi(request)`

- **OnSuccess**: <code>[ClientAuthorizationGetListResponse](src/models/client-authorization-get-list-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientAuthorizationGetListBySubjectApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientAuthorizationGetListBySubjectApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientAuthorizationGetListResponse, ClientManagement.ClientAuthorizationGetListBySubjectApiError&gt;</code>, with `result.value` of type <code>[ClientAuthorizationGetListResponse](src/models/client-authorization-get-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientAuthorizationUpdateApi(request: ClientManagement.ClientAuthorizationUpdateApiRequest, options?: RequestOptions): ApiPromise&lt;Result, ClientManagement.ClientAuthorizationUpdateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update attributes of all existing access tokens given to a client application.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientAuthorizationUpdateApi({
    serviceId: "some example string",
    clientId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type Result
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientAuthorizationUpdateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientAuthorizationUpdateApi({
  serviceId: "some example string",
  clientId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Result
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>subject</code> | <code>string</code> | The subject (= unique identifier) of the end-user who has granted authorization to the client application. |
| <code>scopes?</code> | <code>string[]</code> | An array of new scopes. Optional. If a non-null value is given, the new scopes are set to all existing access tokens. If an API call is made using `"Content-Type: application/x-www-form-urlencoded"`, scope names listed in this request parameter should be delimited by spaces (after form encoding, spaces are converted to `+`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientAuthorizationUpdateApi(request)`

- **OnSuccess**: <code>[Result](src/models/result.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientAuthorizationUpdateApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientAuthorizationUpdateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Result, ClientManagement.ClientAuthorizationUpdateApiError&gt;</code>, with `result.value` of type <code>[Result](src/models/result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientCreateApi(request: ClientManagement.ClientCreateApiRequest, options?: RequestOptions): ApiPromise&lt;Client, ClientManagement.ClientCreateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new client.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientCreateApi({
    serviceId: "some example string",
    body: {
      clientName: "My Client",
      clientIdAlias: "my-client",
      clientType: ClientType.Confidential,
      applicationType: ApplicationType.Web,
      grantTypes: [GrantType.AuthorizationCode, GrantType.RefreshToken],
      responseTypes: [ResponseType.Code, ResponseType.Token],
      redirectUris: ["https://my-client.example.com/cb1", "https://my-client.example.com/cb2"],
      tokenAuthMethod: ClientAuthMethod.ClientSecretBasic,
      attributes: [
        { key: "attribute1-key", value: "attribute1-value" },
        { key: "attribute2-key", value: "attribute2-value" },
      ],
    },
  });
  // TODO: Handle 'response' of type Client
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientCreateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientCreateApi({
  serviceId: "some example string",
  body: {
    clientName: "My Client",
    clientIdAlias: "my-client",
    clientType: ClientType.Confidential,
    applicationType: ApplicationType.Web,
    grantTypes: [GrantType.AuthorizationCode, GrantType.RefreshToken],
    responseTypes: [ResponseType.Code, ResponseType.Token],
    redirectUris: ["https://my-client.example.com/cb1", "https://my-client.example.com/cb2"],
    tokenAuthMethod: ClientAuthMethod.ClientSecretBasic,
    attributes: [
      { key: "attribute1-key", value: "attribute1-value" },
      { key: "attribute2-key", value: "attribute2-value" },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Client
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body?</code> | <code>[Client](src/models/client.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientCreateApi(request)`

- **OnSuccess**: <code>[Client](src/models/client.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientCreateApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientCreateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Client, ClientManagement.ClientCreateApiError&gt;</code>, with `result.value` of type <code>[Client](src/models/client.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientCursorListApi(request: ClientManagement.ClientCursorListApiRequest, options?: RequestOptions): ApiPromise&lt;ClientCursorListResponse, ClientManagement.ClientCursorListApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the clients in the requested service via cursor based iteration.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientCursorListApi({ serviceId: 1 });
  // TODO: Handle 'response' of type ClientCursorListResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientCursorListApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientCursorListApi({ serviceId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientCursorListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>number</code> | The ID of the service to retrieve a list of clients from. |
| <code>cursor?</code> | <code>string</code> | This should be set to the value of `nextCursor` from a previous call to this endpoint. Which will retrieve the next set of clients available and receive the next available set. If this is not provided the list operation will start from the beginning. |
| <code>limit?</code> | <code>number</code> | The maximum amount of results to return from this request. This value will be clamped between 1 and the allowed maximum. The default will be used if no value is provided. |
| <code>includeTotalCount?</code> | <code>boolean</code> | Indicates whether the `totalCount` property should be calculated and included in the response, otherwise it will be unset. For some large datasets this can be expensive and is not always required to calculate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientCursorListApi(request)`

- **OnSuccess**: <code>[ClientCursorListResponse](src/models/client-cursor-list-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientCursorListApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientCursorListApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientCursorListResponse, ClientManagement.ClientCursorListApiError&gt;</code>, with `result.value` of type <code>[ClientCursorListResponse](src/models/client-cursor-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientDeleteApi(request: ClientManagement.ClientDeleteApiRequest, options?: RequestOptions): ApiPromise&lt;undefined, ClientManagement.ClientDeleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a client.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.clientManagement.clientDeleteApi({
    serviceId: "some example string",
    clientId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientDeleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientDeleteApi({
  serviceId: "some example string",
  clientId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | The client ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientDeleteApi(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ClientManagement.ClientDeleteApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientDeleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ClientManagement.ClientDeleteApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientExtensionRequestablesScopesDeleteApi(request: ClientManagement.ClientExtensionRequestablesScopesDeleteApiRequest, options?: RequestOptions): ApiPromise&lt;undefined, ClientManagement.ClientExtensionRequestablesScopesDeleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete requestable scopes of a client


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.clientManagement.clientExtensionRequestablesScopesDeleteApi({
    serviceId: "some example string",
    clientId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientExtensionRequestablesScopesDeleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientExtensionRequestablesScopesDeleteApi({
  serviceId: "some example string",
  clientId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientExtensionRequestablesScopesDeleteApi(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ClientManagement.ClientExtensionRequestablesScopesDeleteApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientExtensionRequestablesScopesDeleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ClientManagement.ClientExtensionRequestablesScopesDeleteApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientExtensionRequestablesScopesGetApi(request: ClientManagement.ClientExtensionRequestablesScopesGetApiRequest, options?: RequestOptions): ApiPromise&lt;ClientExtensionRequestableScopesGetResponse, ClientManagement.ClientExtensionRequestablesScopesGetApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the requestable scopes per client


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientExtensionRequestablesScopesGetApi({
    serviceId: "some example string",
    clientId: "some example string",
  });
  // TODO: Handle 'response' of type ClientExtensionRequestableScopesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientExtensionRequestablesScopesGetApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientExtensionRequestablesScopesGetApi({
  serviceId: "some example string",
  clientId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientExtensionRequestableScopesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientExtensionRequestablesScopesGetApi(request)`

- **OnSuccess**: <code>[ClientExtensionRequestableScopesGetResponse](src/models/client-extension-requestable-scopes-get-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientExtensionRequestablesScopesGetApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientExtensionRequestablesScopesGetApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientExtensionRequestableScopesGetResponse, ClientManagement.ClientExtensionRequestablesScopesGetApiError&gt;</code>, with `result.value` of type <code>[ClientExtensionRequestableScopesGetResponse](src/models/client-extension-requestable-scopes-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientExtensionRequestablesScopesUpdateApi(request: ClientManagement.ClientExtensionRequestablesScopesUpdateApiRequest, options?: RequestOptions): ApiPromise&lt;ClientExtensionRequestableScopesUpdateResponse, ClientManagement.ClientExtensionRequestablesScopesUpdateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update requestable scopes of a client


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientExtensionRequestablesScopesUpdateApi({
    serviceId: "some example string",
    clientId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ClientExtensionRequestableScopesUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientExtensionRequestablesScopesUpdateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientExtensionRequestablesScopesUpdateApi({
  serviceId: "some example string",
  clientId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientExtensionRequestableScopesUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>body</code> | <code>[ClientExtensionRequestableScopesUpdateRequest](src/models/client-extension-requestable-scopes-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientExtensionRequestablesScopesUpdateApi(request)`

- **OnSuccess**: <code>[ClientExtensionRequestableScopesUpdateResponse](src/models/client-extension-requestable-scopes-update-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientExtensionRequestablesScopesUpdateApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientExtensionRequestablesScopesUpdateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientExtensionRequestableScopesUpdateResponse, ClientManagement.ClientExtensionRequestablesScopesUpdateApiError&gt;</code>, with `result.value` of type <code>[ClientExtensionRequestableScopesUpdateResponse](src/models/client-extension-requestable-scopes-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientExtensionRequestablesScopesUpdateApiPost(request: ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostRequest, options?: RequestOptions): ApiPromise&lt;ClientExtensionRequestableScopesUpdateResponse, ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update requestable scopes of a client


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientExtensionRequestablesScopesUpdateApiPost({
    serviceId: "some example string",
    clientId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ClientExtensionRequestableScopesUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientExtensionRequestablesScopesUpdateApiPost({
  serviceId: "some example string",
  clientId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientExtensionRequestableScopesUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>body</code> | <code>[ClientExtensionRequestableScopesUpdateRequest](src/models/client-extension-requestable-scopes-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientExtensionRequestablesScopesUpdateApiPost(request)`

- **OnSuccess**: <code>[ClientExtensionRequestableScopesUpdateResponse](src/models/client-extension-requestable-scopes-update-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientExtensionRequestablesScopesUpdateApiPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientExtensionRequestableScopesUpdateResponse, ClientManagement.ClientExtensionRequestablesScopesUpdateApiPostError&gt;</code>, with `result.value` of type <code>[ClientExtensionRequestableScopesUpdateResponse](src/models/client-extension-requestable-scopes-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientFlagUpdateApi(request: ClientManagement.ClientFlagUpdateApiRequest, options?: RequestOptions): ApiPromise&lt;ClientFlagUpdateResponse, ClientManagement.ClientFlagUpdateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lock and unlock a client


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientFlagUpdateApi({
    serviceId: "some example string",
    clientIdentifier: "some example string",
    clientLocked: true,
  });
  // TODO: Handle 'response' of type ClientFlagUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientFlagUpdateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientFlagUpdateApi({
  serviceId: "some example string",
  clientIdentifier: "some example string",
  clientLocked: true,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientFlagUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientIdentifier</code> | <code>string</code> | A client ID. |
| <code>clientLocked</code> | <code>boolean</code> | The flag value to be set |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientFlagUpdateApi(request)`

- **OnSuccess**: <code>[ClientFlagUpdateResponse](src/models/client-flag-update-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientFlagUpdateApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientFlagUpdateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientFlagUpdateResponse, ClientManagement.ClientFlagUpdateApiError&gt;</code>, with `result.value` of type <code>[ClientFlagUpdateResponse](src/models/client-flag-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientGetApi(request: ClientManagement.ClientGetApiRequest, options?: RequestOptions): ApiPromise&lt;Client, ClientManagement.ClientGetApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a client.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientGetApi({
    serviceId: "some example string",
    clientId: "some example string",
  });
  // TODO: Handle 'response' of type Client
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientGetApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientGetApi({
  serviceId: "some example string",
  clientId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Client
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientGetApi(request)`

- **OnSuccess**: <code>[Client](src/models/client.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientGetApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientGetApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Client, ClientManagement.ClientGetApiError&gt;</code>, with `result.value` of type <code>[Client](src/models/client.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientGetListApi(request: ClientManagement.ClientGetListApiRequest, options?: RequestOptions): ApiPromise&lt;ClientGetListResponse, ClientManagement.ClientGetListApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of clients on a service.

If the access token can view a full service (including an admin), all clients within the service are returned. Otherwise, only clients that the access token can view within the service are returned.
- ViewClient: []


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientGetListApi({ serviceId: "some example string" });
  // TODO: Handle 'response' of type ClientGetListResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientGetListApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientGetListApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientGetListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>developer?</code> | <code>string</code> | The developer of client applications. The default value is null. If this parameter is not set to `null`, client application of the specified developer are returned. Otherwise, all client applications that belong to the service are returned. |
| <code>start?</code> | <code>number</code> | Start index (inclusive) of the result set. The default value is 0. Must not be a negative number. |
| <code>end?</code> | <code>number</code> | End index (exclusive) of the result set. The default value is 5. Must not be a negative number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientGetListApi(request)`

- **OnSuccess**: <code>[ClientGetListResponse](src/models/client-get-list-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientGetListApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientGetListApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientGetListResponse, ClientManagement.ClientGetListApiError&gt;</code>, with `result.value` of type <code>[ClientGetListResponse](src/models/client-get-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientGrantedScopesDeleteApi(request: ClientManagement.ClientGrantedScopesDeleteApiRequest, options?: RequestOptions): ApiPromise&lt;Result, ClientManagement.ClientGrantedScopesDeleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the set of scopes that an end-user has granted to a client application.

Even if records about granted scopes are deleted by calling this API, existing access tokens are not deleted and scopes of existing access tokens are not changed. The subject parameter is required and must be provided as a query parameter.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientGrantedScopesDeleteApi({
    serviceId: "some example string",
    clientId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type Result
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientGrantedScopesDeleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientGrantedScopesDeleteApi({
  serviceId: "some example string",
  clientId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Result
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientGrantedScopesDeleteApi(request)`

- **OnSuccess**: <code>[Result](src/models/result.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientGrantedScopesDeleteApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientGrantedScopesDeleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Result, ClientManagement.ClientGrantedScopesDeleteApiError&gt;</code>, with `result.value` of type <code>[Result](src/models/result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientGrantedScopesDeleteBySubjectApi(request: ClientManagement.ClientGrantedScopesDeleteBySubjectApiRequest, options?: RequestOptions): ApiPromise&lt;Result, ClientManagement.ClientGrantedScopesDeleteBySubjectApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the set of scopes that an end-user has granted to a client application. In this variant, the subject is provided in the path.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientGrantedScopesDeleteBySubjectApi({
    serviceId: "some example string",
    clientId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type Result
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientGrantedScopesDeleteBySubjectApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientGrantedScopesDeleteBySubjectApi({
  serviceId: "some example string",
  clientId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Result
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientGrantedScopesDeleteBySubjectApi(request)`

- **OnSuccess**: <code>[Result](src/models/result.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientGrantedScopesDeleteBySubjectApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientGrantedScopesDeleteBySubjectApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Result, ClientManagement.ClientGrantedScopesDeleteBySubjectApiError&gt;</code>, with `result.value` of type <code>[Result](src/models/result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientGrantedScopesGetApi(request: ClientManagement.ClientGrantedScopesGetApiRequest, options?: RequestOptions): ApiPromise&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of scopes that a user has granted to a client application.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientGrantedScopesGetApi({
    serviceId: "715948317",
    clientId: "1140735077",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type ClientAuthorizationDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientGrantedScopesGetApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientGrantedScopesGetApi({
  serviceId: "715948317",
  clientId: "1140735077",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientAuthorizationDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientGrantedScopesGetApi(request)`

- **OnSuccess**: <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientGrantedScopesGetApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientGrantedScopesGetApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetApiError&gt;</code>, with `result.value` of type <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientGrantedScopesGetApiPost(request: ClientManagement.ClientGrantedScopesGetApiPostRequest, options?: RequestOptions): ApiPromise&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetApiPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of scopes that a user has granted to a client application.

The subject parameter is required.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientGrantedScopesGetApiPost({
    serviceId: "some example string",
    clientId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type ClientAuthorizationDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientGrantedScopesGetApiPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientGrantedScopesGetApiPost({
  serviceId: "some example string",
  clientId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientAuthorizationDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientGrantedScopesGetApiPost(request)`

- **OnSuccess**: <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientGrantedScopesGetApiPostError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientGrantedScopesGetApiPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetApiPostError&gt;</code>, with `result.value` of type <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientGrantedScopesGetBySubjectApi(request: ClientManagement.ClientGrantedScopesGetBySubjectApiRequest, options?: RequestOptions): ApiPromise&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetBySubjectApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of scopes that a user has granted to a client application. In this variant, the subject is provided in the path.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientGrantedScopesGetBySubjectApi({
    serviceId: "some example string",
    clientId: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type ClientAuthorizationDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientGrantedScopesGetBySubjectApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientGrantedScopesGetBySubjectApi({
  serviceId: "some example string",
  clientId: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientAuthorizationDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientId</code> | <code>string</code> | A client ID. |
| <code>subject</code> | <code>string</code> | Unique user ID of an end-user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientGrantedScopesGetBySubjectApi(request)`

- **OnSuccess**: <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientGrantedScopesGetBySubjectApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientGrantedScopesGetBySubjectApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientAuthorizationDeleteResponse, ClientManagement.ClientGrantedScopesGetBySubjectApiError&gt;</code>, with `result.value` of type <code>[ClientAuthorizationDeleteResponse](src/models/client-authorization-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientSearchApi(request: ClientManagement.ClientSearchApiRequest, options?: RequestOptions): ApiPromise&lt;ClientSearchResponse, ClientManagement.ClientSearchApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search the clients in the requested service that match the condition provided in the `q` query parameter. Results are returned via cursor based iteration. To iterate through all clients without a search condition, use the `/api/&#123;serviceId&#125;/client` API instead.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientSearchApi({ serviceId: 1 });
  // TODO: Handle 'response' of type ClientSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientSearchApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientSearchApi({ serviceId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>number</code> | The ID of the service to retrieve a list of clients from. |
| <code>q?</code> | <code>string</code> | The search query. See the description of this API for the supported syntax and fields.<br><br>This parameter is required unless `cursor` is provided. When `cursor` is provided, this parameter is ignored and the search query stored in the cursor is used instead. |
| <code>cursor?</code> | <code>string</code> | This should be set to the value of `nextCursor` from a previous call to this endpoint, which will retrieve the next set of clients matching the original search query. If this is not provided the search will start from the beginning. |
| <code>limit?</code> | <code>number</code> | The maximum amount of results to return from this request. This value will be clamped between 1 and the allowed maximum. The default will be used if no value is provided. |
| <code>includeTotalCount?</code> | <code>boolean</code> | Indicates whether the `totalCount` property should be calculated and included in the response, otherwise it will be unset.<br><br>**Warning:** Calculating the total count requires an additional query and reduces the performance and throughput of this API. Only set this to `true` when the total count is actually required, rather than on every request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientSearchApi(request)`

- **OnSuccess**: <code>[ClientSearchResponse](src/models/client-search-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientSearchApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientSearchApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientSearchResponse, ClientManagement.ClientSearchApiError&gt;</code>, with `result.value` of type <code>[ClientSearchResponse](src/models/client-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientSecretRefreshApi(request: ClientManagement.ClientSecretRefreshApiRequest, options?: RequestOptions): ApiPromise&lt;ClientSecretRefreshResponse, ClientManagement.ClientSecretRefreshApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refresh the client secret of a client. A new value of the client secret will be generated by the Authlete server.

If you want to specify a new value, use `/api/client/secret/update` API.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientSecretRefreshApi({
    serviceId: "some example string",
    clientIdentifier: "some example string",
  });
  // TODO: Handle 'response' of type ClientSecretRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientSecretRefreshApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientSecretRefreshApi({
  serviceId: "some example string",
  clientIdentifier: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientSecretRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientIdentifier</code> | <code>string</code> | The client ID or the client ID alias of a client. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientSecretRefreshApi(request)`

- **OnSuccess**: <code>[ClientSecretRefreshResponse](src/models/client-secret-refresh-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientSecretRefreshApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientSecretRefreshApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientSecretRefreshResponse, ClientManagement.ClientSecretRefreshApiError&gt;</code>, with `result.value` of type <code>[ClientSecretRefreshResponse](src/models/client-secret-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientSecretUpdateApi(request: ClientManagement.ClientSecretUpdateApiRequest, options?: RequestOptions): ApiPromise&lt;ClientSecretRefreshResponse, ClientManagement.ClientSecretUpdateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the client secret of a client.

If you want to have the Authlete server generate a new value of the client secret, use `/api/client/secret/refresh` API.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientSecretUpdateApi({
    serviceId: "some example string",
    clientIdentifier: "some example string",
    clientSecret: "some example string",
  });
  // TODO: Handle 'response' of type ClientSecretRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientSecretUpdateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientSecretUpdateApi({
  serviceId: "some example string",
  clientIdentifier: "some example string",
  clientSecret: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientSecretRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientIdentifier</code> | <code>string</code> | The client ID or the client ID alias of a client. |
| <code>clientSecret</code> | <code>string</code> | The new value of the client secret. Valid characters for a client secret are `A-Z`, `a-z`, `0-9`, `-`, and `_`. The maximum length of a client secret is 86. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientSecretUpdateApi(request)`

- **OnSuccess**: <code>[ClientSecretRefreshResponse](src/models/client-secret-refresh-response.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientSecretUpdateApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientSecretUpdateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientSecretRefreshResponse, ClientManagement.ClientSecretUpdateApiError&gt;</code>, with `result.value` of type <code>[ClientSecretRefreshResponse](src/models/client-secret-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientUpdateApi(request: ClientManagement.ClientUpdateApiRequest, options?: RequestOptions): ApiPromise&lt;Client, ClientManagement.ClientUpdateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a client.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientManagement.clientUpdateApi({
    serviceId: "some example string",
    clientIdTemplate: "some example string",
    number: 1140735077,
    serviceNumber: 715948317,
    clientName: "My Test Client",
    clientId: 1140735077,
    clientSecret: "gXz97ISgLs4HuXwOZWch8GEmgL4YMvUJwu3er_kDVVGcA0UOhA9avLPbEmoeZdagi9yC_-tEiT2BdRyH9dbrQQ",
    clientType: ClientType.Public,
    grantTypes: [GrantType.AuthorizationCode],
    responseTypes: [ResponseType.Code],
    redirectUris: ["https://example.com/callback"],
  });
  // TODO: Handle 'response' of type Client
} catch (err) {
  // TODO: Handle 'err' of type ClientManagement.ClientUpdateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientManagement.clientUpdateApi({
  serviceId: "some example string",
  clientIdTemplate: "some example string",
  number: 1140735077,
  serviceNumber: 715948317,
  clientName: "My Test Client",
  clientId: 1140735077,
  clientSecret: "gXz97ISgLs4HuXwOZWch8GEmgL4YMvUJwu3er_kDVVGcA0UOhA9avLPbEmoeZdagi9yC_-tEiT2BdRyH9dbrQQ",
  clientType: ClientType.Public,
  grantTypes: [GrantType.AuthorizationCode],
  responseTypes: [ResponseType.Code],
  redirectUris: ["https://example.com/callback"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Client
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientIdTemplate</code> | <code>string</code> | A client ID. |
| <code>number?</code> | <code>number</code> | The sequential number of the client. The value of this property is assigned by Authlete. |
| <code>serviceNumber?</code> | <code>number</code> | The sequential number of the service of the client application. The value of this property is assigned by Authlete. |
| <code>clientName?</code> | <code>string</code> | The name of the client application. This property corresponds to `client_name` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>clientNames?</code> | <code>[TaggedValue](src/models/tagged-value.ts)[]</code> | Client names with language tags. If the client application has different names for different languages, this property can be used to register the names. |
| <code>description?</code> | <code>string</code> | The description about the client application. |
| <code>descriptions?</code> | <code>[TaggedValue](src/models/tagged-value.ts)[]</code> | Descriptions about the client application with language tags. If the client application has different descriptions for different languages, this property can be used to register the descriptions. |
| <code>clientId?</code> | <code>number</code> | The client identifier used in Authlete API calls. The value of this property is assigned by Authlete. |
| <code>clientSecret?</code> | <code>string</code> | The client secret. A random 512-bit value encoded by base64url (86 letters). The value of this property is assigned by Authlete. |
| <code>clientIdAlias?</code> | <code>string</code> | The value of the client's `client_id` property used in OAuth and OpenID Connect calls. By default, this is a string version of the `clientId` property. |
| <code>clientIdAliasEnabled?</code> | <code>boolean</code> | Deprecated. Always set to `true`. |
| <code>clientType?</code> | <code>[ClientType](src/models/client-type.ts)</code> | The client type, either `CONFIDENTIAL` or `PUBLIC`. See [RFC 6749, 2.1. Client Types](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1) for details. |
| <code>applicationType?</code> | <code>[ApplicationType](src/models/application-type.ts)</code> | The application type. The value of this property affects the validation steps for a redirect URI. See the description about `redirectUris` property for more details. |
| <code>logoUri?</code> | <code>string</code> | The URL pointing to the logo image of the client application.<br><br>This property corresponds to `logo_uri` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>logoUris?</code> | <code>[TaggedValue](src/models/tagged-value.ts)[]</code> | Logo image URLs with language tags. If the client application has different logo images for different languages, this property can be used to register URLs of the images. |
| <code>contacts?</code> | <code>string[]</code> | An array of email addresses of people responsible for the client application.<br><br>This property corresponds to contacts in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>tlsClientCertificateBoundAccessTokens?</code> | <code>boolean</code> | The flag to indicate whether this client use TLS client certificate bound access tokens. |
| <code>dynamicallyRegistered?</code> | <code>boolean</code> | The flag to indicate whether this client has been registered dynamically. For more details, see [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591). |
| <code>softwareId?</code> | <code>string</code> | The unique identifier string assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered.<br><br>This property corresponds to the `software_id metadata` defined in [2. Client Metadata](https://datatracker.ietf.org/doc/html/rfc7591#section-2) of [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591). |
| <code>developer?</code> | <code>string</code> | The unique identifier of the developer who created this client application. |
| <code>softwareVersion?</code> | <code>string</code> | The version identifier string for the client software identified by the software ID.<br><br>This property corresponds to the software_version metadata defined in [2. Client Metadata](https://datatracker.ietf.org/doc/html/rfc7591#section-2) of [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591). |
| <code>registrationAccessTokenHash?</code> | <code>string</code> | The hash of the registration access token for this client. |
| <code>createdAt?</code> | <code>number</code> | The time at which this client was created. The value is represented as milliseconds since the UNIX epoch (1970-01-01). |
| <code>modifiedAt?</code> | <code>number</code> | The time at which this client was last modified. The value is represented as milliseconds since the UNIX epoch (1970-01-01). |
| <code>grantTypes?</code> | <code>[GrantType](src/models/grant-type.ts)[]</code> | A string array of grant types which the client application declares that it will restrict itself to using. This property corresponds to `grant_types` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>responseTypes?</code> | <code>[ResponseType](src/models/response-type.ts)[]</code> | A string array of response types which the client application declares that it will restrict itself to using. This property corresponds to `response_types` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>redirectUris?</code> | <code>string[]</code> | Redirect URIs that the client application uses to receive a response from the authorization endpoint. Requirements for a redirect URI are as follows. |
| <code>authorizationSignAlg?</code> | <code>[JwsAlg](src/models/jws-alg.ts)</code> | The signature algorithm for JWT. This value is represented on 'alg' attribute of the header of JWT.<br><br>it's semantics depends upon where is this defined, for instance:<br>  - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm used to sign it. Check your [KB article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).<br>  - as client authorizationSignAlg value, it represents the signature algorithm used when [creating a JARM response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).<br>  - or as client requestSignAlg value, it specifies which is the expected signature used by [client on a Request Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects). |
| <code>authorizationEncryptionAlg?</code> | <code>[JweAlg](src/models/jwe-alg.ts)</code> | this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this refers to key transport scheme to be used by the client and by the server. For instance:<br>- as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server for transporting they keys on JARM objects<br>- as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm that server expect from client when encrypting a Request Object<br>- as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key transport of id_tokens<br><br>**Please note that some of the algorithms are more secure than others, some are not supported very well cross platforms and some (like RSA1_5) is known to be weak**. |
| <code>authorizationEncryptionEnc?</code> | <code>[JweEnc](src/models/jwe-enc.ts)</code> | This is the encryption algorithm to be used when encrypting a JWT on client or server side. Depending upon the context, this refers to encryption done by the client or by the server. For instance:<br>  - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by server when creating a JARM response<br>  - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by the client when encrypting a Request Object<br>  - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt id_tokens |
| <code>tokenAuthMethod?</code> | <code>[ClientAuthMethod](src/models/client-auth-method.ts)</code> | The client authentication method that the client application declares that it uses at the token endpoint. This property corresponds to `token_endpoint_auth_method` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>tokenAuthSignAlg?</code> | <code>[JwsAlg](src/models/jws-alg.ts)</code> | The signature algorithm for JWT. This value is represented on 'alg' attribute of the header of JWT.<br><br>it's semantics depends upon where is this defined, for instance:<br>  - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm used to sign it. Check your [KB article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).<br>  - as client authorizationSignAlg value, it represents the signature algorithm used when [creating a JARM response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).<br>  - or as client requestSignAlg value, it specifies which is the expected signature used by [client on a Request Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects). |
| <code>selfSignedCertificateKeyId?</code> | <code>string</code> | The key ID of a JWK containing a self-signed certificate of this client. |
| <code>tlsClientAuthSubjectDn?</code> | <code>string</code> | The string representation of the expected subject distinguished name of the certificate this client will use in mutual TLS authentication.<br><br>See `tls_client_auth_subject_dn` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client Registration" for details. |
| <code>tlsClientAuthSanDns?</code> | <code>string</code> | The string representation of the expected DNS subject alternative name of the certificate this client will use in mutual TLS authentication.<br><br>See `tls_client_auth_san_dns` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client Registration" for details. |
| <code>tlsClientAuthSanUri?</code> | <code>string</code> | The string representation of the expected URI subject alternative name of the certificate this client will use in mutual TLS authentication.<br><br>See `tls_client_auth_san_uri` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client Registration" for details. |
| <code>tlsClientAuthSanIp?</code> | <code>string</code> | The string representation of the expected IP address subject alternative name of the certificate this client will use in mutual TLS authentication.<br><br>See `tls_client_auth_san_ip` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client Registration" for details. |
| <code>tlsClientAuthSanEmail?</code> | <code>string</code> | The string representation of the expected email address subject alternative name of the certificate this client will use in mutual TLS authentication.<br><br>See `tls_client_auth_san_email` in "Mutual TLS Profiles for OAuth Clients, 2.3. Dynamic Client Registration" for details. |
| <code>parRequired?</code> | <code>boolean</code> | The flag to indicate whether this client is required to use the pushed authorization request endpoint. This property corresponds to the `require_pushed_authorization_requests` client metadata defined in "OAuth 2.0 Pushed Authorization Requests". |
| <code>requestObjectRequired?</code> | <code>boolean</code> | The flag to indicate whether authorization requests from this client are always required to utilize a request object by using either `request` or `request_uri` request parameter.<br><br>If this flag is set to `true` and the service's `traditionalRequestObjectProcessingApplied` is set to `false`, authorization requests from this client are processed as if `require_signed_request_object` client metadata of this client is `true`. The metadata is defined in "JAR (JWT Secured Authorization Request)". |
| <code>requestSignAlg?</code> | <code>[JwsAlg](src/models/jws-alg.ts)</code> | The signature algorithm for JWT. This value is represented on 'alg' attribute of the header of JWT.<br><br>it's semantics depends upon where is this defined, for instance:<br>  - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm used to sign it. Check your [KB article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).<br>  - as client authorizationSignAlg value, it represents the signature algorithm used when [creating a JARM response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).<br>  - or as client requestSignAlg value, it specifies which is the expected signature used by [client on a Request Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects). |
| <code>requestEncryptionAlg?</code> | <code>[JweAlg](src/models/jwe-alg.ts)</code> | this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this refers to key transport scheme to be used by the client and by the server. For instance:<br>- as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server for transporting they keys on JARM objects<br>- as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm that server expect from client when encrypting a Request Object<br>- as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key transport of id_tokens<br><br>**Please note that some of the algorithms are more secure than others, some are not supported very well cross platforms and some (like RSA1_5) is known to be weak**. |
| <code>requestEncryptionEnc?</code> | <code>[JweEnc](src/models/jwe-enc.ts)</code> | This is the encryption algorithm to be used when encrypting a JWT on client or server side. Depending upon the context, this refers to encryption done by the client or by the server. For instance:<br>  - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by server when creating a JARM response<br>  - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by the client when encrypting a Request Object<br>  - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt id_tokens |
| <code>requestUris?</code> | <code>string[]</code> | An array of URLs each of which points to a request object.<br><br>Authlete requires that URLs used as values for `request_uri` request parameter be pre-registered. This property is used for the pre-registration. See [OpenID Connect Core 1.0, 6.2. Passing a Request Object by Reference](https://openid.net/specs/openid-connect-core-1_0.html#RequestUriParameter) for details. |
| <code>defaultMaxAge?</code> | <code>number</code> | The default maximum authentication age in seconds. This value is used when an authorization request from the client application does not have `max_age` request parameter.<br><br>This property corresponds to `default_max_age` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>defaultAcrs?</code> | <code>string[]</code> | The default ACRs (Authentication Context Class References). This value is used when an authorization request from the client application has neither `acr_values` request parameter nor `acr` claim in claims request parameter. |
| <code>idTokenSignAlg?</code> | <code>[JwsAlg](src/models/jws-alg.ts)</code> | The signature algorithm for JWT. This value is represented on 'alg' attribute of the header of JWT.<br><br>it's semantics depends upon where is this defined, for instance:<br>  - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm used to sign it. Check your [KB article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).<br>  - as client authorizationSignAlg value, it represents the signature algorithm used when [creating a JARM response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).<br>  - or as client requestSignAlg value, it specifies which is the expected signature used by [client on a Request Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects). |
| <code>idTokenEncryptionAlg?</code> | <code>[JweAlg](src/models/jwe-alg.ts)</code> | this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this refers to key transport scheme to be used by the client and by the server. For instance:<br>- as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server for transporting they keys on JARM objects<br>- as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm that server expect from client when encrypting a Request Object<br>- as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key transport of id_tokens<br><br>**Please note that some of the algorithms are more secure than others, some are not supported very well cross platforms and some (like RSA1_5) is known to be weak**. |
| <code>idTokenEncryptionEnc?</code> | <code>[JweEnc](src/models/jwe-enc.ts)</code> | This is the encryption algorithm to be used when encrypting a JWT on client or server side. Depending upon the context, this refers to encryption done by the client or by the server. For instance:<br>  - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by server when creating a JARM response<br>  - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by the client when encrypting a Request Object<br>  - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt id_tokens |
| <code>authTimeRequired?</code> | <code>boolean</code> | The flag to indicate whether this client requires `auth_time` claim to be embedded in the ID token.<br><br>This property corresponds to `require_auth_time` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>subjectType?</code> | <code>[SubjectType](src/models/subject-type.ts)</code> | The subject type that the client application requests. Details about the subject type are described in [OpenID Connect Core 1.0, 8. Subjct Identifier Types](https://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes).<br><br>This property corresponds to `subject_type` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>sectorIdentifierUri?</code> | <code>string</code> | The value of the sector identifier URI. This represents the `sector_identifier_uri` client metadata which is defined in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata) |
| <code>derivedSectorIdentifier?</code> | <code>string</code> | The sector identifier host component as derived from either the `sector_identifier_uri` or the registered redirect URI. If no `sector_identifier_uri` is registered and multiple redirect URIs are also registered, the value of this property is `null`. |
| <code>jwksUri?</code> | <code>string</code> | The URL pointing to the JWK Set of the client application. The content pointed to by the URL is JSON which complies with the format described in [JSON Web Key (JWK), 5. JWK Set Format](https://datatracker.ietf.org/doc/html/rfc7517#section-5). The JWK Set must not include private keys of the client application. |
| <code>jwks?</code> | <code>string</code> | The content of the JWK Set of the client application. The format is described in [JSON Web Key (JWK), 5. JWK Set Format](https://datatracker.ietf.org/doc/html/rfc7517#section-5). The JWK Set must not include private keys of the client application. |
| <code>userInfoSignAlg?</code> | <code>[JwsAlg](src/models/jws-alg.ts)</code> | The signature algorithm for JWT. This value is represented on 'alg' attribute of the header of JWT.<br><br>it's semantics depends upon where is this defined, for instance:<br>  - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm used to sign it. Check your [KB article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).<br>  - as client authorizationSignAlg value, it represents the signature algorithm used when [creating a JARM response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).<br>  - or as client requestSignAlg value, it specifies which is the expected signature used by [client on a Request Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects). |
| <code>userInfoEncryptionAlg?</code> | <code>[JweAlg](src/models/jwe-alg.ts)</code> | this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this refers to key transport scheme to be used by the client and by the server. For instance:<br>- as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server for transporting they keys on JARM objects<br>- as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm that server expect from client when encrypting a Request Object<br>- as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key transport of id_tokens<br><br>**Please note that some of the algorithms are more secure than others, some are not supported very well cross platforms and some (like RSA1_5) is known to be weak**. |
| <code>userInfoEncryptionEnc?</code> | <code>[JweEnc](src/models/jwe-enc.ts)</code> | This is the encryption algorithm to be used when encrypting a JWT on client or server side. Depending upon the context, this refers to encryption done by the client or by the server. For instance:<br>  - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by server when creating a JARM response<br>  - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by the client when encrypting a Request Object<br>  - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt id_tokens |
| <code>loginUri?</code> | <code>string</code> | The URL which a third party can use to initiate a login by the client application.<br><br>This property corresponds to `initiate_login_uri` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>tosUri?</code> | <code>string</code> | The URL pointing to the "Terms Of Service" page.<br><br>This property corresponds to `tos_uri` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>tosUris?</code> | <code>[TaggedValue](src/models/tagged-value.ts)[]</code> | URLs of "Terms Of Service" pages with language tags.<br><br>If the client application has different "Terms Of Service" pages for different languages, this property can be used to register the URLs. |
| <code>policyUri?</code> | <code>string</code> | The URL pointing to the page which describes the policy as to how end-user's profile data is used.<br><br>This property corresponds to `policy_uri` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>policyUris?</code> | <code>[TaggedValue](src/models/tagged-value.ts)[]</code> | URLs of policy pages with language tags. If the client application has different policy pages for different languages, this property can be used to register the URLs. |
| <code>clientUri?</code> | <code>string</code> | The URL pointing to the home page of the client application.<br><br>This property corresponds to `client_uri` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). |
| <code>clientUris?</code> | <code>[TaggedValue](src/models/tagged-value.ts)[]</code> | Home page URLs with language tags. If the client application has different home pages for different languages, this property can be used to register the URLs. |
| <code>bcDeliveryMode?</code> | <code>string</code> | The backchannel token delivery mode.<br><br>This property corresponds to the `backchannel_token_delivery_mode` metadata. The backchannel token delivery mode is defined in the specification of "CIBA (Client Initiated Backchannel Authentication)". |
| <code>bcNotificationEndpoint?</code> | <code>string</code> | The backchannel client notification endpoint.<br><br>This property corresponds to the `backchannel_client_notification_endpoint` metadata. The backchannel token delivery mode is defined in the specification of "CIBA (Client Initiated Backchannel Authentication)". |
| <code>bcRequestSignAlg?</code> | <code>[JwsAlg](src/models/jws-alg.ts)</code> | The signature algorithm for JWT. This value is represented on 'alg' attribute of the header of JWT.<br><br>it's semantics depends upon where is this defined, for instance:<br>  - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm used to sign it. Check your [KB article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).<br>  - as client authorizationSignAlg value, it represents the signature algorithm used when [creating a JARM response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).<br>  - or as client requestSignAlg value, it specifies which is the expected signature used by [client on a Request Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects). |
| <code>bcUserCodeRequired?</code> | <code>boolean</code> | The boolean flag to indicate whether a user code is required when this client makes a backchannel authentication request.<br><br>This property corresponds to the `backchannel_user_code_parameter` metadata. |
| <code>backchannelLogoutUri?</code> | <code>string</code> | The backchannel logout URI for this client. Used by the service to deliver logout tokens when OpenID Connect Back-Channel Logout 1.0 is triggered. |
| <code>backchannelLogoutSessionRequired?</code> | <code>boolean</code> | The flag indicating whether the client requires that a `sid` (session ID) claim be included in the logout token sent to `backchannelLogoutUri`. |
| <code>attributes?</code> | <code>[Pair](src/models/pair.ts)[]</code> | The attributes of this client. |
| <code>extension?</code> | <code>[ClientExtension](src/models/client-extension.ts)</code> | - |
| <code>authorizationDetailsTypes?</code> | <code>string[]</code> | The authorization details types that this client may use as values of the `type` field in `authorization_details`.<br><br>This property corresponds to the `authorization_details_types` metadata. See [OAuth 2.0 Rich Authorization Requests (RAR)](https://datatracker.ietf.org/doc/draft-ietf-oauth-rar/) for details.<br><br>Note that the property name was renamed from authorizationDataTypes to authorizationDetailsTypes to align with the change made by the 5th draft of the RAR specification. |
| <code>customMetadata?</code> | <code>string</code> | The custom client metadata in JSON format. |
| <code>frontChannelRequestObjectEncryptionRequired?</code> | <code>boolean</code> | The flag indicating whether encryption of request object is required when the request object is passed through the front channel. |
| <code>requestObjectEncryptionAlgMatchRequired?</code> | <code>boolean</code> | The flag indicating whether the JWE alg of encrypted request object must match the `request_object_encryption_alg` client metadata. |
| <code>requestObjectEncryptionEncMatchRequired?</code> | <code>boolean</code> | The flag indicating whether the JWE enc of encrypted request object must match the `request_object_encryption_enc` client metadata. |
| <code>digestAlgorithm?</code> | <code>string</code> | The digest algorithm that this client requests the server to use when it computes digest values of [external attachments](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#name-external-attachments), which may be referenced from within ID tokens or userinfo responses (or any place that can have the `verified_claims` claim). Possible values are listed in the [Hash Algorithm Registry](https://www.iana.org/assignments/named-information/named-information.xhtml#hash-alg) of IANA (Internet Assigned Numbers Authority), but the server does not necessarily support all the values there. When this property is omitted, `sha-256` is used as the default algorithm. This property corresponds to the `digest_algorithm` client metadata which was defined by the third implementer's draft of [OpenID Connect for Identity Assurance 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html). |
| <code>singleAccessTokenPerSubject?</code> | <code>boolean</code> | If `Enabled` is selected, an attempt to issue a new access token invalidates existing access tokens that are associated with the same combination of subject and client.<br><br>Note that, however, attempts by Client Credentials Flow do not invalidate existing access tokens because access tokens issued by Client Credentials Flow are not associated with any end-user's subject.<br><br>Even if `Disabled` is selected here, single access token per subject is effective if `singleAccessTokenPerSubject` of the `Service` this client belongs to is Enabled. |
| <code>pkceRequired?</code> | <code>boolean</code> | The flag to indicate whether the use of Proof Key for Code Exchange (PKCE) is always required for authorization requests by Authorization Code Flow.<br><br>If `true`, `code_challenge` request parameter is always required for authorization requests using Authorization Code Flow.<br><br>See [RFC 7636](https://tools.ietf.org/html/rfc7636) (Proof Key for Code Exchange by OAuth Public Clients) for details about `code_challenge` request parameter. |
| <code>pkceS256Required?</code> | <code>boolean</code> | The flag to indicate whether `S256` is always required as the code challenge method whenever [PKCE (RFC 7636)](https://tools.ietf.org/html/rfc7636) is used.<br><br>If this flag is set to `true`, `code_challenge_method=S256` must be included in the authorization request whenever it includes the `code_challenge` request parameter. Neither omission of the `code_challenge_method` request parameter nor use of plain (`code_challenge_method=plain`) is allowed. |
| <code>dpopRequired?</code> | <code>boolean</code> | If the DPoP is required for this client |
| <code>automaticallyRegistered?</code> | <code>boolean</code> | The flag indicating whether this client was registered by the "automatic" client registration of OIDC Federation. |
| <code>explicitlyRegistered?</code> | <code>boolean</code> | The flag indicating whether this client was registered by the "explicit" client registration of OIDC Federation. |
| <code>rsRequestSigned?</code> | <code>boolean</code> | The flag indicating whether this service signs responses from the resource server. |
| <code>rsSignedRequestKeyId?</code> | <code>string</code> | The key ID of a JWK containing the public key used by this client to sign requests to the resource server. |
| <code>clientRegistrationTypes?</code> | <code>[ClientRegistrationType](src/models/client-registration-type.ts)[]</code> | The client registration types that the client has declared it may use. |
| <code>organizationName?</code> | <code>string</code> | The human-readable name representing the organization that manages this client. This property corresponds to the organization_name client metadata that is defined in OpenID Connect Federation 1.0. |
| <code>signedJwksUri?</code> | <code>string</code> | The URI of the endpoint that returns this client's JWK Set document in the JWT format. This property corresponds to the `signed_jwks_uri` client metadata defined in OpenID Connect Federation 1.0. |
| <code>entityId?</code> | <code>string</code> | the entity ID of this client. |
| <code>trustAnchorId?</code> | <code>string</code> | The entity ID of the trust anchor of the trust chain that was used when this client was registered or updated by the mechanism defined in OpenID Connect Federation 1.0 |
| <code>trustChain?</code> | <code>string[]</code> | The trust chain that was used when this client was registered or updated by the mechanism defined in OpenID Connect Federation 1.0 |
| <code>trustChainExpiresAt?</code> | <code>number</code> | the expiration time of the trust chain that was used when this client was registered or updated by the mechanism defined in OpenID Connect Federation 1.0. The value is represented as milliseconds elapsed since the Unix epoch (1970-01-01). |
| <code>trustChainUpdatedAt?</code> | <code>number</code> | the time at which the trust chain was updated by the mechanism defined in OpenID Connect Federation 1.0 |
| <code>locked?</code> | <code>boolean</code> | The flag which indicates whether this client is locked. |
| <code>credentialOfferEndpoint?</code> | <code>string</code> | The URL of the credential offer endpoint at which this client (wallet) receives a credential offer from the credential issuer. |
| <code>fapiModes?</code> | <code>[FapiMode](src/models/fapi-mode.ts)[]</code> | The FAPI modes for this client. |
| <code>responseModes?</code> | <code>[ResponseMode](src/models/response-mode.ts)[]</code> | The response modes that this client may use. |
| <code>credentialResponseEncryptionRequired?</code> | <code>boolean</code> | True if credential responses to this client must be always encrypted. |
| <code>mtlsEndpointAliasesUsed?</code> | <code>boolean</code> | The flag indicating whether the client intends to prefer mutual TLS endpoints over non-MTLS endpoints.<br><br>This property corresponds to the `use_mtls_endpoint_aliases` client metadata that is defined in [FAPI 2.0 Security Profile, 8.1.1. use_mtls_endpoint_aliases](https://openid.bitbucket.io/fapi/fapi-2_0-security-profile.html#section-8.1.1). |
| <code>inScopeForTokenMigration?</code> | <code>boolean</code> | The flag indicating whether this client is in scope for token migration operations. |
| <code>metadataDocumentLocation?</code> | <code>string</code> | Location of the Client ID Metadata Document that was used for this client. |
| <code>metadataDocumentExpiresAt?</code> | <code>number</code> | Expiration time of the metadata document (UNIX time in milliseconds). |
| <code>metadataDocumentUpdatedAt?</code> | <code>number</code> | Last-updated time of the metadata document (UNIX time in milliseconds). |
| <code>discoveredByMetadataDocument?</code> | <code>boolean</code> | Indicates whether this client was discovered via a Client ID Metadata Document. |
| <code>clientSource?</code> | <code>[ClientSource](src/models/client-source.ts)</code> | Source of this client record. |
| <code>spiffeId?</code> | <code>string</code> | The SPIFFE ID of the client. Used for SPIFFE-based client authentication (`SPIFFE_JWT`). Corresponds to the `spiffe_id` client metadata parameter. |
| <code>spiffeBundleEndpoint?</code> | <code>string</code> | The endpoint URL of the SPIFFE bundle for this client. Used to fetch the SPIFFE trust bundle for validating JWT-SVIDs. Corresponds to the `spiffe_bundle_endpoint` client metadata parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clientManagement.clientUpdateApi(request)`

- **OnSuccess**: <code>[Client](src/models/client.ts)</code>
- **OnError**: throws <code>[ClientManagement.ClientUpdateApiError](src/resources/client-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientManagement.clientUpdateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Client, ClientManagement.ClientUpdateApiError&gt;</code>, with `result.value` of type <code>[Client](src/models/client.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuthorizationEndpoint

> Source: [AuthorizationEndpoint](src/resources/authorization-endpoint.ts)

<details>
<summary><code>authAuthorizationApi(request: AuthorizationEndpoint.AuthAuthorizationApiRequest, options?: RequestOptions): ApiPromise&lt;AuthorizationResponse, AuthorizationEndpoint.AuthAuthorizationApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API parses request parameters of an authorization request and returns necessary data for the authorization server implementation to process the authorization request further.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorizationEndpoint.authAuthorizationApi({
    serviceId: "some example string",
    parameters: "some example string",
  });
  // TODO: Handle 'response' of type AuthorizationResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthorizationEndpoint.AuthAuthorizationApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorizationEndpoint.authAuthorizationApi({
  serviceId: "some example string",
  parameters: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>parameters</code> | <code>string</code> | OAuth 2.0 authorization request parameters which are the request parameters that the OAuth 2.0 authorization endpoint of the authorization server implementation received from the client application.<br><br>The value of parameters is either (1) the entire query string when the HTTP method of the request from the client application is `GET` or (2) the entire entity body (which is formatted in `application/x-www-form-urlencoded`) when the HTTP method of the request from the client application is `POST`. |
| <code>context?</code> | <code>string</code> | The arbitrary text to be attached to the ticket that will be issued from the `/auth/authorization` API.<br><br>The text can be retrieved later by the `/auth/authorization/ticket/info` API and can be updated by the `/auth/authorization/ticket/update` API.<br><br>The text will be compressed and encrypted when it is saved in the Authlete database. |
| <code>cimdOptions?</code> | <code>[CimdOptions](src/models/cimd-options.ts)</code> | Options for [OAuth Client ID Metadata Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/) (CIMD).<br><br>These options allow per-request control over CIMD behavior, taking precedence over service-level configuration when provided. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorizationEndpoint.authAuthorizationApi(request)`

- **OnSuccess**: <code>[AuthorizationResponse](src/models/authorization-response.ts)</code>
- **OnError**: throws <code>[AuthorizationEndpoint.AuthAuthorizationApiError](src/resources/authorization-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorizationEndpoint.authAuthorizationApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizationResponse, AuthorizationEndpoint.AuthAuthorizationApiError&gt;</code>, with `result.value` of type <code>[AuthorizationResponse](src/models/authorization-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authAuthorizationFailApi(request: AuthorizationEndpoint.AuthAuthorizationFailApiRequest, options?: RequestOptions): ApiPromise&lt;AuthorizationFailResponse, AuthorizationEndpoint.AuthAuthorizationFailApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API generates a content of an error authorization response that the authorization server implementation returns to the client application.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorizationEndpoint.authAuthorizationFailApi({
    serviceId: "some example string",
    ticket: "some example string",
    reason: Reason.Unknown,
  });
  // TODO: Handle 'response' of type AuthorizationFailResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthorizationEndpoint.AuthAuthorizationFailApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorizationEndpoint.authAuthorizationFailApi({
  serviceId: "some example string",
  ticket: "some example string",
  reason: Reason.Unknown,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizationFailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>ticket</code> | <code>string</code> | The ticket issued from Authlete `/auth/authorization` API. |
| <code>reason</code> | <code>[Reason](src/models/reason.ts)</code> | The reason of the failure of the authorization request. For more details, see [NO_INTERACTION] in the description of `/auth/authorization` API. |
| <code>description?</code> | <code>string</code> | The custom description about the authorization failure. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorizationEndpoint.authAuthorizationFailApi(request)`

- **OnSuccess**: <code>[AuthorizationFailResponse](src/models/authorization-fail-response.ts)</code>
- **OnError**: throws <code>[AuthorizationEndpoint.AuthAuthorizationFailApiError](src/resources/authorization-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorizationEndpoint.authAuthorizationFailApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizationFailResponse, AuthorizationEndpoint.AuthAuthorizationFailApiError&gt;</code>, with `result.value` of type <code>[AuthorizationFailResponse](src/models/authorization-fail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authAuthorizationIssueApi(request: AuthorizationEndpoint.AuthAuthorizationIssueApiRequest, options?: RequestOptions): ApiPromise&lt;AuthorizationIssueResponse, AuthorizationEndpoint.AuthAuthorizationIssueApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API parses request parameters of an authorization request and returns necessary data for the authorization server implementation to process the authorization request further.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorizationEndpoint.authAuthorizationIssueApi({
    serviceId: "some example string",
    ticket: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type AuthorizationIssueResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthorizationEndpoint.AuthAuthorizationIssueApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorizationEndpoint.authAuthorizationIssueApi({
  serviceId: "some example string",
  ticket: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizationIssueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>ticket</code> | <code>string</code> | The ticket issued from Authlete `/auth/authorization` API. |
| <code>subject</code> | <code>string</code> | The subject (= a user account managed by the service) who has granted authorization to the client application. |
| <code>authTime?</code> | <code>number</code> | The time when the authentication of the end-user occurred. Its value is the number of seconds from `1970-01-01`. |
| <code>acr?</code> | <code>string</code> | The Authentication Context Class Reference performed for the end-user authentication. |
| <code>claims?</code> | <code>string</code> | The claims of the end-user (= pieces of information about the end-user) in JSON format. See [OpenID Connect Core 1.0, 5.1. Standard Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) for details about the format. |
| <code>properties?</code> | <code>[Property](src/models/property.ts)[]</code> | Extra properties to associate with an access token and/or an authorization code. |
| <code>scopes?</code> | <code>string[]</code> | Scopes to associate with an access token and/or an authorization code. If a non-empty string array is given, it replaces the scopes specified by the original authorization request. |
| <code>sub?</code> | <code>string</code> | The value of the `sub` claim to embed in an ID token. If this request parameter is `null` or empty, the value of the `subject` request parameter is used as the value of the `sub` claim. |
| <code>idtHeaderParams?</code> | <code>string</code> | JSON that represents additional JWS header parameters for ID tokens that may be issued based on the authorization request. |
| <code>claimsForTx?</code> | <code>string</code> | Claim key-value pairs that are used to compute transformed claims. |
| <code>consentedClaims?</code> | <code>string[]</code> | the claims that the user has consented for the client application to know. |
| <code>authorizationDetails?</code> | <code>[AuthzDetails](src/models/authz-details.ts)</code> | The authorization details. This represents the value of the `authorization_details` request parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich Authorization Requests". |
| <code>jwtAtClaims?</code> | <code>string</code> | Additional claims that are added to the payload part of the JWT access token. |
| <code>accessToken?</code> | <code>string</code> | The representation of an access token that may be issued as a result of the Authlete API call. |
| <code>accessTokenDuration?</code> | <code>number</code> | The duration (in seconds) of the access token that may be issued as a result of the Authlete API call.<br><br>When this request parameter holds a positive integer, it is used as the duration of the access token in. In other cases, this request parameter is ignored. |
| <code>sessionId?</code> | <code>string</code> | The session ID of the user's authentication session. The specified value will be embedded in the ID token as the value of the `sid` claim. This parameter needs to be provided only if you want to support the [OpenID Connect Native SSO for Mobile Apps 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) specification (a.k.a. "Native SSO"). To enable support for the Native SSO specification, the `nativeSsoSupported` property of your service must be set to `true`. |
| <code>idTokenAudType?</code> | <code>string</code> | The type of the `aud` claim of the ID token being issued. Valid values are as follows.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| "array" \| The type of the aud claim is always an array of strings. \|<br>\| "string" \| The type of the aud claim is always a single string. \|<br>\| null \| The type of the aud claim remains the same as before. \|<br><br>This request parameter takes precedence over the `idTokenAudType` property of the service. |
| <code>verifiedClaimsForTx?</code> | <code>string[]</code> | Values of verified claims requested indirectly by "transformed claims". |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorizationEndpoint.authAuthorizationIssueApi(request)`

- **OnSuccess**: <code>[AuthorizationIssueResponse](src/models/authorization-issue-response.ts)</code>
- **OnError**: throws <code>[AuthorizationEndpoint.AuthAuthorizationIssueApiError](src/resources/authorization-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorizationEndpoint.authAuthorizationIssueApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizationIssueResponse, AuthorizationEndpoint.AuthAuthorizationIssueApiError&gt;</code>, with `result.value` of type <code>[AuthorizationIssueResponse](src/models/authorization-issue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAuthorizationTicketInfo(request: AuthorizationEndpoint.GetAuthorizationTicketInfoRequest, options?: RequestOptions): ApiPromise&lt;AuthorizationTicketInfoResponse, AuthorizationEndpoint.GetAuthorizationTicketInfoError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorizationEndpoint.getAuthorizationTicketInfo({
    serviceId: "some example string",
    ticket: "some example string",
  });
  // TODO: Handle 'response' of type AuthorizationTicketInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthorizationEndpoint.GetAuthorizationTicketInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorizationEndpoint.getAuthorizationTicketInfo({
  serviceId: "some example string",
  ticket: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizationTicketInfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>ticket</code> | <code>string</code> | The ticket that has been issued from the `/auth/authorization` API. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorizationEndpoint.getAuthorizationTicketInfo(request)`

- **OnSuccess**: <code>[AuthorizationTicketInfoResponse](src/models/authorization-ticket-info-response.ts)</code>
- **OnError**: throws <code>[AuthorizationEndpoint.GetAuthorizationTicketInfoError](src/resources/authorization-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorizationEndpoint.getAuthorizationTicketInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizationTicketInfoResponse, AuthorizationEndpoint.GetAuthorizationTicketInfoError&gt;</code>, with `result.value` of type <code>[AuthorizationTicketInfoResponse](src/models/authorization-ticket-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAuthorizationTicket(request: AuthorizationEndpoint.UpdateAuthorizationTicketRequest, options?: RequestOptions): ApiPromise&lt;AuthorizationTicketUpdateResponse, AuthorizationEndpoint.UpdateAuthorizationTicketError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorizationEndpoint.updateAuthorizationTicket({
    serviceId: "some example string",
    ticket: "some example string",
    info: {},
  });
  // TODO: Handle 'response' of type AuthorizationTicketUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthorizationEndpoint.UpdateAuthorizationTicketError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorizationEndpoint.updateAuthorizationTicket({
  serviceId: "some example string",
  ticket: "some example string",
  info: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizationTicketUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>ticket</code> | <code>string</code> | The ticket. |
| <code>info</code> | <code>[AuthorizationTicketInfo](src/models/authorization-ticket-info.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorizationEndpoint.updateAuthorizationTicket(request)`

- **OnSuccess**: <code>[AuthorizationTicketUpdateResponse](src/models/authorization-ticket-update-response.ts)</code>
- **OnError**: throws <code>[AuthorizationEndpoint.UpdateAuthorizationTicketError](src/resources/authorization-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorizationEndpoint.updateAuthorizationTicket(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizationTicketUpdateResponse, AuthorizationEndpoint.UpdateAuthorizationTicketError&gt;</code>, with `result.value` of type <code>[AuthorizationTicketUpdateResponse](src/models/authorization-ticket-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PushedAuthorizationEndpoint

> Source: [PushedAuthorizationEndpoint](src/resources/pushed-authorization-endpoint.ts)

<details>
<summary><code>pushedAuthReqApi(request: PushedAuthorizationEndpoint.PushedAuthReqApiRequest, options?: RequestOptions): ApiPromise&lt;PushedAuthorizationResponse, PushedAuthorizationEndpoint.PushedAuthReqApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API creates a pushed request authorization. It authenticates the client and creates a authorization_uri to be returned by the authorization server.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pushedAuthorizationEndpoint.pushedAuthReqApi({
    serviceId: "some example string",
    parameters:
      "response_type=code%20id_token&client_id=5921531358155430&redirect_uri=https%3A%2F%2Fserver.example.com%2Fcb&state=SOME_VALUE_ABLE_TO_PREVENT_CSRF&scope=openid&nonce=SOME_VALUE_ABLE_TO_PREVENT_REPLAY_ATTACK&code_challenge=5ZWDQJiryK3eaLtSeFV8y1XySMCWtyITxICLaTwvK8g&code_challenge_method=S256",
    clientId: "5921531358155430",
    clientSecret: "P_FouxWlI7zcOep_9vBwR9qMAVJQiCiUiK1HrAP4GziOyezHQpqY0f5dHXK4JT4tnvI51OkbWVoEM9GnOyJViA",
  });
  // TODO: Handle 'response' of type PushedAuthorizationResponse
} catch (err) {
  // TODO: Handle 'err' of type PushedAuthorizationEndpoint.PushedAuthReqApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pushedAuthorizationEndpoint.pushedAuthReqApi({
  serviceId: "some example string",
  parameters:
    "response_type=code%20id_token&client_id=5921531358155430&redirect_uri=https%3A%2F%2Fserver.example.com%2Fcb&state=SOME_VALUE_ABLE_TO_PREVENT_CSRF&scope=openid&nonce=SOME_VALUE_ABLE_TO_PREVENT_REPLAY_ATTACK&code_challenge=5ZWDQJiryK3eaLtSeFV8y1XySMCWtyITxICLaTwvK8g&code_challenge_method=S256",
  clientId: "5921531358155430",
  clientSecret: "P_FouxWlI7zcOep_9vBwR9qMAVJQiCiUiK1HrAP4GziOyezHQpqY0f5dHXK4JT4tnvI51OkbWVoEM9GnOyJViA",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PushedAuthorizationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>parameters</code> | <code>string</code> | The pushed authorization request body received from the client application.<br><br>The value of parameters is the entire entity body (which is formatted in `application/x-www-form-urlencoded`) of the request from the client application. |
| <code>clientId?</code> | <code>string</code> | The client ID extracted from `Authorization` header of the pushed request from the client application. |
| <code>clientSecret?</code> | <code>string</code> | The client secret extracted from `Authorization` header of the pushed authorization request from the client application. |
| <code>clientCertificate?</code> | <code>string</code> | The client certificate from the MTLS connection to pushed authorization endpoint from the client application. |
| <code>clientCertificatePath?</code> | <code>string[]</code> | The certificate path presented by the client during client authentication. These certificates are strings in PEM format. |
| <code>dpop?</code> | <code>string</code> | DPoP Header |
| <code>htm?</code> | <code>string</code> | HTTP Method (for DPoP validation). |
| <code>htu?</code> | <code>string</code> | HTTP URL base (for DPoP validation). |
| <code>oauthClientAttestation?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |
| <code>oauthClientAttestationPop?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation-PoP` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |
| <code>dpopNonceRequired?</code> | <code>boolean</code> | The flag indicating whether to require the DPoP proof JWT to include the `nonce` claim. Even if the service's `dpopNonceRequired` property is `false`, calling the `/pushed_auth_req` API with this `dpopNonceRequired` parameter `true` will force the Authlete API to check whether the DPoP proof JWT includes the expected `nonce` value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pushedAuthorizationEndpoint.pushedAuthReqApi(request)`

- **OnSuccess**: <code>[PushedAuthorizationResponse](src/models/pushed-authorization-response.ts)</code>
- **OnError**: throws <code>[PushedAuthorizationEndpoint.PushedAuthReqApiError](src/resources/pushed-authorization-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pushedAuthorizationEndpoint.pushedAuthReqApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PushedAuthorizationResponse, PushedAuthorizationEndpoint.PushedAuthReqApiError&gt;</code>, with `result.value` of type <code>[PushedAuthorizationResponse](src/models/pushed-authorization-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TokenEndpoint

> Source: [TokenEndpoint](src/resources/token-endpoint.ts)

<details>
<summary><code>authTokenApi(request: TokenEndpoint.AuthTokenApiRequest, options?: RequestOptions): ApiPromise&lt;TokenResponse, TokenEndpoint.AuthTokenApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API parses request parameters of an authorization request and returns necessary data for the authorization server implementation to process the authorization request further.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokenEndpoint.authTokenApi({
    serviceId: "some example string",
    parameters: "some example string",
  });
  // TODO: Handle 'response' of type TokenResponse
} catch (err) {
  // TODO: Handle 'err' of type TokenEndpoint.AuthTokenApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokenEndpoint.authTokenApi({
  serviceId: "some example string",
  parameters: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>parameters</code> | <code>string</code> | OAuth 2.0 token request parameters which are the request parameters that the OAuth 2.0 token endpoint of the authorization server implementation received from the client application.<br><br>The value of parameters is the entire entity body (which is formatted in `application/x-www-form-urlencoded`) of the request from the client application. |
| <code>clientId?</code> | <code>string</code> | The client ID extracted from `Authorization` header of the token request from the client application.<br><br>If the token endpoint of the authorization server implementation supports basic authentication as a means of client authentication, and the request from the client application contained its client ID in `Authorization` header, the value should be extracted and set to this parameter. |
| <code>clientSecret?</code> | <code>string</code> | The client secret extracted from `Authorization` header of the token request from the client application.<br><br>If the token endpoint of the authorization server implementation supports basic authentication as a means of client authentication, and the request from the client application contained its client secret in `Authorization` header, the value should be extracted and set to this parameter. |
| <code>clientCertificate?</code> | <code>string</code> | The client certificate from the MTLS of the token request from the client application. |
| <code>clientCertificatePath?</code> | <code>string[]</code> | The certificate path presented by the client during client authentication. These certificates are strings in PEM format. |
| <code>properties?</code> | <code>[Property](src/models/property.ts)[]</code> | Extra properties to associate with an access token. See [Extra Properties](https://www.authlete.com/developers/definitive_guide/extra_properties/) for details. |
| <code>dpop?</code> | <code>string</code> | `DPoP` header presented by the client during the request to the token endpoint.<br><br>The header contains a signed JWT which includes the public key that is paired with the private key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. |
| <code>htm?</code> | <code>string</code> | HTTP method of the token request. This field is used to validate the `DPoP` header.<br><br>In normal cases, the value is `POST`. When this parameter is omitted, `POST` is used as the default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. |
| <code>htu?</code> | <code>string</code> | URL of the token endpoint. This field is used to validate the `DPoP` header.<br><br>If this parameter is omitted, the `tokenEndpoint` property of the Service is used as the default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. |
| <code>accessToken?</code> | <code>string</code> | The representation of an access token that may be issued as a result of the Authlete API call. |
| <code>jwtAtClaims?</code> | <code>string</code> | Additional claims that are added to the payload part of the JWT access token.<br><br>Effective only in the client_credentials grant flow (and the Native SSO branch of Token Exchange). For other grant flows, set additional JWT claims via the corresponding API: /auth/authorization/issue (authorization_code), /auth/backchannel/authentication/complete (CIBA), /auth/device/complete (device_code). The parameter is silently ignored when sent with other grants. |
| <code>oauthClientAttestation?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |
| <code>oauthClientAttestationPop?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation-PoP` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |
| <code>accessTokenDuration?</code> | <code>number</code> | The duration (in seconds) of the access token that may be issued as a result of the Authlete API call.<br><br>When this request parameter holds a positive integer, it is used as the duration of the access token in. In other cases, this request parameter is ignored. |
| <code>refreshTokenDuration?</code> | <code>number</code> | The duration (in seconds) of the refresh token that may be issued as a result of the Authlete API call.<br><br>When this request parameter holds a positive integer, it is used as the duration of the refresh token in. In other cases, this request parameter is ignored. |
| <code>dpopNonceRequired?</code> | <code>boolean</code> | The flag indicating whether to require the DPoP proof JWT to include the `nonce` claim. Even if the service's `dpopNonceRequired` property is `false`, calling the `/auth/token` API with this `dpopNonceRequired` parameter `true` will force the Authlete API to check whether the DPoP proof JWT includes the expected `nonce` value. |
| <code>cimdOptions?</code> | <code>[CimdOptions](src/models/cimd-options.ts)</code> | Options for [OAuth Client ID Metadata Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/) (CIMD).<br><br>These options allow per-request control over CIMD behavior, taking precedence over service-level configuration when provided. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokenEndpoint.authTokenApi(request)`

- **OnSuccess**: <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: throws <code>[TokenEndpoint.AuthTokenApiError](src/resources/token-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokenEndpoint.authTokenApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenResponse, TokenEndpoint.AuthTokenApiError&gt;</code>, with `result.value` of type <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authTokenFailApi(request: TokenEndpoint.AuthTokenFailApiRequest, options?: RequestOptions): ApiPromise&lt;TokenFailResponse, TokenEndpoint.AuthTokenFailApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API generates a content of an error token response that the authorization server implementation returns to the client application.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokenEndpoint.authTokenFailApi({
    serviceId: "some example string",
    ticket: "some example string",
    reason: Reason1.Unknown,
  });
  // TODO: Handle 'response' of type TokenFailResponse
} catch (err) {
  // TODO: Handle 'err' of type TokenEndpoint.AuthTokenFailApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokenEndpoint.authTokenFailApi({
  serviceId: "some example string",
  ticket: "some example string",
  reason: Reason1.Unknown,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenFailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>ticket</code> | <code>string</code> | The ticket issued from Authlete `/auth/token` API. |
| <code>reason</code> | <code>[Reason1](src/models/reason1.ts)</code> | The reason of the failure of the token request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokenEndpoint.authTokenFailApi(request)`

- **OnSuccess**: <code>[TokenFailResponse](src/models/token-fail-response.ts)</code>
- **OnError**: throws <code>[TokenEndpoint.AuthTokenFailApiError](src/resources/token-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokenEndpoint.authTokenFailApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenFailResponse, TokenEndpoint.AuthTokenFailApiError&gt;</code>, with `result.value` of type <code>[TokenFailResponse](src/models/token-fail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authTokenIssueApi(request: TokenEndpoint.AuthTokenIssueApiRequest, options?: RequestOptions): ApiPromise&lt;TokenIssueResponse, TokenEndpoint.AuthTokenIssueApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API generates a content of a successful token response that the authorization server implementation returns to the client application.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokenEndpoint.authTokenIssueApi({
    serviceId: "some example string",
    ticket: "some example string",
    subject: "some example string",
  });
  // TODO: Handle 'response' of type TokenIssueResponse
} catch (err) {
  // TODO: Handle 'err' of type TokenEndpoint.AuthTokenIssueApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokenEndpoint.authTokenIssueApi({
  serviceId: "some example string",
  ticket: "some example string",
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenIssueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>ticket</code> | <code>string</code> | The ticket issued from Authlete `/auth/token` API. |
| <code>subject</code> | <code>string</code> | The subject (= unique identifier) of the authenticated user. |
| <code>properties?</code> | <code>[Property](src/models/property.ts)[]</code> | Extra properties to associate with a newly created access token. Note that properties parameter is accepted only when `Content-Type` of the request is `application/json`, so don't use `application/x-www-form-urlencoded` if you want to specify properties. |
| <code>jwtAtClaims?</code> | <code>string</code> | Additional claims that are added to the payload part of the JWT access token. |
| <code>accessToken?</code> | <code>string</code> | The representation of an access token that may be issued as a result of the Authlete API call. |
| <code>accessTokenDuration?</code> | <code>number</code> | The duration (in seconds) of the access token that may be issued as a result of the Authlete API call.<br><br>When this request parameter holds a positive integer, it is used as the duration of the access token in. In other cases, this request parameter is ignored. |
| <code>refreshTokenDuration?</code> | <code>number</code> | The duration (in seconds) of the refresh token that may be issued as a result of the Authlete API call.<br><br>When this request parameter holds a positive integer, it is used as the duration of the refresh token in. In other cases, this request parameter is ignored. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokenEndpoint.authTokenIssueApi(request)`

- **OnSuccess**: <code>[TokenIssueResponse](src/models/token-issue-response.ts)</code>
- **OnError**: throws <code>[TokenEndpoint.AuthTokenIssueApiError](src/resources/token-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokenEndpoint.authTokenIssueApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenIssueResponse, TokenEndpoint.AuthTokenIssueApiError&gt;</code>, with `result.value` of type <code>[TokenIssueResponse](src/models/token-issue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>idtokenReissueApi(request: TokenEndpoint.IdtokenReissueApiRequest, options?: RequestOptions): ApiPromise&lt;IdtokenReissueResponse, TokenEndpoint.IdtokenReissueApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The API is expected to be called only when the value of the `action` parameter in a response from the `/auth/token` API is [ID_TOKEN_REISSUABLE](https://authlete.github.io/authlete-java-common/com/authlete/common/dto/TokenResponse.Action.html#ID_TOKEN_REISSUABLE). The purpose of the `/idtoken/reissue` API is to generate a token response that includes a new ID token together with a new access token and a refresh token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokenEndpoint.idtokenReissueApi({ serviceId: "some example string" });
  // TODO: Handle 'response' of type IdtokenReissueResponse
} catch (err) {
  // TODO: Handle 'err' of type TokenEndpoint.IdtokenReissueApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokenEndpoint.idtokenReissueApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdtokenReissueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body?</code> | <code>[IdtokenReissueRequest](src/models/idtoken-reissue-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokenEndpoint.idtokenReissueApi(request)`

- **OnSuccess**: <code>[IdtokenReissueResponse](src/models/idtoken-reissue-response.ts)</code>
- **OnError**: throws <code>[TokenEndpoint.IdtokenReissueApiError](src/resources/token-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokenEndpoint.idtokenReissueApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdtokenReissueResponse, TokenEndpoint.IdtokenReissueApiError&gt;</code>, with `result.value` of type <code>[IdtokenReissueResponse](src/models/idtoken-reissue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TokenOperations

> Source: [TokenOperations](src/resources/token-operations.ts)

<details>
<summary><code>authTokenCreateApi(request: TokenOperations.AuthTokenCreateApiRequest, options?: RequestOptions): ApiPromise&lt;TokenCreateResponse, TokenOperations.AuthTokenCreateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an access token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokenOperations.authTokenCreateApi({
    serviceId: "some example string",
    grantType: GrantType.AuthorizationCode,
  });
  // TODO: Handle 'response' of type TokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type TokenOperations.AuthTokenCreateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokenOperations.authTokenCreateApi({
  serviceId: "some example string",
  grantType: GrantType.AuthorizationCode,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>grantType</code> | <code>[GrantType](src/models/grant-type.ts)</code> | The grant type of the access token when the access token was created. |
| <code>clientId?</code> | <code>number</code> | The ID of the client application which will be associated with a newly created access token. |
| <code>subject?</code> | <code>string</code> | The subject (= unique identifier) of the user who will be associated with a newly created access token. This parameter is required unless the grant type is `CLIENT_CREDENTIALS`. The value must consist of only ASCII characters and its length must not exceed 100. |
| <code>scopes?</code> | <code>string[]</code> | The scopes which will be associated with a newly created access token. Scopes that are not supported by the service cannot be specified and requesting them will cause an error. |
| <code>accessTokenDuration?</code> | <code>number</code> | The duration of a newly created access token in seconds. If the value is 0, the duration is determined according to the settings of the service. |
| <code>refreshTokenDuration?</code> | <code>number</code> | The duration of a newly created refresh token in seconds. If the value is 0, the duration is determined according to the settings of the service.<br><br>A refresh token is not created (1) if the service does not support `REFRESH_TOKEN`, or (2) if the specified grant type is either `IMPLICIT`or `CLIENT_CREDENTIALS`. |
| <code>properties?</code> | <code>[Property](src/models/property.ts)[]</code> | Extra properties to associate with a newly created access token. Note that properties parameter is accepted only when the HTTP method of the request is POST and Content-Type of the request is `application/json`, so don't use `GET` method or `application/x-www-form-urlencoded` if you want to specify properties. |
| <code>clientIdAliasUsed?</code> | <code>boolean</code> | A boolean request parameter which indicates whether to emulate that the client ID alias is used instead of the original numeric client ID when a new access token is created. |
| <code>accessToken?</code> | <code>string</code> | The value of the new access token. |
| <code>refreshToken?</code> | <code>string</code> | The value of the new refresh token. |
| <code>accessTokenPersistent?</code> | <code>boolean</code> | Get whether the access token expires or not. By default, all access tokens expire after a period of time determined by their service.<br><br>If this request parameter is `true`, then the access token will not automatically expire and must be revoked or deleted manually at the service. If this request parameter is true, the `accessTokenDuration` request parameter is ignored. |
| <code>certificateThumbprint?</code> | <code>string</code> | The thumbprint of the MTLS certificate bound to this token. If this property is set, a certificate with the corresponding value MUST be presented with the access token when it is used by a client. The value of this property must be a SHA256 certificate thumbprint, base64url encoded. |
| <code>dpopKeyThumbprint?</code> | <code>string</code> | The thumbprint of the public key used for DPoP presentation of this token. If this property is set, a DPoP proof signed with the corresponding private key MUST be presented with the access token when it is used by a client. Additionally, the token's `token_type` will be set to 'DPoP'. |
| <code>authorizationDetails?</code> | <code>[AuthzDetails](src/models/authz-details.ts)</code> | The authorization details. This represents the value of the `authorization_details` request parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich Authorization Requests". |
| <code>resources?</code> | <code>string[]</code> | The value of the resources to associate with the token. This property represents the value of one or more `resource` request parameters which is defined in "RFC8707 Resource Indicators for OAuth 2.0". |
| <code>forExternalAttachment?</code> | <code>boolean</code> | the flag which indicates whether the access token is for an external attachment. |
| <code>jwtAtClaims?</code> | <code>string</code> | Additional claims that are added to the payload part of the JWT access token. |
| <code>acr?</code> | <code>string</code> | The Authentication Context Class Reference of the user authentication that the authorization server performed during the course of issuing the access token. |
| <code>authTime?</code> | <code>number</code> | The time when the user authentication was performed during the course of issuing the access token. |
| <code>clientEntityIdUsed?</code> | <code>boolean</code> | Flag which indicates whether the entity ID of the client was used when the request for the access token was made. |
| <code>clientIdentifier?</code> | <code>string</code> | The client Identifier associated with the newly issued access token. |
| <code>sessionId?</code> | <code>string</code> | The session ID, which is the ID of the user's authentication session, associated with a newly created access token. |
| <code>metadataDocumentUsed?</code> | <code>boolean</code> | Flag indicating whether a metadata document was used to resolve client metadata for this request.<br><br>When `true`, the client metadata was retrieved via the [OAuth Client ID Metadata Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/) (CIMD) mechanism rather than from the Authlete database. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokenOperations.authTokenCreateApi(request)`

- **OnSuccess**: <code>[TokenCreateResponse](src/models/token-create-response.ts)</code>
- **OnError**: throws <code>[TokenOperations.AuthTokenCreateApiError](src/resources/token-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokenOperations.authTokenCreateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenCreateResponse, TokenOperations.AuthTokenCreateApiError&gt;</code>, with `result.value` of type <code>[TokenCreateResponse](src/models/token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authTokenDeleteApi(request: TokenOperations.AuthTokenDeleteApiRequest, options?: RequestOptions): ApiPromise&lt;undefined, TokenOperations.AuthTokenDeleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an access token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tokenOperations.authTokenDeleteApi({
    serviceId: "some example string",
    accessTokenIdentifier: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type TokenOperations.AuthTokenDeleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokenOperations.authTokenDeleteApi({
  serviceId: "some example string",
  accessTokenIdentifier: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>accessTokenIdentifier</code> | <code>string</code> | The identifier of an existing access token. The identifier is the value of the access token or the value of the hash of the access token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokenOperations.authTokenDeleteApi(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TokenOperations.AuthTokenDeleteApiError](src/resources/token-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokenOperations.authTokenDeleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TokenOperations.AuthTokenDeleteApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authTokenGetListApi(request: TokenOperations.AuthTokenGetListApiRequest, options?: RequestOptions): ApiPromise&lt;TokenGetListResponse, TokenOperations.AuthTokenGetListApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of access tokens that are associated with the service.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokenOperations.authTokenGetListApi({ serviceId: "some example string" });
  // TODO: Handle 'response' of type TokenGetListResponse
} catch (err) {
  // TODO: Handle 'err' of type TokenOperations.AuthTokenGetListApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokenOperations.authTokenGetListApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenGetListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>clientIdentifier?</code> | <code>string</code> | Client Identifier (client ID or client ID alias). |
| <code>subject?</code> | <code>string</code> | Unique user ID. |
| <code>start?</code> | <code>number</code> | Start index of search results (inclusive). The default value is 0. |
| <code>end?</code> | <code>number</code> | End index of search results (exclusive). The default value is 5. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokenOperations.authTokenGetListApi(request)`

- **OnSuccess**: <code>[TokenGetListResponse](src/models/token-get-list-response.ts)</code>
- **OnError**: throws <code>[TokenOperations.AuthTokenGetListApiError](src/resources/token-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokenOperations.authTokenGetListApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenGetListResponse, TokenOperations.AuthTokenGetListApiError&gt;</code>, with `result.value` of type <code>[TokenGetListResponse](src/models/token-get-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authTokenRevokeApi(request: TokenOperations.AuthTokenRevokeApiRequest, options?: RequestOptions): ApiPromise&lt;TokenRevokeResponse, TokenOperations.AuthTokenRevokeApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke an access token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokenOperations.authTokenRevokeApi({ serviceId: "some example string" });
  // TODO: Handle 'response' of type TokenRevokeResponse
} catch (err) {
  // TODO: Handle 'err' of type TokenOperations.AuthTokenRevokeApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokenOperations.authTokenRevokeApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenRevokeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>accessTokenIdentifier?</code> | <code>string</code> | The identifier of an access token to revoke<br><br>The hash of an access token is recognized as an identifier as well as the access token itself. |
| <code>refreshTokenIdentifier?</code> | <code>string</code> | The identifier of a refresh token to revoke.<br><br>The hash of a refresh token is recognized as an identifier as well as the refresh token itself. |
| <code>clientIdentifier?</code> | <code>string</code> | The client ID of the access token to be revoked.<br><br>Both the numeric client ID and the alias are recognized as an identifier of a client.<br><br>Bulk revocation with `clientIdentifier` only or `clientIdentifier` + `subject` deletes at most **20 tokens per request** (the default of `token.revoke.count.max` in `ServerConfiguration.java`). If the target has more than 20 tokens, the response `count` will be 20 and the remainder is left untouched. To fully wipe them, call the endpoint repeatedly until `count` returns 0. |
| <code>subject?</code> | <code>string</code> | The subject of a resource owner.<br><br>Bulk revocation with `clientIdentifier` + `subject` or `subject` only deletes at most **20 tokens per request** (the default of `token.revoke.count.max` in `ServerConfiguration.java`). If the target has more than 20 tokens, the response `count` will be 20 and the remainder is left untouched. To fully wipe them, call the endpoint repeatedly until `count` returns 0. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokenOperations.authTokenRevokeApi(request)`

- **OnSuccess**: <code>[TokenRevokeResponse](src/models/token-revoke-response.ts)</code>
- **OnError**: throws <code>[TokenOperations.AuthTokenRevokeApiError](src/resources/token-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokenOperations.authTokenRevokeApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenRevokeResponse, TokenOperations.AuthTokenRevokeApiError&gt;</code>, with `result.value` of type <code>[TokenRevokeResponse](src/models/token-revoke-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authTokenUpdateApi(request: TokenOperations.AuthTokenUpdateApiRequest, options?: RequestOptions): ApiPromise&lt;TokenUpdateResponse, TokenOperations.AuthTokenUpdateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an access token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokenOperations.authTokenUpdateApi({ serviceId: "some example string" });
  // TODO: Handle 'response' of type TokenUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type TokenOperations.AuthTokenUpdateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokenOperations.authTokenUpdateApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>accessToken?</code> | <code>string</code> | An access token. |
| <code>accessTokenExpiresAt?</code> | <code>number</code> | A new date at which the access token will expire in milliseconds since the Unix epoch (1970-01-01). If the `accessTokenExpiresAt` request parameter is not included in a request or its value is 0 (or negative), the expiration date of the access token is not changed. |
| <code>scopes?</code> | <code>string[]</code> | A new set of scopes assigned to the access token. Scopes that are not supported by the service and those that the client application associated with the access token is not allowed to request are ignored on the server side. If the `scopes` request parameter is not included in a request or its value is `null`, the scopes of the access token are not changed. Note that `properties` parameter is accepted only when `Content-Type` of the request is `application/json`, so don't use `application/x-www-form-urlencoded` if you want to specify `properties`. |
| <code>properties?</code> | <code>[Property](src/models/property.ts)[]</code> | A new set of properties assigned to the access token. If the `properties` request parameter is not included in a request or its value is null, the properties of the access token are not changed. |
| <code>accessTokenExpiresAtUpdatedOnScopeUpdate?</code> | <code>boolean</code> | A boolean request parameter which indicates whether the API attempts to update the expiration date of the access token when the scopes linked to the access token are changed by this request. |
| <code>accessTokenHash?</code> | <code>string</code> | The hash of the access token value. Used when the hash of the token is known (perhaps from lookup) but the value of the token itself is not. The value of the `accessToken` parameter takes precedence. |
| <code>accessTokenValueUpdated?</code> | <code>boolean</code> | A boolean request parameter which indicates whether to update the value of the access token in the data store. If this parameter is set to `true` then a new access token value is generated by the server and returned in the response. |
| <code>accessTokenPersistent?</code> | <code>boolean</code> | The flag which indicates whether the access token expires or not. By default, all access tokens expire after a period of time determined by their service. If this request parameter is `true` then the access token will not automatically expire and must be revoked or deleted manually at the service.<br><br>If this request parameter is `true`, the `accessTokenExpiresAt` request parameter is ignored. If this request parameter is `false`, the `accessTokenExpiresAt` request parameter is processed normally. |
| <code>certificateThumbprint?</code> | <code>string</code> | The thumbprint of the MTLS certificate bound to this token. If this property is set, a certificate with the corresponding value MUST be presented with the access token when it is used by a client. The value of this property must be a SHA256 certificate thumbprint, base64url encoded. |
| <code>dpopKeyThumbprint?</code> | <code>string</code> | The thumbprint of the public key used for DPoP presentation of this token. If this property is set, a DPoP proof signed with the corresponding private key MUST be presented with the access token when it is used by a client. Additionally, the token's `token_type` will be set to 'DPoP'. |
| <code>authorizationDetails?</code> | <code>[AuthzDetails](src/models/authz-details.ts)</code> | The authorization details. This represents the value of the `authorization_details` request parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich Authorization Requests". |
| <code>forExternalAttachment?</code> | <code>boolean</code> | the flag which indicates whether the access token is for an external attachment. |
| <code>refreshTokenExpiresAt?</code> | <code>number</code> | A new date at which the access token will expire in milliseconds since the Unix epoch (1970-01-01). If the `refreshTokenExpiresAt` request parameter is not included in a request or its value is 0 (or negative), the expiration date of the refresh token is not changed. |
| <code>refreshTokenExpiresAtUpdatedOnScopeUpdate?</code> | <code>boolean</code> | A boolean request parameter which indicates whether the API attempts to update the expiration date of the refresh token when the scopes linked to the refresh token are changed by this request. |
| <code>tokenId?</code> | <code>string</code> | The token identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokenOperations.authTokenUpdateApi(request)`

- **OnSuccess**: <code>[TokenUpdateResponse](src/models/token-update-response.ts)</code>
- **OnError**: throws <code>[TokenOperations.AuthTokenUpdateApiError](src/resources/token-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokenOperations.authTokenUpdateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenUpdateResponse, TokenOperations.AuthTokenUpdateApiError&gt;</code>, with `result.value` of type <code>[TokenUpdateResponse](src/models/token-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IntrospectionEndpoint

> Source: [IntrospectionEndpoint](src/resources/introspection-endpoint.ts)

<details>
<summary><code>authIntrospectionApi(request: IntrospectionEndpoint.AuthIntrospectionApiRequest, options?: RequestOptions): ApiPromise&lt;IntrospectionResponse, IntrospectionEndpoint.AuthIntrospectionApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gathers information about an access token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.introspectionEndpoint.authIntrospectionApi({
    serviceId: "some example string",
    token: "some example string",
  });
  // TODO: Handle 'response' of type IntrospectionResponse
} catch (err) {
  // TODO: Handle 'err' of type IntrospectionEndpoint.AuthIntrospectionApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.introspectionEndpoint.authIntrospectionApi({
  serviceId: "some example string",
  token: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntrospectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>token</code> | <code>string</code> | An access token to introspect. |
| <code>scopes?</code> | <code>string[]</code> | A string array listing names of scopes which the caller (= a protected resource endpoint of the service) requires. When the content type of the request from the service is `application/x-www-form-urlencoded`, the format of `scopes` is a space-separated list of scope names.<br><br>If this parameter is a non-empty array and if it contains a scope which is not covered by the access token,`action=FORBIDDEN` with `error=insufficient_scope` is returned from Authlete. |
| <code>subject?</code> | <code>string</code> | A subject (= a user account managed by the service) whom the caller (= a protected resource endpoint of the service) requires.<br><br>If this parameter is not `null` and if the value does not match the subject who is associated with the access token, `action=FORBIDDEN` with `error=invalid_request` is returned from Authlete. |
| <code>clientCertificate?</code> | <code>string</code> | Client certificate in PEM format, used to validate binding against access tokens using the TLS client certificate confirmation method. |
| <code>dpop?</code> | <code>string</code> | `DPoP` header presented by the client during the request to the resource server.<br><br>The header contains a signed JWT which includes the public key that is paired with the private key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. |
| <code>htm?</code> | <code>string</code> | HTTP method of the request from the client to the protected resource endpoint. This field is used to validate the `DPoP` header.<br><br>See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. |
| <code>htu?</code> | <code>string</code> | URL of the protected resource endpoint. This field is used to validate the `DPoP` header.<br><br>See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. |
| <code>resources?</code> | <code>string[]</code> | The resources specified by the `resource` request parameters in the token request. See "Resource Indicators for OAuth 2.0" for details. |
| <code>acrValues?</code> | <code>string[]</code> | Authentication Context Class Reference values one of which the user authentication performed during the course of issuing the access token must satisfy. |
| <code>maxAge?</code> | <code>number</code> | The maximum authentication age which is the maximum allowable elapsed time since the user authentication was performed during the course of issuing the access token. |
| <code>requiredComponents?</code> | <code>string[]</code> | HTTP Message Components required to be in the signature. If absent, defaults to [ "@method", "@target-uri", "authorization" ]. |
| <code>uri?</code> | <code>string</code> | The full URL of the userinfo endpoint. |
| <code>message?</code> | <code>string</code> | The HTTP message body of the request, if present. |
| <code>headers?</code> | <code>[Pair](src/models/pair.ts)[]</code> | HTTP headers to be included in processing the signature. If this is a signed request, this must include the Signature and Signature-Input headers, as well as any additional headers covered by the signature. |
| <code>targetUri?</code> | <code>string</code> | The target URI of the resource request, including the query part, if any. |
| <code>dpopNonceRequired?</code> | <code>boolean</code> | The flag indicating whether to check if the DPoP proof JWT includes the expected `nonce` value.<br><br>If this request parameter is set to `true` or if the service's `dpopNonceRequired` property is set to `true`, the `/auth/introspection` API checks if the DPoP proof JWT includes the expected `nonce` value. In this case, the response from the `/auth/introspection` API will include the `dpopNonce` response parameter, which should be used as the value of the DPoP-Nonce HTTP header. |
| <code>requestBodyContained?</code> | <code>boolean</code> | The flag indicating whether the resource request contains a request body.<br><br>When the resource request must comply with the HTTP message signing requirements defined in the FAPI 2.0 Message Signing specification, the `"content-digest"` component identifier must be included in the signature base of the HTTP message signature (see [RFC 9421 HTTP Message Signatures](https://www.rfc-editor.org/rfc/rfc9421.html)) if the resource request contains a request body.<br><br>When this `requestBodyContained` parameter is set to `true`, Authlete checks whether `"content-digest"` is included in the signature base, if the FAPI profile applies to the resource request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.introspectionEndpoint.authIntrospectionApi(request)`

- **OnSuccess**: <code>[IntrospectionResponse](src/models/introspection-response.ts)</code>
- **OnError**: throws <code>[IntrospectionEndpoint.AuthIntrospectionApiError](src/resources/introspection-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.introspectionEndpoint.authIntrospectionApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntrospectionResponse, IntrospectionEndpoint.AuthIntrospectionApiError&gt;</code>, with `result.value` of type <code>[IntrospectionResponse](src/models/introspection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authIntrospectionStandardApi(request: IntrospectionEndpoint.AuthIntrospectionStandardApiRequest, options?: RequestOptions): ApiPromise&lt;StandardIntrospectionResponse, IntrospectionEndpoint.AuthIntrospectionStandardApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API exists to help your authorization server provide its own introspection API which complies with [RFC 7662](https://tools.ietf.org/html/rfc7662) (OAuth 2.0 Token Introspection).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.introspectionEndpoint.authIntrospectionStandardApi({
    serviceId: "some example string",
    parameters: "some example string",
  });
  // TODO: Handle 'response' of type StandardIntrospectionResponse
} catch (err) {
  // TODO: Handle 'err' of type IntrospectionEndpoint.AuthIntrospectionStandardApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.introspectionEndpoint.authIntrospectionStandardApi({
  serviceId: "some example string",
  parameters: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StandardIntrospectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>parameters</code> | <code>string</code> | Request parameters which comply with the introspection request defined in "[2.1. Introspection Request](https://datatracker.ietf.org/doc/html/rfc7662#section-2.1)" in RFC 7662.<br><br>The implementation of the introspection endpoint of your authorization server will receive an HTTP POST [[RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231)] request with parameters in the `application/x-www-form-urlencoded` format. It is the entity body of the request that Authlete's  `/api/auth/introspection/standard` API expects as the value of `parameters`. |
| <code>withHiddenProperties?</code> | <code>boolean</code> | Flag indicating whether to include hidden properties in the output.<br><br>Authlete has a mechanism whereby to associate arbitrary key-value pairs with an access token. Each key-value pair has a hidden attribute. By default, key-value pairs whose hidden attribute is set to `true` are not embedded in the standard introspection output.<br><br>If the `withHiddenProperties` request parameter is given and its value is `true`, `/api/auth/introspection/standard API includes all the associated key-value pairs into the output regardless of the value of the hidden attribute. |
| <code>rsUri?</code> | <code>string</code> | The URI of the resource server making the introspection request.<br><br>If the `rsUri` request parameter is given and the token has audience values, Authlete checks if the value of the `rsUri` request parameter is contained in the audience values. If not contained, Authlete generates an introspection response with the `active` property set to `false`.<br><br>The `rsUri` request parameter is required when the resource server requests a JWT introspection response, i.e., when the value of the `httpAcceptHeader` request parameter is set to `"application/token-introspection+jwt"`. |
| <code>httpAcceptHeader?</code> | <code>string</code> | The value of the `HTTP Accept` header in the introspection request.<br><br>If the value of the `httpAcceptHeader` request parameter is `"application/token-introspection+jwt"`, Authlete generates a JWT introspection response. See "[4. Requesting a JWT Response](https://www.rfc-editor.org/rfc/rfc9701.html#section-4)" of "[RFC 9701: JWT Response for OAuth Token Introspection](https://www.rfc-editor.org/rfc/rfc9701.html)" for more details. |
| <code>introspectionSignAlg?</code> | <code>string</code> | The JWS `alg` algorithm for signing the introspection response. This parameter corresponds to `introspection_signed_response_alg` defined in "[6. Client Metadata](https://www.rfc-editor.org/rfc/rfc9701.html#section-6)" of "[RFC 9701: JWT Response for OAuth Token Introspection](https://www.rfc-editor.org/rfc/rfc9701.html)".<br><br>The default value is `RS256`. |
| <code>introspectionEncryptionAlg?</code> | <code>string</code> | The JWE `alg` algorithm for encrypting the introspection response. This parameter corresponds to `introspection_encrypted_response_alg` defined in "[6. Client Metadata](https://www.rfc-editor.org/rfc/rfc9701.html#section-6)" of "[RFC 9701: JWT Response for OAuth Token Introspection](https://www.rfc-editor.org/rfc/rfc9701.html)".<br><br>If the `introspectionEncryptionAlg` request parameter is specified, Authlete generates a JWT introspection response encrypted with the algorithm by this property and the algorithm specified by the `introspectionEncryptionEnc` request parameter. |
| <code>introspectionEncryptionEnc?</code> | <code>string</code> | The JWE `enc` algorithm for encrypting the introspection response. This parameter corresponds to `introspection_encrypted_response_enc` defined in "[6. Client Metadata](https://www.rfc-editor.org/rfc/rfc9701.html#section-6)" of "[RFC 9701: JWT Response for OAuth Token Introspection](https://www.rfc-editor.org/rfc/rfc9701.html)".<br><br>The default value is `A128CBC_HS256`. |
| <code>sharedKeyForSign?</code> | <code>string</code> | The shared key for signing the introspection response with a symmetric algorithm.<br><br>The `sharedKeyForSign` request parameter is required when the introspection response is requested to be signed with a symmetric algorithm. |
| <code>sharedKeyForEncryption?</code> | <code>string</code> | The shared key for encrypting the introspection response with a symmetric algorithm.<br><br>The `sharedKeyForEncryption` request parameter is required when the introspection response is requested to be encrypted with a symmetric algorithm. |
| <code>publicKeyForEncryption?</code> | <code>string</code> | The public key for signing the introspection response with an asymmetric algorithm.<br><br>The `publicKeyForEncryption` request parameter is required when the introspection response is requested to be encrypted with an asymmetric algorithm. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.introspectionEndpoint.authIntrospectionStandardApi(request)`

- **OnSuccess**: <code>[StandardIntrospectionResponse](src/models/standard-introspection-response.ts)</code>
- **OnError**: throws <code>[IntrospectionEndpoint.AuthIntrospectionStandardApiError](src/resources/introspection-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.introspectionEndpoint.authIntrospectionStandardApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StandardIntrospectionResponse, IntrospectionEndpoint.AuthIntrospectionStandardApiError&gt;</code>, with `result.value` of type <code>[StandardIntrospectionResponse](src/models/standard-introspection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RevocationEndpoint

> Source: [RevocationEndpoint](src/resources/revocation-endpoint.ts)

<details>
<summary><code>authRevocationApi(request: RevocationEndpoint.AuthRevocationApiRequest, options?: RequestOptions): ApiPromise&lt;RevocationResponse, RevocationEndpoint.AuthRevocationApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API revokes access tokens and refresh tokens.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.revocationEndpoint.authRevocationApi({
    serviceId: "some example string",
    parameters: "some example string",
  });
  // TODO: Handle 'response' of type RevocationResponse
} catch (err) {
  // TODO: Handle 'err' of type RevocationEndpoint.AuthRevocationApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.revocationEndpoint.authRevocationApi({
  serviceId: "some example string",
  parameters: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevocationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>parameters</code> | <code>string</code> | OAuth 2.0 token revocation request parameters which are the request parameters that the OAuth 2.0 token revocation endpoint ([RFC 7009](https://datatracker.ietf.org/doc/html/rfc7009)) of the authorization server implementation received from the client application.<br><br>The value of parameters is the entire entity body (which is formatted in `application/x-www-form-urlencoded`) of the request from the client application. |
| <code>clientId?</code> | <code>string</code> | The client ID extracted from `Authorization` header of the revocation request from the client application.<br><br>If the revocation endpoint of the authorization server implementation supports Basic Authentication as a means of client authentication, and the request from the client application contains its client ID in `Authorization` header, the value should be extracted and set to this parameter. |
| <code>clientSecret?</code> | <code>string</code> | The client secret extracted from `Authorization` header of the revocation request from the client application.<br><br>If the revocation endpoint of the authorization server implementation supports basic authentication as a means of client authentication, and the request from the client application contained its client secret in `Authorization` header, the value should be extracted and set to this parameter. |
| <code>clientCertificate?</code> | <code>string</code> | The client certificate used in the TLS connection between the client application and the revocation endpoint. |
| <code>clientCertificatePath?</code> | <code>string[]</code> | The certificate path presented by the client during client authentication. |
| <code>oauthClientAttestation?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |
| <code>oauthClientAttestationPop?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation-PoP` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.revocationEndpoint.authRevocationApi(request)`

- **OnSuccess**: <code>[RevocationResponse](src/models/revocation-response.ts)</code>
- **OnError**: throws <code>[RevocationEndpoint.AuthRevocationApiError](src/resources/revocation-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.revocationEndpoint.authRevocationApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevocationResponse, RevocationEndpoint.AuthRevocationApiError&gt;</code>, with `result.value` of type <code>[RevocationResponse](src/models/revocation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UserInfoEndpoint

> Source: [UserInfoEndpoint](src/resources/user-info-endpoint.ts)

<details>
<summary><code>authUserinfoApi(request: UserInfoEndpoint.AuthUserinfoApiRequest, options?: RequestOptions): ApiPromise&lt;UserinfoResponse, UserInfoEndpoint.AuthUserinfoApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gathers information about a user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userInfoEndpoint.authUserinfoApi({
    serviceId: "some example string",
    token: "some example string",
  });
  // TODO: Handle 'response' of type UserinfoResponse
} catch (err) {
  // TODO: Handle 'err' of type UserInfoEndpoint.AuthUserinfoApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userInfoEndpoint.authUserinfoApi({
  serviceId: "some example string",
  token: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserinfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>token</code> | <code>string</code> | An access token. |
| <code>clientCertificate?</code> | <code>string</code> | Client certificate used in the TLS connection established between the client application and the userinfo endpoint.<br><br>The value of this request parameter is referred to when the access token given to the userinfo endpoint was bound to a client certificate when it was issued. See [OAuth 2.0 Mutual TLS Client Authentication and Certificate-Bound Access Tokens] (https://datatracker.ietf.org/doc/rfc8705/) for details about the specification of certificate-bound access tokens. |
| <code>dpop?</code> | <code>string</code> | `DPoP` header presented by the client during the request to the user info endpoint.<br><br>The header contains a signed JWT which includes the public key that is paired with the private key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. |
| <code>htm?</code> | <code>string</code> | HTTP method of the user info request. This field is used to validate the DPoP header. In normal cases, the value is either `GET` or `POST`. |
| <code>htu?</code> | <code>string</code> | URL of the user info endpoint. This field is used to validate the DPoP header.<br><br>If this parameter is omitted, the `userInfoEndpoint` property of the service is used as the default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. |
| <code>uri?</code> | <code>string</code> | The full URL of the userinfo endpoint. |
| <code>message?</code> | <code>string</code> | The HTTP message body of the request, if present. |
| <code>headers?</code> | <code>[Pair](src/models/pair.ts)[]</code> | HTTP headers to be included in processing the signature. If this is a signed request, this must include the Signature and Signature-Input headers, as well as any additional headers covered by the signature. |
| <code>targetUri?</code> | <code>string</code> | The target URI of the userinfo request, including the query part, if any. |
| <code>dpopNonceRequired?</code> | <code>boolean</code> | The flag indicating whether to check if the DPoP proof JWT includes the expected `nonce` value.<br><br>If this request parameter is set to `true` or if the service's `dpopNonceRequired` property is set to `true`, the `/auth/userinfo` API checks if the DPoP proof JWT includes the expected `nonce` value. In this case, the response from the `/auth/userinfo` API will include the `dpopNonce` response parameter, which should be used as the value of the DPoP-Nonce HTTP header. |
| <code>requestBodyContained?</code> | <code>boolean</code> | The flag indicating whether the userinfo request contains a request body. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userInfoEndpoint.authUserinfoApi(request)`

- **OnSuccess**: <code>[UserinfoResponse](src/models/userinfo-response.ts)</code>
- **OnError**: throws <code>[UserInfoEndpoint.AuthUserinfoApiError](src/resources/user-info-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userInfoEndpoint.authUserinfoApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserinfoResponse, UserInfoEndpoint.AuthUserinfoApiError&gt;</code>, with `result.value` of type <code>[UserinfoResponse](src/models/userinfo-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authUserinfoIssueApi(request: UserInfoEndpoint.AuthUserinfoIssueApiRequest, options?: RequestOptions): ApiPromise&lt;UserinfoIssueResponse, UserInfoEndpoint.AuthUserinfoIssueApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API generates an ID token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userInfoEndpoint.authUserinfoIssueApi({
    serviceId: "some example string",
    token: "some example string",
  });
  // TODO: Handle 'response' of type UserinfoIssueResponse
} catch (err) {
  // TODO: Handle 'err' of type UserInfoEndpoint.AuthUserinfoIssueApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userInfoEndpoint.authUserinfoIssueApi({
  serviceId: "some example string",
  token: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserinfoIssueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>token</code> | <code>string</code> | The access token that has been passed to the userinfo endpoint by the client application. In other words, the access token which was contained in the userinfo request. |
| <code>claims?</code> | <code>string</code> | Claims in JSON format. As for the format, see [OpenID Connect Core 1.0, 5.1. Standard Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims). |
| <code>sub?</code> | <code>string</code> | The value of the `sub` claim. If the value of this request parameter is not empty, it is used as the value of the `sub` claim. Otherwise, the value of the subject associated with the access token is used. |
| <code>claimsForTx?</code> | <code>string</code> | Claim key-value pairs that are used to compute transformed claims. |
| <code>requestSignature?</code> | <code>string</code> | The Signature header value from the request. |
| <code>headers?</code> | <code>[Pair](src/models/pair.ts)[]</code> | HTTP headers to be included in processing the signature. If this is a signed request, this must include the Signature and Signature-Input headers, as well as any additional headers covered by the signature. |
| <code>verifiedClaimsForTx?</code> | <code>string[]</code> | Values of verified claims requested indirectly by "transformed claims". |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userInfoEndpoint.authUserinfoIssueApi(request)`

- **OnSuccess**: <code>[UserinfoIssueResponse](src/models/userinfo-issue-response.ts)</code>
- **OnError**: throws <code>[UserInfoEndpoint.AuthUserinfoIssueApiError](src/resources/user-info-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userInfoEndpoint.authUserinfoIssueApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserinfoIssueResponse, UserInfoEndpoint.AuthUserinfoIssueApiError&gt;</code>, with `result.value` of type <code>[UserinfoIssueResponse](src/models/userinfo-issue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## JwkSetEndpoint

> Source: [JwkSetEndpoint](src/resources/jwk-set-endpoint.ts)

<details>
<summary><code>serviceJwksGetApi(request: JwkSetEndpoint.ServiceJwksGetApiRequest, options?: RequestOptions): ApiPromise&lt;ServiceJwksGetResponse, JwkSetEndpoint.ServiceJwksGetApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gathers JWK Set information for a service so that its client applications can verify signatures by the service and encrypt their requests to the service.

This API is supposed to be called from within the implementation of the jwk set endpoint of the service where the service that supports OpenID Connect must expose its JWK Set information so that client applications can verify signatures by the service and encrypt their requests to the service. The URI of the endpoint can be found as the value of `jwks_uri` in [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) if the service supports [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jwkSetEndpoint.serviceJwksGetApi({ serviceId: "some example string" });
  // TODO: Handle 'response' of type ServiceJwksGetResponse
} catch (err) {
  // TODO: Handle 'err' of type JwkSetEndpoint.ServiceJwksGetApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jwkSetEndpoint.serviceJwksGetApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceJwksGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>includePrivateKeys?</code> | <code>boolean</code> | The boolean value that indicates whether the response should include the private keys associated with the service or not. If `true`, the private keys are included in the response. The default value is `false`. |
| <code>pretty?</code> | <code>boolean</code> | This boolean value indicates whether the JSON in the response should be formatted or not. If `true`, the JSON in the response is pretty-formatted. The default value is `false`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jwkSetEndpoint.serviceJwksGetApi(request)`

- **OnSuccess**: <code>[ServiceJwksGetResponse](src/models/service-jwks-get-response.ts)</code>
- **OnError**: throws <code>[JwkSetEndpoint.ServiceJwksGetApiError](src/resources/jwk-set-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jwkSetEndpoint.serviceJwksGetApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceJwksGetResponse, JwkSetEndpoint.ServiceJwksGetApiError&gt;</code>, with `result.value` of type <code>[ServiceJwksGetResponse](src/models/service-jwks-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DynamicClientRegistration

> Source: [DynamicClientRegistration](src/resources/dynamic-client-registration.ts)

<details>
<summary><code>clientRegistrationApi(request: DynamicClientRegistration.ClientRegistrationApiRequest, options?: RequestOptions): ApiPromise&lt;ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a client. This API is supposed to be used to implement a client registration endpoint that complies with [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591) (OAuth 2.0 Dynamic Client Registration Protocol).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dynamicClientRegistration.clientRegistrationApi({
    serviceId: "some example string",
    body: { json: '{ "client_name": "My Dynamic Client" }' },
  });
  // TODO: Handle 'response' of type ClientRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type DynamicClientRegistration.ClientRegistrationApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dynamicClientRegistration.clientRegistrationApi({
  serviceId: "some example string",
  body: { json: '{ "client_name": "My Dynamic Client" }' },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientRegistrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[ApiClientRegistrationRequest](src/models/api-client-registration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dynamicClientRegistration.clientRegistrationApi(request)`

- **OnSuccess**: <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: throws <code>[DynamicClientRegistration.ClientRegistrationApiError](src/resources/dynamic-client-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dynamicClientRegistration.clientRegistrationApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationApiError&gt;</code>, with `result.value` of type <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientRegistrationDeleteApi(request: DynamicClientRegistration.ClientRegistrationDeleteApiRequest, options?: RequestOptions): ApiPromise&lt;ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationDeleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a dynamically registered client. This API is supposed to be used to implement a client registration management endpoint that complies with [RFC 7592](https://datatracker.ietf.org/doc/html/rfc7592) (OAuth 2.0 Dynamic Registration Management).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dynamicClientRegistration.clientRegistrationDeleteApi({
    serviceId: "some example string",
    body: { token: "qs4Tu5TV7qqDYT93bFs6ISyhTByMF9o-54GY4JU5vTA", clientId: "26837717140341" },
  });
  // TODO: Handle 'response' of type ClientRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type DynamicClientRegistration.ClientRegistrationDeleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dynamicClientRegistration.clientRegistrationDeleteApi({
  serviceId: "some example string",
  body: { token: "qs4Tu5TV7qqDYT93bFs6ISyhTByMF9o-54GY4JU5vTA", clientId: "26837717140341" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientRegistrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[ApiClientRegistrationDeleteRequest](src/models/api-client-registration-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dynamicClientRegistration.clientRegistrationDeleteApi(request)`

- **OnSuccess**: <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: throws <code>[DynamicClientRegistration.ClientRegistrationDeleteApiError](src/resources/dynamic-client-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dynamicClientRegistration.clientRegistrationDeleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationDeleteApiError&gt;</code>, with `result.value` of type <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientRegistrationGetApi(request: DynamicClientRegistration.ClientRegistrationGetApiRequest, options?: RequestOptions): ApiPromise&lt;ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationGetApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a dynamically registered client. This API is supposed to be used to implement a client registration management endpoint that complies with [RFC 7592](https://datatracker.ietf.org/doc/html/rfc7592) (OAuth 2.0 Dynamic Registration Management).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dynamicClientRegistration.clientRegistrationGetApi({
    serviceId: "some example string",
    body: { token: "qs4Tu5TV7qqDYT93bFs6ISyhTByMF9o-54GY4JU5vTA", clientId: "26837717140341" },
  });
  // TODO: Handle 'response' of type ClientRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type DynamicClientRegistration.ClientRegistrationGetApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dynamicClientRegistration.clientRegistrationGetApi({
  serviceId: "some example string",
  body: { token: "qs4Tu5TV7qqDYT93bFs6ISyhTByMF9o-54GY4JU5vTA", clientId: "26837717140341" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientRegistrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[ApiClientRegistrationGetRequest](src/models/api-client-registration-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dynamicClientRegistration.clientRegistrationGetApi(request)`

- **OnSuccess**: <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: throws <code>[DynamicClientRegistration.ClientRegistrationGetApiError](src/resources/dynamic-client-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dynamicClientRegistration.clientRegistrationGetApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationGetApiError&gt;</code>, with `result.value` of type <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clientRegistrationUpdateApi(request: DynamicClientRegistration.ClientRegistrationUpdateApiRequest, options?: RequestOptions): ApiPromise&lt;ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationUpdateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a dynamically registered client. This API is supposed to be used to implement a client registration management endpoint that complies with [RFC 7592](https://datatracker.ietf.org/doc/html/rfc7592) (OAuth 2.0 Dynamic Registration Management).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dynamicClientRegistration.clientRegistrationUpdateApi({
    serviceId: "some example string",
    body: {
      json: '{"client_name":"My Updated Dynamic Client","default_max_age":0,"registration_client_uri":"https://my-service.example.com/dcr/register/26837717140341","client_id":"26837717140341","token_endpoint_auth_method":"client_secret_basic","require_pushed_authorization_requests":false,"backchannel_user_code_parameter":false,"client_secret":"bMsjvZm2FE1_mqJgxhmYj_Wr8rA0Pia_A_j-V076qQm6-P1edKB055W579GBe7MSbOdxZ3dJKsKinCtdIFwxpw","tls_client_certificate_bound_access_tokens":false,"id_token_signed_response_alg":"RS256","subject_type":"public","require_signed_request_object":false}',
      token: "qs4Tu5TV7qqDYT93bFs6ISyhTByMF9o-54GY4JU5vTA",
      clientId: "26837717140341",
    },
  });
  // TODO: Handle 'response' of type ClientRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type DynamicClientRegistration.ClientRegistrationUpdateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dynamicClientRegistration.clientRegistrationUpdateApi({
  serviceId: "some example string",
  body: {
    json: '{"client_name":"My Updated Dynamic Client","default_max_age":0,"registration_client_uri":"https://my-service.example.com/dcr/register/26837717140341","client_id":"26837717140341","token_endpoint_auth_method":"client_secret_basic","require_pushed_authorization_requests":false,"backchannel_user_code_parameter":false,"client_secret":"bMsjvZm2FE1_mqJgxhmYj_Wr8rA0Pia_A_j-V076qQm6-P1edKB055W579GBe7MSbOdxZ3dJKsKinCtdIFwxpw","tls_client_certificate_bound_access_tokens":false,"id_token_signed_response_alg":"RS256","subject_type":"public","require_signed_request_object":false}',
    token: "qs4Tu5TV7qqDYT93bFs6ISyhTByMF9o-54GY4JU5vTA",
    clientId: "26837717140341",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientRegistrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[ApiClientRegistrationUpdateRequest](src/models/api-client-registration-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dynamicClientRegistration.clientRegistrationUpdateApi(request)`

- **OnSuccess**: <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: throws <code>[DynamicClientRegistration.ClientRegistrationUpdateApiError](src/resources/dynamic-client-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dynamicClientRegistration.clientRegistrationUpdateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationUpdateApiError&gt;</code>, with `result.value` of type <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Ciba

> Source: [Ciba](src/resources/ciba.ts)

<details>
<summary><code>backchannelAuthenticationApi(request: Ciba.BackchannelAuthenticationApiRequest, options?: RequestOptions): ApiPromise&lt;BackchannelAuthenticationResponse, Ciba.BackchannelAuthenticationApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API parses request parameters of a [backchannel authentication request](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html#auth_request) and returns necessary data for the authorization server implementation to process the backchannel authentication request further.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ciba.backchannelAuthenticationApi({
    serviceId: "some example string",
    parameters: "some example string",
  });
  // TODO: Handle 'response' of type BackchannelAuthenticationResponse
} catch (err) {
  // TODO: Handle 'err' of type Ciba.BackchannelAuthenticationApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ciba.backchannelAuthenticationApi({
  serviceId: "some example string",
  parameters: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BackchannelAuthenticationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>parameters</code> | <code>string</code> | Parameters of a backchannel authentication request which are the request parameters that the backchannel authentication endpoint of the OpenID provider implementation received from the client application.<br><br>The value of `parameters` is the entire entity body (which is formatted in `application/x-www-form-urlencoded`) of the request from the client application. |
| <code>clientId?</code> | <code>string</code> | The client ID extracted from Authorization header of the backchannel authentication request from the client application.<br><br>If the backchannel authentication endpoint of the OpenID provider implementation supports Basic Authentication as a means of client authentication, and the request from the client application contained its client ID in Authorization header, the value should be extracted and set to this parameter. |
| <code>clientSecret?</code> | <code>string</code> | The client secret extracted from Authorization header of the backchannel authentication request from the client application.<br><br>If the backchannel authentication endpoint of the OpenID provider implementation supports Basic Authentication as a means of client authentication, and the request from the client application contained its client secret in Authorization header, the value should be extracted and set to this parameter. |
| <code>clientCertificate?</code> | <code>string</code> | The client certification used in the TLS connection between the client application and the backchannel authentication endpoint of the OpenID provider. |
| <code>clientCertificatePath?</code> | <code>string[]</code> | The client certificate path presented by the client during client authentication. Each element is a string in PEM format. |
| <code>oauthClientAttestation?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |
| <code>oauthClientAttestationPop?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation-PoP` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |
| <code>cimdOptions?</code> | <code>[CimdOptions](src/models/cimd-options.ts)</code> | Options for [OAuth Client ID Metadata Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/) (CIMD).<br><br>These options allow per-request control over CIMD behavior, taking precedence over service-level configuration when provided. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ciba.backchannelAuthenticationApi(request)`

- **OnSuccess**: <code>[BackchannelAuthenticationResponse](src/models/backchannel-authentication-response.ts)</code>
- **OnError**: throws <code>[Ciba.BackchannelAuthenticationApiError](src/resources/ciba.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ciba.backchannelAuthenticationApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BackchannelAuthenticationResponse, Ciba.BackchannelAuthenticationApiError&gt;</code>, with `result.value` of type <code>[BackchannelAuthenticationResponse](src/models/backchannel-authentication-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>backchannelAuthenticationCompleteApi(request: Ciba.BackchannelAuthenticationCompleteApiRequest, options?: RequestOptions): ApiPromise&lt;BackchannelAuthenticationCompleteResponse, Ciba.BackchannelAuthenticationCompleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API returns information about what action the authorization server should take after it receives the result of end-user's decision about whether the end-user has approved or rejected a client application's request on the authentication device.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ciba.backchannelAuthenticationCompleteApi({
    serviceId: "some example string",
    ticket: "some example string",
    result: Result1.TransactionFailed,
    subject: "some example string",
  });
  // TODO: Handle 'response' of type BackchannelAuthenticationCompleteResponse
} catch (err) {
  // TODO: Handle 'err' of type Ciba.BackchannelAuthenticationCompleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ciba.backchannelAuthenticationCompleteApi({
  serviceId: "some example string",
  ticket: "some example string",
  result: Result1.TransactionFailed,
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BackchannelAuthenticationCompleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>ticket</code> | <code>string</code> | The ticket issued by Authlete's `/backchannel/authentication` API. |
| <code>result</code> | <code>[Result1](src/models/result1.ts)</code> | The result of the end-user authentication and authorization. One of the following. Details are described in the description. |
| <code>subject</code> | <code>string</code> | The subject (= unique identifier) of the end-user. |
| <code>sub?</code> | <code>string</code> | The value of the sub claim that should be used in the ID token. |
| <code>authTime?</code> | <code>number</code> | The time at which the end-user was authenticated. Its value is the number of seconds from `1970-01-01`. |
| <code>acr?</code> | <code>string</code> | The reference of the authentication context class which the end-user authentication satisfied. |
| <code>claims?</code> | <code>string</code> | Additional claims which will be embedded in the ID token. |
| <code>properties?</code> | <code>[Property](src/models/property.ts)[]</code> | The extra properties associated with the access token. |
| <code>scopes?</code> | <code>string[]</code> | Scopes to replace the scopes specified in the original backchannel authentication request with. When nothing is specified for this parameter, replacement is not performed. |
| <code>idtHeaderParams?</code> | <code>string</code> | JSON that represents additional JWS header parameters for ID tokens. |
| <code>errorDescription?</code> | <code>string</code> | The description of the error. If this optional request parameter is given, its value is used as the value of the `error_description` property, but it is used only when the result is not `AUTHORIZED`. To comply with the specification strictly, the description must not include characters outside the set `%x20-21 / %x23-5B / %x5D-7E`. |
| <code>errorUri?</code> | <code>string</code> | The URI of a document which describes the error in detail. This corresponds to the `error_uri` property in the response to the client. |
| <code>consentedClaims?</code> | <code>string[]</code> | the claims that the user has consented for the client application to know. |
| <code>jwtAtClaims?</code> | <code>string</code> | Additional claims that are added to the payload part of the JWT access token. |
| <code>accessToken?</code> | <code>string</code> | The representation of an access token that may be issued as a result of the Authlete API call. |
| <code>accessTokenDuration?</code> | <code>number</code> | The duration (in seconds) of the access token that may be issued as a result of the Authlete API call.<br><br>When this request parameter holds a positive integer, it is used as the duration of the access token in. In other cases, this request parameter is ignored. |
| <code>refreshTokenDuration?</code> | <code>number</code> | The duration (in seconds) of the refresh token that may be issued as a result of the Authlete API call.<br><br>When this request parameter holds a positive integer, it is used as the duration of the refresh token in. In other cases, this request parameter is ignored. |
| <code>idTokenAudType?</code> | <code>string</code> | The type of the `aud` claim of the ID token being issued. Valid values are as follows.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| "array" \| The type of the aud claim is always an array of strings. \|<br>\| "string" \| The type of the aud claim is always a single string. \|<br>\| null \| The type of the aud claim remains the same as before. \|<br><br>This request parameter takes precedence over the `idTokenAudType` property of the service. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ciba.backchannelAuthenticationCompleteApi(request)`

- **OnSuccess**: <code>[BackchannelAuthenticationCompleteResponse](src/models/backchannel-authentication-complete-response.ts)</code>
- **OnError**: throws <code>[Ciba.BackchannelAuthenticationCompleteApiError](src/resources/ciba.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ciba.backchannelAuthenticationCompleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BackchannelAuthenticationCompleteResponse, Ciba.BackchannelAuthenticationCompleteApiError&gt;</code>, with `result.value` of type <code>[BackchannelAuthenticationCompleteResponse](src/models/backchannel-authentication-complete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>backchannelAuthenticationFailApi(request: Ciba.BackchannelAuthenticationFailApiRequest, options?: RequestOptions): ApiPromise&lt;BackchannelAuthenticationFailResponse, Ciba.BackchannelAuthenticationFailApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The API prepares JSON that contains an error. The JSON should be used as the response body of the response which is returned to the client from the [backchannel authentication endpoint](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html#auth_backchannel_endpoint).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ciba.backchannelAuthenticationFailApi({
    serviceId: "some example string",
    ticket: "some example string",
    reason: Reason2.AccessDenied,
  });
  // TODO: Handle 'response' of type BackchannelAuthenticationFailResponse
} catch (err) {
  // TODO: Handle 'err' of type Ciba.BackchannelAuthenticationFailApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ciba.backchannelAuthenticationFailApi({
  serviceId: "some example string",
  ticket: "some example string",
  reason: Reason2.AccessDenied,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BackchannelAuthenticationFailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>ticket</code> | <code>string</code> | The ticket which should be deleted on a call of Authlete's `/backchannel/authentication/fail` API. This request parameter is not mandatory but optional. If this request parameter is given and the ticket belongs to the service, the specified ticket is deleted from the database. Giving this parameter is recommended to clean up the storage area for the service. |
| <code>reason</code> | <code>[Reason2](src/models/reason2.ts)</code> | The reason of the failure of the backchannel authentication request. This request parameter is not mandatory but optional. However, giving this parameter is recommended. If omitted, `SERVER_ERROR` is used as a reason. |
| <code>errorDescription?</code> | <code>string</code> | The description of the error. This corresponds to the `error_description` property in the response to the client. |
| <code>errorUri?</code> | <code>string</code> | The URI of a document which describes the error in detail. If this optional request parameter is given, its value is used as the value of the `error_uri` property. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ciba.backchannelAuthenticationFailApi(request)`

- **OnSuccess**: <code>[BackchannelAuthenticationFailResponse](src/models/backchannel-authentication-fail-response.ts)</code>
- **OnError**: throws <code>[Ciba.BackchannelAuthenticationFailApiError](src/resources/ciba.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ciba.backchannelAuthenticationFailApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BackchannelAuthenticationFailResponse, Ciba.BackchannelAuthenticationFailApiError&gt;</code>, with `result.value` of type <code>[BackchannelAuthenticationFailResponse](src/models/backchannel-authentication-fail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>backchannelAuthenticationIssueApi(request: Ciba.BackchannelAuthenticationIssueApiRequest, options?: RequestOptions): ApiPromise&lt;BackchannelAuthenticationIssueResponse, Ciba.BackchannelAuthenticationIssueApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API prepares JSON that contains an `auth_req_id`. The JSON should be used as the response body of the response which is returned to the client from the [backchannel authentication endpoint](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html#auth_backchannel_endpoint)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ciba.backchannelAuthenticationIssueApi({
    serviceId: "some example string",
    ticket: "some example string",
  });
  // TODO: Handle 'response' of type BackchannelAuthenticationIssueResponse
} catch (err) {
  // TODO: Handle 'err' of type Ciba.BackchannelAuthenticationIssueApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ciba.backchannelAuthenticationIssueApi({
  serviceId: "some example string",
  ticket: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BackchannelAuthenticationIssueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>ticket</code> | <code>string</code> | The ticket issued from Authlete's `/backchannel/authentication` API. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ciba.backchannelAuthenticationIssueApi(request)`

- **OnSuccess**: <code>[BackchannelAuthenticationIssueResponse](src/models/backchannel-authentication-issue-response.ts)</code>
- **OnError**: throws <code>[Ciba.BackchannelAuthenticationIssueApiError](src/resources/ciba.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ciba.backchannelAuthenticationIssueApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BackchannelAuthenticationIssueResponse, Ciba.BackchannelAuthenticationIssueApiError&gt;</code>, with `result.value` of type <code>[BackchannelAuthenticationIssueResponse](src/models/backchannel-authentication-issue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GrantManagementEndpoint

> Source: [GrantManagementEndpoint](src/resources/grant-management-endpoint.ts)

<details>
<summary><code>grantMApi(request: GrantManagementEndpoint.GrantMApiRequest, options?: RequestOptions): ApiPromise&lt;GmResponse, GrantManagementEndpoint.GrantMApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The API is for the implementation of the grant management endpoint which is defined in "[Grant Management for OAuth 2.0](https://openid.net/specs/fapi-grant-management.html)".


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.grantManagementEndpoint.grantMApi({
    serviceId: "some example string",
    body: {
      accessToken:
        "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE1NTk4MTE3NTAsImlzcyI6IjU3Mjk3NDA4ODY3In0K.csmdholMVcmjqHe59YWgLGNvm7I5Whp4phQCoGxyrlRGMnTgsfxtwyxBgMXQqEPD5q5k9FaEWNk37K8uAtSwrA",
      gmAction: GrantManagementAction.Revoke,
      grantId: "57297408867",
    },
  });
  // TODO: Handle 'response' of type GmResponse
} catch (err) {
  // TODO: Handle 'err' of type GrantManagementEndpoint.GrantMApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.grantManagementEndpoint.grantMApi({
  serviceId: "some example string",
  body: {
    accessToken:
      "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE1NTk4MTE3NTAsImlzcyI6IjU3Mjk3NDA4ODY3In0K.csmdholMVcmjqHe59YWgLGNvm7I5Whp4phQCoGxyrlRGMnTgsfxtwyxBgMXQqEPD5q5k9FaEWNk37K8uAtSwrA",
    gmAction: GrantManagementAction.Revoke,
    grantId: "57297408867",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GmResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[GmRequest](src/models/gm-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.grantManagementEndpoint.grantMApi(request)`

- **OnSuccess**: <code>[GmResponse](src/models/gm-response.ts)</code>
- **OnError**: throws <code>[GrantManagementEndpoint.GrantMApiError](src/resources/grant-management-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.grantManagementEndpoint.grantMApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GmResponse, GrantManagementEndpoint.GrantMApiError&gt;</code>, with `result.value` of type <code>[GmResponse](src/models/gm-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## JoseObject

> Source: [JoseObject](src/resources/jose-object.ts)

<details>
<summary><code>joseVerifyApi(request: JoseObject.JoseVerifyApiRequest, options?: RequestOptions): ApiPromise&lt;JoseVerifyResponse, JoseObject.JoseVerifyApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API verifies a JOSE object.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.joseObject.joseVerifyApi({
    serviceId: "some example string",
    jose: "some example string",
  });
  // TODO: Handle 'response' of type JoseVerifyResponse
} catch (err) {
  // TODO: Handle 'err' of type JoseObject.JoseVerifyApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.joseObject.joseVerifyApi({
  serviceId: "some example string",
  jose: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JoseVerifyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>jose</code> | <code>string</code> | A JOSE object. |
| <code>mandatoryClaims?</code> | <code>string[]</code> | Mandatory claims that are required to be included in the JOSE object. |
| <code>clockSkew?</code> | <code>number</code> | Allowable clock skew in seconds. |
| <code>clientIdentifier?</code> | <code>string</code> | The identifier of the client application whose keys are required for verification of the JOSE object. |
| <code>signedByClient?</code> | <code>boolean</code> | The flag which indicates whether the signature of the JOSE object has been signed by a client application with the client's private key or a shared symmetric key. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.joseObject.joseVerifyApi(request)`

- **OnSuccess**: <code>[JoseVerifyResponse](src/models/jose-verify-response.ts)</code>
- **OnError**: throws <code>[JoseObject.JoseVerifyApiError](src/resources/jose-object.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.joseObject.joseVerifyApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JoseVerifyResponse, JoseObject.JoseVerifyApiError&gt;</code>, with `result.value` of type <code>[JoseVerifyResponse](src/models/jose-verify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceFlow

> Source: [DeviceFlow](src/resources/device-flow.ts)

<details>
<summary><code>deviceAuthorizationApi(request: DeviceFlow.DeviceAuthorizationApiRequest, options?: RequestOptions): ApiPromise&lt;DeviceAuthorizationResponse, DeviceFlow.DeviceAuthorizationApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API parses request parameters of a [device authorization request](https://datatracker.ietf.org/doc/html/rfc8628#section-3.1) and returns necessary data for the authorization server implementation to process the device authorization request further.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceFlow.deviceAuthorizationApi({
    serviceId: "some example string",
    parameters: "some example string",
  });
  // TODO: Handle 'response' of type DeviceAuthorizationResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceFlow.DeviceAuthorizationApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceFlow.deviceAuthorizationApi({
  serviceId: "some example string",
  parameters: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceAuthorizationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>parameters</code> | <code>string</code> | Parameters of a device authorization request which are the request parameters that the device authorization endpoint of the authorization server implementation received from the client application.<br><br>The value of `parameters` is the entire entity body (which is formatted in `application/x-www-form-urlencoded`) of the request from the client application. |
| <code>clientId?</code> | <code>string</code> | The client ID extracted from Authorization header of the device authorization request from the client application.<br><br>If the device authorization endpoint of the authorization server implementation supports Basic `Authentication` as a means of client authentication, and the request from the client application contained its client ID in `Authorization` header, the value should be extracted and set to this parameter. |
| <code>clientSecret?</code> | <code>string</code> | The client secret extracted from `Authorization` header of the device authorization request from the client application.<br><br>If the device authorization endpoint of the authorization server implementation supports Basic Authentication as a means of client authentication, and the request from the client application contained its client secret in `Authorization` header, the value should be extracted and set to this parameter. |
| <code>clientCertificate?</code> | <code>string</code> | The client certificate used in the TLS connection between the client application and the device authorization endpoint of the authorization server. |
| <code>clientCertificatePath?</code> | <code>string[]</code> | The client certificate path presented by the client during client authentication. Each element is a string in PEM format. |
| <code>oauthClientAttestation?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |
| <code>oauthClientAttestationPop?</code> | <code>string</code> | The value of the `OAuth-Client-Attestation-PoP` HTTP header, which is defined in the specification of [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/). |
| <code>cimdOptions?</code> | <code>[CimdOptions](src/models/cimd-options.ts)</code> | Options for [OAuth Client ID Metadata Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/) (CIMD).<br><br>These options allow per-request control over CIMD behavior, taking precedence over service-level configuration when provided. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deviceFlow.deviceAuthorizationApi(request)`

- **OnSuccess**: <code>[DeviceAuthorizationResponse](src/models/device-authorization-response.ts)</code>
- **OnError**: throws <code>[DeviceFlow.DeviceAuthorizationApiError](src/resources/device-flow.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceFlow.deviceAuthorizationApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceAuthorizationResponse, DeviceFlow.DeviceAuthorizationApiError&gt;</code>, with `result.value` of type <code>[DeviceAuthorizationResponse](src/models/device-authorization-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deviceCompleteApi(request: DeviceFlow.DeviceCompleteApiRequest, options?: RequestOptions): ApiPromise&lt;DeviceCompleteResponse, DeviceFlow.DeviceCompleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API returns information about what action the authorization server should take after it receives the result of end-user's decision about whether the end-user has approved or rejected a client application's request.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceFlow.deviceCompleteApi({
    serviceId: "some example string",
    userCode: "some example string",
    result: Result1.TransactionFailed,
    subject: "some example string",
  });
  // TODO: Handle 'response' of type DeviceCompleteResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceFlow.DeviceCompleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceFlow.deviceCompleteApi({
  serviceId: "some example string",
  userCode: "some example string",
  result: Result1.TransactionFailed,
  subject: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceCompleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>userCode</code> | <code>string</code> | A user code. |
| <code>result</code> | <code>[Result1](src/models/result1.ts)</code> | The result of the end-user authentication and authorization. One of the following. Details are described in the description. |
| <code>subject</code> | <code>string</code> | The subject (= unique identifier) of the end-user. |
| <code>sub?</code> | <code>string</code> | The value of the sub claim that should be used in the ID token. |
| <code>authTime?</code> | <code>number</code> | The time at which the end-user was authenticated. Its value is the number of seconds from `1970-01-01`. |
| <code>acr?</code> | <code>string</code> | The reference of the authentication context class which the end-user authentication satisfied. |
| <code>claims?</code> | <code>string</code> | Additional claims which will be embedded in the ID token. |
| <code>properties?</code> | <code>[Property](src/models/property.ts)[]</code> | The extra properties associated with the access token. |
| <code>scopes?</code> | <code>string[]</code> | Scopes to replace the scopes specified in the original device authorization request with. When nothing is specified for this parameter, replacement is not performed. |
| <code>errorDescription?</code> | <code>string</code> | The description of the error. If this optional request parameter is given, its value is used as the value of the `error_description` property, but it is used only when the result is not `AUTHORIZED`. To comply with the specification strictly, the description must not include characters outside the set `%x20-21 / %x23-5B / %x5D-7E`. |
| <code>errorUri?</code> | <code>string</code> | The URI of a document which describes the error in detail. This corresponds to the `error_uri` property in the response to the client. |
| <code>idtHeaderParams?</code> | <code>string</code> | JSON that represents additional JWS header parameters for ID tokens. |
| <code>consentedClaims?</code> | <code>string[]</code> | the claims that the user has consented for the client application to know. |
| <code>jwtAtClaims?</code> | <code>string</code> | Additional claims that are added to the payload part of the JWT access token. |
| <code>accessTokenDuration?</code> | <code>number</code> | The duration (in seconds) of the access token that may be issued as a result of the Authlete API call.<br><br>When this request parameter holds a positive integer, it is used as the duration of the access token in. In other cases, this request parameter is ignored. |
| <code>refreshTokenDuration?</code> | <code>number</code> | The duration (in seconds) of the refresh token that may be issued as a result of the Authlete API call.<br><br>When this request parameter holds a positive integer, it is used as the duration of the refresh token in. In other cases, this request parameter is ignored. |
| <code>idTokenAudType?</code> | <code>string</code> | The type of the `aud` claim of the ID token being issued. Valid values are as follows.<br><br>\| Value \| Description \|<br>\| ----- \| ----------- \|<br>\| "array" \| The type of the aud claim is always an array of strings. \|<br>\| "string" \| The type of the aud claim is always a single string. \|<br>\| null \| The type of the aud claim remains the same as before. \|<br><br>This request parameter takes precedence over the `idTokenAudType` property of the service. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deviceFlow.deviceCompleteApi(request)`

- **OnSuccess**: <code>[DeviceCompleteResponse](src/models/device-complete-response.ts)</code>
- **OnError**: throws <code>[DeviceFlow.DeviceCompleteApiError](src/resources/device-flow.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceFlow.deviceCompleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceCompleteResponse, DeviceFlow.DeviceCompleteApiError&gt;</code>, with `result.value` of type <code>[DeviceCompleteResponse](src/models/device-complete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deviceVerificationApi(request: DeviceFlow.DeviceVerificationApiRequest, options?: RequestOptions): ApiPromise&lt;DeviceVerificationResponse, DeviceFlow.DeviceVerificationApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The API returns information associated with a user code.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceFlow.deviceVerificationApi({
    serviceId: "some example string",
    userCode: "some example string",
  });
  // TODO: Handle 'response' of type DeviceVerificationResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceFlow.DeviceVerificationApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceFlow.deviceVerificationApi({
  serviceId: "some example string",
  userCode: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceVerificationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>userCode</code> | <code>string</code> | A user code. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deviceFlow.deviceVerificationApi(request)`

- **OnSuccess**: <code>[DeviceVerificationResponse](src/models/device-verification-response.ts)</code>
- **OnError**: throws <code>[DeviceFlow.DeviceVerificationApiError](src/resources/device-flow.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceFlow.deviceVerificationApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceVerificationResponse, DeviceFlow.DeviceVerificationApiError&gt;</code>, with `result.value` of type <code>[DeviceVerificationResponse](src/models/device-verification-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FederationEndpoint

> Source: [FederationEndpoint](src/resources/federation-endpoint.ts)

<details>
<summary><code>federationConfigurationApi(request: FederationEndpoint.FederationConfigurationApiRequest, options?: RequestOptions): ApiPromise&lt;FederationConfigurationResponse, FederationEndpoint.FederationConfigurationApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gathers the federation configuration about a service. The authorization server implementation should retrieve the value of the `action` response parameter from the API response and take the following steps according to the value.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.federationEndpoint.federationConfigurationApi({
    serviceId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FederationConfigurationResponse
} catch (err) {
  // TODO: Handle 'err' of type FederationEndpoint.FederationConfigurationApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.federationEndpoint.federationConfigurationApi({
  serviceId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FederationConfigurationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[ApiFederationConfigurationRequest](src/models/api-federation-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.federationEndpoint.federationConfigurationApi(request)`

- **OnSuccess**: <code>[FederationConfigurationResponse](src/models/federation-configuration-response.ts)</code>
- **OnError**: throws <code>[FederationEndpoint.FederationConfigurationApiError](src/resources/federation-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.federationEndpoint.federationConfigurationApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FederationConfigurationResponse, FederationEndpoint.FederationConfigurationApiError&gt;</code>, with `result.value` of type <code>[FederationConfigurationResponse](src/models/federation-configuration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>federationRegistrationApi(request: FederationEndpoint.FederationRegistrationApiRequest, options?: RequestOptions): ApiPromise&lt;FederationRegistrationResponse, FederationEndpoint.FederationRegistrationApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Authlete API is for implementations of the **federation registration endpoint** that accepts "explicit client registration". Its details are defined in [OpenID Connect Federation 1.0](https://openid.net/specs/openid-connect-federation-1_0.html). The endpoint accepts `POST` requests whose `Content-Type` is either of the following.
1. `application/entity-statement+jwt`- `application/trust-chain+json` When the `Content-Type` of a request is `application/entity-statement+jwt`, the content of the request is the entity configuration of a relying party that is to be registered. In this case, the implementation of the federation registration endpoint should call Authlete's `/federation/registration` API with the entity configuration set to the `entityConfiguration` request parameter. On the other hand, when the `Content-Type` of a request is `application/trust-chain+json`, the content of the request is a JSON array that contains entity statements in JWT format. The sequence of the entity statements composes the trust chain of a relying party that is to be registered. In this case, the implementation of the federation registration endpoint should call Authlete's `/federation/registration` API with the trust chain set to the `trustChain` request parameter.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.federationEndpoint.federationRegistrationApi({
    serviceId: "some example string",
  });
  // TODO: Handle 'response' of type FederationRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type FederationEndpoint.FederationRegistrationApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.federationEndpoint.federationRegistrationApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FederationRegistrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>entityConfiguration?</code> | <code>string</code> | The entity configuration of a relying party. |
| <code>trustChain?</code> | <code>string</code> | The trust chain of a relying party. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.federationEndpoint.federationRegistrationApi(request)`

- **OnSuccess**: <code>[FederationRegistrationResponse](src/models/federation-registration-response.ts)</code>
- **OnError**: throws <code>[FederationEndpoint.FederationRegistrationApiError](src/resources/federation-endpoint.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.federationEndpoint.federationRegistrationApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FederationRegistrationResponse, FederationEndpoint.FederationRegistrationApiError&gt;</code>, with `result.value` of type <code>[FederationRegistrationResponse](src/models/federation-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VerifiableCredentialIssuer

> Source: [VerifiableCredentialIssuer](src/resources/verifiable-credential-issuer.ts)

<details>
<summary><code>vciBatchIssueApi(request: VerifiableCredentialIssuer.VciBatchIssueApiRequest, options?: RequestOptions): ApiPromise&lt;VciBatchIssueResponse, VerifiableCredentialIssuer.VciBatchIssueApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issue multiple verifiable credentials in batch

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciBatchIssueApi({
    serviceId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type VciBatchIssueResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciBatchIssueApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciBatchIssueApi({
  serviceId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciBatchIssueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[VciBatchIssueRequest](src/models/vci-batch-issue-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciBatchIssueApi(request)`

- **OnSuccess**: <code>[VciBatchIssueResponse](src/models/vci-batch-issue-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciBatchIssueApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciBatchIssueApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciBatchIssueResponse, VerifiableCredentialIssuer.VciBatchIssueApiError&gt;</code>, with `result.value` of type <code>[VciBatchIssueResponse](src/models/vci-batch-issue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciBatchParseApi(request: VerifiableCredentialIssuer.VciBatchParseApiRequest, options?: RequestOptions): ApiPromise&lt;VciBatchParseResponse, VerifiableCredentialIssuer.VciBatchParseApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse multiple verifiable credentials in batch

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciBatchParseApi({
    serviceId: "some example string",
  });
  // TODO: Handle 'response' of type VciBatchParseResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciBatchParseApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciBatchParseApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciBatchParseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>accessToken?</code> | <code>string</code> | The access token that came along with the credential request. |
| <code>requestContent?</code> | <code>string</code> | The message body of the batch credential request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciBatchParseApi(request)`

- **OnSuccess**: <code>[VciBatchParseResponse](src/models/vci-batch-parse-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciBatchParseApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciBatchParseApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciBatchParseResponse, VerifiableCredentialIssuer.VciBatchParseApiError&gt;</code>, with `result.value` of type <code>[VciBatchParseResponse](src/models/vci-batch-parse-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciDeferredIssueApi(request: VerifiableCredentialIssuer.VciDeferredIssueApiRequest, options?: RequestOptions): ApiPromise&lt;VciDeferredIssueResponse, VerifiableCredentialIssuer.VciDeferredIssueApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issue a deferred verifiable credential

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciDeferredIssueApi({
    serviceId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type VciDeferredIssueResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciDeferredIssueApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciDeferredIssueApi({
  serviceId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciDeferredIssueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[VciDeferredIssueRequest](src/models/vci-deferred-issue-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciDeferredIssueApi(request)`

- **OnSuccess**: <code>[VciDeferredIssueResponse](src/models/vci-deferred-issue-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciDeferredIssueApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciDeferredIssueApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciDeferredIssueResponse, VerifiableCredentialIssuer.VciDeferredIssueApiError&gt;</code>, with `result.value` of type <code>[VciDeferredIssueResponse](src/models/vci-deferred-issue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciDeferredParseApi(request: VerifiableCredentialIssuer.VciDeferredParseApiRequest, options?: RequestOptions): ApiPromise&lt;VciDeferredParseResponse, VerifiableCredentialIssuer.VciDeferredParseApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a deferred verifiable credential

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciDeferredParseApi({
    serviceId: "some example string",
  });
  // TODO: Handle 'response' of type VciDeferredParseResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciDeferredParseApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciDeferredParseApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciDeferredParseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>accessToken?</code> | <code>string</code> | The access token that came along with the deferred credential request. |
| <code>requestContent?</code> | <code>string</code> | The message body of the deferred credential request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciDeferredParseApi(request)`

- **OnSuccess**: <code>[VciDeferredParseResponse](src/models/vci-deferred-parse-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciDeferredParseApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciDeferredParseApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciDeferredParseResponse, VerifiableCredentialIssuer.VciDeferredParseApiError&gt;</code>, with `result.value` of type <code>[VciDeferredParseResponse](src/models/vci-deferred-parse-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciJwksApi(request: VerifiableCredentialIssuer.VciJwksApiRequest, options?: RequestOptions): ApiPromise&lt;VciJwksResponse, VerifiableCredentialIssuer.VciJwksApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get JSON Web Key Set for VCI

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciJwksApi({
    serviceId: "some example string",
    pretty: true,
  });
  // TODO: Handle 'response' of type VciJwksResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciJwksApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciJwksApi({
  serviceId: "some example string",
  pretty: true,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciJwksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>pretty</code> | <code>boolean</code> | The flag indicating whether the metadata is written in the pretty format or not. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciJwksApi(request)`

- **OnSuccess**: <code>[VciJwksResponse](src/models/vci-jwks-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciJwksApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciJwksApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciJwksResponse, VerifiableCredentialIssuer.VciJwksApiError&gt;</code>, with `result.value` of type <code>[VciJwksResponse](src/models/vci-jwks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciJwtissuerApi(request: VerifiableCredentialIssuer.VciJwtissuerApiRequest, options?: RequestOptions): ApiPromise&lt;VciJwtissuerResponse, VerifiableCredentialIssuer.VciJwtissuerApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get JWT issuer information for VCI

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciJwtissuerApi({
    serviceId: "some example string",
    pretty: true,
  });
  // TODO: Handle 'response' of type VciJwtissuerResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciJwtissuerApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciJwtissuerApi({
  serviceId: "some example string",
  pretty: true,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciJwtissuerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>pretty</code> | <code>boolean</code> | The flag indicating whether the metadata is written in the pretty format or not. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciJwtissuerApi(request)`

- **OnSuccess**: <code>[VciJwtissuerResponse](src/models/vci-jwtissuer-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciJwtissuerApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciJwtissuerApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciJwtissuerResponse, VerifiableCredentialIssuer.VciJwtissuerApiError&gt;</code>, with `result.value` of type <code>[VciJwtissuerResponse](src/models/vci-jwtissuer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciMetadataApi(request: VerifiableCredentialIssuer.VciMetadataApiRequest, options?: RequestOptions): ApiPromise&lt;VciMetadataResponse, VerifiableCredentialIssuer.VciMetadataApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get verifiable credential issuer metadata

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciMetadataApi({
    serviceId: "some example string",
    pretty: true,
  });
  // TODO: Handle 'response' of type VciMetadataResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciMetadataApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciMetadataApi({
  serviceId: "some example string",
  pretty: true,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciMetadataResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>pretty</code> | <code>boolean</code> | The flag indicating whether the metadata is written in the pretty format or not. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciMetadataApi(request)`

- **OnSuccess**: <code>[VciMetadataResponse](src/models/vci-metadata-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciMetadataApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciMetadataApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciMetadataResponse, VerifiableCredentialIssuer.VciMetadataApiError&gt;</code>, with `result.value` of type <code>[VciMetadataResponse](src/models/vci-metadata-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciOfferCreateApi(request: VerifiableCredentialIssuer.VciOfferCreateApiRequest, options?: RequestOptions): ApiPromise&lt;VciOfferCreateResponse, VerifiableCredentialIssuer.VciOfferCreateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a verifiable credential offer

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciOfferCreateApi({
    serviceId: "some example string",
  });
  // TODO: Handle 'response' of type VciOfferCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciOfferCreateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciOfferCreateApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciOfferCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>authorizationCodeGrantIncluded?</code> | <code>boolean</code> | The flag indicating whether the `authorization_code` object is included in the `grants` object. |
| <code>issuerStateIncluded?</code> | <code>boolean</code> | The flag indicating whether the `issuer_state` property is included in the `authorization_code` object in the `grants` object. |
| <code>preAuthorizedCodeGrantIncluded?</code> | <code>boolean</code> | The flag to include the `urn:ietf:params:oauth:grant-type:pre-authorized_code` object in the `grants` object. |
| <code>subject?</code> | <code>string</code> | The subject associated with the credential offer. |
| <code>duration?</code> | <code>number</code> | The duration of the credential offer. |
| <code>context?</code> | <code>string</code> | The general-purpose arbitrary string. |
| <code>properties?</code> | <code>[Property](src/models/property.ts)[]</code> | Extra properties to associate with the credential offer. |
| <code>jwtAtClaims?</code> | <code>string</code> | Additional claims that are added to the payload part of the JWT access token. |
| <code>authTime?</code> | <code>number</code> | The time at which the user authentication was performed during the course of issuing the credential offer. |
| <code>acr?</code> | <code>string</code> | The Authentication Context Class Reference of the user authentication performed during the course of issuing the credential offer. |
| <code>credentialConfigurationIds?</code> | <code>string[]</code> | The value of the `credential_configuration_ids` array. |
| <code>txCode?</code> | <code>string</code> | The transaction code that should be associated with the credential offer. |
| <code>txCodeInputMode?</code> | <code>string</code> | The input mode of the transaction code. |
| <code>txCodeDescription?</code> | <code>string</code> | The description of the transaction code. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciOfferCreateApi(request)`

- **OnSuccess**: <code>[VciOfferCreateResponse](src/models/vci-offer-create-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciOfferCreateApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciOfferCreateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciOfferCreateResponse, VerifiableCredentialIssuer.VciOfferCreateApiError&gt;</code>, with `result.value` of type <code>[VciOfferCreateResponse](src/models/vci-offer-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciOfferInfoApi(request: VerifiableCredentialIssuer.VciOfferInfoApiRequest, options?: RequestOptions): ApiPromise&lt;VciOfferInfoResponse, VerifiableCredentialIssuer.VciOfferInfoApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a verifiable credential offer

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciOfferInfoApi({
    serviceId: "some example string",
  });
  // TODO: Handle 'response' of type VciOfferInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciOfferInfoApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciOfferInfoApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciOfferInfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>identifier?</code> | <code>string</code> | The identifier of the credential offer. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciOfferInfoApi(request)`

- **OnSuccess**: <code>[VciOfferInfoResponse](src/models/vci-offer-info-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciOfferInfoApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciOfferInfoApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciOfferInfoResponse, VerifiableCredentialIssuer.VciOfferInfoApiError&gt;</code>, with `result.value` of type <code>[VciOfferInfoResponse](src/models/vci-offer-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciSingleIssueApi(request: VerifiableCredentialIssuer.VciSingleIssueApiRequest, options?: RequestOptions): ApiPromise&lt;VciSingleIssueResponse, VerifiableCredentialIssuer.VciSingleIssueApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issue a single verifiable credential

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciSingleIssueApi({
    serviceId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type VciSingleIssueResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciSingleIssueApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciSingleIssueApi({
  serviceId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciSingleIssueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[VciSingleIssueRequest](src/models/vci-single-issue-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciSingleIssueApi(request)`

- **OnSuccess**: <code>[VciSingleIssueResponse](src/models/vci-single-issue-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciSingleIssueApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciSingleIssueApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciSingleIssueResponse, VerifiableCredentialIssuer.VciSingleIssueApiError&gt;</code>, with `result.value` of type <code>[VciSingleIssueResponse](src/models/vci-single-issue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vciSingleParseApi(request: VerifiableCredentialIssuer.VciSingleParseApiRequest, options?: RequestOptions): ApiPromise&lt;VciSingleParseResponse, VerifiableCredentialIssuer.VciSingleParseApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a single verifiable credential

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifiableCredentialIssuer.vciSingleParseApi({
    serviceId: "some example string",
  });
  // TODO: Handle 'response' of type VciSingleParseResponse
} catch (err) {
  // TODO: Handle 'err' of type VerifiableCredentialIssuer.VciSingleParseApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifiableCredentialIssuer.vciSingleParseApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VciSingleParseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>accessToken?</code> | <code>string</code> | The access token that came along with the credential request. |
| <code>requestContent?</code> | <code>string</code> | The message body of the credential request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifiableCredentialIssuer.vciSingleParseApi(request)`

- **OnSuccess**: <code>[VciSingleParseResponse](src/models/vci-single-parse-response.ts)</code>
- **OnError**: throws <code>[VerifiableCredentialIssuer.VciSingleParseApiError](src/resources/verifiable-credential-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifiableCredentialIssuer.vciSingleParseApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VciSingleParseResponse, VerifiableCredentialIssuer.VciSingleParseApiError&gt;</code>, with `result.value` of type <code>[VciSingleParseResponse](src/models/vci-single-parse-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## HardwareSecurityKey

> Source: [HardwareSecurityKey](src/resources/hardware-security-key.ts)

<details>
<summary><code>hskCreateApi(request: HardwareSecurityKey.HskCreateApiRequest, options?: RequestOptions): ApiPromise&lt;HskCreateResponse, HardwareSecurityKey.HskCreateApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hardwareSecurityKey.hskCreateApi({ serviceId: "some example string" });
  // TODO: Handle 'response' of type HskCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type HardwareSecurityKey.HskCreateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hardwareSecurityKey.hskCreateApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HskCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>kty?</code> | <code>string</code> | The key type (EC or RSA) |
| <code>use?</code> | <code>string</code> | The key on the HSM. When the key use is "sig" (signature), the private key on the HSM is used to sign data and the corresponding public key is used to verify the signature. When the key use is "enc" (encryption), the private key on the HSM is used to decrypt encrypted data which have been encrypted with the corresponding public key |
| <code>kid?</code> | <code>string</code> | Key ID for the key on the HSM. |
| <code>hsmName?</code> | <code>string</code> | The name of the HSM. The identifier for the HSM that sits behind the Authlete server. For example, "google". |
| <code>alg?</code> | <code>string</code> | The algorithm of the key on the HSM. When the key use is `"sig"`, the algorithm represents a signing algorithm such as `"ES256"`. When the key use is `"enc"`, the algorithm represents an encryption algorithm such as `"RSA-OAEP-256"`.<br><br>It is rare that HSMs support all the algorithms listed in [RFC 7518 JSON Web Algorithms (JWA)](https://www.rfc-editor.org/rfc/rfc7518.html). When the specified algorithm is not supported by the HSM, the request to the `/hsk/create` API fails. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hardwareSecurityKey.hskCreateApi(request)`

- **OnSuccess**: <code>[HskCreateResponse](src/models/hsk-create-response.ts)</code>
- **OnError**: throws <code>[HardwareSecurityKey.HskCreateApiError](src/resources/hardware-security-key.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hardwareSecurityKey.hskCreateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HskCreateResponse, HardwareSecurityKey.HskCreateApiError&gt;</code>, with `result.value` of type <code>[HskCreateResponse](src/models/hsk-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hskDeleteApi(request: HardwareSecurityKey.HskDeleteApiRequest, options?: RequestOptions): ApiPromise&lt;HskDeleteResponse, HardwareSecurityKey.HskDeleteApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hardwareSecurityKey.hskDeleteApi({
    serviceId: "some example string",
    handle: "some example string",
  });
  // TODO: Handle 'response' of type HskDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type HardwareSecurityKey.HskDeleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hardwareSecurityKey.hskDeleteApi({
  serviceId: "some example string",
  handle: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HskDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>handle</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hardwareSecurityKey.hskDeleteApi(request)`

- **OnSuccess**: <code>[HskDeleteResponse](src/models/hsk-delete-response.ts)</code>
- **OnError**: throws <code>[HardwareSecurityKey.HskDeleteApiError](src/resources/hardware-security-key.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hardwareSecurityKey.hskDeleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HskDeleteResponse, HardwareSecurityKey.HskDeleteApiError&gt;</code>, with `result.value` of type <code>[HskDeleteResponse](src/models/hsk-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hskGetApi(request: HardwareSecurityKey.HskGetApiRequest, options?: RequestOptions): ApiPromise&lt;HskDeleteResponse, HardwareSecurityKey.HskGetApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hardwareSecurityKey.hskGetApi({
    serviceId: "some example string",
    handle: "some example string",
  });
  // TODO: Handle 'response' of type HskDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type HardwareSecurityKey.HskGetApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hardwareSecurityKey.hskGetApi({
  serviceId: "some example string",
  handle: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HskDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>handle</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hardwareSecurityKey.hskGetApi(request)`

- **OnSuccess**: <code>[HskDeleteResponse](src/models/hsk-delete-response.ts)</code>
- **OnError**: throws <code>[HardwareSecurityKey.HskGetApiError](src/resources/hardware-security-key.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hardwareSecurityKey.hskGetApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HskDeleteResponse, HardwareSecurityKey.HskGetApiError&gt;</code>, with `result.value` of type <code>[HskDeleteResponse](src/models/hsk-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hskGetListApi(request: HardwareSecurityKey.HskGetListApiRequest, options?: RequestOptions): ApiPromise&lt;HskGetListResponse, HardwareSecurityKey.HskGetListApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hardwareSecurityKey.hskGetListApi({ serviceId: "some example string" });
  // TODO: Handle 'response' of type HskGetListResponse
} catch (err) {
  // TODO: Handle 'err' of type HardwareSecurityKey.HskGetListApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hardwareSecurityKey.hskGetListApi({
  serviceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HskGetListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hardwareSecurityKey.hskGetListApi(request)`

- **OnSuccess**: <code>[HskGetListResponse](src/models/hsk-get-list-response.ts)</code>
- **OnError**: throws <code>[HardwareSecurityKey.HskGetListApiError](src/resources/hardware-security-key.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hardwareSecurityKey.hskGetListApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HskGetListResponse, HardwareSecurityKey.HskGetListApiError&gt;</code>, with `result.value` of type <code>[HskGetListResponse](src/models/hsk-get-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UtilityEndpoints

> Source: [UtilityEndpoints](src/resources/utility-endpoints.ts)

<details>
<summary><code>infoApi(options?: RequestOptions): ApiPromise&lt;InfoResponse, UtilityEndpoints.InfoApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

get the server version and enabled features


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.utilityEndpoints.infoApi();
  // TODO: Handle 'response' of type InfoResponse
} catch (err) {
  // TODO: Handle 'err' of type UtilityEndpoints.InfoApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.utilityEndpoints.infoApi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.utilityEndpoints.infoApi()`

- **OnSuccess**: <code>[InfoResponse](src/models/info-response.ts)</code>
- **OnError**: throws <code>[UtilityEndpoints.InfoApiError](src/resources/utility-endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.utilityEndpoints.infoApi().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InfoResponse, UtilityEndpoints.InfoApiError&gt;</code>, with `result.value` of type <code>[InfoResponse](src/models/info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscEchoApi(options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Echo test endpoint. Will return all path parameters in the request


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.utilityEndpoints.miscEchoApi();
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.utilityEndpoints.miscEchoApi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.utilityEndpoints.miscEchoApi()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.utilityEndpoints.miscEchoApi().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NativeSso

> Source: [NativeSso](src/resources/native-sso.ts)

<details>
<summary><code>nativeSsoApi(request: NativeSso.NativeSsoApiRequest, options?: RequestOptions): ApiPromise&lt;NativeSsoResponse, NativeSso.NativeSsoApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API should be called by the implementation of a token endpoint to generate the ID token and token response that comply with [OpenID Connect Native SSO for Mobile Apps 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) (Native SSO) when Authlete’s `/auth/token` response indicates `action = NATIVE_SSO` (after you validate the session id and verify or generate the device secret as required by the flow). The token endpoint implementation should retrieve the value of `action` from the response and take the following steps according to the value.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.nativeSso.nativeSsoApi({
    serviceId: "715948317",
    body: {
      accessToken: "_kh1aygxZ5NKLYKCJRM8M_AYvDg2wCWoprQDjfO87ZWq",
      refreshToken: "kHUGSt_d3LSgiCQzH7wa5TpwIHWgjAZGw14zZV7hRqw",
      claims: '{"given_name":"John","family_name":"Brown","email":"test@example.com"}',
      deviceSecret: "my-ds",
    },
  });
  // TODO: Handle 'response' of type NativeSsoResponse
} catch (err) {
  // TODO: Handle 'err' of type NativeSso.NativeSsoApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.nativeSso.nativeSsoApi({
  serviceId: "715948317",
  body: {
    accessToken: "_kh1aygxZ5NKLYKCJRM8M_AYvDg2wCWoprQDjfO87ZWq",
    refreshToken: "kHUGSt_d3LSgiCQzH7wa5TpwIHWgjAZGw14zZV7hRqw",
    claims: '{"given_name":"John","family_name":"Brown","email":"test@example.com"}',
    deviceSecret: "my-ds",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NativeSsoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[NativeSsoRequest](src/models/native-sso-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.nativeSso.nativeSsoApi(request)`

- **OnSuccess**: <code>[NativeSsoResponse](src/models/native-sso-response.ts)</code>
- **OnError**: throws <code>[NativeSso.NativeSsoApiError](src/resources/native-sso.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.nativeSso.nativeSsoApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NativeSsoResponse, NativeSso.NativeSsoApiError&gt;</code>, with `result.value` of type <code>[NativeSsoResponse](src/models/native-sso-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nativeSsoLogoutApi(request: NativeSso.NativeSsoLogoutApiRequest, options?: RequestOptions): ApiPromise&lt;NativeSsoLogoutResponse, NativeSso.NativeSsoLogoutApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/nativesso/logout` API is supposed to be used to support the concept of "logout from all applications" in the context of [OpenID Connect Native SSO for Mobile Apps 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) (Native SSO). This is accomplished by deleting access/refresh token records associated with the specified session ID. In Authlete's implementation, access/refresh token records can be associated with a session ID only through the mechanism introduced by Native SSO.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.nativeSso.nativeSsoLogoutApi({
    serviceId: "some example string",
    body: { sessionId: "my-sid" },
  });
  // TODO: Handle 'response' of type NativeSsoLogoutResponse
} catch (err) {
  // TODO: Handle 'err' of type NativeSso.NativeSsoLogoutApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.nativeSso.nativeSsoLogoutApi({
  serviceId: "some example string",
  body: { sessionId: "my-sid" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NativeSsoLogoutResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[NativeSsoLogoutRequest](src/models/native-sso-logout-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.nativeSso.nativeSsoLogoutApi(request)`

- **OnSuccess**: <code>[NativeSsoLogoutResponse](src/models/native-sso-logout-response.ts)</code>
- **OnError**: throws <code>[NativeSso.NativeSsoLogoutApiError](src/resources/native-sso.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.nativeSso.nativeSsoLogoutApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NativeSsoLogoutResponse, NativeSso.NativeSsoLogoutApiError&gt;</code>, with `result.value` of type <code>[NativeSsoLogoutResponse](src/models/native-sso-logout-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogs

> Source: [AuditLogs](src/resources/audit-logs.ts)

<details>
<summary><code>auditEntriesGetIdpApi(request: AuditLogs.AuditEntriesGetIdpApiRequest, options?: RequestOptions): ApiPromise&lt;AuditEntriesGetResponse, AuditLogs.AuditEntriesGetIdpApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve audit logs as a cursor-paginated list. Results can be filtered by time range, event type, and organization.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditLogs.auditEntriesGetIdpApi();
  // TODO: Handle 'response' of type AuditEntriesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type AuditLogs.AuditEntriesGetIdpApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auditLogs.auditEntriesGetIdpApi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditEntriesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>after?</code> | <code>Date</code> (date-time) | Return logs after this timestamp (ISO 8601). |
| <code>before?</code> | <code>Date</code> (date-time) | Return logs before this timestamp (ISO 8601). |
| <code>types?</code> | <code>string[]</code> | Filter by event type (e.g. `service.create`, `security.login`, `client.create`). Can be specified multiple times. The set of available event types is environment-specific and includes server-side types; retrieve the full list from the `/api/audit/types` endpoint. |
| <code>organizationId?</code> | <code>number</code> | The organization to retrieve audit logs for. Not required when authenticating with an organization token — the token's own organization is used, and a differing value is rejected. Required for user access tokens, unless the user is an Authlete administrator (administrators may omit it to query across all organizations). |
| <code>limit?</code> | <code>number</code> | The maximum number of entries to return per page. Values outside the allowed range are clamped; the effective value is echoed back in the response.<br>**Default**: 100 |
| <code>cursor?</code> | <code>string</code> | An opaque cursor returned as `nextCursor` by a previous response. When provided, it takes precedence over the `before` parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditLogs.auditEntriesGetIdpApi(request)`

- **OnSuccess**: <code>[AuditEntriesGetResponse](src/models/audit-entries-get-response.ts)</code>
- **OnError**: throws <code>[AuditLogs.AuditEntriesGetIdpApiError](src/resources/audit-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auditLogs.auditEntriesGetIdpApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditEntriesGetResponse, AuditLogs.AuditEntriesGetIdpApiError&gt;</code>, with `result.value` of type <code>[AuditEntriesGetResponse](src/models/audit-entries-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>auditTypesGetIdpApi(options?: RequestOptions): ApiPromise&lt;string[], AuditLogs.AuditTypesGetIdpApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of available audit log event types for this environment.

Accessible with a user access token or an organization token that has the `view_audit_log` permission (e.g. a token created with the `admin` or `audit_reader` preset).

This endpoint is hosted on the Authlete IdP server (`https://login.authlete.com`), not on the regional API clusters.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditLogs.auditTypesGetIdpApi();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type AuditLogs.AuditTypesGetIdpApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auditLogs.auditTypesGetIdpApi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditLogs.auditTypesGetIdpApi()`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[AuditLogs.AuditTypesGetIdpApiError](src/resources/audit-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auditLogs.auditTypesGetIdpApi().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], AuditLogs.AuditTypesGetIdpApiError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BackChannelLogout

> Source: [BackChannelLogout](src/resources/back-channel-logout.ts)

<details>
<summary><code>backchannelLogoutTokenApi(request: BackChannelLogout.BackchannelLogoutTokenApiRequest, options?: RequestOptions): ApiPromise&lt;BackchannelLogoutTokenResponse, BackChannelLogout.BackchannelLogoutTokenApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/backchannel/logout/token` API issues a logout token for a client application in the context of [OpenID Connect Back-Channel Logout 1.0](https://openid.net/specs/openid-connect-backchannel-1_0.html).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.backChannelLogout.backchannelLogoutTokenApi({
    serviceId: "some example string",
    body: { clientIdentifier: "1140735077", subject: "user123", sessionId: "my-sid" },
  });
  // TODO: Handle 'response' of type BackchannelLogoutTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type BackChannelLogout.BackchannelLogoutTokenApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.backChannelLogout.backchannelLogoutTokenApi({
  serviceId: "some example string",
  body: { clientIdentifier: "1140735077", subject: "user123", sessionId: "my-sid" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BackchannelLogoutTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceId</code> | <code>string</code> | A service ID. |
| <code>body</code> | <code>[BackchannelLogoutTokenRequest](src/models/backchannel-logout-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.backChannelLogout.backchannelLogoutTokenApi(request)`

- **OnSuccess**: <code>[BackchannelLogoutTokenResponse](src/models/backchannel-logout-token-response.ts)</code>
- **OnError**: throws <code>[BackChannelLogout.BackchannelLogoutTokenApiError](src/resources/back-channel-logout.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.backChannelLogout.backchannelLogoutTokenApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BackchannelLogoutTokenResponse, BackChannelLogout.BackchannelLogoutTokenApiError&gt;</code>, with `result.value` of type <code>[BackchannelLogoutTokenResponse](src/models/backchannel-logout-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Lifecycle

> Source: [Lifecycle](src/resources/lifecycle.ts)

<details>
<summary><code>healthCheck(request: Lifecycle.HealthCheckRequest, options?: RequestOptions): ApiPromise&lt;string, Lifecycle.HealthCheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a health check of the server.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lifecycle.healthCheck();
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Lifecycle.HealthCheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lifecycle.healthCheck().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>extended?</code> | <code>boolean</code> | If `true`, perform extended health checks (e.g. database connectivity). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lifecycle.healthCheck(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Lifecycle.HealthCheckError](src/resources/lifecycle.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lifecycle.healthCheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Lifecycle.HealthCheckError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AuthleteApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

