# MarketsApi — operations

Accessor: `client.MarketsApi` · Source: `Api/MarketsApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAvailableMarkets
- **HTTP**: `GET /markets` (Default (api))
- **Notes**: Get the list of markets where Spotify is available.
- **Signature**: `GetAvailableMarkets(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Markets`
- **Error**: `SdkException<GetAvailableMarketsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
