<!-- Generated file — do not edit; regenerated with the SDK. -->

# Hashtags — operations

Accessor: `client.hashtags` · Source: `instagram/apis/hashtags.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.hashtags.get_hashtag_recent_media

- **Route**: `GET /{hashtag_id}/recent_media`
- **Server**: `default`
- **Signature**: `def get_hashtag_recent_media(hashtag_id: str, user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `hashtag_id`, `user_id`, `access_token`
- **Params**: `hashtag_id` — path · `user_id` — query · `access_token` — query · `fields` — query
- **Returns (parsed)**: `MediaList`
- **Returns (raw)**: `ApiResult[MediaList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MediaList` | `instagram/models/media_list.py` |

### client.hashtags.get_hashtag_top_media

- **Route**: `GET /{hashtag_id}/top_media`
- **Server**: `default`
- **Signature**: `def get_hashtag_top_media(hashtag_id: str, user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `hashtag_id`, `user_id`, `access_token`
- **Params**: `hashtag_id` — path · `user_id` — query · `access_token` — query · `fields` — query
- **Returns (parsed)**: `MediaList`
- **Returns (raw)**: `ApiResult[MediaList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MediaList` | `instagram/models/media_list.py` |

### client.hashtags.search_hashtag

- **Route**: `GET /ig_hashtag_search`
- **Server**: `default`
- **Signature**: `def search_hashtag(q: str, user_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`, `user_id`, `access_token`
- **Params**: `q` — query · `user_id` — query · `access_token` — query
- **Returns (parsed)**: `IgHashtagSearchResponse`
- **Returns (raw)**: `ApiResult[IgHashtagSearchResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `IgHashtagSearchResponse` | `instagram/models/ig_hashtag_search_response.py` |

