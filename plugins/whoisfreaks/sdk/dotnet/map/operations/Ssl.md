<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ssl — operations

Accessor: `client.Ssl` · Source: `src/WhoisFreaks/Api/Ssl.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SslLookup

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SslLookup(SslLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Query params (wire ← C#)**: `domainName` ← `DomainName`, `chain` ← `Chain`, `sslRaw` ← `SslRaw`, `format` ← `Format`
- **Returns**: `SslResponse`
- **Error**: `ApiException<SslLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SslLookupRequest` | `src/WhoisFreaks/Requests/Ssl/SslLookupRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `SslResponse` | `src/WhoisFreaks/Models/SslResponse.cs` |
| `SslLookupError` | `src/WhoisFreaks/Errors/SslLookupError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

