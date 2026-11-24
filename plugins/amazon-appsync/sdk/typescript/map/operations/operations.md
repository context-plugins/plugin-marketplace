<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 9 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### associateMergedGraphqlApi

- **Signature**: `associateMergedGraphqlApi(request: Operations.AssociateMergedGraphqlApiRequest, options?: RequestOptions): ApiPromise<AssociateMergedGraphqlApiResponse, Operations.AssociateMergedGraphqlApiError>`
- **Wire**: `POST /v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssociateMergedGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Operations.AssociateMergedGraphqlApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.AssociateMergedGraphqlApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourceApiIdentifier` | `path` | `string` | yes |
| `body` | `body` | `V1SourceApisMergedApiAssociationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SourceApisMergedApiAssociationsRequest` | `v1SourceApisMergedApiAssociationsRequestSchema` | `src/models/v1-source-apis-merged-api-associations-request.ts` |
| `AssociateMergedGraphqlApiResponse` | `associateMergedGraphqlApiResponseSchema` | `src/models/associate-merged-graphql-api-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### disassociateMergedGraphqlApi

- **Signature**: `disassociateMergedGraphqlApi(request: Operations.DisassociateMergedGraphqlApiRequest, options?: RequestOptions): ApiPromise<DisassociateMergedGraphqlApiResponse, Operations.DisassociateMergedGraphqlApiError>`
- **Wire**: `DELETE /v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisassociateMergedGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Operations.DisassociateMergedGraphqlApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DisassociateMergedGraphqlApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourceApiIdentifier` | `path` | `string` | yes |
| `associationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisassociateMergedGraphqlApiResponse` | `disassociateMergedGraphqlApiResponseSchema` | `src/models/disassociate-merged-graphql-api-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### evaluateCode

- **Signature**: `evaluateCode(request?: Operations.EvaluateCodeRequest, options?: RequestOptions): ApiPromise<EvaluateCodeResponse, Operations.EvaluateCodeError>`
- **Wire**: `POST /v1/dataplane-evaluatecode`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EvaluateCodeResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Operations.EvaluateCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.EvaluateCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1DataplaneEvaluatecodeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DataplaneEvaluatecodeRequest` | `v1DataplaneEvaluatecodeRequestSchema` | `src/models/v1-dataplane-evaluatecode-request.ts` |
| `EvaluateCodeResponse` | `evaluateCodeResponseSchema` | `src/models/evaluate-code-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |

### flushApiCache

- **Signature**: `flushApiCache(request: Operations.FlushApiCacheRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Operations.FlushApiCacheError>`
- **Wire**: `DELETE /v1/apis/{apiId}/FlushCache`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Operations.FlushApiCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.FlushApiCacheRequest` (1):

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

### getGraphqlApiEnvironmentVariables

- **Signature**: `getGraphqlApiEnvironmentVariables(request: Operations.GetGraphqlApiEnvironmentVariablesRequest, options?: RequestOptions): ApiPromise<GetGraphqlApiEnvironmentVariablesResponse, Operations.GetGraphqlApiEnvironmentVariablesError>`
- **Wire**: `GET /v1/apis/{apiId}/environmentVariables`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetGraphqlApiEnvironmentVariablesResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Operations.GetGraphqlApiEnvironmentVariablesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.GetGraphqlApiEnvironmentVariablesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetGraphqlApiEnvironmentVariablesResponse` | `getGraphqlApiEnvironmentVariablesResponseSchema` | `src/models/get-graphql-api-environment-variables-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getSchemaCreationStatus

- **Signature**: `getSchemaCreationStatus(request: Operations.GetSchemaCreationStatusRequest, options?: RequestOptions): ApiPromise<GetSchemaCreationStatusResponse, Operations.GetSchemaCreationStatusError>`
- **Wire**: `GET /v1/apis/{apiId}/schemacreation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetSchemaCreationStatusResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Operations.GetSchemaCreationStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.GetSchemaCreationStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSchemaCreationStatusResponse` | `getSchemaCreationStatusResponseSchema` | `src/models/get-schema-creation-status-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### putGraphqlApiEnvironmentVariables

- **Signature**: `putGraphqlApiEnvironmentVariables(request: Operations.PutGraphqlApiEnvironmentVariablesRequest, options?: RequestOptions): ApiPromise<PutGraphqlApiEnvironmentVariablesResponse, Operations.PutGraphqlApiEnvironmentVariablesError>`
- **Wire**: `PUT /v1/apis/{apiId}/environmentVariables`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutGraphqlApiEnvironmentVariablesResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Operations.PutGraphqlApiEnvironmentVariablesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.PutGraphqlApiEnvironmentVariablesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisEnvironmentVariablesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisEnvironmentVariablesRequest` | `v1ApisEnvironmentVariablesRequestSchema` | `src/models/v1-apis-environment-variables-request.ts` |
| `PutGraphqlApiEnvironmentVariablesResponse` | `putGraphqlApiEnvironmentVariablesResponseSchema` | `src/models/put-graphql-api-environment-variables-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### startSchemaCreation

- **Signature**: `startSchemaCreation(request: Operations.StartSchemaCreationRequest, options?: RequestOptions): ApiPromise<StartSchemaCreationResponse, Operations.StartSchemaCreationError>`
- **Wire**: `POST /v1/apis/{apiId}/schemacreation`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartSchemaCreationResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Operations.StartSchemaCreationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.StartSchemaCreationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisSchemacreationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisSchemacreationRequest` | `v1ApisSchemacreationRequestSchema` | `src/models/v1-apis-schemacreation-request.ts` |
| `StartSchemaCreationResponse` | `startSchemaCreationResponseSchema` | `src/models/start-schema-creation-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### startSchemaMerge

- **Signature**: `startSchemaMerge(request: Operations.StartSchemaMergeRequest, options?: RequestOptions): ApiPromise<StartSchemaMergeResponse, Operations.StartSchemaMergeError>`
- **Wire**: `POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartSchemaMergeResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `Operations.StartSchemaMergeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.StartSchemaMergeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `associationId` | `path` | `string` | yes |
| `mergedApiIdentifier` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartSchemaMergeResponse` | `startSchemaMergeResponseSchema` | `src/models/start-schema-merge-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

