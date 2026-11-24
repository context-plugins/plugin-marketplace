<!-- Generated file — do not edit; regenerated with the SDK. -->

# AsnWhois — operations

Accessor: `client.AsnWhois` · Source: `src/WhoisFreaks/Api/AsnWhois.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AsnWhoisInvoke

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AsnWhoisInvoke(AsnWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Asn`
- **Query params (wire ← C#)**: `asn` ← `Asn`, `format` ← `Format`
- **Returns**: `AsnWhoisResponse`
- **Error**: `ApiException<AsnWhoisError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AsnWhoisRequest` | `src/WhoisFreaks/Requests/AsnWhois/AsnWhoisRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `AsnWhoisResponse` | `src/WhoisFreaks/Models/AsnWhoisResponse.cs` |
| `AsnWhoisError` | `src/WhoisFreaks/Errors/AsnWhoisError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

