# OrgsNacIdp — operations

Accessor: `client.OrgsNacIdp` · Source: `Api/OrgsNacIdp.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ValidateOrgIdpCredential
- **HTTP**: `POST /api/v1/orgs/{org_id}/mist_nac/test_idp` (ApiHost (api))
- **Notes**: IDP Credential Validation. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "orgs/{org_id}/mist_nac/test_idp" } ``` Response (no idp can be found) { "event": "data", "channel": "/orgs/{org_id}/mist_nac/test_idp", "status": "data": { "status": "failure", "error": "No matching IDP found" } } ``` Response OK { "event": "data", "channel": "/orgs/{org_id}/mist_nac/test_idp", "status": "data": { "status": "success", "idp_id": "915793c0-1355-4e98-b1c0-23df2227b357", "idp_type": "ldap", // more attributes will be added later } } ``` Response Invalid Credentials { "event": "data", "channel": "/orgs/{org_id}/mist_nac/test_idp", "status": "data": { "status": "failure", "error": "Invalid Credentials", "idp_id": "915793c0-1355-4e98-b1c0-23df2227b357", "idp_type": "ldap", } } ```
- **Signature**: `ValidateOrgIdpCredential(Guid orgId, UsernamePassword? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ValidateOrgIdpCredentialError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
