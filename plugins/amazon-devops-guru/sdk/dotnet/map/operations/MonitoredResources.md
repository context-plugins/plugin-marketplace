<!-- Generated file — do not edit; regenerated with the SDK. -->

# MonitoredResources — operations

Accessor: `client.MonitoredResources` · Source: `src/AmazonDevOpsGuru/Api/MonitoredResources.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListMonitoredResources

- **Auth**: `options.Sigv4`
- **Signature**: `ListMonitoredResources(ListMonitoredResourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListMonitoredResourcesResponse`
- **Error**: `ApiException<ListMonitoredResourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitoredResourcesRequest` | `src/AmazonDevOpsGuru/Requests/MonitoredResources/ListMonitoredResourcesRequest.cs` |
| `MonitoredResourcesRequest` | `src/AmazonDevOpsGuru/Models/MonitoredResourcesRequest.cs` |
| `ListMonitoredResourcesResponse` | `src/AmazonDevOpsGuru/Models/ListMonitoredResourcesResponse.cs` |
| `ListMonitoredResourcesError` | `src/AmazonDevOpsGuru/Errors/ListMonitoredResourcesError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

