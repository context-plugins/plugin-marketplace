<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stats — operations

Accessor: `client.stats` · Source: `src/resources/stats.ts` · 7 operations · Request and error types: namespace `Stats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `statable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### currentVisitors

- **Signature**: `currentVisitors(request?: Stats.CurrentVisitorsRequest, options?: RequestOptions): ApiPromise<CurrentVisitorsResponse, Stats.CurrentVisitorsError>`
- **Wire**: `GET /current-visitors`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CurrentVisitorsResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Stats.CurrentVisitorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stats.CurrentVisitorsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `siteId` | `query` | `site_id` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CurrentVisitorsResponse` | `currentVisitorsResponseSchema` | `src/models/current-visitors-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSubscription

- **Signature**: `getSubscription(options?: RequestOptions): ApiPromise<SubscriptionResponse, Stats.GetSubscriptionError>`
- **Wire**: `GET /subscription`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Stats.GetSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionResponse` | `subscriptionResponseSchema` | `src/models/subscription-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFunnels

- **Signature**: `listFunnels(request?: Stats.ListFunnelsRequest, options?: RequestOptions): ApiPromise<FunnelsResponse, Stats.ListFunnelsError>`
- **Wire**: `GET /funnels`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FunnelsResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Stats.ListFunnelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stats.ListFunnelsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `siteId` | `query` | `site_id` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunnelsResponse` | `funnelsResponseSchema` | `src/models/funnels-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listPropKeys

- **Signature**: `listPropKeys(request?: Stats.ListPropKeysRequest, options?: RequestOptions): ApiPromise<PropsResponse, Stats.ListPropKeysError>`
- **Wire**: `GET /props`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PropsResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Stats.ListPropKeysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stats.ListPropKeysRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `siteId` | `query` | `site_id` | `number` | no |
| `dateRange` | `query` | `date_range` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PropsResponse` | `propsResponseSchema` | `src/models/props-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listSites

- **Signature**: `listSites(request?: Stats.ListSitesRequest, options?: RequestOptions): ApiPromise<SitesResponse, Stats.ListSitesError>`
- **Wire**: `GET /sites`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SitesResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Stats.ListSitesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stats.ListSitesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dateRange` | `query` | `date_range` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SitesResponse` | `sitesResponseSchema` | `src/models/sites-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### query

- **Signature**: `query(request: Stats.QueryRequestParams, options?: RequestOptions): ApiPromise<QueryResponse, Stats.QueryError>`
- **Wire**: `POST /query`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QueryResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Stats.QueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stats.QueryRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryRequest` | `queryRequestSchema` | `src/models/query-request.ts` |
| `QueryResponse` | `queryResponseSchema` | `src/models/query-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### runFunnelReport

- **Signature**: `runFunnelReport(request: Stats.RunFunnelReportRequest, options?: RequestOptions): ApiPromise<FunnelReportResponse, Stats.RunFunnelReportError>`
- **Wire**: `POST /funnels/{id}/report`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FunnelReportResponse`
- **Error**: `StatableError` with `kind: "api"`, an instance of `Stats.RunFunnelReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stats.RunFunnelReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `FunnelReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunnelReportRequest` | `funnelReportRequestSchema` | `src/models/funnel-report-request.ts` |
| `FunnelReportResponse` | `funnelReportResponseSchema` | `src/models/funnel-report-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

