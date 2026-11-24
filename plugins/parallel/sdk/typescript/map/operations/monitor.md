<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitor — operations

Accessor: `client.monitor` · Source: `src/resources/monitor.ts` · 7 operations · Request and error types: namespace `Monitor`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `parallel`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelMonitorV1MonitorsMonitorIdCancelPost

- **Signature**: `cancelMonitorV1MonitorsMonitorIdCancelPost(request: Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostRequest, options?: RequestOptions): ApiPromise<MonitorResponse, Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostError>`
- **Wire**: `POST /v1/monitors/{monitor_id}/cancel`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.CancelMonitorV1MonitorsMonitorIdCancelPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `monitorId` | `path` | `monitor_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorResponse` | `monitorResponseSchema` | `src/models/monitor-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createMonitorV1MonitorsPost

- **Signature**: `createMonitorV1MonitorsPost(request: Monitor.CreateMonitorV1MonitorsPostRequest, options?: RequestOptions): ApiPromise<MonitorResponse, Monitor.CreateMonitorV1MonitorsPostError>`
- **Wire**: `POST /v1/monitors`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Monitor.CreateMonitorV1MonitorsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.CreateMonitorV1MonitorsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateMonitorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMonitorRequest` | `createMonitorRequestSchema` | `src/models/create-monitor-request.ts` |
| `MonitorResponse` | `monitorResponseSchema` | `src/models/monitor-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listMonitorEventsV1MonitorsMonitorIdEventsGet

- **Signature**: `listMonitorEventsV1MonitorsMonitorIdEventsGet(request: Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest, options?: RequestOptions): ApiPromise<PaginatedMonitorEvents, Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetError>`
- **Wire**: `GET /v1/monitors/{monitor_id}/events`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedMonitorEvents`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `monitorId` | `path` | `monitor_id` | `string` | yes | — |
| `eventGroupId` | `query` | `event_group_id` | `EventGroupId` | no | — |
| `cursor` | `query` | — | `Cursor1` | no | — |
| `limit` | `query` | — | `Limit1` | no | — |
| `includeCompletions` | `query` | `include_completions` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventGroupId` | `eventGroupIdSchema` | `src/models/unions/event-group-id.ts` |
| `Cursor1` | `cursor1Schema` | `src/models/unions/cursor1.ts` |
| `Limit1` | `limit1Schema` | `src/models/unions/limit1.ts` |
| `PaginatedMonitorEvents` | `paginatedMonitorEventsSchema` | `src/models/paginated-monitor-events.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listMonitorsV1MonitorsGet

- **Signature**: `listMonitorsV1MonitorsGet(request?: Monitor.ListMonitorsV1MonitorsGetRequest, options?: RequestOptions): ApiPromise<PaginatedMonitorResponse, Monitor.ListMonitorsV1MonitorsGetError>`
- **Wire**: `GET /v1/monitors`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedMonitorResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Monitor.ListMonitorsV1MonitorsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.ListMonitorsV1MonitorsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cursor` | `query` | `Cursor` | no |
| `limit` | `query` | `Limit` | no |
| `type` | `query` | `Type5VariantCchzdo` | no |
| `status` | `query` | `Status11` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `Type5VariantCchzdo` | `type5VariantCchzdoSchema` | `src/models/unions/type5-variant-cchzdo.ts` |
| `Status11` | `status11Schema` | `src/models/unions/status11.ts` |
| `PaginatedMonitorResponse` | `paginatedMonitorResponseSchema` | `src/models/paginated-monitor-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### retrieveMonitorV1MonitorsMonitorIdGet

- **Signature**: `retrieveMonitorV1MonitorsMonitorIdGet(request: Monitor.RetrieveMonitorV1MonitorsMonitorIdGetRequest, options?: RequestOptions): ApiPromise<MonitorResponse, Monitor.RetrieveMonitorV1MonitorsMonitorIdGetError>`
- **Wire**: `GET /v1/monitors/{monitor_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MonitorResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Monitor.RetrieveMonitorV1MonitorsMonitorIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.RetrieveMonitorV1MonitorsMonitorIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `monitorId` | `path` | `monitor_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorResponse` | `monitorResponseSchema` | `src/models/monitor-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### triggerMonitorRunV1MonitorsMonitorIdTriggerPost

- **Signature**: `triggerMonitorRunV1MonitorsMonitorIdTriggerPost(request: Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest, options?: RequestOptions): ApiPromise<undefined, Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError>`
- **Wire**: `POST /v1/monitors/{monitor_id}/trigger`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `monitorId` | `path` | `monitor_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateMonitorV1MonitorsMonitorIdUpdatePost

- **Signature**: `updateMonitorV1MonitorsMonitorIdUpdatePost(request: Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest, options?: RequestOptions): ApiPromise<MonitorResponse, Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostError>`
- **Wire**: `POST /v1/monitors/{monitor_id}/update`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitor.UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `monitorId` | `path` | `monitor_id` | `string` | yes |
| `body` | `body` | — | `UpdateMonitorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateMonitorRequest` | `updateMonitorRequestSchema` | `src/models/update-monitor-request.ts` |
| `MonitorResponse` | `monitorResponseSchema` | `src/models/monitor-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

