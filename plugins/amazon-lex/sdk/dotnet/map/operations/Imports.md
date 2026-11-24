<!-- Generated file — do not edit; regenerated with the SDK. -->

# Imports — operations

Accessor: `client.Imports` · Source: `src/AmazonLex/Api/Imports.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteImport

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DeleteImport(DeleteImportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `DeleteImportResponse`
- **Error**: `ApiException<DeleteImportError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value)` [412] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteImportOperationRequest` | `src/AmazonLex/Requests/Imports/DeleteImportOperationRequest.cs` |
| `DeleteImportRequest` | `src/AmazonLex/Models/DeleteImportRequest.cs` |
| `DeleteImportResponse` | `src/AmazonLex/Models/DeleteImportResponse.cs` |
| `DeleteImportError` | `src/AmazonLex/Errors/DeleteImportError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `PreconditionFailedException` | `src/AmazonLex/Models/PreconditionFailedException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### DescribeImport

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `DescribeImport(DescribeImportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `DescribeImportResponse`
- **Error**: `ApiException<DescribeImportError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeImportOperationRequest` | `src/AmazonLex/Requests/Imports/DescribeImportOperationRequest.cs` |
| `DescribeImportResponse` | `src/AmazonLex/Models/DescribeImportResponse.cs` |
| `DescribeImportError` | `src/AmazonLex/Errors/DescribeImportError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### ListImports

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListImports(ListImportsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListImportsResponse`
- **Error**: `ApiException<ListImportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListImportsOperationRequest` | `src/AmazonLex/Requests/Imports/ListImportsOperationRequest.cs` |
| `ListImportsRequest` | `src/AmazonLex/Models/ListImportsRequest.cs` |
| `ListImportsResponse` | `src/AmazonLex/Models/ListImportsResponse.cs` |
| `ListImportsError` | `src/AmazonLex/Errors/ListImportsError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

### StartImport

- **Server group**: `DefaultAmazonLexModelBuildingV2BotsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartImport(StartImportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StartImportResponse`
- **Error**: `ApiException<StartImportError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetServiceQuotaExceededException([NotNullWhen(true)] out ServiceQuotaExceededException? value)` [402] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartImportOperationRequest` | `src/AmazonLex/Requests/Imports/StartImportOperationRequest.cs` |
| `StartImportRequest` | `src/AmazonLex/Models/StartImportRequest.cs` |
| `StartImportResponse` | `src/AmazonLex/Models/StartImportResponse.cs` |
| `StartImportError` | `src/AmazonLex/Errors/StartImportError.cs` |
| `ValidationExceptionModel` | `src/AmazonLex/Models/ValidationExceptionModel.cs` |
| `ServiceQuotaExceededException` | `src/AmazonLex/Models/ServiceQuotaExceededException.cs` |
| `ResourceNotFoundException` | `src/AmazonLex/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonLex/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonLex/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonLex/Models/InternalServerException.cs` |

