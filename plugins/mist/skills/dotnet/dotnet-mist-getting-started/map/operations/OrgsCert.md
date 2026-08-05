# OrgsCert — operations

Accessor: `client.OrgsCert` · Source: `Api/OrgsCert.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ClearOrgCertificates
- **HTTP**: `POST /api/v1/orgs/{org_id}/cert/regenerate` (ApiHost (api))
- **Notes**: Clear Org Certificates
- **Signature**: `ClearOrgCertificates(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ClearOrgCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSslProxyCert
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssl_proxy_cert` (ApiHost (api))
- **Notes**: Get Org SSL proxy Certificates
- **Signature**: `GetOrgSslProxyCert(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrgSslProxyCert`
- **Error**: `SdkException<GetOrgSslProxyCertError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgCertificates
- **HTTP**: `GET /api/v1/orgs/{org_id}/cert` (ApiHost (api))
- **Notes**: Get Org Certificates
- **Signature**: `ListOrgCertificates(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseCertificate`
- **Error**: `SdkException<ListOrgCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RotateOrgCertificate
- **HTTP**: `POST /api/v1/orgs/{org_id}/cert/apply_pending` (ApiHost (api))
- **Notes**: Replace the current org cert with the pending cert generated previously
- **Signature**: `RotateOrgCertificate(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RotateOrgCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TruncateOrgCrlFile
- **HTTP**: `POST /api/v1/orgs/{org_id}/crl/truncate` (ApiHost (api))
- **Notes**: By default, all certs used by recently unclaimed devices within 9 month will be included in CRL. If the list grows too big, you can truncate it
- **Signature**: `TruncateOrgCrlFile(Guid orgId, DaysNumber? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TruncateOrgCrlFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
