<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContextsApi — operations

Accessor: `client.contextsApi` · Source: `src/resources/contexts-api.ts` · 10 operations · Request and error types: namespace `ContextsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteContextInstances

- **Signature**: `deleteContextInstances(request: ContextsApi.DeleteContextInstancesRequest, options?: RequestOptions): ApiPromise<undefined, ContextsApi.DeleteContextInstancesError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.DeleteContextInstancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.DeleteContextInstancesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### evaluateContextInstance

- **Signature**: `evaluateContextInstance(request: ContextsApi.EvaluateContextInstanceRequest, options?: RequestOptions): ApiPromise<ContextInstanceEvaluations, ContextsApi.EvaluateContextInstanceError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContextInstanceEvaluations`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.EvaluateContextInstanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.EvaluateContextInstanceRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `body` | `body` | `Record<string, Record<string, unknown>>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContextInstanceEvaluations` | `contextInstanceEvaluationsSchema` | `src/models/context-instance-evaluations.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getContextAttributeNames

- **Signature**: `getContextAttributeNames(request: ContextsApi.GetContextAttributeNamesRequest, options?: RequestOptions): ApiPromise<ContextAttributeNamesCollection, ContextsApi.GetContextAttributeNamesError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContextAttributeNamesCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.GetContextAttributeNamesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.GetContextAttributeNamesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContextAttributeNamesCollection` | `contextAttributeNamesCollectionSchema` | `src/models/context-attribute-names-collection.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getContextAttributeValues

- **Signature**: `getContextAttributeValues(request: ContextsApi.GetContextAttributeValuesRequest, options?: RequestOptions): ApiPromise<ContextAttributeValuesCollection, ContextsApi.GetContextAttributeValuesError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContextAttributeValuesCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.GetContextAttributeValuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.GetContextAttributeValuesRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `attributeName` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContextAttributeValuesCollection` | `contextAttributeValuesCollectionSchema` | `src/models/context-attribute-values-collection.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getContextInstances

- **Signature**: `getContextInstances(request: ContextsApi.GetContextInstancesRequest, options?: RequestOptions): ApiPromise<ContextInstances, ContextsApi.GetContextInstancesError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContextInstances`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.GetContextInstancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.GetContextInstancesRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `continuationToken` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `includeTotalCount` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContextInstances` | `contextInstancesSchema` | `src/models/context-instances.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getContextKindsByProjectKey

- **Signature**: `getContextKindsByProjectKey(request: ContextsApi.GetContextKindsByProjectKeyRequest, options?: RequestOptions): ApiPromise<ContextKindsCollectionRep, ContextsApi.GetContextKindsByProjectKeyError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/context-kinds`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContextKindsCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.GetContextKindsByProjectKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.GetContextKindsByProjectKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContextKindsCollectionRep` | `contextKindsCollectionRepSchema` | `src/models/context-kinds-collection-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### getContexts

- **Signature**: `getContexts(request: ContextsApi.GetContextsRequest, options?: RequestOptions): ApiPromise<Contexts, ContextsApi.GetContextsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{kind}/{key}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Contexts`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.GetContextsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.GetContextsRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `kind` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `continuationToken` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `includeTotalCount` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Contexts` | `contextsSchema` | `src/models/contexts.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### putContextKind

- **Signature**: `putContextKind(request: ContextsApi.PutContextKindRequest, options?: RequestOptions): ApiPromise<UpsertResponseRep, ContextsApi.PutContextKindError>`
- **Wire**: `PUT /api/v2/projects/{projectKey}/context-kinds/{key}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpsertResponseRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.PutContextKindError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.PutContextKindRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UpsertContextKindPayload` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertContextKindPayload` | `upsertContextKindPayloadSchema` | `src/models/upsert-context-kind-payload.ts` |
| `UpsertResponseRep` | `upsertResponseRepSchema` | `src/models/upsert-response-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### searchContextInstances

- **Signature**: `searchContextInstances(request: ContextsApi.SearchContextInstancesRequest, options?: RequestOptions): ApiPromise<ContextInstances, ContextsApi.SearchContextInstancesError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/search`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContextInstances`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.SearchContextInstancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.SearchContextInstancesRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `continuationToken` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `includeTotalCount` | `query` | `boolean` | no |
| `body` | `body` | `ContextInstanceSearch` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContextInstanceSearch` | `contextInstanceSearchSchema` | `src/models/context-instance-search.ts` |
| `ContextInstances` | `contextInstancesSchema` | `src/models/context-instances.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### searchContexts

- **Signature**: `searchContexts(request: ContextsApi.SearchContextsRequest, options?: RequestOptions): ApiPromise<Contexts, ContextsApi.SearchContextsError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/search`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Contexts`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ContextsApi.SearchContextsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContextsApi.SearchContextsRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `continuationToken` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `includeTotalCount` | `query` | `boolean` | no |
| `body` | `body` | `ContextSearch` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContextSearch` | `contextSearchSchema` | `src/models/context-search.ts` |
| `Contexts` | `contextsSchema` | `src/models/contexts.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

