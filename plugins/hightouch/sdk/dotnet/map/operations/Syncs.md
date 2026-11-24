<!-- Generated file — do not edit; regenerated with the SDK. -->

# Syncs — operations

Accessor: `client.Syncs` · Source: `src/Hightouch/Api/Syncs.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApproveSyncDraft

- **Auth**: `options.BearerAuth`
- **Signature**: `ApproveSyncDraft(ApproveSyncDraftRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncId`, `DraftId`, `Body`
- **Returns**: `SyncDraft`
- **Error**: `ApiException<ApproveSyncDraftError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404, 413] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [409, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApproveSyncDraftRequest` | `src/Hightouch/Requests/Syncs/ApproveSyncDraftRequest.cs` |
| `ApproveSyncDraftInput` | `src/Hightouch/Models/ApproveSyncDraftInput.cs` |
| `SyncDraft` | `src/Hightouch/Models/SyncDraft.cs` |
| `ApproveSyncDraftError` | `src/Hightouch/Errors/ApproveSyncDraftError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### CreateSync

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateSync(CreateSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SyncsResponse1`
- **Error**: `ApiException<CreateSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [409, 422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSyncRequest` | `src/Hightouch/Requests/Syncs/CreateSyncRequest.cs` |
| `SyncCreate` | `src/Hightouch/Models/SyncCreate.cs` |
| `SyncsResponse1` | `src/Hightouch/Models/AnyOf/SyncsResponse1.cs` |
| `CreateSyncError` | `src/Hightouch/Errors/CreateSyncError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### DeleteSync

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteSync(DeleteSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncId`
- **Returns**: `SyncsResponse11`
- **Error**: `ApiException<DeleteSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [409, 422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSyncRequest` | `src/Hightouch/Requests/Syncs/DeleteSyncRequest.cs` |
| `SyncsResponse11` | `src/Hightouch/Models/AnyOf/SyncsResponse11.cs` |
| `DeleteSyncError` | `src/Hightouch/Errors/DeleteSyncError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### GetSync

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSync(GetSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncId`
- **Returns**: `Sync`
- **Error**: `ApiException<GetSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSyncRequest` | `src/Hightouch/Requests/Syncs/GetSyncRequest.cs` |
| `Sync` | `src/Hightouch/Models/Sync.cs` |
| `GetSyncError` | `src/Hightouch/Errors/GetSyncError.cs` |

### GetSyncDraft

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSyncDraft(GetSyncDraftRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncId`, `DraftId`
- **Returns**: `SyncDraftDetail`
- **Error**: `ApiException<GetSyncDraftError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSyncDraftRequest` | `src/Hightouch/Requests/Syncs/GetSyncDraftRequest.cs` |
| `SyncDraftDetail` | `src/Hightouch/Models/SyncDraftDetail.cs` |
| `GetSyncDraftError` | `src/Hightouch/Errors/GetSyncDraftError.cs` |

### ListDraftsForSync

- **Auth**: `options.BearerAuth`
- **Signature**: `ListDraftsForSync(ListDraftsForSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncId`
- **Query params (wire ← C#)**: `status` ← `Status`, `updatedSince` ← `UpdatedSince`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `SyncDraftList`
- **Error**: `ApiException<ListDraftsForSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDraftsForSyncRequest` | `src/Hightouch/Requests/Syncs/ListDraftsForSyncRequest.cs` |
| `SyncDraftStatus` | `src/Hightouch/Models/Enums/SyncDraftStatus.cs` |
| `SyncDraftList` | `src/Hightouch/Models/SyncDraftList.cs` |
| `ListDraftsForSyncError` | `src/Hightouch/Errors/ListDraftsForSyncError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### ListSync

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSync(ListSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `slug` ← `Slug`, `modelId` ← `ModelId`, `destinationId` ← `DestinationId`, `after` ← `After`, `before` ← `Before`, `offset` ← `Offset`, `limit` ← `Limit`, `orderBy` ← `OrderBy`
- **Returns**: `SyncsResponse`
- **Error**: `ApiException<ListSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSyncRequest` | `src/Hightouch/Requests/Syncs/ListSyncRequest.cs` |
| `OrderByHightouchDestinationsApi` | `src/Hightouch/Models/Enums/OrderByHightouchDestinationsApi.cs` |
| `SyncsResponse` | `src/Hightouch/Models/SyncsResponse.cs` |
| `ListSyncError` | `src/Hightouch/Errors/ListSyncError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### ListSyncDrafts

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSyncDrafts(ListSyncDraftsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `syncId` ← `SyncId`, `updatedSince` ← `UpdatedSince`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `SyncDraftList`
- **Error**: `ApiException<ListSyncDraftsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSyncDraftsRequest` | `src/Hightouch/Requests/Syncs/ListSyncDraftsRequest.cs` |
| `SyncDraftStatus` | `src/Hightouch/Models/Enums/SyncDraftStatus.cs` |
| `SyncDraftList` | `src/Hightouch/Models/SyncDraftList.cs` |
| `ListSyncDraftsError` | `src/Hightouch/Errors/ListSyncDraftsError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### ListSyncRuns

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSyncRuns(ListSyncRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncId`
- **Query params (wire ← C#)**: `runId` ← `RunId`, `after` ← `After`, `before` ← `Before`, `within` ← `Within`, `offset` ← `Offset`, `limit` ← `Limit`, `orderBy` ← `OrderBy`
- **Returns**: `SyncsRunsResponse`
- **Error**: `ApiException<ListSyncRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSyncRunsRequest` | `src/Hightouch/Requests/Syncs/ListSyncRunsRequest.cs` |
| `OrderBy1` | `src/Hightouch/Models/Enums/OrderBy1.cs` |
| `SyncsRunsResponse` | `src/Hightouch/Models/SyncsRunsResponse.cs` |
| `ListSyncRunsError` | `src/Hightouch/Errors/ListSyncRunsError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### RejectSyncDraft

- **Auth**: `options.BearerAuth`
- **Signature**: `RejectSyncDraft(RejectSyncDraftRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncId`, `DraftId`, `Body`
- **Returns**: `SyncDraft`
- **Error**: `ApiException<RejectSyncDraftError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404, 413] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [409, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RejectSyncDraftRequest` | `src/Hightouch/Requests/Syncs/RejectSyncDraftRequest.cs` |
| `RejectSyncDraftInput` | `src/Hightouch/Models/RejectSyncDraftInput.cs` |
| `SyncDraft` | `src/Hightouch/Models/SyncDraft.cs` |
| `RejectSyncDraftError` | `src/Hightouch/Errors/RejectSyncDraftError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### TriggerRun

- **Auth**: `options.BearerAuth`
- **Signature**: `TriggerRun(TriggerRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncId`
- **Returns**: `TriggerRunOutput`
- **Error**: `ApiException<TriggerRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerRunRequest` | `src/Hightouch/Requests/Syncs/TriggerRunRequest.cs` |
| `TriggerRunInput` | `src/Hightouch/Models/TriggerRunInput.cs` |
| `TriggerRunOutput` | `src/Hightouch/Models/TriggerRunOutput.cs` |
| `TriggerRunError` | `src/Hightouch/Errors/TriggerRunError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### TriggerRunCustom

- **Auth**: `options.BearerAuth`
- **Signature**: `TriggerRunCustom(TriggerRunCustomRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SyncsTriggerResponse`
- **Error**: `ApiException<TriggerRunCustomError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerRunCustomRequest` | `src/Hightouch/Requests/Syncs/TriggerRunCustomRequest.cs` |
| `TriggerRunCustomInput` | `src/Hightouch/Models/TriggerRunCustomInput.cs` |
| `SyncsTriggerResponse` | `src/Hightouch/Models/AnyOf/SyncsTriggerResponse.cs` |
| `TriggerRunCustomError` | `src/Hightouch/Errors/TriggerRunCustomError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### UpdateSync

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateSync(UpdateSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncId`, `Body`
- **Returns**: `SyncsResponse1`
- **Error**: `ApiException<UpdateSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSyncRequest` | `src/Hightouch/Requests/Syncs/UpdateSyncRequest.cs` |
| `SyncUpdate` | `src/Hightouch/Models/SyncUpdate.cs` |
| `SyncsResponse1` | `src/Hightouch/Models/AnyOf/SyncsResponse1.cs` |
| `UpdateSyncError` | `src/Hightouch/Errors/UpdateSyncError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

