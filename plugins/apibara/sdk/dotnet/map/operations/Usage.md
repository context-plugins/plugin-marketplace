<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.Usage` · Source: `src/Apibara/Api/Usage.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetApiUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UsageResponse`
- **Error**: `ApiException<GetApiUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UsageResponse` | `src/Apibara/Models/UsageResponse.cs` |
| `GetApiUsageError` | `src/Apibara/Errors/GetApiUsageError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

