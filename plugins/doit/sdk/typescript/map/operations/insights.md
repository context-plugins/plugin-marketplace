<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 9 operations · Request and error types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteInsightResult

- **Signature**: `deleteInsightResult(request: Insights.DeleteInsightResultRequest, options?: RequestOptions): ApiPromise<undefined, Insights.DeleteInsightResultError>`
- **Wire**: `DELETE /insights/v1/results/source/{sourceID}/insight/{insightKey}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Insights.DeleteInsightResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.DeleteInsightResultRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sourceId` | `path` | `sourceID` | `SourceId` | yes |
| `insightKey` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceId` | `sourceIdSchema` | `src/models/source-id.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteInsightResults

- **Signature**: `deleteInsightResults(request: Insights.DeleteInsightResultsRequest, options?: RequestOptions): ApiPromise<undefined, Insights.DeleteInsightResultsError>`
- **Wire**: `DELETE /insights/v1/results`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Insights.DeleteInsightResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.DeleteInsightResultsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `insightKey` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInsightResourceResults

- **Signature**: `getInsightResourceResults(request: Insights.GetInsightResourceResultsRequest, options?: RequestOptions): ApiPromise<ResourceResultsResponse, Insights.GetInsightResourceResultsError>`
- **Wire**: `GET /insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResourceResultsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Insights.GetInsightResourceResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetInsightResourceResultsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `sourceId` | `path` | `sourceID` | `string` | yes | — |
| `insightKey` | `path` | — | `string` | yes | — |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `1000` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceResultsResponse` | `resourceResultsResponseSchema` | `src/models/resource-results-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInsightResult

- **Signature**: `getInsightResult(request: Insights.GetInsightResultRequest, options?: RequestOptions): ApiPromise<InsightResponse, Insights.GetInsightResultError>`
- **Wire**: `GET /insights/v1/results/source/{sourceID}/insight/{insightKey}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Insights.GetInsightResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetInsightResultRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sourceId` | `path` | `sourceID` | `string` | yes |
| `insightKey` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightResponse` | `insightResponseSchema` | `src/models/insight-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInsightResults

- **Signature**: `getInsightResults(request?: Insights.GetInsightResultsRequest, options?: RequestOptions): ApiPromise<ResultsBody, Insights.GetInsightResultsError>`
- **Wire**: `GET /insights/v1/results`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResultsBody`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Insights.GetInsightResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetInsightResultsRequest` (11):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `searchTerm` | `query` | `string` | no | — |
| `displayStatus` | `query` | `DisplayStatus1[]` | no | — |
| `category` | `query` | `Category1` | no | — |
| `cloudProvider` | `query` | `string` | no | — |
| `source` | `query` | `string[]` | no | — |
| `priority` | `query` | `Priority1[]` | no | — |
| `tag` | `query` | `string[]` | no | — |
| `easyWin` | `query` | `boolean` | no | — |
| `cloudFlows` | `query` | `boolean` | no | — |
| `pageToken` | `query` | `string` | no | — |
| `maxResults` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisplayStatus1` | `displayStatus1Schema` | `src/models/display-status1.ts` |
| `Category1` | `category1Schema` | `src/models/category1.ts` |
| `Priority1` | `priority1Schema` | `src/models/priority1.ts` |
| `ResultsBody` | `resultsBodySchema` | `src/models/results-body.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postInsightResourceResults

- **Signature**: `postInsightResourceResults(request: Insights.PostInsightResourceResultsRequest, options?: RequestOptions): ApiPromise<ResourceResultsResponse, Insights.PostInsightResourceResultsError>`
- **Wire**: `POST /insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResourceResultsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Insights.PostInsightResourceResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.PostInsightResourceResultsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `sourceId` | `path` | `sourceID` | `SourceId` | yes | — |
| `insightKey` | `path` | — | `string` | yes | — |
| `maxResults` | `query` | — | `number` | no | `1000` |
| `body` | `body` | — | `CreateResourceResultsBody` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceId` | `sourceIdSchema` | `src/models/source-id.ts` |
| `CreateResourceResultsBody` | `createResourceResultsBodySchema` | `src/models/create-resource-results-body.ts` |
| `ResourceResultsResponse` | `resourceResultsResponseSchema` | `src/models/resource-results-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postInsightResult

- **Signature**: `postInsightResult(request: Insights.PostInsightResultRequest, options?: RequestOptions): ApiPromise<InsightResponse, Insights.PostInsightResultError>`
- **Wire**: `POST /insights/v1/results/source/{sourceID}/insight/{insightKey}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Insights.PostInsightResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.PostInsightResultRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sourceId` | `path` | `sourceID` | `SourceId` | yes |
| `insightKey` | `path` | — | `string` | yes |
| `body` | `body` | — | `InsightMetadataRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceId` | `sourceIdSchema` | `src/models/source-id.ts` |
| `InsightMetadataRequest` | `insightMetadataRequestSchema` | `src/models/insight-metadata-request.ts` |
| `InsightResponse` | `insightResponseSchema` | `src/models/insight-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postInsightResults

- **Signature**: `postInsightResults(request?: Insights.PostInsightResultsRequest, options?: RequestOptions): ApiPromise<ResultsError[], Insights.PostInsightResultsError>`
- **Wire**: `POST /insights/v1/results`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResultsError[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Insights.PostInsightResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.PostInsightResultsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateResultsBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateResultsBody` | `createResultsBodySchema` | `src/models/create-results-body.ts` |
| `ResultsError` | `resultsErrorSchema` | `src/models/results-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateInsightStatus

- **Signature**: `updateInsightStatus(request: Insights.UpdateInsightStatusRequest, options?: RequestOptions): ApiPromise<undefined, Insights.UpdateInsightStatusError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /insights/v1/results/source/{sourceID}/insight/{insightKey}/status`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Insights.UpdateInsightStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.UpdateInsightStatusRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sourceId` | `path` | `sourceID` | `SourceId` | yes |
| `insightKey` | `path` | — | `string` | yes |
| `body` | `body` | — | `UpdateStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourceId` | `sourceIdSchema` | `src/models/source-id.ts` |
| `UpdateStatusRequest` | `updateStatusRequestSchema` | `src/models/update-status-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

