# OrgsCrl — operations

Accessor: `client.OrgsCrl` · Source: `Api/OrgsCrl.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOrgCrlFile
- **HTTP**: `GET /api/v1/orgs/{org_id}/crl` (ApiHost (api))
- **Notes**: Get Org CRL File
- **Signature**: `GetOrgCrlFile(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<GetOrgCrlFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
