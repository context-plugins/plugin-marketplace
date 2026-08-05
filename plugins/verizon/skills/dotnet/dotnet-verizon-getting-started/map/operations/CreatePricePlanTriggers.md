# CreatePricePlanTriggers — operations

Accessor: `client.CreatePricePlanTriggers` · Source: `Api/CreatePricePlanTriggers.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTriggerRules
- **HTTP**: `POST /v2/triggers` (HyperPreciseCredentials (thingspace))
- **Signature**: `CreateTriggerRules(V2TriggersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TriggerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
