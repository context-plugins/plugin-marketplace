# PromotionPeriodInformation — operations

Accessor: `client.PromotionPeriodInformation` · Source: `Api/PromotionPeriodInformation.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPromoDeviceAggregateUsageHistory
- **HTTP**: `POST /m2m/v1/devices/usage/actions/promoaggregateusage` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieves the aggregate usage for an account using pseudo-MDN during the promotional period using a callback.
- **Signature**: `GetPromoDeviceAggregateUsageHistory(RequestBodyForUsage body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UsageRequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPromoDeviceUsageHistory
- **HTTP**: `POST /m2m/v1/devices/usage/actions/promodeviceusage` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieves the usage history of a device during the promotion period.
- **Signature**: `GetPromoDeviceUsageHistory(ARequestBodyForUsage body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseToUsageQuery`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
