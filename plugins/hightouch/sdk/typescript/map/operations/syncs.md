<!-- Generated file — do not edit; regenerated with the SDK. -->

# Syncs — operations

Accessor: `client.syncs` · Source: `src/resources/syncs.ts` · 13 operations · Request and error types: namespace `Syncs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### approveSyncDraft

- **Signature**: `approveSyncDraft(request: Syncs.ApproveSyncDraftRequest, options?: RequestOptions): ApiPromise<SyncDraft, Syncs.ApproveSyncDraftError>`
- **Wire**: `POST /syncs/{syncId}/drafts/{draftId}/approve`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncDraft`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.ApproveSyncDraftError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [409] `ValidateErrorJson` · `"error413"` [413] no body · `"validateErrorJson2"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.ApproveSyncDraftRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncId` | `path` | `number` | yes |
| `draftId` | `path` | `string` | yes |
| `body` | `body` | `ApproveSyncDraftInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApproveSyncDraftInput` | `approveSyncDraftInputSchema` | `src/models/approve-sync-draft-input.ts` |
| `SyncDraft` | `syncDraftSchema` | `src/models/sync-draft.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### createSync

- **Signature**: `createSync(request: Syncs.CreateSyncRequest, options?: RequestOptions): ApiPromise<SyncsResponse1, Syncs.CreateSyncError>`
- **Wire**: `POST /syncs`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.CreateSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"validateErrorJson"` [409] `ValidateErrorJson` · `"validateErrorJson2"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.CreateSyncRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SyncCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncCreate` | `syncCreateSchema` | `src/models/sync-create.ts` |
| `SyncsResponse1` | `syncsResponse1Schema` | `src/models/unions/syncs-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### deleteSync

- **Signature**: `deleteSync(request: Syncs.DeleteSyncRequest, options?: RequestOptions): ApiPromise<SyncsResponse11, Syncs.DeleteSyncError>`
- **Wire**: `DELETE /syncs/{syncId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncsResponse11`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.DeleteSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [409] `ValidateErrorJson` · `"validateErrorJson2"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.DeleteSyncRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncsResponse11` | `syncsResponse11Schema` | `src/models/unions/syncs-response11.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### getSync

- **Signature**: `getSync(request: Syncs.GetSyncRequest, options?: RequestOptions): ApiPromise<Sync, Syncs.GetSyncError>`
- **Wire**: `GET /syncs/{syncId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sync`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.GetSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.GetSyncRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sync` | `syncSchema` | `src/models/sync.ts` |

### getSyncDraft

- **Signature**: `getSyncDraft(request: Syncs.GetSyncDraftRequest, options?: RequestOptions): ApiPromise<SyncDraftDetail, Syncs.GetSyncDraftError>`
- **Wire**: `GET /syncs/{syncId}/drafts/{draftId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncDraftDetail`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.GetSyncDraftError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.GetSyncDraftRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncId` | `path` | `number` | yes |
| `draftId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncDraftDetail` | `syncDraftDetailSchema` | `src/models/sync-draft-detail.ts` |

### listDraftsForSync

- **Signature**: `listDraftsForSync(request: Syncs.ListDraftsForSyncRequest, options?: RequestOptions): ApiPromise<SyncDraftList, Syncs.ListDraftsForSyncError>`
- **Wire**: `GET /syncs/{syncId}/drafts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncDraftList`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.ListDraftsForSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.ListDraftsForSyncRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `syncId` | `path` | `number` | yes | — |
| `status` | `query` | `SyncDraftStatus` | no | — |
| `updatedSince` | `query` | `Date` (date-time) | no | — |
| `limit` | `query` | `number` | no | `100` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncDraftStatus` | `syncDraftStatusSchema` | `src/models/sync-draft-status.ts` |
| `SyncDraftList` | `syncDraftListSchema` | `src/models/sync-draft-list.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### listSync

- **Signature**: `listSync(request?: Syncs.ListSyncRequest, options?: RequestOptions): ApiPromise<SyncsResponse, Syncs.ListSyncError>`
- **Wire**: `GET /syncs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncsResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.ListSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.ListSyncRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `slug` | `query` | `string` | no | — |
| `modelId` | `query` | `number` | no | — |
| `destinationId` | `query` | `number` | no | — |
| `after` | `query` | `Date` (date-time) | no | — |
| `before` | `query` | `Date` (date-time) | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `100` |
| `orderBy` | `query` | `OrderByHightouchDestinationsApi` | no | `OrderByHightouchDestinationsApi.Id` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByHightouchDestinationsApi` | `orderByHightouchDestinationsApiSchema` | `src/models/order-by-hightouch-destinations-api.ts` |
| `SyncsResponse` | `syncsResponseSchema` | `src/models/syncs-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### listSyncDrafts

- **Signature**: `listSyncDrafts(request?: Syncs.ListSyncDraftsRequest, options?: RequestOptions): ApiPromise<SyncDraftList, Syncs.ListSyncDraftsError>`
- **Wire**: `GET /syncs/drafts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncDraftList`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.ListSyncDraftsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.ListSyncDraftsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `status` | `query` | `SyncDraftStatus` | no | — |
| `syncId` | `query` | `number` | no | — |
| `updatedSince` | `query` | `Date` (date-time) | no | — |
| `limit` | `query` | `number` | no | `100` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncDraftStatus` | `syncDraftStatusSchema` | `src/models/sync-draft-status.ts` |
| `SyncDraftList` | `syncDraftListSchema` | `src/models/sync-draft-list.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### listSyncRuns

- **Signature**: `listSyncRuns(request: Syncs.ListSyncRunsRequest, options?: RequestOptions): ApiPromise<SyncsRunsResponse, Syncs.ListSyncRunsError>`
- **Wire**: `GET /syncs/{syncId}/runs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncsRunsResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.ListSyncRunsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.ListSyncRunsRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `syncId` | `path` | `number` | yes | — |
| `runId` | `query` | `number` | no | — |
| `after` | `query` | `Date` (date-time) | no | — |
| `before` | `query` | `Date` (date-time) | no | — |
| `within` | `query` | `number` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `100` |
| `orderBy` | `query` | `OrderBy1` | no | `OrderBy1.Id` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderBy1` | `orderBy1Schema` | `src/models/order-by1.ts` |
| `SyncsRunsResponse` | `syncsRunsResponseSchema` | `src/models/syncs-runs-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### rejectSyncDraft

- **Signature**: `rejectSyncDraft(request: Syncs.RejectSyncDraftRequest, options?: RequestOptions): ApiPromise<SyncDraft, Syncs.RejectSyncDraftError>`
- **Wire**: `POST /syncs/{syncId}/drafts/{draftId}/reject`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncDraft`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.RejectSyncDraftError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [409] `ValidateErrorJson` · `"error413"` [413] no body · `"validateErrorJson2"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.RejectSyncDraftRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncId` | `path` | `number` | yes |
| `draftId` | `path` | `string` | yes |
| `body` | `body` | `RejectSyncDraftInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RejectSyncDraftInput` | `rejectSyncDraftInputSchema` | `src/models/reject-sync-draft-input.ts` |
| `SyncDraft` | `syncDraftSchema` | `src/models/sync-draft.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### triggerRun

- **Signature**: `triggerRun(request: Syncs.TriggerRunRequest, options?: RequestOptions): ApiPromise<TriggerRunOutput, Syncs.TriggerRunError>`
- **Wire**: `POST /syncs/{syncId}/trigger`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TriggerRunOutput`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.TriggerRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.TriggerRunRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncId` | `path` | `string` | yes |
| `body` | `body` | `TriggerRunInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerRunInput` | `triggerRunInputSchema` | `src/models/trigger-run-input.ts` |
| `TriggerRunOutput` | `triggerRunOutputSchema` | `src/models/trigger-run-output.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### triggerRunCustom

- **Signature**: `triggerRunCustom(request: Syncs.TriggerRunCustomRequest, options?: RequestOptions): ApiPromise<SyncsTriggerResponse, Syncs.TriggerRunCustomError>`
- **Wire**: `POST /syncs/trigger`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncsTriggerResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.TriggerRunCustomError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.TriggerRunCustomRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TriggerRunCustomInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerRunCustomInput` | `triggerRunCustomInputSchema` | `src/models/trigger-run-custom-input.ts` |
| `SyncsTriggerResponse` | `syncsTriggerResponseSchema` | `src/models/unions/syncs-trigger-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### updateSync

- **Signature**: `updateSync(request: Syncs.UpdateSyncRequest, options?: RequestOptions): ApiPromise<SyncsResponse1, Syncs.UpdateSyncError>`
- **Wire**: `PATCH /syncs/{syncId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Syncs.UpdateSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Syncs.UpdateSyncRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncId` | `path` | `number` | yes |
| `body` | `body` | `SyncUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncUpdate` | `syncUpdateSchema` | `src/models/sync-update.ts` |
| `SyncsResponse1` | `syncsResponse1Schema` | `src/models/unions/syncs-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

