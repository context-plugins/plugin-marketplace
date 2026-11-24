<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apis — operations

Accessor: `client.apis` · Source: `src/resources/apis.ts` · 10 operations · Request and error types: namespace `Apis`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createApi

- **Signature**: `createApi(request?: Apis.CreateApiRequest, options?: RequestOptions): ApiPromise<CreateApiResponse, Apis.CreateApiError>`
- **Wire**: `POST /v2/apis`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.CreateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.CreateApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V2ApisRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ApisRequest` | `v2ApisRequestSchema` | `src/models/v2-apis-request.ts` |
| `CreateApiResponse` | `createApiResponseSchema` | `src/models/create-api-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### createGraphqlApi

- **Signature**: `createGraphqlApi(request?: Apis.CreateGraphqlApiRequest, options?: RequestOptions): ApiPromise<CreateGraphqlApiResponse, Apis.CreateGraphqlApiError>`
- **Wire**: `POST /v1/apis`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.CreateGraphqlApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiLimitExceededException"` [400] `ApiLimitExceededException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.CreateGraphqlApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ApisRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisRequest` | `v1ApisRequestSchema` | `src/models/v1-apis-request.ts` |
| `CreateGraphqlApiResponse` | `createGraphqlApiResponseSchema` | `src/models/create-graphql-api-response.ts` |
| `ApiLimitExceededException` | `apiLimitExceededExceptionSchema` | `src/models/api-limit-exceeded-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### deleteApi

- **Signature**: `deleteApi(request: Apis.DeleteApiRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Apis.DeleteApiError>`
- **Wire**: `DELETE /v2/apis/{apiId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.DeleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.DeleteApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### deleteGraphqlApi

- **Signature**: `deleteGraphqlApi(request: Apis.DeleteGraphqlApiRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Apis.DeleteGraphqlApiError>`
- **Wire**: `DELETE /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.DeleteGraphqlApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.DeleteGraphqlApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getApi

- **Signature**: `getApi(request: Apis.GetApiRequest, options?: RequestOptions): ApiPromise<GetApiResponse, Apis.GetApiError>`
- **Wire**: `GET /v2/apis/{apiId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.GetApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.GetApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetApiResponse` | `getApiResponseSchema` | `src/models/get-api-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getGraphqlApi

- **Signature**: `getGraphqlApi(request: Apis.GetGraphqlApiRequest, options?: RequestOptions): ApiPromise<GetGraphqlApiResponse, Apis.GetGraphqlApiError>`
- **Wire**: `GET /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.GetGraphqlApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.GetGraphqlApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetGraphqlApiResponse` | `getGraphqlApiResponseSchema` | `src/models/get-graphql-api-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### listApis

- **Signature**: `listApis(request?: Apis.ListApisRequest, options?: RequestOptions): ApiPromise<ListApisResponse, Apis.ListApisError>`
- **Wire**: `GET /v2/apis`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListApisResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.ListApisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.ListApisRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListApisResponse` | `listApisResponseSchema` | `src/models/list-apis-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### listGraphqlApis

- **Signature**: `listGraphqlApis(request?: Apis.ListGraphqlApisRequest, options?: RequestOptions): ApiPromise<ListGraphqlApisResponse, Apis.ListGraphqlApisError>`
- **Wire**: `GET /v1/apis`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListGraphqlApisResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.ListGraphqlApisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.ListGraphqlApisRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |
| `apiType` | `query` | `ApiType2` | no |
| `owner` | `query` | `Owner` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiType2` | `apiType2Schema` | `src/models/api-type2.ts` |
| `Owner` | `ownerSchema` | `src/models/owner.ts` |
| `ListGraphqlApisResponse` | `listGraphqlApisResponseSchema` | `src/models/list-graphql-apis-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### updateApi

- **Signature**: `updateApi(request: Apis.UpdateApiRequest, options?: RequestOptions): ApiPromise<UpdateApiResponse, Apis.UpdateApiError>`
- **Wire**: `POST /v2/apis/{apiId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.UpdateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.UpdateApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V2ApisRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ApisRequest1` | `v2ApisRequest1Schema` | `src/models/v2-apis-request1.ts` |
| `UpdateApiResponse` | `updateApiResponseSchema` | `src/models/update-api-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### updateGraphqlApi

- **Signature**: `updateGraphqlApi(request: Apis.UpdateGraphqlApiRequest, options?: RequestOptions): ApiPromise<UpdateGraphqlApiResponse, Apis.UpdateGraphqlApiError>`
- **Wire**: `POST /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Apis.UpdateGraphqlApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apis.UpdateGraphqlApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisRequest1` | `v1ApisRequest1Schema` | `src/models/v1-apis-request1.ts` |
| `UpdateGraphqlApiResponse` | `updateGraphqlApiResponseSchema` | `src/models/update-graphql-api-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

