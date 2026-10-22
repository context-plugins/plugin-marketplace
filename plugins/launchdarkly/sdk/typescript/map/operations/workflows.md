<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workflows — operations

Accessor: `client.workflows` · Source: `src/resources/workflows.ts` · 4 operations · Request and error types: namespace `Workflows`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteWorkflow

- **Signature**: `deleteWorkflow(request: Workflows.DeleteWorkflowRequest, options?: RequestOptions): ApiPromise<undefined, Workflows.DeleteWorkflowError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Workflows.DeleteWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workflows.DeleteWorkflowRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `workflowId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getCustomWorkflow

- **Signature**: `getCustomWorkflow(request: Workflows.GetCustomWorkflowRequest, options?: RequestOptions): ApiPromise<CustomWorkflowOutput, Workflows.GetCustomWorkflowError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomWorkflowOutput`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Workflows.GetCustomWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workflows.GetCustomWorkflowRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `workflowId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomWorkflowOutput` | `customWorkflowOutputSchema` | `src/models/custom-workflow-output.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getWorkflows

- **Signature**: `getWorkflows(request: Workflows.GetWorkflowsRequest, options?: RequestOptions): ApiPromise<CustomWorkflowsListingOutput, Workflows.GetWorkflowsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomWorkflowsListingOutput`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Workflows.GetWorkflowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workflows.GetWorkflowsRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `status` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomWorkflowsListingOutput` | `customWorkflowsListingOutputSchema` | `src/models/custom-workflows-listing-output.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postWorkflow

- **Signature**: `postWorkflow(request: Workflows.PostWorkflowRequest, options?: RequestOptions): ApiPromise<CustomWorkflowOutput, Workflows.PostWorkflowError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomWorkflowOutput`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Workflows.PostWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workflows.PostWorkflowRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `templateKey` | `query` | `string` | no |
| `dryRun` | `query` | `boolean` | no |
| `body` | `body` | `CustomWorkflowInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomWorkflowInput` | `customWorkflowInputSchema` | `src/models/custom-workflow-input.ts` |
| `CustomWorkflowOutput` | `customWorkflowOutputSchema` | `src/models/custom-workflow-output.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

