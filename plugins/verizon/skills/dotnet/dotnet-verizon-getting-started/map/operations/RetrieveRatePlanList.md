# RetrieveRatePlanList — operations

Accessor: `client.RetrieveRatePlanList` · Source: `Api/RetrieveRatePlanList.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetRatePlanList
- **HTTP**: `GET /v2/triggers/rateplanlist/{ecpdId}` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieves the rate plans and rate plan details for a profile ID.
- **Signature**: `GetRatePlanList(string ecpdId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Rateplan`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
