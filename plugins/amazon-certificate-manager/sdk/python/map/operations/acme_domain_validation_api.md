<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeDomainValidationApi — operations

Accessor: `client.acme_domain_validation_api` · Source: `aws_certificate_manager/apis/acme_domain_validation_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.acme_domain_validation_api.create_acme_domain_validation

- **Route**: `POST /#CreateAcmeDomainValidation`
- **Auth**: `sigv4`
- **Signature**: `def create_acme_domain_validation(x_amz_target: XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateAcmeDomainValidationErrorBody]`
- **Error**: `CreateAcmeDomainValidationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_acme_domain_validation_api.py` |
| `CreateAcmeDomainValidationErrorBody` | `aws_certificate_manager/errors/create_acme_domain_validation_error.py` |

### client.acme_domain_validation_api.delete_acme_domain_validation

- **Route**: `POST /#DeleteAcmeDomainValidation`
- **Auth**: `sigv4`
- **Signature**: `def delete_acme_domain_validation(x_amz_target: XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAcmeDomainValidationErrorBody]`
- **Error**: `DeleteAcmeDomainValidationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_acme_domain_validation_api.py` |
| `DeleteAcmeDomainValidationErrorBody` | `aws_certificate_manager/errors/delete_acme_domain_validation_error.py` |

### client.acme_domain_validation_api.describe_acme_domain_validation

- **Route**: `POST /#DescribeAcmeDomainValidation`
- **Auth**: `sigv4`
- **Signature**: `def describe_acme_domain_validation(x_amz_target: XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeAcmeDomainValidationErrorBody]`
- **Error**: `DescribeAcmeDomainValidationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_acme_domain_validation_api.py` |
| `DescribeAcmeDomainValidationErrorBody` | `aws_certificate_manager/errors/describe_acme_domain_validation_error.py` |

### client.acme_domain_validation_api.list_acme_domain_validations

- **Route**: `POST /#ListAcmeDomainValidations`
- **Auth**: `sigv4`
- **Signature**: `def list_acme_domain_validations(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListAcmeDomainValidationsErrorBody]`
- **Error**: `ListAcmeDomainValidationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `aws_certificate_manager/models/enums/x_amz_target3.py` |
| `ListAcmeDomainValidationsErrorBody` | `aws_certificate_manager/errors/list_acme_domain_validations_error.py` |

### client.acme_domain_validation_api.update_acme_domain_validation

- **Route**: `POST /#UpdateAcmeDomainValidation`
- **Auth**: `sigv4`
- **Signature**: `def update_acme_domain_validation(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateAcmeDomainValidationErrorBody]`
- **Error**: `UpdateAcmeDomainValidationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `aws_certificate_manager/models/enums/x_amz_target4.py` |
| `UpdateAcmeDomainValidationErrorBody` | `aws_certificate_manager/errors/update_acme_domain_validation_error.py` |

