<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.Usage` · Source: `src/Compabase/Api/Usage.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetUsage

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UsageResponse`
- **Error**: `ApiException<GetUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UsageResponse` | `src/Compabase/Models/UsageResponse.cs` |
| `GetUsageError` | `src/Compabase/Errors/GetUsageError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

