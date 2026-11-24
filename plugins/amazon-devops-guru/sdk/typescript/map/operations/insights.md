<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 4 operations · Request and error types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteInsight

- **Signature**: `deleteInsight(request: Insights.DeleteInsightRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Insights.DeleteInsightError>`
- **Wire**: `DELETE /insights/{Id}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Insights.DeleteInsightError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.DeleteInsightRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | `Id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeInsight

- **Signature**: `describeInsight(request: Insights.DescribeInsightRequest, options?: RequestOptions): ApiPromise<DescribeInsightResponse, Insights.DescribeInsightError>`
- **Wire**: `GET /insights/{Id}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeInsightResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Insights.DescribeInsightError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.DescribeInsightRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | `Id` | `string` | yes |
| `accountId` | `query` | `AccountId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeInsightResponse` | `describeInsightResponseSchema` | `src/models/describe-insight-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listInsights

- **Signature**: `listInsights(request?: Insights.ListInsightsRequest, options?: RequestOptions): ApiPromise<ListInsightsResponse, Insights.ListInsightsError>`
- **Wire**: `POST /insights`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListInsightsResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Insights.ListInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.ListInsightsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsRequest` | `insightsRequestSchema` | `src/models/insights-request.ts` |
| `ListInsightsResponse` | `listInsightsResponseSchema` | `src/models/list-insights-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### searchInsights

- **Signature**: `searchInsights(request?: Insights.SearchInsightsRequest, options?: RequestOptions): ApiPromise<SearchInsightsResponse, Insights.SearchInsightsError>`
- **Wire**: `POST /insights/search`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchInsightsResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Insights.SearchInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.SearchInsightsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightsSearchRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsSearchRequest` | `insightsSearchRequestSchema` | `src/models/insights-search-request.ts` |
| `SearchInsightsResponse` | `searchInsightsResponseSchema` | `src/models/search-insights-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

