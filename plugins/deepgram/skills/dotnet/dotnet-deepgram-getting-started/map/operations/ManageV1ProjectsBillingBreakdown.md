# ManageV1ProjectsBillingBreakdown — operations

Accessor: `client.ManageV1ProjectsBillingBreakdown` · Source: `Api/ManageV1ProjectsBillingBreakdown.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### List14
- **HTTP**: `GET /v1/projects/{project_id}/billing/breakdown` (Default (agent))
- **Notes**: Retrieves the billing summary for a specific project, with various filter options or by grouping options.
- **Signature**: `List14(string projectId, DateTimeOffset? start, DateTimeOffset? end, string? accessor, V1ProjectsProjectIdBillingBreakdownGetParametersDeployment? deployment, string? tag, string? lineItem, IReadOnlyList<V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems>? grouping, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`start` … `grouping`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `accessor` ← `accessor`, `deployment` ← `deployment`, `tag` ← `tag`, `line_item` ← `lineItem`, `grouping` ← `grouping`
- **Returns**: `BillingBreakdownV1Response`
- **Error**: `SdkException<List14Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
