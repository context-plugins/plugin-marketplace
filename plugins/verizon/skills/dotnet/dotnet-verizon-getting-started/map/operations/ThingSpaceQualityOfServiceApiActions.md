# ThingSpaceQualityOfServiceApiActions — operations

Accessor: `client.ThingSpaceQualityOfServiceApiActions` · Source: `Api/ThingSpaceQualityOfServiceApiActions.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAthingSpaceQualityOfServiceApisubscription
- **HTTP**: `POST /m2m/v1/devices/actions/enhanceQoS` (HyperPreciseCredentials (thingspace))
- **Notes**: Creates a QoS elevation subscription ID and activates the subscription.
- **Signature**: `CreateAthingSpaceQualityOfServiceApisubscription(SubscribeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Success201`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StopAthingSpaceQualityOfServiceApisubscription
- **HTTP**: `DELETE /m2m/v1/devices/actions/enhanceQoS` (HyperPreciseCredentials (thingspace))
- **Notes**: Stops an active ThingSpace Quality of Service API subscription using the account name and the subscription ID.
- **Signature**: `StopAthingSpaceQualityOfServiceApisubscription(string accountName, string qosSubscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountName` ← `accountName`, `qosSubscriptionId` ← `qosSubscriptionId`
- **Returns**: `Success201`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
