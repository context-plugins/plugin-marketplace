<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.usage` · Source: `src/resources/usage.ts` · 4 operations · Request and error types: namespace `Usage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### platformUsageLimitsEvaluate

- **Signature**: `platformUsageLimitsEvaluate(request: Usage.PlatformUsageLimitsEvaluateRequest, options?: RequestOptions): ApiPromise<PlatformEvaluateUsageLimitResponse, Usage.PlatformUsageLimitsEvaluateError>`
- **Wire**: `POST /api/usage/limits/evaluate`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformEvaluateUsageLimitResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Usage.PlatformUsageLimitsEvaluateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Usage.PlatformUsageLimitsEvaluateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformEvaluateCallerUsageLimitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformEvaluateCallerUsageLimitRequest` | `platformEvaluateCallerUsageLimitRequestSchema` | `src/models/platform-evaluate-caller-usage-limit-request.ts` |
| `PlatformEvaluateUsageLimitResponse` | `platformEvaluateUsageLimitResponseSchema` | `src/models/platform-evaluate-usage-limit-response.ts` |

### platformUsageRequestsCreate

- **Signature**: `platformUsageRequestsCreate(request: Usage.PlatformUsageRequestsCreateRequest, options?: RequestOptions): ApiPromise<PlatformRequestResponse1, Usage.PlatformUsageRequestsCreateError>`
- **Wire**: `POST /api/usage/limit-increase-requests`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformRequestResponse1`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Usage.PlatformUsageRequestsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Usage.PlatformUsageRequestsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformPersonalRequestCreate1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformPersonalRequestCreate1` | `platformPersonalRequestCreate1Schema` | `src/models/platform-personal-request-create1.ts` |
| `PlatformRequestResponse1` | `platformRequestResponse1Schema` | `src/models/platform-request-response1.ts` |

### platformUsageRequestsGet

- **Signature**: `platformUsageRequestsGet(request: Usage.PlatformUsageRequestsGetRequest, options?: RequestOptions): ApiPromise<PlatformRequestResponse1, Usage.PlatformUsageRequestsGetError>`
- **Wire**: `GET /api/usage/limit-increase-requests/{request_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformRequestResponse1`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Usage.PlatformUsageRequestsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Usage.PlatformUsageRequestsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `requestId` | `path` | `request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformRequestResponse1` | `platformRequestResponse1Schema` | `src/models/platform-request-response1.ts` |

### platformUsageRequestsList

- **Signature**: `platformUsageRequestsList(request: Usage.PlatformUsageRequestsListRequest, options?: RequestOptions): ApiPromise<PlatformRequestListResponse1, Usage.PlatformUsageRequestsListError>`
- **Wire**: `GET /api/usage/limit-increase-requests`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformRequestListResponse1`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Usage.PlatformUsageRequestsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Usage.PlatformUsageRequestsListRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |
| `cursor` | `query` | — | `string` | no | — |
| `filters` | `query` | — | `PlatformRequestFilter1[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformRequestFilter1` | `platformRequestFilter1Schema` | `src/models/platform-request-filter1.ts` |
| `PlatformRequestListResponse1` | `platformRequestListResponse1Schema` | `src/models/platform-request-list-response1.ts` |

