<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `aws_certificate_manager/apis/operations.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.get_account_configuration

- **Route**: `POST /#GetAccountConfiguration`
- **Auth**: `sigv4`
- **Signature**: `def get_account_configuration(x_amz_target: XAmzTarget3AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetAccountConfigurationErrorBody]`
- **Error**: `GetAccountConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsCertificateManagerOperationsApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_operations_api.py` |
| `GetAccountConfigurationErrorBody` | `aws_certificate_manager/errors/get_account_configuration_error.py` |

### client.operations.get_acme_external_account_binding_credentials

- **Route**: `POST /#GetAcmeExternalAccountBindingCredentials`
- **Auth**: `sigv4`
- **Signature**: `def get_acme_external_account_binding_credentials(x_amz_target: XAmzTarget5AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetAcmeExternalAccountBindingCredentialsErrorBody]`
- **Error**: `GetAcmeExternalAccountBindingCredentialsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5AwsCertificateManagerOperationsApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target5_aws_certificate_manager_operations_api.py` |
| `GetAcmeExternalAccountBindingCredentialsErrorBody` | `aws_certificate_manager/errors/get_acme_external_account_binding_credentials_error.py` |

### client.operations.list_certificate_domain_validations

- **Route**: `POST /#ListCertificateDomainValidations`
- **Auth**: `sigv4`
- **Signature**: `def list_certificate_domain_validations(x_amz_target: XAmzTarget6AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListCertificateDomainValidationsErrorBody]`
- **Error**: `ListCertificateDomainValidationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6AwsCertificateManagerOperationsApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target6_aws_certificate_manager_operations_api.py` |
| `ListCertificateDomainValidationsErrorBody` | `aws_certificate_manager/errors/list_certificate_domain_validations_error.py` |

### client.operations.put_account_configuration

- **Route**: `POST /#PutAccountConfiguration`
- **Auth**: `sigv4`
- **Signature**: `def put_account_configuration(x_amz_target: XAmzTarget4AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PutAccountConfigurationErrorBody]`
- **Error**: `PutAccountConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsCertificateManagerOperationsApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target4_aws_certificate_manager_operations_api.py` |
| `PutAccountConfigurationErrorBody` | `aws_certificate_manager/errors/put_account_configuration_error.py` |

### client.operations.renew_certificate

- **Route**: `POST /#RenewCertificate`
- **Auth**: `sigv4`
- **Signature**: `def renew_certificate(x_amz_target: XAmzTargetAwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RenewCertificateErrorBody]`
- **Error**: `RenewCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCertificateManagerOperationsApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_operations_api.py` |
| `RenewCertificateErrorBody` | `aws_certificate_manager/errors/renew_certificate_error.py` |

### client.operations.request_certificate2

- **Route**: `POST /#RequestCertificate`
- **Auth**: `sigv4`
- **Signature**: `def request_certificate2(x_amz_target: XAmzTarget1AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RequestCertificate2ErrorBody]`
- **Error**: `RequestCertificate2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCertificateManagerOperationsApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_operations_api.py` |
| `RequestCertificate2ErrorBody` | `aws_certificate_manager/errors/request_certificate2_error.py` |

### client.operations.resend_validation_email

- **Route**: `POST /#ResendValidationEmail`
- **Auth**: `sigv4`
- **Signature**: `def resend_validation_email(x_amz_target: XAmzTarget2AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ResendValidationEmailErrorBody]`
- **Error**: `ResendValidationEmailErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCertificateManagerOperationsApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_operations_api.py` |
| `ResendValidationEmailErrorBody` | `aws_certificate_manager/errors/resend_validation_email_error.py` |

### client.operations.tag_resource

- **Route**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Signature**: `def tag_resource(x_amz_target: XAmzTarget7AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7AwsCertificateManagerOperationsApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target7_aws_certificate_manager_operations_api.py` |
| `TagResourceErrorBody` | `aws_certificate_manager/errors/tag_resource_error.py` |

### client.operations.untag_resource

- **Route**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Signature**: `def untag_resource(x_amz_target: XAmzTarget8AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8AwsCertificateManagerOperationsApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target8_aws_certificate_manager_operations_api.py` |
| `UntagResourceErrorBody` | `aws_certificate_manager/errors/untag_resource_error.py` |

### client.operations.update_certificate_options

- **Route**: `POST /#UpdateCertificateOptions`
- **Auth**: `sigv4`
- **Signature**: `def update_certificate_options(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateCertificateOptionsErrorBody]`
- **Error**: `UpdateCertificateOptionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `aws_certificate_manager/models/enums/x_amz_target9.py` |
| `UpdateCertificateOptionsErrorBody` | `aws_certificate_manager/errors/update_certificate_options_error.py` |

