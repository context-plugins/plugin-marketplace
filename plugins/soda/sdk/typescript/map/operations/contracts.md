<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contracts — operations

Accessor: `client.contracts` · Source: `src/resources/contracts.ts` · 10 operations · Request and error types: namespace `Contracts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Contracts

- **Signature**: `getApiV1Contracts(request?: Contracts.GetApiV1ContractsRequest, options?: RequestOptions): ApiPromise<PublicApiListContractsResponse, Contracts.GetApiV1ContractsError>`
- **Wire**: `GET /api/v1/contracts`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListContractsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.GetApiV1ContractsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.GetApiV1ContractsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `query` | `string` | no |
| `datasetQualifiedName` | `query` | `string` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiListContractsResponse` | `publicApiListContractsResponseSchema` | `src/models/public-api-list-contracts-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1ContractsActionsCreateSkeletonOperationId

- **Signature**: `getApiV1ContractsActionsCreateSkeletonOperationId(request: Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdRequest, options?: RequestOptions): ApiPromise<PublicApiCreateSkeletonContractStatusResponse, Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdError>`
- **Wire**: `GET /api/v1/contracts/actions/createSkeleton/{operationId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiCreateSkeletonContractStatusResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `operationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateSkeletonContractStatusResponse` | `publicApiCreateSkeletonContractStatusResponseSchema` | `src/models/public-api-create-skeleton-contract-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1ContractsActionsGenerateOperationId

- **Signature**: `getApiV1ContractsActionsGenerateOperationId(request: Contracts.GetApiV1ContractsActionsGenerateOperationIdRequest, options?: RequestOptions): ApiPromise<PublicApiGenerateContractStatusResponse, Contracts.GetApiV1ContractsActionsGenerateOperationIdError>`
- **Wire**: `GET /api/v1/contracts/actions/generate/{operationId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiGenerateContractStatusResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.GetApiV1ContractsActionsGenerateOperationIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.GetApiV1ContractsActionsGenerateOperationIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `operationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiGenerateContractStatusResponse` | `publicApiGenerateContractStatusResponseSchema` | `src/models/public-api-generate-contract-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1ContractsContractId

- **Signature**: `getApiV1ContractsContractId(request: Contracts.GetApiV1ContractsContractIdRequest, options?: RequestOptions): ApiPromise<PublicApiGetContractResponse, Contracts.GetApiV1ContractsContractIdError>`
- **Wire**: `GET /api/v1/contracts/{contractId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiGetContractResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.GetApiV1ContractsContractIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.GetApiV1ContractsContractIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contractId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiGetContractResponse` | `publicApiGetContractResponseSchema` | `src/models/public-api-get-contract-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1ContractsContractIdVersions

- **Signature**: `getApiV1ContractsContractIdVersions(request: Contracts.GetApiV1ContractsContractIdVersionsRequest, options?: RequestOptions): ApiPromise<PublicApiListContractVersionsResponse, Contracts.GetApiV1ContractsContractIdVersionsError>`
- **Wire**: `GET /api/v1/contracts/{contractId}/versions`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListContractVersionsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.GetApiV1ContractsContractIdVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.GetApiV1ContractsContractIdVersionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contractId` | `path` | `string` | yes |
| `createdBefore` | `query` | `Date` (date-time) | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiListContractVersionsResponse` | `publicApiListContractVersionsResponseSchema` | `src/models/public-api-list-contract-versions-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1Contracts

- **Signature**: `postApiV1Contracts(request: Contracts.PostApiV1ContractsRequest, options?: RequestOptions): ApiPromise<PublicApiGetContractResponse, Contracts.PostApiV1ContractsError>`
- **Wire**: `POST /api/v1/contracts`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiGetContractResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.PostApiV1ContractsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.PostApiV1ContractsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiCreateContractRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateContractRequestDto` | `publicApiCreateContractRequestDtoSchema` | `src/models/public-api-create-contract-request-dto.ts` |
| `PublicApiGetContractResponse` | `publicApiGetContractResponseSchema` | `src/models/public-api-get-contract-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1ContractsActionsCreateSkeleton

- **Signature**: `postApiV1ContractsActionsCreateSkeleton(request: Contracts.PostApiV1ContractsActionsCreateSkeletonRequest, options?: RequestOptions): ApiPromise<undefined, Contracts.PostApiV1ContractsActionsCreateSkeletonError>`
- **Wire**: `POST /api/v1/contracts/actions/createSkeleton`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.PostApiV1ContractsActionsCreateSkeletonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.PostApiV1ContractsActionsCreateSkeletonRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiCreateSkeletonContractRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateSkeletonContractRequestDto` | `publicApiCreateSkeletonContractRequestDtoSchema` | `src/models/public-api-create-skeleton-contract-request-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1ContractsActionsGenerate

- **Signature**: `postApiV1ContractsActionsGenerate(request: Contracts.PostApiV1ContractsActionsGenerateRequest, options?: RequestOptions): ApiPromise<undefined, Contracts.PostApiV1ContractsActionsGenerateError>`
- **Wire**: `POST /api/v1/contracts/actions/generate`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.PostApiV1ContractsActionsGenerateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.PostApiV1ContractsActionsGenerateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiGenerateContractRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiGenerateContractRequestDto` | `publicApiGenerateContractRequestDtoSchema` | `src/models/public-api-generate-contract-request-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1ContractsContractId

- **Signature**: `postApiV1ContractsContractId(request: Contracts.PostApiV1ContractsContractIdRequest, options?: RequestOptions): ApiPromise<PublicApiGetContractResponse, Contracts.PostApiV1ContractsContractIdError>`
- **Wire**: `POST /api/v1/contracts/{contractId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiGetContractResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.PostApiV1ContractsContractIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.PostApiV1ContractsContractIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contractId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiPublishContractRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiPublishContractRequestDto` | `publicApiPublishContractRequestDtoSchema` | `src/models/public-api-publish-contract-request-dto.ts` |
| `PublicApiGetContractResponse` | `publicApiGetContractResponseSchema` | `src/models/public-api-get-contract-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1ContractsContractIdVerify

- **Signature**: `postApiV1ContractsContractIdVerify(request: Contracts.PostApiV1ContractsContractIdVerifyRequest, options?: RequestOptions): ApiPromise<undefined, Contracts.PostApiV1ContractsContractIdVerifyError>`
- **Wire**: `POST /api/v1/contracts/{contractId}/verify`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `Contracts.PostApiV1ContractsContractIdVerifyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contracts.PostApiV1ContractsContractIdVerifyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contractId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiVerifyContractRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiVerifyContractRequestDto` | `publicApiVerifyContractRequestDtoSchema` | `src/models/public-api-verify-contract-request-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

