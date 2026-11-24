<!-- Generated file — do not edit; regenerated with the SDK. -->

# ListLogAnomalies — operations

Accessor: `client.ListLogAnomalies` · Source: `src/AmazonDevOpsGuru/Api/ListLogAnomalies.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListAnomalousLogGroups

- **Auth**: `options.Sigv4`
- **Signature**: `ListAnomalousLogGroups(ListAnomalousLogGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListAnomalousLogGroupsResponse`
- **Error**: `ApiException<ListAnomalousLogGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAnomalousLogGroupsRequest` | `src/AmazonDevOpsGuru/Requests/ListLogAnomalies/ListAnomalousLogGroupsRequest.cs` |
| `ListLogAnomaliesRequest` | `src/AmazonDevOpsGuru/Models/ListLogAnomaliesRequest.cs` |
| `ListAnomalousLogGroupsResponse` | `src/AmazonDevOpsGuru/Models/ListAnomalousLogGroupsResponse.cs` |
| `ListAnomalousLogGroupsError` | `src/AmazonDevOpsGuru/Errors/ListAnomalousLogGroupsError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

