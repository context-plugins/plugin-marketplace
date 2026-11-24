<!-- Generated file — do not edit; regenerated with the SDK. -->

# GraphqlApis — operations

Accessor: `client.graphqlApis` · Source: `src/resources/graphql-apis.ts` · 6 operations · Request and error types: namespace `GraphqlApis`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createGraphqlApi2

- **Signature**: `createGraphqlApi2(request?: GraphqlApis.CreateGraphqlApi2Request, options?: RequestOptions): ApiPromise<CreateGraphqlApiResponse, GraphqlApis.CreateGraphqlApi2Error>`
- **Wire**: `POST /v1/apis`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `GraphqlApis.CreateGraphqlApi2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiLimitExceededException"` [400] `ApiLimitExceededException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GraphqlApis.CreateGraphqlApi2Request` (1):

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

### deleteGraphqlApi2

- **Signature**: `deleteGraphqlApi2(request: GraphqlApis.DeleteGraphqlApi2Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, GraphqlApis.DeleteGraphqlApi2Error>`
- **Wire**: `DELETE /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `GraphqlApis.DeleteGraphqlApi2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GraphqlApis.DeleteGraphqlApi2Request` (1):

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

### evaluateMappingTemplate

- **Signature**: `evaluateMappingTemplate(request?: GraphqlApis.EvaluateMappingTemplateRequest, options?: RequestOptions): ApiPromise<EvaluateMappingTemplateResponse, GraphqlApis.EvaluateMappingTemplateError>`
- **Wire**: `POST /v1/dataplane-evaluatetemplate`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EvaluateMappingTemplateResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `GraphqlApis.EvaluateMappingTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GraphqlApis.EvaluateMappingTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1DataplaneEvaluatetemplateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DataplaneEvaluatetemplateRequest` | `v1DataplaneEvaluatetemplateRequestSchema` | `src/models/v1-dataplane-evaluatetemplate-request.ts` |
| `EvaluateMappingTemplateResponse` | `evaluateMappingTemplateResponseSchema` | `src/models/evaluate-mapping-template-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |

### getGraphqlApi2

- **Signature**: `getGraphqlApi2(request: GraphqlApis.GetGraphqlApi2Request, options?: RequestOptions): ApiPromise<GetGraphqlApiResponse, GraphqlApis.GetGraphqlApi2Error>`
- **Wire**: `GET /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `GraphqlApis.GetGraphqlApi2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GraphqlApis.GetGraphqlApi2Request` (1):

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

### listGraphqlApis2

- **Signature**: `listGraphqlApis2(request?: GraphqlApis.ListGraphqlApis2Request, options?: RequestOptions): ApiPromise<ListGraphqlApisResponse, GraphqlApis.ListGraphqlApis2Error>`
- **Wire**: `GET /v1/apis`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListGraphqlApisResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `GraphqlApis.ListGraphqlApis2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GraphqlApis.ListGraphqlApis2Request` (4):

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

### updateGraphqlApi2

- **Signature**: `updateGraphqlApi2(request: GraphqlApis.UpdateGraphqlApi2Request, options?: RequestOptions): ApiPromise<UpdateGraphqlApiResponse, GraphqlApis.UpdateGraphqlApi2Error>`
- **Wire**: `POST /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateGraphqlApiResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `GraphqlApis.UpdateGraphqlApi2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GraphqlApis.UpdateGraphqlApi2Request` (2):

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

