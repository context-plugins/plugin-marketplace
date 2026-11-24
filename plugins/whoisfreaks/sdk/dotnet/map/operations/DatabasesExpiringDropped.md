<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesExpiringDropped — operations

Accessor: `client.DatabasesExpiringDropped` · Source: `src/WhoisFreaks/Api/DatabasesExpiringDropped.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DbDropped

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbDropped(DbDroppedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Whois`
- **Query params (wire ← C#)**: `whois` ← `Whois`, `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbDroppedError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbDroppedRequest` | `src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbDroppedRequest.cs` |
| `DbDroppedError` | `src/WhoisFreaks/Errors/DbDroppedError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbDroppedBacklinks

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbDroppedBacklinks(DbDroppedBacklinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `whois` ← `Whois`, `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbDroppedBacklinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbDroppedBacklinksRequest` | `src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbDroppedBacklinksRequest.cs` |
| `DbDroppedBacklinksError` | `src/WhoisFreaks/Errors/DbDroppedBacklinksError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbDroppedJson

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbDroppedJson(DbDroppedJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`, `tlds` ← `Tlds`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `ApiException<DbDroppedJsonError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbDroppedJsonRequest` | `src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbDroppedJsonRequest.cs` |
| `DbDroppedJsonError` | `src/WhoisFreaks/Errors/DbDroppedJsonError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbExpired

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbExpired(DbExpiredRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Whois`
- **Query params (wire ← C#)**: `whois` ← `Whois`, `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbExpiredError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbExpiredRequest` | `src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbExpiredRequest.cs` |
| `DbExpiredError` | `src/WhoisFreaks/Errors/DbExpiredError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbExpiredCleaned

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbExpiredCleaned(DbExpiredCleanedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbExpiredCleanedError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbExpiredCleanedRequest` | `src/WhoisFreaks/Requests/DatabasesExpiringDropped/DbExpiredCleanedRequest.cs` |
| `DbExpiredCleanedError` | `src/WhoisFreaks/Errors/DbExpiredCleanedError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

