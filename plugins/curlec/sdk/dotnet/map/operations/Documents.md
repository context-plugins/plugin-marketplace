<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.Documents` · Source: `src/Curlec/Api/Documents.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchDocument

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchDocument(FetchDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Document`
- **Error**: `ApiException<FetchDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchDocumentRequest` | `src/Curlec/Requests/Documents/FetchDocumentRequest.cs` |
| `Document` | `src/Curlec/Models/Document.cs` |
| `FetchDocumentError` | `src/Curlec/Errors/FetchDocumentError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchDocumentContent

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchDocumentContent(FetchDocumentContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<FetchDocumentContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchDocumentContentRequest` | `src/Curlec/Requests/Documents/FetchDocumentContentRequest.cs` |
| `FetchDocumentContentError` | `src/Curlec/Errors/FetchDocumentContentError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UploadDocument

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UploadDocument(UploadDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`, `Purpose`
- **Returns**: `Document`
- **Error**: `ApiException<UploadDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadDocumentRequest` | `src/Curlec/Requests/Documents/UploadDocumentRequest.cs` |
| `Document` | `src/Curlec/Models/Document.cs` |
| `UploadDocumentError` | `src/Curlec/Errors/UploadDocumentError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

