# Reference

> Source: [AmazonAppSyncClient](src/client.ts)

## ApiKeys

> Source: [ApiKeys](src/resources/api-keys.ts)

<details>
<summary><code>createApiKey(request: ApiKeys.CreateApiKeyRequest, options?: RequestOptions): ApiPromise&lt;CreateApiKeyResponse, ApiKeys.CreateApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a unique key that you can distribute to clients who invoke your API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeys.createApiKey({ apiId: "some example string" });
  // TODO: Handle 'response' of type CreateApiKeyResponse
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
const result = await client.apiKeys.createApiKey({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateApiKeyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The ID for your GraphQL API. |
| <code>body?</code> | <code>[V1ApisApikeysRequest](src/models/v1-apis-apikeys-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeys.createApiKey(request)`

- **OnSuccess**: <code>[CreateApiKeyResponse](src/models/create-api-key-response.ts)</code>
- **OnError**: throws <code>[ApiKeys.CreateApiKeyError](src/resources/api-keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeys.createApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateApiKeyResponse, ApiKeys.CreateApiKeyError&gt;</code>, with `result.value` of type <code>[CreateApiKeyResponse](src/models/create-api-key-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiKey(request: ApiKeys.DeleteApiKeyRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiKeys.DeleteApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeys.deleteApiKey({
    apiId: "some example string",
    id: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
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
const result = await client.apiKeys
  .deleteApiKey({ apiId: "some example string", id: "some example string" })
  .asApiResult();
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
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>id</code> | <code>string</code> | The ID for the API key. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeys.deleteApiKey(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiKeys.DeleteApiKeyError](src/resources/api-keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeys.deleteApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiKeys.DeleteApiKeyError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listApiKeys(request: ApiKeys.ListApiKeysRequest, options?: RequestOptions): ApiPromise&lt;ListApiKeysResponse, ApiKeys.ListApiKeysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeys.listApiKeys({ apiId: "some example string" });
  // TODO: Handle 'response' of type ListApiKeysResponse
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
const result = await client.apiKeys.listApiKeys({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListApiKeysResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeys.listApiKeys(request)`

- **OnSuccess**: <code>[ListApiKeysResponse](src/models/list-api-keys-response.ts)</code>
- **OnError**: throws <code>[ApiKeys.ListApiKeysError](src/resources/api-keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeys.listApiKeys(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListApiKeysResponse, ApiKeys.ListApiKeysError&gt;</code>, with `result.value` of type <code>[ListApiKeysResponse](src/models/list-api-keys-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateApiKey(request: ApiKeys.UpdateApiKeyRequest, options?: RequestOptions): ApiPromise&lt;UpdateApiKeyResponse, ApiKeys.UpdateApiKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an API key. You can update the key as long as it's not deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiKeys.updateApiKey({
    apiId: "some example string",
    id: "some example string",
  });
  // TODO: Handle 'response' of type UpdateApiKeyResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiKeys.UpdateApiKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiKeys
  .updateApiKey({ apiId: "some example string", id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateApiKeyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The ID for the GraphQL API. |
| <code>id</code> | <code>string</code> | The API key ID. |
| <code>body?</code> | <code>[V1ApisApikeysRequest1](src/models/v1-apis-apikeys-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiKeys.updateApiKey(request)`

- **OnSuccess**: <code>[UpdateApiKeyResponse](src/models/update-api-key-response.ts)</code>
- **OnError**: throws <code>[ApiKeys.UpdateApiKeyError](src/resources/api-keys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiKeys.updateApiKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateApiKeyResponse, ApiKeys.UpdateApiKeyError&gt;</code>, with `result.value` of type <code>[UpdateApiKeyResponse](src/models/update-api-key-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Apicaches

> Source: [Apicaches](src/resources/apicaches.ts)

<details>
<summary><code>createApiCache(request: Apicaches.CreateApiCacheRequest, options?: RequestOptions): ApiPromise&lt;CreateApiCacheResponse, Apicaches.CreateApiCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a cache for the GraphQL API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apicaches.createApiCache({ apiId: "some example string" });
  // TODO: Handle 'response' of type CreateApiCacheResponse
} catch (err) {
  // TODO: Handle 'err' of type Apicaches.CreateApiCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apicaches.createApiCache({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateApiCacheResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The GraphQL API ID. |
| <code>body?</code> | <code>[V1ApisApiCachesRequest](src/models/v1-apis-api-caches-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apicaches.createApiCache(request)`

- **OnSuccess**: <code>[CreateApiCacheResponse](src/models/create-api-cache-response.ts)</code>
- **OnError**: throws <code>[Apicaches.CreateApiCacheError](src/resources/apicaches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apicaches.createApiCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateApiCacheResponse, Apicaches.CreateApiCacheError&gt;</code>, with `result.value` of type <code>[CreateApiCacheResponse](src/models/create-api-cache-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApiCache(request: Apicaches.DeleteApiCacheRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Apicaches.DeleteApiCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an ApiCache object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apicaches.deleteApiCache({ apiId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Apicaches.DeleteApiCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apicaches.deleteApiCache({ apiId: "some example string" }).asApiResult();
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
| <code>apiId</code> | <code>string</code> | The API ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apicaches.deleteApiCache(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Apicaches.DeleteApiCacheError](src/resources/apicaches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apicaches.deleteApiCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Apicaches.DeleteApiCacheError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiCache(request: Apicaches.GetApiCacheRequest, options?: RequestOptions): ApiPromise&lt;GetApiCacheResponse, Apicaches.GetApiCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an ApiCache object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apicaches.getApiCache({ apiId: "some example string" });
  // TODO: Handle 'response' of type GetApiCacheResponse
} catch (err) {
  // TODO: Handle 'err' of type Apicaches.GetApiCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apicaches.getApiCache({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetApiCacheResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apicaches.getApiCache(request)`

- **OnSuccess**: <code>[GetApiCacheResponse](src/models/get-api-cache-response.ts)</code>
- **OnError**: throws <code>[Apicaches.GetApiCacheError](src/resources/apicaches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apicaches.getApiCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetApiCacheResponse, Apicaches.GetApiCacheError&gt;</code>, with `result.value` of type <code>[GetApiCacheResponse](src/models/get-api-cache-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateApiCache(request: Apicaches.UpdateApiCacheRequest, options?: RequestOptions): ApiPromise&lt;UpdateApiCacheResponse, Apicaches.UpdateApiCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the cache for the GraphQL API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apicaches.updateApiCache({ apiId: "some example string" });
  // TODO: Handle 'response' of type UpdateApiCacheResponse
} catch (err) {
  // TODO: Handle 'err' of type Apicaches.UpdateApiCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apicaches.updateApiCache({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateApiCacheResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The GraphQL API ID. |
| <code>body?</code> | <code>[V1ApisApiCachesUpdateRequest](src/models/v1-apis-api-caches-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apicaches.updateApiCache(request)`

- **OnSuccess**: <code>[UpdateApiCacheResponse](src/models/update-api-cache-response.ts)</code>
- **OnError**: throws <code>[Apicaches.UpdateApiCacheError](src/resources/apicaches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apicaches.updateApiCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateApiCacheResponse, Apicaches.UpdateApiCacheError&gt;</code>, with `result.value` of type <code>[UpdateApiCacheResponse](src/models/update-api-cache-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Apis

> Source: [Apis](src/resources/apis.ts)

<details>
<summary><code>createApi(request?: Apis.CreateApiRequest, options?: RequestOptions): ApiPromise&lt;CreateApiResponse, Apis.CreateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as an Event API that provides real-time message publishing and message subscriptions over WebSockets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.createApi();
  // TODO: Handle 'response' of type CreateApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Apis.CreateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.createApi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[V2ApisRequest](src/models/v2-apis-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.createApi(request)`

- **OnSuccess**: <code>[CreateApiResponse](src/models/create-api-response.ts)</code>
- **OnError**: throws <code>[Apis.CreateApiError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.createApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateApiResponse, Apis.CreateApiError&gt;</code>, with `result.value` of type <code>[CreateApiResponse](src/models/create-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGraphqlApi(request?: Apis.CreateGraphqlApiRequest, options?: RequestOptions): ApiPromise&lt;CreateGraphqlApiResponse, Apis.CreateGraphqlApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a GraphqlApi object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.createGraphqlApi();
  // TODO: Handle 'response' of type CreateGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Apis.CreateGraphqlApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.createGraphqlApi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[V1ApisRequest](src/models/v1-apis-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.createGraphqlApi(request)`

- **OnSuccess**: <code>[CreateGraphqlApiResponse](src/models/create-graphql-api-response.ts)</code>
- **OnError**: throws <code>[Apis.CreateGraphqlApiError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.createGraphqlApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateGraphqlApiResponse, Apis.CreateGraphqlApiError&gt;</code>, with `result.value` of type <code>[CreateGraphqlApiResponse](src/models/create-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApi(request: Apis.DeleteApiRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Apis.DeleteApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Api object

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.deleteApi({ apiId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Apis.DeleteApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.deleteApi({ apiId: "some example string" }).asApiResult();
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
| <code>apiId</code> | <code>string</code> | The Api ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.deleteApi(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Apis.DeleteApiError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.deleteApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Apis.DeleteApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGraphqlApi(request: Apis.DeleteGraphqlApiRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Apis.DeleteGraphqlApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a GraphqlApi object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.deleteGraphqlApi({ apiId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Apis.DeleteGraphqlApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.deleteGraphqlApi({ apiId: "some example string" }).asApiResult();
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
| <code>apiId</code> | <code>string</code> | The API ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.deleteGraphqlApi(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Apis.DeleteGraphqlApiError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.deleteGraphqlApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Apis.DeleteGraphqlApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApi(request: Apis.GetApiRequest, options?: RequestOptions): ApiPromise&lt;GetApiResponse, Apis.GetApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an Api object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.getApi({ apiId: "some example string" });
  // TODO: Handle 'response' of type GetApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Apis.GetApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.getApi({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The Api ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.getApi(request)`

- **OnSuccess**: <code>[GetApiResponse](src/models/get-api-response.ts)</code>
- **OnError**: throws <code>[Apis.GetApiError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.getApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetApiResponse, Apis.GetApiError&gt;</code>, with `result.value` of type <code>[GetApiResponse](src/models/get-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGraphqlApi(request: Apis.GetGraphqlApiRequest, options?: RequestOptions): ApiPromise&lt;GetGraphqlApiResponse, Apis.GetGraphqlApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a GraphqlApi object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.getGraphqlApi({ apiId: "some example string" });
  // TODO: Handle 'response' of type GetGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Apis.GetGraphqlApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.getGraphqlApi({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID for the GraphQL API. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.getGraphqlApi(request)`

- **OnSuccess**: <code>[GetGraphqlApiResponse](src/models/get-graphql-api-response.ts)</code>
- **OnError**: throws <code>[Apis.GetGraphqlApiError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.getGraphqlApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetGraphqlApiResponse, Apis.GetGraphqlApiError&gt;</code>, with `result.value` of type <code>[GetGraphqlApiResponse](src/models/get-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listApis(request?: Apis.ListApisRequest, options?: RequestOptions): ApiPromise&lt;ListApisResponse, Apis.ListApisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed information about an API, use GetApi.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.listApis();
  // TODO: Handle 'response' of type ListApisResponse
} catch (err) {
  // TODO: Handle 'err' of type Apis.ListApisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.listApis().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListApisResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.listApis(request)`

- **OnSuccess**: <code>[ListApisResponse](src/models/list-apis-response.ts)</code>
- **OnError**: throws <code>[Apis.ListApisError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.listApis(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListApisResponse, Apis.ListApisError&gt;</code>, with `result.value` of type <code>[ListApisResponse](src/models/list-apis-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGraphqlApis(request?: Apis.ListGraphqlApisRequest, options?: RequestOptions): ApiPromise&lt;ListGraphqlApisResponse, Apis.ListGraphqlApisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists your GraphQL APIs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.listGraphqlApis();
  // TODO: Handle 'response' of type ListGraphqlApisResponse
} catch (err) {
  // TODO: Handle 'err' of type Apis.ListGraphqlApisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.listGraphqlApis().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListGraphqlApisResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |
| <code>apiType?</code> | <code>[ApiType2](src/models/api-type2.ts)</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). |
| <code>owner?</code> | <code>[Owner](src/models/owner.ts)</code> | The account owner of the GraphQL API. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.listGraphqlApis(request)`

- **OnSuccess**: <code>[ListGraphqlApisResponse](src/models/list-graphql-apis-response.ts)</code>
- **OnError**: throws <code>[Apis.ListGraphqlApisError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.listGraphqlApis(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListGraphqlApisResponse, Apis.ListGraphqlApisError&gt;</code>, with `result.value` of type <code>[ListGraphqlApisResponse](src/models/list-graphql-apis-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateApi(request: Apis.UpdateApiRequest, options?: RequestOptions): ApiPromise&lt;UpdateApiResponse, Apis.UpdateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an Api.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.updateApi({ apiId: "some example string" });
  // TODO: Handle 'response' of type UpdateApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Apis.UpdateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.updateApi({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The Api ID. |
| <code>body?</code> | <code>[V2ApisRequest1](src/models/v2-apis-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.updateApi(request)`

- **OnSuccess**: <code>[UpdateApiResponse](src/models/update-api-response.ts)</code>
- **OnError**: throws <code>[Apis.UpdateApiError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.updateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateApiResponse, Apis.UpdateApiError&gt;</code>, with `result.value` of type <code>[UpdateApiResponse](src/models/update-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGraphqlApi(request: Apis.UpdateGraphqlApiRequest, options?: RequestOptions): ApiPromise&lt;UpdateGraphqlApiResponse, Apis.UpdateGraphqlApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a GraphqlApi object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apis.updateGraphqlApi({ apiId: "some example string" });
  // TODO: Handle 'response' of type UpdateGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Apis.UpdateGraphqlApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apis.updateGraphqlApi({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>body?</code> | <code>[V1ApisRequest1](src/models/v1-apis-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apis.updateGraphqlApi(request)`

- **OnSuccess**: <code>[UpdateGraphqlApiResponse](src/models/update-graphql-api-response.ts)</code>
- **OnError**: throws <code>[Apis.UpdateGraphqlApiError](src/resources/apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apis.updateGraphqlApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateGraphqlApiResponse, Apis.UpdateGraphqlApiError&gt;</code>, with `result.value` of type <code>[UpdateGraphqlApiResponse](src/models/update-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Channelnamespaces

> Source: [Channelnamespaces](src/resources/channelnamespaces.ts)

<details>
<summary><code>createChannelNamespace(request: Channelnamespaces.CreateChannelNamespaceRequest, options?: RequestOptions): ApiPromise&lt;CreateChannelNamespaceResponse, Channelnamespaces.CreateChannelNamespaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a ChannelNamespace for an Api.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelnamespaces.createChannelNamespace({ apiId: "some example string" });
  // TODO: Handle 'response' of type CreateChannelNamespaceResponse
} catch (err) {
  // TODO: Handle 'err' of type Channelnamespaces.CreateChannelNamespaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelnamespaces
  .createChannelNamespace({ apiId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateChannelNamespaceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The Api ID. |
| <code>body?</code> | <code>[V2ApisChannelNamespacesRequest](src/models/v2-apis-channel-namespaces-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelnamespaces.createChannelNamespace(request)`

- **OnSuccess**: <code>[CreateChannelNamespaceResponse](src/models/create-channel-namespace-response.ts)</code>
- **OnError**: throws <code>[Channelnamespaces.CreateChannelNamespaceError](src/resources/channelnamespaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelnamespaces.createChannelNamespace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateChannelNamespaceResponse, Channelnamespaces.CreateChannelNamespaceError&gt;</code>, with `result.value` of type <code>[CreateChannelNamespaceResponse](src/models/create-channel-namespace-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteChannelNamespace(request: Channelnamespaces.DeleteChannelNamespaceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Channelnamespaces.DeleteChannelNamespaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a ChannelNamespace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelnamespaces.deleteChannelNamespace({
    apiId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Channelnamespaces.DeleteChannelNamespaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelnamespaces
  .deleteChannelNamespace({ apiId: "some example string", name: "some example string" })
  .asApiResult();
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
| <code>apiId</code> | <code>string</code> | The ID of the Api associated with the ChannelNamespace. |
| <code>name</code> | <code>string</code> | The name of the ChannelNamespace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelnamespaces.deleteChannelNamespace(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Channelnamespaces.DeleteChannelNamespaceError](src/resources/channelnamespaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelnamespaces.deleteChannelNamespace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Channelnamespaces.DeleteChannelNamespaceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannelNamespace(request: Channelnamespaces.GetChannelNamespaceRequest, options?: RequestOptions): ApiPromise&lt;GetChannelNamespaceResponse, Channelnamespaces.GetChannelNamespaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the channel namespace for a specified Api.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelnamespaces.getChannelNamespace({
    apiId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type GetChannelNamespaceResponse
} catch (err) {
  // TODO: Handle 'err' of type Channelnamespaces.GetChannelNamespaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelnamespaces
  .getChannelNamespace({ apiId: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetChannelNamespaceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The Api ID. |
| <code>name</code> | <code>string</code> | The name of the ChannelNamespace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelnamespaces.getChannelNamespace(request)`

- **OnSuccess**: <code>[GetChannelNamespaceResponse](src/models/get-channel-namespace-response.ts)</code>
- **OnError**: throws <code>[Channelnamespaces.GetChannelNamespaceError](src/resources/channelnamespaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelnamespaces.getChannelNamespace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetChannelNamespaceResponse, Channelnamespaces.GetChannelNamespaceError&gt;</code>, with `result.value` of type <code>[GetChannelNamespaceResponse](src/models/get-channel-namespace-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listChannelNamespaces(request: Channelnamespaces.ListChannelNamespacesRequest, options?: RequestOptions): ApiPromise&lt;ListChannelNamespacesResponse, Channelnamespaces.ListChannelNamespacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for the channel namespace. To retrieve code handlers, use GetChannelNamespace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelnamespaces.listChannelNamespaces({ apiId: "some example string" });
  // TODO: Handle 'response' of type ListChannelNamespacesResponse
} catch (err) {
  // TODO: Handle 'err' of type Channelnamespaces.ListChannelNamespacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelnamespaces
  .listChannelNamespaces({ apiId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListChannelNamespacesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The Api ID. |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelnamespaces.listChannelNamespaces(request)`

- **OnSuccess**: <code>[ListChannelNamespacesResponse](src/models/list-channel-namespaces-response.ts)</code>
- **OnError**: throws <code>[Channelnamespaces.ListChannelNamespacesError](src/resources/channelnamespaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelnamespaces.listChannelNamespaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListChannelNamespacesResponse, Channelnamespaces.ListChannelNamespacesError&gt;</code>, with `result.value` of type <code>[ListChannelNamespacesResponse](src/models/list-channel-namespaces-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateChannelNamespace(request: Channelnamespaces.UpdateChannelNamespaceRequest, options?: RequestOptions): ApiPromise&lt;UpdateChannelNamespaceResponse, Channelnamespaces.UpdateChannelNamespaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a ChannelNamespace associated with an Api.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channelnamespaces.updateChannelNamespace({
    apiId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type UpdateChannelNamespaceResponse
} catch (err) {
  // TODO: Handle 'err' of type Channelnamespaces.UpdateChannelNamespaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channelnamespaces
  .updateChannelNamespace({ apiId: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateChannelNamespaceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The Api ID. |
| <code>name</code> | <code>string</code> | The name of the ChannelNamespace. |
| <code>body?</code> | <code>[V2ApisChannelNamespacesRequest1](src/models/v2-apis-channel-namespaces-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channelnamespaces.updateChannelNamespace(request)`

- **OnSuccess**: <code>[UpdateChannelNamespaceResponse](src/models/update-channel-namespace-response.ts)</code>
- **OnError**: throws <code>[Channelnamespaces.UpdateChannelNamespaceError](src/resources/channelnamespaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channelnamespaces.updateChannelNamespace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateChannelNamespaceResponse, Channelnamespaces.UpdateChannelNamespaceError&gt;</code>, with `result.value` of type <code>[UpdateChannelNamespaceResponse](src/models/update-channel-namespace-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataSources

> Source: [DataSources](src/resources/data-sources.ts)

<details>
<summary><code>createDataSource(request: DataSources.CreateDataSourceRequest, options?: RequestOptions): ApiPromise&lt;CreateDataSourceResponse, DataSources.CreateDataSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a DataSource object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.createDataSource({ apiId: "some example string" });
  // TODO: Handle 'response' of type CreateDataSourceResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.CreateDataSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.createDataSource({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateDataSourceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID for the GraphQL API for the DataSource. |
| <code>body?</code> | <code>[V1ApisDatasourcesRequest](src/models/v1-apis-datasources-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.createDataSource(request)`

- **OnSuccess**: <code>[CreateDataSourceResponse](src/models/create-data-source-response.ts)</code>
- **OnError**: throws <code>[DataSources.CreateDataSourceError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.createDataSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateDataSourceResponse, DataSources.CreateDataSourceError&gt;</code>, with `result.value` of type <code>[CreateDataSourceResponse](src/models/create-data-source-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDataSource(request: DataSources.DeleteDataSourceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DataSources.DeleteDataSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a DataSource object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.deleteDataSource({
    apiId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DataSources.DeleteDataSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .deleteDataSource({ apiId: "some example string", name: "some example string" })
  .asApiResult();
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
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>name</code> | <code>string</code> | The name of the data source. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.deleteDataSource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DataSources.DeleteDataSourceError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.deleteDataSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DataSources.DeleteDataSourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDataSource(request: DataSources.GetDataSourceRequest, options?: RequestOptions): ApiPromise&lt;GetDataSourceResponse, DataSources.GetDataSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a DataSource object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.getDataSource({
    apiId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type GetDataSourceResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.GetDataSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .getDataSource({ apiId: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDataSourceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>name</code> | <code>string</code> | The name of the data source. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.getDataSource(request)`

- **OnSuccess**: <code>[GetDataSourceResponse](src/models/get-data-source-response.ts)</code>
- **OnError**: throws <code>[DataSources.GetDataSourceError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.getDataSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDataSourceResponse, DataSources.GetDataSourceError&gt;</code>, with `result.value` of type <code>[GetDataSourceResponse](src/models/get-data-source-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDataSourceIntrospection(request: DataSources.GetDataSourceIntrospectionRequest, options?: RequestOptions): ApiPromise&lt;GetDataSourceIntrospectionResponse, DataSources.GetDataSourceIntrospectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the record of an existing introspection. If the retrieval is successful, the result of the instrospection will also be returned. If the retrieval fails the operation, an error message will be returned instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.getDataSourceIntrospection({
    introspectionId: "some example string",
  });
  // TODO: Handle 'response' of type GetDataSourceIntrospectionResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.GetDataSourceIntrospectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .getDataSourceIntrospection({ introspectionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDataSourceIntrospectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>introspectionId</code> | <code>string</code> | The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection record. |
| <code>includeModelsSdl?</code> | <code>boolean</code> | A boolean flag that determines whether SDL should be generated for introspected types. If set to true, each model will contain an sdl property that contains the SDL for that type. The SDL only contains the type data and no additional metadata or directives. |
| <code>nextToken?</code> | <code>string</code> | Determines the number of types to be returned in a single response before paginating. This value is typically taken from nextToken value from the previous response. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of introspected types that will be returned in a single response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.getDataSourceIntrospection(request)`

- **OnSuccess**: <code>[GetDataSourceIntrospectionResponse](src/models/get-data-source-introspection-response.ts)</code>
- **OnError**: throws <code>[DataSources.GetDataSourceIntrospectionError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.getDataSourceIntrospection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDataSourceIntrospectionResponse, DataSources.GetDataSourceIntrospectionError&gt;</code>, with `result.value` of type <code>[GetDataSourceIntrospectionResponse](src/models/get-data-source-introspection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDataSources(request: DataSources.ListDataSourcesRequest, options?: RequestOptions): ApiPromise&lt;ListDataSourcesResponse, DataSources.ListDataSourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the data sources for a given API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.listDataSources({ apiId: "some example string" });
  // TODO: Handle 'response' of type ListDataSourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.ListDataSourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.listDataSources({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListDataSourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.listDataSources(request)`

- **OnSuccess**: <code>[ListDataSourcesResponse](src/models/list-data-sources-response.ts)</code>
- **OnError**: throws <code>[DataSources.ListDataSourcesError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.listDataSources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListDataSourcesResponse, DataSources.ListDataSourcesError&gt;</code>, with `result.value` of type <code>[ListDataSourcesResponse](src/models/list-data-sources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startDataSourceIntrospection(request?: DataSources.StartDataSourceIntrospectionRequest, options?: RequestOptions): ApiPromise&lt;StartDataSourceIntrospectionResponse, DataSources.StartDataSourceIntrospectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new introspection. Returns the introspectionId of the new introspection after its creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.startDataSourceIntrospection();
  // TODO: Handle 'response' of type StartDataSourceIntrospectionResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.StartDataSourceIntrospectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources.startDataSourceIntrospection().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartDataSourceIntrospectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[V1DatasourcesIntrospectionsRequest](src/models/v1-datasources-introspections-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.startDataSourceIntrospection(request)`

- **OnSuccess**: <code>[StartDataSourceIntrospectionResponse](src/models/start-data-source-introspection-response.ts)</code>
- **OnError**: throws <code>[DataSources.StartDataSourceIntrospectionError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.startDataSourceIntrospection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartDataSourceIntrospectionResponse, DataSources.StartDataSourceIntrospectionError&gt;</code>, with `result.value` of type <code>[StartDataSourceIntrospectionResponse](src/models/start-data-source-introspection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDataSource(request: DataSources.UpdateDataSourceRequest, options?: RequestOptions): ApiPromise&lt;UpdateDataSourceResponse, DataSources.UpdateDataSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a DataSource object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataSources.updateDataSource({
    apiId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type UpdateDataSourceResponse
} catch (err) {
  // TODO: Handle 'err' of type DataSources.UpdateDataSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataSources
  .updateDataSource({ apiId: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateDataSourceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>name</code> | <code>string</code> | The new name for the data source. |
| <code>body?</code> | <code>[V1ApisDatasourcesRequest1](src/models/v1-apis-datasources-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataSources.updateDataSource(request)`

- **OnSuccess**: <code>[UpdateDataSourceResponse](src/models/update-data-source-response.ts)</code>
- **OnError**: throws <code>[DataSources.UpdateDataSourceError](src/resources/data-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataSources.updateDataSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateDataSourceResponse, DataSources.UpdateDataSourceError&gt;</code>, with `result.value` of type <code>[UpdateDataSourceResponse](src/models/update-data-source-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DomainNames

> Source: [DomainNames](src/resources/domain-names.ts)

<details>
<summary><code>associateApi(request: DomainNames.AssociateApiRequest, options?: RequestOptions): ApiPromise&lt;AssociateApiResponse, DomainNames.AssociateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Maps an endpoint to your custom domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainNames.associateApi({ domainName: "some example string" });
  // TODO: Handle 'response' of type AssociateApiResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainNames.AssociateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainNames.associateApi({ domainName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssociateApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainName</code> | <code>string</code> | The domain name. |
| <code>body?</code> | <code>[V1DomainnamesApiassociationRequest](src/models/v1-domainnames-apiassociation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainNames.associateApi(request)`

- **OnSuccess**: <code>[AssociateApiResponse](src/models/associate-api-response.ts)</code>
- **OnError**: throws <code>[DomainNames.AssociateApiError](src/resources/domain-names.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainNames.associateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssociateApiResponse, DomainNames.AssociateApiError&gt;</code>, with `result.value` of type <code>[AssociateApiResponse](src/models/associate-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDomainName(request?: DomainNames.CreateDomainNameRequest, options?: RequestOptions): ApiPromise&lt;CreateDomainNameResponse, DomainNames.CreateDomainNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom DomainName object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainNames.createDomainName();
  // TODO: Handle 'response' of type CreateDomainNameResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainNames.CreateDomainNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainNames.createDomainName().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateDomainNameResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[V1DomainnamesRequest](src/models/v1-domainnames-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainNames.createDomainName(request)`

- **OnSuccess**: <code>[CreateDomainNameResponse](src/models/create-domain-name-response.ts)</code>
- **OnError**: throws <code>[DomainNames.CreateDomainNameError](src/resources/domain-names.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainNames.createDomainName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateDomainNameResponse, DomainNames.CreateDomainNameError&gt;</code>, with `result.value` of type <code>[CreateDomainNameResponse](src/models/create-domain-name-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDomainName(request: DomainNames.DeleteDomainNameRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DomainNames.DeleteDomainNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom DomainName object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainNames.deleteDomainName({ domainName: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DomainNames.DeleteDomainNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainNames.deleteDomainName({ domainName: "some example string" }).asApiResult();
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
| <code>domainName</code> | <code>string</code> | The domain name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainNames.deleteDomainName(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DomainNames.DeleteDomainNameError](src/resources/domain-names.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainNames.deleteDomainName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DomainNames.DeleteDomainNameError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disassociateApi(request: DomainNames.DisassociateApiRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DomainNames.DisassociateApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an ApiAssociation object from a custom domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainNames.disassociateApi({ domainName: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DomainNames.DisassociateApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainNames.disassociateApi({ domainName: "some example string" }).asApiResult();
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
| <code>domainName</code> | <code>string</code> | The domain name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainNames.disassociateApi(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DomainNames.DisassociateApiError](src/resources/domain-names.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainNames.disassociateApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DomainNames.DisassociateApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApiAssociation(request: DomainNames.GetApiAssociationRequest, options?: RequestOptions): ApiPromise&lt;GetApiAssociationResponse, DomainNames.GetApiAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an ApiAssociation object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainNames.getApiAssociation({ domainName: "some example string" });
  // TODO: Handle 'response' of type GetApiAssociationResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainNames.GetApiAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainNames
  .getApiAssociation({ domainName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetApiAssociationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainName</code> | <code>string</code> | The domain name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainNames.getApiAssociation(request)`

- **OnSuccess**: <code>[GetApiAssociationResponse](src/models/get-api-association-response.ts)</code>
- **OnError**: throws <code>[DomainNames.GetApiAssociationError](src/resources/domain-names.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainNames.getApiAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetApiAssociationResponse, DomainNames.GetApiAssociationError&gt;</code>, with `result.value` of type <code>[GetApiAssociationResponse](src/models/get-api-association-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDomainName(request: DomainNames.GetDomainNameRequest, options?: RequestOptions): ApiPromise&lt;GetDomainNameResponse, DomainNames.GetDomainNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a custom DomainName object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainNames.getDomainName({ domainName: "some example string" });
  // TODO: Handle 'response' of type GetDomainNameResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainNames.GetDomainNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainNames.getDomainName({ domainName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDomainNameResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainName</code> | <code>string</code> | The domain name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainNames.getDomainName(request)`

- **OnSuccess**: <code>[GetDomainNameResponse](src/models/get-domain-name-response.ts)</code>
- **OnError**: throws <code>[DomainNames.GetDomainNameError](src/resources/domain-names.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainNames.getDomainName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDomainNameResponse, DomainNames.GetDomainNameError&gt;</code>, with `result.value` of type <code>[GetDomainNameResponse](src/models/get-domain-name-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDomainNames(request?: DomainNames.ListDomainNamesRequest, options?: RequestOptions): ApiPromise&lt;ListDomainNamesResponse, DomainNames.ListDomainNamesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists multiple custom domain names.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainNames.listDomainNames();
  // TODO: Handle 'response' of type ListDomainNamesResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainNames.ListDomainNamesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainNames.listDomainNames().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListDomainNamesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainNames.listDomainNames(request)`

- **OnSuccess**: <code>[ListDomainNamesResponse](src/models/list-domain-names-response.ts)</code>
- **OnError**: throws <code>[DomainNames.ListDomainNamesError](src/resources/domain-names.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainNames.listDomainNames(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListDomainNamesResponse, DomainNames.ListDomainNamesError&gt;</code>, with `result.value` of type <code>[ListDomainNamesResponse](src/models/list-domain-names-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDomainName(request: DomainNames.UpdateDomainNameRequest, options?: RequestOptions): ApiPromise&lt;UpdateDomainNameResponse, DomainNames.UpdateDomainNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a custom DomainName object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainNames.updateDomainName({ domainName: "some example string" });
  // TODO: Handle 'response' of type UpdateDomainNameResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainNames.UpdateDomainNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainNames.updateDomainName({ domainName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateDomainNameResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domainName</code> | <code>string</code> | The domain name. |
| <code>body?</code> | <code>[V1DomainnamesRequest1](src/models/v1-domainnames-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainNames.updateDomainName(request)`

- **OnSuccess**: <code>[UpdateDomainNameResponse](src/models/update-domain-name-response.ts)</code>
- **OnError**: throws <code>[DomainNames.UpdateDomainNameError](src/resources/domain-names.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainNames.updateDomainName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateDomainNameResponse, DomainNames.UpdateDomainNameError&gt;</code>, with `result.value` of type <code>[UpdateDomainNameResponse](src/models/update-domain-name-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Functions

> Source: [Functions](src/resources/functions.ts)

<details>
<summary><code>createFunction(request: Functions.CreateFunctionRequest, options?: RequestOptions): ApiPromise&lt;CreateFunctionResponse, Functions.CreateFunctionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the resolver logic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.functions.createFunction({ apiId: "some example string" });
  // TODO: Handle 'response' of type CreateFunctionResponse
} catch (err) {
  // TODO: Handle 'err' of type Functions.CreateFunctionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.functions.createFunction({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateFunctionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The GraphQL API ID. |
| <code>body?</code> | <code>[V1ApisFunctionsRequest](src/models/v1-apis-functions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.functions.createFunction(request)`

- **OnSuccess**: <code>[CreateFunctionResponse](src/models/create-function-response.ts)</code>
- **OnError**: throws <code>[Functions.CreateFunctionError](src/resources/functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.functions.createFunction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateFunctionResponse, Functions.CreateFunctionError&gt;</code>, with `result.value` of type <code>[CreateFunctionResponse](src/models/create-function-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFunction(request: Functions.DeleteFunctionRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Functions.DeleteFunctionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Function.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.functions.deleteFunction({
    apiId: "some example string",
    functionId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Functions.DeleteFunctionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.functions
  .deleteFunction({ apiId: "some example string", functionId: "some example string" })
  .asApiResult();
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
| <code>apiId</code> | <code>string</code> | The GraphQL API ID. |
| <code>functionId</code> | <code>string</code> | The Function ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.functions.deleteFunction(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Functions.DeleteFunctionError](src/resources/functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.functions.deleteFunction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Functions.DeleteFunctionError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFunction(request: Functions.GetFunctionRequest, options?: RequestOptions): ApiPromise&lt;GetFunctionResponse, Functions.GetFunctionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Function.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.functions.getFunction({
    apiId: "some example string",
    functionId: "some example string",
  });
  // TODO: Handle 'response' of type GetFunctionResponse
} catch (err) {
  // TODO: Handle 'err' of type Functions.GetFunctionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.functions
  .getFunction({ apiId: "some example string", functionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFunctionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The GraphQL API ID. |
| <code>functionId</code> | <code>string</code> | The Function ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.functions.getFunction(request)`

- **OnSuccess**: <code>[GetFunctionResponse](src/models/get-function-response.ts)</code>
- **OnError**: throws <code>[Functions.GetFunctionError](src/resources/functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.functions.getFunction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFunctionResponse, Functions.GetFunctionError&gt;</code>, with `result.value` of type <code>[GetFunctionResponse](src/models/get-function-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFunctions(request: Functions.ListFunctionsRequest, options?: RequestOptions): ApiPromise&lt;ListFunctionsResponse, Functions.ListFunctionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List multiple functions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.functions.listFunctions({ apiId: "some example string" });
  // TODO: Handle 'response' of type ListFunctionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Functions.ListFunctionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.functions.listFunctions({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListFunctionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The GraphQL API ID. |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.functions.listFunctions(request)`

- **OnSuccess**: <code>[ListFunctionsResponse](src/models/list-functions-response.ts)</code>
- **OnError**: throws <code>[Functions.ListFunctionsError](src/resources/functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.functions.listFunctions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListFunctionsResponse, Functions.ListFunctionsError&gt;</code>, with `result.value` of type <code>[ListFunctionsResponse](src/models/list-functions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFunction(request: Functions.UpdateFunctionRequest, options?: RequestOptions): ApiPromise&lt;UpdateFunctionResponse, Functions.UpdateFunctionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Function object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.functions.updateFunction({
    apiId: "some example string",
    functionId: "some example string",
  });
  // TODO: Handle 'response' of type UpdateFunctionResponse
} catch (err) {
  // TODO: Handle 'err' of type Functions.UpdateFunctionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.functions
  .updateFunction({ apiId: "some example string", functionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateFunctionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The GraphQL API ID. |
| <code>functionId</code> | <code>string</code> | The function ID. |
| <code>body?</code> | <code>[V1ApisFunctionsRequest1](src/models/v1-apis-functions-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.functions.updateFunction(request)`

- **OnSuccess**: <code>[UpdateFunctionResponse](src/models/update-function-response.ts)</code>
- **OnError**: throws <code>[Functions.UpdateFunctionError](src/resources/functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.functions.updateFunction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateFunctionResponse, Functions.UpdateFunctionError&gt;</code>, with `result.value` of type <code>[UpdateFunctionResponse](src/models/update-function-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GraphqlApis

> Source: [GraphqlApis](src/resources/graphql-apis.ts)

<details>
<summary><code>createGraphqlApi2(request?: GraphqlApis.CreateGraphqlApi2Request, options?: RequestOptions): ApiPromise&lt;CreateGraphqlApiResponse, GraphqlApis.CreateGraphqlApi2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a GraphqlApi object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.graphqlApis.createGraphqlApi2();
  // TODO: Handle 'response' of type CreateGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type GraphqlApis.CreateGraphqlApi2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.graphqlApis.createGraphqlApi2().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[V1ApisRequest](src/models/v1-apis-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.graphqlApis.createGraphqlApi2(request)`

- **OnSuccess**: <code>[CreateGraphqlApiResponse](src/models/create-graphql-api-response.ts)</code>
- **OnError**: throws <code>[GraphqlApis.CreateGraphqlApi2Error](src/resources/graphql-apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.graphqlApis.createGraphqlApi2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateGraphqlApiResponse, GraphqlApis.CreateGraphqlApi2Error&gt;</code>, with `result.value` of type <code>[CreateGraphqlApiResponse](src/models/create-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGraphqlApi2(request: GraphqlApis.DeleteGraphqlApi2Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GraphqlApis.DeleteGraphqlApi2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a GraphqlApi object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.graphqlApis.deleteGraphqlApi2({ apiId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GraphqlApis.DeleteGraphqlApi2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.graphqlApis.deleteGraphqlApi2({ apiId: "some example string" }).asApiResult();
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
| <code>apiId</code> | <code>string</code> | The API ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.graphqlApis.deleteGraphqlApi2(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GraphqlApis.DeleteGraphqlApi2Error](src/resources/graphql-apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.graphqlApis.deleteGraphqlApi2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GraphqlApis.DeleteGraphqlApi2Error&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>evaluateMappingTemplate(request?: GraphqlApis.EvaluateMappingTemplateRequest, options?: RequestOptions): ApiPromise&lt;EvaluateMappingTemplateResponse, GraphqlApis.EvaluateMappingTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates a given template and returns the response. The mapping template can be a request or response template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the Apache Velocity Template Language (VTL).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.graphqlApis.evaluateMappingTemplate();
  // TODO: Handle 'response' of type EvaluateMappingTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type GraphqlApis.EvaluateMappingTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.graphqlApis.evaluateMappingTemplate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EvaluateMappingTemplateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[V1DataplaneEvaluatetemplateRequest](src/models/v1-dataplane-evaluatetemplate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.graphqlApis.evaluateMappingTemplate(request)`

- **OnSuccess**: <code>[EvaluateMappingTemplateResponse](src/models/evaluate-mapping-template-response.ts)</code>
- **OnError**: throws <code>[GraphqlApis.EvaluateMappingTemplateError](src/resources/graphql-apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.graphqlApis.evaluateMappingTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EvaluateMappingTemplateResponse, GraphqlApis.EvaluateMappingTemplateError&gt;</code>, with `result.value` of type <code>[EvaluateMappingTemplateResponse](src/models/evaluate-mapping-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGraphqlApi2(request: GraphqlApis.GetGraphqlApi2Request, options?: RequestOptions): ApiPromise&lt;GetGraphqlApiResponse, GraphqlApis.GetGraphqlApi2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a GraphqlApi object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.graphqlApis.getGraphqlApi2({ apiId: "some example string" });
  // TODO: Handle 'response' of type GetGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type GraphqlApis.GetGraphqlApi2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.graphqlApis.getGraphqlApi2({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID for the GraphQL API. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.graphqlApis.getGraphqlApi2(request)`

- **OnSuccess**: <code>[GetGraphqlApiResponse](src/models/get-graphql-api-response.ts)</code>
- **OnError**: throws <code>[GraphqlApis.GetGraphqlApi2Error](src/resources/graphql-apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.graphqlApis.getGraphqlApi2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetGraphqlApiResponse, GraphqlApis.GetGraphqlApi2Error&gt;</code>, with `result.value` of type <code>[GetGraphqlApiResponse](src/models/get-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGraphqlApis2(request?: GraphqlApis.ListGraphqlApis2Request, options?: RequestOptions): ApiPromise&lt;ListGraphqlApisResponse, GraphqlApis.ListGraphqlApis2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists your GraphQL APIs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.graphqlApis.listGraphqlApis2();
  // TODO: Handle 'response' of type ListGraphqlApisResponse
} catch (err) {
  // TODO: Handle 'err' of type GraphqlApis.ListGraphqlApis2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.graphqlApis.listGraphqlApis2().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListGraphqlApisResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |
| <code>apiType?</code> | <code>[ApiType2](src/models/api-type2.ts)</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). |
| <code>owner?</code> | <code>[Owner](src/models/owner.ts)</code> | The account owner of the GraphQL API. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.graphqlApis.listGraphqlApis2(request)`

- **OnSuccess**: <code>[ListGraphqlApisResponse](src/models/list-graphql-apis-response.ts)</code>
- **OnError**: throws <code>[GraphqlApis.ListGraphqlApis2Error](src/resources/graphql-apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.graphqlApis.listGraphqlApis2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListGraphqlApisResponse, GraphqlApis.ListGraphqlApis2Error&gt;</code>, with `result.value` of type <code>[ListGraphqlApisResponse](src/models/list-graphql-apis-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGraphqlApi2(request: GraphqlApis.UpdateGraphqlApi2Request, options?: RequestOptions): ApiPromise&lt;UpdateGraphqlApiResponse, GraphqlApis.UpdateGraphqlApi2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a GraphqlApi object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.graphqlApis.updateGraphqlApi2({ apiId: "some example string" });
  // TODO: Handle 'response' of type UpdateGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type GraphqlApis.UpdateGraphqlApi2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.graphqlApis.updateGraphqlApi2({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>body?</code> | <code>[V1ApisRequest1](src/models/v1-apis-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.graphqlApis.updateGraphqlApi2(request)`

- **OnSuccess**: <code>[UpdateGraphqlApiResponse](src/models/update-graphql-api-response.ts)</code>
- **OnError**: throws <code>[GraphqlApis.UpdateGraphqlApi2Error](src/resources/graphql-apis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.graphqlApis.updateGraphqlApi2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateGraphqlApiResponse, GraphqlApis.UpdateGraphqlApi2Error&gt;</code>, with `result.value` of type <code>[UpdateGraphqlApiResponse](src/models/update-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>associateMergedGraphqlApi(request: Operations.AssociateMergedGraphqlApiRequest, options?: RequestOptions): ApiPromise&lt;AssociateMergedGraphqlApiResponse, Operations.AssociateMergedGraphqlApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an association between a Merged API and source API using the source API's identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.associateMergedGraphqlApi({
    sourceApiIdentifier: "some example string",
  });
  // TODO: Handle 'response' of type AssociateMergedGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.AssociateMergedGraphqlApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .associateMergedGraphqlApi({ sourceApiIdentifier: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssociateMergedGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourceApiIdentifier</code> | <code>string</code> | The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API. |
| <code>body?</code> | <code>[V1SourceApisMergedApiAssociationsRequest](src/models/v1-source-apis-merged-api-associations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.associateMergedGraphqlApi(request)`

- **OnSuccess**: <code>[AssociateMergedGraphqlApiResponse](src/models/associate-merged-graphql-api-response.ts)</code>
- **OnError**: throws <code>[Operations.AssociateMergedGraphqlApiError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.associateMergedGraphqlApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssociateMergedGraphqlApiResponse, Operations.AssociateMergedGraphqlApiError&gt;</code>, with `result.value` of type <code>[AssociateMergedGraphqlApiResponse](src/models/associate-merged-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disassociateMergedGraphqlApi(request: Operations.DisassociateMergedGraphqlApiRequest, options?: RequestOptions): ApiPromise&lt;DisassociateMergedGraphqlApiResponse, Operations.DisassociateMergedGraphqlApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an association between a Merged API and source API using the source API's identifier and the association ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.disassociateMergedGraphqlApi({
    sourceApiIdentifier: "some example string",
    associationId: "some example string",
  });
  // TODO: Handle 'response' of type DisassociateMergedGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.DisassociateMergedGraphqlApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .disassociateMergedGraphqlApi({
    sourceApiIdentifier: "some example string",
    associationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisassociateMergedGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourceApiIdentifier</code> | <code>string</code> | The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API. |
| <code>associationId</code> | <code>string</code> | The ID generated by the AppSync service for the source API association. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.disassociateMergedGraphqlApi(request)`

- **OnSuccess**: <code>[DisassociateMergedGraphqlApiResponse](src/models/disassociate-merged-graphql-api-response.ts)</code>
- **OnError**: throws <code>[Operations.DisassociateMergedGraphqlApiError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.disassociateMergedGraphqlApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisassociateMergedGraphqlApiResponse, Operations.DisassociateMergedGraphqlApiError&gt;</code>, with `result.value` of type <code>[DisassociateMergedGraphqlApiResponse](src/models/disassociate-merged-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>evaluateCode(request?: Operations.EvaluateCodeRequest, options?: RequestOptions): ApiPromise&lt;EvaluateCodeResponse, Operations.EvaluateCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For APPSYNC_JS runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.evaluateCode();
  // TODO: Handle 'response' of type EvaluateCodeResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.EvaluateCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.evaluateCode().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EvaluateCodeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[V1DataplaneEvaluatecodeRequest](src/models/v1-dataplane-evaluatecode-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.evaluateCode(request)`

- **OnSuccess**: <code>[EvaluateCodeResponse](src/models/evaluate-code-response.ts)</code>
- **OnError**: throws <code>[Operations.EvaluateCodeError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.evaluateCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EvaluateCodeResponse, Operations.EvaluateCodeError&gt;</code>, with `result.value` of type <code>[EvaluateCodeResponse](src/models/evaluate-code-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>flushApiCache(request: Operations.FlushApiCacheRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Operations.FlushApiCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Flushes an ApiCache object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.flushApiCache({ apiId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Operations.FlushApiCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.flushApiCache({ apiId: "some example string" }).asApiResult();
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
| <code>apiId</code> | <code>string</code> | The API ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.flushApiCache(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Operations.FlushApiCacheError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.flushApiCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Operations.FlushApiCacheError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGraphqlApiEnvironmentVariables(request: Operations.GetGraphqlApiEnvironmentVariablesRequest, options?: RequestOptions): ApiPromise&lt;GetGraphqlApiEnvironmentVariablesResponse, Operations.GetGraphqlApiEnvironmentVariablesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of environmental variable key-value pairs associated with an API by its ID value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.getGraphqlApiEnvironmentVariables({
    apiId: "some example string",
  });
  // TODO: Handle 'response' of type GetGraphqlApiEnvironmentVariablesResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetGraphqlApiEnvironmentVariablesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getGraphqlApiEnvironmentVariables({ apiId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetGraphqlApiEnvironmentVariablesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The ID of the API from which the environmental variable list will be retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getGraphqlApiEnvironmentVariables(request)`

- **OnSuccess**: <code>[GetGraphqlApiEnvironmentVariablesResponse](src/models/get-graphql-api-environment-variables-response.ts)</code>
- **OnError**: throws <code>[Operations.GetGraphqlApiEnvironmentVariablesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getGraphqlApiEnvironmentVariables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetGraphqlApiEnvironmentVariablesResponse, Operations.GetGraphqlApiEnvironmentVariablesError&gt;</code>, with `result.value` of type <code>[GetGraphqlApiEnvironmentVariablesResponse](src/models/get-graphql-api-environment-variables-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSchemaCreationStatus(request: Operations.GetSchemaCreationStatusRequest, options?: RequestOptions): ApiPromise&lt;GetSchemaCreationStatusResponse, Operations.GetSchemaCreationStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current status of a schema creation operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.getSchemaCreationStatus({ apiId: "some example string" });
  // TODO: Handle 'response' of type GetSchemaCreationStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetSchemaCreationStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getSchemaCreationStatus({ apiId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSchemaCreationStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getSchemaCreationStatus(request)`

- **OnSuccess**: <code>[GetSchemaCreationStatusResponse](src/models/get-schema-creation-status-response.ts)</code>
- **OnError**: throws <code>[Operations.GetSchemaCreationStatusError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getSchemaCreationStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSchemaCreationStatusResponse, Operations.GetSchemaCreationStatusError&gt;</code>, with `result.value` of type <code>[GetSchemaCreationStatusResponse](src/models/get-schema-creation-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putGraphqlApiEnvironmentVariables(request: Operations.PutGraphqlApiEnvironmentVariablesRequest, options?: RequestOptions): ApiPromise&lt;PutGraphqlApiEnvironmentVariablesResponse, Operations.PutGraphqlApiEnvironmentVariablesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a list of environmental variables in an API by its ID value. When creating an environmental variable, it must follow the constraints below: Both JavaScript and VTL templates support environmental variables. Environmental variables are not evaluated before function invocation. Environmental variables only support string values. Any defined value in an environmental variable is considered a string literal and not expanded. Variable evaluations should ideally be performed in the function code. When creating an environmental variable key-value pair, it must follow the additional constraints below: Keys must begin with a letter. Keys must be at least two characters long. Keys can only contain letters, numbers, and the underscore character (_). Values can be up to 512 characters long. You can configure up to 50 key-value pairs in a GraphQL API. You can create a list of environmental variables by adding it to the environmentVariables payload as a list in the format {"key1":"value1","key2":"value2", …}. Note that each call of the PutGraphqlApiEnvironmentVariables action will result in the overwriting of the existing environmental variable list of that API. This means the existing e

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.putGraphqlApiEnvironmentVariables({
    apiId: "some example string",
  });
  // TODO: Handle 'response' of type PutGraphqlApiEnvironmentVariablesResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.PutGraphqlApiEnvironmentVariablesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .putGraphqlApiEnvironmentVariables({ apiId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutGraphqlApiEnvironmentVariablesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The ID of the API to which the environmental variable list will be written. |
| <code>body?</code> | <code>[V1ApisEnvironmentVariablesRequest](src/models/v1-apis-environment-variables-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.putGraphqlApiEnvironmentVariables(request)`

- **OnSuccess**: <code>[PutGraphqlApiEnvironmentVariablesResponse](src/models/put-graphql-api-environment-variables-response.ts)</code>
- **OnError**: throws <code>[Operations.PutGraphqlApiEnvironmentVariablesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.putGraphqlApiEnvironmentVariables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutGraphqlApiEnvironmentVariablesResponse, Operations.PutGraphqlApiEnvironmentVariablesError&gt;</code>, with `result.value` of type <code>[PutGraphqlApiEnvironmentVariablesResponse](src/models/put-graphql-api-environment-variables-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSchemaCreation(request: Operations.StartSchemaCreationRequest, options?: RequestOptions): ApiPromise&lt;StartSchemaCreationResponse, Operations.StartSchemaCreationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.startSchemaCreation({ apiId: "some example string" });
  // TODO: Handle 'response' of type StartSchemaCreationResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartSchemaCreationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.startSchemaCreation({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartSchemaCreationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>body?</code> | <code>[V1ApisSchemacreationRequest](src/models/v1-apis-schemacreation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.startSchemaCreation(request)`

- **OnSuccess**: <code>[StartSchemaCreationResponse](src/models/start-schema-creation-response.ts)</code>
- **OnError**: throws <code>[Operations.StartSchemaCreationError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startSchemaCreation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartSchemaCreationResponse, Operations.StartSchemaCreationError&gt;</code>, with `result.value` of type <code>[StartSchemaCreationResponse](src/models/start-schema-creation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSchemaMerge(request: Operations.StartSchemaMergeRequest, options?: RequestOptions): ApiPromise&lt;StartSchemaMergeResponse, Operations.StartSchemaMergeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a merge operation. Returns a status that shows the result of the merge operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.startSchemaMerge({
    associationId: "some example string",
    mergedApiIdentifier: "some example string",
  });
  // TODO: Handle 'response' of type StartSchemaMergeResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartSchemaMergeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .startSchemaMerge({ associationId: "some example string", mergedApiIdentifier: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartSchemaMergeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>associationId</code> | <code>string</code> | The ID generated by the AppSync service for the source API association. |
| <code>mergedApiIdentifier</code> | <code>string</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.startSchemaMerge(request)`

- **OnSuccess**: <code>[StartSchemaMergeResponse](src/models/start-schema-merge-response.ts)</code>
- **OnError**: throws <code>[Operations.StartSchemaMergeError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startSchemaMerge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartSchemaMergeResponse, Operations.StartSchemaMergeError&gt;</code>, with `result.value` of type <code>[StartSchemaMergeResponse](src/models/start-schema-merge-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Resolvers

> Source: [Resolvers](src/resources/resolvers.ts)

<details>
<summary><code>createResolver(request: Resolvers.CreateResolverRequest, options?: RequestOptions): ApiPromise&lt;CreateResolverResponse, Resolvers.CreateResolverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resolvers.createResolver({
    apiId: "some example string",
    typeName: "some example string",
  });
  // TODO: Handle 'response' of type CreateResolverResponse
} catch (err) {
  // TODO: Handle 'err' of type Resolvers.CreateResolverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resolvers
  .createResolver({ apiId: "some example string", typeName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResolverResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The ID for the GraphQL API for which the resolver is being created. |
| <code>typeName</code> | <code>string</code> | The name of the Type. |
| <code>body?</code> | <code>[V1ApisTypesResolversRequest](src/models/v1-apis-types-resolvers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resolvers.createResolver(request)`

- **OnSuccess**: <code>[CreateResolverResponse](src/models/create-resolver-response.ts)</code>
- **OnError**: throws <code>[Resolvers.CreateResolverError](src/resources/resolvers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resolvers.createResolver(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResolverResponse, Resolvers.CreateResolverError&gt;</code>, with `result.value` of type <code>[CreateResolverResponse](src/models/create-resolver-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResolver(request: Resolvers.DeleteResolverRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Resolvers.DeleteResolverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Resolver object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resolvers.deleteResolver({
    apiId: "some example string",
    typeName: "some example string",
    fieldName: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Resolvers.DeleteResolverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resolvers
  .deleteResolver({
    apiId: "some example string",
    typeName: "some example string",
    fieldName: "some example string",
  })
  .asApiResult();
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
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>typeName</code> | <code>string</code> | The name of the resolver type. |
| <code>fieldName</code> | <code>string</code> | The resolver field name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resolvers.deleteResolver(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Resolvers.DeleteResolverError](src/resources/resolvers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resolvers.deleteResolver(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Resolvers.DeleteResolverError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResolver(request: Resolvers.GetResolverRequest, options?: RequestOptions): ApiPromise&lt;GetResolverResponse, Resolvers.GetResolverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Resolver object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resolvers.getResolver({
    apiId: "some example string",
    typeName: "some example string",
    fieldName: "some example string",
  });
  // TODO: Handle 'response' of type GetResolverResponse
} catch (err) {
  // TODO: Handle 'err' of type Resolvers.GetResolverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resolvers
  .getResolver({
    apiId: "some example string",
    typeName: "some example string",
    fieldName: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetResolverResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>typeName</code> | <code>string</code> | The resolver type name. |
| <code>fieldName</code> | <code>string</code> | The resolver field name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resolvers.getResolver(request)`

- **OnSuccess**: <code>[GetResolverResponse](src/models/get-resolver-response.ts)</code>
- **OnError**: throws <code>[Resolvers.GetResolverError](src/resources/resolvers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resolvers.getResolver(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetResolverResponse, Resolvers.GetResolverError&gt;</code>, with `result.value` of type <code>[GetResolverResponse](src/models/get-resolver-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResolvers(request: Resolvers.ListResolversRequest, options?: RequestOptions): ApiPromise&lt;ListResolversResponse, Resolvers.ListResolversError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the resolvers for a given API and type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resolvers.listResolvers({
    apiId: "some example string",
    typeName: "some example string",
  });
  // TODO: Handle 'response' of type ListResolversResponse
} catch (err) {
  // TODO: Handle 'err' of type Resolvers.ListResolversError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resolvers
  .listResolvers({ apiId: "some example string", typeName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResolversResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>typeName</code> | <code>string</code> | The type name. |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resolvers.listResolvers(request)`

- **OnSuccess**: <code>[ListResolversResponse](src/models/list-resolvers-response.ts)</code>
- **OnError**: throws <code>[Resolvers.ListResolversError](src/resources/resolvers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resolvers.listResolvers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResolversResponse, Resolvers.ListResolversError&gt;</code>, with `result.value` of type <code>[ListResolversResponse](src/models/list-resolvers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResolversByFunction(request: Resolvers.ListResolversByFunctionRequest, options?: RequestOptions): ApiPromise&lt;ListResolversByFunctionResponse, Resolvers.ListResolversByFunctionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the resolvers that are associated with a specific function.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resolvers.listResolversByFunction({
    apiId: "some example string",
    functionId: "some example string",
  });
  // TODO: Handle 'response' of type ListResolversByFunctionResponse
} catch (err) {
  // TODO: Handle 'err' of type Resolvers.ListResolversByFunctionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resolvers
  .listResolversByFunction({ apiId: "some example string", functionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResolversByFunctionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>functionId</code> | <code>string</code> | The function ID. |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resolvers.listResolversByFunction(request)`

- **OnSuccess**: <code>[ListResolversByFunctionResponse](src/models/list-resolvers-by-function-response.ts)</code>
- **OnError**: throws <code>[Resolvers.ListResolversByFunctionError](src/resources/resolvers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resolvers.listResolversByFunction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResolversByFunctionResponse, Resolvers.ListResolversByFunctionError&gt;</code>, with `result.value` of type <code>[ListResolversByFunctionResponse](src/models/list-resolvers-by-function-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResolver(request: Resolvers.UpdateResolverRequest, options?: RequestOptions): ApiPromise&lt;UpdateResolverResponse, Resolvers.UpdateResolverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Resolver object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resolvers.updateResolver({
    apiId: "some example string",
    typeName: "some example string",
    fieldName: "some example string",
  });
  // TODO: Handle 'response' of type UpdateResolverResponse
} catch (err) {
  // TODO: Handle 'err' of type Resolvers.UpdateResolverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resolvers
  .updateResolver({
    apiId: "some example string",
    typeName: "some example string",
    fieldName: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateResolverResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>typeName</code> | <code>string</code> | The new type name. |
| <code>fieldName</code> | <code>string</code> | The new field name. |
| <code>body?</code> | <code>[V1ApisTypesResolversFieldNameRequest](src/models/v1-apis-types-resolvers-field-name-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resolvers.updateResolver(request)`

- **OnSuccess**: <code>[UpdateResolverResponse](src/models/update-resolver-response.ts)</code>
- **OnError**: throws <code>[Resolvers.UpdateResolverError](src/resources/resolvers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resolvers.updateResolver(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateResolverResponse, Resolvers.UpdateResolverError&gt;</code>, with `result.value` of type <code>[UpdateResolverResponse](src/models/update-resolver-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SchemaApi

> Source: [SchemaApi](src/resources/schema-api.ts)

<details>
<summary><code>getIntrospectionSchema(request: SchemaApi.GetIntrospectionSchemaRequest, options?: RequestOptions): ApiPromise&lt;GetIntrospectionSchemaResponse, SchemaApi.GetIntrospectionSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the introspection schema for a GraphQL API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schemaApi.getIntrospectionSchema({
    apiId: "some example string",
    format: Format.Sdl,
  });
  // TODO: Handle 'response' of type GetIntrospectionSchemaResponse
} catch (err) {
  // TODO: Handle 'err' of type SchemaApi.GetIntrospectionSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schemaApi
  .getIntrospectionSchema({ apiId: "some example string", format: Format.Sdl })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetIntrospectionSchemaResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>format</code> | <code>[Format](src/models/format.ts)</code> | The schema format: SDL or JSON. |
| <code>includeDirectives?</code> | <code>boolean</code> | A flag that specifies whether the schema introspection should contain directives. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schemaApi.getIntrospectionSchema(request)`

- **OnSuccess**: <code>[GetIntrospectionSchemaResponse](src/models/get-introspection-schema-response.ts)</code>
- **OnError**: throws <code>[SchemaApi.GetIntrospectionSchemaError](src/resources/schema-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schemaApi.getIntrospectionSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetIntrospectionSchemaResponse, SchemaApi.GetIntrospectionSchemaError&gt;</code>, with `result.value` of type <code>[GetIntrospectionSchemaResponse](src/models/get-introspection-schema-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSchemaCreationStatus2(request: SchemaApi.GetSchemaCreationStatus2Request, options?: RequestOptions): ApiPromise&lt;GetSchemaCreationStatusResponse, SchemaApi.GetSchemaCreationStatus2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current status of a schema creation operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schemaApi.getSchemaCreationStatus2({ apiId: "some example string" });
  // TODO: Handle 'response' of type GetSchemaCreationStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type SchemaApi.GetSchemaCreationStatus2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schemaApi
  .getSchemaCreationStatus2({ apiId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSchemaCreationStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schemaApi.getSchemaCreationStatus2(request)`

- **OnSuccess**: <code>[GetSchemaCreationStatusResponse](src/models/get-schema-creation-status-response.ts)</code>
- **OnError**: throws <code>[SchemaApi.GetSchemaCreationStatus2Error](src/resources/schema-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schemaApi.getSchemaCreationStatus2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSchemaCreationStatusResponse, SchemaApi.GetSchemaCreationStatus2Error&gt;</code>, with `result.value` of type <code>[GetSchemaCreationStatusResponse](src/models/get-schema-creation-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSchemaCreation2(request: SchemaApi.StartSchemaCreation2Request, options?: RequestOptions): ApiPromise&lt;StartSchemaCreationResponse, SchemaApi.StartSchemaCreation2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schemaApi.startSchemaCreation2({ apiId: "some example string" });
  // TODO: Handle 'response' of type StartSchemaCreationResponse
} catch (err) {
  // TODO: Handle 'err' of type SchemaApi.StartSchemaCreation2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schemaApi.startSchemaCreation2({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartSchemaCreationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>body?</code> | <code>[V1ApisSchemacreationRequest](src/models/v1-apis-schemacreation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schemaApi.startSchemaCreation2(request)`

- **OnSuccess**: <code>[StartSchemaCreationResponse](src/models/start-schema-creation-response.ts)</code>
- **OnError**: throws <code>[SchemaApi.StartSchemaCreation2Error](src/resources/schema-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schemaApi.startSchemaCreation2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartSchemaCreationResponse, SchemaApi.StartSchemaCreation2Error&gt;</code>, with `result.value` of type <code>[StartSchemaCreationResponse](src/models/start-schema-creation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sourceapiassociations

> Source: [Sourceapiassociations](src/resources/sourceapiassociations.ts)

<details>
<summary><code>associateSourceGraphqlApi(request: Sourceapiassociations.AssociateSourceGraphqlApiRequest, options?: RequestOptions): ApiPromise&lt;AssociateSourceGraphqlApiResponse, Sourceapiassociations.AssociateSourceGraphqlApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an association between a Merged API and source API using the Merged API's identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceapiassociations.associateSourceGraphqlApi({
    mergedApiIdentifier: "some example string",
  });
  // TODO: Handle 'response' of type AssociateSourceGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Sourceapiassociations.AssociateSourceGraphqlApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceapiassociations
  .associateSourceGraphqlApi({ mergedApiIdentifier: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssociateSourceGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mergedApiIdentifier</code> | <code>string</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>body?</code> | <code>[V1MergedApisSourceApiAssociationsRequest](src/models/v1-merged-apis-source-api-associations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceapiassociations.associateSourceGraphqlApi(request)`

- **OnSuccess**: <code>[AssociateSourceGraphqlApiResponse](src/models/associate-source-graphql-api-response.ts)</code>
- **OnError**: throws <code>[Sourceapiassociations.AssociateSourceGraphqlApiError](src/resources/sourceapiassociations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceapiassociations.associateSourceGraphqlApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssociateSourceGraphqlApiResponse, Sourceapiassociations.AssociateSourceGraphqlApiError&gt;</code>, with `result.value` of type <code>[AssociateSourceGraphqlApiResponse](src/models/associate-source-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disassociateSourceGraphqlApi(request: Sourceapiassociations.DisassociateSourceGraphqlApiRequest, options?: RequestOptions): ApiPromise&lt;DisassociateSourceGraphqlApiResponse, Sourceapiassociations.DisassociateSourceGraphqlApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an association between a Merged API and source API using the Merged API's identifier and the association ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceapiassociations.disassociateSourceGraphqlApi({
    mergedApiIdentifier: "some example string",
    associationId: "some example string",
  });
  // TODO: Handle 'response' of type DisassociateSourceGraphqlApiResponse
} catch (err) {
  // TODO: Handle 'err' of type Sourceapiassociations.DisassociateSourceGraphqlApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceapiassociations
  .disassociateSourceGraphqlApi({
    mergedApiIdentifier: "some example string",
    associationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisassociateSourceGraphqlApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mergedApiIdentifier</code> | <code>string</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>associationId</code> | <code>string</code> | The ID generated by the AppSync service for the source API association. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceapiassociations.disassociateSourceGraphqlApi(request)`

- **OnSuccess**: <code>[DisassociateSourceGraphqlApiResponse](src/models/disassociate-source-graphql-api-response.ts)</code>
- **OnError**: throws <code>[Sourceapiassociations.DisassociateSourceGraphqlApiError](src/resources/sourceapiassociations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceapiassociations.disassociateSourceGraphqlApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisassociateSourceGraphqlApiResponse, Sourceapiassociations.DisassociateSourceGraphqlApiError&gt;</code>, with `result.value` of type <code>[DisassociateSourceGraphqlApiResponse](src/models/disassociate-source-graphql-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSourceApiAssociation(request: Sourceapiassociations.GetSourceApiAssociationRequest, options?: RequestOptions): ApiPromise&lt;GetSourceApiAssociationResponse, Sourceapiassociations.GetSourceApiAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a SourceApiAssociation object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceapiassociations.getSourceApiAssociation({
    mergedApiIdentifier: "some example string",
    associationId: "some example string",
  });
  // TODO: Handle 'response' of type GetSourceApiAssociationResponse
} catch (err) {
  // TODO: Handle 'err' of type Sourceapiassociations.GetSourceApiAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceapiassociations
  .getSourceApiAssociation({
    mergedApiIdentifier: "some example string",
    associationId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSourceApiAssociationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mergedApiIdentifier</code> | <code>string</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>associationId</code> | <code>string</code> | The ID generated by the AppSync service for the source API association. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceapiassociations.getSourceApiAssociation(request)`

- **OnSuccess**: <code>[GetSourceApiAssociationResponse](src/models/get-source-api-association-response.ts)</code>
- **OnError**: throws <code>[Sourceapiassociations.GetSourceApiAssociationError](src/resources/sourceapiassociations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceapiassociations.getSourceApiAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSourceApiAssociationResponse, Sourceapiassociations.GetSourceApiAssociationError&gt;</code>, with `result.value` of type <code>[GetSourceApiAssociationResponse](src/models/get-source-api-association-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSourceApiAssociations(request: Sourceapiassociations.ListSourceApiAssociationsRequest, options?: RequestOptions): ApiPromise&lt;ListSourceApiAssociationsResponse, Sourceapiassociations.ListSourceApiAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the SourceApiAssociationSummary data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceapiassociations.listSourceApiAssociations({
    apiId: "some example string",
  });
  // TODO: Handle 'response' of type ListSourceApiAssociationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Sourceapiassociations.ListSourceApiAssociationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceapiassociations
  .listSourceApiAssociations({ apiId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSourceApiAssociationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceapiassociations.listSourceApiAssociations(request)`

- **OnSuccess**: <code>[ListSourceApiAssociationsResponse](src/models/list-source-api-associations-response.ts)</code>
- **OnError**: throws <code>[Sourceapiassociations.ListSourceApiAssociationsError](src/resources/sourceapiassociations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceapiassociations.listSourceApiAssociations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSourceApiAssociationsResponse, Sourceapiassociations.ListSourceApiAssociationsError&gt;</code>, with `result.value` of type <code>[ListSourceApiAssociationsResponse](src/models/list-source-api-associations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSourceApiAssociation(request: Sourceapiassociations.UpdateSourceApiAssociationRequest, options?: RequestOptions): ApiPromise&lt;UpdateSourceApiAssociationResponse, Sourceapiassociations.UpdateSourceApiAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates some of the configuration choices of a particular source API association.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sourceapiassociations.updateSourceApiAssociation({
    associationId: "some example string",
    mergedApiIdentifier: "some example string",
  });
  // TODO: Handle 'response' of type UpdateSourceApiAssociationResponse
} catch (err) {
  // TODO: Handle 'err' of type Sourceapiassociations.UpdateSourceApiAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sourceapiassociations
  .updateSourceApiAssociation({
    associationId: "some example string",
    mergedApiIdentifier: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateSourceApiAssociationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>associationId</code> | <code>string</code> | The ID generated by the AppSync service for the source API association. |
| <code>mergedApiIdentifier</code> | <code>string</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>body?</code> | <code>[V1MergedApisSourceApiAssociationsRequest1](src/models/v1-merged-apis-source-api-associations-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sourceapiassociations.updateSourceApiAssociation(request)`

- **OnSuccess**: <code>[UpdateSourceApiAssociationResponse](src/models/update-source-api-association-response.ts)</code>
- **OnError**: throws <code>[Sourceapiassociations.UpdateSourceApiAssociationError](src/resources/sourceapiassociations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sourceapiassociations.updateSourceApiAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateSourceApiAssociationResponse, Sourceapiassociations.UpdateSourceApiAssociationError&gt;</code>, with `result.value` of type <code>[UpdateSourceApiAssociationResponse](src/models/update-source-api-association-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>listTagsForResource(request: Tags.ListTagsForResourceRequest, options?: RequestOptions): ApiPromise&lt;ListTagsForResourceResponse, Tags.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags for a resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.listTagsForResource({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type ListTagsForResourceResponse
} catch (err) {
  // TODO: Handle 'err' of type Tags.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.listTagsForResource({ resourceArn: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTagsForResourceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceArn</code> | <code>string</code> | The GraphqlApi Amazon Resource Name (ARN). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.listTagsForResource(request)`

- **OnSuccess**: <code>[ListTagsForResourceResponse](src/models/list-tags-for-resource-response.ts)</code>
- **OnError**: throws <code>[Tags.ListTagsForResourceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTagsForResourceResponse, Tags.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>[ListTagsForResourceResponse](src/models/list-tags-for-resource-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: Tags.TagResourceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tags.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tags a resource with user-supplied tags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.tagResource({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tags.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.tagResource({ resourceArn: "some example string" }).asApiResult();
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
| <code>resourceArn</code> | <code>string</code> | The GraphqlApi Amazon Resource Name (ARN). |
| <code>body?</code> | <code>[V1TagsRequest](src/models/v1-tags-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.tagResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tags.TagResourceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tags.TagResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: Tags.UntagResourceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tags.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Untags a resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.untagResource({
    resourceArn: "some example string",
    tagKeys: ["some example string"],
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tags.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .untagResource({ resourceArn: "some example string", tagKeys: ["some example string"] })
  .asApiResult();
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
| <code>resourceArn</code> | <code>string</code> | The GraphqlApi Amazon Resource Name (ARN). |
| <code>tagKeys</code> | <code>string[]</code> | A list of TagKey objects. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.untagResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tags.UntagResourceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tags.UntagResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Types

> Source: [Types](src/resources/types.ts)

<details>
<summary><code>createType(request: Types.CreateTypeRequest, options?: RequestOptions): ApiPromise&lt;CreateTypeResponse, Types.CreateTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Type object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.types.createType({ apiId: "some example string" });
  // TODO: Handle 'response' of type CreateTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type Types.CreateTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.types.createType({ apiId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTypeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>body?</code> | <code>[V1ApisTypesRequest](src/models/v1-apis-types-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.types.createType(request)`

- **OnSuccess**: <code>[CreateTypeResponse](src/models/create-type-response.ts)</code>
- **OnError**: throws <code>[Types.CreateTypeError](src/resources/types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.types.createType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTypeResponse, Types.CreateTypeError&gt;</code>, with `result.value` of type <code>[CreateTypeResponse](src/models/create-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteType(request: Types.DeleteTypeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Types.DeleteTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Type object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.types.deleteType({
    apiId: "some example string",
    typeName: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Types.DeleteTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.types
  .deleteType({ apiId: "some example string", typeName: "some example string" })
  .asApiResult();
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
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>typeName</code> | <code>string</code> | The type name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.types.deleteType(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Types.DeleteTypeError](src/resources/types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.types.deleteType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Types.DeleteTypeError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getType(request: Types.GetTypeRequest, options?: RequestOptions): ApiPromise&lt;GetTypeResponse, Types.GetTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Type object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.types.getType({
    apiId: "some example string",
    typeName: "some example string",
    format: Format.Sdl,
  });
  // TODO: Handle 'response' of type GetTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type Types.GetTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.types
  .getType({ apiId: "some example string", typeName: "some example string", format: Format.Sdl })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTypeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>typeName</code> | <code>string</code> | The type name. |
| <code>format</code> | <code>[Format](src/models/format.ts)</code> | The type format: SDL or JSON. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.types.getType(request)`

- **OnSuccess**: <code>[GetTypeResponse](src/models/get-type-response.ts)</code>
- **OnError**: throws <code>[Types.GetTypeError](src/resources/types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.types.getType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTypeResponse, Types.GetTypeError&gt;</code>, with `result.value` of type <code>[GetTypeResponse](src/models/get-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTypes(request: Types.ListTypesRequest, options?: RequestOptions): ApiPromise&lt;ListTypesResponse, Types.ListTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the types for a given API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.types.listTypes({ apiId: "some example string", format: Format.Sdl });
  // TODO: Handle 'response' of type ListTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Types.ListTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.types
  .listTypes({ apiId: "some example string", format: Format.Sdl })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>format</code> | <code>[Format](src/models/format.ts)</code> | The type format: SDL or JSON. |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.types.listTypes(request)`

- **OnSuccess**: <code>[ListTypesResponse](src/models/list-types-response.ts)</code>
- **OnError**: throws <code>[Types.ListTypesError](src/resources/types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.types.listTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTypesResponse, Types.ListTypesError&gt;</code>, with `result.value` of type <code>[ListTypesResponse](src/models/list-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTypesByAssociation(request: Types.ListTypesByAssociationRequest, options?: RequestOptions): ApiPromise&lt;ListTypesByAssociationResponse, Types.ListTypesByAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Type objects by the source API association ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.types.listTypesByAssociation({
    mergedApiIdentifier: "some example string",
    associationId: "some example string",
    format: Format.Sdl,
  });
  // TODO: Handle 'response' of type ListTypesByAssociationResponse
} catch (err) {
  // TODO: Handle 'err' of type Types.ListTypesByAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.types
  .listTypesByAssociation({
    mergedApiIdentifier: "some example string",
    associationId: "some example string",
    format: Format.Sdl,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTypesByAssociationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mergedApiIdentifier</code> | <code>string</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>associationId</code> | <code>string</code> | The ID generated by the AppSync service for the source API association. |
| <code>format</code> | <code>[Format](src/models/format.ts)</code> | The format type. |
| <code>nextToken?</code> | <code>string</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results that you want the request to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.types.listTypesByAssociation(request)`

- **OnSuccess**: <code>[ListTypesByAssociationResponse](src/models/list-types-by-association-response.ts)</code>
- **OnError**: throws <code>[Types.ListTypesByAssociationError](src/resources/types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.types.listTypesByAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTypesByAssociationResponse, Types.ListTypesByAssociationError&gt;</code>, with `result.value` of type <code>[ListTypesByAssociationResponse](src/models/list-types-by-association-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateType(request: Types.UpdateTypeRequest, options?: RequestOptions): ApiPromise&lt;UpdateTypeResponse, Types.UpdateTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Type object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.types.updateType({
    apiId: "some example string",
    typeName: "some example string",
  });
  // TODO: Handle 'response' of type UpdateTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type Types.UpdateTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.types
  .updateType({ apiId: "some example string", typeName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateTypeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiId</code> | <code>string</code> | The API ID. |
| <code>typeName</code> | <code>string</code> | The new type name. |
| <code>body?</code> | <code>[V1ApisTypesRequest1](src/models/v1-apis-types-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.types.updateType(request)`

- **OnSuccess**: <code>[UpdateTypeResponse](src/models/update-type-response.ts)</code>
- **OnError**: throws <code>[Types.UpdateTypeError](src/resources/types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.types.updateType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateTypeResponse, Types.UpdateTypeError&gt;</code>, with `result.value` of type <code>[UpdateTypeResponse](src/models/update-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonAppSyncError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

