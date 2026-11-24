<!-- Generated file — do not edit; regenerated with the SDK. -->

# Idr — operations

Accessor: `client.idr` · Source: `src/resources/idr.ts` · 4 operations · Request and error types: namespace `Idr`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listIdrRuns

- **Signature**: `listIdrRuns(request: Idr.ListIdrRunsRequest, options?: RequestOptions): ApiPromise<ListIdrRunsOutput, Idr.ListIdrRunsError>`
- **Wire**: `GET /idr/{graphId}/runs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListIdrRunsOutput`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Idr.ListIdrRunsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Idr.ListIdrRunsRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `graphId` | `path` | `string` | yes | — |
| `runId` | `query` | `string` | no | — |
| `after` | `query` | `Date` (date-time) | no | — |
| `before` | `query` | `Date` (date-time) | no | — |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |
| `orderBy` | `query` | `OrderByHightouchIdrApi` | no | `OrderByHightouchIdrApi.CreatedAt` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByHightouchIdrApi` | `orderByHightouchIdrApiSchema` | `src/models/order-by-hightouch-idr-api.ts` |
| `ListIdrRunsOutput` | `listIdrRunsOutputSchema` | `src/models/list-idr-runs-output.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### queueForReprocessing

- **Signature**: `queueForReprocessing(request: Idr.QueueForReprocessingRequest, options?: RequestOptions): ApiPromise<IdrQueueForReprocessingOutput, Idr.QueueForReprocessingError>`
- **Wire**: `POST /idr/{graphId}/queue-for-reprocessing`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdrQueueForReprocessingOutput`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Idr.QueueForReprocessingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Idr.QueueForReprocessingRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `graphId` | `path` | `string` | yes |
| `body` | `body` | `IdrQueueForReprocessingInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdrQueueForReprocessingInput` | `idrQueueForReprocessingInputSchema` | `src/models/idr-queue-for-reprocessing-input.ts` |
| `IdrQueueForReprocessingOutput` | `idrQueueForReprocessingOutputSchema` | `src/models/idr-queue-for-reprocessing-output.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### reprocessStatus

- **Signature**: `reprocessStatus(request: Idr.ReprocessStatusRequest, options?: RequestOptions): ApiPromise<IdrReprocessStatusOutput, Idr.ReprocessStatusError>`
- **Wire**: `GET /idr/{graphId}/reprocess-status/{requestId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IdrReprocessStatusOutput`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Idr.ReprocessStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Idr.ReprocessStatusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `graphId` | `path` | `string` | yes |
| `requestId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdrReprocessStatusOutput` | `idrReprocessStatusOutputSchema` | `src/models/idr-reprocess-status-output.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### triggerIdrRun

- **Signature**: `triggerIdrRun(request: Idr.TriggerIdrRunRequest, options?: RequestOptions): ApiPromise<TriggerRunIdrOutput, Idr.TriggerIdrRunError>`
- **Wire**: `POST /idr/{graphId}/trigger`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TriggerRunIdrOutput`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Idr.TriggerIdrRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Idr.TriggerIdrRunRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `graphId` | `path` | `string` | yes |
| `body` | `body` | `TriggerRunIdrInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerRunIdrInput` | `triggerRunIdrInputSchema` | `src/models/trigger-run-idr-input.ts` |
| `TriggerRunIdrOutput` | `triggerRunIdrOutputSchema` | `src/models/trigger-run-idr-output.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

