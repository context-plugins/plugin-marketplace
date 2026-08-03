# CharityOrgApi — operations

Accessor: `client.CharityOrgApi` · Source: `Api/CharityOrgApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCharityOrg
- **HTTP**: `GET /charity_org/{charity_org_id}` (Default (api))
- **Signature**: `GetCharityOrg(string charityOrgId, string xEbayCMarketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CharityOrg`
- **Error**: `SdkException<GetCharityOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCharityOrgs
- **HTTP**: `GET /charity_org` (Default (api))
- **Signature**: `GetCharityOrgs(string? limit, string? offset, string? q, string? registrationIds, string xEbayCMarketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`limit` … `registrationIds`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`, `registration_ids` ← `registrationIds`
- **Returns**: `CharitySearchResponse`
- **Error**: `SdkException<GetCharityOrgsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
