# IpGeolocationApi — operations

Accessor: `client.IpGeolocationApi` · Source: `Api/IpGeolocationApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetIpgeolocation
- **HTTP**: `GET /ipinfo` (Default (api))
- **Notes**: Returns location details such as country, city, currency, and language based on the specified IP address. If no IP address is provided, the user's own IP address will be automatically detected and used for the lookup. This API can help customize user experiences, such as localizing content or payment forms based on location.
- **Signature**: `GetIpgeolocation(string apiKey, string? ip, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ip` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `apiKey` ← `apiKey`, `ip` ← `ip`
- **Returns**: `IpgeolocationResponse`
- **Error**: `SdkException<GetIpgeolocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
