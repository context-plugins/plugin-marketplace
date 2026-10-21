# Reference

> Source: [PipesHubApiClient](src/client.ts)

## UserAccount

> Source: [UserAccount](src/resources/user-account.ts)

<details>
<summary><code>authenticate(request: UserAccount.AuthenticateRequestParams, options?: RequestOptions): ApiPromise&lt;AuthenticateResponse, UserAccount.AuthenticateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authenticate a user using the specified method and credentials.
Requires a valid session token from `/initAuth`.

**Credential Formats by Method:**

- `password`: `{ "credentials": { "password": "your-password" } }`
- `otp`: `{ "credentials": { "otp": "123456" } }` (6-digit code, valid for 10 minutes)
- `google`: `{ "credentials": "google-id-token-string" }`
- `microsoft`: `{ "credentials": { "accessToken": "...", "idToken": "..." } }`
- `azureAd`: `{ "credentials": { "accessToken": "...", "idToken": "..." } }`
- `oauth`: `{ "credentials": { "accessToken": "...", "idToken": "..." } }`
- `samlSso`: not accepted here; this endpoint answers `400`. SAML sign-in runs as a browser
  redirect: send the browser to `/saml/signIn` instead

**Multi-Step Response:**

If organization uses MFA, successful authentication returns:
- `status: "success"` with `nextStep` and `allowedMethods` for next step

**Fully Authenticated Response:**

After completing all steps:
- `message: "Fully authenticated"` with `accessToken` (1hr) and `refreshToken` (7d)

**Security:**

- Account locks for 24 hours after 5 consecutive failed attempts, and the owner is
  sent an email saying so. While it is locked, sign-in is refused with the same answer
  as a wrong password or code, even when the password or code is right
