# AnomalyTriggers — operations

Accessor: `client.AnomalyTriggers` · Source: `Api/AnomalyTriggers.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAnomalyDetectionTrigger
- **HTTP**: `POST /m2m/v1/triggers` (HyperPreciseCredentials (thingspace))
- **Notes**: This corresponds to the M2M-MC SOAP interface, ```CreateTrigger```.
- **Signature**: `CreateAnomalyDetectionTrigger(CreateTriggerRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnomalyDetectionTrigger`
- **Error**: `SdkException<CreateAnomalyDetectionTriggerError>` — **Case A (typed)**
- **Error accessors**: `TryGetIntelligenceResult(out IntelligenceResult)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAnomalyDetectionTrigger
- **HTTP**: `DELETE /m2m/v1/triggers/{triggerId}` (HyperPreciseCredentials (thingspace))
- **Notes**: Deletes a specific trigger ID
- **Signature**: `DeleteAnomalyDetectionTrigger(string triggerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnomalyDetectionTrigger`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListAnomalyDetectionTriggerSettings
- **HTTP**: `GET /m2m/v1/triggers/{triggerId}` (HyperPreciseCredentials (thingspace))
- **Notes**: This corresponds to the M2M-MC SOAP interface, ```GetTriggers```.
- **Signature**: `ListAnomalyDetectionTriggerSettings(string triggerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GetTriggerResponseList>`
- **Error**: `SdkException<ListAnomalyDetectionTriggerSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetIntelligenceResult(out IntelligenceResult)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAnomalyDetectionTriggers
- **HTTP**: `GET /m2m/v1/triggers` (HyperPreciseCredentials (thingspace))
- **Notes**: This corresponds to the M2M-MC SOAP interface, ```GetTriggers```.
- **Signature**: `ListAnomalyDetectionTriggers(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<GetTriggerResponseList>`
- **Error**: `SdkException<ListAnomalyDetectionTriggersError>` — **Case A (typed)**
- **Error accessors**: `TryGetIntelligenceResult(out IntelligenceResult)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAnomalyDetectionTrigger
- **HTTP**: `PUT /m2m/v1/triggers` (HyperPreciseCredentials (thingspace))
- **Notes**: This corresponds to the M2M-MC SOAP interface, ```UpdateTriggerRequest```.
- **Signature**: `UpdateAnomalyDetectionTrigger(UpdateTriggerRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnomalyDetectionTrigger`
- **Error**: `SdkException<UpdateAnomalyDetectionTriggerError>` — **Case A (typed)**
- **Error accessors**: `TryGetIntelligenceResult(out IntelligenceResult)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
