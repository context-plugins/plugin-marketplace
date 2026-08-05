# OrgsSetting — operations

Accessor: `client.OrgsSetting` · Source: `Api/OrgsSetting.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgWirelessClientsBlocklist
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/blacklist` (ApiHost (api))
- **Notes**: Create Org Blacklist Client List. If there is already a blacklist, this API will replace it with the new one. Max number of blacklist clients is 1000. Retrieve the current blacklisted clients from `blacklist_url` under Org:Setting
- **Signature**: `CreateOrgWirelessClientsBlocklist(Guid orgId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MacAddresses`
- **Error**: `SdkException<CreateOrgWirelessClientsBlocklistError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgWirelessClientsBlocklist
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/setting/blacklist` (ApiHost (api))
- **Notes**: Delete Org Blacklist Station Clients
- **Signature**: `DeleteOrgWirelessClientsBlocklist(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgWirelessClientsBlocklistError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSettings
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting` (ApiHost (api))
- **Notes**: Get Org Settings
- **Signature**: `GetOrgSettings(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrgSetting`
- **Error**: `SdkException<GetOrgSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetOrgCustomBucket
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/pcap_bucket/setup` (ApiHost (api))
- **Notes**: Provide Customer Bucket Name Setting up Custom PCAP Bucket Involves the following: * provide the bucket name * we’ll attempt to write a file MIST_TOKEN * you have to verify the ownership of the bucket by providing the content of the MIST_TOKEN
- **Signature**: `SetOrgCustomBucket(Guid orgId, PcapBucket? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponsePcapBucketConfig`
- **Error**: `SdkException<SetOrgCustomBucketError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgSettings
- **HTTP**: `PUT /api/v1/orgs/{org_id}/setting` (ApiHost (api))
- **Notes**: Update Org Settings
- **Signature**: `UpdateOrgSettings(Guid orgId, OrgSetting? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrgSetting`
- **Error**: `SdkException<UpdateOrgSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VerifyOrgCustomBucket
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/pcap_bucket/verify` (ApiHost (api))
- **Notes**: Verify Customer PCAP Bucket Note : If successful, a "VERIFIED" file will be created in the bucket
- **Signature**: `VerifyOrgCustomBucket(Guid orgId, PcapBucketVerify? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<VerifyOrgCustomBucketError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
