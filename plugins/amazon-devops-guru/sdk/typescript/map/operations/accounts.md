<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 3 operations · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeAccountHealth

- **Signature**: `describeAccountHealth(options?: RequestOptions): ApiPromise<DescribeAccountHealthResponse, Accounts.DescribeAccountHealthError>`
- **Wire**: `GET /accounts/health`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeAccountHealthResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Accounts.DescribeAccountHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeAccountHealthResponse` | `describeAccountHealthResponseSchema` | `src/models/describe-account-health-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeAccountOverview

- **Signature**: `describeAccountOverview(request?: Accounts.DescribeAccountOverviewRequest, options?: RequestOptions): ApiPromise<DescribeAccountOverviewResponse, Accounts.DescribeAccountOverviewError>`
- **Wire**: `POST /accounts/overview`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DescribeAccountOverviewResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Accounts.DescribeAccountOverviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.DescribeAccountOverviewRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountsOverviewRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsOverviewRequest` | `accountsOverviewRequestSchema` | `src/models/accounts-overview-request.ts` |
| `DescribeAccountOverviewResponse` | `describeAccountOverviewResponseSchema` | `src/models/describe-account-overview-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### describeResourceCollectionHealth

- **Signature**: `describeResourceCollectionHealth(request: Accounts.DescribeResourceCollectionHealthRequest, options?: RequestOptions): ApiPromise<DescribeResourceCollectionHealthResponse, Accounts.DescribeResourceCollectionHealthError>`
- **Wire**: `GET /accounts/health/resource-collection/{ResourceCollectionType}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DescribeResourceCollectionHealthResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Accounts.DescribeResourceCollectionHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.DescribeResourceCollectionHealthRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resourceCollectionType` | `path` | `ResourceCollectionType` | `ResourceCollectionType` | yes |
| `nextToken` | `query` | `NextToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceCollectionType` | `resourceCollectionTypeSchema` | `src/models/resource-collection-type.ts` |
| `DescribeResourceCollectionHealthResponse` | `describeResourceCollectionHealthResponseSchema` | `src/models/describe-resource-collection-health-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

