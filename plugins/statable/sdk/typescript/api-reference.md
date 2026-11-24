# Reference

> Source: [StatableClient](src/client.ts)

## Bootstrap

> Source: [Bootstrap](src/resources/bootstrap.ts)

<details>
<summary><code>bootstrapSendOtp(request: Bootstrap.BootstrapSendOtpRequestParams, options?: RequestOptions): ApiPromise&lt;BootstrapSendOtpResponse, Bootstrap.BootstrapSendOtpError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a 6-digit code to the address, valid for a short window and usable once. Takes no credential — this is the entry point for a client that has none. Rate limited per email (2/minute), per IP (5/hour) and per IP across the whole bootstrap branch (20/hour). The response is identical whether or not the address already has an account, so it cannot be used to test for one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bootstrap.bootstrapSendOtp({ body: { email: "agent@yourcompany.com" } });
  // TODO: Handle 'response' of type BootstrapSendOtpResponse
} catch (err) {
  // TODO: Handle 'err' of type Bootstrap.BootstrapSendOtpError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bootstrap
  .bootstrapSendOtp({ body: { email: "agent@yourcompany.com" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BootstrapSendOtpResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BootstrapSendOtpRequest](src/models/bootstrap-send-otp-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bootstrap.bootstrapSendOtp(request)`

- **OnSuccess**: <code>[BootstrapSendOtpResponse](src/models/bootstrap-send-otp-response.ts)</code>
- **OnError**: throws <code>[Bootstrap.BootstrapSendOtpError](src/resources/bootstrap.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bootstrap.bootstrapSendOtp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BootstrapSendOtpResponse, Bootstrap.BootstrapSendOtpError&gt;</code>, with `result.value` of type <code>[BootstrapSendOtpResponse](src/models/bootstrap-send-otp-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bootstrapVerifyOtp(request: Bootstrap.BootstrapVerifyOtpRequestParams, options?: RequestOptions): ApiPromise&lt;BootstrapVerifyOtpResponse, Bootstrap.BootstrapVerifyOtpError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies the code, creates the account if the address is new, records the terms acceptance, and returns a freshly minted key — the raw token EXACTLY ONCE. `accept_terms` must be true. Requested `scopes` must be within `API_BOOTSTRAP_SCOPES` (default `read,sites:write`); omitting them yields that whole set, and `billing:write` is never obtainable here. Everything that can be rejected without the code is validated first, so a bad field does not burn a valid code. The key is always all-sites and always expires (90 days by default, 365 max).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bootstrap.bootstrapVerifyOtp({
    body: { email: "agent@yourcompany.com", code: "123456", acceptTerms: true, keyName: "provisioning bot" },
  });
  // TODO: Handle 'response' of type BootstrapVerifyOtpResponse
} catch (err) {
  // TODO: Handle 'err' of type Bootstrap.BootstrapVerifyOtpError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bootstrap
  .bootstrapVerifyOtp({
    body: { email: "agent@yourcompany.com", code: "123456", acceptTerms: true, keyName: "provisioning bot" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BootstrapVerifyOtpResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BootstrapVerifyOtpRequest](src/models/bootstrap-verify-otp-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bootstrap.bootstrapVerifyOtp(request)`

- **OnSuccess**: <code>[BootstrapVerifyOtpResponse](src/models/bootstrap-verify-otp-response.ts)</code>
- **OnError**: throws <code>[Bootstrap.BootstrapVerifyOtpError](src/resources/bootstrap.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bootstrap.bootstrapVerifyOtp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BootstrapVerifyOtpResponse, Bootstrap.BootstrapVerifyOtpError&gt;</code>, with `result.value` of type <code>[BootstrapVerifyOtpResponse](src/models/bootstrap-verify-otp-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Keys

> Source: [Keys](src/resources/keys.ts)

<details>
<summary><code>createApiKey(request: Keys.CreateApiKeyRequestParams, options?: RequestOptions): ApiPromise&lt;CreatedApiKey, Keys.CreateApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mints a key and returns its raw token EXACTLY ONCE. The requested scopes must be a subset of the authenticating key's scopes (else 403 `scope_escalation`), and a single-site key may only create keys locked to its own site (else 403 `key_not_scoped`). `expires_in_days` defaults to 90 and is capped at 365 — unlike the dashboard, the API cannot mint a key that never expires. Max 10 active keys per account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.keys.createApiKey({ body: { name: "reporting job", scopes: [Scope.Read] } });
  // TODO: Handle 'response' of type CreatedApiKey
} catch (err) {
  // TODO: Handle 'err' of type Keys.CreateApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.keys
  .createApiKey({ body: { name: "reporting job", scopes: [Scope.Read] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreatedApiKey
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateApiKeyRequest](src/models/create-api-key-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.keys.createApiKey(request)`

- **OnSuccess**: <code>[CreatedApiKey](src/models/created-api-key.ts)</code>
- **OnError**: throws <code>[Keys.CreateApiKeyError](src/resources/keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.keys.createApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreatedApiKey, Keys.CreateApiKeyError&gt;</code>, with `result.value` of type <code>[CreatedApiKey](src/models/created-api-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listApiKeyEvents(request: Keys.ListApiKeyEventsRequest, options?: RequestOptions): ApiPromise&lt;ApiKeyEventList, Keys.ListApiKeyEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the key's create / rotate / revoke events, newest first (revoked keys keep their trail). `actor_key_id` names the API key that performed the action, or null when it was done from the dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.keys.listApiKeyEvents({ id: 1 });
  // TODO: Handle 'response' of type ApiKeyEventList
} catch (err) {
  // TODO: Handle 'err' of type Keys.ListApiKeyEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.keys.listApiKeyEvents({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKeyEventList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric API key id (from GET /keys). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.keys.listApiKeyEvents(request)`

- **OnSuccess**: <code>[ApiKeyEventList](src/models/api-key-event-list.ts)</code>
- **OnError**: throws <code>[Keys.ListApiKeyEventsError](src/resources/keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.keys.listApiKeyEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKeyEventList, Keys.ListApiKeyEventsError&gt;</code>, with `result.value` of type <code>[ApiKeyEventList](src/models/api-key-event-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listApiKeys(options?: RequestOptions): ApiPromise&lt;ApiKeyList, Keys.ListApiKeysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the owner's active (non-revoked) keys, newest first. No token or hash is ever returned here — the raw token exists only in the create and rotate responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.keys.listApiKeys();
  // TODO: Handle 'response' of type ApiKeyList
} catch (err) {
  // TODO: Handle 'err' of type Keys.ListApiKeysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.keys.listApiKeys().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKeyList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.keys.listApiKeys()`

- **OnSuccess**: <code>[ApiKeyList](src/models/api-key-list.ts)</code>
- **OnError**: throws <code>[Keys.ListApiKeysError](src/resources/keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.keys.listApiKeys().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKeyList, Keys.ListApiKeysError&gt;</code>, with `result.value` of type <code>[ApiKeyList](src/models/api-key-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeApiKey(request: Keys.RevokeApiKeyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Keys.RevokeApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes the key; its token stops authenticating immediately. A key cannot revoke itself (409 `self_modification`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.keys.revokeApiKey({ id: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Keys.RevokeApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.keys.revokeApiKey({ id: 1 }).asApiResult();
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
| <code>id</code> | <code>number</code> | Numeric API key id (from GET /keys). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.keys.revokeApiKey(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Keys.RevokeApiKeyError](src/resources/keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.keys.revokeApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Keys.RevokeApiKeyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rotateApiKey(request: Keys.RotateApiKeyRequest, options?: RequestOptions): ApiPromise&lt;CreatedApiKey, Keys.RotateApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the key's secret in place — same id, name, site scope, scopes and expiry — and invalidates the old token immediately. The new token is returned exactly once. No request body. A key cannot rotate itself (409 `self_modification`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.keys.rotateApiKey({ id: 1 });
  // TODO: Handle 'response' of type CreatedApiKey
} catch (err) {
  // TODO: Handle 'err' of type Keys.RotateApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.keys.rotateApiKey({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreatedApiKey
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric API key id (from GET /keys). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.keys.rotateApiKey(request)`

- **OnSuccess**: <code>[CreatedApiKey](src/models/created-api-key.ts)</code>
- **OnError**: throws <code>[Keys.RotateApiKeyError](src/resources/keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.keys.rotateApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreatedApiKey, Keys.RotateApiKeyError&gt;</code>, with `result.value` of type <code>[CreatedApiKey](src/models/created-api-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sites

> Source: [Sites](src/resources/sites.ts)

<details>
<summary><code>createFunnel(request: Sites.CreateFunnelRequest, options?: RequestOptions): ApiPromise&lt;FunnelDefinition, Sites.CreateFunnelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only. A step pointing at a goal this site does not have is 400, naming the step. A duplicate name is 409 `funnel_exists`. Listing and running funnels lives on the read surface (GET /funnels, POST /funnels/{id}/report).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.createFunnel({
    id: 1,
    body: { name: "Signup flow", steps: [{ kind: Kind.Page, path: "/" }, { kind: Kind.Goal, goalId: 12 }] },
  });
  // TODO: Handle 'response' of type FunnelDefinition
} catch (err) {
  // TODO: Handle 'err' of type Sites.CreateFunnelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites
  .createFunnel({
    id: 1,
    body: { name: "Signup flow", steps: [{ kind: Kind.Page, path: "/" }, { kind: Kind.Goal, goalId: 12 }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FunnelDefinition
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric site id. |
| <code>body</code> | <code>[FunnelRequest](src/models/funnel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.createFunnel(request)`

- **OnSuccess**: <code>[FunnelDefinition](src/models/funnel-definition.ts)</code>
- **OnError**: throws <code>[Sites.CreateFunnelError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.createFunnel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FunnelDefinition, Sites.CreateFunnelError&gt;</code>, with `result.value` of type <code>[FunnelDefinition](src/models/funnel-definition.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGoal(request: Sites.CreateGoalRequest, options?: RequestOptions): ApiPromise&lt;Goal, Sites.CreateGoalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only. A duplicate name is 409 `goal_exists`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.createGoal({
    id: 1,
    body: { name: "Signup", path: "/thanks", operator: Operator.E },
  });
  // TODO: Handle 'response' of type Goal
} catch (err) {
  // TODO: Handle 'err' of type Sites.CreateGoalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites
  .createGoal({ id: 1, body: { name: "Signup", path: "/thanks", operator: Operator.E } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Goal
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric site id. |
| <code>body</code> | <code>[GoalRequest](src/models/goal-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.createGoal(request)`

- **OnSuccess**: <code>[Goal](src/models/goal.ts)</code>
- **OnError**: throws <code>[Sites.CreateGoalError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.createGoal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Goal, Sites.CreateGoalError&gt;</code>, with `result.value` of type <code>[Goal](src/models/goal.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSite(request: Sites.CreateSiteRequestParams, options?: RequestOptions): ApiPromise&lt;SiteDetail, Sites.CreateSiteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a site and returns everything needed to install tracking, so provisioning is one round-trip. Requires an ALL-SITES key: a single-site key gets 403 `key_not_scoped`, since the new site would be outside its own scope. A duplicate url is 409 `site_exists` — unlike the dashboard, which permits it: for an agent a duplicate is nearly always a retry that lost its response. The first non-hobby site starts the trial subscription exactly as the dashboard does. Send an `Idempotency-Key` to make retries safe.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.createSite({
    body: { url: "https://example.com", timezone: "Europe/Kyiv" },
  });
  // TODO: Handle 'response' of type SiteDetail
} catch (err) {
  // TODO: Handle 'err' of type Sites.CreateSiteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites
  .createSite({ body: { url: "https://example.com", timezone: "Europe/Kyiv" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SiteDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>string</code> | Replays the stored response for 24 hours instead of creating a second site. Reuse with a different body is 409 `idempotency_conflict`. |
| <code>body</code> | <code>[CreateSiteRequest](src/models/create-site-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.createSite(request)`

- **OnSuccess**: <code>[SiteDetail](src/models/site-detail.ts)</code>
- **OnError**: throws <code>[Sites.CreateSiteError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.createSite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SiteDetail, Sites.CreateSiteError&gt;</code>, with `result.value` of type <code>[SiteDetail](src/models/site-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFunnel(request: Sites.DeleteFunnelRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sites.DeleteFunnelError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sites.deleteFunnel({ id: 1, funnelId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Sites.DeleteFunnelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.deleteFunnel({ id: 1, funnelId: 1 }).asApiResult();
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
| <code>id</code> | <code>number</code> | - |
| <code>funnelId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.deleteFunnel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sites.DeleteFunnelError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.deleteFunnel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sites.DeleteFunnelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGoal(request: Sites.DeleteGoalRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sites.DeleteGoalError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sites.deleteGoal({ id: 1, goalId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Sites.DeleteGoalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.deleteGoal({ id: 1, goalId: 1 }).asApiResult();
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
| <code>id</code> | <code>number</code> | - |
| <code>goalId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.deleteGoal(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sites.DeleteGoalError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.deleteGoal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sites.DeleteGoalError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSite(request: Sites.DeleteSiteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sites.DeleteSiteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner only — an admin may edit the site but not delete it — and it really deletes: the site plus its goals, hostnames, blocklists and import jobs, with its ClickHouse data removed asynchronously. An admin or a member gets 403 `not_site_owner` — there is no API equivalent of the dashboard's "remove my access".

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sites.deleteSite({ id: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Sites.DeleteSiteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.deleteSite({ id: 1 }).asApiResult();
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
| <code>id</code> | <code>number</code> | Numeric site id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.deleteSite(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sites.DeleteSiteError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.deleteSite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sites.DeleteSiteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBlockedIPs(request: Sites.GetBlockedIPsRequest, options?: RequestOptions): ApiPromise&lt;SitesSettingsBlockedIpsResponse, Sites.GetBlockedIPsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.getBlockedIPs({ id: 1 });
  // TODO: Handle 'response' of type SitesSettingsBlockedIpsResponse
} catch (err) {
  // TODO: Handle 'err' of type Sites.GetBlockedIPsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.getBlockedIPs({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SitesSettingsBlockedIpsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sites.getBlockedIPs(request)`

- **OnSuccess**: <code>[SitesSettingsBlockedIpsResponse](src/models/sites-settings-blocked-ips-response.ts)</code>
- **OnError**: throws <code>[Sites.GetBlockedIPsError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.getBlockedIPs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SitesSettingsBlockedIpsResponse, Sites.GetBlockedIPsError&gt;</code>, with `result.value` of type <code>[SitesSettingsBlockedIpsResponse](src/models/sites-settings-blocked-ips-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCountrySettings(request: Sites.GetCountrySettingsRequest, options?: RequestOptions): ApiPromise&lt;CountryList, Sites.GetCountrySettingsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.getCountrySettings({ id: 1 });
  // TODO: Handle 'response' of type CountryList
} catch (err) {
  // TODO: Handle 'err' of type Sites.GetCountrySettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.getCountrySettings({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountryList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sites.getCountrySettings(request)`

- **OnSuccess**: <code>[CountryList](src/models/country-list.ts)</code>
- **OnError**: throws <code>[Sites.GetCountrySettingsError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.getCountrySettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountryList, Sites.GetCountrySettingsError&gt;</code>, with `result.value` of type <code>[CountryList](src/models/country-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getHostnameSettings(request: Sites.GetHostnameSettingsRequest, options?: RequestOptions): ApiPromise&lt;HostnameList, Sites.GetHostnameSettingsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.getHostnameSettings({ id: 1 });
  // TODO: Handle 'response' of type HostnameList
} catch (err) {
  // TODO: Handle 'err' of type Sites.GetHostnameSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.getHostnameSettings({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HostnameList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sites.getHostnameSettings(request)`

- **OnSuccess**: <code>[HostnameList](src/models/hostname-list.ts)</code>
- **OnError**: throws <code>[Sites.GetHostnameSettingsError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.getHostnameSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HostnameList, Sites.GetHostnameSettingsError&gt;</code>, with `result.value` of type <code>[HostnameList](src/models/hostname-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPublicDashboard(request: Sites.GetPublicDashboardRequest, options?: RequestOptions): ApiPromise&lt;PublicDashboard, Sites.GetPublicDashboardError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.getPublicDashboard({ id: 1 });
  // TODO: Handle 'response' of type PublicDashboard
} catch (err) {
  // TODO: Handle 'err' of type Sites.GetPublicDashboardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.getPublicDashboard({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicDashboard
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sites.getPublicDashboard(request)`

- **OnSuccess**: <code>[PublicDashboard](src/models/public-dashboard.ts)</code>
- **OnError**: throws <code>[Sites.GetPublicDashboardError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.getPublicDashboard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicDashboard, Sites.GetPublicDashboardError&gt;</code>, with `result.value` of type <code>[PublicDashboard](src/models/public-dashboard.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSiteSnippet(request: Sites.GetSiteSnippetRequest, options?: RequestOptions): ApiPromise&lt;SiteSnippet, Sites.GetSiteSnippetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the script URL and the ready-to-paste tag. Scope `read`, not `sites:write`: the snippet is public information (it ends up in the page source), and shared users may install tracking too. `type` selects a widget instead of the tracker: a hobby site gets the bundled `/t/` build, which counts as well as draws, a paid site the widget-only build — its counting is the tracker tag it installs separately.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.getSiteSnippet({ id: "some example string" });
  // TODO: Handle 'response' of type SiteSnippet
} catch (err) {
  // TODO: Handle 'err' of type Sites.GetSiteSnippetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.getSiteSnippet({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SiteSnippet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>type?</code> | <code>[Type](src/models/type.ts)</code> | Omit for the tracking script. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.getSiteSnippet(request)`

- **OnSuccess**: <code>[SiteSnippet](src/models/site-snippet.ts)</code>
- **OnError**: throws <code>[Sites.GetSiteSnippetError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.getSiteSnippet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SiteSnippet, Sites.GetSiteSnippetError&gt;</code>, with `result.value` of type <code>[SiteSnippet](src/models/site-snippet.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTrackingSettings(request: Sites.GetTrackingSettingsRequest, options?: RequestOptions): ApiPromise&lt;TrackingSettings, Sites.GetTrackingSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the site's effective feature selection plus the full catalogue — each entry's state, its dependencies and its marginal brotli cost — so a caller can trade capability against script weight without a second call. Owner or admin only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.getTrackingSettings({ id: 1 });
  // TODO: Handle 'response' of type TrackingSettings
} catch (err) {
  // TODO: Handle 'err' of type Sites.GetTrackingSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.getTrackingSettings({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrackingSettings
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric site id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.getTrackingSettings(request)`

- **OnSuccess**: <code>[TrackingSettings](src/models/tracking-settings.ts)</code>
- **OnError**: throws <code>[Sites.GetTrackingSettingsError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.getTrackingSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrackingSettings, Sites.GetTrackingSettingsError&gt;</code>, with `result.value` of type <code>[TrackingSettings](src/models/tracking-settings.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSiteGoals(request: Sites.ListSiteGoalsRequest, options?: RequestOptions): ApiPromise&lt;SitesGoalsResponse, Sites.ListSiteGoalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Goal definitions with their ids, for the write calls below.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.listSiteGoals({ id: 1 });
  // TODO: Handle 'response' of type SitesGoalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Sites.ListSiteGoalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.listSiteGoals({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SitesGoalsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric site id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.listSiteGoals(request)`

- **OnSuccess**: <code>[SitesGoalsResponse](src/models/sites-goals-response.ts)</code>
- **OnError**: throws <code>[Sites.ListSiteGoalsError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.listSiteGoals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SitesGoalsResponse, Sites.ListSiteGoalsError&gt;</code>, with `result.value` of type <code>[SitesGoalsResponse](src/models/sites-goals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setBlockedIPs(request: Sites.SetBlockedIPsRequest, options?: RequestOptions): ApiPromise&lt;SettingsCount, Sites.SetBlockedIPsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.setBlockedIPs({ id: 1, body: ["some example string"] });
  // TODO: Handle 'response' of type SettingsCount
} catch (err) {
  // TODO: Handle 'err' of type Sites.SetBlockedIPsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.setBlockedIPs({ id: 1, body: ["some example string"] }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettingsCount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>string[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.setBlockedIPs(request)`

- **OnSuccess**: <code>[SettingsCount](src/models/settings-count.ts)</code>
- **OnError**: throws <code>[Sites.SetBlockedIPsError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.setBlockedIPs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettingsCount, Sites.SetBlockedIPsError&gt;</code>, with `result.value` of type <code>[SettingsCount](src/models/settings-count.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setCountrySettings(request: Sites.SetCountrySettingsRequest, options?: RequestOptions): ApiPromise&lt;SettingsCount, Sites.SetCountrySettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.setCountrySettings({ id: 1, body: {} });
  // TODO: Handle 'response' of type SettingsCount
} catch (err) {
  // TODO: Handle 'err' of type Sites.SetCountrySettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.setCountrySettings({ id: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettingsCount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[CountryListRequest](src/models/country-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.setCountrySettings(request)`

- **OnSuccess**: <code>[SettingsCount](src/models/settings-count.ts)</code>
- **OnError**: throws <code>[Sites.SetCountrySettingsError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.setCountrySettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettingsCount, Sites.SetCountrySettingsError&gt;</code>, with `result.value` of type <code>[SettingsCount](src/models/settings-count.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setHostnameSettings(request: Sites.SetHostnameSettingsRequest, options?: RequestOptions): ApiPromise&lt;SettingsCount, Sites.SetHostnameSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.setHostnameSettings({ id: 1, body: {} });
  // TODO: Handle 'response' of type SettingsCount
} catch (err) {
  // TODO: Handle 'err' of type Sites.SetHostnameSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.setHostnameSettings({ id: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettingsCount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[HostnameListRequest](src/models/hostname-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.setHostnameSettings(request)`

- **OnSuccess**: <code>[SettingsCount](src/models/settings-count.ts)</code>
- **OnError**: throws <code>[Sites.SetHostnameSettingsError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.setHostnameSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettingsCount, Sites.SetHostnameSettingsError&gt;</code>, with `result.value` of type <code>[SettingsCount](src/models/settings-count.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setPublicDashboard(request: Sites.SetPublicDashboardRequest, options?: RequestOptions): ApiPromise&lt;PublicDashboard, Sites.SetPublicDashboardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only. `enabled` must be sent explicitly — this is the one setting that changes who can SEE the data, so an absent field must not read as "turn it off".

A hobby site on a free account is always public and answers `409 hobby_always_public` to `enabled: false`. Its stats are the widget it ships, and the hash that addresses them is already in the page's markup; `enabled: true` on one succeeds as a no-op. An owner with a paid subscription (`active`, or `past_due` during a retried renewal) may turn it off.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.setPublicDashboard({ id: 1, body: { enabled: true } });
  // TODO: Handle 'response' of type PublicDashboard
} catch (err) {
  // TODO: Handle 'err' of type Sites.SetPublicDashboardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.setPublicDashboard({ id: 1, body: { enabled: true } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicDashboard
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[PublicDashboard](src/models/public-dashboard.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.setPublicDashboard(request)`

- **OnSuccess**: <code>[PublicDashboard](src/models/public-dashboard.ts)</code>
- **OnError**: throws <code>[Sites.SetPublicDashboardError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.setPublicDashboard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicDashboard, Sites.SetPublicDashboardError&gt;</code>, with `result.value` of type <code>[PublicDashboard](src/models/public-dashboard.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setTrackingSettings(request: Sites.SetTrackingSettingsRequest, options?: RequestOptions): ApiPromise&lt;TrackingSettings, Sites.SetTrackingSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the selection wholesale. `features` is REQUIRED — an omitted key would be indistinguishable from `[]`, which disables everything optional. Locked features stay enabled whether or not they are sent, and a feature whose `requires` are unmet is rejected. Applying repoints the served bundle, then stores the selection, then purges the CDN — the same order the dashboard uses. Owner or admin only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.setTrackingSettings({ id: 1, body: { features: [] } });
  // TODO: Handle 'response' of type TrackingSettings
} catch (err) {
  // TODO: Handle 'err' of type Sites.SetTrackingSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.setTrackingSettings({ id: 1, body: { features: [] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrackingSettings
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric site id. |
| <code>body</code> | <code>[TrackingSettingsRequest](src/models/tracking-settings-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.setTrackingSettings(request)`

- **OnSuccess**: <code>[TrackingSettings](src/models/tracking-settings.ts)</code>
- **OnError**: throws <code>[Sites.SetTrackingSettingsError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.setTrackingSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrackingSettings, Sites.SetTrackingSettingsError&gt;</code>, with `result.value` of type <code>[TrackingSettings](src/models/tracking-settings.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFunnel(request: Sites.UpdateFunnelRequest, options?: RequestOptions): ApiPromise&lt;FunnelDefinition, Sites.UpdateFunnelError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.updateFunnel({
    id: 1,
    funnelId: 1,
    body: { name: "some example string", steps: [{ kind: Kind.Page }] },
  });
  // TODO: Handle 'response' of type FunnelDefinition
} catch (err) {
  // TODO: Handle 'err' of type Sites.UpdateFunnelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites
  .updateFunnel({ id: 1, funnelId: 1, body: { name: "some example string", steps: [{ kind: Kind.Page }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FunnelDefinition
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>funnelId</code> | <code>number</code> | - |
| <code>body</code> | <code>[FunnelRequest](src/models/funnel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.updateFunnel(request)`

- **OnSuccess**: <code>[FunnelDefinition](src/models/funnel-definition.ts)</code>
- **OnError**: throws <code>[Sites.UpdateFunnelError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.updateFunnel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FunnelDefinition, Sites.UpdateFunnelError&gt;</code>, with `result.value` of type <code>[FunnelDefinition](src/models/funnel-definition.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGoal(request: Sites.UpdateGoalRequest, options?: RequestOptions): ApiPromise&lt;Goal, Sites.UpdateGoalError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.updateGoal({ id: 1, goalId: 1, body: { name: "some example string" } });
  // TODO: Handle 'response' of type Goal
} catch (err) {
  // TODO: Handle 'err' of type Sites.UpdateGoalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites
  .updateGoal({ id: 1, goalId: 1, body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Goal
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>goalId</code> | <code>number</code> | - |
| <code>body</code> | <code>[GoalRequest](src/models/goal-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.updateGoal(request)`

- **OnSuccess**: <code>[Goal](src/models/goal.ts)</code>
- **OnError**: throws <code>[Sites.UpdateGoalError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.updateGoal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Goal, Sites.UpdateGoalError&gt;</code>, with `result.value` of type <code>[Goal](src/models/goal.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSite(request: Sites.UpdateSiteRequestParams, options?: RequestOptions): ApiPromise&lt;SiteDetail, Sites.UpdateSiteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only — a member gets 403 `not_site_owner`. Omitted fields are left alone. Unlike the read surface there is no tracking-active gate: a lapsed account must still be able to fix and clean up its sites. Another account's id answers 404 `unknown_site`, exactly as a nonexistent one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.updateSite({ id: 1, body: { timezone: "UTC", weekStart: 0 } });
  // TODO: Handle 'response' of type SiteDetail
} catch (err) {
  // TODO: Handle 'err' of type Sites.UpdateSiteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites
  .updateSite({ id: 1, body: { timezone: "UTC", weekStart: 0 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SiteDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Numeric site id. |
| <code>body</code> | <code>[UpdateSiteRequest](src/models/update-site-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.updateSite(request)`

- **OnSuccess**: <code>[SiteDetail](src/models/site-detail.ts)</code>
- **OnError**: throws <code>[Sites.UpdateSiteError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.updateSite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SiteDetail, Sites.UpdateSiteError&gt;</code>, with `result.value` of type <code>[SiteDetail](src/models/site-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Stats

> Source: [Stats](src/resources/stats.ts)

<details>
<summary><code>currentVisitors(request?: Stats.CurrentVisitorsRequest, options?: RequestOptions): ApiPromise&lt;CurrentVisitorsResponse, Stats.CurrentVisitorsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stats.currentVisitors();
  // TODO: Handle 'response' of type CurrentVisitorsResponse
} catch (err) {
  // TODO: Handle 'err' of type Stats.CurrentVisitorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stats.currentVisitors().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CurrentVisitorsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteId?</code> | <code>number</code> | Numeric site id. Optional for a single-site key; required for an all-sites key. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stats.currentVisitors(request)`

- **OnSuccess**: <code>[CurrentVisitorsResponse](src/models/current-visitors-response.ts)</code>
- **OnError**: throws <code>[Stats.CurrentVisitorsError](src/resources/stats.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stats.currentVisitors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CurrentVisitorsResponse, Stats.CurrentVisitorsError&gt;</code>, with `result.value` of type <code>[CurrentVisitorsResponse](src/models/current-visitors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscription(options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Stats.GetSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The subscription of the key's owner, in one line's worth of fields: enough to say "Trial — N days left", not a billing page. Hobby-only accounts have no subscription and answer `status: "none"` with `only_hobby: true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stats.getSubscription();
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Stats.GetSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stats.getSubscription().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stats.getSubscription()`

- **OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: throws <code>[Stats.GetSubscriptionError](src/resources/stats.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stats.getSubscription().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponse, Stats.GetSubscriptionError&gt;</code>, with `result.value` of type <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFunnels(request?: Stats.ListFunnelsRequest, options?: RequestOptions): ApiPromise&lt;FunnelsResponse, Stats.ListFunnelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the site's saved funnel definitions (managed in the dashboard). Use a funnel `id` with POST /funnels/{id}/report. Funnels are read-only over the API — this endpoint does not create or edit them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stats.listFunnels();
  // TODO: Handle 'response' of type FunnelsResponse
} catch (err) {
  // TODO: Handle 'err' of type Stats.ListFunnelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stats.listFunnels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FunnelsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteId?</code> | <code>number</code> | Numeric site id. Optional for a single-site key (defaults to its site); required for an all-sites key. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stats.listFunnels(request)`

- **OnSuccess**: <code>[FunnelsResponse](src/models/funnels-response.ts)</code>
- **OnError**: throws <code>[Stats.ListFunnelsError](src/resources/stats.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stats.listFunnels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FunnelsResponse, Stats.ListFunnelsError&gt;</code>, with `result.value` of type <code>[FunnelsResponse](src/models/funnels-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPropKeys(request?: Stats.ListPropKeysRequest, options?: RequestOptions): ApiPromise&lt;PropsResponse, Stats.ListPropKeysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The custom-property keys a site has recorded (each paired with the event it was sent with) — discovery for the event:props: breakdown. Returns the full set (no pagination) for the window.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stats.listPropKeys();
  // TODO: Handle 'response' of type PropsResponse
} catch (err) {
  // TODO: Handle 'err' of type Stats.ListPropKeysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stats.listPropKeys().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PropsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteId?</code> | <code>number</code> | Numeric site id. Optional for a single-site key; required for an all-sites key. |
| <code>dateRange?</code> | <code>string</code> | Same forms as /query (default 30d): a preset `7d`/`30d`/`month`, or a URL-encoded custom pair `["YYYY-MM-DD","YYYY-MM-DD"]`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stats.listPropKeys(request)`

- **OnSuccess**: <code>[PropsResponse](src/models/props-response.ts)</code>
- **OnError**: throws <code>[Stats.ListPropKeysError](src/resources/stats.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stats.listPropKeys(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PropsResponse, Stats.ListPropKeysError&gt;</code>, with `result.value` of type <code>[PropsResponse](src/models/props-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSites(request?: Stats.ListSitesRequest, options?: RequestOptions): ApiPromise&lt;SitesResponse, Stats.ListSitesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the sites the authenticating key may read — useful for discovering `site_id` values and token introspection. An all-sites key returns every accessible site (sorted by name); a single-site key returns just its one site (or an empty list if access was removed).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stats.listSites({ dateRange: "7d" });
  // TODO: Handle 'response' of type SitesResponse
} catch (err) {
  // TODO: Handle 'err' of type Stats.ListSitesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stats.listSites({ dateRange: "7d" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SitesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dateRange?</code> | <code>string</code> | A preset (`7d`/`30d`/`month`/`realtime`) or `Nd` = last N full days, N in 1–90 (e.g. `7d`, `14d`) — the same scalar forms POST /query accepts (custom `[from,to]` pairs are /query-only). When present, each site gains a `stats` block with basic aggregate metrics for the window. Omit to keep the list lean (no analytics read). These batch stats are NOT per-site-timezone — use POST /query for TZ-exact numbers. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stats.listSites(request)`

- **OnSuccess**: <code>[SitesResponse](src/models/sites-response.ts)</code>
- **OnError**: throws <code>[Stats.ListSitesError](src/resources/stats.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stats.listSites(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SitesResponse, Stats.ListSitesError&gt;</code>, with `result.value` of type <code>[SitesResponse](src/models/sites-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>query(request: Stats.QueryRequestParams, options?: RequestOptions): ApiPromise&lt;QueryResponse, Stats.QueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One query returns a list of result rows. With no `dimensions` it is an aggregate (one row); with one time dimension (`time[:hour|day|week|month]`) it is a time series; with one breakdown dimension it is a top-N list plus a `meta` pagination block. The response always echoes the resolved request in `query` (most usefully `date_range` normalized to concrete `[from,to]` dates). At most one dimension per query.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stats.query({
    body: { siteId: 3093477, metrics: [Metric.Visitors, Metric.Pageviews], dateRange: "7d" },
  });
  // TODO: Handle 'response' of type QueryResponse
} catch (err) {
  // TODO: Handle 'err' of type Stats.QueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stats
  .query({ body: { siteId: 3093477, metrics: [Metric.Visitors, Metric.Pageviews], dateRange: "7d" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QueryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](src/models/query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stats.query(request)`

- **OnSuccess**: <code>[QueryResponse](src/models/query-response.ts)</code>
- **OnError**: throws <code>[Stats.QueryError](src/resources/stats.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stats.query(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QueryResponse, Stats.QueryError&gt;</code>, with `result.value` of type <code>[QueryResponse](src/models/query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runFunnelReport(request: Stats.RunFunnelReportRequest, options?: RequestOptions): ApiPromise&lt;FunnelReportResponse, Stats.RunFunnelReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a saved funnel over a date range (+ optional segment filters) and returns an ORDERED per-step result with top-level scalars — a bespoke, non-tabular shape (funnel output is not rows). `steps` must not be sorted; `conversion_rate` is cumulative versus the first step (`entering`), not step-to-step. The intra-conversion window is a fixed 1 day, independent of `date_range` (which only bounds the sessions scanned).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stats.runFunnelReport({ id: 1, body: { siteId: 3093477, dateRange: "30d" } });
  // TODO: Handle 'response' of type FunnelReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Stats.RunFunnelReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stats
  .runFunnelReport({ id: 1, body: { siteId: 3093477, dateRange: "30d" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FunnelReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | Funnel id (from GET /funnels). |
| <code>body</code> | <code>[FunnelReportRequest](src/models/funnel-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stats.runFunnelReport(request)`

- **OnSuccess**: <code>[FunnelReportResponse](src/models/funnel-report-response.ts)</code>
- **OnError**: throws <code>[Stats.RunFunnelReportError](src/resources/stats.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stats.runFunnelReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FunnelReportResponse, Stats.RunFunnelReportError&gt;</code>, with `result.value` of type <code>[FunnelReportResponse](src/models/funnel-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StatableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

