<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organization — operations

Accessor: `client.organization` · Source: `src/resources/organization.ts` · 5 operations · Request and error types: namespace `Organization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeOrganizationHealth

- **Signature**: `describeOrganizationHealth(request?: Organization.DescribeOrganizationHealthRequest, options?: RequestOptions): ApiPromise<DescribeOrganizationHealthResponse, Organization.DescribeOrganizationHealthError>`
- **Wire**: `POST /organization/health`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DescribeOrganizationHealthResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Organization.DescribeOrganizationHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organization.DescribeOrganizationHealthRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrganizationHealthRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationHealthRequest` | `organizationHealthRequestSchema` | `src/models/organization-health-request.ts` |
| `DescribeOrganizationHealthResponse` | `describeOrganizationHealthResponseSchema` | `src/models/describe-organization-health-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeOrganizationOverview

- **Signature**: `describeOrganizationOverview(request?: Organization.DescribeOrganizationOverviewRequest, options?: RequestOptions): ApiPromise<DescribeOrganizationOverviewResponse, Organization.DescribeOrganizationOverviewError>`
- **Wire**: `POST /organization/overview`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DescribeOrganizationOverviewResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Organization.DescribeOrganizationOverviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organization.DescribeOrganizationOverviewRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrganizationOverviewRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationOverviewRequest` | `organizationOverviewRequestSchema` | `src/models/organization-overview-request.ts` |
| `DescribeOrganizationOverviewResponse` | `describeOrganizationOverviewResponseSchema` | `src/models/describe-organization-overview-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeOrganizationResourceCollectionHealth

- **Signature**: `describeOrganizationResourceCollectionHealth(request?: Organization.DescribeOrganizationResourceCollectionHealthRequest, options?: RequestOptions): ApiPromise<DescribeOrganizationResourceCollectionHealthResponse, Organization.DescribeOrganizationResourceCollectionHealthError>`
- **Wire**: `POST /organization/health/resource-collection`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DescribeOrganizationResourceCollectionHealthResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Organization.DescribeOrganizationResourceCollectionHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organization.DescribeOrganizationResourceCollectionHealthRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrganizationHealthResourceCollectionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationHealthResourceCollectionRequest` | `organizationHealthResourceCollectionRequestSchema` | `src/models/organization-health-resource-collection-request.ts` |
| `DescribeOrganizationResourceCollectionHealthResponse` | `describeOrganizationResourceCollectionHealthResponseSchema` | `src/models/describe-organization-resource-collection-health-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listOrganizationInsights

- **Signature**: `listOrganizationInsights(request?: Organization.ListOrganizationInsightsRequest, options?: RequestOptions): ApiPromise<ListOrganizationInsightsResponse, Organization.ListOrganizationInsightsError>`
- **Wire**: `POST /organization/insights`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListOrganizationInsightsResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Organization.ListOrganizationInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organization.ListOrganizationInsightsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrganizationInsightsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationInsightsRequest` | `organizationInsightsRequestSchema` | `src/models/organization-insights-request.ts` |
| `ListOrganizationInsightsResponse` | `listOrganizationInsightsResponseSchema` | `src/models/list-organization-insights-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### searchOrganizationInsights

- **Signature**: `searchOrganizationInsights(request?: Organization.SearchOrganizationInsightsRequest, options?: RequestOptions): ApiPromise<SearchOrganizationInsightsResponse, Organization.SearchOrganizationInsightsError>`
- **Wire**: `POST /organization/insights/search`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchOrganizationInsightsResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Organization.SearchOrganizationInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organization.SearchOrganizationInsightsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrganizationInsightsSearchRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationInsightsSearchRequest` | `organizationInsightsSearchRequestSchema` | `src/models/organization-insights-search-request.ts` |
| `SearchOrganizationInsightsResponse` | `searchOrganizationInsightsResponseSchema` | `src/models/search-organization-insights-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

