<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subdomains — operations

Accessor: `client.Subdomains` · Source: `src/WhoisFreaks/Api/Subdomains.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SubdomainsInvoke

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SubdomainsInvoke(SubdomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `after` ← `After`, `before` ← `Before`, `status` ← `Status`, `page` ← `Page`, `format` ← `Format`
- **Returns**: `SubdomainsResponse`
- **Error**: `ApiException<SubdomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubdomainsRequest` | `src/WhoisFreaks/Requests/Subdomains/SubdomainsRequest.cs` |
| `Status` | `src/WhoisFreaks/Models/Enums/Status.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `SubdomainsResponse` | `src/WhoisFreaks/Models/SubdomainsResponse.cs` |
| `SubdomainsError` | `src/WhoisFreaks/Errors/SubdomainsError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

