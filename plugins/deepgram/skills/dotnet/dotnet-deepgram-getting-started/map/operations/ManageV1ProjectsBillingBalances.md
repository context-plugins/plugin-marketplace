# ManageV1ProjectsBillingBalances — operations

Accessor: `client.ManageV1ProjectsBillingBalances` · Source: `Api/ManageV1ProjectsBillingBalances.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Get10
- **HTTP**: `GET /v1/projects/{project_id}/balances/{balance_id}` (Default (agent))
- **Notes**: Retrieves details about the specified balance
- **Signature**: `Get10(string projectId, string balanceId, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetProjectBalanceV1Response`
- **Error**: `SdkException<Get10Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List13
- **HTTP**: `GET /v1/projects/{project_id}/balances` (Default (agent))
- **Notes**: Generates a list of outstanding balances for the specified project
- **Signature**: `List13(string projectId, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListProjectBalancesV1Response`
- **Error**: `SdkException<List13Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
