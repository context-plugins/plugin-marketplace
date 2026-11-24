# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [PrismaReviewsClient](prisma_reviews/client.py)

## Connections

> Source: [Connections](prisma_reviews/apis/connections.py)

<details>
<summary><code>def create_connect_link(*, body: V1ConnectLinksRequest | V1ConnectLinksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectLink, CreateConnectLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A link the owner of a platform account opens to connect it in their browser, with no Prisma account or API key. Connections made through it belong to your workspace and to the mode of the key that created the link, and carry `metadata: {"via": "connect_link"}`. Valid for 7 days and reusable: treat it like a password-reset link. The body is optional.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.connections.with_raw_response.create_connect_link(
    body=V1ConnectLinksRequest(platform=PlatformId2.GOOGLE, redirect_url="https://yourapp.com/connected")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateConnectLinkErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.create_connect_link(
    body=V1ConnectLinksRequest(platform=PlatformId2.GOOGLE, redirect_url="https://yourapp.com/connected")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateConnectLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ConnectLinksRequest](prisma_reviews/models/v1_connect_links_request.py) \| [V1ConnectLinksRequestDict](prisma_reviews/models/v1_connect_links_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[ConnectLink](prisma_reviews/models/connect_link.py), [CreateConnectLinkErrorBody](prisma_reviews/errors/create_connect_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectLink](prisma_reviews/models/connect_link.py)</code> -- The connect link.

**On `Failure`**: `error` is <code>[CreateConnectLinkErrorBody](prisma_reviews/errors/create_connect_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 422, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_connection(body: ConnectionInput | ConnectionInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionCreated, CreateConnectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connects one platform account and imports its locations. How depends on the platform (see `GET /v1/platforms`): `oauth` platforms need `redirect_url` and return `status: "pending"` with an `authorization_url` for the owner; `credentials` platforms need `credentials`, which Prisma tries against the platform before storing anything; `listing_url` platforms need the public `listing_url` of the listing. With a test key any platform connects at once, without credentials, with sample locations and reviews. Locations over the plan limit are not created and are counted in `locations_over_plan_limit`. Not idempotent: retrying creates a second connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.connections.with_raw_response.create_connection(
    ConnectionInput(platform=PlatformId1.GOOGLE, redirect_url="https://yourapp.com/prisma/callback", metadata={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionCreated
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateConnectionErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.create_connection(
    ConnectionInput(platform=PlatformId1.GOOGLE, redirect_url="https://yourapp.com/prisma/callback", metadata={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionCreated
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ConnectionInput](prisma_reviews/models/connection_input.py) \| [ConnectionInputDict](prisma_reviews/models/connection_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[ConnectionCreated](prisma_reviews/models/connection_created.py), [CreateConnectionErrorBody](prisma_reviews/errors/create_connection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionCreated](prisma_reviews/models/connection_created.py)</code> -- The new connection, plus `authorization_url` (OAuth) or `locations_created` and `locations_over_plan_limit`.

**On `Failure`**: `error` is <code>[CreateConnectionErrorBody](prisma_reviews/errors/create_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 422, 429, 500, 501, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_connection(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionDeleted, DeleteConnectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnects the connection: its stored tokens and credentials are deleted at once and its locations become `disconnected` (no more checks, not counted toward the plan). Their reviews stay readable for 30 days and are then deleted. To reauthorize a connection, delete it and create a new one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.connections.with_raw_response.delete_connection("con_01KJ8P7R5S3T1V9W7X5Y3Z1A2B")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionDeleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteConnectionErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.delete_connection("con_01KJ8P7R5S3T1V9W7X5Y3Z1A2B")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionDeleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Connection ID (`con_…`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[ConnectionDeleted](prisma_reviews/models/connection_deleted.py), [DeleteConnectionErrorBody](prisma_reviews/errors/delete_connection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionDeleted](prisma_reviews/models/connection_deleted.py)</code> -- The disconnected connection, plus `locations_disconnected`.

**On `Failure`**: `error` is <code>[DeleteConnectionErrorBody](prisma_reviews/errors/delete_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_connections(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionList, ListConnectionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every connection of your workspace in the mode of your key, oldest first, including `pending`, `reauth_required` and `disconnected` ones. Not paginated: `next_cursor` is always `null`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.connections.with_raw_response.list_connections()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListConnectionsErrorBody
```

**Async**

```python
result = await async_client.connections.with_raw_response.list_connections()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListConnectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[ConnectionList](prisma_reviews/models/connection_list.py), [ListConnectionsErrorBody](prisma_reviews/errors/list_connections_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionList](prisma_reviews/models/connection_list.py)</code> -- All connections.

**On `Failure`**: `error` is <code>[ListConnectionsErrorBody](prisma_reviews/errors/list_connections_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## LocationsApi

> Source: [LocationsApi](prisma_reviews/apis/locations_api.py)

<details>
<summary><code>def get_location(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Location, GetLocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One location by ID, disconnected ones included until their data is deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.locations_api.with_raw_response.get_location("loc_01KJ8P9W2C4D6F8G0H2J4K6M8N")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLocationErrorBody
```

**Async**

```python
result = await async_client.locations_api.with_raw_response.get_location("loc_01KJ8P9W2C4D6F8G0H2J4K6M8N")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Location ID (`loc_…`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[Location](prisma_reviews/models/location.py), [GetLocationErrorBody](prisma_reviews/errors/get_location_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Location](prisma_reviews/models/location.py)</code> -- The location.

**On `Failure`**: `error` is <code>[GetLocationErrorBody](prisma_reviews/errors/get_location_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_locations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LocationList, ListLocationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every location of your workspace in the mode of your key, oldest first, without disconnected ones. Not paginated: `next_cursor` is always `null`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.locations_api.with_raw_response.list_locations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LocationList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLocationsErrorBody
```

**Async**

```python
result = await async_client.locations_api.with_raw_response.list_locations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LocationList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLocationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[LocationList](prisma_reviews/models/location_list.py), [ListLocationsErrorBody](prisma_reviews/errors/list_locations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LocationList](prisma_reviews/models/location_list.py)</code> -- All locations.

**On `Failure`**: `error` is <code>[ListLocationsErrorBody](prisma_reviews/errors/list_locations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refresh_location(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LocationRefresh, RefreshLocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks one location for new reviews now instead of waiting for its next scheduled check ("Refresh now"). From the Beam plan; at most once every 15 minutes per location. New reviews arrive as usual, in `GET /v1/reviews` and as `review.created` webhooks.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.locations_api.with_raw_response.refresh_location("loc_01KJ8P9W2C4D6F8G0H2J4K6M8N")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LocationRefresh
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshLocationErrorBody
```

**Async**

```python
result = await async_client.locations_api.with_raw_response.refresh_location("loc_01KJ8P9W2C4D6F8G0H2J4K6M8N")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LocationRefresh
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Location ID (`loc_…`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[LocationRefresh](prisma_reviews/models/location_refresh.py), [RefreshLocationErrorBody](prisma_reviews/errors/refresh_location_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LocationRefresh](prisma_reviews/models/location_refresh.py)</code> -- Check queued. The body is the location plus `refresh: "queued"`.

**On `Failure`**: `error` is <code>[RefreshLocationErrorBody](prisma_reviews/errors/refresh_location_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 409, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Platforms

> Source: [Platforms](prisma_reviews/apis/platforms.py)

<details>
<summary><code>def get_platform(id_: PlatformIdOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Platform, GetPlatformErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One platform of `GET /v1/platforms`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.platforms.with_raw_response.get_platform(PlatformId.APP_STORE)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Platform
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlatformErrorBody
```

**Async**

```python
result = await async_client.platforms.with_raw_response.get_platform(PlatformId.APP_STORE)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Platform
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlatformErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>[PlatformIdOrStr](prisma_reviews/models/enums/platform_id.py)</code> | Platform ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[Platform](prisma_reviews/models/platform.py), [GetPlatformErrorBody](prisma_reviews/errors/get_platform_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Platform](prisma_reviews/models/platform.py)</code> -- The platform.

**On `Failure`**: `error` is <code>[GetPlatformErrorBody](prisma_reviews/errors/get_platform_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_platforms(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlatformList, ListPlatformsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every platform with how it connects, the exact fields `POST /v1/connections` expects, setup steps for the account owner, an example body and whether this workspace can connect it now. Enough to connect a platform without reading the docs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.platforms.with_raw_response.list_platforms()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlatformList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlatformsErrorBody
```

**Async**

```python
result = await async_client.platforms.with_raw_response.list_platforms()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlatformList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlatformsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[PlatformList](prisma_reviews/models/platform_list.py), [ListPlatformsErrorBody](prisma_reviews/errors/list_platforms_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlatformList](prisma_reviews/models/platform_list.py)</code> -- All platforms.

**On `Failure`**: `error` is <code>[ListPlatformsErrorBody](prisma_reviews/errors/list_platforms_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Replies

> Source: [Replies](prisma_reviews/apis/replies.py)

<details>
<summary><code>def delete_reply(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReplyDeletion, DeleteReplyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues the removal of the review's reply from the platform. When the job is done, `reply` becomes `null`. Only on platforms whose API can delete replies (Google Business Profile, App Store, Trustpilot).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.replies.with_raw_response.delete_reply("rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReplyDeletion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteReplyErrorBody
```

**Async**

```python
result = await async_client.replies.with_raw_response.delete_reply("rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReplyDeletion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteReplyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Review ID (`rev_…`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[ReplyDeletion](prisma_reviews/models/reply_deletion.py), [DeleteReplyErrorBody](prisma_reviews/errors/delete_reply_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReplyDeletion](prisma_reviews/models/reply_deletion.py)</code> -- Deletion queued.

**On `Failure`**: `error` is <code>[DeleteReplyErrorBody](prisma_reviews/errors/delete_reply_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reply_to_review(id_: str, body: V1ReviewsReplyRequest | V1ReviewsReplyRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Review, ReplyToReviewErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stores the reply and queues it for publishing through the platform's official API: `202` with the review and `reply.status: "queued"`. A background job publishes it (`reply.published` webhook), marks it `failed` (`reply.failed` webhook), or, when the platform never answered and the reply can't be read back, marks it `unknown` without retrying (`reply.unknown` webhook). Posting again replaces the stored reply. With a test key the reply goes through the same steps but never reaches the platform. Read-only platforms return `422 reply_not_supported` with the review's `url`, where it can be answered.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.replies.with_raw_response.reply_to_review(
    "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E",
    V1ReviewsReplyRequest(text="Thanks Marta! We have added a second barista at lunch."),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Review
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplyToReviewErrorBody
```

**Async**

```python
result = await async_client.replies.with_raw_response.reply_to_review(
    "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E",
    V1ReviewsReplyRequest(text="Thanks Marta! We have added a second barista at lunch."),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Review
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplyToReviewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Review ID (`rev_…`). |
| <code>body</code> | <code>[V1ReviewsReplyRequest](prisma_reviews/models/v1_reviews_reply_request.py) \| [V1ReviewsReplyRequestDict](prisma_reviews/models/v1_reviews_reply_request.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | A unique value per reply (a UUID works). The same key with the same request returns the stored response instead of replying twice; with a different request it returns `409 idempotency_conflict`. Scoped to the workspace; only successful responses are stored.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[Review](prisma_reviews/models/review.py), [ReplyToReviewErrorBody](prisma_reviews/errors/reply_to_review_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Review](prisma_reviews/models/review.py)</code> -- Reply queued. The body is the review with its new `reply`.

**On `Failure`**: `error` is <code>[ReplyToReviewErrorBody](prisma_reviews/errors/reply_to_review_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 409, 422, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Reviews

> Source: [Reviews](prisma_reviews/apis/reviews.py)

<details>
<summary><code>def get_review(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Review, GetReviewErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One review by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reviews.with_raw_response.get_review("rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Review
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReviewErrorBody
```

**Async**

```python
result = await async_client.reviews.with_raw_response.get_review("rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Review
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReviewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Review ID (`rev_…`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[Review](prisma_reviews/models/review.py), [GetReviewErrorBody](prisma_reviews/errors/get_review_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Review](prisma_reviews/models/review.py)</code> -- The review.

**On `Failure`**: `error` is <code>[GetReviewErrorBody](prisma_reviews/errors/get_review_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_reviews(*, location_id: str | None = None, platform: PlatformIdOrStr | None = None, since: Since | SinceDict | None = None, has_reply: HasReplyOrStr | None = None, limit: int | None = 50, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReviewList, ListReviewsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reviews of your workspace in the mode of your key, newest first (by `created_at`, then `id`), in the same shape on every platform. Cursor paginated: pass `next_cursor` as `cursor`, with the same filters, until it is `null`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reviews.with_raw_response.list_reviews(
    location_id="loc_01KJ8P9W2C4D6F8G0H2J4K6M8N", since=date(2026, 10, 1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReviewList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReviewsErrorBody
```

**Async**

```python
result = await async_client.reviews.with_raw_response.list_reviews(
    location_id="loc_01KJ8P9W2C4D6F8G0H2J4K6M8N", since=date(2026, 10, 1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReviewList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReviewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>location_id</code> | <code>str \| None</code> | Only reviews of this location.<br>**Default**: <code>None</code> |
| <code>platform</code> | <code>[PlatformIdOrStr](prisma_reviews/models/enums/platform_id.py) \| None</code> | Only reviews from this platform.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>[Since](prisma_reviews/models/unions/since.py) \| [SinceDict](prisma_reviews/models/unions/since.py) \| None</code> | Only reviews written at or after this time (by `created_at`): a date (`2026-10-01`, midnight UTC) or an ISO 8601 timestamp with a time zone offset (`2026-10-01T00:00:00Z`, `2026-10-01T02:00:00+02:00`).<br>**Default**: <code>None</code> |
| <code>has_reply</code> | <code>[HasReplyOrStr](prisma_reviews/models/enums/has_reply.py) \| None</code> | `true`: reviews with a reply in any status. `false`: reviews without one.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Page size.<br>**Default**: <code>50</code> |
| <code>cursor</code> | <code>str \| None</code> | The `next_cursor` of the previous page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[ReviewList](prisma_reviews/models/review_list.py), [ListReviewsErrorBody](prisma_reviews/errors/list_reviews_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReviewList](prisma_reviews/models/review_list.py)</code> -- A page of reviews.

**On `Failure`**: `error` is <code>[ListReviewsErrorBody](prisma_reviews/errors/list_reviews_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 422, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## StatsApi

> Source: [StatsApi](prisma_reviews/apis/stats_api.py)

<details>
<summary><code>def get_location_stats(id_: str, *, since: Since | SinceDict | None = None, until: Until | UntilDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Stats, GetLocationStatsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The same statistics as `GET /v1/stats`, for one location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stats_api.with_raw_response.get_location_stats("loc_01KJ8P9W2C4D6F8G0H2J4K6M8N", since=date(2026, 1, 1))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stats
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLocationStatsErrorBody
```

**Async**

```python
result = await async_client.stats_api.with_raw_response.get_location_stats(
    "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N", since=date(2026, 1, 1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stats
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLocationStatsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Location ID (`loc_…`). |
| <code>since</code> | <code>[Since](prisma_reviews/models/unions/since.py) \| [SinceDict](prisma_reviews/models/unions/since.py) \| None</code> | Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp with offset. Default: 12 months before `until`.<br>**Default**: <code>None</code> |
| <code>until</code> | <code>[Until](prisma_reviews/models/unions/until.py) \| [UntilDict](prisma_reviews/models/unions/until.py) \| None</code> | End of the period (not included). Default: now.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[Stats](prisma_reviews/models/stats.py), [GetLocationStatsErrorBody](prisma_reviews/errors/get_location_stats_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Stats](prisma_reviews/models/stats.py)</code> -- The stats.

**On `Failure`**: `error` is <code>[GetLocationStatsErrorBody](prisma_reviews/errors/get_location_stats_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_stats(*, location_id: str | None = None, platform: PlatformIdOrStr | None = None, since: Since | SinceDict | None = None, until: Until | UntilDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Stats, GetStatsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Review statistics for your workspace in the mode of your key: count, average rating, reviews per star, replies, reply rate, median reply time, unanswered negative reviews and a month-by-month series. Filter by location or platform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stats_api.with_raw_response.get_stats(
    location_id="loc_01KJ8P9W2C4D6F8G0H2J4K6M8N", since=date(2026, 1, 1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stats
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStatsErrorBody
```

**Async**

```python
result = await async_client.stats_api.with_raw_response.get_stats(
    location_id="loc_01KJ8P9W2C4D6F8G0H2J4K6M8N", since=date(2026, 1, 1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stats
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStatsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>location_id</code> | <code>str \| None</code> | Only this location.<br>**Default**: <code>None</code> |
| <code>platform</code> | <code>[PlatformIdOrStr](prisma_reviews/models/enums/platform_id.py) \| None</code> | Only this platform.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>[Since](prisma_reviews/models/unions/since.py) \| [SinceDict](prisma_reviews/models/unions/since.py) \| None</code> | Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp with offset. Default: 12 months before `until`.<br>**Default**: <code>None</code> |
| <code>until</code> | <code>[Until](prisma_reviews/models/unions/until.py) \| [UntilDict](prisma_reviews/models/unions/until.py) \| None</code> | End of the period (not included). Default: now.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[Stats](prisma_reviews/models/stats.py), [GetStatsErrorBody](prisma_reviews/errors/get_stats_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Stats](prisma_reviews/models/stats.py)</code> -- The stats.

**On `Failure`**: `error` is <code>[GetStatsErrorBody](prisma_reviews/errors/get_stats_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 422, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UsageApi

> Source: [UsageApi](prisma_reviews/apis/usage_api.py)

<details>
<summary><code>def get_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Usage, GetUsageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The workspace's plan and what it has used in the current calendar month (UTC). The same numbers with a live key and a test key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.usage_api.with_raw_response.get_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Usage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUsageErrorBody
```

**Async**

```python
result = await async_client.usage_api.with_raw_response.get_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Usage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[Usage](prisma_reviews/models/usage.py), [GetUsageErrorBody](prisma_reviews/errors/get_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Usage](prisma_reviews/models/usage.py)</code> -- Usage this month.

**On `Failure`**: `error` is <code>[GetUsageErrorBody](prisma_reviews/errors/get_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](prisma_reviews/apis/webhooks_api.py)

<details>
<summary><code>def create_webhook(body: V1WebhooksRequest | V1WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookCreated, CreateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers an HTTPS endpoint for signed event deliveries. The signing `secret` is returned only in this response. Endpoints belong to the workspace, not to a key: they receive events from both live and test mode. Not idempotent: retrying creates a second endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.create_webhook(
    V1WebhooksRequest(
        url="https://yourapp.com/webhooks/prisma",
        events=[
            WebhookEventFilter.REVIEW_CREATED, WebhookEventFilter.REPLY_FAILED, WebhookEventFilter.CONNECTION_UPDATED
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookCreated
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.create_webhook(
    V1WebhooksRequest(
        url="https://yourapp.com/webhooks/prisma",
        events=[
            WebhookEventFilter.REVIEW_CREATED, WebhookEventFilter.REPLY_FAILED, WebhookEventFilter.CONNECTION_UPDATED
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookCreated
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1WebhooksRequest](prisma_reviews/models/v1_webhooks_request.py) \| [V1WebhooksRequestDict](prisma_reviews/models/v1_webhooks_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[WebhookCreated](prisma_reviews/models/webhook_created.py), [CreateWebhookErrorBody](prisma_reviews/errors/create_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookCreated](prisma_reviews/models/webhook_created.py)</code> -- The endpoint, with its signing secret.

**On `Failure`**: `error` is <code>[CreateWebhookErrorBody](prisma_reviews/errors/create_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 422, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookDeleted, DeleteWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the endpoint; deliveries still pending for it are dropped. There is no update: create a new endpoint and delete the old one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.delete_webhook("we_01KJ8R1A3B5C7D9E1F3G5H7J9K")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookDeleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.delete_webhook("we_01KJ8R1A3B5C7D9E1F3G5H7J9K")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookDeleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Webhook endpoint ID (`we_…`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[WebhookDeleted](prisma_reviews/models/webhook_deleted.py), [DeleteWebhookErrorBody](prisma_reviews/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookDeleted](prisma_reviews/models/webhook_deleted.py)</code> -- Deleted.

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](prisma_reviews/errors/delete_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhooks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookList, ListWebhooksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every webhook endpoint of the workspace (shared by live and test keys). Secrets are never returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](prisma_reviews/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](prisma_reviews/core/results.py)&#91;[WebhookList](prisma_reviews/models/webhook_list.py), [ListWebhooksErrorBody](prisma_reviews/errors/list_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookList](prisma_reviews/models/webhook_list.py)</code> -- All endpoints.

**On `Failure`**: `error` is <code>[ListWebhooksErrorBody](prisma_reviews/errors/list_webhooks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500, 503 | <code>[Error](prisma_reviews/models/error.py)</code> |
| anything unmapped | <code>[RawError](prisma_reviews/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

