# ConstantsModels — operations

Accessor: `client.ConstantsModels` · Source: `Api/ConstantsModels.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetGatewayDefaultConfig
- **HTTP**: `GET /api/v1/const/default_gateway_config` (ApiHost (api))
- **Notes**: Generate Default Gateway Config
- **Signature**: `GetGatewayDefaultConfig(string model, string? ha, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ha` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`, `ha` ← `ha`
- **Returns**: `object`
- **Error**: `SdkException<GetGatewayDefaultConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDeviceModels
- **HTTP**: `GET /api/v1/const/device_models` (ApiHost (api))
- **Notes**: Get list of AP device models for the Mist Site
- **Signature**: `ListDeviceModels(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstDeviceModel>`
- **Error**: `SdkException<ListDeviceModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMxEdgeModels
- **HTTP**: `GET /api/v1/const/mxedge_models` (ApiHost (api))
- **Notes**: Get List of available Mx Edge models
- **Signature**: `ListMxEdgeModels(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstMxedgeModel>`
- **Error**: `SdkException<ListMxEdgeModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSupportedOtherDeviceModels
- **HTTP**: `GET /api/v1/const/otherdevice_models` (ApiHost (api))
- **Notes**: Supported OtherDevice Models
- **Signature**: `ListSupportedOtherDeviceModels(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConstOtherDeviceModel>`
- **Error**: `SdkException<ListSupportedOtherDeviceModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