- CAPTCHA may be required if enabled (pass `cf-turnstile-response`)
- An email with no account gets the same status and message as a real account given
  a wrong password (`400`) or a wrong, missing or expired sign-in code (`401`)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userAccount.authenticate({
    xSessionToken: "some example string",
    body: { method: Method.SamlSso, credentials: { password: "some example password" } },
  });
  // TODO: Handle 'response' of type AuthenticateResponse
} catch (err) {
  // TODO: Handle 'err' of type UserAccount.AuthenticateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userAccount.authenticate({
  xSessionToken: "some example string",
  body: { method: Method.SamlSso, credentials: { password: "some example password" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthenticateResponse
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
| <code>xSessionToken</code> | <code>string</code> | Session token received from `/initAuth` endpoint |
| <code>body</code> | <code>[AuthenticateRequest](src/models/authenticate-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userAccount.authenticate(request)`

- **OnSuccess**: <code>[AuthenticateResponse](src/models/unions/authenticate-response.ts)</code>
- **OnError**: throws <code>[UserAccount.AuthenticateError](src/resources/user-account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userAccount.authenticate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthenticateResponse, UserAccount.AuthenticateError&gt;</code>, with `result.value` of type <code>[AuthenticateResponse](src/models/unions/authenticate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initAuth(request: UserAccount.InitAuthRequestParams, options?: RequestOptions): ApiPromise&lt;InitAuthResponse, UserAccount.InitAuthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a server-side authentication session and discover which sign-in methods are
configured for the organization. This is the first step in the multi-step login flow.

**Request body (optional)**

- You may omit the body, send an empty JSON object `{}`, or send `{ "email": "..." }`.
- `email` in the body is optional and kept for legacy reasons; omitting it does not prevent
  initialization. The web client typically calls this endpoint without a body and sends
  `email` on `/authenticate` instead.
- When provided, `email` is stored on the session for correlation with subsequent steps.

**Flow:**

1. Call this endpoint (optional JSON body as above).
2. Receive a session token in the `x-session-token` response header.
3. Send that token on subsequent `/authenticate` requests (`x-session-token` header).
4. Use `allowedMethods` and `authProviders` from the response to render the login UI.

**Session token**

- Returned as header `x-session-token`.
- Required for `/authenticate` (and related steps) until it expires.

**Multi-factor authentication**

If the organization has MFA, complete multiple authentication steps; each step may
return the next step's allowed methods.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userAccount.initAuth();
  // TODO: Handle 'response' of type InitAuthResponse
} catch (err) {
  // TODO: Handle 'err' of type UserAccount.InitAuthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userAccount.initAuth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InitAuthResponse
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
| <code>body?</code> | <code>[InitAuthRequest](src/models/init-auth-request.ts)</code> | Optional. Omit entirely or send `{}`. You may include `email` for legacy compatibility (pre-fills the session); invalid `email` format is rejected when the field is present. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userAccount.initAuth(request)`

- **OnSuccess**: <code>[InitAuthResponse](src/models/init-auth-response.ts)</code>
- **OnError**: throws <code>[UserAccount.InitAuthError](src/resources/user-account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userAccount.initAuth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InitAuthResponse, UserAccount.InitAuthError&gt;</code>, with `result.value` of type <code>[InitAuthResponse](src/models/init-auth-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshToken(options?: RequestOptions): ApiPromise&lt;RefreshTokenResponse, UserAccount.RefreshTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a new access token using a valid refresh token.

**Usage:**

- Pass the refresh token as a Bearer token in the Authorization header
- Returns a new access token and basic user information

**Token Lifetimes:**

- Access token: 24 hours (configurable via `ACCESS_TOKEN_EXPIRY` environment variable)
- Refresh token: 30 days (configurable via `REFRESH_TOKEN_EXPIRY` environment variable)

**Best Practices:**

- Call this endpoint before the access token expires
- Store the new access token and continue using it for authenticated requests
- If refresh fails with 401, redirect user to login flow


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userAccount.refreshToken();
  // TODO: Handle 'response' of type RefreshTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type UserAccount.RefreshTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userAccount.refreshToken().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefreshTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userAccount.refreshToken()`

- **OnSuccess**: <code>[RefreshTokenResponse](src/models/refresh-token-response.ts)</code>
- **OnError**: throws <code>[UserAccount.RefreshTokenError](src/resources/user-account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userAccount.refreshToken().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefreshTokenResponse, UserAccount.RefreshTokenError&gt;</code>, with `result.value` of type <code>[RefreshTokenResponse](src/models/refresh-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resetPassword(request: UserAccount.ResetPasswordRequest, options?: RequestOptions): ApiPromise&lt;AuthenticatedPasswordResetResponse, UserAccount.ResetPasswordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reset the password for the currently authenticated user.

**Overview:**

Allows a logged-in user to change their password by providing the current password and a new password.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userAccount.resetPassword({
    body: { currentPassword: "some example password", newPassword: "some example password" },
  });
  // TODO: Handle 'response' of type AuthenticatedPasswordResetResponse
} catch (err) {
  // TODO: Handle 'err' of type UserAccount.ResetPasswordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userAccount.resetPassword({
  body: { currentPassword: "some example password", newPassword: "some example password" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthenticatedPasswordResetResponse
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
| <code>body</code> | <code>[UserAccountPasswordResetRequest](src/models/user-account-password-reset-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userAccount.resetPassword(request)`

- **OnSuccess**: <code>[AuthenticatedPasswordResetResponse](src/models/authenticated-password-reset-response.ts)</code>
- **OnError**: throws <code>[UserAccount.ResetPasswordError](src/resources/user-account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userAccount.resetPassword(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthenticatedPasswordResetResponse, UserAccount.ResetPasswordError&gt;</code>, with `result.value` of type <code>[AuthenticatedPasswordResetResponse](src/models/authenticated-password-reset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationAuthConfig

> Source: [OrganizationAuthConfig](src/resources/organization-auth-config.ts)

<details>
<summary><code>getAuthMethods(options?: RequestOptions): ApiPromise&lt;AuthConfig, OrganizationAuthConfig.GetAuthMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the configured authentication methods for the organization.

**Response Structure:**

Returns an array of authentication steps, each containing:
- `order`: Step number (1-3)
- `allowedMethods`: Array of methods allowed for that step

**Example Response:**

```json
{
  "authMethods": [
    { "order": 1, "allowedMethods": [{ "type": "password" }, { "type": "google" }] },
    { "order": 2, "allowedMethods": [{ "type": "otp" }] }
  ]
}
```

**Admin Access Required:** Only organization admins can view auth configuration.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationAuthConfig.getAuthMethods();
  // TODO: Handle 'response' of type AuthConfig
} catch (err) {
  // TODO: Handle 'err' of type OrganizationAuthConfig.GetAuthMethodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationAuthConfig.getAuthMethods().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthConfig
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationAuthConfig.getAuthMethods()`

- **OnSuccess**: <code>[AuthConfig](src/models/auth-config.ts)</code>
- **OnError**: throws <code>[OrganizationAuthConfig.GetAuthMethodsError](src/resources/organization-auth-config.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationAuthConfig.getAuthMethods().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthConfig, OrganizationAuthConfig.GetAuthMethodsError&gt;</code>, with `result.value` of type <code>[AuthConfig](src/models/auth-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setUpAuthConfig(request: OrganizationAuthConfig.SetUpAuthConfigRequest, options?: RequestOptions): ApiPromise&lt;OrgAuthConfigSetupResponse, OrganizationAuthConfig.SetUpAuthConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set up or initialize the organization's authentication configuration.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationAuthConfig.setUpAuthConfig({
    body: {
      contactEmail: "user@example.com",
      registeredName: "some example string",
      adminFullName: "some example string",
    },
  });
  // TODO: Handle 'response' of type OrgAuthConfigSetupResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationAuthConfig.SetUpAuthConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationAuthConfig.setUpAuthConfig({
  body: {
    contactEmail: "user@example.com",
    registeredName: "some example string",
    adminFullName: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrgAuthConfigSetupResponse
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
| <code>body</code> | <code>[OrgAuthConfigCreateRequest](src/models/org-auth-config-create-request.ts)</code> | Organization setup details |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationAuthConfig.setUpAuthConfig(request)`

- **OnSuccess**: <code>[OrgAuthConfigSetupResponse](src/models/org-auth-config-setup-response.ts)</code>
- **OnError**: throws <code>[OrganizationAuthConfig.SetUpAuthConfigError](src/resources/organization-auth-config.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationAuthConfig.setUpAuthConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrgAuthConfigSetupResponse, OrganizationAuthConfig.SetUpAuthConfigError&gt;</code>, with `result.value` of type <code>[OrgAuthConfigSetupResponse](src/models/org-auth-config-setup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAuthMethod(request: OrganizationAuthConfig.UpdateAuthMethodRequest, options?: RequestOptions): ApiPromise&lt;UpdateAuthMethodResponse, OrganizationAuthConfig.UpdateAuthMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the authentication methods configuration for an organization.
This allows admins to configure single or multi-factor authentication.

**Validation Rules:**
- Minimum 1 step, maximum 3 steps
- Each step must have a unique order (1, 2, or 3)
- No duplicate methods within the same step
- No method can appear in multiple steps
- Each step must have at least one allowed method
- `samlSso` is only allowed in a single-step policy; it can't be combined with other steps

**Available Methods:**
- `password`: Email/password authentication
- `otp`: One-time password via email
- `google`: Google OAuth 2.0
- `microsoft`: Microsoft OAuth 2.0
- `azureAd`: Azure Active Directory
- `samlSso`: SAML 2.0 Single Sign-On
- `oauth`: Generic OAuth 2.0 provider

**Example - Single Factor (Password or Google):**

```json
{
  "authMethod": [
    { "order": 1, "allowedMethods": [{ "type": "password" }, { "type": "google" }] }
  ]
}
```

**Example - Two Factor (Password + OTP):**

```json
{
  "authMethod": [
    { "order": 1, "allowedMethods": [{ "type": "password" }] },
    { "order": 2, "allowedMethods": [{ "type": "otp" }] }
  ]
}
```

**Admin Access Required:** Only organization admins can update auth configuration.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationAuthConfig.updateAuthMethod({
    body: { authMethod: [{ order: 1, allowedMethods: [{ type: Type.SamlSso }] }] },
  });
  // TODO: Handle 'response' of type UpdateAuthMethodResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationAuthConfig.UpdateAuthMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationAuthConfig.updateAuthMethod({
  body: { authMethod: [{ order: 1, allowedMethods: [{ type: Type.SamlSso }] }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateAuthMethodResponse
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
| <code>body</code> | <code>[OrgAuthConfigUpdateAuthMethodRequest](src/models/org-auth-config-update-auth-method-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationAuthConfig.updateAuthMethod(request)`

- **OnSuccess**: <code>[UpdateAuthMethodResponse](src/models/update-auth-method-response.ts)</code>
- **OnError**: throws <code>[OrganizationAuthConfig.UpdateAuthMethodError](src/resources/organization-auth-config.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationAuthConfig.updateAuthMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateAuthMethodResponse, OrganizationAuthConfig.UpdateAuthMethodError&gt;</code>, with `result.value` of type <code>[UpdateAuthMethodResponse](src/models/update-auth-method-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OAuthProvider

> Source: [OAuthProvider](src/resources/oauth-provider.ts)

<details>
<summary><code>oauthIntrospect(request: OAuthProvider.OauthIntrospectRequest, options?: RequestOptions): ApiPromise&lt;OAuthIntrospectResponse, OAuthProvider.OauthIntrospectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

OAuth 2.0 Token Introspection Endpoint (RFC 7662).

Check if a token is active and retrieve its metadata.

**Use Cases:**
- Resource servers validating tokens
- Debugging token issues
- Checking token scopes before processing requests

**Response:**
- Active token: Returns `active: true` with token metadata
- Invalid/expired/revoked token: Returns only `active: false`


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthProvider.oauthIntrospect({
    token: "some example string",
    clientId: "some example string",
  });
  // TODO: Handle 'response' of type OAuthIntrospectResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthProvider.OauthIntrospectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthProvider.oauthIntrospect({
  token: "some example string",
  clientId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthIntrospectResponse
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
| <code>token</code> | <code>string</code> | The token to introspect |
| <code>clientId</code> | <code>string</code> | Client ID |
| <code>tokenTypeHint?</code> | <code>[TokenTypeHint1](src/models/token-type-hint1.ts)</code> | Hint about token type |
| <code>clientSecret?</code> | <code>string</code> | Client secret |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthProvider.oauthIntrospect(request)`

- **OnSuccess**: <code>[OAuthIntrospectResponse](src/models/oauth-introspect-response.ts)</code>
- **OnError**: throws <code>[OAuthProvider.OauthIntrospectError](src/resources/oauth-provider.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthProvider.oauthIntrospect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthIntrospectResponse, OAuthProvider.OauthIntrospectError&gt;</code>, with `result.value` of type <code>[OAuthIntrospectResponse](src/models/oauth-introspect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oauthRevoke(request: OAuthProvider.OauthRevokeRequest, options?: RequestOptions): ApiPromise&lt;undefined, OAuthProvider.OauthRevokeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

OAuth 2.0 Token Revocation Endpoint (RFC 7009).

Revokes an access token or refresh token, preventing further use.
Revoking a refresh token also invalidates associated access tokens.

**Use Cases:**
- User logs out of third-party app
- User revokes app access from account settings
- Security incident response

**Note:** Returns 200 OK even if token was already revoked or invalid
(per RFC 7009, to prevent token enumeration).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.oAuthProvider.oauthRevoke({ token: "some example string", clientId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type OAuthProvider.OauthRevokeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthProvider.oauthRevoke({
  token: "some example string",
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
| <code>token</code> | <code>string</code> | The token to revoke |
| <code>clientId</code> | <code>string</code> | Client ID |
| <code>tokenTypeHint?</code> | <code>[TokenTypeHint](src/models/token-type-hint.ts)</code> | Hint about token type (optional, improves performance) |
| <code>clientSecret?</code> | <code>string</code> | Client secret |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthProvider.oauthRevoke(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OAuthProvider.OauthRevokeError](src/resources/oauth-provider.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthProvider.oauthRevoke(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OAuthProvider.OauthRevokeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oauthToken(request: OAuthProvider.OauthTokenRequest, options?: RequestOptions): ApiPromise&lt;OAuthTokenResponse, OAuthProvider.OauthTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

OAuth 2.0 Token Endpoint (RFC 6749 Section 4.1.3).

Exchanges an authorization code, client credentials, refresh token, or
service token for access tokens.

**Grant Types:**
- `authorization_code`: Exchange auth code for tokens (user-based)
- `client_credentials`: Get tokens for machine-to-machine auth
- `refresh_token`: Get new access token using refresh token. The refresh token must have been issued to the presenting `client_id`; one issued to another client is rejected with `400 invalid_grant` and is left untouched (not rotated, not revoked).
- `urn:ietf:params:oauth:grant-type:token-exchange`: Service-account
  delegation (RFC 8693). A service account exchanges its own token for
  a five-minute token that acts as one named person from its
  allow-list. **Enterprise edition.** The Community build answers this
  grant with `unsupported_grant_type` and leaves it out of discovery,
  so check `grant_types_supported` rather than assuming it is there. **This grant sends no `client_id` or `client_secret`** —
  the `subject_token` is the authentication, since it already carries
  a verified identity and the scopes that bound it. Refusals about the
  person asked for all return `400 invalid_target` with one wording;
  the cause is recorded in the delegation log, which only an
  administrator can read.

For **`client_credentials`**, access tokens represent the **OAuth app creator** (the user who registered the client). The JWT may encode **`userId === client_id`**; the **Node API gateway** resolves the creator (**`createdBy`** claim or OAuth app lookup) — see **OAuth Provider** tag.

**Client Authentication:**
Can be provided via:
- HTTP Basic auth: `Authorization: Basic base64(client_id:client_secret)`
- Request body: `client_id` and `client_secret` parameters

**PKCE Verification:**
If authorization used PKCE, the `code_verifier` must be provided and will be
verified against the stored code challenge.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthProvider.oauthToken({ grantType: GrantType.AuthorizationCode });
  // TODO: Handle 'response' of type OAuthTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthProvider.OauthTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthProvider.oauthToken({
  grantType: GrantType.AuthorizationCode,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthTokenResponse
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
| <code>grantType</code> | <code>[GrantType](src/models/grant-type.ts)</code> | OAuth grant type:<br>- `authorization_code`: Exchange auth code for tokens<br>- `client_credentials`: Machine-to-machine auth<br>- `refresh_token`: Get new access token using refresh token<br>- `urn:ietf:params:oauth:grant-type:token-exchange`: Service-account<br>  delegation (RFC 8693). Exchanges a service token for a<br>  short-lived token that acts as one named person. Enterprise<br>  edition; kept in this enum because the request shape is the same<br>  wherever the grant is offered. |
| <code>code?</code> | <code>string</code> | Authorization code (required for authorization_code grant) |
| <code>redirectUri?</code> | <code>string</code> | Redirect URI (required for authorization_code grant) |
| <code>clientId?</code> | <code>string</code> | Client ID (can also be sent via Basic auth header) |
| <code>clientSecret?</code> | <code>string</code> | Client secret (can also be sent via Basic auth header) |
| <code>refreshToken?</code> | <code>string</code> | Refresh token (required for refresh_token grant) |
| <code>scope?</code> | <code>string</code> | Requested scopes (optional, defaults to original grant scopes) |
| <code>codeVerifier?</code> | <code>string</code> | PKCE code verifier (RFC 7636). Required if code_challenge was used.<br>Must be 43-128 characters from [A-Za-z0-9-._~] |
| <code>subjectToken?</code> | <code>string</code> | The service token being exchanged (token-exchange grant only).<br>This is the only authentication the grant has: no `client_id` or<br>`client_secret` is sent, because the service token already carries<br>a verified identity and the scopes that bound it. |
| <code>subjectTokenType?</code> | <code>string</code> | Optional. Must be `urn:ietf:params:oauth:token-type:access_token`<br>when sent (token-exchange grant only). |
| <code>requestedSubject?</code> | <code>string</code> | The person to act as, by user id or email address (token-exchange<br>grant only). Must be on the service account's allow-list, and must<br>not be an administrator. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthProvider.oauthToken(request)`

- **OnSuccess**: <code>[OAuthTokenResponse](src/models/oauth-token-response.ts)</code>
- **OnError**: throws <code>[OAuthProvider.OauthTokenError](src/resources/oauth-provider.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthProvider.oauthToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthTokenResponse, OAuthProvider.OauthTokenError&gt;</code>, with `result.value` of type <code>[OAuthTokenResponse](src/models/oauth-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OAuthApps

> Source: [OAuthApps](src/resources/oauth-apps.ts)

<details>
<summary><code>activateOAuthApp(request: OAuthApps.ActivateOAuthAppRequest, options?: RequestOptions): ApiPromise&lt;ActivateOAuthAppResponse, OAuthApps.ActivateOAuthAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves a suspended OAuth app back to `status: "active"`, restoring its ability to authenticate and obtain new tokens via `POST /oauth2/token`.

A revoked app cannot be reactivated (returns `400`); the only path back is to register a new app. Activating an app that is already active also returns `400`.

Creator-only.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.activateOAuthApp({ appId: "some example string" });
  // TODO: Handle 'response' of type ActivateOAuthAppResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.ActivateOAuthAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.activateOAuthApp({ appId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActivateOAuthAppResponse
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
| <code>appId</code> | <code>string</code> | OAuth app ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.activateOAuthApp(request)`

- **OnSuccess**: <code>[ActivateOAuthAppResponse](src/models/activate-oauth-app-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.ActivateOAuthAppError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.activateOAuthApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActivateOAuthAppResponse, OAuthApps.ActivateOAuthAppError&gt;</code>, with `result.value` of type <code>[ActivateOAuthAppResponse](src/models/activate-oauth-app-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOAuthApp(request: OAuthApps.CreateOAuthAppRequestParams, options?: RequestOptions): ApiPromise&lt;CreateOAuthAppResponse, OAuthApps.CreateOAuthAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a new OAuth app for the organization. Any authenticated org member may create apps; the creator is recorded as the app's owner and is the only user who can subsequently read, update, suspend, activate, regenerate the secret of, or delete it.

The `clientSecret` is returned in this response **only** — it is stored hashed server-side and cannot be retrieved later. Persist it before exiting the create flow; if it is ever lost, rotate via `POST /oauth-clients/{appId}/regenerate-secret`.

`allowedScopes` is validated against the caller's role-aware scope set (see `GET /oauth-clients/scopes`). Org admins may include admin-only scopes; non-admins requesting a restricted scope receive `400`.

All `/oauth-clients/*` routes share a per-user rate limiter (default 1000 req/min, configurable via the `MAX_OAUTH_CLIENT_REQUESTS_PER_MINUTE` env var).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.createOAuthApp({
    body: { name: "some example string", allowedScopes: ["some example string"] },
  });
  // TODO: Handle 'response' of type CreateOAuthAppResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.CreateOAuthAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.createOAuthApp({
  body: { name: "some example string", allowedScopes: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateOAuthAppResponse
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
| <code>body</code> | <code>[CreateOAuthAppRequest](src/models/create-oauth-app-request.ts)</code> | Request body for Create OAuth app |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.createOAuthApp(request)`

- **OnSuccess**: <code>[CreateOAuthAppResponse](src/models/create-oauth-app-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.CreateOAuthAppError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.createOAuthApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateOAuthAppResponse, OAuthApps.CreateOAuthAppError&gt;</code>, with `result.value` of type <code>[CreateOAuthAppResponse](src/models/create-oauth-app-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOAuthApp(request: OAuthApps.DeleteOAuthAppRequest, options?: RequestOptions): ApiPromise&lt;OauthClientsResponse, OAuthApps.DeleteOAuthAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-deletes an OAuth app. The app is flagged `isDeleted=true` on the `OAuthApp` document, removed from list/get responses for every caller, and all of its access and refresh tokens are revoked in the same operation. There is no restore endpoint — deletion is final.

Creator-only: even org admins cannot delete apps owned by other users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.deleteOAuthApp({ appId: "some example string" });
  // TODO: Handle 'response' of type OauthClientsResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.DeleteOAuthAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.deleteOAuthApp({ appId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthClientsResponse
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
| <code>appId</code> | <code>string</code> | OAuth app ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.deleteOAuthApp(request)`

- **OnSuccess**: <code>[OauthClientsResponse](src/models/oauth-clients-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.DeleteOAuthAppError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.deleteOAuthApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthClientsResponse, OAuthApps.DeleteOAuthAppError&gt;</code>, with `result.value` of type <code>[OauthClientsResponse](src/models/oauth-clients-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOAuthApp(request: OAuthApps.GetOAuthAppRequest, options?: RequestOptions): ApiPromise&lt;OAuthAppResponse, OAuthApps.GetOAuthAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full configuration of an OAuth app you registered. The `clientSecret` is never echoed back here; if you need a new one, call `POST /oauth-clients/{appId}/regenerate-secret`.

Access is creator-scoped: even org admins receive `404` for apps owned by other users. This avoids leaking app metadata across org members and keeps the read surface symmetric with `listOAuthApps`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.getOAuthApp({ appId: "some example string" });
  // TODO: Handle 'response' of type OAuthAppResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.GetOAuthAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.getOAuthApp({ appId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthAppResponse
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
| <code>appId</code> | <code>string</code> | OAuth app ID (MongoDB ObjectId) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.getOAuthApp(request)`

- **OnSuccess**: <code>[OAuthAppResponse](src/models/oauth-app-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.GetOAuthAppError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.getOAuthApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthAppResponse, OAuthApps.GetOAuthAppError&gt;</code>, with `result.value` of type <code>[OAuthAppResponse](src/models/oauth-app-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOAuthAppTokens(request: OAuthApps.ListOAuthAppTokensRequest, options?: RequestOptions): ApiPromise&lt;OAuthAppTokensListResponse, OAuthApps.ListOAuthAppTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists active access and refresh tokens currently issued to an OAuth app, sorted newest first. Useful for auditing app usage and picking specific tokens to investigate before a targeted revocation.

Each entry includes the token type (`access` or `refresh`), the user the token was issued for (omitted for client-credentials access tokens), the granted scopes, the issuance and expiry timestamps, and the revocation flag. Each type is capped at 100 most-recent rows server-side (`listTokensForApp` in `oauth_token.service.ts`); revoked and expired tokens are excluded.

Creator-only.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.listOAuthAppTokens({ appId: "some example string" });
  // TODO: Handle 'response' of type OAuthAppTokensListResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.ListOAuthAppTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.listOAuthAppTokens({ appId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthAppTokensListResponse
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
| <code>appId</code> | <code>string</code> | OAuth app ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.listOAuthAppTokens(request)`

- **OnSuccess**: <code>[OAuthAppTokensListResponse](src/models/oauth-app-tokens-list-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.ListOAuthAppTokensError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.listOAuthAppTokens(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthAppTokensListResponse, OAuthApps.ListOAuthAppTokensError&gt;</code>, with `result.value` of type <code>[OAuthAppTokensListResponse](src/models/oauth-app-tokens-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOAuthApps(request: OAuthApps.ListOAuthAppsRequest, options?: RequestOptions): ApiPromise&lt;OAuthAppListResponse, OAuthApps.ListOAuthAppsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of OAuth apps registered by the signed-in user. Access is creator-scoped — even org admins only see apps they created themselves, so this endpoint is safe to use for per-user developer dashboards without leaking org-wide app metadata.

Each entry carries the full app configuration except the client secret, which is only ever returned at creation time and immediately after a regeneration.

Use the `status` query parameter to filter by lifecycle state (`active`, `suspended`, `revoked`) and `search` for a case-insensitive substring match against `name` or `description`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.listOAuthApps();
  // TODO: Handle 'response' of type OAuthAppListResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.ListOAuthAppsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.listOAuthApps().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthAppListResponse
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
| <code>page?</code> | <code>number</code> | Page number (matches `listAppsQuerySchema`: defaults to `1` when omitted or empty).<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Items per page (defaults to `20` when omitted or empty; max 100).<br>**Default**: 20 |
| <code>status?</code> | <code>[Status9](src/models/status9.ts)</code> | Filter by status |
| <code>search?</code> | <code>string</code> | Search by app name or description (case-insensitive) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.listOAuthApps(request)`

- **OnSuccess**: <code>[OAuthAppListResponse](src/models/oauth-app-list-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.ListOAuthAppsError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.listOAuthApps(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthAppListResponse, OAuthApps.ListOAuthAppsError&gt;</code>, with `result.value` of type <code>[OAuthAppListResponse](src/models/oauth-app-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOAuthScopes(options?: RequestOptions): ApiPromise&lt;OAuthScopesGroupedResponse, OAuthApps.ListOAuthScopesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the OAuth scopes the signed-in user is permitted to register on new or updated apps, grouped by category. Use this to populate scope-picker UIs and to validate `allowedScopes` client-side before submitting to `createOAuthApp` / `updateOAuthApp`.

The result is role-aware. Org admins (members of an admin user group) receive every registered scope; everyone else is filtered to exclude admin-only scopes: `org:write`, `org:admin`, `user:invite`, `user:delete`, `usergroup:write`, `team:write`, `config:write`, `crawl:write`, `crawl:delete`.

Each key in the `scopes` map matches the `category` field on the `OAuthScopeInfo` entries it contains. A category may appear with an empty array when every scope it contains is restricted for the caller — treat empty buckets as "no permitted scopes in this group", not as a missing category.

Shares the per-user rate limiter applied to every `/oauth-clients/*` route (default 1000 req/min, `MAX_OAUTH_CLIENT_REQUESTS_PER_MINUTE`).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.listOAuthScopes();
  // TODO: Handle 'response' of type OAuthScopesGroupedResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.ListOAuthScopesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.listOAuthScopes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthScopesGroupedResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.listOAuthScopes()`

- **OnSuccess**: <code>[OAuthScopesGroupedResponse](src/models/oauth-scopes-grouped-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.ListOAuthScopesError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.listOAuthScopes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthScopesGroupedResponse, OAuthApps.ListOAuthScopesError&gt;</code>, with `result.value` of type <code>[OAuthScopesGroupedResponse](src/models/oauth-scopes-grouped-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>regenerateOAuthAppSecret(request: OAuthApps.RegenerateOAuthAppSecretRequest, options?: RequestOptions): ApiPromise&lt;RegenerateOAuthAppSecretResponse, OAuthApps.RegenerateOAuthAppSecretError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a fresh client secret for an OAuth app. The previous secret is invalidated immediately — any client still presenting it will fail token exchange at `POST /oauth2/token` until updated.

The new secret is returned in this response **only** and cannot be retrieved later. Pair this call with credential propagation to every integration that uses the app. If the rotation was triggered by a suspected leak, also call `POST /oauth-clients/{appId}/revoke-all-tokens` to invalidate already-issued access and refresh tokens instead of waiting for their natural expiry.

Creator-only: even org admins cannot rotate secrets for other users' apps.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.regenerateOAuthAppSecret({ appId: "some example string" });
  // TODO: Handle 'response' of type RegenerateOAuthAppSecretResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.RegenerateOAuthAppSecretError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.regenerateOAuthAppSecret({
  appId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegenerateOAuthAppSecretResponse
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
| <code>appId</code> | <code>string</code> | OAuth app ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.regenerateOAuthAppSecret(request)`

- **OnSuccess**: <code>[RegenerateOAuthAppSecretResponse](src/models/regenerate-oauth-app-secret-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.RegenerateOAuthAppSecretError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.regenerateOAuthAppSecret(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegenerateOAuthAppSecretResponse, OAuthApps.RegenerateOAuthAppSecretError&gt;</code>, with `result.value` of type <code>[RegenerateOAuthAppSecretResponse](src/models/regenerate-oauth-app-secret-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeAllOAuthAppTokens(request: OAuthApps.RevokeAllOAuthAppTokensRequest, options?: RequestOptions): ApiPromise&lt;OauthClientsRevokeAllTokensResponse, OAuthApps.RevokeAllOAuthAppTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes every access and refresh token currently issued to an OAuth app, in a single operation. Use this for emergency credential rotation, suspected secret leaks, or as a follow-up to `POST /oauth-clients/{appId}/regenerate-secret` when you want existing sessions invalidated immediately rather than letting them expire naturally.

The response `count` is the total number of tokens revoked across both types. Clients of this app must then obtain new tokens via the standard OAuth flow.

Creator-only.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.revokeAllOAuthAppTokens({ appId: "some example string" });
  // TODO: Handle 'response' of type OauthClientsRevokeAllTokensResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.RevokeAllOAuthAppTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.revokeAllOAuthAppTokens({ appId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthClientsRevokeAllTokensResponse
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
| <code>appId</code> | <code>string</code> | OAuth app ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.revokeAllOAuthAppTokens(request)`

- **OnSuccess**: <code>[OauthClientsRevokeAllTokensResponse](src/models/oauth-clients-revoke-all-tokens-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.RevokeAllOAuthAppTokensError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.revokeAllOAuthAppTokens(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthClientsRevokeAllTokensResponse, OAuthApps.RevokeAllOAuthAppTokensError&gt;</code>, with `result.value` of type <code>[OauthClientsRevokeAllTokensResponse](src/models/oauth-clients-revoke-all-tokens-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>suspendOAuthApp(request: OAuthApps.SuspendOAuthAppRequest, options?: RequestOptions): ApiPromise&lt;SuspendOAuthAppResponse, OAuthApps.SuspendOAuthAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves an OAuth app to `status: "suspended"`, blocking new token issuance at `POST /oauth2/token` and the authorization-code consent flow. Tokens that have already been issued remain valid until their natural expiry — call `POST /oauth-clients/{appId}/revoke-all-tokens` immediately afterwards if you need an immediate lockout.

Use this for temporary suspensions where you intend to reactivate later. For permanent removal, use `DELETE /oauth-clients/{appId}`. Suspending an app that is already suspended returns `400`.

Creator-only.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.suspendOAuthApp({ appId: "some example string" });
  // TODO: Handle 'response' of type SuspendOAuthAppResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.SuspendOAuthAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.suspendOAuthApp({ appId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuspendOAuthAppResponse
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
| <code>appId</code> | <code>string</code> | OAuth app ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.suspendOAuthApp(request)`

- **OnSuccess**: <code>[SuspendOAuthAppResponse](src/models/suspend-oauth-app-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.SuspendOAuthAppError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.suspendOAuthApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuspendOAuthAppResponse, OAuthApps.SuspendOAuthAppError&gt;</code>, with `result.value` of type <code>[SuspendOAuthAppResponse](src/models/suspend-oauth-app-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOAuthApp(request: OAuthApps.UpdateOAuthAppRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateOAuthAppResponse, OAuthApps.UpdateOAuthAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an OAuth app's configuration. All body fields are optional — supply only what should change. URL fields (`homepageUrl`, `privacyPolicyUrl`, `termsOfServiceUrl`) accept `null` to clear them.

Creator-only: even org admins cannot edit apps owned by other users.

When modifying `allowedScopes`, the new set must remain a subset of the caller's role-aware scope list (same rule as `GET /oauth-clients/scopes`). When adding `authorization_code` to `allowedGrantTypes`, `redirectUris` becomes required and must contain at least one URI; otherwise the request is rejected with `400` by the Zod refine on `updateAppSchema`.

This endpoint never rotates the client secret — use `POST /oauth-clients/{appId}/regenerate-secret` for that.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthApps.updateOAuthApp({ appId: "some example string", body: {} });
  // TODO: Handle 'response' of type UpdateOAuthAppResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthApps.UpdateOAuthAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthApps.updateOAuthApp({
  appId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateOAuthAppResponse
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
| <code>appId</code> | <code>string</code> | OAuth app ID |
| <code>body</code> | <code>[UpdateOAuthAppRequest](src/models/update-oauth-app-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthApps.updateOAuthApp(request)`

- **OnSuccess**: <code>[UpdateOAuthAppResponse](src/models/update-oauth-app-response.ts)</code>
- **OnError**: throws <code>[OAuthApps.UpdateOAuthAppError](src/resources/oauth-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthApps.updateOAuthApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateOAuthAppResponse, OAuthApps.UpdateOAuthAppError&gt;</code>, with `result.value` of type <code>[UpdateOAuthAppResponse](src/models/update-oauth-app-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PersonalAccessTokens

> Source: [PersonalAccessTokens](src/resources/personal-access-tokens.ts)

<details>
<summary><code>adminListPersonalAccessTokens(request: PersonalAccessTokens.AdminListPersonalAccessTokensRequest, options?: RequestOptions): ApiPromise&lt;AdminPatListResponse, PersonalAccessTokens.AdminListPersonalAccessTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every active personal access token across every member of the
org, paginated, with each token's owner attached (including owners
who've since been deleted from the org — see `ownerDeleted` on
`AdminPatListItem`). For incident response: a departed employee or a
compromised laptop, where only the token's own creator could
otherwise see or revoke it.

Requires org-admin privileges (`userAdminCheck`): a non-admin caller
gets `403` (`ForbiddenError`, message
"You need admin access to do this. Ask an admin in your organisation.").


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.personalAccessTokens.adminListPersonalAccessTokens();
  // TODO: Handle 'response' of type AdminPatListResponse
} catch (err) {
  // TODO: Handle 'err' of type PersonalAccessTokens.AdminListPersonalAccessTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.personalAccessTokens.adminListPersonalAccessTokens().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminPatListResponse
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
| <code>page?</code> | <code>number</code> | Page number (defaults to `1` when omitted or empty)<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Items per page (defaults to `100` when omitted or empty; max 100)<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.personalAccessTokens.adminListPersonalAccessTokens(request)`

- **OnSuccess**: <code>[AdminPatListResponse](src/models/admin-pat-list-response.ts)</code>
- **OnError**: throws <code>[PersonalAccessTokens.AdminListPersonalAccessTokensError](src/resources/personal-access-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.personalAccessTokens.adminListPersonalAccessTokens(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminPatListResponse, PersonalAccessTokens.AdminListPersonalAccessTokensError&gt;</code>, with `result.value` of type <code>[AdminPatListResponse](src/models/admin-pat-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminRevokePersonalAccessToken(request: PersonalAccessTokens.AdminRevokePersonalAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;RevokePatResponse, PersonalAccessTokens.AdminRevokePersonalAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes a token by id, scoped to the org's PAT client but **not** to
a specific owning user — the admin counterpart to
`DELETE /personal-access-tokens/{tokenId}`. Requires org-admin
privileges (`userAdminCheck`); a non-admin caller gets `403`
(`ForbiddenError`), same as `GET /personal-access-tokens/admin`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.personalAccessTokens.adminRevokePersonalAccessToken({
    tokenId: "some example string",
  });
  // TODO: Handle 'response' of type RevokePatResponse
} catch (err) {
  // TODO: Handle 'err' of type PersonalAccessTokens.AdminRevokePersonalAccessTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.personalAccessTokens.adminRevokePersonalAccessToken({
  tokenId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevokePatResponse
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
| <code>tokenId</code> | <code>string</code> | Personal access token ID |
| <code>body?</code> | <code>[RevokePatRequest](src/models/revoke-pat-request.ts)</code> | Optional request body for Admin revoke personal access token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.personalAccessTokens.adminRevokePersonalAccessToken(request)`

- **OnSuccess**: <code>[RevokePatResponse](src/models/revoke-pat-response.ts)</code>
- **OnError**: throws <code>[PersonalAccessTokens.AdminRevokePersonalAccessTokenError](src/resources/personal-access-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.personalAccessTokens.adminRevokePersonalAccessToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevokePatResponse, PersonalAccessTokens.AdminRevokePersonalAccessTokenError&gt;</code>, with `result.value` of type <code>[RevokePatResponse](src/models/revoke-pat-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPersonalAccessToken(request: PersonalAccessTokens.CreatePersonalAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;CreatePatResponse, PersonalAccessTokens.CreatePersonalAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mints a new personal access token for the caller. Deliberately not
admin-gated — any authenticated org member may create their own,
unlike OAuth app registration.

The token is minted against a lazily-created, per-org synthetic
OAuth app (`clientId: pat-system:<orgId>`) shared by every PAT in
that org — the same signing, hashing, and revocation machinery as
`/oauth2/token`, reused rather than duplicated.

`scopes` is validated against the org's configured `MCP_SCOPES`
env var, not the full role-aware OAuth-app scope catalog — a
non-admin can request any scope in that set.

**Session only.** The bearer token must be the user's interactive
session JWT. OAuth access tokens and personal access tokens
(`phpat_...`) are rejected with `403`, so a token that is already
issued cannot mint another with wider scopes or a longer life.

The response's `accessToken` is shown **once**; only its SHA-256
hash is stored. It's prefixed `phpat_` (see the `bearerAuth`
security scheme).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.personalAccessTokens.createPersonalAccessToken({
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type CreatePatResponse
} catch (err) {
  // TODO: Handle 'err' of type PersonalAccessTokens.CreatePersonalAccessTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.personalAccessTokens.createPersonalAccessToken({
  body: { name: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreatePatResponse
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
| <code>body</code> | <code>[CreatePatRequest](src/models/create-pat-request.ts)</code> | Request body for Create personal access token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.personalAccessTokens.createPersonalAccessToken(request)`

- **OnSuccess**: <code>[CreatePatResponse](src/models/create-pat-response.ts)</code>
- **OnError**: throws <code>[PersonalAccessTokens.CreatePersonalAccessTokenError](src/resources/personal-access-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.personalAccessTokens.createPersonalAccessToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreatePatResponse, PersonalAccessTokens.CreatePersonalAccessTokenError&gt;</code>, with `result.value` of type <code>[CreatePatResponse](src/models/create-pat-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPersonalAccessTokenScopes(options?: RequestOptions): ApiPromise&lt;PatScopesListResponse, PersonalAccessTokens.ListPersonalAccessTokenScopesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the org's configured `MCP_SCOPES` as a flat array of scope
definitions, for populating the create-token scope picker. Unlike
`GET /oauth-clients/scopes`, this is **not** grouped by category and
**not** role-aware — every org member sees the same set, since PAT
scope selection isn't gated by admin status.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.personalAccessTokens.listPersonalAccessTokenScopes();
  // TODO: Handle 'response' of type PatScopesListResponse
} catch (err) {
  // TODO: Handle 'err' of type PersonalAccessTokens.ListPersonalAccessTokenScopesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.personalAccessTokens.listPersonalAccessTokenScopes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PatScopesListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.personalAccessTokens.listPersonalAccessTokenScopes()`

- **OnSuccess**: <code>[PatScopesListResponse](src/models/pat-scopes-list-response.ts)</code>
- **OnError**: throws <code>[PersonalAccessTokens.ListPersonalAccessTokenScopesError](src/resources/personal-access-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.personalAccessTokens.listPersonalAccessTokenScopes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PatScopesListResponse, PersonalAccessTokens.ListPersonalAccessTokenScopesError&gt;</code>, with `result.value` of type <code>[PatScopesListResponse](src/models/pat-scopes-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPersonalAccessTokens(options?: RequestOptions): ApiPromise&lt;ListPatResponse, PersonalAccessTokens.ListPersonalAccessTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the caller's own active (non-revoked, unexpired) personal
access tokens, newest first, capped at 100 rows server-side. Never
returns another user's tokens — see `GET /personal-access-tokens/admin`
for the org-admin, cross-user view.

Shares the same per-user rate limiter as `/oauth-clients/*`
(default 1000 req/min, `MAX_OAUTH_CLIENT_REQUESTS_PER_MINUTE`).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.personalAccessTokens.listPersonalAccessTokens();
  // TODO: Handle 'response' of type ListPatResponse
} catch (err) {
  // TODO: Handle 'err' of type PersonalAccessTokens.ListPersonalAccessTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.personalAccessTokens.listPersonalAccessTokens().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPatResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.personalAccessTokens.listPersonalAccessTokens()`

- **OnSuccess**: <code>[ListPatResponse](src/models/list-pat-response.ts)</code>
- **OnError**: throws <code>[PersonalAccessTokens.ListPersonalAccessTokensError](src/resources/personal-access-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.personalAccessTokens.listPersonalAccessTokens().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPatResponse, PersonalAccessTokens.ListPersonalAccessTokensError&gt;</code>, with `result.value` of type <code>[ListPatResponse](src/models/list-pat-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokePersonalAccessToken(request: PersonalAccessTokens.RevokePersonalAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;RevokePatResponse, PersonalAccessTokens.RevokePersonalAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes a token by id, scoped to `{tokenId, clientId, callerUserId}`
— a caller can never revoke another user's token through this route,
even though everyone in the org shares the same underlying
`pat-system:<orgId>` client. Revocation takes effect immediately: the
token's next verification attempt fails, including one already in
flight.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.personalAccessTokens.revokePersonalAccessToken({
    tokenId: "some example string",
  });
  // TODO: Handle 'response' of type RevokePatResponse
} catch (err) {
  // TODO: Handle 'err' of type PersonalAccessTokens.RevokePersonalAccessTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.personalAccessTokens.revokePersonalAccessToken({
  tokenId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevokePatResponse
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
| <code>tokenId</code> | <code>string</code> | Personal access token ID |
| <code>body?</code> | <code>[RevokePatRequest](src/models/revoke-pat-request.ts)</code> | Optional request body for Revoke personal access token |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.personalAccessTokens.revokePersonalAccessToken(request)`

- **OnSuccess**: <code>[RevokePatResponse](src/models/revoke-pat-response.ts)</code>
- **OnError**: throws <code>[PersonalAccessTokens.RevokePersonalAccessTokenError](src/resources/personal-access-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.personalAccessTokens.revokePersonalAccessToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevokePatResponse, PersonalAccessTokens.RevokePersonalAccessTokenError&gt;</code>, with `result.value` of type <code>[RevokePatResponse](src/models/revoke-pat-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OpenIdConnect

> Source: [OpenIdConnect](src/resources/open-id-connect.ts)

<details>
<summary><code>oauthUserInfo(options?: RequestOptions): ApiPromise&lt;OAuthUserInfoResponse, OpenIdConnect.OauthUserInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

OpenID Connect UserInfo Endpoint.

Returns claims about the authenticated user. Requires a valid access token
with the `openid` scope.

**Available Claims:**
- `user_id` - User identifier
- `name`, `given_name`, `family_name` - Name claims (with `profile` scope)
- `email`, `email_verified` - Email claims (with `email` scope)

**Authentication:**
Pass the access token as a Bearer token: `Authorization: Bearer {access_token}`


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.openIdConnect.oauthUserInfo();
  // TODO: Handle 'response' of type OAuthUserInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type OpenIdConnect.OauthUserInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.openIdConnect.oauthUserInfo().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthUserInfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.openIdConnect.oauthUserInfo()`

- **OnSuccess**: <code>[OAuthUserInfoResponse](src/models/oauth-user-info-response.ts)</code>
- **OnError**: throws <code>[OpenIdConnect.OauthUserInfoError](src/resources/open-id-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.openIdConnect.oauthUserInfo().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthUserInfoResponse, OpenIdConnect.OauthUserInfoError&gt;</code>, with `result.value` of type <code>[OAuthUserInfoResponse](src/models/oauth-user-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/resources/organizations.ts)

<details>
<summary><code>getCurrentOrganization(options?: RequestOptions): ApiPromise&lt;Organization, Organizations.GetCurrentOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details about the authenticated user's organization.

**Overview:**

This endpoint returns the organization document for the current user's org, including profile data and configuration.

**Response Includes:**

- Organization profile (registeredName, shortName, contactEmail, domain)
- Account type
- Onboarding status
- Permanent address
- Creation and modification timestamps

**Use Cases:**

- Organization profile pages
- Settings and configuration screens


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getCurrentOrganization();
  // TODO: Handle 'response' of type Organization
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetCurrentOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.getCurrentOrganization().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Organization
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getCurrentOrganization()`

- **OnSuccess**: <code>[Organization](src/models/organization.ts)</code>
- **OnError**: throws <code>[Organizations.GetCurrentOrganizationError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getCurrentOrganization().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Organization, Organizations.GetCurrentOrganizationError&gt;</code>, with `result.value` of type <code>[Organization](src/models/organization.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## KnowledgeBaseApi

> Source: [KnowledgeBaseApi](src/resources/knowledge-base-api.ts)

<details>
<summary><code>createFolder(request: KnowledgeBaseApi.CreateFolderRequest, options?: RequestOptions): ApiPromise&lt;FolderCreateResponseSchema, KnowledgeBaseApi.CreateFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a folder in a knowledge base. Omit `folderId` to create at the KB root;
pass `folderId` as a query parameter to create a nested subfolder inside an
existing parent folder.

**Required permission:** WRITER or higher

**Folder features:**

- Organize records hierarchically
- Support nested subfolders (unlimited depth)
- Inherit parent KB permissions

**Naming rules:**

- 1–255 characters
- XSS protection applied
- Spaces and special characters allowed
- Duplicate names rejected within the same parent (`409`)

**Response:** Returns `id` and `name` for the created folder.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.createFolder({
    kbId: "some example string",
    body: { folderName: "some example string" },
  });
  // TODO: Handle 'response' of type FolderCreateResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.CreateFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.createFolder({
  kbId: "some example string",
  body: { folderName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderCreateResponseSchema
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
| <code>kbId</code> | <code>string</code> | Knowledge base ID |
| <code>folderId?</code> | <code>string</code> | Parent folder ID. Omit to create at the knowledge base root. |
| <code>body</code> | <code>[KnowledgeBaseFolderRequest](src/models/knowledge-base-folder-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.createFolder(request)`

- **OnSuccess**: <code>[FolderCreateResponseSchema](src/models/folder-create-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.CreateFolderError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.createFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderCreateResponseSchema, KnowledgeBaseApi.CreateFolderError&gt;</code>, with `result.value` of type <code>[FolderCreateResponseSchema](src/models/folder-create-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createKnowledgeBase(request: KnowledgeBaseApi.CreateKnowledgeBaseRequest, options?: RequestOptions): ApiPromise&lt;KnowledgeBaseCreateResponse, KnowledgeBaseApi.CreateKnowledgeBaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new knowledge base for organizing and managing documents within your organization.

**Overview:**

A knowledge base is a container for organizing related documents, files, and content. It provides a central location for teams to collaborate on shared information.

**Features:**

- Hierarchical folder structure support
- Role-based access control (OWNER, WRITER, READER)
- Full-text search across all records
- Integration with external connectors (Google Drive, OneDrive, etc.)
- Automatic content indexing for AI-powered search

**Naming Rules:**

- Name must be 1-255 characters
- Special characters and HTML tags are sanitized
- Names don't need to be unique within organization

**Creator Permissions:**

The user creating the KB automatically becomes the OWNER with full administrative rights.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.createKnowledgeBase({
    body: { kbName: "some example string" },
  });
  // TODO: Handle 'response' of type KnowledgeBaseCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.CreateKnowledgeBaseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.createKnowledgeBase({
  body: { kbName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KnowledgeBaseCreateResponse
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
| <code>body</code> | <code>[KnowledgeBaseRequest](src/models/knowledge-base-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.createKnowledgeBase(request)`

- **OnSuccess**: <code>[KnowledgeBaseCreateResponse](src/models/knowledge-base-create-response.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.CreateKnowledgeBaseError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.createKnowledgeBase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KnowledgeBaseCreateResponse, KnowledgeBaseApi.CreateKnowledgeBaseError&gt;</code>, with `result.value` of type <code>[KnowledgeBaseCreateResponse](src/models/knowledge-base-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFolder(request: KnowledgeBaseApi.DeleteFolderRequest, options?: RequestOptions): ApiPromise&lt;FolderDeleteResponseSchema, KnowledgeBaseApi.DeleteFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a folder and all its contents.

**Required permission:** WRITER or higher

**Cascade delete:**

All subfolders and records within will be permanently deleted.

**Warning:** This action is irreversible.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.deleteFolder({
    kbId: "some example string",
    folderId: "some example string",
  });
  // TODO: Handle 'response' of type FolderDeleteResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.DeleteFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.deleteFolder({
  kbId: "some example string",
  folderId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderDeleteResponseSchema
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
| <code>kbId</code> | <code>string</code> | - |
| <code>folderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.deleteFolder(request)`

- **OnSuccess**: <code>[FolderDeleteResponseSchema](src/models/folder-delete-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.DeleteFolderError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.deleteFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderDeleteResponseSchema, KnowledgeBaseApi.DeleteFolderError&gt;</code>, with `result.value` of type <code>[FolderDeleteResponseSchema](src/models/folder-delete-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteKnowledgeBase(request: KnowledgeBaseApi.DeleteKnowledgeBaseRequest, options?: RequestOptions): ApiPromise&lt;DeleteKnowledgeBaseById, KnowledgeBaseApi.DeleteKnowledgeBaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a knowledge base and all its contents.

**Required permission:**

User must have `OWNER` role on the knowledge base.

**What gets deleted:**

- All folders within the KB
- All records and their indexed content
- All permission grants
- Associated storage files

**Warning:** This action is irreversible. Consider exporting data before deletion.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.deleteKnowledgeBase({
    kbId: "8a095180-2989-4018-b448-70eb75fba1c7",
  });
  // TODO: Handle 'response' of type DeleteKnowledgeBaseById
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.DeleteKnowledgeBaseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.deleteKnowledgeBase({
  kbId: "8a095180-2989-4018-b448-70eb75fba1c7",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteKnowledgeBaseById
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
| <code>kbId</code> | <code>string</code> | Knowledge base ID (non-empty string) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.deleteKnowledgeBase(request)`

- **OnSuccess**: <code>[DeleteKnowledgeBaseById](src/models/delete-knowledge-base-by-id.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.DeleteKnowledgeBaseError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.deleteKnowledgeBase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteKnowledgeBaseById, KnowledgeBaseApi.DeleteKnowledgeBaseError&gt;</code>, with `result.value` of type <code>[DeleteKnowledgeBaseById](src/models/delete-knowledge-base-by-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteRecord(request: KnowledgeBaseApi.DeleteRecordRequest, options?: RequestOptions): ApiPromise&lt;DeleteRecordResponseSchema, KnowledgeBaseApi.DeleteRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a record from the knowledge base.

**Required permission:**

WRITER or higher

**What gets deleted:**

- Record metadata
- Associated storage file
- Indexed content and embeddings

**Trash:** With "Move Deleted Records to the Trash" on in Labs, the record
goes to the trash instead: it disappears from search, chat and lists at once,
its embeddings are removed, and the record and its file stay until the scheduled
purge. The response then carries `softDeleted: true` and the `batchId`, and the
record can be brought back with `POST /knowledgeBase/record/{recordId}/restore`.
With the setting off, the delete is immediate and cannot be undone.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.deleteRecord({ recordId: "some example string" });
  // TODO: Handle 'response' of type DeleteRecordResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.DeleteRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.deleteRecord({ recordId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteRecordResponseSchema
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
| <code>recordId</code> | <code>string</code> | Record ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.deleteRecord(request)`

- **OnSuccess**: <code>[DeleteRecordResponseSchema](src/models/delete-record-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.DeleteRecordError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.deleteRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteRecordResponseSchema, KnowledgeBaseApi.DeleteRecordError&gt;</code>, with `result.value` of type <code>[DeleteRecordResponseSchema](src/models/delete-record-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getKnowledgeBase(request: KnowledgeBaseApi.GetKnowledgeBaseRequest, options?: RequestOptions): ApiPromise&lt;GetKnowledgeBaseById, KnowledgeBaseApi.GetKnowledgeBaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information about a specific knowledge base.

**Overview:**

Returns complete KB metadata including name, timestamps, root-level folders, and the requesting user's role.

**Access Control:**

User must have at least READER permission to view KB details.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.getKnowledgeBase({
    kbId: "8a095180-2989-4018-b448-70eb75fba1c7",
  });
  // TODO: Handle 'response' of type GetKnowledgeBaseById
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.GetKnowledgeBaseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.getKnowledgeBase({
  kbId: "8a095180-2989-4018-b448-70eb75fba1c7",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetKnowledgeBaseById
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
| <code>kbId</code> | <code>string</code> | Knowledge base ID (non-empty string) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.getKnowledgeBase(request)`

- **OnSuccess**: <code>[GetKnowledgeBaseById](src/models/get-knowledge-base-by-id.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.GetKnowledgeBaseError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.getKnowledgeBase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetKnowledgeBaseById, KnowledgeBaseApi.GetKnowledgeBaseError&gt;</code>, with `result.value` of type <code>[GetKnowledgeBaseById](src/models/get-knowledge-base-by-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getKnowledgeHubChildNodes(request: KnowledgeBaseApi.GetKnowledgeHubChildNodesRequest, options?: RequestOptions): ApiPromise&lt;KnowledgeHubNodesResponse, KnowledgeBaseApi.GetKnowledgeHubChildNodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the children of a specific node in the knowledge hub tree.
Use this endpoint to drill down into Collections, connector app
hierarchies, folders, and record groups.

**Navigation hierarchy**

The typical drill-down path is:
1. Root apps (`GET /knowledgeBase/knowledge-hub/nodes`)
2. Record groups / folders within an app (`parentType=app`)
3. Records within a record group (`parentType=recordGroup`)
4. Sub-records or attachments within a record (`parentType=record`)

**Parent identification**

- `parentType` must be one of: `app`, `recordGroup`, `folder`, `record`
- `parentId` must be a standard UUID

**Filtering and searching**

All query-param filters from the root endpoint are available here and
operate within the scope of the parent node's subtree. When `q` is
provided, the search spans all descendants of the parent node.

**Response extras**

When `include=breadcrumbs` is set, the response contains a
`breadcrumbs` array tracing the path from the root to the current
node. The `currentNode` and `parentNode` objects are always populated
for non-root requests.

**Access control**

Requires a valid bearer token. For OAuth tokens the `kb:read` scope
must be present; regular JWT bearer tokens pass through without scope
enforcement.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.getKnowledgeHubChildNodes({
    parentType: ParentType.App,
    parentId: "some example string",
    q: "quarterly report",
    nodeTypes: "recordGroup",
    recordTypes: "FILE,CONFLUENCE_PAGE",
    origins: "CONNECTOR",
    connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
    indexingStatus: "COMPLETED,FAILED",
    createdAt: "gte:1700000000000,lte:1710000000000",
    updatedAt: "gte:1700000000000,lte:1710000000000",
    size: "gte:0,lte:10485760",
    include: "breadcrumbs,availableFilters",
  });
  // TODO: Handle 'response' of type KnowledgeHubNodesResponse
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.GetKnowledgeHubChildNodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.getKnowledgeHubChildNodes({
  parentType: ParentType.App,
  parentId: "some example string",
  q: "quarterly report",
  nodeTypes: "recordGroup",
  recordTypes: "FILE,CONFLUENCE_PAGE",
  origins: "CONNECTOR",
  connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
  indexingStatus: "COMPLETED,FAILED",
  createdAt: "gte:1700000000000,lte:1710000000000",
  updatedAt: "gte:1700000000000,lte:1710000000000",
  size: "gte:0,lte:10485760",
  include: "breadcrumbs,availableFilters",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KnowledgeHubNodesResponse
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
| <code>parentType</code> | <code>[ParentType](src/models/parent-type.ts)</code> | Type of the parent node whose children to retrieve.<br><br>Must be one of: `app`, `recordGroup`, `folder`, `record`.<br>Any other value returns a 400 error. |
| <code>parentId</code> | <code>string</code> | Identifier of the parent node. Must be a valid UUID<br>(e.g. `f3a4b5b6-5b6c-4e85-9097-3202cfe696fc`).<br><br>Any value that does not match this format returns a 400 error. |
| <code>onlyContainers?</code> | <code>boolean</code> | When `true`, only nodes that have children are returned (useful for<br>building sidebar / tree navigation). Leaf nodes are excluded.<br>**Default**: false |
| <code>page?</code> | <code>number</code> | Page number (1-indexed, at most 50). Combined with `limit` to paginate results.<br>Prefer `cursor`: a page number is reached by reading the pages before it.<br>**Default**: 1 |
| <code>cursor?</code> | <code>string</code> | Opaque cursor from `pagination.nextCursor` or `pagination.prevCursor` of a previous<br>response. Send it with the same path, filters and sort as the request that returned<br>it; a cursor issued for another place, user or listing mode is refused with 400. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return per page.<br>**Default**: 50 |
| <code>sortBy?</code> | <code>[SortBy2](src/models/sort-by2.ts)</code> | Field to sort results by. Omitted → default `updatedAt`.<br>Unknown value → silently falls back to `name`.<br>**Default**: "updatedAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction. Omitted → default `desc`.<br>Unknown value → silently falls back to `asc`.<br>**Default**: "desc" |
| <code>q?</code> | <code>string</code> | Full-text search query. Must be between 2 and 500 characters<br>(inclusive). When provided, the endpoint searches across all<br>descendants of the parent node. |
| <code>nodeTypes?</code> | <code>string</code> | Comma-separated list of node types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `folder`, `app`, `recordGroup`, `record` |
| <code>recordTypes?</code> | <code>string</code> | Comma-separated list of record types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `FILE`, `DRIVE`, `WEBPAGE`, `DATABASE`, `DATASOURCE`,<br>`MESSAGE`, `MAIL`, `GROUP_MAIL`, `TICKET`, `COMMENT`,<br>`INLINE_COMMENT`, `CONFLUENCE_PAGE`, `CONFLUENCE_BLOGPOST`,<br>`SHAREPOINT_PAGE`, `SHAREPOINT_LIST`, `SHAREPOINT_LIST_ITEM`,<br>`SHAREPOINT_DOCUMENT_LIBRARY`, `LINK`, `PROJECT`, `PULL_REQUEST`,<br>`MEETING`, `PRODUCT`, `DEAL`, `CASE`, `TASK`, `ARTIFACT`,<br>`CODE_FILE`, `SQL_TABLE`, `SQL_VIEW`, `OTHERS` |
| <code>origins?</code> | <code>string</code> | Comma-separated list of origin types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `COLLECTION`, `CONNECTOR` |
| <code>connectorIds?</code> | <code>string</code> | Comma-separated list of connector instance IDs (UUIDs) to filter by.<br>Maximum 100 items. No enum validation — any string is accepted, but<br>non-existent IDs simply yield zero results. |
| <code>indexingStatus?</code> | <code>string</code> | Comma-separated list of indexing statuses to include. Invalid values<br>are silently ignored. Maximum 100 items.<br><br>Valid values: `NOT_STARTED`, `PAUSED`, `IN_PROGRESS`, `COMPLETED`,<br>`FAILED`, `FILE_TYPE_NOT_SUPPORTED`, `AUTO_INDEX_OFF`, `EMPTY`,<br>`ENABLE_MULTIMODAL_MODELS`, `QUEUED` |
| <code>createdAt?</code> | <code>string</code> | Created-date range filter. Format: `gte:<epochMs>,lte:<epochMs>`.<br>Both bounds are optional (you may send just `gte:...` or just<br>`lte:...`). Timestamps must be in the range 0 to 9999999999999 and<br>`gte` must be less than or equal to `lte` when both are present. |
| <code>updatedAt?</code> | <code>string</code> | Updated-date range filter. Same format and constraints as `createdAt`. |
| <code>size?</code> | <code>string</code> | File-size range filter in bytes. Format: `gte:<bytes>,lte:<bytes>`.<br>Both bounds are optional. Values must be non-negative and at most<br>1099511627776 (1 TB). `gte` must be less than or equal to `lte`<br>when both are present. |
| <code>flattened?</code> | <code>boolean</code> | Force flattened/recursive search (`true`) or direct top-level<br>listing (`false`). When omitted, it's computed from whether any<br>of `q`, `nodeTypes`, `recordTypes`, `origins`, `connectorIds`,<br>`indexingStatus`, `createdAt`, `updatedAt`, or `size` are present —<br>if any are, results are flattened automatically; otherwise only<br>top-level nodes are returned. |
| <code>include?</code> | <code>string</code> | Comma-separated list of additional response sections to include.<br>Invalid values are silently ignored. Maximum 100 items.<br><br>Valid values: `breadcrumbs`, `counts`, `availableFilters`, `permissions` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.getKnowledgeHubChildNodes(request)`

- **OnSuccess**: <code>[KnowledgeHubNodesResponse](src/models/knowledge-hub-nodes-response.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.GetKnowledgeHubChildNodesError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.getKnowledgeHubChildNodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KnowledgeHubNodesResponse, KnowledgeBaseApi.GetKnowledgeHubChildNodesError&gt;</code>, with `result.value` of type <code>[KnowledgeHubNodesResponse](src/models/knowledge-hub-nodes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getKnowledgeHubRootNodes(request: KnowledgeBaseApi.GetKnowledgeHubRootNodesRequest, options?: RequestOptions): ApiPromise&lt;KnowledgeHubNodesResponse, KnowledgeBaseApi.GetKnowledgeHubRootNodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns root-level nodes (connector apps and Collection apps) or, when
filters or search are applied, a flat list of matching nodes across the
entire knowledge hub tree.

**Overview**

The Knowledge Hub provides a unified view across all knowledge sources:
- **Collection** — locally uploaded knowledge bases (`origin: COLLECTION`)
- **Connector app** — external connector instances such as Google Drive,
  Slack, Confluence, Jira (`origin: CONNECTOR`)

Use this endpoint to build file-browser UIs and sidebar navigation trees.

**Browsing vs. searching**

When no filters or search query are provided, only top-level app nodes
are returned. Adding `nodeTypes`, `q`, or other filter params triggers a
search across the full tree, returning matching nodes regardless of depth.

For children of a specific node, use
`GET /knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}`.

**Pagination and sorting**

Results are always paginated. Default sort is `updatedAt` descending.
The `pagination` object in the response contains `hasNext` / `hasPrev`
flags suitable for infinite-scroll or page-based navigation.

**Expanding the response**

Use the `include` parameter to request additional sections:
- `availableFilters` — adds `filters.available` with all filter options
- `counts` — adds a `counts` summary broken down by node type
- `breadcrumbs` — adds the breadcrumb trail (empty at root level)
- `permissions` — adds the caller's permission flags

**Access control**

Requires a valid bearer token. For OAuth tokens the `kb:read` scope
must be present; regular JWT bearer tokens pass through without scope
enforcement.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.getKnowledgeHubRootNodes({
    q: "quarterly report",
    nodeTypes: "app,recordGroup",
    recordTypes: "FILE,CONFLUENCE_PAGE",
    origins: "CONNECTOR",
    connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
    indexingStatus: "COMPLETED,FAILED",
    createdAt: "gte:1700000000000,lte:1710000000000",
    updatedAt: "gte:1700000000000,lte:1710000000000",
    size: "gte:0,lte:10485760",
    include: "availableFilters,counts",
  });
  // TODO: Handle 'response' of type KnowledgeHubNodesResponse
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.GetKnowledgeHubRootNodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.getKnowledgeHubRootNodes({
  q: "quarterly report",
  nodeTypes: "app,recordGroup",
  recordTypes: "FILE,CONFLUENCE_PAGE",
  origins: "CONNECTOR",
  connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
  indexingStatus: "COMPLETED,FAILED",
  createdAt: "gte:1700000000000,lte:1710000000000",
  updatedAt: "gte:1700000000000,lte:1710000000000",
  size: "gte:0,lte:10485760",
  include: "availableFilters,counts",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KnowledgeHubNodesResponse
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
| <code>onlyContainers?</code> | <code>boolean</code> | When `true`, only nodes that have children are returned (useful for<br>building sidebar / tree navigation). Leaf nodes are excluded.<br>**Default**: false |
| <code>page?</code> | <code>number</code> | Page number (1-indexed, at most 50). Combined with `limit` to paginate results.<br>Prefer `cursor`: a page number is reached by reading the pages before it.<br>**Default**: 1 |
| <code>cursor?</code> | <code>string</code> | Opaque cursor from `pagination.nextCursor` or `pagination.prevCursor` of a previous<br>response. Send it with the same path, filters and sort as the request that returned<br>it; a cursor issued for another place, user or listing mode is refused with 400. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return per page.<br>**Default**: 50 |
| <code>sortBy?</code> | <code>[SortBy2](src/models/sort-by2.ts)</code> | Field to sort results by. Omitted → default `updatedAt`.<br>Unknown value → silently falls back to `name`.<br>**Default**: "updatedAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction. Omitted → default `desc`.<br>Unknown value → silently falls back to `asc`.<br>**Default**: "desc" |
| <code>q?</code> | <code>string</code> | Full-text search query. Must be between 2 and 500 characters<br>(inclusive). When provided, the endpoint searches across the entire<br>node tree regardless of the current browse level. |
| <code>nodeTypes?</code> | <code>string</code> | Comma-separated list of node types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `folder`, `app`, `recordGroup`, `record` |
| <code>recordTypes?</code> | <code>string</code> | Comma-separated list of record types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `FILE`, `DRIVE`, `WEBPAGE`, `DATABASE`, `DATASOURCE`,<br>`MESSAGE`, `MAIL`, `GROUP_MAIL`, `TICKET`, `COMMENT`,<br>`INLINE_COMMENT`, `CONFLUENCE_PAGE`, `CONFLUENCE_BLOGPOST`,<br>`SHAREPOINT_PAGE`, `SHAREPOINT_LIST`, `SHAREPOINT_LIST_ITEM`,<br>`SHAREPOINT_DOCUMENT_LIBRARY`, `LINK`, `PROJECT`, `PULL_REQUEST`,<br>`MEETING`, `PRODUCT`, `DEAL`, `CASE`, `TASK`, `ARTIFACT`,<br>`CODE_FILE`, `SQL_TABLE`, `SQL_VIEW`, `OTHERS` |
| <code>origins?</code> | <code>string</code> | Comma-separated list of origin types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `COLLECTION`, `CONNECTOR` |
| <code>connectorIds?</code> | <code>string</code> | Comma-separated list of connector instance IDs (UUIDs) to filter by.<br>Maximum 100 items. No enum validation — any string is accepted, but<br>non-existent IDs simply yield zero results. |
| <code>indexingStatus?</code> | <code>string</code> | Comma-separated list of indexing statuses to include. Invalid values<br>are silently ignored. Maximum 100 items.<br><br>Valid values: `NOT_STARTED`, `PAUSED`, `IN_PROGRESS`, `COMPLETED`,<br>`FAILED`, `FILE_TYPE_NOT_SUPPORTED`, `AUTO_INDEX_OFF`, `EMPTY`,<br>`ENABLE_MULTIMODAL_MODELS`, `QUEUED` |
| <code>createdAt?</code> | <code>string</code> | Created-date range filter. Format: `gte:<epochMs>,lte:<epochMs>`.<br>Both bounds are optional (you may send just `gte:...` or just<br>`lte:...`). Timestamps must be in the range 0 to 9999999999999 and<br>`gte` must be less than or equal to `lte` when both are present. |
| <code>updatedAt?</code> | <code>string</code> | Updated-date range filter. Same format and constraints as `createdAt`. |
| <code>size?</code> | <code>string</code> | File-size range filter in bytes. Format: `gte:<bytes>,lte:<bytes>`.<br>Both bounds are optional. Values must be non-negative and at most<br>1099511627776 (1 TB). `gte` must be less than or equal to `lte`<br>when both are present. |
| <code>flattened?</code> | <code>boolean</code> | Force flattened/recursive search (`true`) or direct top-level<br>listing (`false`). When omitted, it's computed from whether any<br>of `q`, `nodeTypes`, `recordTypes`, `origins`, `connectorIds`,<br>`indexingStatus`, `createdAt`, `updatedAt`, or `size` are present —<br>if any are, results are flattened automatically; otherwise only<br>top-level nodes are returned. |
| <code>include?</code> | <code>string</code> | Comma-separated list of additional response sections to include.<br>Invalid values are silently ignored. Maximum 100 items.<br><br>Valid values: `breadcrumbs`, `counts`, `availableFilters`, `permissions` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.getKnowledgeHubRootNodes(request)`

- **OnSuccess**: <code>[KnowledgeHubNodesResponse](src/models/knowledge-hub-nodes-response.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.GetKnowledgeHubRootNodesError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.getKnowledgeHubRootNodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KnowledgeHubNodesResponse, KnowledgeBaseApi.GetKnowledgeHubRootNodesError&gt;</code>, with `result.value` of type <code>[KnowledgeHubNodesResponse](src/models/knowledge-hub-nodes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecordById(request: KnowledgeBaseApi.GetRecordByIdRequest, options?: RequestOptions): ApiPromise&lt;GetRecordByIdResponseSchema, KnowledgeBaseApi.GetRecordByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information about a specific record.

**Overview:**

Returns complete record metadata including name, type, indexing status, storage information, and version history.

**File conversion:**

Use the optional `convertTo` parameter to request file format conversion (e.g., PDF to text). Supported conversions include PPT to PDF and PPTX to PDF.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.getRecordById({
    recordId: "some example string",
    convertTo: "txt",
  });
  // TODO: Handle 'response' of type GetRecordByIdResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.GetRecordByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.getRecordById({
  recordId: "some example string",
  convertTo: "txt",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetRecordByIdResponseSchema
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
| <code>recordId</code> | <code>string</code> | Record ID |
| <code>convertTo?</code> | <code>string</code> | Optional format to convert the file to (e.g., PDF to text). Supported conversions include PPT to PDF and PPTX to PDF. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.getRecordById(request)`

- **OnSuccess**: <code>[GetRecordByIdResponseSchema](src/models/get-record-by-id-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.GetRecordByIdError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.getRecordById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetRecordByIdResponseSchema, KnowledgeBaseApi.GetRecordByIdError&gt;</code>, with `result.value` of type <code>[GetRecordByIdResponseSchema](src/models/get-record-by-id-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUploadLimits(options?: RequestOptions): ApiPromise&lt;UploadLimitsResponseSchema, KnowledgeBaseApi.GetUploadLimitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve current upload constraints for the organization.

**Use case:** Call this before uploads to validate file sizes on the client
side and display appropriate limits to users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.getUploadLimits();
  // TODO: Handle 'response' of type UploadLimitsResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.GetUploadLimitsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.getUploadLimits().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadLimitsResponseSchema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.getUploadLimits()`

- **OnSuccess**: <code>[UploadLimitsResponseSchema](src/models/upload-limits-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.GetUploadLimitsError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.getUploadLimits().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadLimitsResponseSchema, KnowledgeBaseApi.GetUploadLimitsError&gt;</code>, with `result.value` of type <code>[UploadLimitsResponseSchema](src/models/upload-limits-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listKnowledgeBases(request: KnowledgeBaseApi.ListKnowledgeBasesRequest, options?: RequestOptions): ApiPromise&lt;GetAllKnowledgeBaseResponseSchema, KnowledgeBaseApi.ListKnowledgeBasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of all knowledge bases accessible to the authenticated user.

**Overview:**

Returns knowledge bases where the user has at least READER permission. Results include the user's role for each KB.

**Filtering:**

- **search:** Full-text search on KB names (max 1000 chars)
- **permissions:** Filter by user's role (comma-separated: OWNER, WRITER, READER)

**Sorting Options:**

- `name` — Alphabetical by KB name
- `createdAtTimestamp` — By creation date
- `updatedAtTimestamp` — By last modification
- `userRole` — By permission level

**Performance:**

Uses efficient pagination with limit/offset. For large result sets, use smaller page sizes.

**Query parameters:**

Only `page`, `limit`, `search`, `permissions`, `sortBy`, and `sortOrder` are allowed; unknown query keys are rejected.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.listKnowledgeBases({ permissions: "OWNER,WRITER" });
  // TODO: Handle 'response' of type GetAllKnowledgeBaseResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.ListKnowledgeBasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.listKnowledgeBases({
  permissions: "OWNER,WRITER",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetAllKnowledgeBaseResponseSchema
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
| <code>page?</code> | <code>number</code> | Page number (1-indexed). Omitted values default to 1.<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Results per page (max 100). Omitted values default to 20.<br>**Default**: 20 |
| <code>search?</code> | <code>string</code> | Search KB names (max 1000 chars). Rejected if it contains HTML/script tags,<br>event handlers, `javascript:`, or format specifiers (validated in Zod + controller). |
| <code>permissions?</code> | <code>string</code> | Comma-separated permission roles to filter by. Each token must be one of:<br>OWNER, WRITER, READER. |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | Field to sort by.<br>**Default**: "name" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction.<br>**Default**: "asc" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.listKnowledgeBases(request)`

- **OnSuccess**: <code>[GetAllKnowledgeBaseResponseSchema](src/models/get-all-knowledge-base-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.ListKnowledgeBasesError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.listKnowledgeBases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetAllKnowledgeBaseResponseSchema, KnowledgeBaseApi.ListKnowledgeBasesError&gt;</code>, with `result.value` of type <code>[GetAllKnowledgeBaseResponseSchema](src/models/get-all-knowledge-base-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTrash(request: KnowledgeBaseApi.ListTrashRequest, options?: RequestOptions): ApiPromise&lt;ListTrashResponseSchema, KnowledgeBaseApi.ListTrashError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One page of what was deleted from a collection and can still be restored,
newest first. Each item is what one delete removed, as a restore brings it back
whole: a folder deleted with its contents is one item, and so is a multi-select
delete (`rootCount` items selected, some named in `otherRootNames`). `itemCount`
says how many records it holds.
Restore an item with `POST /knowledgeBase/record/{recordId}/restore`, using its `id`.

Needs "Move Deleted Records to the Trash" on in Labs.

**Who sees what:** the list holds what the caller may restore. OWNER and
WRITER see every item; FILEORGANIZER sees single files only; other roles are
refused. The workspace and user always come from the sign-in.

**Removed for good:** the scheduled cleanup may remove an item from
`removableAfterTimestamp` on (at least 14 days after it was deleted by
default; it runs every 14 days, so an item stays 14 to 28 days). It is
absent when the retention settings can't be read.

An item whose folder is also in the trash (`parentInTrash`) can only be
restored after that folder.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.listTrash({ kbId: "some example string" });
  // TODO: Handle 'response' of type ListTrashResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.ListTrashError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.listTrash({ kbId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTrashResponseSchema
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
| <code>kbId</code> | <code>string</code> | Collection (knowledge base) ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.listTrash(request)`

- **OnSuccess**: <code>[ListTrashResponseSchema](src/models/list-trash-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.ListTrashError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.listTrash(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTrashResponseSchema, KnowledgeBaseApi.ListTrashError&gt;</code>, with `result.value` of type <code>[ListTrashResponseSchema](src/models/list-trash-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>moveRecord(request: KnowledgeBaseApi.MoveRecordRequest, options?: RequestOptions): ApiPromise&lt;KnowledgeBaseMoveRecordResponse, KnowledgeBaseApi.MoveRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a file or folder record to a different location within the same knowledge base.

Set `newParentId` to a folder ID to move the record into that folder, or `null` to move it to the knowledge base root.

**Required Permission:** OWNER or WRITER


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.moveRecord({
    kbId: "00000000-0000-0000-0000-000000000000",
    recordId: "some example string",
    body: { newParentId: "some example string" },
  });
  // TODO: Handle 'response' of type KnowledgeBaseMoveRecordResponse
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.MoveRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.moveRecord({
  kbId: "00000000-0000-0000-0000-000000000000",
  recordId: "some example string",
  body: { newParentId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KnowledgeBaseMoveRecordResponse
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
| <code>kbId</code> | <code>string</code> | Knowledge base UUID |
| <code>recordId</code> | <code>string</code> | Record identifier (file or folder) |
| <code>body</code> | <code>[KnowledgeBaseMoveRecordRequestBody](src/models/knowledge-base-move-record-request-body.ts)</code> | Target location for the record |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.moveRecord(request)`

- **OnSuccess**: <code>[KnowledgeBaseMoveRecordResponse](src/models/knowledge-base-move-record-response.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.MoveRecordError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.moveRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KnowledgeBaseMoveRecordResponse, KnowledgeBaseApi.MoveRecordError&gt;</code>, with `result.value` of type <code>[KnowledgeBaseMoveRecordResponse](src/models/knowledge-base-move-record-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reindexRecord(request: KnowledgeBaseApi.ReindexRecordRequest, options?: RequestOptions): ApiPromise&lt;ReIndexRecordResponseSchema, KnowledgeBaseApi.ReindexRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger reindexing for a specific record.

**Overview:**

Reprocesses the record's content to update search indexes and AI embeddings. Useful after content changes or to fix indexing failures.

**Depth parameter:**

Controls processing depth for complex documents (`-1` for full depth, `0`–`100` for limited).

**Status filters:**

Optional `statusFilters` array limits reindex to records in matching indexing states
(e.g. `FAILED`, `AUTO_INDEX_OFF`).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.reindexRecord({ recordId: "some example string" });
  // TODO: Handle 'response' of type ReIndexRecordResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.ReindexRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.reindexRecord({ recordId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReIndexRecordResponseSchema
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
| <code>recordId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ReindexRecordRequestBody](src/models/reindex-record-request-body.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.reindexRecord(request)`

- **OnSuccess**: <code>[ReIndexRecordResponseSchema](src/models/re-index-record-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.ReindexRecordError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.reindexRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReIndexRecordResponseSchema, KnowledgeBaseApi.ReindexRecordError&gt;</code>, with `result.value` of type <code>[ReIndexRecordResponseSchema](src/models/re-index-record-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reindexRecordGroup(request: KnowledgeBaseApi.ReindexRecordGroupRequest, options?: RequestOptions): ApiPromise&lt;ReIndexRecordGroupResponseSchema, KnowledgeBaseApi.ReindexRecordGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger reindexing for all records in a folder or knowledge base.

**Overview:**

Batch reindex operation for entire containers. The `recordGroupId` can be a folder ID or KB ID.

**Status filters:**

Optional `statusFilters` limit which child records are queued (e.g. failed-only or manual-indexing).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.reindexRecordGroup({ recordGroupId: "some example string" });
  // TODO: Handle 'response' of type ReIndexRecordGroupResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.ReindexRecordGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.reindexRecordGroup({
  recordGroupId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReIndexRecordGroupResponseSchema
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
| <code>recordGroupId</code> | <code>string</code> | Folder ID or KB ID |
| <code>body?</code> | <code>[ReindexRecordGroupRequestBody](src/models/reindex-record-group-request-body.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.reindexRecordGroup(request)`

- **OnSuccess**: <code>[ReIndexRecordGroupResponseSchema](src/models/re-index-record-group-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.ReindexRecordGroupError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.reindexRecordGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReIndexRecordGroupResponseSchema, KnowledgeBaseApi.ReindexRecordGroupError&gt;</code>, with `result.value` of type <code>[ReIndexRecordGroupResponseSchema](src/models/re-index-record-group-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreRecord(request: KnowledgeBaseApi.RestoreRecordRequest, options?: RequestOptions): ApiPromise&lt;RestoreRecordResponseSchema, KnowledgeBaseApi.RestoreRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bring a record back from the trash, together with everything deleted in the
same action: a folder comes back with its contents, a file with its
attachments, a multi-select delete with every item it removed.

Needs "Move Deleted Records to the Trash" on in Labs.

**Required permission:** the role the delete needed. A single file needs
OWNER, WRITER or FILEORGANIZER on its collection; a folder or several items
need OWNER or WRITER.

**Names:** an item whose name another item next to it now uses comes back
as "name (restored)" (a file keeps its extension: "report (restored).pdf").

**Search:** restored files are indexed again, so they return to search and
chat once indexing finishes. `reindexPending` lists any that could not be
queued; reindex those by hand. A file that is back but whose indexing never
started is queued again when it is restored again, and the indexing service
queues it on its own after about an hour.

A record that is not in the trash answers 200 with nothing restored.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.restoreRecord({ recordId: "some example string" });
  // TODO: Handle 'response' of type RestoreRecordResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.RestoreRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.restoreRecord({ recordId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RestoreRecordResponseSchema
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
| <code>recordId</code> | <code>string</code> | Record ID of any item in the delete batch |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.restoreRecord(request)`

- **OnSuccess**: <code>[RestoreRecordResponseSchema](src/models/restore-record-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.RestoreRecordError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.restoreRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RestoreRecordResponseSchema, KnowledgeBaseApi.RestoreRecordError&gt;</code>, with `result.value` of type <code>[RestoreRecordResponseSchema](src/models/restore-record-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreRecords(request: KnowledgeBaseApi.RestoreRecordsRequest, options?: RequestOptions): ApiPromise&lt;RestoreRecordsResponseSchema, KnowledgeBaseApi.RestoreRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore up to 100 records from the trash. Each id is restored as
`POST /knowledgeBase/record/{recordId}/restore` restores it, with everything
deleted along with it; ids from one delete are restored once. Every id gets its
own outcome in `results`, so one refusal does not hold the others back, and the
answer is 200 whatever the outcomes.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.restoreRecords({
    body: { recordIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type RestoreRecordsResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.RestoreRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.restoreRecords({
  body: { recordIds: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RestoreRecordsResponseSchema
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
| <code>body</code> | <code>[RestoreRecordsRequestBody](src/models/restore-records-request-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.restoreRecords(request)`

- **OnSuccess**: <code>[RestoreRecordsResponseSchema](src/models/restore-records-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.RestoreRecordsError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.restoreRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RestoreRecordsResponseSchema, KnowledgeBaseApi.RestoreRecordsError&gt;</code>, with `result.value` of type <code>[RestoreRecordsResponseSchema](src/models/restore-records-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>streamRecordBuffer(request: KnowledgeBaseApi.StreamRecordBufferRequest, options?: RequestOptions): ApiPromise&lt;undefined, KnowledgeBaseApi.StreamRecordBufferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream the binary content of a record's file.

**Overview:**

Returns the raw file content with appropriate `Content-Type` and `Content-Disposition` headers for download or inline viewing.

**Use cases:**

- File downloads
- Inline document preview
- Content extraction pipelines

**Format conversion:**

Use the `convertTo` parameter to convert between formats (e.g. DOCX to PDF).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.knowledgeBaseApi.streamRecordBuffer({ recordId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.StreamRecordBufferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.streamRecordBuffer({
  recordId: "some example string",
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
| <code>recordId</code> | <code>string</code> | Record ID |
| <code>convertTo?</code> | <code>string</code> | Target format for conversion |
| <code>version?</code> | <code>number</code> | Registry version to pin ARTIFACT record content to. Omit to stream<br>the latest version. Ignored for non-artifact records. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.streamRecordBuffer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[KnowledgeBaseApi.StreamRecordBufferError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.streamRecordBuffer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, KnowledgeBaseApi.StreamRecordBufferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFolder(request: KnowledgeBaseApi.UpdateFolderRequest, options?: RequestOptions): ApiPromise&lt;FolderUpdateResponseSchema, KnowledgeBaseApi.UpdateFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a folder.

**Required permission:** WRITER or higher


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.updateFolder({
    kbId: "some example string",
    folderId: "some example string",
    body: { folderName: "some example string" },
  });
  // TODO: Handle 'response' of type FolderUpdateResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.UpdateFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.updateFolder({
  kbId: "some example string",
  folderId: "some example string",
  body: { folderName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderUpdateResponseSchema
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
| <code>kbId</code> | <code>string</code> | - |
| <code>folderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[KnowledgeBaseFolderRequest1](src/models/knowledge-base-folder-request1.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.updateFolder(request)`

- **OnSuccess**: <code>[FolderUpdateResponseSchema](src/models/folder-update-response-schema.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.UpdateFolderError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.updateFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderUpdateResponseSchema, KnowledgeBaseApi.UpdateFolderError&gt;</code>, with `result.value` of type <code>[FolderUpdateResponseSchema](src/models/folder-update-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateKnowledgeBase(request: KnowledgeBaseApi.UpdateKnowledgeBaseRequest, options?: RequestOptions): ApiPromise&lt;UpdateKnowledgeBaseById, KnowledgeBaseApi.UpdateKnowledgeBaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a knowledge base's name.

**Required permission:**

User must have one of `OWNER` or `WRITER` on the knowledge base.

**Validation:**

- `kbId` path parameter must be a valid UUID (`updateKBSchema`)
- When provided, `kbName` must be 1–255 characters
- XSS and format-specifier checks are applied to `kbName` in the gateway controller


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.updateKnowledgeBase({
    kbId: "8a095180-2989-4018-b448-70eb75fba1c7",
    body: {},
  });
  // TODO: Handle 'response' of type UpdateKnowledgeBaseById
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.UpdateKnowledgeBaseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.updateKnowledgeBase({
  kbId: "8a095180-2989-4018-b448-70eb75fba1c7",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateKnowledgeBaseById
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
| <code>kbId</code> | <code>string</code> | Knowledge base ID (UUID) |
| <code>body</code> | <code>[KnowledgeBaseRequest1](src/models/knowledge-base-request1.ts)</code> | Fields to update. `kbName` is optional; an empty object is valid. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.updateKnowledgeBase(request)`

- **OnSuccess**: <code>[UpdateKnowledgeBaseById](src/models/update-knowledge-base-by-id.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.UpdateKnowledgeBaseError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.updateKnowledgeBase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateKnowledgeBaseById, KnowledgeBaseApi.UpdateKnowledgeBaseError&gt;</code>, with `result.value` of type <code>[UpdateKnowledgeBaseById](src/models/update-knowledge-base-by-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateRecord(request: KnowledgeBaseApi.UpdateRecordRequest, options?: RequestOptions): ApiPromise&lt;KnowledgeBaseRecordResponse, KnowledgeBaseApi.UpdateRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a record's name and/or file content.

**Overview:**

Allows updating the display name and optionally replacing the file content. Triggers re-indexing when content changes.

**Required permission:**

WRITER or higher

**Updating file content:**

Include a new file in the request to replace the existing content. The file extension must match the original.

**Side effects:**

- Updates `updatedAtTimestamp`
- Increments version if file content changed
- Triggers re-indexing for content changes

**OAuth scopes:** `kb:write`, plus `kb:read`: replacing the file first reads the record and its knowledge base with the caller's token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeBaseApi.updateRecord({ recordId: "some example string" });
  // TODO: Handle 'response' of type KnowledgeBaseRecordResponse
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.UpdateRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.updateRecord({ recordId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KnowledgeBaseRecordResponse
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
| <code>recordId</code> | <code>string</code> | Record ID |
| <code>recordName?</code> | <code>string</code> | New name for the record |
| <code>file?</code> | <code>FileInput</code> | Replacement file content |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.updateRecord(request)`

- **OnSuccess**: <code>[KnowledgeBaseRecordResponse](src/models/knowledge-base-record-response.ts)</code>
- **OnError**: throws <code>[KnowledgeBaseApi.UpdateRecordError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.updateRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KnowledgeBaseRecordResponse, KnowledgeBaseApi.UpdateRecordError&gt;</code>, with `result.value` of type <code>[KnowledgeBaseRecordResponse](src/models/knowledge-base-record-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadRecords(request: KnowledgeBaseApi.UploadRecordsRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;UploadStreamSseEvent&gt;, KnowledgeBaseApi.UploadRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload one or more files to a knowledge base root or to a specific folder.

**Overview**

Batch upload multiple files in a single request. Each file becomes a new record with automatic content indexing.
Omit the `folderId` query parameter to upload to the KB root; include it to upload into that folder.

**Upload Limits**

- **Max files per request:** 1000
- **Default max file size:** 30MB (configurable via platform settings)
- Use `GET /knowledgeBase/limits` to check current limits

**Supported File Types**

Documents (PDF, DOCX, DOC, XLS, XLSX, PPT, PPTX, TXT, CSV, MD), Images (PNG, JPG, JPEG, SVG, WebP), Web (HTML, HTM), and Google Workspace formats.

**File Metadata**

Use `files_metadata` to provide additional info like file paths and last modified timestamps.

**Versioning**

Set `isVersioned: true` to enable version tracking for uploaded files.

**Streaming response**

This endpoint responds with `Content-Type: text/event-stream`.
The upload and its per-file progress are a single request: the body streams
a `file:succeeded` or `file:failed` event per file
(including files rejected up front for size/type), followed by a final
`done` summary, then closes. See the
`UploadStreamSSEEvent` schema for the event/payload contract.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.knowledgeBaseApi.uploadRecords({
    kbId: "some example string",
    files: new Uint8Array(),
    filesMetadata: '[{"file_path":"/docs/report.pdf","last_modified":"2024-01-15T10:30:00Z"}]',
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type UploadStreamSseEvent, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeBaseApi.UploadRecordsError, discriminated with 'err.payload.kind'
  // The loop's failures are PipesHubApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeBaseApi.uploadRecords({
  kbId: "some example string",
  files: new Uint8Array(),
  filesMetadata: '[{"file_path":"/docs/report.pdf","last_modified":"2024-01-15T10:30:00Z"}]',
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<UploadStreamSseEvent>
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
| <code>kbId</code> | <code>string</code> | Knowledge base ID |
| <code>folderId?</code> | <code>string</code> | Target folder ID. Omit to upload to the KB root. |
| <code>files</code> | <code>FileInput</code> | File to upload (call once per file) |
| <code>filesMetadata?</code> | <code>string</code> | JSON array with file_path and last_modified for each file |
| <code>isVersioned?</code> | <code>boolean</code> | Enable version tracking<br>**Default**: true |
| <code>recordType?</code> | <code>string</code> | Type of records to create<br>**Default**: "FILE" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeBaseApi.uploadRecords(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[UploadStreamSseEvent](src/models/upload-stream-sse-event.ts)&gt;</code>
- **OnError**: throws <code>[KnowledgeBaseApi.UploadRecordsError](src/resources/knowledge-base-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeBaseApi.uploadRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;UploadStreamSseEvent&gt;, KnowledgeBaseApi.UploadRecordsError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[UploadStreamSseEvent](src/models/upload-stream-sse-event.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## KnowledgeHub

> Source: [KnowledgeHub](src/resources/knowledge-hub.ts)

<details>
<summary><code>getKnowledgeHubChildNodes(request: KnowledgeHub.GetKnowledgeHubChildNodesRequest, options?: RequestOptions): ApiPromise&lt;KnowledgeHubNodesResponse, KnowledgeHub.GetKnowledgeHubChildNodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the children of a specific node in the knowledge hub tree.
Use this endpoint to drill down into Collections, connector app
hierarchies, folders, and record groups.

**Navigation hierarchy**

The typical drill-down path is:
1. Root apps (`GET /knowledgeBase/knowledge-hub/nodes`)
2. Record groups / folders within an app (`parentType=app`)
3. Records within a record group (`parentType=recordGroup`)
4. Sub-records or attachments within a record (`parentType=record`)

**Parent identification**

- `parentType` must be one of: `app`, `recordGroup`, `folder`, `record`
- `parentId` must be a standard UUID

**Filtering and searching**

All query-param filters from the root endpoint are available here and
operate within the scope of the parent node's subtree. When `q` is
provided, the search spans all descendants of the parent node.

**Response extras**

When `include=breadcrumbs` is set, the response contains a
`breadcrumbs` array tracing the path from the root to the current
node. The `currentNode` and `parentNode` objects are always populated
for non-root requests.

**Access control**

Requires a valid bearer token. For OAuth tokens the `kb:read` scope
must be present; regular JWT bearer tokens pass through without scope
enforcement.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeHub.getKnowledgeHubChildNodes({
    parentType: ParentType.App,
    parentId: "some example string",
    q: "quarterly report",
    nodeTypes: "recordGroup",
    recordTypes: "FILE,CONFLUENCE_PAGE",
    origins: "CONNECTOR",
    connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
    indexingStatus: "COMPLETED,FAILED",
    createdAt: "gte:1700000000000,lte:1710000000000",
    updatedAt: "gte:1700000000000,lte:1710000000000",
    size: "gte:0,lte:10485760",
    include: "breadcrumbs,availableFilters",
  });
  // TODO: Handle 'response' of type KnowledgeHubNodesResponse
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeHub.GetKnowledgeHubChildNodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeHub.getKnowledgeHubChildNodes({
  parentType: ParentType.App,
  parentId: "some example string",
  q: "quarterly report",
  nodeTypes: "recordGroup",
  recordTypes: "FILE,CONFLUENCE_PAGE",
  origins: "CONNECTOR",
  connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
  indexingStatus: "COMPLETED,FAILED",
  createdAt: "gte:1700000000000,lte:1710000000000",
  updatedAt: "gte:1700000000000,lte:1710000000000",
  size: "gte:0,lte:10485760",
  include: "breadcrumbs,availableFilters",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KnowledgeHubNodesResponse
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
| <code>parentType</code> | <code>[ParentType](src/models/parent-type.ts)</code> | Type of the parent node whose children to retrieve.<br><br>Must be one of: `app`, `recordGroup`, `folder`, `record`.<br>Any other value returns a 400 error. |
| <code>parentId</code> | <code>string</code> | Identifier of the parent node. Must be a valid UUID<br>(e.g. `f3a4b5b6-5b6c-4e85-9097-3202cfe696fc`).<br><br>Any value that does not match this format returns a 400 error. |
| <code>onlyContainers?</code> | <code>boolean</code> | When `true`, only nodes that have children are returned (useful for<br>building sidebar / tree navigation). Leaf nodes are excluded.<br>**Default**: false |
| <code>page?</code> | <code>number</code> | Page number (1-indexed, at most 50). Combined with `limit` to paginate results.<br>Prefer `cursor`: a page number is reached by reading the pages before it.<br>**Default**: 1 |
| <code>cursor?</code> | <code>string</code> | Opaque cursor from `pagination.nextCursor` or `pagination.prevCursor` of a previous<br>response. Send it with the same path, filters and sort as the request that returned<br>it; a cursor issued for another place, user or listing mode is refused with 400. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return per page.<br>**Default**: 50 |
| <code>sortBy?</code> | <code>[SortBy2](src/models/sort-by2.ts)</code> | Field to sort results by. Omitted → default `updatedAt`.<br>Unknown value → silently falls back to `name`.<br>**Default**: "updatedAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction. Omitted → default `desc`.<br>Unknown value → silently falls back to `asc`.<br>**Default**: "desc" |
| <code>q?</code> | <code>string</code> | Full-text search query. Must be between 2 and 500 characters<br>(inclusive). When provided, the endpoint searches across all<br>descendants of the parent node. |
| <code>nodeTypes?</code> | <code>string</code> | Comma-separated list of node types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `folder`, `app`, `recordGroup`, `record` |
| <code>recordTypes?</code> | <code>string</code> | Comma-separated list of record types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `FILE`, `DRIVE`, `WEBPAGE`, `DATABASE`, `DATASOURCE`,<br>`MESSAGE`, `MAIL`, `GROUP_MAIL`, `TICKET`, `COMMENT`,<br>`INLINE_COMMENT`, `CONFLUENCE_PAGE`, `CONFLUENCE_BLOGPOST`,<br>`SHAREPOINT_PAGE`, `SHAREPOINT_LIST`, `SHAREPOINT_LIST_ITEM`,<br>`SHAREPOINT_DOCUMENT_LIBRARY`, `LINK`, `PROJECT`, `PULL_REQUEST`,<br>`MEETING`, `PRODUCT`, `DEAL`, `CASE`, `TASK`, `ARTIFACT`,<br>`CODE_FILE`, `SQL_TABLE`, `SQL_VIEW`, `OTHERS` |
| <code>origins?</code> | <code>string</code> | Comma-separated list of origin types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `COLLECTION`, `CONNECTOR` |
| <code>connectorIds?</code> | <code>string</code> | Comma-separated list of connector instance IDs (UUIDs) to filter by.<br>Maximum 100 items. No enum validation — any string is accepted, but<br>non-existent IDs simply yield zero results. |
| <code>indexingStatus?</code> | <code>string</code> | Comma-separated list of indexing statuses to include. Invalid values<br>are silently ignored. Maximum 100 items.<br><br>Valid values: `NOT_STARTED`, `PAUSED`, `IN_PROGRESS`, `COMPLETED`,<br>`FAILED`, `FILE_TYPE_NOT_SUPPORTED`, `AUTO_INDEX_OFF`, `EMPTY`,<br>`ENABLE_MULTIMODAL_MODELS`, `QUEUED` |
| <code>createdAt?</code> | <code>string</code> | Created-date range filter. Format: `gte:<epochMs>,lte:<epochMs>`.<br>Both bounds are optional (you may send just `gte:...` or just<br>`lte:...`). Timestamps must be in the range 0 to 9999999999999 and<br>`gte` must be less than or equal to `lte` when both are present. |
| <code>updatedAt?</code> | <code>string</code> | Updated-date range filter. Same format and constraints as `createdAt`. |
| <code>size?</code> | <code>string</code> | File-size range filter in bytes. Format: `gte:<bytes>,lte:<bytes>`.<br>Both bounds are optional. Values must be non-negative and at most<br>1099511627776 (1 TB). `gte` must be less than or equal to `lte`<br>when both are present. |
| <code>flattened?</code> | <code>boolean</code> | Force flattened/recursive search (`true`) or direct top-level<br>listing (`false`). When omitted, it's computed from whether any<br>of `q`, `nodeTypes`, `recordTypes`, `origins`, `connectorIds`,<br>`indexingStatus`, `createdAt`, `updatedAt`, or `size` are present —<br>if any are, results are flattened automatically; otherwise only<br>top-level nodes are returned. |
| <code>include?</code> | <code>string</code> | Comma-separated list of additional response sections to include.<br>Invalid values are silently ignored. Maximum 100 items.<br><br>Valid values: `breadcrumbs`, `counts`, `availableFilters`, `permissions` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeHub.getKnowledgeHubChildNodes(request)`

- **OnSuccess**: <code>[KnowledgeHubNodesResponse](src/models/knowledge-hub-nodes-response.ts)</code>
- **OnError**: throws <code>[KnowledgeHub.GetKnowledgeHubChildNodesError](src/resources/knowledge-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeHub.getKnowledgeHubChildNodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KnowledgeHubNodesResponse, KnowledgeHub.GetKnowledgeHubChildNodesError&gt;</code>, with `result.value` of type <code>[KnowledgeHubNodesResponse](src/models/knowledge-hub-nodes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getKnowledgeHubRootNodes(request: KnowledgeHub.GetKnowledgeHubRootNodesRequest, options?: RequestOptions): ApiPromise&lt;KnowledgeHubNodesResponse, KnowledgeHub.GetKnowledgeHubRootNodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns root-level nodes (connector apps and Collection apps) or, when
filters or search are applied, a flat list of matching nodes across the
entire knowledge hub tree.

**Overview**

The Knowledge Hub provides a unified view across all knowledge sources:
- **Collection** — locally uploaded knowledge bases (`origin: COLLECTION`)
- **Connector app** — external connector instances such as Google Drive,
  Slack, Confluence, Jira (`origin: CONNECTOR`)

Use this endpoint to build file-browser UIs and sidebar navigation trees.

**Browsing vs. searching**

When no filters or search query are provided, only top-level app nodes
are returned. Adding `nodeTypes`, `q`, or other filter params triggers a
search across the full tree, returning matching nodes regardless of depth.

For children of a specific node, use
`GET /knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}`.

**Pagination and sorting**

Results are always paginated. Default sort is `updatedAt` descending.
The `pagination` object in the response contains `hasNext` / `hasPrev`
flags suitable for infinite-scroll or page-based navigation.

**Expanding the response**

Use the `include` parameter to request additional sections:
- `availableFilters` — adds `filters.available` with all filter options
- `counts` — adds a `counts` summary broken down by node type
- `breadcrumbs` — adds the breadcrumb trail (empty at root level)
- `permissions` — adds the caller's permission flags

**Access control**

Requires a valid bearer token. For OAuth tokens the `kb:read` scope
must be present; regular JWT bearer tokens pass through without scope
enforcement.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeHub.getKnowledgeHubRootNodes({
    q: "quarterly report",
    nodeTypes: "app,recordGroup",
    recordTypes: "FILE,CONFLUENCE_PAGE",
    origins: "CONNECTOR",
    connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
    indexingStatus: "COMPLETED,FAILED",
    createdAt: "gte:1700000000000,lte:1710000000000",
    updatedAt: "gte:1700000000000,lte:1710000000000",
    size: "gte:0,lte:10485760",
    include: "availableFilters,counts",
  });
  // TODO: Handle 'response' of type KnowledgeHubNodesResponse
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeHub.GetKnowledgeHubRootNodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeHub.getKnowledgeHubRootNodes({
  q: "quarterly report",
  nodeTypes: "app,recordGroup",
  recordTypes: "FILE,CONFLUENCE_PAGE",
  origins: "CONNECTOR",
  connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
  indexingStatus: "COMPLETED,FAILED",
  createdAt: "gte:1700000000000,lte:1710000000000",
  updatedAt: "gte:1700000000000,lte:1710000000000",
  size: "gte:0,lte:10485760",
  include: "availableFilters,counts",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KnowledgeHubNodesResponse
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
| <code>onlyContainers?</code> | <code>boolean</code> | When `true`, only nodes that have children are returned (useful for<br>building sidebar / tree navigation). Leaf nodes are excluded.<br>**Default**: false |
| <code>page?</code> | <code>number</code> | Page number (1-indexed, at most 50). Combined with `limit` to paginate results.<br>Prefer `cursor`: a page number is reached by reading the pages before it.<br>**Default**: 1 |
| <code>cursor?</code> | <code>string</code> | Opaque cursor from `pagination.nextCursor` or `pagination.prevCursor` of a previous<br>response. Send it with the same path, filters and sort as the request that returned<br>it; a cursor issued for another place, user or listing mode is refused with 400. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return per page.<br>**Default**: 50 |
| <code>sortBy?</code> | <code>[SortBy2](src/models/sort-by2.ts)</code> | Field to sort results by. Omitted → default `updatedAt`.<br>Unknown value → silently falls back to `name`.<br>**Default**: "updatedAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction. Omitted → default `desc`.<br>Unknown value → silently falls back to `asc`.<br>**Default**: "desc" |
| <code>q?</code> | <code>string</code> | Full-text search query. Must be between 2 and 500 characters<br>(inclusive). When provided, the endpoint searches across the entire<br>node tree regardless of the current browse level. |
| <code>nodeTypes?</code> | <code>string</code> | Comma-separated list of node types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `folder`, `app`, `recordGroup`, `record` |
| <code>recordTypes?</code> | <code>string</code> | Comma-separated list of record types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `FILE`, `DRIVE`, `WEBPAGE`, `DATABASE`, `DATASOURCE`,<br>`MESSAGE`, `MAIL`, `GROUP_MAIL`, `TICKET`, `COMMENT`,<br>`INLINE_COMMENT`, `CONFLUENCE_PAGE`, `CONFLUENCE_BLOGPOST`,<br>`SHAREPOINT_PAGE`, `SHAREPOINT_LIST`, `SHAREPOINT_LIST_ITEM`,<br>`SHAREPOINT_DOCUMENT_LIBRARY`, `LINK`, `PROJECT`, `PULL_REQUEST`,<br>`MEETING`, `PRODUCT`, `DEAL`, `CASE`, `TASK`, `ARTIFACT`,<br>`CODE_FILE`, `SQL_TABLE`, `SQL_VIEW`, `OTHERS` |
| <code>origins?</code> | <code>string</code> | Comma-separated list of origin types to include. Invalid values are<br>silently ignored. Maximum 100 items.<br><br>Valid values: `COLLECTION`, `CONNECTOR` |
| <code>connectorIds?</code> | <code>string</code> | Comma-separated list of connector instance IDs (UUIDs) to filter by.<br>Maximum 100 items. No enum validation — any string is accepted, but<br>non-existent IDs simply yield zero results. |
| <code>indexingStatus?</code> | <code>string</code> | Comma-separated list of indexing statuses to include. Invalid values<br>are silently ignored. Maximum 100 items.<br><br>Valid values: `NOT_STARTED`, `PAUSED`, `IN_PROGRESS`, `COMPLETED`,<br>`FAILED`, `FILE_TYPE_NOT_SUPPORTED`, `AUTO_INDEX_OFF`, `EMPTY`,<br>`ENABLE_MULTIMODAL_MODELS`, `QUEUED` |
| <code>createdAt?</code> | <code>string</code> | Created-date range filter. Format: `gte:<epochMs>,lte:<epochMs>`.<br>Both bounds are optional (you may send just `gte:...` or just<br>`lte:...`). Timestamps must be in the range 0 to 9999999999999 and<br>`gte` must be less than or equal to `lte` when both are present. |
| <code>updatedAt?</code> | <code>string</code> | Updated-date range filter. Same format and constraints as `createdAt`. |
| <code>size?</code> | <code>string</code> | File-size range filter in bytes. Format: `gte:<bytes>,lte:<bytes>`.<br>Both bounds are optional. Values must be non-negative and at most<br>1099511627776 (1 TB). `gte` must be less than or equal to `lte`<br>when both are present. |
| <code>flattened?</code> | <code>boolean</code> | Force flattened/recursive search (`true`) or direct top-level<br>listing (`false`). When omitted, it's computed from whether any<br>of `q`, `nodeTypes`, `recordTypes`, `origins`, `connectorIds`,<br>`indexingStatus`, `createdAt`, `updatedAt`, or `size` are present —<br>if any are, results are flattened automatically; otherwise only<br>top-level nodes are returned. |
| <code>include?</code> | <code>string</code> | Comma-separated list of additional response sections to include.<br>Invalid values are silently ignored. Maximum 100 items.<br><br>Valid values: `breadcrumbs`, `counts`, `availableFilters`, `permissions` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeHub.getKnowledgeHubRootNodes(request)`

- **OnSuccess**: <code>[KnowledgeHubNodesResponse](src/models/knowledge-hub-nodes-response.ts)</code>
- **OnError**: throws <code>[KnowledgeHub.GetKnowledgeHubRootNodesError](src/resources/knowledge-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeHub.getKnowledgeHubRootNodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KnowledgeHubNodesResponse, KnowledgeHub.GetKnowledgeHubRootNodesError&gt;</code>, with `result.value` of type <code>[KnowledgeHubNodesResponse](src/models/knowledge-hub-nodes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Connector

> Source: [Connector](src/resources/connector.ts)

<details>
<summary><code>getRecordContent(request: Connector.GetRecordContentRequest, options?: RequestOptions): ApiPromise&lt;GetRecordContentResponseSchema, Connector.GetRecordContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the full parsed content and metadata of a single record —
the same content PipesHub's own RAG/chat pipeline uses to answer
questions, returned directly instead of via chat.

**When to use this vs. the other record endpoints:**
- `GET /knowledgeBase/record/{recordId}` returns metadata only
  (name, type, indexing status, size) — no content.
- `GET /knowledgeBase/stream/record/{recordId}` returns the original,
  unparsed file bytes — use it to download/open the source file.
- **This endpoint** returns the record's full parsed content as a
  single plain-text `content` string (a metadata header, then the
  block/table text in reading order, then any foreign-key related
  tables) — use it when you need the record's actual textual/tabular
  content without downloading and re-parsing the original file yourself.

**Typical flow:** obtain a `recordId` from a `pipeshub_search` hit or
a chat citation's `recordId`, then call this endpoint to read the
full content when the search snippet or citation excerpt isn't
enough to answer the question.

**Reading part of a long record, or a whole Slack thread:**

With no query parameters the whole record is returned, which for a
pull request with its diffs or a long document can run to hundreds of
thousands of characters. Pass any of `maxChars`, `startBlock`, `query`
or `mode` for a budgeted read instead: the response stays within
`maxChars` and says how to continue (`nextStartBlock`, or
`nextStartRecord` for a thread). `query` makes a record too large for
the budget show its most relevant blocks first, with the skipped
ranges marked. `mode=thread` returns every message of the Slack
thread the record belongs to, oldest first, as far as the caller may
see them. A Slack record in no single thread (several channel
messages in one record, or a message without replies) returns itself,
then the replies of each thread its messages started; the first page
opens with a bracketed note saying which.

**Permission scoping:**

The requesting user/token must have access to the record; access is
verified via the knowledge graph before content is returned — a
caller with a valid scope but no access to this specific record gets
a `403`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connector.getRecordContent({ recordId: "some example string" });
  // TODO: Handle 'response' of type GetRecordContentResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type Connector.GetRecordContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connector.getRecordContent({ recordId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetRecordContentResponseSchema
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
| <code>recordId</code> | <code>string</code> | Record ID to fetch. Obtain it from a `pipeshub_search` result (`hits[*].recordId`) or a chat citation (`citations[*].recordId`). |
| <code>maxChars?</code> | <code>number</code> | Most characters of `content` to return. Asks for a budgeted read; 40000 when another budgeted-read parameter is given without it. |
| <code>startBlock?</code> | <code>number</code> | Read in order from this block: the `nextStartBlock` of a previous read, or 0 for the top. Takes precedence over `query`. In thread mode it applies to the record at `startRecord`; later records are read from their start. |
| <code>query?</code> | <code>string</code> | What you are looking for in the record. When the record does not fit in `maxChars`, the blocks most relevant to it are shown first and the skipped ranges are marked. |
| <code>mode?</code> | <code>[Mode1](src/models/mode1.ts)</code> | `record` (default) reads this record. `thread` reads every record of the Slack thread this message belongs to, oldest first. A Slack record in no single thread reads as itself, then the threads its messages started (at most 10). A record that is not from Slack answers `422`. |
| <code>startRecord?</code> | <code>number</code> | Thread mode: start at this record of the thread, the `nextStartRecord` of a previous read. Pass the read's `nextStartBlock` with it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connector.getRecordContent(request)`

- **OnSuccess**: <code>[GetRecordContentResponseSchema](src/models/get-record-content-response-schema.ts)</code>
- **OnError**: throws <code>[Connector.GetRecordContentError](src/resources/connector.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connector.getRecordContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetRecordContentResponseSchema, Connector.GetRecordContentError&gt;</code>, with `result.value` of type <code>[GetRecordContentResponseSchema](src/models/get-record-content-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lookupRecordByIdentifier(request: Connector.LookupRecordByIdentifierRequest, options?: RequestOptions): ApiPromise&lt;LookupRecordResponseSchema, Connector.LookupRecordByIdentifierError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Turn an external reference into the matching PipesHub record. Accepts a
pasted link, a Jira-style issue key, or a bare external system ID from
any connected source. Repeat `identifiers` to batch-resolve up to ten
in one call.

The response carries a rendered `text` view — each match's metadata
block followed by a `Next:` line naming a follow-up call. The structured
fields carry the same information for programmatic use.

**Accepted identifiers**
- Jira issue URL — `https://acme.atlassian.net/browse/PA-1787`
- Jira issue key — `PA-1787`
- Confluence page URL —
  `https://acme.atlassian.net/wiki/spaces/SD/pages/450625553/Agent+Loop`
- Google Drive / Docs URL — `https://docs.google.com/document/d/1AbC.../edit`
- Slack message link — `https://acme.slack.com/archives/C0123/p1720000000000100`
- Bare external system ID — `450625553`

**When to use this vs. the other record endpoints:**
- **This endpoint** converts an *external* reference into an internal
  Record ID. Reach for it whenever you meet a link or ticket key and
  need the record behind it.
- `GET /connectors/record/{recordId}/content` reads a record you have
  already identified. It needs an internal Record ID, which is exactly
  what this endpoint returns.
- `GET /connectors/navigate` browses the hierarchy when you have a
  position in the tree rather than a specific identifier.

**Typical flow:** call this with the reference, take a match's `id`
from the response, then call
`GET /connectors/record/{recordId}/content` to read the record.

**Multiple matches:** one identifier can legitimately match more than
one record — the same external ID may exist in several connected
instances. In that case the response sets `ambiguous: true` and
`matches` holds every candidate. Present the choice rather than taking
the first; `connectorName` narrows a retry.

**Misses are not errors.**

Only records the caller can see are returned, and a miss is a `200`
with an empty `matches` array and the input echoed in
`not_found_identifiers` — not a `404`. The identifier resolved to
nothing *or* to something the caller may not access; the two are
deliberately indistinguishable, because an identifier is
caller-supplied and guessable, and confirming existence would leak
records across organizations. `searched_connectors` names what was
covered, so a retry with `connectorName` is often the right next move.

**Scope:** resolution searches every connector the caller can access,
regardless of any source filter used elsewhere.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connector.lookupRecordByIdentifier({
    identifiers: ["some example string"],
    connectorName: ConnectorNameEnum.Drive,
  });
  // TODO: Handle 'response' of type LookupRecordResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type Connector.LookupRecordByIdentifierError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connector.lookupRecordByIdentifier({
  identifiers: ["some example string"],
  connectorName: ConnectorNameEnum.Drive,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LookupRecordResponseSchema
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
| <code>identifiers</code> | <code>string[]</code> | The reference(s) to resolve: a URL, an issue key such as `PA-1787`, or a bare external system ID. Repeat the parameter to batch: `?identifiers=PA-1787&identifiers=PA-1788`. Maximum 10. |
| <code>connectorName?</code> | <code>[ConnectorNameEnum](src/models/connector-name-enum.ts)</code> | Optional hint that prioritises resolution order, e.g. `JIRA`, `CONFLUENCE`, `DRIVE`, `SLACK`. Allowed values are the `ConnectorNameEnum` values. It cannot widen the search beyond the connectors the caller can already access. Useful on a retry when a lookup came back empty. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connector.lookupRecordByIdentifier(request)`

- **OnSuccess**: <code>[LookupRecordResponseSchema](src/models/lookup-record-response-schema.ts)</code>
- **OnError**: throws <code>[Connector.LookupRecordByIdentifierError](src/resources/connector.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connector.lookupRecordByIdentifier(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LookupRecordResponseSchema, Connector.LookupRecordByIdentifierError&gt;</code>, with `result.value` of type <code>[LookupRecordResponseSchema](src/models/lookup-record-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>navigateKnowledgeGraph(request: Connector.NavigateKnowledgeGraphRequest, options?: RequestOptions): ApiPromise&lt;NavigateKnowledgeGraphResponseSchema, Connector.NavigateKnowledgeGraphError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Open a node in the knowledge graph and see what is inside it — a file
explorer across every connected source.

Call it with no `nodeId` for a flat listing of every record group and
record the caller can reach, newest first. This is a starting point to
pick a node from, not a roster of connected apps — app nodes are never
returned in a listing, though an app's `id` is accepted as a `nodeId`
and lists that app's record groups. Pass a node's `id` to descend:
record groups contain records and folders, and a record contains its
own children — comments, attachments, sub-tasks — plus a `related`
section of cross-referenced records, such as the Confluence page linked
from a Jira ticket. `nodeId` is tolerant: a URL or an issue key such as
`PA-1787` is resolved to its record before navigating, so a link can be
pasted straight in without a separate lookup call.

The response carries a rendered `text` view — breadcrumbs, the current
node, the children listing, `Related:`, and a closing `Next:` line
naming a follow-up call. The structured fields carry the same
information for programmatic use.

**When to use this vs. the other record endpoints:**
- **This endpoint** is for structural exploration — "what is in this
  project", "what is attached to this ticket", "what else links to this
  page". It returns names, types and IDs; it never returns document
  text.
- `GET /connectors/record/{recordId}/content` returns one record's
  actual parsed text. Use it once navigation has identified the record
  you want to read.
- `GET /connectors/record/lookup` is the way in when you hold a URL or
  an issue key rather than a position in the tree.

**Typical flow:** call with no `nodeId` to see what is reachable → pass
a record group's `id` to list its records → take a row whose
`is_record` is true and call
`GET /connectors/record/{recordId}/content` to read it.

**Paging and depth:** results are paginated; `pagination.has_next`
tells you whether to request the next `page`. `depth` above 1 returns
all descendants down to that level as one flat list, each row carrying
its own `level`, instead of only direct children.

**Scope:** everything the caller can read, across both connectors and
Knowledge Base collections. No connector-level filter is applied — the
listing is bounded by per-node permissions alone.

**Permission scoping:**

`rows` and `related` carry only nodes the caller can see, and the
opened node itself is access-checked before any of its details are
returned. A node that does not exist and a node the caller cannot
access are deliberately indistinguishable — both return an empty view
rather than an error.

`breadcrumbs` is the exception: the ancestor trail is resolved by id
alone, without a permission check. For a record shared directly with
the caller, it can therefore name ancestors the caller cannot open.
Treat breadcrumb entries as labels, not as nodes guaranteed to be
navigable.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connector.navigateKnowledgeGraph();
  // TODO: Handle 'response' of type NavigateKnowledgeGraphResponseSchema
} catch (err) {
  // TODO: Handle 'err' of type Connector.NavigateKnowledgeGraphError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connector.navigateKnowledgeGraph().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NavigateKnowledgeGraphResponseSchema
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
| <code>nodeId?</code> | <code>string</code> | The node to open. Take it from an `id` in a previous navigate or lookup response. Omit it entirely for the flat listing of everything reachable — the usual starting point. A URL or an issue key such as `PA-1787` also works: it is resolved to its record automatically. |
| <code>page?</code> | <code>number</code> | Page number, 1-indexed.<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Children per page. The minimum is 50 — smaller values are rejected rather than silently raised.<br>**Default**: 50 |
| <code>depth?</code> | <code>number</code> | Levels of descendants to return in one call. Above 1, `rows` is a flat list of all descendants down to that level rather than only direct children, and each row carries its own `level`.<br>**Default**: 1 |
| <code>nodeTypes?</code> | <code>string[]</code> | Restrict children to these node types. Repeat the parameter for multiple types: `?nodeTypes=record&nodeTypes=folder`. |
| <code>createdAfter?</code> | <code>string</code> | Filter children by source creation time. ISO 8601 `YYYY-MM-DD`, or a full datetime that MUST carry a timezone offset — a naive datetime is rejected rather than assumed to be UTC. |
| <code>createdBefore?</code> | <code>string</code> | Filter children by source creation time. `YYYY-MM-DD` is inclusive of the whole day. |
| <code>modifiedAfter?</code> | <code>string</code> | Filter children by source modification time. |
| <code>modifiedBefore?</code> | <code>string</code> | Filter children by source modification time. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connector.navigateKnowledgeGraph(request)`

- **OnSuccess**: <code>[NavigateKnowledgeGraphResponseSchema](src/models/navigate-knowledge-graph-response-schema.ts)</code>
- **OnError**: throws <code>[Connector.NavigateKnowledgeGraphError](src/resources/connector.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connector.navigateKnowledgeGraph(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NavigateKnowledgeGraphResponseSchema, Connector.NavigateKnowledgeGraphError&gt;</code>, with `result.value` of type <code>[NavigateKnowledgeGraphResponseSchema](src/models/navigate-knowledge-graph-response-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Conversations

> Source: [Conversations](src/resources/conversations.ts)

<details>
<summary><code>addMessage(request: Conversations.AddMessageRequestParams, options?: RequestOptions): ApiPromise&lt;AddMessageResponse, Conversations.AddMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ask a follow-up in an existing assistant conversation and wait for
the complete answer. The JSON counterpart of
`POST /conversations/{conversationId}/messages/stream`. Earlier turns
are sent to the model as history; project context comes from the
conversation, never from the request.

**How a turn runs**

1. The user's message is saved (in its own short transaction on a
   replica set).
2. The AI backend runs the same agent-loop pipeline as the `/stream`
   route and returns only its final result. No transaction is held
   during this call, and the call is never retried.
3. The answer, citations and status are saved exactly as the
   streaming route saves them, and the updated conversation is
   returned.

Every failure after step 1 is persisted: the conversation ends with
status `Failed`, a `failReason`, and an `error` message, and the
response carries `X-Conversation-Id` so the caller can fetch it.
A 4xx from the AI backend (for example no model configured) keeps
its status and user-facing message; other failures return 500 with
a generic message.

The response arrives only when the whole answer is ready, which can
take minutes for agent runs. Allow a generous client and proxy
timeout, or use the `/stream` variant for interactive clients.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.addMessage({
    conversationId: "some example string",
    body: { query: "some example string" },
  });
  // TODO: Handle 'response' of type AddMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.AddMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.addMessage({
  conversationId: "some example string",
  body: { query: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddMessageResponse
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
| <code>conversationId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AddMessageRequest](src/models/add-message-request.ts)</code> | The follow-up question, with optional scope and model overrides. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.addMessage(request)`

- **OnSuccess**: <code>[AddMessageResponse](src/models/add-message-response.ts)</code>
- **OnError**: throws <code>[Conversations.AddMessageError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.addMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddMessageResponse, Conversations.AddMessageError&gt;</code>, with `result.value` of type <code>[AddMessageResponse](src/models/add-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addMessageStream(request: Conversations.AddMessageStreamRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;ConversationMessageStreamSseEvent&gt;, Conversations.AddMessageStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a follow-up message to an existing conversation and stream the
assistant's response over Server-Sent Events.

Functionally equivalent to `POST /conversations/{conversationId}/messages`
but the response is delivered as an SSE stream so clients can render
the answer incrementally.

AG-UI is the sole wire protocol. The vocabulary is described by
`ConversationMessageStreamSSEEvent`; it is the same event set as
`/conversations/stream`, while the terminal result reflects an
existing conversation.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.conversations.addMessageStream({
    conversationId: "some example string",
    body: { query: "some example string", chatMode: ChatMode2.Agent },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type ConversationMessageStreamSseEvent, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Conversations.AddMessageStreamError, discriminated with 'err.payload.kind'
  // The loop's failures are PipesHubApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.addMessageStream({
  conversationId: "some example string",
  body: { query: "some example string", chatMode: ChatMode2.Agent },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<ConversationMessageStreamSseEvent>
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
| <code>conversationId</code> | <code>string</code> | Identifier of the conversation to append the message to. The<br>conversation must belong to the caller and must not be deleted. |
| <code>body</code> | <code>[ConversationMessageStreamRequest](src/models/conversation-message-stream-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.addMessageStream(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[ConversationMessageStreamSseEvent](src/models/conversation-message-stream-sse-event.ts)&gt;</code>
- **OnError**: throws <code>[Conversations.AddMessageStreamError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.addMessageStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;ConversationMessageStreamSseEvent&gt;, Conversations.AddMessageStreamError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[ConversationMessageStreamSseEvent](src/models/conversation-message-stream-sse-event.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveConversation(request: Conversations.ArchiveConversationRequest, options?: RequestOptions): ApiPromise&lt;ConversationsArchiveResponse, Conversations.ArchiveConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a conversation to hide it from the main list.

**Overview:**

Archived conversations are preserved but hidden from the default conversation list.
Use archiving to clean up your workspace without permanently deleting conversations.

**Access:**

The caller must be the conversation's initiator, or be listed in `sharedWith`
with `accessLevel: write`. Already-archived conversations return `400`.

**Retrieval:**

View archived conversations using `GET /conversations/show/archives`.
Restore one with `PATCH /conversations/{conversationId}/unarchive`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.archiveConversation({ conversationId: "some example string" });
  // TODO: Handle 'response' of type ConversationsArchiveResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ArchiveConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.archiveConversation({
  conversationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsArchiveResponse
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
| <code>conversationId</code> | <code>string</code> | Conversation identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.archiveConversation(request)`

- **OnSuccess**: <code>[ConversationsArchiveResponse](src/models/conversations-archive-response.ts)</code>
- **OnError**: throws <code>[Conversations.ArchiveConversationError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.archiveConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsArchiveResponse, Conversations.ArchiveConversationError&gt;</code>, with `result.value` of type <code>[ConversationsArchiveResponse](src/models/conversations-archive-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelConversationStream(request: Conversations.CancelConversationStreamRequest, options?: RequestOptions): ApiPromise&lt;ConversationsCancelResponse, Conversations.CancelConversationStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cooperatively stop a `POST /conversations/stream` or
`POST /conversations/{conversationId}/messages/stream` run that is
still generating, using the `runId` sent when that stream started.

This is a synchronous JSON ack, not another SSE stream. The
cancelled run's own stream (if still connected) receives a terminal
frame with a `stopped` status and whatever partial answer had
already generated; nothing further is delivered here.

`{ cancelled: false }` — not an error — covers a `runId` that
already finished or was never registered; the caller only needs to
know the stream is not running anymore, not why.

`runId` must belong to a run started on THIS `conversationId` — a
`runId` that exists but was registered under a different
conversation (even one owned by the same caller) is rejected with
`403`, same as a `runId` owned by a different user/org.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.cancelConversationStream({
    conversationId: "some example string",
    body: { runId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type ConversationsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.CancelConversationStreamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.cancelConversationStream({
  conversationId: "some example string",
  body: { runId: "00000000-0000-0000-0000-000000000000" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsCancelResponse
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
| <code>conversationId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ConversationsCancelRequest](src/models/conversations-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.cancelConversationStream(request)`

- **OnSuccess**: <code>[ConversationsCancelResponse](src/models/conversations-cancel-response.ts)</code>
- **OnError**: throws <code>[Conversations.CancelConversationStreamError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.cancelConversationStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsCancelResponse, Conversations.CancelConversationStreamError&gt;</code>, with `result.value` of type <code>[ConversationsCancelResponse](src/models/conversations-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createConversation(request: Conversations.CreateConversationRequestParams, options?: RequestOptions): ApiPromise&lt;CreateConversationResponse, Conversations.CreateConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new assistant conversation and wait for the complete answer.
The JSON counterpart of `POST /conversations/stream`, for API, SDK
and automation callers that do not consume SSE.

**How a turn runs**

1. The user's message is saved (in its own short transaction on a
   replica set).
2. The AI backend runs the same agent-loop pipeline as the `/stream`
   route and returns only its final result. No transaction is held
   during this call, and the call is never retried.
3. The answer, citations and status are saved exactly as the
   streaming route saves them, and the updated conversation is
   returned.

Every failure after step 1 is persisted: the conversation ends with
status `Failed`, a `failReason`, and an `error` message, and the
response carries `X-Conversation-Id` so the caller can fetch it.
A 4xx from the AI backend (for example no model configured) keeps
its status and user-facing message; other failures return 500 with
a generic message.

The response arrives only when the whole answer is ready, which can
take minutes for agent runs. Allow a generous client and proxy
timeout, or use the `/stream` variant for interactive clients.

**Modes**

`chatMode: agent` (or `agent:<mode>`) runs the universal agent and
honours `tools` / `agentCapabilities`; `internal_search` and
`web_search` run the search assistant and ignore `tools`. Omitted,
it defaults to internal search.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.createConversation({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type CreateConversationResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.CreateConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.createConversation({
  body: { query: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateConversationResponse
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
| <code>body</code> | <code>[CreateConversationRequest](src/models/create-conversation-request.ts)</code> | The first question, with optional scope, model and mode. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.createConversation(request)`

- **OnSuccess**: <code>[CreateConversationResponse](src/models/create-conversation-response.ts)</code>
- **OnError**: throws <code>[Conversations.CreateConversationError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.createConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateConversationResponse, Conversations.CreateConversationError&gt;</code>, with `result.value` of type <code>[CreateConversationResponse](src/models/create-conversation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteConversationById(request: Conversations.DeleteConversationByIdRequest, options?: RequestOptions): ApiPromise&lt;ConversationsResponse2, Conversations.DeleteConversationByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a conversation by its ID.

**Overview:**

Performs a soft delete by setting `isDeleted: true`. The conversation is
removed from listings but preserved in the database. All citations
referenced by messages in the conversation are also soft-deleted.

**Permissions:**

The conversation initiator can always delete. Users the conversation has
been shared with may delete it only when their `sharedWith.accessLevel`
is `write`.

**Artifacts:** before the conversation is marked deleted, every artifact
the caller created in it is deleted for good (every version and stored
file), and so are older stored outputs of the conversation. If that cannot
be done the conversation is left in place and the error is returned
(for example 503); repeating the request finishes the cleanup.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.deleteConversationById({
    conversationId: "some example string",
  });
  // TODO: Handle 'response' of type ConversationsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Conversations.DeleteConversationByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.deleteConversationById({
  conversationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsResponse2
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
| <code>conversationId</code> | <code>string</code> | Unique conversation identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.deleteConversationById(request)`

- **OnSuccess**: <code>[ConversationsResponse2](src/models/conversations-response2.ts)</code>
- **OnError**: throws <code>[Conversations.DeleteConversationByIdError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.deleteConversationById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsResponse2, Conversations.DeleteConversationByIdError&gt;</code>, with `result.value` of type <code>[ConversationsResponse2](src/models/conversations-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>forkConversation(request: Conversations.ForkConversationRequest, options?: RequestOptions): ApiPromise&lt;ForkConversationResponse, Conversations.ForkConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Copy this conversation into a new private chat owned by the caller,
including every message up to and including `messageId`. The original
conversation is left unchanged.

Only the owner of the conversation can fork it. A shared recipient or a
project member gets 404, because their access to the original's
attachments and artifacts is revoked on unshare. The fork does not
inherit share settings. If the source is linked to a project the caller
can still see, the fork stays in that project but is private to the
caller; otherwise it is created outside the project.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.forkConversation({
    conversationId: "some example string",
    messageId: "some example string",
  });
  // TODO: Handle 'response' of type ForkConversationResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ForkConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.forkConversation({
  conversationId: "some example string",
  messageId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ForkConversationResponse
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
| <code>conversationId</code> | <code>string</code> | - |
| <code>messageId</code> | <code>string</code> | Inclusive last message to copy into the new chat |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.forkConversation(request)`

- **OnSuccess**: <code>[ForkConversationResponse](src/models/fork-conversation-response.ts)</code>
- **OnError**: throws <code>[Conversations.ForkConversationError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.forkConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ForkConversationResponse, Conversations.ForkConversationError&gt;</code>, with `result.value` of type <code>[ForkConversationResponse](src/models/fork-conversation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllConversations(request: Conversations.GetAllConversationsRequest, options?: RequestOptions): ApiPromise&lt;ConversationsResponse, Conversations.GetAllConversationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve paginated conversations for the authenticated user.

**Overview:**

Use the optional `source` query parameter to choose which list to return:
`owned` — only conversations you own (`userId` matches the current user).
`shared` — conversations where you have recipient access
(`isShared` and your user appears in `sharedWith`), without the owner-only branch.
Defaults to `owned` when omitted. Each call returns one list; call twice if you need both.

**Filtering:**

- Only non-archived conversations are returned by default
- Use `/conversations/show/archives` for archived conversations

**Sorting:**

Conversations are sorted by last activity timestamp (most recent first) by default.
With `source=owned`, conversations the caller pinned
(`PATCH /conversations/{conversationId}/pin`) come first, in the same order,
whatever `sortBy` is. `source=shared` is never pinned-first.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.getAllConversations();
  // TODO: Handle 'response' of type ConversationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.GetAllConversationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.getAllConversations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsResponse
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
| <code>source?</code> | <code>[Source1](src/models/source1.ts)</code> | `owned` — owner list (`userId` filter only).<br>`shared` — explicit share grant list (`isShared` + `sharedWith`).<br>Defaults to `owned` when omitted.<br>**Default**: "owned" |
| <code>page?</code> | <code>number</code> | Page number (1-based). Defaults to 1. |
| <code>limit?</code> | <code>number</code> | Page size. Defaults to 20; capped by the server (max 100). |
| <code>sortBy?</code> | <code>[SortBy4](src/models/sort-by4.ts)</code> | Sort field. Invalid values fall back to `lastActivityAt`. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction. Defaults to `desc` unless set to `asc`. |
| <code>conversationId?</code> | <code>string</code> | When set, restricts results to that conversation ID (if visible under the chosen `source`). |
| <code>search?</code> | <code>string</code> | Case-insensitive match on title and message content (max 1000 characters). |
| <code>startDate?</code> | <code>Date</code> (date-time) | Filter by `createdAt` ≥ this ISO date. |
| <code>endDate?</code> | <code>Date</code> (date-time) | Filter by `createdAt` ≤ this ISO date. |
| <code>shared?</code> | <code>string</code> | When set, filters by `isShared`. Accepts case-insensitive<br>`true`/`false`, or `1`/`0`. |
| <code>projectId?</code> | <code>string</code> | Restrict results to a single project. Pass a project's `id` to<br>list conversations linked to that project (visible to the<br>caller — owner, member, or org-visible project with<br>`projectVisibility: project`), or the literal string<br>`unassigned` to list conversations with no `projectId`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.getAllConversations(request)`

- **OnSuccess**: <code>[ConversationsResponse](src/models/conversations-response.ts)</code>
- **OnError**: throws <code>[Conversations.GetAllConversationsError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.getAllConversations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsResponse, Conversations.GetAllConversationsError&gt;</code>, with `result.value` of type <code>[ConversationsResponse](src/models/conversations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getArchivedConversations(request: Conversations.GetArchivedConversationsRequest, options?: RequestOptions): ApiPromise&lt;ConversationsShowArchivesResponse, Conversations.GetArchivedConversationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all archived conversations for the authenticated user.

**Overview:**

Archived conversations are hidden from the main list but preserved for reference.
This endpoint returns only conversations where `isArchived: true` and `archivedBy`
is set. Results include conversations the caller owns and those shared with them.

**Filtering and sorting:**

Results can be narrowed using `search`, `shared`, `startDate`, `endDate`, and
`conversationId`. Sorting is controlled by `sortBy` and `sortOrder`. Pagination
is controlled by `page` and `limit`.

**Unarchiving:**

Use `PATCH /conversations/{conversationId}/unarchive` to restore a conversation
to the active list.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.getArchivedConversations();
  // TODO: Handle 'response' of type ConversationsShowArchivesResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.GetArchivedConversationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.getArchivedConversations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsShowArchivesResponse
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
| <code>page?</code> | <code>number</code> | Page number (1-indexed)<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Items per page<br>**Default**: 20 |
| <code>sortBy?</code> | <code>[SortBy4](src/models/sort-by4.ts)</code> | Field to sort by<br>**Default**: "lastActivityAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | Case-insensitive substring match against title and message content (max 1000 chars) |
| <code>shared?</code> | <code>boolean</code> | Filter by shared status |
| <code>startDate?</code> | <code>Date</code> (date-time) | Include conversations created on or after this timestamp |
| <code>endDate?</code> | <code>Date</code> (date-time) | Include conversations created on or before this timestamp |
| <code>conversationId?</code> | <code>string</code> | Restrict results to a single conversation by identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.getArchivedConversations(request)`

- **OnSuccess**: <code>[ConversationsShowArchivesResponse](src/models/conversations-show-archives-response.ts)</code>
- **OnError**: throws <code>[Conversations.GetArchivedConversationsError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.getArchivedConversations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsShowArchivesResponse, Conversations.GetArchivedConversationsError&gt;</code>, with `result.value` of type <code>[ConversationsShowArchivesResponse](src/models/conversations-show-archives-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConversationById(request: Conversations.GetConversationByIdRequest, options?: RequestOptions): ApiPromise&lt;ConversationsResponse1, Conversations.GetConversationByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific conversation with its full message history.

**Overview:**

Returns the complete conversation including all messages, citations,
feedback, and metadata. Messages can be paginated for long conversations.

**Message Pagination:**

For conversations with many messages, use pagination parameters:

- `page`: Page number (default: 1)
- `limit`: Messages per page (default: 10)
- `sortBy`: Sort field (default: createdAt)
- `sortOrder`: 'asc' or 'desc' (default: desc)

**Access Control:**

Users can access conversations they own or that have been shared with them.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.getConversationById({
    conversationId: "507f1f77bcf86cd799439011",
  });
  // TODO: Handle 'response' of type ConversationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Conversations.GetConversationByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.getConversationById({
  conversationId: "507f1f77bcf86cd799439011",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsResponse1
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
| <code>conversationId</code> | <code>string</code> | Unique conversation identifier |
| <code>page?</code> | <code>number</code> | Page number for message pagination<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Number of messages per page<br>**Default**: 20 |
| <code>sortBy?</code> | <code>[SortBy10](src/models/sort-by10.ts)</code> | Field to sort messages by<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | Case-insensitive search across conversation title and message content |
| <code>startDate?</code> | <code>Date</code> (date-time) | Filter messages created on or after this date (ISO 8601) |
| <code>endDate?</code> | <code>Date</code> (date-time) | Filter messages created on or before this date (ISO 8601) |
| <code>shared?</code> | <code>boolean</code> | Filter by shared status of the conversation |
| <code>messageType?</code> | <code>[MessageType4](src/models/message-type4.ts)</code> | Filter messages by type |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.getConversationById(request)`

- **OnSuccess**: <code>[ConversationsResponse1](src/models/conversations-response1.ts)</code>
- **OnError**: throws <code>[Conversations.GetConversationByIdError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.getConversationById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsResponse1, Conversations.GetConversationByIdError&gt;</code>, with `result.value` of type <code>[ConversationsResponse1](src/models/conversations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pinConversation(request: Conversations.PinConversationRequest, options?: RequestOptions): ApiPromise&lt;ConversationPinResponse, Conversations.PinConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pin a conversation so it is listed first in the caller's own conversation list.

**Access:**

Owner only: the caller must be the conversation's `initiator`. People the
conversation is shared with, even with `write` access, cannot pin it, and
their own lists are not affected by the owner's pin.

**Behaviour:**

Idempotent: pinning an already pinned conversation succeeds and changes nothing.
Archived and deleted conversations cannot be pinned. Archiving a pinned
conversation removes its pin. Pinning does not change `lastActivityAt` or
`updatedAt`, so the conversation keeps its place among the other pinned chats.

- Path params: `conversationId`
- Query params: none
- Body: none


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.pinConversation({ conversationId: "some example string" });
  // TODO: Handle 'response' of type ConversationPinResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.PinConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.pinConversation({
  conversationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationPinResponse
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
| <code>conversationId</code> | <code>string</code> | Conversation identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.pinConversation(request)`

- **OnSuccess**: <code>[ConversationPinResponse](src/models/conversation-pin-response.ts)</code>
- **OnError**: throws <code>[Conversations.PinConversationError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.pinConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationPinResponse, Conversations.PinConversationError&gt;</code>, with `result.value` of type <code>[ConversationPinResponse](src/models/conversation-pin-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>regenerateAnswer(request: Conversations.RegenerateAnswerRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;SseEvent&gt;, Conversations.RegenerateAnswerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Regenerate the AI response for a specific message and stream the new
answer over Server-Sent Events.

**Overview:**

If you're not satisfied with an AI response, use this endpoint to generate
a new answer. The original user query is re-processed and a new bot
response replaces the previous one in place.

**Constraints:**

- Only the *last* message of the conversation can be regenerated.
- The target message must be of type `bot_response`.

**Use Cases:**

- Response was incomplete or unclear
- Want to try a different AI model
- New documents have been indexed since original response

**Model Override:**

Specify `modelKey` to use a different model for regeneration.

**Streaming:**

The response is delivered as an AG-UI `text/event-stream` stream.
Routing still depends on `chatMode`: `internal_search` and
`web_search` use the assistant backend, while `agent` uses the
universal agent loop. See `SSEEvent` for the event vocabulary.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.conversations.regenerateAnswer({
    conversationId: "some example string",
    messageId: "some example string",
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type SseEvent, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Conversations.RegenerateAnswerError, discriminated with 'err.payload.kind'
  // The loop's failures are PipesHubApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.regenerateAnswer({
  conversationId: "some example string",
  messageId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<SseEvent>
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
| <code>conversationId</code> | <code>string</code> | - |
| <code>messageId</code> | <code>string</code> | ID of the message to regenerate response for |
| <code>body?</code> | <code>[RegenerateRequest](src/models/regenerate-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.regenerateAnswer(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[SseEvent](src/models/sse-event.ts)&gt;</code>
- **OnError**: throws <code>[Conversations.RegenerateAnswerError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.regenerateAnswer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;SseEvent&gt;, Conversations.RegenerateAnswerError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[SseEvent](src/models/sse-event.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchArchivedConversations(request: Conversations.SearchArchivedConversationsRequest, options?: RequestOptions): ApiPromise&lt;ConversationsShowArchivesSearchResponse, Conversations.SearchArchivedConversationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search across all archived conversations (assistant and agent) for the authenticated user.

**Overview:**

Performs a case-insensitive substring match against conversation titles and message content
across both assistant (`Conversation`) and agent (`AgentConversation`) archived collections.
Results are merged server-side and sorted by `lastActivityAt` descending.

**Search parameter:**

The `search` query parameter is required, must be a non-empty string, and is capped at
1000 characters. Requests that omit it or exceed the cap return `400`.

**Pagination:**

Results are paginated using `page` and `limit`. The response includes a `pagination`
block with total counts and a `summary` block that breaks matches down by source.

**Item shape:**

Each item is a conversation list entry (no `messages` payload — that field is omitted
for performance) tagged with `source`, plus computed `isOwner`, `accessLevel`,
`archivedAt`, and `archivedBy`. `agentKey` is present only when `source` is `agent`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.searchArchivedConversations({ search: "some example string" });
  // TODO: Handle 'response' of type ConversationsShowArchivesSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.SearchArchivedConversationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.searchArchivedConversations({
  search: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsShowArchivesSearchResponse
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
| <code>search</code> | <code>string</code> | Search term to match against conversation titles and message content (max 1000 chars) |
| <code>page?</code> | <code>number</code> | Page number (1-indexed)<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Items per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.searchArchivedConversations(request)`

- **OnSuccess**: <code>[ConversationsShowArchivesSearchResponse](src/models/conversations-show-archives-search-response.ts)</code>
- **OnError**: throws <code>[Conversations.SearchArchivedConversationsError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.searchArchivedConversations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsShowArchivesSearchResponse, Conversations.SearchArchivedConversationsError&gt;</code>, with `result.value` of type <code>[ConversationsShowArchivesSearchResponse](src/models/conversations-show-archives-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>streamChat(request: Conversations.StreamChatRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;ConversationStreamSseEvent&gt;, Conversations.StreamChatError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new conversation and stream the AI response over Server-Sent
Events (SSE). Behaves like `POST /conversations` but emits tokens,
tool activity, and status updates incrementally instead of returning
a single JSON response at the end.

**Lifecycle**

1. The server validates `query`, persists an in-progress
   conversation, then opens the SSE stream with HTTP `200`.
2. A `CUSTOM` event named `conversation_created` is emitted
   immediately with the new `conversationId` so the client can link
   the stream (sidebar, parallel tabs, deep links) without an extra
   request.
3. AI-backend events stream through (token chunks, tool calls,
   status, etc.).
4. On success a single root `RUN_FINISHED` event is emitted carrying
   the full persisted conversation in `result`.
5. On failure a root `RUN_ERROR` event is emitted and the
   conversation is marked FAILED before the stream closes.

**Event vocabulary**

AG-UI is the sole wire protocol. See `ConversationStreamSSEEvent`
for the full event enum and payload guidance.

Clients should ignore unknown event names rather than treating them
as errors.

**Agent mode**

When `chatMode` is `agent`,
the optional `tools` list restricts which tools the agent may
invoke for this turn. Outside agent modes the `tools` field is
ignored.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.conversations.streamChat({
    body: { query: "some example string", chatMode: ChatMode.Agent },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type ConversationStreamSseEvent, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Conversations.StreamChatError, discriminated with 'err.payload.kind'
  // The loop's failures are PipesHubApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.streamChat({
  body: { query: "some example string", chatMode: ChatMode.Agent },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<ConversationStreamSseEvent>
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
| <code>body</code> | <code>[ConversationStreamRequest](src/models/conversation-stream-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.streamChat(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[ConversationStreamSseEvent](src/models/conversation-stream-sse-event.ts)&gt;</code>
- **OnError**: throws <code>[Conversations.StreamChatError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.streamChat(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;ConversationStreamSseEvent&gt;, Conversations.StreamChatError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[ConversationStreamSseEvent](src/models/conversation-stream-sse-event.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unarchiveConversation(request: Conversations.UnarchiveConversationRequest, options?: RequestOptions): ApiPromise&lt;ConversationsUnarchiveResponse, Conversations.UnarchiveConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived conversation.

- Path params: `conversationId`
- Query params: none
- Body: none


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.unarchiveConversation({
    conversationId: "some example string",
  });
  // TODO: Handle 'response' of type ConversationsUnarchiveResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.UnarchiveConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.unarchiveConversation({
  conversationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsUnarchiveResponse
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
| <code>conversationId</code> | <code>string</code> | Conversation identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.unarchiveConversation(request)`

- **OnSuccess**: <code>[ConversationsUnarchiveResponse](src/models/conversations-unarchive-response.ts)</code>
- **OnError**: throws <code>[Conversations.UnarchiveConversationError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.unarchiveConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsUnarchiveResponse, Conversations.UnarchiveConversationError&gt;</code>, with `result.value` of type <code>[ConversationsUnarchiveResponse](src/models/conversations-unarchive-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unpinConversation(request: Conversations.UnpinConversationRequest, options?: RequestOptions): ApiPromise&lt;ConversationPinResponse, Conversations.UnpinConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a conversation's pin so it is listed by recent activity again.

**Access:**

Owner only, as for `PATCH /conversations/{conversationId}/pin`.

**Behaviour:**

Idempotent: unpinning a conversation that is not pinned succeeds and changes nothing.

- Path params: `conversationId`
- Query params: none
- Body: none


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.unpinConversation({ conversationId: "some example string" });
  // TODO: Handle 'response' of type ConversationPinResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.UnpinConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.unpinConversation({
  conversationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationPinResponse
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
| <code>conversationId</code> | <code>string</code> | Conversation identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.unpinConversation(request)`

- **OnSuccess**: <code>[ConversationPinResponse](src/models/conversation-pin-response.ts)</code>
- **OnError**: throws <code>[Conversations.UnpinConversationError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.unpinConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationPinResponse, Conversations.UnpinConversationError&gt;</code>, with `result.value` of type <code>[ConversationPinResponse](src/models/conversation-pin-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateConversationTitle(request: Conversations.UpdateConversationTitleRequest, options?: RequestOptions): ApiPromise&lt;ConversationsTitleResponse, Conversations.UpdateConversationTitleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the title of a conversation.

**Overview:**

Conversation titles are auto-generated from the first query by default.
Use this endpoint to set a custom, more descriptive title.

**Title limits:**

- Minimum: 1 character
- Maximum: 200 characters

**Permissions:**

The conversation must exist, belong to the calling user's organization,
be owned by the caller (matched on `userId`), and not be soft-deleted.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.updateConversationTitle({
    conversationId: "some example string",
    body: { title: "some example string" },
  });
  // TODO: Handle 'response' of type ConversationsTitleResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.UpdateConversationTitleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.updateConversationTitle({
  conversationId: "some example string",
  body: { title: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsTitleResponse
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
| <code>conversationId</code> | <code>string</code> | Unique conversation identifier |
| <code>body</code> | <code>[ConversationsTitleRequest](src/models/conversations-title-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.updateConversationTitle(request)`

- **OnSuccess**: <code>[ConversationsTitleResponse](src/models/conversations-title-response.ts)</code>
- **OnError**: throws <code>[Conversations.UpdateConversationTitleError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.updateConversationTitle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsTitleResponse, Conversations.UpdateConversationTitleError&gt;</code>, with `result.value` of type <code>[ConversationsTitleResponse](src/models/conversations-title-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMessageFeedback(request: Conversations.UpdateMessageFeedbackRequest, options?: RequestOptions): ApiPromise&lt;MessageFeedbackUpdateResponse, Conversations.UpdateMessageFeedbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Append a feedback entry to a bot-response message.

**Overview**

Feedback helps improve AI response quality over time. You can record an
overall helpfulness signal, issue categories, and free-text comments.
Each call appends a new entry to the message; previous entries are
preserved.

**Feedback options**

- `isHelpful` — overall thumbs up/down.
- `categories` — issue or positive categories from a fixed list.
- `comments` — free-text `positive` and `negative`.

**Restrictions**

Feedback can only be submitted on `bot_response` messages — user
queries and system messages are rejected with `400`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.updateMessageFeedback({
    conversationId: "some example string",
    messageId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type MessageFeedbackUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type Conversations.UpdateMessageFeedbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.updateMessageFeedback({
  conversationId: "some example string",
  messageId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageFeedbackUpdateResponse
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
| <code>conversationId</code> | <code>string</code> | Unique conversation identifier. |
| <code>messageId</code> | <code>string</code> | Identifier of the bot-response message being rated. |
| <code>body</code> | <code>[MessageFeedbackSubmitRequest](src/models/message-feedback-submit-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.updateMessageFeedback(request)`

- **OnSuccess**: <code>[MessageFeedbackUpdateResponse](src/models/message-feedback-update-response.ts)</code>
- **OnError**: throws <code>[Conversations.UpdateMessageFeedbackError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.updateMessageFeedback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageFeedbackUpdateResponse, Conversations.UpdateMessageFeedbackError&gt;</code>, with `result.value` of type <code>[MessageFeedbackUpdateResponse](src/models/message-feedback-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SemanticSearch

> Source: [SemanticSearch](src/resources/semantic-search.ts)

<details>
<summary><code>archiveSearch(request: SemanticSearch.ArchiveSearchRequest, options?: RequestOptions): ApiPromise&lt;SearchArchiveResponse, SemanticSearch.ArchiveSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a specific search result. Archived searches are hidden
from the default search history view but remain retrievable via
the archive-aware listing endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semanticSearch.archiveSearch({ searchId: "some example string" });
  // TODO: Handle 'response' of type SearchArchiveResponse
} catch (err) {
  // TODO: Handle 'err' of type SemanticSearch.ArchiveSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semanticSearch.archiveSearch({ searchId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchArchiveResponse
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
| <code>searchId</code> | <code>string</code> | Unique search identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semanticSearch.archiveSearch(request)`

- **OnSuccess**: <code>[SearchArchiveResponse](src/models/search-archive-response.ts)</code>
- **OnError**: throws <code>[SemanticSearch.ArchiveSearchError](src/resources/semantic-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semanticSearch.archiveSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchArchiveResponse, SemanticSearch.ArchiveSearchError&gt;</code>, with `result.value` of type <code>[SearchArchiveResponse](src/models/search-archive-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSearchById(request: SemanticSearch.DeleteSearchByIdRequest, options?: RequestOptions): ApiPromise&lt;RevokePatResponse, SemanticSearch.DeleteSearchByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a single persisted search row, plus every
citation row referenced by its `citationIds`. The caller must
either own the row or have it shared with them.

Scoped to the caller's org and limited to rows where
`isDeleted: false` and `isArchived: false`; archived or
already-deleted rows surface as `404`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semanticSearch.deleteSearchById({ searchId: "some example string" });
  // TODO: Handle 'response' of type RevokePatResponse
} catch (err) {
  // TODO: Handle 'err' of type SemanticSearch.DeleteSearchByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semanticSearch.deleteSearchById({
  searchId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevokePatResponse
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
| <code>searchId</code> | <code>string</code> | ObjectId of the persisted search row to delete. |
| <code>search?</code> | <code>string</code> | Additional substring filter against `title` / `messages.content`.<br>The row is only deleted if the `searchId` row also matches this<br>filter; otherwise `404`. Special regex characters are escaped;<br>values over 1000 chars or tripping the XSS guard yield `400`. |
| <code>shared?</code> | <code>[Shared4](src/models/shared4.ts)</code> | Additional `isShared` filter (`'true'` / `'false'`). The row is<br>only deleted if it also matches this value. |
| <code>startDate?</code> | <code>Date</code> (date-time) | ISO 8601 lower bound for `createdAt`. The row is only deleted<br>if its `createdAt` is on or after this value. |
| <code>endDate?</code> | <code>Date</code> (date-time) | ISO 8601 upper bound for `createdAt`. The row is only deleted<br>if its `createdAt` is on or before this value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semanticSearch.deleteSearchById(request)`

- **OnSuccess**: <code>[RevokePatResponse](src/models/revoke-pat-response.ts)</code>
- **OnError**: throws <code>[SemanticSearch.DeleteSearchByIdError](src/resources/semantic-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semanticSearch.deleteSearchById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevokePatResponse, SemanticSearch.DeleteSearchByIdError&gt;</code>, with `result.value` of type <code>[RevokePatResponse](src/models/revoke-pat-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSearchHistory(request: SemanticSearch.DeleteSearchHistoryRequest, options?: RequestOptions): ApiPromise&lt;RevokePatResponse, SemanticSearch.DeleteSearchHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete every persisted search row owned by, or shared
with, the authenticated user, along with the citation rows those
searches reference. The action cannot be undone.

Scoped to the caller's org and limited to rows where
`isDeleted: false` and `isArchived: false`. If nothing matches
(including the case where every row is already archived), the
endpoint returns `404` rather than a successful no-op.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semanticSearch.deleteSearchHistory();
  // TODO: Handle 'response' of type RevokePatResponse
} catch (err) {
  // TODO: Handle 'err' of type SemanticSearch.DeleteSearchHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semanticSearch.deleteSearchHistory().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevokePatResponse
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
| <code>search?</code> | <code>string</code> | Restrict the deletion to rows whose `title` or `messages.content`<br>matches this case-insensitive substring. Special regex characters<br>are escaped before the lookup; values over 1000 chars are<br>rejected with `400`. |
| <code>shared?</code> | <code>[Shared4](src/models/shared4.ts)</code> | Restrict the deletion to rows with this `isShared` value<br>(`'true'` / `'false'`). |
| <code>startDate?</code> | <code>Date</code> (date-time) | ISO 8601 lower bound for `createdAt`. Combined with `endDate`<br>to scope which rows are deleted. |
| <code>endDate?</code> | <code>Date</code> (date-time) | ISO 8601 upper bound for `createdAt`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semanticSearch.deleteSearchHistory(request)`

- **OnSuccess**: <code>[RevokePatResponse](src/models/revoke-pat-response.ts)</code>
- **OnError**: throws <code>[SemanticSearch.DeleteSearchHistoryError](src/resources/semantic-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semanticSearch.deleteSearchHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevokePatResponse, SemanticSearch.DeleteSearchHistoryError&gt;</code>, with `result.value` of type <code>[RevokePatResponse](src/models/revoke-pat-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSearchById(request: SemanticSearch.GetSearchByIdRequest, options?: RequestOptions): ApiPromise&lt;PersistedSemanticSearch[], SemanticSearch.GetSearchByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a previously persisted search by its id, scoped to the
caller's org.

The response body is always an **array** containing zero or one
persisted search document. An unknown id returns an empty array
with a `200` status — callers should check array length rather
than relying on a `404`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semanticSearch.getSearchById({ searchId: "some example string" });
  // TODO: Handle 'response' of type PersistedSemanticSearch[]
} catch (err) {
  // TODO: Handle 'err' of type SemanticSearch.GetSearchByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semanticSearch.getSearchById({ searchId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PersistedSemanticSearch[]
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
| <code>searchId</code> | <code>string</code> | Unique search identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semanticSearch.getSearchById(request)`

- **OnSuccess**: <code>[PersistedSemanticSearch](src/models/persisted-semantic-search.ts)[]</code>
- **OnError**: throws <code>[SemanticSearch.GetSearchByIdError](src/resources/semantic-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semanticSearch.getSearchById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PersistedSemanticSearch[], SemanticSearch.GetSearchByIdError&gt;</code>, with `result.value` of type <code>[PersistedSemanticSearch](src/models/persisted-semantic-search.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>search(request: SemanticSearch.SearchRequest, options?: RequestOptions): ApiPromise&lt;SemanticSearchExecuteResponse, SemanticSearch.SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run a semantic search across your organization's knowledge base.
Matching is meaning-based, so relevant results surface even when
the wording differs from the query.

Use optional `filters` to narrow the scope (see `Filters`):

- `filters.apps` — restrict to whole apps: connector instances
  (for example Google Drive or Confluence) and collections.
  `filters.kb` is the older name for collections and means the
  same.
- `filters.recordGroups` — restrict to record groups (a drive, a
  space, a project), each with the groups nested in it.
- `filters.records` — restrict to folders or records, each with
  everything under it.
- `filters.recordsExact` — restrict to records alone, without
  what is under them.

The keys are a union. With any of the last three present, an
absent or empty `apps` / `kb` means no whole app.

The response returns a `searchId` for the persisted search along
with ranked matches, each carrying a relevance score and the
source document's metadata. Past searches can be retrieved via
`GET /search`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semanticSearch.search({
    body: { query: "company vacation policy", limit: 10 },
  });
  // TODO: Handle 'response' of type SemanticSearchExecuteResponse
} catch (err) {
  // TODO: Handle 'err' of type SemanticSearch.SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semanticSearch.search({
  body: { query: "company vacation policy", limit: 10 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemanticSearchExecuteResponse
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
| <code>body</code> | <code>[SemanticSearchRequest](src/models/semantic-search-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semanticSearch.search(request)`

- **OnSuccess**: <code>[SemanticSearchExecuteResponse](src/models/semantic-search-execute-response.ts)</code>
- **OnError**: throws <code>[SemanticSearch.SearchError](src/resources/semantic-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semanticSearch.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemanticSearchExecuteResponse, SemanticSearch.SearchError&gt;</code>, with `result.value` of type <code>[SemanticSearchExecuteResponse](src/models/semantic-search-execute-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchHistory(request: SemanticSearch.SearchHistoryRequest, options?: RequestOptions): ApiPromise&lt;SemanticSearchHistoryResponse, SemanticSearch.SearchHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the authenticated user's persisted search history.

Returns searches the user owns along with searches shared with them,
scoped to the caller's organization. Archived and deleted entries are
excluded. Citation references on this endpoint are returned as raw
identifier strings; use `GET /search/{searchId}` to fetch a single
search with its citations fully expanded.

Pagination defaults to `page=1, limit=20` (maximum `limit` is 100).
Results are sorted by most recent activity by default.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semanticSearch.searchHistory();
  // TODO: Handle 'response' of type SemanticSearchHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type SemanticSearch.SearchHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semanticSearch.searchHistory().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemanticSearchHistoryResponse
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
| <code>page?</code> | <code>number</code> | Page number to return. Must be within `[1, 1000]`.<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Number of items per page. Values are clamped to the range `[1, 100]`.<br>**Default**: 20 |
| <code>sortBy?</code> | <code>[SortBy4](src/models/sort-by4.ts)</code> | Field used to sort results. Any value other than `createdAt`,<br>`lastActivityAt`, or `title` is treated as `lastActivityAt`.<br>**Default**: "lastActivityAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction applied to `sortBy`.<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | Case-insensitive substring to match against a search's title and<br>message content. Regex metacharacters are escaped automatically.<br>Values longer than 1000 characters are rejected with `400`. |
| <code>shared?</code> | <code>[Shared3](src/models/shared3.ts)</code> | Filter results by their shared status. Accepted values are<br>`'true'` / `'1'` (return only shared searches) and<br>`'false'` / `'0'` (exclude shared searches). Matching is<br>case-insensitive and surrounding whitespace is trimmed. |
| <code>startDate?</code> | <code>Date</code> (date-time) | ISO 8601 timestamp used as the lower bound for a search's creation date. |
| <code>endDate?</code> | <code>Date</code> (date-time) | ISO 8601 timestamp used as the upper bound for a search's creation date. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semanticSearch.searchHistory(request)`

- **OnSuccess**: <code>[SemanticSearchHistoryResponse](src/models/semantic-search-history-response.ts)</code>
- **OnError**: throws <code>[SemanticSearch.SearchHistoryError](src/resources/semantic-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semanticSearch.searchHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemanticSearchHistoryResponse, SemanticSearch.SearchHistoryError&gt;</code>, with `result.value` of type <code>[SemanticSearchHistoryResponse](src/models/semantic-search-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unarchiveSearch(request: SemanticSearch.UnarchiveSearchRequest, options?: RequestOptions): ApiPromise&lt;SearchUnarchiveResponse, SemanticSearch.UnarchiveSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore a previously archived search result back to the active search history.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semanticSearch.unarchiveSearch({ searchId: "some example string" });
  // TODO: Handle 'response' of type SearchUnarchiveResponse
} catch (err) {
  // TODO: Handle 'err' of type SemanticSearch.UnarchiveSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semanticSearch.unarchiveSearch({ searchId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchUnarchiveResponse
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
| <code>searchId</code> | <code>string</code> | Unique search identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semanticSearch.unarchiveSearch(request)`

- **OnSuccess**: <code>[SearchUnarchiveResponse](src/models/search-unarchive-response.ts)</code>
- **OnError**: throws <code>[SemanticSearch.UnarchiveSearchError](src/resources/semantic-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semanticSearch.unarchiveSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchUnarchiveResponse, SemanticSearch.UnarchiveSearchError&gt;</code>, with `result.value` of type <code>[SearchUnarchiveResponse](src/models/search-unarchive-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Agents

> Source: [Agents](src/resources/agents.ts)

<details>
<summary><code>addAgentConversationMessage(request: Agents.AddAgentConversationMessageRequest, options?: RequestOptions): ApiPromise&lt;AddMessageResponse, Agents.AddAgentConversationMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ask a follow-up in an existing agent conversation and wait for the
complete answer. The JSON counterpart of
`POST /agents/{agentKey}/conversations/{conversationId}/messages/stream`.

**How a turn runs**

1. The user's message is saved (in its own short transaction on a
   replica set).
2. The AI backend runs the same agent-loop pipeline as the `/stream`
   route and returns only its final result. No transaction is held
   during this call, and the call is never retried.
3. The answer, citations and status are saved exactly as the
   streaming route saves them, and the updated conversation is
   returned.

Every failure after step 1 is persisted: the conversation ends with
status `Failed`, a `failReason`, and an `error` message, and the
response carries `X-Conversation-Id` so the caller can fetch it.
A 4xx from the AI backend (for example no model configured) keeps
its status and user-facing message; other failures return 500 with
a generic message.

The response arrives only when the whole answer is ready, which can
take minutes for agent runs. Allow a generous client and proxy
timeout, or use the `/stream` variant for interactive clients.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.addAgentConversationMessage({
    agentKey: "some example string",
    conversationId: "some example string",
    body: { query: "some example string" },
  });
  // TODO: Handle 'response' of type AddMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.AddAgentConversationMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.addAgentConversationMessage({
  agentKey: "some example string",
  conversationId: "some example string",
  body: { query: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddMessageResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>conversationId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AgentAddMessageRequest](src/models/agent-add-message-request.ts)</code> | The follow-up question, with optional scope, model and tool overrides. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.addAgentConversationMessage(request)`

- **OnSuccess**: <code>[AddMessageResponse](src/models/add-message-response.ts)</code>
- **OnError**: throws <code>[Agents.AddAgentConversationMessageError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.addAgentConversationMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddMessageResponse, Agents.AddAgentConversationMessageError&gt;</code>, with `result.value` of type <code>[AddMessageResponse](src/models/add-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>archiveAgentConversation(request: Agents.ArchiveAgentConversationRequest, options?: RequestOptions): ApiPromise&lt;AgentConversationArchiveResponse, Agents.ArchiveAgentConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the conversation as archived for the authenticated owner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.archiveAgentConversation({
    agentKey: "some example string",
    conversationId: "some example string",
  });
  // TODO: Handle 'response' of type AgentConversationArchiveResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.ArchiveAgentConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.archiveAgentConversation({
  agentKey: "some example string",
  conversationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentConversationArchiveResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>conversationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.archiveAgentConversation(request)`

- **OnSuccess**: <code>[AgentConversationArchiveResponse](src/models/agent-conversation-archive-response.ts)</code>
- **OnError**: throws <code>[Agents.ArchiveAgentConversationError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.archiveAgentConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentConversationArchiveResponse, Agents.ArchiveAgentConversationError&gt;</code>, with `result.value` of type <code>[AgentConversationArchiveResponse](src/models/agent-conversation-archive-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelAgentConversationStream(request: Agents.CancelAgentConversationStreamRequest, options?: RequestOptions): ApiPromise&lt;AgentsConversationsCancelResponse, Agents.CancelAgentConversationStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cooperatively stop a `POST /agents/{agentKey}/conversations/stream`
or `.../messages/stream` run that is still generating, using the
`runId` sent when that stream started.

Same synchronous JSON ack contract as the assistant
`POST /conversations/{conversationId}/cancel` — both forward to the
same backend cancellation endpoint, since the run registry is keyed
by `runId` alone. `{ cancelled: false }` covers a `runId` that
already finished or was never registered.

`runId` must belong to a run started on THIS `conversationId` — a
`runId` that exists but was registered under a different
conversation (even one owned by the same caller) is rejected with
`403`, same as a `runId` owned by a different user/org.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.cancelAgentConversationStream({
    agentKey: "some example string",
    conversationId: "some example string",
    body: { runId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type AgentsConversationsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.CancelAgentConversationStreamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.cancelAgentConversationStream({
  agentKey: "some example string",
  conversationId: "some example string",
  body: { runId: "00000000-0000-0000-0000-000000000000" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentsConversationsCancelResponse
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
| <code>agentKey</code> | <code>string</code> | Stable key identifying the agent that owns this conversation. |
| <code>conversationId</code> | <code>string</code> | ID of the agent conversation to cancel a run for. |
| <code>body</code> | <code>[AgentsConversationsCancelRequest](src/models/agents-conversations-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.cancelAgentConversationStream(request)`

- **OnSuccess**: <code>[AgentsConversationsCancelResponse](src/models/agents-conversations-cancel-response.ts)</code>
- **OnError**: throws <code>[Agents.CancelAgentConversationStreamError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.cancelAgentConversationStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentsConversationsCancelResponse, Agents.CancelAgentConversationStreamError&gt;</code>, with `result.value` of type <code>[AgentsConversationsCancelResponse](src/models/agents-conversations-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createAgent(request: Agents.CreateAgentRequest, options?: RequestOptions): ApiPromise&lt;AgentCreateResponse, Agents.CreateAgentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new custom AI agent.

**Overview:**
Agents are specialized AI assistants configured for specific tasks.
They can have custom system prompts, access to specific tools, and
be limited to certain knowledge bases.

**Agent Configuration:**
- **System prompt:** Instructions that define agent behavior
- **Tools:** Capabilities like web search, code execution, etc.
- **Knowledge bases:** Data sources the agent can access
- **Model config:** AI model settings (temperature, max tokens)

**Use Cases:**
- Customer support bot with product knowledge
- Code review assistant with repository access
- HR assistant with policy documents


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.createAgent({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type AgentCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.CreateAgentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.createAgent({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentCreateResponse
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
| <code>body</code> | <code>[AgentCreateRequest](src/models/agent-create-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.createAgent(request)`

- **OnSuccess**: <code>[AgentCreateResponse](src/models/agent-create-response.ts)</code>
- **OnError**: throws <code>[Agents.CreateAgentError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.createAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentCreateResponse, Agents.CreateAgentError&gt;</code>, with `result.value` of type <code>[AgentCreateResponse](src/models/agent-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createAgentConversation(request: Agents.CreateAgentConversationRequest, options?: RequestOptions): ApiPromise&lt;CreateAgentConversationResponse, Agents.CreateAgentConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a conversation with an agent and wait for the complete answer.
The JSON counterpart of `POST /agents/{agentKey}/conversations/stream`.

**How a turn runs**

1. The user's message is saved (in its own short transaction on a
   replica set).
2. The AI backend runs the same agent-loop pipeline as the `/stream`
   route and returns only its final result. No transaction is held
   during this call, and the call is never retried.
3. The answer, citations and status are saved exactly as the
   streaming route saves them, and the updated conversation is
   returned.

Every failure after step 1 is persisted: the conversation ends with
status `Failed`, a `failReason`, and an `error` message, and the
response carries `X-Conversation-Id` so the caller can fetch it.
A 4xx from the AI backend (for example no model configured) keeps
its status and user-facing message; other failures return 500 with
a generic message.

The response arrives only when the whole answer is ready, which can
take minutes for agent runs. Allow a generous client and proxy
timeout, or use the `/stream` variant for interactive clients.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.createAgentConversation({
    agentKey: "some example string",
    body: { query: "some example string" },
  });
  // TODO: Handle 'response' of type CreateAgentConversationResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.CreateAgentConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.createAgentConversation({
  agentKey: "some example string",
  body: { query: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateAgentConversationResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>body</code> | <code>[AgentCreateConversationRequest](src/models/agent-create-conversation-request.ts)</code> | The first question, with optional scope, model, project and tool overrides. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.createAgentConversation(request)`

- **OnSuccess**: <code>[CreateAgentConversationResponse](src/models/create-agent-conversation-response.ts)</code>
- **OnError**: throws <code>[Agents.CreateAgentConversationError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.createAgentConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateAgentConversationResponse, Agents.CreateAgentConversationError&gt;</code>, with `result.value` of type <code>[CreateAgentConversationResponse](src/models/create-agent-conversation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAgent(request: Agents.DeleteAgentRequest, options?: RequestOptions): ApiPromise&lt;AgentDeleteResponse, Agents.DeleteAgentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-delete an agent (tombstone) in the graph database.

**Overview:**
The Python query service marks the agent instance deleted inside a transaction.
List and search endpoints exclude tombstoned agents. Toolsets, tools, and
knowledge linked to the agent are not removed by this call.

**Permissions:**
Only the agent owner may delete (`can_delete` on the permission check).

**Warning:**
All conversations with this agent will become inaccessible.

**Gateway not-found behavior:**
Unknown `agentKey`, deleting an already-deleted agent, and `GET /agents/{agentKey}`
after delete return **HTTP 404** with an `ErrorResponse` body.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.deleteAgent({ agentKey: "customer-support-agent" });
  // TODO: Handle 'response' of type AgentDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.DeleteAgentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.deleteAgent({ agentKey: "customer-support-agent" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentDeleteResponse
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
| <code>agentKey</code> | <code>string</code> | Unique agent identifier (gateway Zod requires non-empty string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.deleteAgent(request)`

- **OnSuccess**: <code>[AgentDeleteResponse](src/models/agent-delete-response.ts)</code>
- **OnError**: throws <code>[Agents.DeleteAgentError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.deleteAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentDeleteResponse, Agents.DeleteAgentError&gt;</code>, with `result.value` of type <code>[AgentDeleteResponse](src/models/agent-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAgentConversationById(request: Agents.DeleteAgentConversationByIdRequest, options?: RequestOptions): ApiPromise&lt;AgentConversationDeleteResponse, Agents.DeleteAgentConversationByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-deletes an agent conversation owned by the authenticated user.

The controller scopes the lookup by `_id`, `orgId`, `userId`, and
`agentKey`. If no matching writable conversation is found, the route is
intentionally a no-op and still returns HTTP 200 with `conversation: null`.

This makes the operation idempotent:

- deleting a nonexistent conversation returns success with `null`
- deleting through a different `agentKey` returns success with `null`
- deleting an already deleted conversation returns success with `null`

**Artifacts:** before the conversation is marked deleted, every artifact
the caller created in it is deleted for good (every version and stored
file). Artifacts another participant created stay theirs. If the cleanup
cannot be done the conversation is left in place and the error is
returned (for example 503); repeating the request finishes it.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.deleteAgentConversationById({
    agentKey: "some example string",
    conversationId: "some example string",
  });
  // TODO: Handle 'response' of type AgentConversationDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.DeleteAgentConversationByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.deleteAgentConversationById({
  agentKey: "some example string",
  conversationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentConversationDeleteResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>conversationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.deleteAgentConversationById(request)`

- **OnSuccess**: <code>[AgentConversationDeleteResponse](src/models/agent-conversation-delete-response.ts)</code>
- **OnError**: throws <code>[Agents.DeleteAgentConversationByIdError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.deleteAgentConversationById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentConversationDeleteResponse, Agents.DeleteAgentConversationByIdError&gt;</code>, with `result.value` of type <code>[AgentConversationDeleteResponse](src/models/agent-conversation-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAgentConversationChatAttachment(request: Agents.DeleteAgentConversationChatAttachmentRequest, options?: RequestOptions): ApiPromise&lt;undefined, Agents.DeleteAgentConversationChatAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a previously uploaded attachment by proxying `DELETE` to the query service
(`/api/v1/chat/attachments/{recordId}`). The Node handler always ends the response **without
a JSON body** on success (empty body); the **status code** is the upstream status, or **204**
if none is returned.

On validation failure in the gateway (invalid / blank path params), the response is **400**
with a small JSON error object. Same fire-and-forget semantics as
`DELETE /conversations/attachments/{recordId}` on the client.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agents.deleteAgentConversationChatAttachment({
    agentKey: "some example string",
    recordId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Agents.DeleteAgentConversationChatAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.deleteAgentConversationChatAttachment({
  agentKey: "some example string",
  recordId: "some example string",
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
| <code>agentKey</code> | <code>string</code> | Agent key path parameter. Must be non-empty. |
| <code>recordId</code> | <code>string</code> | Attachment record id (from the upload response). Must be non-blank after trim. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.deleteAgentConversationChatAttachment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Agents.DeleteAgentConversationChatAttachmentError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.deleteAgentConversationChatAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Agents.DeleteAgentConversationChatAttachmentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>forkAgentConversation(request: Agents.ForkAgentConversationRequest, options?: RequestOptions): ApiPromise&lt;ForkConversationResponse, Agents.ForkAgentConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Copy this agent conversation into a new private chat owned by the
caller, including every message up to and including `messageId`. The
original conversation is left unchanged.

Only the owner of the conversation can fork it; anyone else gets 404.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.forkAgentConversation({
    agentKey: "some example string",
    conversationId: "some example string",
    messageId: "some example string",
  });
  // TODO: Handle 'response' of type ForkConversationResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.ForkAgentConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.forkAgentConversation({
  agentKey: "some example string",
  conversationId: "some example string",
  messageId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ForkConversationResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>conversationId</code> | <code>string</code> | - |
| <code>messageId</code> | <code>string</code> | Inclusive last message to copy into the new chat |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.forkAgentConversation(request)`

- **OnSuccess**: <code>[ForkConversationResponse](src/models/fork-conversation-response.ts)</code>
- **OnError**: throws <code>[Agents.ForkAgentConversationError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.forkAgentConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ForkConversationResponse, Agents.ForkAgentConversationError&gt;</code>, with `result.value` of type <code>[ForkConversationResponse](src/models/fork-conversation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAgent(request: Agents.GetAgentRequest, options?: RequestOptions): ApiPromise&lt;GetAgentResponse, Agents.GetAgentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve agent details by its unique key.

**Gateway not-found behavior:**
Unknown `agentKey`, lookup after soft-delete, and other AI-backend failures
that return 404 from the Python query service are surfaced by the Node
gateway as **HTTP 404** with an `ErrorResponse` body.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.getAgent({ agentKey: "customer-support-agent" });
  // TODO: Handle 'response' of type GetAgentResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.GetAgentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.getAgent({ agentKey: "customer-support-agent" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetAgentResponse
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
| <code>agentKey</code> | <code>string</code> | Unique agent identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.getAgent(request)`

- **OnSuccess**: <code>[GetAgentResponse](src/models/get-agent-response.ts)</code>
- **OnError**: throws <code>[Agents.GetAgentError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.getAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetAgentResponse, Agents.GetAgentError&gt;</code>, with `result.value` of type <code>[GetAgentResponse](src/models/get-agent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAgentConversationById(request: Agents.GetAgentConversationByIdRequest, options?: RequestOptions): ApiPromise&lt;AgentConversationDetailResponse, Agents.GetAgentConversationByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the conversation with paginated/sorted messages and filter metadata.

**Message Pagination:**

Messages are paginated newest-first: `page=1` returns the most recent
batch. Increment `page` to load older batches (used by the infinite-scroll
"load older messages" feature).

- `page`: Page number (default: 1)
- `limit`: Messages per page (default: 20, max: 100)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.getAgentConversationById({
    agentKey: "some example string",
    conversationId: "some example string",
  });
  // TODO: Handle 'response' of type AgentConversationDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.GetAgentConversationByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.getAgentConversationById({
  agentKey: "some example string",
  conversationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentConversationDetailResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>conversationId</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | Page number for message pagination (1 = most recent batch)<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Number of messages per page<br>**Default**: 20 |
| <code>sortBy?</code> | <code>[SortBy10](src/models/sort-by10.ts)</code> | Field to sort messages by<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction<br>**Default**: "desc" |
| <code>startDate?</code> | <code>Date</code> (date-time) | Filter messages created on or after this date |
| <code>endDate?</code> | <code>Date</code> (date-time) | Filter messages created on or before this date |
| <code>messageType?</code> | <code>[MessageType4](src/models/message-type4.ts)</code> | Filter messages by type |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.getAgentConversationById(request)`

- **OnSuccess**: <code>[AgentConversationDetailResponse](src/models/agent-conversation-detail-response.ts)</code>
- **OnError**: throws <code>[Agents.GetAgentConversationByIdError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.getAgentConversationById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentConversationDetailResponse, Agents.GetAgentConversationByIdError&gt;</code>, with `result.value` of type <code>[AgentConversationDetailResponse](src/models/agent-conversation-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAgentArchivedConversationsGrouped(request: Agents.ListAgentArchivedConversationsGroupedRequest, options?: RequestOptions): ApiPromise&lt;AgentArchivedGroupsResponse, Agents.ListAgentArchivedConversationsGroupedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns archived agent conversations for the current user, grouped by
`agentKey`, with pagination over agent groups. Excludes conversations
whose agent was soft-deleted upstream.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.listAgentArchivedConversationsGrouped();
  // TODO: Handle 'response' of type AgentArchivedGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.ListAgentArchivedConversationsGroupedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.listAgentArchivedConversationsGrouped().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentArchivedGroupsResponse
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
| <code>agentPage?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>agentLimit?</code> | <code>number</code> | -<br>**Default**: 5 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.listAgentArchivedConversationsGrouped(request)`

- **OnSuccess**: <code>[AgentArchivedGroupsResponse](src/models/agent-archived-groups-response.ts)</code>
- **OnError**: throws <code>[Agents.ListAgentArchivedConversationsGroupedError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.listAgentArchivedConversationsGrouped(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentArchivedGroupsResponse, Agents.ListAgentArchivedConversationsGroupedError&gt;</code>, with `result.value` of type <code>[AgentArchivedGroupsResponse](src/models/agent-archived-groups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAgentConversationArchives(request: Agents.ListAgentConversationArchivesRequest, options?: RequestOptions): ApiPromise&lt;AgentArchivedConversationListResponse, Agents.ListAgentConversationArchivesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paginated list of archived conversations for the given agent key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.listAgentConversationArchives({ agentKey: "some example string" });
  // TODO: Handle 'response' of type AgentArchivedConversationListResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.ListAgentConversationArchivesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.listAgentConversationArchives({
  agentKey: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentArchivedConversationListResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>sortBy?</code> | <code>[SortBy4](src/models/sort-by4.ts)</code> | - |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | - |
| <code>search?</code> | <code>string</code> | - |
| <code>startDate?</code> | <code>Date</code> (date-time) | - |
| <code>endDate?</code> | <code>Date</code> (date-time) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.listAgentConversationArchives(request)`

- **OnSuccess**: <code>[AgentArchivedConversationListResponse](src/models/agent-archived-conversation-list-response.ts)</code>
- **OnError**: throws <code>[Agents.ListAgentConversationArchivesError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.listAgentConversationArchives(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentArchivedConversationListResponse, Agents.ListAgentConversationArchivesError&gt;</code>, with `result.value` of type <code>[AgentArchivedConversationListResponse](src/models/agent-archived-conversation-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAgentConversations(request: Agents.ListAgentConversationsRequest, options?: RequestOptions): ApiPromise&lt;AgentConversationListResponse, Agents.ListAgentConversationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paginated list of conversations for the agent (owned and shared-with-me),
excluding archived threads.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.listAgentConversations({
    agentKey: "some example string",
    startDate: "2026-05-26T00:00:00.000Z",
    endDate: "2026-05-27T00:00:00.000Z",
  });
  // TODO: Handle 'response' of type AgentConversationListResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.ListAgentConversationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.listAgentConversations({
  agentKey: "some example string",
  startDate: "2026-05-26T00:00:00.000Z",
  endDate: "2026-05-27T00:00:00.000Z",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentConversationListResponse
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
| <code>agentKey</code> | <code>string</code> | Agent identifier used to scope the conversation list. |
| <code>page?</code> | <code>number</code> | 1-based page number. Defaults to `1`.<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Page size. Defaults to `20`; maximum `100`.<br>**Default**: 20 |
| <code>sortBy?</code> | <code>string</code> | Preferred sort field. Supported values are `createdAt`,<br>`lastActivityAt`, and `title`.<br><br>The current gateway validator preserves legacy behavior: unsupported<br>values are accepted but ignored, and the handler falls back to<br>`lastActivityAt`. |
| <code>sortOrder?</code> | <code>string</code> | Preferred sort direction. Supported values are `asc` and `desc`.<br><br>The current gateway validator preserves legacy behavior: unsupported<br>values are accepted but ignored, and the handler falls back to<br>descending order. |
| <code>search?</code> | <code>string</code> | Case-insensitive search term applied to conversation `title` and<br>`messages.content`. Maximum length is 1000 characters. HTML/XSS<br>payloads and format specifiers are rejected. |
| <code>startDate?</code> | <code>string</code> | Inclusive lower bound on `createdAt`. The handler accepts any<br>JavaScript-parseable date string; invalid values return HTTP 400. |
| <code>endDate?</code> | <code>string</code> | Inclusive upper bound on `createdAt`. The handler accepts any<br>JavaScript-parseable date string; invalid values return HTTP 400. |
| <code>status?</code> | <code>string</code> | Optional status filter applied to the `sharedWithMeConversations`<br>branch of the response. The main `conversations` list ignores this<br>parameter. |
| <code>isArchived?</code> | <code>[IsArchived](src/models/is-archived.ts)</code> | Optional archived flag applied to the `sharedWithMeConversations`<br>branch before the route-level non-archived guard is enforced.<br>Accepted values are `true` and `false`. |
| <code>projectId?</code> | <code>string</code> | Restrict results to a single project. Pass a project's `id`, or<br>the literal string `unassigned` to list agent conversations with<br>no `projectId`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.listAgentConversations(request)`

- **OnSuccess**: <code>[AgentConversationListResponse](src/models/agent-conversation-list-response.ts)</code>
- **OnError**: throws <code>[Agents.ListAgentConversationsError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.listAgentConversations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentConversationListResponse, Agents.ListAgentConversationsError&gt;</code>, with `result.value` of type <code>[AgentConversationListResponse](src/models/agent-conversation-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAgents(request: Agents.ListAgentsRequest, options?: RequestOptions): ApiPromise&lt;AgentListResponse, Agents.ListAgentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of agents available to the authenticated user.

**Overview**

Returns agents accessible through direct, team, or org-level permissions.
Search is performed across agent name, description, and tags. Sorting and
pagination are applied by the AI backend and the resulting envelope is
forwarded unchanged by the Node gateway.

**Gateway contract**

The Node route supports only these query params: `page`, `limit`, `search`,
`sort_by`, and `sort_order`.

The Python backend also understands `isDeleted`, but this gateway route
does not forward it, so it is not part of the public API contract here.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.listAgents();
  // TODO: Handle 'response' of type AgentListResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.ListAgentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.listAgents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentListResponse
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
| <code>page?</code> | <code>number</code> | 1-based page number.<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Maximum number of agents to return in the current page.<br>**Default**: 20 |
| <code>search?</code> | <code>string</code> | Case-insensitive search across agent name, description, and tags. Leading/trailing whitespace is trimmed; blank-after-trim values are rejected. |
| <code>sortBy?</code> | <code>string</code> | Backend sort field. Leading/trailing whitespace is trimmed. Common value is `updatedAtTimestamp`.<br>**Default**: "updatedAtTimestamp" |
| <code>sortOrder?</code> | <code>[SortOrder15](src/models/sort-order15.ts)</code> | Sort direction.<br>**Default**: "desc" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.listAgents(request)`

- **OnSuccess**: <code>[AgentListResponse](src/models/agent-list-response.ts)</code>
- **OnError**: throws <code>[Agents.ListAgentsError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.listAgents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentListResponse, Agents.ListAgentsError&gt;</code>, with `result.value` of type <code>[AgentListResponse](src/models/agent-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>regenerateAgentConversationMessage(request: Agents.RegenerateAgentConversationMessageRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;AgentRegenerateSseEvent&gt;, Agents.RegenerateAgentConversationMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Regenerate the AI response for a specific message in an agent
conversation and stream the new answer over Server-Sent Events.

**Constraints:**

- Only the last message in the conversation can be regenerated.
- The target message must be of type `bot_response`.

**Request body:**

`chatMode: quick` is required. Other fields are optional and reuse
the original model/context when omitted. The body supports:
- `filters`
- `chatMode`
- `modelKey`
- `modelName`
- `modelFriendlyName`
- `timezone`
- `currentTime`
- `tools`
- `protocol`
- `agentCapabilities`

**Streaming behavior:**

The response is delivered as an AG-UI `text/event-stream`. Stable
outcomes are `RUN_FINISHED` and `RUN_ERROR`; see
`AgentRegenerateSSEEvent`.

Additional agent/tool lifecycle events may be forwarded by the
backend and should be treated as informational updates.

Validation failures on params/body are returned as normal HTTP `400`
responses before the stream starts. Valid-shape requests that fail
conversation lookup or regenerate rules are reported as
`RUN_ERROR` events after stream initialization.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.agents.regenerateAgentConversationMessage({
    agentKey: "some example string",
    conversationId: "some example string",
    messageId: "some example string",
    body: {},
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type AgentRegenerateSseEvent, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Agents.RegenerateAgentConversationMessageError, discriminated with 'err.payload.kind'
  // The loop's failures are PipesHubApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.regenerateAgentConversationMessage({
  agentKey: "some example string",
  conversationId: "some example string",
  messageId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<AgentRegenerateSseEvent>
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
| <code>agentKey</code> | <code>string</code> | Stable key identifying the agent that owns this conversation. |
| <code>conversationId</code> | <code>string</code> | ID of the agent conversation containing the target message. |
| <code>messageId</code> | <code>string</code> | ID of the bot-response message to regenerate. |
| <code>body</code> | <code>[AgentRegenerateRequest](src/models/agent-regenerate-request.ts)</code> | Regeneration payload requiring `chatMode: quick`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.regenerateAgentConversationMessage(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[AgentRegenerateSseEvent](src/models/agent-regenerate-sse-event.ts)&gt;</code>
- **OnError**: throws <code>[Agents.RegenerateAgentConversationMessageError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.regenerateAgentConversationMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;AgentRegenerateSseEvent&gt;, Agents.RegenerateAgentConversationMessageError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[AgentRegenerateSseEvent](src/models/agent-regenerate-sse-event.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>streamAgentConversation(request: Agents.StreamAgentConversationRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;AgentStreamSseEvent&gt;, Agents.StreamAgentConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new conversation with the specified agent and stream the AI
response as Server-Sent Events (SSE). The first user message is saved
and forwarded to the upstream agent backend; subsequent tokens, tool
calls, and lifecycle events are emitted on the open SSE connection.

AG-UI is the sole wire protocol. The request must include
`chatMode: quick`; see `AgentStreamSSEEvent` for the event vocabulary.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.agents.streamAgentConversation({
    agentKey: "some example string",
    body: { query: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type AgentStreamSseEvent, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Agents.StreamAgentConversationError, discriminated with 'err.payload.kind'
  // The loop's failures are PipesHubApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.streamAgentConversation({
  agentKey: "some example string",
  body: { query: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<AgentStreamSseEvent>
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
| <code>agentKey</code> | <code>string</code> | Stable key identifying the agent that owns this conversation. |
| <code>body</code> | <code>[AgentStreamCreateConversationRequest](src/models/agent-stream-create-conversation-request.ts)</code> | Initial turn payload for the new agent conversation stream. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.streamAgentConversation(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[AgentStreamSseEvent](src/models/agent-stream-sse-event.ts)&gt;</code>
- **OnError**: throws <code>[Agents.StreamAgentConversationError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.streamAgentConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;AgentStreamSseEvent&gt;, Agents.StreamAgentConversationError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[AgentStreamSseEvent](src/models/agent-stream-sse-event.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>streamAgentConversationMessage(request: Agents.StreamAgentConversationMessageRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;AgentMessageStreamSseEvent&gt;, Agents.StreamAgentConversationMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Append a user message to an existing agent conversation and stream the
assistant reply over SSE.

AG-UI is the sole wire protocol. The request must include
`chatMode: quick`; see `AgentMessageStreamSSEEvent` for the event
vocabulary.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.agents.streamAgentConversationMessage({
    agentKey: "some example string",
    conversationId: "some example string",
    body: { query: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type AgentMessageStreamSseEvent, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Agents.StreamAgentConversationMessageError, discriminated with 'err.payload.kind'
  // The loop's failures are PipesHubApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.streamAgentConversationMessage({
  agentKey: "some example string",
  conversationId: "some example string",
  body: { query: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<AgentMessageStreamSseEvent>
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>conversationId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AgentAddMessageStreamRequest](src/models/agent-add-message-stream-request.ts)</code> | Follow-up message payload for the agent conversation stream. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.streamAgentConversationMessage(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;[AgentMessageStreamSseEvent](src/models/agent-message-stream-sse-event.ts)&gt;</code>
- **OnError**: throws <code>[Agents.StreamAgentConversationMessageError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.streamAgentConversationMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;AgentMessageStreamSseEvent&gt;, Agents.StreamAgentConversationMessageError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;[AgentMessageStreamSseEvent](src/models/agent-message-stream-sse-event.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unarchiveAgentConversation(request: Agents.UnarchiveAgentConversationRequest, options?: RequestOptions): ApiPromise&lt;AgentConversationUnarchiveResponse, Agents.UnarchiveAgentConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores an archived agent conversation to the active list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.unarchiveAgentConversation({
    agentKey: "some example string",
    conversationId: "some example string",
  });
  // TODO: Handle 'response' of type AgentConversationUnarchiveResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.UnarchiveAgentConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.unarchiveAgentConversation({
  agentKey: "some example string",
  conversationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentConversationUnarchiveResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>conversationId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.unarchiveAgentConversation(request)`

- **OnSuccess**: <code>[AgentConversationUnarchiveResponse](src/models/agent-conversation-unarchive-response.ts)</code>
- **OnError**: throws <code>[Agents.UnarchiveAgentConversationError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.unarchiveAgentConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentConversationUnarchiveResponse, Agents.UnarchiveAgentConversationError&gt;</code>, with `result.value` of type <code>[AgentConversationUnarchiveResponse](src/models/agent-conversation-unarchive-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAgent(request: Agents.UpdateAgentRequest, options?: RequestOptions): ApiPromise&lt;AgentUpdateResponse, Agents.UpdateAgentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Apply a partial update to an existing agent configuration.

**Gateway contract**

The Node gateway validates the request body via Zod middleware before
forwarding to the Python agent service. The `agentKey` path param and
the request body are both validated. Query parameters are ignored by
the controller.

**Update semantics**

Only fields present in the request body are updated. `models` may be
omitted (the agent's existing models are kept), set to an empty array
(clears the agent's models so it falls back to the organization's
default LLM at chat time), or set to a non-empty array. When a
non-empty array is provided, the gateway Zod middleware requires at
least one object entry with `isReasoning: true`.

**Permissions**

The authenticated user must have `can_edit` on the agent (typically the
owner). Service-account and `shareWithOrg` transitions follow additional
Python business rules.

**Success response**

Returns a lightweight success envelope only. Use
`GET /agents/{agentKey}` to read the persisted agent after an update.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.updateAgent({ agentKey: "customer-support-agent", body: {} });
  // TODO: Handle 'response' of type AgentUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.UpdateAgentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.updateAgent({
  agentKey: "customer-support-agent",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentUpdateResponse
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
| <code>agentKey</code> | <code>string</code> | Unique agent identifier |
| <code>body</code> | <code>[AgentUpdateRequest](src/models/agent-update-request.ts)</code> | Partial agent configuration fields to update |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.updateAgent(request)`

- **OnSuccess**: <code>[AgentUpdateResponse](src/models/agent-update-response.ts)</code>
- **OnError**: throws <code>[Agents.UpdateAgentError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.updateAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentUpdateResponse, Agents.UpdateAgentError&gt;</code>, with `result.value` of type <code>[AgentUpdateResponse](src/models/agent-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAgentConversationMessageFeedback(request: Agents.UpdateAgentConversationMessageFeedbackRequest, options?: RequestOptions): ApiPromise&lt;MessageFeedbackUpdateResponse, Agents.UpdateAgentConversationMessageFeedbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Append structured feedback to a bot-response message in an agent
conversation. Uses the same request body shape as
`updateMessageFeedback` (helpfulness, categories, comments). Feedback
can only be submitted on `bot_response` messages.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.updateAgentConversationMessageFeedback({
    agentKey: "some example string",
    conversationId: "some example string",
    messageId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type MessageFeedbackUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.UpdateAgentConversationMessageFeedbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.updateAgentConversationMessageFeedback({
  agentKey: "some example string",
  conversationId: "some example string",
  messageId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageFeedbackUpdateResponse
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
| <code>agentKey</code> | <code>string</code> | Unique agent identifier (gateway Zod requires non-empty string). |
| <code>conversationId</code> | <code>string</code> | Unique conversation identifier. |
| <code>messageId</code> | <code>string</code> | Identifier of the bot-response message being rated. |
| <code>body</code> | <code>[MessageFeedbackSubmitRequest](src/models/message-feedback-submit-request.ts)</code> | Feedback payload for the agent message. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.updateAgentConversationMessageFeedback(request)`

- **OnSuccess**: <code>[MessageFeedbackUpdateResponse](src/models/message-feedback-update-response.ts)</code>
- **OnError**: throws <code>[Agents.UpdateAgentConversationMessageFeedbackError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.updateAgentConversationMessageFeedback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageFeedbackUpdateResponse, Agents.UpdateAgentConversationMessageFeedbackError&gt;</code>, with `result.value` of type <code>[MessageFeedbackUpdateResponse](src/models/message-feedback-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAgentConversationTitle(request: Agents.UpdateAgentConversationTitleRequest, options?: RequestOptions): ApiPromise&lt;AgentConversationTitleUpdateResponse, Agents.UpdateAgentConversationTitleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the display title for an agent conversation owned by the caller.

The controller looks up the conversation by `_id`, `orgId`, `userId`,
`agentKey`, and `isDeleted: false`.

The request body uses the shared title validator (`1..200` chars), and
the controller trims the incoming title before saving it. A whitespace-only
title can therefore still return HTTP 400 even if the raw string is
non-empty.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.updateAgentConversationTitle({
    agentKey: "some example string",
    conversationId: "some example string",
    body: { title: "some example string" },
  });
  // TODO: Handle 'response' of type AgentConversationTitleUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.UpdateAgentConversationTitleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.updateAgentConversationTitle({
  agentKey: "some example string",
  conversationId: "some example string",
  body: { title: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentConversationTitleUpdateResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>conversationId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ConversationTitleUpdateRequest](src/models/conversation-title-update-request.ts)</code> | New title for the agent conversation.<br><br>The server trims the provided string before saving it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.updateAgentConversationTitle(request)`

- **OnSuccess**: <code>[AgentConversationTitleUpdateResponse](src/models/agent-conversation-title-update-response.ts)</code>
- **OnError**: throws <code>[Agents.UpdateAgentConversationTitleError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.updateAgentConversationTitle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentConversationTitleUpdateResponse, Agents.UpdateAgentConversationTitleError&gt;</code>, with `result.value` of type <code>[AgentConversationTitleUpdateResponse](src/models/agent-conversation-title-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadAgentConversationChatAttachments(request: Agents.UploadAgentConversationChatAttachmentsRequest, options?: RequestOptions): ApiPromise&lt;ChatAttachmentUploadResponse, Agents.UploadAgentConversationChatAttachmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Multipart upload of PDF, JPEG, or PNG files for agent chat. Same limits as assistant
chat (`POST /conversations/attachments/upload`): up to 10 files, 5 MiB each. Proxies to
the AI backend. Optional `conversationId` associates uploads with an existing agent thread.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.uploadAgentConversationChatAttachments({
    agentKey: "some example string",
    files: new Uint8Array(),
  });
  // TODO: Handle 'response' of type ChatAttachmentUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.UploadAgentConversationChatAttachmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.uploadAgentConversationChatAttachments({
  agentKey: "some example string",
  files: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatAttachmentUploadResponse
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
| <code>agentKey</code> | <code>string</code> | - |
| <code>files</code> | <code>FileInput</code> | One or more files; field name must be `files`. Accepted MIME types: `application/pdf`, `image/jpeg`, `image/jpg`, `image/png`, `text/plain`, `text/markdown`, `text/mdx`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, `text/csv`, `text/tab-separated-values`. Max 5 MiB each. |
| <code>conversationId?</code> | <code>string</code> | Optional existing agent conversation id. Empty string is treated as unset; any non-empty value must be a 24-character ObjectId. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.uploadAgentConversationChatAttachments(request)`

- **OnSuccess**: <code>[ChatAttachmentUploadResponse](src/models/chat-attachment-upload-response.ts)</code>
- **OnError**: throws <code>[Agents.UploadAgentConversationChatAttachmentsError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.uploadAgentConversationChatAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatAttachmentUploadResponse, Agents.UploadAgentConversationChatAttachmentsError&gt;</code>, with `result.value` of type <code>[ChatAttachmentUploadResponse](src/models/chat-attachment-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConnectorRegistry

> Source: [ConnectorRegistry](src/resources/connector-registry.ts)

<details>
<summary><code>getConnectorEgressIps(options?: RequestOptions): ApiPromise&lt;ConnectorsNetworkEgressIpsResponse, ConnectorRegistry.GetConnectorEgressIpsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public IP addresses PipesHub's connectors use to reach external systems, for
users to allow in a database's or API's firewall.<br><br>
Set by the deployment through <code>CONNECTOR_EGRESS_IPS</code>; otherwise
looked up by the connector service and cached. The list is empty when the
address cannot be determined, or when the deployment sets
<code>CONNECTOR_EGRESS_IPS=none</code>.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorRegistry.getConnectorEgressIps();
  // TODO: Handle 'response' of type ConnectorsNetworkEgressIpsResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorRegistry.GetConnectorEgressIpsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorRegistry.getConnectorEgressIps().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsNetworkEgressIpsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorRegistry.getConnectorEgressIps()`

- **OnSuccess**: <code>[ConnectorsNetworkEgressIpsResponse](src/models/connectors-network-egress-ips-response.ts)</code>
- **OnError**: throws <code>[ConnectorRegistry.GetConnectorEgressIpsError](src/resources/connector-registry.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorRegistry.getConnectorEgressIps().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsNetworkEgressIpsResponse, ConnectorRegistry.GetConnectorEgressIpsError&gt;</code>, with `result.value` of type <code>[ConnectorsNetworkEgressIpsResponse](src/models/connectors-network-egress-ips-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConnectorRegistry(request: ConnectorRegistry.GetConnectorRegistryRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsRegistryResponse, ConnectorRegistry.GetConnectorRegistryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all available connector types from the registry.<br><br>
<b>Overview:</b><br>
The registry contains all connector types that can be configured as instances.
Each type has specific authentication requirements, supported scopes, and capabilities.<br><br>
<b>Connector Types Include:</b><br>
<ul>
<li><b>Google Workspace:</b> Drive, Gmail, Calendar, etc.</li>
<li><b>Microsoft 365:</b> OneDrive, Outlook, SharePoint, etc.</li>
<li><b>Cloud Storage:</b> Dropbox, Box, AWS S3</li>
<li><b>Collaboration:</b> Slack, Confluence, Notion, Jira</li>
<li><b>Databases:</b> PostgreSQL, MySQL, MongoDB</li>
</ul>
<b>Filtering:</b><br>
Use <code>scope</code> to filter by team or personal connectors.
Use <code>search</code> for full-text search across connector names.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorRegistry.getConnectorRegistry();
  // TODO: Handle 'response' of type ConnectorsRegistryResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorRegistry.GetConnectorRegistryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorRegistry.getConnectorRegistry().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsRegistryResponse
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
| <code>scope?</code> | <code>[ConnectorScope](src/models/connector-scope.ts)</code> | Which connector types to list. Defaults to `team`.<br>**Default**: "team" |
| <code>page?</code> | <code>number</code> | Page number<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Items per page<br>**Default**: 20 |
| <code>search?</code> | <code>string</code> | Search term for connector names |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorRegistry.getConnectorRegistry(request)`

- **OnSuccess**: <code>[ConnectorsRegistryResponse](src/models/connectors-registry-response.ts)</code>
- **OnError**: throws <code>[ConnectorRegistry.GetConnectorRegistryError](src/resources/connector-registry.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorRegistry.getConnectorRegistry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsRegistryResponse, ConnectorRegistry.GetConnectorRegistryError&gt;</code>, with `result.value` of type <code>[ConnectorsRegistryResponse](src/models/connectors-registry-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConnectorSchema(request: ConnectorRegistry.GetConnectorSchemaRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsRegistrySchemaResponse, ConnectorRegistry.GetConnectorSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The configuration form for one connector type.<br><br>
<b>Sections:</b><br>
<ul>
<li><b>auth:</b> <code>supportedAuthTypes</code>, and per auth type in <code>schemas</code> the
fields to send in <code>config.auth</code> (by <code>name</code>) plus, for OAuth, the
<code>redirectUri</code> path</li>
<li><b>sync:</b> <code>supportedStrategies</code>, <code>scheduledConfig</code> defaults, and the
connector's own settings in <code>customFields</code> (sent in <code>config.sync</code> by
<code>name</code>)</li>
<li><b>filters:</b> the <code>sync</code> and <code>indexing</code> filter fields; a field with
<code>optionSourceType: dynamic</code> gets its values from
<code>GET /connectors/{connectorId}/filters/{filterKey}/options</code></li>
</ul>


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorRegistry.getConnectorSchema({ connectorType: "Jira" });
  // TODO: Handle 'response' of type ConnectorsRegistrySchemaResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorRegistry.GetConnectorSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorRegistry.getConnectorSchema({ connectorType: "Jira" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsRegistrySchemaResponse
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
| <code>connectorType</code> | <code>string</code> | Connector type: `type` from GET /connectors/registry |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorRegistry.getConnectorSchema(request)`

- **OnSuccess**: <code>[ConnectorsRegistrySchemaResponse](src/models/connectors-registry-schema-response.ts)</code>
- **OnError**: throws <code>[ConnectorRegistry.GetConnectorSchemaError](src/resources/connector-registry.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorRegistry.getConnectorSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsRegistrySchemaResponse, ConnectorRegistry.GetConnectorSchemaError&gt;</code>, with `result.value` of type <code>[ConnectorsRegistrySchemaResponse](src/models/connectors-registry-schema-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testConnectorConnection(request: ConnectorRegistry.TestConnectorConnectionRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsRegistryTestConnectionResponse, ConnectorRegistry.TestConnectorConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Try the auth settings from a connector's setup form without creating or
changing an instance.<br><br>
<b>Overview:</b><br>
Only connector types whose schema has <code>supportsConnectionCheck: true</code>
can be tested. A failed check is not an error: the response is
<code>200</code> with <code>success: false</code> and a <code>message</code>
to show the user (for example a wrong password, an unknown database, or a
timeout because a firewall blocks PipesHub's IP address).<br><br>
<b>Editing an instance:</b><br>
Pass <code>connectorId</code> to lay the settings over the instance's saved
ones, as <code>PUT /connectors/{connectorId}/config/auth</code> does. The
caller must be allowed to update that instance.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorRegistry.testConnectorConnection({
    connectorType: "PostgreSQL",
    body: { auth: {} },
  });
  // TODO: Handle 'response' of type ConnectorsRegistryTestConnectionResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorRegistry.TestConnectorConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorRegistry.testConnectorConnection({
  connectorType: "PostgreSQL",
  body: { auth: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsRegistryTestConnectionResponse
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
| <code>connectorType</code> | <code>string</code> | Connector type identifier |
| <code>body</code> | <code>[ConnectorsRegistryTestConnectionRequest](src/models/connectors-registry-test-connection-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorRegistry.testConnectorConnection(request)`

- **OnSuccess**: <code>[ConnectorsRegistryTestConnectionResponse](src/models/connectors-registry-test-connection-response.ts)</code>
- **OnError**: throws <code>[ConnectorRegistry.TestConnectorConnectionError](src/resources/connector-registry.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorRegistry.testConnectorConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsRegistryTestConnectionResponse, ConnectorRegistry.TestConnectorConnectionError&gt;</code>, with `result.value` of type <code>[ConnectorsRegistryTestConnectionResponse](src/models/connectors-registry-test-connection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConnectorInstances

> Source: [ConnectorInstances](src/resources/connector-instances.ts)

<details>
<summary><code>createConnectorInstance(request: ConnectorInstances.CreateConnectorInstanceRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsResponse1, ConnectorInstances.CreateConnectorInstanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a connector instance from a registry type.<br><br>
<b>Body:</b><br>
Put the auth fields the registry schema lists for <code>authType</code> in <code>config.auth</code>,
flat, and the connector's own sync settings in <code>config.sync</code>. A connector that needs no
OAuth sign-in is configured on creation.<br><br>
<b>OAuth:</b><br>
An admin may send the OAuth app's credentials in <code>config.auth</code>: the app is saved and
linked. Anyone may send <code>config.auth.oauthConfigId</code> to use a saved app; non-admins must.
Send <code>baseUrl</code>: the provider redirects to <code>{baseUrl}/{redirectUri}</code>.<br><br>
<b>Scope Permissions:</b><br>
<ul>
<li><code>team</code> scope requires admin privileges</li>
<li><code>personal</code> scope available to all users</li>
</ul>
<b>Next Steps After Creation:</b><br>
<ol>
<li>OAuth only: <code>GET /{id}/oauth/authorize</code>, then <code>GET /oauth/callback</code></li>
<li>Optionally set sync and filters via <code>PUT /{id}/config/filters-sync</code></li>
<li>Turn sync on via <code>POST /{id}/toggle</code></li>
</ol>


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorInstances.createConnectorInstance({
    body: {
      connectorType: "RSS",
      instanceName: "Company blog",
      scope: ConnectorScope.Team,
      config: { sync: {} },
    },
  });
  // TODO: Handle 'response' of type ConnectorsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ConnectorInstances.CreateConnectorInstanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorInstances.createConnectorInstance({
  body: {
    connectorType: "RSS",
    instanceName: "Company blog",
    scope: ConnectorScope.Team,
    config: { sync: {} },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsResponse1
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
| <code>body</code> | <code>[CreateConnectorRequest](src/models/create-connector-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorInstances.createConnectorInstance(request)`

- **OnSuccess**: <code>[ConnectorsResponse1](src/models/connectors-response1.ts)</code>
- **OnError**: throws <code>[ConnectorInstances.CreateConnectorInstanceError](src/resources/connector-instances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorInstances.createConnectorInstance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsResponse1, ConnectorInstances.CreateConnectorInstanceError&gt;</code>, with `result.value` of type <code>[ConnectorsResponse1](src/models/connectors-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteConnectorInstance(request: ConnectorInstances.DeleteConnectorInstanceRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsResponse3, ConnectorInstances.DeleteConnectorInstanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a connector instance and everything synced from it. The request
answers `202` as soon as the deletion has started; the deletion itself
runs in the background.<br><br>
<b>Warning:</b><br>
Deletion is permanent. The connector's records, record groups,
permissions and relations are removed from the graph database, its
embeddings are removed from the vector store, its stored configuration
and credentials are deleted, and its stored files are deleted (content
another connector still uses is kept). The records don't go to the
trash and can't be restored. Its sync schedule is removed too.<br><br>
<b>Permissions:</b><br>
The connector's creator or an admin, for either scope. An admin can
delete a member's personal connector.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorInstances.deleteConnectorInstance({
    connectorId: "some example string",
  });
  // TODO: Handle 'response' of type ConnectorsResponse3
} catch (err) {
  // TODO: Handle 'err' of type ConnectorInstances.DeleteConnectorInstanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorInstances.deleteConnectorInstance({
  connectorId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsResponse3
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
| <code>connectorId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorInstances.deleteConnectorInstance(request)`

- **OnSuccess**: <code>[ConnectorsResponse3](src/models/connectors-response3.ts)</code>
- **OnError**: throws <code>[ConnectorInstances.DeleteConnectorInstanceError](src/resources/connector-instances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorInstances.deleteConnectorInstance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsResponse3, ConnectorInstances.DeleteConnectorInstanceError&gt;</code>, with `result.value` of type <code>[ConnectorsResponse3](src/models/connectors-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConnectorInstance(request: ConnectorInstances.GetConnectorInstanceRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsResponse2, ConnectorInstances.GetConnectorInstanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific connector instance by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorInstances.getConnectorInstance({
    connectorId: "some example string",
  });
  // TODO: Handle 'response' of type ConnectorsResponse2
} catch (err) {
  // TODO: Handle 'err' of type ConnectorInstances.GetConnectorInstanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorInstances.getConnectorInstance({
  connectorId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsResponse2
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorInstances.getConnectorInstance(request)`

- **OnSuccess**: <code>[ConnectorsResponse2](src/models/connectors-response2.ts)</code>
- **OnError**: throws <code>[ConnectorInstances.GetConnectorInstanceError](src/resources/connector-instances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorInstances.getConnectorInstance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsResponse2, ConnectorInstances.GetConnectorInstanceError&gt;</code>, with `result.value` of type <code>[ConnectorsResponse2](src/models/connectors-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConnectorStats(request: ConnectorInstances.GetConnectorStatsRequest, options?: RequestOptions): ApiPromise&lt;ConnectorStats, ConnectorInstances.GetConnectorStatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve statistics for a specific connector instance including record counts,
indexing status breakdown, and sync information.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorInstances.getConnectorStats({ connectorId: "some example string" });
  // TODO: Handle 'response' of type ConnectorStats
} catch (err) {
  // TODO: Handle 'err' of type ConnectorInstances.GetConnectorStatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorInstances.getConnectorStats({
  connectorId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorStats
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorInstances.getConnectorStats(request)`

- **OnSuccess**: <code>[ConnectorStats](src/models/connector-stats.ts)</code>
- **OnError**: throws <code>[ConnectorInstances.GetConnectorStatsError](src/resources/connector-instances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorInstances.getConnectorStats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorStats, ConnectorInstances.GetConnectorStatsError&gt;</code>, with `result.value` of type <code>[ConnectorStats](src/models/connector-stats.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listConnectorInstances(request: ConnectorInstances.ListConnectorInstancesRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsResponse, ConnectorInstances.ListConnectorInstancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all configured connector instances for your organization.<br><br>
<b>Overview:</b><br>
Returns instances created by users, filtered by scope and permissions.
Team-scope connectors are visible to all org users. Personal connectors
are only visible to their creators.<br><br>
<b>Instance States:</b><br>
<ul>
<li><b>isConfigured:</b> All required settings are complete</li>
<li><b>isAuthenticated:</b> OAuth flow complete or credentials valid</li>
<li><b>isActive:</b> Connector is enabled for sync/agent</li>
<li><b>desktopOnline:</b> Owner device's desktop app connected (Local FS only)</li>
<li><b>ownerDeviceId / ownerDeviceName:</b> Desktop device that owns the connector, set on first enable (Local FS only)</li>
</ul>


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorInstances.listConnectorInstances();
  // TODO: Handle 'response' of type ConnectorsResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorInstances.ListConnectorInstancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorInstances.listConnectorInstances().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsResponse
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
| <code>scope?</code> | <code>[ConnectorScope](src/models/connector-scope.ts)</code> | Filter by scope. Defaults to <code>team</code> when omitted.<br>**Default**: "team" |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>search?</code> | <code>string</code> | Full-text search across instance name, type, and app group |
| <code>isAuthenticated?</code> | <code>boolean</code> | Filter by authentication status.<br><code>true</code> returns only authenticated instances;<br><code>false</code> returns only unauthenticated ones.<br>Omit to return all. |
| <code>isActive?</code> | <code>boolean</code> | Filter by active status.<br><code>true</code> returns only active instances;<br><code>false</code> returns only inactive ones.<br>Omit to return all. |
| <code>connectorType?</code> | <code>string</code> | Filter by exact connector type string (e.g. <code>Confluence</code>,<br><code>GoogleDrive</code>). Case-sensitive. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorInstances.listConnectorInstances(request)`

- **OnSuccess**: <code>[ConnectorsResponse](src/models/connectors-response.ts)</code>
- **OnError**: throws <code>[ConnectorInstances.ListConnectorInstancesError](src/resources/connector-instances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorInstances.listConnectorInstances(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsResponse, ConnectorInstances.ListConnectorInstancesError&gt;</code>, with `result.value` of type <code>[ConnectorsResponse](src/models/connectors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resyncConnector(request: ConnectorInstances.ResyncConnectorRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsResyncResponse, ConnectorInstances.ResyncConnectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a resync of records from a connector instance.

**Overview:**

Fetches content from the external source and updates local records. Use when you suspect data is out of sync.

**Warning:** This can be resource-intensive for large connectors.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorInstances.resyncConnector({
    connectorId: "some example string",
    body: { connectorName: "some example string" },
  });
  // TODO: Handle 'response' of type ConnectorsResyncResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorInstances.ResyncConnectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorInstances.resyncConnector({
  connectorId: "some example string",
  body: { connectorName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsResyncResponse
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |
| <code>body</code> | <code>[ResyncConnectorRequestBody](src/models/resync-connector-request-body.ts)</code> | Request body for resync connector |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorInstances.resyncConnector(request)`

- **OnSuccess**: <code>[ConnectorsResyncResponse](src/models/connectors-resync-response.ts)</code>
- **OnError**: throws <code>[ConnectorInstances.ResyncConnectorError](src/resources/connector-instances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorInstances.resyncConnector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsResyncResponse, ConnectorInstances.ResyncConnectorError&gt;</code>, with `result.value` of type <code>[ConnectorsResyncResponse](src/models/connectors-resync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopConnectorSync(request: ConnectorInstances.StopConnectorSyncRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsSyncStopResponse, ConnectorInstances.StopConnectorSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ask the in-flight sync for a connector instance to stop.

**Overview:**

Returns as soon as the request is recorded; the sync halts at its next
interruptible point, which for a connector inside a long provider call
is when that call returns. `stopped` reports whether a sync was actually
running, and `false` is a normal answer rather than a failure.

Deliberately not refused while the connector is busy or locked: this is
the endpoint that has to work precisely then, including against a lock a
crashed process left behind. When nothing is running it also repairs a
stale SYNCING or FULL_SYNCING status, unless the service cannot tell a
live sync on another worker from a stale one, in which case it changes
nothing and says so.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorInstances.stopConnectorSync({ connectorId: "some example string" });
  // TODO: Handle 'response' of type ConnectorsSyncStopResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorInstances.StopConnectorSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorInstances.stopConnectorSync({
  connectorId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsSyncStopResponse
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorInstances.stopConnectorSync(request)`

- **OnSuccess**: <code>[ConnectorsSyncStopResponse](src/models/connectors-sync-stop-response.ts)</code>
- **OnError**: throws <code>[ConnectorInstances.StopConnectorSyncError](src/resources/connector-instances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorInstances.stopConnectorSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsSyncStopResponse, ConnectorInstances.StopConnectorSyncError&gt;</code>, with `result.value` of type <code>[ConnectorsSyncStopResponse](src/models/connectors-sync-stop-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConnectorConfiguration

> Source: [ConnectorConfiguration](src/resources/connector-configuration.ts)

<details>
<summary><code>getConnectorConfig(request: ConnectorConfiguration.GetConnectorConfigRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsConfigResponse, ConnectorConfiguration.GetConnectorConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current configuration for a connector instance.<br><br>
<b>Security:</b><br>
OAuth tokens are never returned. Each stored secret in <code>config.auth</code>
is returned as <code>••••••••</code>: a field the connector type's auth schema
marks secret (such as an API token or password), a secret field of its OAuth
app registration (such as <code>clientSecret</code>), or the <code>private_key</code>
of an older Google Workspace service account.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorConfiguration.getConnectorConfig({
    connectorId: "some example string",
  });
  // TODO: Handle 'response' of type ConnectorsConfigResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorConfiguration.GetConnectorConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorConfiguration.getConnectorConfig({
  connectorId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsConfigResponse
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorConfiguration.getConnectorConfig(request)`

- **OnSuccess**: <code>[ConnectorsConfigResponse](src/models/connectors-config-response.ts)</code>
- **OnError**: throws <code>[ConnectorConfiguration.GetConnectorConfigError](src/resources/connector-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorConfiguration.getConnectorConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsConfigResponse, ConnectorConfiguration.GetConnectorConfigError&gt;</code>, with `result.value` of type <code>[ConnectorsConfigResponse](src/models/connectors-config-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateConnectorAuthConfig(request: ConnectorConfiguration.UpdateConnectorAuthConfigRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsConfigAuthResponse, ConnectorConfiguration.UpdateConnectorAuthConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update only the authentication configuration.<br><br>
<b>Use Case:</b><br>
Use this when you need to update credentials without changing
sync or filter settings. Useful for credential rotation.<br><br>
<b>Prerequisites:</b><br>
Connector must be disabled. This endpoint clears OAuth state,
requiring re-authentication for OAuth connectors.<br><br>
<b>Secrets:</b><br>
A secret field sent as <code>••••••••</code> keeps the stored value; send a
new value to replace it. The response masks stored secrets the same way.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorConfiguration.updateConnectorAuthConfig({
    connectorId: "some example string",
    body: { auth: {} },
  });
  // TODO: Handle 'response' of type ConnectorsConfigAuthResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorConfiguration.UpdateConnectorAuthConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorConfiguration.updateConnectorAuthConfig({
  connectorId: "some example string",
  body: { auth: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsConfigAuthResponse
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |
| <code>body</code> | <code>[UpdateConnectorAuthRequest](src/models/update-connector-auth-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorConfiguration.updateConnectorAuthConfig(request)`

- **OnSuccess**: <code>[ConnectorsConfigAuthResponse](src/models/connectors-config-auth-response.ts)</code>
- **OnError**: throws <code>[ConnectorConfiguration.UpdateConnectorAuthConfigError](src/resources/connector-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorConfiguration.updateConnectorAuthConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsConfigAuthResponse, ConnectorConfiguration.UpdateConnectorAuthConfigError&gt;</code>, with `result.value` of type <code>[ConnectorsConfigAuthResponse](src/models/connectors-config-auth-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateConnectorConfig(request: ConnectorConfiguration.UpdateConnectorConfigRequestParams, options?: RequestOptions): ApiPromise&lt;ConnectorsConfigResponse1, ConnectorConfiguration.UpdateConnectorConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update authentication, sync, and filter configuration.<br><br>
<b>Prerequisites:</b><br>
Connector must be <b>disabled</b> before updating configuration.
Disable it first using <code>POST /{id}/toggle</code>.<br><br>
<b>Partial Updates:</b><br>
Only provide the sections you want to update. Omitted sections
are not modified.<br><br>
<b>Secrets:</b><br>
A secret field in <code>auth</code> sent as <code>••••••••</code> keeps the
stored value, so the configuration can be sent back as it was read. The
response masks stored secrets the same way.<br><br>
<b>Signing out:</b><br>
A change to <code>auth</code>, a different top-level <code>oauthConfigId</code>,
or a linked OAuth app that now holds a different client signs the connector
out and clears its OAuth tokens. Sending <code>auth</code> back as it was read,
with secrets as the mask or in full, keeps it signed in.<br><br>
<b>OAuth apps (OAUTH connectors):</b><br>
An OAUTH connector signs in with the client ID and secret of its linked OAuth
app, so client credentials an admin sends in <code>auth</code> go into an app,
as on <code>PUT /{connectorId}/config/auth</code>:
<ul>
  <li>On a connector with no app, an app is created from them and linked
  (<code>auth.oauthConfigId</code> in the response) once every required OAuth
  field is present; until then the values are kept on the connector.</li>
  <li>On a linked connector, changed values update the app named in
  <code>auth.oauthConfigId</code>, and only the fields that changed. Without that
  field a new app is created and linked; the previously linked app, which other
  connectors may share, is not changed.</li>
  <li>The new app is named <code>auth.oauthInstanceName</code>, or else after the
  connector.</li>
</ul>
A linked connector stores no copy of its app's secret fields: they are not
stored, and not returned, in <code>config.auth</code>. Its client ID and provider
URLs are the app's. Only an admin's credentials create or change an app.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorConfiguration.updateConnectorConfig({
    connectorId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ConnectorsConfigResponse1
} catch (err) {
  // TODO: Handle 'err' of type ConnectorConfiguration.UpdateConnectorConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorConfiguration.updateConnectorConfig({
  connectorId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsConfigResponse1
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
| <code>connectorId</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateConnectorConfigRequest](src/models/update-connector-config-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorConfiguration.updateConnectorConfig(request)`

- **OnSuccess**: <code>[ConnectorsConfigResponse1](src/models/connectors-config-response1.ts)</code>
- **OnError**: throws <code>[ConnectorConfiguration.UpdateConnectorConfigError](src/resources/connector-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorConfiguration.updateConnectorConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsConfigResponse1, ConnectorConfiguration.UpdateConnectorConfigError&gt;</code>, with `result.value` of type <code>[ConnectorsConfigResponse1](src/models/connectors-config-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateConnectorFiltersSyncConfig(request: ConnectorConfiguration.UpdateConnectorFiltersSyncConfigRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsConfigFiltersSyncResponse, ConnectorConfiguration.UpdateConnectorFiltersSyncConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update filter selections and sync settings without touching auth.<br><br>
<b>Use Case:</b><br>
Use this to change what data is synced or adjust sync schedule
without re-authenticating.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorConfiguration.updateConnectorFiltersSyncConfig({
    connectorId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ConnectorsConfigFiltersSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorConfiguration.UpdateConnectorFiltersSyncConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorConfiguration.updateConnectorFiltersSyncConfig({
  connectorId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsConfigFiltersSyncResponse
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |
| <code>body</code> | <code>[UpdateConnectorFiltersSyncRequest](src/models/update-connector-filters-sync-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorConfiguration.updateConnectorFiltersSyncConfig(request)`

- **OnSuccess**: <code>[ConnectorsConfigFiltersSyncResponse](src/models/connectors-config-filters-sync-response.ts)</code>
- **OnError**: throws <code>[ConnectorConfiguration.UpdateConnectorFiltersSyncConfigError](src/resources/connector-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorConfiguration.updateConnectorFiltersSyncConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsConfigFiltersSyncResponse, ConnectorConfiguration.UpdateConnectorFiltersSyncConfigError&gt;</code>, with `result.value` of type <code>[ConnectorsConfigFiltersSyncResponse](src/models/connectors-config-filters-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConnectorControl

> Source: [ConnectorControl](src/resources/connector-control.ts)

<details>
<summary><code>toggleConnector(request: ConnectorControl.ToggleConnectorRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsToggleResponse, ConnectorControl.ToggleConnectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Flip a connector's sync or agent use: each call turns it on when it is off and
off when it is on. Read <code>isActive</code> / <code>isAgentActive</code> first. Turning sync on
starts the first sync.<br><br>
<b>Toggle Types:</b><br>
<ul>
<li><code>sync</code> - data synchronization</li>
<li><code>agent</code> - use by AI agents</li>
</ul>
<b>Before Sync Can Be Turned On:</b><br>
<ul>
<li>The connector is configured (<code>isConfigured: true</code>)</li>
<li>OAuth connectors: sign-in has completed</li>
<li>The connection test against the source passes</li>
<li>For agent: the connector supports agents (<code>supportsAgent: true</code>)</li>
<li>Local FS: must be enabled from the owner device via the desktop app, which sends <code>deviceId</code> and <code>deviceName</code>. The first enable claims that device as owner.</li>
</ul>
<b>Permissions:</b><br>
<ul>
<li>Team scope: Requires admin</li>
<li>Personal scope: Only creator can toggle</li>
</ul>


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorControl.toggleConnector({
    connectorId: "some example string",
    body: { type: Type3.Sync },
  });
  // TODO: Handle 'response' of type ConnectorsToggleResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorControl.ToggleConnectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorControl.toggleConnector({
  connectorId: "some example string",
  body: { type: Type3.Sync },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsToggleResponse
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |
| <code>body</code> | <code>[ConnectorToggleRequest](src/models/connector-toggle-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorControl.toggleConnector(request)`

- **OnSuccess**: <code>[ConnectorsToggleResponse](src/models/connectors-toggle-response.ts)</code>
- **OnError**: throws <code>[ConnectorControl.ToggleConnectorError](src/resources/connector-control.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorControl.toggleConnector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsToggleResponse, ConnectorControl.ToggleConnectorError&gt;</code>, with `result.value` of type <code>[ConnectorsToggleResponse](src/models/connectors-toggle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConnectorOAuth

> Source: [ConnectorOAuth](src/resources/connector-oauth.ts)

<details>
<summary><code>getOAuthAuthorizationUrl(request: ConnectorOAuth.GetOAuthAuthorizationUrlRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsOauthAuthorizeResponse, ConnectorOAuth.GetOAuthAuthorizationUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start the OAuth sign-in for a connector instance.<br><br>
<b>Flow:</b><br>
<ol>
<li>Call this endpoint to get <code>authorizationUrl</code> and <code>state</code></li>
<li>A person opens the URL and gives consent at the provider</li>
<li>The provider redirects to <code>{baseUrl}/{redirectUri}</code> with <code>code</code> and <code>state</code></li>
<li>Pass both to <code>GET /connectors/oauth/callback</code> with a bearer token</li>
</ol>
The redirect URI is fixed when the connector is created (its <code>baseUrl</code>) and must be
registered with the provider.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorOAuth.getOAuthAuthorizationUrl({
    connectorId: "some example string",
  });
  // TODO: Handle 'response' of type ConnectorsOauthAuthorizeResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorOAuth.GetOAuthAuthorizationUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorOAuth.getOAuthAuthorizationUrl({
  connectorId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsOauthAuthorizeResponse
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorOAuth.getOAuthAuthorizationUrl(request)`

- **OnSuccess**: <code>[ConnectorsOauthAuthorizeResponse](src/models/connectors-oauth-authorize-response.ts)</code>
- **OnError**: throws <code>[ConnectorOAuth.GetOAuthAuthorizationUrlError](src/resources/connector-oauth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorOAuth.getOAuthAuthorizationUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsOauthAuthorizeResponse, ConnectorOAuth.GetOAuthAuthorizationUrlError&gt;</code>, with `result.value` of type <code>[ConnectorsOauthAuthorizeResponse](src/models/connectors-oauth-authorize-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>handleOAuthCallback(request: ConnectorOAuth.HandleOAuthCallbackRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsOauthCallbackResponse, ConnectorOAuth.HandleOAuthCallbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finish the OAuth sign-in: exchange the provider's <code>code</code> for tokens and store
them. Call it with the <code>code</code> and <code>state</code> the provider sent to the redirect URI,
as the connector's creator or an admin.<br><br>
<b>Result:</b><br>
Always JSON. <code>success</code> is true when the connector is signed in; otherwise
<code>error</code> and <code>errorMessage</code> say why. Provider tokens are never returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorOAuth.handleOAuthCallback({
    code: "some example string",
    state: "some example string",
  });
  // TODO: Handle 'response' of type ConnectorsOauthCallbackResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorOAuth.HandleOAuthCallbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorOAuth.handleOAuthCallback({
  code: "some example string",
  state: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsOauthCallbackResponse
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
| <code>code</code> | <code>string</code> | Authorization code from provider |
| <code>state</code> | <code>string</code> | State parameter (contains connector ID) |
| <code>error?</code> | <code>string</code> | Error code if authorization failed |
| <code>baseUrl?</code> | <code>string</code> | Base URL for redirect |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorOAuth.handleOAuthCallback(request)`

- **OnSuccess**: <code>[ConnectorsOauthCallbackResponse](src/models/connectors-oauth-callback-response.ts)</code>
- **OnError**: throws <code>[ConnectorOAuth.HandleOAuthCallbackError](src/resources/connector-oauth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorOAuth.handleOAuthCallback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsOauthCallbackResponse, ConnectorOAuth.HandleOAuthCallbackError&gt;</code>, with `result.value` of type <code>[ConnectorsOauthCallbackResponse](src/models/connectors-oauth-callback-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConnectorFilters

> Source: [ConnectorFilters](src/resources/connector-filters.ts)

<details>
<summary><code>getConnectorFilters(request: ConnectorFilters.GetConnectorFiltersRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsFiltersResponse, ConnectorFilters.GetConnectorFiltersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get available filter options for a connector.<br><br>
<b>Overview:</b><br>
Returns filter fields that can be used to limit what data is synced.
For example, a Google Drive connector might offer filters for
specific folders or file types.<br><br>
<b>Dynamic Filters:</b><br>
Some filter fields have <code>dynamic: true</code> (i.e.
<code>optionSourceType: dynamic</code>), meaning their options are
loaded separately via the filter options endpoint.
For such fields, call
<code>GET /connectors/{connectorId}/filters/{filterKey}/options</code>.
When scoping options to a specific parent (e.g. GitLab projects within
a selected group), pass the parent paths via the
<code>contextGroupPath</code> query parameter on that endpoint.<br><br>
<b>Which connectors answer:</b><br>
Only connectors with auth type <code>API_TOKEN</code>, <code>USERNAME_PASSWORD</code>
or <code>OAUTH_ADMIN_CONSENT</code> (and saved settings), and <code>OAUTH</code>
connectors that have completed sign-in. Every other connector is refused with <code>400</code>:
those with auth type <code>NONE</code> (for example RSS), <code>BASIC_AUTH</code>,
<code>ACCESS_KEY</code>, <code>CONNECTION_STRING</code> or <code>CUSTOM</code>
(<code>Unsupported authentication type: ...</code>), an OAUTH connector that has not
signed in, and a token or password connector with no saved settings.
Their filter fields are in the registry schema; dynamic values come from
<code>GET /connectors/{connectorId}/filters/{filterKey}/options</code>.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorFilters.getConnectorFilters({ connectorId: "some example string" });
  // TODO: Handle 'response' of type ConnectorsFiltersResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorFilters.GetConnectorFiltersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorFilters.getConnectorFilters({
  connectorId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsFiltersResponse
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
| <code>connectorId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorFilters.getConnectorFilters(request)`

- **OnSuccess**: <code>[ConnectorsFiltersResponse](src/models/connectors-filters-response.ts)</code>
- **OnError**: throws <code>[ConnectorFilters.GetConnectorFiltersError](src/resources/connector-filters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorFilters.getConnectorFilters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsFiltersResponse, ConnectorFilters.GetConnectorFiltersError&gt;</code>, with `result.value` of type <code>[ConnectorsFiltersResponse](src/models/connectors-filters-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFilterFieldOptions(request: ConnectorFilters.GetFilterFieldOptionsRequest, options?: RequestOptions): ApiPromise&lt;ConnectorsFiltersOptionsResponse, ConnectorFilters.GetFilterFieldOptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get options for a dynamic filter field with pagination.<br><br>
<b>Overview:</b><br>
For filters with <code>optionSourceType: dynamic</code>, options are loaded
from the connected service. This supports pagination and search.<br><br>
<b>Scoped options (GitLab):</b><br>
When fetching options for the <code>project_ids</code> filter key, pass
one or more <code>contextGroupPath</code> query parameters to restrict
the returned repositories to those that belong to the specified GitLab
group namespace paths (e.g. <code>myorg/team</code>). This is used to
populate the project filter after the user has selected groups.<br><br>
<b>Examples:</b><br>
<ul>
<li>Google Drive folders list</li>
<li>Slack channels list</li>
<li>Confluence spaces list</li>
<li>GitLab groups list (<code>filterKey=group_ids</code>)</li>
<li>GitLab projects scoped to groups (<code>filterKey=project_ids&amp;contextGroupPath=myorg/team</code>)</li>
</ul>


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorFilters.getFilterFieldOptions({
    connectorId: "some example string",
    filterKey: "buckets",
  });
  // TODO: Handle 'response' of type ConnectorsFiltersOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ConnectorFilters.GetFilterFieldOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorFilters.getFilterFieldOptions({
  connectorId: "some example string",
  filterKey: "buckets",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsFiltersOptionsResponse
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
| <code>connectorId</code> | <code>string</code> | Connector instance ID |
| <code>filterKey</code> | <code>string</code> | Filter field key |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>search?</code> | <code>string</code> | Search term for filtering options |
| <code>cursor?</code> | <code>string</code> | Cursor for cursor-based pagination |
| <code>contextGroupPath?</code> | <code>string[]</code> | One or more GitLab group namespace paths (e.g. `myorg/team`).<br>When provided for the `project_ids` filter key, the returned<br>options are scoped to repositories that belong to those groups.<br>Repeat the parameter for multiple groups:<br>`?contextGroupPath=groupA&contextGroupPath=groupB` |
| <code>excludeContextGroupPath?</code> | <code>string[]</code> | One or more GitLab group namespace paths to exclude. When provided<br>for the `project_ids` filter key, the returned options omit<br>repositories that belong to those groups (used when the<br>`group_ids` sync filter is `not_in`). Repeat the parameter for<br>multiple groups:<br>`?excludeContextGroupPath=groupA&excludeContextGroupPath=groupB` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorFilters.getFilterFieldOptions(request)`

- **OnSuccess**: <code>[ConnectorsFiltersOptionsResponse](src/models/connectors-filters-options-response.ts)</code>
- **OnError**: throws <code>[ConnectorFilters.GetFilterFieldOptionsError](src/resources/connector-filters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorFilters.getFilterFieldOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsFiltersOptionsResponse, ConnectorFilters.GetFilterFieldOptionsError&gt;</code>, with `result.value` of type <code>[ConnectorsFiltersOptionsResponse](src/models/connectors-filters-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveConnectorFilters(request: ConnectorFilters.SaveConnectorFiltersRequestParams, options?: RequestOptions): ApiPromise&lt;ConnectorsFiltersResponse1, ConnectorFilters.SaveConnectorFiltersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<b>Deprecated.</b> Save filters with
<code>PUT /connectors/{connectorId}/config/filters-sync</code> instead, which is what the
PipesHub app uses. That route takes <code>{sync?, filters?: {sync, indexing}}</code>. It ignores the
flat <code>filters</code> map this one takes: the call still returns 200, but nothing is saved.
It also refuses while the connector is active, so disable it first.
This endpoint will be removed in a future release.<br><br>
What this endpoint saves goes to <code>filters.values</code>, which sync does not read:
sync reads <code>filters.sync</code> and <code>filters.indexing</code>.<br><br>
Save the user's filter selections for a connector.<br><br>
<b>Overview:</b><br>
<b>Request:</b><br>
<code>filters</code> must hold at least one entry: <code>{"filters": {}}</code> is
refused with <code>400</code>. The server stores whatever it is given under the
connector's saved filter values without checking it against the filter schema.
Use <code>PUT /connectors/{connectorId}/config/filters-sync</code> to save typed
sync and indexing filters.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectorFilters.saveConnectorFilters({
    connectorId: "some example string",
    body: { filters: {} },
  });
  // TODO: Handle 'response' of type ConnectorsFiltersResponse1
} catch (err) {
  // TODO: Handle 'err' of type ConnectorFilters.SaveConnectorFiltersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectorFilters.saveConnectorFilters({
  connectorId: "some example string",
  body: { filters: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectorsFiltersResponse1
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
| <code>connectorId</code> | <code>string</code> | - |
| <code>body</code> | <code>[SaveConnectorFiltersRequest](src/models/save-connector-filters-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connectorFilters.saveConnectorFilters(request)`

- **OnSuccess**: <code>[ConnectorsFiltersResponse1](src/models/connectors-filters-response1.ts)</code>
- **OnError**: throws <code>[ConnectorFilters.SaveConnectorFiltersError](src/resources/connector-filters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectorFilters.saveConnectorFilters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectorsFiltersResponse1, ConnectorFilters.SaveConnectorFiltersError&gt;</code>, with `result.value` of type <code>[ConnectorsFiltersResponse1](src/models/connectors-filters-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OAuthConfiguration

> Source: [OAuthConfiguration](src/resources/oauth-configuration.ts)

<details>
<summary><code>createOAuthConfig(request: OAuthConfiguration.CreateOAuthConfigRequestParams, options?: RequestOptions): ApiPromise&lt;OauthResponse2, OAuthConfiguration.CreateOAuthConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new OAuth configuration for a connector type.<br><br>
<b>Admin Only:</b><br>
Only admins can create OAuth configurations. These provide the
OAuth credentials needed for users to authenticate connectors.<br><br>
<b>Use Case:</b><br>
Before users can create Google Drive connectors with OAuth,
an admin must create an OAuth configuration with the Google
OAuth client ID and secret.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthConfiguration.createOAuthConfig({
    connectorType: "some example string",
    body: {
      oauthInstanceName: "some example string",
      config: { clientId: "some example string", clientSecret: "some example string" },
    },
  });
  // TODO: Handle 'response' of type OauthResponse2
} catch (err) {
  // TODO: Handle 'err' of type OAuthConfiguration.CreateOAuthConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthConfiguration.createOAuthConfig({
  connectorType: "some example string",
  body: {
    oauthInstanceName: "some example string",
    config: { clientId: "some example string", clientSecret: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthResponse2
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
| <code>connectorType</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateOAuthConfigRequest](src/models/create-oauth-config-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthConfiguration.createOAuthConfig(request)`

- **OnSuccess**: <code>[OauthResponse2](src/models/oauth-response2.ts)</code>
- **OnError**: throws <code>[OAuthConfiguration.CreateOAuthConfigError](src/resources/oauth-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthConfiguration.createOAuthConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthResponse2, OAuthConfiguration.CreateOAuthConfigError&gt;</code>, with `result.value` of type <code>[OauthResponse2](src/models/oauth-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOAuthConfig(request: OAuthConfiguration.DeleteOAuthConfigRequest, options?: RequestOptions): ApiPromise&lt;OauthResponse5, OAuthConfiguration.DeleteOAuthConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an OAuth configuration.<br><br>
<b>Admin Only:</b><br>
Only admins can delete OAuth configurations.<br><br>
<b>Warning:</b><br>
The server does not check whether connectors still use the configuration:
it is deleted either way, and those connectors lose their OAuth app.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthConfiguration.deleteOAuthConfig({
    connectorType: "some example string",
    configId: "some example string",
  });
  // TODO: Handle 'response' of type OauthResponse5
} catch (err) {
  // TODO: Handle 'err' of type OAuthConfiguration.DeleteOAuthConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthConfiguration.deleteOAuthConfig({
  connectorType: "some example string",
  configId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthResponse5
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
| <code>connectorType</code> | <code>string</code> | - |
| <code>configId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthConfiguration.deleteOAuthConfig(request)`

- **OnSuccess**: <code>[OauthResponse5](src/models/oauth-response5.ts)</code>
- **OnError**: throws <code>[OAuthConfiguration.DeleteOAuthConfigError](src/resources/oauth-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthConfiguration.deleteOAuthConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthResponse5, OAuthConfiguration.DeleteOAuthConfigError&gt;</code>, with `result.value` of type <code>[OauthResponse5](src/models/oauth-response5.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOAuthConfig(request: OAuthConfiguration.GetOAuthConfigRequest, options?: RequestOptions): ApiPromise&lt;OauthResponse3, OAuthConfiguration.GetOAuthConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific OAuth configuration by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthConfiguration.getOAuthConfig({
    connectorType: "some example string",
    configId: "some example string",
  });
  // TODO: Handle 'response' of type OauthResponse3
} catch (err) {
  // TODO: Handle 'err' of type OAuthConfiguration.GetOAuthConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthConfiguration.getOAuthConfig({
  connectorType: "some example string",
  configId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthResponse3
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
| <code>connectorType</code> | <code>string</code> | - |
| <code>configId</code> | <code>string</code> | - |
| <code>reveal?</code> | <code>[Reveal](src/models/reveal.ts)</code> | Set to `true` to receive stored secrets instead of placeholders. Honoured only for an<br>admin's own configuration where the deployment allows it (see `GET<br>/configurationManager/secretReveal`); ignored for OAuth-app tokens and any other value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthConfiguration.getOAuthConfig(request)`

- **OnSuccess**: <code>[OauthResponse3](src/models/oauth-response3.ts)</code>
- **OnError**: throws <code>[OAuthConfiguration.GetOAuthConfigError](src/resources/oauth-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthConfiguration.getOAuthConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthResponse3, OAuthConfiguration.GetOAuthConfigError&gt;</code>, with `result.value` of type <code>[OauthResponse3](src/models/oauth-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOAuthConnectorType(request: OAuthConfiguration.GetOAuthConnectorTypeRequest, options?: RequestOptions): ApiPromise&lt;OauthRegistryResponse1, OAuthConfiguration.GetOAuthConnectorTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details for a specific OAuth-capable connector type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthConfiguration.getOAuthConnectorType({
    connectorType: "some example string",
  });
  // TODO: Handle 'response' of type OauthRegistryResponse1
} catch (err) {
  // TODO: Handle 'err' of type OAuthConfiguration.GetOAuthConnectorTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthConfiguration.getOAuthConnectorType({
  connectorType: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthRegistryResponse1
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
| <code>connectorType</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthConfiguration.getOAuthConnectorType(request)`

- **OnSuccess**: <code>[OauthRegistryResponse1](src/models/oauth-registry-response1.ts)</code>
- **OnError**: throws <code>[OAuthConfiguration.GetOAuthConnectorTypeError](src/resources/oauth-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthConfiguration.getOAuthConnectorType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthRegistryResponse1, OAuthConfiguration.GetOAuthConnectorTypeError&gt;</code>, with `result.value` of type <code>[OauthRegistryResponse1](src/models/oauth-registry-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOAuthRegistry(request: OAuthConfiguration.GetOAuthRegistryRequest, options?: RequestOptions): ApiPromise&lt;OauthRegistryResponse, OAuthConfiguration.GetOAuthRegistryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all connector types that support OAuth authentication.<br><br>
<b>Admin Use:</b><br>
Admins use this to see which connector types need OAuth credentials
to be configured before users can authenticate.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthConfiguration.getOAuthRegistry();
  // TODO: Handle 'response' of type OauthRegistryResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthConfiguration.GetOAuthRegistryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthConfiguration.getOAuthRegistry().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthRegistryResponse
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
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>search?</code> | <code>string</code> | Matches the connector type's name, group or description |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthConfiguration.getOAuthRegistry(request)`

- **OnSuccess**: <code>[OauthRegistryResponse](src/models/oauth-registry-response.ts)</code>
- **OnError**: throws <code>[OAuthConfiguration.GetOAuthRegistryError](src/resources/oauth-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthConfiguration.getOAuthRegistry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthRegistryResponse, OAuthConfiguration.GetOAuthRegistryError&gt;</code>, with `result.value` of type <code>[OauthRegistryResponse](src/models/oauth-registry-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOAuthConfigs(request: OAuthConfiguration.ListOAuthConfigsRequest, options?: RequestOptions): ApiPromise&lt;OauthResponse, OAuthConfiguration.ListOAuthConfigsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the saved OAuth apps of every connector type in the organization.<br><br>
Every caller, admin or not, gets the same essential fields (ID, name, connector type, app
metadata, timestamps). Credentials are never included; an admin reads them per app with
<code>GET /oauth/{connectorType}/{configId}</code>.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthConfiguration.listOAuthConfigs();
  // TODO: Handle 'response' of type OauthResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuthConfiguration.ListOAuthConfigsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthConfiguration.listOAuthConfigs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthResponse
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
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>search?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthConfiguration.listOAuthConfigs(request)`

- **OnSuccess**: <code>[OauthResponse](src/models/oauth-response.ts)</code>
- **OnError**: throws <code>[OAuthConfiguration.ListOAuthConfigsError](src/resources/oauth-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthConfiguration.listOAuthConfigs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthResponse, OAuthConfiguration.ListOAuthConfigsError&gt;</code>, with `result.value` of type <code>[OauthResponse](src/models/oauth-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOAuthConfigsByType(request: OAuthConfiguration.ListOAuthConfigsByTypeRequest, options?: RequestOptions): ApiPromise&lt;OauthResponse1, OAuthConfiguration.ListOAuthConfigsByTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all OAuth configurations for a specific connector type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthConfiguration.listOAuthConfigsByType({
    connectorType: "some example string",
    scope: ConnectorScope.Team,
  });
  // TODO: Handle 'response' of type OauthResponse1
} catch (err) {
  // TODO: Handle 'err' of type OAuthConfiguration.ListOAuthConfigsByTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthConfiguration.listOAuthConfigsByType({
  connectorType: "some example string",
  scope: ConnectorScope.Team,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthResponse1
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
| <code>connectorType</code> | <code>string</code> | - |
| <code>scope?</code> | <code>[ConnectorScope](src/models/connector-scope.ts)</code> | Only OAuth apps usable for this connector scope |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>search?</code> | <code>string</code> | - |
| <code>reveal?</code> | <code>[Reveal](src/models/reveal.ts)</code> | Set to `true` to receive stored secrets instead of placeholders. Honoured only for an<br>admin's own configuration where the deployment allows it (see `GET<br>/configurationManager/secretReveal`); ignored for OAuth-app tokens and any other value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthConfiguration.listOAuthConfigsByType(request)`

- **OnSuccess**: <code>[OauthResponse1](src/models/oauth-response1.ts)</code>
- **OnError**: throws <code>[OAuthConfiguration.ListOAuthConfigsByTypeError](src/resources/oauth-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthConfiguration.listOAuthConfigsByType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthResponse1, OAuthConfiguration.ListOAuthConfigsByTypeError&gt;</code>, with `result.value` of type <code>[OauthResponse1](src/models/oauth-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOAuthConfig(request: OAuthConfiguration.UpdateOAuthConfigRequest, options?: RequestOptions): ApiPromise&lt;OauthResponse2, OAuthConfiguration.UpdateOAuthConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an OAuth configuration.<br><br>
<b>Admin Only:</b><br>
Only an admin can update, including apps another admin created.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuthConfiguration.updateOAuthConfig({
    connectorType: "some example string",
    configId: "some example string",
    body: { oauthInstanceName: "some example string" },
  });
  // TODO: Handle 'response' of type OauthResponse2
} catch (err) {
  // TODO: Handle 'err' of type OAuthConfiguration.UpdateOAuthConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuthConfiguration.updateOAuthConfig({
  connectorType: "some example string",
  configId: "some example string",
  body: { oauthInstanceName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OauthResponse2
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
| <code>connectorType</code> | <code>string</code> | - |
| <code>configId</code> | <code>string</code> | - |
| <code>body</code> | <code>[OauthRequest2](src/models/unions/oauth-request2.ts)</code> | Send `oauthInstanceName`, `config`, or both; a body with neither is<br>refused, even if it carries `baseUrl`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuthConfiguration.updateOAuthConfig(request)`

- **OnSuccess**: <code>[OauthResponse2](src/models/oauth-response2.ts)</code>
- **OnError**: throws <code>[OAuthConfiguration.UpdateOAuthConfigError](src/resources/oauth-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuthConfiguration.updateOAuthConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OauthResponse2, OAuthConfiguration.UpdateOAuthConfigError&gt;</code>, with `result.value` of type <code>[OauthResponse2](src/models/oauth-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AiModelsProviders

> Source: [AiModelsProviders](src/resources/ai-models-providers.ts)

<details>
<summary><code>getAvailableModelsByType(request: AiModelsProviders.GetAvailableModelsByTypeRequest, options?: RequestOptions): ApiPromise&lt;ConfigurationManagerAiModelsAvailableResponse, AiModelsProviders.GetAvailableModelsByTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a **flattened list** of individual AI models of the requested type,
suitable for use in selection dropdowns and model-picker UIs.

Each provider configuration entry may specify multiple comma-separated model
names; this endpoint expands those into one object per model name so callers
receive a flat, enumerable collection.

**Flattening rules:**
- Only the **first** model in a multi-model provider entry is marked
  `isDefault: true`; all subsequent models from the same entry get `false`.
- `modelFriendlyName` is included **only** when the provider entry contains
  exactly one model name (not a comma-separated list).
- `defaultReasoningEffort` is included on every model of an entry whose
  `configuration.defaultReasoningEffort` (or, when that is unset, a
  top-level `defaultReasoningEffort`) holds a valid effort. It is left out
  when no default is stored.
- When no providers of the requested type are configured the endpoint still
  returns HTTP **200** with an empty `models` array — this is **not** an error.

**Access control:** requires a valid bearer token. For OAuth tokens the
`config:read` scope must be present; regular JWT bearer tokens pass through
without scope enforcement.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiModelsProviders.getAvailableModelsByType({ modelType: ModelType.Llm });
  // TODO: Handle 'response' of type ConfigurationManagerAiModelsAvailableResponse
} catch (err) {
  // TODO: Handle 'err' of type AiModelsProviders.GetAvailableModelsByTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiModelsProviders.getAvailableModelsByType({
  modelType: ModelType.Llm,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConfigurationManagerAiModelsAvailableResponse
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
| <code>modelType</code> | <code>[ModelType](src/models/model-type.ts)</code> | Category of AI model to retrieve.<br><br>Must be one of: `llm`, `embedding`, `ocr`, `slm`, `reasoning`, `multiModal`, `imageGeneration`, `tts`, `stt`, `decision`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiModelsProviders.getAvailableModelsByType(request)`

- **OnSuccess**: <code>[ConfigurationManagerAiModelsAvailableResponse](src/models/configuration-manager-ai-models-available-response.ts)</code>
- **OnError**: throws <code>[AiModelsProviders.GetAvailableModelsByTypeError](src/resources/ai-models-providers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiModelsProviders.getAvailableModelsByType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConfigurationManagerAiModelsAvailableResponse, AiModelsProviders.GetAvailableModelsByTypeError&gt;</code>, with `result.value` of type <code>[ConfigurationManagerAiModelsAvailableResponse](src/models/configuration-manager-ai-models-available-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebSearchApi

> Source: [WebSearchApi](src/resources/web-search-api.ts)

<details>
<summary><code>getWebSearchProviders(request: WebSearchApi.GetWebSearchProvidersRequest, options?: RequestOptions): ApiPromise&lt;WebSearchProvidersResponse, WebSearchApi.GetWebSearchProvidersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all configured web search providers and current web search settings.

**Authentication:** Session JWT or OAuth 2.0 access token via `Authorization: Bearer`.
OAuth tokens must include the `config:read` scope. Admin role is not required.

**API keys:** for anyone who isn't an org admin, each provider's `configuration.apiKey`
comes back as the placeholder `****************`. Admins get the stored key, unless the
server hides secrets from everyone (`HIDE_SECRET_CONFIG=true`). When updating a provider,
sending the placeholder back keeps the stored key.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webSearchApi.getWebSearchProviders();
  // TODO: Handle 'response' of type WebSearchProvidersResponse
} catch (err) {
  // TODO: Handle 'err' of type WebSearchApi.GetWebSearchProvidersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webSearchApi.getWebSearchProviders().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebSearchProvidersResponse
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
| <code>reveal?</code> | <code>[Reveal](src/models/reveal.ts)</code> | Set to `true` to receive stored secrets instead of placeholders. Honoured only for an<br>admin's own configuration where the deployment allows it (see `GET<br>/configurationManager/secretReveal`); ignored for OAuth-app tokens and any other value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webSearchApi.getWebSearchProviders(request)`

- **OnSuccess**: <code>[WebSearchProvidersResponse](src/models/web-search-providers-response.ts)</code>
- **OnError**: throws <code>[WebSearchApi.GetWebSearchProvidersError](src/resources/web-search-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webSearchApi.getWebSearchProviders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebSearchProvidersResponse, WebSearchApi.GetWebSearchProvidersError&gt;</code>, with `result.value` of type <code>[WebSearchProvidersResponse](src/models/web-search-providers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PipesHubApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

