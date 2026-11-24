# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AwsCertificateManagerClient](aws_certificate_manager/client.py)

## AcmeAccountApi

> Source: [AcmeAccountApi](aws_certificate_manager/apis/acme_account_api.py)

<details>
<summary><code>def describe_acme_account(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeAcmeAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and associated external account binding.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_account_api.with_raw_response.describe_acme_account(
    XAmzTarget.CERTIFICATE_MANAGER_DESCRIBE_ACME_ACCOUNT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAcmeAccountErrorBody
```

**Async**

```python
result = await async_client.acme_account_api.with_raw_response.describe_acme_account(
    XAmzTarget.CERTIFICATE_MANAGER_DESCRIBE_ACME_ACCOUNT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAcmeAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](aws_certificate_manager/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [DescribeAcmeAccountErrorBody](aws_certificate_manager/errors/describe_acme_account_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeAcmeAccountErrorBody](aws_certificate_manager/errors/describe_acme_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_acme_accounts(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListAcmeAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when clients use external account binding credentials to register.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_account_api.with_raw_response.list_acme_accounts(
    XAmzTarget1.CERTIFICATE_MANAGER_LIST_ACME_ACCOUNTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAcmeAccountsErrorBody
```

**Async**

```python
result = await async_client.acme_account_api.with_raw_response.list_acme_accounts(
    XAmzTarget1.CERTIFICATE_MANAGER_LIST_ACME_ACCOUNTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAcmeAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](aws_certificate_manager/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ListAcmeAccountsErrorBody](aws_certificate_manager/errors/list_acme_accounts_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListAcmeAccountsErrorBody](aws_certificate_manager/errors/list_acme_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke_acme_account(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RevokeAcmeAccountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is irreversible.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_account_api.with_raw_response.revoke_acme_account(
    XAmzTarget2.CERTIFICATE_MANAGER_REVOKE_ACME_ACCOUNT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeAcmeAccountErrorBody
```

**Async**

```python
result = await async_client.acme_account_api.with_raw_response.revoke_acme_account(
    XAmzTarget2.CERTIFICATE_MANAGER_REVOKE_ACME_ACCOUNT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeAcmeAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](aws_certificate_manager/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [RevokeAcmeAccountErrorBody](aws_certificate_manager/errors/revoke_acme_account_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RevokeAcmeAccountErrorBody](aws_certificate_manager/errors/revoke_acme_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AcmeDomainValidationApi

> Source: [AcmeDomainValidationApi](aws_certificate_manager/apis/acme_domain_validation_api.py)

<details>
<summary><code>def create_acme_domain_validation(x_amz_target: XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateAcmeDomainValidationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue certificates for specified domain names. You configure prevalidation to prove domain ownership.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_domain_validation_api.with_raw_response.create_acme_domain_validation(
    XAmzTargetAwsCertificateManagerAcmeDomainValidationApi.CERTIFICATE_MANAGER_CREATE_ACME_DOMAIN_VALIDATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAcmeDomainValidationErrorBody
```

**Async**

```python
result = await async_client.acme_domain_validation_api.with_raw_response.create_acme_domain_validation(
    XAmzTargetAwsCertificateManagerAcmeDomainValidationApi.CERTIFICATE_MANAGER_CREATE_ACME_DOMAIN_VALIDATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAcmeDomainValidationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr](aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_acme_domain_validation_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [CreateAcmeDomainValidationErrorBody](aws_certificate_manager/errors/create_acme_domain_validation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateAcmeDomainValidationErrorBody](aws_certificate_manager/errors/create_acme_domain_validation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_acme_domain_validation(x_amz_target: XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAcmeDomainValidationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the associated domain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_domain_validation_api.with_raw_response.delete_acme_domain_validation(
    XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi.CERTIFICATE_MANAGER_DELETE_ACME_DOMAIN_VALIDATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAcmeDomainValidationErrorBody
```

**Async**

```python
result = await async_client.acme_domain_validation_api.with_raw_response.delete_acme_domain_validation(
    XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi.CERTIFICATE_MANAGER_DELETE_ACME_DOMAIN_VALIDATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAcmeDomainValidationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr](aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_acme_domain_validation_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [DeleteAcmeDomainValidationErrorBody](aws_certificate_manager/errors/delete_acme_domain_validation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAcmeDomainValidationErrorBody](aws_certificate_manager/errors/delete_acme_domain_validation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_acme_domain_validation(x_amz_target: XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeAcmeDomainValidationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS resource records required for validation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_domain_validation_api.with_raw_response.describe_acme_domain_validation(
    XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi.CERTIFICATE_MANAGER_DESCRIBE_ACME_DOMAIN_VALIDATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAcmeDomainValidationErrorBody
```

**Async**

```python
result = await async_client.acme_domain_validation_api.with_raw_response.describe_acme_domain_validation(
    XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi.CERTIFICATE_MANAGER_DESCRIBE_ACME_DOMAIN_VALIDATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAcmeDomainValidationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr](aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_acme_domain_validation_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [DescribeAcmeDomainValidationErrorBody](aws_certificate_manager/errors/describe_acme_domain_validation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeAcmeDomainValidationErrorBody](aws_certificate_manager/errors/describe_acme_domain_validation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_acme_domain_validations(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListAcmeDomainValidationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of domain validations for the specified ACME endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_domain_validation_api.with_raw_response.list_acme_domain_validations(
    XAmzTarget3.CERTIFICATE_MANAGER_LIST_ACME_DOMAIN_VALIDATIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAcmeDomainValidationsErrorBody
```

**Async**

```python
result = await async_client.acme_domain_validation_api.with_raw_response.list_acme_domain_validations(
    XAmzTarget3.CERTIFICATE_MANAGER_LIST_ACME_DOMAIN_VALIDATIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAcmeDomainValidationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](aws_certificate_manager/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ListAcmeDomainValidationsErrorBody](aws_certificate_manager/errors/list_acme_domain_validations_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListAcmeDomainValidationsErrorBody](aws_certificate_manager/errors/list_acme_domain_validations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_acme_domain_validation(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateAcmeDomainValidationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the prevalidation configuration of an existing domain validation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_domain_validation_api.with_raw_response.update_acme_domain_validation(
    XAmzTarget4.CERTIFICATE_MANAGER_UPDATE_ACME_DOMAIN_VALIDATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAcmeDomainValidationErrorBody
```

**Async**

```python
result = await async_client.acme_domain_validation_api.with_raw_response.update_acme_domain_validation(
    XAmzTarget4.CERTIFICATE_MANAGER_UPDATE_ACME_DOMAIN_VALIDATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAcmeDomainValidationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](aws_certificate_manager/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [UpdateAcmeDomainValidationErrorBody](aws_certificate_manager/errors/update_acme_domain_validation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateAcmeDomainValidationErrorBody](aws_certificate_manager/errors/update_acme_domain_validation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AcmeEndpointApi

> Source: [AcmeEndpointApi](aws_certificate_manager/apis/acme_endpoint_api.py)

<details>
<summary><code>def create_acme_endpoint(x_amz_target: XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateAcmeEndpointErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME clients can use the endpoint URL to automate certificate issuance using the ACME protocol.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_endpoint_api.with_raw_response.create_acme_endpoint(
    XAmzTargetAwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_CREATE_ACME_ENDPOINT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAcmeEndpointErrorBody
```

**Async**

```python
result = await async_client.acme_endpoint_api.with_raw_response.create_acme_endpoint(
    XAmzTargetAwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_CREATE_ACME_ENDPOINT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAcmeEndpointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr](aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_acme_endpoint_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [CreateAcmeEndpointErrorBody](aws_certificate_manager/errors/create_acme_endpoint_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateAcmeEndpointErrorBody](aws_certificate_manager/errors/create_acme_endpoint_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_acme_endpoint(x_amz_target: XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAcmeEndpointErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot issue certificates through it. Any existing external account bindings and domain validations associated with the endpoint are also deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_endpoint_api.with_raw_response.delete_acme_endpoint(
    XAmzTarget1AwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_DELETE_ACME_ENDPOINT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAcmeEndpointErrorBody
```

**Async**

```python
result = await async_client.acme_endpoint_api.with_raw_response.delete_acme_endpoint(
    XAmzTarget1AwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_DELETE_ACME_ENDPOINT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAcmeEndpointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr](aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_acme_endpoint_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [DeleteAcmeEndpointErrorBody](aws_certificate_manager/errors/delete_acme_endpoint_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAcmeEndpointErrorBody](aws_certificate_manager/errors/delete_acme_endpoint_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_acme_endpoint(x_amz_target: XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeAcmeEndpointErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization behavior, and certificate authority configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_endpoint_api.with_raw_response.describe_acme_endpoint(
    XAmzTarget2AwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_DESCRIBE_ACME_ENDPOINT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAcmeEndpointErrorBody
```

**Async**

```python
result = await async_client.acme_endpoint_api.with_raw_response.describe_acme_endpoint(
    XAmzTarget2AwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_DESCRIBE_ACME_ENDPOINT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAcmeEndpointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr](aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_acme_endpoint_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [DescribeAcmeEndpointErrorBody](aws_certificate_manager/errors/describe_acme_endpoint_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeAcmeEndpointErrorBody](aws_certificate_manager/errors/describe_acme_endpoint_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_acme_endpoints(x_amz_target: XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListAcmeEndpointsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints and their current status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_endpoint_api.with_raw_response.list_acme_endpoints(
    XAmzTarget3AwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_LIST_ACME_ENDPOINTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAcmeEndpointsErrorBody
```

**Async**

```python
result = await async_client.acme_endpoint_api.with_raw_response.list_acme_endpoints(
    XAmzTarget3AwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_LIST_ACME_ENDPOINTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAcmeEndpointsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr](aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_acme_endpoint_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ListAcmeEndpointsErrorBody](aws_certificate_manager/errors/list_acme_endpoints_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListAcmeEndpointsErrorBody](aws_certificate_manager/errors/list_acme_endpoints_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_acme_endpoint(x_amz_target: XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateAcmeEndpointErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact requirement, or certificate authority settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_endpoint_api.with_raw_response.update_acme_endpoint(
    XAmzTarget4AwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_UPDATE_ACME_ENDPOINT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAcmeEndpointErrorBody
```

**Async**

```python
result = await async_client.acme_endpoint_api.with_raw_response.update_acme_endpoint(
    XAmzTarget4AwsCertificateManagerAcmeEndpointApi.CERTIFICATE_MANAGER_UPDATE_ACME_ENDPOINT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAcmeEndpointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr](aws_certificate_manager/models/enums/x_amz_target4_aws_certificate_manager_acme_endpoint_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [UpdateAcmeEndpointErrorBody](aws_certificate_manager/errors/update_acme_endpoint_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateAcmeEndpointErrorBody](aws_certificate_manager/errors/update_acme_endpoint_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AcmeExternalAccountBindingApi

> Source: [AcmeExternalAccountBindingApi](aws_certificate_manager/apis/acme_external_account_binding_api.py)

<details>
<summary><code>def create_acme_external_account_binding(x_amz_target: XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateAcmeExternalAccountBindingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what certificate operations the ACME client can perform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_external_account_binding_api.with_raw_response.create_acme_external_account_binding(
    XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_CREATE_ACME_EXTERNAL_ACCOUNT_BINDING,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAcmeExternalAccountBindingErrorBody
```

**Async**

```python
result = await async_client.acme_external_account_binding_api.with_raw_response.create_acme_external_account_binding(
    XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_CREATE_ACME_EXTERNAL_ACCOUNT_BINDING,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAcmeExternalAccountBindingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr](aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_acme_external_account_binding_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [CreateAcmeExternalAccountBindingErrorBody](aws_certificate_manager/errors/create_acme_external_account_binding_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateAcmeExternalAccountBindingErrorBody](aws_certificate_manager/errors/create_acme_external_account_binding_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_acme_external_account_binding(x_amz_target: XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAcmeExternalAccountBindingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable for account registration. A deleted binding cannot be recovered.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_external_account_binding_api.with_raw_response.delete_acme_external_account_binding(
    XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_DELETE_ACME_EXTERNAL_ACCOUNT_BINDING,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAcmeExternalAccountBindingErrorBody
```

**Async**

```python
result = await async_client.acme_external_account_binding_api.with_raw_response.delete_acme_external_account_binding(
    XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_DELETE_ACME_EXTERNAL_ACCOUNT_BINDING,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAcmeExternalAccountBindingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr](aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_acme_external_account_binding_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [DeleteAcmeExternalAccountBindingErrorBody](aws_certificate_manager/errors/delete_acme_external_account_binding_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAcmeExternalAccountBindingErrorBody](aws_certificate_manager/errors/delete_acme_external_account_binding_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_acme_external_account_binding(x_amz_target: XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeAcmeExternalAccountBindingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified external account binding, including the associated IAM role, expiration time, and usage history.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_external_account_binding_api.with_raw_response.describe_acme_external_account_binding(
    XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_DESCRIBE_ACME_EXTERNAL_ACCOUNT_BINDING,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAcmeExternalAccountBindingErrorBody
```

**Async**

```python
result = await async_client.acme_external_account_binding_api.with_raw_response.describe_acme_external_account_binding(
    XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_DESCRIBE_ACME_EXTERNAL_ACCOUNT_BINDING,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAcmeExternalAccountBindingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr](aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_acme_external_account_binding_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [DescribeAcmeExternalAccountBindingErrorBody](aws_certificate_manager/errors/describe_acme_external_account_binding_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeAcmeExternalAccountBindingErrorBody](aws_certificate_manager/errors/describe_acme_external_account_binding_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_acme_external_account_bindings(x_amz_target: XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListAcmeExternalAccountBindingsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of external account bindings for the specified ACME endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_external_account_binding_api.with_raw_response.list_acme_external_account_bindings(
    XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_LIST_ACME_EXTERNAL_ACCOUNT_BINDINGS,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAcmeExternalAccountBindingsErrorBody
```

**Async**

```python
result = await async_client.acme_external_account_binding_api.with_raw_response.list_acme_external_account_bindings(
    XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_LIST_ACME_EXTERNAL_ACCOUNT_BINDINGS,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAcmeExternalAccountBindingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr](aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_acme_external_account_binding_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ListAcmeExternalAccountBindingsErrorBody](aws_certificate_manager/errors/list_acme_external_account_bindings_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListAcmeExternalAccountBindingsErrorBody](aws_certificate_manager/errors/list_acme_external_account_bindings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke_acme_external_account_binding(x_amz_target: XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RevokeAcmeExternalAccountBindingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an external account binding, preventing new ACME accounts from being registered using this binding. Existing ACME accounts that were previously registered using the binding are not affected and must be revoked separately.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.acme_external_account_binding_api.with_raw_response.revoke_acme_external_account_binding(
    XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_REVOKE_ACME_EXTERNAL_ACCOUNT_BINDING,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeAcmeExternalAccountBindingErrorBody
```

**Async**

```python
result = await async_client.acme_external_account_binding_api.with_raw_response.revoke_acme_external_account_binding(
    XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi.CERTIFICATE_MANAGER_REVOKE_ACME_EXTERNAL_ACCOUNT_BINDING,
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeAcmeExternalAccountBindingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr](aws_certificate_manager/models/enums/x_amz_target4_aws_certificate_manager_acme_external_account_binding_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [RevokeAcmeExternalAccountBindingErrorBody](aws_certificate_manager/errors/revoke_acme_external_account_binding_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RevokeAcmeExternalAccountBindingErrorBody](aws_certificate_manager/errors/revoke_acme_external_account_binding_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Certificates

> Source: [Certificates](aws_certificate_manager/apis/certificates.py)

<details>
<summary><code>def delete_certificate(x_amz_target: XAmzTargetAwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a certificate and its associated private key. If this action succeeds, the certificate is not available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, you must first remove the certificate association using the console or the CLI for the associated service. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private Certificate Authority User Guide. You cannot delete a certificate with a CertificateKeyPairOrigin of ACME. ACM automatically deletes these certificates 1 year after they expire. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA u

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.certificates.with_raw_response.delete_certificate(
    XAmzTargetAwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_DELETE_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCertificateErrorBody
```

**Async**

```python
result = await async_client.certificates.with_raw_response.delete_certificate(
    XAmzTargetAwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_DELETE_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCertificateManagerCertificatesApiOrStr](aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_certificates_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [DeleteCertificateErrorBody](aws_certificate_manager/errors/delete_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteCertificateErrorBody](aws_certificate_manager/errors/delete_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_certificate(x_amz_target: XAmzTarget1AwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.certificates.with_raw_response.describe_certificate(
    XAmzTarget1AwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_DESCRIBE_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeCertificateErrorBody
```

**Async**

```python
result = await async_client.certificates.with_raw_response.describe_certificate(
    XAmzTarget1AwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_DESCRIBE_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCertificateManagerCertificatesApiOrStr](aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_certificates_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [DescribeCertificateErrorBody](aws_certificate_manager/errors/describe_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeCertificateErrorBody](aws_certificate_manager/errors/describe_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def export_certificate(x_amz_target: XAmzTarget2AwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ExportCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports a private certificate issued by a private certificate authority (CA) or a public certificate for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. For information about exporting and formatting a certificate using the ACM console or CLI, see Export a private certificate and Export a public certificate. ACM public certificates created prior to June 17, 2025 cannot be exported.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.certificates.with_raw_response.export_certificate(
    XAmzTarget2AwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_EXPORT_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportCertificateErrorBody
```

**Async**

```python
result = await async_client.certificates.with_raw_response.export_certificate(
    XAmzTarget2AwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_EXPORT_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCertificateManagerCertificatesApiOrStr](aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_certificates_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ExportCertificateErrorBody](aws_certificate_manager/errors/export_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ExportCertificateErrorBody](aws_certificate_manager/errors/export_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_certificate(x_amz_target: XAmzTarget3AwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a certificate and its certificate chain. The certificate may be either a public or private certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to decode the certificates and inspect individual fields.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.certificates.with_raw_response.get_certificate(
    XAmzTarget3AwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_GET_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCertificateErrorBody
```

**Async**

```python
result = await async_client.certificates.with_raw_response.get_certificate(
    XAmzTarget3AwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_GET_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsCertificateManagerCertificatesApiOrStr](aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_certificates_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [GetCertificateErrorBody](aws_certificate_manager/errors/get_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetCertificateErrorBody](aws_certificate_manager/errors/get_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def import_certificate(x_amz_target: XAmzTarget4AwsCertificateManagerCertificatesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ImportCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that integrated services allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see Importing Certificates in the Certificate Manager User Guide. ACM does not provide managed renewal for certificates that you import. Note the following guidelines when importing third party certificates: You must enter the private key that matches the certificate you are importing. The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase. The private key must be no larger than 5 KB (5,120 bytes). The certificate, private key, and certificate chain must be PEM-encoded. The current time must be between the Not Before and Not After certificate fields. The Issuer field must not be empty. The OCSP authority URL, if present, must not exceed 1000 characters. To import a new certificate,

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.certificates.with_raw_response.import_certificate(
    XAmzTarget4AwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_IMPORT_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportCertificateErrorBody
```

**Async**

```python
result = await async_client.certificates.with_raw_response.import_certificate(
    XAmzTarget4AwsCertificateManagerCertificatesApi.CERTIFICATE_MANAGER_IMPORT_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsCertificateManagerCertificatesApiOrStr](aws_certificate_manager/models/enums/x_amz_target4_aws_certificate_manager_certificates_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ImportCertificateErrorBody](aws_certificate_manager/errors/import_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ImportCertificateErrorBody](aws_certificate_manager/errors/import_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_certificates(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListCertificatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only RSA_2048 certificates. For more information, see Filters. By default, this action does not return certificates with a CertificateKeyPairOrigin of ACME. To include ACME certificates, specify ACME in the CertificateKeyPairOrigins filter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.certificates.with_raw_response.list_certificates(XAmzTarget5.CERTIFICATE_MANAGER_LIST_CERTIFICATES)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCertificatesErrorBody
```

**Async**

```python
result = await async_client.certificates.with_raw_response.list_certificates(
    XAmzTarget5.CERTIFICATE_MANAGER_LIST_CERTIFICATES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCertificatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](aws_certificate_manager/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ListCertificatesErrorBody](aws_certificate_manager/errors/list_certificates_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListCertificatesErrorBody](aws_certificate_manager/errors/list_certificates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def request_certificate(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RequestCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds before you can retrieve information about the new certificate.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.certificates.with_raw_response.request_certificate(XAmzTarget8.CERTIFICATE_MANAGER_REQUEST_CERTIFICATE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestCertificateErrorBody
```

**Async**

```python
result = await async_client.certificates.with_raw_response.request_certificate(
    XAmzTarget8.CERTIFICATE_MANAGER_REQUEST_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](aws_certificate_manager/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [RequestCertificateErrorBody](aws_certificate_manager/errors/request_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RequestCertificateErrorBody](aws_certificate_manager/errors/request_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke_certificate(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RevokeCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.certificates.with_raw_response.revoke_certificate(XAmzTarget6.CERTIFICATE_MANAGER_REVOKE_CERTIFICATE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeCertificateErrorBody
```

**Async**

```python
result = await async_client.certificates.with_raw_response.revoke_certificate(
    XAmzTarget6.CERTIFICATE_MANAGER_REVOKE_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](aws_certificate_manager/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [RevokeCertificateErrorBody](aws_certificate_manager/errors/revoke_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RevokeCertificateErrorBody](aws_certificate_manager/errors/revoke_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_certificates(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SearchCertificatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more flexible filtering than ListCertificates by supporting complex filter statements.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.certificates.with_raw_response.search_certificates(XAmzTarget7.CERTIFICATE_MANAGER_SEARCH_CERTIFICATES)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCertificatesErrorBody
```

**Async**

```python
result = await async_client.certificates.with_raw_response.search_certificates(
    XAmzTarget7.CERTIFICATE_MANAGER_SEARCH_CERTIFICATES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCertificatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](aws_certificate_manager/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [SearchCertificatesErrorBody](aws_certificate_manager/errors/search_certificates_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SearchCertificatesErrorBody](aws_certificate_manager/errors/search_certificates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](aws_certificate_manager/apis/operations.py)

<details>
<summary><code>def get_account_configuration(x_amz_target: XAmzTarget3AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetAccountConfigurationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the account configuration options associated with an Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.get_account_configuration(
    XAmzTarget3AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_GET_ACCOUNT_CONFIGURATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountConfigurationErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.get_account_configuration(
    XAmzTarget3AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_GET_ACCOUNT_CONFIGURATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsCertificateManagerOperationsApiOrStr](aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [GetAccountConfigurationErrorBody](aws_certificate_manager/errors/get_account_configuration_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetAccountConfigurationErrorBody](aws_certificate_manager/errors/get_account_configuration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_acme_external_account_binding_credentials(x_amz_target: XAmzTarget5AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetAcmeExternalAccountBindingCredentialsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by ACME clients during account registration to bind to the endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.get_acme_external_account_binding_credentials(
    XAmzTarget5AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_GET_ACME_EXTERNAL_ACCOUNT_BINDING_CREDENTIALS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAcmeExternalAccountBindingCredentialsErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.get_acme_external_account_binding_credentials(
    XAmzTarget5AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_GET_ACME_EXTERNAL_ACCOUNT_BINDING_CREDENTIALS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAcmeExternalAccountBindingCredentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5AwsCertificateManagerOperationsApiOrStr](aws_certificate_manager/models/enums/x_amz_target5_aws_certificate_manager_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [GetAcmeExternalAccountBindingCredentialsErrorBody](aws_certificate_manager/errors/get_acme_external_account_binding_credentials_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetAcmeExternalAccountBindingCredentialsErrorBody](aws_certificate_manager/errors/get_acme_external_account_binding_credentials_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_certificate_domain_validations(x_amz_target: XAmzTarget6AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListCertificateDomainValidationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the active validation configuration, and the requested validation configuration when a validation method migration is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to retrieve the CNAME records required for DNS validation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.list_certificate_domain_validations(
    XAmzTarget6AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_LIST_CERTIFICATE_DOMAIN_VALIDATIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCertificateDomainValidationsErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.list_certificate_domain_validations(
    XAmzTarget6AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_LIST_CERTIFICATE_DOMAIN_VALIDATIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCertificateDomainValidationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6AwsCertificateManagerOperationsApiOrStr](aws_certificate_manager/models/enums/x_amz_target6_aws_certificate_manager_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ListCertificateDomainValidationsErrorBody](aws_certificate_manager/errors/list_certificate_domain_validations_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListCertificateDomainValidationsErrorBody](aws_certificate_manager/errors/list_certificate_domain_validations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_account_configuration(x_amz_target: XAmzTarget4AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PutAccountConfigurationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds or modifies account-level configurations in ACM. The supported configuration option is DaysBeforeExpiry. This option specifies the number of days prior to certificate expiration when ACM starts generating EventBridge events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.put_account_configuration(
    XAmzTarget4AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_PUT_ACCOUNT_CONFIGURATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutAccountConfigurationErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.put_account_configuration(
    XAmzTarget4AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_PUT_ACCOUNT_CONFIGURATION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutAccountConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsCertificateManagerOperationsApiOrStr](aws_certificate_manager/models/enums/x_amz_target4_aws_certificate_manager_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [PutAccountConfigurationErrorBody](aws_certificate_manager/errors/put_account_configuration_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PutAccountConfigurationErrorBody](aws_certificate_manager/errors/put_account_configuration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def renew_certificate(x_amz_target: XAmzTargetAwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RenewCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Renews an eligible ACM certificate. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first grant the ACM service principal permission to do so. For more information, see Testing Managed Renewal in the ACM User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.renew_certificate(
    XAmzTargetAwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_RENEW_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RenewCertificateErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.renew_certificate(
    XAmzTargetAwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_RENEW_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RenewCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCertificateManagerOperationsApiOrStr](aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [RenewCertificateErrorBody](aws_certificate_manager/errors/renew_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RenewCertificateErrorBody](aws_certificate_manager/errors/renew_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def request_certificate2(x_amz_target: XAmzTarget1AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RequestCertificate2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds before you can retrieve information about the new certificate.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.request_certificate2(
    XAmzTarget1AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_REQUEST_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestCertificate2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.request_certificate2(
    XAmzTarget1AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_REQUEST_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestCertificate2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCertificateManagerOperationsApiOrStr](aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [RequestCertificate2ErrorBody](aws_certificate_manager/errors/request_certificate2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RequestCertificate2ErrorBody](aws_certificate_manager/errors/request_certificate2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resend_validation_email(x_amz_target: XAmzTarget2AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ResendValidationEmailErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.resend_validation_email(
    XAmzTarget2AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_RESEND_VALIDATION_EMAIL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResendValidationEmailErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.resend_validation_email(
    XAmzTarget2AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_RESEND_VALIDATION_EMAIL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResendValidationEmailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCertificateManagerOperationsApiOrStr](aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ResendValidationEmailErrorBody](aws_certificate_manager/errors/resend_validation_email_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ResendValidationEmailErrorBody](aws_certificate_manager/errors/resend_validation_email_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(x_amz_target: XAmzTarget7AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TagResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.tag_resource(
    XAmzTarget7AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_TAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.tag_resource(
    XAmzTarget7AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_TAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7AwsCertificateManagerOperationsApiOrStr](aws_certificate_manager/models/enums/x_amz_target7_aws_certificate_manager_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [TagResourceErrorBody](aws_certificate_manager/errors/tag_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TagResourceErrorBody](aws_certificate_manager/errors/tag_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(x_amz_target: XAmzTarget8AwsCertificateManagerOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UntagResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.untag_resource(
    XAmzTarget8AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_UNTAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagResourceErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.untag_resource(
    XAmzTarget8AwsCertificateManagerOperationsApi.CERTIFICATE_MANAGER_UNTAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8AwsCertificateManagerOperationsApiOrStr](aws_certificate_manager/models/enums/x_amz_target8_aws_certificate_manager_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [UntagResourceErrorBody](aws_certificate_manager/errors/untag_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UntagResourceErrorBody](aws_certificate_manager/errors/untag_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_certificate_options(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateCertificateOptionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates certificate options. You can use this operation to change the domain validation method or specify whether to export your certificate. For more information, see Migrate from email to DNS validation and Certificate Manager Exportable Managed Certificates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.update_certificate_options(
    XAmzTarget9.CERTIFICATE_MANAGER_UPDATE_CERTIFICATE_OPTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCertificateOptionsErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.update_certificate_options(
    XAmzTarget9.CERTIFICATE_MANAGER_UPDATE_CERTIFICATE_OPTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCertificateOptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](aws_certificate_manager/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [UpdateCertificateOptionsErrorBody](aws_certificate_manager/errors/update_certificate_options_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateCertificateOptionsErrorBody](aws_certificate_manager/errors/update_certificate_options_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TagApi

> Source: [TagApi](aws_certificate_manager/apis/tag_api.py)

<details>
<summary><code>def add_tags_to_certificate(x_amz_target: XAmzTargetAwsCertificateManagerTagApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AddTagsToCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tag_api.with_raw_response.add_tags_to_certificate(
    XAmzTargetAwsCertificateManagerTagApi.CERTIFICATE_MANAGER_ADD_TAGS_TO_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddTagsToCertificateErrorBody
```

**Async**

```python
result = await async_client.tag_api.with_raw_response.add_tags_to_certificate(
    XAmzTargetAwsCertificateManagerTagApi.CERTIFICATE_MANAGER_ADD_TAGS_TO_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddTagsToCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCertificateManagerTagApiOrStr](aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_tag_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [AddTagsToCertificateErrorBody](aws_certificate_manager/errors/add_tags_to_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AddTagsToCertificateErrorBody](aws_certificate_manager/errors/add_tags_to_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tags_for_certificate(x_amz_target: XAmzTarget1AwsCertificateManagerTagApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListTagsForCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource type. For all other ACM resource types, use ListTagsForResource instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tag_api.with_raw_response.list_tags_for_certificate(
    XAmzTarget1AwsCertificateManagerTagApi.CERTIFICATE_MANAGER_LIST_TAGS_FOR_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForCertificateErrorBody
```

**Async**

```python
result = await async_client.tag_api.with_raw_response.list_tags_for_certificate(
    XAmzTarget1AwsCertificateManagerTagApi.CERTIFICATE_MANAGER_LIST_TAGS_FOR_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCertificateManagerTagApiOrStr](aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_tag_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ListTagsForCertificateErrorBody](aws_certificate_manager/errors/list_tags_for_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListTagsForCertificateErrorBody](aws_certificate_manager/errors/list_tags_for_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tags_for_resource(x_amz_target: XAmzTarget2AwsCertificateManagerTagApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListTagsForResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more tags, use the TagResource action. To remove one or more tags, use the UntagResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tag_api.with_raw_response.list_tags_for_resource(
    XAmzTarget2AwsCertificateManagerTagApi.CERTIFICATE_MANAGER_LIST_TAGS_FOR_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

**Async**

```python
result = await async_client.tag_api.with_raw_response.list_tags_for_resource(
    XAmzTarget2AwsCertificateManagerTagApi.CERTIFICATE_MANAGER_LIST_TAGS_FOR_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCertificateManagerTagApiOrStr](aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_tag_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [ListTagsForResourceErrorBody](aws_certificate_manager/errors/list_tags_for_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListTagsForResourceErrorBody](aws_certificate_manager/errors/list_tags_for_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_tags_from_certificate(x_amz_target: XAmzTarget3AwsCertificateManagerTagApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RemoveTagsFromCertificateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. This action applies only to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM certificate, use the ListTagsForCertificate action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tag_api.with_raw_response.remove_tags_from_certificate(
    XAmzTarget3AwsCertificateManagerTagApi.CERTIFICATE_MANAGER_REMOVE_TAGS_FROM_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveTagsFromCertificateErrorBody
```

**Async**

```python
result = await async_client.tag_api.with_raw_response.remove_tags_from_certificate(
    XAmzTarget3AwsCertificateManagerTagApi.CERTIFICATE_MANAGER_REMOVE_TAGS_FROM_CERTIFICATE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveTagsFromCertificateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsCertificateManagerTagApiOrStr](aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_tag_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_certificate_manager/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_certificate_manager/core/results.py)&#91;None, [RemoveTagsFromCertificateErrorBody](aws_certificate_manager/errors/remove_tags_from_certificate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RemoveTagsFromCertificateErrorBody](aws_certificate_manager/errors/remove_tags_from_certificate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_certificate_manager/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_certificate_manager/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

