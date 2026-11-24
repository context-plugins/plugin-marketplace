<!-- Generated file — do not edit; regenerated with the SDK. -->

# Syncs — operations

Accessor: `client.syncs` · Source: `hightouch/apis/syncs.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.syncs.approve_sync_draft

- **Route**: `POST /syncs/{syncId}/drafts/{draftId}/approve`
- **Auth**: `bearer_auth`
- **Signature**: `def approve_sync_draft(sync_id: float, draft_id: str, body: ApproveSyncDraftInput | ApproveSyncDraftInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_id`, `draft_id`, `body`
- **Params**: `sync_id` — path `syncId` · `draft_id` — path `draftId` · `body` — JSON body
- **Returns (parsed)**: `SyncDraft`
- **Returns (raw)**: `ApiResult[SyncDraft, ApproveSyncDraftErrorBody]`
- **Error**: `ApproveSyncDraftErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [409, 422] · `RawError` [401, 403, 404, 413, anything unmapped]

| Type | Source |
| --- | --- |
| `ApproveSyncDraftInput` | `hightouch/models/approve_sync_draft_input.py` |
| `ApproveSyncDraftInputDict` | `hightouch/models/approve_sync_draft_input.py` |
| `SyncDraft` | `hightouch/models/sync_draft.py` |
| `ApproveSyncDraftErrorBody` | `hightouch/errors/approve_sync_draft_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.syncs.create_sync

- **Route**: `POST /syncs`
- **Auth**: `bearer_auth`
- **Signature**: `def create_sync(body: SyncCreate | SyncCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SyncsResponse1`
- **Returns (raw)**: `ApiResult[SyncsResponse1, CreateSyncErrorBody]`
- **Error**: `CreateSyncErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [409, 422] · `InternalServerErrorOrStr` [500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncCreate` | `hightouch/models/sync_create.py` |
| `SyncCreateDict` | `hightouch/models/sync_create.py` |
| `SyncsResponse1` | `hightouch/models/unions/syncs_response1.py` |
| `CreateSyncErrorBody` | `hightouch/errors/create_sync_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.syncs.delete_sync

- **Route**: `DELETE /syncs/{syncId}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_sync(sync_id: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_id`
- **Params**: `sync_id` — path `syncId`
- **Returns (parsed)**: `SyncsResponse11`
- **Returns (raw)**: `ApiResult[SyncsResponse11, DeleteSyncErrorBody]`
- **Error**: `DeleteSyncErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [409, 422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncsResponse11` | `hightouch/models/unions/syncs_response11.py` |
| `DeleteSyncErrorBody` | `hightouch/errors/delete_sync_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.syncs.get_sync

- **Route**: `GET /syncs/{syncId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_sync(sync_id: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_id`
- **Params**: `sync_id` — path `syncId`
- **Returns (parsed)**: `Sync`
- **Returns (raw)**: `ApiResult[Sync, GetSyncErrorBody]`
- **Error**: `GetSyncErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Sync` | `hightouch/models/sync.py` |
| `GetSyncErrorBody` | `hightouch/errors/get_sync_error.py` |

### client.syncs.get_sync_draft

- **Route**: `GET /syncs/{syncId}/drafts/{draftId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_sync_draft(sync_id: float, draft_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_id`, `draft_id`
- **Params**: `sync_id` — path `syncId` · `draft_id` — path `draftId`
- **Returns (parsed)**: `SyncDraftDetail`
- **Returns (raw)**: `ApiResult[SyncDraftDetail, GetSyncDraftErrorBody]`
- **Error**: `GetSyncDraftErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncDraftDetail` | `hightouch/models/sync_draft_detail.py` |
| `GetSyncDraftErrorBody` | `hightouch/errors/get_sync_draft_error.py` |

### client.syncs.list_drafts_for_sync

- **Route**: `GET /syncs/{syncId}/drafts`
- **Auth**: `bearer_auth`
- **Signature**: `def list_drafts_for_sync(sync_id: float, *, status: SyncDraftStatusOrStr | None = None, updated_since: RFC3339DateTime | None = None, limit: float | None = 100.0, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_id`
- **Params**: `sync_id` — path `syncId` · `status` — query · `updated_since` — query `updatedSince` · `limit` — query · `cursor` — query
- **Returns (parsed)**: `SyncDraftList`
- **Returns (raw)**: `ApiResult[SyncDraftList, ListDraftsForSyncErrorBody]`
- **Error**: `ListDraftsForSyncErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncDraftStatusOrStr` | `hightouch/models/enums/sync_draft_status.py` |
| `SyncDraftList` | `hightouch/models/sync_draft_list.py` |
| `ListDraftsForSyncErrorBody` | `hightouch/errors/list_drafts_for_sync_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.syncs.list_sync

- **Route**: `GET /syncs`
- **Auth**: `bearer_auth`
- **Signature**: `def list_sync(*, slug: str | None = None, model_id: float | None = None, destination_id: float | None = None, after: RFC3339DateTime | None = None, before: RFC3339DateTime | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `slug` — query · `model_id` — query `modelId` · `destination_id` — query `destinationId` · `after` — query · `before` — query · `offset` — query · `limit` — query · `order_by` — query `orderBy`
- **Returns (parsed)**: `SyncsResponse`
- **Returns (raw)**: `ApiResult[SyncsResponse, ListSyncErrorBody]`
- **Error**: `ListSyncErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderByHightouchDestinationsApiOrStr` | `hightouch/models/enums/order_by_hightouch_destinations_api.py` |
| `SyncsResponse` | `hightouch/models/syncs_response.py` |
| `ListSyncErrorBody` | `hightouch/errors/list_sync_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.syncs.list_sync_drafts

- **Route**: `GET /syncs/drafts`
- **Auth**: `bearer_auth`
- **Signature**: `def list_sync_drafts(*, status: SyncDraftStatusOrStr | None = None, sync_id: float | None = None, updated_since: RFC3339DateTime | None = None, limit: float | None = 100.0, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `sync_id` — query `syncId` · `updated_since` — query `updatedSince` · `limit` — query · `cursor` — query
- **Returns (parsed)**: `SyncDraftList`
- **Returns (raw)**: `ApiResult[SyncDraftList, ListSyncDraftsErrorBody]`
- **Error**: `ListSyncDraftsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncDraftStatusOrStr` | `hightouch/models/enums/sync_draft_status.py` |
| `SyncDraftList` | `hightouch/models/sync_draft_list.py` |
| `ListSyncDraftsErrorBody` | `hightouch/errors/list_sync_drafts_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.syncs.list_sync_runs

- **Route**: `GET /syncs/{syncId}/runs`
- **Auth**: `bearer_auth`
- **Signature**: `def list_sync_runs(sync_id: float, *, run_id: float | None = None, after: RFC3339DateTime | None = None, before: RFC3339DateTime | None = None, within: float | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderBy1OrStr | None = OrderBy1.ID, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_id`
- **Params**: `sync_id` — path `syncId` · `run_id` — query `runId` · `after` — query · `before` — query · `within` — query · `offset` — query · `limit` — query · `order_by` — query `orderBy`
- **Returns (parsed)**: `SyncsRunsResponse`
- **Returns (raw)**: `ApiResult[SyncsRunsResponse, ListSyncRunsErrorBody]`
- **Error**: `ListSyncRunsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderBy1OrStr` | `hightouch/models/enums/order_by1.py` |
| `SyncsRunsResponse` | `hightouch/models/syncs_runs_response.py` |
| `ListSyncRunsErrorBody` | `hightouch/errors/list_sync_runs_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.syncs.reject_sync_draft

- **Route**: `POST /syncs/{syncId}/drafts/{draftId}/reject`
- **Auth**: `bearer_auth`
- **Signature**: `def reject_sync_draft(sync_id: float, draft_id: str, body: RejectSyncDraftInput | RejectSyncDraftInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_id`, `draft_id`, `body`
- **Params**: `sync_id` — path `syncId` · `draft_id` — path `draftId` · `body` — JSON body
- **Returns (parsed)**: `SyncDraft`
- **Returns (raw)**: `ApiResult[SyncDraft, RejectSyncDraftErrorBody]`
- **Error**: `RejectSyncDraftErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [409, 422] · `RawError` [401, 403, 404, 413, anything unmapped]

| Type | Source |
| --- | --- |
| `RejectSyncDraftInput` | `hightouch/models/reject_sync_draft_input.py` |
| `RejectSyncDraftInputDict` | `hightouch/models/reject_sync_draft_input.py` |
| `SyncDraft` | `hightouch/models/sync_draft.py` |
| `RejectSyncDraftErrorBody` | `hightouch/errors/reject_sync_draft_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.syncs.trigger_run

- **Route**: `POST /syncs/{syncId}/trigger`
- **Auth**: `bearer_auth`
- **Signature**: `def trigger_run(sync_id: str, *, body: TriggerRunInput | TriggerRunInputDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_id`
- **Params**: `sync_id` — path `syncId` · `body` — JSON body
- **Returns (parsed)**: `TriggerRunOutput`
- **Returns (raw)**: `ApiResult[TriggerRunOutput, TriggerRunErrorBody]`
- **Error**: `TriggerRunErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `TriggerRunInput` | `hightouch/models/trigger_run_input.py` |
| `TriggerRunInputDict` | `hightouch/models/trigger_run_input.py` |
| `TriggerRunOutput` | `hightouch/models/trigger_run_output.py` |
| `TriggerRunErrorBody` | `hightouch/errors/trigger_run_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.syncs.trigger_run_custom

- **Route**: `POST /syncs/trigger`
- **Auth**: `bearer_auth`
- **Signature**: `def trigger_run_custom(body: TriggerRunCustomInput | TriggerRunCustomInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SyncsTriggerResponse`
- **Returns (raw)**: `ApiResult[SyncsTriggerResponse, TriggerRunCustomErrorBody]`
- **Error**: `TriggerRunCustomErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `TriggerRunCustomInput` | `hightouch/models/trigger_run_custom_input.py` |
| `TriggerRunCustomInputDict` | `hightouch/models/trigger_run_custom_input.py` |
| `SyncsTriggerResponse` | `hightouch/models/unions/syncs_trigger_response.py` |
| `TriggerRunCustomErrorBody` | `hightouch/errors/trigger_run_custom_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.syncs.update_sync

- **Route**: `PATCH /syncs/{syncId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_sync(sync_id: float, body: SyncUpdate | SyncUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_id`, `body`
- **Params**: `sync_id` — path `syncId` · `body` — JSON body
- **Returns (parsed)**: `SyncsResponse1`
- **Returns (raw)**: `ApiResult[SyncsResponse1, UpdateSyncErrorBody]`
- **Error**: `UpdateSyncErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncUpdate` | `hightouch/models/sync_update.py` |
| `SyncUpdateDict` | `hightouch/models/sync_update.py` |
| `SyncsResponse1` | `hightouch/models/unions/syncs_response1.py` |
| `UpdateSyncErrorBody` | `hightouch/errors/update_sync_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

