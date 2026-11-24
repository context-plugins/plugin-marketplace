# Reference

> Source: [JuriSignClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>getAccountCredits(options?: RequestOptions): ApiPromise&lt;AccountCreditsResponse, Account.GetAccountCreditsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your organization's real-time signature credit consumption. Scoped strictly to the organization of the authenticated token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getAccountCredits();
  // TODO: Handle 'response' of type AccountCreditsResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.GetAccountCreditsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getAccountCredits().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountCreditsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getAccountCredits()`

- **OnSuccess**: <code>[AccountCreditsResponse](src/models/account-credits-response.ts)</code>
- **OnError**: throws <code>[Account.GetAccountCreditsError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.getAccountCredits().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountCreditsResponse, Account.GetAccountCreditsError&gt;</code>, with `result.value` of type <code>[AccountCreditsResponse](src/models/account-credits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Authentication

> Source: [Authentication](src/resources/authentication.ts)

<details>
<summary><code>createSandboxToken(request: Authentication.CreateSandboxTokenRequest, options?: RequestOptions): ApiPromise&lt;AuthSandboxTokenResponse, Authentication.CreateSandboxTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authenticate with the same email/password as POST /auth/token, but obtain a sandbox token instead (prefixed sandbox_...). Requests made with this token never send real SMS or emails (SMS are logged, emails go through the log mailer) and never deduct signature credits. Documents and signature requests created in sandbox mode are isolated from your organization's real data: they never appear in a normal (non-sandbox) request, and vice versa. A sandbox token can only be used with the sandbox_ prefix, and a normal token can never be used with it — mixing the two returns 401. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute for the calling IP.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.createSandboxToken({
    body: { email: "user@example.com", password: "some example password" },
  });
  // TODO: Handle 'response' of type AuthSandboxTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Authentication.CreateSandboxTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication
  .createSandboxToken({ body: { email: "user@example.com", password: "some example password" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthSandboxTokenResponse
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
| <code>body</code> | <code>[AuthSandboxTokenRequest](src/models/auth-sandbox-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.createSandboxToken(request)`

- **OnSuccess**: <code>[AuthSandboxTokenResponse](src/models/auth-sandbox-token-response.ts)</code>
- **OnError**: throws <code>[Authentication.CreateSandboxTokenError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.createSandboxToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthSandboxTokenResponse, Authentication.CreateSandboxTokenError&gt;</code>, with `result.value` of type <code>[AuthSandboxTokenResponse](src/models/auth-sandbox-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createToken(request: Authentication.CreateTokenRequest, options?: RequestOptions): ApiPromise&lt;AuthTokenResponse, Authentication.CreateTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authenticate with email/password to obtain a Bearer token, scoped to your organization. By default the token is granted all 5 available scopes (documents:read, documents:write, sign-requests:read, sign-requests:write, webhooks:manage). Pass `scopes` to request a restricted subset instead — every endpoint checks the token's abilities and returns 403 if the required scope is missing. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute for the calling IP.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.createToken({
    body: { email: "user@example.com", password: "some example password" },
  });
  // TODO: Handle 'response' of type AuthTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Authentication.CreateTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication
  .createToken({ body: { email: "user@example.com", password: "some example password" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthTokenResponse
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
| <code>body</code> | <code>[AuthTokenRequest](src/models/auth-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.createToken(request)`

- **OnSuccess**: <code>[AuthTokenResponse](src/models/auth-token-response.ts)</code>
- **OnError**: throws <code>[Authentication.CreateTokenError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.createToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthTokenResponse, Authentication.CreateTokenError&gt;</code>, with `result.value` of type <code>[AuthTokenResponse](src/models/auth-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStatus(options?: RequestOptions): ApiPromise&lt;Response, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current API status and version information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.getStatus();
  // TODO: Handle 'response' of type Response
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
const result = await client.authentication.getStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Response
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.getStatus()`

- **OnSuccess**: <code>[Response](src/models/response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.authentication.getStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Response, ApiError&gt;</code>, with `result.value` of type <code>[Response](src/models/response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeToken(options?: RequestOptions): ApiPromise&lt;MessageResponse, Authentication.RevokeTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke the Bearer token used in this request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.revokeToken();
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Authentication.RevokeTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication.revokeToken().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.revokeToken()`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[Authentication.RevokeTokenError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.revokeToken().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, Authentication.RevokeTokenError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Bulk

> Source: [Bulk](src/resources/bulk.ts)

<details>
<summary><code>cancelBulkCampaign(request: Bulk.CancelBulkCampaignRequest, options?: RequestOptions): ApiPromise&lt;BulkCampaignsCancelResponse, Bulk.CancelBulkCampaignError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.cancelBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type BulkCampaignsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Bulk.CancelBulkCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .cancelBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCampaignsCancelResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.cancelBulkCampaign(request)`

- **OnSuccess**: <code>[BulkCampaignsCancelResponse](src/models/bulk-campaigns-cancel-response.ts)</code>
- **OnError**: throws <code>[Bulk.CancelBulkCampaignError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.cancelBulkCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCampaignsCancelResponse, Bulk.CancelBulkCampaignError&gt;</code>, with `result.value` of type <code>[BulkCampaignsCancelResponse](src/models/bulk-campaigns-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBulkCampaign(request: Bulk.CreateBulkCampaignRequest, options?: RequestOptions): ApiPromise&lt;BulkCampaignsResponse1, Bulk.CreateBulkCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a bulk campaign with recipients provided directly as JSON (no Excel upload needed for API clients). Each recipient generates one individualized sign request, merged from the bulk template. Invalid rows (missing fields, invalid email, duplicate email) are skipped and reported in `skipped_recipients`, not fatal.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.createBulkCampaign({
    body: {
      name: "some example string",
      bulkTemplateId: "00000000-0000-0000-0000-000000000000",
      expiryHours: 1,
      otpChannel: OtpChannel.Sms,
      recipients: [{ nom: "some example string", prenom: "some example string", email: "user@example.com" }],
    },
  });
  // TODO: Handle 'response' of type BulkCampaignsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Bulk.CreateBulkCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .createBulkCampaign({
    body: {
      name: "some example string",
      bulkTemplateId: "00000000-0000-0000-0000-000000000000",
      expiryHours: 1,
      otpChannel: OtpChannel.Sms,
      recipients: [{ nom: "some example string", prenom: "some example string", email: "user@example.com" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCampaignsResponse1
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
| <code>body</code> | <code>[BulkCampaignsRequest](src/models/bulk-campaigns-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.createBulkCampaign(request)`

- **OnSuccess**: <code>[BulkCampaignsResponse1](src/models/bulk-campaigns-response1.ts)</code>
- **OnError**: throws <code>[Bulk.CreateBulkCampaignError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.createBulkCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCampaignsResponse1, Bulk.CreateBulkCampaignError&gt;</code>, with `result.value` of type <code>[BulkCampaignsResponse1](src/models/bulk-campaigns-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBulkTemplate(request: Bulk.CreateBulkTemplateRequest, options?: RequestOptions): ApiPromise&lt;BulkTemplatesResponse1, Bulk.CreateBulkTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a merge-field HTML template (e.g. `
Bonjour {{prenom}} {{nom}}
`). Merge fields are auto-extracted from the content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.createBulkTemplate({
    body: { name: "some example string", htmlContent: "some example string" },
  });
  // TODO: Handle 'response' of type BulkTemplatesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Bulk.CreateBulkTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .createBulkTemplate({ body: { name: "some example string", htmlContent: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkTemplatesResponse1
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
| <code>body</code> | <code>[BulkTemplatesRequest](src/models/bulk-templates-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.createBulkTemplate(request)`

- **OnSuccess**: <code>[BulkTemplatesResponse1](src/models/bulk-templates-response1.ts)</code>
- **OnError**: throws <code>[Bulk.CreateBulkTemplateError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.createBulkTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkTemplatesResponse1, Bulk.CreateBulkTemplateError&gt;</code>, with `result.value` of type <code>[BulkTemplatesResponse1](src/models/bulk-templates-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBulkCampaign(request: Bulk.DeleteBulkCampaignRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, Bulk.DeleteBulkCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fails with 422 if the campaign is currently processing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.deleteBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Bulk.DeleteBulkCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .deleteBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.deleteBulkCampaign(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[Bulk.DeleteBulkCampaignError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.deleteBulkCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, Bulk.DeleteBulkCampaignError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBulkTemplate(request: Bulk.DeleteBulkTemplateRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, Bulk.DeleteBulkTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fails with 422 if the template is still referenced by a campaign.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.deleteBulkTemplate({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Bulk.DeleteBulkTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .deleteBulkTemplate({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.deleteBulkTemplate(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[Bulk.DeleteBulkTemplateError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.deleteBulkTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, Bulk.DeleteBulkTemplateError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportBulkCampaignResults(request: Bulk.ExportBulkCampaignResultsRequest, options?: RequestOptions): ApiPromise&lt;BulkCampaignsExportResponse, Bulk.ExportBulkCampaignResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-recipient status, send/sign timestamps, and error messages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.exportBulkCampaignResults({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BulkCampaignsExportResponse
} catch (err) {
  // TODO: Handle 'err' of type Bulk.ExportBulkCampaignResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .exportBulkCampaignResults({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCampaignsExportResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.exportBulkCampaignResults(request)`

- **OnSuccess**: <code>[BulkCampaignsExportResponse](src/models/bulk-campaigns-export-response.ts)</code>
- **OnError**: throws <code>[Bulk.ExportBulkCampaignResultsError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.exportBulkCampaignResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCampaignsExportResponse, Bulk.ExportBulkCampaignResultsError&gt;</code>, with `result.value` of type <code>[BulkCampaignsExportResponse](src/models/bulk-campaigns-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBulkCampaign(request: Bulk.GetBulkCampaignRequest, options?: RequestOptions): ApiPromise&lt;BulkCampaignsResponse2, Bulk.GetBulkCampaignError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.getBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type BulkCampaignsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Bulk.GetBulkCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .getBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCampaignsResponse2
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.getBulkCampaign(request)`

- **OnSuccess**: <code>[BulkCampaignsResponse2](src/models/bulk-campaigns-response2.ts)</code>
- **OnError**: throws <code>[Bulk.GetBulkCampaignError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.getBulkCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCampaignsResponse2, Bulk.GetBulkCampaignError&gt;</code>, with `result.value` of type <code>[BulkCampaignsResponse2](src/models/bulk-campaigns-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBulkTemplate(request: Bulk.GetBulkTemplateRequest, options?: RequestOptions): ApiPromise&lt;BulkTemplatesResponse1, Bulk.GetBulkTemplateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.getBulkTemplate({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type BulkTemplatesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Bulk.GetBulkTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .getBulkTemplate({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkTemplatesResponse1
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.getBulkTemplate(request)`

- **OnSuccess**: <code>[BulkTemplatesResponse1](src/models/bulk-templates-response1.ts)</code>
- **OnError**: throws <code>[Bulk.GetBulkTemplateError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.getBulkTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkTemplatesResponse1, Bulk.GetBulkTemplateError&gt;</code>, with `result.value` of type <code>[BulkTemplatesResponse1](src/models/bulk-templates-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>launchBulkCampaign(request: Bulk.LaunchBulkCampaignRequest, options?: RequestOptions): ApiPromise&lt;BulkCampaignsLaunchResponse, Bulk.LaunchBulkCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dispatches an asynchronous job that generates each recipient's document, creates their sign request, and sends it. Fails with 422 if the organization does not have enough remaining credits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.launchBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type BulkCampaignsLaunchResponse
} catch (err) {
  // TODO: Handle 'err' of type Bulk.LaunchBulkCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .launchBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCampaignsLaunchResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.launchBulkCampaign(request)`

- **OnSuccess**: <code>[BulkCampaignsLaunchResponse](src/models/bulk-campaigns-launch-response.ts)</code>
- **OnError**: throws <code>[Bulk.LaunchBulkCampaignError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.launchBulkCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCampaignsLaunchResponse, Bulk.LaunchBulkCampaignError&gt;</code>, with `result.value` of type <code>[BulkCampaignsLaunchResponse](src/models/bulk-campaigns-launch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBulkCampaigns(request?: Bulk.ListBulkCampaignsRequest, options?: RequestOptions): ApiPromise&lt;BulkCampaignsResponse, Bulk.ListBulkCampaignsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.listBulkCampaigns();
  // TODO: Handle 'response' of type BulkCampaignsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bulk.ListBulkCampaignsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk.listBulkCampaigns().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCampaignsResponse
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
| <code>status?</code> | <code>string</code> | - |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.listBulkCampaigns(request)`

- **OnSuccess**: <code>[BulkCampaignsResponse](src/models/bulk-campaigns-response.ts)</code>
- **OnError**: throws <code>[Bulk.ListBulkCampaignsError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.listBulkCampaigns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCampaignsResponse, Bulk.ListBulkCampaignsError&gt;</code>, with `result.value` of type <code>[BulkCampaignsResponse](src/models/bulk-campaigns-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBulkTemplates(options?: RequestOptions): ApiPromise&lt;BulkTemplatesResponse, Bulk.ListBulkTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve reusable merge-field HTML templates used by bulk campaigns.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.listBulkTemplates();
  // TODO: Handle 'response' of type BulkTemplatesResponse
} catch (err) {
  // TODO: Handle 'err' of type Bulk.ListBulkTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk.listBulkTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkTemplatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.listBulkTemplates()`

- **OnSuccess**: <code>[BulkTemplatesResponse](src/models/bulk-templates-response.ts)</code>
- **OnError**: throws <code>[Bulk.ListBulkTemplatesError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.listBulkTemplates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkTemplatesResponse, Bulk.ListBulkTemplatesError&gt;</code>, with `result.value` of type <code>[BulkTemplatesResponse](src/models/bulk-templates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retryBulkCampaign(request: Bulk.RetryBulkCampaignRequest, options?: RequestOptions): ApiPromise&lt;BulkCampaignsRetryResponse, Bulk.RetryBulkCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets recipients in error back to pending so the campaign can be launched again.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.retryBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type BulkCampaignsRetryResponse
} catch (err) {
  // TODO: Handle 'err' of type Bulk.RetryBulkCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .retryBulkCampaign({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCampaignsRetryResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.retryBulkCampaign(request)`

- **OnSuccess**: <code>[BulkCampaignsRetryResponse](src/models/bulk-campaigns-retry-response.ts)</code>
- **OnError**: throws <code>[Bulk.RetryBulkCampaignError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.retryBulkCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCampaignsRetryResponse, Bulk.RetryBulkCampaignError&gt;</code>, with `result.value` of type <code>[BulkCampaignsRetryResponse](src/models/bulk-campaigns-retry-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBulkTemplate(request: Bulk.UpdateBulkTemplateRequest, options?: RequestOptions): ApiPromise&lt;BulkTemplatesResponse1, Bulk.UpdateBulkTemplateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulk.updateBulkTemplate({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type BulkTemplatesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Bulk.UpdateBulkTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulk
  .updateBulkTemplate({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkTemplatesResponse1
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
| <code>id</code> | <code>string</code> | Resource UUID |
| <code>body?</code> | <code>[BulkTemplatesRequest1](src/models/bulk-templates-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulk.updateBulkTemplate(request)`

- **OnSuccess**: <code>[BulkTemplatesResponse1](src/models/bulk-templates-response1.ts)</code>
- **OnError**: throws <code>[Bulk.UpdateBulkTemplateError](src/resources/bulk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulk.updateBulkTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkTemplatesResponse1, Bulk.UpdateBulkTemplateError&gt;</code>, with `result.value` of type <code>[BulkTemplatesResponse1](src/models/bulk-templates-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/resources/documents.ts)

<details>
<summary><code>deleteDocument(request: Documents.DeleteDocumentRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, Documents.DeleteDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a document. Only documents in `draft` status can be deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.deleteDocument({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.DeleteDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .deleteDocument({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.deleteDocument(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[Documents.DeleteDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.deleteDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, Documents.DeleteDocumentError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadDocument(request: Documents.DownloadDocumentRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Documents.DownloadDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the original PDF file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.downloadDocument({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Documents.DownloadDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .downloadDocument({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.downloadDocument(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Documents.DownloadDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.downloadDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Documents.DownloadDocumentError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocument(request: Documents.GetDocumentRequest, options?: RequestOptions): ApiPromise&lt;DocumentsResponse1, Documents.GetDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific document.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.getDocument({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type DocumentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Documents.GetDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .getDocument({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentsResponse1
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.getDocument(request)`

- **OnSuccess**: <code>[DocumentsResponse1](src/models/documents-response1.ts)</code>
- **OnError**: throws <code>[Documents.GetDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.getDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentsResponse1, Documents.GetDocumentError&gt;</code>, with `result.value` of type <code>[DocumentsResponse1](src/models/documents-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocuments(request?: Documents.ListDocumentsRequest, options?: RequestOptions): ApiPromise&lt;DocumentsResponse, Documents.ListDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of documents belonging to your organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.listDocuments();
  // TODO: Handle 'response' of type DocumentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.ListDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.listDocuments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentsResponse
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
| <code>status?</code> | <code>[StatusJuriSignDocumentsApi](src/models/status-juri-sign-documents-api.ts)</code> | Filter by document status |
| <code>search?</code> | <code>string</code> | Search by document title |
| <code>perPage?</code> | <code>number</code> | Results per page (default: 20, max: 100)<br>**Default**: 20 |
| <code>page?</code> | <code>number</code> | Page number<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.listDocuments(request)`

- **OnSuccess**: <code>[DocumentsResponse](src/models/documents-response.ts)</code>
- **OnError**: throws <code>[Documents.ListDocumentsError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.listDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentsResponse, Documents.ListDocumentsError&gt;</code>, with `result.value` of type <code>[DocumentsResponse](src/models/documents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadDocument(request: Documents.UploadDocumentRequest, options?: RequestOptions): ApiPromise&lt;DocumentsResponse1, Documents.UploadDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a PDF document. Maximum file size is 20 MB.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.uploadDocument({ file: new Uint8Array() });
  // TODO: Handle 'response' of type DocumentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Documents.UploadDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.uploadDocument({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentsResponse1
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
| <code>file</code> | <code>FileInput</code> | PDF file to upload (max 20 MB) |
| <code>title?</code> | <code>string</code> | Document title (defaults to filename if omitted) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.uploadDocument(request)`

- **OnSuccess**: <code>[DocumentsResponse1](src/models/documents-response1.ts)</code>
- **OnError**: throws <code>[Documents.UploadDocumentError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.uploadDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentsResponse1, Documents.UploadDocumentError&gt;</code>, with `result.value` of type <code>[DocumentsResponse1](src/models/documents-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PublicForms

> Source: [PublicForms](src/resources/public-forms.ts)

<details>
<summary><code>createPublicForm(request: PublicForms.CreatePublicFormRequest, options?: RequestOptions): ApiPromise&lt;PublicFormsResponse1, PublicForms.CreatePublicFormError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a shareable link backed by one of your sign request templates. Anyone opening the link fills in their details and becomes the signer of their own signature request, generated on the fly. The template MUST have exactly one signer and its own copy of the PDF.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicForms.createPublicForm({
    body: { name: "some example string", signRequestTemplateId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type PublicFormsResponse1
} catch (err) {
  // TODO: Handle 'err' of type PublicForms.CreatePublicFormError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publicForms
  .createPublicForm({
    body: { name: "some example string", signRequestTemplateId: "00000000-0000-0000-0000-000000000000" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicFormsResponse1
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
| <code>body</code> | <code>[PublicFormsRequest](src/models/public-forms-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publicForms.createPublicForm(request)`

- **OnSuccess**: <code>[PublicFormsResponse1](src/models/public-forms-response1.ts)</code>
- **OnError**: throws <code>[PublicForms.CreatePublicFormError](src/resources/public-forms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.publicForms.createPublicForm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicFormsResponse1, PublicForms.CreatePublicFormError&gt;</code>, with `result.value` of type <code>[PublicFormsResponse1](src/models/public-forms-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePublicForm(request: PublicForms.DeletePublicFormRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, PublicForms.DeletePublicFormError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicForms.deletePublicForm({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type PublicForms.DeletePublicFormError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publicForms
  .deletePublicForm({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publicForms.deletePublicForm(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[PublicForms.DeletePublicFormError](src/resources/public-forms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.publicForms.deletePublicForm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, PublicForms.DeletePublicFormError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPublicForm(request: PublicForms.GetPublicFormRequest, options?: RequestOptions): ApiPromise&lt;PublicFormsResponse1, PublicForms.GetPublicFormError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicForms.getPublicForm({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type PublicFormsResponse1
} catch (err) {
  // TODO: Handle 'err' of type PublicForms.GetPublicFormError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publicForms
  .getPublicForm({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicFormsResponse1
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publicForms.getPublicForm(request)`

- **OnSuccess**: <code>[PublicFormsResponse1](src/models/public-forms-response1.ts)</code>
- **OnError**: throws <code>[PublicForms.GetPublicFormError](src/resources/public-forms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.publicForms.getPublicForm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicFormsResponse1, PublicForms.GetPublicFormError&gt;</code>, with `result.value` of type <code>[PublicFormsResponse1](src/models/public-forms-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPublicForms(request?: PublicForms.ListPublicFormsRequest, options?: RequestOptions): ApiPromise&lt;PublicFormsResponse, PublicForms.ListPublicFormsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the shareable public forms (PowerForms) of your organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicForms.listPublicForms();
  // TODO: Handle 'response' of type PublicFormsResponse
} catch (err) {
  // TODO: Handle 'err' of type PublicForms.ListPublicFormsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publicForms.listPublicForms().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicFormsResponse
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
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publicForms.listPublicForms(request)`

- **OnSuccess**: <code>[PublicFormsResponse](src/models/public-forms-response.ts)</code>
- **OnError**: throws <code>[PublicForms.ListPublicFormsError](src/resources/public-forms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.publicForms.listPublicForms(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicFormsResponse, PublicForms.ListPublicFormsError&gt;</code>, with `result.value` of type <code>[PublicFormsResponse](src/models/public-forms-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rotatePublicFormToken(request: PublicForms.RotatePublicFormTokenRequest, options?: RequestOptions): ApiPromise&lt;PublicFormsRotateTokenResponse, PublicForms.RotatePublicFormTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new public token. The previous link stops working immediately — use this if a link leaked or was shared too widely.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicForms.rotatePublicFormToken({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PublicFormsRotateTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type PublicForms.RotatePublicFormTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publicForms
  .rotatePublicFormToken({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicFormsRotateTokenResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publicForms.rotatePublicFormToken(request)`

- **OnSuccess**: <code>[PublicFormsRotateTokenResponse](src/models/public-forms-rotate-token-response.ts)</code>
- **OnError**: throws <code>[PublicForms.RotatePublicFormTokenError](src/resources/public-forms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.publicForms.rotatePublicFormToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicFormsRotateTokenResponse, PublicForms.RotatePublicFormTokenError&gt;</code>, with `result.value` of type <code>[PublicFormsRotateTokenResponse](src/models/public-forms-rotate-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePublicForm(request: PublicForms.UpdatePublicFormRequest, options?: RequestOptions): ApiPromise&lt;PublicFormsResponse1, PublicForms.UpdatePublicFormError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename, pause/reactivate, change the expiry or the daily cap.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicForms.updatePublicForm({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type PublicFormsResponse1
} catch (err) {
  // TODO: Handle 'err' of type PublicForms.UpdatePublicFormError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publicForms
  .updatePublicForm({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicFormsResponse1
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
| <code>id</code> | <code>string</code> | Resource UUID |
| <code>body?</code> | <code>[PublicFormsRequest1](src/models/public-forms-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publicForms.updatePublicForm(request)`

- **OnSuccess**: <code>[PublicFormsResponse1](src/models/public-forms-response1.ts)</code>
- **OnError**: throws <code>[PublicForms.UpdatePublicFormError](src/resources/public-forms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.publicForms.updatePublicForm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicFormsResponse1, PublicForms.UpdatePublicFormError&gt;</code>, with `result.value` of type <code>[PublicFormsResponse1](src/models/public-forms-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SignRequests

> Source: [SignRequests](src/resources/sign-requests.ts)

<details>
<summary><code>cancelSignRequest(request: SignRequests.CancelSignRequestRequest, options?: RequestOptions): ApiPromise&lt;SignRequestsCancelResponse, SignRequests.CancelSignRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a pending signature request. Only requests in `pending` status can be cancelled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signRequests.cancelSignRequest({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type SignRequestsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type SignRequests.CancelSignRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signRequests
  .cancelSignRequest({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignRequestsCancelResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signRequests.cancelSignRequest(request)`

- **OnSuccess**: <code>[SignRequestsCancelResponse](src/models/sign-requests-cancel-response.ts)</code>
- **OnError**: throws <code>[SignRequests.CancelSignRequestError](src/resources/sign-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signRequests.cancelSignRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignRequestsCancelResponse, SignRequests.CancelSignRequestError&gt;</code>, with `result.value` of type <code>[SignRequestsCancelResponse](src/models/sign-requests-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSignRequest(request: SignRequests.CreateSignRequestRequest, options?: RequestOptions): ApiPromise&lt;SignRequestsResponse1, SignRequests.CreateSignRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new signature request with one or more signers. The request is created in `draft` status and must be sent explicitly via the send endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signRequests.createSignRequest({
    idempotencyKey: "order-4821",
    body: {
      documentId: "00000000-0000-0000-0000-000000000000",
      subject: "some example string",
      signingOrderType: SigningOrderType._0,
      expiryHours: 1,
      signers: [
        {
          prenom: "some example string",
          nom: "some example string",
          email: "user@example.com",
          otpChannel: OtpChannelJuriSignSignRequestsApi.Sms,
        },
      ],
    },
  });
  // TODO: Handle 'response' of type SignRequestsResponse1
} catch (err) {
  // TODO: Handle 'err' of type SignRequests.CreateSignRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signRequests
  .createSignRequest({
    idempotencyKey: "order-4821",
    body: {
      documentId: "00000000-0000-0000-0000-000000000000",
      subject: "some example string",
      signingOrderType: SigningOrderType._0,
      expiryHours: 1,
      signers: [
        {
          prenom: "some example string",
          nom: "some example string",
          email: "user@example.com",
          otpChannel: OtpChannelJuriSignSignRequestsApi.Sms,
        },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignRequestsResponse1
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
| <code>idempotencyKey?</code> | <code>string</code> | Optional. Send a unique key (for example your own order reference) to make this call safely repeatable. If the network drops after your request reaches us but before you get the response, replay the exact same call with the same key: you receive the original response — same body, same status, with an `Idempotent-Replayed: true` header — and no second signature request is created, so no second SMS is billed. Reusing a key with a DIFFERENT body returns 409: that is an integration bug, not a retry. Keys are scoped to your organization and honoured for 24 hours. Failed responses never consume a key. |
| <code>body</code> | <code>[CreateSignRequestInput](src/models/create-sign-request-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signRequests.createSignRequest(request)`

- **OnSuccess**: <code>[SignRequestsResponse1](src/models/sign-requests-response1.ts)</code>
- **OnError**: throws <code>[SignRequests.CreateSignRequestError](src/resources/sign-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signRequests.createSignRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignRequestsResponse1, SignRequests.CreateSignRequestError&gt;</code>, with `result.value` of type <code>[SignRequestsResponse1](src/models/sign-requests-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadProof(request: SignRequests.DownloadProofRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, SignRequests.DownloadProofError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the audit proof PDF, containing a detailed log of all signing actions with timestamps and IP addresses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signRequests.downloadProof({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type SignRequests.DownloadProofError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signRequests
  .downloadProof({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signRequests.downloadProof(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[SignRequests.DownloadProofError](src/resources/sign-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signRequests.downloadProof(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, SignRequests.DownloadProofError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadSignedPdf(request: SignRequests.DownloadSignedPdfRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, SignRequests.DownloadSignedPdfError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the signed PDF document. Only available after all signers have completed signing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signRequests.downloadSignedPdf({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type SignRequests.DownloadSignedPdfError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signRequests
  .downloadSignedPdf({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signRequests.downloadSignedPdf(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[SignRequests.DownloadSignedPdfError](src/resources/sign-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signRequests.downloadSignedPdf(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, SignRequests.DownloadSignedPdfError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignRequest(request: SignRequests.GetSignRequestRequest, options?: RequestOptions): ApiPromise&lt;SignRequestsResponse2, SignRequests.GetSignRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a signature request, including signers, signature zones, and download links.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signRequests.getSignRequest({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type SignRequestsResponse2
} catch (err) {
  // TODO: Handle 'err' of type SignRequests.GetSignRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signRequests
  .getSignRequest({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignRequestsResponse2
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signRequests.getSignRequest(request)`

- **OnSuccess**: <code>[SignRequestsResponse2](src/models/sign-requests-response2.ts)</code>
- **OnError**: throws <code>[SignRequests.GetSignRequestError](src/resources/sign-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signRequests.getSignRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignRequestsResponse2, SignRequests.GetSignRequestError&gt;</code>, with `result.value` of type <code>[SignRequestsResponse2](src/models/sign-requests-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSignRequests(request?: SignRequests.ListSignRequestsRequest, options?: RequestOptions): ApiPromise&lt;SignRequestsResponse, SignRequests.ListSignRequestsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of signature requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signRequests.listSignRequests();
  // TODO: Handle 'response' of type SignRequestsResponse
} catch (err) {
  // TODO: Handle 'err' of type SignRequests.ListSignRequestsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signRequests.listSignRequests().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignRequestsResponse
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
| <code>status?</code> | <code>[StatusJuriSignSignRequestsApi](src/models/status-juri-sign-sign-requests-api.ts)</code> | Filter by status |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signRequests.listSignRequests(request)`

- **OnSuccess**: <code>[SignRequestsResponse](src/models/sign-requests-response.ts)</code>
- **OnError**: throws <code>[SignRequests.ListSignRequestsError](src/resources/sign-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signRequests.listSignRequests(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignRequestsResponse, SignRequests.ListSignRequestsError&gt;</code>, with `result.value` of type <code>[SignRequestsResponse](src/models/sign-requests-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendSignRequest(request: SignRequests.SendSignRequestRequest, options?: RequestOptions): ApiPromise&lt;SignRequestsSendResponse, SignRequests.SendSignRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send the signature request to all signers. This changes the status from `draft` to `pending` and sends invitation emails.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signRequests.sendSignRequest({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type SignRequestsSendResponse
} catch (err) {
  // TODO: Handle 'err' of type SignRequests.SendSignRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signRequests
  .sendSignRequest({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignRequestsSendResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signRequests.sendSignRequest(request)`

- **OnSuccess**: <code>[SignRequestsSendResponse](src/models/sign-requests-send-response.ts)</code>
- **OnError**: throws <code>[SignRequests.SendSignRequestError](src/resources/sign-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signRequests.sendSignRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignRequestsSendResponse, SignRequests.SendSignRequestError&gt;</code>, with `result.value` of type <code>[SignRequestsSendResponse](src/models/sign-requests-send-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](src/resources/templates.ts)

<details>
<summary><code>createSignRequestFromTemplate(request: Templates.CreateSignRequestFromTemplateRequest, options?: RequestOptions): ApiPromise&lt;TemplatesSignRequestsResponse, Templates.CreateSignRequestFromTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a signature request from a template, reusing its signers, signature zones, and (if present) its own copy of the document. Subject, message, expiry and redirect_url can be overridden. If the template has no document of its own, `document_id` is required.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.createSignRequestFromTemplate({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TemplatesSignRequestsResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.CreateSignRequestFromTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .createSignRequestFromTemplate({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplatesSignRequestsResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |
| <code>body?</code> | <code>[TemplatesSignRequestsRequest](src/models/templates-sign-requests-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.createSignRequestFromTemplate(request)`

- **OnSuccess**: <code>[TemplatesSignRequestsResponse](src/models/templates-sign-requests-response.ts)</code>
- **OnError**: throws <code>[Templates.CreateSignRequestFromTemplateError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.createSignRequestFromTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplatesSignRequestsResponse, Templates.CreateSignRequestFromTemplateError&gt;</code>, with `result.value` of type <code>[TemplatesSignRequestsResponse](src/models/templates-sign-requests-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTemplate(request: Templates.DeleteTemplateRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, Templates.DeleteTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a template and its own copy of the PDF, if any.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.deleteTemplate({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.DeleteTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .deleteTemplate({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.deleteTemplate(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[Templates.DeleteTemplateError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.deleteTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, Templates.DeleteTemplateError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTemplate(request: Templates.GetTemplateRequest, options?: RequestOptions): ApiPromise&lt;TemplatesResponse1, Templates.GetTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a template, including signers and signature zones.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.getTemplate({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type TemplatesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Templates.GetTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .getTemplate({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplatesResponse1
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
| <code>id</code> | <code>string</code> | Resource UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.getTemplate(request)`

- **OnSuccess**: <code>[TemplatesResponse1](src/models/templates-response1.ts)</code>
- **OnError**: throws <code>[Templates.GetTemplateError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.getTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplatesResponse1, Templates.GetTemplateError&gt;</code>, with `result.value` of type <code>[TemplatesResponse1](src/models/templates-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTemplates(request?: Templates.ListTemplatesRequest, options?: RequestOptions): ApiPromise&lt;TemplatesResponse, Templates.ListTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve reusable sign request templates for your organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.listTemplates();
  // TODO: Handle 'response' of type TemplatesResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.ListTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates.listTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplatesResponse
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
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.listTemplates(request)`

- **OnSuccess**: <code>[TemplatesResponse](src/models/templates-response.ts)</code>
- **OnError**: throws <code>[Templates.ListTemplatesError](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.listTemplates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplatesResponse, Templates.ListTemplatesError&gt;</code>, with `result.value` of type <code>[TemplatesResponse](src/models/templates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhooksResponse1, Webhooks.CreateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a new webhook endpoint. The response includes the signing secret which is only shown once.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createWebhook({
    body: { url: "https://example.com", events: [Event.SignRequestSent] },
  });
  // TODO: Handle 'response' of type WebhooksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.CreateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .createWebhook({ body: { url: "https://example.com", events: [Event.SignRequestSent] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksResponse1
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
| <code>body</code> | <code>[WebhooksRequest](src/models/webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createWebhook(request)`

- **OnSuccess**: <code>[WebhooksResponse1](src/models/webhooks-response1.ts)</code>
- **OnError**: throws <code>[Webhooks.CreateWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksResponse1, Webhooks.CreateWebhookError&gt;</code>, with `result.value` of type <code>[WebhooksResponse1](src/models/webhooks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, Webhooks.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook endpoint and all its delivery logs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.deleteWebhook({ id: 1 });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.deleteWebhook({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
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
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteWebhook(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[Webhooks.DeleteWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, Webhooks.DeleteWebhookError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhookLogs(request: Webhooks.GetWebhookLogsRequest, options?: RequestOptions): ApiPromise&lt;WebhooksLogsResponse, Webhooks.GetWebhookLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

View delivery logs for a specific webhook endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhookLogs({ id: 1 });
  // TODO: Handle 'response' of type WebhooksLogsResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhookLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.getWebhookLogs({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksLogsResponse
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
| <code>id</code> | <code>number</code> | - |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhookLogs(request)`

- **OnSuccess**: <code>[WebhooksLogsResponse](src/models/webhooks-logs-response.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhookLogsError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhookLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksLogsResponse, Webhooks.GetWebhookLogsError&gt;</code>, with `result.value` of type <code>[WebhooksLogsResponse](src/models/webhooks-logs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(options?: RequestOptions): ApiPromise&lt;WebhooksResponse, Webhooks.ListWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all webhook endpoints for your organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhooks();
  // TODO: Handle 'response' of type WebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listWebhooks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhooks()`

- **OnSuccess**: <code>[WebhooksResponse](src/models/webhooks-response.ts)</code>
- **OnError**: throws <code>[Webhooks.ListWebhooksError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listWebhooks().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksResponse, Webhooks.ListWebhooksError&gt;</code>, with `result.value` of type <code>[WebhooksResponse](src/models/webhooks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>regenerateWebhookSecret(request: Webhooks.RegenerateWebhookSecretRequest, options?: RequestOptions): ApiPromise&lt;WebhooksRegenerateSecretResponse, Webhooks.RegenerateWebhookSecretError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new signing secret for the webhook endpoint. The old secret will no longer be valid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.regenerateWebhookSecret({ id: 1 });
  // TODO: Handle 'response' of type WebhooksRegenerateSecretResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.RegenerateWebhookSecretError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.regenerateWebhookSecret({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksRegenerateSecretResponse
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
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.regenerateWebhookSecret(request)`

- **OnSuccess**: <code>[WebhooksRegenerateSecretResponse](src/models/webhooks-regenerate-secret-response.ts)</code>
- **OnError**: throws <code>[Webhooks.RegenerateWebhookSecretError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.regenerateWebhookSecret(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksRegenerateSecretResponse, Webhooks.RegenerateWebhookSecretError&gt;</code>, with `result.value` of type <code>[WebhooksRegenerateSecretResponse](src/models/webhooks-regenerate-secret-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: Webhooks.UpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhooksResponse2, Webhooks.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook endpoint's URL, events, or active status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.updateWebhook({ id: 1 });
  // TODO: Handle 'response' of type WebhooksResponse2
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.updateWebhook({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksResponse2
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
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[WebhooksRequest1](src/models/webhooks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.updateWebhook(request)`

- **OnSuccess**: <code>[WebhooksResponse2](src/models/webhooks-response2.ts)</code>
- **OnError**: throws <code>[Webhooks.UpdateWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksResponse2, Webhooks.UpdateWebhookError&gt;</code>, with `result.value` of type <code>[WebhooksResponse2](src/models/webhooks-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[JuriSignError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

