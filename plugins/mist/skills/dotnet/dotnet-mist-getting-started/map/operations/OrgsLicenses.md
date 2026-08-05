# OrgsLicenses — operations

Accessor: `client.OrgsLicenses` · Source: `Api/OrgsLicenses.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOrgLicenseAsyncClaimStatus
- **HTTP**: `GET /api/v1/orgs/{org_id}/claim/status` (ApiHost (api))
- **Notes**: Get Processing Status for Async Claim
- **Signature**: `GetOrgLicenseAsyncClaimStatus(Guid orgId, bool? detail, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `detail` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `detail` ← `detail`
- **Returns**: `ResponseAsyncLicense`
- **Error**: `SdkException<GetOrgLicenseAsyncClaimStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClaimOrgLicense
- **HTTP**: `POST /api/v1/orgs/{org_id}/claim` (ApiHost (api))
- **Notes**: Claim Org licenses / activation codes
- **Signature**: `ClaimOrgLicense(Guid orgId, ClaimActivation? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseClaimLicense`
- **Error**: `SdkException<ClaimOrgLicenseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgLicensesBySite
- **HTTP**: `GET /api/v1/orgs/{org_id}/licenses/usages` (ApiHost (api))
- **Notes**: Get Licenses Usage by Sites This shows license usage (i.e. needed) based on the features enabled for the site.
- **Signature**: `GetOrgLicensesBySite(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LicenseUsageOrg>`
- **Error**: `SdkException<GetOrgLicensesBySiteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgLicensesSummary
- **HTTP**: `GET /api/v1/orgs/{org_id}/licenses` (ApiHost (api))
- **Notes**: Get the list of licenses
- **Signature**: `GetOrgLicensesSummary(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `License`
- **Error**: `SdkException<GetOrgLicensesSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MoveOrDeleteOrgLicenseToAnotherOrg
- **HTTP**: `PUT /api/v1/orgs/{org_id}/licenses` (ApiHost (api))
- **Notes**: Move, Undo Move or Delete Org License to Another Org If the admin has admin privilege against the `org_id` and `dst_org_id`, he can move some of the licenses to another Org. Given that: 1. the specified license is currently active 2. there’s enough licenses left in the specified license (by subscription_id) 3. there will still be enough entitled licenses for the type of license after the amendment
- **Signature**: `MoveOrDeleteOrgLicenseToAnotherOrg(Guid orgId, OrgLicenseAction? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<MoveOrDeleteOrgLicenseToAnotherOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
