<!-- Generated file — do not edit; regenerated with the SDK. -->

# Certificates — operations

Accessor: `client.certificates` · Source: `aws_certificate_manager/apis/certificates.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.certificates.delete_certificate

- **Route**: `POST /#DeleteCertificate`
- **Auth**: `sigv4`
- **Signature**: `def delete_certificate(x_amz_target: XAmzTargetAwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCertificateErrorBody]`
- **Error**: `DeleteCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCertificateManagerCertificatesApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_certificates_api.py` |
| `DeleteCertificateErrorBody` | `aws_certificate_manager/errors/delete_certificate_error.py` |

### client.certificates.describe_certificate

- **Route**: `POST /#DescribeCertificate`
- **Auth**: `sigv4`
- **Signature**: `def describe_certificate(x_amz_target: XAmzTarget1AwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeCertificateErrorBody]`
- **Error**: `DescribeCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCertificateManagerCertificatesApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_certificates_api.py` |
| `DescribeCertificateErrorBody` | `aws_certificate_manager/errors/describe_certificate_error.py` |

### client.certificates.export_certificate

- **Route**: `POST /#ExportCertificate`
- **Auth**: `sigv4`
- **Signature**: `def export_certificate(x_amz_target: XAmzTarget2AwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ExportCertificateErrorBody]`
- **Error**: `ExportCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCertificateManagerCertificatesApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_certificates_api.py` |
| `ExportCertificateErrorBody` | `aws_certificate_manager/errors/export_certificate_error.py` |

### client.certificates.get_certificate

- **Route**: `POST /#GetCertificate`
- **Auth**: `sigv4`
- **Signature**: `def get_certificate(x_amz_target: XAmzTarget3AwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetCertificateErrorBody]`
- **Error**: `GetCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsCertificateManagerCertificatesApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_certificates_api.py` |
| `GetCertificateErrorBody` | `aws_certificate_manager/errors/get_certificate_error.py` |

### client.certificates.import_certificate

- **Route**: `POST /#ImportCertificate`
- **Auth**: `sigv4`
- **Signature**: `def import_certificate(x_amz_target: XAmzTarget4AwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ImportCertificateErrorBody]`
- **Error**: `ImportCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsCertificateManagerCertificatesApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target4_aws_certificate_manager_certificates_api.py` |
| `ImportCertificateErrorBody` | `aws_certificate_manager/errors/import_certificate_error.py` |

### client.certificates.list_certificates

- **Route**: `POST /#ListCertificates`
- **Auth**: `sigv4`
- **Signature**: `def list_certificates(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListCertificatesErrorBody]`
- **Error**: `ListCertificatesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `aws_certificate_manager/models/enums/x_amz_target5.py` |
| `ListCertificatesErrorBody` | `aws_certificate_manager/errors/list_certificates_error.py` |

### client.certificates.request_certificate

- **Route**: `POST /#RequestCertificate`
- **Auth**: `sigv4`
- **Signature**: `def request_certificate(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RequestCertificateErrorBody]`
- **Error**: `RequestCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `aws_certificate_manager/models/enums/x_amz_target8.py` |
| `RequestCertificateErrorBody` | `aws_certificate_manager/errors/request_certificate_error.py` |

### client.certificates.revoke_certificate

- **Route**: `POST /#RevokeCertificate`
- **Auth**: `sigv4`
- **Signature**: `def revoke_certificate(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RevokeCertificateErrorBody]`
- **Error**: `RevokeCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `aws_certificate_manager/models/enums/x_amz_target6.py` |
| `RevokeCertificateErrorBody` | `aws_certificate_manager/errors/revoke_certificate_error.py` |

### client.certificates.search_certificates

- **Route**: `POST /#SearchCertificates`
- **Auth**: `sigv4`
- **Signature**: `def search_certificates(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SearchCertificatesErrorBody]`
- **Error**: `SearchCertificatesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `aws_certificate_manager/models/enums/x_amz_target7.py` |
| `SearchCertificatesErrorBody` | `aws_certificate_manager/errors/search_certificates_error.py` |

