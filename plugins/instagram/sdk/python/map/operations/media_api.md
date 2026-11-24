<!-- Generated file — do not edit; regenerated with the SDK. -->

# MediaApi — operations

Accessor: `client.media_api` · Source: `instagram/apis/media_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.media_api.delete_media

- **Route**: `DELETE /{media_id}`
- **Server**: `default`
- **Signature**: `def delete_media(media_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `media_id`, `access_token`
- **Params**: `media_id` — path · `access_token` — query
- **Returns (parsed)**: `Response`
- **Returns (raw)**: `ApiResult[Response, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Response` | `instagram/models/response.py` |

### client.media_api.get_media

- **Route**: `GET /{media_id}`
- **Server**: `default`
- **Signature**: `def get_media(media_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `media_id`, `access_token`
- **Params**: `media_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `Media`
- **Returns (raw)**: `ApiResult[Media, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Media` | `instagram/models/media.py` |

### client.media_api.get_media_children

- **Route**: `GET /{media_id}/children`
- **Server**: `default`
- **Signature**: `def get_media_children(media_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `media_id`, `access_token`
- **Params**: `media_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `MediaList`
- **Returns (raw)**: `ApiResult[MediaList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MediaList` | `instagram/models/media_list.py` |

### client.media_api.get_user_media

- **Route**: `GET /{user_id}/media`
- **Server**: `default`
- **Signature**: `def get_user_media(user_id: str, access_token: str, *, fields: str | None = None, limit: int | None = None, after: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `access_token`
- **Params**: `user_id` — path · `access_token` — query · `fields` — query · `limit` — query · `after` — query
- **Returns (parsed)**: `MediaList`
- **Returns (raw)**: `ApiResult[MediaList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MediaList` | `instagram/models/media_list.py` |

### client.media_api.get_user_stories

- **Route**: `GET /{user_id}/stories`
- **Server**: `default`
- **Signature**: `def get_user_stories(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `access_token`
- **Params**: `user_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `MediaList`
- **Returns (raw)**: `ApiResult[MediaList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MediaList` | `instagram/models/media_list.py` |

### client.media_api.update_media

- **Route**: `POST /{media_id}`
- **Server**: `default`
- **Signature**: `def update_media(media_id: str, *, body: RequestInstagramGraphMediaApi | RequestInstagramGraphMediaApiDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `media_id`
- **Params**: `media_id` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessResponse`
- **Returns (raw)**: `ApiResult[SuccessResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `RequestInstagramGraphMediaApi` | `instagram/models/request_instagram_graph_media_api.py` |
| `RequestInstagramGraphMediaApiDict` | `instagram/models/request_instagram_graph_media_api.py` |
| `SuccessResponse` | `instagram/models/success_response.py` |

