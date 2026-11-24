<!-- Generated file — do not edit; regenerated with the SDK. -->

# Repositories — operations

Accessor: `client.repositories` · Source: `src/resources/repositories.ts` · 4 operations · Request and error types: namespace `Repositories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRepository

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createRepository(request: Repositories.CreateRepositoryRequest, options?: RequestOptions): ApiPromise<Repository, Repositories.CreateRepositoryError>`
- **Wire**: `POST /repositories`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Repository`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Repositories.CreateRepositoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [400] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Repositories.CreateRepositoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RepositoryInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepositoryInput` | `repositoryInputSchema` | `src/models/repository-input.ts` |
| `Repository` | `repositorySchema` | `src/models/repository.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

### deleteRepository

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteRepository(request: Repositories.DeleteRepositoryRequest, options?: RequestOptions): ApiPromise<undefined, Repositories.DeleteRepositoryError>`
- **Wire**: `DELETE /repositories/{repositoryId}`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Repositories.DeleteRepositoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [404] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Repositories.DeleteRepositoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

### getRepository

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getRepository(request: Repositories.GetRepositoryRequest, options?: RequestOptions): ApiPromise<Repository, Repositories.GetRepositoryError>`
- **Wire**: `GET /repositories/{repositoryId}`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Repository`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Repositories.GetRepositoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"errorResponseBoomiDataHubGoldenRecordsApi2"` [404] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Repositories.GetRepositoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repositoryId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Repository` | `repositorySchema` | `src/models/repository.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

### listRepositories

- **Server**: `defaultBoomiDataHubGoldenRecordsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRepositories(options?: RequestOptions): ApiPromise<RepositoriesResponse, Repositories.ListRepositoriesError>`
- **Wire**: `GET /repositories`
- **Auth**: any of `basicAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RepositoriesResponse`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Repositories.ListRepositoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiDataHubGoldenRecordsApi"` [401] `ErrorResponseBoomiDataHubGoldenRecordsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RepositoriesResponse` | `repositoriesResponseSchema` | `src/models/repositories-response.ts` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `errorResponseBoomiDataHubGoldenRecordsApiSchema` | `src/models/error-response-boomi-data-hub-golden-records-api.ts` |

