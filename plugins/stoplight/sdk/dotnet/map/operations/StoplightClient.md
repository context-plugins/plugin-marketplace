<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoplightClient — operations

Accessor: `client` · Source: `src/Stoplight/StoplightClient.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVersionsVersionIdExportFormat

- **Signature**: `GetVersionsVersionIdExportFormat(GetVersionsVersionIdExportFormatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `JsonElement`
- **Error**: `ApiException<GetVersionsVersionIdExportFormatError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVersionsVersionIdExportFormatRequest` | `src/Stoplight/Requests/GetVersionsVersionIdExportFormatRequest.cs` |
| `Format` | `src/Stoplight/Models/Enums/Format.cs` |
| `GetVersionsVersionIdExportFormatError` | `src/Stoplight/Errors/GetVersionsVersionIdExportFormatError.cs` |

### PostVersionsPublishAnon

- **Signature**: `PostVersionsPublishAnon(PostVersionsPublishAnonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `VersionsPublishAnonResponse`
- **Error**: `ApiException<PostVersionsPublishAnonError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400, 401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostVersionsPublishAnonRequest` | `src/Stoplight/Requests/PostVersionsPublishAnonRequest.cs` |
| `VersionsPublishAnonRequest` | `src/Stoplight/Models/VersionsPublishAnonRequest.cs` |
| `VersionsPublishAnonResponse` | `src/Stoplight/Models/VersionsPublishAnonResponse.cs` |
| `PostVersionsPublishAnonError` | `src/Stoplight/Errors/PostVersionsPublishAnonError.cs` |

### PostVersionsVersionIdPublish

- **Auth**: `options.Authorization`
- **Signature**: `PostVersionsVersionIdPublish(PostVersionsVersionIdPublishRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VersionId`
- **Returns**: `VersionsPublishResponse`
- **Error**: `ApiException<PostVersionsVersionIdPublishError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostVersionsVersionIdPublishRequest` | `src/Stoplight/Requests/PostVersionsVersionIdPublishRequest.cs` |
| `VersionsPublishResponse` | `src/Stoplight/Models/VersionsPublishResponse.cs` |
| `PostVersionsVersionIdPublishError` | `src/Stoplight/Errors/PostVersionsVersionIdPublishError.cs` |

### PutVersionsVersionIdImport

- **Auth**: `options.Authorization`
- **Signature**: `PutVersionsVersionIdImport(PutVersionsVersionIdImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VersionId`
- **Returns**: `VersionsImportResponse`
- **Error**: `ApiException<PutVersionsVersionIdImportError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutVersionsVersionIdImportRequest` | `src/Stoplight/Requests/PutVersionsVersionIdImportRequest.cs` |
| `VersionsImportRequest` | `src/Stoplight/Models/VersionsImportRequest.cs` |
| `VersionsImportResponse` | `src/Stoplight/Models/VersionsImportResponse.cs` |
| `PutVersionsVersionIdImportError` | `src/Stoplight/Errors/PutVersionsVersionIdImportError.cs` |

### PutVersionsVersionIdUnpublish

- **Auth**: `options.Authorization`
- **Signature**: `PutVersionsVersionIdUnpublish(PutVersionsVersionIdUnpublishRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VersionId`
- **Returns**: `VersionsUnpublishResponse`
- **Error**: `ApiException<PutVersionsVersionIdUnpublishError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutVersionsVersionIdUnpublishRequest` | `src/Stoplight/Requests/PutVersionsVersionIdUnpublishRequest.cs` |
| `VersionsUnpublishResponse` | `src/Stoplight/Models/VersionsUnpublishResponse.cs` |
| `PutVersionsVersionIdUnpublishError` | `src/Stoplight/Errors/PutVersionsVersionIdUnpublishError.cs` |

