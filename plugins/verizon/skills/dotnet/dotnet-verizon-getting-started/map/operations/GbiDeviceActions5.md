# GbiDeviceActions5 — operations

Accessor: `client.GbiDeviceActions5` · Source: `Api/GbiDeviceActions5.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BusinessInternetServiceplanchange
- **HTTP**: `PUT /actions/plan` (HyperPreciseCredentials (thingspace))
- **Notes**: Change a device's service plan to use 5G BI.
- **Signature**: `BusinessInternetServiceplanchange(GbichangeRequest5 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GbiRequestResponse5`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BusinessInternetactivateUsingPost
- **HTTP**: `POST /actions/activate` (HyperPreciseCredentials (thingspace))
- **Notes**: Uses the device's ICCID and IMEI to activate service.
- **Signature**: `BusinessInternetactivateUsingPost(GbiactivateRequest5 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GbiRequestResponse5`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BusinessInternetlistDeviceInformation
- **HTTP**: `POST /actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Uses the decive's Integrated Circuit Card Identification Number (ICCID) to retrive and display the device's properties.
- **Signature**: `BusinessInternetlistDeviceInformation(GbideviceId5 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GbideviceDetailsresponse5`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
