<!-- Generated file — do not edit; regenerated with the SDK. -->

# Labels — operations

Accessor: `client.labels` · Source: `shortcut/apis/labels.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.labels.create_label

- **Route**: `POST /api/v3/labels`
- **Auth**: `api_token`
- **Signature**: `def create_label(body: CreateLabelParams | CreateLabelParamsDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Label`
- **Returns (raw)**: `ApiResult[Label, CreateLabelErrorBody]`
- **Error**: `CreateLabelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateLabelParams` | `shortcut/models/create_label_params.py` |
| `CreateLabelParamsDict` | `shortcut/models/create_label_params.py` |
| `Label` | `shortcut/models/label.py` |
| `CreateLabelErrorBody` | `shortcut/errors/create_label_error.py` |

### client.labels.delete_label

- **Route**: `DELETE /api/v3/labels/{label-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_label(label_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `label_public_id`
- **Params**: `label_public_id` — path `label-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteLabelErrorBody]`
- **Error**: `DeleteLabelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteLabelErrorBody` | `shortcut/errors/delete_label_error.py` |

### client.labels.get_label

- **Route**: `GET /api/v3/labels/{label-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_label(label_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `label_public_id`
- **Params**: `label_public_id` — path `label-public-id`
- **Returns (parsed)**: `Label`
- **Returns (raw)**: `ApiResult[Label, GetLabelErrorBody]`
- **Error**: `GetLabelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Label` | `shortcut/models/label.py` |
| `GetLabelErrorBody` | `shortcut/errors/get_label_error.py` |

### client.labels.list_label_epics

- **Route**: `GET /api/v3/labels/{label-public-id}/epics`
- **Auth**: `api_token`
- **Signature**: `def list_label_epics(label_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `label_public_id`
- **Params**: `label_public_id` — path `label-public-id`
- **Returns (parsed)**: `list[EpicSlim]`
- **Returns (raw)**: `ApiResult[list[EpicSlim], ListLabelEpicsErrorBody]`
- **Error**: `ListLabelEpicsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EpicSlim` | `shortcut/models/epic_slim.py` |
| `ListLabelEpicsErrorBody` | `shortcut/errors/list_label_epics_error.py` |

### client.labels.list_label_stories

- **Route**: `GET /api/v3/labels/{label-public-id}/stories`
- **Auth**: `api_token`
- **Signature**: `def list_label_stories(label_public_id: int, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `label_public_id`
- **Params**: `label_public_id` — path `label-public-id` · `includes_description` — query
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], ListLabelStoriesErrorBody]`
- **Error**: `ListLabelStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `ListLabelStoriesErrorBody` | `shortcut/errors/list_label_stories_error.py` |

### client.labels.list_labels

- **Route**: `GET /api/v3/labels`
- **Auth**: `api_token`
- **Signature**: `def list_labels(*, slim: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `slim` — query
- **Returns (parsed)**: `list[Label]`
- **Returns (raw)**: `ApiResult[list[Label], ListLabelsErrorBody]`
- **Error**: `ListLabelsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Label` | `shortcut/models/label.py` |
| `ListLabelsErrorBody` | `shortcut/errors/list_labels_error.py` |

### client.labels.update_label

- **Route**: `PUT /api/v3/labels/{label-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_label(label_public_id: int, body: UpdateLabel | UpdateLabelDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `label_public_id`, `body`
- **Params**: `label_public_id` — path `label-public-id` · `body` — JSON body
- **Returns (parsed)**: `Label`
- **Returns (raw)**: `ApiResult[Label, UpdateLabelErrorBody]`
- **Error**: `UpdateLabelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateLabel` | `shortcut/models/update_label.py` |
| `UpdateLabelDict` | `shortcut/models/update_label.py` |
| `Label` | `shortcut/models/label.py` |
| `UpdateLabelErrorBody` | `shortcut/errors/update_label_error.py` |

