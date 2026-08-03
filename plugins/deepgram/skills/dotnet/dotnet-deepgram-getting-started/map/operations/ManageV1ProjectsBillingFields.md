# ManageV1ProjectsBillingFields — operations

Accessor: `client.ManageV1ProjectsBillingFields` · Source: `Api/ManageV1ProjectsBillingFields.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### List15
- **HTTP**: `GET /v1/projects/{project_id}/billing/fields` (Default (agent))
- **Notes**: Lists the accessors, deployment types, tags, and line items used for billing data in the specified time period. Use this endpoint if you want to filter your results from the Billing Breakdown endpoint and want to know what filters are available.
- **Signature**: `List15(string projectId, DateTimeOffset? start, DateTimeOffset? end, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`
- **Returns**: `ListBillingFieldsV1Response`
- **Error**: `SdkException<List15Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
