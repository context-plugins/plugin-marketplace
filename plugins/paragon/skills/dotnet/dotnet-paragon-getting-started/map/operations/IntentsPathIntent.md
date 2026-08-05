# IntentsPathIntent — operations

Accessor: `client.IntentsPathIntent` · Source: `Api/IntentsPathIntent.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PathIntentLspsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/path-intents/path-intent={id}/lsps` (Default)
- **Notes**: returns juniper.path.intent.pathintents.pathintent.Lsps
- **Signature**: `PathIntentLspsGet(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PathIntentLspsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PathIntentDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/path-intents/path-intent={id}` (Default)
- **Notes**: removes juniper.path.intent.pathintents.PathIntent
- **Signature**: `PathIntentDelete(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PathIntentDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PathIntentGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/path-intents/path-intent={id}` (Default)
- **Notes**: returns juniper.path.intent.pathintents.PathIntent
- **Signature**: `PathIntentGet(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PathIntentGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PathIntentPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/path-intents/path-intent={id}` (Default)
- **Notes**: creates or updates juniper.path.intent.pathintents.PathIntent
- **Signature**: `PathIntentPut(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PathIntentPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PathIntentsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/path-intents` (Default)
- **Notes**: returns juniper.path.intent.PathIntents
- **Signature**: `PathIntentsGet(string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PathIntentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
