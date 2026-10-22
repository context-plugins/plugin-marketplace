<!-- Generated file — do not edit; regenerated with the SDK. -->

# Functions — operations

Accessor: `client.functions` · Source: `src/resources/functions.ts` · 2 operations · Request and error types: namespace `Functions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFunctions

- **Signature**: `getFunctions(request: Functions.GetFunctionsRequest, options?: RequestOptions): ApiPromise<PaginatedFunctionResponse, Functions.GetFunctionsError>`
- **Wire**: `GET /functions`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedFunctionResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Functions.GetFunctionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Functions.GetFunctionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `showHidden` | `query` | `boolean` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedFunctionResponse` | `paginatedFunctionResponseSchema` | `src/models/paginated-function-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFunctionsById

- **Signature**: `getFunctionsById(request: Functions.GetFunctionsByIdRequest, options?: RequestOptions): ApiPromise<CountedFunctionResponse, Functions.GetFunctionsByIdError>`
- **Wire**: `GET /functions/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedFunctionResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Functions.GetFunctionsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Functions.GetFunctionsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedFunctionResponse` | `countedFunctionResponseSchema` | `src/models/counted-function-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

