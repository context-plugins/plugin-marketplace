# Rates — operations

Accessor: `client.Rates` · Source: `Api/Rates.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostRatesCalculate
- **HTTP**: `POST /rates/calculate` (Default (balanceplatform-api-test))
- **Notes**: Returns the calculated amounts and rates required to convert the currency of a transaction.
- **Signature**: `PostRatesCalculate(RatesCalculateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RatesCalculateResponse`
- **Error**: `SdkException<PostRatesCalculateError>` — **Case A (typed)**
- **Error accessors**: `TryGetRatesCalculate401Error1(out RatesCalculate401Error1)` [401] · `TryGetRatesCalculate403Error1(out RatesCalculate403Error1)` [403] · `TryGetRatesCalculate422Error1(out RatesCalculate422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
