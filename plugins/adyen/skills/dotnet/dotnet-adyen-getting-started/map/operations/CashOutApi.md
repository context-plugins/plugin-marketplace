# CashOutApi — operations

Accessor: `client.CashOutApi` · Source: `Api/CashOutApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostCashouts
- **HTTP**: `POST /cashouts` (Default14 (balanceplatform-api-test))
- **Notes**: Initiates a cashout request.
- **Signature**: `PostCashouts(CashOutInfo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CashOut`
- **Error**: `SdkException<PostCashoutsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
