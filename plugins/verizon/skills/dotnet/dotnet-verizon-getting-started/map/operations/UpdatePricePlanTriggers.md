# UpdatePricePlanTriggers — operations

Accessor: `client.UpdatePricePlanTriggers` · Source: `Api/UpdatePricePlanTriggers.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdateTriggerRules
- **HTTP**: `PUT /v2/triggers` (HyperPreciseCredentials (thingspace))
- **Signature**: `UpdateTriggerRules(V2TriggersRequest1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TriggerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
