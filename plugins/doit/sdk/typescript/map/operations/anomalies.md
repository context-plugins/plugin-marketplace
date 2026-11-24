<!-- Generated file — do not edit; regenerated with the SDK. -->

# Anomalies — operations

Accessor: `client.anomalies` · Source: `src/resources/anomalies.ts` · 4 operations · Request and error types: namespace `Anomalies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAnomaly

- **Signature**: `getAnomaly(request: Anomalies.GetAnomalyRequest, options?: RequestOptions): ApiPromise<AnomaliesV1Response, Anomalies.GetAnomalyError>`
- **Wire**: `GET /anomalies/v1/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnomaliesV1Response`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Anomalies.GetAnomalyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Anomalies.GetAnomalyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnomaliesV1Response` | `anomaliesV1ResponseSchema` | `src/models/anomalies-v1-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAnomalyExplanation

- **Signature**: `getAnomalyExplanation(request: Anomalies.GetAnomalyExplanationRequest, options?: RequestOptions): ApiPromise<AnomaliesV1ExplanationResponse, Anomalies.GetAnomalyExplanationError>`
- **Wire**: `GET /anomalies/v1/{id}/explanation`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnomaliesV1ExplanationResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Anomalies.GetAnomalyExplanationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Anomalies.GetAnomalyExplanationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnomaliesV1ExplanationResponse` | `anomaliesV1ExplanationResponseSchema` | `src/models/anomalies-v1-explanation-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAnomalies

- **Signature**: `listAnomalies(request?: Anomalies.ListAnomaliesRequest, options?: RequestOptions): ApiPromise<AnomaliesResponse, Anomalies.ListAnomaliesError>`
- **Wire**: `GET /anomalies/v1`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnomaliesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Anomalies.ListAnomaliesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Anomalies.ListAnomaliesRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `minCreationTime` | `query` | `number` | no | — |
| `maxCreationTime` | `query` | `number` | no | — |
| `filter` | `query` | `string` | no | — |
| `sortBy` | `query` | `SortByDoiTAnomaliesApi` | no | `SortByDoiTAnomaliesApi.StartTime` |
| `sortOrder` | `query` | `SortOrder` | no | — |
| `maxResults` | `query` | `number` | no | — |
| `pageToken` | `query` | `string` | no | — |
| `includeNotifications` | `query` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortByDoiTAnomaliesApi` | `sortByDoiTAnomaliesApiSchema` | `src/models/sort-by-doi-tanomalies-api.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `AnomaliesResponse` | `anomaliesResponseSchema` | `src/models/anomalies-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patchAnomaly

- **Signature**: `patchAnomaly(request: Anomalies.PatchAnomalyRequest, options?: RequestOptions): ApiPromise<undefined, Anomalies.PatchAnomalyError>`
- **Wire**: `PATCH /anomalies/v1/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Anomalies.PatchAnomalyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Anomalies.PatchAnomalyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `AnomalyStatusUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnomalyStatusUpdate` | `anomalyStatusUpdateSchema` | `src/models/anomaly-status-update.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

