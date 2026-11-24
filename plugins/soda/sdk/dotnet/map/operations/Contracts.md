<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contracts — operations

Accessor: `client.Contracts` · Source: `src/Soda/Api/Contracts.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Contracts

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1Contracts(GetApiV1ContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `datasetId` ← `DatasetId`, `datasetQualifiedName` ← `DatasetQualifiedName`, `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiListContractsResponse`
- **Error**: `ApiException<GetApiV1ContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ContractsRequest` | `src/Soda/Requests/Contracts/GetApiV1ContractsRequest.cs` |
| `PublicApiListContractsResponse` | `src/Soda/Models/PublicApiListContractsResponse.cs` |
| `GetApiV1ContractsError` | `src/Soda/Errors/GetApiV1ContractsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1ContractsActionsCreateSkeletonOperationId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1ContractsActionsCreateSkeletonOperationId(GetApiV1ContractsActionsCreateSkeletonOperationIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OperationId`
- **Returns**: `PublicApiCreateSkeletonContractStatusResponse`
- **Error**: `ApiException<GetApiV1ContractsActionsCreateSkeletonOperationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ContractsActionsCreateSkeletonOperationIdRequest` | `src/Soda/Requests/Contracts/GetApiV1ContractsActionsCreateSkeletonOperationIdRequest.cs` |
| `PublicApiCreateSkeletonContractStatusResponse` | `src/Soda/Models/PublicApiCreateSkeletonContractStatusResponse.cs` |
| `GetApiV1ContractsActionsCreateSkeletonOperationIdError` | `src/Soda/Errors/GetApiV1ContractsActionsCreateSkeletonOperationIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1ContractsActionsGenerateOperationId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1ContractsActionsGenerateOperationId(GetApiV1ContractsActionsGenerateOperationIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OperationId`
- **Returns**: `PublicApiGenerateContractStatusResponse`
- **Error**: `ApiException<GetApiV1ContractsActionsGenerateOperationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ContractsActionsGenerateOperationIdRequest` | `src/Soda/Requests/Contracts/GetApiV1ContractsActionsGenerateOperationIdRequest.cs` |
| `PublicApiGenerateContractStatusResponse` | `src/Soda/Models/PublicApiGenerateContractStatusResponse.cs` |
| `GetApiV1ContractsActionsGenerateOperationIdError` | `src/Soda/Errors/GetApiV1ContractsActionsGenerateOperationIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1ContractsContractId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1ContractsContractId(GetApiV1ContractsContractIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContractId`
- **Returns**: `PublicApiGetContractResponse`
- **Error**: `ApiException<GetApiV1ContractsContractIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ContractsContractIdRequest` | `src/Soda/Requests/Contracts/GetApiV1ContractsContractIdRequest.cs` |
| `PublicApiGetContractResponse` | `src/Soda/Models/PublicApiGetContractResponse.cs` |
| `GetApiV1ContractsContractIdError` | `src/Soda/Errors/GetApiV1ContractsContractIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1ContractsContractIdVersions

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1ContractsContractIdVersions(GetApiV1ContractsContractIdVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContractId`
- **Query params (wire ← C#)**: `createdBefore` ← `CreatedBefore`, `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiListContractVersionsResponse`
- **Error**: `ApiException<GetApiV1ContractsContractIdVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ContractsContractIdVersionsRequest` | `src/Soda/Requests/Contracts/GetApiV1ContractsContractIdVersionsRequest.cs` |
| `PublicApiListContractVersionsResponse` | `src/Soda/Models/PublicApiListContractVersionsResponse.cs` |
| `GetApiV1ContractsContractIdVersionsError` | `src/Soda/Errors/GetApiV1ContractsContractIdVersionsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1Contracts

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1Contracts(PostApiV1ContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiGetContractResponse`
- **Error**: `ApiException<PostApiV1ContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ContractsRequest` | `src/Soda/Requests/Contracts/PostApiV1ContractsRequest.cs` |
| `PublicApiCreateContractRequestDto` | `src/Soda/Models/PublicApiCreateContractRequestDto.cs` |
| `PublicApiGetContractResponse` | `src/Soda/Models/PublicApiGetContractResponse.cs` |
| `PostApiV1ContractsError` | `src/Soda/Errors/PostApiV1ContractsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1ContractsActionsCreateSkeleton

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1ContractsActionsCreateSkeleton(PostApiV1ContractsActionsCreateSkeletonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1ContractsActionsCreateSkeletonError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ContractsActionsCreateSkeletonRequest` | `src/Soda/Requests/Contracts/PostApiV1ContractsActionsCreateSkeletonRequest.cs` |
| `PublicApiCreateSkeletonContractRequestDto` | `src/Soda/Models/PublicApiCreateSkeletonContractRequestDto.cs` |
| `PostApiV1ContractsActionsCreateSkeletonError` | `src/Soda/Errors/PostApiV1ContractsActionsCreateSkeletonError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1ContractsActionsGenerate

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1ContractsActionsGenerate(PostApiV1ContractsActionsGenerateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1ContractsActionsGenerateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ContractsActionsGenerateRequest` | `src/Soda/Requests/Contracts/PostApiV1ContractsActionsGenerateRequest.cs` |
| `PublicApiGenerateContractRequestDto` | `src/Soda/Models/PublicApiGenerateContractRequestDto.cs` |
| `PostApiV1ContractsActionsGenerateError` | `src/Soda/Errors/PostApiV1ContractsActionsGenerateError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1ContractsContractId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1ContractsContractId(PostApiV1ContractsContractIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContractId`, `Body`
- **Returns**: `PublicApiGetContractResponse`
- **Error**: `ApiException<PostApiV1ContractsContractIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ContractsContractIdRequest` | `src/Soda/Requests/Contracts/PostApiV1ContractsContractIdRequest.cs` |
| `PublicApiPublishContractRequestDto` | `src/Soda/Models/PublicApiPublishContractRequestDto.cs` |
| `PublicApiGetContractResponse` | `src/Soda/Models/PublicApiGetContractResponse.cs` |
| `PostApiV1ContractsContractIdError` | `src/Soda/Errors/PostApiV1ContractsContractIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1ContractsContractIdVerify

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1ContractsContractIdVerify(PostApiV1ContractsContractIdVerifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContractId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1ContractsContractIdVerifyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ContractsContractIdVerifyRequest` | `src/Soda/Requests/Contracts/PostApiV1ContractsContractIdVerifyRequest.cs` |
| `PublicApiVerifyContractRequestDto` | `src/Soda/Models/PublicApiVerifyContractRequestDto.cs` |
| `PostApiV1ContractsContractIdVerifyError` | `src/Soda/Errors/PostApiV1ContractsContractIdVerifyError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

