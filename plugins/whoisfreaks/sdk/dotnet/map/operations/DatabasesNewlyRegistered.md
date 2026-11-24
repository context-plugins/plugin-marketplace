<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesNewlyRegistered — operations

Accessor: `client.DatabasesNewlyRegistered` · Source: `src/WhoisFreaks/Api/DatabasesNewlyRegistered.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DbNewlyCctld

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbNewlyCctld(DbNewlyCctldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Whois`
- **Query params (wire ← C#)**: `whois` ← `Whois`, `date` ← `Date`, `tlds` ← `Tlds`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbNewlyCctldError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbNewlyCctldRequest` | `src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyCctldRequest.cs` |
| `DbNewlyCctldError` | `src/WhoisFreaks/Errors/DbNewlyCctldError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbNewlyCctldCleaned

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbNewlyCctldCleaned(DbNewlyCctldCleanedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbNewlyCctldCleanedError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbNewlyCctldCleanedRequest` | `src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyCctldCleanedRequest.cs` |
| `DbNewlyCctldCleanedError` | `src/WhoisFreaks/Errors/DbNewlyCctldCleanedError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbNewlyCctldJson

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbNewlyCctldJson(DbNewlyCctldJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`, `tlds` ← `Tlds`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `ApiException<DbNewlyCctldJsonError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbNewlyCctldJsonRequest` | `src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyCctldJsonRequest.cs` |
| `DbNewlyCctldJsonError` | `src/WhoisFreaks/Errors/DbNewlyCctldJsonError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbNewlyDns

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbNewlyDns(DbNewlyDnsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbNewlyDnsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbNewlyDnsRequest` | `src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyDnsRequest.cs` |
| `DbNewlyDnsError` | `src/WhoisFreaks/Errors/DbNewlyDnsError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbNewlyGtld

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbNewlyGtld(DbNewlyGtldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Whois`
- **Query params (wire ← C#)**: `whois` ← `Whois`, `date` ← `Date`, `tlds` ← `Tlds`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbNewlyGtldError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbNewlyGtldRequest` | `src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyGtldRequest.cs` |
| `DbNewlyGtldError` | `src/WhoisFreaks/Errors/DbNewlyGtldError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbNewlyGtldCleaned

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbNewlyGtldCleaned(DbNewlyGtldCleanedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbNewlyGtldCleanedError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbNewlyGtldCleanedRequest` | `src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyGtldCleanedRequest.cs` |
| `DbNewlyGtldCleanedError` | `src/WhoisFreaks/Errors/DbNewlyGtldCleanedError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbNewlyGtldJson

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbNewlyGtldJson(DbNewlyGtldJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`, `tlds` ← `Tlds`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `ApiException<DbNewlyGtldJsonError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbNewlyGtldJsonRequest` | `src/WhoisFreaks/Requests/DatabasesNewlyRegistered/DbNewlyGtldJsonRequest.cs` |
| `DbNewlyGtldJsonError` | `src/WhoisFreaks/Errors/DbNewlyGtldJsonError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

