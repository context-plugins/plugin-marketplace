<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeEndpointApi — operations

Accessor: `client.acme_endpoint_api` · Source: `aws_certificate_manager/apis/acme_endpoint_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.acme_endpoint_api.create_acme_endpoint

- **Route**: `POST /#CreateAcmeEndpoint`
- **Auth**: `sigv4`
- **Signature**: `def create_acme_endpoint(x_amz_target: XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateAcmeEndpointErrorBody]`
- **Error**: `CreateAcmeEndpointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_acme_endpoint_api.py` |
| `CreateAcmeEndpointErrorBody` | `aws_certificate_manager/errors/create_acme_endpoint_error.py` |

### client.acme_endpoint_api.delete_acme_endpoint

- **Route**: `POST /#DeleteAcmeEndpoint`
- **Auth**: `sigv4`
- **Signature**: `def delete_acme_endpoint(x_amz_target: XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAcmeEndpointErrorBody]`
- **Error**: `DeleteAcmeEndpointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_acme_endpoint_api.py` |
| `DeleteAcmeEndpointErrorBody` | `aws_certificate_manager/errors/delete_acme_endpoint_error.py` |

### client.acme_endpoint_api.describe_acme_endpoint

- **Route**: `POST /#DescribeAcmeEndpoint`
- **Auth**: `sigv4`
- **Signature**: `def describe_acme_endpoint(x_amz_target: XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeAcmeEndpointErrorBody]`
- **Error**: `DescribeAcmeEndpointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_acme_endpoint_api.py` |
| `DescribeAcmeEndpointErrorBody` | `aws_certificate_manager/errors/describe_acme_endpoint_error.py` |

### client.acme_endpoint_api.list_acme_endpoints

- **Route**: `POST /#ListAcmeEndpoints`
- **Auth**: `sigv4`
- **Signature**: `def list_acme_endpoints(x_amz_target: XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListAcmeEndpointsErrorBody]`
- **Error**: `ListAcmeEndpointsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_acme_endpoint_api.py` |
| `ListAcmeEndpointsErrorBody` | `aws_certificate_manager/errors/list_acme_endpoints_error.py` |

### client.acme_endpoint_api.update_acme_endpoint

- **Route**: `POST /#UpdateAcmeEndpoint`
- **Auth**: `sigv4`
- **Signature**: `def update_acme_endpoint(x_amz_target: XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateAcmeEndpointErrorBody]`
- **Error**: `UpdateAcmeEndpointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target4_aws_certificate_manager_acme_endpoint_api.py` |
| `UpdateAcmeEndpointErrorBody` | `aws_certificate_manager/errors/update_acme_endpoint_error.py` |

