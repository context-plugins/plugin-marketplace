<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.environments` · Source: `src/resources/environments.ts` · 7 operations · Request and error types: namespace `Environments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEnvironment

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEnvironment(request: Environments.CreateEnvironmentRequestParams, options?: RequestOptions): ApiPromise<Environment2, Environments.CreateEnvironmentError>`
- **Wire**: `POST /projects/{project_uid}/environments`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Environment2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Environments.CreateEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2ContentstackEnvironmentsApi"` [400] `Error2ContentstackEnvironmentsApi` · `"error2"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.CreateEnvironmentRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `body` | `body` | — | `CreateEnvironmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEnvironmentRequest` | `createEnvironmentRequestSchema` | `src/models/create-environment-request.ts` |
| `Environment2` | `environment2Schema` | `src/models/environment2.ts` |
| `Error2ContentstackEnvironmentsApi` | `error2ContentstackEnvironmentsApiSchema` | `src/models/error2-contentstack-environments-api.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### deleteEnvironment

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteEnvironment(request: Environments.DeleteEnvironmentRequest, options?: RequestOptions): ApiPromise<undefined, Environments.DeleteEnvironmentError>`
- **Wire**: `DELETE /projects/{project_uid}/environments/{env_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Environments.DeleteEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"error2ContentstackEnvironmentsApi"` [404] `Error2ContentstackEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.DeleteEnvironmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `envUid` | `path` | `env_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `Error2ContentstackEnvironmentsApi` | `error2ContentstackEnvironmentsApiSchema` | `src/models/error2-contentstack-environments-api.ts` |

### getAllEnvironments

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllEnvironments(request: Environments.GetAllEnvironmentsRequest, options?: RequestOptions): ApiPromise<EnvironmentList, Environments.GetAllEnvironmentsError>`
- **Wire**: `GET /environments`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnvironmentList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Environments.GetAllEnvironmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.GetAllEnvironmentsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `authtoken` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvironmentList` | `environmentListSchema` | `src/models/environment-list.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### getEnvironment

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getEnvironment(request: Environments.GetEnvironmentRequest, options?: RequestOptions): ApiPromise<Environment2, Environments.GetEnvironmentError>`
- **Wire**: `GET /projects/{project_uid}/environments/{env_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Environment2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Environments.GetEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"error2ContentstackEnvironmentsApi"` [404] `Error2ContentstackEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.GetEnvironmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `envUid` | `path` | `env_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Environment2` | `environment2Schema` | `src/models/environment2.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `Error2ContentstackEnvironmentsApi` | `error2ContentstackEnvironmentsApiSchema` | `src/models/error2-contentstack-environments-api.ts` |

### getProjectsByProjectUidEnvironments

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getProjectsByProjectUidEnvironments(request: Environments.GetProjectsByProjectUidEnvironmentsRequest, options?: RequestOptions): ApiPromise<EnvironmentList2, Environments.GetProjectsByProjectUidEnvironmentsError>`
- **Wire**: `GET /projects/{project_uid}/environments`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnvironmentList2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Environments.GetProjectsByProjectUidEnvironmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.GetProjectsByProjectUidEnvironmentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvironmentList2` | `environmentList2Schema` | `src/models/environment-list2.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### revalidateCache

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `revalidateCache(request: Environments.RevalidateCacheRequest, options?: RequestOptions): ApiPromise<undefined, Environments.RevalidateCacheError>`
- **Wire**: `POST /projects/{project_uid}/environments/{env_uid}/revalidate-cache`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Environments.RevalidateCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"error2ContentstackEnvironmentsApi"` [404] `Error2ContentstackEnvironmentsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.RevalidateCacheRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `envUid` | `path` | `env_uid` | `string` | yes |
| `body` | `body` | — | `ProjectsEnvironmentsRevalidateCacheRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsEnvironmentsRevalidateCacheRequest` | `projectsEnvironmentsRevalidateCacheRequestSchema` | `src/models/projects-environments-revalidate-cache-request.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `Error2ContentstackEnvironmentsApi` | `error2ContentstackEnvironmentsApiSchema` | `src/models/error2-contentstack-environments-api.ts` |

### updateEnvironment

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateEnvironment(request: Environments.UpdateEnvironmentRequest, options?: RequestOptions): ApiPromise<Environment2, Environments.UpdateEnvironmentError>`
- **Wire**: `PUT /projects/{project_uid}/environments/{env_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Environment2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Environments.UpdateEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2ContentstackEnvironmentsApi"` [400] `Error2ContentstackEnvironmentsApi` · `"error2"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.UpdateEnvironmentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `envUid` | `path` | `env_uid` | `string` | yes |
| `body` | `body` | — | `CreateEnvironmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEnvironmentRequest` | `createEnvironmentRequestSchema` | `src/models/create-environment-request.ts` |
| `Environment2` | `environment2Schema` | `src/models/environment2.ts` |
| `Error2ContentstackEnvironmentsApi` | `error2ContentstackEnvironmentsApiSchema` | `src/models/error2-contentstack-environments-api.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

