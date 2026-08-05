# OrgsSecurityPolicies — operations

Accessor: `client.OrgsSecurityPolicies` · Source: `Api/OrgsSecurityPolicies.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgSecPolicy
- **HTTP**: `POST /api/v1/orgs/{org_id}/secpolicies` (ApiHost (api))
- **Notes**: Create Org Security Policy
- **Signature**: `CreateOrgSecPolicy(Guid orgId, Secpolicy? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Secpolicy`
- **Error**: `SdkException<CreateOrgSecPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgSecPolicy
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/secpolicies/{secpolicy_id}` (ApiHost (api))
- **Notes**: Delete Org Security Policy
- **Signature**: `DeleteOrgSecPolicy(Guid orgId, Guid secpolicyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgSecPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSecPolicy
- **HTTP**: `GET /api/v1/orgs/{org_id}/secpolicies/{secpolicy_id}` (ApiHost (api))
- **Notes**: Get Org Security Policy
- **Signature**: `GetOrgSecPolicy(Guid orgId, Guid secpolicyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Secpolicy`
- **Error**: `SdkException<GetOrgSecPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSecPolicies
- **HTTP**: `GET /api/v1/orgs/{org_id}/secpolicies` (ApiHost (api))
- **Notes**: Get List of Org Security Policies
- **Signature**: `ListOrgSecPolicies(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Secpolicy>`
- **Error**: `SdkException<ListOrgSecPoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgSecPolicy
- **HTTP**: `PUT /api/v1/orgs/{org_id}/secpolicies/{secpolicy_id}` (ApiHost (api))
- **Notes**: Update Org Security Policy
- **Signature**: `UpdateOrgSecPolicy(Guid orgId, Guid secpolicyId, Secpolicy? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Secpolicy`
- **Error**: `SdkException<UpdateOrgSecPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
