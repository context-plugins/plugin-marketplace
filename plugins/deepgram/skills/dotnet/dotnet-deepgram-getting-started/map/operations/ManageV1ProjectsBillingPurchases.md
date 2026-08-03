# ManageV1ProjectsBillingPurchases — operations

Accessor: `client.ManageV1ProjectsBillingPurchases` · Source: `Api/ManageV1ProjectsBillingPurchases.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### List16
- **HTTP**: `GET /v1/projects/{project_id}/purchases` (Default (agent))
- **Notes**: Returns the original purchased amount on an order transaction
- **Signature**: `List16(string projectId, string authorization, double? limit = 10d, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 10d, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`
- **Returns**: `ListProjectPurchasesV1Response`
- **Error**: `SdkException<List16Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
