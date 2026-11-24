<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/Audioscrape/Api/Account.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMe

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMe(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `MeResponse`
- **Error**: `ApiException<GetMeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MeResponse` | `src/Audioscrape/Models/MeResponse.cs` |
| `GetMeError` | `src/Audioscrape/Errors/GetMeError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### GetMeUsage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMeUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UsageResponse`
- **Error**: `ApiException<GetMeUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UsageResponse` | `src/Audioscrape/Models/UsageResponse.cs` |
| `GetMeUsageError` | `src/Audioscrape/Errors/GetMeUsageError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

