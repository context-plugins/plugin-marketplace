# OrgsNacCrl — operations

Accessor: `client.OrgsNacCrl` · Source: `Api/OrgsNacCrl.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteOrgNacCrl
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/setting/mist_nac_crls/{naccrl_id}` (ApiHost (api))
- **Notes**: Delete NAC Org CRL file is a DELETE request to delete CRL file identified by its ID (ID assigned on file upload/creation)
- **Signature**: `DeleteOrgNacCrl(Guid orgId, Guid naccrlId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgNacCrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgNacCrl
- **HTTP**: `GET /api/v1/orgs/{org_id}/setting/mist_nac_crls` (ApiHost (api))
- **Notes**: Returns all uploaded CRL file IDs with names for the orgI
- **Signature**: `GetOrgNacCrl(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseNacCrlFiles`
- **Error**: `SdkException<GetOrgNacCrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportOrgNacCrl
- **HTTP**: `POST /api/v1/orgs/{org_id}/setting/mist_nac_crls` (ApiHost (api))
- **Notes**: The Import NAC Org CRL File endpoint allows users to manually upload a Certificate Revocation List (CRL) file in either PEM or DER format. This is a multipart POST request. We support one file upload per issuer, and re-uploads for the same issuer will overwrite the existing file.
- **Signature**: `ImportOrgNacCrl(Guid orgId, BinaryContent? file, string? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - `json` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NacCrlFile`
- **Error**: `SdkException<ImportOrgNacCrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
