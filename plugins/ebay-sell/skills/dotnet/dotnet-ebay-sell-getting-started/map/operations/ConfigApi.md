# ConfigApi — operations

Accessor: `client.ConfigApi` · Source: `Api/ConfigApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetConfig
- **HTTP**: `GET /config` (Default (api))
- **Signature**: `GetConfig(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Config`
- **Error**: `SdkException<GetConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateConfig
- **HTTP**: `PUT /config` (Default (api))
- **Signature**: `UpdateConfig(Config1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Error`
- **Error**: `SdkException<UpdateConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
