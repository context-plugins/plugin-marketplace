<!-- Generated file — do not edit; regenerated with the SDK. -->

# Exports — operations

Accessor: `client.Exports` · Source: `src/AmazonLex/Api/Exports.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateExport

- **Server group**: `DefaultAmazonLexModelBuildingV2ExportsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `CreateExport(CreateExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreateExportResponse`
- **Error**: `ApiException<CreateExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateExportOperationRequest` | `src/AmazonLex/Requests/Exports/CreateExportOperationRequest.cs` |
| `CreateExportRequest` | `src/AmazonLex/Models/CreateExportRequest.cs` |
| `CreateExportResponse` | `src/AmazonLex/Models/CreateExportResponse.cs` |
| `CreateExportError` | `src/AmazonLex/Errors/CreateExportError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DeleteExport

- **Server group**: `DefaultAmazonLexModelBuildingV2ExportsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteExport(DeleteExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExportId`
- **Returns**: `DeleteExportResponse`
- **Error**: `ApiException<DeleteExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteExportOperationRequest` | `src/AmazonLex/Requests/Exports/DeleteExportOperationRequest.cs` |
| `DeleteExportRequest` | `src/AmazonLex/Models/DeleteExportRequest.cs` |
| `DeleteExportResponse` | `src/AmazonLex/Models/DeleteExportResponse.cs` |
| `DeleteExportError` | `src/AmazonLex/Errors/DeleteExportError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeExport

- **Server group**: `DefaultAmazonLexModelBuildingV2ExportsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeExport(DescribeExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExportId`
- **Returns**: `DescribeExportResponse`
- **Error**: `ApiException<DescribeExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeExportOperationRequest` | `src/AmazonLex/Requests/Exports/DescribeExportOperationRequest.cs` |
| `DescribeExportResponse` | `src/AmazonLex/Models/DescribeExportResponse.cs` |
| `DescribeExportError` | `src/AmazonLex/Errors/DescribeExportError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### GetExport

- **Server group**: `DefaultAmazonLexModelBuildingV2ExportsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetExport(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetExportResponse`
- **Error**: `ApiException<GetExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExportResponse` | `src/AmazonLex/Models/GetExportResponse.cs` |
| `GetExportError` | `src/AmazonLex/Errors/GetExportError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### ListExports

- **Server group**: `DefaultAmazonLexModelBuildingV2ExportsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListExports(ListExportsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListExportsResponse`
- **Error**: `ApiException<ListExportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExportsOperationRequest` | `src/AmazonLex/Requests/Exports/ListExportsOperationRequest.cs` |
| `ListExportsRequest` | `src/AmazonLex/Models/ListExportsRequest.cs` |
| `ListExportsResponse` | `src/AmazonLex/Models/ListExportsResponse.cs` |
| `ListExportsError` | `src/AmazonLex/Errors/ListExportsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### UpdateExport

- **Server group**: `DefaultAmazonLexModelBuildingV2ExportsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UpdateExport(UpdateExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExportId`
- **Returns**: `UpdateExportResponse`
- **Error**: `ApiException<UpdateExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateExportOperationRequest` | `src/AmazonLex/Requests/Exports/UpdateExportOperationRequest.cs` |
| `UpdateExportRequest` | `src/AmazonLex/Models/UpdateExportRequest.cs` |
| `UpdateExportResponse` | `src/AmazonLex/Models/UpdateExportResponse.cs` |
| `UpdateExportError` | `src/AmazonLex/Errors/UpdateExportError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

