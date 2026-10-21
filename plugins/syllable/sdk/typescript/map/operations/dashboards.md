<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dashboards — operations

Accessor: `client.dashboards` · Source: `src/resources/dashboards.ts` · 6 operations · Request and error types: namespace `Dashboards`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postGetDashboard

- **Signature**: `postGetDashboard(request: Dashboards.PostGetDashboardRequest, options?: RequestOptions): ApiPromise<DashboardTokenResponse, Dashboards.PostGetDashboardError>`
- **Wire**: `POST /api/v1/dashboards/fetch_info`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DashboardTokenResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Dashboards.PostGetDashboardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dashboards.PostGetDashboardRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dashboardName` | `query` | `dashboard_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DashboardTokenResponse` | `dashboardTokenResponseSchema` | `src/models/dashboard-token-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### postListDashboard

- **Signature**: `postListDashboard(request: Dashboards.PostListDashboardRequest, options?: RequestOptions): ApiPromise<ListResponseDashboardResponse, Dashboards.PostListDashboardError>`
- **Wire**: `POST /api/v1/dashboards/list`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListResponseDashboardResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Dashboards.PostListDashboardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dashboards.PostListDashboardRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `DashboardProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy312` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields24` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `DashboardProperties` | `dashboardPropertiesSchema` | `src/models/dashboard-properties.ts` |
| `OrderBy312` | `orderBy312Schema` | `src/models/unions/order-by312.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields24` | `fields24Schema` | `src/models/unions/fields24.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseDashboardResponse` | `listResponseDashboardResponseSchema` | `src/models/list-response-dashboard-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### postSessionEventsDashboard

- **Signature**: `postSessionEventsDashboard(options?: RequestOptions): ApiPromise<Dashboard, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v1/dashboards/session_events`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Dashboard`
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Dashboard` | `dashboardSchema` | `src/models/dashboard.ts` |

### postSessionSummaryDashboard

- **Signature**: `postSessionSummaryDashboard(options?: RequestOptions): ApiPromise<Dashboard, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v1/dashboards/session_summary`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Dashboard`
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Dashboard` | `dashboardSchema` | `src/models/dashboard.ts` |

### postSessionTransfersDashboard

- **Signature**: `postSessionTransfersDashboard(options?: RequestOptions): ApiPromise<Dashboard, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v1/dashboards/session_transfers`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Dashboard`
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Dashboard` | `dashboardSchema` | `src/models/dashboard.ts` |

### postSessionsDashboard

- **Signature**: `postSessionsDashboard(options?: RequestOptions): ApiPromise<Dashboard, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v1/dashboards/sessions`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Dashboard`
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Dashboard` | `dashboardSchema` | `src/models/dashboard.ts` |

