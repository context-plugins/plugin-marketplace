# Reference

> Source: [Gr4VyClient](src/client.ts)

## DsScenarios3

> Source: [DsScenarios3](src/resources/ds-scenarios3.ts)

<details>
<summary><code>createThreeDsScenario(request: DsScenarios3.CreateThreeDsScenarioRequest, options?: RequestOptions): ApiPromise&lt;ThreeDSecureScenario, DsScenarios3.CreateThreeDsScenarioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new 3DS scenario for a merchant account. Only available in sandbox environments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dsScenarios3.createThreeDsScenario({
    xGr4VyMerchantAccountId: "default",
    body: { conditions: {}, outcome: { authentication: { transactionStatus: TransactionStatus5.Y } } },
  });
  // TODO: Handle 'response' of type ThreeDSecureScenario
} catch (err) {
  // TODO: Handle 'err' of type DsScenarios3.CreateThreeDsScenarioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dsScenarios3.createThreeDsScenario({
  xGr4VyMerchantAccountId: "default",
  body: { conditions: {}, outcome: { authentication: { transactionStatus: TransactionStatus5.Y } } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreeDSecureScenario
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[ThreeDSecureScenarioCreate](src/models/three-dsecure-scenario-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dsScenarios3.createThreeDsScenario(request)`

- **OnSuccess**: <code>[ThreeDSecureScenario](src/models/three-dsecure-scenario.ts)</code>
- **OnError**: throws <code>[DsScenarios3.CreateThreeDsScenarioError](src/resources/ds-scenarios3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dsScenarios3.createThreeDsScenario(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreeDSecureScenario, DsScenarios3.CreateThreeDsScenarioError&gt;</code>, with `result.value` of type <code>[ThreeDSecureScenario](src/models/three-dsecure-scenario.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteThreeDsScenario(request: DsScenarios3.DeleteThreeDsScenarioRequest, options?: RequestOptions): ApiPromise&lt;undefined, DsScenarios3.DeleteThreeDsScenarioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a 3DS scenario from our system. Only available in sandbox environments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.dsScenarios3.deleteThreeDsScenario({
    threeDsScenarioId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type DsScenarios3.DeleteThreeDsScenarioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dsScenarios3.deleteThreeDsScenario({
  threeDsScenarioId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
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
| <code>threeDsScenarioId</code> | <code>string</code> | The ID of the 3DS scenario |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dsScenarios3.deleteThreeDsScenario(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DsScenarios3.DeleteThreeDsScenarioError](src/resources/ds-scenarios3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dsScenarios3.deleteThreeDsScenario(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DsScenarios3.DeleteThreeDsScenarioError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getThreeDsScenario(request: DsScenarios3.GetThreeDsScenarioRequest, options?: RequestOptions): ApiPromise&lt;ThreeDSecureScenarios, DsScenarios3.GetThreeDsScenarioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all 3DS scenarios for a merchant account. Only available in sandbox environments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dsScenarios3.getThreeDsScenario({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type ThreeDSecureScenarios
} catch (err) {
  // TODO: Handle 'err' of type DsScenarios3.GetThreeDsScenarioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dsScenarios3.getThreeDsScenario({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreeDSecureScenarios
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dsScenarios3.getThreeDsScenario(request)`

- **OnSuccess**: <code>[ThreeDSecureScenarios](src/models/three-dsecure-scenarios.ts)</code>
- **OnError**: throws <code>[DsScenarios3.GetThreeDsScenarioError](src/resources/ds-scenarios3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dsScenarios3.getThreeDsScenario(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreeDSecureScenarios, DsScenarios3.GetThreeDsScenarioError&gt;</code>, with `result.value` of type <code>[ThreeDSecureScenarios](src/models/three-dsecure-scenarios.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateThreeDsScenario(request: DsScenarios3.UpdateThreeDsScenarioRequest, options?: RequestOptions): ApiPromise&lt;ThreeDSecureScenario, DsScenarios3.UpdateThreeDsScenarioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a 3DS scenario. Only available in sandbox environments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dsScenarios3.updateThreeDsScenario({
    threeDsScenarioId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type ThreeDSecureScenario
} catch (err) {
  // TODO: Handle 'err' of type DsScenarios3.UpdateThreeDsScenarioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dsScenarios3.updateThreeDsScenario({
  threeDsScenarioId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreeDSecureScenario
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>threeDsScenarioId</code> | <code>string</code> | The ID of the 3DS scenario |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[ThreeDSecureScenarioUpdate](src/models/three-dsecure-scenario-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dsScenarios3.updateThreeDsScenario(request)`

- **OnSuccess**: <code>[ThreeDSecureScenario](src/models/three-dsecure-scenario.ts)</code>
- **OnError**: throws <code>[DsScenarios3.UpdateThreeDsScenarioError](src/resources/ds-scenarios3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dsScenarios3.updateThreeDsScenario(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreeDSecureScenario, DsScenarios3.UpdateThreeDsScenarioError&gt;</code>, with `result.value` of type <code>[ThreeDSecureScenario](src/models/three-dsecure-scenario.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AccountUpdaterApi

> Source: [AccountUpdaterApi](src/resources/account-updater-api.ts)

<details>
<summary><code>createAccountUpdaterJob(request: AccountUpdaterApi.CreateAccountUpdaterJobRequest, options?: RequestOptions): ApiPromise&lt;AccountUpdaterJob, AccountUpdaterApi.CreateAccountUpdaterJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedule one or more stored cards for an account update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountUpdaterApi.createAccountUpdaterJob({
    xGr4VyMerchantAccountId: "default",
    body: { paymentMethodIds: ["00000000-0000-0000-0000-000000000000"] },
  });
  // TODO: Handle 'response' of type AccountUpdaterJob
} catch (err) {
  // TODO: Handle 'err' of type AccountUpdaterApi.CreateAccountUpdaterJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountUpdaterApi.createAccountUpdaterJob({
  xGr4VyMerchantAccountId: "default",
  body: { paymentMethodIds: ["00000000-0000-0000-0000-000000000000"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountUpdaterJob
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[AccountUpdaterJobCreate](src/models/account-updater-job-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountUpdaterApi.createAccountUpdaterJob(request)`

- **OnSuccess**: <code>[AccountUpdaterJob](src/models/account-updater-job.ts)</code>
- **OnError**: throws <code>[AccountUpdaterApi.CreateAccountUpdaterJobError](src/resources/account-updater-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountUpdaterApi.createAccountUpdaterJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountUpdaterJob, AccountUpdaterApi.CreateAccountUpdaterJobError&gt;</code>, with `result.value` of type <code>[AccountUpdaterJob](src/models/account-updater-job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ApiKeyPairs

> Source: [ApiKeyPairs](src/resources/api-key-pairs.ts)

<details>
<summary><code>createApiKeyPair(request: ApiKeyPairs.CreateApiKeyPairRequest, options?: RequestOptions): ApiPromise&lt;ApiKeyPair, ApiKeyPairs.CreateApiKeyPairError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new API key pair.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeyPairs.createApiKeyPair({
    body: { displayName: "some example string", roleIds: ["00000000-0000-0000-0000-000000000000"] },
  });
  // TODO: Handle 'response' of type ApiKeyPair
} catch (err) {
  // TODO: Handle 'err' of type ApiKeyPairs.CreateApiKeyPairError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeyPairs.createApiKeyPair({
  body: { displayName: "some example string", roleIds: ["00000000-0000-0000-0000-000000000000"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKeyPair
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiKeyPairCreate](src/models/api-key-pair-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeyPairs.createApiKeyPair(request)`

- **OnSuccess**: <code>[ApiKeyPair](src/models/api-key-pair.ts)</code>
- **OnError**: throws <code>[ApiKeyPairs.CreateApiKeyPairError](src/resources/api-key-pairs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeyPairs.createApiKeyPair(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKeyPair, ApiKeyPairs.CreateApiKeyPairError&gt;</code>, with `result.value` of type <code>[ApiKeyPair](src/models/api-key-pair.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiKeyPair(request: ApiKeyPairs.DeleteApiKeyPairRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiKeyPairs.DeleteApiKeyPairError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes an API key pair.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.apiKeyPairs.deleteApiKeyPair({ apiKeyPairId: "fe26475d-ec3e-4884-9553-f7356683f7f9" });
} catch (err) {
  // TODO: Handle 'err' of type ApiKeyPairs.DeleteApiKeyPairError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeyPairs.deleteApiKeyPair({
  apiKeyPairId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
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
| <code>apiKeyPairId</code> | <code>string</code> | The ID of the API key pair. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeyPairs.deleteApiKeyPair(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiKeyPairs.DeleteApiKeyPairError](src/resources/api-key-pairs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeyPairs.deleteApiKeyPair(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiKeyPairs.DeleteApiKeyPairError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiKeyPair(request: ApiKeyPairs.GetApiKeyPairRequest, options?: RequestOptions): ApiPromise&lt;ApiKeyPair, ApiKeyPairs.GetApiKeyPairError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches an API key pair by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeyPairs.getApiKeyPair({
    apiKeyPairId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  });
  // TODO: Handle 'response' of type ApiKeyPair
} catch (err) {
  // TODO: Handle 'err' of type ApiKeyPairs.GetApiKeyPairError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeyPairs.getApiKeyPair({
  apiKeyPairId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKeyPair
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiKeyPairId</code> | <code>string</code> | The ID of the API key pair. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeyPairs.getApiKeyPair(request)`

- **OnSuccess**: <code>[ApiKeyPair](src/models/api-key-pair.ts)</code>
- **OnError**: throws <code>[ApiKeyPairs.GetApiKeyPairError](src/resources/api-key-pairs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeyPairs.getApiKeyPair(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKeyPair, ApiKeyPairs.GetApiKeyPairError&gt;</code>, with `result.value` of type <code>[ApiKeyPair](src/models/api-key-pair.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listApiKeyPairs(request: ApiKeyPairs.ListApiKeyPairsRequest, options?: RequestOptions): ApiPromise&lt;CollectionApiKeyPair, ApiKeyPairs.ListApiKeyPairsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all API key pairs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeyPairs.listApiKeyPairs({ cursor: "ZXhhbXBsZTE", limit: 20 });
  // TODO: Handle 'response' of type CollectionApiKeyPair
} catch (err) {
  // TODO: Handle 'err' of type ApiKeyPairs.ListApiKeyPairsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeyPairs.listApiKeyPairs({ cursor: "ZXhhbXBsZTE", limit: 20 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CollectionApiKeyPair
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are returned.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeyPairs.listApiKeyPairs(request)`

- **OnSuccess**: <code>[CollectionApiKeyPair](src/models/collection-api-key-pair.ts)</code>
- **OnError**: throws <code>[ApiKeyPairs.ListApiKeyPairsError](src/resources/api-key-pairs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeyPairs.listApiKeyPairs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CollectionApiKeyPair, ApiKeyPairs.ListApiKeyPairsError&gt;</code>, with `result.value` of type <code>[CollectionApiKeyPair](src/models/collection-api-key-pair.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateApiKeyPair(request: ApiKeyPairs.UpdateApiKeyPairRequest, options?: RequestOptions): ApiPromise&lt;ApiKeyPair, ApiKeyPairs.UpdateApiKeyPairError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an API key pair.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeyPairs.updateApiKeyPair({
    apiKeyPairId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    body: {},
  });
  // TODO: Handle 'response' of type ApiKeyPair
} catch (err) {
  // TODO: Handle 'err' of type ApiKeyPairs.UpdateApiKeyPairError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeyPairs.updateApiKeyPair({
  apiKeyPairId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiKeyPair
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiKeyPairId</code> | <code>string</code> | The ID of the API key pair. |
| <code>body</code> | <code>[ApiKeyPairUpdate](src/models/api-key-pair-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeyPairs.updateApiKeyPair(request)`

- **OnSuccess**: <code>[ApiKeyPair](src/models/api-key-pair.ts)</code>
- **OnError**: throws <code>[ApiKeyPairs.UpdateApiKeyPairError](src/resources/api-key-pairs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeyPairs.updateApiKeyPair(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiKeyPair, ApiKeyPairs.UpdateApiKeyPairError&gt;</code>, with `result.value` of type <code>[ApiKeyPair](src/models/api-key-pair.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogs

> Source: [AuditLogs](src/resources/audit-logs.ts)

<details>
<summary><code>listAuditLogs(request: AuditLogs.ListAuditLogsRequest, options?: RequestOptions): ApiPromise&lt;AuditLogEntries, AuditLogs.ListAuditLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of activity by dashboard users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditLogs.listAuditLogs({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    action: AuditLogAction.Created,
    userId: "14b7b8c5-a6ba-4fb6-bbab-52d43c7f37ef",
    resourceType: "user",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type AuditLogEntries
} catch (err) {
  // TODO: Handle 'err' of type AuditLogs.ListAuditLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auditLogs.listAuditLogs({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  action: AuditLogAction.Created,
  userId: "14b7b8c5-a6ba-4fb6-bbab-52d43c7f37ef",
  resourceType: "user",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditLogEntries
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>action?</code> | <code>[Action](src/models/unions/action.ts)</code> | Filters the results to only the items for which the `audit-log` has an `action` that matches this value. |
| <code>userId?</code> | <code>[UserId](src/models/unions/user-id.ts)</code> | Filters the results to only the items for which the `user` has an `id` that matches this value. |
| <code>resourceType?</code> | <code>[ResourceType](src/models/unions/resource-type.ts)</code> | Filters the results to only the items for which the `audit-log` has a `resource` that matches this type value. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditLogs.listAuditLogs(request)`

- **OnSuccess**: <code>[AuditLogEntries](src/models/audit-log-entries.ts)</code>
- **OnError**: throws <code>[AuditLogs.ListAuditLogsError](src/resources/audit-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auditLogs.listAuditLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditLogEntries, AuditLogs.ListAuditLogsError&gt;</code>, with `result.value` of type <code>[AuditLogEntries](src/models/audit-log-entries.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BuyersApi

> Source: [BuyersApi](src/resources/buyers-api.ts)

<details>
<summary><code>addBuyer(request: BuyersApi.AddBuyerRequest, options?: RequestOptions): ApiPromise&lt;Buyer, BuyersApi.AddBuyerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new buyer record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersApi.addBuyer({ xGr4VyMerchantAccountId: "default", body: {} });
  // TODO: Handle 'response' of type Buyer
} catch (err) {
  // TODO: Handle 'err' of type BuyersApi.AddBuyerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersApi.addBuyer({
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Buyer
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[BuyerCreate](src/models/buyer-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersApi.addBuyer(request)`

- **OnSuccess**: <code>[Buyer](src/models/buyer.ts)</code>
- **OnError**: throws <code>[BuyersApi.AddBuyerError](src/resources/buyers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersApi.addBuyer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Buyer, BuyersApi.AddBuyerError&gt;</code>, with `result.value` of type <code>[Buyer](src/models/buyer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBuyer(request: BuyersApi.DeleteBuyerRequest, options?: RequestOptions): ApiPromise&lt;undefined, BuyersApi.DeleteBuyerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes a buyer record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.buyersApi.deleteBuyer({
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type BuyersApi.DeleteBuyerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersApi.deleteBuyer({
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  xGr4VyMerchantAccountId: "default",
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
| <code>buyerId</code> | <code>string</code> | The ID of the buyer to delete. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersApi.deleteBuyer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BuyersApi.DeleteBuyerError](src/resources/buyers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersApi.deleteBuyer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BuyersApi.DeleteBuyerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBuyer(request: BuyersApi.GetBuyerRequest, options?: RequestOptions): ApiPromise&lt;Buyer, BuyersApi.GetBuyerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a buyer by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersApi.getBuyer({
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Buyer
} catch (err) {
  // TODO: Handle 'err' of type BuyersApi.GetBuyerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersApi.getBuyer({
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Buyer
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buyerId</code> | <code>string</code> | The ID of the buyer to retrieve. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersApi.getBuyer(request)`

- **OnSuccess**: <code>[Buyer](src/models/buyer.ts)</code>
- **OnError**: throws <code>[BuyersApi.GetBuyerError](src/resources/buyers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersApi.getBuyer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Buyer, BuyersApi.GetBuyerError&gt;</code>, with `result.value` of type <code>[Buyer](src/models/buyer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuyers(request: BuyersApi.ListBuyersRequest, options?: RequestOptions): ApiPromise&lt;Buyers, BuyersApi.ListBuyersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all buyers or search for a specific buyer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersApi.listBuyers({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    search: "John",
    externalIdentifier: "buyer-12345",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Buyers
} catch (err) {
  // TODO: Handle 'err' of type BuyersApi.ListBuyersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersApi.listBuyers({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  search: "John",
  externalIdentifier: "buyer-12345",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Buyers
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>search?</code> | <code>[Search](src/models/unions/search.ts)</code> | Filters the results to only the buyers for which the `display_name` or `external_identifier` matches this value. |
| <code>externalIdentifier?</code> | <code>[ExternalIdentifier41](src/models/unions/external-identifier41.ts)</code> | Filters the results to only the buyers for which the `external_identifier` matches this value. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersApi.listBuyers(request)`

- **OnSuccess**: <code>[Buyers](src/models/buyers.ts)</code>
- **OnError**: throws <code>[BuyersApi.ListBuyersError](src/resources/buyers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersApi.listBuyers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Buyers, BuyersApi.ListBuyersError&gt;</code>, with `result.value` of type <code>[Buyers](src/models/buyers.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBuyer(request: BuyersApi.UpdateBuyerRequest, options?: RequestOptions): ApiPromise&lt;Buyer, BuyersApi.UpdateBuyerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a buyer record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersApi.updateBuyer({
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type Buyer
} catch (err) {
  // TODO: Handle 'err' of type BuyersApi.UpdateBuyerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersApi.updateBuyer({
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Buyer
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buyerId</code> | <code>string</code> | The ID of the buyer to edit. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[BuyerUpdate](src/models/buyer-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersApi.updateBuyer(request)`

- **OnSuccess**: <code>[Buyer](src/models/buyer.ts)</code>
- **OnError**: throws <code>[BuyersApi.UpdateBuyerError](src/resources/buyers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersApi.updateBuyer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Buyer, BuyersApi.UpdateBuyerError&gt;</code>, with `result.value` of type <code>[Buyer](src/models/buyer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BuyersGiftCards

> Source: [BuyersGiftCards](src/resources/buyers-gift-cards.ts)

<details>
<summary><code>deleteGiftCard(request: BuyersGiftCards.DeleteGiftCardRequest, options?: RequestOptions): ApiPromise&lt;undefined, BuyersGiftCards.DeleteGiftCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a gift card from our system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.buyersGiftCards.deleteGiftCard({
    giftCardId: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type BuyersGiftCards.DeleteGiftCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersGiftCards.deleteGiftCard({
  giftCardId: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
  xGr4VyMerchantAccountId: "default",
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
| <code>giftCardId</code> | <code>string</code> | The ID of the gift card. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersGiftCards.deleteGiftCard(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BuyersGiftCards.DeleteGiftCardError](src/resources/buyers-gift-cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersGiftCards.deleteGiftCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BuyersGiftCards.DeleteGiftCardError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuyerGiftCards(request: BuyersGiftCards.ListBuyerGiftCardsRequest, options?: RequestOptions): ApiPromise&lt;GiftCardSummaries, BuyersGiftCards.ListBuyerGiftCardsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the stored gift cards for a specific buyer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersGiftCards.listBuyerGiftCards({
    sortBy: SortBy.LastUsedAt,
    orderBy: OrderBy1.Desc,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type GiftCardSummaries
} catch (err) {
  // TODO: Handle 'err' of type BuyersGiftCards.ListBuyerGiftCardsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersGiftCards.listBuyerGiftCards({
  sortBy: SortBy.LastUsedAt,
  orderBy: OrderBy1.Desc,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GiftCardSummaries
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buyerExternalIdentifier?</code> | <code>[BuyerExternalIdentifier22](src/models/unions/buyer-external-identifier22.ts)</code> | - |
| <code>buyerId?</code> | <code>[BuyerId25](src/models/unions/buyer-id25.ts)</code> | - |
| <code>sortBy?</code> | <code>[SortBy41](src/models/unions/sort-by41.ts)</code> | The field to sort the gift cards by. |
| <code>orderBy?</code> | <code>[OrderBy1](src/models/order-by1.ts)</code> | The direction to sort the gift cards in.<br>**Default**: "desc" |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersGiftCards.listBuyerGiftCards(request)`

- **OnSuccess**: <code>[GiftCardSummaries](src/models/gift-card-summaries.ts)</code>
- **OnError**: throws <code>[BuyersGiftCards.ListBuyerGiftCardsError](src/resources/buyers-gift-cards.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersGiftCards.listBuyerGiftCards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GiftCardSummaries, BuyersGiftCards.ListBuyerGiftCardsError&gt;</code>, with `result.value` of type <code>[GiftCardSummaries](src/models/gift-card-summaries.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BuyersPaymentMethods

> Source: [BuyersPaymentMethods](src/resources/buyers-payment-methods.ts)

<details>
<summary><code>listBuyerPaymentMethods(request: BuyersPaymentMethods.ListBuyerPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethodSummaries, BuyersPaymentMethods.ListBuyerPaymentMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the stored payment methods for a specific buyer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersPaymentMethods.listBuyerPaymentMethods({
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    buyerExternalIdentifier: "buyer-12345",
    sortBy: SortBy.LastUsedAt,
    orderBy: OrderBy.Desc,
    country: "US",
    currency: "USD",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PaymentMethodSummaries
} catch (err) {
  // TODO: Handle 'err' of type BuyersPaymentMethods.ListBuyerPaymentMethodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersPaymentMethods.listBuyerPaymentMethods({
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerExternalIdentifier: "buyer-12345",
  sortBy: SortBy.LastUsedAt,
  orderBy: OrderBy.Desc,
  country: "US",
  currency: "USD",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentMethodSummaries
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buyerId?</code> | <code>[BuyerId23](src/models/unions/buyer-id23.ts)</code> | The ID of the buyer to query payment methods for. |
| <code>buyerExternalIdentifier?</code> | <code>[BuyerExternalIdentifier20](src/models/unions/buyer-external-identifier20.ts)</code> | The external identifier of the buyer to query payment methods for. |
| <code>sortBy?</code> | <code>[SortBy4](src/models/unions/sort-by4.ts)</code> | The field to sort the payment methods by. |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The direction to sort the payment methods in.<br>**Default**: "desc" |
| <code>country?</code> | <code>[Country13](src/models/unions/country13.ts)</code> | The country code to filter payment methods by. This only applies to payment methods with a `country` value. |
| <code>currency?</code> | <code>[Currency14](src/models/unions/currency14.ts)</code> | The currency code to filter payment methods by. This only applies to payment methods with a `currency` value. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersPaymentMethods.listBuyerPaymentMethods(request)`

- **OnSuccess**: <code>[PaymentMethodSummaries](src/models/payment-method-summaries.ts)</code>
- **OnError**: throws <code>[BuyersPaymentMethods.ListBuyerPaymentMethodsError](src/resources/buyers-payment-methods.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersPaymentMethods.listBuyerPaymentMethods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentMethodSummaries, BuyersPaymentMethods.ListBuyerPaymentMethodsError&gt;</code>, with `result.value` of type <code>[PaymentMethodSummaries](src/models/payment-method-summaries.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BuyersShippingDetails

> Source: [BuyersShippingDetails](src/resources/buyers-shipping-details.ts)

<details>
<summary><code>addBuyerShippingDetails(request: BuyersShippingDetails.AddBuyerShippingDetailsRequest, options?: RequestOptions): ApiPromise&lt;ShippingDetails, BuyersShippingDetails.AddBuyerShippingDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associate shipping details to a buyer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersShippingDetails.addBuyerShippingDetails({
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type ShippingDetails
} catch (err) {
  // TODO: Handle 'err' of type BuyersShippingDetails.AddBuyerShippingDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersShippingDetails.addBuyerShippingDetails({
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShippingDetails
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buyerId</code> | <code>string</code> | The ID of the buyer to add shipping details to. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[ShippingDetailsCreate](src/models/shipping-details-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersShippingDetails.addBuyerShippingDetails(request)`

- **OnSuccess**: <code>[ShippingDetails](src/models/shipping-details.ts)</code>
- **OnError**: throws <code>[BuyersShippingDetails.AddBuyerShippingDetailsError](src/resources/buyers-shipping-details.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersShippingDetails.addBuyerShippingDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShippingDetails, BuyersShippingDetails.AddBuyerShippingDetailsError&gt;</code>, with `result.value` of type <code>[ShippingDetails](src/models/shipping-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBuyerShippingDetails(request: BuyersShippingDetails.DeleteBuyerShippingDetailsRequest, options?: RequestOptions): ApiPromise&lt;undefined, BuyersShippingDetails.DeleteBuyerShippingDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the shipping details associated to a specific buyer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.buyersShippingDetails.deleteBuyerShippingDetails({
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type BuyersShippingDetails.DeleteBuyerShippingDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersShippingDetails.deleteBuyerShippingDetails({
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
  xGr4VyMerchantAccountId: "default",
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
| <code>buyerId</code> | <code>string</code> | The ID of the buyer to delete shipping details for. |
| <code>shippingDetailsId</code> | <code>string</code> | The ID of the shipping details to delete. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersShippingDetails.deleteBuyerShippingDetails(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BuyersShippingDetails.DeleteBuyerShippingDetailsError](src/resources/buyers-shipping-details.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersShippingDetails.deleteBuyerShippingDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BuyersShippingDetails.DeleteBuyerShippingDetailsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBuyerShippingDetails(request: BuyersShippingDetails.GetBuyerShippingDetailsRequest, options?: RequestOptions): ApiPromise&lt;ShippingDetails, BuyersShippingDetails.GetBuyerShippingDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a buyer's shipping details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersShippingDetails.getBuyerShippingDetails({
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type ShippingDetails
} catch (err) {
  // TODO: Handle 'err' of type BuyersShippingDetails.GetBuyerShippingDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersShippingDetails.getBuyerShippingDetails({
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShippingDetails
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buyerId</code> | <code>string</code> | The ID of the buyer to retrieve shipping details for. |
| <code>shippingDetailsId</code> | <code>string</code> | The ID of the shipping details to retrieve. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersShippingDetails.getBuyerShippingDetails(request)`

- **OnSuccess**: <code>[ShippingDetails](src/models/shipping-details.ts)</code>
- **OnError**: throws <code>[BuyersShippingDetails.GetBuyerShippingDetailsError](src/resources/buyers-shipping-details.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersShippingDetails.getBuyerShippingDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShippingDetails, BuyersShippingDetails.GetBuyerShippingDetailsError&gt;</code>, with `result.value` of type <code>[ShippingDetails](src/models/shipping-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuyerShippingDetails(request: BuyersShippingDetails.ListBuyerShippingDetailsRequest, options?: RequestOptions): ApiPromise&lt;ShippingDetailsList, BuyersShippingDetails.ListBuyerShippingDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the shipping details associated to a specific buyer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersShippingDetails.listBuyerShippingDetails({
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type ShippingDetailsList
} catch (err) {
  // TODO: Handle 'err' of type BuyersShippingDetails.ListBuyerShippingDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersShippingDetails.listBuyerShippingDetails({
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShippingDetailsList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buyerId</code> | <code>string</code> | The ID of the buyer to retrieve shipping details for. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersShippingDetails.listBuyerShippingDetails(request)`

- **OnSuccess**: <code>[ShippingDetailsList](src/models/shipping-details-list.ts)</code>
- **OnError**: throws <code>[BuyersShippingDetails.ListBuyerShippingDetailsError](src/resources/buyers-shipping-details.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersShippingDetails.listBuyerShippingDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShippingDetailsList, BuyersShippingDetails.ListBuyerShippingDetailsError&gt;</code>, with `result.value` of type <code>[ShippingDetailsList](src/models/shipping-details-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBuyerShippingDetails(request: BuyersShippingDetails.UpdateBuyerShippingDetailsRequest, options?: RequestOptions): ApiPromise&lt;ShippingDetails, BuyersShippingDetails.UpdateBuyerShippingDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the shipping details associated to a specific buyer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyersShippingDetails.updateBuyerShippingDetails({
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type ShippingDetails
} catch (err) {
  // TODO: Handle 'err' of type BuyersShippingDetails.UpdateBuyerShippingDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyersShippingDetails.updateBuyerShippingDetails({
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShippingDetails
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buyerId</code> | <code>string</code> | The ID of the buyer to update shipping details for. |
| <code>shippingDetailsId</code> | <code>string</code> | The ID of the shipping details to update. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[ShippingDetailsUpdate](src/models/shipping-details-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyersShippingDetails.updateBuyerShippingDetails(request)`

- **OnSuccess**: <code>[ShippingDetails](src/models/shipping-details.ts)</code>
- **OnError**: throws <code>[BuyersShippingDetails.UpdateBuyerShippingDetailsError](src/resources/buyers-shipping-details.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyersShippingDetails.updateBuyerShippingDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShippingDetails, BuyersShippingDetails.UpdateBuyerShippingDetailsError&gt;</code>, with `result.value` of type <code>[ShippingDetails](src/models/shipping-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CardDetails

> Source: [CardDetails](src/resources/card-details.ts)

<details>
<summary><code>getCardDetails(request: CardDetails.GetCardDetailsRequest, options?: RequestOptions): ApiPromise&lt;CardDetail, CardDetails.GetCardDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details about a particular card based on the BIN. Use the currency, amount, and other fields to apply any Flow rules that may put requirements on the card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cardDetails.getCardDetails({
    currency: "USD",
    bin: "411111",
    paymentMethodId: "123e4567-e89b-12d3-a456-426614174000",
    country: "US",
    amount: 1299,
    intent: TransactionIntent.Authorize,
    isSubsequentPayment: false,
    merchantInitiated: false,
    metadata: "some example string",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type CardDetail
} catch (err) {
  // TODO: Handle 'err' of type CardDetails.GetCardDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cardDetails.getCardDetails({
  currency: "USD",
  bin: "411111",
  paymentMethodId: "123e4567-e89b-12d3-a456-426614174000",
  country: "US",
  amount: 1299,
  intent: TransactionIntent.Authorize,
  isSubsequentPayment: false,
  merchantInitiated: false,
  metadata: "some example string",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>currency</code> | <code>string</code> | The three-letter ISO currency code. |
| <code>bin?</code> | <code>[Bin2](src/models/unions/bin2.ts)</code> | The bank identification number (BIN) of the card. |
| <code>paymentMethodId?</code> | <code>[PaymentMethodId1](src/models/unions/payment-method-id1.ts)</code> | The ID of the payment method to check, instead of the `bin`. |
| <code>country?</code> | <code>[Country15](src/models/unions/country15.ts)</code> | The two-letter ISO country code. |
| <code>amount?</code> | <code>[Amount12](src/models/unions/amount12.ts)</code> | The payment amount in the smallest currency unit. |
| <code>intent?</code> | <code>[Intent11](src/models/unions/intent11.ts)</code> | The transaction intent. |
| <code>isSubsequentPayment?</code> | <code>[IsSubsequentPayment3](src/models/unions/is-subsequent-payment3.ts)</code> | Whether this is a subsequent payment. |
| <code>merchantInitiated?</code> | <code>[MerchantInitiated3](src/models/unions/merchant-initiated3.ts)</code> | Whether the transaction is merchant-initiated |
| <code>metadata?</code> | <code>[Metadata13](src/models/unions/metadata13.ts)</code> | Additional metadata for the transaction in JSON format |
| <code>paymentSource?</code> | <code>[PaymentSource2](src/models/unions/payment-source2.ts)</code> | The source of the transaction payment |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cardDetails.getCardDetails(request)`

- **OnSuccess**: <code>[CardDetail](src/models/card-detail.ts)</code>
- **OnError**: throws <code>[CardDetails.GetCardDetailsError](src/resources/card-details.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cardDetails.getCardDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardDetail, CardDetails.GetCardDetailsError&gt;</code>, with `result.value` of type <code>[CardDetail](src/models/card-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CardSchemeDefinitionsApi

> Source: [CardSchemeDefinitionsApi](src/resources/card-scheme-definitions-api.ts)

<details>
<summary><code>listCardSchemeDefinitions(request: CardSchemeDefinitionsApi.ListCardSchemeDefinitionsRequest, options?: RequestOptions): ApiPromise&lt;CardSchemeDefinitions, CardSchemeDefinitionsApi.ListCardSchemeDefinitionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a list of the definitions of each card scheme.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cardSchemeDefinitionsApi.listCardSchemeDefinitions({
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type CardSchemeDefinitions
} catch (err) {
  // TODO: Handle 'err' of type CardSchemeDefinitionsApi.ListCardSchemeDefinitionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cardSchemeDefinitionsApi.listCardSchemeDefinitions({
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CardSchemeDefinitions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cardSchemeDefinitionsApi.listCardSchemeDefinitions(request)`

- **OnSuccess**: <code>[CardSchemeDefinitions](src/models/card-scheme-definitions.ts)</code>
- **OnError**: throws <code>[CardSchemeDefinitionsApi.ListCardSchemeDefinitionsError](src/resources/card-scheme-definitions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cardSchemeDefinitionsApi.listCardSchemeDefinitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CardSchemeDefinitions, CardSchemeDefinitionsApi.ListCardSchemeDefinitionsError&gt;</code>, with `result.value` of type <code>[CardSchemeDefinitions](src/models/card-scheme-definitions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CheckoutSessions

> Source: [CheckoutSessions](src/resources/checkout-sessions.ts)

<details>
<summary><code>createCheckoutSession(request: CheckoutSessions.CreateCheckoutSessionRequest, options?: RequestOptions): ApiPromise&lt;CheckoutSession, CheckoutSessions.CreateCheckoutSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new checkout session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutSessions.createCheckoutSession({
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type CheckoutSession
} catch (err) {
  // TODO: Handle 'err' of type CheckoutSessions.CreateCheckoutSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutSessions.createCheckoutSession({
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutSession
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body?</code> | <code>[Body3](src/models/unions/body3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutSessions.createCheckoutSession(request)`

- **OnSuccess**: <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: throws <code>[CheckoutSessions.CreateCheckoutSessionError](src/resources/checkout-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutSessions.createCheckoutSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutSession, CheckoutSessions.CreateCheckoutSessionError&gt;</code>, with `result.value` of type <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCheckoutSession(request: CheckoutSessions.DeleteCheckoutSessionRequest, options?: RequestOptions): ApiPromise&lt;undefined, CheckoutSessions.DeleteCheckoutSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a checkout session and all of its (PCI) data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.checkoutSessions.deleteCheckoutSession({
    sessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type CheckoutSessions.DeleteCheckoutSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutSessions.deleteCheckoutSession({
  sessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
  xGr4VyMerchantAccountId: "default",
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
| <code>sessionId</code> | <code>string</code> | The ID of the checkout session. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutSessions.deleteCheckoutSession(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CheckoutSessions.DeleteCheckoutSessionError](src/resources/checkout-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutSessions.deleteCheckoutSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CheckoutSessions.DeleteCheckoutSessionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCheckoutSession(request: CheckoutSessions.GetCheckoutSessionRequest, options?: RequestOptions): ApiPromise&lt;CheckoutSession, CheckoutSessions.GetCheckoutSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the information stored on a checkout session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutSessions.getCheckoutSession({
    sessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type CheckoutSession
} catch (err) {
  // TODO: Handle 'err' of type CheckoutSessions.GetCheckoutSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutSessions.getCheckoutSession({
  sessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutSession
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId</code> | <code>string</code> | The ID of the checkout session. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutSessions.getCheckoutSession(request)`

- **OnSuccess**: <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: throws <code>[CheckoutSessions.GetCheckoutSessionError](src/resources/checkout-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutSessions.getCheckoutSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutSession, CheckoutSessions.GetCheckoutSessionError&gt;</code>, with `result.value` of type <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCheckoutSessionAcquirer(request: CheckoutSessions.GetCheckoutSessionAcquirerRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CheckoutSessions.GetCheckoutSessionAcquirerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a checkout session acquirer data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutSessions.getCheckoutSessionAcquirer({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CheckoutSessions.GetCheckoutSessionAcquirerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutSessions.getCheckoutSessionAcquirer({
  sessionId: "00000000-0000-0000-0000-000000000000",
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
| <code>sessionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutSessions.getCheckoutSessionAcquirer(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CheckoutSessions.GetCheckoutSessionAcquirerError](src/resources/checkout-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutSessions.getCheckoutSessionAcquirer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CheckoutSessions.GetCheckoutSessionAcquirerError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCheckoutSessionCardDetails(request: CheckoutSessions.GetCheckoutSessionCardDetailsRequest, options?: RequestOptions): ApiPromise&lt;CheckoutSessionCardDetails, CheckoutSessions.GetCheckoutSessionCardDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the card details for a given BIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutSessions.getCheckoutSessionCardDetails({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: { bin: "some example string" },
  });
  // TODO: Handle 'response' of type CheckoutSessionCardDetails
} catch (err) {
  // TODO: Handle 'err' of type CheckoutSessions.GetCheckoutSessionCardDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutSessions.getCheckoutSessionCardDetails({
  sessionId: "00000000-0000-0000-0000-000000000000",
  body: { bin: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutSessionCardDetails
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CheckoutSessionCardDetailsRequest](src/models/checkout-session-card-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutSessions.getCheckoutSessionCardDetails(request)`

- **OnSuccess**: <code>[CheckoutSessionCardDetails](src/models/checkout-session-card-details.ts)</code>
- **OnError**: throws <code>[CheckoutSessions.GetCheckoutSessionCardDetailsError](src/resources/checkout-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutSessions.getCheckoutSessionCardDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutSessionCardDetails, CheckoutSessions.GetCheckoutSessionCardDetailsError&gt;</code>, with `result.value` of type <code>[CheckoutSessionCardDetails](src/models/checkout-session-card-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCheckoutSession(request: CheckoutSessions.UpdateCheckoutSessionRequest, options?: RequestOptions): ApiPromise&lt;CheckoutSession, CheckoutSessions.UpdateCheckoutSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the information stored on a checkout session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutSessions.updateCheckoutSession({
    sessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type CheckoutSession
} catch (err) {
  // TODO: Handle 'err' of type CheckoutSessions.UpdateCheckoutSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutSessions.updateCheckoutSession({
  sessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutSession
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sessionId</code> | <code>string</code> | The ID of the checkout session. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[CheckoutSessionUpdate](src/models/checkout-session-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutSessions.updateCheckoutSession(request)`

- **OnSuccess**: <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: throws <code>[CheckoutSessions.UpdateCheckoutSessionError](src/resources/checkout-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutSessions.updateCheckoutSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutSession, CheckoutSessions.UpdateCheckoutSessionError&gt;</code>, with `result.value` of type <code>[CheckoutSession](src/models/checkout-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCheckoutSessionFields(request: CheckoutSessions.UpdateCheckoutSessionFieldsRequest, options?: RequestOptions): ApiPromise&lt;undefined, CheckoutSessions.UpdateCheckoutSessionFieldsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a checkout session with card data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.checkoutSessions.updateCheckoutSessionFields({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: {
      paymentMethod: { method: "card", number: "some example string", expirationDate: "some example string" },
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type CheckoutSessions.UpdateCheckoutSessionFieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutSessions.updateCheckoutSessionFields({
  sessionId: "00000000-0000-0000-0000-000000000000",
  body: {
    paymentMethod: { method: "card", number: "some example string", expirationDate: "some example string" },
  },
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
| <code>sessionId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CheckoutSessionSecureFields](src/models/checkout-session-secure-fields.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutSessions.updateCheckoutSessionFields(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CheckoutSessions.UpdateCheckoutSessionFieldsError](src/resources/checkout-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checkoutSessions.updateCheckoutSessionFields(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CheckoutSessions.UpdateCheckoutSessionFieldsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DigitalWalletsSessions

> Source: [DigitalWalletsSessions](src/resources/digital-wallets-sessions.ts)

<details>
<summary><code>completePazeMobileSession(request: DigitalWalletsSessions.CompletePazeMobileSessionRequest, options?: RequestOptions): ApiPromise&lt;PazeSessionComplete, DigitalWalletsSessions.CompletePazeMobileSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Complete a Paze checkout session and retrieve the secure payload required to settle the payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSessions.completePazeMobileSession({
    xGr4VyMerchantAccountId: "default",
    body: {
      sessionId: "some example string",
      code: "some example string",
      accessToken: "some example string",
      transactionType: Transactiontype1.Purchase,
    },
  });
  // TODO: Handle 'response' of type PazeSessionComplete
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSessions.CompletePazeMobileSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSessions.completePazeMobileSession({
  xGr4VyMerchantAccountId: "default",
  body: {
    sessionId: "some example string",
    code: "some example string",
    accessToken: "some example string",
    transactionType: Transactiontype1.Purchase,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PazeSessionComplete
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PazeSessionCompleteRequest](src/models/paze-session-complete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSessions.completePazeMobileSession(request)`

- **OnSuccess**: <code>[PazeSessionComplete](src/models/paze-session-complete.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSessions.CompletePazeMobileSessionError](src/resources/digital-wallets-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSessions.completePazeMobileSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PazeSessionComplete, DigitalWalletsSessions.CompletePazeMobileSessionError&gt;</code>, with `result.value` of type <code>[PazeSessionComplete](src/models/paze-session-complete.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createApplePayDigitalWalletSession(request: DigitalWalletsSessions.CreateApplePayDigitalWalletSessionRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DigitalWalletsSessions.CreateApplePayDigitalWalletSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a session for use with Apple Pay.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSessions.createApplePayDigitalWalletSession({
    xGr4VyMerchantAccountId: "default",
    body: { validationUrl: "some example string", domainName: "some example string" },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSessions.CreateApplePayDigitalWalletSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSessions.createApplePayDigitalWalletSession({
  xGr4VyMerchantAccountId: "default",
  body: { validationUrl: "some example string", domainName: "some example string" },
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
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[ApplePaySessionRequest](src/models/apple-pay-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSessions.createApplePayDigitalWalletSession(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DigitalWalletsSessions.CreateApplePayDigitalWalletSessionError](src/resources/digital-wallets-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSessions.createApplePayDigitalWalletSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DigitalWalletsSessions.CreateApplePayDigitalWalletSessionError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createClickToPayDigitalWalletSession(request: DigitalWalletsSessions.CreateClickToPayDigitalWalletSessionRequest, options?: RequestOptions): ApiPromise&lt;ClickToPaySession, DigitalWalletsSessions.CreateClickToPayDigitalWalletSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a session for use with Click to Pay.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSessions.createClickToPayDigitalWalletSession({
    body: { checkoutSessionId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type ClickToPaySession
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSessions.CreateClickToPayDigitalWalletSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSessions.createClickToPayDigitalWalletSession({
  body: { checkoutSessionId: "00000000-0000-0000-0000-000000000000" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickToPaySession
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ClickToPaySessionRequest](src/models/click-to-pay-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSessions.createClickToPayDigitalWalletSession(request)`

- **OnSuccess**: <code>[ClickToPaySession](src/models/click-to-pay-session.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSessions.CreateClickToPayDigitalWalletSessionError](src/resources/digital-wallets-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSessions.createClickToPayDigitalWalletSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickToPaySession, DigitalWalletsSessions.CreateClickToPayDigitalWalletSessionError&gt;</code>, with `result.value` of type <code>[ClickToPaySession](src/models/click-to-pay-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGooglePayDigitalWalletSession(request: DigitalWalletsSessions.CreateGooglePayDigitalWalletSessionRequest, options?: RequestOptions): ApiPromise&lt;GooglePaySession, DigitalWalletsSessions.CreateGooglePayDigitalWalletSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a session for use with Google Pay.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSessions.createGooglePayDigitalWalletSession({
    xGr4VyMerchantAccountId: "default",
    body: { originDomain: "some example string" },
  });
  // TODO: Handle 'response' of type GooglePaySession
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSessions.CreateGooglePayDigitalWalletSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSessions.createGooglePayDigitalWalletSession({
  xGr4VyMerchantAccountId: "default",
  body: { originDomain: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GooglePaySession
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[GooglePaySessionRequest](src/models/google-pay-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSessions.createGooglePayDigitalWalletSession(request)`

- **OnSuccess**: <code>[GooglePaySession](src/models/google-pay-session.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSessions.CreateGooglePayDigitalWalletSessionError](src/resources/digital-wallets-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSessions.createGooglePayDigitalWalletSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GooglePaySession, DigitalWalletsSessions.CreateGooglePayDigitalWalletSessionError&gt;</code>, with `result.value` of type <code>[GooglePaySession](src/models/google-pay-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPazeDigitalWalletSession(request: DigitalWalletsSessions.CreatePazeDigitalWalletSessionRequest, options?: RequestOptions): ApiPromise&lt;ResponseCreatePazeDigitalWalletSession, DigitalWalletsSessions.CreatePazeDigitalWalletSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a session for use with Paze.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSessions.createPazeDigitalWalletSession({
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type ResponseCreatePazeDigitalWalletSession
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSessions.CreatePazeDigitalWalletSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSessions.createPazeDigitalWalletSession({
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseCreatePazeDigitalWalletSession
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PazeSessionRequest](src/models/paze-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSessions.createPazeDigitalWalletSession(request)`

- **OnSuccess**: <code>[ResponseCreatePazeDigitalWalletSession](src/models/unions/response-create-paze-digital-wallet-session.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSessions.CreatePazeDigitalWalletSessionError](src/resources/digital-wallets-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSessions.createPazeDigitalWalletSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseCreatePazeDigitalWalletSession, DigitalWalletsSessions.CreatePazeDigitalWalletSessionError&gt;</code>, with `result.value` of type <code>[ResponseCreatePazeDigitalWalletSession](src/models/unions/response-create-paze-digital-wallet-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPazeMobileSession(request: DigitalWalletsSessions.CreatePazeMobileSessionRequest, options?: RequestOptions): ApiPromise&lt;PazeMobileSessionCreate, DigitalWalletsSessions.CreatePazeMobileSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a mobile session for use with Paze.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSessions.createPazeMobileSession({
    xGr4VyMerchantAccountId: "default",
    body: {
      client: { id: "some example string" },
      sessionId: "some example string",
      accessToken: "some example string",
      callbackUrlScheme: "some example string",
      intent: Intent.ReviewAndPay,
    },
  });
  // TODO: Handle 'response' of type PazeMobileSessionCreate
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSessions.CreatePazeMobileSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSessions.createPazeMobileSession({
  xGr4VyMerchantAccountId: "default",
  body: {
    client: { id: "some example string" },
    sessionId: "some example string",
    accessToken: "some example string",
    callbackUrlScheme: "some example string",
    intent: Intent.ReviewAndPay,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PazeMobileSessionCreate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PazeMobileSessionCreateRequest](src/models/paze-mobile-session-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSessions.createPazeMobileSession(request)`

- **OnSuccess**: <code>[PazeMobileSessionCreate](src/models/paze-mobile-session-create.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSessions.CreatePazeMobileSessionError](src/resources/digital-wallets-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSessions.createPazeMobileSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PazeMobileSessionCreate, DigitalWalletsSessions.CreatePazeMobileSessionError&gt;</code>, with `result.value` of type <code>[PazeMobileSessionCreate](src/models/paze-mobile-session-create.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reviewPazeMobileSession(request: DigitalWalletsSessions.ReviewPazeMobileSessionRequest, options?: RequestOptions): ApiPromise&lt;PazeSessionReview, DigitalWalletsSessions.ReviewPazeMobileSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Review a Paze checkout session and retrieve the selected card, consumer, and shipping address details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSessions.reviewPazeMobileSession({
    xGr4VyMerchantAccountId: "default",
    body: {
      sessionId: "some example string",
      code: "some example string",
      accessToken: "some example string",
    },
  });
  // TODO: Handle 'response' of type PazeSessionReview
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSessions.ReviewPazeMobileSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSessions.reviewPazeMobileSession({
  xGr4VyMerchantAccountId: "default",
  body: { sessionId: "some example string", code: "some example string", accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PazeSessionReview
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PazeSessionReviewRequest](src/models/paze-session-review-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSessions.reviewPazeMobileSession(request)`

- **OnSuccess**: <code>[PazeSessionReview](src/models/paze-session-review.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSessions.ReviewPazeMobileSessionError](src/resources/digital-wallets-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSessions.reviewPazeMobileSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PazeSessionReview, DigitalWalletsSessions.ReviewPazeMobileSessionError&gt;</code>, with `result.value` of type <code>[PazeSessionReview](src/models/paze-session-review.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DigitalWalletsSetup

> Source: [DigitalWalletsSetup](src/resources/digital-wallets-setup.ts)

<details>
<summary><code>configureDigitalWallet(request: DigitalWalletsSetup.ConfigureDigitalWalletRequest, options?: RequestOptions): ApiPromise&lt;DigitalWallet, DigitalWalletsSetup.ConfigureDigitalWalletError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a digital wallet like Apple Pay, Google Pay, or Click to Pay.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSetup.configureDigitalWallet({
    xGr4VyMerchantAccountId: "default",
    body: {
      provider: DigitalWalletProvider.Apple,
      merchantName: "some example string",
      acceptTermsAndConditions: true,
    },
  });
  // TODO: Handle 'response' of type DigitalWallet
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSetup.ConfigureDigitalWalletError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSetup.configureDigitalWallet({
  xGr4VyMerchantAccountId: "default",
  body: {
    provider: DigitalWalletProvider.Apple,
    merchantName: "some example string",
    acceptTermsAndConditions: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DigitalWallet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[DigitalWalletCreate](src/models/digital-wallet-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSetup.configureDigitalWallet(request)`

- **OnSuccess**: <code>[DigitalWallet](src/models/digital-wallet.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSetup.ConfigureDigitalWalletError](src/resources/digital-wallets-setup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSetup.configureDigitalWallet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DigitalWallet, DigitalWalletsSetup.ConfigureDigitalWalletError&gt;</code>, with `result.value` of type <code>[DigitalWallet](src/models/digital-wallet.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDigitalWallet(request: DigitalWalletsSetup.DeleteDigitalWalletRequest, options?: RequestOptions): ApiPromise&lt;undefined, DigitalWalletsSetup.DeleteDigitalWalletError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a configured digital wallet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.digitalWalletsSetup.deleteDigitalWallet({
    digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSetup.DeleteDigitalWalletError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSetup.deleteDigitalWallet({
  digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
  xGr4VyMerchantAccountId: "default",
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
| <code>digitalWalletId</code> | <code>string</code> | The ID of the digital wallet to delete. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSetup.deleteDigitalWallet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DigitalWalletsSetup.DeleteDigitalWalletError](src/resources/digital-wallets-setup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSetup.deleteDigitalWallet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DigitalWalletsSetup.DeleteDigitalWalletError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDigitalWallet(request: DigitalWalletsSetup.GetDigitalWalletRequest, options?: RequestOptions): ApiPromise&lt;DigitalWallet, DigitalWalletsSetup.GetDigitalWalletError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the details a digital wallet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSetup.getDigitalWallet({
    digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type DigitalWallet
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSetup.GetDigitalWalletError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSetup.getDigitalWallet({
  digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DigitalWallet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>digitalWalletId</code> | <code>string</code> | The ID of the digital wallet to read. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSetup.getDigitalWallet(request)`

- **OnSuccess**: <code>[DigitalWallet](src/models/digital-wallet.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSetup.GetDigitalWalletError](src/resources/digital-wallets-setup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSetup.getDigitalWallet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DigitalWallet, DigitalWalletsSetup.GetDigitalWalletError&gt;</code>, with `result.value` of type <code>[DigitalWallet](src/models/digital-wallet.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDigitalWallets(request: DigitalWalletsSetup.ListDigitalWalletsRequest, options?: RequestOptions): ApiPromise&lt;DigitalWallets, DigitalWalletsSetup.ListDigitalWalletsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List configured digital wallets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSetup.listDigitalWallets({
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type DigitalWallets
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSetup.ListDigitalWalletsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSetup.listDigitalWallets({
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DigitalWallets
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSetup.listDigitalWallets(request)`

- **OnSuccess**: <code>[DigitalWallets](src/models/digital-wallets.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSetup.ListDigitalWalletsError](src/resources/digital-wallets-setup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSetup.listDigitalWallets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DigitalWallets, DigitalWalletsSetup.ListDigitalWalletsError&gt;</code>, with `result.value` of type <code>[DigitalWallets](src/models/digital-wallets.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerDigitalWalletDomain(request: DigitalWalletsSetup.RegisterDigitalWalletDomainRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DigitalWalletsSetup.RegisterDigitalWalletDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a digital wallet domain (Apple Pay only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSetup.registerDigitalWalletDomain({
    digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
    xGr4VyMerchantAccountId: "default",
    body: { domainName: "some example string" },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSetup.RegisterDigitalWalletDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSetup.registerDigitalWalletDomain({
  digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
  xGr4VyMerchantAccountId: "default",
  body: { domainName: "some example string" },
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
| <code>digitalWalletId</code> | <code>string</code> | The ID of the digital wallet to remove a domain for. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[DigitalWalletDomain](src/models/digital-wallet-domain.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSetup.registerDigitalWalletDomain(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DigitalWalletsSetup.RegisterDigitalWalletDomainError](src/resources/digital-wallets-setup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSetup.registerDigitalWalletDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DigitalWalletsSetup.RegisterDigitalWalletDomainError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unregisterDigitalWalletDomain(request: DigitalWalletsSetup.UnregisterDigitalWalletDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, DigitalWalletsSetup.UnregisterDigitalWalletDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a digital wallet domain (Apple Pay only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.digitalWalletsSetup.unregisterDigitalWalletDomain({
    digitalWalletId: "00000000-0000-0000-0000-000000000000",
    xGr4VyMerchantAccountId: "default",
    body: { domainName: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSetup.UnregisterDigitalWalletDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSetup.unregisterDigitalWalletDomain({
  digitalWalletId: "00000000-0000-0000-0000-000000000000",
  xGr4VyMerchantAccountId: "default",
  body: { domainName: "some example string" },
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
| <code>digitalWalletId</code> | <code>string</code> | - |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[DigitalWalletDomain](src/models/digital-wallet-domain.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSetup.unregisterDigitalWalletDomain(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DigitalWalletsSetup.UnregisterDigitalWalletDomainError](src/resources/digital-wallets-setup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSetup.unregisterDigitalWalletDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DigitalWalletsSetup.UnregisterDigitalWalletDomainError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDigitalWallet(request: DigitalWalletsSetup.UpdateDigitalWalletRequest, options?: RequestOptions): ApiPromise&lt;DigitalWallet, DigitalWalletsSetup.UpdateDigitalWalletError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a digital wallet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitalWalletsSetup.updateDigitalWallet({
    digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type DigitalWallet
} catch (err) {
  // TODO: Handle 'err' of type DigitalWalletsSetup.UpdateDigitalWalletError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitalWalletsSetup.updateDigitalWallet({
  digitalWalletId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DigitalWallet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>digitalWalletId</code> | <code>string</code> | The ID of the digital wallet to edit. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[DigitalWalletUpdate](src/models/digital-wallet-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitalWalletsSetup.updateDigitalWallet(request)`

- **OnSuccess**: <code>[DigitalWallet](src/models/digital-wallet.ts)</code>
- **OnError**: throws <code>[DigitalWalletsSetup.UpdateDigitalWalletError](src/resources/digital-wallets-setup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitalWalletsSetup.updateDigitalWallet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DigitalWallet, DigitalWalletsSetup.UpdateDigitalWalletError&gt;</code>, with `result.value` of type <code>[DigitalWallet](src/models/digital-wallet.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GiftCardsApi

> Source: [GiftCardsApi](src/resources/gift-cards-api.ts)

<details>
<summary><code>activateGiftCard(request: GiftCardsApi.ActivateGiftCardRequest, options?: RequestOptions): ApiPromise&lt;GiftCard, GiftCardsApi.ActivateGiftCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate a physical gift card through the primary gift card service. Set `store` to `true` to also store the activated gift card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCardsApi.activateGiftCard({
    xGr4VyMerchantAccountId: "default",
    body: { number: "some example string" },
  });
  // TODO: Handle 'response' of type GiftCard
} catch (err) {
  // TODO: Handle 'err' of type GiftCardsApi.ActivateGiftCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCardsApi.activateGiftCard({
  xGr4VyMerchantAccountId: "default",
  body: { number: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GiftCard
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>[IdempotencyKey](src/models/unions/idempotency-key.ts)</code> | A unique key that identifies this request. If supported by the gift card service, the value will be forwarded to make the activation idempotent. We recommend using V4 UUIDs, or another random string with enough entropy to avoid collisions. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[GiftCardActivationCreate](src/models/gift-card-activation-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCardsApi.activateGiftCard(request)`

- **OnSuccess**: <code>[GiftCard](src/models/gift-card.ts)</code>
- **OnError**: throws <code>[GiftCardsApi.ActivateGiftCardError](src/resources/gift-cards-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.giftCardsApi.activateGiftCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GiftCard, GiftCardsApi.ActivateGiftCardError&gt;</code>, with `result.value` of type <code>[GiftCard](src/models/gift-card.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGiftCard(request: GiftCardsApi.CreateGiftCardRequest, options?: RequestOptions): ApiPromise&lt;GiftCard, GiftCardsApi.CreateGiftCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Store a new gift card in the vault.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCardsApi.createGiftCard({
    xGr4VyMerchantAccountId: "default",
    body: { number: "some example string", pin: "some example string" },
  });
  // TODO: Handle 'response' of type GiftCard
} catch (err) {
  // TODO: Handle 'err' of type GiftCardsApi.CreateGiftCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCardsApi.createGiftCard({
  xGr4VyMerchantAccountId: "default",
  body: { number: "some example string", pin: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GiftCard
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[GiftCardCreate](src/models/gift-card-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCardsApi.createGiftCard(request)`

- **OnSuccess**: <code>[GiftCard](src/models/gift-card.ts)</code>
- **OnError**: throws <code>[GiftCardsApi.CreateGiftCardError](src/resources/gift-cards-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.giftCardsApi.createGiftCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GiftCard, GiftCardsApi.CreateGiftCardError&gt;</code>, with `result.value` of type <code>[GiftCard](src/models/gift-card.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGiftCard(request: GiftCardsApi.GetGiftCardRequest, options?: RequestOptions): ApiPromise&lt;GiftCard, GiftCardsApi.GetGiftCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch details about a gift card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCardsApi.getGiftCard({
    giftCardId: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type GiftCard
} catch (err) {
  // TODO: Handle 'err' of type GiftCardsApi.GetGiftCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCardsApi.getGiftCard({
  giftCardId: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GiftCard
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>giftCardId</code> | <code>string</code> | The ID of the gift card. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCardsApi.getGiftCard(request)`

- **OnSuccess**: <code>[GiftCard](src/models/gift-card.ts)</code>
- **OnError**: throws <code>[GiftCardsApi.GetGiftCardError](src/resources/gift-cards-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.giftCardsApi.getGiftCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GiftCard, GiftCardsApi.GetGiftCardError&gt;</code>, with `result.value` of type <code>[GiftCard](src/models/gift-card.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>issueGiftCard(request: GiftCardsApi.IssueGiftCardRequest, options?: RequestOptions): ApiPromise&lt;GiftCardIssuance, GiftCardsApi.IssueGiftCardError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issue a new virtual gift card through the primary gift card service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCardsApi.issueGiftCard({
    xGr4VyMerchantAccountId: "default",
    body: { theme: "some example string", amount: 1, currency: "some example string" },
  });
  // TODO: Handle 'response' of type GiftCardIssuance
} catch (err) {
  // TODO: Handle 'err' of type GiftCardsApi.IssueGiftCardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCardsApi.issueGiftCard({
  xGr4VyMerchantAccountId: "default",
  body: { theme: "some example string", amount: 1, currency: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GiftCardIssuance
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>idempotencyKey?</code> | <code>[IdempotencyKey1](src/models/unions/idempotency-key1.ts)</code> | A unique key forwarded to the gift card service to make the issuance idempotent. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[GiftCardIssuanceCreate](src/models/gift-card-issuance-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCardsApi.issueGiftCard(request)`

- **OnSuccess**: <code>[GiftCardIssuance](src/models/gift-card-issuance.ts)</code>
- **OnError**: throws <code>[GiftCardsApi.IssueGiftCardError](src/resources/gift-cards-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.giftCardsApi.issueGiftCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GiftCardIssuance, GiftCardsApi.IssueGiftCardError&gt;</code>, with `result.value` of type <code>[GiftCardIssuance](src/models/gift-card-issuance.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGiftCardBalances(request: GiftCardsApi.ListGiftCardBalancesRequest, options?: RequestOptions): ApiPromise&lt;GiftCardSummaries, GiftCardsApi.ListGiftCardBalancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the balances for one or more gift cards.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCardsApi.listGiftCardBalances({
    xGr4VyMerchantAccountId: "default",
    body: { items: [{ number: "some example string", pin: "some example string" }] },
  });
  // TODO: Handle 'response' of type GiftCardSummaries
} catch (err) {
  // TODO: Handle 'err' of type GiftCardsApi.ListGiftCardBalancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCardsApi.listGiftCardBalances({
  xGr4VyMerchantAccountId: "default",
  body: { items: [{ number: "some example string", pin: "some example string" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GiftCardSummaries
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[GiftCardBalanceRequest](src/models/gift-card-balance-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCardsApi.listGiftCardBalances(request)`

- **OnSuccess**: <code>[GiftCardSummaries](src/models/gift-card-summaries.ts)</code>
- **OnError**: throws <code>[GiftCardsApi.ListGiftCardBalancesError](src/resources/gift-cards-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.giftCardsApi.listGiftCardBalances(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GiftCardSummaries, GiftCardsApi.ListGiftCardBalancesError&gt;</code>, with `result.value` of type <code>[GiftCardSummaries](src/models/gift-card-summaries.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGiftCards(request: GiftCardsApi.ListGiftCardsRequest, options?: RequestOptions): ApiPromise&lt;GiftCards, GiftCardsApi.ListGiftCardsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Browser all gift cards.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCardsApi.listGiftCards({ xGr4VyMerchantAccountId: "default" });
  // TODO: Handle 'response' of type GiftCards
} catch (err) {
  // TODO: Handle 'err' of type GiftCardsApi.ListGiftCardsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCardsApi.listGiftCards({ xGr4VyMerchantAccountId: "default" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GiftCards
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buyerExternalIdentifier?</code> | <code>[BuyerExternalIdentifier22](src/models/unions/buyer-external-identifier22.ts)</code> | - |
| <code>buyerId?</code> | <code>[BuyerId25](src/models/unions/buyer-id25.ts)</code> | - |
| <code>cursor?</code> | <code>[Cursor2](src/models/unions/cursor2.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCardsApi.listGiftCards(request)`

- **OnSuccess**: <code>[GiftCards](src/models/gift-cards.ts)</code>
- **OnError**: throws <code>[GiftCardsApi.ListGiftCardsError](src/resources/gift-cards-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.giftCardsApi.listGiftCards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GiftCards, GiftCardsApi.ListGiftCardsError&gt;</code>, with `result.value` of type <code>[GiftCards](src/models/gift-cards.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/resources/insights.ts)

<details>
<summary><code>getMetricsExplorerModule(request: Insights.GetMetricsExplorerModuleRequest, options?: RequestOptions): ApiPromise&lt;ModuleResponse[], Insights.GetMetricsExplorerModuleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the data for a module. The data to be used depends on `source`.<br/>**Important:** The currency filter query parameter is **required** when the `metric` is set to `volume`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getMetricsExplorerModule({
    source: MetricsExplorerSource1.Authentication,
    metric: MetricsExplorerMetric3.Volume,
    module: MetricsExplorerModule1.AuthenticationOutcome,
    datetimeRange: "2025-01-01T00:00:00/P7D",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type ModuleResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetMetricsExplorerModuleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.getMetricsExplorerModule({
  source: MetricsExplorerSource1.Authentication,
  metric: MetricsExplorerMetric3.Volume,
  module: MetricsExplorerModule1.AuthenticationOutcome,
  datetimeRange: "2025-01-01T00:00:00/P7D",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModuleResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source</code> | <code>[MetricsExplorerSource1](src/models/metrics-explorer-source1.ts)</code> | Source of the data |
| <code>metric</code> | <code>[MetricsExplorerMetric3](src/models/metrics-explorer-metric3.ts)</code> | The metric to be calculated |
| <code>module</code> | <code>[MetricsExplorerModule1](src/models/metrics-explorer-module1.ts)</code> | Module for which to retrieve data |
| <code>datetimeRange</code> | <code>string</code> | Filters the results to the set of data aggregated over the duration of the specified period. The period is truncated at the end to align with bucket sizes. This parameter should be in the format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only format is not accepted. Start and end are either a datetime in ISO 8601 format or a placeholder which is one of the following: `now`, `hour_start` and `hour_end`. |
| <code>authenticationOutcome?</code> | <code>[AuthenticationOutcome](src/models/unions/authentication-outcome.ts)</code> | Filters the results to only include transactions whose authentication process ended with the specified outcome. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't undergo an authentication process. |
| <code>authorized?</code> | <code>[Authorized](src/models/unions/authorized.ts)</code> | Filters the results to only include transactions that were authorized (1) or declined (0). |
| <code>country?</code> | <code>[Country4](src/models/unions/country4.ts)</code> | Filters the results to only include transactions that were processed in the specified country. The country code should be in the ISO 3166-1 two letter format. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>currency?</code> | <code>[Currency7](src/models/unions/currency7.ts)</code> | Filters the results to only include transactions that were processed in the specified currency. The currency code should be in the ISO 4217 format.<br/>**Important:** This query parameter is **required** when the `metric` is set to `volume`. |
| <code>errorCode?</code> | <code>[ErrorCode1](src/models/unions/error-code1.ts)</code> | Filters the results to only include transactions that failed with the specified error code. The error code is a string that describes the reason for the failure. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>instrumentType?</code> | <code>[InstrumentType1](src/models/unions/instrument-type1.ts)</code> | Filters the results to only include transactions that used the specified instrument type. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>isSubsequentPayment?</code> | <code>[IsSubsequentPayment1](src/models/unions/is-subsequent-payment1.ts)</code> | Filters the results to only include transactions that are subsequent payments. A subsequent payment is a payment that is made after an initial payment, typically in a subscription or recurring payment scenario. The value should be either "0" (false) or "1" (true). |
| <code>liabilityShifted?</code> | <code>[LiabilityShifted](src/models/unions/liability-shifted.ts)</code> | Filters the results to only include transactions where liability was shifted (1) or was not shifted (0). |
| <code>merchantInitiated?</code> | <code>[MerchantInitiated1](src/models/unions/merchant-initiated1.ts)</code> | Filters the results to only include transactions that were initiated by the merchant. The value should be either "0" (false) or "1" (true). |
| <code>metadata?</code> | <code>[Metadata3](src/models/unions/metadata3.ts)</code> | Filters the results to only include transactions that have the specified metadata. The metadata should be in JSON format and contain a single key-value pair. |
| <code>method?</code> | <code>[Method121](src/models/unions/method121.ts)</code> | Filters the results to only include transactions that were processed using the specified payment method. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodBin?</code> | <code>[PaymentMethodBin](src/models/unions/payment-method-bin.ts)</code> | Filters the results to only include transactions that used the specified payment method bin. The payment method bin is the first 6 digits of the card number. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodCardIssuerName?</code> | <code>[PaymentMethodCardIssuerName](src/models/unions/payment-method-card-issuer-name.ts)</code> | Filters the results to only include transactions that were processed with the specified card issuer name. The card issuer name is the name of the bank or financial institution that issued the card used for the transaction. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodCardType?</code> | <code>[PaymentMethodCardType](src/models/unions/payment-method-card-type.ts)</code> | Filters the results to only include transactions that used the specified card type. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodCountry?</code> | <code>[PaymentMethodCountry](src/models/unions/payment-method-country.ts)</code> | Filters the results to only include transactions that were processed with a card issued in the specified country. The country code should be in the ISO 3166-1 two letter format. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodScheme?</code> | <code>[PaymentMethodScheme](src/models/unions/payment-method-scheme.ts)</code> | Filters the results to only include transactions that were processed with the specified payment method scheme. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentServiceId?</code> | <code>[PaymentServiceId2](src/models/unions/payment-service-id2.ts)</code> | Filters the results to only include transactions that were processed with the specified payment service ID. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentSource?</code> | <code>[PaymentSource](src/models/unions/payment-source.ts)</code> | Filters the results to only include transactions that were processed with the specified payment source. |
| <code>rawResponseCode?</code> | <code>[RawResponseCode1](src/models/unions/raw-response-code1.ts)</code> | Filters the results to only include transactions that received the specified raw response code from the payment service. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>ruleIdRouteTransaction?</code> | <code>[RuleIdRouteTransaction](src/models/unions/rule-id-route-transaction.ts)</code> | Filters the results to only include transactions that were processed with the specified routing rule. The rule ID should be in UUID format. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were not processed by any routing rule. |
| <code>ruleIdSkip3Ds?</code> | <code>[RuleIdSkip3Ds](src/models/unions/rule-id-skip3-ds.ts)</code> | Filters the results to only include transactions that were processed with the specified 3DS rule. The rule ID should be in UUID format. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were not processed by any 3DS rule. |
| <code>ruleVariantId?</code> | <code>[RuleVariantId](src/models/unions/rule-variant-id.ts)</code> | Filters the results to only include transactions that were processed with the specified split routing rule outcome variant. The variant ID should be in UUID format. |
| <code>threeDSecureAuthResp?</code> | <code>[ThreeDSecureAuthResp](src/models/unions/three-dsecure-auth-resp.ts)</code> | Filters the results to only include transactions that received the specified response during 3DS authentication. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>threeDSecureEci?</code> | <code>[ThreeDSecureEci](src/models/unions/three-dsecure-eci.ts)</code> | Filters the results to only include transactions that received the specified ECI during 3DS authentication. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>threeDSecureMethod?</code> | <code>[ThreeDSecureMethod](src/models/unions/three-dsecure-method.ts)</code> | Filters the results to only include transactions that underwent 3DS authentication with the specified method. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't undergo 3DS authentication. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getMetricsExplorerModule(request)`

- **OnSuccess**: <code>[ModuleResponse](src/models/module-response.ts)[]</code>
- **OnError**: throws <code>[Insights.GetMetricsExplorerModuleError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getMetricsExplorerModule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModuleResponse[], Insights.GetMetricsExplorerModuleError&gt;</code>, with `result.value` of type <code>[ModuleResponse](src/models/module-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsExplorerTotals(request: Insights.GetMetricsExplorerTotalsRequest, options?: RequestOptions): ApiPromise&lt;MetricsExplorerTotalResponse, Insights.GetMetricsExplorerTotalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the data for the line chart and summary. The data to be used depends on `source`.<br/>**Important:** The currency filter query parameter is **required** when the `metric` is set to `volume`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getMetricsExplorerTotals({
    source: MetricsExplorerSource1.Authentication,
    metric: MetricsExplorerMetric3.Volume,
    datetimeRange: "2025-01-01T00:00:00/P7D",
    excludePrevious: true,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type MetricsExplorerTotalResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetMetricsExplorerTotalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.getMetricsExplorerTotals({
  source: MetricsExplorerSource1.Authentication,
  metric: MetricsExplorerMetric3.Volume,
  datetimeRange: "2025-01-01T00:00:00/P7D",
  excludePrevious: true,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsExplorerTotalResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source</code> | <code>[MetricsExplorerSource1](src/models/metrics-explorer-source1.ts)</code> | Source of the data |
| <code>metric</code> | <code>[MetricsExplorerMetric3](src/models/metrics-explorer-metric3.ts)</code> | The metric to be calculated |
| <code>datetimeRange</code> | <code>string</code> | Filters the results to the set of data aggregated over the duration of the specified period. The period is truncated at the end to align with bucket sizes. This parameter should be in the format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only format is not accepted. Start and end are either a datetime in ISO 8601 format or a placeholder which is one of the following: `now`, `hour_start` and `hour_end`. |
| <code>authenticationOutcome?</code> | <code>[AuthenticationOutcome](src/models/unions/authentication-outcome.ts)</code> | Filters the results to only include transactions whose authentication process ended with the specified outcome. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't undergo an authentication process. |
| <code>authorized?</code> | <code>[Authorized](src/models/unions/authorized.ts)</code> | Filters the results to only include transactions that were authorized (1) or declined (0). |
| <code>country?</code> | <code>[Country4](src/models/unions/country4.ts)</code> | Filters the results to only include transactions that were processed in the specified country. The country code should be in the ISO 3166-1 two letter format. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>currency?</code> | <code>[Currency7](src/models/unions/currency7.ts)</code> | Filters the results to only include transactions that were processed in the specified currency. The currency code should be in the ISO 4217 format.<br/>**Important:** This query parameter is **required** when the `metric` is set to `volume`. |
| <code>errorCode?</code> | <code>[ErrorCode1](src/models/unions/error-code1.ts)</code> | Filters the results to only include transactions that failed with the specified error code. The error code is a string that describes the reason for the failure. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>instrumentType?</code> | <code>[InstrumentType1](src/models/unions/instrument-type1.ts)</code> | Filters the results to only include transactions that used the specified instrument type. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>isSubsequentPayment?</code> | <code>[IsSubsequentPayment1](src/models/unions/is-subsequent-payment1.ts)</code> | Filters the results to only include transactions that are subsequent payments. A subsequent payment is a payment that is made after an initial payment, typically in a subscription or recurring payment scenario. The value should be either "0" (false) or "1" (true). |
| <code>liabilityShifted?</code> | <code>[LiabilityShifted](src/models/unions/liability-shifted.ts)</code> | Filters the results to only include transactions where liability was shifted (1) or was not shifted (0). |
| <code>merchantInitiated?</code> | <code>[MerchantInitiated1](src/models/unions/merchant-initiated1.ts)</code> | Filters the results to only include transactions that were initiated by the merchant. The value should be either "0" (false) or "1" (true). |
| <code>metadata?</code> | <code>[Metadata3](src/models/unions/metadata3.ts)</code> | Filters the results to only include transactions that have the specified metadata. The metadata should be in JSON format and contain a single key-value pair. |
| <code>method?</code> | <code>[Method121](src/models/unions/method121.ts)</code> | Filters the results to only include transactions that were processed using the specified payment method. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodBin?</code> | <code>[PaymentMethodBin](src/models/unions/payment-method-bin.ts)</code> | Filters the results to only include transactions that used the specified payment method bin. The payment method bin is the first 6 digits of the card number. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodCardIssuerName?</code> | <code>[PaymentMethodCardIssuerName](src/models/unions/payment-method-card-issuer-name.ts)</code> | Filters the results to only include transactions that were processed with the specified card issuer name. The card issuer name is the name of the bank or financial institution that issued the card used for the transaction. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodCardType?</code> | <code>[PaymentMethodCardType](src/models/unions/payment-method-card-type.ts)</code> | Filters the results to only include transactions that used the specified card type. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodCountry?</code> | <code>[PaymentMethodCountry](src/models/unions/payment-method-country.ts)</code> | Filters the results to only include transactions that were processed with a card issued in the specified country. The country code should be in the ISO 3166-1 two letter format. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentMethodScheme?</code> | <code>[PaymentMethodScheme](src/models/unions/payment-method-scheme.ts)</code> | Filters the results to only include transactions that were processed with the specified payment method scheme. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentServiceId?</code> | <code>[PaymentServiceId2](src/models/unions/payment-service-id2.ts)</code> | Filters the results to only include transactions that were processed with the specified payment service ID. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>paymentSource?</code> | <code>[PaymentSource](src/models/unions/payment-source.ts)</code> | Filters the results to only include transactions that were processed with the specified payment source. |
| <code>rawResponseCode?</code> | <code>[RawResponseCode1](src/models/unions/raw-response-code1.ts)</code> | Filters the results to only include transactions that received the specified raw response code from the payment service. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>ruleIdRouteTransaction?</code> | <code>[RuleIdRouteTransaction](src/models/unions/rule-id-route-transaction.ts)</code> | Filters the results to only include transactions that were processed with the specified routing rule. The rule ID should be in UUID format. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were not processed by any routing rule. |
| <code>ruleIdSkip3Ds?</code> | <code>[RuleIdSkip3Ds](src/models/unions/rule-id-skip3-ds.ts)</code> | Filters the results to only include transactions that were processed with the specified 3DS rule. The rule ID should be in UUID format. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were not processed by any 3DS rule. |
| <code>ruleVariantId?</code> | <code>[RuleVariantId](src/models/unions/rule-variant-id.ts)</code> | Filters the results to only include transactions that were processed with the specified split routing rule outcome variant. The variant ID should be in UUID format. |
| <code>threeDSecureAuthResp?</code> | <code>[ThreeDSecureAuthResp](src/models/unions/three-dsecure-auth-resp.ts)</code> | Filters the results to only include transactions that received the specified response during 3DS authentication. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>threeDSecureEci?</code> | <code>[ThreeDSecureEci](src/models/unions/three-dsecure-eci.ts)</code> | Filters the results to only include transactions that received the specified ECI during 3DS authentication. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null for this field. |
| <code>threeDSecureMethod?</code> | <code>[ThreeDSecureMethod](src/models/unions/three-dsecure-method.ts)</code> | Filters the results to only include transactions that underwent 3DS authentication with the specified method. This parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't undergo 3DS authentication. |
| <code>excludePrevious?</code> | <code>boolean</code> | If set to `true`, aggregations and data from the previous period will not be calculated nor returned.<br>**Default**: false |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getMetricsExplorerTotals(request)`

- **OnSuccess**: <code>[MetricsExplorerTotalResponse](src/models/metrics-explorer-total-response.ts)</code>
- **OnError**: throws <code>[Insights.GetMetricsExplorerTotalsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getMetricsExplorerTotals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsExplorerTotalResponse, Insights.GetMetricsExplorerTotalsError&gt;</code>, with `result.value` of type <code>[MetricsExplorerTotalResponse](src/models/metrics-explorer-total-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InsightsPresets

> Source: [InsightsPresets](src/resources/insights-presets.ts)

<details>
<summary><code>createMetricsExplorerPreset(request: InsightsPresets.CreateMetricsExplorerPresetRequest, options?: RequestOptions): ApiPromise&lt;MetricsExplorerPreset, InsightsPresets.CreateMetricsExplorerPresetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a preset with a name, metric and a set of filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsPresets.createMetricsExplorerPreset({
    source: MetricsExplorerSource1.Authentication,
    xGr4VyMerchantAccountId: "default",
    body: {
      displayName: "some example string",
      metric: MetricsExplorerMetric1.Volume,
      filters: { datetimeRange: "some example string" },
    },
  });
  // TODO: Handle 'response' of type MetricsExplorerPreset
} catch (err) {
  // TODO: Handle 'err' of type InsightsPresets.CreateMetricsExplorerPresetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsPresets.createMetricsExplorerPreset({
  source: MetricsExplorerSource1.Authentication,
  xGr4VyMerchantAccountId: "default",
  body: {
    displayName: "some example string",
    metric: MetricsExplorerMetric1.Volume,
    filters: { datetimeRange: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsExplorerPreset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source</code> | <code>[MetricsExplorerSource1](src/models/metrics-explorer-source1.ts)</code> | Source of the data |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[MetricsExplorerPresetCreate](src/models/metrics-explorer-preset-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsPresets.createMetricsExplorerPreset(request)`

- **OnSuccess**: <code>[MetricsExplorerPreset](src/models/metrics-explorer-preset.ts)</code>
- **OnError**: throws <code>[InsightsPresets.CreateMetricsExplorerPresetError](src/resources/insights-presets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsPresets.createMetricsExplorerPreset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsExplorerPreset, InsightsPresets.CreateMetricsExplorerPresetError&gt;</code>, with `result.value` of type <code>[MetricsExplorerPreset](src/models/metrics-explorer-preset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMetricsExplorerPreset(request: InsightsPresets.DeleteMetricsExplorerPresetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, InsightsPresets.DeleteMetricsExplorerPresetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a preset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsPresets.deleteMetricsExplorerPreset({
    source: MetricsExplorerSource1.Authentication,
    presetId: "8ce33ea7-7a87-49b7-b661-65653630a185",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type InsightsPresets.DeleteMetricsExplorerPresetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsPresets.deleteMetricsExplorerPreset({
  source: MetricsExplorerSource1.Authentication,
  presetId: "8ce33ea7-7a87-49b7-b661-65653630a185",
  xGr4VyMerchantAccountId: "default",
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
| <code>source</code> | <code>[MetricsExplorerSource1](src/models/metrics-explorer-source1.ts)</code> | Source of the data |
| <code>presetId</code> | <code>string</code> | ID of the preset to delete |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsPresets.deleteMetricsExplorerPreset(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[InsightsPresets.DeleteMetricsExplorerPresetError](src/resources/insights-presets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsPresets.deleteMetricsExplorerPreset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, InsightsPresets.DeleteMetricsExplorerPresetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMetricsExplorerPresets(request: InsightsPresets.ListMetricsExplorerPresetsRequest, options?: RequestOptions): ApiPromise&lt;MetricsExplorerPreset[], InsightsPresets.ListMetricsExplorerPresetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all available presets for a specific source. These presets can be used to quickly set predefined filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsPresets.listMetricsExplorerPresets({
    source: MetricsExplorerSource1.Authentication,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type MetricsExplorerPreset[]
} catch (err) {
  // TODO: Handle 'err' of type InsightsPresets.ListMetricsExplorerPresetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsPresets.listMetricsExplorerPresets({
  source: MetricsExplorerSource1.Authentication,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsExplorerPreset[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source</code> | <code>[MetricsExplorerSource1](src/models/metrics-explorer-source1.ts)</code> | Source of the data |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsPresets.listMetricsExplorerPresets(request)`

- **OnSuccess**: <code>[MetricsExplorerPreset](src/models/metrics-explorer-preset.ts)[]</code>
- **OnError**: throws <code>[InsightsPresets.ListMetricsExplorerPresetsError](src/resources/insights-presets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsPresets.listMetricsExplorerPresets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsExplorerPreset[], InsightsPresets.ListMetricsExplorerPresetsError&gt;</code>, with `result.value` of type <code>[MetricsExplorerPreset](src/models/metrics-explorer-preset.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMetricsExplorerPreset(request: InsightsPresets.UpdateMetricsExplorerPresetRequest, options?: RequestOptions): ApiPromise&lt;MetricsExplorerPreset, InsightsPresets.UpdateMetricsExplorerPresetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a preset. This operation can only update the name of the preset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightsPresets.updateMetricsExplorerPreset({
    source: MetricsExplorerSource1.Authentication,
    presetId: "8ce33ea7-7a87-49b7-b661-65653630a185",
    xGr4VyMerchantAccountId: "default",
    body: { displayName: "some example string" },
  });
  // TODO: Handle 'response' of type MetricsExplorerPreset
} catch (err) {
  // TODO: Handle 'err' of type InsightsPresets.UpdateMetricsExplorerPresetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightsPresets.updateMetricsExplorerPreset({
  source: MetricsExplorerSource1.Authentication,
  presetId: "8ce33ea7-7a87-49b7-b661-65653630a185",
  xGr4VyMerchantAccountId: "default",
  body: { displayName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricsExplorerPreset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source</code> | <code>[MetricsExplorerSource1](src/models/metrics-explorer-source1.ts)</code> | Source of the data |
| <code>presetId</code> | <code>string</code> | ID of the preset to update |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[MetricsExplorerPresetUpdate](src/models/metrics-explorer-preset-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightsPresets.updateMetricsExplorerPreset(request)`

- **OnSuccess**: <code>[MetricsExplorerPreset](src/models/metrics-explorer-preset.ts)</code>
- **OnError**: throws <code>[InsightsPresets.UpdateMetricsExplorerPresetError](src/resources/insights-presets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightsPresets.updateMetricsExplorerPreset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricsExplorerPreset, InsightsPresets.UpdateMetricsExplorerPresetError&gt;</code>, with `result.value` of type <code>[MetricsExplorerPreset](src/models/metrics-explorer-preset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MerchantAccountsApi

> Source: [MerchantAccountsApi](src/resources/merchant-accounts-api.ts)

<details>
<summary><code>createMerchantAccount(request: MerchantAccountsApi.CreateMerchantAccountRequest, options?: RequestOptions): ApiPromise&lt;MerchantAccount, MerchantAccountsApi.CreateMerchantAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new merchant account in an instance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantAccountsApi.createMerchantAccount({
    body: { id: "some example string", displayName: "some example string" },
  });
  // TODO: Handle 'response' of type MerchantAccount
} catch (err) {
  // TODO: Handle 'err' of type MerchantAccountsApi.CreateMerchantAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantAccountsApi.createMerchantAccount({
  body: { id: "some example string", displayName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MerchantAccount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MerchantAccountCreate](src/models/merchant-account-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantAccountsApi.createMerchantAccount(request)`

- **OnSuccess**: <code>[MerchantAccount](src/models/merchant-account.ts)</code>
- **OnError**: throws <code>[MerchantAccountsApi.CreateMerchantAccountError](src/resources/merchant-accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantAccountsApi.createMerchantAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MerchantAccount, MerchantAccountsApi.CreateMerchantAccountError&gt;</code>, with `result.value` of type <code>[MerchantAccount](src/models/merchant-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantAccount(request: MerchantAccountsApi.GetMerchantAccountRequest, options?: RequestOptions): ApiPromise&lt;MerchantAccount, MerchantAccountsApi.GetMerchantAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get info about a merchant account in an instance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantAccountsApi.getMerchantAccount({
    merchantAccountId: "merchant-12345",
  });
  // TODO: Handle 'response' of type MerchantAccount
} catch (err) {
  // TODO: Handle 'err' of type MerchantAccountsApi.GetMerchantAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantAccountsApi.getMerchantAccount({
  merchantAccountId: "merchant-12345",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MerchantAccount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantAccountId</code> | <code>string</code> | The ID of the merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantAccountsApi.getMerchantAccount(request)`

- **OnSuccess**: <code>[MerchantAccount](src/models/merchant-account.ts)</code>
- **OnError**: throws <code>[MerchantAccountsApi.GetMerchantAccountError](src/resources/merchant-accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantAccountsApi.getMerchantAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MerchantAccount, MerchantAccountsApi.GetMerchantAccountError&gt;</code>, with `result.value` of type <code>[MerchantAccount](src/models/merchant-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMerchantAccounts(request: MerchantAccountsApi.ListMerchantAccountsRequest, options?: RequestOptions): ApiPromise&lt;MerchantAccounts, MerchantAccountsApi.ListMerchantAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all merchant accounts in an instance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantAccountsApi.listMerchantAccounts({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    search: "merchant-12345",
  });
  // TODO: Handle 'response' of type MerchantAccounts
} catch (err) {
  // TODO: Handle 'err' of type MerchantAccountsApi.ListMerchantAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantAccountsApi.listMerchantAccounts({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  search: "merchant-12345",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MerchantAccounts
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>search?</code> | <code>[Search2](src/models/unions/search2.ts)</code> | The search term to filter merchant accounts by. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantAccountsApi.listMerchantAccounts(request)`

- **OnSuccess**: <code>[MerchantAccounts](src/models/merchant-accounts.ts)</code>
- **OnError**: throws <code>[MerchantAccountsApi.ListMerchantAccountsError](src/resources/merchant-accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantAccountsApi.listMerchantAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MerchantAccounts, MerchantAccountsApi.ListMerchantAccountsError&gt;</code>, with `result.value` of type <code>[MerchantAccounts](src/models/merchant-accounts.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMerchantAccount(request: MerchantAccountsApi.UpdateMerchantAccountRequest, options?: RequestOptions): ApiPromise&lt;MerchantAccount, MerchantAccountsApi.UpdateMerchantAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update info for a merchant account in an instance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantAccountsApi.updateMerchantAccount({
    merchantAccountId: "merchant-12345",
    body: {},
  });
  // TODO: Handle 'response' of type MerchantAccount
} catch (err) {
  // TODO: Handle 'err' of type MerchantAccountsApi.UpdateMerchantAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantAccountsApi.updateMerchantAccount({
  merchantAccountId: "merchant-12345",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MerchantAccount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantAccountId</code> | <code>string</code> | The ID of the merchant account. |
| <code>body</code> | <code>[MerchantAccountUpdate](src/models/merchant-account-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantAccountsApi.updateMerchantAccount(request)`

- **OnSuccess**: <code>[MerchantAccount](src/models/merchant-account.ts)</code>
- **OnError**: throws <code>[MerchantAccountsApi.UpdateMerchantAccountError](src/resources/merchant-accounts-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantAccountsApi.updateMerchantAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MerchantAccount, MerchantAccountsApi.UpdateMerchantAccountError&gt;</code>, with `result.value` of type <code>[MerchantAccount](src/models/merchant-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MerchantAccounts3DsConfiguration

> Source: [MerchantAccounts3DsConfiguration](src/resources/merchant-accounts3-ds-configuration.ts)

<details>
<summary><code>createThreeDsConfiguration(request: MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationRequest, options?: RequestOptions): ApiPromise&lt;MerchantAccountThreeDsConfiguration, MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new 3DS configuration for a merchant account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantAccounts3DsConfiguration.createThreeDsConfiguration({
    merchantAccountId: "merchant-12345",
    body: {
      merchantAcquirerBin: "some example string",
      merchantAcquirerId: "some example string",
      merchantName: "some example string",
      merchantCountryCode: "some example string",
      merchantCategoryCode: "some example string",
      merchantUrl: "some example string",
      scheme: CardScheme2.Accel,
      metadata: { key: "some example string" },
    },
  });
  // TODO: Handle 'response' of type MerchantAccountThreeDsConfiguration
} catch (err) {
  // TODO: Handle 'err' of type MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantAccounts3DsConfiguration.createThreeDsConfiguration({
  merchantAccountId: "merchant-12345",
  body: {
    merchantAcquirerBin: "some example string",
    merchantAcquirerId: "some example string",
    merchantName: "some example string",
    merchantCountryCode: "some example string",
    merchantCategoryCode: "some example string",
    merchantUrl: "some example string",
    scheme: CardScheme2.Accel,
    metadata: { key: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MerchantAccountThreeDsConfiguration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantAccountId</code> | <code>string</code> | The ID of the merchant account. |
| <code>body</code> | <code>[MerchantAccountThreeDsConfigurationCreate](src/models/merchant-account-three-ds-configuration-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantAccounts3DsConfiguration.createThreeDsConfiguration(request)`

- **OnSuccess**: <code>[MerchantAccountThreeDsConfiguration](src/models/merchant-account-three-ds-configuration.ts)</code>
- **OnError**: throws <code>[MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationError](src/resources/merchant-accounts3-ds-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantAccounts3DsConfiguration.createThreeDsConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MerchantAccountThreeDsConfiguration, MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationError&gt;</code>, with `result.value` of type <code>[MerchantAccountThreeDsConfiguration](src/models/merchant-account-three-ds-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteThreeDsConfiguration(request: MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationRequest, options?: RequestOptions): ApiPromise&lt;undefined, MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a 3DS configuration for a merchant account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.merchantAccounts3DsConfiguration.deleteThreeDsConfiguration({
    merchantAccountId: "merchant-12345",
    threeDsConfigurationId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
  });
} catch (err) {
  // TODO: Handle 'err' of type MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantAccounts3DsConfiguration.deleteThreeDsConfiguration({
  merchantAccountId: "merchant-12345",
  threeDsConfigurationId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
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
| <code>merchantAccountId</code> | <code>string</code> | The ID of the merchant account. |
| <code>threeDsConfigurationId</code> | <code>string</code> | The ID of the 3DS configuration for a merchant account. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantAccounts3DsConfiguration.deleteThreeDsConfiguration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationError](src/resources/merchant-accounts3-ds-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantAccounts3DsConfiguration.deleteThreeDsConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editThreeDsConfiguration(request: MerchantAccounts3DsConfiguration.EditThreeDsConfigurationRequest, options?: RequestOptions): ApiPromise&lt;MerchantAccountThreeDsConfiguration, MerchantAccounts3DsConfiguration.EditThreeDsConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the 3DS configuration for a merchant account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantAccounts3DsConfiguration.editThreeDsConfiguration({
    merchantAccountId: "merchant-12345",
    threeDsConfigurationId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
    body: {},
  });
  // TODO: Handle 'response' of type MerchantAccountThreeDsConfiguration
} catch (err) {
  // TODO: Handle 'err' of type MerchantAccounts3DsConfiguration.EditThreeDsConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantAccounts3DsConfiguration.editThreeDsConfiguration({
  merchantAccountId: "merchant-12345",
  threeDsConfigurationId: "1808f5e6-b49c-4db9-94fa-22371ea352f5",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MerchantAccountThreeDsConfiguration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantAccountId</code> | <code>string</code> | The ID of the merchant account. |
| <code>threeDsConfigurationId</code> | <code>string</code> | The ID of the 3DS configuration for a merchant account. |
| <code>body</code> | <code>[MerchantAccountThreeDsConfigurationUpdate](src/models/merchant-account-three-ds-configuration-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantAccounts3DsConfiguration.editThreeDsConfiguration(request)`

- **OnSuccess**: <code>[MerchantAccountThreeDsConfiguration](src/models/merchant-account-three-ds-configuration.ts)</code>
- **OnError**: throws <code>[MerchantAccounts3DsConfiguration.EditThreeDsConfigurationError](src/resources/merchant-accounts3-ds-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantAccounts3DsConfiguration.editThreeDsConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MerchantAccountThreeDsConfiguration, MerchantAccounts3DsConfiguration.EditThreeDsConfigurationError&gt;</code>, with `result.value` of type <code>[MerchantAccountThreeDsConfiguration](src/models/merchant-account-three-ds-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listThreeDsConfigurations(request: MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsRequest, options?: RequestOptions): ApiPromise&lt;MerchantAccountThreeDsConfigurations, MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all 3DS configurations for a merchant account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantAccounts3DsConfiguration.listThreeDsConfigurations({
    merchantAccountId: "merchant-12345",
    currency: "USD",
  });
  // TODO: Handle 'response' of type MerchantAccountThreeDsConfigurations
} catch (err) {
  // TODO: Handle 'err' of type MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantAccounts3DsConfiguration.listThreeDsConfigurations({
  merchantAccountId: "merchant-12345",
  currency: "USD",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MerchantAccountThreeDsConfigurations
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantAccountId</code> | <code>string</code> | The ID of the merchant account. |
| <code>currency?</code> | <code>[Currency16](src/models/unions/currency16.ts)</code> | ISO 4217 currency code (3 characters) to filter 3DS configurations. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantAccounts3DsConfiguration.listThreeDsConfigurations(request)`

- **OnSuccess**: <code>[MerchantAccountThreeDsConfigurations](src/models/merchant-account-three-ds-configurations.ts)</code>
- **OnError**: throws <code>[MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsError](src/resources/merchant-accounts3-ds-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantAccounts3DsConfiguration.listThreeDsConfigurations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MerchantAccountThreeDsConfigurations, MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsError&gt;</code>, with `result.value` of type <code>[MerchantAccountThreeDsConfigurations](src/models/merchant-account-three-ds-configurations.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Monitoring

> Source: [Monitoring](src/resources/monitoring.ts)

<details>
<summary><code>createMonitoringMetric(request: Monitoring.CreateMonitoringMetricRequest, options?: RequestOptions): ApiPromise&lt;MonitoringMetric, Monitoring.CreateMonitoringMetricError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a monitoring metric with spec model and params.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.createMonitoringMetric({
    xGr4VyMerchantAccountId: "default",
    body: {
      displayName: "some example string",
      spec: { params: { filters: {} } },
      alertingPolicy: { params: {} },
      incidentPolicy: { params: { createAfterN: 1, closeAfterN: 1 } },
    },
  });
  // TODO: Handle 'response' of type MonitoringMetric
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.CreateMonitoringMetricError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.createMonitoringMetric({
  xGr4VyMerchantAccountId: "default",
  body: {
    displayName: "some example string",
    spec: { params: { filters: {} } },
    alertingPolicy: { params: {} },
    incidentPolicy: { params: { createAfterN: 1, closeAfterN: 1 } },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitoringMetric
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[MonitoringMetricCreate](src/models/monitoring-metric-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.createMonitoringMetric(request)`

- **OnSuccess**: <code>[MonitoringMetric](src/models/monitoring-metric.ts)</code>
- **OnError**: throws <code>[Monitoring.CreateMonitoringMetricError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.createMonitoringMetric(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitoringMetric, Monitoring.CreateMonitoringMetricError&gt;</code>, with `result.value` of type <code>[MonitoringMetric](src/models/monitoring-metric.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMonitoringMetric(request: Monitoring.DeleteMonitoringMetricRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Monitoring.DeleteMonitoringMetricError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a monitoring metric.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.deleteMonitoringMetric({
    metricId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.DeleteMonitoringMetricError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.deleteMonitoringMetric({
  metricId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
  xGr4VyMerchantAccountId: "default",
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
| <code>metricId</code> | <code>string</code> | The ID of the metric |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.deleteMonitoringMetric(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Monitoring.DeleteMonitoringMetricError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.deleteMonitoringMetric(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Monitoring.DeleteMonitoringMetricError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMonitoringIncident(request: Monitoring.GetMonitoringIncidentRequest, options?: RequestOptions): ApiPromise&lt;MonitoringIncident, Monitoring.GetMonitoringIncidentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a monitoring incident

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.getMonitoringIncident({
    incidentId: "0f1a61f4-8808-46ae-9001-358d86cc1d13",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type MonitoringIncident
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.GetMonitoringIncidentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.getMonitoringIncident({
  incidentId: "0f1a61f4-8808-46ae-9001-358d86cc1d13",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitoringIncident
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>incidentId</code> | <code>string</code> | The ID of the incident |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.getMonitoringIncident(request)`

- **OnSuccess**: <code>[MonitoringIncident](src/models/monitoring-incident.ts)</code>
- **OnError**: throws <code>[Monitoring.GetMonitoringIncidentError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.getMonitoringIncident(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitoringIncident, Monitoring.GetMonitoringIncidentError&gt;</code>, with `result.value` of type <code>[MonitoringIncident](src/models/monitoring-incident.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMonitoringMetric(request: Monitoring.GetMonitoringMetricRequest, options?: RequestOptions): ApiPromise&lt;MonitoringMetric, Monitoring.GetMonitoringMetricError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a monitoring metric with a subset of its samples

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.getMonitoringMetric({
    metricId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
    samplesTimestampInterval: "2025-01-01T00:00:00/P1D",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type MonitoringMetric
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.GetMonitoringMetricError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.getMonitoringMetric({
  metricId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
  samplesTimestampInterval: "2025-01-01T00:00:00/P1D",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitoringMetric
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metricId</code> | <code>string</code> | The ID of the metric |
| <code>samplesTimestampInterval?</code> | <code>[SamplesTimestampInterval](src/models/unions/samples-timestamp-interval.ts)</code> | Timestamp interval for querying a subset of the metric samples. This parameter should be in the format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only format is not accepted. Start and end are either a datetime in ISO 8601 format or a placeholder which is one of the following: `now`, `hour_start` and `hour_end`. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.getMonitoringMetric(request)`

- **OnSuccess**: <code>[MonitoringMetric](src/models/monitoring-metric.ts)</code>
- **OnError**: throws <code>[Monitoring.GetMonitoringMetricError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.getMonitoringMetric(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitoringMetric, Monitoring.GetMonitoringMetricError&gt;</code>, with `result.value` of type <code>[MonitoringMetric](src/models/monitoring-metric.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitoringIncidents(request: Monitoring.ListMonitoringIncidentsRequest, options?: RequestOptions): ApiPromise&lt;MonitoringIncidents, Monitoring.ListMonitoringIncidentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all monitoring incidents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.listMonitoringIncidents({
    timestampInterval: "2025-01-01T00:00:00/2025-01-02T00:00:00",
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type MonitoringIncidents
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.ListMonitoringIncidentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.listMonitoringIncidents({
  timestampInterval: "2025-01-01T00:00:00/2025-01-02T00:00:00",
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitoringIncidents
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestampInterval?</code> | <code>[TimestampInterval](src/models/unions/timestamp-interval.ts)</code> | Filters the incidents to those that were created within the specified interval. This parameter should be in the format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only format is not accepted. Start and end are either a datetime in ISO 8601 format or a placeholder which is one of the following: `now`, `hour_start` and `hour_end`. |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are returned.<br>**Default**: 20 |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.listMonitoringIncidents(request)`

- **OnSuccess**: <code>[MonitoringIncidents](src/models/monitoring-incidents.ts)</code>
- **OnError**: throws <code>[Monitoring.ListMonitoringIncidentsError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.listMonitoringIncidents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitoringIncidents, Monitoring.ListMonitoringIncidentsError&gt;</code>, with `result.value` of type <code>[MonitoringIncidents](src/models/monitoring-incidents.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitoringMetricIncidents(request: Monitoring.ListMonitoringMetricIncidentsRequest, options?: RequestOptions): ApiPromise&lt;MonitoringIncidents, Monitoring.ListMonitoringMetricIncidentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List monitoring incidents for a specific metric.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.listMonitoringMetricIncidents({
    metricId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
    timestampInterval: "2025-01-01T00:00:00/2025-01-02T00:00:00",
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type MonitoringIncidents
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.ListMonitoringMetricIncidentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.listMonitoringMetricIncidents({
  metricId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
  timestampInterval: "2025-01-01T00:00:00/2025-01-02T00:00:00",
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitoringIncidents
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metricId</code> | <code>string</code> | The ID of the metric |
| <code>timestampInterval?</code> | <code>[TimestampInterval](src/models/unions/timestamp-interval.ts)</code> | Filters the incidents to those that were created within the specified interval. This parameter should be in the format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only format is not accepted. Start and end are either a datetime in ISO 8601 format or a placeholder which is one of the following: `now`, `hour_start` and `hour_end`. |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are returned.<br>**Default**: 20 |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.listMonitoringMetricIncidents(request)`

- **OnSuccess**: <code>[MonitoringIncidents](src/models/monitoring-incidents.ts)</code>
- **OnError**: throws <code>[Monitoring.ListMonitoringMetricIncidentsError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.listMonitoringMetricIncidents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitoringIncidents, Monitoring.ListMonitoringMetricIncidentsError&gt;</code>, with `result.value` of type <code>[MonitoringIncidents](src/models/monitoring-incidents.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitoringMetrics(request: Monitoring.ListMonitoringMetricsRequest, options?: RequestOptions): ApiPromise&lt;MonitoringMetrics, Monitoring.ListMonitoringMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all created monitoring metrics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.listMonitoringMetrics({
    samplesTimestampInterval: "2025-01-01T00:00:00/P2H",
    search: "metric-12345",
    cursor: "ZXhhbXBsZTE",
    limit: 10,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type MonitoringMetrics
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.ListMonitoringMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.listMonitoringMetrics({
  samplesTimestampInterval: "2025-01-01T00:00:00/P2H",
  search: "metric-12345",
  cursor: "ZXhhbXBsZTE",
  limit: 10,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitoringMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>samplesTimestampInterval</code> | <code>string</code> | Filters the samples to the set of data aggregated over the duration of the specified period. This parameter should be in the format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only format is not accepted. Start and end are either a datetime in ISO 8601 format or a placeholder which is one of the following: `now`, `hour_start` and `hour_end`. |
| <code>search?</code> | <code>[Search3](src/models/unions/search3.ts)</code> | The search term to filter monitoring metrics by. |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are returned.<br>**Default**: 5 |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.listMonitoringMetrics(request)`

- **OnSuccess**: <code>[MonitoringMetrics](src/models/monitoring-metrics.ts)</code>
- **OnError**: throws <code>[Monitoring.ListMonitoringMetricsError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.listMonitoringMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitoringMetrics, Monitoring.ListMonitoringMetricsError&gt;</code>, with `result.value` of type <code>[MonitoringMetrics](src/models/monitoring-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMonitoringIncident(request: Monitoring.UpdateMonitoringIncidentRequest, options?: RequestOptions): ApiPromise&lt;MonitoringIncident, Monitoring.UpdateMonitoringIncidentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a monitoring incident.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.updateMonitoringIncident({
    incidentId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
    xGr4VyMerchantAccountId: "default",
    body: { notes: "some example string" },
  });
  // TODO: Handle 'response' of type MonitoringIncident
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.UpdateMonitoringIncidentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.updateMonitoringIncident({
  incidentId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
  xGr4VyMerchantAccountId: "default",
  body: { notes: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitoringIncident
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>incidentId</code> | <code>string</code> | The ID of the monitoring incident |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[MonitoringIncidentUpdate](src/models/monitoring-incident-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.updateMonitoringIncident(request)`

- **OnSuccess**: <code>[MonitoringIncident](src/models/monitoring-incident.ts)</code>
- **OnError**: throws <code>[Monitoring.UpdateMonitoringIncidentError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.updateMonitoringIncident(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitoringIncident, Monitoring.UpdateMonitoringIncidentError&gt;</code>, with `result.value` of type <code>[MonitoringIncident](src/models/monitoring-incident.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMonitoringMetric(request: Monitoring.UpdateMonitoringMetricRequest, options?: RequestOptions): ApiPromise&lt;MonitoringMetric, Monitoring.UpdateMonitoringMetricError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a monitoring metric.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoring.updateMonitoringMetric({
    metricId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
    xGr4VyMerchantAccountId: "default",
    body: {
      displayName: "some example string",
      alertingPolicy: { params: {} },
      incidentPolicy: { params: { createAfterN: 1, closeAfterN: 1 } },
    },
  });
  // TODO: Handle 'response' of type MonitoringMetric
} catch (err) {
  // TODO: Handle 'err' of type Monitoring.UpdateMonitoringMetricError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoring.updateMonitoringMetric({
  metricId: "7d9c3fa3-6f56-42b1-bf35-4463ca6ab452",
  xGr4VyMerchantAccountId: "default",
  body: {
    displayName: "some example string",
    alertingPolicy: { params: {} },
    incidentPolicy: { params: { createAfterN: 1, closeAfterN: 1 } },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonitoringMetric
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metricId</code> | <code>string</code> | The ID of the metric |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[MonitoringMetricUpdate](src/models/monitoring-metric-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoring.updateMonitoringMetric(request)`

- **OnSuccess**: <code>[MonitoringMetric](src/models/monitoring-metric.ts)</code>
- **OnError**: throws <code>[Monitoring.UpdateMonitoringMetricError](src/resources/monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoring.updateMonitoringMetric(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonitoringMetric, Monitoring.UpdateMonitoringMetricError&gt;</code>, with `result.value` of type <code>[MonitoringMetric](src/models/monitoring-metric.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentLinksApi

> Source: [PaymentLinksApi](src/resources/payment-links-api.ts)

<details>
<summary><code>addPaymentLink(request: PaymentLinksApi.AddPaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;PaymentLink, PaymentLinksApi.AddPaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new payment link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinksApi.addPaymentLink({
    xGr4VyMerchantAccountId: "default",
    body: { amount: 1, country: "some example string", currency: "some example string" },
  });
  // TODO: Handle 'response' of type PaymentLink
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.AddPaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.addPaymentLink({
  xGr4VyMerchantAccountId: "default",
  body: { amount: 1, country: "some example string", currency: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PaymentLinkCreate1](src/models/payment-link-create1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.addPaymentLink(request)`

- **OnSuccess**: <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: throws <code>[PaymentLinksApi.AddPaymentLinkError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.addPaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentLink, PaymentLinksApi.AddPaymentLinkError&gt;</code>, with `result.value` of type <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>expirePaymentLink(request: PaymentLinksApi.ExpirePaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentLinksApi.ExpirePaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expire an existing payment link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentLinksApi.expirePaymentLink({
    paymentLinkId: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.ExpirePaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.expirePaymentLink({
  paymentLinkId: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
  xGr4VyMerchantAccountId: "default",
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
| <code>paymentLinkId</code> | <code>string</code> | The unique identifier for the payment link. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.expirePaymentLink(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentLinksApi.ExpirePaymentLinkError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.expirePaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentLinksApi.ExpirePaymentLinkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentLink(request: PaymentLinksApi.GetPaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;PaymentLink, PaymentLinksApi.GetPaymentLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the details for a payment link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinksApi.getPaymentLink({
    paymentLinkId: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PaymentLink
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.GetPaymentLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.getPaymentLink({
  paymentLinkId: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentLinkId</code> | <code>string</code> | The unique identifier for the payment link. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.getPaymentLink(request)`

- **OnSuccess**: <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: throws <code>[PaymentLinksApi.GetPaymentLinkError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.getPaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentLink, PaymentLinksApi.GetPaymentLinkError&gt;</code>, with `result.value` of type <code>[PaymentLink](src/models/payment-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentLinks(request: PaymentLinksApi.ListPaymentLinksRequest, options?: RequestOptions): ApiPromise&lt;PaymentLinks, PaymentLinksApi.ListPaymentLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all created payment links.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentLinksApi.listPaymentLinks({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    createdAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    createdAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    updatedAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    updatedAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    currency: ["USD"],
    amountEq: 1299,
    amountGte: 1299,
    amountLte: 1299,
    buyerSearch: ["John", "London"],
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PaymentLinks
} catch (err) {
  // TODO: Handle 'err' of type PaymentLinksApi.ListPaymentLinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentLinksApi.listPaymentLinks({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  createdAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  createdAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  updatedAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  updatedAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  currency: ["USD"],
  amountEq: 1299,
  amountGte: 1299,
  amountLte: 1299,
  buyerSearch: ["John", "London"],
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentLinks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are returned.<br>**Default**: 20 |
| <code>createdAtLte?</code> | <code>[CreatedAtLte3](src/models/unions/created-at-lte3.ts)</code> | Filters the results to only payment links created before this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>createdAtGte?</code> | <code>[CreatedAtGte3](src/models/unions/created-at-gte3.ts)</code> | Filters the results to only payment links created after this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>updatedAtLte?</code> | <code>[UpdatedAtLte2](src/models/unions/updated-at-lte2.ts)</code> | Filters the results to only payment links updated before this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>updatedAtGte?</code> | <code>[UpdatedAtGte2](src/models/unions/updated-at-gte2.ts)</code> | Filters the results to only payment links updated after this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>currency?</code> | <code>[Currency17](src/models/unions/currency17.ts)</code> | Filters for payment links that have matching `currency` values. The `currency` values provided must be formatted as 3-letter ISO currency codes. |
| <code>amountEq?</code> | <code>[AmountEq1](src/models/unions/amount-eq1.ts)</code> | Filters for payment links that have an `amount` equal to this value. |
| <code>amountGte?</code> | <code>[AmountGte1](src/models/unions/amount-gte1.ts)</code> | Filters for payment links that have an `amount` greater than or equal to this value. |
| <code>amountLte?</code> | <code>[AmountLte1](src/models/unions/amount-lte1.ts)</code> | Filters for payment links that have an `amount` less than or equal to this value. |
| <code>status?</code> | <code>[Status6](src/models/unions/status6.ts)</code> | Filters the results to only the payment links that have a `status` that matches with any of the provided status values. |
| <code>buyerSearch?</code> | <code>[BuyerSearch](src/models/unions/buyer-search.ts)</code> | Filters the results to only get the items for which some of the buyer data contains exactly the provided `buyer_search` values. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentLinksApi.listPaymentLinks(request)`

- **OnSuccess**: <code>[PaymentLinks](src/models/payment-links.ts)</code>
- **OnError**: throws <code>[PaymentLinksApi.ListPaymentLinksError](src/resources/payment-links-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentLinksApi.listPaymentLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentLinks, PaymentLinksApi.ListPaymentLinksError&gt;</code>, with `result.value` of type <code>[PaymentLinks](src/models/payment-links.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethodsApi

> Source: [PaymentMethodsApi](src/resources/payment-methods-api.ts)

<details>
<summary><code>createPaymentMethod(request: PaymentMethodsApi.CreatePaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethodModel, PaymentMethodsApi.CreatePaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Store a new payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.createPaymentMethod({
    xGr4VyMerchantAccountId: "default",
    body: { expirationDate: "some example string", number: "some example string" },
  });
  // TODO: Handle 'response' of type PaymentMethodModel
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.CreatePaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi.createPaymentMethod({
  xGr4VyMerchantAccountId: "default",
  body: { expirationDate: "some example string", number: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentMethodModel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[Body](src/models/unions/body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.createPaymentMethod(request)`

- **OnSuccess**: <code>[PaymentMethodModel](src/models/payment-method-model.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.CreatePaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.createPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentMethodModel, PaymentMethodsApi.CreatePaymentMethodError&gt;</code>, with `result.value` of type <code>[PaymentMethodModel](src/models/payment-method-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePaymentMethod(request: PaymentMethodsApi.DeletePaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentMethodsApi.DeletePaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentMethodsApi.deletePaymentMethod({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.DeletePaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi.deletePaymentMethod({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
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
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.deletePaymentMethod(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentMethodsApi.DeletePaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.deletePaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentMethodsApi.DeletePaymentMethodError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentMethod(request: PaymentMethodsApi.GetPaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethodModel, PaymentMethodsApi.GetPaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.getPaymentMethod({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PaymentMethodModel
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.GetPaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi.getPaymentMethod({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentMethodModel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.getPaymentMethod(request)`

- **OnSuccess**: <code>[PaymentMethodModel](src/models/payment-method-model.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.GetPaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.getPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentMethodModel, PaymentMethodsApi.GetPaymentMethodError&gt;</code>, with `result.value` of type <code>[PaymentMethodModel](src/models/payment-method-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentMethods(request: PaymentMethodsApi.ListPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethods, PaymentMethodsApi.ListPaymentMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all stored payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.listPaymentMethods({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    buyerExternalIdentifier: "buyer-12345",
    externalIdentifier: "payment-method-12345",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PaymentMethods
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.ListPaymentMethodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi.listPaymentMethods({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerExternalIdentifier: "buyer-12345",
  externalIdentifier: "payment-method-12345",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentMethods
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>buyerId?</code> | <code>[BuyerId24](src/models/unions/buyer-id24.ts)</code> | The ID of the buyer to filter payment methods by. |
| <code>buyerExternalIdentifier?</code> | <code>[BuyerExternalIdentifier21](src/models/unions/buyer-external-identifier21.ts)</code> | The external identifier of the buyer to filter payment methods by. |
| <code>status?</code> | <code>[Status2](src/models/unions/status2.ts)</code> | - |
| <code>externalIdentifier?</code> | <code>[ExternalIdentifier14](src/models/unions/external-identifier14.ts)</code> | The external identifier of the payment method to filter by. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.listPaymentMethods(request)`

- **OnSuccess**: <code>[PaymentMethods](src/models/payment-methods.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.ListPaymentMethodsError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.listPaymentMethods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentMethods, PaymentMethodsApi.ListPaymentMethodsError&gt;</code>, with `result.value` of type <code>[PaymentMethods](src/models/payment-methods.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePaymentMethod(request: PaymentMethodsApi.UpdatePaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethodModel, PaymentMethodsApi.UpdatePaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the details of a stored payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.updatePaymentMethod({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type PaymentMethodModel
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.UpdatePaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi.updatePaymentMethod({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentMethodModel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PaymentMethodUpdate](src/models/payment-method-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.updatePaymentMethod(request)`

- **OnSuccess**: <code>[PaymentMethodModel](src/models/payment-method-model.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.UpdatePaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.updatePaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentMethodModel, PaymentMethodsApi.UpdatePaymentMethodError&gt;</code>, with `result.value` of type <code>[PaymentMethodModel](src/models/payment-method-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethodsDefinitions

> Source: [PaymentMethodsDefinitions](src/resources/payment-methods-definitions.ts)

<details>
<summary><code>listPaymentMethodDefinitions(request: PaymentMethodsDefinitions.ListPaymentMethodDefinitionsRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethodDefinitions, PaymentMethodsDefinitions.ListPaymentMethodDefinitionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all available payment method definitions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsDefinitions.listPaymentMethodDefinitions({
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PaymentMethodDefinitions
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsDefinitions.ListPaymentMethodDefinitionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsDefinitions.listPaymentMethodDefinitions({
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentMethodDefinitions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsDefinitions.listPaymentMethodDefinitions(request)`

- **OnSuccess**: <code>[PaymentMethodDefinitions](src/models/payment-method-definitions.ts)</code>
- **OnError**: throws <code>[PaymentMethodsDefinitions.ListPaymentMethodDefinitionsError](src/resources/payment-methods-definitions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsDefinitions.listPaymentMethodDefinitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentMethodDefinitions, PaymentMethodsDefinitions.ListPaymentMethodDefinitionsError&gt;</code>, with `result.value` of type <code>[PaymentMethodDefinitions](src/models/payment-method-definitions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethodsNetworkTokens

> Source: [PaymentMethodsNetworkTokens](src/resources/payment-methods-network-tokens.ts)

<details>
<summary><code>createPaymentMethodNetworkToken(request: PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenRequest, options?: RequestOptions): ApiPromise&lt;NetworkToken, PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provision a network token for a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsNetworkTokens.createPaymentMethodNetworkToken({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
    body: { merchantInitiated: true, isSubsequentPayment: true },
  });
  // TODO: Handle 'response' of type NetworkToken
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsNetworkTokens.createPaymentMethodNetworkToken({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
  body: { merchantInitiated: true, isSubsequentPayment: true },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NetworkToken
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[NetworkTokenCreate](src/models/network-token-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsNetworkTokens.createPaymentMethodNetworkToken(request)`

- **OnSuccess**: <code>[NetworkToken](src/models/network-token.ts)</code>
- **OnError**: throws <code>[PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenError](src/resources/payment-methods-network-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsNetworkTokens.createPaymentMethodNetworkToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NetworkToken, PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenError&gt;</code>, with `result.value` of type <code>[NetworkToken](src/models/network-token.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPaymentMethodNetworkTokenCryptogram(request: PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenCryptogramRequest, options?: RequestOptions): ApiPromise&lt;Cryptogram, PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenCryptogramError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provision a cryptogram for a network token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsNetworkTokens.createPaymentMethodNetworkTokenCryptogram({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    networkTokenId: "f8dd5cfc-7834-4847-95dc-f75a360e2298",
    xGr4VyMerchantAccountId: "default",
    body: { merchantInitiated: true },
  });
  // TODO: Handle 'response' of type Cryptogram
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenCryptogramError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsNetworkTokens.createPaymentMethodNetworkTokenCryptogram({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  networkTokenId: "f8dd5cfc-7834-4847-95dc-f75a360e2298",
  xGr4VyMerchantAccountId: "default",
  body: { merchantInitiated: true },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Cryptogram
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>networkTokenId</code> | <code>string</code> | The ID of the network token |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[CryptogramCreate](src/models/cryptogram-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsNetworkTokens.createPaymentMethodNetworkTokenCryptogram(request)`

- **OnSuccess**: <code>[Cryptogram](src/models/cryptogram.ts)</code>
- **OnError**: throws <code>[PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenCryptogramError](src/resources/payment-methods-network-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsNetworkTokens.createPaymentMethodNetworkTokenCryptogram(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Cryptogram, PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenCryptogramError&gt;</code>, with `result.value` of type <code>[Cryptogram](src/models/cryptogram.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePaymentMethodNetworkToken(request: PaymentMethodsNetworkTokens.DeletePaymentMethodNetworkTokenRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentMethodsNetworkTokens.DeletePaymentMethodNetworkTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a network token for a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentMethodsNetworkTokens.deletePaymentMethodNetworkToken({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    networkTokenId: "f8dd5cfc-7834-4847-95dc-f75a360e2298",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsNetworkTokens.DeletePaymentMethodNetworkTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsNetworkTokens.deletePaymentMethodNetworkToken({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  networkTokenId: "f8dd5cfc-7834-4847-95dc-f75a360e2298",
  xGr4VyMerchantAccountId: "default",
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
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>networkTokenId</code> | <code>string</code> | The ID of the network token |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsNetworkTokens.deletePaymentMethodNetworkToken(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentMethodsNetworkTokens.DeletePaymentMethodNetworkTokenError](src/resources/payment-methods-network-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsNetworkTokens.deletePaymentMethodNetworkToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentMethodsNetworkTokens.DeletePaymentMethodNetworkTokenError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentMethodNetworkTokens(request: PaymentMethodsNetworkTokens.ListPaymentMethodNetworkTokensRequest, options?: RequestOptions): ApiPromise&lt;NetworkTokens, PaymentMethodsNetworkTokens.ListPaymentMethodNetworkTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all network tokens stored for a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsNetworkTokens.listPaymentMethodNetworkTokens({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type NetworkTokens
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsNetworkTokens.ListPaymentMethodNetworkTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsNetworkTokens.listPaymentMethodNetworkTokens({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NetworkTokens
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsNetworkTokens.listPaymentMethodNetworkTokens(request)`

- **OnSuccess**: <code>[NetworkTokens](src/models/network-tokens.ts)</code>
- **OnError**: throws <code>[PaymentMethodsNetworkTokens.ListPaymentMethodNetworkTokensError](src/resources/payment-methods-network-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsNetworkTokens.listPaymentMethodNetworkTokens(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NetworkTokens, PaymentMethodsNetworkTokens.ListPaymentMethodNetworkTokensError&gt;</code>, with `result.value` of type <code>[NetworkTokens](src/models/network-tokens.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resumePaymentMethodNetworkToken(request: PaymentMethodsNetworkTokens.ResumePaymentMethodNetworkTokenRequest, options?: RequestOptions): ApiPromise&lt;NetworkToken, PaymentMethodsNetworkTokens.ResumePaymentMethodNetworkTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume a suspended network token for a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsNetworkTokens.resumePaymentMethodNetworkToken({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    networkTokenId: "f8dd5cfc-7834-4847-95dc-f75a360e2298",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type NetworkToken
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsNetworkTokens.ResumePaymentMethodNetworkTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsNetworkTokens.resumePaymentMethodNetworkToken({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  networkTokenId: "f8dd5cfc-7834-4847-95dc-f75a360e2298",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NetworkToken
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>networkTokenId</code> | <code>string</code> | The ID of the network token |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsNetworkTokens.resumePaymentMethodNetworkToken(request)`

- **OnSuccess**: <code>[NetworkToken](src/models/network-token.ts)</code>
- **OnError**: throws <code>[PaymentMethodsNetworkTokens.ResumePaymentMethodNetworkTokenError](src/resources/payment-methods-network-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsNetworkTokens.resumePaymentMethodNetworkToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NetworkToken, PaymentMethodsNetworkTokens.ResumePaymentMethodNetworkTokenError&gt;</code>, with `result.value` of type <code>[NetworkToken](src/models/network-token.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>suspendPaymentMethodNetworkToken(request: PaymentMethodsNetworkTokens.SuspendPaymentMethodNetworkTokenRequest, options?: RequestOptions): ApiPromise&lt;NetworkToken, PaymentMethodsNetworkTokens.SuspendPaymentMethodNetworkTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suspend a network token for a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsNetworkTokens.suspendPaymentMethodNetworkToken({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    networkTokenId: "f8dd5cfc-7834-4847-95dc-f75a360e2298",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type NetworkToken
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsNetworkTokens.SuspendPaymentMethodNetworkTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsNetworkTokens.suspendPaymentMethodNetworkToken({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  networkTokenId: "f8dd5cfc-7834-4847-95dc-f75a360e2298",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NetworkToken
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>networkTokenId</code> | <code>string</code> | The ID of the network token |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsNetworkTokens.suspendPaymentMethodNetworkToken(request)`

- **OnSuccess**: <code>[NetworkToken](src/models/network-token.ts)</code>
- **OnError**: throws <code>[PaymentMethodsNetworkTokens.SuspendPaymentMethodNetworkTokenError](src/resources/payment-methods-network-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsNetworkTokens.suspendPaymentMethodNetworkToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NetworkToken, PaymentMethodsNetworkTokens.SuspendPaymentMethodNetworkTokenError&gt;</code>, with `result.value` of type <code>[NetworkToken](src/models/network-token.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethodsPaymentServiceTokens

> Source: [PaymentMethodsPaymentServiceTokens](src/resources/payment-methods-payment-service-tokens.ts)

<details>
<summary><code>createPaymentMethodPaymentServiceToken(request: PaymentMethodsPaymentServiceTokens.CreatePaymentMethodPaymentServiceTokenRequest, options?: RequestOptions): ApiPromise&lt;PaymentServiceToken, PaymentMethodsPaymentServiceTokens.CreatePaymentMethodPaymentServiceTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a gateway tokens for a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsPaymentServiceTokens.createPaymentMethodPaymentServiceToken({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
    body: { paymentServiceId: "00000000-0000-0000-0000-000000000000", redirectUrl: "some example string" },
  });
  // TODO: Handle 'response' of type PaymentServiceToken
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsPaymentServiceTokens.CreatePaymentMethodPaymentServiceTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsPaymentServiceTokens.createPaymentMethodPaymentServiceToken({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
  body: { paymentServiceId: "00000000-0000-0000-0000-000000000000", redirectUrl: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentServiceToken
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PaymentServiceTokenCreate](src/models/payment-service-token-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsPaymentServiceTokens.createPaymentMethodPaymentServiceToken(request)`

- **OnSuccess**: <code>[PaymentServiceToken](src/models/payment-service-token.ts)</code>
- **OnError**: throws <code>[PaymentMethodsPaymentServiceTokens.CreatePaymentMethodPaymentServiceTokenError](src/resources/payment-methods-payment-service-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsPaymentServiceTokens.createPaymentMethodPaymentServiceToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentServiceToken, PaymentMethodsPaymentServiceTokens.CreatePaymentMethodPaymentServiceTokenError&gt;</code>, with `result.value` of type <code>[PaymentServiceToken](src/models/payment-service-token.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePaymentMethodPaymentServiceToken(request: PaymentMethodsPaymentServiceTokens.DeletePaymentMethodPaymentServiceTokenRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentMethodsPaymentServiceTokens.DeletePaymentMethodPaymentServiceTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a gateway tokens for a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentMethodsPaymentServiceTokens.deletePaymentMethodPaymentServiceToken({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    paymentServiceTokenId: "703f2d99-3fd1-44bc-9cbd-a25a2d597886",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsPaymentServiceTokens.DeletePaymentMethodPaymentServiceTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsPaymentServiceTokens.deletePaymentMethodPaymentServiceToken({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  paymentServiceTokenId: "703f2d99-3fd1-44bc-9cbd-a25a2d597886",
  xGr4VyMerchantAccountId: "default",
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
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>paymentServiceTokenId</code> | <code>string</code> | The ID of the payment service token |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsPaymentServiceTokens.deletePaymentMethodPaymentServiceToken(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentMethodsPaymentServiceTokens.DeletePaymentMethodPaymentServiceTokenError](src/resources/payment-methods-payment-service-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsPaymentServiceTokens.deletePaymentMethodPaymentServiceToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentMethodsPaymentServiceTokens.DeletePaymentMethodPaymentServiceTokenError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentMethodPaymentServiceTokens(request: PaymentMethodsPaymentServiceTokens.ListPaymentMethodPaymentServiceTokensRequest, options?: RequestOptions): ApiPromise&lt;PaymentServiceTokens, PaymentMethodsPaymentServiceTokens.ListPaymentMethodPaymentServiceTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all gateway tokens stored for a payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsPaymentServiceTokens.listPaymentMethodPaymentServiceTokens({
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PaymentServiceTokens
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsPaymentServiceTokens.ListPaymentMethodPaymentServiceTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsPaymentServiceTokens.listPaymentMethodPaymentServiceTokens({
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentServiceTokens
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentMethodId</code> | <code>string</code> | The ID of the payment method |
| <code>paymentServiceId?</code> | <code>[PaymentServiceId8](src/models/unions/payment-service-id8.ts)</code> | The ID of the payment service |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsPaymentServiceTokens.listPaymentMethodPaymentServiceTokens(request)`

- **OnSuccess**: <code>[PaymentServiceTokens](src/models/payment-service-tokens.ts)</code>
- **OnError**: throws <code>[PaymentMethodsPaymentServiceTokens.ListPaymentMethodPaymentServiceTokensError](src/resources/payment-methods-payment-service-tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsPaymentServiceTokens.listPaymentMethodPaymentServiceTokens(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentServiceTokens, PaymentMethodsPaymentServiceTokens.ListPaymentMethodPaymentServiceTokensError&gt;</code>, with `result.value` of type <code>[PaymentServiceTokens](src/models/payment-service-tokens.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentOptionsApi

> Source: [PaymentOptionsApi](src/resources/payment-options-api.ts)

<details>
<summary><code>listPaymentOptions(request: PaymentOptionsApi.ListPaymentOptionsRequest, options?: RequestOptions): ApiPromise&lt;PaymentOptions, PaymentOptionsApi.ListPaymentOptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the payment options available at checkout. filtering by country, currency, and additional fields passed to Flow rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentOptionsApi.listPaymentOptions({
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type PaymentOptions
} catch (err) {
  // TODO: Handle 'err' of type PaymentOptionsApi.ListPaymentOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentOptionsApi.listPaymentOptions({
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentOptions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PaymentOptionRequest](src/models/payment-option-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentOptionsApi.listPaymentOptions(request)`

- **OnSuccess**: <code>[PaymentOptions](src/models/payment-options.ts)</code>
- **OnError**: throws <code>[PaymentOptionsApi.ListPaymentOptionsError](src/resources/payment-options-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentOptionsApi.listPaymentOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentOptions, PaymentOptionsApi.ListPaymentOptionsError&gt;</code>, with `result.value` of type <code>[PaymentOptions](src/models/payment-options.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentServiceDefinitionsApi

> Source: [PaymentServiceDefinitionsApi](src/resources/payment-service-definitions-api.ts)

<details>
<summary><code>createPaymentServiceDefinitionSession(request: PaymentServiceDefinitionsApi.CreatePaymentServiceDefinitionSessionRequest, options?: RequestOptions): ApiPromise&lt;CreateSession, PaymentServiceDefinitionsApi.CreatePaymentServiceDefinitionSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a session for a payment service that supports sessions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentServiceDefinitionsApi.createPaymentServiceDefinitionSession({
    paymentServiceDefinitionId: "adyen-ideal",
    body: {},
  });
  // TODO: Handle 'response' of type CreateSession
} catch (err) {
  // TODO: Handle 'err' of type PaymentServiceDefinitionsApi.CreatePaymentServiceDefinitionSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServiceDefinitionsApi.createPaymentServiceDefinitionSession({
  paymentServiceDefinitionId: "adyen-ideal",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSession
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentServiceDefinitionId</code> | <code>string</code> | - |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServiceDefinitionsApi.createPaymentServiceDefinitionSession(request)`

- **OnSuccess**: <code>[CreateSession](src/models/create-session.ts)</code>
- **OnError**: throws <code>[PaymentServiceDefinitionsApi.CreatePaymentServiceDefinitionSessionError](src/resources/payment-service-definitions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServiceDefinitionsApi.createPaymentServiceDefinitionSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSession, PaymentServiceDefinitionsApi.CreatePaymentServiceDefinitionSessionError&gt;</code>, with `result.value` of type <code>[CreateSession](src/models/create-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentServiceDefinition(request: PaymentServiceDefinitionsApi.GetPaymentServiceDefinitionRequest, options?: RequestOptions): ApiPromise&lt;PaymentServiceDefinition, PaymentServiceDefinitionsApi.GetPaymentServiceDefinitionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the definition of a payment service that can be configured.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentServiceDefinitionsApi.getPaymentServiceDefinition({
    paymentServiceDefinitionId: "adyen-ideal",
  });
  // TODO: Handle 'response' of type PaymentServiceDefinition
} catch (err) {
  // TODO: Handle 'err' of type PaymentServiceDefinitionsApi.GetPaymentServiceDefinitionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServiceDefinitionsApi.getPaymentServiceDefinition({
  paymentServiceDefinitionId: "adyen-ideal",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentServiceDefinition
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentServiceDefinitionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServiceDefinitionsApi.getPaymentServiceDefinition(request)`

- **OnSuccess**: <code>[PaymentServiceDefinition](src/models/payment-service-definition.ts)</code>
- **OnError**: throws <code>[PaymentServiceDefinitionsApi.GetPaymentServiceDefinitionError](src/resources/payment-service-definitions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServiceDefinitionsApi.getPaymentServiceDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentServiceDefinition, PaymentServiceDefinitionsApi.GetPaymentServiceDefinitionError&gt;</code>, with `result.value` of type <code>[PaymentServiceDefinition](src/models/payment-service-definition.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentServiceDefinitions(request: PaymentServiceDefinitionsApi.ListPaymentServiceDefinitionsRequest, options?: RequestOptions): ApiPromise&lt;PaymentServiceDefinitions, PaymentServiceDefinitionsApi.ListPaymentServiceDefinitionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the definitions of each payment service that can be configured.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentServiceDefinitionsApi.listPaymentServiceDefinitions({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
  });
  // TODO: Handle 'response' of type PaymentServiceDefinitions
} catch (err) {
  // TODO: Handle 'err' of type PaymentServiceDefinitionsApi.ListPaymentServiceDefinitionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServiceDefinitionsApi.listPaymentServiceDefinitions({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentServiceDefinitions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServiceDefinitionsApi.listPaymentServiceDefinitions(request)`

- **OnSuccess**: <code>[PaymentServiceDefinitions](src/models/payment-service-definitions.ts)</code>
- **OnError**: throws <code>[PaymentServiceDefinitionsApi.ListPaymentServiceDefinitionsError](src/resources/payment-service-definitions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServiceDefinitionsApi.listPaymentServiceDefinitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentServiceDefinitions, PaymentServiceDefinitionsApi.ListPaymentServiceDefinitionsError&gt;</code>, with `result.value` of type <code>[PaymentServiceDefinitions](src/models/payment-service-definitions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentServicesApi

> Source: [PaymentServicesApi](src/resources/payment-services-api.ts)

<details>
<summary><code>createPaymentService(request: PaymentServicesApi.CreatePaymentServiceRequest, options?: RequestOptions): ApiPromise&lt;PaymentService, PaymentServicesApi.CreatePaymentServiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures a new payment service for use by merchants.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentServicesApi.createPaymentService({
    xGr4VyMerchantAccountId: "default",
    body: {
      displayName: "some example string",
      paymentServiceDefinitionId: "some example string",
      fields: [{ key: "some example string", value: "some example string" }],
      acceptedCurrencies: ["some example string"],
      acceptedCountries: ["some example string"],
    },
  });
  // TODO: Handle 'response' of type PaymentService
} catch (err) {
  // TODO: Handle 'err' of type PaymentServicesApi.CreatePaymentServiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServicesApi.createPaymentService({
  xGr4VyMerchantAccountId: "default",
  body: {
    displayName: "some example string",
    paymentServiceDefinitionId: "some example string",
    fields: [{ key: "some example string", value: "some example string" }],
    acceptedCurrencies: ["some example string"],
    acceptedCountries: ["some example string"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentService
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PaymentServiceCreate](src/models/payment-service-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServicesApi.createPaymentService(request)`

- **OnSuccess**: <code>[PaymentService](src/models/payment-service.ts)</code>
- **OnError**: throws <code>[PaymentServicesApi.CreatePaymentServiceError](src/resources/payment-services-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServicesApi.createPaymentService(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentService, PaymentServicesApi.CreatePaymentServiceError&gt;</code>, with `result.value` of type <code>[PaymentService](src/models/payment-service.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPaymentServiceSession(request: PaymentServicesApi.CreatePaymentServiceSessionRequest, options?: RequestOptions): ApiPromise&lt;CreateSession, PaymentServicesApi.CreatePaymentServiceSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a session for a payment service that supports sessions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentServicesApi.createPaymentServiceSession({
    paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type CreateSession
} catch (err) {
  // TODO: Handle 'err' of type PaymentServicesApi.CreatePaymentServiceSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServicesApi.createPaymentServiceSession({
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSession
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentServiceId</code> | <code>string</code> | the ID of the payment service |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServicesApi.createPaymentServiceSession(request)`

- **OnSuccess**: <code>[CreateSession](src/models/create-session.ts)</code>
- **OnError**: throws <code>[PaymentServicesApi.CreatePaymentServiceSessionError](src/resources/payment-services-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServicesApi.createPaymentServiceSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSession, PaymentServicesApi.CreatePaymentServiceSessionError&gt;</code>, with `result.value` of type <code>[CreateSession](src/models/create-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePaymentService(request: PaymentServicesApi.DeletePaymentServiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, PaymentServicesApi.DeletePaymentServiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all the configuration of a payment service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.paymentServicesApi.deletePaymentService({
    paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type PaymentServicesApi.DeletePaymentServiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServicesApi.deletePaymentService({
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
  xGr4VyMerchantAccountId: "default",
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
| <code>paymentServiceId</code> | <code>string</code> | the ID of the payment service |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServicesApi.deletePaymentService(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PaymentServicesApi.DeletePaymentServiceError](src/resources/payment-services-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServicesApi.deletePaymentService(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PaymentServicesApi.DeletePaymentServiceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentService(request: PaymentServicesApi.GetPaymentServiceRequest, options?: RequestOptions): ApiPromise&lt;PaymentService, PaymentServicesApi.GetPaymentServiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the details of a configured payment service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentServicesApi.getPaymentService({
    paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PaymentService
} catch (err) {
  // TODO: Handle 'err' of type PaymentServicesApi.GetPaymentServiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServicesApi.getPaymentService({
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentService
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentServiceId</code> | <code>string</code> | the ID of the payment service |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServicesApi.getPaymentService(request)`

- **OnSuccess**: <code>[PaymentService](src/models/payment-service.ts)</code>
- **OnError**: throws <code>[PaymentServicesApi.GetPaymentServiceError](src/resources/payment-services-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServicesApi.getPaymentService(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentService, PaymentServicesApi.GetPaymentServiceError&gt;</code>, with `result.value` of type <code>[PaymentService](src/models/payment-service.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentServices(request: PaymentServicesApi.ListPaymentServicesRequest, options?: RequestOptions): ApiPromise&lt;PaymentServices, PaymentServicesApi.ListPaymentServicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the configured payment services.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentServicesApi.listPaymentServices({
    method: Method.Card,
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    deleted: true,
    includeFields: true,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PaymentServices
} catch (err) {
  // TODO: Handle 'err' of type PaymentServicesApi.ListPaymentServicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServicesApi.listPaymentServices({
  method: Method.Card,
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  deleted: true,
  includeFields: true,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentServices
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>method?</code> | <code>[Method111](src/models/unions/method111.ts)</code> | Return any payment service for this method. |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>deleted?</code> | <code>[Deleted](src/models/unions/deleted.ts)</code> | Return any deleted payment service. |
| <code>includeFields?</code> | <code>boolean</code> | Include the non-secret credential and reporting fields for each payment service. Disable this to reduce response time if you don't need them.<br>**Default**: true |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServicesApi.listPaymentServices(request)`

- **OnSuccess**: <code>[PaymentServices](src/models/payment-services.ts)</code>
- **OnError**: throws <code>[PaymentServicesApi.ListPaymentServicesError](src/resources/payment-services-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServicesApi.listPaymentServices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentServices, PaymentServicesApi.ListPaymentServicesError&gt;</code>, with `result.value` of type <code>[PaymentServices](src/models/payment-services.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePaymentService(request: PaymentServicesApi.UpdatePaymentServiceRequest, options?: RequestOptions): ApiPromise&lt;PaymentService, PaymentServicesApi.UpdatePaymentServiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of a payment service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentServicesApi.updatePaymentService({
    paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type PaymentService
} catch (err) {
  // TODO: Handle 'err' of type PaymentServicesApi.UpdatePaymentServiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServicesApi.updatePaymentService({
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentService
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentServiceId</code> | <code>string</code> | the ID of the payment service |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PaymentServiceUpdate](src/models/payment-service-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServicesApi.updatePaymentService(request)`

- **OnSuccess**: <code>[PaymentService](src/models/payment-service.ts)</code>
- **OnError**: throws <code>[PaymentServicesApi.UpdatePaymentServiceError](src/resources/payment-services-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServicesApi.updatePaymentService(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentService, PaymentServicesApi.UpdatePaymentServiceError&gt;</code>, with `result.value` of type <code>[PaymentService](src/models/payment-service.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyPaymentServiceCredentials(request: PaymentServicesApi.VerifyPaymentServiceCredentialsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, PaymentServicesApi.VerifyPaymentServiceCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify the credentials of a configured payment service

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentServicesApi.verifyPaymentServiceCredentials({
    xGr4VyMerchantAccountId: "default",
    body: {
      paymentServiceDefinitionId: "some example string",
      fields: [{ key: "some example string", value: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type PaymentServicesApi.VerifyPaymentServiceCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentServicesApi.verifyPaymentServiceCredentials({
  xGr4VyMerchantAccountId: "default",
  body: {
    paymentServiceDefinitionId: "some example string",
    fields: [{ key: "some example string", value: "some example string" }],
  },
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
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[VerifyCredentials](src/models/verify-credentials.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentServicesApi.verifyPaymentServiceCredentials(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[PaymentServicesApi.VerifyPaymentServiceCredentialsError](src/resources/payment-services-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentServicesApi.verifyPaymentServiceCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, PaymentServicesApi.VerifyPaymentServiceCredentialsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Payouts

> Source: [Payouts](src/resources/payouts.ts)

<details>
<summary><code>createPayout(request: Payouts.CreatePayoutRequest, options?: RequestOptions): ApiPromise&lt;PayoutSummary, Payouts.CreatePayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new payout.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.createPayout({
    xGr4VyMerchantAccountId: "default",
    body: {
      amount: 1,
      currency: "some example string",
      paymentServiceId: "00000000-0000-0000-0000-000000000000",
      paymentMethod: { number: "some example string", expirationDate: "some example string" },
    },
  });
  // TODO: Handle 'response' of type PayoutSummary
} catch (err) {
  // TODO: Handle 'err' of type Payouts.CreatePayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.createPayout({
  xGr4VyMerchantAccountId: "default",
  body: {
    amount: 1,
    currency: "some example string",
    paymentServiceId: "00000000-0000-0000-0000-000000000000",
    paymentMethod: { number: "some example string", expirationDate: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[PayoutCreate](src/models/payout-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.createPayout(request)`

- **OnSuccess**: <code>[PayoutSummary](src/models/payout-summary.ts)</code>
- **OnError**: throws <code>[Payouts.CreatePayoutError](src/resources/payouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payouts.createPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutSummary, Payouts.CreatePayoutError&gt;</code>, with `result.value` of type <code>[PayoutSummary](src/models/payout-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayout(request: Payouts.GetPayoutRequest, options?: RequestOptions): ApiPromise&lt;PayoutSummary, Payouts.GetPayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a payout.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.getPayout({
    payoutId: "00000000-0000-0000-0000-000000000000",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PayoutSummary
} catch (err) {
  // TODO: Handle 'err' of type Payouts.GetPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.getPayout({
  payoutId: "00000000-0000-0000-0000-000000000000",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payoutId</code> | <code>string</code> | - |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.getPayout(request)`

- **OnSuccess**: <code>[PayoutSummary](src/models/payout-summary.ts)</code>
- **OnError**: throws <code>[Payouts.GetPayoutError](src/resources/payouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payouts.getPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutSummary, Payouts.GetPayoutError&gt;</code>, with `result.value` of type <code>[PayoutSummary](src/models/payout-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayouts(request: Payouts.ListPayoutsRequest, options?: RequestOptions): ApiPromise&lt;PayoutSummaries, Payouts.ListPayoutsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payouts made.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.listPayouts({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    createdAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    createdAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    updatedAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    updatedAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    externalIdentifier: "payout-12345",
    paymentServicePayoutId: "po_1234567890",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type PayoutSummaries
} catch (err) {
  // TODO: Handle 'err' of type Payouts.ListPayoutsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.listPayouts({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  createdAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  createdAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  updatedAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  updatedAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  externalIdentifier: "payout-12345",
  paymentServicePayoutId: "po_1234567890",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutSummaries
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>createdAtLte?</code> | <code>[CreatedAtLte2](src/models/unions/created-at-lte2.ts)</code> | Filters the results to only payouts created before this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>createdAtGte?</code> | <code>[CreatedAtGte2](src/models/unions/created-at-gte2.ts)</code> | Filters the results to only payouts created after this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>updatedAtLte?</code> | <code>[UpdatedAtLte1](src/models/unions/updated-at-lte1.ts)</code> | Filters the results to only payouts updated before this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>updatedAtGte?</code> | <code>[UpdatedAtGte1](src/models/unions/updated-at-gte1.ts)</code> | Filters the results to only payouts updated after this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>externalIdentifier?</code> | <code>[ExternalIdentifier43](src/models/unions/external-identifier43.ts)</code> | Filters the results to only the payouts that have an `external_identifier` that exactly matches this value. |
| <code>paymentServicePayoutId?</code> | <code>[PaymentServicePayoutId1](src/models/unions/payment-service-payout-id1.ts)</code> | Filters the results to only the payouts that have a `payment_service_payout_id` that exactly matches this value. |
| <code>status?</code> | <code>[Status5](src/models/unions/status5.ts)</code> | Filters the results to only the payouts that have a `status` that matches with any of the provided status values. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.listPayouts(request)`

- **OnSuccess**: <code>[PayoutSummaries](src/models/payout-summaries.ts)</code>
- **OnError**: throws <code>[Payouts.ListPayoutsError](src/resources/payouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payouts.listPayouts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutSummaries, Payouts.ListPayoutsError&gt;</code>, with `result.value` of type <code>[PayoutSummaries](src/models/payout-summaries.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RefundsApi

> Source: [RefundsApi](src/resources/refunds-api.ts)

<details>
<summary><code>createFullTransactionRefund(request: RefundsApi.CreateFullTransactionRefundRequest, options?: RequestOptions): ApiPromise&lt;Refunds, RefundsApi.CreateFullTransactionRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a refund for all instruments on a transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refundsApi.createFullTransactionRefund({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
    idempotencyKey: "request-12345",
  });
  // TODO: Handle 'response' of type Refunds
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.CreateFullTransactionRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.createFullTransactionRefund({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
  idempotencyKey: "request-12345",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Refunds
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>idempotencyKey?</code> | <code>[IdempotencyKey2](src/models/unions/idempotency-key2.ts)</code> | A unique key that identifies this request. Providing this header will make this an idempotent request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid collisions. |
| <code>body?</code> | <code>[Body1](src/models/unions/body1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.createFullTransactionRefund(request)`

- **OnSuccess**: <code>[Refunds](src/models/refunds.ts)</code>
- **OnError**: throws <code>[RefundsApi.CreateFullTransactionRefundError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.createFullTransactionRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Refunds, RefundsApi.CreateFullTransactionRefundError&gt;</code>, with `result.value` of type <code>[Refunds](src/models/refunds.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTransactionRefund(request: RefundsApi.CreateTransactionRefundRequest, options?: RequestOptions): ApiPromise&lt;Refund, RefundsApi.CreateTransactionRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a refund for a transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refundsApi.createTransactionRefund({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
    idempotencyKey: "request-12345",
    body: {},
  });
  // TODO: Handle 'response' of type Refund
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.CreateTransactionRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.createTransactionRefund({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
  idempotencyKey: "request-12345",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Refund
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>idempotencyKey?</code> | <code>[IdempotencyKey2](src/models/unions/idempotency-key2.ts)</code> | A unique key that identifies this request. Providing this header will make this an idempotent request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid collisions. |
| <code>body</code> | <code>[TransactionRefundCreate](src/models/transaction-refund-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.createTransactionRefund(request)`

- **OnSuccess**: <code>[Refund](src/models/refund.ts)</code>
- **OnError**: throws <code>[RefundsApi.CreateTransactionRefundError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.createTransactionRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Refund, RefundsApi.CreateTransactionRefundError&gt;</code>, with `result.value` of type <code>[Refund](src/models/refund.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRefund(request: RefundsApi.GetRefundRequest, options?: RequestOptions): ApiPromise&lt;Refund, RefundsApi.GetRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a refund.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refundsApi.getRefund({
    refundId: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Refund
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.GetRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.getRefund({
  refundId: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Refund
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>refundId</code> | <code>string</code> | The ID of the refund |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.getRefund(request)`

- **OnSuccess**: <code>[Refund](src/models/refund.ts)</code>
- **OnError**: throws <code>[RefundsApi.GetRefundError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.getRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Refund, RefundsApi.GetRefundError&gt;</code>, with `result.value` of type <code>[Refund](src/models/refund.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransactionRefund(request: RefundsApi.GetTransactionRefundRequest, options?: RequestOptions): ApiPromise&lt;Refund, RefundsApi.GetTransactionRefundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch refund for a transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refundsApi.getTransactionRefund({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    refundId: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Refund
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.GetTransactionRefundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.getTransactionRefund({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  refundId: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Refund
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>refundId</code> | <code>string</code> | The ID of the refund |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.getTransactionRefund(request)`

- **OnSuccess**: <code>[Refund](src/models/refund.ts)</code>
- **OnError**: throws <code>[RefundsApi.GetTransactionRefundError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.getTransactionRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Refund, RefundsApi.GetTransactionRefundError&gt;</code>, with `result.value` of type <code>[Refund](src/models/refund.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactionRefunds(request: RefundsApi.ListTransactionRefundsRequest, options?: RequestOptions): ApiPromise&lt;Refunds, RefundsApi.ListTransactionRefundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List refunds for a transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refundsApi.listTransactionRefunds({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Refunds
} catch (err) {
  // TODO: Handle 'err' of type RefundsApi.ListTransactionRefundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refundsApi.listTransactionRefunds({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Refunds
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refundsApi.listTransactionRefunds(request)`

- **OnSuccess**: <code>[Refunds](src/models/refunds.ts)</code>
- **OnError**: throws <code>[RefundsApi.ListTransactionRefundsError](src/resources/refunds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.refundsApi.listTransactionRefunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Refunds, RefundsApi.ListTransactionRefundsError&gt;</code>, with `result.value` of type <code>[Refunds](src/models/refunds.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ReportsApi

> Source: [ReportsApi](src/resources/reports-api.ts)

<details>
<summary><code>addReport(request: ReportsApi.AddReportRequest, options?: RequestOptions): ApiPromise&lt;Report, ReportsApi.AddReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.addReport({
    xGr4VyMerchantAccountId: "default",
    body: {
      name: "some example string",
      schedule: ReportSchedule1.Daily,
      scheduleEnabled: true,
      spec: { model: "accounts_receivables", params: {} },
    },
  });
  // TODO: Handle 'response' of type Report
} catch (err) {
  // TODO: Handle 'err' of type ReportsApi.AddReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.addReport({
  xGr4VyMerchantAccountId: "default",
  body: {
    name: "some example string",
    schedule: ReportSchedule1.Daily,
    scheduleEnabled: true,
    spec: { model: "accounts_receivables", params: {} },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Report
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[ReportCreate](src/models/report-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.addReport(request)`

- **OnSuccess**: <code>[Report](src/models/report.ts)</code>
- **OnError**: throws <code>[ReportsApi.AddReportError](src/resources/reports-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsApi.addReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Report, ReportsApi.AddReportError&gt;</code>, with `result.value` of type <code>[Report](src/models/report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReport(request: ReportsApi.GetReportRequest, options?: RequestOptions): ApiPromise&lt;Report, ReportsApi.GetReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a report by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.getReport({
    reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Report
} catch (err) {
  // TODO: Handle 'err' of type ReportsApi.GetReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.getReport({
  reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Report
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportId</code> | <code>string</code> | The ID of the report to retrieve details for. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.getReport(request)`

- **OnSuccess**: <code>[Report](src/models/report.ts)</code>
- **OnError**: throws <code>[ReportsApi.GetReportError](src/resources/reports-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsApi.getReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Report, ReportsApi.GetReportError&gt;</code>, with `result.value` of type <code>[Report](src/models/report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReports(request: ReportsApi.ListReportsRequest, options?: RequestOptions): ApiPromise&lt;Reports, ReportsApi.ListReportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all configured reports that can be generated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.listReports({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    schedule: [ReportSchedule.Daily, ReportSchedule.Monthly],
    scheduleEnabled: true,
    name: "My report",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Reports
} catch (err) {
  // TODO: Handle 'err' of type ReportsApi.ListReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.listReports({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  schedule: [ReportSchedule.Daily, ReportSchedule.Monthly],
  scheduleEnabled: true,
  name: "My report",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Reports
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>schedule?</code> | <code>[Schedule](src/models/unions/schedule.ts)</code> | Filters the reports by the type of schedule at which they run. |
| <code>scheduleEnabled?</code> | <code>[ScheduleEnabled1](src/models/unions/schedule-enabled1.ts)</code> | Filters the reports by wether their schedule is enabled. |
| <code>name?</code> | <code>[Name111](src/models/unions/name111.ts)</code> | Filters the reports by searching their name for (partial) matches. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.listReports(request)`

- **OnSuccess**: <code>[Reports](src/models/reports.ts)</code>
- **OnError**: throws <code>[ReportsApi.ListReportsError](src/resources/reports-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsApi.listReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Reports, ReportsApi.ListReportsError&gt;</code>, with `result.value` of type <code>[Reports](src/models/reports.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateReport(request: ReportsApi.UpdateReportRequest, options?: RequestOptions): ApiPromise&lt;Report, ReportsApi.UpdateReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of a report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.updateReport({
    reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type Report
} catch (err) {
  // TODO: Handle 'err' of type ReportsApi.UpdateReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.updateReport({
  reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Report
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportId</code> | <code>string</code> | The ID of the report to edit. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[ReportUpdate](src/models/report-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.updateReport(request)`

- **OnSuccess**: <code>[Report](src/models/report.ts)</code>
- **OnError**: throws <code>[ReportsApi.UpdateReportError](src/resources/reports-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsApi.updateReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Report, ReportsApi.UpdateReportError&gt;</code>, with `result.value` of type <code>[Report](src/models/report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ReportsExecutions

> Source: [ReportsExecutions](src/resources/reports-executions.ts)

<details>
<summary><code>createReportExecutionUrl(request: ReportsExecutions.CreateReportExecutionUrlRequest, options?: RequestOptions): ApiPromise&lt;ReportExecutionUrl, ReportsExecutions.CreateReportExecutionUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a download URL for a specific execution of a report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsExecutions.createReportExecutionUrl({
    reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
    reportExecutionId: "003bc416-f32a-420c-8eb2-062a386e1fb0",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type ReportExecutionUrl
} catch (err) {
  // TODO: Handle 'err' of type ReportsExecutions.CreateReportExecutionUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsExecutions.createReportExecutionUrl({
  reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
  reportExecutionId: "003bc416-f32a-420c-8eb2-062a386e1fb0",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportExecutionUrl
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportId</code> | <code>string</code> | The ID of the report to retrieve a URL for. |
| <code>reportExecutionId</code> | <code>string</code> | The ID of the execution of a report to retrieve a URL for. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body?</code> | <code>[ReportExecutionUrlGenerate](src/models/report-execution-url-generate.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsExecutions.createReportExecutionUrl(request)`

- **OnSuccess**: <code>[ReportExecutionUrl](src/models/report-execution-url.ts)</code>
- **OnError**: throws <code>[ReportsExecutions.CreateReportExecutionUrlError](src/resources/reports-executions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsExecutions.createReportExecutionUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportExecutionUrl, ReportsExecutions.CreateReportExecutionUrlError&gt;</code>, with `result.value` of type <code>[ReportExecutionUrl](src/models/report-execution-url.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReportExecution(request: ReportsExecutions.GetReportExecutionRequest, options?: RequestOptions): ApiPromise&lt;ReportExecution, ReportsExecutions.GetReportExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a specific executed report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsExecutions.getReportExecution({
    reportExecutionId: "003bc416-f32a-420c-8eb2-062a386e1fb0",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type ReportExecution
} catch (err) {
  // TODO: Handle 'err' of type ReportsExecutions.GetReportExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsExecutions.getReportExecution({
  reportExecutionId: "003bc416-f32a-420c-8eb2-062a386e1fb0",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportExecution
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportExecutionId</code> | <code>string</code> | The ID of the execution of a report to retrieve details for. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsExecutions.getReportExecution(request)`

- **OnSuccess**: <code>[ReportExecution](src/models/report-execution.ts)</code>
- **OnError**: throws <code>[ReportsExecutions.GetReportExecutionError](src/resources/reports-executions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsExecutions.getReportExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportExecution, ReportsExecutions.GetReportExecutionError&gt;</code>, with `result.value` of type <code>[ReportExecution](src/models/report-execution.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllReportExecutions(request: ReportsExecutions.ListAllReportExecutionsRequest, options?: RequestOptions): ApiPromise&lt;ReportExecutions, ReportsExecutions.ListAllReportExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all executed reports that have been generated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsExecutions.listAllReportExecutions({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    reportName: "My report",
    createdAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    createdAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type ReportExecutions
} catch (err) {
  // TODO: Handle 'err' of type ReportsExecutions.ListAllReportExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsExecutions.listAllReportExecutions({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  reportName: "My report",
  createdAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  createdAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportExecutions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>reportName?</code> | <code>[ReportName](src/models/unions/report-name.ts)</code> | Filters the reports by searching their name for (partial) matches. |
| <code>createdAtLte?</code> | <code>[CreatedAtLte1](src/models/unions/created-at-lte1.ts)</code> | Filters the results to only reports created before this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>createdAtGte?</code> | <code>[CreatedAtGte1](src/models/unions/created-at-gte1.ts)</code> | Filters the results to only reports created after this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>status?</code> | <code>[Status4](src/models/unions/status4.ts)</code> | Filters the results to only the reports that have a `status` that matches with any of the provided status values. |
| <code>creatorId?</code> | <code>[CreatorId2](src/models/unions/creator-id2.ts)</code> | Filters the results to only the reports that were created by the users with these IDs. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsExecutions.listAllReportExecutions(request)`

- **OnSuccess**: <code>[ReportExecutions](src/models/report-executions.ts)</code>
- **OnError**: throws <code>[ReportsExecutions.ListAllReportExecutionsError](src/resources/reports-executions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsExecutions.listAllReportExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportExecutions, ReportsExecutions.ListAllReportExecutionsError&gt;</code>, with `result.value` of type <code>[ReportExecutions](src/models/report-executions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReportExecutions(request: ReportsExecutions.ListReportExecutionsRequest, options?: RequestOptions): ApiPromise&lt;ReportExecutions, ReportsExecutions.ListReportExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all executions of a specific report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsExecutions.listReportExecutions({
    reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type ReportExecutions
} catch (err) {
  // TODO: Handle 'err' of type ReportsExecutions.ListReportExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsExecutions.listReportExecutions({
  reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportExecutions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportId</code> | <code>string</code> | The ID of the report to retrieve details for. |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsExecutions.listReportExecutions(request)`

- **OnSuccess**: <code>[ReportExecutions](src/models/report-executions.ts)</code>
- **OnError**: throws <code>[ReportsExecutions.ListReportExecutionsError](src/resources/reports-executions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsExecutions.listReportExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportExecutions, ReportsExecutions.ListReportExecutionsError&gt;</code>, with `result.value` of type <code>[ReportExecutions](src/models/report-executions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](src/resources/roles.ts)

<details>
<summary><code>listRoles(request: Roles.ListRolesRequest, options?: RequestOptions): ApiPromise&lt;CollectionRole, Roles.ListRolesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all roles available in the instance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.listRoles({ cursor: "ZXhhbXBsZTE", limit: 20 });
  // TODO: Handle 'response' of type CollectionRole
} catch (err) {
  // TODO: Handle 'err' of type Roles.ListRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.listRoles({ cursor: "ZXhhbXBsZTE", limit: 20 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CollectionRole
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are returned.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.listRoles(request)`

- **OnSuccess**: <code>[CollectionRole](src/models/collection-role.ts)</code>
- **OnError**: throws <code>[Roles.ListRolesError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.listRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CollectionRole, Roles.ListRolesError&gt;</code>, with `result.value` of type <code>[CollectionRole](src/models/collection-role.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/resources/transactions.ts)

<details>
<summary><code>cancelTransaction(request: Transactions.CancelTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionCancel, Transactions.CancelTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a pending transaction. If the transaction was successfully authorized, or was already captured, the cancel will not be processed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.cancelTransaction({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type TransactionCancel
} catch (err) {
  // TODO: Handle 'err' of type Transactions.CancelTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.cancelTransaction({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionCancel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.cancelTransaction(request)`

- **OnSuccess**: <code>[TransactionCancel](src/models/transaction-cancel.ts)</code>
- **OnError**: throws <code>[Transactions.CancelTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.cancelTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionCancel, Transactions.CancelTransactionError&gt;</code>, with `result.value` of type <code>[TransactionCancel](src/models/transaction-cancel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>captureTransaction(request: Transactions.CaptureTransactionRequest, options?: RequestOptions): ApiPromise&lt;Response200CaptureTransaction, Transactions.CaptureTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Captures a previously authorized transaction. You can capture the full or a partial amount, as long as it does not exceed the authorized amount (unless over-capture is enabled).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.captureTransaction({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
    idempotencyKey: "request-12345",
    body: {},
  });
  // TODO: Handle 'response' of type Response200CaptureTransaction
} catch (err) {
  // TODO: Handle 'err' of type Transactions.CaptureTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.captureTransaction({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
  idempotencyKey: "request-12345",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Response200CaptureTransaction
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>prefer?</code> | <code>[Prefer](src/models/unions/prefer.ts)</code> | The preferred resource type in the response. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>idempotencyKey?</code> | <code>[IdempotencyKey2](src/models/unions/idempotency-key2.ts)</code> | A unique key that identifies this request. Providing this header will make this an idempotent request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid collisions. |
| <code>body</code> | <code>[TransactionCaptureCreate](src/models/transaction-capture-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.captureTransaction(request)`

- **OnSuccess**: <code>[Response200CaptureTransaction](src/models/unions/response200-capture-transaction.ts)</code>
- **OnError**: throws <code>[Transactions.CaptureTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.captureTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Response200CaptureTransaction, Transactions.CaptureTransactionError&gt;</code>, with `result.value` of type <code>[Response200CaptureTransaction](src/models/unions/response200-capture-transaction.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTransaction(request: Transactions.CreateTransactionRequest, options?: RequestOptions): ApiPromise&lt;Transaction, Transactions.CreateTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new transaction using a supported payment method. If additional buyer authorization is required, an approval URL will be returned. Duplicated gift card numbers are not supported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.createTransaction({
    xGr4VyMerchantAccountId: "default",
    idempotencyKey: "request-12345",
    body: { amount: 1, currency: "some example string" },
  });
  // TODO: Handle 'response' of type Transaction
} catch (err) {
  // TODO: Handle 'err' of type Transactions.CreateTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.createTransaction({
  xGr4VyMerchantAccountId: "default",
  idempotencyKey: "request-12345",
  body: { amount: 1, currency: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Transaction
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>idempotencyKey?</code> | <code>[IdempotencyKey2](src/models/unions/idempotency-key2.ts)</code> | A unique key that identifies this request. Providing this header will make this an idempotent request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid collisions. |
| <code>body</code> | <code>[TransactionCreate](src/models/transaction-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.createTransaction(request)`

- **OnSuccess**: <code>[Transaction](src/models/transaction.ts)</code>
- **OnError**: throws <code>[Transactions.CreateTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.createTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Transaction, Transactions.CreateTransactionError&gt;</code>, with `result.value` of type <code>[Transaction](src/models/transaction.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransaction(request: Transactions.GetTransactionRequest, options?: RequestOptions): ApiPromise&lt;Transaction, Transactions.GetTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details of a transaction by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.getTransaction({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Transaction
} catch (err) {
  // TODO: Handle 'err' of type Transactions.GetTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.getTransaction({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Transaction
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.getTransaction(request)`

- **OnSuccess**: <code>[Transaction](src/models/transaction.ts)</code>
- **OnError**: throws <code>[Transactions.GetTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.getTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Transaction, Transactions.GetTransactionError&gt;</code>, with `result.value` of type <code>[Transaction](src/models/transaction.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incrementTransactionAuthorization(request: Transactions.IncrementTransactionAuthorizationRequest, options?: RequestOptions): ApiPromise&lt;TransactionAuthorizationIncrement, Transactions.IncrementTransactionAuthorizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Increment the transaction authorization amount of a given transaction_id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.incrementTransactionAuthorization({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
    idempotencyKey: "request-12345",
    body: { amount: 1 },
  });
  // TODO: Handle 'response' of type TransactionAuthorizationIncrement
} catch (err) {
  // TODO: Handle 'err' of type Transactions.IncrementTransactionAuthorizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.incrementTransactionAuthorization({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
  idempotencyKey: "request-12345",
  body: { amount: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionAuthorizationIncrement
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The unique identifier of the transaction. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>idempotencyKey?</code> | <code>[IdempotencyKey2](src/models/unions/idempotency-key2.ts)</code> | A unique key that identifies this request. Providing this header will make this an idempotent request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid collisions. |
| <code>body</code> | <code>[TransactionAuthorizationIncrementCreate](src/models/transaction-authorization-increment-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.incrementTransactionAuthorization(request)`

- **OnSuccess**: <code>[TransactionAuthorizationIncrement](src/models/transaction-authorization-increment.ts)</code>
- **OnError**: throws <code>[Transactions.IncrementTransactionAuthorizationError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.incrementTransactionAuthorization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionAuthorizationIncrement, Transactions.IncrementTransactionAuthorizationError&gt;</code>, with `result.value` of type <code>[TransactionAuthorizationIncrement](src/models/transaction-authorization-increment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactionEvents(request: Transactions.ListTransactionEventsRequest, options?: RequestOptions): ApiPromise&lt;TransactionEvents, Transactions.ListTransactionEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of events related to processing a transaction, including status changes, API requests, and webhook delivery attempts. Events are listed in chronological order, with the most recent events first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.listTransactionEvents({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    cursor: "ZXhhbXBsZTE",
    limit: 100,
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type TransactionEvents
} catch (err) {
  // TODO: Handle 'err' of type Transactions.ListTransactionEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.listTransactionEvents({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  cursor: "ZXhhbXBsZTE",
  limit: 100,
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionEvents
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 100 |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.listTransactionEvents(request)`

- **OnSuccess**: <code>[TransactionEvents](src/models/transaction-events.ts)</code>
- **OnError**: throws <code>[Transactions.ListTransactionEventsError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.listTransactionEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionEvents, Transactions.ListTransactionEventsError&gt;</code>, with `result.value` of type <code>[TransactionEvents](src/models/transaction-events.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactions(request: Transactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionSummaries, Transactions.ListTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of transactions for the merchant account, sorted by most recently updated. You can filter, sort, and search transactions using query parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.listTransactions({
    cursor: "ZXhhbXBsZTE",
    limit: 20,
    createdAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    createdAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    updatedAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    updatedAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
    search: "transaction-12345",
    buyerExternalIdentifier: "buyer-12345",
    buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    buyerEmailAddress: "john@example.com",
    ipAddress: "8.214.133.47",
    id: "7099948d-7286-47e4-aad8-b68f7eb44591",
    paymentServiceTransactionId: "tx-12345",
    externalIdentifier: "transaction-12345",
    amountEq: 1299,
    amountLte: 1299,
    amountGte: 1299,
    currency: ["USD"],
    country: ["US"],
    paymentServiceId: ["fffd152a-9532-4087-9a4f-de58754210f0"],
    paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    paymentMethodLabel: "1234",
    paymentMethodScheme: ["visa"],
    paymentMethodCountry: "some example string",
    paymentMethodFingerprint: "a50b85c200ee0795d6fd33a5c66f37a4564f554355c5b46a756aac485dd168a4",
    errorCode: ["insufficient_funds"],
    hasRefunds: true,
    pendingReview: true,
    checkoutSessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
    paymentLinkId: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    reconciliationId: "7jZXl4gBUNl0CnaLEnfXbt",
    hasGiftCardRedemptions: true,
    giftCardId: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
    giftCardLast4: "7890",
    hasSettlements: true,
    paymentMethodBin: "411111",
    isSubsequentPayment: true,
    merchantInitiated: true,
    used3Ds: true,
    disputed: true,
    reauthorizedFromTransactionId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    buyerSearch: ["John", "London"],
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type TransactionSummaries
} catch (err) {
  // TODO: Handle 'err' of type Transactions.ListTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.listTransactions({
  cursor: "ZXhhbXBsZTE",
  limit: 20,
  createdAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  createdAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  updatedAtLte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  updatedAtGte: new Date(Date.UTC(2022, 0, 1, 4, 0, 0)),
  search: "transaction-12345",
  buyerExternalIdentifier: "buyer-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerEmailAddress: "john@example.com",
  ipAddress: "8.214.133.47",
  id: "7099948d-7286-47e4-aad8-b68f7eb44591",
  paymentServiceTransactionId: "tx-12345",
  externalIdentifier: "transaction-12345",
  amountEq: 1299,
  amountLte: 1299,
  amountGte: 1299,
  currency: ["USD"],
  country: ["US"],
  paymentServiceId: ["fffd152a-9532-4087-9a4f-de58754210f0"],
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  paymentMethodLabel: "1234",
  paymentMethodScheme: ["visa"],
  paymentMethodCountry: "some example string",
  paymentMethodFingerprint: "a50b85c200ee0795d6fd33a5c66f37a4564f554355c5b46a756aac485dd168a4",
  errorCode: ["insufficient_funds"],
  hasRefunds: true,
  pendingReview: true,
  checkoutSessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
  paymentLinkId: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
  reconciliationId: "7jZXl4gBUNl0CnaLEnfXbt",
  hasGiftCardRedemptions: true,
  giftCardId: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
  giftCardLast4: "7890",
  hasSettlements: true,
  paymentMethodBin: "411111",
  isSubsequentPayment: true,
  merchantInitiated: true,
  used3Ds: true,
  disputed: true,
  reauthorizedFromTransactionId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerSearch: ["John", "London"],
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionSummaries
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | A pointer to the page of results to return. |
| <code>limit?</code> | <code>number</code> | The maximum number of items that are at returned.<br>**Default**: 20 |
| <code>createdAtLte?</code> | <code>[CreatedAtLte](src/models/unions/created-at-lte.ts)</code> | Filters the results to only transactions created before this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>createdAtGte?</code> | <code>[CreatedAtGte](src/models/unions/created-at-gte.ts)</code> | Filters the results to only transactions created after this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>updatedAtLte?</code> | <code>[UpdatedAtLte](src/models/unions/updated-at-lte.ts)</code> | Filters the results to only transactions updated before this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>updatedAtGte?</code> | <code>[UpdatedAtGte](src/models/unions/updated-at-gte.ts)</code> | Filters the results to only transactions updated after this ISO date-time string. The time zone must be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`. |
| <code>search?</code> | <code>[Search1](src/models/unions/search1.ts)</code> | - |
| <code>buyerExternalIdentifier?</code> | <code>[BuyerExternalIdentifier24](src/models/unions/buyer-external-identifier24.ts)</code> | - |
| <code>buyerId?</code> | <code>[BuyerId27](src/models/unions/buyer-id27.ts)</code> | - |
| <code>buyerEmailAddress?</code> | <code>[BuyerEmailAddress](src/models/unions/buyer-email-address.ts)</code> | Deprecated. Filters the results to only the items for which the `buyer` has an `email_address` that matches this value. This filter can be slow and is not recommended for use in automated systems. Use `buyer_search`, `buyer_external_identifier` or `buyer_id` instead. |
| <code>ipAddress?</code> | <code>[IpAddress](src/models/unions/ip-address.ts)</code> | - |
| <code>status?</code> | <code>[Status3](src/models/unions/status3.ts)</code> | Filters the results to only the transactions that have a `status` that matches with any of the provided status values. |
| <code>id?</code> | <code>[Id11](src/models/unions/id11.ts)</code> | - |
| <code>paymentServiceTransactionId?</code> | <code>[PaymentServiceTransactionId2](src/models/unions/payment-service-transaction-id2.ts)</code> | - |
| <code>externalIdentifier?</code> | <code>[ExternalIdentifier42](src/models/unions/external-identifier42.ts)</code> | - |
| <code>metadata?</code> | <code>[Metadata12](src/models/unions/metadata12.ts)</code> | Filters for transactions where their `metadata` values contain all of the provided `metadata` keys. The value sent for `metadata` must be formatted as a JSON string, and all keys and values must be strings. This value should also be URL encoded. |
| <code>amountEq?</code> | <code>[AmountEq](src/models/unions/amount-eq.ts)</code> | Filters for transactions that have an `amount` that is equal to the provided `amount_eq` value. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>amountLte?</code> | <code>[AmountLte](src/models/unions/amount-lte.ts)</code> | Filters for transactions that have an `amount` that is less than or equal to the `amount_lte` value. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>amountGte?</code> | <code>[AmountGte](src/models/unions/amount-gte.ts)</code> | Filters for transactions that have an `amount` that is greater than or equal to the `amount_gte` value. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>currency?</code> | <code>[Currency15](src/models/unions/currency15.ts)</code> | Filters for transactions that have matching `currency` values. The `currency` values provided must be formatted as 3-letter ISO currency code. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>country?</code> | <code>[Country14](src/models/unions/country14.ts)</code> | Filters for transactions that have matching `country` values. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>paymentServiceId?</code> | <code>[PaymentServiceId9](src/models/unions/payment-service-id9.ts)</code> | Filters for transactions that were processed by the provided `payment_service_id` values. |
| <code>paymentMethodId?</code> | <code>[PaymentMethodId](src/models/unions/payment-method-id.ts)</code> | - |
| <code>paymentMethodLabel?</code> | <code>[PaymentMethodLabel](src/models/unions/payment-method-label.ts)</code> | - |
| <code>paymentMethodScheme?</code> | <code>[PaymentMethodScheme3](src/models/unions/payment-method-scheme3.ts)</code> | Filters for transactions where the `payment_method_scheme` matches one of the provided values. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>paymentMethodCountry?</code> | <code>[PaymentMethodCountry1](src/models/unions/payment-method-country1.ts)</code> | Filters for transactions that have a payment method with a country that matches with the provided value. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>paymentMethodFingerprint?</code> | <code>[PaymentMethodFingerprint](src/models/unions/payment-method-fingerprint.ts)</code> | - |
| <code>method?</code> | <code>[Method11](src/models/unions/method11.ts)</code> | Filters for transactions that have matching `method` values. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>errorCode?</code> | <code>[ErrorCode6](src/models/unions/error-code6.ts)</code> | Filters for transactions where the `error_code` matches one for the provided values. |
| <code>hasRefunds?</code> | <code>[HasRefunds](src/models/unions/has-refunds.ts)</code> | Filters for transactions with refunds. |
| <code>pendingReview?</code> | <code>[PendingReview](src/models/unions/pending-review.ts)</code> | Filters for transactions with a pending manual anti-fraud review. |
| <code>checkoutSessionId?</code> | <code>[CheckoutSessionId2](src/models/unions/checkout-session-id2.ts)</code> | Filters for transactions where the `checkout_session_id` matches the provided value. |
| <code>paymentLinkId?</code> | <code>[PaymentLinkId](src/models/unions/payment-link-id.ts)</code> | Filters for transactions where the `payment_link_id` matches the provided value. |
| <code>reconciliationId?</code> | <code>[ReconciliationId1](src/models/unions/reconciliation-id1.ts)</code> | Filters for transactions where the `reconciliation_id` matches the provided value. |
| <code>hasGiftCardRedemptions?</code> | <code>[HasGiftCardRedemptions](src/models/unions/has-gift-card-redemptions.ts)</code> | Filters for transactions with gift card redemptions. |
| <code>giftCardId?</code> | <code>[GiftCardId](src/models/unions/gift-card-id.ts)</code> | Filters for transactions where a gift card used has an `id` that matches the provided value. |
| <code>giftCardLast4?</code> | <code>[GiftCardLast4](src/models/unions/gift-card-last4.ts)</code> | Deprecated. Filters for transactions that have at least one gift card redemption where the last 4 digits of its gift card number matches exactly with the provided value. This filter can be slow and is not recommended for use in automated systems. Use `gift_card_id` instead. |
| <code>hasSettlements?</code> | <code>[HasSettlements](src/models/unions/has-settlements.ts)</code> | Filters for transactions that have at least one associated settlement record. When filtering on `false`, combine it with `created_at_gte` and `created_at_lte` for best performance. |
| <code>paymentMethodBin?</code> | <code>[PaymentMethodBin3](src/models/unions/payment-method-bin3.ts)</code> | Filter for transactions that have a card with a BIN that matches exactly with the provided value. |
| <code>paymentSource?</code> | <code>[PaymentSource1](src/models/unions/payment-source1.ts)</code> | Filters the results to only the transactions that have a payment source that matches with any of the provided values. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>isSubsequentPayment?</code> | <code>[IsSubsequentPayment2](src/models/unions/is-subsequent-payment2.ts)</code> | Filters for transactions where the `is_subsequent_payment` matches the provided value. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>merchantInitiated?</code> | <code>[MerchantInitiated2](src/models/unions/merchant-initiated2.ts)</code> | Filters for transactions where the `merchant_initiated` matches the provided value. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>used3Ds?</code> | <code>[Used3Ds](src/models/unions/used3-ds.ts)</code> | Filters for transactions that attempted 3DS authentication or not. For best performance, combine it with `created_at_gte` and `created_at_lte`. |
| <code>disputed?</code> | <code>[Disputed](src/models/unions/disputed.ts)</code> | Filters for transactions that have been disputed. |
| <code>reauthorizedFromTransactionId?</code> | <code>[ReauthorizedFromTransactionId2](src/models/unions/reauthorized-from-transaction-id2.ts)</code> | Filters for transactions that were reauthorized from the transaction with the provided ID. |
| <code>buyerSearch?</code> | <code>[BuyerSearch](src/models/unions/buyer-search.ts)</code> | Filters the results to only get the items for which some of the buyer data contains exactly the provided `buyer_search` values. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.listTransactions(request)`

- **OnSuccess**: <code>[TransactionSummaries](src/models/transaction-summaries.ts)</code>
- **OnError**: throws <code>[Transactions.ListTransactionsError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.listTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionSummaries, Transactions.ListTransactionsError&gt;</code>, with `result.value` of type <code>[TransactionSummaries](src/models/transaction-summaries.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>syncTransaction(request: Transactions.SyncTransactionRequest, options?: RequestOptions): ApiPromise&lt;Transaction, Transactions.SyncTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Synchronizes the status of a transaction with the underlying payment service provider. This is useful for transactions in a pending state to check if they've been completed or failed. Only available for some payment service providers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.syncTransaction({
    transactionId: "00000000-0000-0000-0000-000000000000",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Transaction
} catch (err) {
  // TODO: Handle 'err' of type Transactions.SyncTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.syncTransaction({
  transactionId: "00000000-0000-0000-0000-000000000000",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Transaction
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | - |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.syncTransaction(request)`

- **OnSuccess**: <code>[Transaction](src/models/transaction.ts)</code>
- **OnError**: throws <code>[Transactions.SyncTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.syncTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Transaction, Transactions.SyncTransactionError&gt;</code>, with `result.value` of type <code>[Transaction](src/models/transaction.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTransaction(request: Transactions.UpdateTransactionRequest, options?: RequestOptions): ApiPromise&lt;Transaction, Transactions.UpdateTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manually updates a transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.updateTransaction({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type Transaction
} catch (err) {
  // TODO: Handle 'err' of type Transactions.UpdateTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.updateTransaction({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Transaction
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[TransactionUpdate](src/models/transaction-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.updateTransaction(request)`

- **OnSuccess**: <code>[Transaction](src/models/transaction.ts)</code>
- **OnError**: throws <code>[Transactions.UpdateTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.updateTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Transaction, Transactions.UpdateTransactionError&gt;</code>, with `result.value` of type <code>[Transaction](src/models/transaction.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voidTransaction(request: Transactions.VoidTransactionRequest, options?: RequestOptions): ApiPromise&lt;Response200VoidTransaction, Transactions.VoidTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Voids a previously authorized transaction. If the transaction was not yet successfully authorized, or was already captured, the void will not be processed. This operation releases the hold on the buyer's funds. Captured transactions can be refunded instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.voidTransaction({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
    idempotencyKey: "request-12345",
  });
  // TODO: Handle 'response' of type Response200VoidTransaction
} catch (err) {
  // TODO: Handle 'err' of type Transactions.VoidTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.voidTransaction({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
  idempotencyKey: "request-12345",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Response200VoidTransaction
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>prefer?</code> | <code>[Prefer](src/models/unions/prefer.ts)</code> | The preferred resource type in the response. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>idempotencyKey?</code> | <code>[IdempotencyKey2](src/models/unions/idempotency-key2.ts)</code> | A unique key that identifies this request. Providing this header will make this an idempotent request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid collisions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.voidTransaction(request)`

- **OnSuccess**: <code>[Response200VoidTransaction](src/models/unions/response200-void-transaction.ts)</code>
- **OnError**: throws <code>[Transactions.VoidTransactionError](src/resources/transactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactions.voidTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Response200VoidTransaction, Transactions.VoidTransactionError&gt;</code>, with `result.value` of type <code>[Response200VoidTransaction](src/models/unions/response200-void-transaction.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransactionsActions

> Source: [TransactionsActions](src/resources/transactions-actions.ts)

<details>
<summary><code>listTransactionActions(request: TransactionsActions.ListTransactionActionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionActions, TransactionsActions.ListTransactionActionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of Flow rule actions that have been triggered for a transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsActions.listTransactionActions({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type TransactionActions
} catch (err) {
  // TODO: Handle 'err' of type TransactionsActions.ListTransactionActionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsActions.listTransactionActions({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionActions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsActions.listTransactionActions(request)`

- **OnSuccess**: <code>[TransactionActions](src/models/transaction-actions.ts)</code>
- **OnError**: throws <code>[TransactionsActions.ListTransactionActionsError](src/resources/transactions-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsActions.listTransactionActions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionActions, TransactionsActions.ListTransactionActionsError&gt;</code>, with `result.value` of type <code>[TransactionActions](src/models/transaction-actions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransactionsCaptures

> Source: [TransactionsCaptures](src/resources/transactions-captures.ts)

<details>
<summary><code>getTransactionCapture(request: TransactionsCaptures.GetTransactionCaptureRequest, options?: RequestOptions): ApiPromise&lt;Capture, TransactionsCaptures.GetTransactionCaptureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific capture for a transaction by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsCaptures.getTransactionCapture({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    captureId: "b1e2c3d4-5678-1234-9abc-1234567890ab",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Capture
} catch (err) {
  // TODO: Handle 'err' of type TransactionsCaptures.GetTransactionCaptureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsCaptures.getTransactionCapture({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  captureId: "b1e2c3d4-5678-1234-9abc-1234567890ab",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Capture
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The unique identifier of the transaction. |
| <code>captureId</code> | <code>string</code> | The unique identifier of the capture. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsCaptures.getTransactionCapture(request)`

- **OnSuccess**: <code>[Capture](src/models/capture.ts)</code>
- **OnError**: throws <code>[TransactionsCaptures.GetTransactionCaptureError](src/resources/transactions-captures.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsCaptures.getTransactionCapture(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Capture, TransactionsCaptures.GetTransactionCaptureError&gt;</code>, with `result.value` of type <code>[Capture](src/models/capture.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactionCaptures(request: TransactionsCaptures.ListTransactionCapturesRequest, options?: RequestOptions): ApiPromise&lt;CaptureCollection, TransactionsCaptures.ListTransactionCapturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all captures for a specific transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsCaptures.listTransactionCaptures({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type CaptureCollection
} catch (err) {
  // TODO: Handle 'err' of type TransactionsCaptures.ListTransactionCapturesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsCaptures.listTransactionCaptures({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CaptureCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The unique identifier of the transaction. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsCaptures.listTransactionCaptures(request)`

- **OnSuccess**: <code>[CaptureCollection](src/models/capture-collection.ts)</code>
- **OnError**: throws <code>[TransactionsCaptures.ListTransactionCapturesError](src/resources/transactions-captures.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsCaptures.listTransactionCaptures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CaptureCollection, TransactionsCaptures.ListTransactionCapturesError&gt;</code>, with `result.value` of type <code>[CaptureCollection](src/models/capture-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransactionsChargebacks

> Source: [TransactionsChargebacks](src/resources/transactions-chargebacks.ts)

<details>
<summary><code>listTransactionChargebacks(request: TransactionsChargebacks.ListTransactionChargebacksRequest, options?: RequestOptions): ApiPromise&lt;Chargebacks, TransactionsChargebacks.ListTransactionChargebacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all chargebacks for a specific transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsChargebacks.listTransactionChargebacks({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Chargebacks
} catch (err) {
  // TODO: Handle 'err' of type TransactionsChargebacks.ListTransactionChargebacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsChargebacks.listTransactionChargebacks({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Chargebacks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The unique identifier of the transaction. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsChargebacks.listTransactionChargebacks(request)`

- **OnSuccess**: <code>[Chargebacks](src/models/chargebacks.ts)</code>
- **OnError**: throws <code>[TransactionsChargebacks.ListTransactionChargebacksError](src/resources/transactions-chargebacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsChargebacks.listTransactionChargebacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Chargebacks, TransactionsChargebacks.ListTransactionChargebacksError&gt;</code>, with `result.value` of type <code>[Chargebacks](src/models/chargebacks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransactionsChargebackReversals

> Source: [TransactionsChargebackReversals](src/resources/transactions-chargeback-reversals.ts)

<details>
<summary><code>listTransactionChargebackReversals(request: TransactionsChargebackReversals.ListTransactionChargebackReversalsRequest, options?: RequestOptions): ApiPromise&lt;ChargebackReversals, TransactionsChargebackReversals.ListTransactionChargebackReversalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all chargeback reversals for a specific transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsChargebackReversals.listTransactionChargebackReversals({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type ChargebackReversals
} catch (err) {
  // TODO: Handle 'err' of type TransactionsChargebackReversals.ListTransactionChargebackReversalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsChargebackReversals.listTransactionChargebackReversals({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChargebackReversals
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The unique identifier of the transaction. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsChargebackReversals.listTransactionChargebackReversals(request)`

- **OnSuccess**: <code>[ChargebackReversals](src/models/chargeback-reversals.ts)</code>
- **OnError**: throws <code>[TransactionsChargebackReversals.ListTransactionChargebackReversalsError](src/resources/transactions-chargeback-reversals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsChargebackReversals.listTransactionChargebackReversals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChargebackReversals, TransactionsChargebackReversals.ListTransactionChargebackReversalsError&gt;</code>, with `result.value` of type <code>[ChargebackReversals](src/models/chargeback-reversals.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransactionsSettlements

> Source: [TransactionsSettlements](src/resources/transactions-settlements.ts)

<details>
<summary><code>getTransactionSettlement(request: TransactionsSettlements.GetTransactionSettlementRequest, options?: RequestOptions): ApiPromise&lt;Settlement, TransactionsSettlements.GetTransactionSettlementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific settlement for a transaction by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsSettlements.getTransactionSettlement({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    settlementId: "b1e2c3d4-5678-1234-9abc-1234567890ab",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Settlement
} catch (err) {
  // TODO: Handle 'err' of type TransactionsSettlements.GetTransactionSettlementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsSettlements.getTransactionSettlement({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  settlementId: "b1e2c3d4-5678-1234-9abc-1234567890ab",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Settlement
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The unique identifier of the transaction. |
| <code>settlementId</code> | <code>string</code> | The unique identifier of the settlement. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsSettlements.getTransactionSettlement(request)`

- **OnSuccess**: <code>[Settlement](src/models/settlement.ts)</code>
- **OnError**: throws <code>[TransactionsSettlements.GetTransactionSettlementError](src/resources/transactions-settlements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsSettlements.getTransactionSettlement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Settlement, TransactionsSettlements.GetTransactionSettlementError&gt;</code>, with `result.value` of type <code>[Settlement](src/models/settlement.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactionSettlements(request: TransactionsSettlements.ListTransactionSettlementsRequest, options?: RequestOptions): ApiPromise&lt;Settlements, TransactionsSettlements.ListTransactionSettlementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all settlements for a specific transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsSettlements.listTransactionSettlements({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type Settlements
} catch (err) {
  // TODO: Handle 'err' of type TransactionsSettlements.ListTransactionSettlementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsSettlements.listTransactionSettlements({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Settlements
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The unique identifier of the transaction. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsSettlements.listTransactionSettlements(request)`

- **OnSuccess**: <code>[Settlements](src/models/settlements.ts)</code>
- **OnError**: throws <code>[TransactionsSettlements.ListTransactionSettlementsError](src/resources/transactions-settlements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsSettlements.listTransactionSettlements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Settlements, TransactionsSettlements.ListTransactionSettlementsError&gt;</code>, with `result.value` of type <code>[Settlements](src/models/settlements.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransactionsRefundSettlements

> Source: [TransactionsRefundSettlements](src/resources/transactions-refund-settlements.ts)

<details>
<summary><code>getTransactionRefundSettlement(request: TransactionsRefundSettlements.GetTransactionRefundSettlementRequest, options?: RequestOptions): ApiPromise&lt;RefundSettlement, TransactionsRefundSettlements.GetTransactionRefundSettlementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific refund settlement for a transaction by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsRefundSettlements.getTransactionRefundSettlement({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    settlementId: "b1e2c3d4-5678-1234-9abc-1234567890ab",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type RefundSettlement
} catch (err) {
  // TODO: Handle 'err' of type TransactionsRefundSettlements.GetTransactionRefundSettlementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsRefundSettlements.getTransactionRefundSettlement({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  settlementId: "b1e2c3d4-5678-1234-9abc-1234567890ab",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefundSettlement
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The unique identifier of the transaction. |
| <code>settlementId</code> | <code>string</code> | The unique identifier of the refund settlement. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsRefundSettlements.getTransactionRefundSettlement(request)`

- **OnSuccess**: <code>[RefundSettlement](src/models/refund-settlement.ts)</code>
- **OnError**: throws <code>[TransactionsRefundSettlements.GetTransactionRefundSettlementError](src/resources/transactions-refund-settlements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsRefundSettlements.getTransactionRefundSettlement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefundSettlement, TransactionsRefundSettlements.GetTransactionRefundSettlementError&gt;</code>, with `result.value` of type <code>[RefundSettlement](src/models/refund-settlement.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactionRefundSettlements(request: TransactionsRefundSettlements.ListTransactionRefundSettlementsRequest, options?: RequestOptions): ApiPromise&lt;RefundSettlements, TransactionsRefundSettlements.ListTransactionRefundSettlementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all refund settlements for a specific transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsRefundSettlements.listTransactionRefundSettlements({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type RefundSettlements
} catch (err) {
  // TODO: Handle 'err' of type TransactionsRefundSettlements.ListTransactionRefundSettlementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsRefundSettlements.listTransactionRefundSettlements({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefundSettlements
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The unique identifier of the transaction. |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsRefundSettlements.listTransactionRefundSettlements(request)`

- **OnSuccess**: <code>[RefundSettlements](src/models/refund-settlements.ts)</code>
- **OnError**: throws <code>[TransactionsRefundSettlements.ListTransactionRefundSettlementsError](src/resources/transactions-refund-settlements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsRefundSettlements.listTransactionRefundSettlements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefundSettlements, TransactionsRefundSettlements.ListTransactionRefundSettlementsError&gt;</code>, with `result.value` of type <code>[RefundSettlements](src/models/refund-settlements.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransactionsSessions

> Source: [TransactionsSessions](src/resources/transactions-sessions.ts)

<details>
<summary><code>updateSession(request: TransactionsSessions.UpdateSessionRequest, options?: RequestOptions): ApiPromise&lt;UpdateTransactionSessionResponse, TransactionsSessions.UpdateSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets and/or updates a transaction's session, where the connector supports this feature. Updates are often optional or not supported. Please refer to connector documentation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsSessions.updateSession({
    transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  });
  // TODO: Handle 'response' of type UpdateTransactionSessionResponse
} catch (err) {
  // TODO: Handle 'err' of type TransactionsSessions.UpdateSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsSessions.updateSession({
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateTransactionSessionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction |
| <code>token?</code> | <code>[Token4](src/models/unions/token4.ts)</code> | Transaction session token used to retrieve session data for direct client integrations. |
| <code>body?</code> | <code>[Body2](src/models/unions/body2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsSessions.updateSession(request)`

- **OnSuccess**: <code>[UpdateTransactionSessionResponse](src/models/update-transaction-session-response.ts)</code>
- **OnError**: throws <code>[TransactionsSessions.UpdateSessionError](src/resources/transactions-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsSessions.updateSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateTransactionSessionResponse, TransactionsSessions.UpdateSessionError&gt;</code>, with `result.value` of type <code>[UpdateTransactionSessionResponse](src/models/update-transaction-session-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookSubscriptionsApi

> Source: [WebhookSubscriptionsApi](src/resources/webhook-subscriptions-api.ts)

<details>
<summary><code>createWebhookSubscription(request: WebhookSubscriptionsApi.CreateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;WebhookSubscription, WebhookSubscriptionsApi.CreateWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new webhook subscription to receive event notifications. Subscriptions allow you to specify a URL where webhook events will be delivered and configure authentication credentials to secure the webhook communication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptionsApi.createWebhookSubscription({
    xGr4VyMerchantAccountId: "default",
    body: { url: "some example string" },
  });
  // TODO: Handle 'response' of type WebhookSubscription
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptionsApi.CreateWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptionsApi.createWebhookSubscription({
  xGr4VyMerchantAccountId: "default",
  body: { url: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookSubscription
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[WebhookSubscriptionCreate](src/models/webhook-subscription-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptionsApi.createWebhookSubscription(request)`

- **OnSuccess**: <code>[WebhookSubscription](src/models/webhook-subscription.ts)</code>
- **OnError**: throws <code>[WebhookSubscriptionsApi.CreateWebhookSubscriptionError](src/resources/webhook-subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptionsApi.createWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookSubscription, WebhookSubscriptionsApi.CreateWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>[WebhookSubscription](src/models/webhook-subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhookSubscription(request: WebhookSubscriptionsApi.DeleteWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhookSubscriptionsApi.DeleteWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes a webhook subscription from your account. Once deleted, you will no longer receive event notifications at the subscription's URL. This action cannot be undone, and you'll need to create a new subscription if you want to receive webhooks at this endpoint again in the future.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhookSubscriptionsApi.deleteWebhookSubscription({
    subscriptionId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
  });
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptionsApi.DeleteWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptionsApi.deleteWebhookSubscription({
  subscriptionId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
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
| <code>subscriptionId</code> | <code>string</code> | The ID of the webhook subscription |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptionsApi.deleteWebhookSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhookSubscriptionsApi.DeleteWebhookSubscriptionError](src/resources/webhook-subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptionsApi.deleteWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhookSubscriptionsApi.DeleteWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhookSubscription(request: WebhookSubscriptionsApi.ListWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;WebhookSubscriptions, WebhookSubscriptionsApi.ListWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of all webhook subscriptions for your account. This endpoint returns subscription details including URLs, authentication methods, and active status. Use pagination parameters to navigate through large collections of subscriptions. Results are sorted by creation date, with the most recent subscriptions appearing first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptionsApi.listWebhookSubscription({
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type WebhookSubscriptions
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptionsApi.ListWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptionsApi.listWebhookSubscription({
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookSubscriptions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>cursor?</code> | <code>[Cursor2](src/models/unions/cursor2.ts)</code> | - |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptionsApi.listWebhookSubscription(request)`

- **OnSuccess**: <code>[WebhookSubscriptions](src/models/webhook-subscriptions.ts)</code>
- **OnError**: throws <code>[WebhookSubscriptionsApi.ListWebhookSubscriptionError](src/resources/webhook-subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptionsApi.listWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookSubscriptions, WebhookSubscriptionsApi.ListWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>[WebhookSubscriptions](src/models/webhook-subscriptions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readWebhookSubscription(request: WebhookSubscriptionsApi.ReadWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;WebhookSubscription, WebhookSubscriptionsApi.ReadWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information about a specific webhook subscription. This endpoint returns the full configuration of a subscription including its URL, authentication details, active status, and signing secret information. Use this to verify your webhook subscription settings or retrieve details needed for webhook verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptionsApi.readWebhookSubscription({
    subscriptionId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
  });
  // TODO: Handle 'response' of type WebhookSubscription
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptionsApi.ReadWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptionsApi.readWebhookSubscription({
  subscriptionId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookSubscription
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the webhook subscription |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptionsApi.readWebhookSubscription(request)`

- **OnSuccess**: <code>[WebhookSubscription](src/models/webhook-subscription.ts)</code>
- **OnError**: throws <code>[WebhookSubscriptionsApi.ReadWebhookSubscriptionError](src/resources/webhook-subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptionsApi.readWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookSubscription, WebhookSubscriptionsApi.ReadWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>[WebhookSubscription](src/models/webhook-subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rotateWebhookSubscriptionSecret(request: WebhookSubscriptionsApi.RotateWebhookSubscriptionSecretRequest, options?: RequestOptions): ApiPromise&lt;WebhookSubscription, WebhookSubscriptionsApi.RotateWebhookSubscriptionSecretError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rotate the secret used to sign webhook payloads for improved security. This creates a new secret while keeping the old one valid for a specified grace period, allowing you to update your systems without disruption. The old secret will automatically expire after the specified transition period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptionsApi.rotateWebhookSubscriptionSecret({
    subscriptionId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type WebhookSubscription
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptionsApi.RotateWebhookSubscriptionSecretError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptionsApi.rotateWebhookSubscriptionSecret({
  subscriptionId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookSubscription
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the webhook subscription |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[WebhookSubscriptionRotateSecret](src/models/webhook-subscription-rotate-secret.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptionsApi.rotateWebhookSubscriptionSecret(request)`

- **OnSuccess**: <code>[WebhookSubscription](src/models/webhook-subscription.ts)</code>
- **OnError**: throws <code>[WebhookSubscriptionsApi.RotateWebhookSubscriptionSecretError](src/resources/webhook-subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptionsApi.rotateWebhookSubscriptionSecret(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookSubscription, WebhookSubscriptionsApi.RotateWebhookSubscriptionSecretError&gt;</code>, with `result.value` of type <code>[WebhookSubscription](src/models/webhook-subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhookSubscription(request: WebhookSubscriptionsApi.UpdateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;WebhookSubscription, WebhookSubscriptionsApi.UpdateWebhookSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing webhook subscription's properties. You can modify the subscription URL, authentication details, or toggle the active status. Only the fields you include in your request will be updated, and all other properties will remain unchanged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptionsApi.updateWebhookSubscription({
    subscriptionId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
    xGr4VyMerchantAccountId: "default",
    body: {},
  });
  // TODO: Handle 'response' of type WebhookSubscription
} catch (err) {
  // TODO: Handle 'err' of type WebhookSubscriptionsApi.UpdateWebhookSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptionsApi.updateWebhookSubscription({
  subscriptionId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  xGr4VyMerchantAccountId: "default",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookSubscription
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the webhook subscription |
| <code>xGr4VyMerchantAccountId?</code> | <code>[XGr4VyMerchantAccountId](src/models/unions/xgr4-vy-merchant-account-id.ts)</code> | The ID of the merchant account to use for this request. |
| <code>body</code> | <code>[WebhookSubscriptionUpdate](src/models/webhook-subscription-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptionsApi.updateWebhookSubscription(request)`

- **OnSuccess**: <code>[WebhookSubscription](src/models/webhook-subscription.ts)</code>
- **OnError**: throws <code>[WebhookSubscriptionsApi.UpdateWebhookSubscriptionError](src/resources/webhook-subscriptions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookSubscriptionsApi.updateWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookSubscription, WebhookSubscriptionsApi.UpdateWebhookSubscriptionError&gt;</code>, with `result.value` of type <code>[WebhookSubscription](src/models/webhook-subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[Gr4VyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

