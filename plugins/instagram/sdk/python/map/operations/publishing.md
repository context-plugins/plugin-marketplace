<!-- Generated file — do not edit; regenerated with the SDK. -->

# Publishing — operations

Accessor: `client.publishing` · Source: `instagram/apis/publishing.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.publishing.create_media_container

- **Route**: `POST /{user_id}/media`
- **Server**: `default`
- **Signature**: `def create_media_container(user_id: str, body: CreateContainerRequest | CreateContainerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `ContainerResponse`
- **Returns (raw)**: `ApiResult[ContainerResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CreateContainerRequest` | `instagram/models/create_container_request.py` |
| `CreateContainerRequestDict` | `instagram/models/create_container_request.py` |
| `ContainerResponse` | `instagram/models/container_response.py` |

### client.publishing.get_container

- **Route**: `GET /{container_id}`
- **Server**: `default`
- **Signature**: `def get_container(container_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `container_id`, `access_token`
- **Params**: `container_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `ResponseInstagramGraphPublishingApi`
- **Returns (raw)**: `ApiResult[ResponseInstagramGraphPublishingApi, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ResponseInstagramGraphPublishingApi` | `instagram/models/response_instagram_graph_publishing_api.py` |

### client.publishing.get_content_publishing_limit

- **Route**: `GET /{user_id}/content_publishing_limit`
- **Server**: `default`
- **Signature**: `def get_content_publishing_limit(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `access_token`
- **Params**: `user_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `ContentPublishingLimitResponse`
- **Returns (raw)**: `ApiResult[ContentPublishingLimitResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ContentPublishingLimitResponse` | `instagram/models/content_publishing_limit_response.py` |

### client.publishing.publish_media

- **Route**: `POST /{user_id}/media_publish`
- **Server**: `default`
- **Signature**: `def publish_media(user_id: str, body: MediaPublishRequest | MediaPublishRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `MediaPublishResponse`
- **Returns (raw)**: `ApiResult[MediaPublishResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MediaPublishRequest` | `instagram/models/media_publish_request.py` |
| `MediaPublishRequestDict` | `instagram/models/media_publish_request.py` |
| `MediaPublishResponse` | `instagram/models/media_publish_response.py` |

