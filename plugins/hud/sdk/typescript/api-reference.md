# Reference

> Source: [HudClient](src/client.ts)

## Builds

> Source: [Builds](src/resources/builds.ts)

<details>
<summary><code>buildStatusV2BuildsBuildIdStatusGet(request: Builds.BuildStatusV2BuildsBuildIdStatusGetRequest, options?: RequestOptions): ApiPromise&lt;BuildResponse, Builds.BuildStatusV2BuildsBuildIdStatusGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a build's current status and details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.buildStatusV2BuildsBuildIdStatusGet({
    buildId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BuildResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.BuildStatusV2BuildsBuildIdStatusGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .buildStatusV2BuildsBuildIdStatusGet({ buildId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buildId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.buildStatusV2BuildsBuildIdStatusGet(request)`

- **OnSuccess**: <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: throws <code>[Builds.BuildStatusV2BuildsBuildIdStatusGetError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.buildStatusV2BuildsBuildIdStatusGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildResponse, Builds.BuildStatusV2BuildsBuildIdStatusGetError&gt;</code>, with `result.value` of type <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelBuildV2BuildsBuildIdCancelPost(request: Builds.CancelBuildV2BuildsBuildIdCancelPostRequest, options?: RequestOptions): ApiPromise&lt;BuildResponse, Builds.CancelBuildV2BuildsBuildIdCancelPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an in-progress build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.cancelBuildV2BuildsBuildIdCancelPost({
    buildId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BuildResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.CancelBuildV2BuildsBuildIdCancelPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .cancelBuildV2BuildsBuildIdCancelPost({ buildId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buildId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.cancelBuildV2BuildsBuildIdCancelPost(request)`

- **OnSuccess**: <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: throws <code>[Builds.CancelBuildV2BuildsBuildIdCancelPostError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.cancelBuildV2BuildsBuildIdCancelPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildResponse, Builds.CancelBuildV2BuildsBuildIdCancelPostError&gt;</code>, with `result.value` of type <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadBuildSourceV2BuildsBuildIdSourceDownloadGet(request: Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest, options?: RequestOptions): ApiPromise&lt;BuildSourceDownloadResponse, Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a short-lived presigned download URL for a file in a build's source tree.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.downloadBuildSourceV2BuildsBuildIdSourceDownloadGet({
    buildId: "00000000-0000-0000-0000-000000000000",
    path: "some example string",
  });
  // TODO: Handle 'response' of type BuildSourceDownloadResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .downloadBuildSourceV2BuildsBuildIdSourceDownloadGet({
    buildId: "00000000-0000-0000-0000-000000000000",
    path: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildSourceDownloadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buildId</code> | <code>string</code> | - |
| <code>path</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.downloadBuildSourceV2BuildsBuildIdSourceDownloadGet(request)`

- **OnSuccess**: <code>[BuildSourceDownloadResponse](src/models/build-source-download-response.ts)</code>
- **OnError**: throws <code>[Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.downloadBuildSourceV2BuildsBuildIdSourceDownloadGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildSourceDownloadResponse, Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError&gt;</code>, with `result.value` of type <code>[BuildSourceDownloadResponse](src/models/build-source-download-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet(request: Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream a build's captured workspace as a zip archive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.downloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet({
    buildId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .downloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet({
    buildId: "00000000-0000-0000-0000-000000000000",
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
| <code>buildId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.downloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.downloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuildSourceV2BuildsBuildIdSourceGet(request: Builds.ListBuildSourceV2BuildsBuildIdSourceGetRequest, options?: RequestOptions): ApiPromise&lt;BuildSourceListResponse, Builds.ListBuildSourceV2BuildsBuildIdSourceGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files and directories at a path in a build's expanded source tree.

Readers outside the owning team see only the latest build of a public environment
whose owner published its source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.listBuildSourceV2BuildsBuildIdSourceGet({
    buildId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BuildSourceListResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.ListBuildSourceV2BuildsBuildIdSourceGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .listBuildSourceV2BuildsBuildIdSourceGet({ buildId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildSourceListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buildId</code> | <code>string</code> | - |
| <code>path?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.listBuildSourceV2BuildsBuildIdSourceGet(request)`

- **OnSuccess**: <code>[BuildSourceListResponse](src/models/build-source-list-response.ts)</code>
- **OnError**: throws <code>[Builds.ListBuildSourceV2BuildsBuildIdSourceGetError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.listBuildSourceV2BuildsBuildIdSourceGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildSourceListResponse, Builds.ListBuildSourceV2BuildsBuildIdSourceGetError&gt;</code>, with `result.value` of type <code>[BuildSourceListResponse](src/models/build-source-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuildWorkspaceV2BuildsBuildIdWorkspaceGet(request: Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest, options?: RequestOptions): ApiPromise&lt;BuildWorkspaceListResponse, Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files and directories at a path in a build's captured workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.listBuildWorkspaceV2BuildsBuildIdWorkspaceGet({
    buildId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BuildWorkspaceListResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .listBuildWorkspaceV2BuildsBuildIdWorkspaceGet({ buildId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildWorkspaceListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buildId</code> | <code>string</code> | - |
| <code>path?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>[Cursor](src/models/unions/cursor.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.listBuildWorkspaceV2BuildsBuildIdWorkspaceGet(request)`

- **OnSuccess**: <code>[BuildWorkspaceListResponse](src/models/build-workspace-list-response.ts)</code>
- **OnError**: throws <code>[Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.listBuildWorkspaceV2BuildsBuildIdWorkspaceGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildWorkspaceListResponse, Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError&gt;</code>, with `result.value` of type <code>[BuildWorkspaceListResponse](src/models/build-workspace-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuildsV2BuildsGet(request: Builds.ListBuildsV2BuildsGetRequest, options?: RequestOptions): ApiPromise&lt;BuildListResponse, Builds.ListBuildsV2BuildsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List builds for an environment registry, newest first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.listBuildsV2BuildsGet({
    registryId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BuildListResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.ListBuildsV2BuildsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .listBuildsV2BuildsGet({ registryId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registryId</code> | <code>string</code> | Filter builds to this registry |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.listBuildsV2BuildsGet(request)`

- **OnSuccess**: <code>[BuildListResponse](src/models/build-list-response.ts)</code>
- **OnError**: throws <code>[Builds.ListBuildsV2BuildsGetError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.listBuildsV2BuildsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildListResponse, Builds.ListBuildsV2BuildsGetError&gt;</code>, with `result.value` of type <code>[BuildListResponse](src/models/build-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lookupBuildsV2BuildsLookupPost(request: Builds.LookupBuildsV2BuildsLookupPostRequest, options?: RequestOptions): ApiPromise&lt;BuildLookupResponse, Builds.LookupBuildsV2BuildsLookupPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find the team's builds whose source has one of the given content digests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.lookupBuildsV2BuildsLookupPost({
    body: { contentDigests: ["some example string"] },
  });
  // TODO: Handle 'response' of type BuildLookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.LookupBuildsV2BuildsLookupPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .lookupBuildsV2BuildsLookupPost({ body: { contentDigests: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildLookupResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BuildLookupRequest](src/models/build-lookup-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.lookupBuildsV2BuildsLookupPost(request)`

- **OnSuccess**: <code>[BuildLookupResponse](src/models/build-lookup-response.ts)</code>
- **OnError**: throws <code>[Builds.LookupBuildsV2BuildsLookupPostError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.lookupBuildsV2BuildsLookupPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildLookupResponse, Builds.LookupBuildsV2BuildsLookupPostError&gt;</code>, with `result.value` of type <code>[BuildLookupResponse](src/models/build-lookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewBuildSourceV2BuildsBuildIdSourcePreviewGet(request: Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest, options?: RequestOptions): ApiPromise&lt;BuildSourcePreviewResponse, Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the text content of a file in a build's source tree (1 MiB cap, text only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.previewBuildSourceV2BuildsBuildIdSourcePreviewGet({
    buildId: "00000000-0000-0000-0000-000000000000",
    path: "some example string",
  });
  // TODO: Handle 'response' of type BuildSourcePreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .previewBuildSourceV2BuildsBuildIdSourcePreviewGet({
    buildId: "00000000-0000-0000-0000-000000000000",
    path: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildSourcePreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buildId</code> | <code>string</code> | - |
| <code>path</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.previewBuildSourceV2BuildsBuildIdSourcePreviewGet(request)`

- **OnSuccess**: <code>[BuildSourcePreviewResponse](src/models/build-source-preview-response.ts)</code>
- **OnError**: throws <code>[Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.previewBuildSourceV2BuildsBuildIdSourcePreviewGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildSourcePreviewResponse, Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError&gt;</code>, with `result.value` of type <code>[BuildSourcePreviewResponse](src/models/build-source-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet(request: Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest, options?: RequestOptions): ApiPromise&lt;BuildSourcePreviewResponse, Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the text content of a captured workspace file (1 MiB cap, text only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.previewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet({
    buildId: "00000000-0000-0000-0000-000000000000",
    path: "some example string",
  });
  // TODO: Handle 'response' of type BuildSourcePreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .previewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet({
    buildId: "00000000-0000-0000-0000-000000000000",
    path: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildSourcePreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buildId</code> | <code>string</code> | - |
| <code>path</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.previewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet(request)`

- **OnSuccess**: <code>[BuildSourcePreviewResponse](src/models/build-source-preview-response.ts)</code>
- **OnError**: throws <code>[Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.previewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildSourcePreviewResponse, Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError&gt;</code>, with `result.value` of type <code>[BuildSourcePreviewResponse](src/models/build-source-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerBuildSourceV2BuildsRegisterPost(request: Builds.RegisterBuildSourceV2BuildsRegisterPostRequest, options?: RequestOptions): ApiPromise&lt;BuildRegisterResponse, Builds.RegisterBuildSourceV2BuildsRegisterPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record an uploaded build context as an unbuilt build of an environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.registerBuildSourceV2BuildsRegisterPost({
    body: { buildId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type BuildRegisterResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.RegisterBuildSourceV2BuildsRegisterPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .registerBuildSourceV2BuildsRegisterPost({ body: { buildId: "00000000-0000-0000-0000-000000000000" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildRegisterResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BuildRegisterRequest](src/models/build-register-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.registerBuildSourceV2BuildsRegisterPost(request)`

- **OnSuccess**: <code>[BuildRegisterResponse](src/models/build-register-response.ts)</code>
- **OnError**: throws <code>[Builds.RegisterBuildSourceV2BuildsRegisterPostError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.registerBuildSourceV2BuildsRegisterPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildRegisterResponse, Builds.RegisterBuildSourceV2BuildsRegisterPostError&gt;</code>, with `result.value` of type <code>[BuildRegisterResponse](src/models/build-register-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reindexBuildSourceV2BuildsBuildIdSourceReindexPost(request: Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request a new source index after an indexing failure. Requires build edit access.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.builds.reindexBuildSourceV2BuildsBuildIdSourceReindexPost({
    buildId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .reindexBuildSourceV2BuildsBuildIdSourceReindexPost({ buildId: "00000000-0000-0000-0000-000000000000" })
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
| <code>buildId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.reindexBuildSourceV2BuildsBuildIdSourceReindexPost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.reindexBuildSourceV2BuildsBuildIdSourceReindexPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setLatestBuildV2BuildsBuildIdSetLatestPost(request: Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostRequest, options?: RequestOptions): ApiPromise&lt;BuildResponse, Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pin a successful build as its registry's latest build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.setLatestBuildV2BuildsBuildIdSetLatestPost({
    buildId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BuildResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .setLatestBuildV2BuildsBuildIdSetLatestPost({ buildId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>buildId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.setLatestBuildV2BuildsBuildIdSetLatestPost(request)`

- **OnSuccess**: <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: throws <code>[Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.setLatestBuildV2BuildsBuildIdSetLatestPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildResponse, Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostError&gt;</code>, with `result.value` of type <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerBuildV2BuildsTriggerDirectPost(request: Builds.TriggerBuildV2BuildsTriggerDirectPostRequest, options?: RequestOptions): ApiPromise&lt;BuildResponse, Builds.TriggerBuildV2BuildsTriggerDirectPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an environment build from a previously uploaded build context.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.triggerBuildV2BuildsTriggerDirectPost({ body: {} });
  // TODO: Handle 'response' of type BuildResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.TriggerBuildV2BuildsTriggerDirectPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds.triggerBuildV2BuildsTriggerDirectPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BuildTriggerRequest](src/models/build-trigger-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.triggerBuildV2BuildsTriggerDirectPost(request)`

- **OnSuccess**: <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: throws <code>[Builds.TriggerBuildV2BuildsTriggerDirectPostError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.triggerBuildV2BuildsTriggerDirectPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildResponse, Builds.TriggerBuildV2BuildsTriggerDirectPostError&gt;</code>, with `result.value` of type <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerBuildV2BuildsTriggerPost(request: Builds.TriggerBuildV2BuildsTriggerPostRequest, options?: RequestOptions): ApiPromise&lt;BuildResponse, Builds.TriggerBuildV2BuildsTriggerPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an environment build from a previously uploaded build context.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.triggerBuildV2BuildsTriggerPost({ body: {} });
  // TODO: Handle 'response' of type BuildResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.TriggerBuildV2BuildsTriggerPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds.triggerBuildV2BuildsTriggerPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BuildTriggerRequest](src/models/build-trigger-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.triggerBuildV2BuildsTriggerPost(request)`

- **OnSuccess**: <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: throws <code>[Builds.TriggerBuildV2BuildsTriggerPostError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.triggerBuildV2BuildsTriggerPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildResponse, Builds.TriggerBuildV2BuildsTriggerPostError&gt;</code>, with `result.value` of type <code>[BuildResponse](src/models/build-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadUrlV2BuildsUploadUrlPost(options?: RequestOptions): ApiPromise&lt;BuildUploadUrlResponse, Builds.UploadUrlV2BuildsUploadUrlPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a presigned S3 URL for uploading a build context, with a new build id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.builds.uploadUrlV2BuildsUploadUrlPost();
  // TODO: Handle 'response' of type BuildUploadUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type Builds.UploadUrlV2BuildsUploadUrlPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds.uploadUrlV2BuildsUploadUrlPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildUploadUrlResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.uploadUrlV2BuildsUploadUrlPost()`

- **OnSuccess**: <code>[BuildUploadUrlResponse](src/models/build-upload-url-response.ts)</code>
- **OnError**: throws <code>[Builds.UploadUrlV2BuildsUploadUrlPostError](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.uploadUrlV2BuildsUploadUrlPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildUploadUrlResponse, Builds.UploadUrlV2BuildsUploadUrlPostError&gt;</code>, with `result.value` of type <code>[BuildUploadUrlResponse](src/models/build-upload-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ByokCredentials

> Source: [ByokCredentials](src/resources/byok-credentials.ts)

<details>
<summary><code>createByokCredentialV2ByokCredentialsPost(request: ByokCredentials.CreateByokCredentialV2ByokCredentialsPostRequest, options?: RequestOptions): ApiPromise&lt;ByokCredentialItem, ByokCredentials.CreateByokCredentialV2ByokCredentialsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or replace a provider credential for one ownership scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.byokCredentials.createByokCredentialV2ByokCredentialsPost({
    body: { providerId: 1, scope: Scope.Member, value: "some example string" },
  });
  // TODO: Handle 'response' of type ByokCredentialItem
} catch (err) {
  // TODO: Handle 'err' of type ByokCredentials.CreateByokCredentialV2ByokCredentialsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.byokCredentials
  .createByokCredentialV2ByokCredentialsPost({
    body: { providerId: 1, scope: Scope.Member, value: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ByokCredentialItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ByokCredentialCreateRequest](src/models/byok-credential-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.byokCredentials.createByokCredentialV2ByokCredentialsPost(request)`

- **OnSuccess**: <code>[ByokCredentialItem](src/models/byok-credential-item.ts)</code>
- **OnError**: throws <code>[ByokCredentials.CreateByokCredentialV2ByokCredentialsPostError](src/resources/byok-credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.byokCredentials.createByokCredentialV2ByokCredentialsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ByokCredentialItem, ByokCredentials.CreateByokCredentialV2ByokCredentialsPostError&gt;</code>, with `result.value` of type <code>[ByokCredentialItem](src/models/byok-credential-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteByokCredentialV2ByokCredentialsCredentialIdDelete(request: ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable a BYOK credential and erase its encrypted value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.byokCredentials.deleteByokCredentialV2ByokCredentialsCredentialIdDelete({
    credentialId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.byokCredentials
  .deleteByokCredentialV2ByokCredentialsCredentialIdDelete({
    credentialId: "00000000-0000-0000-0000-000000000000",
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
| <code>credentialId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.byokCredentials.deleteByokCredentialV2ByokCredentialsCredentialIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError](src/resources/byok-credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.byokCredentials.deleteByokCredentialV2ByokCredentialsCredentialIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listByokCredentialsV2ByokCredentialsGet(options?: RequestOptions): ApiPromise&lt;ByokCredentialsListResponse, ByokCredentials.ListByokCredentialsV2ByokCredentialsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller's personal and team BYOK credentials with masked values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.byokCredentials.listByokCredentialsV2ByokCredentialsGet();
  // TODO: Handle 'response' of type ByokCredentialsListResponse
} catch (err) {
  // TODO: Handle 'err' of type ByokCredentials.ListByokCredentialsV2ByokCredentialsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.byokCredentials.listByokCredentialsV2ByokCredentialsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ByokCredentialsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.byokCredentials.listByokCredentialsV2ByokCredentialsGet()`

- **OnSuccess**: <code>[ByokCredentialsListResponse](src/models/byok-credentials-list-response.ts)</code>
- **OnError**: throws <code>[ByokCredentials.ListByokCredentialsV2ByokCredentialsGetError](src/resources/byok-credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.byokCredentials.listByokCredentialsV2ByokCredentialsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ByokCredentialsListResponse, ByokCredentials.ListByokCredentialsV2ByokCredentialsGetError&gt;</code>, with `result.value` of type <code>[ByokCredentialsListResponse](src/models/byok-credentials-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateByokCredentialV2ByokCredentialsCredentialIdPatch(request: ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest, options?: RequestOptions): ApiPromise&lt;ByokCredentialItem, ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rotate a BYOK credential without exposing its plaintext value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.byokCredentials.updateByokCredentialV2ByokCredentialsCredentialIdPatch({
    credentialId: "00000000-0000-0000-0000-000000000000",
    body: { value: "some example string" },
  });
  // TODO: Handle 'response' of type ByokCredentialItem
} catch (err) {
  // TODO: Handle 'err' of type ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.byokCredentials
  .updateByokCredentialV2ByokCredentialsCredentialIdPatch({
    credentialId: "00000000-0000-0000-0000-000000000000",
    body: { value: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ByokCredentialItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>credentialId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ByokCredentialUpdateRequest](src/models/byok-credential-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.byokCredentials.updateByokCredentialV2ByokCredentialsCredentialIdPatch(request)`

- **OnSuccess**: <code>[ByokCredentialItem](src/models/byok-credential-item.ts)</code>
- **OnError**: throws <code>[ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError](src/resources/byok-credentials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.byokCredentials.updateByokCredentialV2ByokCredentialsCredentialIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ByokCredentialItem, ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError&gt;</code>, with `result.value` of type <code>[ByokCredentialItem](src/models/byok-credential-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Checks

> Source: [Checks](src/resources/checks.ts)

<details>
<summary><code>createTeamQcPipelineV2ChecksPipelinesPost(request: Checks.CreateTeamQcPipelineV2ChecksPipelinesPostRequest, options?: RequestOptions): ApiPromise&lt;QcPipelineRegistrationResponse, Checks.CreateTeamQcPipelineV2ChecksPipelinesPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a team environment scenario as a private DataVendor QC pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checks.createTeamQcPipelineV2ChecksPipelinesPost({
    body: {
      assetType: "some example string",
      key: "some example string",
      label: "some example string",
      registryId: "00000000-0000-0000-0000-000000000000",
      scenarioName: "some example string",
    },
  });
  // TODO: Handle 'response' of type QcPipelineRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type Checks.CreateTeamQcPipelineV2ChecksPipelinesPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checks
  .createTeamQcPipelineV2ChecksPipelinesPost({
    body: {
      assetType: "some example string",
      key: "some example string",
      label: "some example string",
      registryId: "00000000-0000-0000-0000-000000000000",
      scenarioName: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QcPipelineRegistrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QcPipelineCreateRequest](src/models/qc-pipeline-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checks.createTeamQcPipelineV2ChecksPipelinesPost(request)`

- **OnSuccess**: <code>[QcPipelineRegistrationResponse](src/models/qc-pipeline-registration-response.ts)</code>
- **OnError**: throws <code>[Checks.CreateTeamQcPipelineV2ChecksPipelinesPostError](src/resources/checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checks.createTeamQcPipelineV2ChecksPipelinesPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QcPipelineRegistrationResponse, Checks.CreateTeamQcPipelineV2ChecksPipelinesPostError&gt;</code>, with `result.value` of type <code>[QcPipelineRegistrationResponse](src/models/qc-pipeline-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPlatformCheckRunsV2ChecksRunsGet(request: Checks.ListPlatformCheckRunsV2ChecksRunsGetRequest, options?: RequestOptions): ApiPromise&lt;CheckRunResponse[], Checks.ListPlatformCheckRunsV2ChecksRunsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List recent check attempts for one authorized resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checks.listPlatformCheckRunsV2ChecksRunsGet({
    subjectType: CheckSubjectType.Environment,
    subjectId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CheckRunResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Checks.ListPlatformCheckRunsV2ChecksRunsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checks
  .listPlatformCheckRunsV2ChecksRunsGet({
    subjectType: CheckSubjectType.Environment,
    subjectId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckRunResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subjectType</code> | <code>[CheckSubjectType](src/models/check-subject-type.ts)</code> | - |
| <code>subjectId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checks.listPlatformCheckRunsV2ChecksRunsGet(request)`

- **OnSuccess**: <code>[CheckRunResponse](src/models/check-run-response.ts)[]</code>
- **OnError**: throws <code>[Checks.ListPlatformCheckRunsV2ChecksRunsGetError](src/resources/checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checks.listPlatformCheckRunsV2ChecksRunsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckRunResponse[], Checks.ListPlatformCheckRunsV2ChecksRunsGetError&gt;</code>, with `result.value` of type <code>[CheckRunResponse](src/models/check-run-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPlatformChecksV2ChecksGet(request?: Checks.ListPlatformChecksV2ChecksGetRequest, options?: RequestOptions): ApiPromise&lt;CheckDefinitionResponse[], Checks.ListPlatformChecksV2ChecksGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List available checks and their supported resource types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checks.listPlatformChecksV2ChecksGet();
  // TODO: Handle 'response' of type CheckDefinitionResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Checks.ListPlatformChecksV2ChecksGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checks.listPlatformChecksV2ChecksGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckDefinitionResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subjectType?</code> | <code>[SubjectType](src/models/unions/subject-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checks.listPlatformChecksV2ChecksGet(request)`

- **OnSuccess**: <code>[CheckDefinitionResponse](src/models/check-definition-response.ts)[]</code>
- **OnError**: throws <code>[Checks.ListPlatformChecksV2ChecksGetError](src/resources/checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checks.listPlatformChecksV2ChecksGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckDefinitionResponse[], Checks.ListPlatformChecksV2ChecksGetError&gt;</code>, with `result.value` of type <code>[CheckDefinitionResponse](src/models/check-definition-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTeamQcPipelinesV2ChecksPipelinesGet(options?: RequestOptions): ApiPromise&lt;QcPipelineRegistrationResponse[], Checks.ListTeamQcPipelinesV2ChecksPipelinesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List QC pipelines registered by the caller's team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checks.listTeamQcPipelinesV2ChecksPipelinesGet();
  // TODO: Handle 'response' of type QcPipelineRegistrationResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Checks.ListTeamQcPipelinesV2ChecksPipelinesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checks.listTeamQcPipelinesV2ChecksPipelinesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QcPipelineRegistrationResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checks.listTeamQcPipelinesV2ChecksPipelinesGet()`

- **OnSuccess**: <code>[QcPipelineRegistrationResponse](src/models/qc-pipeline-registration-response.ts)[]</code>
- **OnError**: throws <code>[Checks.ListTeamQcPipelinesV2ChecksPipelinesGetError](src/resources/checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checks.listTeamQcPipelinesV2ChecksPipelinesGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QcPipelineRegistrationResponse[], Checks.ListTeamQcPipelinesV2ChecksPipelinesGetError&gt;</code>, with `result.value` of type <code>[QcPipelineRegistrationResponse](src/models/qc-pipeline-registration-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runPlatformCheckV2ChecksCheckKeyRunsPost(request: Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostRequest, options?: RequestOptions): ApiPromise&lt;CheckRunResponse, Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run one check against an authorized resource snapshot.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checks.runPlatformCheckV2ChecksCheckKeyRunsPost({
    checkKey: "some example string",
    body: { subjectType: CheckSubjectType.Environment, subjectId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type CheckRunResponse
} catch (err) {
  // TODO: Handle 'err' of type Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checks
  .runPlatformCheckV2ChecksCheckKeyRunsPost({
    checkKey: "some example string",
    body: { subjectType: CheckSubjectType.Environment, subjectId: "00000000-0000-0000-0000-000000000000" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckRunResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>checkKey</code> | <code>string</code> | - |
| <code>body</code> | <code>[CheckRunRequest](src/models/check-run-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checks.runPlatformCheckV2ChecksCheckKeyRunsPost(request)`

- **OnSuccess**: <code>[CheckRunResponse](src/models/check-run-response.ts)</code>
- **OnError**: throws <code>[Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostError](src/resources/checks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.checks.runPlatformCheckV2ChecksCheckKeyRunsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckRunResponse, Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostError&gt;</code>, with `result.value` of type <code>[CheckRunResponse](src/models/check-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Completions

> Source: [Completions](src/resources/completions.ts)

<details>
<summary><code>postCompletionV2CompletionsPost(request: Completions.PostCompletionV2CompletionsPostRequest, options?: RequestOptions): ApiPromise&lt;CompletionResponse, Completions.PostCompletionV2CompletionsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One-shot chat completion proxied to the inference gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.completions.postCompletionV2CompletionsPost({
    body: {
      model: "some example string",
      messages: [{ role: "some example string", content: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type CompletionResponse
} catch (err) {
  // TODO: Handle 'err' of type Completions.PostCompletionV2CompletionsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.completions
  .postCompletionV2CompletionsPost({
    body: {
      model: "some example string",
      messages: [{ role: "some example string", content: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompletionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompletionRequest](src/models/completion-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.completions.postCompletionV2CompletionsPost(request)`

- **OnSuccess**: <code>[CompletionResponse](src/models/completion-response.ts)</code>
- **OnError**: throws <code>[Completions.PostCompletionV2CompletionsPostError](src/resources/completions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.completions.postCompletionV2CompletionsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompletionResponse, Completions.PostCompletionV2CompletionsPostError&gt;</code>, with `result.value` of type <code>[CompletionResponse](src/models/completion-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Data

> Source: [Data](src/resources/data.ts)

<details>
<summary><code>completeDataFileV2DataFileIdCompletePost(request: Data.CompleteDataFileV2DataFileIdCompletePostRequest, options?: RequestOptions): ApiPromise&lt;DataFileResponse, Data.CompleteDataFileV2DataFileIdCompletePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish an uploaded data file, recording its stored size and type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.data.completeDataFileV2DataFileIdCompletePost({
    fileId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type DataFileResponse
} catch (err) {
  // TODO: Handle 'err' of type Data.CompleteDataFileV2DataFileIdCompletePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data
  .completeDataFileV2DataFileIdCompletePost({ fileId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataFileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fileId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.completeDataFileV2DataFileIdCompletePost(request)`

- **OnSuccess**: <code>[DataFileResponse](src/models/data-file-response.ts)</code>
- **OnError**: throws <code>[Data.CompleteDataFileV2DataFileIdCompletePostError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.completeDataFileV2DataFileIdCompletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataFileResponse, Data.CompleteDataFileV2DataFileIdCompletePostError&gt;</code>, with `result.value` of type <code>[DataFileResponse](src/models/data-file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDataFileV2DataPost(request: Data.CreateDataFileV2DataPostRequest, options?: RequestOptions): ApiPromise&lt;DataFileUploadResponse, Data.CreateDataFileV2DataPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reserve a data file and return a presigned PUT to upload its bytes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.data.createDataFileV2DataPost({
    body: { filename: "some example string", sizeBytes: 1 },
  });
  // TODO: Handle 'response' of type DataFileUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Data.CreateDataFileV2DataPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data
  .createDataFileV2DataPost({ body: { filename: "some example string", sizeBytes: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataFileUploadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DataFileCreateRequest](src/models/data-file-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.createDataFileV2DataPost(request)`

- **OnSuccess**: <code>[DataFileUploadResponse](src/models/data-file-upload-response.ts)</code>
- **OnError**: throws <code>[Data.CreateDataFileV2DataPostError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.createDataFileV2DataPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataFileUploadResponse, Data.CreateDataFileV2DataPostError&gt;</code>, with `result.value` of type <code>[DataFileUploadResponse](src/models/data-file-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDataFileV2DataFileIdDelete(request: Data.DeleteDataFileV2DataFileIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Data.DeleteDataFileV2DataFileIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a data file and its stored object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.data.deleteDataFileV2DataFileIdDelete({ fileId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type Data.DeleteDataFileV2DataFileIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data
  .deleteDataFileV2DataFileIdDelete({ fileId: "00000000-0000-0000-0000-000000000000" })
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
| <code>fileId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.deleteDataFileV2DataFileIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Data.DeleteDataFileV2DataFileIdDeleteError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.deleteDataFileV2DataFileIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Data.DeleteDataFileV2DataFileIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDataFilesV2DataDeletePost(request: Data.DeleteDataFilesV2DataDeletePostRequest, options?: RequestOptions): ApiPromise&lt;undefined, Data.DeleteDataFilesV2DataDeletePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete data files and their stored objects. Fails if any id is unreadable or unwritable.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.data.deleteDataFilesV2DataDeletePost({
    body: { fileIds: ["00000000-0000-0000-0000-000000000000"] },
  });
} catch (err) {
  // TODO: Handle 'err' of type Data.DeleteDataFilesV2DataDeletePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data
  .deleteDataFilesV2DataDeletePost({ body: { fileIds: ["00000000-0000-0000-0000-000000000000"] } })
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
| <code>body</code> | <code>[DataFileIdsRequest](src/models/data-file-ids-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.deleteDataFilesV2DataDeletePost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Data.DeleteDataFilesV2DataDeletePostError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.deleteDataFilesV2DataDeletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Data.DeleteDataFilesV2DataDeletePostError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadDataFileV2DataFileIdDownloadGet(request: Data.DownloadDataFileV2DataFileIdDownloadGetRequest, options?: RequestOptions): ApiPromise&lt;DataFileDownloadResponse, Data.DownloadDataFileV2DataFileIdDownloadGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Presign an inline and an attachment link for a ready data file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.data.downloadDataFileV2DataFileIdDownloadGet({
    fileId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type DataFileDownloadResponse
} catch (err) {
  // TODO: Handle 'err' of type Data.DownloadDataFileV2DataFileIdDownloadGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data
  .downloadDataFileV2DataFileIdDownloadGet({ fileId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataFileDownloadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fileId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.downloadDataFileV2DataFileIdDownloadGet(request)`

- **OnSuccess**: <code>[DataFileDownloadResponse](src/models/data-file-download-response.ts)</code>
- **OnError**: throws <code>[Data.DownloadDataFileV2DataFileIdDownloadGetError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.downloadDataFileV2DataFileIdDownloadGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataFileDownloadResponse, Data.DownloadDataFileV2DataFileIdDownloadGetError&gt;</code>, with `result.value` of type <code>[DataFileDownloadResponse](src/models/data-file-download-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDataFileStorageUsageV2DataUsageGet(options?: RequestOptions): ApiPromise&lt;DataFileStorageUsageResponse, Data.GetDataFileStorageUsageV2DataUsageGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return current data-file storage use and the team's effective limits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.data.getDataFileStorageUsageV2DataUsageGet();
  // TODO: Handle 'response' of type DataFileStorageUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Data.GetDataFileStorageUsageV2DataUsageGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data.getDataFileStorageUsageV2DataUsageGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataFileStorageUsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.getDataFileStorageUsageV2DataUsageGet()`

- **OnSuccess**: <code>[DataFileStorageUsageResponse](src/models/data-file-storage-usage-response.ts)</code>
- **OnError**: throws <code>[Data.GetDataFileStorageUsageV2DataUsageGetError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.getDataFileStorageUsageV2DataUsageGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataFileStorageUsageResponse, Data.GetDataFileStorageUsageV2DataUsageGetError&gt;</code>, with `result.value` of type <code>[DataFileStorageUsageResponse](src/models/data-file-storage-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDataFileV2DataFileIdGet(request: Data.GetDataFileV2DataFileIdGetRequest, options?: RequestOptions): ApiPromise&lt;DataFileResponse, Data.GetDataFileV2DataFileIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch one data file's metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.data.getDataFileV2DataFileIdGet({
    fileId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type DataFileResponse
} catch (err) {
  // TODO: Handle 'err' of type Data.GetDataFileV2DataFileIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data
  .getDataFileV2DataFileIdGet({ fileId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataFileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fileId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.getDataFileV2DataFileIdGet(request)`

- **OnSuccess**: <code>[DataFileResponse](src/models/data-file-response.ts)</code>
- **OnError**: throws <code>[Data.GetDataFileV2DataFileIdGetError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.getDataFileV2DataFileIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataFileResponse, Data.GetDataFileV2DataFileIdGetError&gt;</code>, with `result.value` of type <code>[DataFileResponse](src/models/data-file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDataFileGroupsV2DataGroupsGet(options?: RequestOptions): ApiPromise&lt;DataFileGroupListResponse, Data.ListDataFileGroupsV2DataGroupsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Summarise the readable folders so a browser can load their files on demand.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.data.listDataFileGroupsV2DataGroupsGet();
  // TODO: Handle 'response' of type DataFileGroupListResponse
} catch (err) {
  // TODO: Handle 'err' of type Data.ListDataFileGroupsV2DataGroupsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data.listDataFileGroupsV2DataGroupsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataFileGroupListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.listDataFileGroupsV2DataGroupsGet()`

- **OnSuccess**: <code>[DataFileGroupListResponse](src/models/data-file-group-list-response.ts)</code>
- **OnError**: throws <code>[Data.ListDataFileGroupsV2DataGroupsGetError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.listDataFileGroupsV2DataGroupsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataFileGroupListResponse, Data.ListDataFileGroupsV2DataGroupsGetError&gt;</code>, with `result.value` of type <code>[DataFileGroupListResponse](src/models/data-file-group-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDataFilesV2DataGet(request?: Data.ListDataFilesV2DataGetRequest, options?: RequestOptions): ApiPromise&lt;DataFileListResponse, Data.ListDataFilesV2DataGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the data files the caller can read, optionally narrowed to one folder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.data.listDataFilesV2DataGet();
  // TODO: Handle 'response' of type DataFileListResponse
} catch (err) {
  // TODO: Handle 'err' of type Data.ListDataFilesV2DataGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data.listDataFilesV2DataGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataFileListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scope?</code> | <code>[Scope3](src/models/scope3.ts)</code> | -<br>**Default**: "all" |
| <code>membershipId?</code> | <code>[MembershipId](src/models/unions/membership-id.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.listDataFilesV2DataGet(request)`

- **OnSuccess**: <code>[DataFileListResponse](src/models/data-file-list-response.ts)</code>
- **OnError**: throws <code>[Data.ListDataFilesV2DataGetError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.listDataFilesV2DataGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataFileListResponse, Data.ListDataFilesV2DataGetError&gt;</code>, with `result.value` of type <code>[DataFileListResponse](src/models/data-file-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDataFileV2DataFileIdPatch(request: Data.UpdateDataFileV2DataFileIdPatchRequest, options?: RequestOptions): ApiPromise&lt;DataFileResponse, Data.UpdateDataFileV2DataFileIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a data file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.data.updateDataFileV2DataFileIdPatch({
    fileId: "00000000-0000-0000-0000-000000000000",
    body: { filename: "some example string" },
  });
  // TODO: Handle 'response' of type DataFileResponse
} catch (err) {
  // TODO: Handle 'err' of type Data.UpdateDataFileV2DataFileIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.data
  .updateDataFileV2DataFileIdPatch({
    fileId: "00000000-0000-0000-0000-000000000000",
    body: { filename: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataFileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fileId</code> | <code>string</code> | - |
| <code>body</code> | <code>[DataFileUpdateRequest](src/models/data-file-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.data.updateDataFileV2DataFileIdPatch(request)`

- **OnSuccess**: <code>[DataFileResponse](src/models/data-file-response.ts)</code>
- **OnError**: throws <code>[Data.UpdateDataFileV2DataFileIdPatchError](src/resources/data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.data.updateDataFileV2DataFileIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataFileResponse, Data.UpdateDataFileV2DataFileIdPatchError&gt;</code>, with `result.value` of type <code>[DataFileResponse](src/models/data-file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EnvVars

> Source: [EnvVars](src/resources/env-vars.ts)

<details>
<summary><code>batchReplaceEnvVarsV2EnvVarsBatchPut(request: EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutRequest, options?: RequestOptions): ApiPromise&lt;RegistryEnvVarBatchResponse, EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace a registry's full env var set with the given variables.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.envVars.batchReplaceEnvVarsV2EnvVarsBatchPut({
    body: {
      registryId: "00000000-0000-0000-0000-000000000000",
      variables: [{ name: "some example string", value: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type RegistryEnvVarBatchResponse
} catch (err) {
  // TODO: Handle 'err' of type EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.envVars
  .batchReplaceEnvVarsV2EnvVarsBatchPut({
    body: {
      registryId: "00000000-0000-0000-0000-000000000000",
      variables: [{ name: "some example string", value: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegistryEnvVarBatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RegistryEnvVarBatchRequest](src/models/registry-env-var-batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.envVars.batchReplaceEnvVarsV2EnvVarsBatchPut(request)`

- **OnSuccess**: <code>[RegistryEnvVarBatchResponse](src/models/registry-env-var-batch-response.ts)</code>
- **OnError**: throws <code>[EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutError](src/resources/env-vars.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.envVars.batchReplaceEnvVarsV2EnvVarsBatchPut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegistryEnvVarBatchResponse, EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutError&gt;</code>, with `result.value` of type <code>[RegistryEnvVarBatchResponse](src/models/registry-env-var-batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkEnvVarCompletenessV2EnvVarsCheckPost(request: EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostRequest, options?: RequestOptions): ApiPromise&lt;RegistryEnvVarCheckResponse, EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether each registry has all env vars its manifest requires.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.envVars.checkEnvVarCompletenessV2EnvVarsCheckPost({
    body: { registryIds: ["00000000-0000-0000-0000-000000000000"] },
  });
  // TODO: Handle 'response' of type RegistryEnvVarCheckResponse
} catch (err) {
  // TODO: Handle 'err' of type EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.envVars
  .checkEnvVarCompletenessV2EnvVarsCheckPost({
    body: { registryIds: ["00000000-0000-0000-0000-000000000000"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegistryEnvVarCheckResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RegistryEnvVarCheckRequest](src/models/registry-env-var-check-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.envVars.checkEnvVarCompletenessV2EnvVarsCheckPost(request)`

- **OnSuccess**: <code>[RegistryEnvVarCheckResponse](src/models/registry-env-var-check-response.ts)</code>
- **OnError**: throws <code>[EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostError](src/resources/env-vars.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.envVars.checkEnvVarCompletenessV2EnvVarsCheckPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegistryEnvVarCheckResponse, EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostError&gt;</code>, with `result.value` of type <code>[RegistryEnvVarCheckResponse](src/models/registry-env-var-check-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEnvVarV2EnvVarsPost(request: EnvVars.CreateEnvVarV2EnvVarsPostRequest, options?: RequestOptions): ApiPromise&lt;RegistryEnvVarItem, EnvVars.CreateEnvVarV2EnvVarsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set a registry env var, creating it or updating an existing one by name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.envVars.createEnvVarV2EnvVarsPost({
    body: {
      registryId: "00000000-0000-0000-0000-000000000000",
      name: "some example string",
      value: "some example string",
    },
  });
  // TODO: Handle 'response' of type RegistryEnvVarItem
} catch (err) {
  // TODO: Handle 'err' of type EnvVars.CreateEnvVarV2EnvVarsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.envVars
  .createEnvVarV2EnvVarsPost({
    body: {
      registryId: "00000000-0000-0000-0000-000000000000",
      name: "some example string",
      value: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegistryEnvVarItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RegistryEnvVarCreateRequest](src/models/registry-env-var-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.envVars.createEnvVarV2EnvVarsPost(request)`

- **OnSuccess**: <code>[RegistryEnvVarItem](src/models/registry-env-var-item.ts)</code>
- **OnError**: throws <code>[EnvVars.CreateEnvVarV2EnvVarsPostError](src/resources/env-vars.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.envVars.createEnvVarV2EnvVarsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegistryEnvVarItem, EnvVars.CreateEnvVarV2EnvVarsPostError&gt;</code>, with `result.value` of type <code>[RegistryEnvVarItem](src/models/registry-env-var-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEnvVarV2EnvVarsVarIdDelete(request: EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a registry env var.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.envVars.deleteEnvVarV2EnvVarsVarIdDelete({ varId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.envVars
  .deleteEnvVarV2EnvVarsVarIdDelete({ varId: "00000000-0000-0000-0000-000000000000" })
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
| <code>varId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.envVars.deleteEnvVarV2EnvVarsVarIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteError](src/resources/env-vars.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.envVars.deleteEnvVarV2EnvVarsVarIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEnvVarsV2EnvVarsGet(request: EnvVars.ListEnvVarsV2EnvVarsGetRequest, options?: RequestOptions): ApiPromise&lt;RegistryEnvVarsListResponse, EnvVars.ListEnvVarsV2EnvVarsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a registry's runtime env vars with masked values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.envVars.listEnvVarsV2EnvVarsGet({
    registryId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type RegistryEnvVarsListResponse
} catch (err) {
  // TODO: Handle 'err' of type EnvVars.ListEnvVarsV2EnvVarsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.envVars
  .listEnvVarsV2EnvVarsGet({ registryId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegistryEnvVarsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registryId</code> | <code>string</code> | Registry to list env vars for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.envVars.listEnvVarsV2EnvVarsGet(request)`

- **OnSuccess**: <code>[RegistryEnvVarsListResponse](src/models/registry-env-vars-list-response.ts)</code>
- **OnError**: throws <code>[EnvVars.ListEnvVarsV2EnvVarsGetError](src/resources/env-vars.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.envVars.listEnvVarsV2EnvVarsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegistryEnvVarsListResponse, EnvVars.ListEnvVarsV2EnvVarsGetError&gt;</code>, with `result.value` of type <code>[RegistryEnvVarsListResponse](src/models/registry-env-vars-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEnvVarV2EnvVarsVarIdPatch(request: EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchRequest, options?: RequestOptions): ApiPromise&lt;RegistryEnvVarItem, EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a registry env var's value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.envVars.updateEnvVarV2EnvVarsVarIdPatch({
    varId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type RegistryEnvVarItem
} catch (err) {
  // TODO: Handle 'err' of type EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.envVars
  .updateEnvVarV2EnvVarsVarIdPatch({ varId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegistryEnvVarItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>varId</code> | <code>string</code> | - |
| <code>body</code> | <code>[RegistryEnvVarUpdateRequest](src/models/registry-env-var-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.envVars.updateEnvVarV2EnvVarsVarIdPatch(request)`

- **OnSuccess**: <code>[RegistryEnvVarItem](src/models/registry-env-var-item.ts)</code>
- **OnError**: throws <code>[EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchError](src/resources/env-vars.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.envVars.updateEnvVarV2EnvVarsVarIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegistryEnvVarItem, EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchError&gt;</code>, with `result.value` of type <code>[RegistryEnvVarItem](src/models/registry-env-var-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Imports

> Source: [Imports](src/resources/imports.ts)

<details>
<summary><code>cancelImportV2ImportsImportIdCancelPost(request: Imports.CancelImportV2ImportsImportIdCancelPostRequest, options?: RequestOptions): ApiPromise&lt;ImportResponse, Imports.CancelImportV2ImportsImportIdCancelPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request cancellation of a live import; one that has ended is returned unchanged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.cancelImportV2ImportsImportIdCancelPost({
    importId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.CancelImportV2ImportsImportIdCancelPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports
  .cancelImportV2ImportsImportIdCancelPost({ importId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.cancelImportV2ImportsImportIdCancelPost(request)`

- **OnSuccess**: <code>[ImportResponse](src/models/import-response.ts)</code>
- **OnError**: throws <code>[Imports.CancelImportV2ImportsImportIdCancelPostError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.cancelImportV2ImportsImportIdCancelPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImportResponse, Imports.CancelImportV2ImportsImportIdCancelPostError&gt;</code>, with `result.value` of type <code>[ImportResponse](src/models/import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createImportUploadV2ImportsUploadsPost(request: Imports.CreateImportUploadV2ImportsUploadsPostRequest, options?: RequestOptions): ApiPromise&lt;DataFileUploadResponse, Imports.CreateImportUploadV2ImportsUploadsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reserve a data file for a bundle and return a presigned PUT to upload its bytes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.createImportUploadV2ImportsUploadsPost({
    body: { filename: "some example string", sizeBytes: 1 },
  });
  // TODO: Handle 'response' of type DataFileUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.CreateImportUploadV2ImportsUploadsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports
  .createImportUploadV2ImportsUploadsPost({ body: { filename: "some example string", sizeBytes: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataFileUploadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImportUploadRequest](src/models/import-upload-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.createImportUploadV2ImportsUploadsPost(request)`

- **OnSuccess**: <code>[DataFileUploadResponse](src/models/data-file-upload-response.ts)</code>
- **OnError**: throws <code>[Imports.CreateImportUploadV2ImportsUploadsPostError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.createImportUploadV2ImportsUploadsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataFileUploadResponse, Imports.CreateImportUploadV2ImportsUploadsPostError&gt;</code>, with `result.value` of type <code>[DataFileUploadResponse](src/models/data-file-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>estimateImportV2ImportsEstimateGet(request: Imports.EstimateImportV2ImportsEstimateGetRequest, options?: RequestOptions): ApiPromise&lt;ImportEstimateResponse, Imports.EstimateImportV2ImportsEstimateGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Estimate an import of a bundle; fails when the bundle cannot be imported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.estimateImportV2ImportsEstimateGet({
    format: Format.Harbor,
    fileId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ImportEstimateResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.EstimateImportV2ImportsEstimateGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports
  .estimateImportV2ImportsEstimateGet({
    format: Format.Harbor,
    fileId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImportEstimateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format</code> | <code>[Format](src/models/format.ts)</code> | - |
| <code>fileId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.estimateImportV2ImportsEstimateGet(request)`

- **OnSuccess**: <code>[ImportEstimateResponse](src/models/import-estimate-response.ts)</code>
- **OnError**: throws <code>[Imports.EstimateImportV2ImportsEstimateGetError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.estimateImportV2ImportsEstimateGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImportEstimateResponse, Imports.EstimateImportV2ImportsEstimateGetError&gt;</code>, with `result.value` of type <code>[ImportEstimateResponse](src/models/import-estimate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getImportReportV2ImportsImportIdReportGet(request: Imports.GetImportReportV2ImportsImportIdReportGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Imports.GetImportReportV2ImportsImportIdReportGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the report a completed or stopped import published, in its format's schema.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.getImportReportV2ImportsImportIdReportGet({
    importId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Imports.GetImportReportV2ImportsImportIdReportGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports
  .getImportReportV2ImportsImportIdReportGet({ importId: "00000000-0000-0000-0000-000000000000" })
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
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.getImportReportV2ImportsImportIdReportGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Imports.GetImportReportV2ImportsImportIdReportGetError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.getImportReportV2ImportsImportIdReportGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Imports.GetImportReportV2ImportsImportIdReportGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getImportV2ImportsImportIdGet(request: Imports.GetImportV2ImportsImportIdGetRequest, options?: RequestOptions): ApiPromise&lt;ImportResponse, Imports.GetImportV2ImportsImportIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch one import.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.getImportV2ImportsImportIdGet({
    importId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.GetImportV2ImportsImportIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports
  .getImportV2ImportsImportIdGet({ importId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.getImportV2ImportsImportIdGet(request)`

- **OnSuccess**: <code>[ImportResponse](src/models/import-response.ts)</code>
- **OnError**: throws <code>[Imports.GetImportV2ImportsImportIdGetError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.getImportV2ImportsImportIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImportResponse, Imports.GetImportV2ImportsImportIdGetError&gt;</code>, with `result.value` of type <code>[ImportResponse](src/models/import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listImportFormatsV2ImportsFormatsGet(options?: RequestOptions): ApiPromise&lt;ImportFormatListResponse, Imports.ListImportFormatsV2ImportsFormatsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the bundle formats available to import.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.listImportFormatsV2ImportsFormatsGet();
  // TODO: Handle 'response' of type ImportFormatListResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.ListImportFormatsV2ImportsFormatsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports.listImportFormatsV2ImportsFormatsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImportFormatListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.listImportFormatsV2ImportsFormatsGet()`

- **OnSuccess**: <code>[ImportFormatListResponse](src/models/import-format-list-response.ts)</code>
- **OnError**: throws <code>[Imports.ListImportFormatsV2ImportsFormatsGetError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.listImportFormatsV2ImportsFormatsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImportFormatListResponse, Imports.ListImportFormatsV2ImportsFormatsGetError&gt;</code>, with `result.value` of type <code>[ImportFormatListResponse](src/models/import-format-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listImportsV2ImportsGet(request?: Imports.ListImportsV2ImportsGetRequest, options?: RequestOptions): ApiPromise&lt;ImportListResponse, Imports.ListImportsV2ImportsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the imports the caller can read, newest first.

Team admins see every import on the team; other members see their own.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.listImportsV2ImportsGet();
  // TODO: Handle 'response' of type ImportListResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.ListImportsV2ImportsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports.listImportsV2ImportsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImportListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format?</code> | <code>[Format1](src/models/unions/format1.ts)</code> | - |
| <code>tasksetId?</code> | <code>[TasksetId](src/models/unions/taskset-id.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.listImportsV2ImportsGet(request)`

- **OnSuccess**: <code>[ImportListResponse](src/models/import-list-response.ts)</code>
- **OnError**: throws <code>[Imports.ListImportsV2ImportsGetError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.listImportsV2ImportsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImportListResponse, Imports.ListImportsV2ImportsGetError&gt;</code>, with `result.value` of type <code>[ImportListResponse](src/models/import-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startImportV2ImportsPost(request: Imports.StartImportV2ImportsPostRequest, options?: RequestOptions): ApiPromise&lt;ImportResponse, Imports.StartImportV2ImportsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import an uploaded bundle into a taskset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imports.startImportV2ImportsPost({
    body: {
      fileId: "00000000-0000-0000-0000-000000000000",
      tasksetId: "00000000-0000-0000-0000-000000000000",
    },
  });
  // TODO: Handle 'response' of type ImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Imports.StartImportV2ImportsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imports
  .startImportV2ImportsPost({
    body: {
      fileId: "00000000-0000-0000-0000-000000000000",
      tasksetId: "00000000-0000-0000-0000-000000000000",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImportCreateRequest](src/models/import-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imports.startImportV2ImportsPost(request)`

- **OnSuccess**: <code>[ImportResponse](src/models/import-response.ts)</code>
- **OnError**: throws <code>[Imports.StartImportV2ImportsPostError](src/resources/imports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imports.startImportV2ImportsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImportResponse, Imports.StartImportV2ImportsPostError&gt;</code>, with `result.value` of type <code>[ImportResponse](src/models/import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Inference

> Source: [Inference](src/resources/inference.ts)

<details>
<summary><code>getInferenceUsageV2InferenceUsageGet(request?: Inference.GetInferenceUsageV2InferenceUsageGetRequest, options?: RequestOptions): ApiPromise&lt;InferenceUsageResponse, Inference.GetInferenceUsageV2InferenceUsageGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the team's inference usage over a window, with summary and paged requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inference.getInferenceUsageV2InferenceUsageGet();
  // TODO: Handle 'response' of type InferenceUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Inference.GetInferenceUsageV2InferenceUsageGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inference.getInferenceUsageV2InferenceUsageGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InferenceUsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days?</code> | <code>number</code> | -<br>**Default**: 7 |
| <code>userId?</code> | <code>[UserId](src/models/unions/user-id.ts)</code> | - |
| <code>apiKeyId?</code> | <code>[ApiKeyId](src/models/unions/api-key-id.ts)</code> | - |
| <code>byokCredentialId?</code> | <code>[ByokCredentialId](src/models/unions/byok-credential-id.ts)</code> | - |
| <code>modelId?</code> | <code>[ModelId](src/models/unions/model-id.ts)</code> | - |
| <code>requestType?</code> | <code>[RequestType](src/models/unions/request-type.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inference.getInferenceUsageV2InferenceUsageGet(request)`

- **OnSuccess**: <code>[InferenceUsageResponse](src/models/inference-usage-response.ts)</code>
- **OnError**: throws <code>[Inference.GetInferenceUsageV2InferenceUsageGetError](src/resources/inference.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inference.getInferenceUsageV2InferenceUsageGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InferenceUsageResponse, Inference.GetInferenceUsageV2InferenceUsageGetError&gt;</code>, with `result.value` of type <code>[InferenceUsageResponse](src/models/inference-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Instances

> Source: [Instances](src/resources/instances.ts)

<details>
<summary><code>listInstancesV2InstanceGet(request: Instances.ListInstancesV2InstanceGetRequest, options?: RequestOptions): ApiPromise&lt;ActiveInstancesResponse, Instances.ListInstancesV2InstanceGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a registry's instances, optionally including recently terminated ones.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.instances.listInstancesV2InstanceGet({
    registryId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ActiveInstancesResponse
} catch (err) {
  // TODO: Handle 'err' of type Instances.ListInstancesV2InstanceGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.instances
  .listInstancesV2InstanceGet({ registryId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActiveInstancesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registryId</code> | <code>string</code> | Filter instances to this registry |
| <code>includeTerminated?</code> | <code>boolean</code> | Include recently terminated instances<br>**Default**: false |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.instances.listInstancesV2InstanceGet(request)`

- **OnSuccess**: <code>[ActiveInstancesResponse](src/models/active-instances-response.ts)</code>
- **OnError**: throws <code>[Instances.ListInstancesV2InstanceGetError](src/resources/instances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.instances.listInstancesV2InstanceGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActiveInstancesResponse, Instances.ListInstancesV2InstanceGetError&gt;</code>, with `result.value` of type <code>[ActiveInstancesResponse](src/models/active-instances-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopInstancesV2InstanceStopPost(request: Instances.StopInstancesV2InstanceStopPostRequest, options?: RequestOptions): ApiPromise&lt;StopInstancesResponse, Instances.StopInstancesV2InstanceStopPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop the given instances of a registry, reporting per-instance results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.instances.stopInstancesV2InstanceStopPost({
    body: {
      registryId: "00000000-0000-0000-0000-000000000000",
      instanceIds: ["00000000-0000-0000-0000-000000000000"],
    },
  });
  // TODO: Handle 'response' of type StopInstancesResponse
} catch (err) {
  // TODO: Handle 'err' of type Instances.StopInstancesV2InstanceStopPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.instances
  .stopInstancesV2InstanceStopPost({
    body: {
      registryId: "00000000-0000-0000-0000-000000000000",
      instanceIds: ["00000000-0000-0000-0000-000000000000"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StopInstancesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StopInstancesRequest](src/models/stop-instances-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.instances.stopInstancesV2InstanceStopPost(request)`

- **OnSuccess**: <code>[StopInstancesResponse](src/models/stop-instances-response.ts)</code>
- **OnError**: throws <code>[Instances.StopInstancesV2InstanceStopPostError](src/resources/instances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.instances.stopInstancesV2InstanceStopPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StopInstancesResponse, Instances.StopInstancesV2InstanceStopPostError&gt;</code>, with `result.value` of type <code>[StopInstancesResponse](src/models/stop-instances-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/resources/jobs.ts)

<details>
<summary><code>enrichJobsV2JobsEnrichPost(request: Jobs.EnrichJobsV2JobsEnrichPostRequest, options?: RequestOptions): ApiPromise&lt;EnrichJobsResponse, Jobs.EnrichJobsV2JobsEnrichPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch enrichment data (chart points, task coverage, models) for a batch of jobs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.enrichJobsV2JobsEnrichPost({
    body: ["00000000-0000-0000-0000-000000000000"],
  });
  // TODO: Handle 'response' of type EnrichJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.EnrichJobsV2JobsEnrichPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .enrichJobsV2JobsEnrichPost({ body: ["00000000-0000-0000-0000-000000000000"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnrichJobsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>string[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.enrichJobsV2JobsEnrichPost(request)`

- **OnSuccess**: <code>[EnrichJobsResponse](src/models/enrich-jobs-response.ts)</code>
- **OnError**: throws <code>[Jobs.EnrichJobsV2JobsEnrichPostError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.enrichJobsV2JobsEnrichPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnrichJobsResponse, Jobs.EnrichJobsV2JobsEnrichPostError&gt;</code>, with `result.value` of type <code>[EnrichJobsResponse](src/models/enrich-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>finishImportedJobV2JobsImportJobIdFinishPost(request: Jobs.FinishImportedJobV2JobsImportJobIdFinishPostRequest, options?: RequestOptions): ApiPromise&lt;JobImportFinishResponse, Jobs.FinishImportedJobV2JobsImportJobIdFinishPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finish an imported job once each of its traces has been finished.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.finishImportedJobV2JobsImportJobIdFinishPost({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type JobImportFinishResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.FinishImportedJobV2JobsImportJobIdFinishPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .finishImportedJobV2JobsImportJobIdFinishPost({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobImportFinishResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.finishImportedJobV2JobsImportJobIdFinishPost(request)`

- **OnSuccess**: <code>[JobImportFinishResponse](src/models/job-import-finish-response.ts)</code>
- **OnError**: throws <code>[Jobs.FinishImportedJobV2JobsImportJobIdFinishPostError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.finishImportedJobV2JobsImportJobIdFinishPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobImportFinishResponse, Jobs.FinishImportedJobV2JobsImportJobIdFinishPostError&gt;</code>, with `result.value` of type <code>[JobImportFinishResponse](src/models/job-import-finish-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>finishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost(request: Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest, options?: RequestOptions): ApiPromise&lt;JobImportTraceResultResponse, Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record the outcome of one imported trace after its trajectory is uploaded.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.finishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost({
    jobId: "00000000-0000-0000-0000-000000000000",
    traceId: "00000000-0000-0000-0000-000000000000",
    body: { status: StatusHudPlatformJobsApi.Completed },
  });
  // TODO: Handle 'response' of type JobImportTraceResultResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .finishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost({
    jobId: "00000000-0000-0000-0000-000000000000",
    traceId: "00000000-0000-0000-0000-000000000000",
    body: { status: StatusHudPlatformJobsApi.Completed },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobImportTraceResultResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |
| <code>traceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[JobImportTraceResult](src/models/job-import-trace-result.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.finishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost(request)`

- **OnSuccess**: <code>[JobImportTraceResultResponse](src/models/job-import-trace-result-response.ts)</code>
- **OnError**: throws <code>[Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.finishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobImportTraceResultResponse, Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError&gt;</code>, with `result.value` of type <code>[JobImportTraceResultResponse](src/models/job-import-trace-result-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJobChartDataV2JobsJobIdChartDataGet(request: Jobs.GetJobChartDataV2JobsJobIdChartDataGetRequest, options?: RequestOptions): ApiPromise&lt;ChartDataResponse, Jobs.GetJobChartDataV2JobsJobIdChartDataGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-trace reward data points for charting a job's results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobChartDataV2JobsJobIdChartDataGet({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ChartDataResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobChartDataV2JobsJobIdChartDataGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .getJobChartDataV2JobsJobIdChartDataGet({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChartDataResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 5000 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobChartDataV2JobsJobIdChartDataGet(request)`

- **OnSuccess**: <code>[ChartDataResponse](src/models/chart-data-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobChartDataV2JobsJobIdChartDataGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJobChartDataV2JobsJobIdChartDataGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChartDataResponse, Jobs.GetJobChartDataV2JobsJobIdChartDataGetError&gt;</code>, with `result.value` of type <code>[ChartDataResponse](src/models/chart-data-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJobEntityLinksV2JobsJobIdEntityLinksGet(request: Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest, options?: RequestOptions): ApiPromise&lt;JobEntityLinksResponse, Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List tasksets and registries linked to a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobEntityLinksV2JobsJobIdEntityLinksGet({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type JobEntityLinksResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .getJobEntityLinksV2JobsJobIdEntityLinksGet({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobEntityLinksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobEntityLinksV2JobsJobIdEntityLinksGet(request)`

- **OnSuccess**: <code>[JobEntityLinksResponse](src/models/job-entity-links-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJobEntityLinksV2JobsJobIdEntityLinksGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobEntityLinksResponse, Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetError&gt;</code>, with `result.value` of type <code>[JobEntityLinksResponse](src/models/job-entity-links-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJobTasksetCoverageV2JobsJobIdTasksetCoverageGet(request: Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest, options?: RequestOptions): ApiPromise&lt;TasksetCoverageResponse, Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-task coverage of the job's taskset, including unattempted tasks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobTasksetCoverageV2JobsJobIdTasksetCoverageGet({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TasksetCoverageResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .getJobTasksetCoverageV2JobsJobIdTasksetCoverageGet({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksetCoverageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobTasksetCoverageV2JobsJobIdTasksetCoverageGet(request)`

- **OnSuccess**: <code>[TasksetCoverageResponse](src/models/taskset-coverage-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJobTasksetCoverageV2JobsJobIdTasksetCoverageGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksetCoverageResponse, Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError&gt;</code>, with `result.value` of type <code>[TasksetCoverageResponse](src/models/taskset-coverage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJobUsageV2JobsJobIdUsageGet(request: Jobs.GetJobUsageV2JobsJobIdUsageGetRequest, options?: RequestOptions): ApiPromise&lt;JobUsageResponse, Jobs.GetJobUsageV2JobsJobIdUsageGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-trace compute and inference usage for a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobUsageV2JobsJobIdUsageGet({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type JobUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobUsageV2JobsJobIdUsageGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .getJobUsageV2JobsJobIdUsageGet({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobUsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobUsageV2JobsJobIdUsageGet(request)`

- **OnSuccess**: <code>[JobUsageResponse](src/models/job-usage-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobUsageV2JobsJobIdUsageGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJobUsageV2JobsJobIdUsageGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobUsageResponse, Jobs.GetJobUsageV2JobsJobIdUsageGetError&gt;</code>, with `result.value` of type <code>[JobUsageResponse](src/models/job-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJobV2JobsJobIdGet(request: Jobs.GetJobV2JobsJobIdGetRequest, options?: RequestOptions): ApiPromise&lt;JobResponse, Jobs.GetJobV2JobsJobIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a job by id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobV2JobsJobIdGet({ jobId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type JobResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobV2JobsJobIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .getJobV2JobsJobIdGet({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobV2JobsJobIdGet(request)`

- **OnSuccess**: <code>[JobResponse](src/models/job-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobV2JobsJobIdGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJobV2JobsJobIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobResponse, Jobs.GetJobV2JobsJobIdGetError&gt;</code>, with `result.value` of type <code>[JobResponse](src/models/job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importJobV2JobsImportPost(request: Jobs.ImportJobV2JobsImportPostRequest, options?: RequestOptions): ApiPromise&lt;JobImportResponse, Jobs.ImportJobV2JobsImportPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add runs done outside HUD to an imported job, creating the job on first call.

Each trace is linked to its task by content digest and starts running. A
running trace with no span upload for an hour is errored, so add traces as
they are uploaded rather than all at once. Retried traces are reported as
already imported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.importJobV2JobsImportPost({
    body: {
      tasksetId: "00000000-0000-0000-0000-000000000000",
      externalId: "some example string",
      name: "some example string",
      traces: [{ externalId: "some example string", taskDigest: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type JobImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.ImportJobV2JobsImportPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .importJobV2JobsImportPost({
    body: {
      tasksetId: "00000000-0000-0000-0000-000000000000",
      externalId: "some example string",
      name: "some example string",
      traces: [{ externalId: "some example string", taskDigest: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[JobImportRequest](src/models/job-import-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.importJobV2JobsImportPost(request)`

- **OnSuccess**: <code>[JobImportResponse](src/models/job-import-response.ts)</code>
- **OnError**: throws <code>[Jobs.ImportJobV2JobsImportPostError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.importJobV2JobsImportPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobImportResponse, Jobs.ImportJobV2JobsImportPostError&gt;</code>, with `result.value` of type <code>[JobImportResponse](src/models/job-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>invalidateJobV2JobsJobIdInvalidatePost(request: Jobs.InvalidateJobV2JobsJobIdInvalidatePostRequest, options?: RequestOptions): ApiPromise&lt;BatchValidateResponse, Jobs.InvalidateJobV2JobsJobIdInvalidatePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mark every trace in this job as invalid (excluded from leaderboards).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.invalidateJobV2JobsJobIdInvalidatePost({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BatchValidateResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.InvalidateJobV2JobsJobIdInvalidatePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .invalidateJobV2JobsJobIdInvalidatePost({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchValidateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.invalidateJobV2JobsJobIdInvalidatePost(request)`

- **OnSuccess**: <code>[BatchValidateResponse](src/models/batch-validate-response.ts)</code>
- **OnError**: throws <code>[Jobs.InvalidateJobV2JobsJobIdInvalidatePostError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.invalidateJobV2JobsJobIdInvalidatePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchValidateResponse, Jobs.InvalidateJobV2JobsJobIdInvalidatePostError&gt;</code>, with `result.value` of type <code>[BatchValidateResponse](src/models/batch-validate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobSummaryV2JobsJobIdSummaryGet(request: Jobs.JobSummaryV2JobsJobIdSummaryGetRequest, options?: RequestOptions): ApiPromise&lt;JobSummary, Jobs.JobSummaryV2JobsJobIdSummaryGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get aggregate trace statistics for a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.jobSummaryV2JobsJobIdSummaryGet({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type JobSummary
} catch (err) {
  // TODO: Handle 'err' of type Jobs.JobSummaryV2JobsJobIdSummaryGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .jobSummaryV2JobsJobIdSummaryGet({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.jobSummaryV2JobsJobIdSummaryGet(request)`

- **OnSuccess**: <code>[JobSummary](src/models/job-summary.ts)</code>
- **OnError**: throws <code>[Jobs.JobSummaryV2JobsJobIdSummaryGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.jobSummaryV2JobsJobIdSummaryGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobSummary, Jobs.JobSummaryV2JobsJobIdSummaryGetError&gt;</code>, with `result.value` of type <code>[JobSummary](src/models/job-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listActiveJobsV2JobsActiveGet(request?: Jobs.ListActiveJobsV2JobsActiveGetRequest, options?: RequestOptions): ApiPromise&lt;JobResponse[], Jobs.ListActiveJobsV2JobsActiveGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a bounded page of currently running jobs for the caller's team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.listActiveJobsV2JobsActiveGet();
  // TODO: Handle 'response' of type JobResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Jobs.ListActiveJobsV2JobsActiveGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.listActiveJobsV2JobsActiveGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.listActiveJobsV2JobsActiveGet(request)`

- **OnSuccess**: <code>[JobResponse](src/models/job-response.ts)[]</code>
- **OnError**: throws <code>[Jobs.ListActiveJobsV2JobsActiveGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.listActiveJobsV2JobsActiveGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobResponse[], Jobs.ListActiveJobsV2JobsActiveGetError&gt;</code>, with `result.value` of type <code>[JobResponse](src/models/job-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEnrichedJobsV2JobsEnrichedGet(request: Jobs.ListEnrichedJobsV2JobsEnrichedGetRequest, options?: RequestOptions): ApiPromise&lt;TasksetJobsEnrichedResponse, Jobs.ListEnrichedJobsV2JobsEnrichedGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List enriched taskset jobs; public-only viewers receive public jobs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.listEnrichedJobsV2JobsEnrichedGet({
    tasksetId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TasksetJobsEnrichedResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.ListEnrichedJobsV2JobsEnrichedGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .listEnrichedJobsV2JobsEnrichedGet({ tasksetId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksetJobsEnrichedResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tasksetId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.listEnrichedJobsV2JobsEnrichedGet(request)`

- **OnSuccess**: <code>[TasksetJobsEnrichedResponse](src/models/taskset-jobs-enriched-response.ts)</code>
- **OnError**: throws <code>[Jobs.ListEnrichedJobsV2JobsEnrichedGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.listEnrichedJobsV2JobsEnrichedGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksetJobsEnrichedResponse, Jobs.ListEnrichedJobsV2JobsEnrichedGetError&gt;</code>, with `result.value` of type <code>[TasksetJobsEnrichedResponse](src/models/taskset-jobs-enriched-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJobThumbnailsV2JobsJobIdThumbnailsGet(request: Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest, options?: RequestOptions): ApiPromise&lt;JobThumbnailsResponse, Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List trace thumbnails for a job with presigned image URLs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.listJobThumbnailsV2JobsJobIdThumbnailsGet({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type JobThumbnailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .listJobThumbnailsV2JobsJobIdThumbnailsGet({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobThumbnailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>status?</code> | <code>[Status11](src/models/unions/status11.ts)</code> | Only traces in these statuses; the category counts cover the same traces. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.listJobThumbnailsV2JobsJobIdThumbnailsGet(request)`

- **OnSuccess**: <code>[JobThumbnailsResponse](src/models/job-thumbnails-response.ts)</code>
- **OnError**: throws <code>[Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.listJobThumbnailsV2JobsJobIdThumbnailsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobThumbnailsResponse, Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetError&gt;</code>, with `result.value` of type <code>[JobThumbnailsResponse](src/models/job-thumbnails-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJobTracesV2JobsJobIdTracesGet(request: Jobs.ListJobTracesV2JobsJobIdTracesGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedResponseTraceResponse, Jobs.ListJobTracesV2JobsJobIdTracesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List traces belonging to a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.listJobTracesV2JobsJobIdTracesGet({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PaginatedResponseTraceResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.ListJobTracesV2JobsJobIdTracesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .listJobTracesV2JobsJobIdTracesGet({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedResponseTraceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.listJobTracesV2JobsJobIdTracesGet(request)`

- **OnSuccess**: <code>[PaginatedResponseTraceResponse](src/models/paginated-response-trace-response.ts)</code>
- **OnError**: throws <code>[Jobs.ListJobTracesV2JobsJobIdTracesGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.listJobTracesV2JobsJobIdTracesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedResponseTraceResponse, Jobs.ListJobTracesV2JobsJobIdTracesGetError&gt;</code>, with `result.value` of type <code>[PaginatedResponseTraceResponse](src/models/paginated-response-trace-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJobsV2JobsGet(request?: Jobs.ListJobsV2JobsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedResponseJobResponse, Jobs.ListJobsV2JobsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List jobs for the caller's team, optionally filtered by taskset or Project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.listJobsV2JobsGet();
  // TODO: Handle 'response' of type PaginatedResponseJobResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.ListJobsV2JobsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.listJobsV2JobsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedResponseJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>tasksetId?</code> | <code>[TasksetId](src/models/unions/taskset-id.ts)</code> | - |
| <code>projectId?</code> | <code>[ProjectId1](src/models/unions/project-id1.ts)</code> | Only jobs contained by this Project; omitted lists every Project |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.listJobsV2JobsGet(request)`

- **OnSuccess**: <code>[PaginatedResponseJobResponse](src/models/paginated-response-job-response.ts)</code>
- **OnError**: throws <code>[Jobs.ListJobsV2JobsGetError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.listJobsV2JobsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedResponseJobResponse, Jobs.ListJobsV2JobsGetError&gt;</code>, with `result.value` of type <code>[PaginatedResponseJobResponse](src/models/paginated-response-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publishJobV2JobsJobIdPublishPost(request: Jobs.PublishJobV2JobsJobIdPublishPostRequest, options?: RequestOptions): ApiPromise&lt;PublishJobResponse, Jobs.PublishJobV2JobsJobIdPublishPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set ``jobs.public=true`` so the job is visible on the public taskset page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.publishJobV2JobsJobIdPublishPost({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PublishJobResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.PublishJobV2JobsJobIdPublishPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .publishJobV2JobsJobIdPublishPost({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublishJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.publishJobV2JobsJobIdPublishPost(request)`

- **OnSuccess**: <code>[PublishJobResponse](src/models/publish-job-response.ts)</code>
- **OnError**: throws <code>[Jobs.PublishJobV2JobsJobIdPublishPostError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.publishJobV2JobsJobIdPublishPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublishJobResponse, Jobs.PublishJobV2JobsJobIdPublishPostError&gt;</code>, with `result.value` of type <code>[PublishJobResponse](src/models/publish-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revalidateJobV2JobsJobIdRevalidatePost(request: Jobs.RevalidateJobV2JobsJobIdRevalidatePostRequest, options?: RequestOptions): ApiPromise&lt;BatchValidateResponse, Jobs.RevalidateJobV2JobsJobIdRevalidatePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-include every trace in this job in leaderboard calculations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.revalidateJobV2JobsJobIdRevalidatePost({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type BatchValidateResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.RevalidateJobV2JobsJobIdRevalidatePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .revalidateJobV2JobsJobIdRevalidatePost({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchValidateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.revalidateJobV2JobsJobIdRevalidatePost(request)`

- **OnSuccess**: <code>[BatchValidateResponse](src/models/batch-validate-response.ts)</code>
- **OnError**: throws <code>[Jobs.RevalidateJobV2JobsJobIdRevalidatePostError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.revalidateJobV2JobsJobIdRevalidatePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchValidateResponse, Jobs.RevalidateJobV2JobsJobIdRevalidatePostError&gt;</code>, with `result.value` of type <code>[BatchValidateResponse](src/models/batch-validate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unpublishJobV2JobsJobIdPublishDelete(request: Jobs.UnpublishJobV2JobsJobIdPublishDeleteRequest, options?: RequestOptions): ApiPromise&lt;StatusResponse, Jobs.UnpublishJobV2JobsJobIdPublishDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set ``jobs.public=false``; the job and its traces return to invited-only visibility.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.unpublishJobV2JobsJobIdPublishDelete({
    jobId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type StatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.UnpublishJobV2JobsJobIdPublishDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .unpublishJobV2JobsJobIdPublishDelete({ jobId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.unpublishJobV2JobsJobIdPublishDelete(request)`

- **OnSuccess**: <code>[StatusResponse](src/models/status-response.ts)</code>
- **OnError**: throws <code>[Jobs.UnpublishJobV2JobsJobIdPublishDeleteError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.unpublishJobV2JobsJobIdPublishDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusResponse, Jobs.UnpublishJobV2JobsJobIdPublishDeleteError&gt;</code>, with `result.value` of type <code>[StatusResponse](src/models/status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateJobV2JobsJobIdPatch(request: Jobs.UpdateJobV2JobsJobIdPatchRequest, options?: RequestOptions): ApiPromise&lt;JobResponse, Jobs.UpdateJobV2JobsJobIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a job's mutable fields, such as its name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.updateJobV2JobsJobIdPatch({
    jobId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type JobResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.UpdateJobV2JobsJobIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .updateJobV2JobsJobIdPatch({ jobId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |
| <code>body</code> | <code>[JobUpdateRequest](src/models/job-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.updateJobV2JobsJobIdPatch(request)`

- **OnSuccess**: <code>[JobResponse](src/models/job-response.ts)</code>
- **OnError**: throws <code>[Jobs.UpdateJobV2JobsJobIdPatchError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.updateJobV2JobsJobIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobResponse, Jobs.UpdateJobV2JobsJobIdPatchError&gt;</code>, with `result.value` of type <code>[JobResponse](src/models/job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost(request: Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest, options?: RequestOptions): ApiPromise&lt;JobImportTrajectoryResponse, Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Store an ATIF agent trajectory as an imported trace's telemetry.

Upload it before finishing the trace. A trace keeps the first trajectory
it receives; a repeated upload reports `ingested: false`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.uploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost({
    jobId: "00000000-0000-0000-0000-000000000000",
    traceId: "00000000-0000-0000-0000-000000000000",
    body: {
      agent: { name: "some example string", version: "some example string" },
      steps: [{ stepId: 1, source: SourceHudPlatformJobsApi.System, message: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type JobImportTrajectoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .uploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost({
    jobId: "00000000-0000-0000-0000-000000000000",
    traceId: "00000000-0000-0000-0000-000000000000",
    body: {
      agent: { name: "some example string", version: "some example string" },
      steps: [{ stepId: 1, source: SourceHudPlatformJobsApi.System, message: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobImportTrajectoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | - |
| <code>traceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AtifTrajectory](src/models/atif-trajectory.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.uploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost(request)`

- **OnSuccess**: <code>[JobImportTrajectoryResponse](src/models/job-import-trajectory-response.ts)</code>
- **OnError**: throws <code>[Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.uploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobImportTrajectoryResponse, Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError&gt;</code>, with `result.value` of type <code>[JobImportTrajectoryResponse](src/models/job-import-trajectory-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LimitsApi

> Source: [LimitsApi](src/resources/limits-api.ts)

<details>
<summary><code>createSpendLimitV2LimitsPost(request: LimitsApi.CreateSpendLimitV2LimitsPostRequest, options?: RequestOptions): ApiPromise&lt;SpendLimitItem, LimitsApi.CreateSpendLimitV2LimitsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a team, member, or API-key limit, or a team percentage alert.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.limitsApi.createSpendLimitV2LimitsPost({
    body: { interval: SpendInterval.Week, action: SpendLimitAction.Alert },
  });
  // TODO: Handle 'response' of type SpendLimitItem
} catch (err) {
  // TODO: Handle 'err' of type LimitsApi.CreateSpendLimitV2LimitsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.limitsApi
  .createSpendLimitV2LimitsPost({ body: { interval: SpendInterval.Week, action: SpendLimitAction.Alert } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SpendLimitItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SpendLimitCreateRequest](src/models/spend-limit-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.limitsApi.createSpendLimitV2LimitsPost(request)`

- **OnSuccess**: <code>[SpendLimitItem](src/models/spend-limit-item.ts)</code>
- **OnError**: throws <code>[LimitsApi.CreateSpendLimitV2LimitsPostError](src/resources/limits-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.limitsApi.createSpendLimitV2LimitsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SpendLimitItem, LimitsApi.CreateSpendLimitV2LimitsPostError&gt;</code>, with `result.value` of type <code>[SpendLimitItem](src/models/spend-limit-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSpendLimitV2LimitsLimitIdDelete(request: LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a spend limit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.limitsApi.deleteSpendLimitV2LimitsLimitIdDelete({
    limitId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.limitsApi
  .deleteSpendLimitV2LimitsLimitIdDelete({ limitId: "00000000-0000-0000-0000-000000000000" })
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
| <code>limitId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.limitsApi.deleteSpendLimitV2LimitsLimitIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteError](src/resources/limits-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.limitsApi.deleteSpendLimitV2LimitsLimitIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSpendLimitsV2LimitsGet(options?: RequestOptions): ApiPromise&lt;SpendLimitListResponse, LimitsApi.ListSpendLimitsV2LimitsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the spend limits visible to the caller with current-period spend.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.limitsApi.listSpendLimitsV2LimitsGet();
  // TODO: Handle 'response' of type SpendLimitListResponse
} catch (err) {
  // TODO: Handle 'err' of type LimitsApi.ListSpendLimitsV2LimitsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.limitsApi.listSpendLimitsV2LimitsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SpendLimitListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.limitsApi.listSpendLimitsV2LimitsGet()`

- **OnSuccess**: <code>[SpendLimitListResponse](src/models/spend-limit-list-response.ts)</code>
- **OnError**: throws <code>[LimitsApi.ListSpendLimitsV2LimitsGetError](src/resources/limits-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.limitsApi.listSpendLimitsV2LimitsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SpendLimitListResponse, LimitsApi.ListSpendLimitsV2LimitsGetError&gt;</code>, with `result.value` of type <code>[SpendLimitListResponse](src/models/spend-limit-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resetSpendLimitV2LimitsLimitIdResetPost(request: LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostRequest, options?: RequestOptions): ApiPromise&lt;SpendLimitItem, LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new spend window on a blocking limit. Ledger rows are unchanged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.limitsApi.resetSpendLimitV2LimitsLimitIdResetPost({
    limitId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type SpendLimitItem
} catch (err) {
  // TODO: Handle 'err' of type LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.limitsApi
  .resetSpendLimitV2LimitsLimitIdResetPost({ limitId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SpendLimitItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limitId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.limitsApi.resetSpendLimitV2LimitsLimitIdResetPost(request)`

- **OnSuccess**: <code>[SpendLimitItem](src/models/spend-limit-item.ts)</code>
- **OnError**: throws <code>[LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostError](src/resources/limits-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.limitsApi.resetSpendLimitV2LimitsLimitIdResetPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SpendLimitItem, LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostError&gt;</code>, with `result.value` of type <code>[SpendLimitItem](src/models/spend-limit-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSpendLimitV2LimitsLimitIdPatch(request: LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchRequest, options?: RequestOptions): ApiPromise&lt;SpendLimitItem, LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an absolute amount, percentage threshold, or enabled state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.limitsApi.updateSpendLimitV2LimitsLimitIdPatch({
    limitId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type SpendLimitItem
} catch (err) {
  // TODO: Handle 'err' of type LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.limitsApi
  .updateSpendLimitV2LimitsLimitIdPatch({ limitId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SpendLimitItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limitId</code> | <code>string</code> | - |
| <code>body</code> | <code>[SpendLimitUpdateRequest](src/models/spend-limit-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.limitsApi.updateSpendLimitV2LimitsLimitIdPatch(request)`

- **OnSuccess**: <code>[SpendLimitItem](src/models/spend-limit-item.ts)</code>
- **OnError**: throws <code>[LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchError](src/resources/limits-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.limitsApi.updateSpendLimitV2LimitsLimitIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SpendLimitItem, LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchError&gt;</code>, with `result.value` of type <code>[SpendLimitItem](src/models/spend-limit-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MemberSecrets

> Source: [MemberSecrets](src/resources/member-secrets.ts)

<details>
<summary><code>createMemberSecretV2MemberSecretsPost(request: MemberSecrets.CreateMemberSecretV2MemberSecretsPostRequest, options?: RequestOptions): ApiPromise&lt;MemberSecretItem, MemberSecrets.CreateMemberSecretV2MemberSecretsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set a personal secret, creating it or updating an existing one by name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.memberSecrets.createMemberSecretV2MemberSecretsPost({
    body: { name: "some example string", value: "some example string" },
  });
  // TODO: Handle 'response' of type MemberSecretItem
} catch (err) {
  // TODO: Handle 'err' of type MemberSecrets.CreateMemberSecretV2MemberSecretsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.memberSecrets
  .createMemberSecretV2MemberSecretsPost({
    body: { name: "some example string", value: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MemberSecretItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MemberSecretCreateRequest](src/models/member-secret-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.memberSecrets.createMemberSecretV2MemberSecretsPost(request)`

- **OnSuccess**: <code>[MemberSecretItem](src/models/member-secret-item.ts)</code>
- **OnError**: throws <code>[MemberSecrets.CreateMemberSecretV2MemberSecretsPostError](src/resources/member-secrets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.memberSecrets.createMemberSecretV2MemberSecretsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MemberSecretItem, MemberSecrets.CreateMemberSecretV2MemberSecretsPostError&gt;</code>, with `result.value` of type <code>[MemberSecretItem](src/models/member-secret-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMemberSecretV2MemberSecretsSecretIdDelete(request: MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a personal secret.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.memberSecrets.deleteMemberSecretV2MemberSecretsSecretIdDelete({
    secretId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.memberSecrets
  .deleteMemberSecretV2MemberSecretsSecretIdDelete({ secretId: "00000000-0000-0000-0000-000000000000" })
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
| <code>secretId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.memberSecrets.deleteMemberSecretV2MemberSecretsSecretIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteError](src/resources/member-secrets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.memberSecrets.deleteMemberSecretV2MemberSecretsSecretIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMemberSecretsV2MemberSecretsGet(options?: RequestOptions): ApiPromise&lt;MemberSecretsListResponse, MemberSecrets.ListMemberSecretsV2MemberSecretsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller's personal secrets with masked values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.memberSecrets.listMemberSecretsV2MemberSecretsGet();
  // TODO: Handle 'response' of type MemberSecretsListResponse
} catch (err) {
  // TODO: Handle 'err' of type MemberSecrets.ListMemberSecretsV2MemberSecretsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.memberSecrets.listMemberSecretsV2MemberSecretsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MemberSecretsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.memberSecrets.listMemberSecretsV2MemberSecretsGet()`

- **OnSuccess**: <code>[MemberSecretsListResponse](src/models/member-secrets-list-response.ts)</code>
- **OnError**: throws <code>[MemberSecrets.ListMemberSecretsV2MemberSecretsGetError](src/resources/member-secrets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.memberSecrets.listMemberSecretsV2MemberSecretsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MemberSecretsListResponse, MemberSecrets.ListMemberSecretsV2MemberSecretsGetError&gt;</code>, with `result.value` of type <code>[MemberSecretsListResponse](src/models/member-secrets-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMemberSecretV2MemberSecretsSecretIdPatch(request: MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest, options?: RequestOptions): ApiPromise&lt;MemberSecretItem, MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a personal secret's value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.memberSecrets.updateMemberSecretV2MemberSecretsSecretIdPatch({
    secretId: "00000000-0000-0000-0000-000000000000",
    body: { value: "some example string" },
  });
  // TODO: Handle 'response' of type MemberSecretItem
} catch (err) {
  // TODO: Handle 'err' of type MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.memberSecrets
  .updateMemberSecretV2MemberSecretsSecretIdPatch({
    secretId: "00000000-0000-0000-0000-000000000000",
    body: { value: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MemberSecretItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>secretId</code> | <code>string</code> | - |
| <code>body</code> | <code>[MemberSecretUpdateRequest](src/models/member-secret-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.memberSecrets.updateMemberSecretV2MemberSecretsSecretIdPatch(request)`

- **OnSuccess**: <code>[MemberSecretItem](src/models/member-secret-item.ts)</code>
- **OnError**: throws <code>[MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchError](src/resources/member-secrets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.memberSecrets.updateMemberSecretV2MemberSecretsSecretIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MemberSecretItem, MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchError&gt;</code>, with `result.value` of type <code>[MemberSecretItem](src/models/member-secret-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Models

> Source: [Models](src/resources/models.ts)

<details>
<summary><code>forkModelV2ModelsForkPost(request: Models.ForkModelV2ModelsForkPostRequest, options?: RequestOptions): ApiPromise&lt;ModelResponse, Models.ForkModelV2ModelsForkPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an owned trainable model derived from a source trainable model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.forkModelV2ModelsForkPost({
    body: { sourceModelId: "00000000-0000-0000-0000-000000000000", name: "some example string" },
  });
  // TODO: Handle 'response' of type ModelResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.ForkModelV2ModelsForkPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .forkModelV2ModelsForkPost({
    body: { sourceModelId: "00000000-0000-0000-0000-000000000000", name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ModelForkRequest](src/models/model-fork-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.forkModelV2ModelsForkPost(request)`

- **OnSuccess**: <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: throws <code>[Models.ForkModelV2ModelsForkPostError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.forkModelV2ModelsForkPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelResponse, Models.ForkModelV2ModelsForkPostError&gt;</code>, with `result.value` of type <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getModelV2ModelsModelIdGet(request: Models.GetModelV2ModelsModelIdGetRequest, options?: RequestOptions): ApiPromise&lt;ModelResponse, Models.GetModelV2ModelsModelIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a catalog model by id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.getModelV2ModelsModelIdGet({
    modelId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ModelResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.GetModelV2ModelsModelIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .getModelV2ModelsModelIdGet({ modelId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.getModelV2ModelsModelIdGet(request)`

- **OnSuccess**: <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: throws <code>[Models.GetModelV2ModelsModelIdGetError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.getModelV2ModelsModelIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelResponse, Models.GetModelV2ModelsModelIdGetError&gt;</code>, with `result.value` of type <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet(request: Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest, options?: RequestOptions): ApiPromise&lt;CheckpointTraceRow[], Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List recent traces produced by a specific model checkpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.listCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet({
    modelId: "00000000-0000-0000-0000-000000000000",
    checkpointId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CheckpointTraceRow[]
} catch (err) {
  // TODO: Handle 'err' of type Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .listCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet({
    modelId: "00000000-0000-0000-0000-000000000000",
    checkpointId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckpointTraceRow[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>string</code> | - |
| <code>checkpointId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 200 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.listCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet(request)`

- **OnSuccess**: <code>[CheckpointTraceRow](src/models/checkpoint-trace-row.ts)[]</code>
- **OnError**: throws <code>[Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.listCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckpointTraceRow[], Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError&gt;</code>, with `result.value` of type <code>[CheckpointTraceRow](src/models/checkpoint-trace-row.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listModelCheckpointsV2ModelsModelIdCheckpointsGet(request: Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest, options?: RequestOptions): ApiPromise&lt;CheckpointResponse[], Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a trainable model's checkpoint tree.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.listModelCheckpointsV2ModelsModelIdCheckpointsGet({
    modelId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CheckpointResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .listModelCheckpointsV2ModelsModelIdCheckpointsGet({ modelId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckpointResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.listModelCheckpointsV2ModelsModelIdCheckpointsGet(request)`

- **OnSuccess**: <code>[CheckpointResponse](src/models/checkpoint-response.ts)[]</code>
- **OnError**: throws <code>[Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.listModelCheckpointsV2ModelsModelIdCheckpointsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckpointResponse[], Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetError&gt;</code>, with `result.value` of type <code>[CheckpointResponse](src/models/checkpoint-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listModelInferenceLogsV2ModelsModelIdLogsGet(request: Models.ListModelInferenceLogsV2ModelsModelIdLogsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedResponseModelInferenceLogEntry, Models.ListModelInferenceLogsV2ModelsModelIdLogsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller team's gateway inference logs for a model, excluding QA analysis calls.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.listModelInferenceLogsV2ModelsModelIdLogsGet({
    modelId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PaginatedResponseModelInferenceLogEntry
} catch (err) {
  // TODO: Handle 'err' of type Models.ListModelInferenceLogsV2ModelsModelIdLogsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .listModelInferenceLogsV2ModelsModelIdLogsGet({ modelId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedResponseModelInferenceLogEntry
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.listModelInferenceLogsV2ModelsModelIdLogsGet(request)`

- **OnSuccess**: <code>[PaginatedResponseModelInferenceLogEntry](src/models/paginated-response-model-inference-log-entry.ts)</code>
- **OnError**: throws <code>[Models.ListModelInferenceLogsV2ModelsModelIdLogsGetError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.listModelInferenceLogsV2ModelsModelIdLogsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedResponseModelInferenceLogEntry, Models.ListModelInferenceLogsV2ModelsModelIdLogsGetError&gt;</code>, with `result.value` of type <code>[PaginatedResponseModelInferenceLogEntry](src/models/paginated-response-model-inference-log-entry.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listModelsV2ModelsGet(request?: Models.ListModelsV2ModelsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedResponseModelResponse, Models.ListModelsV2ModelsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List catalog models visible to the caller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.listModelsV2ModelsGet();
  // TODO: Handle 'response' of type PaginatedResponseModelResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.ListModelsV2ModelsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models.listModelsV2ModelsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedResponseModelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>scope?</code> | <code>[ScopeHudPlatformModelsApi](src/models/unions/scope-hud-platform-models-api.ts)</code> | `catalog` for global base models, `owned` for the team's trainable forks; both when omitted. Signed-out callers must pass `catalog`. |
| <code>search?</code> | <code>[Search](src/models/unions/search.ts)</code> | Case-insensitive match on display name, model name, or provider name. |
| <code>trainable?</code> | <code>boolean</code> | Only models that can be fine-tuned.<br>**Default**: false |
| <code>includeDeprecated?</code> | <code>boolean</code> | Include models whose deprecation date has passed.<br>**Default**: true |
| <code>sort?</code> | <code>[ModelListSort1](src/models/model-list-sort1.ts)</code> | Row order. Signed-out callers cannot sort by `usage`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.listModelsV2ModelsGet(request)`

- **OnSuccess**: <code>[PaginatedResponseModelResponse](src/models/paginated-response-model-response.ts)</code>
- **OnError**: throws <code>[Models.ListModelsV2ModelsGetError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.listModelsV2ModelsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedResponseModelResponse, Models.ListModelsV2ModelsGetError&gt;</code>, with `result.value` of type <code>[PaginatedResponseModelResponse](src/models/paginated-response-model-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modelResultsV2ModelsModelIdResultsGet(request: Models.ModelResultsV2ModelsModelIdResultsGetRequest, options?: RequestOptions): ApiPromise&lt;ModelResultsResponse, Models.ModelResultsV2ModelsModelIdResultsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-taskset evaluation results for a model's checkpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.modelResultsV2ModelsModelIdResultsGet({
    modelId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ModelResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.ModelResultsV2ModelsModelIdResultsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .modelResultsV2ModelsModelIdResultsGet({ modelId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelResultsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>string</code> | - |
| <code>checkpointIds?</code> | <code>[CheckpointIds](src/models/unions/checkpoint-ids.ts)</code> | - |
| <code>purpose?</code> | <code>[Purpose2](src/models/unions/purpose2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.modelResultsV2ModelsModelIdResultsGet(request)`

- **OnSuccess**: <code>[ModelResultsResponse](src/models/model-results-response.ts)</code>
- **OnError**: throws <code>[Models.ModelResultsV2ModelsModelIdResultsGetError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.modelResultsV2ModelsModelIdResultsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelResultsResponse, Models.ModelResultsV2ModelsModelIdResultsGetError&gt;</code>, with `result.value` of type <code>[ModelResultsResponse](src/models/model-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet(request: Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest, options?: RequestOptions): ApiPromise&lt;SuggestedTasksetsResponse, Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suggest tasksets to evaluate or train a model on.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.modelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet({
    modelId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type SuggestedTasksetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .modelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet({
    modelId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuggestedTasksetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>string</code> | - |
| <code>exclude?</code> | <code>[Exclude](src/models/unions/exclude.ts)</code> | - |
| <code>search?</code> | <code>[Search1](src/models/unions/search1.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>purpose?</code> | <code>[Purpose2](src/models/unions/purpose2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.modelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet(request)`

- **OnSuccess**: <code>[SuggestedTasksetsResponse](src/models/suggested-tasksets-response.ts)</code>
- **OnError**: throws <code>[Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.modelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuggestedTasksetsResponse, Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError&gt;</code>, with `result.value` of type <code>[SuggestedTasksetsResponse](src/models/suggested-tasksets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resolveModelV2ModelsResolveGet(request: Models.ResolveModelV2ModelsResolveGetRequest, options?: RequestOptions): ApiPromise&lt;ModelResponse, Models.ResolveModelV2ModelsResolveGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a model string (slug or id) to its catalog record.

General slug→id lookup: any client holding a model string (e.g. a trainable
model's gateway slug) can map it to the id and metadata. Declared before
``/{model_id}`` so the literal ``resolve`` path is not parsed as an id; a
query param (not a path segment) so slugs with ``/`` or ``:`` need no
encoding. Team-scoping still hides other teams' private fine-tunes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.resolveModelV2ModelsResolveGet({ model: "some example string" });
  // TODO: Handle 'response' of type ModelResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.ResolveModelV2ModelsResolveGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .resolveModelV2ModelsResolveGet({ model: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model</code> | <code>string</code> | Model slug (or id) to resolve to its catalog record |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.resolveModelV2ModelsResolveGet(request)`

- **OnSuccess**: <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: throws <code>[Models.ResolveModelV2ModelsResolveGetError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.resolveModelV2ModelsResolveGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelResponse, Models.ResolveModelV2ModelsResolveGetError&gt;</code>, with `result.value` of type <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setModelHeadV2ModelsModelIdHeadPut(request: Models.SetModelHeadV2ModelsModelIdHeadPutRequest, options?: RequestOptions): ApiPromise&lt;ModelResponse, Models.SetModelHeadV2ModelsModelIdHeadPutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Point the model's active checkpoint (head) at one of its checkpoint nodes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.setModelHeadV2ModelsModelIdHeadPut({
    modelId: "00000000-0000-0000-0000-000000000000",
    body: { checkpointId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type ModelResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.SetModelHeadV2ModelsModelIdHeadPutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .setModelHeadV2ModelsModelIdHeadPut({
    modelId: "00000000-0000-0000-0000-000000000000",
    body: { checkpointId: "00000000-0000-0000-0000-000000000000" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>string</code> | - |
| <code>body</code> | <code>[SetHeadRequest](src/models/set-head-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.setModelHeadV2ModelsModelIdHeadPut(request)`

- **OnSuccess**: <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: throws <code>[Models.SetModelHeadV2ModelsModelIdHeadPutError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.setModelHeadV2ModelsModelIdHeadPut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelResponse, Models.SetModelHeadV2ModelsModelIdHeadPutError&gt;</code>, with `result.value` of type <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateModelV2ModelsModelIdPatch(request: Models.UpdateModelV2ModelsModelIdPatchRequest, options?: RequestOptions): ApiPromise&lt;ModelResponse, Models.UpdateModelV2ModelsModelIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a model's catalog fields, such as name or visibility.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.updateModelV2ModelsModelIdPatch({
    modelId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type ModelResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.UpdateModelV2ModelsModelIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .updateModelV2ModelsModelIdPatch({ modelId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ModelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ModelUpdate](src/models/model-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.updateModelV2ModelsModelIdPatch(request)`

- **OnSuccess**: <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: throws <code>[Models.UpdateModelV2ModelsModelIdPatchError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.updateModelV2ModelsModelIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ModelResponse, Models.UpdateModelV2ModelsModelIdPatchError&gt;</code>, with `result.value` of type <code>[ModelResponse](src/models/model-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OAuth

> Source: [OAuth](src/resources/oauth.ts)

<details>
<summary><code>joinOauthAppTeamV2OauthJoinPost(options?: RequestOptions): ApiPromise&lt;OAuthJoinResponse, OAuth.JoinOauthAppTeamV2OauthJoinPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make the OAuth access token's user a member of its application's team.

Idempotent. A user who is already a member keeps their role; a new user
joins as an external member, whom a team admin can promote. A user who was
removed from the team is refused until a team admin invites them again.
Every other endpoint answers ``principal_not_found`` for the token until
its user has joined.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuth.joinOauthAppTeamV2OauthJoinPost();
  // TODO: Handle 'response' of type OAuthJoinResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuth.JoinOauthAppTeamV2OauthJoinPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuth.joinOauthAppTeamV2OauthJoinPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthJoinResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuth.joinOauthAppTeamV2OauthJoinPost()`

- **OnSuccess**: <code>[OAuthJoinResponse](src/models/oauth-join-response.ts)</code>
- **OnError**: throws <code>[OAuth.JoinOauthAppTeamV2OauthJoinPostError](src/resources/oauth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuth.joinOauthAppTeamV2OauthJoinPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthJoinResponse, OAuth.JoinOauthAppTeamV2OauthJoinPostError&gt;</code>, with `result.value` of type <code>[OAuthJoinResponse](src/models/oauth-join-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## QaAgents

> Source: [QaAgents](src/resources/qa-agents.ts)

<details>
<summary><code>getQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet(request: QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest, options?: RequestOptions): ApiPromise&lt;TraceEventsResponse, QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return an output-only QA rollout without evaluator prompts or private inputs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qaAgents.getQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet({
    resultId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qaAgents
  .getQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet({
    resultId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceEventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resultId</code> | <code>string</code> | - |
| <code>sinceSeq?</code> | <code>number</code> | -<br>**Default**: -1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qaAgents.getQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet(request)`

- **OnSuccess**: <code>[TraceEventsResponse](src/models/trace-events-response.ts)</code>
- **OnError**: throws <code>[QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError](src/resources/qa-agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qaAgents.getQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceEventsResponse, QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError&gt;</code>, with `result.value` of type <code>[TraceEventsResponse](src/models/trace-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQaAgentV2QaAgentsAgentIdGet(request: QaAgents.GetQaAgentV2QaAgentsAgentIdGetRequest, options?: RequestOptions): ApiPromise&lt;QaAgentResponse, QaAgents.GetQaAgentV2QaAgentsAgentIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a QA agent by id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qaAgents.getQaAgentV2QaAgentsAgentIdGet({
    agentId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type QaAgentResponse
} catch (err) {
  // TODO: Handle 'err' of type QaAgents.GetQaAgentV2QaAgentsAgentIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qaAgents
  .getQaAgentV2QaAgentsAgentIdGet({ agentId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QaAgentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>agentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qaAgents.getQaAgentV2QaAgentsAgentIdGet(request)`

- **OnSuccess**: <code>[QaAgentResponse](src/models/qa-agent-response.ts)</code>
- **OnError**: throws <code>[QaAgents.GetQaAgentV2QaAgentsAgentIdGetError](src/resources/qa-agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qaAgents.getQaAgentV2QaAgentsAgentIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QaAgentResponse, QaAgents.GetQaAgentV2QaAgentsAgentIdGetError&gt;</code>, with `result.value` of type <code>[QaAgentResponse](src/models/qa-agent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listQaAgentsV2QaAgentsGet(request?: QaAgents.ListQaAgentsV2QaAgentsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedResponseQaAgentResponse, QaAgents.ListQaAgentsV2QaAgentsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller team's QA agents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qaAgents.listQaAgentsV2QaAgentsGet();
  // TODO: Handle 'response' of type PaginatedResponseQaAgentResponse
} catch (err) {
  // TODO: Handle 'err' of type QaAgents.ListQaAgentsV2QaAgentsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qaAgents.listQaAgentsV2QaAgentsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedResponseQaAgentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subjectType?</code> | <code>[QaAgentSubjectType](src/models/qa-agent-subject-type.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qaAgents.listQaAgentsV2QaAgentsGet(request)`

- **OnSuccess**: <code>[PaginatedResponseQaAgentResponse](src/models/paginated-response-qa-agent-response.ts)</code>
- **OnError**: throws <code>[QaAgents.ListQaAgentsV2QaAgentsGetError](src/resources/qa-agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qaAgents.listQaAgentsV2QaAgentsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedResponseQaAgentResponse, QaAgents.ListQaAgentsV2QaAgentsGetError&gt;</code>, with `result.value` of type <code>[PaginatedResponseQaAgentResponse](src/models/paginated-response-qa-agent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourceQaAgentResultsV2QaAgentsResultsResourcesGet(request?: QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest, options?: RequestOptions): ApiPromise&lt;QaAgentResourceResultDetail[], QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List resource QA results by subject or by exact result IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qaAgents.listResourceQaAgentResultsV2QaAgentsResultsResourcesGet();
  // TODO: Handle 'response' of type QaAgentResourceResultDetail[]
} catch (err) {
  // TODO: Handle 'err' of type QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qaAgents.listResourceQaAgentResultsV2QaAgentsResultsResourcesGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QaAgentResourceResultDetail[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subjectType?</code> | <code>[SubjectType](src/models/unions/subject-type.ts)</code> | - |
| <code>subjectIds?</code> | <code>[SubjectIds](src/models/unions/subject-ids.ts)</code> | - |
| <code>resultIds?</code> | <code>[ResultIds](src/models/unions/result-ids.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qaAgents.listResourceQaAgentResultsV2QaAgentsResultsResourcesGet(request)`

- **OnSuccess**: <code>[QaAgentResourceResultDetail](src/models/qa-agent-resource-result-detail.ts)[]</code>
- **OnError**: throws <code>[QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError](src/resources/qa-agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qaAgents.listResourceQaAgentResultsV2QaAgentsResultsResourcesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QaAgentResourceResultDetail[], QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError&gt;</code>, with `result.value` of type <code>[QaAgentResourceResultDetail](src/models/qa-agent-resource-result-detail.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runResourceQaAgentV2QaAgentsAgentIdRunResourcesPost(request: QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest, options?: RequestOptions): ApiPromise&lt;QaAgentResultResponse[], QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Select or launch one QA result for each canonical resource subject.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qaAgents.runResourceQaAgentV2QaAgentsAgentIdRunResourcesPost({
    agentId: "00000000-0000-0000-0000-000000000000",
    body: { subjectIds: ["00000000-0000-0000-0000-000000000000"] },
  });
  // TODO: Handle 'response' of type QaAgentResultResponse[]
} catch (err) {
  // TODO: Handle 'err' of type QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qaAgents
  .runResourceQaAgentV2QaAgentsAgentIdRunResourcesPost({
    agentId: "00000000-0000-0000-0000-000000000000",
    body: { subjectIds: ["00000000-0000-0000-0000-000000000000"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QaAgentResultResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>agentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[QaAgentResourceRunRequest](src/models/qa-agent-resource-run-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qaAgents.runResourceQaAgentV2QaAgentsAgentIdRunResourcesPost(request)`

- **OnSuccess**: <code>[QaAgentResultResponse](src/models/qa-agent-result-response.ts)[]</code>
- **OnError**: throws <code>[QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError](src/resources/qa-agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qaAgents.runResourceQaAgentV2QaAgentsAgentIdRunResourcesPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QaAgentResultResponse[], QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError&gt;</code>, with `result.value` of type <code>[QaAgentResultResponse](src/models/qa-agent-result-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Qa

> Source: [Qa](src/resources/qa.ts)

<details>
<summary><code>listQaChecksV2QaChecksGet(options?: RequestOptions): ApiPromise&lt;QaCheckListResponse, Qa.ListQaChecksV2QaChecksGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the QA checks available to run, each with the subject type it judges.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qa.listQaChecksV2QaChecksGet();
  // TODO: Handle 'response' of type QaCheckListResponse
} catch (err) {
  // TODO: Handle 'err' of type Qa.ListQaChecksV2QaChecksGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qa.listQaChecksV2QaChecksGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QaCheckListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qa.listQaChecksV2QaChecksGet()`

- **OnSuccess**: <code>[QaCheckListResponse](src/models/qa-check-list-response.ts)</code>
- **OnError**: throws <code>[Qa.ListQaChecksV2QaChecksGetError](src/resources/qa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qa.listQaChecksV2QaChecksGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QaCheckListResponse, Qa.ListQaChecksV2QaChecksGetError&gt;</code>, with `result.value` of type <code>[QaCheckListResponse](src/models/qa-check-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listQaResultsV2QaResultsGet(request?: Qa.ListQaResultsV2QaResultsGetRequest, options?: RequestOptions): ApiPromise&lt;QaResultListResponse, Qa.ListQaResultsV2QaResultsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the result in effect for every QA check on the given evaluation traces or tasks.

A task's results in effect are those on its current version. With
``include_history``, list every result instead, newest first, across a
task's versions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qa.listQaResultsV2QaResultsGet();
  // TODO: Handle 'response' of type QaResultListResponse
} catch (err) {
  // TODO: Handle 'err' of type Qa.ListQaResultsV2QaResultsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qa.listQaResultsV2QaResultsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QaResultListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceIds?</code> | <code>[TraceIds](src/models/unions/trace-ids.ts)</code> | - |
| <code>taskIds?</code> | <code>[TaskIds](src/models/unions/task-ids.ts)</code> | - |
| <code>includeHistory?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qa.listQaResultsV2QaResultsGet(request)`

- **OnSuccess**: <code>[QaResultListResponse](src/models/qa-result-list-response.ts)</code>
- **OnError**: throws <code>[Qa.ListQaResultsV2QaResultsGetError](src/resources/qa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qa.listQaResultsV2QaResultsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QaResultListResponse, Qa.ListQaResultsV2QaResultsGetError&gt;</code>, with `result.value` of type <code>[QaResultListResponse](src/models/qa-result-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runQaChecksV2QaRunsPost(request: Qa.RunQaChecksV2QaRunsPostRequest, options?: RequestOptions): ApiPromise&lt;QaResultListResponse, Qa.RunQaChecksV2QaRunsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run QA checks against completed evaluation traces or tasks as one run; returns each subject's result of each check.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qa.runQaChecksV2QaRunsPost({ body: { checkKeys: ["some example string"] } });
  // TODO: Handle 'response' of type QaResultListResponse
} catch (err) {
  // TODO: Handle 'err' of type Qa.RunQaChecksV2QaRunsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qa
  .runQaChecksV2QaRunsPost({ body: { checkKeys: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QaResultListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QaRunCreateRequest](src/models/qa-run-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qa.runQaChecksV2QaRunsPost(request)`

- **OnSuccess**: <code>[QaResultListResponse](src/models/qa-result-list-response.ts)</code>
- **OnError**: throws <code>[Qa.RunQaChecksV2QaRunsPostError](src/resources/qa.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qa.runQaChecksV2QaRunsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QaResultListResponse, Qa.RunQaChecksV2QaRunsPostError&gt;</code>, with `result.value` of type <code>[QaResultListResponse](src/models/qa-result-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RegistryApi

> Source: [RegistryApi](src/resources/registry-api.ts)

<details>
<summary><code>getRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet(request: RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest, options?: RequestOptions): ApiPromise&lt;RegistrySourceUrlResponse, RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a presigned download URL for the registry's source archive.

Readers outside the owning team download only the latest build of a public environment
whose owner published its source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registryApi.getRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet({
    registryId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type RegistrySourceUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registryApi
  .getRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet({
    registryId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegistrySourceUrlResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registryId</code> | <code>string</code> | - |
| <code>buildId?</code> | <code>[BuildId1](src/models/unions/build-id1.ts)</code> | Download a specific build's source archive. Defaults to the registry's latest build when omitted. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registryApi.getRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet(request)`

- **OnSuccess**: <code>[RegistrySourceUrlResponse](src/models/registry-source-url-response.ts)</code>
- **OnError**: throws <code>[RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError](src/resources/registry-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registryApi.getRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegistrySourceUrlResponse, RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError&gt;</code>, with `result.value` of type <code>[RegistrySourceUrlResponse](src/models/registry-source-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRegistryV2RegistryRegistryIdGet(request: RegistryApi.GetRegistryV2RegistryRegistryIdGetRequest, options?: RequestOptions): ApiPromise&lt;RegistryDetailResponse, RegistryApi.GetRegistryV2RegistryRegistryIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a registry by id with its latest build details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registryApi.getRegistryV2RegistryRegistryIdGet({
    registryId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type RegistryDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type RegistryApi.GetRegistryV2RegistryRegistryIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registryApi
  .getRegistryV2RegistryRegistryIdGet({ registryId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegistryDetailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registryId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registryApi.getRegistryV2RegistryRegistryIdGet(request)`

- **OnSuccess**: <code>[RegistryDetailResponse](src/models/registry-detail-response.ts)</code>
- **OnError**: throws <code>[RegistryApi.GetRegistryV2RegistryRegistryIdGetError](src/resources/registry-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registryApi.getRegistryV2RegistryRegistryIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegistryDetailResponse, RegistryApi.GetRegistryV2RegistryRegistryIdGetError&gt;</code>, with `result.value` of type <code>[RegistryDetailResponse](src/models/registry-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRegistriesV2RegistryGet(request?: RegistryApi.ListRegistriesV2RegistryGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedResponseRegistryDetailResponse, RegistryApi.ListRegistriesV2RegistryGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List registries visible to the caller, with search, ownership, and sort filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registryApi.listRegistriesV2RegistryGet();
  // TODO: Handle 'response' of type PaginatedResponseRegistryDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type RegistryApi.ListRegistriesV2RegistryGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registryApi.listRegistriesV2RegistryGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedResponseRegistryDetailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>search?</code> | <code>[SearchHudPlatformRegistryApi](src/models/unions/search-hud-platform-registry-api.ts)</code> | ILIKE-match on name |
| <code>matchTemplates?</code> | <code>boolean</code> | When search is set, also match environment description and latest-build template name, description, and setup_description<br>**Default**: false |
| <code>includeLatestScenarios?</code> | <code>boolean</code> | Embed latest-build templates on each list row<br>**Default**: false |
| <code>publicOnly?</code> | <code>boolean</code> | Only public registries; anonymous browsing requires this or featured_only<br>**Default**: false |
| <code>featuredOnly?</code> | <code>boolean</code> | Only platform-featured registries, which are always public<br>**Default**: false |
| <code>ownerOnly?</code> | <code>boolean</code> | Only registries owned by the caller's membership; ignored when public_only=True<br>**Default**: false |
| <code>projectId?</code> | <code>[ProjectId1](src/models/unions/project-id1.ts)</code> | Only registries contained by this Project; omitted lists every Project |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC)<br>**Default**: "starred" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registryApi.listRegistriesV2RegistryGet(request)`

- **OnSuccess**: <code>[PaginatedResponseRegistryDetailResponse](src/models/paginated-response-registry-detail-response.ts)</code>
- **OnError**: throws <code>[RegistryApi.ListRegistriesV2RegistryGetError](src/resources/registry-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registryApi.listRegistriesV2RegistryGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedResponseRegistryDetailResponse, RegistryApi.ListRegistriesV2RegistryGetError&gt;</code>, with `result.value` of type <code>[PaginatedResponseRegistryDetailResponse](src/models/paginated-response-registry-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRegistryScenariosV2RegistryRegistryIdScenariosGet(request: RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest, options?: RequestOptions): ApiPromise&lt;ScenarioResponse[], RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List scenarios for a registry build (latest build by default).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registryApi.listRegistryScenariosV2RegistryRegistryIdScenariosGet({
    registryId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ScenarioResponse[]
} catch (err) {
  // TODO: Handle 'err' of type RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registryApi
  .listRegistryScenariosV2RegistryRegistryIdScenariosGet({
    registryId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScenarioResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registryId</code> | <code>string</code> | - |
| <code>buildId?</code> | <code>[BuildId2](src/models/unions/build-id2.ts)</code> | Filter scenarios to a specific build of this registry. Defaults to the registry's latest build when omitted. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registryApi.listRegistryScenariosV2RegistryRegistryIdScenariosGet(request)`

- **OnSuccess**: <code>[ScenarioResponse](src/models/scenario-response.ts)[]</code>
- **OnError**: throws <code>[RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetError](src/resources/registry-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registryApi.listRegistryScenariosV2RegistryRegistryIdScenariosGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScenarioResponse[], RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetError&gt;</code>, with `result.value` of type <code>[ScenarioResponse](src/models/scenario-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Rollouts

> Source: [Rollouts](src/resources/rollouts.ts)

<details>
<summary><code>cancelJobV2RolloutsCancelJobPost(request: Rollouts.CancelJobV2RolloutsCancelJobPostRequest, options?: RequestOptions): ApiPromise&lt;CancelJobResponse, Rollouts.CancelJobV2RolloutsCancelJobPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel all non-terminal traces in a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.rollouts.cancelJobV2RolloutsCancelJobPost({
    body: { jobId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type CancelJobResponse
} catch (err) {
  // TODO: Handle 'err' of type Rollouts.CancelJobV2RolloutsCancelJobPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rollouts
  .cancelJobV2RolloutsCancelJobPost({ body: { jobId: "00000000-0000-0000-0000-000000000000" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CancelJobRequest](src/models/cancel-job-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rollouts.cancelJobV2RolloutsCancelJobPost(request)`

- **OnSuccess**: <code>[CancelJobResponse](src/models/cancel-job-response.ts)</code>
- **OnError**: throws <code>[Rollouts.CancelJobV2RolloutsCancelJobPostError](src/resources/rollouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rollouts.cancelJobV2RolloutsCancelJobPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelJobResponse, Rollouts.CancelJobV2RolloutsCancelJobPostError&gt;</code>, with `result.value` of type <code>[CancelJobResponse](src/models/cancel-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelUserJobsV2RolloutsCancelUserJobsPost(options?: RequestOptions): ApiPromise&lt;CancelUserJobsResponse, Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel all of the caller's active jobs, reporting per-job cancellation counts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.rollouts.cancelUserJobsV2RolloutsCancelUserJobsPost();
  // TODO: Handle 'response' of type CancelUserJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rollouts.cancelUserJobsV2RolloutsCancelUserJobsPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelUserJobsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rollouts.cancelUserJobsV2RolloutsCancelUserJobsPost()`

- **OnSuccess**: <code>[CancelUserJobsResponse](src/models/cancel-user-jobs-response.ts)</code>
- **OnError**: throws <code>[Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPostError](src/resources/rollouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rollouts.cancelUserJobsV2RolloutsCancelUserJobsPost().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelUserJobsResponse, Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPostError&gt;</code>, with `result.value` of type <code>[CancelUserJobsResponse](src/models/cancel-user-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelV2RolloutsCancelPost(request: Rollouts.CancelV2RolloutsCancelPostRequest, options?: RequestOptions): ApiPromise&lt;CancelResponse, Rollouts.CancelV2RolloutsCancelPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a single rollout trace; noop if it already reached a terminal state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.rollouts.cancelV2RolloutsCancelPost({
    body: { traceId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type CancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Rollouts.CancelV2RolloutsCancelPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rollouts
  .cancelV2RolloutsCancelPost({ body: { traceId: "00000000-0000-0000-0000-000000000000" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CancelRequest](src/models/cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rollouts.cancelV2RolloutsCancelPost(request)`

- **OnSuccess**: <code>[CancelResponse](src/models/cancel-response.ts)</code>
- **OnError**: throws <code>[Rollouts.CancelV2RolloutsCancelPostError](src/resources/rollouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rollouts.cancelV2RolloutsCancelPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelResponse, Rollouts.CancelV2RolloutsCancelPostError&gt;</code>, with `result.value` of type <code>[CancelResponse](src/models/cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runListV2RolloutsRunListPost(request: Rollouts.RunListV2RolloutsRunListPostRequest, options?: RequestOptions): ApiPromise&lt;RolloutBatchResponse, Rollouts.RunListV2RolloutsRunListPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Launch a batch of hosted rollouts under one job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.rollouts.runListV2RolloutsRunListPost({ body: {} });
  // TODO: Handle 'response' of type RolloutBatchResponse
} catch (err) {
  // TODO: Handle 'err' of type Rollouts.RunListV2RolloutsRunListPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rollouts.runListV2RolloutsRunListPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RolloutBatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RolloutRunListRequest](src/models/rollout-run-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rollouts.runListV2RolloutsRunListPost(request)`

- **OnSuccess**: <code>[RolloutBatchResponse](src/models/rollout-batch-response.ts)</code>
- **OnError**: throws <code>[Rollouts.RunListV2RolloutsRunListPostError](src/resources/rollouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rollouts.runListV2RolloutsRunListPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RolloutBatchResponse, Rollouts.RunListV2RolloutsRunListPostError&gt;</code>, with `result.value` of type <code>[RolloutBatchResponse](src/models/rollout-batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runV2RolloutsRunPost(request: Rollouts.RunV2RolloutsRunPostRequest, options?: RequestOptions): ApiPromise&lt;RolloutResponse, Rollouts.RunV2RolloutsRunPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Launch a single hosted rollout and return its trace and job identifiers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.rollouts.runV2RolloutsRunPost({
    body: {
      taskVersionId: "00000000-0000-0000-0000-000000000000",
      modelId: "00000000-0000-0000-0000-000000000000",
    },
  });
  // TODO: Handle 'response' of type RolloutResponse
} catch (err) {
  // TODO: Handle 'err' of type Rollouts.RunV2RolloutsRunPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rollouts
  .runV2RolloutsRunPost({
    body: {
      taskVersionId: "00000000-0000-0000-0000-000000000000",
      modelId: "00000000-0000-0000-0000-000000000000",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RolloutResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RolloutRunRequest](src/models/rollout-run-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rollouts.runV2RolloutsRunPost(request)`

- **OnSuccess**: <code>[RolloutResponse](src/models/rollout-response.ts)</code>
- **OnError**: throws <code>[Rollouts.RunV2RolloutsRunPostError](src/resources/rollouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rollouts.runV2RolloutsRunPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RolloutResponse, Rollouts.RunV2RolloutsRunPostError&gt;</code>, with `result.value` of type <code>[RolloutResponse](src/models/rollout-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitV2RolloutsSubmitPost(request: Rollouts.SubmitV2RolloutsSubmitPostRequest, options?: RequestOptions): ApiPromise&lt;RolloutResponse, Rollouts.SubmitV2RolloutsSubmitPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

v6 SDK hosted rollout: env/task reference + agent spec under the SDK's job/trace identity.

The SDK polls GET /v2/trace/{trace_id} to completion.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.rollouts.submitV2RolloutsSubmitPost({
    body: {
      traceId: "00000000-0000-0000-0000-000000000000",
      jobId: "00000000-0000-0000-0000-000000000000",
      env: "some example string",
      task: "some example string",
      agent: { type: TypeHudPlatformRolloutsApi.Claude, config: {} },
    },
  });
  // TODO: Handle 'response' of type RolloutResponse
} catch (err) {
  // TODO: Handle 'err' of type Rollouts.SubmitV2RolloutsSubmitPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rollouts
  .submitV2RolloutsSubmitPost({
    body: {
      traceId: "00000000-0000-0000-0000-000000000000",
      jobId: "00000000-0000-0000-0000-000000000000",
      env: "some example string",
      task: "some example string",
      agent: { type: TypeHudPlatformRolloutsApi.Claude, config: {} },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RolloutResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RolloutSubmitRequest](src/models/rollout-submit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rollouts.submitV2RolloutsSubmitPost(request)`

- **OnSuccess**: <code>[RolloutResponse](src/models/rollout-response.ts)</code>
- **OnError**: throws <code>[Rollouts.SubmitV2RolloutsSubmitPostError](src/resources/rollouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rollouts.submitV2RolloutsSubmitPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RolloutResponse, Rollouts.SubmitV2RolloutsSubmitPostError&gt;</code>, with `result.value` of type <code>[RolloutResponse](src/models/rollout-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](src/resources/storage.ts)

<details>
<summary><code>listTraceArtifactsV2StorageTracesTraceIdArtifactsGet(request: Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest, options?: RequestOptions): ApiPromise&lt;TraceStorageObjectListResponse, Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List trace-owned screenshots, recordings, and captured files.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storage.listTraceArtifactsV2StorageTracesTraceIdArtifactsGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceStorageObjectListResponse
} catch (err) {
  // TODO: Handle 'err' of type Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storage
  .listTraceArtifactsV2StorageTracesTraceIdArtifactsGet({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceStorageObjectListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storage.listTraceArtifactsV2StorageTracesTraceIdArtifactsGet(request)`

- **OnSuccess**: <code>[TraceStorageObjectListResponse](src/models/trace-storage-object-list-response.ts)</code>
- **OnError**: throws <code>[Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError](src/resources/storage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storage.listTraceArtifactsV2StorageTracesTraceIdArtifactsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceStorageObjectListResponse, Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError&gt;</code>, with `result.value` of type <code>[TraceStorageObjectListResponse](src/models/trace-storage-object-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>traceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet(request: Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest, options?: RequestOptions): ApiPromise&lt;TraceWorkspaceChangesResponse, Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return filetracking snapshots, patches, and captured files for a trace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storage.traceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceWorkspaceChangesResponse
} catch (err) {
  // TODO: Handle 'err' of type Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storage
  .traceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceWorkspaceChangesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storage.traceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet(request)`

- **OnSuccess**: <code>[TraceWorkspaceChangesResponse](src/models/trace-workspace-changes-response.ts)</code>
- **OnError**: throws <code>[Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError](src/resources/storage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storage.traceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceWorkspaceChangesResponse, Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError&gt;</code>, with `result.value` of type <code>[TraceWorkspaceChangesResponse](src/models/trace-workspace-changes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>traceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet(request: Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest, options?: RequestOptions): ApiPromise&lt;TraceWorkspaceFilesResponse, Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return final captured file contents for a trace workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storage.traceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceWorkspaceFilesResponse
} catch (err) {
  // TODO: Handle 'err' of type Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storage
  .traceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceWorkspaceFilesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storage.traceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet(request)`

- **OnSuccess**: <code>[TraceWorkspaceFilesResponse](src/models/trace-workspace-files-response.ts)</code>
- **OnError**: throws <code>[Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError](src/resources/storage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storage.traceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceWorkspaceFilesResponse, Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError&gt;</code>, with `result.value` of type <code>[TraceWorkspaceFilesResponse](src/models/trace-workspace-files-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/resources/tasks.ts)

<details>
<summary><code>bulkUpdateTaskStageV2TasksStagePatch(request: Tasks.BulkUpdateTaskStageV2TasksStagePatchRequest, options?: RequestOptions): ApiPromise&lt;BulkStatusResponse, Tasks.BulkUpdateTaskStageV2TasksStagePatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk lifecycle-stage move (advance one stage / send back); non-atomic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.bulkUpdateTaskStageV2TasksStagePatch({
    body: { ids: ["00000000-0000-0000-0000-000000000000"], stage: "some example string" },
  });
  // TODO: Handle 'response' of type BulkStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.BulkUpdateTaskStageV2TasksStagePatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .bulkUpdateTaskStageV2TasksStagePatch({
    body: { ids: ["00000000-0000-0000-0000-000000000000"], stage: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkStageRequest](src/models/bulk-stage-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.bulkUpdateTaskStageV2TasksStagePatch(request)`

- **OnSuccess**: <code>[BulkStatusResponse](src/models/bulk-status-response.ts)</code>
- **OnError**: throws <code>[Tasks.BulkUpdateTaskStageV2TasksStagePatchError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.bulkUpdateTaskStageV2TasksStagePatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkStatusResponse, Tasks.BulkUpdateTaskStageV2TasksStagePatchError&gt;</code>, with `result.value` of type <code>[BulkStatusResponse](src/models/bulk-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateTaskStatusV2TasksStatusPatch(request: Tasks.BulkUpdateTaskStatusV2TasksStatusPatchRequest, options?: RequestOptions): ApiPromise&lt;BulkStatusResponse, Tasks.BulkUpdateTaskStatusV2TasksStatusPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk status mutation; reviewer-only clear resets directly to pending; non-atomic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.bulkUpdateTaskStatusV2TasksStatusPatch({ body: {} });
  // TODO: Handle 'response' of type BulkStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.BulkUpdateTaskStatusV2TasksStatusPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks.bulkUpdateTaskStatusV2TasksStatusPatch({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkStatusRequest](src/models/bulk-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.bulkUpdateTaskStatusV2TasksStatusPatch(request)`

- **OnSuccess**: <code>[BulkStatusResponse](src/models/bulk-status-response.ts)</code>
- **OnError**: throws <code>[Tasks.BulkUpdateTaskStatusV2TasksStatusPatchError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.bulkUpdateTaskStatusV2TasksStatusPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkStatusResponse, Tasks.BulkUpdateTaskStatusV2TasksStatusPatchError&gt;</code>, with `result.value` of type <code>[BulkStatusResponse](src/models/bulk-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTaskCommentV2TasksTaskIdCommentsPost(request: Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostRequest, options?: RequestOptions): ApiPromise&lt;TaskCommentItem, Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a comment to a task and notify mentioned users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.createTaskCommentV2TasksTaskIdCommentsPost({
    taskId: "00000000-0000-0000-0000-000000000000",
    body: { body: "some example string" },
  });
  // TODO: Handle 'response' of type TaskCommentItem
} catch (err) {
  // TODO: Handle 'err' of type Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .createTaskCommentV2TasksTaskIdCommentsPost({
    taskId: "00000000-0000-0000-0000-000000000000",
    body: { body: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskCommentItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateTaskCommentRequest](src/models/create-task-comment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.createTaskCommentV2TasksTaskIdCommentsPost(request)`

- **OnSuccess**: <code>[TaskCommentItem](src/models/task-comment-item.ts)</code>
- **OnError**: throws <code>[Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.createTaskCommentV2TasksTaskIdCommentsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskCommentItem, Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostError&gt;</code>, with `result.value` of type <code>[TaskCommentItem](src/models/task-comment-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete(request: Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a task comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tasks.deleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete({
    taskId: "00000000-0000-0000-0000-000000000000",
    commentId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .deleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete({
    taskId: "00000000-0000-0000-0000-000000000000",
    commentId: "00000000-0000-0000-0000-000000000000",
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
| <code>taskId</code> | <code>string</code> | - |
| <code>commentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.deleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.deleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaskActivityV2TasksTaskIdActivityGet(request: Tasks.GetTaskActivityV2TasksTaskIdActivityGetRequest, options?: RequestOptions): ApiPromise&lt;TaskActivityResponse, Tasks.GetTaskActivityV2TasksTaskIdActivityGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a task's combined activity feed of comments and state changes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTaskActivityV2TasksTaskIdActivityGet({
    taskId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TaskActivityResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTaskActivityV2TasksTaskIdActivityGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTaskActivityV2TasksTaskIdActivityGet({ taskId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskActivityResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTaskActivityV2TasksTaskIdActivityGet(request)`

- **OnSuccess**: <code>[TaskActivityResponse](src/models/task-activity-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetTaskActivityV2TasksTaskIdActivityGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTaskActivityV2TasksTaskIdActivityGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskActivityResponse, Tasks.GetTaskActivityV2TasksTaskIdActivityGetError&gt;</code>, with `result.value` of type <code>[TaskActivityResponse](src/models/task-activity-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaskCommentsV2TasksTaskIdCommentsGet(request: Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetRequest, options?: RequestOptions): ApiPromise&lt;TaskCommentsListResponse, Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List comments on a task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTaskCommentsV2TasksTaskIdCommentsGet({
    taskId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TaskCommentsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTaskCommentsV2TasksTaskIdCommentsGet({ taskId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskCommentsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTaskCommentsV2TasksTaskIdCommentsGet(request)`

- **OnSuccess**: <code>[TaskCommentsListResponse](src/models/task-comments-list-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTaskCommentsV2TasksTaskIdCommentsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskCommentsListResponse, Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetError&gt;</code>, with `result.value` of type <code>[TaskCommentsListResponse](src/models/task-comments-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaskReadyCheckV2TasksTaskIdReadyCheckGet(request: Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest, options?: RequestOptions): ApiPromise&lt;ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet, Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluate the taskset's ready requirements against the task's latest version.

Informational: the Ready click is not blocked server-side.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTaskReadyCheckV2TasksTaskIdReadyCheckGet({
    taskId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTaskReadyCheckV2TasksTaskIdReadyCheckGet({ taskId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTaskReadyCheckV2TasksTaskIdReadyCheckGet(request)`

- **OnSuccess**: <code>[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet](src/models/unions/response-get-task-ready-check-v2-tasks-task-id-ready-check-get.ts)</code>
- **OnError**: throws <code>[Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTaskReadyCheckV2TasksTaskIdReadyCheckGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet, Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError&gt;</code>, with `result.value` of type <code>[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet](src/models/unions/response-get-task-ready-check-v2-tasks-task-id-ready-check-get.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaskTracesV2TasksTaskIdTracesGet(request: Tasks.GetTaskTracesV2TasksTaskIdTracesGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedResponseTaskTrace, Tasks.GetTaskTracesV2TasksTaskIdTracesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the task's traces, newest first, optionally for one version or model.

Callers without scoped access to the task receive traces from public jobs only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTaskTracesV2TasksTaskIdTracesGet({
    taskId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PaginatedResponseTaskTrace
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTaskTracesV2TasksTaskIdTracesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTaskTracesV2TasksTaskIdTracesGet({ taskId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedResponseTaskTrace
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>taskVersionId?</code> | <code>[TaskVersionId](src/models/unions/task-version-id.ts)</code> | - |
| <code>modelId?</code> | <code>[ModelId](src/models/unions/model-id.ts)</code> | - |
| <code>excludeTraining?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTaskTracesV2TasksTaskIdTracesGet(request)`

- **OnSuccess**: <code>[PaginatedResponseTaskTrace](src/models/paginated-response-task-trace.ts)</code>
- **OnError**: throws <code>[Tasks.GetTaskTracesV2TasksTaskIdTracesGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTaskTracesV2TasksTaskIdTracesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedResponseTaskTrace, Tasks.GetTaskTracesV2TasksTaskIdTracesGetError&gt;</code>, with `result.value` of type <code>[PaginatedResponseTaskTrace](src/models/paginated-response-task-trace.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaskVersionV2TasksTaskIdVersionsVersionIdGet(request: Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest, options?: RequestOptions): ApiPromise&lt;TaskWithVersionResponse, Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Task plus one of its versions, by version id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTaskVersionV2TasksTaskIdVersionsVersionIdGet({
    taskId: "00000000-0000-0000-0000-000000000000",
    versionId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TaskWithVersionResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTaskVersionV2TasksTaskIdVersionsVersionIdGet({
    taskId: "00000000-0000-0000-0000-000000000000",
    versionId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskWithVersionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |
| <code>versionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTaskVersionV2TasksTaskIdVersionsVersionIdGet(request)`

- **OnSuccess**: <code>[TaskWithVersionResponse](src/models/task-with-version-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTaskVersionV2TasksTaskIdVersionsVersionIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskWithVersionResponse, Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError&gt;</code>, with `result.value` of type <code>[TaskWithVersionResponse](src/models/task-with-version-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTaskCommentV2TasksTaskIdCommentsCommentIdPatch(request: Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest, options?: RequestOptions): ApiPromise&lt;TaskCommentItem, Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edit one of the caller's task comments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.updateTaskCommentV2TasksTaskIdCommentsCommentIdPatch({
    taskId: "00000000-0000-0000-0000-000000000000",
    commentId: "00000000-0000-0000-0000-000000000000",
    body: { body: "some example string" },
  });
  // TODO: Handle 'response' of type TaskCommentItem
} catch (err) {
  // TODO: Handle 'err' of type Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .updateTaskCommentV2TasksTaskIdCommentsCommentIdPatch({
    taskId: "00000000-0000-0000-0000-000000000000",
    commentId: "00000000-0000-0000-0000-000000000000",
    body: { body: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskCommentItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | - |
| <code>commentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateTaskCommentRequest](src/models/update-task-comment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.updateTaskCommentV2TasksTaskIdCommentsCommentIdPatch(request)`

- **OnSuccess**: <code>[TaskCommentItem](src/models/task-comment-item.ts)</code>
- **OnError**: throws <code>[Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.updateTaskCommentV2TasksTaskIdCommentsCommentIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskCommentItem, Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError&gt;</code>, with `result.value` of type <code>[TaskCommentItem](src/models/task-comment-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadTasksV2TasksUploadPost(request: Tasks.UploadTasksV2TasksUploadPostRequest, options?: RequestOptions): ApiPromise&lt;TaskUploadResponse, Tasks.UploadTasksV2TasksUploadPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk-upload tasks into a taskset, creating the taskset if needed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.uploadTasksV2TasksUploadPost({
    body: { tasks: [{ name: "some example string" }] },
  });
  // TODO: Handle 'response' of type TaskUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.UploadTasksV2TasksUploadPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .uploadTasksV2TasksUploadPost({ body: { tasks: [{ name: "some example string" }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskUploadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TaskUploadRequest](src/models/task-upload-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.uploadTasksV2TasksUploadPost(request)`

- **OnSuccess**: <code>[TaskUploadResponse](src/models/task-upload-response.ts)</code>
- **OnError**: throws <code>[Tasks.UploadTasksV2TasksUploadPostError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.uploadTasksV2TasksUploadPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskUploadResponse, Tasks.UploadTasksV2TasksUploadPostError&gt;</code>, with `result.value` of type <code>[TaskUploadResponse](src/models/task-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tasksets

> Source: [Tasksets](src/resources/tasksets.ts)

<details>
<summary><code>createTasksetV2TasksetsPost(request: Tasksets.CreateTasksetV2TasksetsPostRequest, options?: RequestOptions): ApiPromise&lt;TasksetResponse, Tasksets.CreateTasksetV2TasksetsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a taskset for the caller's team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasksets.createTasksetV2TasksetsPost({
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type TasksetResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasksets.CreateTasksetV2TasksetsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasksets
  .createTasksetV2TasksetsPost({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TasksetCreateRequest](src/models/taskset-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasksets.createTasksetV2TasksetsPost(request)`

- **OnSuccess**: <code>[TasksetResponse](src/models/taskset-response.ts)</code>
- **OnError**: throws <code>[Tasksets.CreateTasksetV2TasksetsPostError](src/resources/tasksets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasksets.createTasksetV2TasksetsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksetResponse, Tasksets.CreateTasksetV2TasksetsPostError&gt;</code>, with `result.value` of type <code>[TasksetResponse](src/models/taskset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportTasksetV2TasksetsTasksetIdExportGet(request: Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetRequest, options?: RequestOptions): ApiPromise&lt;TasksetExportResponse, Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a taskset by UUID in the task wire format.

Same shape as the by-name lookup, and the only fetch path for cross-team
public tasksets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasksets.exportTasksetV2TasksetsTasksetIdExportGet({
    tasksetId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TasksetExportResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasksets
  .exportTasksetV2TasksetsTasksetIdExportGet({ tasksetId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksetExportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tasksetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasksets.exportTasksetV2TasksetsTasksetIdExportGet(request)`

- **OnSuccess**: <code>[TasksetExportResponse](src/models/taskset-export-response.ts)</code>
- **OnError**: throws <code>[Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetError](src/resources/tasksets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasksets.exportTasksetV2TasksetsTasksetIdExportGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksetExportResponse, Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetError&gt;</code>, with `result.value` of type <code>[TasksetExportResponse](src/models/taskset-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksetByNameV2TasksetsByNameNameGet(request: Tasksets.GetTasksetByNameV2TasksetsByNameNameGetRequest, options?: RequestOptions): ApiPromise&lt;TasksetExportResponse, Tasksets.GetTasksetByNameV2TasksetsByNameNameGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a taskset by name and return its tasks in the task wire format.

Returns the latest version per task — the read-side counterpart of
`POST /tasks/upload`.

Scoped to the caller's team. Cross-team public tasksets are accessible
by UUID (`GET /tasksets/{id}/export`) only — name uniqueness is per team,
so resolving by name across teams would be ambiguous.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasksets.getTasksetByNameV2TasksetsByNameNameGet({
    name: "some example string",
  });
  // TODO: Handle 'response' of type TasksetExportResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasksets.GetTasksetByNameV2TasksetsByNameNameGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasksets
  .getTasksetByNameV2TasksetsByNameNameGet({ name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksetExportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasksets.getTasksetByNameV2TasksetsByNameNameGet(request)`

- **OnSuccess**: <code>[TasksetExportResponse](src/models/taskset-export-response.ts)</code>
- **OnError**: throws <code>[Tasksets.GetTasksetByNameV2TasksetsByNameNameGetError](src/resources/tasksets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasksets.getTasksetByNameV2TasksetsByNameNameGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksetExportResponse, Tasksets.GetTasksetByNameV2TasksetsByNameNameGetError&gt;</code>, with `result.value` of type <code>[TasksetExportResponse](src/models/taskset-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksetV2TasksetsTasksetIdGet(request: Tasksets.GetTasksetV2TasksetsTasksetIdGetRequest, options?: RequestOptions): ApiPromise&lt;TasksetResponse, Tasksets.GetTasksetV2TasksetsTasksetIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a taskset by id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasksets.getTasksetV2TasksetsTasksetIdGet({
    tasksetId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TasksetResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasksets.GetTasksetV2TasksetsTasksetIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasksets
  .getTasksetV2TasksetsTasksetIdGet({ tasksetId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tasksetId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasksets.getTasksetV2TasksetsTasksetIdGet(request)`

- **OnSuccess**: <code>[TasksetResponse](src/models/taskset-response.ts)</code>
- **OnError**: throws <code>[Tasksets.GetTasksetV2TasksetsTasksetIdGetError](src/resources/tasksets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasksets.getTasksetV2TasksetsTasksetIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksetResponse, Tasksets.GetTasksetV2TasksetsTasksetIdGetError&gt;</code>, with `result.value` of type <code>[TasksetResponse](src/models/taskset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTasksetTasksV2TasksetsTasksetIdTasksGet(request: Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedResponseTaskResponse, Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List live task definitions, including for public-only viewers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasksets.listTasksetTasksV2TasksetsTasksetIdTasksGet({
    tasksetId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PaginatedResponseTaskResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasksets
  .listTasksetTasksV2TasksetsTasksetIdTasksGet({ tasksetId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedResponseTaskResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tasksetId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasksets.listTasksetTasksV2TasksetsTasksetIdTasksGet(request)`

- **OnSuccess**: <code>[PaginatedResponseTaskResponse](src/models/paginated-response-task-response.ts)</code>
- **OnError**: throws <code>[Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetError](src/resources/tasksets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasksets.listTasksetTasksV2TasksetsTasksetIdTasksGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedResponseTaskResponse, Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetError&gt;</code>, with `result.value` of type <code>[PaginatedResponseTaskResponse](src/models/paginated-response-task-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTasksetsV2TasksetsGet(request?: Tasksets.ListTasksetsV2TasksetsGetRequest, options?: RequestOptions): ApiPromise&lt;PaginatedResponseTasksetResponse, Tasksets.ListTasksetsV2TasksetsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List tasksets visible to the caller, with search, ownership, and sort filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasksets.listTasksetsV2TasksetsGet();
  // TODO: Handle 'response' of type PaginatedResponseTasksetResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasksets.ListTasksetsV2TasksetsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasksets.listTasksetsV2TasksetsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedResponseTasksetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>search?</code> | <code>[SearchHudPlatformTasksetsApi](src/models/unions/search-hud-platform-tasksets-api.ts)</code> | ILIKE-match on taskset name |
| <code>publicOnly?</code> | <code>boolean</code> | Only public tasksets; anonymous browsing requires this or featured_only<br>**Default**: false |
| <code>featuredOnly?</code> | <code>boolean</code> | Only platform-featured tasksets, which are always public<br>**Default**: false |
| <code>ownerOnly?</code> | <code>boolean</code> | Only tasksets owned by the caller's membership; ignored when public_only=True<br>**Default**: false |
| <code>minTasks?</code> | <code>[MinTasks](src/models/unions/min-tasks.ts)</code> | Only tasksets with at least this many live tasks |
| <code>registryId?</code> | <code>[RegistryId2](src/models/unions/registry-id2.ts)</code> | Only tasksets with a live task whose latest version uses a scenario on this registry |
| <code>scenarioId?</code> | <code>[ScenarioId](src/models/unions/scenario-id.ts)</code> | Only tasksets with a live task whose latest version uses this scenario |
| <code>projectId?</code> | <code>[ProjectId2](src/models/unions/project-id2.ts)</code> | Only tasksets contained by this Project; omitted lists every Project |
| <code>sortBy?</code> | <code>[SortByHudPlatformTasksetsApi](src/models/sort-by-hud-platform-tasksets-api.ts)</code> | Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC), tasks (task_count DESC)<br>**Default**: "starred" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasksets.listTasksetsV2TasksetsGet(request)`

- **OnSuccess**: <code>[PaginatedResponseTasksetResponse](src/models/paginated-response-taskset-response.ts)</code>
- **OnError**: throws <code>[Tasksets.ListTasksetsV2TasksetsGetError](src/resources/tasksets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasksets.listTasksetsV2TasksetsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedResponseTasksetResponse, Tasksets.ListTasksetsV2TasksetsGetError&gt;</code>, with `result.value` of type <code>[PaginatedResponseTasksetResponse](src/models/paginated-response-taskset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Teams

> Source: [Teams](src/resources/teams.ts)

<details>
<summary><code>inviteTeamMembersV2TeamInvitationsPost(request: Teams.InviteTeamMembersV2TeamInvitationsPostRequest, options?: RequestOptions): ApiPromise&lt;TeamInviteResponse, Teams.InviteTeamMembersV2TeamInvitationsPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invite email addresses to the caller's team; admin only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.inviteTeamMembersV2TeamInvitationsPost({
    body: { emails: ["user@example.com"], role: Role.Admin },
  });
  // TODO: Handle 'response' of type TeamInviteResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.InviteTeamMembersV2TeamInvitationsPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .inviteTeamMembersV2TeamInvitationsPost({ body: { emails: ["user@example.com"], role: Role.Admin } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamInviteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamInviteRequest](src/models/team-invite-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.inviteTeamMembersV2TeamInvitationsPost(request)`

- **OnSuccess**: <code>[TeamInviteResponse](src/models/team-invite-response.ts)</code>
- **OnError**: throws <code>[Teams.InviteTeamMembersV2TeamInvitationsPostError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.inviteTeamMembersV2TeamInvitationsPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamInviteResponse, Teams.InviteTeamMembersV2TeamInvitationsPostError&gt;</code>, with `result.value` of type <code>[TeamInviteResponse](src/models/team-invite-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTeamInvitationsV2TeamInvitationsGet(options?: RequestOptions): ApiPromise&lt;TeamInvitationsResponse, Teams.ListTeamInvitationsV2TeamInvitationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller team's pending invitations; admin only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.listTeamInvitationsV2TeamInvitationsGet();
  // TODO: Handle 'response' of type TeamInvitationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.ListTeamInvitationsV2TeamInvitationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams.listTeamInvitationsV2TeamInvitationsGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamInvitationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.listTeamInvitationsV2TeamInvitationsGet()`

- **OnSuccess**: <code>[TeamInvitationsResponse](src/models/team-invitations-response.ts)</code>
- **OnError**: throws <code>[Teams.ListTeamInvitationsV2TeamInvitationsGetError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.listTeamInvitationsV2TeamInvitationsGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamInvitationsResponse, Teams.ListTeamInvitationsV2TeamInvitationsGetError&gt;</code>, with `result.value` of type <code>[TeamInvitationsResponse](src/models/team-invitations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTeamMembersV2TeamMembersGet(options?: RequestOptions): ApiPromise&lt;TeamMembersResponse, Teams.ListTeamMembersV2TeamMembersGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the members of the caller's team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.listTeamMembersV2TeamMembersGet();
  // TODO: Handle 'response' of type TeamMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.ListTeamMembersV2TeamMembersGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams.listTeamMembersV2TeamMembersGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamMembersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.listTeamMembersV2TeamMembersGet()`

- **OnSuccess**: <code>[TeamMembersResponse](src/models/team-members-response.ts)</code>
- **OnError**: throws <code>[Teams.ListTeamMembersV2TeamMembersGetError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.listTeamMembersV2TeamMembersGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamMembersResponse, Teams.ListTeamMembersV2TeamMembersGetError&gt;</code>, with `result.value` of type <code>[TeamMembersResponse](src/models/team-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTeamMembersV2TeamMembersBatchRemovePost(request: Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostRequest, options?: RequestOptions): ApiPromise&lt;TeamMemberBatchResponse, Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove other members from the caller's team and revoke their API keys; admin only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.removeTeamMembersV2TeamMembersBatchRemovePost({
    body: { membershipIds: [1] },
  });
  // TODO: Handle 'response' of type TeamMemberBatchResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .removeTeamMembersV2TeamMembersBatchRemovePost({ body: { membershipIds: [1] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamMemberBatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamMemberRemoveRequest](src/models/team-member-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.removeTeamMembersV2TeamMembersBatchRemovePost(request)`

- **OnSuccess**: <code>[TeamMemberBatchResponse](src/models/team-member-batch-response.ts)</code>
- **OnError**: throws <code>[Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.removeTeamMembersV2TeamMembersBatchRemovePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamMemberBatchResponse, Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostError&gt;</code>, with `result.value` of type <code>[TeamMemberBatchResponse](src/models/team-member-batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeTeamInvitationsV2TeamInvitationsBatchRevokePost(request: Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest, options?: RequestOptions): ApiPromise&lt;TeamInvitationRevokeResponse, Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke pending invitations to the caller's team; admin only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.revokeTeamInvitationsV2TeamInvitationsBatchRevokePost({
    body: { invitationIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type TeamInvitationRevokeResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .revokeTeamInvitationsV2TeamInvitationsBatchRevokePost({ body: { invitationIds: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamInvitationRevokeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamInvitationRevokeRequest](src/models/team-invitation-revoke-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.revokeTeamInvitationsV2TeamInvitationsBatchRevokePost(request)`

- **OnSuccess**: <code>[TeamInvitationRevokeResponse](src/models/team-invitation-revoke-response.ts)</code>
- **OnError**: throws <code>[Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.revokeTeamInvitationsV2TeamInvitationsBatchRevokePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamInvitationRevokeResponse, Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError&gt;</code>, with `result.value` of type <code>[TeamInvitationRevokeResponse](src/models/team-invitation-revoke-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTeamMemberRolesV2TeamMembersBatchRolePost(request: Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest, options?: RequestOptions): ApiPromise&lt;TeamMemberBatchResponse, Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the role of other members of the caller's team; admin only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.updateTeamMemberRolesV2TeamMembersBatchRolePost({
    body: { membershipIds: [1], role: Role.Admin },
  });
  // TODO: Handle 'response' of type TeamMemberBatchResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .updateTeamMemberRolesV2TeamMembersBatchRolePost({ body: { membershipIds: [1], role: Role.Admin } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamMemberBatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamMemberRoleUpdateRequest](src/models/team-member-role-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.updateTeamMemberRolesV2TeamMembersBatchRolePost(request)`

- **OnSuccess**: <code>[TeamMemberBatchResponse](src/models/team-member-batch-response.ts)</code>
- **OnError**: throws <code>[Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.updateTeamMemberRolesV2TeamMembersBatchRolePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamMemberBatchResponse, Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostError&gt;</code>, with `result.value` of type <code>[TeamMemberBatchResponse](src/models/team-member-batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Traces

> Source: [Traces](src/resources/traces.ts)

<details>
<summary><code>batchValidateTracesV2TraceBatchValidatePost(request: Traces.BatchValidateTracesV2TraceBatchValidatePostRequest, options?: RequestOptions): ApiPromise&lt;TraceBatchValidateResponse, Traces.BatchValidateTracesV2TraceBatchValidatePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mark a batch of traces as valid or invalid for leaderboard calculations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.batchValidateTracesV2TraceBatchValidatePost({
    body: { traceIds: ["00000000-0000-0000-0000-000000000000"], isValid: true },
  });
  // TODO: Handle 'response' of type TraceBatchValidateResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.BatchValidateTracesV2TraceBatchValidatePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .batchValidateTracesV2TraceBatchValidatePost({
    body: { traceIds: ["00000000-0000-0000-0000-000000000000"], isValid: true },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceBatchValidateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TraceBatchValidateRequest](src/models/trace-batch-validate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.batchValidateTracesV2TraceBatchValidatePost(request)`

- **OnSuccess**: <code>[TraceBatchValidateResponse](src/models/trace-batch-validate-response.ts)</code>
- **OnError**: throws <code>[Traces.BatchValidateTracesV2TraceBatchValidatePostError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.batchValidateTracesV2TraceBatchValidatePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceBatchValidateResponse, Traces.BatchValidateTracesV2TraceBatchValidatePostError&gt;</code>, with `result.value` of type <code>[TraceBatchValidateResponse](src/models/trace-batch-validate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceAnalysisContextV2TraceTraceIdAnalysisContextGet(request: Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest, options?: RequestOptions): ApiPromise&lt;TraceAnalysisContextResponse, Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Aggregate context for analysis environments (QA agents).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraceAnalysisContextV2TraceTraceIdAnalysisContextGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceAnalysisContextResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .getTraceAnalysisContextV2TraceTraceIdAnalysisContextGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceAnalysisContextResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |
| <code>includeSpans?</code> | <code>boolean</code> | -<br>**Default**: true |
| <code>includeEnvLogs?</code> | <code>boolean</code> | -<br>**Default**: true |
| <code>includeWorkerLogs?</code> | <code>boolean</code> | -<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraceAnalysisContextV2TraceTraceIdAnalysisContextGet(request)`

- **OnSuccess**: <code>[TraceAnalysisContextResponse](src/models/trace-analysis-context-response.ts)</code>
- **OnError**: throws <code>[Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraceAnalysisContextV2TraceTraceIdAnalysisContextGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceAnalysisContextResponse, Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError&gt;</code>, with `result.value` of type <code>[TraceAnalysisContextResponse](src/models/trace-analysis-context-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet(request: Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest, options?: RequestOptions): ApiPromise&lt;TraceAnalysisPromptResponse, Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Size-bounded debugging prompt: error, task, trajectory, and log tails.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceAnalysisPromptResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .getTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceAnalysisPromptResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet(request)`

- **OnSuccess**: <code>[TraceAnalysisPromptResponse](src/models/trace-analysis-prompt-response.ts)</code>
- **OnError**: throws <code>[Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceAnalysisPromptResponse, Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError&gt;</code>, with `result.value` of type <code>[TraceAnalysisPromptResponse](src/models/trace-analysis-prompt-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceEnvLogsV2TraceTraceIdEnvLogsGet(request: Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest, options?: RequestOptions): ApiPromise&lt;EnvLogsResponse, Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Environment logs — the customer container's stdout/stderr.

Fetched from the daemon's S3 debug bundle.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraceEnvLogsV2TraceTraceIdEnvLogsGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type EnvLogsResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .getTraceEnvLogsV2TraceTraceIdEnvLogsGet({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvLogsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraceEnvLogsV2TraceTraceIdEnvLogsGet(request)`

- **OnSuccess**: <code>[EnvLogsResponse](src/models/env-logs-response.ts)</code>
- **OnError**: throws <code>[Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraceEnvLogsV2TraceTraceIdEnvLogsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvLogsResponse, Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError&gt;</code>, with `result.value` of type <code>[EnvLogsResponse](src/models/env-logs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceEventsV2TraceTraceIdEventsGet(request: Traces.GetTraceEventsV2TraceTraceIdEventsGetRequest, options?: RequestOptions): ApiPromise&lt;TraceEventsResponse, Traces.GetTraceEventsV2TraceTraceIdEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Projected, typed view of a trace's telemetry — drives the trace viewer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraceEventsV2TraceTraceIdEventsGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTraceEventsV2TraceTraceIdEventsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .getTraceEventsV2TraceTraceIdEventsGet({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceEventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |
| <code>sinceSeq?</code> | <code>number</code> | Return only events derived from spans with sequence > since_seq. Use -1 (default) for the first page, then pass the previous `next_seq` while `has_more` is true. Once caught up, use `latest_seq` for incremental polling.<br>**Default**: -1 |
| <code>limit?</code> | <code>number</code> | Maximum completed span references to project in this page.<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraceEventsV2TraceTraceIdEventsGet(request)`

- **OnSuccess**: <code>[TraceEventsResponse](src/models/trace-events-response.ts)</code>
- **OnError**: throws <code>[Traces.GetTraceEventsV2TraceTraceIdEventsGetError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraceEventsV2TraceTraceIdEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceEventsResponse, Traces.GetTraceEventsV2TraceTraceIdEventsGetError&gt;</code>, with `result.value` of type <code>[TraceEventsResponse](src/models/trace-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceInfoV2TraceTraceIdInfoGet(request: Traces.GetTraceInfoV2TraceTraceIdInfoGetRequest, options?: RequestOptions): ApiPromise&lt;TraceInfoResponse, Traces.GetTraceInfoV2TraceTraceIdInfoGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace with its task, job, and model context for the trace viewer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraceInfoV2TraceTraceIdInfoGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTraceInfoV2TraceTraceIdInfoGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .getTraceInfoV2TraceTraceIdInfoGet({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceInfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraceInfoV2TraceTraceIdInfoGet(request)`

- **OnSuccess**: <code>[TraceInfoResponse](src/models/trace-info-response.ts)</code>
- **OnError**: throws <code>[Traces.GetTraceInfoV2TraceTraceIdInfoGetError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraceInfoV2TraceTraceIdInfoGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceInfoResponse, Traces.GetTraceInfoV2TraceTraceIdInfoGetError&gt;</code>, with `result.value` of type <code>[TraceInfoResponse](src/models/trace-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceLogsV2TraceTraceIdLogsGet(request: Traces.GetTraceLogsV2TraceTraceIdLogsGetRequest, options?: RequestOptions): ApiPromise&lt;TraceLogsResponse, Traces.GetTraceLogsV2TraceTraceIdLogsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace's captured worker logs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraceLogsV2TraceTraceIdLogsGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceLogsResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTraceLogsV2TraceTraceIdLogsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .getTraceLogsV2TraceTraceIdLogsGet({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceLogsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraceLogsV2TraceTraceIdLogsGet(request)`

- **OnSuccess**: <code>[TraceLogsResponse](src/models/trace-logs-response.ts)</code>
- **OnError**: throws <code>[Traces.GetTraceLogsV2TraceTraceIdLogsGetError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraceLogsV2TraceTraceIdLogsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceLogsResponse, Traces.GetTraceLogsV2TraceTraceIdLogsGetError&gt;</code>, with `result.value` of type <code>[TraceLogsResponse](src/models/trace-logs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceUsageV2TraceTraceIdUsageGet(request: Traces.GetTraceUsageV2TraceTraceIdUsageGetRequest, options?: RequestOptions): ApiPromise&lt;TraceUsageBreakdown, Traces.GetTraceUsageV2TraceTraceIdUsageGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace's compute and inference cost breakdown.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraceUsageV2TraceTraceIdUsageGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceUsageBreakdown
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTraceUsageV2TraceTraceIdUsageGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .getTraceUsageV2TraceTraceIdUsageGet({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceUsageBreakdown
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraceUsageV2TraceTraceIdUsageGet(request)`

- **OnSuccess**: <code>[TraceUsageBreakdown](src/models/trace-usage-breakdown.ts)</code>
- **OnError**: throws <code>[Traces.GetTraceUsageV2TraceTraceIdUsageGetError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraceUsageV2TraceTraceIdUsageGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceUsageBreakdown, Traces.GetTraceUsageV2TraceTraceIdUsageGetError&gt;</code>, with `result.value` of type <code>[TraceUsageBreakdown](src/models/trace-usage-breakdown.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTraceV2TraceTraceIdGet(request: Traces.GetTraceV2TraceTraceIdGetRequest, options?: RequestOptions): ApiPromise&lt;TraceDetailResponse, Traces.GetTraceV2TraceTraceIdGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace by id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.getTraceV2TraceTraceIdGet({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type TraceDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.GetTraceV2TraceTraceIdGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .getTraceV2TraceTraceIdGet({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceDetailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.getTraceV2TraceTraceIdGet(request)`

- **OnSuccess**: <code>[TraceDetailResponse](src/models/trace-detail-response.ts)</code>
- **OnError**: throws <code>[Traces.GetTraceV2TraceTraceIdGetError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.getTraceV2TraceTraceIdGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceDetailResponse, Traces.GetTraceV2TraceTraceIdGetError&gt;</code>, with `result.value` of type <code>[TraceDetailResponse](src/models/trace-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRelatedTracesV2TraceTraceIdRelatedGet(request: Traces.ListRelatedTracesV2TraceTraceIdRelatedGetRequest, options?: RequestOptions): ApiPromise&lt;TraceThumbnail[], Traces.ListRelatedTracesV2TraceTraceIdRelatedGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trace thumbnails related to ``trace_id``.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.listRelatedTracesV2TraceTraceIdRelatedGet({
    traceId: "00000000-0000-0000-0000-000000000000",
    kind: RelatedKind1.Job,
  });
  // TODO: Handle 'response' of type TraceThumbnail[]
} catch (err) {
  // TODO: Handle 'err' of type Traces.ListRelatedTracesV2TraceTraceIdRelatedGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .listRelatedTracesV2TraceTraceIdRelatedGet({
    traceId: "00000000-0000-0000-0000-000000000000",
    kind: RelatedKind1.Job,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceThumbnail[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |
| <code>kind</code> | <code>[RelatedKind1](src/models/related-kind1.ts)</code> | `job` (same job_id), `task` (every version of the same task), `recent` (caller's own traces, requires auth), or `discover` (most-recent visible traces overall). |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>scopeToJob?</code> | <code>boolean</code> | Only meaningful with `kind=task`: further restrict to the source trace's job. Used by the info-card sibling-run squares.<br>**Default**: false |
| <code>status?</code> | <code>[Status21](src/models/unions/status21.ts)</code> | Comma-separated status whitelist applied to ``Trace.status`` — e.g. `completed` to exclude live/cancelled rows. |
| <code>order?</code> | <code>[RelatedOrder1](src/models/related-order1.ts)</code> | Sort by created_at. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.listRelatedTracesV2TraceTraceIdRelatedGet(request)`

- **OnSuccess**: <code>[TraceThumbnail](src/models/trace-thumbnail.ts)[]</code>
- **OnError**: throws <code>[Traces.ListRelatedTracesV2TraceTraceIdRelatedGetError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.listRelatedTracesV2TraceTraceIdRelatedGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceThumbnail[], Traces.ListRelatedTracesV2TraceTraceIdRelatedGetError&gt;</code>, with `result.value` of type <code>[TraceThumbnail](src/models/trace-thumbnail.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publishTraceV2TraceTraceIdPublishPost(request: Traces.PublishTraceV2TraceTraceIdPublishPostRequest, options?: RequestOptions): ApiPromise&lt;PublishTraceResponse, Traces.PublishTraceV2TraceTraceIdPublishPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set ``traces.public=true`` so anyone with the link can view the trace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.publishTraceV2TraceTraceIdPublishPost({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PublishTraceResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.PublishTraceV2TraceTraceIdPublishPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .publishTraceV2TraceTraceIdPublishPost({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublishTraceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.publishTraceV2TraceTraceIdPublishPost(request)`

- **OnSuccess**: <code>[PublishTraceResponse](src/models/publish-trace-response.ts)</code>
- **OnError**: throws <code>[Traces.PublishTraceV2TraceTraceIdPublishPostError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.publishTraceV2TraceTraceIdPublishPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublishTraceResponse, Traces.PublishTraceV2TraceTraceIdPublishPostError&gt;</code>, with `result.value` of type <code>[PublishTraceResponse](src/models/publish-trace-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unpublishTraceV2TraceTraceIdPublishDelete(request: Traces.UnpublishTraceV2TraceTraceIdPublishDeleteRequest, options?: RequestOptions): ApiPromise&lt;StatusResponse, Traces.UnpublishTraceV2TraceTraceIdPublishDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set ``traces.public=false``; the trace returns to invited-only visibility.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.unpublishTraceV2TraceTraceIdPublishDelete({
    traceId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type StatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.UnpublishTraceV2TraceTraceIdPublishDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .unpublishTraceV2TraceTraceIdPublishDelete({ traceId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.unpublishTraceV2TraceTraceIdPublishDelete(request)`

- **OnSuccess**: <code>[StatusResponse](src/models/status-response.ts)</code>
- **OnError**: throws <code>[Traces.UnpublishTraceV2TraceTraceIdPublishDeleteError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.unpublishTraceV2TraceTraceIdPublishDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusResponse, Traces.UnpublishTraceV2TraceTraceIdPublishDeleteError&gt;</code>, with `result.value` of type <code>[StatusResponse](src/models/status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTraceV2TraceTraceIdPatch(request: Traces.UpdateTraceV2TraceTraceIdPatchRequest, options?: RequestOptions): ApiPromise&lt;TraceInfoResponse, Traces.UpdateTraceV2TraceTraceIdPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a trace's metadata fields.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.traces.updateTraceV2TraceTraceIdPatch({
    traceId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type TraceInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type Traces.UpdateTraceV2TraceTraceIdPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.traces
  .updateTraceV2TraceTraceIdPatch({ traceId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TraceInfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>traceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[TraceUpdateRequest](src/models/trace-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.traces.updateTraceV2TraceTraceIdPatch(request)`

- **OnSuccess**: <code>[TraceInfoResponse](src/models/trace-info-response.ts)</code>
- **OnError**: throws <code>[Traces.UpdateTraceV2TraceTraceIdPatchError](src/resources/traces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.traces.updateTraceV2TraceTraceIdPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TraceInfoResponse, Traces.UpdateTraceV2TraceTraceIdPatchError&gt;</code>, with `result.value` of type <code>[TraceInfoResponse](src/models/trace-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/resources/usage.ts)

<details>
<summary><code>getEnvironmentUsageV2EnvironmentsUsageGet(request?: Usage.GetEnvironmentUsageV2EnvironmentsUsageGetRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentUsageResponse, Usage.GetEnvironmentUsageV2EnvironmentsUsageGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the team's environment session usage over a window, with summary and paged sessions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.getEnvironmentUsageV2EnvironmentsUsageGet();
  // TODO: Handle 'response' of type EnvironmentUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Usage.GetEnvironmentUsageV2EnvironmentsUsageGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.getEnvironmentUsageV2EnvironmentsUsageGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentUsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days?</code> | <code>number</code> | -<br>**Default**: 7 |
| <code>userId?</code> | <code>[UserId](src/models/unions/user-id.ts)</code> | - |
| <code>apiKeyId?</code> | <code>[ApiKeyId](src/models/unions/api-key-id.ts)</code> | - |
| <code>status?</code> | <code>[StatusHudPlatformInstancesApi](src/models/unions/status-hud-platform-instances-api.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.getEnvironmentUsageV2EnvironmentsUsageGet(request)`

- **OnSuccess**: <code>[EnvironmentUsageResponse](src/models/environment-usage-response.ts)</code>
- **OnError**: throws <code>[Usage.GetEnvironmentUsageV2EnvironmentsUsageGetError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.getEnvironmentUsageV2EnvironmentsUsageGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentUsageResponse, Usage.GetEnvironmentUsageV2EnvironmentsUsageGetError&gt;</code>, with `result.value` of type <code>[EnvironmentUsageResponse](src/models/environment-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInferenceUsageAggregateV2UsageInferenceGet(request?: Usage.GetInferenceUsageAggregateV2UsageInferenceGetRequest, options?: RequestOptions): ApiPromise&lt;InferenceUsageAggregateResponse, Usage.GetInferenceUsageAggregateV2UsageInferenceGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Aggregate the team's inference usage into time buckets, optionally grouped.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.getInferenceUsageAggregateV2UsageInferenceGet();
  // TODO: Handle 'response' of type InferenceUsageAggregateResponse
} catch (err) {
  // TODO: Handle 'err' of type Usage.GetInferenceUsageAggregateV2UsageInferenceGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.getInferenceUsageAggregateV2UsageInferenceGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InferenceUsageAggregateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start?</code> | <code>[Start](src/models/unions/start.ts)</code> | Window start; defaults to end-7d |
| <code>end?</code> | <code>[End](src/models/unions/end.ts)</code> | Window end; defaults to now |
| <code>bucketWidth?</code> | <code>[BucketWidth](src/models/bucket-width.ts)</code> | -<br>**Default**: "1d" |
| <code>groupBy?</code> | <code>[GroupBy1](src/models/unions/group-by1.ts)</code> | Grouping dimensions; repeat the parameter to group by several at once |
| <code>userId?</code> | <code>[UserId](src/models/unions/user-id.ts)</code> | - |
| <code>apiKeyId?</code> | <code>[ApiKeyId](src/models/unions/api-key-id.ts)</code> | - |
| <code>byokCredentialId?</code> | <code>[ByokCredentialId](src/models/unions/byok-credential-id.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.getInferenceUsageAggregateV2UsageInferenceGet(request)`

- **OnSuccess**: <code>[InferenceUsageAggregateResponse](src/models/inference-usage-aggregate-response.ts)</code>
- **OnError**: throws <code>[Usage.GetInferenceUsageAggregateV2UsageInferenceGetError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.getInferenceUsageAggregateV2UsageInferenceGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InferenceUsageAggregateResponse, Usage.GetInferenceUsageAggregateV2UsageInferenceGetError&gt;</code>, with `result.value` of type <code>[InferenceUsageAggregateResponse](src/models/inference-usage-aggregate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HudError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

