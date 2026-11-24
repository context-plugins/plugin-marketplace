<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stories — operations

Accessor: `client.stories` · Source: `alpha_ai/apis/stories.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.stories.get_api_stories

- **Route**: `GET /api/stories/`
- **Auth**: `api_key`
- **Signature**: `def get_api_stories(*, cursor: str | None = None, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `cursor` — query · `page_size` — query
- **Returns (parsed)**: `StoriesPage`
- **Returns (raw)**: `ApiResult[StoriesPage, GetApiStoriesErrorBody]`
- **Error**: `GetApiStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429] · `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `StoriesPage` | `alpha_ai/models/stories_page.py` |
| `GetApiStoriesErrorBody` | `alpha_ai/errors/get_api_stories_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.stories.get_api_stories_by_story_id

- **Route**: `GET /api/stories/{story_id}/`
- **Auth**: `api_key`
- **Signature**: `def get_api_stories_by_story_id(story_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_id`
- **Params**: `story_id` — path
- **Returns (parsed)**: `StoryLookup`
- **Returns (raw)**: `ApiResult[StoryLookup, GetApiStoriesByStoryIdErrorBody]`
- **Error**: `GetApiStoriesByStoryIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429] · `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `StoryLookup` | `alpha_ai/models/story_lookup.py` |
| `GetApiStoriesByStoryIdErrorBody` | `alpha_ai/errors/get_api_stories_by_story_id_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.stories.get_api_stories_by_story_id_materials

- **Route**: `GET /api/stories/{story_id}/materials/`
- **Auth**: `api_key`
- **Signature**: `def get_api_stories_by_story_id_materials(story_id: str, *, cursor: str | None = None, page_size: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_id`
- **Params**: `story_id` — path · `cursor` — query · `page_size` — query
- **Returns (parsed)**: `StoryMaterials`
- **Returns (raw)**: `ApiResult[StoryMaterials, GetApiStoriesByStoryIdMaterialsErrorBody]`
- **Error**: `GetApiStoriesByStoryIdMaterialsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `StoryMaterials` | `alpha_ai/models/story_materials.py` |
| `GetApiStoriesByStoryIdMaterialsErrorBody` | `alpha_ai/errors/get_api_stories_by_story_id_materials_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.stories.get_api_stories_top

- **Route**: `GET /api/stories/top/`
- **Auth**: `api_key`
- **Signature**: `def get_api_stories_top(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `TopStories`
- **Returns (raw)**: `ApiResult[TopStories, GetApiStoriesTopErrorBody]`
- **Error**: `GetApiStoriesTopErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `TopStories` | `alpha_ai/models/top_stories.py` |
| `GetApiStoriesTopErrorBody` | `alpha_ai/errors/get_api_stories_top_error.py` |
| `Error` | `alpha_ai/models/error.py` |

