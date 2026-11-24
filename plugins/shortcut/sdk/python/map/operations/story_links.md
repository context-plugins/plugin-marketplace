<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoryLinks — operations

Accessor: `client.story_links` · Source: `shortcut/apis/story_links.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.story_links.create_story_link

- **Route**: `POST /api/v3/story-links`
- **Auth**: `api_token`
- **Signature**: `def create_story_link(body: CreateStoryLink | CreateStoryLinkDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StoryLink`
- **Returns (raw)**: `ApiResult[StoryLink, CreateStoryLinkErrorBody]`
- **Error**: `CreateStoryLinkErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateStoryLink` | `shortcut/models/create_story_link.py` |
| `CreateStoryLinkDict` | `shortcut/models/create_story_link.py` |
| `StoryLink` | `shortcut/models/story_link.py` |
| `CreateStoryLinkErrorBody` | `shortcut/errors/create_story_link_error.py` |

### client.story_links.delete_story_link

- **Route**: `DELETE /api/v3/story-links/{story-link-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_story_link(story_link_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_link_public_id`
- **Params**: `story_link_public_id` — path `story-link-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStoryLinkErrorBody]`
- **Error**: `DeleteStoryLinkErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteStoryLinkErrorBody` | `shortcut/errors/delete_story_link_error.py` |

### client.story_links.get_story_link

- **Route**: `GET /api/v3/story-links/{story-link-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_story_link(story_link_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_link_public_id`
- **Params**: `story_link_public_id` — path `story-link-public-id`
- **Returns (parsed)**: `StoryLink`
- **Returns (raw)**: `ApiResult[StoryLink, GetStoryLinkErrorBody]`
- **Error**: `GetStoryLinkErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StoryLink` | `shortcut/models/story_link.py` |
| `GetStoryLinkErrorBody` | `shortcut/errors/get_story_link_error.py` |

### client.story_links.update_story_link

- **Route**: `PUT /api/v3/story-links/{story-link-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_story_link(story_link_public_id: int, body: UpdateStoryLink | UpdateStoryLinkDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_link_public_id`, `body`
- **Params**: `story_link_public_id` — path `story-link-public-id` · `body` — JSON body
- **Returns (parsed)**: `StoryLink`
- **Returns (raw)**: `ApiResult[StoryLink, UpdateStoryLinkErrorBody]`
- **Error**: `UpdateStoryLinkErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateStoryLink` | `shortcut/models/update_story_link.py` |
| `UpdateStoryLinkDict` | `shortcut/models/update_story_link.py` |
| `StoryLink` | `shortcut/models/story_link.py` |
| `UpdateStoryLinkErrorBody` | `shortcut/errors/update_story_link_error.py` |

