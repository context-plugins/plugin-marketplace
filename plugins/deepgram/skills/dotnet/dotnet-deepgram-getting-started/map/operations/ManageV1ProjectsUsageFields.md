# ManageV1ProjectsUsageFields — operations

Accessor: `client.ManageV1ProjectsUsageFields` · Source: `Api/ManageV1ProjectsUsageFields.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### List12
- **HTTP**: `GET /v1/projects/{project_id}/usage/fields` (Default (agent))
- **Notes**: Lists the features, models, tags, languages, and processing method used for requests in the specified project
- **Signature**: `List12(string projectId, DateTimeOffset? start, DateTimeOffset? end, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`
- **Returns**: `UsageFieldsV1Response`
- **Error**: `SdkException<List12Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
