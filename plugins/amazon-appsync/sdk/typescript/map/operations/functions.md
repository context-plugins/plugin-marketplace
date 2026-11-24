<!-- Generated file — do not edit; regenerated with the SDK. -->

# Functions — operations

Accessor: `client.functions` · Source: `src/resources/functions.ts` · 5 operations · Request and error types: namespace `Functions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFunction

- **Signature**: `createFunction(request: Functions.CreateFunctionRequest, options?: RequestOptions): ApiPromise<CreateFunctionResponse, Functions.CreateFunctionError>`
- **Wire**: `POST /v1/apis/{apiId}/functions`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateFunctionResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Functions.CreateFunctionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Functions.CreateFunctionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisFunctionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisFunctionsRequest` | `v1ApisFunctionsRequestSchema` | `src/models/v1-apis-functions-request.ts` |
| `CreateFunctionResponse` | `createFunctionResponseSchema` | `src/models/create-function-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### deleteFunction

- **Signature**: `deleteFunction(request: Functions.DeleteFunctionRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Functions.DeleteFunctionError>`
- **Wire**: `DELETE /v1/apis/{apiId}/functions/{functionId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Functions.DeleteFunctionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Functions.DeleteFunctionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `functionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getFunction

- **Signature**: `getFunction(request: Functions.GetFunctionRequest, options?: RequestOptions): ApiPromise<GetFunctionResponse, Functions.GetFunctionError>`
- **Wire**: `GET /v1/apis/{apiId}/functions/{functionId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetFunctionResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Functions.GetFunctionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Functions.GetFunctionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `functionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetFunctionResponse` | `getFunctionResponseSchema` | `src/models/get-function-response.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### listFunctions

- **Signature**: `listFunctions(request: Functions.ListFunctionsRequest, options?: RequestOptions): ApiPromise<ListFunctionsResponse, Functions.ListFunctionsError>`
- **Wire**: `GET /v1/apis/{apiId}/functions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListFunctionsResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Functions.ListFunctionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Functions.ListFunctionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListFunctionsResponse` | `listFunctionsResponseSchema` | `src/models/list-functions-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### updateFunction

- **Signature**: `updateFunction(request: Functions.UpdateFunctionRequest, options?: RequestOptions): ApiPromise<UpdateFunctionResponse, Functions.UpdateFunctionError>`
- **Wire**: `POST /v1/apis/{apiId}/functions/{functionId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateFunctionResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Functions.UpdateFunctionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Functions.UpdateFunctionRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `functionId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisFunctionsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisFunctionsRequest1` | `v1ApisFunctionsRequest1Schema` | `src/models/v1-apis-functions-request1.ts` |
| `UpdateFunctionResponse` | `updateFunctionResponseSchema` | `src/models/update-function-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

