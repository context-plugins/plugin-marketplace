<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskIndicators — operations

Accessor: `client.RiskIndicators` · Source: `src/Deliverd/Api/RiskIndicators.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1RiskIndicators

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1RiskIndicators(GetApiV1RiskIndicatorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `period` ← `Period`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<GetApiV1RiskIndicatorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1RiskIndicatorsRequest` | `src/Deliverd/Requests/RiskIndicators/GetApiV1RiskIndicatorsRequest.cs` |
| `GetApiV1RiskIndicatorsError` | `src/Deliverd/Errors/GetApiV1RiskIndicatorsError.cs` |

### PostApiV1RiskIndicatorsByKeyReadings

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1RiskIndicatorsByKeyReadings(PostApiV1RiskIndicatorsByKeyReadingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1RiskIndicatorsByKeyReadingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1RiskIndicatorsByKeyReadingsRequest` | `src/Deliverd/Requests/RiskIndicators/PostApiV1RiskIndicatorsByKeyReadingsRequest.cs` |
| `ApiV1RiskIndicatorsReadingsRequest` | `src/Deliverd/Models/ApiV1RiskIndicatorsReadingsRequest.cs` |
| `PostApiV1RiskIndicatorsByKeyReadingsError` | `src/Deliverd/Errors/PostApiV1RiskIndicatorsByKeyReadingsError.cs` |

