# Rates — operations

Accessor: `client.Rates` · Source: `Api/Rates.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostRatesCalculate
- **HTTP**: `POST /rates/calculate` (Default7 (balanceplatform-api-test))
- **Notes**: Returns the calculated amounts and rates required to convert the currency of a transaction.
- **Signature**: `PostRatesCalculate(CalculateRateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CalculateRateResponse`
- **Error**: `SdkException<PostRatesCalculateError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
