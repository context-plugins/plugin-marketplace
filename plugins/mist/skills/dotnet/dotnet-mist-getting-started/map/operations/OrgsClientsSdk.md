# OrgsClientsSdk — operations

Accessor: `client.OrgsClientsSdk` · Source: `Api/OrgsClientsSdk.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdateSdkClient
- **HTTP**: `PUT /api/v1/orgs/{org_id}/sdkclients/{sdkclient_id}` (ApiHost (api))
- **Notes**: Update SDK Client
- **Signature**: `UpdateSdkClient(Guid orgId, Guid sdkclientId, NameString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateSdkClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
