<!-- Generated file — do not edit; regenerated with the SDK. -->

# CostEstimation — operations

Accessor: `client.CostEstimation` · Source: `src/AmazonDevOpsGuru/Api/CostEstimation.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCostEstimation

- **Auth**: `options.Sigv4`
- **Signature**: `GetCostEstimation(GetCostEstimationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `NextToken` ← `NextToken`
- **Returns**: `GetCostEstimationResponse`
- **Error**: `ApiException<GetCostEstimationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCostEstimationRequest` | `src/AmazonDevOpsGuru/Requests/CostEstimation/GetCostEstimationRequest.cs` |
| `GetCostEstimationResponse` | `src/AmazonDevOpsGuru/Models/GetCostEstimationResponse.cs` |
| `GetCostEstimationError` | `src/AmazonDevOpsGuru/Errors/GetCostEstimationError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### StartCostEstimation

- **Auth**: `options.Sigv4`
- **Signature**: `StartCostEstimation(StartCostEstimationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<StartCostEstimationError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartCostEstimationRequest` | `src/AmazonDevOpsGuru/Requests/CostEstimation/StartCostEstimationRequest.cs` |
| `CostEstimationRequest` | `src/AmazonDevOpsGuru/Models/CostEstimationRequest.cs` |
| `StartCostEstimationError` | `src/AmazonDevOpsGuru/Errors/StartCostEstimationError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ConflictException` | `src/AmazonDevOpsGuru/Models/ConflictException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

