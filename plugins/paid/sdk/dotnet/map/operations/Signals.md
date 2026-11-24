<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signals — operations

Accessor: `client.Signals` · Source: `src/Paid/Api/Signals.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSignals

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `CreateSignals(CreateSignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `BulkSignalsResponse`
- **Error**: `ApiException<CreateSignalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSignalsRequest` | `src/Paid/Requests/Signals/CreateSignalsRequest.cs` |
| `BulkSignalsRequest` | `src/Paid/Models/BulkSignalsRequest.cs` |
| `BulkSignalsResponse` | `src/Paid/Models/BulkSignalsResponse.cs` |
| `CreateSignalsError` | `src/Paid/Errors/CreateSignalsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

