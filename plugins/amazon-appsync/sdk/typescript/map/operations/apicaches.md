<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apicaches — operations

Accessor: `client.apicaches` · Source: `src/resources/apicaches.ts` · 4 operations · Request and error types: namespace `Apicaches`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createApiCache

- **Signature**: `createApiCache(request: Apicaches.CreateApiCacheRequest, options?: RequestOptions): ApiPromise<CreateApiCacheResponse, Apicaches.CreateApiCacheError>`
- **Wire**: `POST /v1/apis/{apiId}/ApiCaches`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateApiCacheResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apicaches.CreateApiCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apicaches.CreateApiCacheRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisApiCachesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisApiCachesRequest` | `v1ApisApiCachesRequestSchema` | `src/models/v1-apis-api-caches-request.ts` |
| `CreateApiCacheResponse` | `createApiCacheResponseSchema` | `src/models/create-api-cache-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### deleteApiCache

- **Signature**: `deleteApiCache(request: Apicaches.DeleteApiCacheRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Apicaches.DeleteApiCacheError>`
- **Wire**: `DELETE /v1/apis/{apiId}/ApiCaches`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apicaches.DeleteApiCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apicaches.DeleteApiCacheRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getApiCache

- **Signature**: `getApiCache(request: Apicaches.GetApiCacheRequest, options?: RequestOptions): ApiPromise<GetApiCacheResponse, Apicaches.GetApiCacheError>`
- **Wire**: `GET /v1/apis/{apiId}/ApiCaches`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetApiCacheResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apicaches.GetApiCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apicaches.GetApiCacheRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetApiCacheResponse` | `getApiCacheResponseSchema` | `src/models/get-api-cache-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### updateApiCache

- **Signature**: `updateApiCache(request: Apicaches.UpdateApiCacheRequest, options?: RequestOptions): ApiPromise<UpdateApiCacheResponse, Apicaches.UpdateApiCacheError>`
- **Wire**: `POST /v1/apis/{apiId}/ApiCaches/update`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateApiCacheResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apicaches.UpdateApiCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apicaches.UpdateApiCacheRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisApiCachesUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisApiCachesUpdateRequest` | `v1ApisApiCachesUpdateRequestSchema` | `src/models/v1-apis-api-caches-update-request.ts` |
| `UpdateApiCacheResponse` | `updateApiCacheResponseSchema` | `src/models/update-api-cache-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

