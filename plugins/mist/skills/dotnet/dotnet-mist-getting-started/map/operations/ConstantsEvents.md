# ConstantsEvents — operations

Accessor: `client.ConstantsEvents` · Source: `Api/ConstantsEvents.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListAlarmDefinitions
- **HTTP**: `GET /api/v1/const/alarm_defs` (ApiHost (api))
- **Notes**: Get List of brief definitions of all the supported alarm types. The example field contains an example payload as you would receive in the alarm webhook output. HA cluster node names will be specified in the `node` field, if applicable.
- **Signature**: `ListAlarmDefinitions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstAlarmDefinition>`
- **Error**: `SdkException<ListAlarmDefinitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListClientEventsDefinitions
- **HTTP**: `GET /api/v1/const/client_events` (ApiHost (api))
- **Notes**: Get List of List of available Client Events
- **Signature**: `ListClientEventsDefinitions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstEvent>`
- **Error**: `SdkException<ListClientEventsDefinitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDeviceEventsDefinitions
- **HTTP**: `GET /api/v1/const/device_events` (ApiHost (api))
- **Notes**: Get list of available Device Events
- **Signature**: `ListDeviceEventsDefinitions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstEvent>`
- **Error**: `SdkException<ListDeviceEventsDefinitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMxEdgeEventsDefinitions
- **HTTP**: `GET /api/v1/const/mxedge_events` (ApiHost (api))
- **Notes**: Get List of available MX Edge Events
- **Signature**: `ListMxEdgeEventsDefinitions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstEvent>`
- **Error**: `SdkException<ListMxEdgeEventsDefinitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListNacEventsDefinitions
- **HTTP**: `GET /api/v1/const/nac_events` (ApiHost (api))
- **Notes**: Get List of List of available NAC Client Events
- **Signature**: `ListNacEventsDefinitions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstNacEvent>`
- **Error**: `SdkException<ListNacEventsDefinitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOtherDeviceEventsDefinitions
- **HTTP**: `GET /api/v1/const/otherdevice_events` (ApiHost (api))
- **Notes**: Supported Events Type
- **Signature**: `ListOtherDeviceEventsDefinitions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstEvent>`
- **Error**: `SdkException<ListOtherDeviceEventsDefinitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSystemEventsDefinitions
- **HTTP**: `GET /api/v1/const/system_events` (ApiHost (api))
- **Notes**: Get List of List of available System Events
- **Signature**: `ListSystemEventsDefinitions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstEvent>`
- **Error**: `SdkException<ListSystemEventsDefinitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
