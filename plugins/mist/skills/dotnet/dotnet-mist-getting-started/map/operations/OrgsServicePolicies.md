# OrgsServicePolicies — operations

Accessor: `client.OrgsServicePolicies` · Source: `Api/OrgsServicePolicies.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgServicePolicy
- **HTTP**: `POST /api/v1/orgs/{org_id}/servicepolicies` (ApiHost (api))
- **Notes**: Create Org Service Policy
- **Signature**: `CreateOrgServicePolicy(Guid orgId, OrgServicePolicy? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrgServicePolicy`
- **Error**: `SdkException<CreateOrgServicePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgServicePolicy
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/servicepolicies/{servicepolicy_id}` (ApiHost (api))
- **Notes**: Delete Org Service Policy
- **Signature**: `DeleteOrgServicePolicy(Guid orgId, Guid servicepolicyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgServicePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgServicePolicy
- **HTTP**: `GET /api/v1/orgs/{org_id}/servicepolicies/{servicepolicy_id}` (ApiHost (api))
- **Notes**: Get Org Service Policy Details
- **Signature**: `GetOrgServicePolicy(Guid orgId, Guid servicepolicyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrgServicePolicy`
- **Error**: `SdkException<GetOrgServicePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgServicePolicies
- **HTTP**: `GET /api/v1/orgs/{org_id}/servicepolicies` (ApiHost (api))
- **Notes**: Get List of Org Service Policies
- **Signature**: `ListOrgServicePolicies(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<OrgServicePolicy>`
- **Error**: `SdkException<ListOrgServicePoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgServicePolicy
- **HTTP**: `PUT /api/v1/orgs/{org_id}/servicepolicies/{servicepolicy_id}` (ApiHost (api))
- **Notes**: Update Org Service Policy
- **Signature**: `UpdateOrgServicePolicy(Guid orgId, Guid servicepolicyId, OrgServicePolicy? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrgServicePolicy`
- **Error**: `SdkException<UpdateOrgServicePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
