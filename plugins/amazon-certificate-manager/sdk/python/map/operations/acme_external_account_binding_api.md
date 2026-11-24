<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeExternalAccountBindingApi — operations

Accessor: `client.acme_external_account_binding_api` · Source: `aws_certificate_manager/apis/acme_external_account_binding_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.acme_external_account_binding_api.create_acme_external_account_binding

- **Route**: `POST /#CreateAcmeExternalAccountBinding`
- **Auth**: `sigv4`
- **Signature**: `def create_acme_external_account_binding(x_amz_target: XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateAcmeExternalAccountBindingErrorBody]`
- **Error**: `CreateAcmeExternalAccountBindingErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_acme_external_account_binding_api.py` |
| `CreateAcmeExternalAccountBindingErrorBody` | `aws_certificate_manager/errors/create_acme_external_account_binding_error.py` |

### client.acme_external_account_binding_api.delete_acme_external_account_binding

- **Route**: `POST /#DeleteAcmeExternalAccountBinding`
- **Auth**: `sigv4`
- **Signature**: `def delete_acme_external_account_binding(x_amz_target: XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAcmeExternalAccountBindingErrorBody]`
- **Error**: `DeleteAcmeExternalAccountBindingErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_acme_external_account_binding_api.py` |
| `DeleteAcmeExternalAccountBindingErrorBody` | `aws_certificate_manager/errors/delete_acme_external_account_binding_error.py` |

### client.acme_external_account_binding_api.describe_acme_external_account_binding

- **Route**: `POST /#DescribeAcmeExternalAccountBinding`
- **Auth**: `sigv4`
- **Signature**: `def describe_acme_external_account_binding(x_amz_target: XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeAcmeExternalAccountBindingErrorBody]`
- **Error**: `DescribeAcmeExternalAccountBindingErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_acme_external_account_binding_api.py` |
| `DescribeAcmeExternalAccountBindingErrorBody` | `aws_certificate_manager/errors/describe_acme_external_account_binding_error.py` |

### client.acme_external_account_binding_api.list_acme_external_account_bindings

- **Route**: `POST /#ListAcmeExternalAccountBindings`
- **Auth**: `sigv4`
- **Signature**: `def list_acme_external_account_bindings(x_amz_target: XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListAcmeExternalAccountBindingsErrorBody]`
- **Error**: `ListAcmeExternalAccountBindingsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_acme_external_account_binding_api.py` |
| `ListAcmeExternalAccountBindingsErrorBody` | `aws_certificate_manager/errors/list_acme_external_account_bindings_error.py` |

### client.acme_external_account_binding_api.revoke_acme_external_account_binding

- **Route**: `POST /#RevokeAcmeExternalAccountBinding`
- **Auth**: `sigv4`
- **Signature**: `def revoke_acme_external_account_binding(x_amz_target: XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RevokeAcmeExternalAccountBindingErrorBody]`
- **Error**: `RevokeAcmeExternalAccountBindingErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target4_aws_certificate_manager_acme_external_account_binding_api.py` |
| `RevokeAcmeExternalAccountBindingErrorBody` | `aws_certificate_manager/errors/revoke_acme_external_account_binding_error.py` |

