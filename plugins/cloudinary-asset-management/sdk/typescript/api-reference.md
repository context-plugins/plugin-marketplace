# Reference

> Source: [CloudinaryAssetManagementApiClient](src/client.ts)

## Upload

> Source: [Upload](src/resources/upload.ts)

<details>
<summary><code>concat(request: Upload.ConcatRequestParams, options?: RequestOptions): ApiPromise&lt;ConcatResponse, Upload.ConcatError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts an ordered list of remote HTTP(S) URLs pointing to video segments
and concatenates them, remuxing the result into a single MP4 asset that is
uploaded to your product environment using the supplied upload parameters.
Concatenation and the resulting upload happen asynchronously; supply a
`notification_url` to be notified when the upload completes.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.upload.concat({
    cloudName: "my_cloud",
    body: { urls: ["https://example.com"] },
  });
  // TODO: Handle 'response' of type ConcatResponse
} catch (err) {
  // TODO: Handle 'err' of type Upload.ConcatError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.upload.concat({
  cloudName: "my_cloud",
  body: { urls: ["https://example.com"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConcatResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[ConcatRequest](src/models/concat-request.ts)</code> | The concat request parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.upload.concat(request)`

- **OnSuccess**: <code>[ConcatResponse](src/models/concat-response.ts)</code>
- **OnError**: throws <code>[Upload.ConcatError](src/resources/upload.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.upload.concat(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConcatResponse, Upload.ConcatError&gt;</code>, with `result.value` of type <code>[ConcatResponse](src/models/concat-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>destroyAsset(request: Upload.DestroyAssetRequest, options?: RequestOptions): ApiPromise&lt;DestroyResponse, Upload.DestroyAssetError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.upload.destroyAsset({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    body: { publicId: "some example string" },
  });
  // TODO: Handle 'response' of type DestroyResponse
} catch (err) {
  // TODO: Handle 'err' of type Upload.DestroyAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.upload.destroyAsset({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  body: { publicId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DestroyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>body</code> | <code>[DestroyRequest](src/models/destroy-request.ts)</code> | The asset to destroy and related options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.upload.destroyAsset(request)`

- **OnSuccess**: <code>[DestroyResponse](src/models/destroy-response.ts)</code>
- **OnError**: throws <code>[Upload.DestroyAssetError](src/resources/upload.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.upload.destroyAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DestroyResponse, Upload.DestroyAssetError&gt;</code>, with `result.value` of type <code>[DestroyResponse](src/models/destroy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>evalUploadParams(request: Upload.EvalUploadParamsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Upload.EvalUploadParamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates a dynamic eval expression against the supplied upload parameters and returns the resulting upload parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.upload.evalUploadParams({
    cloudName: "my_cloud",
    body: { eval: "some example string" },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Upload.EvalUploadParamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.upload.evalUploadParams({
  cloudName: "my_cloud",
  body: { eval: "some example string" },
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[EvalRequest](src/models/eval-request.ts)</code> | The eval expression and the upload parameters to evaluate it against. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.upload.evalUploadParams(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Upload.EvalUploadParamsError](src/resources/upload.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.upload.evalUploadParams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Upload.EvalUploadParamsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>text(request: Upload.TextRequestParams, options?: RequestOptions): ApiPromise&lt;TextResponse, Upload.TextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dynamically generates an image from a specified text string.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.upload.text({
    cloudName: "my_cloud",
    resourceType: ResourceType9.Image,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type TextResponse
} catch (err) {
  // TODO: Handle 'err' of type Upload.TextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.upload.text({
  cloudName: "my_cloud",
  resourceType: ResourceType9.Image,
  body: { text: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TextResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType9](src/models/resource-type9.ts)</code> | The type of resource to create. Must be "image" for text generation. |
| <code>body</code> | <code>[TextRequest](src/models/text-request.ts)</code> | The text content and styling parameters for image generation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.upload.text(request)`

- **OnSuccess**: <code>[TextResponse](src/models/text-response.ts)</code>
- **OnError**: throws <code>[Upload.TextError](src/resources/upload.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.upload.text(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TextResponse, Upload.TextError&gt;</code>, with `result.value` of type <code>[TextResponse](src/models/text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upload(request: Upload.UploadRequestParams, options?: RequestOptions): ApiPromise&lt;V11UploadResponse, Upload.UploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads media assets (images, videos, raw files) to your Cloudinary product environment. The file is securely stored
in the cloud with backup and revision history. Cloudinary automatically analyzes and saves important data about each
asset, such as format, size, resolution, and prominent colors, which is indexed to enable searching on those attributes.

Supports uploading from:
- Local file paths (SDKs/MCP server only). For MCP server path MUST start with file://
- Remote HTTP/HTTPS URLs
- Base64 Data URIs (max ~60 MB)
- Private storage buckets (S3 or Google Storage)
- FTP addresses

The uploaded asset is immediately available for transformation and delivery upon successful upload.

Transform media files using transformation syntax in delivery URLs, which creates derived files accessible immediately without re-uploading the original.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.upload.upload({
    cloudName: "my_cloud",
    resourceType: UploadResourceType.Image,
    body: { file: "some example string" },
  });
  // TODO: Handle 'response' of type V11UploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Upload.UploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.upload.upload({
  cloudName: "my_cloud",
  resourceType: UploadResourceType.Image,
  body: { file: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V11UploadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType?</code> | <code>[UploadResourceType](src/models/upload-resource-type.ts)</code> | The type of resource (image, video, raw, or auto).<br>**Default**: "auto" |
| <code>body</code> | <code>[UploadRequest](src/models/upload-request.ts)</code> | The file to upload and associated parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.upload.upload(request)`

- **OnSuccess**: <code>[V11UploadResponse](src/models/unions/v11-upload-response.ts)</code>
- **OnError**: throws <code>[Upload.UploadError](src/resources/upload.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.upload.upload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V11UploadResponse, Upload.UploadError&gt;</code>, with `result.value` of type <code>[V11UploadResponse](src/models/unions/v11-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadChunk(request: Upload.UploadChunkRequest, options?: RequestOptions): ApiPromise&lt;V11UploadChunkedResponse, Upload.UploadChunkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a single chunk of a large file as part of a chunked upload process. This enables efficient upload of
large files with the ability to resume interrupted uploads. Each request uploads one chunk of the file.
It is required for any files that are larger than 100 MB. This is often relevant for video files, as they
tend to have larger file sizes. Minimum chunk size is 5 MB.

The `file` field accepts either the chunk bytes (multipart) or an HTTP/HTTPS URL. When a URL is supplied,
Cloudinary downloads it and validates the response `Content-Length` against the chunk-size contract
(exact match in the uniform-size flow; within 5 MB floor and 5 GiB cap in explicit-order mode) before
storing any bytes. A mismatch aborts with 400 and persists no state. The remote server must return a
`Content-Length` header; chunked transfer-encoded responses are rejected.

**Explicit-order totals** (`X-Upload-Part-Number`): `X-Upload-Total-Parts` may be omitted on non-terminal
chunks until the session total *N* is established by any earlier chunk that sent the header. After *N* is
known, the chunk for part index *N* must include `X-Upload-Total-Parts: N`. Whenever the header appears,
its value must be the same integer *N* for that `X-Unique-Upload-Id` (no conflicting totals).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.upload.uploadChunk({
    cloudName: "my_cloud",
    resourceType: UploadResourceType.Image,
    xUniqueUploadId: "2fd4e1c67a2d28fce",
    contentRange: "bytes 0-999999/3000000",
    xUploadPartNumber: 2,
    xUploadTotalParts: 3,
    body: { file: "some example string" },
  });
  // TODO: Handle 'response' of type V11UploadChunkedResponse
} catch (err) {
  // TODO: Handle 'err' of type Upload.UploadChunkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.upload.uploadChunk({
  cloudName: "my_cloud",
  resourceType: UploadResourceType.Image,
  xUniqueUploadId: "2fd4e1c67a2d28fce",
  contentRange: "bytes 0-999999/3000000",
  xUploadPartNumber: 2,
  xUploadTotalParts: 3,
  body: { file: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V11UploadChunkedResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType?</code> | <code>[UploadResourceType](src/models/upload-resource-type.ts)</code> | The type of resource (image, video, raw, or auto).<br>**Default**: "auto" |
| <code>xUniqueUploadId</code> | <code>string</code> | A unique identifier for the upload. Must be the same for all chunks of the same file. |
| <code>contentRange?</code> | <code>string</code> | The range of bytes being uploaded in the current chunk, in the format "bytes start-end/total".<br>For example, "bytes 0-999999/3000000" indicates the first 1MB chunk of a 3MB file. Required for the<br>default uniform-size chunked upload flow. In explicit-order mode (`X-Upload-Part-Number`), this<br>header remains optional; clients do not have to send `Content-Range`, `X-Upload-Part-Number`, and<br>`X-Upload-Total-Parts` together on every request—`X-Upload-Total-Parts` may be omitted on some chunks<br>subject to the rules documented on that header. |
| <code>xUploadPartNumber?</code> | <code>number</code> | The 1-based part number for this chunk when uploading parts of uneven size with explicit<br>client-supplied order. Requires `X-Unique-Upload-Id`. When present, activates explicit-order mode<br>and `Content-Range` is optional. Parts must use contiguous indices `1`…`N`, where `N` is the session<br>total. If `X-Upload-Total-Parts` is omitted on a chunk, the server still enforces `X-Upload-Part-Number ≤ N`<br>once `N` has been learned from any prior chunk for the same upload that supplied `X-Upload-Total-Parts`. |
| <code>xUploadTotalParts?</code> | <code>number</code> | Declared session total `N` (optional on chunks where omission is allowed). When present on a chunk,<br>it must satisfy either `X-Upload-Part-Number < X-Upload-Total-Parts` (non-terminal) or<br>`X-Upload-Part-Number == X-Upload-Total-Parts` (terminal). The same integer `N` must appear whenever<br>this header is sent for a given `X-Unique-Upload-Id` (no conflicting declared totals). Chunks may omit<br>the header entirely until `N` is established; after `N` is known, non-terminal indices may still omit<br>it. Once `N` is known for the session, the request for part index `N` (the final part) must include<br>`X-Upload-Total-Parts: N`. The upload completes when all parts `1`…`N` have been received. |
| <code>body</code> | <code>[UploadRequest](src/models/upload-request.ts)</code> | The file to upload and associated parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.upload.uploadChunk(request)`

- **OnSuccess**: <code>[V11UploadChunkedResponse](src/models/unions/v11-upload-chunked-response.ts)</code>
- **OnError**: throws <code>[Upload.UploadChunkError](src/resources/upload.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.upload.uploadChunk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V11UploadChunkedResponse, Upload.UploadChunkError&gt;</code>, with `result.value` of type <code>[V11UploadChunkedResponse](src/models/unions/v11-upload-chunked-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadNoResourceType(request: Upload.UploadNoResourceTypeRequest, options?: RequestOptions): ApiPromise&lt;V11UploadResponse, Upload.UploadNoResourceTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a file to Cloudinary. The file type is automatically detected based on its content, so you don't need to specify the type manually.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.upload.uploadNoResourceType({
    cloudName: "my_cloud",
    body: { file: "some example string" },
  });
  // TODO: Handle 'response' of type V11UploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Upload.UploadNoResourceTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.upload.uploadNoResourceType({
  cloudName: "my_cloud",
  body: { file: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V11UploadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[UploadRequest](src/models/upload-request.ts)</code> | The file to upload and associated parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.upload.uploadNoResourceType(request)`

- **OnSuccess**: <code>[V11UploadResponse](src/models/unions/v11-upload-response.ts)</code>
- **OnError**: throws <code>[Upload.UploadNoResourceTypeError](src/resources/upload.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.upload.uploadNoResourceType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V11UploadResponse, Upload.UploadNoResourceTypeError&gt;</code>, with `result.value` of type <code>[V11UploadResponse](src/models/unions/v11-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](src/resources/assets.ts)

<details>
<summary><code>deleteBackupVersions(request: Assets.DeleteBackupVersionsRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteBackupVersionsResponse, Assets.DeleteBackupVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specific backed up versions of an asset identified by asset ID.
This operation is irreversible and deleted versions cannot be recovered.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.deleteBackupVersions({
    cloudName: "my_cloud",
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
    body: { versionIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type DeleteBackupVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.DeleteBackupVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.deleteBackupVersions({
  cloudName: "my_cloud",
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  body: { versionIds: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBackupVersionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetId</code> | <code>string</code> | The asset ID of the resource. Must be a 32-character hexadecimal string. |
| <code>body</code> | <code>[DeleteBackupVersionsRequest](src/models/delete-backup-versions-request.ts)</code> | The asset IDs and version IDs to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.deleteBackupVersions(request)`

- **OnSuccess**: <code>[DeleteBackupVersionsResponse](src/models/delete-backup-versions-response.ts)</code>
- **OnError**: throws <code>[Assets.DeleteBackupVersionsError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.deleteBackupVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBackupVersionsResponse, Assets.DeleteBackupVersionsError&gt;</code>, with `result.value` of type <code>[DeleteBackupVersionsResponse](src/models/delete-backup-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResourcesByPublicId(request: Assets.DeleteResourcesByPublicIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Assets.DeleteResourcesByPublicIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes assets uploaded to your product environment, identified by their public IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.deleteResourcesByPublicId({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    type: ManagedDeliveryType.Upload,
    body: { publicIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Assets.DeleteResourcesByPublicIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.deleteResourcesByPublicId({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  type: ManagedDeliveryType.Upload,
  body: { publicIds: ["some example string"] },
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>type</code> | <code>[DeliveryTypeAll1](src/models/unions/delivery-type-all1.ts)</code> | The delivery type of the asset. |
| <code>body</code> | <code>[DeleteResourceByPublicIdsRequest3](src/models/unions/delete-resource-by-public-ids-request3.ts)</code> | The public IDs and options for the resources to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.deleteResourcesByPublicId(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Assets.DeleteResourcesByPublicIdError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.deleteResourcesByPublicId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Assets.DeleteResourcesByPublicIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>derivedDestroy(request: Assets.DerivedDestroyRequestParams, options?: RequestOptions): ApiPromise&lt;DerivedDestroyResponse, Assets.DerivedDestroyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes derived resources by derived resource ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.derivedDestroy({
    cloudName: "my_cloud",
    body: { derivedResourceIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type DerivedDestroyResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.DerivedDestroyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.derivedDestroy({
  cloudName: "my_cloud",
  body: { derivedResourceIds: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DerivedDestroyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[DerivedDestroyRequest](src/models/derived-destroy-request.ts)</code> | The derived resource IDs to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.derivedDestroy(request)`

- **OnSuccess**: <code>[DerivedDestroyResponse](src/models/derived-destroy-response.ts)</code>
- **OnError**: throws <code>[Assets.DerivedDestroyError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.derivedDestroy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DerivedDestroyResponse, Assets.DerivedDestroyError&gt;</code>, with `result.value` of type <code>[DerivedDestroyResponse](src/models/derived-destroy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>destroyByAssetId(request: Assets.DestroyByAssetIdRequestParams, options?: RequestOptions): ApiPromise&lt;DestroyByAssetIdResponse, Assets.DestroyByAssetIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an asset using its immutable asset ID.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.destroyByAssetId({
    cloudName: "my_cloud",
    body: { assetId: "some example string" },
  });
  // TODO: Handle 'response' of type DestroyByAssetIdResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.DestroyByAssetIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.destroyByAssetId({
  cloudName: "my_cloud",
  body: { assetId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DestroyByAssetIdResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[DestroyByAssetIdRequest](src/models/destroy-by-asset-id-request.ts)</code> | The asset to delete and related options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.destroyByAssetId(request)`

- **OnSuccess**: <code>[DestroyByAssetIdResponse](src/models/destroy-by-asset-id-response.ts)</code>
- **OnError**: throws <code>[Assets.DestroyByAssetIdError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.destroyByAssetId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DestroyByAssetIdResponse, Assets.DestroyByAssetIdError&gt;</code>, with `result.value` of type <code>[DestroyByAssetIdResponse](src/models/destroy-by-asset-id-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadAsset(request: Assets.DownloadAssetRequest, options?: RequestOptions): ApiPromise&lt;undefined, Assets.DownloadAssetError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.assets.downloadAsset({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    publicId: "some example string",
    apiKey: "472851639284736",
    signature: "c08ed49d293e966cbe613a13d8e9476fdb76817bd668feb5b17001b168579fbc",
    timestamp: 1623087658,
  });
} catch (err) {
  // TODO: Handle 'err' of type Assets.DownloadAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.downloadAsset({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  publicId: "some example string",
  apiKey: "472851639284736",
  signature: "c08ed49d293e966cbe613a13d8e9476fdb76817bd668feb5b17001b168579fbc",
  timestamp: 1623087658,
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>publicId</code> | <code>string</code> | The public ID of the asset. |
| <code>format?</code> | <code>string</code> | The format to convert the asset to before downloading. |
| <code>type?</code> | <code>[ManagedDeliveryType](src/models/managed-delivery-type.ts)</code> | The delivery type of the asset. Default is "upload". |
| <code>expiresAt?</code> | <code>number</code> | Unix timestamp indicating when the download URL should expire. |
| <code>attachment?</code> | <code>boolean</code> | Whether to force download as an attachment.<br>**Default**: false |
| <code>targetFilename?</code> | <code>string</code> | The desired filename for the downloaded file. |
| <code>transformation?</code> | <code>string</code> | A transformation to apply to the asset before downloading. |
| <code>apiKey?</code> | <code>string</code> | The API key to use for the request. This is automatically computed by the Cloudinary's SDKs. |
| <code>signature?</code> | <code>string</code> | (Required for signed REST API calls) Used to authenticate the request and based on the parameters you use in the request. When using the Cloudinary SDKs for signed requests, the signature is automatically generated and added to the request. If you manually generate your own signed POST request, you need to manually generate the signature parameter and add it to the request together with the api_key and timestamp parameters. |
| <code>timestamp?</code> | <code>number</code> | The timestamp to use for the request in unix time. This is automatically computed by the Cloudinary's SDKs. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.downloadAsset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Assets.DownloadAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.downloadAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Assets.DownloadAssetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadAssetByAssetId(request: Assets.DownloadAssetByAssetIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Assets.DownloadAssetByAssetIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a download link for a specific asset identified by its immutable asset ID,
instead of the resource type, delivery type and public ID.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.assets.downloadAssetByAssetId({
    cloudName: "my_cloud",
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
    apiKey: "472851639284736",
    signature: "c08ed49d293e966cbe613a13d8e9476fdb76817bd668feb5b17001b168579fbc",
    timestamp: 1623087658,
  });
} catch (err) {
  // TODO: Handle 'err' of type Assets.DownloadAssetByAssetIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.downloadAssetByAssetId({
  cloudName: "my_cloud",
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  apiKey: "472851639284736",
  signature: "c08ed49d293e966cbe613a13d8e9476fdb76817bd668feb5b17001b168579fbc",
  timestamp: 1623087658,
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetId</code> | <code>string</code> | The asset ID of the resource. Must be a 32-character hexadecimal string. |
| <code>format?</code> | <code>string</code> | The format to convert the asset to before downloading. |
| <code>transformation?</code> | <code>string</code> | A transformation to apply to the asset before downloading. |
| <code>attachment?</code> | <code>boolean</code> | Whether to force download as an attachment.<br>**Default**: false |
| <code>targetFilename?</code> | <code>string</code> | The desired filename for the downloaded file. |
| <code>streamingAttachment?</code> | <code>boolean</code> | Whether to stream a video asset as an attachment. |
| <code>expiresAt?</code> | <code>number</code> | Unix timestamp indicating when the download URL should expire. |
| <code>apiKey?</code> | <code>string</code> | The API key to use for the request. This is automatically computed by the Cloudinary's SDKs. |
| <code>signature?</code> | <code>string</code> | (Required for signed REST API calls) Used to authenticate the request and based on the parameters you use in the request. When using the Cloudinary SDKs for signed requests, the signature is automatically generated and added to the request. If you manually generate your own signed POST request, you need to manually generate the signature parameter and add it to the request together with the api_key and timestamp parameters. |
| <code>timestamp?</code> | <code>number</code> | The timestamp to use for the request in unix time. This is automatically computed by the Cloudinary's SDKs. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.downloadAssetByAssetId(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Assets.DownloadAssetByAssetIdError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.downloadAssetByAssetId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Assets.DownloadAssetByAssetIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadBackupAsset(request: Assets.DownloadBackupAssetRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Assets.DownloadBackupAssetError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.downloadBackupAsset({
    cloudName: "my_cloud",
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
    versionId: "a3978316b0045e5eaf198f4d6885ca35",
    apiKey: "472851639284736",
    signature: "c08ed49d293e966cbe613a13d8e9476fdb76817bd668feb5b17001b168579fbc",
    timestamp: 1623087658,
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Assets.DownloadBackupAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.downloadBackupAsset({
  cloudName: "my_cloud",
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  versionId: "a3978316b0045e5eaf198f4d6885ca35",
  apiKey: "472851639284736",
  signature: "c08ed49d293e966cbe613a13d8e9476fdb76817bd668feb5b17001b168579fbc",
  timestamp: 1623087658,
}).asApiResult();
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetId</code> | <code>string</code> | The asset ID of the resource. Must be a 32-character hexadecimal string. |
| <code>versionId</code> | <code>string</code> | The version ID of the backup to download. Must be a 32-character hexadecimal string. |
| <code>apiKey?</code> | <code>string</code> | The API key to use for the request. This is automatically computed by the Cloudinary's SDKs. |
| <code>signature?</code> | <code>string</code> | (Required for signed REST API calls) Used to authenticate the request and based on the parameters you use in the request. When using the Cloudinary SDKs for signed requests, the signature is automatically generated and added to the request. If you manually generate your own signed POST request, you need to manually generate the signature parameter and add it to the request together with the api_key and timestamp parameters. |
| <code>timestamp?</code> | <code>number</code> | The timestamp to use for the request in unix time. This is automatically computed by the Cloudinary's SDKs. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.downloadBackupAsset(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Assets.DownloadBackupAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.downloadBackupAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Assets.DownloadBackupAssetError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>explicitAsset(request: Assets.ExplicitAssetRequest, options?: RequestOptions): ApiPromise&lt;UploadResponse, Assets.ExplicitAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies actions such as transformations, tags, or metadata updates to an existing asset without re-uploading it.
This is useful for applying new transformations, adding tags, or updating metadata on assets that are already in your cloud.

Note: Always prefer delivery URL transformations over this method, unless eager transformations are specifically required.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.explicitAsset({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    body: { publicId: "some example string" },
  });
  // TODO: Handle 'response' of type UploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ExplicitAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.explicitAsset({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  body: { publicId: "some example string" },
}).asApiResult();
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>body</code> | <code>[ExplicitRequest](src/models/explicit-request.ts)</code> | The asset and operations to apply. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.explicitAsset(request)`

- **OnSuccess**: <code>[UploadResponse](src/models/upload-response.ts)</code>
- **OnError**: throws <code>[Assets.ExplicitAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.explicitAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadResponse, Assets.ExplicitAssetError&gt;</code>, with `result.value` of type <code>[UploadResponse](src/models/upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateArchive(request: Assets.GenerateArchiveRequestParams, options?: RequestOptions): ApiPromise&lt;BinaryContent, Assets.GenerateArchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a downloadable ZIP or other archive format containing the specified resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.generateArchive({
    cloudName: "my_cloud",
    resourceType: ArchiveResourceType.Image,
    body: {},
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Assets.GenerateArchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.generateArchive({
  cloudName: "my_cloud",
  resourceType: ArchiveResourceType.Image,
  body: {},
}).asApiResult();
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ArchiveResourceType](src/models/archive-resource-type.ts)</code> | The type of resource for archive generation (image, video, or raw). |
| <code>body</code> | <code>[GenerateArchiveRequest](src/models/generate-archive-request.ts)</code> | The archive generation parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.generateArchive(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Assets.GenerateArchiveError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.generateArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Assets.GenerateArchiveError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResourceByAssetId(request: Assets.GetResourceByAssetIdRequest, options?: RequestOptions): ApiPromise&lt;Info, Assets.GetResourceByAssetIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a single resource specified by its asset ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.getResourceByAssetId({
    cloudName: "my_cloud",
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  });
  // TODO: Handle 'response' of type Info
} catch (err) {
  // TODO: Handle 'err' of type Assets.GetResourceByAssetIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.getResourceByAssetId({
  cloudName: "my_cloud",
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Info
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetId</code> | <code>string</code> | The asset ID of the resource. Must be a 32-character hexadecimal string. |
| <code>colors?</code> | <code>boolean</code> | Whether to include color information (predominant colors and histogram of 32 leading colors). Default: false.<br>**Default**: false |
| <code>mediaMetadata?</code> | <code>boolean</code> | Whether to include IPTC, XMP, and detailed Exif metadata in the response. Default: false.<br>**Default**: false |
| <code>faces?</code> | <code>boolean</code> | Whether to include a list of coordinates of detected faces. Default: false.<br>**Default**: false |
| <code>qualityAnalysis?</code> | <code>boolean</code> | Whether to return quality analysis scores for the image. Default: false.<br>**Default**: false |
| <code>accessibilityAnalysis?</code> | <code>boolean</code> | Whether to return accessibility analysis scores for the image. Default: false.<br>**Default**: false |
| <code>pages?</code> | <code>boolean</code> | Whether to report the number of pages in multi-page documents (e.g., PDF). Default: false.<br>**Default**: false |
| <code>phash?</code> | <code>boolean</code> | Whether to include the perceptual hash (pHash) of the uploaded photo for image similarity detection. Default: false.<br>**Default**: false |
| <code>coordinates?</code> | <code>boolean</code> | Whether to include previously specified custom cropping coordinates and faces coordinates. Default: false.<br>**Default**: false |
| <code>versions?</code> | <code>boolean</code> | Whether to include details of all the backed up versions of the asset. Default: false.<br>**Default**: false |
| <code>maxResults?</code> | <code>number</code> | Maximum number of derived assets to return. Default: 10.<br>**Default**: 10 |
| <code>derivedNextCursor?</code> | <code>string</code> | The cursor for the next page of derived assets when there are more derived images than max_results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.getResourceByAssetId(request)`

- **OnSuccess**: <code>[Info](src/models/info.ts)</code>
- **OnError**: throws <code>[Assets.GetResourceByAssetIdError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.getResourceByAssetId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Info, Assets.GetResourceByAssetIdError&gt;</code>, with `result.value` of type <code>[Info](src/models/info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResourceByBody(request: Assets.GetResourceByBodyRequest, options?: RequestOptions): ApiPromise&lt;ResourceInternalResponse, Assets.GetResourceByBodyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a single asset identified by its public ID, delivery type, and resource type passed in the request body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.getResourceByBody({
    cloudName: "my_cloud",
    body: {
      publicId: "some example string",
      resourceType: ResourceType.Image,
      kind: ManagedDeliveryType.Upload,
    },
  });
  // TODO: Handle 'response' of type ResourceInternalResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.GetResourceByBodyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.getResourceByBody({
  cloudName: "my_cloud",
  body: {
    publicId: "some example string",
    resourceType: ResourceType.Image,
    kind: ManagedDeliveryType.Upload,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceInternalResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[ResourceGetByBodyRequest](src/models/resource-get-by-body-request.ts)</code> | The identifying attributes of the asset to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.getResourceByBody(request)`

- **OnSuccess**: <code>[ResourceInternalResponse](src/models/resource-internal-response.ts)</code>
- **OnError**: throws <code>[Assets.GetResourceByBodyError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.getResourceByBody(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceInternalResponse, Assets.GetResourceByBodyError&gt;</code>, with `result.value` of type <code>[ResourceInternalResponse](src/models/resource-internal-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResourceByPublicId(request: Assets.GetResourceByPublicIdRequest, options?: RequestOptions): ApiPromise&lt;Info, Assets.GetResourceByPublicIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a single resource specified by its public ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.getResourceByPublicId({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    type: ManagedDeliveryType.Upload,
    publicId: "sample",
  });
  // TODO: Handle 'response' of type Info
} catch (err) {
  // TODO: Handle 'err' of type Assets.GetResourceByPublicIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.getResourceByPublicId({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  type: ManagedDeliveryType.Upload,
  publicId: "sample",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Info
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>type</code> | <code>[DeliveryTypeAll1](src/models/unions/delivery-type-all1.ts)</code> | The delivery type of the asset. |
| <code>publicId</code> | <code>string</code> | The public ID of the asset. |
| <code>colors?</code> | <code>boolean</code> | Whether to include color information (predominant colors and histogram of 32 leading colors). Default: false.<br>**Default**: false |
| <code>mediaMetadata?</code> | <code>boolean</code> | Whether to include IPTC, XMP, and detailed Exif metadata in the response. Default: false.<br>**Default**: false |
| <code>faces?</code> | <code>boolean</code> | Whether to include a list of coordinates of detected faces. Default: false.<br>**Default**: false |
| <code>qualityAnalysis?</code> | <code>boolean</code> | Whether to return quality analysis scores for the image. Default: false.<br>**Default**: false |
| <code>accessibilityAnalysis?</code> | <code>boolean</code> | Whether to return accessibility analysis scores for the image. Default: false.<br>**Default**: false |
| <code>pages?</code> | <code>boolean</code> | Whether to report the number of pages in multi-page documents (e.g., PDF). Default: false.<br>**Default**: false |
| <code>phash?</code> | <code>boolean</code> | Whether to include the perceptual hash (pHash) of the uploaded photo for image similarity detection. Default: false.<br>**Default**: false |
| <code>coordinates?</code> | <code>boolean</code> | Whether to include previously specified custom cropping coordinates and faces coordinates. Default: false.<br>**Default**: false |
| <code>versions?</code> | <code>boolean</code> | Whether to include details of all the backed up versions of the asset. Default: false.<br>**Default**: false |
| <code>maxResults?</code> | <code>number</code> | Maximum number of derived assets to return. Default: 10.<br>**Default**: 10 |
| <code>derivedNextCursor?</code> | <code>string</code> | The cursor for the next page of derived assets when there are more derived images than max_results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.getResourceByPublicId(request)`

- **OnSuccess**: <code>[Info](src/models/info.ts)</code>
- **OnError**: throws <code>[Assets.GetResourceByPublicIdError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.getResourceByPublicId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Info, Assets.GetResourceByPublicIdError&gt;</code>, with `result.value` of type <code>[Info](src/models/info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>invalidateDerivedByUrls(request: Assets.InvalidateDerivedByUrlsRequest, options?: RequestOptions): ApiPromise&lt;InvalidateByUrlsResponse, Assets.InvalidateDerivedByUrlsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes and invalidates the cached derived assets that back the specified delivery URLs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.invalidateDerivedByUrls({
    cloudName: "my_cloud",
    body: { urls: ["some example string"] },
  });
  // TODO: Handle 'response' of type InvalidateByUrlsResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.InvalidateDerivedByUrlsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.invalidateDerivedByUrls({
  cloudName: "my_cloud",
  body: { urls: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvalidateByUrlsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[InvalidateByUrlsRequest](src/models/invalidate-by-urls-request.ts)</code> | The delivery URLs whose derived assets should be invalidated. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.invalidateDerivedByUrls(request)`

- **OnSuccess**: <code>[InvalidateByUrlsResponse](src/models/invalidate-by-urls-response.ts)</code>
- **OnError**: throws <code>[Assets.InvalidateDerivedByUrlsError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.invalidateDerivedByUrls(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvalidateByUrlsResponse, Assets.InvalidateDerivedByUrlsError&gt;</code>, with `result.value` of type <code>[InvalidateByUrlsResponse](src/models/invalidate-by-urls-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listImages(request: Assets.ListImagesRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, Assets.ListImagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of image assets. Results can be filtered by various criteria like tags, prefix, or specific public IDs.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listImages({
    cloudName: "my_cloud",
    publicIds: ["sample", "product_image", "banner_2023"],
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListImagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listImages({
  cloudName: "my_cloud",
  publicIds: ["sample", "product_image", "banner_2023"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>type?</code> | <code>[DeliveryTypeAll1](src/models/unions/delivery-type-all1.ts)</code> | The delivery type to filter by. When omitted, returns assets of all delivery types. |
| <code>prefix?</code> | <code>string</code> | A public_id prefix. When specified, all assets with that prefix are returned. |
| <code>publicIds?</code> | <code>string[]</code> | An array of public IDs to return. |
| <code>tags?</code> | <code>boolean</code> | Whether to include the list of tag names assigned to each asset. Default is false.<br>**Default**: false |
| <code>nextCursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return (1-500). |
| <code>direction?</code> | <code>[DirectionEnum](src/models/direction-enum.ts)</code> | The sort direction for the results. Default is "desc". |
| <code>startAt?</code> | <code>Date</code> (date-time) | An ISO-8601 formatted timestamp. When specified, returns resources created since that timestamp. Supported only if neither `prefix` nor `public_ids` were passed. |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | Additional fields to include in the response. The fields public_id and asset_id are always included. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listImages(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[Assets.ListImagesError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listImages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, Assets.ListImagesError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRawFiles(request: Assets.ListRawFilesRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, Assets.ListRawFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of raw assets. Results can be filtered by various criteria like tags, prefix, or specific public IDs.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listRawFiles({
    cloudName: "my_cloud",
    publicIds: ["sample", "product_image", "banner_2023"],
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListRawFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listRawFiles({
  cloudName: "my_cloud",
  publicIds: ["sample", "product_image", "banner_2023"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>type?</code> | <code>[DeliveryTypeAll1](src/models/unions/delivery-type-all1.ts)</code> | The delivery type to filter by. When omitted, returns assets of all delivery types. |
| <code>prefix?</code> | <code>string</code> | A public_id prefix. When specified, all assets with that prefix are returned. |
| <code>publicIds?</code> | <code>string[]</code> | An array of public IDs to return. |
| <code>tags?</code> | <code>boolean</code> | Whether to include the list of tag names assigned to each asset. Default is false.<br>**Default**: false |
| <code>nextCursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return (1-500). |
| <code>direction?</code> | <code>[DirectionEnum](src/models/direction-enum.ts)</code> | The sort direction for the results. Default is "desc". |
| <code>startAt?</code> | <code>Date</code> (date-time) | An ISO-8601 formatted timestamp. When specified, returns resources created since that timestamp. Supported only if neither `prefix` nor `public_ids` were passed. |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | Additional fields to include in the response. The fields public_id and asset_id are always included. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listRawFiles(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[Assets.ListRawFilesError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listRawFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, Assets.ListRawFilesError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourceTags(request: Assets.ListResourceTagsRequest, options?: RequestOptions): ApiPromise&lt;TagsListResponse, Assets.ListResourceTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a comprehensive list of all tags that exist in your product environment for assets of the specified type.

[Cloudinary Admin API documentation](https://cloudinary.com/documentation/admin_api)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listResourceTags({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
  });
  // TODO: Handle 'response' of type TagsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListResourceTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listResourceTags({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>prefix?</code> | <code>string</code> | Limit the returned tags to those that start with the specified prefix. |
| <code>nextCursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return (1-500). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listResourceTags(request)`

- **OnSuccess**: <code>[TagsListResponse](src/models/tags-list-response.ts)</code>
- **OnError**: throws <code>[Assets.ListResourceTagsError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listResourceTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsListResponse, Assets.ListResourceTagsError&gt;</code>, with `result.value` of type <code>[TagsListResponse](src/models/tags-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourceTypes(request: Assets.ListResourceTypesRequest, options?: RequestOptions): ApiPromise&lt;ResourceTypesResponse, Assets.ListResourceTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all resource types that correspond to assets currently in your product environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listResourceTypes({ cloudName: "my_cloud" });
  // TODO: Handle 'response' of type ResourceTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListResourceTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listResourceTypes({ cloudName: "my_cloud" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listResourceTypes(request)`

- **OnSuccess**: <code>[ResourceTypesResponse](src/models/resource-types-response.ts)</code>
- **OnError**: throws <code>[Assets.ListResourceTypesError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listResourceTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceTypesResponse, Assets.ListResourceTypesError&gt;</code>, with `result.value` of type <code>[ResourceTypesResponse](src/models/resource-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourcesByAssetFolder(request: Assets.ListResourcesByAssetFolderRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, Assets.ListResourcesByAssetFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of resources within a specific asset folder. Requires folder decoupling to be enabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listResourcesByAssetFolder({
    cloudName: "my_cloud",
    assetFolder: "some example string",
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListResourcesByAssetFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listResourcesByAssetFolder({
  cloudName: "my_cloud",
  assetFolder: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetFolder</code> | <code>string</code> | The full path of the asset folder. |
| <code>resourceType?</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | Resource type filter. |
| <code>nextCursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return (1-500). |
| <code>direction?</code> | <code>[DirectionEnum](src/models/direction-enum.ts)</code> | The sort direction for the results. Default is "desc". |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | Additional fields to include in the response. The fields public_id and asset_id are always included. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listResourcesByAssetFolder(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[Assets.ListResourcesByAssetFolderError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listResourcesByAssetFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, Assets.ListResourcesByAssetFolderError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourcesByAssetIDs(request: Assets.ListResourcesByAssetIDsRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, Assets.ListResourcesByAssetIDsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for specific resources using their asset IDs (or external IDs).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listResourcesByAssetIDs({
    cloudName: "my_cloud",
    assetIds: ["some example string"],
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListResourcesByAssetIDsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listResourcesByAssetIDs({
  cloudName: "my_cloud",
  assetIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetIds</code> | <code>string[]</code> | List of asset IDs to retrieve (max 100). |
| <code>resourceType?</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | Resource type filter. |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | Additional fields to include in the response. The fields public_id and asset_id are always included. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listResourcesByAssetIDs(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[Assets.ListResourcesByAssetIDsError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listResourcesByAssetIDs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, Assets.ListResourcesByAssetIDsError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourcesByContainerId(request: Assets.ListResourcesByContainerIdRequest, options?: RequestOptions): ApiPromise&lt;ResourcesByContainerIdResponse, Assets.ListResourcesByContainerIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the assets contained in the folder identified by the given container ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listResourcesByContainerId({
    cloudName: "my_cloud",
    containerId: "cd7e9d690a014c68ae8b58f08e090cb03a",
  });
  // TODO: Handle 'response' of type ResourcesByContainerIdResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListResourcesByContainerIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listResourcesByContainerId({
  cloudName: "my_cloud",
  containerId: "cd7e9d690a014c68ae8b58f08e090cb03a",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourcesByContainerIdResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>containerId</code> | <code>string</code> | The immutable identifier of the folder container whose assets are listed. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return. Default is 10.<br>**Default**: 10 |
| <code>nextCursor?</code> | <code>string</code> | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |
| <code>sortBy?</code> | <code>string</code> | The field by which the assets are sorted. Default is "uploaded_at". |
| <code>fields?</code> | <code>string</code> | A comma-separated list of asset fields to include in each returned asset. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listResourcesByContainerId(request)`

- **OnSuccess**: <code>[ResourcesByContainerIdResponse](src/models/resources-by-container-id-response.ts)</code>
- **OnError**: throws <code>[Assets.ListResourcesByContainerIdError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listResourcesByContainerId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourcesByContainerIdResponse, Assets.ListResourcesByContainerIdError&gt;</code>, with `result.value` of type <code>[ResourcesByContainerIdResponse](src/models/resources-by-container-id-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourcesByContext(request: Assets.ListResourcesByContextRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, Assets.ListResourcesByContextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves resources matching specific context key/value pairs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listResourcesByContext({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    key: "some example string",
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListResourcesByContextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listResourcesByContext({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  key: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>key</code> | <code>string</code> | Context key to filter by. |
| <code>value?</code> | <code>string</code> | Context value to filter by. |
| <code>nextCursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return (1-500). |
| <code>direction?</code> | <code>[DirectionEnum](src/models/direction-enum.ts)</code> | The sort direction for the results. Default is "desc". |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | Additional fields to include in the response. The fields public_id and asset_id are always included. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listResourcesByContext(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[Assets.ListResourcesByContextError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listResourcesByContext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, Assets.ListResourcesByContextError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourcesByExternalIDs(request: Assets.ListResourcesByExternalIDsRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, Assets.ListResourcesByExternalIDsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for specific resources using their external IDs (or asset IDs).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listResourcesByExternalIDs({
    cloudName: "my_cloud",
    externalIds: ["some example string"],
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListResourcesByExternalIDsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listResourcesByExternalIDs({
  cloudName: "my_cloud",
  externalIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>externalIds</code> | <code>string[]</code> | List of external IDs for identifying the assets to retrieve. Either external_ids or asset_ids must be provided. |
| <code>resourceType?</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | Resource type filter. |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | Additional fields to include in the response. The fields public_id and asset_id are always included. |
| <code>tags?</code> | <code>boolean</code> | Whether to include the list of tag names assigned to each asset. Default is false.<br>**Default**: false |
| <code>context?</code> | <code>boolean</code> | Whether to include key-value pairs of contextual metadata associated with each asset. Default is false.<br>**Default**: false |
| <code>metadata?</code> | <code>boolean</code> | Whether to include the structured metadata fields and values assigned to each asset. Default is false.<br>**Default**: false |
| <code>moderations?</code> | <code>boolean</code> | Whether to include image moderation status of each asset. Default is false.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listResourcesByExternalIDs(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[Assets.ListResourcesByExternalIDsError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listResourcesByExternalIDs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, Assets.ListResourcesByExternalIDsError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourcesByModerationKindAndStatus(request: Assets.ListResourcesByModerationKindAndStatusRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, Assets.ListResourcesByModerationKindAndStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves resources matching specific moderation kind and status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listResourcesByModerationKindAndStatus({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    moderationKind: ModerationKind.Manual,
    moderationStatus: ModerationStatus2.Approved,
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListResourcesByModerationKindAndStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listResourcesByModerationKindAndStatus({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  moderationKind: ModerationKind.Manual,
  moderationStatus: ModerationStatus2.Approved,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>moderationKind</code> | <code>[ModerationKind](src/models/moderation-kind.ts)</code> | The type of moderation to filter by. |
| <code>moderationStatus</code> | <code>[ModerationStatus2](src/models/moderation-status2.ts)</code> | The moderation status to filter by. |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | Additional fields to include in the response. The fields public_id and asset_id are always included. |
| <code>nextCursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return (1-500). |
| <code>direction?</code> | <code>[DirectionEnum](src/models/direction-enum.ts)</code> | The sort direction for the results. Default is "desc". |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listResourcesByModerationKindAndStatus(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[Assets.ListResourcesByModerationKindAndStatusError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listResourcesByModerationKindAndStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, Assets.ListResourcesByModerationKindAndStatusError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVideos(request: Assets.ListVideosRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, Assets.ListVideosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of video assets. Results can be filtered by various criteria like tags, prefix, or specific public IDs.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listVideos({
    cloudName: "my_cloud",
    publicIds: ["sample", "product_image", "banner_2023"],
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListVideosError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listVideos({
  cloudName: "my_cloud",
  publicIds: ["sample", "product_image", "banner_2023"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>type?</code> | <code>[DeliveryTypeAll1](src/models/unions/delivery-type-all1.ts)</code> | The delivery type to filter by. When omitted, returns assets of all delivery types. |
| <code>prefix?</code> | <code>string</code> | A public_id prefix. When specified, all assets with that prefix are returned. |
| <code>publicIds?</code> | <code>string[]</code> | An array of public IDs to return. |
| <code>tags?</code> | <code>boolean</code> | Whether to include the list of tag names assigned to each asset. Default is false.<br>**Default**: false |
| <code>nextCursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return (1-500). |
| <code>direction?</code> | <code>[DirectionEnum](src/models/direction-enum.ts)</code> | The sort direction for the results. Default is "desc". |
| <code>startAt?</code> | <code>Date</code> (date-time) | An ISO-8601 formatted timestamp. When specified, returns resources created since that timestamp. Supported only if neither `prefix` nor `public_ids` were passed. |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | Additional fields to include in the response. The fields public_id and asset_id are always included. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listVideos(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[Assets.ListVideosError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listVideos(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, Assets.ListVideosError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>renameAsset(request: Assets.RenameAssetRequest, options?: RequestOptions): ApiPromise&lt;UploadResponse, Assets.RenameAssetError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.renameAsset({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    body: { fromPublicId: "some example string", toPublicId: "some example string" },
  });
  // TODO: Handle 'response' of type UploadResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.RenameAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.renameAsset({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  body: { fromPublicId: "some example string", toPublicId: "some example string" },
}).asApiResult();
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>body</code> | <code>[RenameRequest](src/models/rename-request.ts)</code> | The rename request parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.renameAsset(request)`

- **OnSuccess**: <code>[UploadResponse](src/models/upload-response.ts)</code>
- **OnError**: throws <code>[Assets.RenameAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.renameAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadResponse, Assets.RenameAssetError&gt;</code>, with `result.value` of type <code>[UploadResponse](src/models/upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreResourcesByAssetIDs(request: Assets.RestoreResourcesByAssetIDsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, RestoreResponse1&gt;, Assets.RestoreResourcesByAssetIDsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores one or more resources from backup using their asset IDs. Can optionally specify versions to restore.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.restoreResourcesByAssetIDs({
    cloudName: "my_cloud",
    body: { assetIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type Record<string, RestoreResponse1>
} catch (err) {
  // TODO: Handle 'err' of type Assets.RestoreResourcesByAssetIDsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.restoreResourcesByAssetIDs({
  cloudName: "my_cloud",
  body: { assetIds: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, RestoreResponse1>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[RestoreRequest](src/models/restore-request.ts)</code> | The asset IDs to restore and optional version parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.restoreResourcesByAssetIDs(request)`

- **OnSuccess**: <code>Record&lt;string, [RestoreResponse1](src/models/unions/restore-response1.ts)&gt;</code>
- **OnError**: throws <code>[Assets.RestoreResourcesByAssetIDsError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.restoreResourcesByAssetIDs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, RestoreResponse1&gt;, Assets.RestoreResourcesByAssetIDsError&gt;</code>, with `result.value` of type <code>Record&lt;string, [RestoreResponse1](src/models/unions/restore-response1.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResourceByAssetId(request: Assets.UpdateResourceByAssetIdRequest, options?: RequestOptions): ApiPromise&lt;Info, Assets.UpdateResourceByAssetIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates one or more attributes of a specified resource (asset) by its asset ID. This enables you to update details of an asset by its unique and immutable identifier, regardless of public ID, display name, asset folder, resource type or delivery type. Note that you can also update attributes of an existing asset using the explicit API endpoint.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.updateResourceByAssetId({
    cloudName: "my_cloud",
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
    body: {},
  });
  // TODO: Handle 'response' of type Info
} catch (err) {
  // TODO: Handle 'err' of type Assets.UpdateResourceByAssetIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.updateResourceByAssetId({
  cloudName: "my_cloud",
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Info
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetId</code> | <code>string</code> | The asset ID of the resource. Must be a 32-character hexadecimal string. |
| <code>body</code> | <code>[ResourceUpdateRequest](src/models/resource-update-request.ts)</code> | The asset attributes to update. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.updateResourceByAssetId(request)`

- **OnSuccess**: <code>[Info](src/models/info.ts)</code>
- **OnError**: throws <code>[Assets.UpdateResourceByAssetIdError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.updateResourceByAssetId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Info, Assets.UpdateResourceByAssetIdError&gt;</code>, with `result.value` of type <code>[Info](src/models/info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResourceByBody(request: Assets.UpdateResourceByBodyRequest, options?: RequestOptions): ApiPromise&lt;ResourceInternalResponse, Assets.UpdateResourceByBodyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the details of an existing asset (such as tags, contextual metadata, structured metadata, and moderation status) identified by its public ID, delivery type, and resource type passed in the request body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.updateResourceByBody({
    cloudName: "my_cloud",
    body: {
      publicId: "some example string",
      resourceType: ResourceType.Image,
      kind: ManagedDeliveryType.Upload,
    },
  });
  // TODO: Handle 'response' of type ResourceInternalResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.UpdateResourceByBodyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.updateResourceByBody({
  cloudName: "my_cloud",
  body: {
    publicId: "some example string",
    resourceType: ResourceType.Image,
    kind: ManagedDeliveryType.Upload,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceInternalResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[ResourceUpdateByBodyRequest](src/models/resource-update-by-body-request.ts)</code> | The asset identifiers plus the attributes to update. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.updateResourceByBody(request)`

- **OnSuccess**: <code>[ResourceInternalResponse](src/models/resource-internal-response.ts)</code>
- **OnError**: throws <code>[Assets.UpdateResourceByBodyError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.updateResourceByBody(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceInternalResponse, Assets.UpdateResourceByBodyError&gt;</code>, with `result.value` of type <code>[ResourceInternalResponse](src/models/resource-internal-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResourceByPublicId(request: Assets.UpdateResourceByPublicIdRequest, options?: RequestOptions): ApiPromise&lt;Info, Assets.UpdateResourceByPublicIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates one or more attributes of a specified resource (asset) identified by its public ID. Note that you can also update many attributes of an existing asset using the explicit method, which is not rate limited.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.updateResourceByPublicId({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    type: ManagedDeliveryType.Upload,
    publicId: "sample",
    body: {},
  });
  // TODO: Handle 'response' of type Info
} catch (err) {
  // TODO: Handle 'err' of type Assets.UpdateResourceByPublicIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.updateResourceByPublicId({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  type: ManagedDeliveryType.Upload,
  publicId: "sample",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Info
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>type</code> | <code>[DeliveryTypeAll1](src/models/unions/delivery-type-all1.ts)</code> | The delivery type of the asset. |
| <code>publicId</code> | <code>string</code> | The public ID of the asset. |
| <code>body</code> | <code>[ResourceUpdateRequest](src/models/resource-update-request.ts)</code> | The asset attributes to update. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.updateResourceByPublicId(request)`

- **OnSuccess**: <code>[Info](src/models/info.ts)</code>
- **OnError**: throws <code>[Assets.UpdateResourceByPublicIdError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.updateResourceByPublicId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Info, Assets.UpdateResourceByPublicIdError&gt;</code>, with `result.value` of type <code>[Info](src/models/info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Moderations

> Source: [Moderations](src/resources/moderations.ts)

<details>
<summary><code>listResourcesByModerationKindAndStatus(request: Moderations.ListResourcesByModerationKindAndStatusRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, Moderations.ListResourcesByModerationKindAndStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves resources matching specific moderation kind and status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.moderations.listResourcesByModerationKindAndStatus({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    moderationKind: ModerationKind.Manual,
    moderationStatus: ModerationStatus2.Approved,
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type Moderations.ListResourcesByModerationKindAndStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.moderations.listResourcesByModerationKindAndStatus({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  moderationKind: ModerationKind.Manual,
  moderationStatus: ModerationStatus2.Approved,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>moderationKind</code> | <code>[ModerationKind](src/models/moderation-kind.ts)</code> | The type of moderation to filter by. |
| <code>moderationStatus</code> | <code>[ModerationStatus2](src/models/moderation-status2.ts)</code> | The moderation status to filter by. |
| <code>fields?</code> | <code>[Fields](src/models/unions/fields.ts)</code> | Additional fields to include in the response. The fields public_id and asset_id are always included. |
| <code>nextCursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return (1-500). |
| <code>direction?</code> | <code>[DirectionEnum](src/models/direction-enum.ts)</code> | The sort direction for the results. Default is "desc". |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.moderations.listResourcesByModerationKindAndStatus(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[Moderations.ListResourcesByModerationKindAndStatusError](src/resources/moderations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.moderations.listResourcesByModerationKindAndStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, Moderations.ListResourcesByModerationKindAndStatusError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>listResourceTags(request: Tags.ListResourceTagsRequest, options?: RequestOptions): ApiPromise&lt;TagsListResponse, Tags.ListResourceTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a comprehensive list of all tags that exist in your product environment for assets of the specified type.

[Cloudinary Admin API documentation](https://cloudinary.com/documentation/admin_api)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.listResourceTags({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
  });
  // TODO: Handle 'response' of type TagsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Tags.ListResourceTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.listResourceTags({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>prefix?</code> | <code>string</code> | Limit the returned tags to those that start with the specified prefix. |
| <code>nextCursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return (1-500). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.listResourceTags(request)`

- **OnSuccess**: <code>[TagsListResponse](src/models/tags-list-response.ts)</code>
- **OnError**: throws <code>[Tags.ListResourceTagsError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.listResourceTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsListResponse, Tags.ListResourceTagsError&gt;</code>, with `result.value` of type <code>[TagsListResponse](src/models/tags-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Backups

> Source: [Backups](src/resources/backups.ts)

<details>
<summary><code>deleteBackupVersions(request: Backups.DeleteBackupVersionsRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteBackupVersionsResponse, Backups.DeleteBackupVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specific backed up versions of an asset identified by asset ID.
This operation is irreversible and deleted versions cannot be recovered.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.backups.deleteBackupVersions({
    cloudName: "my_cloud",
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
    body: { versionIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type DeleteBackupVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Backups.DeleteBackupVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.backups.deleteBackupVersions({
  cloudName: "my_cloud",
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  body: { versionIds: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBackupVersionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetId</code> | <code>string</code> | The asset ID of the resource. Must be a 32-character hexadecimal string. |
| <code>body</code> | <code>[DeleteBackupVersionsRequest](src/models/delete-backup-versions-request.ts)</code> | The asset IDs and version IDs to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.backups.deleteBackupVersions(request)`

- **OnSuccess**: <code>[DeleteBackupVersionsResponse](src/models/delete-backup-versions-response.ts)</code>
- **OnError**: throws <code>[Backups.DeleteBackupVersionsError](src/resources/backups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.backups.deleteBackupVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBackupVersionsResponse, Backups.DeleteBackupVersionsError&gt;</code>, with `result.value` of type <code>[DeleteBackupVersionsResponse](src/models/delete-backup-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AssetRelations

> Source: [AssetRelations](src/resources/asset-relations.ts)

<details>
<summary><code>createAssetRelationsByAssetId(request: AssetRelations.CreateAssetRelationsByAssetIdRequest, options?: RequestOptions): ApiPromise&lt;AssetRelationsResponse, AssetRelations.CreateAssetRelationsByAssetIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Relates an asset to other assets by their asset IDs, an immutable identifier, regardless of public ID, display name, asset folder, resource type or delivery type. This is a bidirectional process, meaning that the asset will also be added as a related_asset to all the other assets specified. The relation is also a one to many relationship, where the asset is related to all the assets specified, but those assets aren't also related to each other.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetRelations.createAssetRelationsByAssetId({
    cloudName: "my_cloud",
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
    body: { assetsToRelate: ["some example string"] },
  });
  // TODO: Handle 'response' of type AssetRelationsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssetRelations.CreateAssetRelationsByAssetIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetRelations.createAssetRelationsByAssetId({
  cloudName: "my_cloud",
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  body: { assetsToRelate: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetRelationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetId</code> | <code>string</code> | The asset ID of the resource. Must be a 32-character hexadecimal string. |
| <code>body</code> | <code>[RelateAssetsByAssetIdRequest](src/models/relate-assets-by-asset-id-request.ts)</code> | The asset IDs to relate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetRelations.createAssetRelationsByAssetId(request)`

- **OnSuccess**: <code>[AssetRelationsResponse](src/models/asset-relations-response.ts)</code>
- **OnError**: throws <code>[AssetRelations.CreateAssetRelationsByAssetIdError](src/resources/asset-relations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetRelations.createAssetRelationsByAssetId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetRelationsResponse, AssetRelations.CreateAssetRelationsByAssetIdError&gt;</code>, with `result.value` of type <code>[AssetRelationsResponse](src/models/asset-relations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createAssetRelationsByPublicId(request: AssetRelations.CreateAssetRelationsByPublicIdRequest, options?: RequestOptions): ApiPromise&lt;AssetRelationsResponse, AssetRelations.CreateAssetRelationsByPublicIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Relates an asset to other assets by public IDs. This allows you to indicate that the asset is logically related to other assets in some way (e.g., similar content, or a peripheral asset like video/transcript, etc). This is a bidirectional process, meaning that the asset is also added as a related_asset to all the other assets specified. The relation is also a one to many relationship, where the asset is related to all the assets specified, but those assets aren't also related to each other.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetRelations.createAssetRelationsByPublicId({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    type: ManagedDeliveryType.Upload,
    publicId: "sample",
    body: { assetsToRelate: ["some example string"] },
  });
  // TODO: Handle 'response' of type AssetRelationsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssetRelations.CreateAssetRelationsByPublicIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetRelations.createAssetRelationsByPublicId({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  type: ManagedDeliveryType.Upload,
  publicId: "sample",
  body: { assetsToRelate: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetRelationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>type?</code> | <code>[ManagedDeliveryType](src/models/managed-delivery-type.ts)</code> | The delivery type of the asset.<br>**Default**: "upload" |
| <code>publicId</code> | <code>string</code> | The public ID of the asset. |
| <code>body</code> | <code>[RelateAssetsByPublicIdRequest](src/models/relate-assets-by-public-id-request.ts)</code> | The assets to relate by public ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetRelations.createAssetRelationsByPublicId(request)`

- **OnSuccess**: <code>[AssetRelationsResponse](src/models/asset-relations-response.ts)</code>
- **OnError**: throws <code>[AssetRelations.CreateAssetRelationsByPublicIdError](src/resources/asset-relations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetRelations.createAssetRelationsByPublicId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetRelationsResponse, AssetRelations.CreateAssetRelationsByPublicIdError&gt;</code>, with `result.value` of type <code>[AssetRelationsResponse](src/models/asset-relations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAssetRelationsByAssetId(request: AssetRelations.DeleteAssetRelationsByAssetIdRequest, options?: RequestOptions): ApiPromise&lt;AssetRelationsResponse, AssetRelations.DeleteAssetRelationsByAssetIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unrelates the asset from other assets, specified by their asset IDs, an immutable identifier, regardless of public ID, display name, asset folder, resource type or delivery type. This is a bidirectional process, meaning that the asset will also be removed as a related_asset from all the other assets specified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetRelations.deleteAssetRelationsByAssetId({
    cloudName: "my_cloud",
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
    body: { assetsToUnrelate: ["some example string"] },
  });
  // TODO: Handle 'response' of type AssetRelationsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssetRelations.DeleteAssetRelationsByAssetIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetRelations.deleteAssetRelationsByAssetId({
  cloudName: "my_cloud",
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  body: { assetsToUnrelate: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetRelationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>assetId</code> | <code>string</code> | The asset ID of the resource. Must be a 32-character hexadecimal string. |
| <code>body</code> | <code>[UnrelateAssetsByAssetIdRequest](src/models/unrelate-assets-by-asset-id-request.ts)</code> | The asset IDs to unrelate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetRelations.deleteAssetRelationsByAssetId(request)`

- **OnSuccess**: <code>[AssetRelationsResponse](src/models/asset-relations-response.ts)</code>
- **OnError**: throws <code>[AssetRelations.DeleteAssetRelationsByAssetIdError](src/resources/asset-relations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetRelations.deleteAssetRelationsByAssetId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetRelationsResponse, AssetRelations.DeleteAssetRelationsByAssetIdError&gt;</code>, with `result.value` of type <code>[AssetRelationsResponse](src/models/asset-relations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAssetRelationsByPublicId(request: AssetRelations.DeleteAssetRelationsByPublicIdRequest, options?: RequestOptions): ApiPromise&lt;AssetRelationsResponse, AssetRelations.DeleteAssetRelationsByPublicIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unrelates the asset from other assets, specified by public IDs. This is a bidirectional process, meaning that the asset will also be removed as a related_asset from all the other assets specified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetRelations.deleteAssetRelationsByPublicId({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    type: ManagedDeliveryType.Upload,
    publicId: "sample",
    body: { assetsToUnrelate: ["some example string"] },
  });
  // TODO: Handle 'response' of type AssetRelationsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssetRelations.DeleteAssetRelationsByPublicIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetRelations.deleteAssetRelationsByPublicId({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  type: ManagedDeliveryType.Upload,
  publicId: "sample",
  body: { assetsToUnrelate: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetRelationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>type?</code> | <code>[ManagedDeliveryType](src/models/managed-delivery-type.ts)</code> | The delivery type of the asset.<br>**Default**: "upload" |
| <code>publicId</code> | <code>string</code> | The public ID of the asset. |
| <code>body</code> | <code>[UnrelateAssetsByPublicIdRequest](src/models/unrelate-assets-by-public-id-request.ts)</code> | The assets to unrelate by public ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetRelations.deleteAssetRelationsByPublicId(request)`

- **OnSuccess**: <code>[AssetRelationsResponse](src/models/asset-relations-response.ts)</code>
- **OnError**: throws <code>[AssetRelations.DeleteAssetRelationsByPublicIdError](src/resources/asset-relations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetRelations.deleteAssetRelationsByPublicId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetRelationsResponse, AssetRelations.DeleteAssetRelationsByPublicIdError&gt;</code>, with `result.value` of type <code>[AssetRelationsResponse](src/models/asset-relations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AssetMetadata

> Source: [AssetMetadata](src/resources/asset-metadata.ts)

<details>
<summary><code>updateAssetsContext(request: AssetMetadata.UpdateAssetsContextRequest, options?: RequestOptions): ApiPromise&lt;PublicIdsResponse, AssetMetadata.UpdateAssetsContextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies a contextual-metadata command to the given assets, addressing them by public ID.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetMetadata.updateAssetsContext({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    body: {
      publicIds: ["sample", "product_image", "banner_2023"],
      command: Command1.Add,
      context: "alt=My image|caption=Nice photo",
    },
  });
  // TODO: Handle 'response' of type PublicIdsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssetMetadata.UpdateAssetsContextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetMetadata.updateAssetsContext({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  body: {
    publicIds: ["sample", "product_image", "banner_2023"],
    command: Command1.Add,
    context: "alt=My image|caption=Nice photo",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicIdsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>body</code> | <code>[ContextUpdateRequest](src/models/context-update-request.ts)</code> | The context command, the metadata to apply, and the assets to apply it to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetMetadata.updateAssetsContext(request)`

- **OnSuccess**: <code>[PublicIdsResponse](src/models/public-ids-response.ts)</code>
- **OnError**: throws <code>[AssetMetadata.UpdateAssetsContextError](src/resources/asset-metadata.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetMetadata.updateAssetsContext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicIdsResponse, AssetMetadata.UpdateAssetsContextError&gt;</code>, with `result.value` of type <code>[PublicIdsResponse](src/models/public-ids-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAssetsMetadata(request: AssetMetadata.UpdateAssetsMetadataRequest, options?: RequestOptions): ApiPromise&lt;PublicIdsResponse, AssetMetadata.UpdateAssetsMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns structured metadata field values to the given assets, addressing them by public ID.

Values are merged into each asset's existing structured metadata: fields not mentioned
keep their current values, and an empty value clears the field. Every referenced field
must already exist in the product environment. Conditional metadata rules are evaluated
as part of the update.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetMetadata.updateAssetsMetadata({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    body: {
      publicIds: ["sample", "product_image", "banner_2023"],
      metadata: { in_stock_id: 50, color_id: ["green", "red"] },
    },
  });
  // TODO: Handle 'response' of type PublicIdsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssetMetadata.UpdateAssetsMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetMetadata.updateAssetsMetadata({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  body: {
    publicIds: ["sample", "product_image", "banner_2023"],
    metadata: { in_stock_id: 50, color_id: ["green", "red"] },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicIdsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>body</code> | <code>[MetadataUpdateRequest](src/models/metadata-update-request.ts)</code> | The structured metadata values to assign and the assets to assign them to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetMetadata.updateAssetsMetadata(request)`

- **OnSuccess**: <code>[PublicIdsResponse](src/models/public-ids-response.ts)</code>
- **OnError**: throws <code>[AssetMetadata.UpdateAssetsMetadataError](src/resources/asset-metadata.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetMetadata.updateAssetsMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicIdsResponse, AssetMetadata.UpdateAssetsMetadataError&gt;</code>, with `result.value` of type <code>[PublicIdsResponse](src/models/public-ids-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAssetsTags(request: AssetMetadata.UpdateAssetsTagsRequest, options?: RequestOptions): ApiPromise&lt;PublicIdsResponse, AssetMetadata.UpdateAssetsTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies a tag command to the given assets, addressing them by public ID.

The number of tags multiplied by the number of public IDs must not exceed 10,000.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetMetadata.updateAssetsTags({
    cloudName: "my_cloud",
    resourceType: ResourceType.Image,
    body: {
      publicIds: ["sample", "product_image", "banner_2023"],
      command: Command.Add,
      tags: ["animal", "dog"],
    },
  });
  // TODO: Handle 'response' of type PublicIdsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssetMetadata.UpdateAssetsTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetMetadata.updateAssetsTags({
  cloudName: "my_cloud",
  resourceType: ResourceType.Image,
  body: {
    publicIds: ["sample", "product_image", "banner_2023"],
    command: Command.Add,
    tags: ["animal", "dog"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicIdsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of resource (image, video, or raw). |
| <code>body</code> | <code>[TagsUpdateRequest](src/models/tags-update-request.ts)</code> | The tag command, the tags to apply, and the assets to apply them to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetMetadata.updateAssetsTags(request)`

- **OnSuccess**: <code>[PublicIdsResponse](src/models/public-ids-response.ts)</code>
- **OnError**: throws <code>[AssetMetadata.UpdateAssetsTagsError](src/resources/asset-metadata.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetMetadata.updateAssetsTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicIdsResponse, AssetMetadata.UpdateAssetsTagsError&gt;</code>, with `result.value` of type <code>[PublicIdsResponse](src/models/public-ids-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VideoAnalytics

> Source: [VideoAnalytics](src/resources/video-analytics.ts)

<details>
<summary><code>getVideoViews(request: VideoAnalytics.GetVideoViewsRequest, options?: RequestOptions): ApiPromise&lt;VideoViewsResponse, VideoAnalytics.GetVideoViewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves analytics data for video views. Results can be filtered using expressions based on various criteria
such as video public ID, view duration, viewer information, and more.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.videoAnalytics.getVideoViews({ cloudName: "my_cloud" });
  // TODO: Handle 'response' of type VideoViewsResponse
} catch (err) {
  // TODO: Handle 'err' of type VideoAnalytics.GetVideoViewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.videoAnalytics.getVideoViews({ cloudName: "my_cloud" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VideoViewsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>expression?</code> | <code>string</code> | A set of conditions used to limit the results to rows that match those conditions. For example: `?expression=video_public_id=skate` |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return. Default is 10.<br>**Default**: 10 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | Specifies the expression field by which to sort the results. Prepend values with a '-' to reverse the order.<br>**Default**: "-view_ended_at" |
| <code>nextCursor?</code> | <code>string</code> | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.videoAnalytics.getVideoViews(request)`

- **OnSuccess**: <code>[VideoViewsResponse](src/models/video-views-response.ts)</code>
- **OnError**: throws <code>[VideoAnalytics.GetVideoViewsError](src/resources/video-analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.videoAnalytics.getVideoViews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VideoViewsResponse, VideoAnalytics.GetVideoViewsError&gt;</code>, with `result.value` of type <code>[VideoViewsResponse](src/models/video-views-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Explode

> Source: [Explode](src/resources/explode.ts)

<details>
<summary><code>explodeResource(request: Explode.ExplodeResourceRequest, options?: RequestOptions): ApiPromise&lt;ExplodeResponse, Explode.ExplodeResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates derived images for each of the individual pages/frames in a multi-page/frame file (such as a PDF or animated image).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.explode.explodeResource({
    cloudName: "my_cloud",
    resourceType: ResourceType9.Image,
    body: { publicId: "some example string", transformation: "some example string" },
  });
  // TODO: Handle 'response' of type ExplodeResponse
} catch (err) {
  // TODO: Handle 'err' of type Explode.ExplodeResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.explode.explodeResource({
  cloudName: "my_cloud",
  resourceType: ResourceType9.Image,
  body: { publicId: "some example string", transformation: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExplodeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>resourceType</code> | <code>[ResourceType9](src/models/resource-type9.ts)</code> | The type of resource to explode. Only "image" is supported. |
| <code>body</code> | <code>[ExplodeRequest](src/models/explode-request.ts)</code> | The explode operation parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.explode.explodeResource(request)`

- **OnSuccess**: <code>[ExplodeResponse](src/models/explode-response.ts)</code>
- **OnError**: throws <code>[Explode.ExplodeResourceError](src/resources/explode.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.explode.explodeResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExplodeResponse, Explode.ExplodeResourceError&gt;</code>, with `result.value` of type <code>[ExplodeResponse](src/models/explode-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InitialBackup

> Source: [InitialBackup](src/resources/initial-backup.ts)

<details>
<summary><code>createInitialBackup(request: InitialBackup.CreateInitialBackupRequest, options?: RequestOptions): ApiPromise&lt;InitialBackupCreateResponse, InitialBackup.CreateInitialBackupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates an initial backup of existing assets for the active product environment.
Backup for new uploads must be enabled on the product environment, and the requester must be permitted to
initiate a backup.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.initialBackup.createInitialBackup({ cloudName: "my_cloud" });
  // TODO: Handle 'response' of type InitialBackupCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type InitialBackup.CreateInitialBackupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.initialBackup.createInitialBackup({ cloudName: "my_cloud" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InitialBackupCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body?</code> | <code>[InitialBackupCreateRequest](src/models/initial-backup-create-request.ts)</code> | The initial backup configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.initialBackup.createInitialBackup(request)`

- **OnSuccess**: <code>[InitialBackupCreateResponse](src/models/initial-backup-create-response.ts)</code>
- **OnError**: throws <code>[InitialBackup.CreateInitialBackupError](src/resources/initial-backup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.initialBackup.createInitialBackup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InitialBackupCreateResponse, InitialBackup.CreateInitialBackupError&gt;</code>, with `result.value` of type <code>[InitialBackupCreateResponse](src/models/initial-backup-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInitialBackup(request: InitialBackup.GetInitialBackupRequest, options?: RequestOptions): ApiPromise&lt;InitialBackupProgressResponse, InitialBackup.GetInitialBackupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the progress and status of a single initial backup operation by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.initialBackup.getInitialBackup({ cloudName: "my_cloud", id: "abc123def456" });
  // TODO: Handle 'response' of type InitialBackupProgressResponse
} catch (err) {
  // TODO: Handle 'err' of type InitialBackup.GetInitialBackupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.initialBackup.getInitialBackup({
  cloudName: "my_cloud",
  id: "abc123def456",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InitialBackupProgressResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>id</code> | <code>string</code> | The unique identifier of the initial backup operation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.initialBackup.getInitialBackup(request)`

- **OnSuccess**: <code>[InitialBackupProgressResponse](src/models/initial-backup-progress-response.ts)</code>
- **OnError**: throws <code>[InitialBackup.GetInitialBackupError](src/resources/initial-backup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.initialBackup.getInitialBackup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InitialBackupProgressResponse, InitialBackup.GetInitialBackupError&gt;</code>, with `result.value` of type <code>[InitialBackupProgressResponse](src/models/initial-backup-progress-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInitialBackups(request: InitialBackup.ListInitialBackupsRequest, options?: RequestOptions): ApiPromise&lt;InitialBackupListResponse, InitialBackup.ListInitialBackupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists initial backup operations for the active product environment, ordered from most recent to oldest.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.initialBackup.listInitialBackups({ cloudName: "my_cloud" });
  // TODO: Handle 'response' of type InitialBackupListResponse
} catch (err) {
  // TODO: Handle 'err' of type InitialBackup.ListInitialBackupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.initialBackup.listInitialBackups({ cloudName: "my_cloud" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InitialBackupListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return. Default is 10.<br>**Default**: 10 |
| <code>nextCursor?</code> | <code>string</code> | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.initialBackup.listInitialBackups(request)`

- **OnSuccess**: <code>[InitialBackupListResponse](src/models/initial-backup-list-response.ts)</code>
- **OnError**: throws <code>[InitialBackup.ListInitialBackupsError](src/resources/initial-backup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.initialBackup.listInitialBackups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InitialBackupListResponse, InitialBackup.ListInitialBackupsError&gt;</code>, with `result.value` of type <code>[InitialBackupListResponse](src/models/initial-backup-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](src/resources/folders.ts)

<details>
<summary><code>assignFolderRoles(request: Folders.AssignFolderRolesRequestParams, options?: RequestOptions): ApiPromise&lt;SuccessResponse, Folders.AssignFolderRolesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns or removes folder roles for a principal (user, group, or API key).
Supports all system folder roles (see [System roles reference](https://cloudinary.com/documentation/permissions_system_roles_policies#folder_roles)).
Enterprise customers can also assign custom roles by ID.
Note: Assigning roles to users or groups via this endpoint requires their user or group IDs, which are available through the Provisioning API (Enterprise only). Free customers can use this endpoint to assign roles only to API keys, but can assign folder roles to users and groups through the UI.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.assignFolderRoles({
    cloudName: "my_cloud",
    folderId: "cd7e9d690a014c68ae8b58f08e090cb03a",
    body: {
      principal: { type: PrincipalType.User, id: "some example string" },
      operation: Operation.Add,
      roles: ["some example string"],
    },
  });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.AssignFolderRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.assignFolderRoles({
  cloudName: "my_cloud",
  folderId: "cd7e9d690a014c68ae8b58f08e090cb03a",
  body: {
    principal: { type: PrincipalType.User, id: "some example string" },
    operation: Operation.Add,
    roles: ["some example string"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>folderId</code> | <code>string</code> | The immutable identifier of the folder, returned by the Get root folders and Get subfolders endpoints. |
| <code>body</code> | <code>[AssignFolderRolesRequest](src/models/assign-folder-roles-request.ts)</code> | The folder role assignments. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.assignFolderRoles(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[Folders.AssignFolderRolesError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.assignFolderRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, Folders.AssignFolderRolesError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createFolder(request: Folders.CreateFolderRequest, options?: RequestOptions): ApiPromise&lt;CreateFolderResponse, Folders.CreateFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new folder at the specified path

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.createFolder({ cloudName: "my_cloud", folder: "product/test" });
  // TODO: Handle 'response' of type CreateFolderResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.CreateFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.createFolder({
  cloudName: "my_cloud",
  folder: "product/test",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateFolderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>folder</code> | <code>string</code> | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.createFolder(request)`

- **OnSuccess**: <code>[CreateFolderResponse](src/models/create-folder-response.ts)</code>
- **OnError**: throws <code>[Folders.CreateFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.createFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateFolderResponse, Folders.CreateFolderError&gt;</code>, with `result.value` of type <code>[CreateFolderResponse](src/models/create-folder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>destroyFolder(request: Folders.DestroyFolderRequest, options?: RequestOptions): ApiPromise&lt;DeleteFolderResponse, Folders.DestroyFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a folder and all assets within it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.destroyFolder({ cloudName: "my_cloud", folder: "product/test" });
  // TODO: Handle 'response' of type DeleteFolderResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.DestroyFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.destroyFolder({
  cloudName: "my_cloud",
  folder: "product/test",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteFolderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>folder</code> | <code>string</code> | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.destroyFolder(request)`

- **OnSuccess**: <code>[DeleteFolderResponse](src/models/delete-folder-response.ts)</code>
- **OnError**: throws <code>[Folders.DestroyFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.destroyFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteFolderResponse, Folders.DestroyFolderError&gt;</code>, with `result.value` of type <code>[DeleteFolderResponse](src/models/delete-folder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFolderById(request: Folders.GetFolderByIdRequest, options?: RequestOptions): ApiPromise&lt;FolderDetailResponse, Folders.GetFolderByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the folder with the specified identifier, including its ancestors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.getFolderById({
    cloudName: "my_cloud",
    body: { id: "some example string" },
  });
  // TODO: Handle 'response' of type FolderDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.GetFolderByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.getFolderById({
  cloudName: "my_cloud",
  body: { id: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderDetailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[FolderByIdRequest](src/models/folder-by-id-request.ts)</code> | The identifier of the folder to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.getFolderById(request)`

- **OnSuccess**: <code>[FolderDetailResponse](src/models/folder-detail-response.ts)</code>
- **OnError**: throws <code>[Folders.GetFolderByIdError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.getFolderById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderDetailResponse, Folders.GetFolderByIdError&gt;</code>, with `result.value` of type <code>[FolderDetailResponse](src/models/folder-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFolderByPath(request: Folders.GetFolderByPathRequest, options?: RequestOptions): ApiPromise&lt;FolderDetailResponse, Folders.GetFolderByPathError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of the folder at the specified path, including its ancestors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.getFolderByPath({
    cloudName: "my_cloud",
    body: { path: "some example string" },
  });
  // TODO: Handle 'response' of type FolderDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.GetFolderByPathError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.getFolderByPath({
  cloudName: "my_cloud",
  body: { path: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderDetailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[FolderByPathRequest](src/models/folder-by-path-request.ts)</code> | The path of the folder to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.getFolderByPath(request)`

- **OnSuccess**: <code>[FolderDetailResponse](src/models/folder-detail-response.ts)</code>
- **OnError**: throws <code>[Folders.GetFolderByPathError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.getFolderByPath(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderDetailResponse, Folders.GetFolderByPathError&gt;</code>, with `result.value` of type <code>[FolderDetailResponse](src/models/folder-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFolderDescendants(request: Folders.GetFolderDescendantsRequest, options?: RequestOptions): ApiPromise&lt;FolderDescendantsResponse, Folders.GetFolderDescendantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the descendant folders of the folder with the specified identifier, optionally filtered to a set of folder identifiers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.getFolderDescendants({
    cloudName: "my_cloud",
    body: { id: "some example string" },
  });
  // TODO: Handle 'response' of type FolderDescendantsResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.GetFolderDescendantsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.getFolderDescendants({
  cloudName: "my_cloud",
  body: { id: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderDescendantsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[FolderDescendantsRequest](src/models/folder-descendants-request.ts)</code> | The parent folder identifier and optional filter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.getFolderDescendants(request)`

- **OnSuccess**: <code>[FolderDescendantsResponse](src/models/folder-descendants-response.ts)</code>
- **OnError**: throws <code>[Folders.GetFolderDescendantsError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.getFolderDescendants(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderDescendantsResponse, Folders.GetFolderDescendantsError&gt;</code>, with `result.value` of type <code>[FolderDescendantsResponse](src/models/folder-descendants-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFolderRoles(request: Folders.GetFolderRolesRequest, options?: RequestOptions): ApiPromise&lt;FolderRolesResponse, Folders.GetFolderRolesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the principals (users, groups, or API keys) and their role assignments on a specific folder, including roles inherited from ancestor folders. 


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.getFolderRoles({
    cloudName: "my_cloud",
    folderId: "cd7e9d690a014c68ae8b58f08e090cb03a",
  });
  // TODO: Handle 'response' of type FolderRolesResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.GetFolderRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.getFolderRoles({
  cloudName: "my_cloud",
  folderId: "cd7e9d690a014c68ae8b58f08e090cb03a",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderRolesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>folderId</code> | <code>string</code> | The immutable identifier of the folder, returned by the Get root folders and Get subfolders endpoints. |
| <code>permittedRoles?</code> | <code>boolean</code> | Whether to include in the response the roles the authenticated user can assign on this folder, based on their permission level. Default: `false`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.getFolderRoles(request)`

- **OnSuccess**: <code>[FolderRolesResponse](src/models/folder-roles-response.ts)</code>
- **OnError**: throws <code>[Folders.GetFolderRolesError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.getFolderRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderRolesResponse, Folders.GetFolderRolesError&gt;</code>, with `result.value` of type <code>[FolderRolesResponse](src/models/folder-roles-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRootFolders(request: Folders.ListRootFoldersRequest, options?: RequestOptions): ApiPromise&lt;FoldersListResponse, Folders.ListRootFoldersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an array of all root folders in your Cloudinary product environment. Limited to 2000 results.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.listRootFolders({ cloudName: "my_cloud" });
  // TODO: Handle 'response' of type FoldersListResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.ListRootFoldersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.listRootFolders({ cloudName: "my_cloud" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FoldersListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.listRootFolders(request)`

- **OnSuccess**: <code>[FoldersListResponse](src/models/folders-list-response.ts)</code>
- **OnError**: throws <code>[Folders.ListRootFoldersError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.listRootFolders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FoldersListResponse, Folders.ListRootFoldersError&gt;</code>, with `result.value` of type <code>[FoldersListResponse](src/models/folders-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>renameFolderOperation(request: Folders.RenameFolderOperationRequest, options?: RequestOptions): ApiPromise&lt;FolderRenameResponse, Folders.RenameFolderOperationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Renames or moves the folder at the specified path, along with all the assets it contains, to a new path.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.renameFolderOperation({
    cloudName: "my_cloud",
    body: { path: "some example string", toPath: "some example string" },
  });
  // TODO: Handle 'response' of type FolderRenameResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.RenameFolderOperationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.renameFolderOperation({
  cloudName: "my_cloud",
  body: { path: "some example string", toPath: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderRenameResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[FolderRenameRequest](src/models/folder-rename-request.ts)</code> | The source and destination folder paths. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.renameFolderOperation(request)`

- **OnSuccess**: <code>[FolderRenameResponse](src/models/folder-rename-response.ts)</code>
- **OnError**: throws <code>[Folders.RenameFolderOperationError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.renameFolderOperation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderRenameResponse, Folders.RenameFolderOperationError&gt;</code>, with `result.value` of type <code>[FolderRenameResponse](src/models/folder-rename-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchFolders(request: Folders.SearchFoldersRequest, options?: RequestOptions): ApiPromise&lt;FoldersSearchResponse, Folders.SearchFoldersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the folders that match the specified search expression. Limited to 2000 results. If no parameters are passed, returns the 50 most recently created folders in descending order of creation time.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.searchFolders({ cloudName: "my_cloud" });
  // TODO: Handle 'response' of type FoldersSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.SearchFoldersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.searchFolders({ cloudName: "my_cloud" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FoldersSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>expression?</code> | <code>string</code> | The (Lucene-like) string expression specifying the search query. If not passed, returns all folders (up to max_results). |
| <code>sortBy?</code> | <code>[DirectionEnum](src/models/direction-enum.ts)[]</code> | Sort order for the results. Each item maps a field name to a direction. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of folders to return (max 500, default 50).<br>**Default**: 50 |
| <code>nextCursor?</code> | <code>string</code> | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.searchFolders(request)`

- **OnSuccess**: <code>[FoldersSearchResponse](src/models/folders-search-response.ts)</code>
- **OnError**: throws <code>[Folders.SearchFoldersError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.searchFolders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FoldersSearchResponse, Folders.SearchFoldersError&gt;</code>, with `result.value` of type <code>[FoldersSearchResponse](src/models/folders-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchFoldersPost(request: Folders.SearchFoldersPostRequest, options?: RequestOptions): ApiPromise&lt;FoldersSearchResponse, Folders.SearchFoldersPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the folders that match the specified search expression. Limited to 2000 results. If no parameters are passed, returns the 50 most recently created folders in descending order of creation time.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.searchFoldersPost({ cloudName: "my_cloud", body: {} });
  // TODO: Handle 'response' of type FoldersSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.SearchFoldersPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.searchFoldersPost({ cloudName: "my_cloud", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FoldersSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[FolderSearchRequest](src/models/folder-search-request.ts)</code> | The folder search query parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.searchFoldersPost(request)`

- **OnSuccess**: <code>[FoldersSearchResponse](src/models/folders-search-response.ts)</code>
- **OnError**: throws <code>[Folders.SearchFoldersPostError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.searchFoldersPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FoldersSearchResponse, Folders.SearchFoldersPostError&gt;</code>, with `result.value` of type <code>[FoldersSearchResponse](src/models/folders-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>showFolder(request: Folders.ShowFolderRequest, options?: RequestOptions): ApiPromise&lt;FoldersListResponse, Folders.ShowFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of sub-folders under the specified folder path.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.showFolder({ cloudName: "my_cloud", folder: "product/test" });
  // TODO: Handle 'response' of type FoldersListResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.ShowFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.showFolder({
  cloudName: "my_cloud",
  folder: "product/test",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FoldersListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>folder</code> | <code>string</code> | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.showFolder(request)`

- **OnSuccess**: <code>[FoldersListResponse](src/models/folders-list-response.ts)</code>
- **OnError**: throws <code>[Folders.ShowFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.showFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FoldersListResponse, Folders.ShowFolderError&gt;</code>, with `result.value` of type <code>[FoldersListResponse](src/models/folders-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFolder(request: Folders.UpdateFolderRequest, options?: RequestOptions): ApiPromise&lt;MoveFolderResponse, Folders.UpdateFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Renames or moves an entire folder (along with all assets it contains) to a new location within your Cloudinary media library.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.updateFolder({
    cloudName: "my_cloud",
    folder: "product/test",
    body: { toFolder: "some example string" },
  });
  // TODO: Handle 'response' of type MoveFolderResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.UpdateFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.updateFolder({
  cloudName: "my_cloud",
  folder: "product/test",
  body: { toFolder: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MoveFolderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>folder</code> | <code>string</code> | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes. |
| <code>body</code> | <code>[MoveFolderRequest](src/models/move-folder-request.ts)</code> | The new folder path. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.updateFolder(request)`

- **OnSuccess**: <code>[MoveFolderResponse](src/models/move-folder-response.ts)</code>
- **OnError**: throws <code>[Folders.UpdateFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.updateFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MoveFolderResponse, Folders.UpdateFolderError&gt;</code>, with `result.value` of type <code>[MoveFolderResponse](src/models/move-folder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/resources/usage.ts)

<details>
<summary><code>getUsage(request: Usage.GetUsageRequest, options?: RequestOptions): ApiPromise&lt;UsageResponse, Usage.GetUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A report on the status of product environment usage, including storage, credits, bandwidth, requests, number of resources, and add-on usage. No date parameter needed to get current usage statistics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.getUsage({ cloudName: "my_cloud" });
  // TODO: Handle 'response' of type UsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Usage.GetUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.getUsage({ cloudName: "my_cloud" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>date?</code> | <code>string</code> (date) | The date for which to retrieve usage details (YYYY-MM-DD). If not specified, returns the current usage. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.getUsage(request)`

- **OnSuccess**: <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: throws <code>[Usage.GetUsageError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.getUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageResponse, Usage.GetUsageError&gt;</code>, with `result.value` of type <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>searchAssets(request: Search.SearchAssetsRequest, options?: RequestOptions): ApiPromise&lt;SearchResponse, Search.SearchAssetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of resources matching the specified search criteria.

Uses a Lucene-like query language to filter assets by descriptive attributes (`public_id`, `asset_id`, `filename`, `display_name`, `folder` / `asset_folder`, `tags`, `context.<key>`), file details (`resource_type`, `type`, `format`, `bytes`, `width`, `height`, `duration`, `pages`, `aspect_ratio`, `transparent`, `grayscale`), lifecycle dates (`uploaded_at`, `created_at`, `taken_at`, `updated_at`, `last_updated.<kind>`), moderation and lifecycle state (`status`, `moderation_status`, `moderation_kind`), embedded data (`image_metadata.*`), structured metadata (`metadata.<external_id>`), and analysis fields (`face_count`, `colors`, `quality_score`, `illustration_score`, `accessibility_analysis.*`). Supports sorting, aggregate counts, and complex boolean expressions.

Examples: `tags:shirt AND uploaded_at>1d`, `resource_type:image AND bytes>1000000`, `folder:products OR context.category:electronics`. See the [search expressions guide](https://cloudinary.com/documentation/search_expressions.md) for the full syntax and field reference.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchAssets({ cloudName: "my_cloud", body: {} });
  // TODO: Handle 'response' of type SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchAssetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchAssets({ cloudName: "my_cloud", body: {} }).asApiResult();
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[SearchParameters](src/models/search-parameters.ts)</code> | The search query parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchAssets(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: throws <code>[Search.SearchAssetsError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchAssets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse, Search.SearchAssetsError&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>visualSearchAssets(request: Search.VisualSearchAssetsRequest, options?: RequestOptions): ApiPromise&lt;SearchResponse, Search.VisualSearchAssetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of resources that are visually similar to a specified image. You can provide the source image for comparison in one of three ways:
- Provide a URL of an image
- Specify the asset ID of an existing image
- Provide a textual description


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.visualSearchAssets({
    cloudName: "my_cloud",
    body: { imageUrl: "https://example.com" },
  });
  // TODO: Handle 'response' of type SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.VisualSearchAssetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.visualSearchAssets({
  cloudName: "my_cloud",
  body: { imageUrl: "https://example.com" },
}).asApiResult();
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
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[VisualSearchParameters3](src/models/unions/visual-search-parameters3.ts)</code> | The visual search parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.visualSearchAssets(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: throws <code>[Search.VisualSearchAssetsError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.visualSearchAssets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse, Search.VisualSearchAssetsError&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## People

> Source: [People](src/resources/people.ts)

<details>
<summary><code>getPerson(request: People.GetPersonRequest, options?: RequestOptions): ApiPromise&lt;PersonResponse, People.GetPersonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details of a specific recognized person.
People Search must be enabled for this product environment.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.getPerson({
    cloudName: "my_cloud",
    personId: "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2",
  });
  // TODO: Handle 'response' of type PersonResponse
} catch (err) {
  // TODO: Handle 'err' of type People.GetPersonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.getPerson({
  cloudName: "my_cloud",
  personId: "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PersonResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>personId</code> | <code>string</code> | The unique identifier of the person. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.getPerson(request)`

- **OnSuccess**: <code>[PersonResponse](src/models/person-response.ts)</code>
- **OnError**: throws <code>[People.GetPersonError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.getPerson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PersonResponse, People.GetPersonError&gt;</code>, with `result.value` of type <code>[PersonResponse](src/models/person-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inspectPeoplePermissions(request: People.InspectPeoplePermissionsRequest, options?: RequestOptions): ApiPromise&lt;PeopleInspectResponse, People.InspectPeoplePermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns, for each requested person and action, whether the authenticated caller is permitted to perform that action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.inspectPeoplePermissions({
    cloudName: "my_cloud",
    body: { inspections: {} },
  });
  // TODO: Handle 'response' of type PeopleInspectResponse
} catch (err) {
  // TODO: Handle 'err' of type People.InspectPeoplePermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.inspectPeoplePermissions({
  cloudName: "my_cloud",
  body: { inspections: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PeopleInspectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>body</code> | <code>[PeopleInspectRequest](src/models/people-inspect-request.ts)</code> | The people and actions to inspect. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.inspectPeoplePermissions(request)`

- **OnSuccess**: <code>[PeopleInspectResponse](src/models/people-inspect-response.ts)</code>
- **OnError**: throws <code>[People.InspectPeoplePermissionsError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.inspectPeoplePermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PeopleInspectResponse, People.InspectPeoplePermissionsError&gt;</code>, with `result.value` of type <code>[PeopleInspectResponse](src/models/people-inspect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPeople(request: People.ListPeopleRequest, options?: RequestOptions): ApiPromise&lt;PeopleListResponse, People.ListPeopleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all recognized people in your product environment.
People Search must be enabled for this product environment.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.listPeople({
    cloudName: "my_cloud",
    maxResults: 20,
    nameStatus: NameStatus.Named,
    namePrefix: "Alice",
    status: PersonStatus.Active,
    sortBy: SortBy1.CreatedAt,
  });
  // TODO: Handle 'response' of type PeopleListResponse
} catch (err) {
  // TODO: Handle 'err' of type People.ListPeopleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.listPeople({
  cloudName: "my_cloud",
  maxResults: 20,
  nameStatus: NameStatus.Named,
  namePrefix: "Alice",
  status: PersonStatus.Active,
  sortBy: SortBy1.CreatedAt,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PeopleListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of people to return. Default: 50.<br>**Default**: 50 |
| <code>nextCursor?</code> | <code>string</code> | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |
| <code>nameStatus?</code> | <code>[NameStatus](src/models/name-status.ts)</code> | Filter by whether the person has been named. Default: all.<br>**Default**: "all" |
| <code>namePrefix?</code> | <code>string</code> | Filter people whose names start with the given prefix (case insensitive). |
| <code>status?</code> | <code>[PersonStatus](src/models/person-status.ts)</code> | Filter by person status. |
| <code>sortBy?</code> | <code>[SortBy1](src/models/sort-by1.ts)</code> | The field to sort results by. Default: name (ascending).<br>**Default**: "name" |
| <code>direction?</code> | <code>[DirectionEnum](src/models/direction-enum.ts)</code> | The sort direction for the results. Default is "desc". |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.listPeople(request)`

- **OnSuccess**: <code>[PeopleListResponse](src/models/people-list-response.ts)</code>
- **OnError**: throws <code>[People.ListPeopleError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.listPeople(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PeopleListResponse, People.ListPeopleError&gt;</code>, with `result.value` of type <code>[PeopleListResponse](src/models/people-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePerson(request: People.UpdatePersonRequestParams, options?: RequestOptions): ApiPromise&lt;UpdatePersonResponse, People.UpdatePersonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a recognized person's name, status, or thumbnail image.
At least one of name, status, or thumbnail_asset_id must be provided.
People Search must be enabled for this product environment.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.updatePerson({
    cloudName: "my_cloud",
    personId: "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2",
    body: {},
  });
  // TODO: Handle 'response' of type UpdatePersonResponse
} catch (err) {
  // TODO: Handle 'err' of type People.UpdatePersonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.updatePerson({
  cloudName: "my_cloud",
  personId: "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdatePersonResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your product environment. |
| <code>personId</code> | <code>string</code> | The unique identifier of the person. |
| <code>body</code> | <code>[UpdatePersonRequest](src/models/update-person-request.ts)</code> | The updated person attributes. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.updatePerson(request)`

- **OnSuccess**: <code>[UpdatePersonResponse](src/models/update-person-response.ts)</code>
- **OnError**: throws <code>[People.UpdatePersonError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.updatePerson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdatePersonResponse, People.UpdatePersonError&gt;</code>, with `result.value` of type <code>[UpdatePersonResponse](src/models/update-person-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Generation

> Source: [Generation](src/resources/generation.ts)

<details>
<summary><code>generateImage(request: Generation.GenerateImageRequestParams, options?: RequestOptions): ApiPromise&lt;GenerateImageResult, Generation.GenerateImageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an image from a text prompt using AI models.

The model is selected via the optional `model` object:
1. If `model.id` is provided, use that exact model.
2. Else if `model.family` (+ optional `model.tier`) is provided, resolve via the model registry; a missing tier defaults to `standard`.
3. Else if `model.mode` is `auto`, the service picks the model for the request (optionally steered by `model.preference`).
4. Otherwise, use the global default (nano-banana / premium, i.e. `nano-banana-2`).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.generateImage({
    cloudName: "your-cloud-name",
    body: { prompt: "A man with a hat" },
  });
  // TODO: Handle 'response' of type GenerateImageResult
} catch (err) {
  // TODO: Handle 'err' of type Generation.GenerateImageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation.generateImage({
  cloudName: "your-cloud-name",
  body: { prompt: "A man with a hat" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GenerateImageResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your Cloudinary product environment. |
| <code>body</code> | <code>[GenerateImageRequest](src/models/generate-image-request.ts)</code> | A JSON object containing the generation request parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.generateImage(request)`

- **OnSuccess**: <code>[GenerateImageResult](src/models/generate-image-result.ts)</code>
- **OnError**: throws <code>[Generation.GenerateImageError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.generateImage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GenerateImageResult, Generation.GenerateImageError&gt;</code>, with `result.value` of type <code>[GenerateImageResult](src/models/generate-image-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateImageFromImages(request: Generation.GenerateImageFromImagesRequest, options?: RequestOptions): ApiPromise&lt;GenerateImageResult, Generation.GenerateImageFromImagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an image guided by one or more **reference images** — restyle,
on-brand variants, character consistency, virtual try-on, edit/extend —
steered by `prompt`.

Only edit-capable models are selectable here. The model is selected via
the optional `model` object, exactly like `text_to_image`, but IDs are
restricted to edit models:
1. If `model.id` is provided, use that exact edit model.
2. Else if `model.family` (+ optional `model.tier`) is provided, resolve
   to that family's edit model (e.g. `nano-banana` / `premium` →
   `nano-banana-2-edit`).
3. Else if `model.mode` is `auto`, the service picks an edit model for
   the request (optionally steered by `model.preference`).
4. Otherwise, use the default edit model (`nano-banana-2-edit`).

Each reference image is either a stored managed asset (by `asset_id`,
read-permission checked) or an external HTTPS `url`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.generateImageFromImages({
    cloudName: "your-cloud-name",
    body: {
      prompt: "Place the product from [1] on a marble kitchen counter, soft morning light",
      referenceImages: [{ sourceType: "url", url: "https://example.com/product.png" }],
    },
  });
  // TODO: Handle 'response' of type GenerateImageResult
} catch (err) {
  // TODO: Handle 'err' of type Generation.GenerateImageFromImagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation.generateImageFromImages({
  cloudName: "your-cloud-name",
  body: {
    prompt: "Place the product from [1] on a marble kitchen counter, soft morning light",
    referenceImages: [{ sourceType: "url", url: "https://example.com/product.png" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GenerateImageResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your Cloudinary product environment. |
| <code>body</code> | <code>[ImageToImageRequest](src/models/image-to-image-request.ts)</code> | A JSON object containing the image-to-image generation request parameters. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.generateImageFromImages(request)`

- **OnSuccess**: <code>[GenerateImageResult](src/models/generate-image-result.ts)</code>
- **OnError**: throws <code>[Generation.GenerateImageFromImagesError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.generateImageFromImages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GenerateImageResult, Generation.GenerateImageFromImagesError&gt;</code>, with `result.value` of type <code>[GenerateImageResult](src/models/generate-image-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/resources/tasks.ts)

<details>
<summary><code>getGenerationTaskStatus(request: Tasks.GetGenerationTaskStatusRequest, options?: RequestOptions): ApiPromise&lt;TaskResponse, Tasks.GetGenerationTaskStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of a generation task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getGenerationTaskStatus({
    cloudName: "your-cloud-name",
    taskId:
      "053f4bde4b933c8ecef23724ecde63b667c1ea21816d56c161c7ec1df6297da4b43109625650e9edf0f42152cc4cc32c8ad57824ac75ba8e05020f827c415559ac1248076a2d72c0a73af0479cca77eb",
  });
  // TODO: Handle 'response' of type TaskResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetGenerationTaskStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks.getGenerationTaskStatus({
  cloudName: "your-cloud-name",
  taskId:
    "053f4bde4b933c8ecef23724ecde63b667c1ea21816d56c161c7ec1df6297da4b43109625650e9edf0f42152cc4cc32c8ad57824ac75ba8e05020f827c415559ac1248076a2d72c0a73af0479cca77eb",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaskResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cloudName</code> | <code>string</code> | The cloud name of your Cloudinary product environment. |
| <code>taskId</code> | <code>string</code> | The ID of the generation task. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getGenerationTaskStatus(request)`

- **OnSuccess**: <code>[TaskResponse](src/models/task-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetGenerationTaskStatusError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getGenerationTaskStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaskResponse, Tasks.GetGenerationTaskStatusError&gt;</code>, with `result.value` of type <code>[TaskResponse](src/models/task-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CloudinaryAssetManagementApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

