<!-- Generated file — do not edit; regenerated with the SDK. -->

# Resource — operations

Accessor: `client.Resource` · Source: `src/AmazonForecast/Api/Resource.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### StopResource

- **Auth**: `options.Sigv4`
- **Signature**: `StopResource(StopResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopResourceOperationRequest` | `src/AmazonForecast/Requests/Resource/StopResourceOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceResourceApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceResourceApi.cs` |
| `StopResourceError` | `src/AmazonForecast/Errors/StopResourceError.cs` |

### TagResource

- **Auth**: `options.Sigv4`
- **Signature**: `TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceOperationRequest` | `src/AmazonForecast/Requests/Resource/TagResourceOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceResourceApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceResourceApi.cs` |
| `TagResourceError` | `src/AmazonForecast/Errors/TagResourceError.cs` |

### UntagResource

- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceOperationRequest` | `src/AmazonForecast/Requests/Resource/UntagResourceOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceResourceApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceResourceApi.cs` |
| `UntagResourceError` | `src/AmazonForecast/Errors/UntagResourceError.cs` |

