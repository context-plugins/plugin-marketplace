# Currencies — operations

Accessor: `client.Currencies` · Source: `Api/Currencies.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCurrencies
- **HTTP**: `GET /currencies` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve list of all supported currencies (crypto and fiat). Returns an array with currency name, key, decimals, and network information.
- **Signature**: `GetCurrencies(string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Currency>`
- **Error**: `SdkException<GetCurrenciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
