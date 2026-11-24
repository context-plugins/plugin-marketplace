# Reference

> Source: [AudioscrapeClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>getMe(options?: RequestOptions): ApiPromise&lt;MeResponse, Account.GetMeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated user, their current plan + per-resource limits, the API key that authenticated the request (if any), and the effective dated API version. Use this as the first call in any integration to verify credentials and discover capabilities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getMe();
  // TODO: Handle 'response' of type MeResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.GetMeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getMe().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getMe()`

- **OnSuccess**: <code>[MeResponse](src/models/me-response.ts)</code>
- **OnError**: throws <code>[Account.GetMeError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.getMe().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MeResponse, Account.GetMeError&gt;</code>, with `result.value` of type <code>[MeResponse](src/models/me-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMeUsage(options?: RequestOptions): ApiPromise&lt;UsageResponse, Account.GetMeUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns this calendar month's usage counters (searches, semantic searches, data calls, keyword alerts) alongside the plan's configured limits. Use it to handle 429 responses proactively — check usage before a heavy burst and back off if you're close to a cap.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getMeUsage();
  // TODO: Handle 'response' of type UsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.GetMeUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getMeUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getMeUsage()`

- **OnSuccess**: <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: throws <code>[Account.GetMeUsageError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.getMeUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageResponse, Account.GetMeUsageError&gt;</code>, with `result.value` of type <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AgentRail

> Source: [AgentRail](src/resources/agent-rail.ts)

<details>
<summary><code>buyCredit(request: AgentRail.BuyCreditRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AgentRail.BuyCreditError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agentRail.buyCredit({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type AgentRail.BuyCreditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentRail.buyCredit({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[BuyCreditRequest](src/models/buy-credit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentRail.buyCredit(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AgentRail.BuyCreditError](src/resources/agent-rail.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentRail.buyCredit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AgentRail.BuyCreditError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditBalance(options?: RequestOptions): ApiPromise&lt;undefined, AgentRail.CreditBalanceError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agentRail.creditBalance();
} catch (err) {
  // TODO: Handle 'err' of type AgentRail.CreditBalanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentRail.creditBalance().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentRail.creditBalance()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AgentRail.CreditBalanceError](src/resources/agent-rail.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentRail.creditBalance().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AgentRail.CreditBalanceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>excerpt(request: AgentRail.ExcerptRequest, options?: RequestOptions): ApiPromise&lt;undefined, AgentRail.ExcerptError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agentRail.excerpt({ episodeId: 1, t: 1.5 });
} catch (err) {
  // TODO: Handle 'err' of type AgentRail.ExcerptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentRail.excerpt({ episodeId: 1, t: 1.5 }).asApiResult();
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
| <code>episodeId</code> | <code>number</code> | Recording id (from a search result). |
| <code>t</code> | <code>number</code> | Moment in seconds. |
| <code>seconds?</code> | <code>number</code> | Seconds after the moment, 10–180 (default 90). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentRail.excerpt(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AgentRail.ExcerptError](src/resources/agent-rail.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentRail.excerpt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AgentRail.ExcerptError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>manifest(options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agentRail.manifest();
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
const result = await client.agentRail.manifest().asApiResult();
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

**Direct**: `await client.agentRail.manifest()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.agentRail.manifest().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>overview(request: AgentRail.OverviewRequest, options?: RequestOptions): ApiPromise&lt;undefined, AgentRail.OverviewError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agentRail.overview({ episodeId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type AgentRail.OverviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentRail.overview({ episodeId: 1 }).asApiResult();
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
| <code>episodeId</code> | <code>number</code> | Recording id (from a search result). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentRail.overview(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AgentRail.OverviewError](src/resources/agent-rail.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentRail.overview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AgentRail.OverviewError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>search(request: AgentRail.SearchRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AgentRail.SearchError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agentRail.search({ body: { query: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type AgentRail.SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentRail.search({ body: { query: "some example string" } }).asApiResult();
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
| <code>scope?</code> | <code>string</code> | `podcasts`, or `government` (public meetings and court hearings).<br>Unset: the whole record. |
| <code>body</code> | <code>[AgentSearchRequest](src/models/agent-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentRail.search(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AgentRail.SearchError](src/resources/agent-rail.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentRail.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AgentRail.SearchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transcribe(request: AgentRail.TranscribeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AgentRail.TranscribeError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agentRail.transcribe({ body: { url: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type AgentRail.TranscribeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentRail.transcribe({ body: { url: "some example string" } }).asApiResult();
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
| <code>body</code> | <code>[AgentTranscribeRequest](src/models/agent-transcribe-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentRail.transcribe(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AgentRail.TranscribeError](src/resources/agent-rail.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentRail.transcribe(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AgentRail.TranscribeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transcriptionStatus(request: AgentRail.TranscriptionStatusRequest, options?: RequestOptions): ApiPromise&lt;undefined, AgentRail.TranscriptionStatusError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agentRail.transcriptionStatus({ jobId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type AgentRail.TranscriptionStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agentRail.transcriptionStatus({ jobId: 1 }).asApiResult();
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
| <code>jobId</code> | <code>number</code> | Job id from /api/agent/v1/transcribe |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agentRail.transcriptionStatus(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AgentRail.TranscriptionStatusError](src/resources/agent-rail.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agentRail.transcriptionStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AgentRail.TranscriptionStatusError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ApiKeys

> Source: [ApiKeys](src/resources/api-keys.ts)

<details>
<summary><code>apiKeyUsage(request: ApiKeys.ApiKeyUsageRequest, options?: RequestOptions): ApiPromise&lt;ApiKeyUsage, ApiKeys.ApiKeyUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns how many requests authenticated with this key over the trailing 30 days. Pair with `last_used` / `last_used_ip` from the list endpoint to audit a credential before revoking or rotating it.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeys.apiKeyUsage({ id: 1 });
  // TODO: Handle 'response' of type ApiKeyUsage
} catch (err) {
  // TODO: Handle 'err' of type ApiKeys.ApiKeyUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeys.apiKeyUsage({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKeyUsage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | API key ID (from the `id` field on create / list) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeys.apiKeyUsage(request)`

- **OnSuccess**: <code>[ApiKeyUsage](src/models/api-key-usage.ts)</code>
- **OnError**: throws <code>[ApiKeys.ApiKeyUsageError](src/resources/api-keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeys.apiKeyUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKeyUsage, ApiKeys.ApiKeyUsageError&gt;</code>, with `result.value` of type <code>[ApiKeyUsage](src/models/api-key-usage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createApiKey(request: ApiKeys.CreateApiKeyRequest, options?: RequestOptions): ApiPromise&lt;ApiKey, ApiKeys.CreateApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a new workspace-scoped API key. The full `key_value` is returned **only** in this response — Audioscrape stores a SHA-256 hash and the prefix only, so save the raw key immediately on the client side. If you lose it, rotate the key.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeys.createApiKey({ body: { keyName: "some example string" } });
  // TODO: Handle 'response' of type ApiKey
} catch (err) {
  // TODO: Handle 'err' of type ApiKeys.CreateApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeys.createApiKey({ body: { keyName: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKey
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateApiKey](src/models/create-api-key.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeys.createApiKey(request)`

- **OnSuccess**: <code>[ApiKey](src/models/api-key.ts)</code>
- **OnError**: throws <code>[ApiKeys.CreateApiKeyError](src/resources/api-keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeys.createApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKey, ApiKeys.CreateApiKeyError&gt;</code>, with `result.value` of type <code>[ApiKey](src/models/api-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiKey(request: ApiKeys.DeleteApiKeyRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiKeys.DeleteApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes the key immediately. Any in-flight requests using the revoked key will fail with 401 on their next call.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.apiKeys.deleteApiKey({ id: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ApiKeys.DeleteApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeys.deleteApiKey({ id: 1 }).asApiResult();
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
| <code>id</code> | <code>number</code> | API key ID (from the `id` field on create / list) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeys.deleteApiKey(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiKeys.DeleteApiKeyError](src/resources/api-keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeys.deleteApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiKeys.DeleteApiKeyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listApiKeys(options?: RequestOptions): ApiPromise&lt;ApiKey[], ApiKeys.ListApiKeysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all API keys belonging to the calling user. `key_value` is `null` on every entry — only the display `key_prefix` is recoverable after creation. To get a fresh raw value for a key, rotate it: `POST /api/keys/{id}/rotate`.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeys.listApiKeys();
  // TODO: Handle 'response' of type ApiKey[]
} catch (err) {
  // TODO: Handle 'err' of type ApiKeys.ListApiKeysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeys.listApiKeys().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKey[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeys.listApiKeys()`

- **OnSuccess**: <code>[ApiKey](src/models/api-key.ts)[]</code>
- **OnError**: throws <code>[ApiKeys.ListApiKeysError](src/resources/api-keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeys.listApiKeys().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKey[], ApiKeys.ListApiKeysError&gt;</code>, with `result.value` of type <code>[ApiKey](src/models/api-key.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rotateApiKey(request: ApiKeys.RotateApiKeyRequest, options?: RequestOptions): ApiPromise&lt;ApiKey, ApiKeys.RotateApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Atomically replaces the key's secret (GH#485): the key keeps its id, name, workspace pin and expiry; the old secret stops authenticating the moment this call returns; the new secret is in `key_value` — shown only in this response. Prefer this over delete-and-recreate: the key's identity survives and there is no window with zero valid credentials. `last_used` resets to `null` because the new secret has never been used.

Accepts either a session cookie or an existing API key as auth. A key can rotate itself.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeys.rotateApiKey({ id: 1 });
  // TODO: Handle 'response' of type ApiKey
} catch (err) {
  // TODO: Handle 'err' of type ApiKeys.RotateApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeys.rotateApiKey({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKey
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | API key ID (from the `id` field on create / list) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeys.rotateApiKey(request)`

- **OnSuccess**: <code>[ApiKey](src/models/api-key.ts)</code>
- **OnError**: throws <code>[ApiKeys.RotateApiKeyError](src/resources/api-keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeys.rotateApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKey, ApiKeys.RotateApiKeyError&gt;</code>, with `result.value` of type <code>[ApiKey](src/models/api-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Charts

> Source: [Charts](src/resources/charts.ts)

<details>
<summary><code>getChartPodcasts(request?: Charts.GetChartPodcastsRequest, options?: RequestOptions): ApiPromise&lt;ChartPodcastEntry[], Charts.GetChartPodcastsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest Apple Podcasts / Spotify podcast chart for the given country. If `platform` is omitted, results from both platforms are interleaved. Audioscrape ingests new chart snapshots daily.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.charts.getChartPodcasts();
  // TODO: Handle 'response' of type ChartPodcastEntry[]
} catch (err) {
  // TODO: Handle 'err' of type Charts.GetChartPodcastsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.charts.getChartPodcasts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChartPodcastEntry[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country?</code> | <code>string</code> | ISO 3166-1 alpha-2 country code (default `us`) |
| <code>platform?</code> | <code>string</code> | `apple` or `spotify` (default: both) |
| <code>limit?</code> | <code>number</code> | Max results (default 50, max 200) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.charts.getChartPodcasts(request)`

- **OnSuccess**: <code>[ChartPodcastEntry](src/models/chart-podcast-entry.ts)[]</code>
- **OnError**: throws <code>[Charts.GetChartPodcastsError](src/resources/charts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.charts.getChartPodcasts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChartPodcastEntry[], Charts.GetChartPodcastsError&gt;</code>, with `result.value` of type <code>[ChartPodcastEntry](src/models/chart-podcast-entry.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataExport

> Source: [DataExport](src/resources/data-export.ts)

<details>
<summary><code>createWorkspaceExport(request: DataExport.CreateWorkspaceExportRequest, options?: RequestOptions): ApiPromise&lt;CreateExportJobResponse, DataExport.CreateWorkspaceExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an asynchronous job to package the workspace's audio files,
transcripts, items, and metadata into a single downloadable archive.
Only workspace `owner` or `admin` members may call this endpoint.

At most one job per workspace can be in `queued` or `running` status at
any time; further requests return `429` until the active job finishes.
Poll `GET /api/workspaces/{workspace}/export/{job_id}` for status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataExport.createWorkspaceExport({ workspace: 1 });
  // TODO: Handle 'response' of type CreateExportJobResponse
} catch (err) {
  // TODO: Handle 'err' of type DataExport.CreateWorkspaceExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataExport.createWorkspaceExport({ workspace: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateExportJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>number</code> | Workspace ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataExport.createWorkspaceExport(request)`

- **OnSuccess**: <code>[CreateExportJobResponse](src/models/create-export-job-response.ts)</code>
- **OnError**: throws <code>[DataExport.CreateWorkspaceExportError](src/resources/data-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataExport.createWorkspaceExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateExportJobResponse, DataExport.CreateWorkspaceExportError&gt;</code>, with `result.value` of type <code>[CreateExportJobResponse](src/models/create-export-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspaceExport(request: DataExport.GetWorkspaceExportRequest, options?: RequestOptions): ApiPromise&lt;ExportJobStatus, DataExport.GetWorkspaceExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current lifecycle state of an export job. When `status` is
`completed`, `download_url` is a signed URL valid for 15 minutes (until
`download_expires_at`); each call signs a fresh one. A finished export
stays downloadable for 7 days, after which `status` reads `expired`.

Caller must be a member of the workspace (any role).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataExport.getWorkspaceExport({ workspace: 1, jobId: 1 });
  // TODO: Handle 'response' of type ExportJobStatus
} catch (err) {
  // TODO: Handle 'err' of type DataExport.GetWorkspaceExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataExport.getWorkspaceExport({ workspace: 1, jobId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExportJobStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>number</code> | Workspace ID |
| <code>jobId</code> | <code>number</code> | Export job ID returned by POST /api/workspaces/{workspace}/export |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataExport.getWorkspaceExport(request)`

- **OnSuccess**: <code>[ExportJobStatus](src/models/export-job-status.ts)</code>
- **OnError**: throws <code>[DataExport.GetWorkspaceExportError](src/resources/data-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataExport.getWorkspaceExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExportJobStatus, DataExport.GetWorkspaceExportError&gt;</code>, with `result.value` of type <code>[ExportJobStatus](src/models/export-job-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Episodes

> Source: [Episodes](src/resources/episodes.ts)

<details>
<summary><code>getEpisodeTranscript(request: Episodes.GetEpisodeTranscriptRequest, options?: RequestOptions): ApiPromise&lt;Transcript, Episodes.GetEpisodeTranscriptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the transcript on its own (segments + speaker list). Equivalent to the `transcript` field on `GET /api/episodes/{id}?include=transcript`. Use this endpoint when you don't need the metadata envelope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getEpisodeTranscript({ episodeId: "some example string" });
  // TODO: Handle 'response' of type Transcript
} catch (err) {
  // TODO: Handle 'err' of type Episodes.GetEpisodeTranscriptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.getEpisodeTranscript({ episodeId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Transcript
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>episodeId</code> | <code>string</code> | Numeric episode ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.getEpisodeTranscript(request)`

- **OnSuccess**: <code>[Transcript](src/models/transcript.ts)</code>
- **OnError**: throws <code>[Episodes.GetEpisodeTranscriptError](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.getEpisodeTranscript(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Transcript, Episodes.GetEpisodeTranscriptError&gt;</code>, with `result.value` of type <code>[Transcript](src/models/transcript.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPublicEpisode(request: Episodes.GetPublicEpisodeRequest, options?: RequestOptions): ApiPromise&lt;EpisodeDetail, Episodes.GetPublicEpisodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the episode + its parent podcast. Heavy fields are opt-in via `?include=` — pass `transcript`, `entities`, or both to load them in the same response. Useful when you want details without paying the cost of fetching a 500KB+ transcript by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getPublicEpisode({ episodeId: "some example string" });
  // TODO: Handle 'response' of type EpisodeDetail
} catch (err) {
  // TODO: Handle 'err' of type Episodes.GetPublicEpisodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.getPublicEpisode({ episodeId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpisodeDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>episodeId</code> | <code>string</code> | Numeric episode ID |
| <code>include?</code> | <code>string</code> | Comma-separated optional fields: `transcript`, `entities`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.getPublicEpisode(request)`

- **OnSuccess**: <code>[EpisodeDetail](src/models/episode-detail.ts)</code>
- **OnError**: throws <code>[Episodes.GetPublicEpisodeError](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.getPublicEpisode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpisodeDetail, Episodes.GetPublicEpisodeError&gt;</code>, with `result.value` of type <code>[EpisodeDetail](src/models/episode-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRecentEpisodesV1(request?: Episodes.ListRecentEpisodesV1Request, options?: RequestOptions): ApiPromise&lt;EpisodeList, Episodes.ListRecentEpisodesV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the most recently published episodes across all podcasts. Convenience alias for items where `source_type = 'podcast_episode'` — for multi-format integrations, prefer `/api/items`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.listRecentEpisodesV1();
  // TODO: Handle 'response' of type EpisodeList
} catch (err) {
  // TODO: Handle 'err' of type Episodes.ListRecentEpisodesV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.listRecentEpisodesV1().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpisodeList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Max results (default 20, max 100) |
| <code>offset?</code> | <code>number</code> | Result offset for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.listRecentEpisodesV1(request)`

- **OnSuccess**: <code>[EpisodeList](src/models/episode-list.ts)</code>
- **OnError**: throws <code>[Episodes.ListRecentEpisodesV1Error](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.listRecentEpisodesV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpisodeList, Episodes.ListRecentEpisodesV1Error&gt;</code>, with `result.value` of type <code>[EpisodeList](src/models/episode-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](src/resources/items.ts)

<details>
<summary><code>getItem(request: Items.GetItemRequest, options?: RequestOptions): ApiPromise&lt;EpisodeDetail, Items.GetItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one item — podcast episode, upload, or any other source type. Heavy fields (transcript, entities) are opt-in via `?include=`. Equivalent to `GET /api/episodes/{id}` for podcast episodes, but works uniformly across all content types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.getItem({ itemId: "some example string" });
  // TODO: Handle 'response' of type EpisodeDetail
} catch (err) {
  // TODO: Handle 'err' of type Items.GetItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items.getItem({ itemId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpisodeDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>itemId</code> | <code>string</code> | Numeric item ID (works for any source_type) |
| <code>include?</code> | <code>string</code> | Comma-separated optional fields: `transcript`, `entities`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.getItem(request)`

- **OnSuccess**: <code>[EpisodeDetail](src/models/episode-detail.ts)</code>
- **OnError**: throws <code>[Items.GetItemError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.getItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpisodeDetail, Items.GetItemError&gt;</code>, with `result.value` of type <code>[EpisodeDetail](src/models/episode-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getItemTranscript(request: Items.GetItemTranscriptRequest, options?: RequestOptions): ApiPromise&lt;Transcript, Items.GetItemTranscriptError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the transcript on its own — segments + speaker list — for any item, regardless of source type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.getItemTranscript({ itemId: "some example string" });
  // TODO: Handle 'response' of type Transcript
} catch (err) {
  // TODO: Handle 'err' of type Items.GetItemTranscriptError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items.getItemTranscript({ itemId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Transcript
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>itemId</code> | <code>string</code> | Numeric item ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.getItemTranscript(request)`

- **OnSuccess**: <code>[Transcript](src/models/transcript.ts)</code>
- **OnError**: throws <code>[Items.GetItemTranscriptError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.getItemTranscript(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Transcript, Items.GetItemTranscriptError&gt;</code>, with `result.value` of type <code>[Transcript](src/models/transcript.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listItems(request?: Items.ListItemsRequest, options?: RequestOptions): ApiPromise&lt;ItemList, Items.ListItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Universal listing across content types — podcast episodes, uploads, and future formats. Filter by `source_type`, `dataset_id`, or `library` (slug). Results are newest-first. Use this in place of `/api/episodes` when your integration needs to work with multiple content types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.listItems();
  // TODO: Handle 'response' of type ItemList
} catch (err) {
  // TODO: Handle 'err' of type Items.ListItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items.listItems().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourceType?</code> | <code>string</code> | Filter by source type (`podcast_episode`, `upload`, `youtube`, ...). Omit for all types. |
| <code>datasetId?</code> | <code>number</code> | Restrict to items in a specific dataset |
| <code>library?</code> | <code>string</code> | Restrict to items in a specific library (by slug) |
| <code>limit?</code> | <code>number</code> | Max results (default 20, max 100) |
| <code>offset?</code> | <code>number</code> | Result offset for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.listItems(request)`

- **OnSuccess**: <code>[ItemList](src/models/item-list.ts)</code>
- **OnError**: throws <code>[Items.ListItemsError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.listItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemList, Items.ListItemsError&gt;</code>, with `result.value` of type <code>[ItemList](src/models/item-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadItemExternal(request: Items.UploadItemExternalRequest, options?: RequestOptions): ApiPromise&lt;UploadResponse, Items.UploadItemExternalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Two intake modes:
• `Content-Type: multipart/form-data` — form fields `audio` (file), optional `title`, `description`
• `Content-Type: application/json` — `{ "audio_url": "https://...", "title": "...", "description": "..." }`

JSON mode is the natural fit when the audio is already hosted (S3 presigned URL, CDN, your own server).
Multipart is the natural fit for client-side files (browser uploads, scripts streaming local files).
Both modes converge on the same storage + transcription pipeline; the resulting item is identical.
Transcription minutes consumed count against your plan's monthly quota (see `/api/me/usage`).
After upload, fetch full metadata at `GET /api/items/{item_id}` once transcription completes.

## Constraints

• **File size:** Free tier is hard-capped at **400 MB** per audio upload regardless of dataset config (**1 GB** for video and for containers intake re-wraps — amr, 3gp, wma, aiff, caf, mpeg — since only the extracted audio is kept). Paid plans honour the dataset's `max_file_size_mb` (default 500 MB). Exceeding the cap returns `413 Payload Too Large`; JSON-mode `audio_url` is fetched under the same cap. (The MCP connector's `transcribe_audio` link path and the web paste-a-link import fetch in the pipeline without a byte cap.)
• **URL-fetch safety (JSON mode):** `audio_url` must use `https://`. URLs that resolve to private, link-local, loopback, or otherwise internal IP ranges are rejected (SSRF guard) with `422 Unprocessable Entity`.
• **Dataset configuration:** The target dataset must have `content_type = 'uploads'`. Datasets backed by RSS feeds or other source types return `409 Conflict`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.uploadItemExternal({
    id: 1,
    body: { audioUrl: "some example string" },
  });
  // TODO: Handle 'response' of type UploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Items.UploadItemExternalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items
  .uploadItemExternal({ id: 1, body: { audioUrl: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric dataset ID. Caller must be a member of the dataset's parent library. |
| <code>body</code> | <code>[UploadFromUrl](src/models/upload-from-url.ts)</code> | **This endpoint accepts TWO content types — pick one based on where the audio lives:**<br><br>1. **`application/json`** (documented schema below) — body shape `{ "audio_url": "https://...", "title": "...", "description": "..." }`. Use this when the audio is already hosted at a public HTTPS URL.<br><br>2. **`multipart/form-data`** (NOT shown in the schema above — utoipa can only render one content type per operation, but the server accepts both). Send a multipart body with these parts: `audio` (the audio file, required), `title` (text, optional), `description` (text, optional). Use this for direct file uploads from a browser or local script.<br><br>Both content types hit the same handler, write to the same storage, and produce the same `item_id`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.uploadItemExternal(request)`

- **OnSuccess**: <code>[UploadResponse](src/models/upload-response.ts)</code>
- **OnError**: throws <code>[Items.UploadItemExternalError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.uploadItemExternal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadResponse, Items.UploadItemExternalError&gt;</code>, with `result.value` of type <code>[UploadResponse](src/models/upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## KnowledgeGraph

> Source: [KnowledgeGraph](src/resources/knowledge-graph.ts)

<details>
<summary><code>getEntity(request: KnowledgeGraph.GetEntityRequest, options?: RequestOptions): ApiPromise&lt;EntityDetail, KnowledgeGraph.GetEntityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an entity (person, organisation, place, etc.) plus the episodes where it's most mentioned. Useful for building topic-specific feeds: pin to an entity, watch which episodes mention it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeGraph.getEntity({ entitySlug: "some example string" });
  // TODO: Handle 'response' of type EntityDetail
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeGraph.GetEntityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeGraph.getEntity({ entitySlug: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entitySlug</code> | <code>string</code> | URL slug from entity search results |
| <code>datasetId?</code> | <code>number</code> | Only count/list episodes from this dataset. The dataset must be in your visible scope; otherwise 404. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeGraph.getEntity(request)`

- **OnSuccess**: <code>[EntityDetail](src/models/entity-detail.ts)</code>
- **OnError**: throws <code>[KnowledgeGraph.GetEntityError](src/resources/knowledge-graph.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeGraph.getEntity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityDetail, KnowledgeGraph.GetEntityError&gt;</code>, with `result.value` of type <code>[EntityDetail](src/models/entity-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRealTrending(options?: RequestOptions): ApiPromise&lt;TrendingResponse, KnowledgeGraph.GetRealTrendingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns what's trending across Audioscrape in the last 7 days — most-searched queries and most-mentioned entities. Computed from anonymised search logs and live entity-mention counts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeGraph.getRealTrending();
  // TODO: Handle 'response' of type TrendingResponse
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeGraph.GetRealTrendingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeGraph.getRealTrending().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrendingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeGraph.getRealTrending()`

- **OnSuccess**: <code>[TrendingResponse](src/models/trending-response.ts)</code>
- **OnError**: throws <code>[KnowledgeGraph.GetRealTrendingError](src/resources/knowledge-graph.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeGraph.getRealTrending().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrendingResponse, KnowledgeGraph.GetRealTrendingError&gt;</code>, with `result.value` of type <code>[TrendingResponse](src/models/trending-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchEntities(request?: KnowledgeGraph.SearchEntitiesRequest, options?: RequestOptions): ApiPromise&lt;EntitySearchResponse, KnowledgeGraph.SearchEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the knowledge-graph index for entities (people, organisations, places, topics, products) extracted from podcast content. Results are sorted by total mention count across the corpus.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.knowledgeGraph.searchEntities();
  // TODO: Handle 'response' of type EntitySearchResponse
} catch (err) {
  // TODO: Handle 'err' of type KnowledgeGraph.SearchEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.knowledgeGraph.searchEntities().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitySearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Name prefix to search for |
| <code>type?</code> | <code>string</code> | Filter by entity type (e.g. `person`, `organization`, `place`) |
| <code>limit?</code> | <code>number</code> | Max results (default 20, max 50) |
| <code>datasetId?</code> | <code>number</code> | Only entities mentioned in this dataset. The dataset must be in your visible scope (public, or in a workspace you belong to); otherwise 404. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.knowledgeGraph.searchEntities(request)`

- **OnSuccess**: <code>[EntitySearchResponse](src/models/entity-search-response.ts)</code>
- **OnError**: throws <code>[KnowledgeGraph.SearchEntitiesError](src/resources/knowledge-graph.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.knowledgeGraph.searchEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitySearchResponse, KnowledgeGraph.SearchEntitiesError&gt;</code>, with `result.value` of type <code>[EntitySearchResponse](src/models/entity-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Libraries

> Source: [Libraries](src/resources/libraries.ts)

<details>
<summary><code>getDataset(request: Libraries.GetDatasetRequest, options?: RequestOptions): ApiPromise&lt;DatasetDetail, Libraries.GetDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a dataset + a reference to its parent library, in a single response. Saves a round-trip when you have a dataset ID from a search result and need its context.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.libraries.getDataset({ id: 1 });
  // TODO: Handle 'response' of type DatasetDetail
} catch (err) {
  // TODO: Handle 'err' of type Libraries.GetDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.libraries.getDataset({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatasetDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric dataset ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.libraries.getDataset(request)`

- **OnSuccess**: <code>[DatasetDetail](src/models/dataset-detail.ts)</code>
- **OnError**: throws <code>[Libraries.GetDatasetError](src/resources/libraries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.libraries.getDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatasetDetail, Libraries.GetDatasetError&gt;</code>, with `result.value` of type <code>[DatasetDetail](src/models/dataset-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLibrary(request: Libraries.GetLibraryRequest, options?: RequestOptions): ApiPromise&lt;LibraryDetail, Libraries.GetLibraryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one library + the datasets the calling user can see. Public datasets are always returned; workspace-scoped datasets are returned only to members.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.libraries.getLibrary({ slug: "some example string" });
  // TODO: Handle 'response' of type LibraryDetail
} catch (err) {
  // TODO: Handle 'err' of type Libraries.GetLibraryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.libraries.getLibrary({ slug: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LibraryDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | Library slug (e.g. `audioscrape`) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.libraries.getLibrary(request)`

- **OnSuccess**: <code>[LibraryDetail](src/models/library-detail.ts)</code>
- **OnError**: throws <code>[Libraries.GetLibraryError](src/resources/libraries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.libraries.getLibrary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LibraryDetail, Libraries.GetLibraryError&gt;</code>, with `result.value` of type <code>[LibraryDetail](src/models/library-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLibraries(options?: RequestOptions): ApiPromise&lt;LibraryList, Libraries.ListLibrariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every public library on Audioscrape, ordered by subscriber count. The `is_subscribed` field on each entry tells you whether the calling user is already a member.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.libraries.listLibraries();
  // TODO: Handle 'response' of type LibraryList
} catch (err) {
  // TODO: Handle 'err' of type Libraries.ListLibrariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.libraries.listLibraries().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LibraryList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.libraries.listLibraries()`

- **OnSuccess**: <code>[LibraryList](src/models/library-list.ts)</code>
- **OnError**: throws <code>[Libraries.ListLibrariesError](src/resources/libraries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.libraries.listLibraries().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LibraryList, Libraries.ListLibrariesError&gt;</code>, with `result.value` of type <code>[LibraryList](src/models/library-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Persons

> Source: [Persons](src/resources/persons.ts)

<details>
<summary><code>getPersonV1(request: Persons.GetPersonV1Request, options?: RequestOptions): ApiPromise&lt;PersonDetail, Persons.GetPersonV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a person + up to 20 recent episode appearances where this person is attributed as a speaker.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.persons.getPersonV1({ personSlug: "some example string" });
  // TODO: Handle 'response' of type PersonDetail
} catch (err) {
  // TODO: Handle 'err' of type Persons.GetPersonV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.persons.getPersonV1({ personSlug: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PersonDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>personSlug</code> | <code>string</code> | URL slug from a person search result |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.persons.getPersonV1(request)`

- **OnSuccess**: <code>[PersonDetail](src/models/person-detail.ts)</code>
- **OnError**: throws <code>[Persons.GetPersonV1Error](src/resources/persons.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.persons.getPersonV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PersonDetail, Persons.GetPersonV1Error&gt;</code>, with `result.value` of type <code>[PersonDetail](src/models/person-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPersonsV1(request?: Persons.SearchPersonsV1Request, options?: RequestOptions): ApiPromise&lt;PersonList, Persons.SearchPersonsV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the persons index by name. Persons are speakers identified across podcast transcripts — every speaker who's been attributed to at least one segment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.persons.searchPersonsV1();
  // TODO: Handle 'response' of type PersonList
} catch (err) {
  // TODO: Handle 'err' of type Persons.SearchPersonsV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.persons.searchPersonsV1().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PersonList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Name substring (case-insensitive) |
| <code>limit?</code> | <code>number</code> | Max results (default 20, max 100) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.persons.searchPersonsV1(request)`

- **OnSuccess**: <code>[PersonList](src/models/person-list.ts)</code>
- **OnError**: throws <code>[Persons.SearchPersonsV1Error](src/resources/persons.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.persons.searchPersonsV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PersonList, Persons.SearchPersonsV1Error&gt;</code>, with `result.value` of type <code>[PersonList](src/models/person-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Podcasts

> Source: [Podcasts](src/resources/podcasts.ts)

<details>
<summary><code>getPodcastRankingHistory(request: Podcasts.GetPodcastRankingHistoryRequest, options?: RequestOptions): ApiPromise&lt;PodcastRankingHistoryEntry[], Podcasts.GetPodcastRankingHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the historical chart positions for a single podcast across countries and platforms, most recent first. Useful for tracking a show's performance trajectory over time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.podcasts.getPodcastRankingHistory({ podcastId: "some example string" });
  // TODO: Handle 'response' of type PodcastRankingHistoryEntry[]
} catch (err) {
  // TODO: Handle 'err' of type Podcasts.GetPodcastRankingHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.podcasts
  .getPodcastRankingHistory({ podcastId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PodcastRankingHistoryEntry[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>podcastId</code> | <code>string</code> | Numeric podcast ID OR URL slug |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.podcasts.getPodcastRankingHistory(request)`

- **OnSuccess**: <code>[PodcastRankingHistoryEntry](src/models/podcast-ranking-history-entry.ts)[]</code>
- **OnError**: throws <code>[Podcasts.GetPodcastRankingHistoryError](src/resources/podcasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.podcasts.getPodcastRankingHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PodcastRankingHistoryEntry[], Podcasts.GetPodcastRankingHistoryError&gt;</code>, with `result.value` of type <code>[PodcastRankingHistoryEntry](src/models/podcast-ranking-history-entry.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPublicPodcast(request: Podcasts.GetPublicPodcastRequest, options?: RequestOptions): ApiPromise&lt;PodcastDetail, Podcasts.GetPublicPodcastError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns podcast metadata + up to 20 most recent episodes. The path parameter accepts either a numeric ID or a URL slug, so links you share by slug also work for API calls.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.podcasts.getPublicPodcast({ podcastId: "some example string" });
  // TODO: Handle 'response' of type PodcastDetail
} catch (err) {
  // TODO: Handle 'err' of type Podcasts.GetPublicPodcastError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.podcasts.getPublicPodcast({ podcastId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PodcastDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>podcastId</code> | <code>string</code> | Numeric podcast ID OR URL slug (e.g. `1234` or `supply-chain-today`) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.podcasts.getPublicPodcast(request)`

- **OnSuccess**: <code>[PodcastDetail](src/models/podcast-detail.ts)</code>
- **OnError**: throws <code>[Podcasts.GetPublicPodcastError](src/resources/podcasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.podcasts.getPublicPodcast(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PodcastDetail, Podcasts.GetPublicPodcastError&gt;</code>, with `result.value` of type <code>[PodcastDetail](src/models/podcast-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPodcastEpisodesV1(request: Podcasts.ListPodcastEpisodesV1Request, options?: RequestOptions): ApiPromise&lt;EpisodeList, Podcasts.ListPodcastEpisodesV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns episodes belonging to a single podcast, newest first. Path parameter accepts either a numeric ID or a URL slug.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.podcasts.listPodcastEpisodesV1({ podcastId: "some example string" });
  // TODO: Handle 'response' of type EpisodeList
} catch (err) {
  // TODO: Handle 'err' of type Podcasts.ListPodcastEpisodesV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.podcasts
  .listPodcastEpisodesV1({ podcastId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpisodeList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>podcastId</code> | <code>string</code> | Numeric podcast ID OR URL slug |
| <code>limit?</code> | <code>number</code> | Max results (default 20, max 100) |
| <code>offset?</code> | <code>number</code> | Result offset for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.podcasts.listPodcastEpisodesV1(request)`

- **OnSuccess**: <code>[EpisodeList](src/models/episode-list.ts)</code>
- **OnError**: throws <code>[Podcasts.ListPodcastEpisodesV1Error](src/resources/podcasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.podcasts.listPodcastEpisodesV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpisodeList, Podcasts.ListPodcastEpisodesV1Error&gt;</code>, with `result.value` of type <code>[EpisodeList](src/models/episode-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPodcastsV1(request?: Podcasts.SearchPodcastsV1Request, options?: RequestOptions): ApiPromise&lt;PodcastList, Podcasts.SearchPodcastsV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists podcasts, optionally filtered by title substring or language. Results are ordered by episode count (most prolific first), then alphabetically. Convenience alias for items where `source_type = 'podcast_episode'` — for multi-format integrations, prefer `/api/items`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.podcasts.searchPodcastsV1();
  // TODO: Handle 'response' of type PodcastList
} catch (err) {
  // TODO: Handle 'err' of type Podcasts.SearchPodcastsV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.podcasts.searchPodcastsV1().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PodcastList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Title substring (case-insensitive) |
| <code>language?</code> | <code>string</code> | ISO 639-1 language filter (e.g. `en`, `de`) |
| <code>limit?</code> | <code>number</code> | Max results (default 20, max 100) |
| <code>offset?</code> | <code>number</code> | Result offset for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.podcasts.searchPodcastsV1(request)`

- **OnSuccess**: <code>[PodcastList](src/models/podcast-list.ts)</code>
- **OnError**: throws <code>[Podcasts.SearchPodcastsV1Error](src/resources/podcasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.podcasts.searchPodcastsV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PodcastList, Podcasts.SearchPodcastsV1Error&gt;</code>, with `result.value` of type <code>[PodcastList](src/models/podcast-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>searchApiV1(request: Search.SearchApiV1Request, options?: RequestOptions): ApiPromise&lt;SearchResponse, Search.SearchApiV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the audio corpus and returns segment-level results with timestamps, highlights, and the parent episode + podcast.
The default `search_type` of `hybrid` combines keyword scoring with semantic vector matching; use `text` for boolean queries
and quoted phrases, `semantic` for natural-language questions. Filter by podcast, speaker, or publish-date range via the
`filters` object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchApiV1({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchApiV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchApiV1({ body: { query: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest](src/models/search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchApiV1(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: throws <code>[Search.SearchApiV1Error](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchApiV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse, Search.SearchApiV1Error&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## System

> Source: [System](src/resources/system.ts)

<details>
<summary><code>getHealthOpenapi(options?: RequestOptions): ApiPromise&lt;HealthResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns `200 OK` with a small JSON payload as long as the API is responding. Useful as a liveness probe; does not check downstream dependencies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.system.getHealthOpenapi();
  // TODO: Handle 'response' of type HealthResponse
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
const result = await client.system.getHealthOpenapi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HealthResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.system.getHealthOpenapi()`

- **OnSuccess**: <code>[HealthResponse](src/models/health-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.system.getHealthOpenapi().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HealthResponse, ApiError&gt;</code>, with `result.value` of type <code>[HealthResponse](src/models/health-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/resources/workspaces.ts)

<details>
<summary><code>getWorkspace(request: Workspaces.GetWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceDetail, Workspaces.GetWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one of your workspaces + ALL of its datasets regardless of visibility — including private datasets that never appear under `/api/libraries`. `{workspace}` accepts a slug or a numeric ID. Members only: a workspace you don't belong to returns 404.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.getWorkspace({ workspace: "some example string" });
  // TODO: Handle 'response' of type WorkspaceDetail
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.GetWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.getWorkspace({ workspace: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>string</code> | Workspace slug (e.g. `audioscrape`) or numeric workspace ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.getWorkspace(request)`

- **OnSuccess**: <code>[WorkspaceDetail](src/models/workspace-detail.ts)</code>
- **OnError**: throws <code>[Workspaces.GetWorkspaceError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.getWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceDetail, Workspaces.GetWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspaceDetail](src/models/workspace-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkspaceDatasets(request: Workspaces.ListWorkspaceDatasetsRequest, options?: RequestOptions): ApiPromise&lt;DatasetList, Workspaces.ListWorkspaceDatasetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every dataset in one of your workspaces — `public`, `workspace`, and `private` alike. Same `{workspace}` resolution (slug or numeric ID) and members-only access rules as `GET /api/workspaces/{workspace}`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.listWorkspaceDatasets({ workspace: "some example string" });
  // TODO: Handle 'response' of type DatasetList
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.ListWorkspaceDatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .listWorkspaceDatasets({ workspace: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatasetList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>string</code> | Workspace slug (e.g. `audioscrape`) or numeric workspace ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.listWorkspaceDatasets(request)`

- **OnSuccess**: <code>[DatasetList](src/models/dataset-list.ts)</code>
- **OnError**: throws <code>[Workspaces.ListWorkspaceDatasetsError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.listWorkspaceDatasets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatasetList, Workspaces.ListWorkspaceDatasetsError&gt;</code>, with `result.value` of type <code>[DatasetList](src/models/dataset-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkspaces(options?: RequestOptions): ApiPromise&lt;WorkspaceList, Workspaces.ListWorkspacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every workspace the calling user is a member of, with the caller's role in each. `is_current` marks the workspace the authenticating API key (or session) is scoped to. Ordered current-first, then by name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.listWorkspaces();
  // TODO: Handle 'response' of type WorkspaceList
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.ListWorkspacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.listWorkspaces().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.listWorkspaces()`

- **OnSuccess**: <code>[WorkspaceList](src/models/workspace-list.ts)</code>
- **OnError**: throws <code>[Workspaces.ListWorkspacesError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.listWorkspaces().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceList, Workspaces.ListWorkspacesError&gt;</code>, with `result.value` of type <code>[WorkspaceList](src/models/workspace-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AudioscrapeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

