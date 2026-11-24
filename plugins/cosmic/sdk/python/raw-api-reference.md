# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [CosmicClient](cosmic/client.py)

## Blocks

> Source: [Blocks](cosmic/apis/blocks.py)

<details>
<summary><code>def list_blocks(slug: str, *, read_key: str | None = None, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BlocksResponse, ListBlocksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the content Blocks configured on the Bucket. Returns an empty array when the Bucket has none.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.blocks.with_raw_response.list_blocks("my-bucket")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BlocksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBlocksErrorBody
```

**Async**

```python
result = await async_client.blocks.with_raw_response.list_blocks("my-bucket")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BlocksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBlocksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>read_key</code> | <code>str \| None</code> | The Bucket read key. Required unless the Bucket has no read key configured.<br>**Default**: <code>None</code> |
| <code>pretty</code> | <code>bool \| None</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[BlocksResponse](cosmic/models/blocks_response.py), [ListBlocksErrorBody](cosmic/errors/list_blocks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BlocksResponse](cosmic/models/blocks_response.py)</code> -- The Bucket's content Blocks.

**On `Failure`**: `error` is <code>[ListBlocksErrorBody](cosmic/errors/list_blocks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MediaApi

> Source: [MediaApi](cosmic/apis/media_api.py)

<details>
<summary><code>def delete_media(slug: str, media_id: str, *, trigger_webhook: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteMediaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a media item from the Bucket. The file is removed from storage and the CDN caches are purged, so its URL stops working. Objects and Metafields that reference the media are not updated automatically: clear those references yourself. This is destructive and not reversible through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.delete_media("my-bucket", "602fd622853cca45f4c9fd96")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMediaErrorBody
```

**Async**

```python
result = await async_client.media_api.with_raw_response.delete_media("my-bucket", "602fd622853cca45f4c9fd96")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMediaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>media_id</code> | <code>str</code> | The media id. |
| <code>trigger_webhook</code> | <code>bool \| None</code> | Set to `true` to fire the corresponding webhook for this action.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[MessageResponse](cosmic/models/message_response.py), [DeleteMediaErrorBody](cosmic/errors/delete_media_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](cosmic/models/message_response.py)</code> -- The media item was deleted.

**On `Failure`**: `error` is <code>[DeleteMediaErrorBody](cosmic/errors/delete_media_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_media(slug: str, media_id: str, *, read_key: str | None = None, props: str | None = None, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaResponse, GetMediaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single media item by its id. To fetch by file name instead, query the media list endpoint with `query={"name":"..."}`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.get_media(
    "my-bucket", "602fd622853cca45f4c9fd96", props="id,slug,title,metadata.content,metadata.image.imgix_url"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMediaErrorBody
```

**Async**

```python
result = await async_client.media_api.with_raw_response.get_media(
    "my-bucket", "602fd622853cca45f4c9fd96", props="id,slug,title,metadata.content,metadata.image.imgix_url"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMediaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>media_id</code> | <code>str</code> | The media id. |
| <code>read_key</code> | <code>str \| None</code> | The Bucket read key. Required unless the Bucket has no read key configured.<br>**Default**: <code>None</code> |
| <code>props</code> | <code>str \| None</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency.<br>**Default**: <code>None</code> |
| <code>use_cache</code> | <code>bool \| None</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: <code>True</code> |
| <code>pretty</code> | <code>bool \| None</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[MediaResponse](cosmic/models/media_response.py), [GetMediaErrorBody](cosmic/errors/get_media_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaResponse](cosmic/models/media_response.py)</code> -- The requested media item.

**On `Failure`**: `error` is <code>[GetMediaErrorBody](cosmic/errors/get_media_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_media(slug: str, *, read_key: str | None = None, query: str | None = None, props: str | None = None, sort: SortOrStr | None = None, limit: int | None = 1000, skip: int | None = 0, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaListResponse, ListMediaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query media in the Bucket. This is also how you fetch a single media item by name: pass `query={"name":"7f9403a32f29-toucan.jpg"}`.

The `name` of a media item is the value you assign to a File or Image Metafield when creating or updating an Object. Upload is not part of this host: `POST /v3/buckets/{slug}/media` is served by `https://workers.cosmicjs.com`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.list_media(
    "my-bucket",
    query="{\"type\":\"blog-posts\",\"metadata.featured\":true}",
    props="id,slug,title,metadata.content,metadata.image.imgix_url",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMediaErrorBody
```

**Async**

```python
result = await async_client.media_api.with_raw_response.list_media(
    "my-bucket",
    query="{\"type\":\"blog-posts\",\"metadata.featured\":true}",
    props="id,slug,title,metadata.content,metadata.image.imgix_url",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMediaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>read_key</code> | <code>str \| None</code> | The Bucket read key. Required unless the Bucket has no read key configured.<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | A URL-encoded JSON object used to filter results. Follows MongoDB comparison (`$eq`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$all`, `$ne`, `$nin`), evaluation (`$regex` with `$options`), and logical (`$and`, `$or`, `$not`, `$nor`) operators. Query Object Relationship Metafields by the related Object's `id`, not its `slug`.<br>**Default**: <code>None</code> |
| <code>props</code> | <code>str \| None</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortOrStr](cosmic/models/enums/sort.py) \| None</code> | Sort order. Prefix with `-` for descending.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of results to return.<br>**Default**: <code>1000</code> |
| <code>skip</code> | <code>int \| None</code> | Offset pagination: number of results to skip. Use `after` instead for large collections. Only one of `skip` and `after` may be used.<br>**Default**: <code>0</code> |
| <code>use_cache</code> | <code>bool \| None</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: <code>True</code> |
| <code>pretty</code> | <code>bool \| None</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[MediaListResponse](cosmic/models/media_list_response.py), [ListMediaErrorBody](cosmic/errors/list_media_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaListResponse](cosmic/models/media_list_response.py)</code> -- The matching media.

**On `Failure`**: `error` is <code>[ListMediaErrorBody](cosmic/errors/list_media_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 413, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_media(slug: str, media_id: str, body: MediaUpdate | MediaUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaResponse, UpdateMediaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the folder, alt text, or user metadata on a media item. The underlying file is not replaced: to change the file, upload a new one via `https://workers.cosmicjs.com` and repoint the referencing Metafields.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.update_media(
    "my-bucket",
    "602fd622853cca45f4c9fd96",
    MediaUpdate(folder="national-parks", alt_text="Picture of Grand Teton National Park"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMediaErrorBody
```

**Async**

```python
result = await async_client.media_api.with_raw_response.update_media(
    "my-bucket",
    "602fd622853cca45f4c9fd96",
    MediaUpdate(folder="national-parks", alt_text="Picture of Grand Teton National Park"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMediaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>media_id</code> | <code>str</code> | The media id. |
| <code>body</code> | <code>[MediaUpdate](cosmic/models/media_update.py) \| [MediaUpdateDict](cosmic/models/media_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[MediaResponse](cosmic/models/media_response.py), [UpdateMediaErrorBody](cosmic/errors/update_media_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaResponse](cosmic/models/media_response.py)</code> -- The updated media item.

**On `Failure`**: `error` is <code>[UpdateMediaErrorBody](cosmic/errors/update_media_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ObjectRevisions

> Source: [ObjectRevisions](cosmic/apis/object_revisions.py)

<details>
<summary><code>def create_object_revision(slug: str, object_id: str, body: RevisionCreate | RevisionCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RevisionResponse, CreateObjectRevisionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new revision of an Object without publishing it. The revision is created with status `draft`; publish it by updating the Object itself with `status: published`. Use this to stage an edit for review rather than changing live content.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.object_revisions.with_raw_response.create_object_revision(
    "my-bucket",
    "5ff75368c2dfa81a91695cec",
    RevisionCreate(title="Updated Blog Post Title", status=Status.DRAFT, metadata={}),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RevisionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectRevisionErrorBody
```

**Async**

```python
result = await async_client.object_revisions.with_raw_response.create_object_revision(
    "my-bucket",
    "5ff75368c2dfa81a91695cec",
    RevisionCreate(title="Updated Blog Post Title", status=Status.DRAFT, metadata={}),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RevisionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectRevisionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>object_id</code> | <code>str</code> | The Object id. |
| <code>body</code> | <code>[RevisionCreate](cosmic/models/revision_create.py) \| [RevisionCreateDict](cosmic/models/revision_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[RevisionResponse](cosmic/models/revision_response.py), [CreateObjectRevisionErrorBody](cosmic/errors/create_object_revision_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RevisionResponse](cosmic/models/revision_response.py)</code> -- The created revision.

**On `Failure`**: `error` is <code>[CreateObjectRevisionErrorBody](cosmic/errors/create_object_revision_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_object_revision(slug: str, object_id: str, revision_id: str, *, read_key: str | None = None, preview_token: str | None = None, props: str | None = None, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RevisionResponse, GetObjectRevisionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve one revision of an Object by its id, including the `metadata` values as they were at that point in history.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.object_revisions.with_raw_response.get_object_revision(
    "my-bucket",
    "5ff75368c2dfa81a91695cec",
    "64fe8a1b24090e0008683e53",
    props="id,slug,title,metadata.content,metadata.image.imgix_url",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RevisionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectRevisionErrorBody
```

**Async**

```python
result = await async_client.object_revisions.with_raw_response.get_object_revision(
    "my-bucket",
    "5ff75368c2dfa81a91695cec",
    "64fe8a1b24090e0008683e53",
    props="id,slug,title,metadata.content,metadata.image.imgix_url",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RevisionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectRevisionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>object_id</code> | <code>str</code> | The Object id. |
| <code>revision_id</code> | <code>str</code> | The revision id. |
| <code>read_key</code> | <code>str \| None</code> | The Bucket read key. Required unless the Bucket has no read key configured.<br>**Default**: <code>None</code> |
| <code>preview_token</code> | <code>str \| None</code> | A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and valid, the request is treated as `status=any` so the latest draft is returned. Bound to one Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401.<br>**Default**: <code>None</code> |
| <code>props</code> | <code>str \| None</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency.<br>**Default**: <code>None</code> |
| <code>use_cache</code> | <code>bool \| None</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: <code>True</code> |
| <code>pretty</code> | <code>bool \| None</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[RevisionResponse](cosmic/models/revision_response.py), [GetObjectRevisionErrorBody](cosmic/errors/get_object_revision_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RevisionResponse](cosmic/models/revision_response.py)</code> -- The requested revision.

**On `Failure`**: `error` is <code>[GetObjectRevisionErrorBody](cosmic/errors/get_object_revision_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_object_revisions(slug: str, object_id: str, *, read_key: str | None = None, preview_token: str | None = None, props: str | None = None, sort: SortCosmicRestApiV3ObjectRevisionsApiOrStr | None = SortCosmicRestApiV3ObjectRevisionsApi.CREATED_AT2, limit: int | None = 1000, skip: int | None = 0, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RevisionListResponse, ListObjectRevisionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the version history of an Object, newest first by default. Revisions are immutable.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.object_revisions.with_raw_response.list_object_revisions(
    "my-bucket", "5ff75368c2dfa81a91695cec", props="id,slug,title,metadata.content,metadata.image.imgix_url"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RevisionListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectRevisionsErrorBody
```

**Async**

```python
result = await async_client.object_revisions.with_raw_response.list_object_revisions(
    "my-bucket", "5ff75368c2dfa81a91695cec", props="id,slug,title,metadata.content,metadata.image.imgix_url"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RevisionListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectRevisionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>object_id</code> | <code>str</code> | The Object id. |
| <code>read_key</code> | <code>str \| None</code> | The Bucket read key. Required unless the Bucket has no read key configured.<br>**Default**: <code>None</code> |
| <code>preview_token</code> | <code>str \| None</code> | A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and valid, the request is treated as `status=any` so the latest draft is returned. Bound to one Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401.<br>**Default**: <code>None</code> |
| <code>props</code> | <code>str \| None</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortCosmicRestApiV3ObjectRevisionsApiOrStr](cosmic/models/enums/sort_cosmic_rest_api_v3_object_revisions_api.py) \| None</code> | Sort order. Prefix with `-` for descending.<br>**Default**: <code>SortCosmicRestApiV3ObjectRevisionsApi.CREATED_AT2</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of results to return.<br>**Default**: <code>1000</code> |
| <code>skip</code> | <code>int \| None</code> | Offset pagination: number of results to skip. Use `after` instead for large collections. Only one of `skip` and `after` may be used.<br>**Default**: <code>0</code> |
| <code>use_cache</code> | <code>bool \| None</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: <code>True</code> |
| <code>pretty</code> | <code>bool \| None</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[RevisionListResponse](cosmic/models/revision_list_response.py), [ListObjectRevisionsErrorBody](cosmic/errors/list_object_revisions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RevisionListResponse](cosmic/models/revision_list_response.py)</code> -- The Object's revisions.

**On `Failure`**: `error` is <code>[ListObjectRevisionsErrorBody](cosmic/errors/list_object_revisions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ObjectTypes

> Source: [ObjectTypes](cosmic/apis/object_types.py)

<details>
<summary><code>def create_object_type(slug: str, body: ObjectTypeCreate | ObjectTypeCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectTypeResponse, CreateObjectTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Object type, defining the content model that its Objects will follow. Only `title` is required; the `slug` is derived from the title when omitted. Define `metafields` here so that Objects created in this type can carry the corresponding `metadata` values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.object_types.with_raw_response.create_object_type("my-bucket", ObjectTypeCreate(title="Motorcycles"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectTypeErrorBody
```

**Async**

```python
result = await async_client.object_types.with_raw_response.create_object_type(
    "my-bucket", ObjectTypeCreate(title="Motorcycles")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>body</code> | <code>[ObjectTypeCreate](cosmic/models/object_type_create.py) \| [ObjectTypeCreateDict](cosmic/models/object_type_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[ObjectTypeResponse](cosmic/models/object_type_response.py), [CreateObjectTypeErrorBody](cosmic/errors/create_object_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectTypeResponse](cosmic/models/object_type_response.py)</code> -- The created Object type.

**On `Failure`**: `error` is <code>[CreateObjectTypeErrorBody](cosmic/errors/create_object_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_object_type(slug: str, type_slug: str, *, trigger_webhook: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteObjectTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Object type and every Object in it. This is destructive and not reversible through the API: confirm with the user before calling it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.object_types.with_raw_response.delete_object_type("my-bucket", "blog-posts")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteObjectTypeErrorBody
```

**Async**

```python
result = await async_client.object_types.with_raw_response.delete_object_type("my-bucket", "blog-posts")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteObjectTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>type_slug</code> | <code>str</code> | The Object type slug, unique within the Bucket. |
| <code>trigger_webhook</code> | <code>bool \| None</code> | Set to `true` to fire the corresponding webhook for this action.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[MessageResponse](cosmic/models/message_response.py), [DeleteObjectTypeErrorBody](cosmic/errors/delete_object_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](cosmic/models/message_response.py)</code> -- The Object type was deleted.

**On `Failure`**: `error` is <code>[DeleteObjectTypeErrorBody](cosmic/errors/delete_object_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_object_type(slug: str, type_slug: str, *, read_key: str | None = None, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectTypeResponse, GetObjectTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Object type by its slug, including the full Metafield model. Use this when you already know the type and want its field definitions without listing every type in the Bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.object_types.with_raw_response.get_object_type("my-bucket", "blog-posts")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectTypeErrorBody
```

**Async**

```python
result = await async_client.object_types.with_raw_response.get_object_type("my-bucket", "blog-posts")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>type_slug</code> | <code>str</code> | The Object type slug, unique within the Bucket. |
| <code>read_key</code> | <code>str \| None</code> | The Bucket read key. Required unless the Bucket has no read key configured.<br>**Default**: <code>None</code> |
| <code>pretty</code> | <code>bool \| None</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[ObjectTypeResponse](cosmic/models/object_type_response.py), [GetObjectTypeErrorBody](cosmic/errors/get_object_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectTypeResponse](cosmic/models/object_type_response.py)</code> -- The requested Object type.

**On `Failure`**: `error` is <code>[GetObjectTypeErrorBody](cosmic/errors/get_object_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_object_types(slug: str, *, read_key: str | None = None, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectTypeListResponse, ListObjectTypesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve every Object type in the Bucket, each with its full Metafield model. Use this to discover the content model before creating or querying Objects: the `slug` of each type is what you pass as `type` in Object queries, and the `metafields` array tells you which `metadata` keys an Object of that type accepts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.object_types.with_raw_response.list_object_types("my-bucket")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectTypeListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectTypesErrorBody
```

**Async**

```python
result = await async_client.object_types.with_raw_response.list_object_types("my-bucket")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectTypeListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>read_key</code> | <code>str \| None</code> | The Bucket read key. Required unless the Bucket has no read key configured.<br>**Default**: <code>None</code> |
| <code>pretty</code> | <code>bool \| None</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[ObjectTypeListResponse](cosmic/models/object_type_list_response.py), [ListObjectTypesErrorBody](cosmic/errors/list_object_types_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectTypeListResponse](cosmic/models/object_type_list_response.py)</code> -- The Object types in the Bucket.

**On `Failure`**: `error` is <code>[ListObjectTypesErrorBody](cosmic/errors/list_object_types_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_object_type(slug: str, type_slug: str, body: ObjectTypeUpdate | ObjectTypeUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectTypeResponse, UpdateObjectTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Object type in place. Only the properties you send are changed. Sending `metafields` replaces the whole array, so read the type first and send the complete list rather than only the field you want to alter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.object_types.with_raw_response.update_object_type(
    "my-bucket", "blog-posts", ObjectTypeUpdate(title="Motorcycles", singular="Motorcycle", slug="motorcycles")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateObjectTypeErrorBody
```

**Async**

```python
result = await async_client.object_types.with_raw_response.update_object_type(
    "my-bucket", "blog-posts", ObjectTypeUpdate(title="Motorcycles", singular="Motorcycle", slug="motorcycles")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateObjectTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>type_slug</code> | <code>str</code> | The Object type slug, unique within the Bucket. |
| <code>body</code> | <code>[ObjectTypeUpdate](cosmic/models/object_type_update.py) \| [ObjectTypeUpdateDict](cosmic/models/object_type_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[ObjectTypeResponse](cosmic/models/object_type_response.py), [UpdateObjectTypeErrorBody](cosmic/errors/update_object_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectTypeResponse](cosmic/models/object_type_response.py)</code> -- The updated Object type.

**On `Failure`**: `error` is <code>[UpdateObjectTypeErrorBody](cosmic/errors/update_object_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Objects

> Source: [Objects](cosmic/apis/objects.py)

<details>
<summary><code>def batch_objects(slug: str, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchResponse, BatchObjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform up to 25 Object operations in a single request. Each operation succeeds or fails independently, so inspect the `status` of every entry in the response rather than relying on the HTTP status alone. Prefer this over repeated single-Object calls when changing many Objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objects.with_raw_response.batch_objects(
    "my-bucket",
    BatchRequest(
        operations=[
            BatchOperation(method=Method.ADD, object_={}),
            BatchOperation(method=Method.EDIT, object_id="5ff75368c2dfa81a91695cec", object_={}),
            BatchOperation(method=Method.DELETE, object_id="5ff75368c2dfa81a91695ced"),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchObjectsErrorBody
```

**Async**

```python
result = await async_client.objects.with_raw_response.batch_objects(
    "my-bucket",
    BatchRequest(
        operations=[
            BatchOperation(method=Method.ADD, object_={}),
            BatchOperation(method=Method.EDIT, object_id="5ff75368c2dfa81a91695cec", object_={}),
            BatchOperation(method=Method.DELETE, object_id="5ff75368c2dfa81a91695ced"),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchObjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>body</code> | <code>[BatchRequest](cosmic/models/batch_request.py) \| [BatchRequestDict](cosmic/models/batch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[BatchResponse](cosmic/models/batch_response.py), [BatchObjectsErrorBody](cosmic/errors/batch_objects_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchResponse](cosmic/models/batch_response.py)</code> -- The per-operation results, in request order.

**On `Failure`**: `error` is <code>[BatchObjectsErrorBody](cosmic/errors/batch_objects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_object(slug: str, body: ObjectCreate | ObjectCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectResponse, CreateObjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a single Object. `title` and `type` are required; the `slug` is derived from the title when omitted. Values in `metadata` must satisfy any validation configured on the Object type's Metafields. To create several Objects at once, use the batch endpoint instead of looping over this one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objects.with_raw_response.create_object(
    "my-bucket", ObjectCreate(title="Blog Post Example Title", type_="blog-posts", metadata={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectErrorBody
```

**Async**

```python
result = await async_client.objects.with_raw_response.create_object(
    "my-bucket", ObjectCreate(title="Blog Post Example Title", type_="blog-posts", metadata={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>body</code> | <code>[ObjectCreate](cosmic/models/object_create.py) \| [ObjectCreateDict](cosmic/models/object_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[ObjectResponse](cosmic/models/object_response.py), [CreateObjectErrorBody](cosmic/errors/create_object_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectResponse](cosmic/models/object_response.py)</code> -- The created Object.

**On `Failure`**: `error` is <code>[CreateObjectErrorBody](cosmic/errors/create_object_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_object(slug: str, object_id: str, *, trigger_webhook: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteObjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Object from the Bucket. This is destructive and not reversible through the API: confirm with the user before calling it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objects.with_raw_response.delete_object("my-bucket", "5ff75368c2dfa81a91695cec")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteObjectErrorBody
```

**Async**

```python
result = await async_client.objects.with_raw_response.delete_object("my-bucket", "5ff75368c2dfa81a91695cec")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteObjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>object_id</code> | <code>str</code> | The Object id. |
| <code>trigger_webhook</code> | <code>bool \| None</code> | Set to `true` to fire the corresponding webhook for this action.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[MessageResponse](cosmic/models/message_response.py), [DeleteObjectErrorBody](cosmic/errors/delete_object_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](cosmic/models/message_response.py)</code> -- The Object was deleted.

**On `Failure`**: `error` is <code>[DeleteObjectErrorBody](cosmic/errors/delete_object_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_object(slug: str, object_id: str, *, read_key: str | None = None, preview_token: str | None = None, props: str | None = None, status: Status4OrStr | None = Status4.PUBLISHED, depth: int | None = 0, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectResponse, GetObjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Object by its id. To fetch by slug instead, query the Objects list endpoint with `query={"type":"...","slug":"..."}`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objects.with_raw_response.get_object(
    "my-bucket", "5ff75368c2dfa81a91695cec", props="id,slug,title,metadata.content,metadata.image.imgix_url"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectErrorBody
```

**Async**

```python
result = await async_client.objects.with_raw_response.get_object(
    "my-bucket", "5ff75368c2dfa81a91695cec", props="id,slug,title,metadata.content,metadata.image.imgix_url"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>object_id</code> | <code>str</code> | The Object id. |
| <code>read_key</code> | <code>str \| None</code> | The Bucket read key. Required unless the Bucket has no read key configured.<br>**Default**: <code>None</code> |
| <code>preview_token</code> | <code>str \| None</code> | A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and valid, the request is treated as `status=any` so the latest draft is returned. Bound to one Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401.<br>**Default**: <code>None</code> |
| <code>props</code> | <code>str \| None</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status4OrStr](cosmic/models/enums/status4.py) \| None</code> | Which version of each Object to return. `any` returns the latest draft or published version.<br>**Default**: <code>Status4.PUBLISHED</code> |
| <code>depth</code> | <code>int \| None</code> | How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references are rejected.<br>**Default**: <code>0</code> |
| <code>use_cache</code> | <code>bool \| None</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: <code>True</code> |
| <code>pretty</code> | <code>bool \| None</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[ObjectResponse](cosmic/models/object_response.py), [GetObjectErrorBody](cosmic/errors/get_object_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectResponse](cosmic/models/object_response.py)</code> -- The requested Object.

**On `Failure`**: `error` is <code>[GetObjectErrorBody](cosmic/errors/get_object_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_objects(slug: str, *, read_key: str | None = None, preview_token: str | None = None, query: str | None = None, props: str | None = None, status: Status4OrStr | None = Status4.PUBLISHED, sort: str | None = "-order", limit: int | None = 1000, skip: int | None = 0, depth: int | None = 0, after: str | None = None, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectListResponse, ListObjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Objects in the Bucket. This is the main read endpoint and also the way to fetch a single Object by slug: pass `query={"type":"posts","slug":"my-post"}` and read the first element of `objects`.

The `query` parameter is a URL-encoded JSON object following MongoDB comparison and logical operator syntax. Use `props` to limit the response to the fields you need, which matters because the API rejects responses over roughly 6 MB with a 413. Use `depth` to resolve Object Relationship Metafields into nested Objects. For large collections, prefer cursor pagination with `after` over large `skip` offsets.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objects.with_raw_response.list_objects(
    "my-bucket",
    query="{\"type\":\"blog-posts\",\"metadata.featured\":true}",
    props="id,slug,title,metadata.content,metadata.image.imgix_url",
    sort="created_at",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectsErrorBody
```

**Async**

```python
result = await async_client.objects.with_raw_response.list_objects(
    "my-bucket",
    query="{\"type\":\"blog-posts\",\"metadata.featured\":true}",
    props="id,slug,title,metadata.content,metadata.image.imgix_url",
    sort="created_at",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>read_key</code> | <code>str \| None</code> | The Bucket read key. Required unless the Bucket has no read key configured.<br>**Default**: <code>None</code> |
| <code>preview_token</code> | <code>str \| None</code> | A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and valid, the request is treated as `status=any` so the latest draft is returned. Bound to one Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401.<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | A URL-encoded JSON object used to filter results. Follows MongoDB comparison (`$eq`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$all`, `$ne`, `$nin`), evaluation (`$regex` with `$options`), and logical (`$and`, `$or`, `$not`, `$nor`) operators. Query Object Relationship Metafields by the related Object's `id`, not its `slug`.<br>**Default**: <code>None</code> |
| <code>props</code> | <code>str \| None</code> | Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap and to reduce latency.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status4OrStr](cosmic/models/enums/status4.py) \| None</code> | Which version of each Object to return. `any` returns the latest draft or published version.<br>**Default**: <code>Status4.PUBLISHED</code> |
| <code>sort</code> | <code>str \| None</code> | Sort order. Prefix with `-` for descending. Sorting by `metadata.$key` requires that Metafield to be marked sortable under Object type > Settings, and is limited to two sortable Metafields per type.<br>**Default**: <code>"-order"</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of results to return.<br>**Default**: <code>1000</code> |
| <code>skip</code> | <code>int \| None</code> | Offset pagination: number of results to skip. Use `after` instead for large collections. Only one of `skip` and `after` may be used.<br>**Default**: <code>0</code> |
| <code>depth</code> | <code>int \| None</code> | How many levels of Object Relationship Metafields to resolve into nested Objects. Circular references are rejected.<br>**Default**: <code>0</code> |
| <code>after</code> | <code>str \| None</code> | Cursor pagination: the `id` of the last Object from the previous page. Follows the current `sort` order with `id` as a tiebreaker, works with any `sort` except `random`, and is more efficient than large `skip` offsets. Only one of `skip` and `after` may be used.<br>**Default**: <code>None</code> |
| <code>use_cache</code> | <code>bool \| None</code> | Set to `false` to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.<br>**Default**: <code>True</code> |
| <code>pretty</code> | <code>bool \| None</code> | Set to `true` to indent the JSON response for human reading. Increases response size.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[ObjectListResponse](cosmic/models/object_list_response.py), [ListObjectsErrorBody](cosmic/errors/list_objects_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectListResponse](cosmic/models/object_list_response.py)</code> -- The matching Objects.

**On `Failure`**: `error` is <code>[ListObjectsErrorBody](cosmic/errors/list_objects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 413, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_object(slug: str, object_id: str, body: ObjectUpdate | ObjectUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectResponse, UpdateObjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Object in place. Only the properties you send are changed, and within `metadata` only the keys you send are changed, so you can update a single Metafield without resending the rest. Set `status` to `published` to publish a draft.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objects.with_raw_response.update_object(
    "my-bucket", "5ff75368c2dfa81a91695cec", ObjectUpdate(title="New Title Edit")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateObjectErrorBody
```

**Async**

```python
result = await async_client.objects.with_raw_response.update_object(
    "my-bucket", "5ff75368c2dfa81a91695cec", ObjectUpdate(title="New Title Edit")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateObjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The Bucket slug. Found under Bucket > Settings in the dashboard. |
| <code>object_id</code> | <code>str</code> | The Object id. |
| <code>body</code> | <code>[ObjectUpdate](cosmic/models/object_update.py) \| [ObjectUpdateDict](cosmic/models/object_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[ObjectResponse](cosmic/models/object_response.py), [UpdateObjectErrorBody](cosmic/errors/update_object_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectResponse](cosmic/models/object_response.py)</code> -- The updated Object.

**On `Failure`**: `error` is <code>[UpdateObjectErrorBody](cosmic/errors/update_object_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 429, 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## StatusApi

> Source: [StatusApi](cosmic/apis/status_api.py)

<details>
<summary><code>def get_open_api_spec(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OpenapiJsonResponse, GetOpenApiSpecErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the machine-readable description of this API. Requires no authentication. Also served from `https://www.cosmicjs.com/openapi.json`, which proxies this endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.status_api.with_raw_response.get_open_api_spec()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OpenapiJsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOpenApiSpecErrorBody
```

**Async**

```python
result = await async_client.status_api.with_raw_response.get_open_api_spec()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OpenapiJsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOpenApiSpecErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[OpenapiJsonResponse](cosmic/models/openapi_json_response.py), [GetOpenApiSpecErrorBody](cosmic/errors/get_open_api_spec_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OpenapiJsonResponse](cosmic/models/openapi_json_response.py)</code> -- The OpenAPI 3.1 document describing this API.

**On `Failure`**: `error` is <code>[GetOpenApiSpecErrorBody](cosmic/errors/get_open_api_spec_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_status(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StatusResponse, GetStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirm the API is reachable and learn which AWS region served the request. Requires no authentication, so it is safe to use as a connectivity check before supplying keys.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.status_api.with_raw_response.get_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStatusErrorBody
```

**Async**

```python
result = await async_client.status_api.with_raw_response.get_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cosmic/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](cosmic/core/results.py)&#91;[StatusResponse](cosmic/models/status_response.py), [GetStatusErrorBody](cosmic/errors/get_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StatusResponse](cosmic/models/status_response.py)</code> -- The API is reachable.

**On `Failure`**: `error` is <code>[GetStatusErrorBody](cosmic/errors/get_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[Error](cosmic/models/error.py)</code> |
| anything unmapped | <code>[RawError](cosmic/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

