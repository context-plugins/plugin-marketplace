<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/WhoisFreaks/Api/Account.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AccountUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AccountUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AccountUsageResponse`
- **Error**: `ApiException<AccountUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AccountUsageResponse` | `src/WhoisFreaks/Models/AccountUsageResponse.cs` |
| `AccountUsageError` | `src/WhoisFreaks/Errors/AccountUsageError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DatabaseFileStatus

- **Signature**: `DatabaseFileStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DatabaseFileStatus`
- **Error**: `ApiException<DatabaseFileStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatabaseFileStatus` | `src/WhoisFreaks/Models/DatabaseFileStatus.cs` |
| `DatabaseFileStatusError` | `src/WhoisFreaks/Errors/DatabaseFileStatusError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### RotateApiKey

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RotateApiKey(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `string`
- **Error**: `ApiException<RotateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RotateApiKeyError` | `src/WhoisFreaks/Errors/RotateApiKeyError.cs` |

