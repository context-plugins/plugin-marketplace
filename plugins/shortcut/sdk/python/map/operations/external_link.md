<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExternalLink — operations

Accessor: `client.external_link` · Source: `shortcut/apis/external_link.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.external_link.get_external_link_stories

- **Route**: `GET /api/v3/external-link/stories`
- **Auth**: `api_token`
- **Signature**: `def get_external_link_stories(external_link: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_link`
- **Params**: `external_link` — query
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], GetExternalLinkStoriesErrorBody]`
- **Error**: `GetExternalLinkStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `GetExternalLinkStoriesErrorBody` | `shortcut/errors/get_external_link_stories_error.py` |

