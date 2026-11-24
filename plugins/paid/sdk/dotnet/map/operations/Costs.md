<!-- Generated file — do not edit; regenerated with the SDK. -->

# Costs — operations

Accessor: `client.Costs` · Source: `src/Paid/Api/Costs.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCosts

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `CreateCosts(CreateCostsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `CostIngestResponse`
- **Error**: `ApiException<CreateCostsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCostsRequest` | `src/Paid/Requests/Costs/CreateCostsRequest.cs` |
| `CostIngestRequest` | `src/Paid/Models/CostIngestRequest.cs` |
| `CostIngestResponse` | `src/Paid/Models/CostIngestResponse.cs` |
| `CreateCostsError` | `src/Paid/Errors/CreateCostsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

