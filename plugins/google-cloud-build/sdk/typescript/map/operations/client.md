<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudBuildClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 22 operations · Request and error types: namespace `GoogleCloudBuildClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cloudbuildProjectsLocationsConnectionsCreate

- **Signature**: `cloudbuildProjectsLocationsConnectionsCreate(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionId` | `query` | `string` | no |
| `body` | `body` | `Connection` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Connection` | `connectionSchema` | `src/models/connection.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsDelete

- **Signature**: `cloudbuildProjectsLocationsConnectionsDelete(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteError>`
- **Wire**: `DELETE /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `etag` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsFetchLinkableRepositories

- **Signature**: `cloudbuildProjectsLocationsConnectionsFetchLinkableRepositories(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest, options?: RequestOptions): ApiPromise<FetchLinkableRepositoriesResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:fetchLinkableRepositories`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FetchLinkableRepositoriesResponse`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FetchLinkableRepositoriesResponse` | `fetchLinkableRepositoriesResponseSchema` | `src/models/fetch-linkable-repositories-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsGet

- **Signature**: `cloudbuildProjectsLocationsConnectionsGet(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetRequest, options?: RequestOptions): ApiPromise<Connection, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Connection`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Connection` | `connectionSchema` | `src/models/connection.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsGetIamPolicy

- **Signature**: `cloudbuildProjectsLocationsConnectionsGetIamPolicy(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Policy`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectsId` | `path` | — | `string` | yes |
| `locationsId` | `path` | — | `string` | yes |
| `connectionsId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsList

- **Signature**: `cloudbuildProjectsLocationsConnectionsList(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListRequest, options?: RequestOptions): ApiPromise<ListConnectionsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConnectionsResponse`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `returnPartialSuccess` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConnectionsResponse` | `listConnectionsResponseSchema` | `src/models/list-connections-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsPatch

- **Signature**: `cloudbuildProjectsLocationsConnectionsPatch(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchError>`
- **Wire**: `PATCH /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsPatchRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `etag` | `query` | `string` | no |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `Connection` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Connection` | `connectionSchema` | `src/models/connection.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsProcessWebhook

- **Signature**: `cloudbuildProjectsLocationsConnectionsProcessWebhook(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections:processWebhook`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsProcessWebhookRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `webhookKey` | `query` | `string` | no |
| `body` | `body` | `HttpBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpBody` | `httpBodySchema` | `src/models/http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken

- **Signature**: `cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest, options?: RequestOptions): ApiPromise<FetchReadTokenResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadToken`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FetchReadTokenResponse`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `repositoriesId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FetchReadTokenResponse` | `fetchReadTokenResponseSchema` | `src/models/fetch-read-token-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken

- **Signature**: `cloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest, options?: RequestOptions): ApiPromise<FetchReadWriteTokenResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadWriteToken`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FetchReadWriteTokenResponse`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `repositoriesId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FetchReadWriteTokenResponse` | `fetchReadWriteTokenResponseSchema` | `src/models/fetch-read-write-token-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate

- **Signature**: `cloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories:batchCreate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `body` | `body` | `BatchCreateRepositoriesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchCreateRepositoriesRequest` | `batchCreateRepositoriesRequestSchema` | `src/models/batch-create-repositories-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsRepositoriesCreate

- **Signature**: `cloudbuildProjectsLocationsConnectionsRepositoriesCreate(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `repositoryId` | `query` | `string` | no |
| `body` | `body` | `Repository` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Repository` | `repositorySchema` | `src/models/repository.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsRepositoriesDelete

- **Signature**: `cloudbuildProjectsLocationsConnectionsRepositoriesDelete(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError>`
- **Wire**: `DELETE /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `repositoriesId` | `path` | `string` | yes |
| `etag` | `query` | `string` | no |
| `validateOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs

- **Signature**: `cloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest, options?: RequestOptions): ApiPromise<FetchGitRefsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:fetchGitRefs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FetchGitRefsResponse`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `repositoriesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `refType` | `query` | `RefType` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefType` | `refTypeSchema` | `src/models/ref-type.ts` |
| `FetchGitRefsResponse` | `fetchGitRefsResponseSchema` | `src/models/fetch-git-refs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsRepositoriesGet

- **Signature**: `cloudbuildProjectsLocationsConnectionsRepositoriesGet(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest, options?: RequestOptions): ApiPromise<Repository, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Repository`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `repositoriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Repository` | `repositorySchema` | `src/models/repository.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsRepositoriesList

- **Signature**: `cloudbuildProjectsLocationsConnectionsRepositoriesList(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListRequest, options?: RequestOptions): ApiPromise<ListRepositoriesResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRepositoriesResponse`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsRepositoriesListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `returnPartialSuccess` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRepositoriesResponse` | `listRepositoriesResponseSchema` | `src/models/list-repositories-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsSetIamPolicy

- **Signature**: `cloudbuildProjectsLocationsConnectionsSetIamPolicy(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<Policy, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Policy`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `body` | `body` | `SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetIamPolicyRequest` | `setIamPolicyRequestSchema` | `src/models/set-iam-policy-request.ts` |
| `Policy` | `policySchema` | `src/models/policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsConnectionsTestIamPermissions

- **Signature**: `cloudbuildProjectsLocationsConnectionsTestIamPermissions(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<TestIamPermissionsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `connectionsId` | `path` | `string` | yes |
| `body` | `body` | `TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestIamPermissionsRequest` | `testIamPermissionsRequestSchema` | `src/models/test-iam-permissions-request.ts` |
| `TestIamPermissionsResponse` | `testIamPermissionsResponseSchema` | `src/models/test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsGet

- **Signature**: `cloudbuildProjectsLocationsGet(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise<Location, GoogleCloudBuildClient.CloudbuildProjectsLocationsGetError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Location`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Location` | `locationSchema` | `src/models/location.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsList

- **Signature**: `cloudbuildProjectsLocationsList(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsListRequest, options?: RequestOptions): ApiPromise<ListLocationsResponse, GoogleCloudBuildClient.CloudbuildProjectsLocationsListError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationsResponse`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `extraLocationTypes` | `query` | `string[]` | no |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListLocationsResponse` | `listLocationsResponseSchema` | `src/models/list-locations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsOperationsCancel

- **Signature**: `cloudbuildProjectsLocationsOperationsCancel(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelError>`
- **Wire**: `POST /v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsCancelRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### cloudbuildProjectsLocationsOperationsGet

- **Signature**: `cloudbuildProjectsLocationsOperationsGet(request: GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise<Operation, GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetError>`
- **Wire**: `GET /v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Operation`
- **Error**: `GoogleCloudBuildError` with `kind: "api"`, an instance of `GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleCloudBuildClient.CloudbuildProjectsLocationsOperationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

