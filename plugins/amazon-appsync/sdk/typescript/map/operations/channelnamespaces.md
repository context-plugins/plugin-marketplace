<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channelnamespaces — operations

Accessor: `client.channelnamespaces` · Source: `src/resources/channelnamespaces.ts` · 5 operations · Request and error types: namespace `Channelnamespaces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createChannelNamespace

- **Signature**: `createChannelNamespace(request: Channelnamespaces.CreateChannelNamespaceRequest, options?: RequestOptions): ApiPromise<CreateChannelNamespaceResponse, Channelnamespaces.CreateChannelNamespaceError>`
- **Wire**: `POST /v2/apis/{apiId}/channelNamespaces`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateChannelNamespaceResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Channelnamespaces.CreateChannelNamespaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channelnamespaces.CreateChannelNamespaceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V2ApisChannelNamespacesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ApisChannelNamespacesRequest` | `v2ApisChannelNamespacesRequestSchema` | `src/models/v2-apis-channel-namespaces-request.ts` |
| `CreateChannelNamespaceResponse` | `createChannelNamespaceResponseSchema` | `src/models/create-channel-namespace-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### deleteChannelNamespace

- **Signature**: `deleteChannelNamespace(request: Channelnamespaces.DeleteChannelNamespaceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Channelnamespaces.DeleteChannelNamespaceError>`
- **Wire**: `DELETE /v2/apis/{apiId}/channelNamespaces/{name}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Channelnamespaces.DeleteChannelNamespaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channelnamespaces.DeleteChannelNamespaceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getChannelNamespace

- **Signature**: `getChannelNamespace(request: Channelnamespaces.GetChannelNamespaceRequest, options?: RequestOptions): ApiPromise<GetChannelNamespaceResponse, Channelnamespaces.GetChannelNamespaceError>`
- **Wire**: `GET /v2/apis/{apiId}/channelNamespaces/{name}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetChannelNamespaceResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Channelnamespaces.GetChannelNamespaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channelnamespaces.GetChannelNamespaceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetChannelNamespaceResponse` | `getChannelNamespaceResponseSchema` | `src/models/get-channel-namespace-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### listChannelNamespaces

- **Signature**: `listChannelNamespaces(request: Channelnamespaces.ListChannelNamespacesRequest, options?: RequestOptions): ApiPromise<ListChannelNamespacesResponse, Channelnamespaces.ListChannelNamespacesError>`
- **Wire**: `GET /v2/apis/{apiId}/channelNamespaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListChannelNamespacesResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Channelnamespaces.ListChannelNamespacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channelnamespaces.ListChannelNamespacesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListChannelNamespacesResponse` | `listChannelNamespacesResponseSchema` | `src/models/list-channel-namespaces-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### updateChannelNamespace

- **Signature**: `updateChannelNamespace(request: Channelnamespaces.UpdateChannelNamespaceRequest, options?: RequestOptions): ApiPromise<UpdateChannelNamespaceResponse, Channelnamespaces.UpdateChannelNamespaceError>`
- **Wire**: `POST /v2/apis/{apiId}/channelNamespaces/{name}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateChannelNamespaceResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Channelnamespaces.UpdateChannelNamespaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channelnamespaces.UpdateChannelNamespaceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |
| `body` | `body` | `V2ApisChannelNamespacesRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ApisChannelNamespacesRequest1` | `v2ApisChannelNamespacesRequest1Schema` | `src/models/v2-apis-channel-namespaces-request1.ts` |
| `UpdateChannelNamespaceResponse` | `updateChannelNamespaceResponseSchema` | `src/models/update-channel-namespace-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

