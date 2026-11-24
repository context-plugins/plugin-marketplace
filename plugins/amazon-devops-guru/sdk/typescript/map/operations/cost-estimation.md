<!-- Generated file — do not edit; regenerated with the SDK. -->

# CostEstimation — operations

Accessor: `client.costEstimation` · Source: `src/resources/cost-estimation.ts` · 2 operations · Request and error types: namespace `CostEstimation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCostEstimation

- **Signature**: `getCostEstimation(request?: CostEstimation.GetCostEstimationRequest, options?: RequestOptions): ApiPromise<GetCostEstimationResponse, CostEstimation.GetCostEstimationError>`
- **Wire**: `GET /cost-estimation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetCostEstimationResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `CostEstimation.GetCostEstimationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CostEstimation.GetCostEstimationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `nextToken` | `query` | `NextToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetCostEstimationResponse` | `getCostEstimationResponseSchema` | `src/models/get-cost-estimation-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### startCostEstimation

- **Signature**: `startCostEstimation(request?: CostEstimation.StartCostEstimationRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, CostEstimation.StartCostEstimationError>`
- **Wire**: `PUT /cost-estimation`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `CostEstimation.StartCostEstimationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CostEstimation.StartCostEstimationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CostEstimationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CostEstimationRequest` | `costEstimationRequestSchema` | `src/models/cost-estimation-request.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

