<!-- Generated file — do not edit; regenerated with the SDK. -->

# Epics — operations

Accessor: `client.epics` · Source: `shortcut/apis/epics.py` · 17 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.epics.create_epic

- **Route**: `POST /api/v3/epics`
- **Auth**: `api_token`
- **Signature**: `def create_epic(body: CreateEpic | CreateEpicDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Epic`
- **Returns (raw)**: `ApiResult[Epic, CreateEpicErrorBody]`
- **Error**: `CreateEpicErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEpic` | `shortcut/models/create_epic.py` |
| `CreateEpicDict` | `shortcut/models/create_epic.py` |
| `Epic` | `shortcut/models/epic.py` |
| `CreateEpicErrorBody` | `shortcut/errors/create_epic_error.py` |

### client.epics.create_epic_comment

- **Route**: `POST /api/v3/epics/{epic-public-id}/comments`
- **Auth**: `api_token`
- **Signature**: `def create_epic_comment(epic_public_id: int, body: CreateEpicComment | CreateEpicCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`, `body`
- **Params**: `epic_public_id` — path `epic-public-id` · `body` — JSON body
- **Returns (parsed)**: `ThreadedComment`
- **Returns (raw)**: `ApiResult[ThreadedComment, CreateEpicCommentErrorBody]`
- **Error**: `CreateEpicCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEpicComment` | `shortcut/models/create_epic_comment.py` |
| `CreateEpicCommentDict` | `shortcut/models/create_epic_comment.py` |
| `ThreadedComment` | `shortcut/models/threaded_comment.py` |
| `CreateEpicCommentErrorBody` | `shortcut/errors/create_epic_comment_error.py` |

### client.epics.create_epic_comment_comment

