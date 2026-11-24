# Reference

> Source: [SerpApiClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>getAccount(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the SerpApi account associated with the API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getAccount();
  // TODO: Handle 'response' of type Record<string, unknown>
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
const result = await client.account.getAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getAccount()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.account.getAccount().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SerpApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>getSearch(request: Search.GetSearchRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the JSON results for an asynchronous search by its `search_id`. The `search_id` is returned by /search when `async=true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.getSearch({ searchId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
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
const result = await client.search.getSearch({ searchId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>searchId</code> | <code>string</code> | Identifier of the asynchronous search. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.getSearch(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.search.getSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SerpApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runSearch(request: Search.RunSearchRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a real-time search against the engine specified by the `engine` query parameter. Supports Google, Bing, YouTube, and many other engines. Engine-specific parameters are documented in the SerpApi engine reference.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.runSearch({ engine: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
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
const result = await client.search.runSearch({ engine: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>engine</code> | <code>string</code> | Search engine identifier (e.g. google, bing, youtube). |
| <code>q?</code> | <code>string</code> | Search query (used by most engines except YouTube). |
| <code>searchQuery?</code> | <code>string</code> | Search query used by the YouTube engine. |
| <code>apiKey?</code> | <code>string</code> | SerpApi private key (may also be supplied via the apiKey security scheme). |
| <code>location?</code> | <code>string</code> | Geographic origin for the search. |
| <code>gl?</code> | <code>string</code> | Two-letter country code. |
| <code>hl?</code> | <code>string</code> | Two-letter language code. |
| <code>device?</code> | <code>[Device](src/models/device.ts)</code> | Device type to emulate. |
| <code>noCache?</code> | <code>boolean</code> | Force fresh (uncached) results. |
| <code>async?</code> | <code>boolean</code> | Submit asynchronously and retrieve results later. |
| <code>output?</code> | <code>[Output](src/models/output.ts)</code> | Response format. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.runSearch(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.search.runSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SerpApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

