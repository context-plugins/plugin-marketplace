<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.Tags` · Source: `src/AmazonForecast/Api/Tags.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListTagsForResource

- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceOperationRequest` | `src/AmazonForecast/Requests/Tags/ListTagsForResourceOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceTagsApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceTagsApi.cs` |
| `ListTagsForResourceError` | `src/AmazonForecast/Errors/ListTagsForResourceError.cs` |

### TagResource2

- **Auth**: `options.Sigv4`
- **Signature**: `TagResource2(TagResource2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResource2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResource2Request` | `src/AmazonForecast/Requests/Tags/TagResource2Request.cs` |
| `XAmzTarget1AmazonForecastServiceResourceApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceResourceApi.cs` |
| `TagResource2Error` | `src/AmazonForecast/Errors/TagResource2Error.cs` |