- **Route**: `POST /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `api_token`
- **Signature**: `def create_epic_comment_comment(epic_public_id: int, comment_public_id: int, body: CreateCommentComment | CreateCommentCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`, `comment_public_id`, `body`
- **Params**: `epic_public_id` — path `epic-public-id` · `comment_public_id` — path `comment-public-id` · `body` — JSON body
- **Returns (parsed)**: `ThreadedComment`
- **Returns (raw)**: `ApiResult[ThreadedComment, CreateEpicCommentCommentErrorBody]`
- **Error**: `CreateEpicCommentCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCommentComment` | `shortcut/models/create_comment_comment.py` |
| `CreateCommentCommentDict` | `shortcut/models/create_comment_comment.py` |
| `ThreadedComment` | `shortcut/models/threaded_comment.py` |
| `CreateEpicCommentCommentErrorBody` | `shortcut/errors/create_epic_comment_comment_error.py` |

### client.epics.create_epic_health

- **Route**: `POST /api/v3/epics/{epic-public-id}/health`
- **Auth**: `api_token`
- **Signature**: `def create_epic_health(epic_public_id: int, body: CreateEpicHealth | CreateEpicHealthDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`, `body`
- **Params**: `epic_public_id` — path `epic-public-id` · `body` — JSON body
- **Returns (parsed)**: `Health`
- **Returns (raw)**: `ApiResult[Health, CreateEpicHealthErrorBody]`
- **Error**: `CreateEpicHealthErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEpicHealth` | `shortcut/models/create_epic_health.py` |
| `CreateEpicHealthDict` | `shortcut/models/create_epic_health.py` |
| `Health` | `shortcut/models/health.py` |
| `CreateEpicHealthErrorBody` | `shortcut/errors/create_epic_health_error.py` |

### client.epics.delete_epic

- **Route**: `DELETE /api/v3/epics/{epic-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_epic(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`
- **Params**: `epic_public_id` — path `epic-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEpicErrorBody]`
- **Error**: `DeleteEpicErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEpicErrorBody` | `shortcut/errors/delete_epic_error.py` |

### client.epics.delete_epic_comment

- **Route**: `DELETE /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_epic_comment(epic_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`, `comment_public_id`
- **Params**: `epic_public_id` — path `epic-public-id` · `comment_public_id` — path `comment-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEpicCommentErrorBody]`
- **Error**: `DeleteEpicCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEpicCommentErrorBody` | `shortcut/errors/delete_epic_comment_error.py` |

### client.epics.get_epic

- **Route**: `GET /api/v3/epics/{epic-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_epic(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`
- **Params**: `epic_public_id` — path `epic-public-id`
- **Returns (parsed)**: `Epic`
- **Returns (raw)**: `ApiResult[Epic, GetEpicErrorBody]`
- **Error**: `GetEpicErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Epic` | `shortcut/models/epic.py` |
| `GetEpicErrorBody` | `shortcut/errors/get_epic_error.py` |

### client.epics.get_epic_comment

- **Route**: `GET /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_epic_comment(epic_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`, `comment_public_id`
- **Params**: `epic_public_id` — path `epic-public-id` · `comment_public_id` — path `comment-public-id`
- **Returns (parsed)**: `ThreadedComment`
- **Returns (raw)**: `ApiResult[ThreadedComment, GetEpicCommentErrorBody]`
- **Error**: `GetEpicCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `ThreadedComment` | `shortcut/models/threaded_comment.py` |
| `GetEpicCommentErrorBody` | `shortcut/errors/get_epic_comment_error.py` |

### client.epics.get_epic_health

- **Route**: `GET /api/v3/epics/{epic-public-id}/health`
- **Auth**: `api_token`
- **Signature**: `def get_epic_health(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`
- **Params**: `epic_public_id` — path `epic-public-id`
- **Returns (parsed)**: `Health`
- **Returns (raw)**: `ApiResult[Health, GetEpicHealthErrorBody]`
- **Error**: `GetEpicHealthErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Health` | `shortcut/models/health.py` |
| `GetEpicHealthErrorBody` | `shortcut/errors/get_epic_health_error.py` |

### client.epics.list_epic_comments

- **Route**: `GET /api/v3/epics/{epic-public-id}/comments`
- **Auth**: `api_token`
- **Signature**: `def list_epic_comments(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`
- **Params**: `epic_public_id` — path `epic-public-id`
- **Returns (parsed)**: `list[ThreadedComment]`
- **Returns (raw)**: `ApiResult[list[ThreadedComment], ListEpicCommentsErrorBody]`
- **Error**: `ListEpicCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `ThreadedComment` | `shortcut/models/threaded_comment.py` |
| `ListEpicCommentsErrorBody` | `shortcut/errors/list_epic_comments_error.py` |

### client.epics.list_epic_documents

- **Route**: `GET /api/v3/epics/{epic-public-id}/documents`
- **Auth**: `api_token`
- **Signature**: `def list_epic_documents(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`
- **Params**: `epic_public_id` — path `epic-public-id`
- **Returns (parsed)**: `list[DocSlim]`
- **Returns (raw)**: `ApiResult[list[DocSlim], ListEpicDocumentsErrorBody]`
- **Error**: `ListEpicDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DocSlim` | `shortcut/models/doc_slim.py` |
| `ListEpicDocumentsErrorBody` | `shortcut/errors/list_epic_documents_error.py` |

### client.epics.list_epic_healths

- **Route**: `GET /api/v3/epics/{epic-public-id}/health-history`
- **Auth**: `api_token`
- **Signature**: `def list_epic_healths(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`
- **Params**: `epic_public_id` — path `epic-public-id`
- **Returns (parsed)**: `list[Health]`
- **Returns (raw)**: `ApiResult[list[Health], ListEpicHealthsErrorBody]`
- **Error**: `ListEpicHealthsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Health` | `shortcut/models/health.py` |
| `ListEpicHealthsErrorBody` | `shortcut/errors/list_epic_healths_error.py` |

### client.epics.list_epic_stories

- **Route**: `GET /api/v3/epics/{epic-public-id}/stories`
- **Auth**: `api_token`
- **Signature**: `def list_epic_stories(epic_public_id: int, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`
- **Params**: `epic_public_id` — path `epic-public-id` · `includes_description` — query
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], ListEpicStoriesErrorBody]`
- **Error**: `ListEpicStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `ListEpicStoriesErrorBody` | `shortcut/errors/list_epic_stories_error.py` |

### client.epics.list_epics

- **Route**: `GET /api/v3/epics`
- **Auth**: `api_token`
- **Signature**: `def list_epics(*, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `includes_description` — query
- **Returns (parsed)**: `list[EpicSlim]`
- **Returns (raw)**: `ApiResult[list[EpicSlim], ListEpicsErrorBody]`
- **Error**: `ListEpicsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EpicSlim` | `shortcut/models/epic_slim.py` |
| `ListEpicsErrorBody` | `shortcut/errors/list_epics_error.py` |

### client.epics.list_epics_paginated

- **Route**: `GET /api/v3/epics/paginated`
- **Auth**: `api_token`
- **Signature**: `def list_epics_paginated(*, includes_description: bool | None = None, page: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `includes_description` — query · `page` — query · `page_size` — query
- **Returns (parsed)**: `EpicPaginatedResults`
- **Returns (raw)**: `ApiResult[EpicPaginatedResults, ListEpicsPaginatedErrorBody]`
- **Error**: `ListEpicsPaginatedErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EpicPaginatedResults` | `shortcut/models/epic_paginated_results.py` |
| `ListEpicsPaginatedErrorBody` | `shortcut/errors/list_epics_paginated_error.py` |

### client.epics.update_epic

- **Route**: `PUT /api/v3/epics/{epic-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_epic(epic_public_id: int, body: UpdateEpic | UpdateEpicDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`, `body`
- **Params**: `epic_public_id` — path `epic-public-id` · `body` — JSON body
- **Returns (parsed)**: `Epic`
- **Returns (raw)**: `ApiResult[Epic, UpdateEpicErrorBody]`
- **Error**: `UpdateEpicErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateEpic` | `shortcut/models/update_epic.py` |
| `UpdateEpicDict` | `shortcut/models/update_epic.py` |
| `Epic` | `shortcut/models/epic.py` |
| `UpdateEpicErrorBody` | `shortcut/errors/update_epic_error.py` |

### client.epics.update_epic_comment

- **Route**: `PUT /api/v3/epics/{epic-public-id}/comments/{comment-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_epic_comment(epic_public_id: int, comment_public_id: int, body: UpdateComment | UpdateCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `epic_public_id`, `comment_public_id`, `body`
- **Params**: `epic_public_id` — path `epic-public-id` · `comment_public_id` — path `comment-public-id` · `body` — JSON body
- **Returns (parsed)**: `ThreadedComment`
- **Returns (raw)**: `ApiResult[ThreadedComment, UpdateEpicCommentErrorBody]`
- **Error**: `UpdateEpicCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateComment` | `shortcut/models/update_comment.py` |
| `UpdateCommentDict` | `shortcut/models/update_comment.py` |
| `ThreadedComment` | `shortcut/models/threaded_comment.py` |
| `UpdateEpicCommentErrorBody` | `shortcut/errors/update_epic_comment_error.py` |

