<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.Meta` · Source: `src/CommonElements/Api/Meta.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiStatus

- **Signature**: `GetApiStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<GetApiStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiStatusError` | `src/CommonElements/Errors/GetApiStatusError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### GetDataDictionary

- **Auth**: `options.BearerAuth`
- **Signature**: `GetDataDictionary(GetDataDictionaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `resource` ← `Resource`, `fill_rates` ← `FillRates`
- **Returns**: `object`
- **Error**: `ApiException<GetDataDictionaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDataDictionaryRequest` | `src/CommonElements/Requests/Meta/GetDataDictionaryRequest.cs` |
| `FillRates` | `src/CommonElements/Models/Enums/FillRates.cs` |
| `GetDataDictionaryError` | `src/CommonElements/Errors/GetDataDictionaryError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### GetKeyUsage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetKeyUsage(GetKeyUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `days` ← `Days`
- **Returns**: `object`
- **Error**: `ApiException<GetKeyUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetKeyUsageRequest` | `src/CommonElements/Requests/Meta/GetKeyUsageRequest.cs` |
| `GetKeyUsageError` | `src/CommonElements/Errors/GetKeyUsageError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### GetMetaIndex

- **Signature**: `GetMetaIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<GetMetaIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMetaIndexError` | `src/CommonElements/Errors/GetMetaIndexError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### GetOpenApiDocument

- **Signature**: `GetOpenApiDocument(GetOpenApiDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `object`
- **Error**: `ApiException<GetOpenApiDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOpenApiDocumentRequest` | `src/CommonElements/Requests/Meta/GetOpenApiDocumentRequest.cs` |
| `Format` | `src/CommonElements/Models/Enums/Format.cs` |
| `GetOpenApiDocumentError` | `src/CommonElements/Errors/GetOpenApiDocumentError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### GetSandboxManifest

- **Signature**: `GetSandboxManifest(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<GetSandboxManifestError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSandboxManifestError` | `src/CommonElements/Errors/GetSandboxManifestError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

