# AnomalySettings — operations

Accessor: `client.AnomalySettings` · Source: `Api/AnomalySettings.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivateAnomalyDetection
- **HTTP**: `POST /m2m/v1/intelligence/anomaly/settings` (HyperPreciseCredentials (thingspace))
- **Signature**: `ActivateAnomalyDetection(AnomalyDetectionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntelligenceSuccessResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListAnomalyDetectionSettings
- **HTTP**: `GET /m2m/v1/intelligence/{accountName}/anomaly/settings` (HyperPreciseCredentials (thingspace))
- **Signature**: `ListAnomalyDetectionSettings(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnomalyDetectionSettings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ResetAnomalyDetectionParameters
- **HTTP**: `PUT /m2m/v1/intelligence/{accountName}/anomaly/settings/reset` (HyperPreciseCredentials (thingspace))
- **Signature**: `ResetAnomalyDetectionParameters(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntelligenceSuccessResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
