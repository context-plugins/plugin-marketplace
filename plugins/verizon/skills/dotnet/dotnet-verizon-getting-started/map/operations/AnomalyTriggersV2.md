# AnomalyTriggersV2 — operations

Accessor: `client.AnomalyTriggersV2` · Source: `Api/AnomalyTriggersV2.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAnomalyDetectionTriggerV2
- **HTTP**: `POST /m2m/v2/triggers` (HyperPreciseCredentials (thingspace))
- **Signature**: `CreateAnomalyDetectionTriggerV2(IReadOnlyList<CreateTriggerRequestOptions> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnomalyDetectionTrigger`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListAnomalyDetectionTriggerSettingsV2
- **HTTP**: `GET /m2m/v2/triggers/{triggerId}` (HyperPreciseCredentials (thingspace))
- **Signature**: `ListAnomalyDetectionTriggerSettingsV2(string triggerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnomalyTriggerResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAnomalyDetectionTriggerV2
- **HTTP**: `PUT /m2m/v2/triggers` (HyperPreciseCredentials (thingspace))
- **Signature**: `UpdateAnomalyDetectionTriggerV2(IReadOnlyList<UpdateTriggerRequestOptions> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntelligenceSuccessResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
