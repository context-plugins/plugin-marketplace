# OrgsClientsMarvis — operations

Accessor: `client.OrgsClientsMarvis` · Source: `Api/OrgsClientsMarvis.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteOrgMarvisClient
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/stats/marvisclients` (ApiHost (api))
- **Notes**: Delete Marvis Client
- **Signature**: `DeleteOrgMarvisClient(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgMarvisClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
