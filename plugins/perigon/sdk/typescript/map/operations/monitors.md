<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitors — operations

Accessor: `client.monitors` · Source: `src/resources/monitors.ts` · 10 operations · Request and error types: namespace `Monitors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `perigon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateMonitorApi

- **Signature**: `activateMonitorApi(request: Monitors.ActivateMonitorApiRequest, options?: RequestOptions): ApiPromise<MonitorResult, Monitors.ActivateMonitorApiError>`
- **Wire**: `POST /v1/api/monitors/{uuid}/activate`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.ActivateMonitorApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.ActivateMonitorApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorResult` | `monitorResultSchema` | `src/models/monitor-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### archiveMonitorApi

- **Signature**: `archiveMonitorApi(request: Monitors.ArchiveMonitorApiRequest, options?: RequestOptions): ApiPromise<MonitorResult, Monitors.ArchiveMonitorApiError>`
- **Wire**: `DELETE /v1/api/monitors/{uuid}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.ArchiveMonitorApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.ArchiveMonitorApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorResult` | `monitorResultSchema` | `src/models/monitor-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createMonitorApi

- **Signature**: `createMonitorApi(request: Monitors.CreateMonitorApiRequest, options?: RequestOptions): ApiPromise<MonitorResult, Monitors.CreateMonitorApiError>`
- **Wire**: `POST /v1/api/monitors`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.CreateMonitorApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.CreateMonitorApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SignalApiCreateBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignalApiCreateBody` | `signalApiCreateBodySchema` | `src/models/signal-api-create-body.ts` |
| `MonitorResult` | `monitorResultSchema` | `src/models/monitor-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getMonitorApi

- **Signature**: `getMonitorApi(request: Monitors.GetMonitorApiRequest, options?: RequestOptions): ApiPromise<MonitorResult, Monitors.GetMonitorApiError>`
- **Wire**: `GET /v1/api/monitors/{uuid}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MonitorResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.GetMonitorApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.GetMonitorApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorResult` | `monitorResultSchema` | `src/models/monitor-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listMonitorEventsApi

- **Signature**: `listMonitorEventsApi(request: Monitors.ListMonitorEventsApiRequest, options?: RequestOptions): ApiPromise<MonitorEventListResult, Monitors.ListMonitorEventsApiError>`
- **Wire**: `GET /v1/api/monitors/{uuid}/events`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MonitorEventListResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.ListMonitorEventsApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.ListMonitorEventsApiRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes | — |
| `sortBy` | `query` | `string` | yes | — |
| `sortOrder` | `query` | `SortOrder` | yes | — |
| `eventType` | `query` | `string` | no | — |
| `from` | `query` | `Date` (date-time) | no | — |
| `to` | `query` | `Date` (date-time) | no | — |
| `page` | `query` | `number` | no | `0` |
| `size` | `query` | `number` | no | `10` |
| `nulls` | `query` | `Nulls` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Nulls` | `nullsSchema` | `src/models/nulls.ts` |
| `MonitorEventListResult` | `monitorEventListResultSchema` | `src/models/monitor-event-list-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listMonitorNewslettersApi

- **Signature**: `listMonitorNewslettersApi(request: Monitors.ListMonitorNewslettersApiRequest, options?: RequestOptions): ApiPromise<MonitorNewsletterListResult, Monitors.ListMonitorNewslettersApiError>`
- **Wire**: `GET /v1/api/monitors/{uuid}/newsletters`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MonitorNewsletterListResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.ListMonitorNewslettersApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.ListMonitorNewslettersApiRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes | — |
| `sortBy` | `query` | `string` | yes | — |
| `sortOrder` | `query` | `SortOrder` | yes | — |
| `title` | `query` | `string` | no | — |
| `from` | `query` | `Date` (date-time) | no | — |
| `to` | `query` | `Date` (date-time) | no | — |
| `page` | `query` | `number` | no | `0` |
| `size` | `query` | `number` | no | `10` |
| `nulls` | `query` | `Nulls` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Nulls` | `nullsSchema` | `src/models/nulls.ts` |
| `MonitorNewsletterListResult` | `monitorNewsletterListResultSchema` | `src/models/monitor-newsletter-list-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listMonitorSummariesApi

- **Signature**: `listMonitorSummariesApi(request: Monitors.ListMonitorSummariesApiRequest, options?: RequestOptions): ApiPromise<MonitorSummaryListResult, Monitors.ListMonitorSummariesApiError>`
- **Wire**: `GET /v1/api/monitors/{uuid}/summary`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MonitorSummaryListResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.ListMonitorSummariesApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.ListMonitorSummariesApiRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes | — |
| `sortBy` | `query` | `string` | yes | — |
| `sortOrder` | `query` | `SortOrder` | yes | — |
| `from` | `query` | `Date` (date-time) | no | — |
| `to` | `query` | `Date` (date-time) | no | — |
| `page` | `query` | `number` | no | `0` |
| `size` | `query` | `number` | no | `10` |
| `nulls` | `query` | `Nulls` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Nulls` | `nullsSchema` | `src/models/nulls.ts` |
| `MonitorSummaryListResult` | `monitorSummaryListResultSchema` | `src/models/monitor-summary-list-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listMonitorsApi

- **Signature**: `listMonitorsApi(request: Monitors.ListMonitorsApiRequest, options?: RequestOptions): ApiPromise<MonitorListResult, Monitors.ListMonitorsApiError>`
- **Wire**: `GET /v1/api/monitors`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MonitorListResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.ListMonitorsApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.ListMonitorsApiRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sortBy` | `query` | `string` | yes | — |
| `sortOrder` | `query` | `SortOrder` | yes | — |
| `uuid` | `query` | `string[]` | no | — |
| `name` | `query` | `string` | no | — |
| `status` | `query` | `Status2[]` | no | — |
| `classificationType` | `query` | `ClassificationType3[]` | no | — |
| `page` | `query` | `number` | no | `0` |
| `size` | `query` | `number` | no | `10` |
| `nulls` | `query` | `Nulls` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Status2` | `status2Schema` | `src/models/status2.ts` |
| `ClassificationType3` | `classificationType3Schema` | `src/models/classification-type3.ts` |
| `Nulls` | `nullsSchema` | `src/models/nulls.ts` |
| `MonitorListResult` | `monitorListResultSchema` | `src/models/monitor-list-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### pauseMonitorApi

- **Signature**: `pauseMonitorApi(request: Monitors.PauseMonitorApiRequest, options?: RequestOptions): ApiPromise<MonitorResult, Monitors.PauseMonitorApiError>`
- **Wire**: `POST /v1/api/monitors/{uuid}/pause`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.PauseMonitorApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.PauseMonitorApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorResult` | `monitorResultSchema` | `src/models/monitor-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateMonitorApi

- **Signature**: `updateMonitorApi(request: Monitors.UpdateMonitorApiRequest, options?: RequestOptions): ApiPromise<MonitorResult, Monitors.UpdateMonitorApiError>`
- **Wire**: `PATCH /v1/api/monitors/{uuid}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Monitors.UpdateMonitorApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.UpdateMonitorApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes |
| `body` | `body` | `SignalApiUpdateBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignalApiUpdateBody` | `signalApiUpdateBodySchema` | `src/models/signal-api-update-body.ts` |
| `MonitorResult` | `monitorResultSchema` | `src/models/monitor-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

