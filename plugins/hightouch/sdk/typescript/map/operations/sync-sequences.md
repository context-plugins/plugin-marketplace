<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncSequences — operations

Accessor: `client.syncSequences` · Source: `src/resources/sync-sequences.ts` · 2 operations · Request and error types: namespace `SyncSequences`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSyncSequenceRun

- **Signature**: `getSyncSequenceRun(request: SyncSequences.GetSyncSequenceRunRequest, options?: RequestOptions): ApiPromise<SyncSequenceStatusOutput, SyncSequences.GetSyncSequenceRunError>`
- **Wire**: `GET /sync-sequences/runs/{syncSequenceRunId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncSequenceStatusOutput`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `SyncSequences.GetSyncSequenceRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SyncSequences.GetSyncSequenceRunRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncSequenceRunId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncSequenceStatusOutput` | `syncSequenceStatusOutputSchema` | `src/models/sync-sequence-status-output.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### triggerSequenceRun

- **Signature**: `triggerSequenceRun(request: SyncSequences.TriggerSequenceRunRequest, options?: RequestOptions): ApiPromise<TriggerSequenceRunOutput, SyncSequences.TriggerSequenceRunError>`
- **Wire**: `POST /sync-sequences/{syncSequenceId}/trigger`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TriggerSequenceRunOutput`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `SyncSequences.TriggerSequenceRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SyncSequences.TriggerSequenceRunRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `syncSequenceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerSequenceRunOutput` | `triggerSequenceRunOutputSchema` | `src/models/trigger-sequence-run-output.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

