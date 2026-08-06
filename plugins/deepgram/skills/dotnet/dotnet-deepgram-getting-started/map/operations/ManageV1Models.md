# ManageV1Models — operations

Accessor: `client.ManageV1Models` · Source: `Api/ManageV1Models.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Get5
- **HTTP**: `GET /v1/models/{model_id}` (Default (agent))
- **Notes**: Returns metadata for a specific public model
- **Signature**: `Get5(string modelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetModelV1Response`
- **Error**: `SdkException<Get5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List6
- **HTTP**: `GET /v1/models` (Default (agent))
- **Notes**: Returns metadata on all the latest public models. To retrieve custom models, use Get Project Models.
- **Signature**: `List6(bool? includeOutdated, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeOutdated` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include_outdated` ← `includeOutdated`
- **Returns**: `ListModelsV1Response`
- **Error**: `SdkException<List6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
