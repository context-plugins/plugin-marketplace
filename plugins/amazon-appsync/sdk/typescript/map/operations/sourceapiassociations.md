<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sourceapiassociations — operations

Accessor: `client.sourceapiassociations` · Source: `src/resources/sourceapiassociations.ts` · 5 operations · Request and error types: namespace `Sourceapiassociations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### associateSourceGraphqlApi

- **Signature**: `associateSourceGraphqlApi(request: Sourceapiassociations.AssociateSourceGraphqlApiRequest, options?: RequestOptions): ApiPromise<AssociateSourceGraphqlApiResponse, Sourceapiassociations.AssociateSourceGraphqlApiError>`
- **Wire**: `POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssociateSourceGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Sourceapiassociations.AssociateSourceGraphqlApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sourceapiassociations.AssociateSourceGraphqlApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mergedApiIdentifier` | `path` | `string` | yes |
| `body` | `body` | `V1MergedApisSourceApiAssociationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MergedApisSourceApiAssociationsRequest` | `v1MergedApisSourceApiAssociationsRequestSchema` | `src/models/v1-merged-apis-source-api-associations-request.ts` |
| `AssociateSourceGraphqlApiResponse` | `associateSourceGraphqlApiResponseSchema` | `src/models/associate-source-graphql-api-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### disassociateSourceGraphqlApi

- **Signature**: `disassociateSourceGraphqlApi(request: Sourceapiassociations.DisassociateSourceGraphqlApiRequest, options?: RequestOptions): ApiPromise<DisassociateSourceGraphqlApiResponse, Sourceapiassociations.DisassociateSourceGraphqlApiError>`
- **Wire**: `DELETE /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisassociateSourceGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Sourceapiassociations.DisassociateSourceGraphqlApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sourceapiassociations.DisassociateSourceGraphqlApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mergedApiIdentifier` | `path` | `string` | yes |
| `associationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisassociateSourceGraphqlApiResponse` | `disassociateSourceGraphqlApiResponseSchema` | `src/models/disassociate-source-graphql-api-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getSourceApiAssociation

- **Signature**: `getSourceApiAssociation(request: Sourceapiassociations.GetSourceApiAssociationRequest, options?: RequestOptions): ApiPromise<GetSourceApiAssociationResponse, Sourceapiassociations.GetSourceApiAssociationError>`
- **Wire**: `GET /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetSourceApiAssociationResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Sourceapiassociations.GetSourceApiAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sourceapiassociations.GetSourceApiAssociationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mergedApiIdentifier` | `path` | `string` | yes |
| `associationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSourceApiAssociationResponse` | `getSourceApiAssociationResponseSchema` | `src/models/get-source-api-association-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### listSourceApiAssociations

- **Signature**: `listSourceApiAssociations(request: Sourceapiassociations.ListSourceApiAssociationsRequest, options?: RequestOptions): ApiPromise<ListSourceApiAssociationsResponse, Sourceapiassociations.ListSourceApiAssociationsError>`
- **Wire**: `GET /v1/apis/{apiId}/sourceApiAssociations`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSourceApiAssociationsResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Sourceapiassociations.ListSourceApiAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sourceapiassociations.ListSourceApiAssociationsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSourceApiAssociationsResponse` | `listSourceApiAssociationsResponseSchema` | `src/models/list-source-api-associations-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### updateSourceApiAssociation

- **Signature**: `updateSourceApiAssociation(request: Sourceapiassociations.UpdateSourceApiAssociationRequest, options?: RequestOptions): ApiPromise<UpdateSourceApiAssociationResponse, Sourceapiassociations.UpdateSourceApiAssociationError>`
- **Wire**: `POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateSourceApiAssociationResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Sourceapiassociations.UpdateSourceApiAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sourceapiassociations.UpdateSourceApiAssociationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `associationId` | `path` | `string` | yes |
| `mergedApiIdentifier` | `path` | `string` | yes |
| `body` | `body` | `V1MergedApisSourceApiAssociationsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MergedApisSourceApiAssociationsRequest1` | `v1MergedApisSourceApiAssociationsRequest1Schema` | `src/models/v1-merged-apis-source-api-associations-request1.ts` |
| `UpdateSourceApiAssociationResponse` | `updateSourceApiAssociationResponseSchema` | `src/models/update-source-api-association-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

