# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CosmicClient](cosmic/client.py)

## Blocks

> Source: [Blocks](cosmic/apis/blocks.py)

<details>
<summary><code>def list_blocks(slug: str, *, read_key: str | None = None, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> BlocksResponse</code></summary>

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
try:
    response = client.blocks.list_blocks("my-bucket")
    # TODO: Handle 'response' of type BlocksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBlocksErrorBody
```

**Async**

```python
try:
    response = await async_client.blocks.list_blocks("my-bucket")
    # TODO: Handle 'response' of type BlocksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBlocksErrorBody
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

**OnSuccess**: <code>[BlocksResponse](cosmic/models/blocks_response.py)</code> -- The Bucket's content Blocks.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[ListBlocksErrorBody](cosmic/errors/list_blocks_error.py)&#93;</code>

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
<summary><code>def delete_media(slug: str, media_id: str, *, trigger_webhook: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

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
try:
    response = client.media_api.delete_media("my-bucket", "602fd622853cca45f4c9fd96")
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteMediaErrorBody
```

**Async**

```python
try:
    response = await async_client.media_api.delete_media("my-bucket", "602fd622853cca45f4c9fd96")
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteMediaErrorBody
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

**OnSuccess**: <code>[MessageResponse](cosmic/models/message_response.py)</code> -- The media item was deleted.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[DeleteMediaErrorBody](cosmic/errors/delete_media_error.py)&#93;</code>

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
<summary><code>def get_media(slug: str, media_id: str, *, read_key: str | None = None, props: str | None = None, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> MediaResponse</code></summary>

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
try:
    response = client.media_api.get_media(
        "my-bucket", "602fd622853cca45f4c9fd96", props="id,slug,title,metadata.content,metadata.image.imgix_url"
    )
    # TODO: Handle 'response' of type MediaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMediaErrorBody
```

**Async**

```python
try:
    response = await async_client.media_api.get_media(
        "my-bucket", "602fd622853cca45f4c9fd96", props="id,slug,title,metadata.content,metadata.image.imgix_url"
    )
    # TODO: Handle 'response' of type MediaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMediaErrorBody
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

**OnSuccess**: <code>[MediaResponse](cosmic/models/media_response.py)</code> -- The requested media item.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[GetMediaErrorBody](cosmic/errors/get_media_error.py)&#93;</code>

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
<summary><code>def list_media(slug: str, *, read_key: str | None = None, query: str | None = None, props: str | None = None, sort: SortOrStr | None = None, limit: int | None = 1000, skip: int | None = 0, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> MediaListResponse</code></summary>

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
try:
    response = client.media_api.list_media(
        "my-bucket",
        query="{\"type\":\"blog-posts\",\"metadata.featured\":true}",
        props="id,slug,title,metadata.content,metadata.image.imgix_url",
    )
    # TODO: Handle 'response' of type MediaListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMediaErrorBody
```

**Async**

```python
try:
    response = await async_client.media_api.list_media(
        "my-bucket",
        query="{\"type\":\"blog-posts\",\"metadata.featured\":true}",
        props="id,slug,title,metadata.content,metadata.image.imgix_url",
    )
    # TODO: Handle 'response' of type MediaListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMediaErrorBody
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

**OnSuccess**: <code>[MediaListResponse](cosmic/models/media_list_response.py)</code> -- The matching media.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[ListMediaErrorBody](cosmic/errors/list_media_error.py)&#93;</code>

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
<summary><code>def update_media(slug: str, media_id: str, body: MediaUpdate | MediaUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> MediaResponse</code></summary>

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
try:
    response = client.media_api.update_media(
        "my-bucket",
        "602fd622853cca45f4c9fd96",
        MediaUpdate(folder="national-parks", alt_text="Picture of Grand Teton National Park"),
    )
    # TODO: Handle 'response' of type MediaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMediaErrorBody
```

**Async**

```python
try:
    response = await async_client.media_api.update_media(
        "my-bucket",
        "602fd622853cca45f4c9fd96",
        MediaUpdate(folder="national-parks", alt_text="Picture of Grand Teton National Park"),
    )
    # TODO: Handle 'response' of type MediaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMediaErrorBody
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

**OnSuccess**: <code>[MediaResponse](cosmic/models/media_response.py)</code> -- The updated media item.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[UpdateMediaErrorBody](cosmic/errors/update_media_error.py)&#93;</code>

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
<summary><code>def create_object_revision(slug: str, object_id: str, body: RevisionCreate | RevisionCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> RevisionResponse</code></summary>

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
try:
    response = client.object_revisions.create_object_revision(
        "my-bucket",
        "5ff75368c2dfa81a91695cec",
        RevisionCreate(title="Updated Blog Post Title", status=Status.DRAFT, metadata={}),
    )
    # TODO: Handle 'response' of type RevisionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateObjectRevisionErrorBody
```

**Async**

```python
try:
    response = await async_client.object_revisions.create_object_revision(
        "my-bucket",
        "5ff75368c2dfa81a91695cec",
        RevisionCreate(title="Updated Blog Post Title", status=Status.DRAFT, metadata={}),
    )
    # TODO: Handle 'response' of type RevisionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateObjectRevisionErrorBody
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

**OnSuccess**: <code>[RevisionResponse](cosmic/models/revision_response.py)</code> -- The created revision.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[CreateObjectRevisionErrorBody](cosmic/errors/create_object_revision_error.py)&#93;</code>

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
<summary><code>def get_object_revision(slug: str, object_id: str, revision_id: str, *, read_key: str | None = None, preview_token: str | None = None, props: str | None = None, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> RevisionResponse</code></summary>

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
try:
    response = client.object_revisions.get_object_revision(
        "my-bucket",
        "5ff75368c2dfa81a91695cec",
        "64fe8a1b24090e0008683e53",
        props="id,slug,title,metadata.content,metadata.image.imgix_url",
    )
    # TODO: Handle 'response' of type RevisionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetObjectRevisionErrorBody
```

**Async**

```python
try:
    response = await async_client.object_revisions.get_object_revision(
        "my-bucket",
        "5ff75368c2dfa81a91695cec",
        "64fe8a1b24090e0008683e53",
        props="id,slug,title,metadata.content,metadata.image.imgix_url",
    )
    # TODO: Handle 'response' of type RevisionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetObjectRevisionErrorBody
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

**OnSuccess**: <code>[RevisionResponse](cosmic/models/revision_response.py)</code> -- The requested revision.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[GetObjectRevisionErrorBody](cosmic/errors/get_object_revision_error.py)&#93;</code>

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
<summary><code>def list_object_revisions(slug: str, object_id: str, *, read_key: str | None = None, preview_token: str | None = None, props: str | None = None, sort: SortCosmicRestApiV3ObjectRevisionsApiOrStr | None = SortCosmicRestApiV3ObjectRevisionsApi.CREATED_AT2, limit: int | None = 1000, skip: int | None = 0, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> RevisionListResponse</code></summary>

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
try:
    response = client.object_revisions.list_object_revisions(
        "my-bucket", "5ff75368c2dfa81a91695cec", props="id,slug,title,metadata.content,metadata.image.imgix_url"
    )
    # TODO: Handle 'response' of type RevisionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListObjectRevisionsErrorBody
```

**Async**

```python
try:
    response = await async_client.object_revisions.list_object_revisions(
        "my-bucket", "5ff75368c2dfa81a91695cec", props="id,slug,title,metadata.content,metadata.image.imgix_url"
    )
    # TODO: Handle 'response' of type RevisionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListObjectRevisionsErrorBody
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

**OnSuccess**: <code>[RevisionListResponse](cosmic/models/revision_list_response.py)</code> -- The Object's revisions.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[ListObjectRevisionsErrorBody](cosmic/errors/list_object_revisions_error.py)&#93;</code>

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
<summary><code>def create_object_type(slug: str, body: ObjectTypeCreate | ObjectTypeCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ObjectTypeResponse</code></summary>

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
try:
    response = client.object_types.create_object_type("my-bucket", ObjectTypeCreate(title="Motorcycles"))
    # TODO: Handle 'response' of type ObjectTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateObjectTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.object_types.create_object_type("my-bucket", ObjectTypeCreate(title="Motorcycles"))
    # TODO: Handle 'response' of type ObjectTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateObjectTypeErrorBody
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

**OnSuccess**: <code>[ObjectTypeResponse](cosmic/models/object_type_response.py)</code> -- The created Object type.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[CreateObjectTypeErrorBody](cosmic/errors/create_object_type_error.py)&#93;</code>

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
<summary><code>def delete_object_type(slug: str, type_slug: str, *, trigger_webhook: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

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
try:
    response = client.object_types.delete_object_type("my-bucket", "blog-posts")
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteObjectTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.object_types.delete_object_type("my-bucket", "blog-posts")
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteObjectTypeErrorBody
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

**OnSuccess**: <code>[MessageResponse](cosmic/models/message_response.py)</code> -- The Object type was deleted.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[DeleteObjectTypeErrorBody](cosmic/errors/delete_object_type_error.py)&#93;</code>

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
<summary><code>def get_object_type(slug: str, type_slug: str, *, read_key: str | None = None, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ObjectTypeResponse</code></summary>

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
try:
    response = client.object_types.get_object_type("my-bucket", "blog-posts")
    # TODO: Handle 'response' of type ObjectTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetObjectTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.object_types.get_object_type("my-bucket", "blog-posts")
    # TODO: Handle 'response' of type ObjectTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetObjectTypeErrorBody
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

**OnSuccess**: <code>[ObjectTypeResponse](cosmic/models/object_type_response.py)</code> -- The requested Object type.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[GetObjectTypeErrorBody](cosmic/errors/get_object_type_error.py)&#93;</code>

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
<summary><code>def list_object_types(slug: str, *, read_key: str | None = None, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ObjectTypeListResponse</code></summary>

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
try:
    response = client.object_types.list_object_types("my-bucket")
    # TODO: Handle 'response' of type ObjectTypeListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListObjectTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.object_types.list_object_types("my-bucket")
    # TODO: Handle 'response' of type ObjectTypeListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListObjectTypesErrorBody
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

**OnSuccess**: <code>[ObjectTypeListResponse](cosmic/models/object_type_list_response.py)</code> -- The Object types in the Bucket.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[ListObjectTypesErrorBody](cosmic/errors/list_object_types_error.py)&#93;</code>

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
<summary><code>def update_object_type(slug: str, type_slug: str, body: ObjectTypeUpdate | ObjectTypeUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ObjectTypeResponse</code></summary>

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
try:
    response = client.object_types.update_object_type(
        "my-bucket", "blog-posts", ObjectTypeUpdate(title="Motorcycles", singular="Motorcycle", slug="motorcycles")
    )
    # TODO: Handle 'response' of type ObjectTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateObjectTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.object_types.update_object_type(
        "my-bucket", "blog-posts", ObjectTypeUpdate(title="Motorcycles", singular="Motorcycle", slug="motorcycles")
    )
    # TODO: Handle 'response' of type ObjectTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateObjectTypeErrorBody
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

**OnSuccess**: <code>[ObjectTypeResponse](cosmic/models/object_type_response.py)</code> -- The updated Object type.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[UpdateObjectTypeErrorBody](cosmic/errors/update_object_type_error.py)&#93;</code>

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
<summary><code>def batch_objects(slug: str, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BatchResponse</code></summary>

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
try:
    response = client.objects.batch_objects(
        "my-bucket",
        BatchRequest(
            operations=[
                BatchOperation(method=Method.ADD, object_={}),
                BatchOperation(method=Method.EDIT, object_id="5ff75368c2dfa81a91695cec", object_={}),
                BatchOperation(method=Method.DELETE, object_id="5ff75368c2dfa81a91695ced"),
            ],
        ),
    )
    # TODO: Handle 'response' of type BatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchObjectsErrorBody
```

**Async**

```python
try:
    response = await async_client.objects.batch_objects(
        "my-bucket",
        BatchRequest(
            operations=[
                BatchOperation(method=Method.ADD, object_={}),
                BatchOperation(method=Method.EDIT, object_id="5ff75368c2dfa81a91695cec", object_={}),
                BatchOperation(method=Method.DELETE, object_id="5ff75368c2dfa81a91695ced"),
            ],
        ),
    )
    # TODO: Handle 'response' of type BatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchObjectsErrorBody
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

**OnSuccess**: <code>[BatchResponse](cosmic/models/batch_response.py)</code> -- The per-operation results, in request order.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[BatchObjectsErrorBody](cosmic/errors/batch_objects_error.py)&#93;</code>

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
<summary><code>def create_object(slug: str, body: ObjectCreate | ObjectCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ObjectResponse</code></summary>

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
try:
    response = client.objects.create_object(
        "my-bucket", ObjectCreate(title="Blog Post Example Title", type_="blog-posts", metadata={})
    )
    # TODO: Handle 'response' of type ObjectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateObjectErrorBody
```

**Async**

```python
try:
    response = await async_client.objects.create_object(
        "my-bucket", ObjectCreate(title="Blog Post Example Title", type_="blog-posts", metadata={})
    )
    # TODO: Handle 'response' of type ObjectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateObjectErrorBody
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

**OnSuccess**: <code>[ObjectResponse](cosmic/models/object_response.py)</code> -- The created Object.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[CreateObjectErrorBody](cosmic/errors/create_object_error.py)&#93;</code>

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
<summary><code>def delete_object(slug: str, object_id: str, *, trigger_webhook: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

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
try:
    response = client.objects.delete_object("my-bucket", "5ff75368c2dfa81a91695cec")
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteObjectErrorBody
```

**Async**

```python
try:
    response = await async_client.objects.delete_object("my-bucket", "5ff75368c2dfa81a91695cec")
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteObjectErrorBody
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

**OnSuccess**: <code>[MessageResponse](cosmic/models/message_response.py)</code> -- The Object was deleted.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[DeleteObjectErrorBody](cosmic/errors/delete_object_error.py)&#93;</code>

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
<summary><code>def get_object(slug: str, object_id: str, *, read_key: str | None = None, preview_token: str | None = None, props: str | None = None, status: Status4OrStr | None = Status4.PUBLISHED, depth: int | None = 0, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ObjectResponse</code></summary>

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
try:
    response = client.objects.get_object(
        "my-bucket", "5ff75368c2dfa81a91695cec", props="id,slug,title,metadata.content,metadata.image.imgix_url"
    )
    # TODO: Handle 'response' of type ObjectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetObjectErrorBody
```

**Async**

```python
try:
    response = await async_client.objects.get_object(
        "my-bucket", "5ff75368c2dfa81a91695cec", props="id,slug,title,metadata.content,metadata.image.imgix_url"
    )
    # TODO: Handle 'response' of type ObjectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetObjectErrorBody
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

**OnSuccess**: <code>[ObjectResponse](cosmic/models/object_response.py)</code> -- The requested Object.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[GetObjectErrorBody](cosmic/errors/get_object_error.py)&#93;</code>

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
<summary><code>def list_objects(slug: str, *, read_key: str | None = None, preview_token: str | None = None, query: str | None = None, props: str | None = None, status: Status4OrStr | None = Status4.PUBLISHED, sort: str | None = "-order", limit: int | None = 1000, skip: int | None = 0, depth: int | None = 0, after: str | None = None, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ObjectListResponse</code></summary>

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
try:
    response = client.objects.list_objects(
        "my-bucket",
        query="{\"type\":\"blog-posts\",\"metadata.featured\":true}",
        props="id,slug,title,metadata.content,metadata.image.imgix_url",
        sort="created_at",
    )
    # TODO: Handle 'response' of type ObjectListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListObjectsErrorBody
```

**Async**

```python
try:
    response = await async_client.objects.list_objects(
        "my-bucket",
        query="{\"type\":\"blog-posts\",\"metadata.featured\":true}",
        props="id,slug,title,metadata.content,metadata.image.imgix_url",
        sort="created_at",
    )
    # TODO: Handle 'response' of type ObjectListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListObjectsErrorBody
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

**OnSuccess**: <code>[ObjectListResponse](cosmic/models/object_list_response.py)</code> -- The matching Objects.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[ListObjectsErrorBody](cosmic/errors/list_objects_error.py)&#93;</code>

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
<summary><code>def update_object(slug: str, object_id: str, body: ObjectUpdate | ObjectUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ObjectResponse</code></summary>

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
try:
    response = client.objects.update_object(
        "my-bucket", "5ff75368c2dfa81a91695cec", ObjectUpdate(title="New Title Edit")
    )
    # TODO: Handle 'response' of type ObjectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateObjectErrorBody
```

**Async**

```python
try:
    response = await async_client.objects.update_object(
        "my-bucket", "5ff75368c2dfa81a91695cec", ObjectUpdate(title="New Title Edit")
    )
    # TODO: Handle 'response' of type ObjectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateObjectErrorBody
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

**OnSuccess**: <code>[ObjectResponse](cosmic/models/object_response.py)</code> -- The updated Object.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[UpdateObjectErrorBody](cosmic/errors/update_object_error.py)&#93;</code>

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
<summary><code>def get_open_api_spec(*, request_options: RequestOptionsOrDict | None = None) -> OpenapiJsonResponse</code></summary>

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
try:
    response = client.status_api.get_open_api_spec()
    # TODO: Handle 'response' of type OpenapiJsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOpenApiSpecErrorBody
```

**Async**

```python
try:
    response = await async_client.status_api.get_open_api_spec()
    # TODO: Handle 'response' of type OpenapiJsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOpenApiSpecErrorBody
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

**OnSuccess**: <code>[OpenapiJsonResponse](cosmic/models/openapi_json_response.py)</code> -- The OpenAPI 3.1 document describing this API.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[GetOpenApiSpecErrorBody](cosmic/errors/get_open_api_spec_error.py)&#93;</code>

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
<summary><code>def get_status(*, request_options: RequestOptionsOrDict | None = None) -> StatusResponse</code></summary>

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
try:
    response = client.status_api.get_status()
    # TODO: Handle 'response' of type StatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.status_api.get_status()
    # TODO: Handle 'response' of type StatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStatusErrorBody
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

**OnSuccess**: <code>[StatusResponse](cosmic/models/status_response.py)</code> -- The API is reachable.

**OnError**: <code>[ApiError](cosmic/core/exceptions.py)&#91;[GetStatusErrorBody](cosmic/errors/get_status_error.py)&#93;</code>

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

