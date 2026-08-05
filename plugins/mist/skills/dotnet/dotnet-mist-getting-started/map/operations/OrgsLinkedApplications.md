# OrgsLinkedApplications — operations

Accessor: `client.OrgsLinkedApplications` · Source: `Api/OrgsLinkedApplications.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddOrgOauthAppAccounts
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/{app_name}/link_accounts` (ApiHost (api))
- **Notes**: Add Jamf, VMware Authorization With Mist Portal
- **Signature**: `AddOrgOauthAppAccounts(Guid orgId, OauthAppName appName, AccountOauthAdd? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountOauthInfo`
- **Error**: `SdkException<AddOrgOauthAppAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgOauthAppAuthorization
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/setting/{app_name}/link_accounts/{account_id}` (ApiHost (api))
- **Notes**: Delete Org Level OAuth Application Authorization With Mist Portal
- **Signature**: `DeleteOrgOauthAppAuthorization(Guid orgId, OauthAppName appName, string accountId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgOauthAppAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgOauthAppLinkedStatus
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting/{app_name}/link_accounts` (ApiHost (api))
- **Notes**: Get Org Level OAuth Application Linked Status
- **Signature**: `GetOrgOauthAppLinkedStatus(Guid orgId, OauthAppName appName, string forward, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `forward` ← `forward`
- **Returns**: `AccountOauthInfo`
- **Error**: `SdkException<GetOrgOauthAppLinkedStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgOauthAppAccount
- **HTTP**: `PUT /api/v1/orgs/{org_id}/setting/{app_name}/link_accounts` (ApiHost (api))
- **Notes**: Update Zoom, Teams, Intune Authorization. Request Payload, These Field And Values Will Be Specific To Each Of The Third Party Apps Accounts.
- **Signature**: `UpdateOrgOauthAppAccount(Guid orgId, OauthAppName appName, AccountOauthConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgOauthAppAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
