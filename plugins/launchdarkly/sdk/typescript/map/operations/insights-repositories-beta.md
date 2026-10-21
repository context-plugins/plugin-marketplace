<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsRepositoriesBeta — operations

Accessor: `client.insightsRepositoriesBeta` · Source: `src/resources/insights-repositories-beta.ts` · 3 operations · Request and error types: namespace `InsightsRepositoriesBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### associateRepositoriesAndProjects

- **Signature**: `associateRepositoriesAndProjects(request: InsightsRepositoriesBeta.AssociateRepositoriesAndProjectsRequest, options?: RequestOptions): ApiPromise<InsightsRepositoryProjectCollection, InsightsRepositoriesBeta.AssociateRepositoriesAndProjectsError>`
- **Wire**: `PUT /api/v2/engineering-insights/repositories/projects`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightsRepositoryProjectCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsRepositoriesBeta.AssociateRepositoriesAndProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsRepositoriesBeta.AssociateRepositoriesAndProjectsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightsRepositoryProjectMappings` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsRepositoryProjectMappings` | `insightsRepositoryProjectMappingsSchema` | `src/models/insights-repository-project-mappings.ts` |
| `InsightsRepositoryProjectCollection` | `insightsRepositoryProjectCollectionSchema` | `src/models/insights-repository-project-collection.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteRepositoryProject

- **Signature**: `deleteRepositoryProject(request: InsightsRepositoriesBeta.DeleteRepositoryProjectRequest, options?: RequestOptions): ApiPromise<undefined, InsightsRepositoriesBeta.DeleteRepositoryProjectError>`
- **Wire**: `DELETE /api/v2/engineering-insights/repositories/{repositoryKey}/projects/{projectKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsRepositoriesBeta.DeleteRepositoryProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsRepositoriesBeta.DeleteRepositoryProjectRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryKey` | `path` | `string` | yes |
| `projectKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getInsightsRepositories

- **Signature**: `getInsightsRepositories(request: InsightsRepositoriesBeta.GetInsightsRepositoriesRequest, options?: RequestOptions): ApiPromise<InsightsRepositoryCollection, InsightsRepositoriesBeta.GetInsightsRepositoriesError>`
- **Wire**: `GET /api/v2/engineering-insights/repositories`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsRepositoryCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsRepositoriesBeta.GetInsightsRepositoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsRepositoriesBeta.GetInsightsRepositoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsRepositoryCollection` | `insightsRepositoryCollectionSchema` | `src/models/insights-repository-collection.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

