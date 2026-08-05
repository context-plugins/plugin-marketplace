# FrankfurterApiClient — operations

Accessor: called directly on the client (`client.Op(…)`) · Source: `FrankfurterApiClient.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCurrencies
- **HTTP**: `GET /currencies` (Default (api))
- **Notes**: Returns available currencies with their names and date ranges. By default, only active currencies are included.
- **Signature**: `GetCurrencies(Scope? scope, string? providers, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `scope` — nullable, no default → **must pass explicitly**
  - `providers` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `scope` ← `scope`, `providers` ← `providers`
- **Returns**: `IReadOnlyList<Currency>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCurrency
- **HTTP**: `GET /currency/{code}` (Default (api))
- **Notes**: Returns details for a single currency, including provider information or peg metadata.
- **Signature**: `GetCurrency(string code, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CurrencyDetail`
- **Error**: `SdkException<GetCurrencyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFound1(out NotFound1)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetProviders
- **HTTP**: `GET /providers` (Default (api))
- **Notes**: Returns available exchange rate data providers with their base currency.
- **Signature**: `GetProviders(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Provider>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRate
- **HTTP**: `GET /rate/{base}/{quote}` (Default (api))
- **Notes**: Returns the blended exchange rate for a single currency pair. Without a date param, returns the latest rate. A same-currency pair returns the identity rate of 1.
- **Signature**: `GetRate(string @base, string quote, DateTimeOffset? date, string? providers, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - `providers` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `providers` ← `providers`
- **Returns**: `Rate`
- **Error**: `SdkException<GetRateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFound1(out NotFound1)` [404] · `TryGetUnprocessableEntity1(out UnprocessableEntity1)` [422] · `TryGetServiceUnavailable1(out ServiceUnavailable1)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRates
- **HTTP**: `GET /rates` (Default (api))
- **Notes**: Returns exchange rates blended across providers. Without date params, returns the latest rates. Each record is a single currency pair. The response includes an identity record for the base currency (base equals quote, rate 1), subject to the quotes filter like any other record. Daily date ranges of any length are served, including full history. Limit: requests using `providers` or `expand=providers` recompute the blend per date, so at daily granularity they return 422 for ranges longer than 5 years. With `providers` naming at most 5 providers, a `quotes` list of at most 5 currencies lifts the cap; without `providers`, `expand=providers` ranges compute every currency regardless of `quotes`, so aggregate with `group=week` or `group=month`, add `providers`, or split the range into shorter requests.
- **Signature**: `GetRates(DateTimeOffset? date, DateTimeOffset? from, DateTimeOffset? to, string? quotes, string? providers, Group? group, Expand? expand, string? @base = "EUR", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`date` … `expand`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `@base` = "EUR", `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `from` ← `from`, `to` ← `to`, `quotes` ← `quotes`, `providers` ← `providers`, `group` ← `group`, `expand` ← `expand`
- **Returns**: `IReadOnlyList<Rate>`
- **Error**: `SdkException<GetRatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFound1(out NotFound1)` [404] · `TryGetUnprocessableEntity1(out UnprocessableEntity1)` [422] · `TryGetServiceUnavailable1(out ServiceUnavailable1)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
