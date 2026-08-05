# OrgsIntegrationJuniper — operations

Accessor: `client.OrgsIntegrationJuniper` · Source: `Api/OrgsIntegrationJuniper.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### LinkOrgToJuniperJuniperAccount
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/juniper/link_accounts` (ApiHost (api))
- **Notes**: Link Juniper Accounts
- **Signature**: `LinkOrgToJuniperJuniperAccount(Guid orgId, AccountJuniperConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountJuniperInfo`
- **Error**: `SdkException<LinkOrgToJuniperJuniperAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseDetailString(out ResponseDetailString)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnlinkOrgFromJuniperCustomerId
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/setting/juniper/unlink_account` (ApiHost (api))
- **Notes**: Unlink Juniper Customer ID `linked_by` field is only required if there are duplicate account_names.
- **Signature**: `UnlinkOrgFromJuniperCustomerId(Guid orgId, AccountJuniperInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnlinkOrgFromJuniperCustomerIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
