# OrgsIntegrationJse — operations

Accessor: `client.OrgsIntegrationJse` · Source: `Api/OrgsIntegrationJse.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteOrgJseIntegration
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/setting/jse/setup` (ApiHost (api))
- **Notes**: Delete JSE Integration
- **Signature**: `DeleteOrgJseIntegration(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgJseIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgJseInfo
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting/jse/info` (ApiHost (api))
- **Notes**: Retrieves the list of JSE orgs associated with the account.
- **Signature**: `GetOrgJseInfo(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountJseInfo`
- **Error**: `SdkException<GetOrgJseInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgJseIntegration
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting/jse/setup` (ApiHost (api))
- **Notes**: Get Org JSE Integration
- **Signature**: `GetOrgJseIntegration(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountJseInfo`
- **Error**: `SdkException<GetOrgJseIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetupOrgJseIntegration
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/jse/setup` (ApiHost (api))
- **Notes**: In JSE UI: 1. Create custom role with Read access to service_location and RW access to site and IPSec profile APIs. 2. Create a user with the above custom role. - email: john@abc.com 3. Activate the user in the JSE account. 4. Create the service locations on the JSE account.
- **Signature**: `SetupOrgJseIntegration(Guid orgId, AccountJseConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountJseInfo`
- **Error**: `SdkException<SetupOrgJseIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
