<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainNames — operations

Accessor: `client.domainNames` · Source: `src/resources/domain-names.ts` · 8 operations · Request and error types: namespace `DomainNames`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### associateApi

- **Signature**: `associateApi(request: DomainNames.AssociateApiRequest, options?: RequestOptions): ApiPromise<AssociateApiResponse, DomainNames.AssociateApiError>`
- **Wire**: `POST /v1/domainnames/{domainName}/apiassociation`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssociateApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DomainNames.AssociateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainNames.AssociateApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domainName` | `path` | `string` | yes |
| `body` | `body` | `V1DomainnamesApiassociationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DomainnamesApiassociationRequest` | `v1DomainnamesApiassociationRequestSchema` | `src/models/v1-domainnames-apiassociation-request.ts` |
| `AssociateApiResponse` | `associateApiResponseSchema` | `src/models/associate-api-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### createDomainName

- **Signature**: `createDomainName(request?: DomainNames.CreateDomainNameRequest, options?: RequestOptions): ApiPromise<CreateDomainNameResponse, DomainNames.CreateDomainNameError>`
- **Wire**: `POST /v1/domainnames`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateDomainNameResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DomainNames.CreateDomainNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainNames.CreateDomainNameRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1DomainnamesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DomainnamesRequest` | `v1DomainnamesRequestSchema` | `src/models/v1-domainnames-request.ts` |
| `CreateDomainNameResponse` | `createDomainNameResponseSchema` | `src/models/create-domain-name-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |

### deleteDomainName

- **Signature**: `deleteDomainName(request: DomainNames.DeleteDomainNameRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, DomainNames.DeleteDomainNameError>`
- **Wire**: `DELETE /v1/domainnames/{domainName}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DomainNames.DeleteDomainNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainNames.DeleteDomainNameRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domainName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### disassociateApi

- **Signature**: `disassociateApi(request: DomainNames.DisassociateApiRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, DomainNames.DisassociateApiError>`
- **Wire**: `DELETE /v1/domainnames/{domainName}/apiassociation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DomainNames.DisassociateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainNames.DisassociateApiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domainName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getApiAssociation

- **Signature**: `getApiAssociation(request: DomainNames.GetApiAssociationRequest, options?: RequestOptions): ApiPromise<GetApiAssociationResponse, DomainNames.GetApiAssociationError>`
- **Wire**: `GET /v1/domainnames/{domainName}/apiassociation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetApiAssociationResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DomainNames.GetApiAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainNames.GetApiAssociationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domainName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetApiAssociationResponse` | `getApiAssociationResponseSchema` | `src/models/get-api-association-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getDomainName

- **Signature**: `getDomainName(request: DomainNames.GetDomainNameRequest, options?: RequestOptions): ApiPromise<GetDomainNameResponse, DomainNames.GetDomainNameError>`
- **Wire**: `GET /v1/domainnames/{domainName}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetDomainNameResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DomainNames.GetDomainNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainNames.GetDomainNameRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domainName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDomainNameResponse` | `getDomainNameResponseSchema` | `src/models/get-domain-name-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### listDomainNames

- **Signature**: `listDomainNames(request?: DomainNames.ListDomainNamesRequest, options?: RequestOptions): ApiPromise<ListDomainNamesResponse, DomainNames.ListDomainNamesError>`
- **Wire**: `GET /v1/domainnames`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDomainNamesResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DomainNames.ListDomainNamesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainNames.ListDomainNamesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListDomainNamesResponse` | `listDomainNamesResponseSchema` | `src/models/list-domain-names-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |

### updateDomainName

- **Signature**: `updateDomainName(request: DomainNames.UpdateDomainNameRequest, options?: RequestOptions): ApiPromise<UpdateDomainNameResponse, DomainNames.UpdateDomainNameError>`
- **Wire**: `POST /v1/domainnames/{domainName}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateDomainNameResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DomainNames.UpdateDomainNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainNames.UpdateDomainNameRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domainName` | `path` | `string` | yes |
| `body` | `body` | `V1DomainnamesRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DomainnamesRequest1` | `v1DomainnamesRequest1Schema` | `src/models/v1-domainnames-request1.ts` |
| `UpdateDomainNameResponse` | `updateDomainNameResponseSchema` | `src/models/update-domain-name-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

