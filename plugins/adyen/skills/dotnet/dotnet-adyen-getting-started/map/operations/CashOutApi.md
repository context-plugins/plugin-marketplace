# CashOutApi — operations

Accessor: `client.CashOutApi` · Source: `Api/CashOutApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostCashouts
- **HTTP**: `POST /cashouts` (Default (balanceplatform-api-test))
- **Notes**: Initiates a cashout request.
- **Signature**: `PostCashouts(CashOutInfo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CashOut`
- **Error**: `SdkException<PostCashoutsError>` — **Case A (typed)**
- **Error accessors**: `TryGetCashouts400Error1(out Cashouts400Error1)` [400] · `TryGetCashouts401Error1(out Cashouts401Error1)` [401] · `TryGetCashouts403Error1(out Cashouts403Error1)` [403] · `TryGetCashouts404Error1(out Cashouts404Error1)` [404] · `TryGetCashouts422Error1(out Cashouts422Error1)` [422] · `TryGetCashouts429Error1(out Cashouts429Error1)` [429] · `TryGetCashouts500Error1(out Cashouts500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
