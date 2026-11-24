<!-- Generated file — do not edit; regenerated with the SDK. -->

# Resolvers — operations

Accessor: `client.resolvers` · Source: `src/resources/resolvers.ts` · 6 operations · Request and error types: namespace `Resolvers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createResolver

- **Signature**: `createResolver(request: Resolvers.CreateResolverRequest, options?: RequestOptions): ApiPromise<CreateResolverResponse, Resolvers.CreateResolverError>`
- **Wire**: `POST /v1/apis/{apiId}/types/{typeName}/resolvers`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResolverResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Resolvers.CreateResolverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resolvers.CreateResolverRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `typeName` | `path` | `string` | yes |
| `body` | `body` | `V1ApisTypesResolversRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisTypesResolversRequest` | `v1ApisTypesResolversRequestSchema` | `src/models/v1-apis-types-resolvers-request.ts` |
| `CreateResolverResponse` | `createResolverResponseSchema` | `src/models/create-resolver-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### deleteResolver

- **Signature**: `deleteResolver(request: Resolvers.DeleteResolverRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Resolvers.DeleteResolverError>`
- **Wire**: `DELETE /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Resolvers.DeleteResolverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resolvers.DeleteResolverRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `typeName` | `path` | `string` | yes |
| `fieldName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getResolver

- **Signature**: `getResolver(request: Resolvers.GetResolverRequest, options?: RequestOptions): ApiPromise<GetResolverResponse, Resolvers.GetResolverError>`
- **Wire**: `GET /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetResolverResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Resolvers.GetResolverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resolvers.GetResolverRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `typeName` | `path` | `string` | yes |
| `fieldName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetResolverResponse` | `getResolverResponseSchema` | `src/models/get-resolver-response.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### listResolvers

- **Signature**: `listResolvers(request: Resolvers.ListResolversRequest, options?: RequestOptions): ApiPromise<ListResolversResponse, Resolvers.ListResolversError>`
- **Wire**: `GET /v1/apis/{apiId}/types/{typeName}/resolvers`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResolversResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Resolvers.ListResolversError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resolvers.ListResolversRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `typeName` | `path` | `string` | yes |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResolversResponse` | `listResolversResponseSchema` | `src/models/list-resolvers-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### listResolversByFunction

- **Signature**: `listResolversByFunction(request: Resolvers.ListResolversByFunctionRequest, options?: RequestOptions): ApiPromise<ListResolversByFunctionResponse, Resolvers.ListResolversByFunctionError>`
- **Wire**: `GET /v1/apis/{apiId}/functions/{functionId}/resolvers`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResolversByFunctionResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Resolvers.ListResolversByFunctionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resolvers.ListResolversByFunctionRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `functionId` | `path` | `string` | yes |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResolversByFunctionResponse` | `listResolversByFunctionResponseSchema` | `src/models/list-resolvers-by-function-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### updateResolver

- **Signature**: `updateResolver(request: Resolvers.UpdateResolverRequest, options?: RequestOptions): ApiPromise<UpdateResolverResponse, Resolvers.UpdateResolverError>`
- **Wire**: `POST /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateResolverResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Resolvers.UpdateResolverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resolvers.UpdateResolverRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `typeName` | `path` | `string` | yes |
| `fieldName` | `path` | `string` | yes |
| `body` | `body` | `V1ApisTypesResolversFieldNameRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisTypesResolversFieldNameRequest` | `v1ApisTypesResolversFieldNameRequestSchema` | `src/models/v1-apis-types-resolvers-field-name-request.ts` |
| `UpdateResolverResponse` | `updateResolverResponseSchema` | `src/models/update-resolver-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

