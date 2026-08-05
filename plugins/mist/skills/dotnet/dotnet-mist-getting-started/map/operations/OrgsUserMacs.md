# OrgsUserMacs — operations

Accessor: `client.OrgsUserMacs` · Source: `Api/OrgsUserMacs.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgUserMac
- **HTTP**: `POST /api/v1/orgs/{org_id}/usermacs` (ApiHost (api))
- **Notes**: Create Org User MACs Usermacs import CSV file format mac,labels,vlan,notes 921b638445cd,"bldg1,flor1",vlan-100 721b638445ef,"bldg2,flor2",vlan-101,Canon Printers 721b638445ee,"bldg3,flor3",vlan-102 921b638445ce,"bldg4,flor4",vlan-103 921b638445cf,"bldg5,flor5",vlan-104
- **Signature**: `CreateOrgUserMac(Guid orgId, UserMac? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UserMac`
- **Error**: `SdkException<CreateOrgUserMacError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgMultipleUserMacs
- **HTTP**: `POST /api/v1/orgs/{org_id}/usermacs/delete` (ApiHost (api))
- **Notes**: Delete Multiple Org User MACs
- **Signature**: `DeleteOrgMultipleUserMacs(Guid orgId, UsermacsId? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgMultipleUserMacsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgUserMac
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/usermacs/{usermac_id}` (ApiHost (api))
- **Notes**: Delete Org User MAC
- **Signature**: `DeleteOrgUserMac(Guid orgId, Guid usermacId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgUserMacError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgUserMac
- **HTTP**: `GET /api/v1/orgs/{org_id}/usermacs/{usermac_id}` (ApiHost (api))
- **Notes**: Get Org User MAC
- **Signature**: `GetOrgUserMac(Guid orgId, Guid usermacId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UserMac`
- **Error**: `SdkException<GetOrgUserMacError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportOrgUserMacs
- **HTTP**: `POST /api/v1/orgs/{org_id}/usermacs/import` (ApiHost (api))
- **Notes**: Import Org User MACs CSV Import example mac,labels,vlan,notes,name,radius_group 921b638445cd,"bldg1,flor1",vlan-100 721b638445ef,"bldg2,flor2",vlan-101,Canon Printers 721b638445ee,"bldg3,flor3",vlan-102,Printer2,VIP 921b638445ce,"bldg4,flor4",vlan-103 921b638445cf,"bldg5,flor5",vlan-104
- **Signature**: `ImportOrgUserMacs(Guid orgId, BinaryContent file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UserMacImport`
- **Error**: `SdkException<ImportOrgUserMacsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgUserMacs
- **HTTP**: `GET /api/v1/orgs/{org_id}/usermacs/search` (ApiHost (api))
- **Notes**: Search Org User MACs
- **Signature**: `SearchOrgUserMacs(Guid orgId, string? mac, IReadOnlyList<string>? labels, int? limit = 100, int? page = 1, string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mac` — nullable, no default → **must pass explicitly**
  - `labels` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `labels` ← `labels`, `limit` ← `limit`, `page` ← `page`, `sort` ← `sort`
- **Returns**: `IReadOnlyList<UserMac>`
- **Error**: `SdkException<SearchOrgUserMacsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgMultipleUserMacs
- **HTTP**: `PUT /api/v1/orgs/{org_id}/usermacs` (ApiHost (api))
- **Notes**: Update Multiple Org User MACs
- **Signature**: `UpdateOrgMultipleUserMacs(Guid orgId, IReadOnlyList<UserMac>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UserMacsUpdate`
- **Error**: `SdkException<UpdateOrgMultipleUserMacsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgUserMac
- **HTTP**: `PUT /api/v1/orgs/{org_id}/usermacs/{usermac_id}` (ApiHost (api))
- **Notes**: Update Org User MAC
- **Signature**: `UpdateOrgUserMac(Guid orgId, Guid usermacId, UserMac? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UserMac`
- **Error**: `SdkException<UpdateOrgUserMacError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
