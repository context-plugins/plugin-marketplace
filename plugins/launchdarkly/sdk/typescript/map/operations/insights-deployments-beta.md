<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsDeploymentsBeta — operations

Accessor: `client.insightsDeploymentsBeta` · Source: `src/resources/insights-deployments-beta.ts` · 4 operations · Request and error types: namespace `InsightsDeploymentsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDeploymentEvent

- **Signature**: `createDeploymentEvent(request: InsightsDeploymentsBeta.CreateDeploymentEventRequest, options?: RequestOptions): ApiPromise<undefined, InsightsDeploymentsBeta.CreateDeploymentEventError>`
- **Wire**: `POST /api/v2/engineering-insights/deployment-events`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsDeploymentsBeta.CreateDeploymentEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsDeploymentsBeta.CreateDeploymentEventRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PostDeploymentEventInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostDeploymentEventInput` | `postDeploymentEventInputSchema` | `src/models/post-deployment-event-input.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getDeployment

- **Signature**: `getDeployment(request: InsightsDeploymentsBeta.GetDeploymentRequest, options?: RequestOptions): ApiPromise<DeploymentRep, InsightsDeploymentsBeta.GetDeploymentError>`
- **Wire**: `GET /api/v2/engineering-insights/deployments/{deploymentID}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeploymentRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsDeploymentsBeta.GetDeploymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsDeploymentsBeta.GetDeploymentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deploymentId` | `path` | `deploymentID` | `string` | yes |
| `expand` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeploymentRep` | `deploymentRepSchema` | `src/models/deployment-rep.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getDeployments

- **Signature**: `getDeployments(request: InsightsDeploymentsBeta.GetDeploymentsRequest, options?: RequestOptions): ApiPromise<DeploymentCollectionRep, InsightsDeploymentsBeta.GetDeploymentsError>`
- **Wire**: `GET /api/v2/engineering-insights/deployments`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeploymentCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsDeploymentsBeta.GetDeploymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsDeploymentsBeta.GetDeploymentsRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `query` | `string` | yes |
| `environmentKey` | `query` | `string` | yes |
| `applicationKey` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `expand` | `query` | `string` | no |
| `from` | `query` | `number` | no |
| `to` | `query` | `number` | no |
| `after` | `query` | `string` | no |
| `before` | `query` | `string` | no |
| `kind` | `query` | `string` | no |
| `status` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeploymentCollectionRep` | `deploymentCollectionRepSchema` | `src/models/deployment-collection-rep.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### updateDeployment

- **Signature**: `updateDeployment(request: InsightsDeploymentsBeta.UpdateDeploymentRequest, options?: RequestOptions): ApiPromise<DeploymentRep, InsightsDeploymentsBeta.UpdateDeploymentError>`
- **Wire**: `PATCH /api/v2/engineering-insights/deployments/{deploymentID}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeploymentRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsDeploymentsBeta.UpdateDeploymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsDeploymentsBeta.UpdateDeploymentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deploymentId` | `path` | `deploymentID` | `string` | yes |
| `body` | `body` | — | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `DeploymentRep` | `deploymentRepSchema` | `src/models/deployment-rep.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

