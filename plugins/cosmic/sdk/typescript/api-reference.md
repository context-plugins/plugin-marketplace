# Reference

> Source: [CosmicClient](src/client.ts)

## Blocks

> Source: [Blocks](src/resources/blocks.ts)

<details>
<summary><code>listBlocks(request: Blocks.ListBlocksRequest, options?: RequestOptions): ApiPromise&lt;BlocksResponse, Blocks.ListBlocksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the content Blocks configured on the Bucket. Returns an empty array when the Bucket has none.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.blocks.listBlocks({ slug: "my-bucket" });
  // TODO: Handle 'response' of type BlocksResponse
} catch (err) {
  // TODO: Handle 'err' of type Blocks.ListBlocksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.blocks.listBlocks({ slug: "my-bucket" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BlocksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>readKey?</code> | <code>string</code> | The Bucket read key. Required unless the Bucket has no read key configured. |
| <code>pretty?</code> | <code>boolean</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.blocks.listBlocks(request)`

- **OnSuccess**: <code>[BlocksResponse](src/models/blocks-response.ts)</code>
- **OnError**: throws <code>[Blocks.ListBlocksError](src/resources/blocks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.blocks.listBlocks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BlocksResponse, Blocks.ListBlocksError&gt;</code>, with `result.value` of type <code>[BlocksResponse](src/models/blocks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MediaApi

> Source: [MediaApi](src/resources/media-api.ts)

<details>
<summary><code>deleteMedia(request: MediaApi.DeleteMediaRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, MediaApi.DeleteMediaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a media item from the Bucket. The file is removed from storage and the CDN caches are purged, so its URL stops working. Objects and Metafields that reference the media are not updated automatically: clear those references yourself. This is destructive and not reversible through the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.deleteMedia({
    slug: "my-bucket",
    mediaId: "602fd622853cca45f4c9fd96",
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type MediaApi.DeleteMediaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi
  .deleteMedia({ slug: "my-bucket", mediaId: "602fd622853cca45f4c9fd96" })
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
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>mediaId</code> | <code>string</code> | The media id. |
| <code>triggerWebhook?</code> | <code>boolean</code> | Set to `true` to fire the corresponding webhook for this action.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.deleteMedia(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[MediaApi.DeleteMediaError](src/resources/media-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mediaApi.deleteMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, MediaApi.DeleteMediaError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMedia(request: MediaApi.GetMediaRequest, options?: RequestOptions): ApiPromise&lt;MediaResponse, MediaApi.GetMediaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single media item by its id. To fetch by file name instead, query the media list endpoint with `query={"name":"..."}`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.getMedia({
    slug: "my-bucket",
    mediaId: "602fd622853cca45f4c9fd96",
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  });
  // TODO: Handle 'response' of type MediaResponse
} catch (err) {
  // TODO: Handle 'err' of type MediaApi.GetMediaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi
  .getMedia({
    slug: "my-bucket",
    mediaId: "602fd622853cca45f4c9fd96",
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>mediaId</code> | <code>string</code> | The media id. |
| <code>readKey?</code> | <code>string</code> | The Bucket read key. Required unless the Bucket has no read key configured. |
| <code>props?</code> | <code>string</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency. |
| <code>useCache?</code> | <code>boolean</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: true |
| <code>pretty?</code> | <code>boolean</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.getMedia(request)`

- **OnSuccess**: <code>[MediaResponse](src/models/media-response.ts)</code>
- **OnError**: throws <code>[MediaApi.GetMediaError](src/resources/media-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mediaApi.getMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaResponse, MediaApi.GetMediaError&gt;</code>, with `result.value` of type <code>[MediaResponse](src/models/media-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMedia(request: MediaApi.ListMediaRequest, options?: RequestOptions): ApiPromise&lt;MediaListResponse, MediaApi.ListMediaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query media in the Bucket. This is also how you fetch a single media item by name: pass `query={"name":"7f9403a32f29-toucan.jpg"}`.

The `name` of a media item is the value you assign to a File or Image Metafield when creating or updating an Object. Upload is not part of this host: `POST /v3/buckets/{slug}/media` is served by `https://workers.cosmicjs.com`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.listMedia({
    slug: "my-bucket",
    query: '{"type":"blog-posts","metadata.featured":true}',
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  });
  // TODO: Handle 'response' of type MediaListResponse
} catch (err) {
  // TODO: Handle 'err' of type MediaApi.ListMediaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi
  .listMedia({
    slug: "my-bucket",
    query: '{"type":"blog-posts","metadata.featured":true}',
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>readKey?</code> | <code>string</code> | The Bucket read key. Required unless the Bucket has no read key configured. |
| <code>query?</code> | <code>string</code> | A URL-encoded JSON object used to filter results. Follows MongoDB comparison (`$eq`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$all`, `$ne`, `$nin`), evaluation (`$regex` with `$options`), and logical (`$and`, `$or`, `$not`, `$nor`) operators. Query Object Relationship Metafields by the related Object's `id`, not its `slug`. |
| <code>props?</code> | <code>string</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency. |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | Sort order. Prefix with `-` for descending. |
| <code>limit?</code> | <code>number</code> | Maximum number of results to return.<br>**Default**: 1000 |
| <code>skip?</code> | <code>number</code> | Offset pagination: number of results to skip. Use `after` instead for large collections. Only one of `skip` and `after` may be used.<br>**Default**: 0 |
| <code>useCache?</code> | <code>boolean</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: true |
| <code>pretty?</code> | <code>boolean</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.listMedia(request)`

- **OnSuccess**: <code>[MediaListResponse](src/models/media-list-response.ts)</code>
- **OnError**: throws <code>[MediaApi.ListMediaError](src/resources/media-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mediaApi.listMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaListResponse, MediaApi.ListMediaError&gt;</code>, with `result.value` of type <code>[MediaListResponse](src/models/media-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMedia(request: MediaApi.UpdateMediaRequest, options?: RequestOptions): ApiPromise&lt;MediaResponse, MediaApi.UpdateMediaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the folder, alt text, or user metadata on a media item. The underlying file is not replaced: to change the file, upload a new one via `https://workers.cosmicjs.com` and repoint the referencing Metafields.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.updateMedia({
    slug: "my-bucket",
    mediaId: "602fd622853cca45f4c9fd96",
    body: { folder: "national-parks", altText: "Picture of Grand Teton National Park" },
  });
  // TODO: Handle 'response' of type MediaResponse
} catch (err) {
  // TODO: Handle 'err' of type MediaApi.UpdateMediaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi
  .updateMedia({
    slug: "my-bucket",
    mediaId: "602fd622853cca45f4c9fd96",
    body: { folder: "national-parks", altText: "Picture of Grand Teton National Park" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>mediaId</code> | <code>string</code> | The media id. |
| <code>body</code> | <code>[MediaUpdate](src/models/media-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.updateMedia(request)`

- **OnSuccess**: <code>[MediaResponse](src/models/media-response.ts)</code>
- **OnError**: throws <code>[MediaApi.UpdateMediaError](src/resources/media-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mediaApi.updateMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaResponse, MediaApi.UpdateMediaError&gt;</code>, with `result.value` of type <code>[MediaResponse](src/models/media-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ObjectRevisions

> Source: [ObjectRevisions](src/resources/object-revisions.ts)

<details>
<summary><code>createObjectRevision(request: ObjectRevisions.CreateObjectRevisionRequest, options?: RequestOptions): ApiPromise&lt;RevisionResponse, ObjectRevisions.CreateObjectRevisionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new revision of an Object without publishing it. The revision is created with status `draft`; publish it by updating the Object itself with `status: published`. Use this to stage an edit for review rather than changing live content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectRevisions.createObjectRevision({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    body: { title: "Updated Blog Post Title", status: Status.Draft, metadata: {} },
  });
  // TODO: Handle 'response' of type RevisionResponse
} catch (err) {
  // TODO: Handle 'err' of type ObjectRevisions.CreateObjectRevisionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectRevisions
  .createObjectRevision({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    body: { title: "Updated Blog Post Title", status: Status.Draft, metadata: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevisionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>objectId</code> | <code>string</code> | The Object id. |
| <code>body</code> | <code>[RevisionCreate](src/models/revision-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectRevisions.createObjectRevision(request)`

- **OnSuccess**: <code>[RevisionResponse](src/models/revision-response.ts)</code>
- **OnError**: throws <code>[ObjectRevisions.CreateObjectRevisionError](src/resources/object-revisions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectRevisions.createObjectRevision(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevisionResponse, ObjectRevisions.CreateObjectRevisionError&gt;</code>, with `result.value` of type <code>[RevisionResponse](src/models/revision-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getObjectRevision(request: ObjectRevisions.GetObjectRevisionRequest, options?: RequestOptions): ApiPromise&lt;RevisionResponse, ObjectRevisions.GetObjectRevisionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve one revision of an Object by its id, including the `metadata` values as they were at that point in history.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectRevisions.getObjectRevision({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    revisionId: "64fe8a1b24090e0008683e53",
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  });
  // TODO: Handle 'response' of type RevisionResponse
} catch (err) {
  // TODO: Handle 'err' of type ObjectRevisions.GetObjectRevisionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectRevisions
  .getObjectRevision({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    revisionId: "64fe8a1b24090e0008683e53",
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevisionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>objectId</code> | <code>string</code> | The Object id. |
| <code>revisionId</code> | <code>string</code> | The revision id. |
| <code>readKey?</code> | <code>string</code> | The Bucket read key. Required unless the Bucket has no read key configured. |
| <code>previewToken?</code> | <code>string</code> | A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and valid, the request is treated as `status=any` so the latest draft is returned. Bound to one Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401. |
| <code>props?</code> | <code>string</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency. |
| <code>useCache?</code> | <code>boolean</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: true |
| <code>pretty?</code> | <code>boolean</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectRevisions.getObjectRevision(request)`

- **OnSuccess**: <code>[RevisionResponse](src/models/revision-response.ts)</code>
- **OnError**: throws <code>[ObjectRevisions.GetObjectRevisionError](src/resources/object-revisions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectRevisions.getObjectRevision(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevisionResponse, ObjectRevisions.GetObjectRevisionError&gt;</code>, with `result.value` of type <code>[RevisionResponse](src/models/revision-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listObjectRevisions(request: ObjectRevisions.ListObjectRevisionsRequest, options?: RequestOptions): ApiPromise&lt;RevisionListResponse, ObjectRevisions.ListObjectRevisionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the version history of an Object, newest first by default. Revisions are immutable.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectRevisions.listObjectRevisions({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  });
  // TODO: Handle 'response' of type RevisionListResponse
} catch (err) {
  // TODO: Handle 'err' of type ObjectRevisions.ListObjectRevisionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectRevisions
  .listObjectRevisions({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevisionListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>objectId</code> | <code>string</code> | The Object id. |
| <code>readKey?</code> | <code>string</code> | The Bucket read key. Required unless the Bucket has no read key configured. |
| <code>previewToken?</code> | <code>string</code> | A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and valid, the request is treated as `status=any` so the latest draft is returned. Bound to one Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401. |
| <code>props?</code> | <code>string</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency. |
| <code>sort?</code> | <code>[SortCosmicRestApiV3ObjectRevisionsApi](src/models/sort-cosmic-rest-api-v3-object-revisions-api.ts)</code> | Sort order. Prefix with `-` for descending.<br>**Default**: "-created_at" |
| <code>limit?</code> | <code>number</code> | Maximum number of results to return.<br>**Default**: 1000 |
| <code>skip?</code> | <code>number</code> | Offset pagination: number of results to skip. Use `after` instead for large collections. Only one of `skip` and `after` may be used.<br>**Default**: 0 |
| <code>useCache?</code> | <code>boolean</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: true |
| <code>pretty?</code> | <code>boolean</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectRevisions.listObjectRevisions(request)`

- **OnSuccess**: <code>[RevisionListResponse](src/models/revision-list-response.ts)</code>
- **OnError**: throws <code>[ObjectRevisions.ListObjectRevisionsError](src/resources/object-revisions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectRevisions.listObjectRevisions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevisionListResponse, ObjectRevisions.ListObjectRevisionsError&gt;</code>, with `result.value` of type <code>[RevisionListResponse](src/models/revision-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ObjectTypes

> Source: [ObjectTypes](src/resources/object-types.ts)

<details>
<summary><code>createObjectType(request: ObjectTypes.CreateObjectTypeRequest, options?: RequestOptions): ApiPromise&lt;ObjectTypeResponse, ObjectTypes.CreateObjectTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Object type, defining the content model that its Objects will follow. Only `title` is required; the `slug` is derived from the title when omitted. Define `metafields` here so that Objects created in this type can carry the corresponding `metadata` values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectTypes.createObjectType({
    slug: "my-bucket",
    body: { title: "Motorcycles" },
  });
  // TODO: Handle 'response' of type ObjectTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type ObjectTypes.CreateObjectTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectTypes
  .createObjectType({ slug: "my-bucket", body: { title: "Motorcycles" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectTypeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>body</code> | <code>[ObjectTypeCreate](src/models/object-type-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectTypes.createObjectType(request)`

- **OnSuccess**: <code>[ObjectTypeResponse](src/models/object-type-response.ts)</code>
- **OnError**: throws <code>[ObjectTypes.CreateObjectTypeError](src/resources/object-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectTypes.createObjectType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectTypeResponse, ObjectTypes.CreateObjectTypeError&gt;</code>, with `result.value` of type <code>[ObjectTypeResponse](src/models/object-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteObjectType(request: ObjectTypes.DeleteObjectTypeRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, ObjectTypes.DeleteObjectTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Object type and every Object in it. This is destructive and not reversible through the API: confirm with the user before calling it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectTypes.deleteObjectType({ slug: "my-bucket", typeSlug: "blog-posts" });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type ObjectTypes.DeleteObjectTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectTypes
  .deleteObjectType({ slug: "my-bucket", typeSlug: "blog-posts" })
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
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>typeSlug</code> | <code>string</code> | The Object type slug, unique within the Bucket. |
| <code>triggerWebhook?</code> | <code>boolean</code> | Set to `true` to fire the corresponding webhook for this action.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectTypes.deleteObjectType(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[ObjectTypes.DeleteObjectTypeError](src/resources/object-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectTypes.deleteObjectType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, ObjectTypes.DeleteObjectTypeError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getObjectType(request: ObjectTypes.GetObjectTypeRequest, options?: RequestOptions): ApiPromise&lt;ObjectTypeResponse, ObjectTypes.GetObjectTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Object type by its slug, including the full Metafield model. Use this when you already know the type and want its field definitions without listing every type in the Bucket.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectTypes.getObjectType({ slug: "my-bucket", typeSlug: "blog-posts" });
  // TODO: Handle 'response' of type ObjectTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type ObjectTypes.GetObjectTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectTypes
  .getObjectType({ slug: "my-bucket", typeSlug: "blog-posts" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectTypeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>typeSlug</code> | <code>string</code> | The Object type slug, unique within the Bucket. |
| <code>readKey?</code> | <code>string</code> | The Bucket read key. Required unless the Bucket has no read key configured. |
| <code>pretty?</code> | <code>boolean</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectTypes.getObjectType(request)`

- **OnSuccess**: <code>[ObjectTypeResponse](src/models/object-type-response.ts)</code>
- **OnError**: throws <code>[ObjectTypes.GetObjectTypeError](src/resources/object-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectTypes.getObjectType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectTypeResponse, ObjectTypes.GetObjectTypeError&gt;</code>, with `result.value` of type <code>[ObjectTypeResponse](src/models/object-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listObjectTypes(request: ObjectTypes.ListObjectTypesRequest, options?: RequestOptions): ApiPromise&lt;ObjectTypeListResponse, ObjectTypes.ListObjectTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve every Object type in the Bucket, each with its full Metafield model. Use this to discover the content model before creating or querying Objects: the `slug` of each type is what you pass as `type` in Object queries, and the `metafields` array tells you which `metadata` keys an Object of that type accepts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectTypes.listObjectTypes({ slug: "my-bucket" });
  // TODO: Handle 'response' of type ObjectTypeListResponse
} catch (err) {
  // TODO: Handle 'err' of type ObjectTypes.ListObjectTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectTypes.listObjectTypes({ slug: "my-bucket" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectTypeListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>readKey?</code> | <code>string</code> | The Bucket read key. Required unless the Bucket has no read key configured. |
| <code>pretty?</code> | <code>boolean</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectTypes.listObjectTypes(request)`

- **OnSuccess**: <code>[ObjectTypeListResponse](src/models/object-type-list-response.ts)</code>
- **OnError**: throws <code>[ObjectTypes.ListObjectTypesError](src/resources/object-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectTypes.listObjectTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectTypeListResponse, ObjectTypes.ListObjectTypesError&gt;</code>, with `result.value` of type <code>[ObjectTypeListResponse](src/models/object-type-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateObjectType(request: ObjectTypes.UpdateObjectTypeRequest, options?: RequestOptions): ApiPromise&lt;ObjectTypeResponse, ObjectTypes.UpdateObjectTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Object type in place. Only the properties you send are changed. Sending `metafields` replaces the whole array, so read the type first and send the complete list rather than only the field you want to alter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectTypes.updateObjectType({
    slug: "my-bucket",
    typeSlug: "blog-posts",
    body: { title: "Motorcycles", singular: "Motorcycle", slug: "motorcycles" },
  });
  // TODO: Handle 'response' of type ObjectTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type ObjectTypes.UpdateObjectTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectTypes
  .updateObjectType({
    slug: "my-bucket",
    typeSlug: "blog-posts",
    body: { title: "Motorcycles", singular: "Motorcycle", slug: "motorcycles" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectTypeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>typeSlug</code> | <code>string</code> | The Object type slug, unique within the Bucket. |
| <code>body</code> | <code>[ObjectTypeUpdate](src/models/object-type-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectTypes.updateObjectType(request)`

- **OnSuccess**: <code>[ObjectTypeResponse](src/models/object-type-response.ts)</code>
- **OnError**: throws <code>[ObjectTypes.UpdateObjectTypeError](src/resources/object-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectTypes.updateObjectType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectTypeResponse, ObjectTypes.UpdateObjectTypeError&gt;</code>, with `result.value` of type <code>[ObjectTypeResponse](src/models/object-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Objects

> Source: [Objects](src/resources/objects.ts)

<details>
<summary><code>batchObjects(request: Objects.BatchObjectsRequest, options?: RequestOptions): ApiPromise&lt;BatchResponse, Objects.BatchObjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform up to 25 Object operations in a single request. Each operation succeeds or fails independently, so inspect the `status` of every entry in the response rather than relying on the HTTP status alone. Prefer this over repeated single-Object calls when changing many Objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objects.batchObjects({
    slug: "my-bucket",
    body: {
      operations: [
        { method: Method.Add, object: {} },
        { method: Method.Edit, objectId: "5ff75368c2dfa81a91695cec", object: {} },
        { method: Method.Delete, objectId: "5ff75368c2dfa81a91695ced" },
      ],
    },
  });
  // TODO: Handle 'response' of type BatchResponse
} catch (err) {
  // TODO: Handle 'err' of type Objects.BatchObjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objects
  .batchObjects({
    slug: "my-bucket",
    body: {
      operations: [
        { method: Method.Add, object: {} },
        { method: Method.Edit, objectId: "5ff75368c2dfa81a91695cec", object: {} },
        { method: Method.Delete, objectId: "5ff75368c2dfa81a91695ced" },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>body</code> | <code>[BatchRequest](src/models/batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objects.batchObjects(request)`

- **OnSuccess**: <code>[BatchResponse](src/models/batch-response.ts)</code>
- **OnError**: throws <code>[Objects.BatchObjectsError](src/resources/objects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objects.batchObjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchResponse, Objects.BatchObjectsError&gt;</code>, with `result.value` of type <code>[BatchResponse](src/models/batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createObject(request: Objects.CreateObjectRequest, options?: RequestOptions): ApiPromise&lt;ObjectResponse, Objects.CreateObjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a single Object. `title` and `type` are required; the `slug` is derived from the title when omitted. Values in `metadata` must satisfy any validation configured on the Object type's Metafields. To create several Objects at once, use the batch endpoint instead of looping over this one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objects.createObject({
    slug: "my-bucket",
    body: { title: "Blog Post Example Title", type: "blog-posts", metadata: {} },
  });
  // TODO: Handle 'response' of type ObjectResponse
} catch (err) {
  // TODO: Handle 'err' of type Objects.CreateObjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objects
  .createObject({
    slug: "my-bucket",
    body: { title: "Blog Post Example Title", type: "blog-posts", metadata: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>body</code> | <code>[ObjectCreate](src/models/object-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objects.createObject(request)`

- **OnSuccess**: <code>[ObjectResponse](src/models/object-response.ts)</code>
- **OnError**: throws <code>[Objects.CreateObjectError](src/resources/objects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objects.createObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectResponse, Objects.CreateObjectError&gt;</code>, with `result.value` of type <code>[ObjectResponse](src/models/object-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteObject(request: Objects.DeleteObjectRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, Objects.DeleteObjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Object from the Bucket. This is destructive and not reversible through the API: confirm with the user before calling it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objects.deleteObject({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Objects.DeleteObjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objects
  .deleteObject({ slug: "my-bucket", objectId: "5ff75368c2dfa81a91695cec" })
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
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>objectId</code> | <code>string</code> | The Object id. |
| <code>triggerWebhook?</code> | <code>boolean</code> | Set to `true` to fire the corresponding webhook for this action.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objects.deleteObject(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[Objects.DeleteObjectError](src/resources/objects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objects.deleteObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, Objects.DeleteObjectError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getObject(request: Objects.GetObjectRequest, options?: RequestOptions): ApiPromise&lt;ObjectResponse, Objects.GetObjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Object by its id. To fetch by slug instead, query the Objects list endpoint with `query={"type":"...","slug":"..."}`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objects.getObject({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  });
  // TODO: Handle 'response' of type ObjectResponse
} catch (err) {
  // TODO: Handle 'err' of type Objects.GetObjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objects
  .getObject({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>objectId</code> | <code>string</code> | The Object id. |
| <code>readKey?</code> | <code>string</code> | The Bucket read key. Required unless the Bucket has no read key configured. |
| <code>previewToken?</code> | <code>string</code> | A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and valid, the request is treated as `status=any` so the latest draft is returned. Bound to one Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401. |
| <code>props?</code> | <code>string</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency. |
| <code>status?</code> | <code>[Status4](src/models/status4.ts)</code> | Which version of each Object to return. `any` returns the latest draft or published version.<br>**Default**: "published" |
| <code>depth?</code> | <code>number</code> | How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references are rejected.<br>**Default**: 0 |
| <code>useCache?</code> | <code>boolean</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: true |
| <code>pretty?</code> | <code>boolean</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objects.getObject(request)`

- **OnSuccess**: <code>[ObjectResponse](src/models/object-response.ts)</code>
- **OnError**: throws <code>[Objects.GetObjectError](src/resources/objects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objects.getObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectResponse, Objects.GetObjectError&gt;</code>, with `result.value` of type <code>[ObjectResponse](src/models/object-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listObjects(request: Objects.ListObjectsRequest, options?: RequestOptions): ApiPromise&lt;ObjectListResponse, Objects.ListObjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Objects in the Bucket. This is the main read endpoint and also the way to fetch a single Object by slug: pass `query={"type":"posts","slug":"my-post"}` and read the first element of `objects`.

The `query` parameter is a URL-encoded JSON object following MongoDB comparison and logical operator syntax. Use `props` to limit the response to the fields you need, which matters because the API rejects responses over roughly 6 MB with a 413. Use `depth` to resolve Object Relationship Metafields into nested Objects. For large collections, prefer cursor pagination with `after` over large `skip` offsets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objects.listObjects({
    slug: "my-bucket",
    query: '{"type":"blog-posts","metadata.featured":true}',
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
    sort: "created_at",
  });
  // TODO: Handle 'response' of type ObjectListResponse
} catch (err) {
  // TODO: Handle 'err' of type Objects.ListObjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objects
  .listObjects({
    slug: "my-bucket",
    query: '{"type":"blog-posts","metadata.featured":true}',
    props: "id,slug,title,metadata.content,metadata.image.imgix_url",
    sort: "created_at",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>readKey?</code> | <code>string</code> | The Bucket read key. Required unless the Bucket has no read key configured. |
| <code>previewToken?</code> | <code>string</code> | A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and valid, the request is treated as `status=any` so the latest draft is returned. Bound to one Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401. |
| <code>query?</code> | <code>string</code> | A URL-encoded JSON object used to filter results. Follows MongoDB comparison (`$eq`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$all`, `$ne`, `$nin`), evaluation (`$regex` with `$options`), and logical (`$and`, `$or`, `$not`, `$nor`) operators. Query Object Relationship Metafields by the related Object's `id`, not its `slug`. |
| <code>props?</code> | <code>string</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency. |
| <code>status?</code> | <code>[Status4](src/models/status4.ts)</code> | Which version of each Object to return. `any` returns the latest draft or published version.<br>**Default**: "published" |
| <code>sort?</code> | <code>string</code> | Sort order. Prefix with `-` for descending. Sorting by `metadata.$key` requires that Metafield to be marked sortable under Object type > Settings, and is limited to two sortable Metafields per type.<br>**Default**: "-order" |
| <code>limit?</code> | <code>number</code> | Maximum number of results to return.<br>**Default**: 1000 |
| <code>skip?</code> | <code>number</code> | Offset pagination: number of results to skip. Use `after` instead for large collections. Only one of `skip` and `after` may be used.<br>**Default**: 0 |
| <code>depth?</code> | <code>number</code> | How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references are rejected.<br>**Default**: 0 |
| <code>after?</code> | <code>string</code> | Cursor pagination: the `id` of the last Object from the previous page. Follows the current `sort` order with `id` as a tiebreaker, works with any `sort` except `random`, and is more efficient than large `skip` offsets. Only one of `skip` and `after` may be used. |
| <code>useCache?</code> | <code>boolean</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: true |
| <code>pretty?</code> | <code>boolean</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objects.listObjects(request)`

- **OnSuccess**: <code>[ObjectListResponse](src/models/object-list-response.ts)</code>
- **OnError**: throws <code>[Objects.ListObjectsError](src/resources/objects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objects.listObjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectListResponse, Objects.ListObjectsError&gt;</code>, with `result.value` of type <code>[ObjectListResponse](src/models/object-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateObject(request: Objects.UpdateObjectRequest, options?: RequestOptions): ApiPromise&lt;ObjectResponse, Objects.UpdateObjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Object in place. Only the properties you send are changed, and within `metadata` only the keys you send are changed, so you can update a single Metafield without resending the rest. Set `status` to `published` to publish a draft.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objects.updateObject({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    body: { title: "New Title Edit" },
  });
  // TODO: Handle 'response' of type ObjectResponse
} catch (err) {
  // TODO: Handle 'err' of type Objects.UpdateObjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objects
  .updateObject({
    slug: "my-bucket",
    objectId: "5ff75368c2dfa81a91695cec",
    body: { title: "New Title Edit" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>objectId</code> | <code>string</code> | The Object id. |
| <code>body</code> | <code>[ObjectUpdate](src/models/object-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objects.updateObject(request)`

- **OnSuccess**: <code>[ObjectResponse](src/models/object-response.ts)</code>
- **OnError**: throws <code>[Objects.UpdateObjectError](src/resources/objects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objects.updateObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectResponse, Objects.UpdateObjectError&gt;</code>, with `result.value` of type <code>[ObjectResponse](src/models/object-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StatusApi

> Source: [StatusApi](src/resources/status-api.ts)

<details>
<summary><code>getOpenApiSpec(options?: RequestOptions): ApiPromise&lt;OpenapiJsonResponse, StatusApi.GetOpenApiSpecError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the machine-readable description of this API. Requires no authentication. Also served from `https://www.cosmicjs.com/openapi.json`, which proxies this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statusApi.getOpenApiSpec();
  // TODO: Handle 'response' of type OpenapiJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type StatusApi.GetOpenApiSpecError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statusApi.getOpenApiSpec().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OpenapiJsonResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statusApi.getOpenApiSpec()`

- **OnSuccess**: <code>[OpenapiJsonResponse](src/models/openapi-json-response.ts)</code>
- **OnError**: throws <code>[StatusApi.GetOpenApiSpecError](src/resources/status-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statusApi.getOpenApiSpec().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OpenapiJsonResponse, StatusApi.GetOpenApiSpecError&gt;</code>, with `result.value` of type <code>[OpenapiJsonResponse](src/models/openapi-json-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStatus(options?: RequestOptions): ApiPromise&lt;StatusResponse, StatusApi.GetStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirm the API is reachable and learn which AWS region served the request. Requires no authentication, so it is safe to use as a connectivity check before supplying keys.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statusApi.getStatus();
  // TODO: Handle 'response' of type StatusResponse
} catch (err) {
  // TODO: Handle 'err' of type StatusApi.GetStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statusApi.getStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statusApi.getStatus()`

- **OnSuccess**: <code>[StatusResponse](src/models/status-response.ts)</code>
- **OnError**: throws <code>[StatusApi.GetStatusError](src/resources/status-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statusApi.getStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusResponse, StatusApi.GetStatusError&gt;</code>, with `result.value` of type <code>[StatusResponse](src/models/status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CosmicError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

