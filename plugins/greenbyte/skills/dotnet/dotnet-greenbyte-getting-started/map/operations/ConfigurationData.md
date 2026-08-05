# ConfigurationData — operations

Accessor: `client.ConfigurationData` · Source: `Api/ConfigurationData.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetConfiguration
- **HTTP**: `GET /configuration` (Default)
- **Notes**: Gets your system-wide configuration data. _🔐 This endpoint requires the Configuration endpoint permission._ _This request can also be made using the POST method, with a request to `configuration.json` and a JSON request body instead of query parameters._
- **Signature**: `GetConfiguration(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConfigurationItem>`
- **Error**: `SdkException<GetConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetConfiguration400Error1(out Configuration400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetConfiguration429Error1(out Configuration429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
