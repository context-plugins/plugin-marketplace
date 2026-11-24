<!-- Generated file — do not edit; regenerated with the SDK. -->

# Iterations — operations

Accessor: `client.iterations` · Source: `shortcut/apis/iterations.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.iterations.create_iteration

- **Route**: `POST /api/v3/iterations`
- **Auth**: `api_token`
- **Signature**: `def create_iteration(body: CreateIteration | CreateIterationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Iteration`
- **Returns (raw)**: `ApiResult[Iteration, CreateIterationErrorBody]`
- **Error**: `CreateIterationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateIteration` | `shortcut/models/create_iteration.py` |
| `CreateIterationDict` | `shortcut/models/create_iteration.py` |
| `Iteration` | `shortcut/models/iteration.py` |
| `CreateIterationErrorBody` | `shortcut/errors/create_iteration_error.py` |

### client.iterations.delete_iteration

- **Route**: `DELETE /api/v3/iterations/{iteration-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_iteration(iteration_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `iteration_public_id`
- **Params**: `iteration_public_id` — path `iteration-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteIterationErrorBody]`
- **Error**: `DeleteIterationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteIterationErrorBody` | `shortcut/errors/delete_iteration_error.py` |

### client.iterations.disable_iterations

- **Route**: `PUT /api/v3/iterations/disable`
- **Auth**: `api_token`
- **Signature**: `def disable_iterations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DisableIterationsErrorBody]`
- **Error**: `DisableIterationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DisableIterationsErrorBody` | `shortcut/errors/disable_iterations_error.py` |

### client.iterations.enable_iterations

- **Route**: `PUT /api/v3/iterations/enable`
- **Auth**: `api_token`
- **Signature**: `def enable_iterations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, EnableIterationsErrorBody]`
- **Error**: `EnableIterationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EnableIterationsErrorBody` | `shortcut/errors/enable_iterations_error.py` |

### client.iterations.get_iteration

- **Route**: `GET /api/v3/iterations/{iteration-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_iteration(iteration_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `iteration_public_id`
- **Params**: `iteration_public_id` — path `iteration-public-id`
- **Returns (parsed)**: `Iteration`
- **Returns (raw)**: `ApiResult[Iteration, GetIterationErrorBody]`
- **Error**: `GetIterationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Iteration` | `shortcut/models/iteration.py` |
| `GetIterationErrorBody` | `shortcut/errors/get_iteration_error.py` |

### client.iterations.list_iteration_stories

- **Route**: `GET /api/v3/iterations/{iteration-public-id}/stories`
- **Auth**: `api_token`
- **Signature**: `def list_iteration_stories(iteration_public_id: int, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `iteration_public_id`
- **Params**: `iteration_public_id` — path `iteration-public-id` · `includes_description` — query
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], ListIterationStoriesErrorBody]`
- **Error**: `ListIterationStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `ListIterationStoriesErrorBody` | `shortcut/errors/list_iteration_stories_error.py` |

### client.iterations.list_iterations

- **Route**: `GET /api/v3/iterations`
- **Auth**: `api_token`
- **Signature**: `def list_iterations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[IterationSlim]`
- **Returns (raw)**: `ApiResult[list[IterationSlim], ListIterationsErrorBody]`
- **Error**: `ListIterationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `IterationSlim` | `shortcut/models/iteration_slim.py` |
| `ListIterationsErrorBody` | `shortcut/errors/list_iterations_error.py` |

### client.iterations.update_iteration

- **Route**: `PUT /api/v3/iterations/{iteration-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_iteration(iteration_public_id: int, body: UpdateIteration | UpdateIterationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `iteration_public_id`, `body`
- **Params**: `iteration_public_id` — path `iteration-public-id` · `body` — JSON body
- **Returns (parsed)**: `Iteration`
- **Returns (raw)**: `ApiResult[Iteration, UpdateIterationErrorBody]`
- **Error**: `UpdateIterationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateIteration` | `shortcut/models/update_iteration.py` |
| `UpdateIterationDict` | `shortcut/models/update_iteration.py` |
| `Iteration` | `shortcut/models/iteration.py` |
| `UpdateIterationErrorBody` | `shortcut/errors/update_iteration_error.py` |

