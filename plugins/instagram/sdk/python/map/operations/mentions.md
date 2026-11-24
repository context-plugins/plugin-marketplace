<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mentions — operations

Accessor: `client.mentions` · Source: `instagram/apis/mentions.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.mentions.get_user_tags

- **Route**: `GET /{user_id}/tags`
- **Server**: `default`
- **Signature**: `def get_user_tags(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `access_token`
- **Params**: `user_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `MediaList`
- **Returns (raw)**: `ApiResult[MediaList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MediaList` | `instagram/models/media_list.py` |

