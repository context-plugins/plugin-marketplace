<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `src/resources/analytics.ts` · 2 operations · Request and error types: namespace `Analytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getConnectionAnalytics

- **Signature**: `getConnectionAnalytics(request: Analytics.GetConnectionAnalyticsRequest, options?: RequestOptions): ApiPromise<ConnectionAnalyticsResponse, Analytics.GetConnectionAnalyticsError>`
- **Wire**: `GET /analytics/connections`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectionAnalyticsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Analytics.GetConnectionAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"error401"` [401] no body · `"errorList2"` [403] `ErrorList` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.GetConnectionAnalyticsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `interval` | `query` | `Interval` | yes |
| `fromDate` | `query` | `string` (date) | no |
| `toDate` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Interval` | `intervalSchema` | `src/models/interval.ts` |
| `ConnectionAnalyticsResponse` | `connectionAnalyticsResponseSchema` | `src/models/connection-analytics-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getUserAnalytics

- **Signature**: `getUserAnalytics(request: Analytics.GetUserAnalyticsRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, Analytics.GetUserAnalyticsError>`
- **Wire**: `GET /analytics/users`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Analytics.GetUserAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"error401"` [401] no body · `"errorList2"` [403] `ErrorList` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.GetUserAnalyticsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `interval` | `query` | `Interval` | yes |
| `fromDate` | `query` | `string` (date) | no |
| `toDate` | `query` | `string` (date) | no |
| `connectionType` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Interval` | `intervalSchema` | `src/models/interval.ts` |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

