<!-- Generated file — do not edit; regenerated with the SDK. -->

# IpWhois — operations

Accessor: `client.IpWhois` · Source: `src/WhoisFreaks/Api/IpWhois.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### IpWhoisInvoke

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `IpWhoisInvoke(IpWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`, `format` ← `Format`
- **Returns**: `IpWhoisResponse`
- **Error**: `ApiException<IpWhoisError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IpWhoisRequest` | `src/WhoisFreaks/Requests/IpWhois/IpWhoisRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `IpWhoisResponse` | `src/WhoisFreaks/Models/IpWhoisResponse.cs` |
| `IpWhoisError` | `src/WhoisFreaks/Errors/IpWhoisError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

