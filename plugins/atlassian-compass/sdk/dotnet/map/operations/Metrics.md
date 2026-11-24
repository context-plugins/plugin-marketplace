<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.Metrics` · Source: `src/AtlassianCompass/Api/Metrics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### InsertMetricValue

- **Auth**: `options.BasicAuth`
- **Signature**: `InsertMetricValue(InsertMetricValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `InsertMetricResponseDto`
- **Error**: `ApiException<InsertMetricValueError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value)` [400, 403, 404] · `TryGetInsertMetricResponseDto([NotNullWhen(true)] out InsertMetricResponseDto? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InsertMetricValueRequest` | `src/AtlassianCompass/Requests/Metrics/InsertMetricValueRequest.cs` |
| `CompassV1MetricsRequest` | `src/AtlassianCompass/Models/AnyOf/CompassV1MetricsRequest.cs` |
| `InsertMetricResponseDto` | `src/AtlassianCompass/Models/InsertMetricResponseDto.cs` |
| `InsertMetricValueError` | `src/AtlassianCompass/Errors/InsertMetricValueError.cs` |
| `ErrorResponseDto` | `src/AtlassianCompass/Models/ErrorResponseDto.cs` |

