# Reference

> Source: [BrowserUseClient](src/client.ts)

## Browsers

> Source: [Browsers](src/resources/browsers.ts)

<details>
<summary><code>createBrowserSessionBrowsersPost(request: Browsers.CreateBrowserSessionBrowsersPostRequest, options?: RequestOptions): ApiPromise&lt;BrowserSessionItemView, Browsers.CreateBrowserSessionBrowsersPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new browser session.

**Pricing:** Browser sessions are charged at $0.02/hour for all users.

The full rate is charged upfront when the session starts.
When you stop the session, any unused time is automatically refunded proportionally.

Billing is rounded up to the minute (minimum 1 minute).
For example, if you stop a session after 30 minutes, you'll be refunded half the charged amount.

**Session Limits:**
- All users: Up to 4 hours per session

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.browsers.createBrowserSessionBrowsersPost({ body: {} });
  // TODO: Handle 'response' of type BrowserSessionItemView
} catch (err) {
  // TODO: Handle 'err' of type Browsers.CreateBrowserSessionBrowsersPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.browsers.createBrowserSessionBrowsersPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BrowserSessionItemView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateBrowserSessionRequest](src/models/create-browser-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.browsers.createBrowserSessionBrowsersPost(request)`

- **OnSuccess**: <code>[BrowserSessionItemView](src/models/browser-session-item-view.ts)</code>
- **OnError**: throws <code>[Browsers.CreateBrowserSessionBrowsersPostError](src/resources/browsers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.browsers.createBrowserSessionBrowsersPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BrowserSessionItemView, Browsers.CreateBrowserSessionBrowsersPostError&gt;</code>, with `result.value` of type <code>[BrowserSessionItemView](src/models/browser-session-item-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBrowserSessionBrowsersSessionIdGet(request: Browsers.GetBrowserSessionBrowsersSessionIdGetRequest, options?: RequestOptions): ApiPromise&lt;BrowserSessionView, Browsers.GetBrowserSessionBrowsersSessionIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed browser session information including status and URLs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.browsers.getBrowserSessionBrowsersSessionIdGet({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BrowserSessionView
} catch (err) {
  // TODO: Handle 'err' of type Browsers.GetBrowserSessionBrowsersSessionIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.browsers
  .getBrowserSessionBrowsersSessionIdGet({ sessionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BrowserSessionView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.browsers.getBrowserSessionBrowsersSessionIdGet(request)`

- **OnSuccess**: <code>[BrowserSessionView](src/models/browser-session-view.ts)</code>
- **OnError**: throws <code>[Browsers.GetBrowserSessionBrowsersSessionIdGetError](src/resources/browsers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.browsers.getBrowserSessionBrowsersSessionIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BrowserSessionView, Browsers.GetBrowserSessionBrowsersSessionIdGetError&gt;</code>, with `result.value` of type <code>[BrowserSessionView](src/models/browser-session-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBrowserSessionDownloadsBrowsersSessionIdDownloadsGet(request: Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest, options?: RequestOptions): ApiPromise&lt;BrowserDownloadListResponse, Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files the browser downloaded to S3 during the session.

Pass ``includeUrls=true`` to receive presigned download URLs (15 min expiry) inline.
Files are stored at ``downloads/projects/{project_id}/sessions/{session_id}/`` in
the private bucket.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.browsers.listBrowserSessionDownloadsBrowsersSessionIdDownloadsGet({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BrowserDownloadListResponse
} catch (err) {
  // TODO: Handle 'err' of type Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.browsers
  .listBrowserSessionDownloadsBrowsersSessionIdDownloadsGet({
    sessionId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BrowserDownloadListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | - |
| <code>includeUrls?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.browsers.listBrowserSessionDownloadsBrowsersSessionIdDownloadsGet(request)`

- **OnSuccess**: <code>[BrowserDownloadListResponse](src/models/browser-download-list-response.ts)</code>
- **OnError**: throws <code>[Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError](src/resources/browsers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.browsers.listBrowserSessionDownloadsBrowsersSessionIdDownloadsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BrowserDownloadListResponse, Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError&gt;</code>, with `result.value` of type <code>[BrowserDownloadListResponse](src/models/browser-download-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBrowserSessionsBrowsersGet(request?: Browsers.ListBrowserSessionsBrowsersGetRequest, options?: RequestOptions): ApiPromise&lt;BrowserSessionListResponse, Browsers.ListBrowserSessionsBrowsersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get paginated list of browser sessions with optional status filtering.

List responses intentionally omit per-session presigned recording URLs
(`recording_url` is always `null` here). Each recording URL requires a
synchronous boto3 SigV4 signing call (plus an S3 HEAD) that holds the GIL
and blocks the event loop. With page_size up to the max this CPU-pegs the
worker and starves the DB pool, cascading into pool exhaustion across the
fleet. Clients should fetch the recording URL on demand via
`GET /api/v2/browsers/{id}`, which signs exactly one URL for a single
session. Mirrors the v3 sessions list fix (ENG-4904, PR #4621).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.browsers.listBrowserSessionsBrowsersGet();
  // TODO: Handle 'response' of type BrowserSessionListResponse
} catch (err) {
  // TODO: Handle 'err' of type Browsers.ListBrowserSessionsBrowsersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.browsers.listBrowserSessionsBrowsersGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BrowserSessionListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metadata?</code> | <code>[Metadata1](src/models/unions/metadata1.ts)</code> | Only browsers tagged with every one of these terms. `key` matches any value; `key=value` matches exactly. Repeat the param to require more than one (AND). |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>pageNumber?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>filterBy?</code> | <code>[Filterby](src/models/unions/filterby.ts)</code> | - |
| <code>agentSessionId?</code> | <code>[AgentsessionidModel](src/models/unions/agentsessionid-model.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.browsers.listBrowserSessionsBrowsersGet(request)`

- **OnSuccess**: <code>[BrowserSessionListResponse](src/models/browser-session-list-response.ts)</code>
- **OnError**: throws <code>[Browsers.ListBrowserSessionsBrowsersGetError](src/resources/browsers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.browsers.listBrowserSessionsBrowsersGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BrowserSessionListResponse, Browsers.ListBrowserSessionsBrowsersGetError&gt;</code>, with `result.value` of type <code>[BrowserSessionListResponse](src/models/browser-session-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBrowserSessionBrowsersSessionIdPatch(request: Browsers.UpdateBrowserSessionBrowsersSessionIdPatchRequest, options?: RequestOptions): ApiPromise&lt;BrowserSessionView, Browsers.UpdateBrowserSessionBrowsersSessionIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop a browser session.

**Refund:** When you stop a session, unused time is automatically refunded.
If the session ran for less than 1 hour, you'll receive a proportional refund.
Billing is ceil to the nearest minute (minimum 1 minute).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.browsers.updateBrowserSessionBrowsersSessionIdPatch({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type BrowserSessionView
} catch (err) {
  // TODO: Handle 'err' of type Browsers.UpdateBrowserSessionBrowsersSessionIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.browsers
  .updateBrowserSessionBrowsersSessionIdPatch({ sessionId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BrowserSessionView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[UpdateBrowserSessionRequest](src/models/update-browser-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.browsers.updateBrowserSessionBrowsersSessionIdPatch(request)`

- **OnSuccess**: <code>[BrowserSessionView](src/models/browser-session-view.ts)</code>
- **OnError**: throws <code>[Browsers.UpdateBrowserSessionBrowsersSessionIdPatchError](src/resources/browsers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.browsers.updateBrowserSessionBrowsersSessionIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BrowserSessionView, Browsers.UpdateBrowserSessionBrowsersSessionIdPatchError&gt;</code>, with `result.value` of type <code>[BrowserSessionView](src/models/browser-session-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Extensions

> Source: [Extensions](src/resources/extensions.ts)

<details>
<summary><code>deleteExtensionExtensionsExtensionIdDelete(request: Extensions.DeleteExtensionExtensionsExtensionIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Extensions.DeleteExtensionExtensionsExtensionIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete an extension without affecting running browsers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.extensions.deleteExtensionExtensionsExtensionIdDelete({
    extensionId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Extensions.DeleteExtensionExtensionsExtensionIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensions
  .deleteExtensionExtensionsExtensionIdDelete({ extensionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>extensionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensions.deleteExtensionExtensionsExtensionIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Extensions.DeleteExtensionExtensionsExtensionIdDeleteError](src/resources/extensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensions.deleteExtensionExtensionsExtensionIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Extensions.DeleteExtensionExtensionsExtensionIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExtensionExtensionsExtensionIdGet(request: Extensions.GetExtensionExtensionsExtensionIdGetRequest, options?: RequestOptions): ApiPromise&lt;ExtensionView, Extensions.GetExtensionExtensionsExtensionIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an uploaded extension by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.extensions.getExtensionExtensionsExtensionIdGet({
    extensionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ExtensionView
} catch (err) {
  // TODO: Handle 'err' of type Extensions.GetExtensionExtensionsExtensionIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensions
  .getExtensionExtensionsExtensionIdGet({ extensionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExtensionView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>extensionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensions.getExtensionExtensionsExtensionIdGet(request)`

- **OnSuccess**: <code>[ExtensionView](src/models/extension-view.ts)</code>
- **OnError**: throws <code>[Extensions.GetExtensionExtensionsExtensionIdGetError](src/resources/extensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensions.getExtensionExtensionsExtensionIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExtensionView, Extensions.GetExtensionExtensionsExtensionIdGetError&gt;</code>, with `result.value` of type <code>[ExtensionView](src/models/extension-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExtensionsExtensionsGet(request?: Extensions.ListExtensionsExtensionsGetRequest, options?: RequestOptions): ApiPromise&lt;ExtensionListResponse, Extensions.ListExtensionsExtensionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the extensions uploaded to this project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.extensions.listExtensionsExtensionsGet();
  // TODO: Handle 'response' of type ExtensionListResponse
} catch (err) {
  // TODO: Handle 'err' of type Extensions.ListExtensionsExtensionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensions.listExtensionsExtensionsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExtensionListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>pageNumber?</code> | <code>number</code> | -<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensions.listExtensionsExtensionsGet(request)`

- **OnSuccess**: <code>[ExtensionListResponse](src/models/extension-list-response.ts)</code>
- **OnError**: throws <code>[Extensions.ListExtensionsExtensionsGetError](src/resources/extensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensions.listExtensionsExtensionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExtensionListResponse, Extensions.ListExtensionsExtensionsGetError&gt;</code>, with `result.value` of type <code>[ExtensionListResponse](src/models/extension-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadExtensionExtensionsPost(request: Extensions.UploadExtensionExtensionsPostRequest, options?: RequestOptions): ApiPromise&lt;ExtensionView, Extensions.UploadExtensionExtensionsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a Manifest V3 extension as a ZIP file with manifest.json at its root.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.extensions.uploadExtensionExtensionsPost({ file: new Uint8Array() });
  // TODO: Handle 'response' of type ExtensionView
} catch (err) {
  // TODO: Handle 'err' of type Extensions.UploadExtensionExtensionsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensions
  .uploadExtensionExtensionsPost({ file: new Uint8Array() })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExtensionView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensions.uploadExtensionExtensionsPost(request)`

- **OnSuccess**: <code>[ExtensionView](src/models/extension-view.ts)</code>
- **OnError**: throws <code>[Extensions.UploadExtensionExtensionsPostError](src/resources/extensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensions.uploadExtensionExtensionsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExtensionView, Extensions.UploadExtensionExtensionsPostError&gt;</code>, with `result.value` of type <code>[ExtensionView](src/models/extension-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Integrations

> Source: [Integrations](src/resources/integrations.ts)

<details>
<summary><code>authorizeIntegrationIntegrationsProviderAuthorizePost(request: Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest, options?: RequestOptions): ApiPromise&lt;AuthorizeResponse, Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the OAuth redirect URL for connecting an integration.

The client opens the returned URL in a web auth session and polls
`/integrations/{provider}/status` once the flow lands back on the callback
path. The URL is Composio-hosted; no redirect URI is registered per client.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.integrations.authorizeIntegrationIntegrationsProviderAuthorizePost({
    provider: "some example string",
  });
  // TODO: Handle 'response' of type AuthorizeResponse
} catch (err) {
  // TODO: Handle 'err' of type Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrations
  .authorizeIntegrationIntegrationsProviderAuthorizePost({ provider: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrations.authorizeIntegrationIntegrationsProviderAuthorizePost(request)`

- **OnSuccess**: <code>[AuthorizeResponse](src/models/authorize-response.ts)</code>
- **OnError**: throws <code>[Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostError](src/resources/integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrations.authorizeIntegrationIntegrationsProviderAuthorizePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizeResponse, Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostError&gt;</code>, with `result.value` of type <code>[AuthorizeResponse](src/models/authorize-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disconnectIntegrationIntegrationsProviderDelete(request: Integrations.DisconnectIntegrationIntegrationsProviderDeleteRequest, options?: RequestOptions): ApiPromise&lt;DisconnectResponse, Integrations.DisconnectIntegrationIntegrationsProviderDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnect an integration for this project.

Deliberately NOT gated like `authorize` above: a restricted project must
still be able to tear down a connection it already has.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.integrations.disconnectIntegrationIntegrationsProviderDelete({
    provider: "some example string",
  });
  // TODO: Handle 'response' of type DisconnectResponse
} catch (err) {
  // TODO: Handle 'err' of type Integrations.DisconnectIntegrationIntegrationsProviderDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrations
  .disconnectIntegrationIntegrationsProviderDelete({ provider: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisconnectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrations.disconnectIntegrationIntegrationsProviderDelete(request)`

- **OnSuccess**: <code>[DisconnectResponse](src/models/disconnect-response.ts)</code>
- **OnError**: throws <code>[Integrations.DisconnectIntegrationIntegrationsProviderDeleteError](src/resources/integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrations.disconnectIntegrationIntegrationsProviderDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisconnectResponse, Integrations.DisconnectIntegrationIntegrationsProviderDeleteError&gt;</code>, with `result.value` of type <code>[DisconnectResponse](src/models/disconnect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConnectionStatusIntegrationsProviderStatusGet(request: Integrations.GetConnectionStatusIntegrationsProviderStatusGetRequest, options?: RequestOptions): ApiPromise&lt;ConnectionStatusResponse, Integrations.GetConnectionStatusIntegrationsProviderStatusGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether this project has connected a specific provider.

Poll this after opening the authorize URL to learn when OAuth completed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.integrations.getConnectionStatusIntegrationsProviderStatusGet({
    provider: "some example string",
  });
  // TODO: Handle 'response' of type ConnectionStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Integrations.GetConnectionStatusIntegrationsProviderStatusGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrations
  .getConnectionStatusIntegrationsProviderStatusGet({ provider: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrations.getConnectionStatusIntegrationsProviderStatusGet(request)`

- **OnSuccess**: <code>[ConnectionStatusResponse](src/models/connection-status-response.ts)</code>
- **OnError**: throws <code>[Integrations.GetConnectionStatusIntegrationsProviderStatusGetError](src/resources/integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrations.getConnectionStatusIntegrationsProviderStatusGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionStatusResponse, Integrations.GetConnectionStatusIntegrationsProviderStatusGetError&gt;</code>, with `result.value` of type <code>[ConnectionStatusResponse](src/models/connection-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategoriesIntegrationsCategoriesGet(options?: RequestOptions): ApiPromise&lt;IntegrationCategoryResponse, Integrations.ListCategoriesIntegrationsCategoriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all integration categories, for filtering the list above.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.integrations.listCategoriesIntegrationsCategoriesGet();
  // TODO: Handle 'response' of type IntegrationCategoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Integrations.ListCategoriesIntegrationsCategoriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrations.listCategoriesIntegrationsCategoriesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntegrationCategoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrations.listCategoriesIntegrationsCategoriesGet()`

- **OnSuccess**: <code>[IntegrationCategoryResponse](src/models/integration-category-response.ts)</code>
- **OnError**: throws <code>[Integrations.ListCategoriesIntegrationsCategoriesGetError](src/resources/integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrations.listCategoriesIntegrationsCategoriesGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntegrationCategoryResponse, Integrations.ListCategoriesIntegrationsCategoriesGetError&gt;</code>, with `result.value` of type <code>[IntegrationCategoryResponse](src/models/integration-category-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIntegrationsIntegrationsGet(request?: Integrations.ListIntegrationsIntegrationsGetRequest, options?: RequestOptions): ApiPromise&lt;IntegrationListResponse, Integrations.ListIntegrationsIntegrationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List available integrations with this project's connection status.

`is_connected` is resolved per integration, so a client can render the whole
catalogue and the connected subset from this one call. `connected_only` is
what a "my integrations" view reads — including on a restricted project,
which cannot connect anything but can still remove what it already has.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.integrations.listIntegrationsIntegrationsGet();
  // TODO: Handle 'response' of type IntegrationListResponse
} catch (err) {
  // TODO: Handle 'err' of type Integrations.ListIntegrationsIntegrationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrations.listIntegrationsIntegrationsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntegrationListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>[Limit](src/models/unions/limit.ts)</code> | Maximum number of results |
| <code>offset?</code> | <code>number</code> | Number of results to skip<br>**Default**: 0 |
| <code>search?</code> | <code>[Search](src/models/unions/search.ts)</code> | Filter by name, description or provider |
| <code>popularOnly?</code> | <code>boolean</code> | Only return popular integrations<br>**Default**: false |
| <code>connectedOnly?</code> | <code>boolean</code> | Only return integrations this project has connected<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrations.listIntegrationsIntegrationsGet(request)`

- **OnSuccess**: <code>[IntegrationListResponse](src/models/integration-list-response.ts)</code>
- **OnError**: throws <code>[Integrations.ListIntegrationsIntegrationsGetError](src/resources/integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrations.listIntegrationsIntegrationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntegrationListResponse, Integrations.ListIntegrationsIntegrationsGetError&gt;</code>, with `result.value` of type <code>[IntegrationListResponse](src/models/integration-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Profiles

> Source: [Profiles](src/resources/profiles.ts)

<details>
<summary><code>createProfileProfilesPost(request?: Profiles.CreateProfileProfilesPostRequest, options?: RequestOptions): ApiPromise&lt;ProfileView, Profiles.CreateProfileProfilesPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Profiles allow you to preserve the state of the browser between tasks.

They are most commonly used to allow users to preserve the log-in state in the agent between tasks.
You'd normally create one profile per user and then use it for all their tasks.

You can set a `user_id` when creating a profile to associate it with a user in your system.
This allows you to later search for the profile using the GET /profiles endpoint with a query parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profiles.createProfileProfilesPost();
  // TODO: Handle 'response' of type ProfileView
} catch (err) {
  // TODO: Handle 'err' of type Profiles.CreateProfileProfilesPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profiles.createProfileProfilesPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ProfileCreateRequest](src/models/profile-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profiles.createProfileProfilesPost(request)`

- **OnSuccess**: <code>[ProfileView](src/models/profile-view.ts)</code>
- **OnError**: throws <code>[Profiles.CreateProfileProfilesPostError](src/resources/profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profiles.createProfileProfilesPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileView, Profiles.CreateProfileProfilesPostError&gt;</code>, with `result.value` of type <code>[ProfileView](src/models/profile-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBrowserProfileProfilesProfileIdDelete(request: Profiles.DeleteBrowserProfileProfilesProfileIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Profiles.DeleteBrowserProfileProfilesProfileIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a browser profile and its configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.profiles.deleteBrowserProfileProfilesProfileIdDelete({
    profileId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Profiles.DeleteBrowserProfileProfilesProfileIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profiles
  .deleteBrowserProfileProfilesProfileIdDelete({ profileId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>profileId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profiles.deleteBrowserProfileProfilesProfileIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Profiles.DeleteBrowserProfileProfilesProfileIdDeleteError](src/resources/profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profiles.deleteBrowserProfileProfilesProfileIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Profiles.DeleteBrowserProfileProfilesProfileIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProfileProfilesProfileIdGet(request: Profiles.GetProfileProfilesProfileIdGetRequest, options?: RequestOptions): ApiPromise&lt;ProfileView, Profiles.GetProfileProfilesProfileIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get profile details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profiles.getProfileProfilesProfileIdGet({
    profileId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ProfileView
} catch (err) {
  // TODO: Handle 'err' of type Profiles.GetProfileProfilesProfileIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profiles
  .getProfileProfilesProfileIdGet({ profileId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>profileId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profiles.getProfileProfilesProfileIdGet(request)`

- **OnSuccess**: <code>[ProfileView](src/models/profile-view.ts)</code>
- **OnError**: throws <code>[Profiles.GetProfileProfilesProfileIdGetError](src/resources/profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profiles.getProfileProfilesProfileIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileView, Profiles.GetProfileProfilesProfileIdGetError&gt;</code>, with `result.value` of type <code>[ProfileView](src/models/profile-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProfilesProfilesGet(request?: Profiles.ListProfilesProfilesGetRequest, options?: RequestOptions): ApiPromise&lt;ProfileListResponse, Profiles.ListProfilesProfilesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get paginated list of profiles.

Use the `query` parameter to search profiles by name or user_id.
This is useful when you have many profiles and need to find a specific user.

Example: If you set `user_id` to your internal user identifier when creating profiles,
you can later search for that user by passing their identifier as the `query` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profiles.listProfilesProfilesGet();
  // TODO: Handle 'response' of type ProfileListResponse
} catch (err) {
  // TODO: Handle 'err' of type Profiles.ListProfilesProfilesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profiles.listProfilesProfilesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>pageNumber?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>query?</code> | <code>[Query](src/models/unions/query.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profiles.listProfilesProfilesGet(request)`

- **OnSuccess**: <code>[ProfileListResponse](src/models/profile-list-response.ts)</code>
- **OnError**: throws <code>[Profiles.ListProfilesProfilesGetError](src/resources/profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profiles.listProfilesProfilesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileListResponse, Profiles.ListProfilesProfilesGetError&gt;</code>, with `result.value` of type <code>[ProfileListResponse](src/models/profile-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProfileProfilesProfileIdPatch(request: Profiles.UpdateProfileProfilesProfileIdPatchRequest, options?: RequestOptions): ApiPromise&lt;ProfileView, Profiles.UpdateProfileProfilesProfileIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a browser profile's information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profiles.updateProfileProfilesProfileIdPatch({
    profileId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type ProfileView
} catch (err) {
  // TODO: Handle 'err' of type Profiles.UpdateProfileProfilesProfileIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profiles
  .updateProfileProfilesProfileIdPatch({ profileId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileView
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>profileId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ProfileUpdateRequest](src/models/profile-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profiles.updateProfileProfilesProfileIdPatch(request)`

- **OnSuccess**: <code>[ProfileView](src/models/profile-view.ts)</code>
- **OnError**: throws <code>[Profiles.UpdateProfileProfilesProfileIdPatchError](src/resources/profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profiles.updateProfileProfilesProfileIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileView, Profiles.UpdateProfileProfilesProfileIdPatchError&gt;</code>, with `result.value` of type <code>[ProfileView](src/models/profile-view.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Runs

> Source: [Runs](src/resources/runs.ts)

<details>
<summary><code>cancelRunRunsRunIdCancelPost(request: Runs.CancelRunRunsRunIdCancelPostRequest, options?: RequestOptions): ApiPromise&lt;RunSummary, Runs.CancelRunRunsRunIdCancelPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an in-flight run.

Idempotent: a run already in a terminal state (completed / failed /
cancelled) is returned as-is. Once cancelled, the gateway refuses
every subsequent `chat_completions` call from the worker — so the
project cannot be billed further regardless of whether the worker
subprocess notices the cancel itself.

The worker keeps running for at most one more bcode step
(consuming no LLM tokens because CP 409s them) and then exits when
bcode realizes the next tool call has no model behind it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runs.cancelRunRunsRunIdCancelPost({
    runId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type RunSummary
} catch (err) {
  // TODO: Handle 'err' of type Runs.CancelRunRunsRunIdCancelPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runs
  .cancelRunRunsRunIdCancelPost({ runId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>runId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runs.cancelRunRunsRunIdCancelPost(request)`

- **OnSuccess**: <code>[RunSummary](src/models/run-summary.ts)</code>
- **OnError**: throws <code>[Runs.CancelRunRunsRunIdCancelPostError](src/resources/runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runs.cancelRunRunsRunIdCancelPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunSummary, Runs.CancelRunRunsRunIdCancelPostError&gt;</code>, with `result.value` of type <code>[RunSummary](src/models/run-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createRunRunsPost(request: Runs.CreateRunRunsPostRequest, options?: RequestOptions): ApiPromise&lt;RunCreateResponse, Runs.CreateRunRunsPostError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runs.createRunRunsPost({ body: { task: "some example string" } });
  // TODO: Handle 'response' of type RunCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Runs.CreateRunRunsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runs.createRunRunsPost({ body: { task: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RunCreateRequest](src/models/run-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runs.createRunRunsPost(request)`

- **OnSuccess**: <code>[RunCreateResponse](src/models/run-create-response.ts)</code>
- **OnError**: throws <code>[Runs.CreateRunRunsPostError](src/resources/runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runs.createRunRunsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunCreateResponse, Runs.CreateRunRunsPostError&gt;</code>, with `result.value` of type <code>[RunCreateResponse](src/models/run-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRunEventsRunsRunIdEventsGet(request: Runs.GetRunEventsRunsRunIdEventsGetRequest, options?: RequestOptions): ApiPromise&lt;RunEventsResponse, Runs.GetRunEventsRunsRunIdEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paginated event read. `after` is the event id cursor — clients
doing periodic polls pass back the highest id they've seen to get only
the delta. Default 0 returns from the start.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runs.getRunEventsRunsRunIdEventsGet({
    runId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type RunEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Runs.GetRunEventsRunsRunIdEventsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runs
  .getRunEventsRunsRunIdEventsGet({ runId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunEventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>runId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 200 |
| <code>after?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>includeOutput?</code> | <code>boolean</code> | -<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runs.getRunEventsRunsRunIdEventsGet(request)`

- **OnSuccess**: <code>[RunEventsResponse](src/models/run-events-response.ts)</code>
- **OnError**: throws <code>[Runs.GetRunEventsRunsRunIdEventsGetError](src/resources/runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runs.getRunEventsRunsRunIdEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunEventsResponse, Runs.GetRunEventsRunsRunIdEventsGetError&gt;</code>, with `result.value` of type <code>[RunEventsResponse](src/models/run-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRunRunsRunIdGet(request: Runs.GetRunRunsRunIdGetRequest, options?: RequestOptions): ApiPromise&lt;RunSummary, Runs.GetRunRunsRunIdGetError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runs.getRunRunsRunIdGet({ runId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type RunSummary
} catch (err) {
  // TODO: Handle 'err' of type Runs.GetRunRunsRunIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runs
  .getRunRunsRunIdGet({ runId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>runId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runs.getRunRunsRunIdGet(request)`

- **OnSuccess**: <code>[RunSummary](src/models/run-summary.ts)</code>
- **OnError**: throws <code>[Runs.GetRunRunsRunIdGetError](src/resources/runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runs.getRunRunsRunIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunSummary, Runs.GetRunRunsRunIdGetError&gt;</code>, with `result.value` of type <code>[RunSummary](src/models/run-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRunStatusRunsRunIdStatusGet(request: Runs.GetRunStatusRunsRunIdStatusGetRequest, options?: RequestOptions): ApiPromise&lt;RunStatusResponse, Runs.GetRunStatusRunsRunIdStatusGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Minimal status poll (see RunStatusResponse). POLL rate bucket: selects
ONLY the status/project columns — a 2s poll never drags the task/result
text (TOAST reads) that GET /runs/{id} pays. Poll until terminal, then
fetch the full summary once.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runs.getRunStatusRunsRunIdStatusGet({
    runId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type RunStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Runs.GetRunStatusRunsRunIdStatusGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runs
  .getRunStatusRunsRunIdStatusGet({ runId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>runId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runs.getRunStatusRunsRunIdStatusGet(request)`

- **OnSuccess**: <code>[RunStatusResponse](src/models/run-status-response.ts)</code>
- **OnError**: throws <code>[Runs.GetRunStatusRunsRunIdStatusGetError](src/resources/runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runs.getRunStatusRunsRunIdStatusGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunStatusResponse, Runs.GetRunStatusRunsRunIdStatusGetError&gt;</code>, with `result.value` of type <code>[RunStatusResponse](src/models/run-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRunAttachmentsRunsRunIdAttachmentsGet(request: Runs.ListRunAttachmentsRunsRunIdAttachmentsGetRequest, options?: RequestOptions): ApiPromise&lt;RunAttachmentsResponse, Runs.ListRunAttachmentsRunsRunIdAttachmentsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The upload files attached to a run, for rendering attachment chips.
Ordered to match the run's attached_file_ids.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runs.listRunAttachmentsRunsRunIdAttachmentsGet({
    runId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type RunAttachmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Runs.ListRunAttachmentsRunsRunIdAttachmentsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runs
  .listRunAttachmentsRunsRunIdAttachmentsGet({ runId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunAttachmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>runId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runs.listRunAttachmentsRunsRunIdAttachmentsGet(request)`

- **OnSuccess**: <code>[RunAttachmentsResponse](src/models/run-attachments-response.ts)</code>
- **OnError**: throws <code>[Runs.ListRunAttachmentsRunsRunIdAttachmentsGetError](src/resources/runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runs.listRunAttachmentsRunsRunIdAttachmentsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunAttachmentsResponse, Runs.ListRunAttachmentsRunsRunIdAttachmentsGetError&gt;</code>, with `result.value` of type <code>[RunAttachmentsResponse](src/models/run-attachments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRunsRunsGet(request?: Runs.ListRunsRunsGetRequest, options?: RequestOptions): ApiPromise&lt;RunListResponse, Runs.ListRunsRunsGetError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runs.listRunsRunsGet();
  // TODO: Handle 'response' of type RunListResponse
} catch (err) {
  // TODO: Handle 'err' of type Runs.ListRunsRunsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runs.listRunsRunsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | Keyset cursor from a prior response. |
| <code>sessionId?</code> | <code>[Sessionid](src/models/unions/sessionid.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runs.listRunsRunsGet(request)`

- **OnSuccess**: <code>[RunListResponse](src/models/run-list-response.ts)</code>
- **OnError**: throws <code>[Runs.ListRunsRunsGetError](src/resources/runs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runs.listRunsRunsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunListResponse, Runs.ListRunsRunsGetError&gt;</code>, with `result.value` of type <code>[RunListResponse](src/models/run-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sessions

> Source: [Sessions](src/resources/sessions.ts)

<details>
<summary><code>cancelQueuedMessageSessionsSessionIdQueueMessageIdDelete(request: Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;QueuedMessage, Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a still-pending queued message; 409 once the drain has claimed it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.cancelQueuedMessageSessionsSessionIdQueueMessageIdDelete({
    sessionId: "00000000-0000-0000-0000-000000000000",
    messageId: 1,
  });
  // TODO: Handle 'response' of type QueuedMessage
} catch (err) {
  // TODO: Handle 'err' of type Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .cancelQueuedMessageSessionsSessionIdQueueMessageIdDelete({
    sessionId: "00000000-0000-0000-0000-000000000000",
    messageId: 1,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QueuedMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>messageId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.cancelQueuedMessageSessionsSessionIdQueueMessageIdDelete(request)`

- **OnSuccess**: <code>[QueuedMessage](src/models/queued-message.ts)</code>
- **OnError**: throws <code>[Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.cancelQueuedMessageSessionsSessionIdQueueMessageIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QueuedMessage, Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError&gt;</code>, with `result.value` of type <code>[QueuedMessage](src/models/queued-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSessionShareSessionsSessionIdSharePost(request: Sessions.CreateSessionShareSessionsSessionIdSharePostRequest, options?: RequestOptions): ApiPromise&lt;SessionShareInfo, Sessions.CreateSessionShareSessionsSessionIdSharePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable sharing: reactivates the session's existing share (stable token,
so a link that was toggled off keeps working when re-enabled) or creates
one on first use.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.createSessionShareSessionsSessionIdSharePost({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type SessionShareInfo
} catch (err) {
  // TODO: Handle 'err' of type Sessions.CreateSessionShareSessionsSessionIdSharePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .createSessionShareSessionsSessionIdSharePost({ sessionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionShareInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sessions.createSessionShareSessionsSessionIdSharePost(request)`

- **OnSuccess**: <code>[SessionShareInfo](src/models/session-share-info.ts)</code>
- **OnError**: throws <code>[Sessions.CreateSessionShareSessionsSessionIdSharePostError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.createSessionShareSessionsSessionIdSharePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionShareInfo, Sessions.CreateSessionShareSessionsSessionIdSharePostError&gt;</code>, with `result.value` of type <code>[SessionShareInfo](src/models/session-share-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSessionSessionsSessionIdDelete(request: Sessions.DeleteSessionSessionsSessionIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sessions.DeleteSessionSessionsSessionIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a session: it disappears from the session lists and can no longer
be opened or continued.

Soft delete (mirrors V2's `is_archived`): the runs, events and usage records
stay in place so billing and analytics keep reconciling, and ZDR purge is the
only thing that ever destroys V4 content. Idempotent — deleting twice is a
no-op 204.

An in-flight run is cancelled first, and pending queued messages are
cancelled too; otherwise the drain would dispatch a follow-up run whose
`session_archived_at` is NULL and resurrect the session. Cancel is forwarded
to CP before anything is written (and outside the queue lock, per the
enqueue path's ordering), so a CP failure (502) leaves the session visible
rather than hiding a run that is still burning credits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sessions.deleteSessionSessionsSessionIdDelete({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Sessions.DeleteSessionSessionsSessionIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .deleteSessionSessionsSessionIdDelete({ sessionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.deleteSessionSessionsSessionIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sessions.DeleteSessionSessionsSessionIdDeleteError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.deleteSessionSessionsSessionIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sessions.DeleteSessionSessionsSessionIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSessionCostSessionsSessionIdCostGet(request: Sessions.GetSessionCostSessionsSessionIdCostGetRequest, options?: RequestOptions): ApiPromise&lt;SessionCostResponse, Sessions.GetSessionCostSessionsSessionIdCostGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything this session has cost so far, split by source.

A run's `total_cost_usd` is its LLM (and web-search) charge only. Browser
time and proxy bandwidth are metered against the session's browser, which
outlives any one run — so this is the endpoint for the session's full cost.

These are recorded usage costs, not an invoice total: promotional waivers
and credits are applied downstream in billing, so a session run under a
promotion can report cost here that was never charged.

Costs keep moving after a run reports `finished`: LLM calls settle up to
about 90 seconds later, and the browser accrues time and proxy traffic
until it stops.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.getSessionCostSessionsSessionIdCostGet({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type SessionCostResponse
} catch (err) {
  // TODO: Handle 'err' of type Sessions.GetSessionCostSessionsSessionIdCostGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .getSessionCostSessionsSessionIdCostGet({ sessionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionCostResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sessions.getSessionCostSessionsSessionIdCostGet(request)`

- **OnSuccess**: <code>[SessionCostResponse](src/models/session-cost-response.ts)</code>
- **OnError**: throws <code>[Sessions.GetSessionCostSessionsSessionIdCostGetError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.getSessionCostSessionsSessionIdCostGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionCostResponse, Sessions.GetSessionCostSessionsSessionIdCostGetError&gt;</code>, with `result.value` of type <code>[SessionCostResponse](src/models/session-cost-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSessionQueueMessageSessionsSessionIdQueueMessageIdGet(request: Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest, options?: RequestOptions): ApiPromise&lt;QueuedMessage, Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read one queued message including terminal handoff states.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.getSessionQueueMessageSessionsSessionIdQueueMessageIdGet({
    sessionId: "00000000-0000-0000-0000-000000000000",
    messageId: 1,
  });
  // TODO: Handle 'response' of type QueuedMessage
} catch (err) {
  // TODO: Handle 'err' of type Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .getSessionQueueMessageSessionsSessionIdQueueMessageIdGet({
    sessionId: "00000000-0000-0000-0000-000000000000",
    messageId: 1,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QueuedMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>messageId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.getSessionQueueMessageSessionsSessionIdQueueMessageIdGet(request)`

- **OnSuccess**: <code>[QueuedMessage](src/models/queued-message.ts)</code>
- **OnError**: throws <code>[Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.getSessionQueueMessageSessionsSessionIdQueueMessageIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QueuedMessage, Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError&gt;</code>, with `result.value` of type <code>[QueuedMessage](src/models/queued-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSessionSessionsSessionIdGet(request: Sessions.GetSessionSessionsSessionIdGetRequest, options?: RequestOptions): ApiPromise&lt;SessionInfo, Sessions.GetSessionSessionsSessionIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Session detail — the same slim shape as one GET /sessions row (its
latest run). Doubles as the busy/idle poll for a conversation (POLL rate
bucket): slim columns only, indexed public_session_id lookup, never the
heavy result/token fields.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.getSessionSessionsSessionIdGet({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type SessionInfo
} catch (err) {
  // TODO: Handle 'err' of type Sessions.GetSessionSessionsSessionIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .getSessionSessionsSessionIdGet({ sessionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sessions.getSessionSessionsSessionIdGet(request)`

- **OnSuccess**: <code>[SessionInfo](src/models/session-info.ts)</code>
- **OnError**: throws <code>[Sessions.GetSessionSessionsSessionIdGetError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.getSessionSessionsSessionIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionInfo, Sessions.GetSessionSessionsSessionIdGetError&gt;</code>, with `result.value` of type <code>[SessionInfo](src/models/session-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSessionShareSessionsSessionIdShareGet(request: Sessions.GetSessionShareSessionsSessionIdShareGetRequest, options?: RequestOptions): ApiPromise&lt;ResponseGetSessionShareSessionsSessionIdShareGet, Sessions.GetSessionShareSessionsSessionIdShareGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The session's share link (active or not); null if never shared.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.getSessionShareSessionsSessionIdShareGet({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ResponseGetSessionShareSessionsSessionIdShareGet
} catch (err) {
  // TODO: Handle 'err' of type Sessions.GetSessionShareSessionsSessionIdShareGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .getSessionShareSessionsSessionIdShareGet({ sessionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseGetSessionShareSessionsSessionIdShareGet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sessions.getSessionShareSessionsSessionIdShareGet(request)`

- **OnSuccess**: <code>[ResponseGetSessionShareSessionsSessionIdShareGet](src/models/unions/response-get-session-share-sessions-session-id-share-get.ts)</code>
- **OnError**: throws <code>[Sessions.GetSessionShareSessionsSessionIdShareGetError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.getSessionShareSessionsSessionIdShareGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseGetSessionShareSessionsSessionIdShareGet, Sessions.GetSessionShareSessionsSessionIdShareGetError&gt;</code>, with `result.value` of type <code>[ResponseGetSessionShareSessionsSessionIdShareGet](src/models/unions/response-get-session-share-sessions-session-id-share-get.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSessionQueueSessionsSessionIdQueueGet(request: Sessions.ListSessionQueueSessionsSessionIdQueueGetRequest, options?: RequestOptions): ApiPromise&lt;QueueListResponse, Sessions.ListSessionQueueSessionsSessionIdQueueGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List open messages, recently delivered queued messages, and steering cutoffs.

Includes live dispatch claims so clients can restore an accepted queued
message after a refresh without briefly losing its waiting state.

Consumed QUEUE rows are returned too, capped at the most recent
_DELIVERED_QUEUE_HISTORY, plus up to _AGENCY_DELIVERED_QUEUE_HISTORY compact
Agency choice and generation receipts so inbox state survives refresh. A message absorbed mid-run is announced by a
`queued_input_injected` event carrying only its input id, so the chat has no
other source for the text to render. The cap bounds this response because
clients poll it while a run is active; a session with more delivered
follow-ups than the cap renders its oldest injected bubbles without text.

The latest consumed interrupt bridges the primary-write/read-replica gap
before its replacement run appears; clients discard it once that run is
visible. Compact per-source cutoffs preserve every historical interrupted
transcript boundary without returning every historical steering message and
its attachments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.listSessionQueueSessionsSessionIdQueueGet({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type QueueListResponse
} catch (err) {
  // TODO: Handle 'err' of type Sessions.ListSessionQueueSessionsSessionIdQueueGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .listSessionQueueSessionsSessionIdQueueGet({ sessionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QueueListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sessions.listSessionQueueSessionsSessionIdQueueGet(request)`

- **OnSuccess**: <code>[QueueListResponse](src/models/queue-list-response.ts)</code>
- **OnError**: throws <code>[Sessions.ListSessionQueueSessionsSessionIdQueueGetError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.listSessionQueueSessionsSessionIdQueueGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QueueListResponse, Sessions.ListSessionQueueSessionsSessionIdQueueGetError&gt;</code>, with `result.value` of type <code>[QueueListResponse](src/models/queue-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSessionsSessionsGet(request?: Sessions.ListSessionsSessionsGetRequest, options?: RequestOptions): ApiPromise&lt;SessionListResponse, Sessions.ListSessionsSessionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the project's V4 sessions — one row per session (its most recent
run), most-recent first.

A session is a conversation: follow-up runs reuse the same
public_session_id, so GET /api/v4/runs would list one row per RUN. This
collapses to one row per SESSION directly in Postgres with DISTINCT ON, so a
chatty session with 100 runs is still a single row (no scan amplification),
and selects only the slim columns the session list needs — never the heavy
per-run text/token/cost fields.

Keyset-paginated on the latest run's (created_at, id): pass `next_cursor`
back as `cursor` to page. Offset/COUNT was dropped — it doesn't scale on
projects with many sessions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.listSessionsSessionsGet();
  // TODO: Handle 'response' of type SessionListResponse
} catch (err) {
  // TODO: Handle 'err' of type Sessions.ListSessionsSessionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions.listSessionsSessionsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Max sessions per page (max 100).<br>**Default**: 20 |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | Keyset cursor from a prior response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.listSessionsSessionsGet(request)`

- **OnSuccess**: <code>[SessionListResponse](src/models/session-list-response.ts)</code>
- **OnError**: throws <code>[Sessions.ListSessionsSessionsGetError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.listSessionsSessionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionListResponse, Sessions.ListSessionsSessionsGetError&gt;</code>, with `result.value` of type <code>[SessionListResponse](src/models/session-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purgeSessionSessionsSessionIdPurgePost(request: Sessions.PurgeSessionSessionsSessionIdPurgePostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sessions.PurgeSessionSessionsSessionIdPurgePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purge V4 session data; return 202 while active work or uploads defer deletion.

Redacts DB records and deletes S3 objects (bcode state, workspace files,
recordings, downloads, staging uploads) for every run in the session. Same
cleanup the ZDR cron performs, but on-demand; outstanding upload grants defer physical deletion. V4
analog of the V2 POST /sessions/{id}/purge. Surfaces shared with a still-live
sibling run are deferred by the same guards the cron uses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sessions.purgeSessionSessionsSessionIdPurgePost({
    sessionId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Sessions.PurgeSessionSessionsSessionIdPurgePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .purgeSessionSessionsSessionIdPurgePost({ sessionId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.purgeSessionSessionsSessionIdPurgePost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sessions.PurgeSessionSessionsSessionIdPurgePostError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.purgeSessionSessionsSessionIdPurgePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sessions.PurgeSessionSessionsSessionIdPurgePostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queueSessionMessageSessionsSessionIdQueuePost(request: Sessions.QueueSessionMessageSessionsSessionIdQueuePostRequest, options?: RequestOptions): ApiPromise&lt;QueuedMessage, Sessions.QueueSessionMessageSessionsSessionIdQueuePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to a session. If the session is busy it waits on the queue
and runs as the next turn; if idle it drains immediately.

`interrupt=true` cancels the session's active run so this message takes effect
now instead of waiting for the current turn (no-op when the session is idle).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.queueSessionMessageSessionsSessionIdQueuePost({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type QueuedMessage
} catch (err) {
  // TODO: Handle 'err' of type Sessions.QueueSessionMessageSessionsSessionIdQueuePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .queueSessionMessageSessionsSessionIdQueuePost({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: { text: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QueuedMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>xV4QueueDeduplicate?</code> | <code>[XV4QueueDeduplicate](src/models/unions/xv4-queue-deduplicate.ts)</code> | - |
| <code>body</code> | <code>[QueueMessageRequest](src/models/queue-message-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.queueSessionMessageSessionsSessionIdQueuePost(request)`

- **OnSuccess**: <code>[QueuedMessage](src/models/queued-message.ts)</code>
- **OnError**: throws <code>[Sessions.QueueSessionMessageSessionsSessionIdQueuePostError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.queueSessionMessageSessionsSessionIdQueuePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QueuedMessage, Sessions.QueueSessionMessageSessionsSessionIdQueuePostError&gt;</code>, with `result.value` of type <code>[QueuedMessage](src/models/queued-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSessionCostCapSessionsSessionIdCostCapPatch(request: Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest, options?: RequestOptions): ApiPromise&lt;SessionCostCapResponse, Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the active run cap without starting another run.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.updateSessionCostCapSessionsSessionIdCostCapPatch({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: { maxCostUsd: 1.5 },
  });
  // TODO: Handle 'response' of type SessionCostCapResponse
} catch (err) {
  // TODO: Handle 'err' of type Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .updateSessionCostCapSessionsSessionIdCostCapPatch({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: { maxCostUsd: 1.5 },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionCostCapResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[SessionCostCapRequest](src/models/session-cost-cap-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.updateSessionCostCapSessionsSessionIdCostCapPatch(request)`

- **OnSuccess**: <code>[SessionCostCapResponse](src/models/session-cost-cap-response.ts)</code>
- **OnError**: throws <code>[Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.updateSessionCostCapSessionsSessionIdCostCapPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionCostCapResponse, Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchError&gt;</code>, with `result.value` of type <code>[SessionCostCapResponse](src/models/session-cost-cap-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSessionSessionsSessionIdPatch(request: Sessions.UpdateSessionSessionsSessionIdPatchRequest, options?: RequestOptions): ApiPromise&lt;SessionInfo, Sessions.UpdateSessionSessionsSessionIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a session.

`session_title` is denormalized onto every run in the session (the session
list reads the latest run), so a rename writes them all in one UPDATE. Null
clears the name and the UI falls back to the opening task — it does NOT
re-run title generation, which only fills rows where the title IS NULL and
so would silently overwrite the clear.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.updateSessionSessionsSessionIdPatch({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type SessionInfo
} catch (err) {
  // TODO: Handle 'err' of type Sessions.UpdateSessionSessionsSessionIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .updateSessionSessionsSessionIdPatch({ sessionId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[SessionUpdateRequest](src/models/session-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.updateSessionSessionsSessionIdPatch(request)`

- **OnSuccess**: <code>[SessionInfo](src/models/session-info.ts)</code>
- **OnError**: throws <code>[Sessions.UpdateSessionSessionsSessionIdPatchError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.updateSessionSessionsSessionIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionInfo, Sessions.UpdateSessionSessionsSessionIdPatchError&gt;</code>, with `result.value` of type <code>[SessionInfo](src/models/session-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSessionShareSessionsSessionIdSharePut(request: Sessions.UpdateSessionShareSessionsSessionIdSharePutRequest, options?: RequestOptions): ApiPromise&lt;SessionShareInfo, Sessions.UpdateSessionShareSessionsSessionIdSharePutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Toggle the session's share link on/off.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessions.updateSessionShareSessionsSessionIdSharePut({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: { isActive: true },
  });
  // TODO: Handle 'response' of type SessionShareInfo
} catch (err) {
  // TODO: Handle 'err' of type Sessions.UpdateSessionShareSessionsSessionIdSharePutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessions
  .updateSessionShareSessionsSessionIdSharePut({
    sessionId: "00000000-0000-0000-0000-000000000000",
    body: { isActive: true },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionShareInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[SessionShareUpdateRequest](src/models/session-share-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessions.updateSessionShareSessionsSessionIdSharePut(request)`

- **OnSuccess**: <code>[SessionShareInfo](src/models/session-share-info.ts)</code>
- **OnError**: throws <code>[Sessions.UpdateSessionShareSessionsSessionIdSharePutError](src/resources/sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessions.updateSessionShareSessionsSessionIdSharePut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionShareInfo, Sessions.UpdateSessionShareSessionsSessionIdSharePutError&gt;</code>, with `result.value` of type <code>[SessionShareInfo](src/models/session-share-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Wallets

> Source: [Wallets](src/resources/wallets.ts)

<details>
<summary><code>getStripeLinkStatusStripeLinkGet(options?: RequestOptions): ApiPromise&lt;StripeLinkStatusResponse, Wallets.GetStripeLinkStatusStripeLinkGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The project's active Stripe Link wallet connection, if any.

Read-only: connecting happens in the cloud UI. A run opts into paying with
it by passing `connection_id` as RunCreateRequest.stripe_link_connection_id,
which is validated again there against this same project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallets.getStripeLinkStatusStripeLinkGet();
  // TODO: Handle 'response' of type StripeLinkStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Wallets.GetStripeLinkStatusStripeLinkGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wallets.getStripeLinkStatusStripeLinkGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StripeLinkStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wallets.getStripeLinkStatusStripeLinkGet()`

- **OnSuccess**: <code>[StripeLinkStatusResponse](src/models/stripe-link-status-response.ts)</code>
- **OnError**: throws <code>[Wallets.GetStripeLinkStatusStripeLinkGetError](src/resources/wallets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wallets.getStripeLinkStatusStripeLinkGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StripeLinkStatusResponse, Wallets.GetStripeLinkStatusStripeLinkGetError&gt;</code>, with `result.value` of type <code>[StripeLinkStatusResponse](src/models/stripe-link-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAgentcardWalletsAgentcardWalletsGet(options?: RequestOptions): ApiPromise&lt;AgentCardWalletListResponse, Wallets.ListAgentcardWalletsAgentcardWalletsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The project's active AgentCard wallets, newest first.

Read-only: funding is admin-only during the beta. The UI uses this to offer
a wallet on the composer, which is how a run opts into spending — the id
then rides RunCreateRequest.agentcard_wallet_id and is validated again there
against this same project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wallets.listAgentcardWalletsAgentcardWalletsGet();
  // TODO: Handle 'response' of type AgentCardWalletListResponse
} catch (err) {
  // TODO: Handle 'err' of type Wallets.ListAgentcardWalletsAgentcardWalletsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wallets.listAgentcardWalletsAgentcardWalletsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentCardWalletListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wallets.listAgentcardWalletsAgentcardWalletsGet()`

- **OnSuccess**: <code>[AgentCardWalletListResponse](src/models/agent-card-wallet-list-response.ts)</code>
- **OnError**: throws <code>[Wallets.ListAgentcardWalletsAgentcardWalletsGetError](src/resources/wallets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wallets.listAgentcardWalletsAgentcardWalletsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentCardWalletListResponse, Wallets.ListAgentcardWalletsAgentcardWalletsGetError&gt;</code>, with `result.value` of type <code>[AgentCardWalletListResponse](src/models/agent-card-wallet-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/resources/workspaces.ts)

<details>
<summary><code>createWorkspaceWorkspacesPost(request: Workspaces.CreateWorkspaceWorkspacesPostRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceInfo, Workspaces.CreateWorkspaceWorkspacesPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mint an empty workspace. Lets callers upload input files BEFORE the
first run exists; pass the id as workspaceId on POST /runs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.createWorkspaceWorkspacesPost({ body: {} });
  // TODO: Handle 'response' of type WorkspaceInfo
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.CreateWorkspaceWorkspacesPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.createWorkspaceWorkspacesPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WorkspaceCreateRequest](src/models/workspace-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.createWorkspaceWorkspacesPost(request)`

- **OnSuccess**: <code>[WorkspaceInfo](src/models/workspace-info.ts)</code>
- **OnError**: throws <code>[Workspaces.CreateWorkspaceWorkspacesPostError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.createWorkspaceWorkspacesPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceInfo, Workspaces.CreateWorkspaceWorkspacesPostError&gt;</code>, with `result.value` of type <code>[WorkspaceInfo](src/models/workspace-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete(request: Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one exact path from a workspace and remove matching upload metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.workspaces.deleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete({
    workspaceId: "00000000-0000-0000-0000-000000000000",
    path: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .deleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete({
    workspaceId: "00000000-0000-0000-0000-000000000000",
    path: "some example string",
  })
  .asApiResult();
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
| <code>workspaceId</code> | <code>string</code> | - |
| <code>path</code> | <code>string</code> | Relative file path to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.deleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.deleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWorkspaceWorkspacesWorkspaceIdDelete(request: Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a workspace. Idempotent for missing, archived, and foreign ids.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.workspaces.deleteWorkspaceWorkspacesWorkspaceIdDelete({
    workspaceId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .deleteWorkspaceWorkspacesWorkspaceIdDelete({ workspaceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>workspaceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.deleteWorkspaceWorkspacesWorkspaceIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.deleteWorkspaceWorkspacesWorkspaceIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspaceSizeWorkspacesWorkspaceIdSizeGet(request: Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceSizeInfo, Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return current storage usage and the plan-specific workspace quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.getWorkspaceSizeWorkspacesWorkspaceIdSizeGet({
    workspaceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type WorkspaceSizeInfo
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .getWorkspaceSizeWorkspacesWorkspaceIdSizeGet({ workspaceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceSizeInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.getWorkspaceSizeWorkspacesWorkspaceIdSizeGet(request)`

- **OnSuccess**: <code>[WorkspaceSizeInfo](src/models/workspace-size-info.ts)</code>
- **OnError**: throws <code>[Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.getWorkspaceSizeWorkspacesWorkspaceIdSizeGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceSizeInfo, Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError&gt;</code>, with `result.value` of type <code>[WorkspaceSizeInfo](src/models/workspace-size-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspaceWorkspacesWorkspaceIdGet(request: Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceInfo, Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.getWorkspaceWorkspacesWorkspaceIdGet({
    workspaceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type WorkspaceInfo
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .getWorkspaceWorkspacesWorkspaceIdGet({ workspaceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.getWorkspaceWorkspacesWorkspaceIdGet(request)`

- **OnSuccess**: <code>[WorkspaceInfo](src/models/workspace-info.ts)</code>
- **OnError**: throws <code>[Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.getWorkspaceWorkspacesWorkspaceIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceInfo, Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetError&gt;</code>, with `result.value` of type <code>[WorkspaceInfo](src/models/workspace-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkspaceFilesWorkspacesWorkspaceIdFilesGet(request: Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceFileListResponse, Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files the agent has produced for this workspace, paginated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.listWorkspaceFilesWorkspacesWorkspaceIdFilesGet({
    workspaceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type WorkspaceFileListResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .listWorkspaceFilesWorkspacesWorkspaceIdFilesGet({ workspaceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceFileListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>string</code> | - |
| <code>prefix?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | - |
| <code>includeUrls?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>contentDisposition?</code> | <code>[Contentdisposition1](src/models/unions/contentdisposition1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.listWorkspaceFilesWorkspacesWorkspaceIdFilesGet(request)`

- **OnSuccess**: <code>[WorkspaceFileListResponse](src/models/workspace-file-list-response.ts)</code>
- **OnError**: throws <code>[Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.listWorkspaceFilesWorkspacesWorkspaceIdFilesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceFileListResponse, Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError&gt;</code>, with `result.value` of type <code>[WorkspaceFileListResponse](src/models/workspace-file-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWorkspaceWorkspacesWorkspaceIdPatch(request: Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceInfo, Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a workspace. Explicit null clears the name; omission is a no-op.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.updateWorkspaceWorkspacesWorkspaceIdPatch({
    workspaceId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type WorkspaceInfo
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .updateWorkspaceWorkspacesWorkspaceIdPatch({
    workspaceId: "00000000-0000-0000-0000-000000000000",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[WorkspaceUpdateRequest](src/models/workspace-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.updateWorkspaceWorkspacesWorkspaceIdPatch(request)`

- **OnSuccess**: <code>[WorkspaceInfo](src/models/workspace-info.ts)</code>
- **OnError**: throws <code>[Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.updateWorkspaceWorkspacesWorkspaceIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceInfo, Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchError&gt;</code>, with `result.value` of type <code>[WorkspaceInfo](src/models/workspace-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost(request: Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceFileUploadResponse, Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Presigned PUT URLs for input files, placed under ``uploads/`` in the
workspace. The agent pulls them in at the start of every run. URLs are
pinned to the declared Content-Type and exact Content-Length.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.uploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost({
    workspaceId: "00000000-0000-0000-0000-000000000000",
    body: { files: [{ name: "some example string", size: 1 }] },
  });
  // TODO: Handle 'response' of type WorkspaceFileUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .uploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost({
    workspaceId: "00000000-0000-0000-0000-000000000000",
    body: { files: [{ name: "some example string", size: 1 }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceFileUploadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[WorkspaceFileUploadRequest](src/models/workspace-file-upload-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.uploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost(request)`

- **OnSuccess**: <code>[WorkspaceFileUploadResponse](src/models/workspace-file-upload-response.ts)</code>
- **OnError**: throws <code>[Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.uploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceFileUploadResponse, Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError&gt;</code>, with `result.value` of type <code>[WorkspaceFileUploadResponse](src/models/workspace-file-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BrowserUseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

