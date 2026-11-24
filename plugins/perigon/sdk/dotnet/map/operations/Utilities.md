<!-- Generated file — do not edit; regenerated with the SDK. -->

# Utilities — operations

Accessor: `client.Utilities` · Source: `src/Perigon/Api/Utilities.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLimits

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetLimits(GetLimitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `apiKeys` ← `ApiKeys`
- **Returns**: `LimitsResult`
- **Error**: `ApiException<GetLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLimitsRequest` | `src/Perigon/Requests/Utilities/GetLimitsRequest.cs` |
| `LimitsResult` | `src/Perigon/Models/LimitsResult.cs` |
| `GetLimitsError` | `src/Perigon/Errors/GetLimitsError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

