<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.environments` · Source: `src/resources/environments.ts` · 4 operations · Request and error types: namespace `Environments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEnvironment

- **Signature**: `createEnvironment(request: Environments.CreateEnvironmentRequest, options?: RequestOptions): ApiPromise<Environment, Environments.CreateEnvironmentError>`
- **Wire**: `POST /Environment`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Environment`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Environments.CreateEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.CreateEnvironmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EnvironmentInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvironmentInput` | `environmentInputSchema` | `src/models/environment-input.ts` |
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteEnvironment

- **Signature**: `deleteEnvironment(request: Environments.DeleteEnvironmentRequest, options?: RequestOptions): ApiPromise<undefined, Environments.DeleteEnvironmentError>`
- **Wire**: `DELETE /Environment/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Environments.DeleteEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.DeleteEnvironmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getEnvironment

- **Signature**: `getEnvironment(request: Environments.GetEnvironmentRequest, options?: RequestOptions): ApiPromise<Environment, Environments.GetEnvironmentError>`
- **Wire**: `GET /Environment/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Environment`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Environments.GetEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.GetEnvironmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### queryEnvironments

- **Signature**: `queryEnvironments(request: Environments.QueryEnvironmentsRequest, options?: RequestOptions): ApiPromise<EnvironmentQueryResult, Environments.QueryEnvironmentsError>`
- **Wire**: `POST /Environment/query`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnvironmentQueryResult`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Environments.QueryEnvironmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.QueryEnvironmentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryRequest` | `queryRequestSchema` | `src/models/query-request.ts` |
| `EnvironmentQueryResult` | `environmentQueryResultSchema` | `src/models/environment-query-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

