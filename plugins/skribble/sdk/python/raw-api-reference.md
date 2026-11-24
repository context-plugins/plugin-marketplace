# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [SkribbleClient](skribble/client.py)

## Access

> Source: [Access](skribble/apis/access.py)

<details>
<summary><code>def access_login(username: str, api_key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, AccessLoginErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To use the Skribble API, you first need an API key and an API user. Both
can be managed on the API key page in your business profile. Consult our
guide for
setup instructions.

Skribble offers two types of API keys:

**Demo API keys**

Demo API keys are for testing and development purposes. Signatures created
with demo keys have no legal weight and are free of charge.

Demo keys can be identified by their name, which starts with **api_demo**.

**Production API keys**

Production API keys are used for live systems. Signatures created with
production keys will be invoiced.

Production keys can be identified by their name, which starts with
**api_production** or, in some cases, **api_prod**.

> **⚠ Note**
> All costs incurred by signature requests created with your API keys will
> be **charged to your business**. We recommend starting with a demo API
> key during development and testing, and switching to a production key
> only once testing is complete.

For help setting up Skribble Business, contact us at
support@skribble.com.

To obtain an access token, authenticate using the `/access/login` endpoint.
You can pass your credentials as raw JSON or as `x-www-form-urlencoded`
key-value pairs (see example requests).

Upon successful authentication, a JSON Web Token (JWT) is returned. This
JWT must be included in nearly every API request.

The access token is passed in the `Authorization` HTTP header using the
`Bearer` scheme. Example:
`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...`

### Token life cycle

#### API key

API keys have a long but finite lifetime. The validity period depends on
the volume of API calls and is agreed upon individually as part of the
shared secret agreement.

#### Access token

Access tokens have a lifetime of approximately **20 minutes**. Automatic
token renewal is not currently supported.

#### Logout

There is **no logout endpoint**. Access tokens expire automatically after
the defined lifetime.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.access.with_raw_response.access_login("add_your_api_name_here", "please_enter_your_password_here")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AccessLoginErrorBody
```

**Async**

```python
result = await async_client.access.with_raw_response.access_login(
    "add_your_api_name_here", "please_enter_your_password_here"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AccessLoginErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>str</code> | The username of the users credentials to login |
| <code>api_key</code> | <code>str</code> | The API key of the users credentials to login |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;str, [AccessLoginErrorBody](skribble/errors/access_login_error.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- OK

**On `Failure`**: `error` is <code>[AccessLoginErrorBody](skribble/errors/access_login_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 406, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AdditionalInformation

> Source: [AdditionalInformation](skribble/apis/additional_information.py)

<details>
<summary><code>def get_infos_format(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FormatInfosResponse, GetInfosFormatErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.additional_information.with_raw_response.get_infos_format(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FormatInfosResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInfosFormatErrorBody
```

**Async**

```python
result = await async_client.additional_information.with_raw_response.get_infos_format(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FormatInfosResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInfosFormatErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The 'id' provided by the validate operation |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[FormatInfosResponse](skribble/models/format_infos_response.py), [GetInfosFormatErrorBody](skribble/errors/get_infos_format_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FormatInfosResponse](skribble/models/format_infos_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetInfosFormatErrorBody](skribble/errors/get_infos_format_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_infos_signers(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Signer], GetInfosSignersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Additional information about the people who signed the document. The query
parameter is the id from the validation endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.additional_information.with_raw_response.get_infos_signers(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Signer]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInfosSignersErrorBody
```

**Async**

```python
result = await async_client.additional_information.with_raw_response.get_infos_signers(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Signer]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInfosSignersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The 'id' provided by the validate operation |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;list&#91;[Signer](skribble/models/signer.py)&#93;, [GetInfosSignersErrorBody](skribble/errors/get_infos_signers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Signer](skribble/models/signer.py)&#93;</code> -- Success

**On `Failure`**: `error` is <code>[GetInfosSignersErrorBody](skribble/errors/get_infos_signers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_infos_validation(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValidationInfosResponse, GetInfosValidationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.additional_information.with_raw_response.get_infos_validation(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValidationInfosResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInfosValidationErrorBody
```

**Async**

```python
result = await async_client.additional_information.with_raw_response.get_infos_validation(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValidationInfosResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInfosValidationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The 'id' provided by the validate operation |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[ValidationInfosResponse](skribble/models/validation_infos_response.py), [GetInfosValidationErrorBody](skribble/errors/get_infos_validation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValidationInfosResponse](skribble/models/validation_infos_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetInfosValidationErrorBody](skribble/errors/get_infos_validation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BillingAndCredits

> Source: [BillingAndCredits](skribble/apis/billing_and_credits.py)

<details>
<summary><code>def get_billing_credits_infos(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BillingCreditInfos, GetBillingCreditsInfosErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of credit usage information associated with specific endpoints

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_and_credits.with_raw_response.get_billing_credits_infos()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingCreditInfos
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingCreditsInfosErrorBody
```

**Async**

```python
result = await async_client.billing_and_credits.with_raw_response.get_billing_credits_infos()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingCreditInfos
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingCreditsInfosErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[BillingCreditInfos](skribble/models/billing_credit_infos.py), [GetBillingCreditsInfosErrorBody](skribble/errors/get_billing_credits_infos_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BillingCreditInfos](skribble/models/billing_credit_infos.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetBillingCreditsInfosErrorBody](skribble/errors/get_billing_credits_infos_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_billing_credits_invoiced(*, period: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BillingCreditUsage, GetBillingCreditsInvoicedErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get invoiced credit details for the most recent billing period or a
specified time period

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_and_credits.with_raw_response.get_billing_credits_invoiced()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingCreditUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingCreditsInvoicedErrorBody
```

**Async**

```python
result = await async_client.billing_and_credits.with_raw_response.get_billing_credits_invoiced()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingCreditUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingCreditsInvoicedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>period</code> | <code>str \| None</code> | Format YYYY, YYYYMM, YYYYMMDD is supported. If not specified the last<br>invoiced period is used by default<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[BillingCreditUsage](skribble/models/billing_credit_usage.py), [GetBillingCreditsInvoicedErrorBody](skribble/errors/get_billing_credits_invoiced_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BillingCreditUsage](skribble/models/billing_credit_usage.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetBillingCreditsInvoicedErrorBody](skribble/errors/get_billing_credits_invoiced_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_billing_credits_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BillingCreditUsage, GetBillingCreditsUsageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get credit usage list and details for current billing period

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.billing_and_credits.with_raw_response.get_billing_credits_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingCreditUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingCreditsUsageErrorBody
```

**Async**

```python
result = await async_client.billing_and_credits.with_raw_response.get_billing_credits_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BillingCreditUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBillingCreditsUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[BillingCreditUsage](skribble/models/billing_credit_usage.py), [GetBillingCreditsUsageErrorBody](skribble/errors/get_billing_credits_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BillingCreditUsage](skribble/models/billing_credit_usage.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetBillingCreditsUsageErrorBody](skribble/errors/get_billing_credits_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DocumentApi

> Source: [DocumentApi](skribble/apis/document_api.py)

<details>
<summary><code>def delete_document(doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a `Document` by its ID. Deletion behaves similarly to deleting a
`SignatureRequest` and does not necessarily remove the object from the
system immediately.

If more than one participant is involved, the DELETE request only removes
the current user from the `Document`.

The system permanently removes the `Document` once the last user deletes it
via the Skribble web application.

**Async cascade note:** If the `Document`'s parent `SignatureRequest` was
recently deleted, the server-side cascade that removes associated documents
runs asynchronously. During this window the document is still listed by
`GET /documents` but returns `403 Forbidden` on delete attempts. Retry
after a few seconds — the document will either have been removed by the
cascade or the delete will succeed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.document_api.with_raw_response.delete_document(UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDocumentErrorBody
```

**Async**

```python
result = await async_client.document_api.with_raw_response.delete_document(UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_id</code> | <code>UUID</code> | Unique ID received when creating the Document Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [DeleteDocumentErrorBody](skribble/errors/delete_document_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteDocumentErrorBody](skribble/errors/delete_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_document_content(doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocumentContentResponse, GetDocumentContentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the content of the document identified by its ID. Returns either
a PDF binary or a JSON object containing a Base64-encoded PDF.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.document_api.with_raw_response.get_document_content(UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentContentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentContentErrorBody
```

**Async**

```python
result = await async_client.document_api.with_raw_response.get_document_content(
    UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentContentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentContentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_id</code> | <code>UUID</code> | Unique ID received when creating the Document Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[DocumentContentResponse](skribble/models/document_content_response.py), [GetDocumentContentErrorBody](skribble/errors/get_document_content_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocumentContentResponse](skribble/models/document_content_response.py)</code> -- PDF or JSON with Base64-encoded PDF

**On `Failure`**: `error` is <code>[GetDocumentContentErrorBody](skribble/errors/get_document_content_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_document_metadata(doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocumentResponse, GetDocumentMetadataErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the metadata for the `Document` identified by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.document_api.with_raw_response.get_document_metadata(UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentMetadataErrorBody
```

**Async**

```python
result = await async_client.document_api.with_raw_response.get_document_metadata(
    UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentMetadataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_id</code> | <code>UUID</code> | Unique ID received when creating the Document Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[DocumentResponse](skribble/models/document_response.py), [GetDocumentMetadataErrorBody](skribble/errors/get_document_metadata_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocumentResponse](skribble/models/document_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetDocumentMetadataErrorBody](skribble/errors/get_document_metadata_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_document_preview(doc_id: UUID, page_id: int, *, scale: float | None = 100.0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, GetDocumentPreviewErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a preview image for a specific page of the uploaded PDF document.
Page numbering starts at **0** for the first page.

> Use the optional `scale` parameter to control the preview size:
> `scale=100` returns a full-size preview, while `scale=20` returns a
> thumbnail.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.document_api.with_raw_response.get_document_preview(
    UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"), 0, scale=20
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentPreviewErrorBody
```

**Async**

```python
result = await async_client.document_api.with_raw_response.get_document_preview(
    UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc"), 0, scale=20
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentPreviewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_id</code> | <code>UUID</code> | Unique ID received when creating the Document Request object |
| <code>page_id</code> | <code>int</code> | Page ID of the document |
| <code>scale</code> | <code>float \| None</code> | The scaling factor for the image.<br>**Default**: <code>100.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;FileResponse, [GetDocumentPreviewErrorBody](skribble/errors/get_document_preview_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Preview image

**On `Failure`**: `error` is <code>[GetDocumentPreviewErrorBody](skribble/errors/get_document_preview_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_documents(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[DocumentResponse], GetDocumentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of all accessible `Document` objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.document_api.with_raw_response.get_documents()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DocumentResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentsErrorBody
```

**Async**

```python
result = await async_client.document_api.with_raw_response.get_documents()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DocumentResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;list&#91;[DocumentResponse](skribble/models/document_response.py)&#93;, [GetDocumentsErrorBody](skribble/errors/get_documents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[DocumentResponse](skribble/models/document_response.py)&#93;</code> -- OK

**On `Failure`**: `error` is <code>[GetDocumentsErrorBody](skribble/errors/get_documents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 406, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_document(body: UploadDocumentRequest | UploadDocumentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocumentResponse, UploadDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload using a **Base64 encoded** file as `content`.

**Content size limits**:
Very large uploads are rejected by the gateway in front of the API
before the request reaches it, returning a `403 Forbidden` response.
This currently returns a plain body instead of the standard
Problem+JSON error envelope used elsewhere in this API; a fix to align
it is planned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.document_api.with_raw_response.upload_document(
    UploadDocumentRequest(title="some example string", content="some example string", file_url="https://example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadDocumentErrorBody
```

**Async**

```python
result = await async_client.document_api.with_raw_response.upload_document(
    UploadDocumentRequest(title="some example string", content="some example string", file_url="https://example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UploadDocumentRequest](skribble/models/upload_document_request.py) \| [UploadDocumentRequestDict](skribble/models/upload_document_request.py)</code> | Request body to create a Document object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[DocumentResponse](skribble/models/document_response.py), [UploadDocumentErrorBody](skribble/errors/upload_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocumentResponse](skribble/models/document_response.py)</code> -- Created

**On `Failure`**: `error` is <code>[UploadDocumentErrorBody](skribble/errors/upload_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 406, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Identification

> Source: [Identification](skribble/apis/identification.py)

<details>
<summary><code>def get_identification_evidence_files(sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, GetIdentificationEvidenceFilesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads all files related to the identification evidence as a ZIP archive.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must be completed (`evidence_id` is required).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.identification.with_raw_response.get_identification_evidence_files(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "700580648"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentificationEvidenceFilesErrorBody
```

**Async**

```python
result = await async_client.identification.with_raw_response.get_identification_evidence_files(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "700580648"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentificationEvidenceFilesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>evidence_id</code> | <code>str</code> | Unique ID of the identification evidence record, available in the `signer_identity_data.evidence_id` field of the SignatureRequest response once identification is complete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;FileResponse, [GetIdentificationEvidenceFilesErrorBody](skribble/errors/get_identification_evidence_files_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- OK — ZIP archive containing all identification evidence files.

**On `Failure`**: `error` is <code>[GetIdentificationEvidenceFilesErrorBody](skribble/errors/get_identification_evidence_files_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_identification_evidence_json(sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetIdentificationEvidenceJsonErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full identification evidence record as JSON for the given
`SignatureRequest` and `evidence_id`.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must be completed (`evidence_id` is required).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.identification.with_raw_response.get_identification_evidence_json(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "700580648"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentificationEvidenceJsonErrorBody
```

**Async**

```python
result = await async_client.identification.with_raw_response.get_identification_evidence_json(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "700580648"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentificationEvidenceJsonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>evidence_id</code> | <code>str</code> | Unique ID of the identification evidence record, available in the `signer_identity_data.evidence_id` field of the SignatureRequest response once identification is complete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;Any, [GetIdentificationEvidenceJsonErrorBody](skribble/errors/get_identification_evidence_json_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Identification result for the completed identification process.
The exact schema depends on the identification provider configuration and is available on request.

**On `Failure`**: `error` is <code>[GetIdentificationEvidenceJsonErrorBody](skribble/errors/get_identification_evidence_json_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_identification_evidence_jwt(sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, GetIdentificationEvidenceJwtErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the signed JWT for the identification evidence. Useful for
cryptographic verification or downstream integration purposes.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must be completed (`evidence_id` is required).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.identification.with_raw_response.get_identification_evidence_jwt(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "700580648"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentificationEvidenceJwtErrorBody
```

**Async**

```python
result = await async_client.identification.with_raw_response.get_identification_evidence_jwt(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "700580648"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentificationEvidenceJwtErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>evidence_id</code> | <code>str</code> | Unique ID of the identification evidence record, available in the `signer_identity_data.evidence_id` field of the SignatureRequest response once identification is complete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;str, [GetIdentificationEvidenceJwtErrorBody](skribble/errors/get_identification_evidence_jwt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- OK

**On `Failure`**: `error` is <code>[GetIdentificationEvidenceJwtErrorBody](skribble/errors/get_identification_evidence_jwt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_identification_evidence_status(sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IdentificationEvidenceStatusResponse, GetIdentificationEvidenceStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of the identification evidence for the given
`SignatureRequest` and `evidence_id`.

**Requirements:**
- The business must have identification evidence enabled. If it is not,
the request fails with `403 Forbidden` (problem type `feature-not-enabled`).
- The identification process must have been initiated (`evidence_id` is required,
available in `signer_identity_data.evidence_id` of the `SignatureRequest` response).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.identification.with_raw_response.get_identification_evidence_status(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "700580648"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdentificationEvidenceStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentificationEvidenceStatusErrorBody
```

**Async**

```python
result = await async_client.identification.with_raw_response.get_identification_evidence_status(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "700580648"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdentificationEvidenceStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIdentificationEvidenceStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>evidence_id</code> | <code>str</code> | Unique ID of the identification evidence record, available in the `signer_identity_data.evidence_id` field of the SignatureRequest response once identification is complete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[IdentificationEvidenceStatusResponse](skribble/models/identification_evidence_status_response.py), [GetIdentificationEvidenceStatusErrorBody](skribble/errors/get_identification_evidence_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IdentificationEvidenceStatusResponse](skribble/models/identification_evidence_status_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetIdentificationEvidenceStatusErrorBody](skribble/errors/get_identification_evidence_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Monitoring

> Source: [Monitoring](skribble/apis/monitoring.py)

<details>
<summary><code>def get_system_health(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SystemHealthResponse, GetSystemHealthErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current health status of the Skribble API. Use this endpoint
to monitor system availability and responsiveness.

`status:UP` indicates that the system is operational.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.monitoring.with_raw_response.get_system_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SystemHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSystemHealthErrorBody
```

**Async**

```python
result = await async_client.monitoring.with_raw_response.get_system_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SystemHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSystemHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SystemHealthResponse](skribble/models/system_health_response.py), [GetSystemHealthErrorBody](skribble/errors/get_system_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SystemHealthResponse](skribble/models/system_health_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetSystemHealthErrorBody](skribble/errors/get_system_health_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Report

> Source: [Report](skribble/apis/report.py)

<details>
<summary><code>def get_activities_signatures_by_business(start_date: Date, end_date: Date, *, page: float | None = 1.0, size: float | None = 25.0, sort: SortOrStr | None = Sort.DESC, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActivitiesSignaturesByBusinessResponse, GetActivitiesSignaturesByBusinessErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed signature `activities` for your business and its members within a specified date range.

Use these parameters to filter for a specific time range.

| **Parameter** | **Description** | **Mandatory** |
| --- | --- | --- |
| `start_date` | The start date of the range to fetch the signature `activities`. Format: `yyyy-MM-dd.` | yes |
| `end_date` | The end date of the range to fetch the signature `activities`. Format: `yyyy-MM-dd.` | yes |

### **Pagination**

The result set can be controlled using the optional pagination parameters `page` and `size`

| **Parameter** | **Description** | **Mandatory** |
| --- | --- | --- |
| `page` | The page number to fetch the signature `activities`. Must be a positive integer. Default: 1 | no |
| `size` | The size of the page to fetch the signature activities. Must be a positive integer. Default: 25 Maximum: 100 | no |
| `sort` | The sort order of the signature activities. Can be `asc` or `desc`. Default is `desc`. | no |

### **Response**

The response contains the following information.

**General**

| **Field** | **Description** |
| --- | --- |
| `activities` | Array of `activities`. See the following subchapter _Activities_. |
| `total_items` | Total items to fetch when paginating through all the pages. |
| `total_pages` | Total pages to fetch when paginating through all the pages. |
| `current_page` | Current page number. |
| `size` | Size of the page. |

**Activities**

| **Field** | **Description** |
| --- | --- |
| `id` | The ID of the signature `activity`. |
| `action` | The action type of a signature activity. Can be `signed` or `sealed`. |
| `timestamp` | The timestamp of the signature activity. |
| `signature_request_id` | The signature request ID. |
| `cost_center` | The cost center of the signature paying party. This information might not necessarily be present. |
| `initiator` | The initiator `user` of the signature `activity`. See the following subchapter _User_. |
| `signer` | The signer `user` of the signature `activity`. See the following subchapter _User_. |

**User**

| **Field** | **Description** |
| --- | --- |
| `email` | The email of the `user`. |
| `first_name` | The first name of the `user`. |
| `last_name` | The last name of the `user`. |
| `type` | The membership status of the `user` in relation to the business. Can be `api`, `external`, `member` or `unknown`. |
| `mobile` | The mobile number of the user. |

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.report.with_raw_response.get_activities_signatures_by_business(
    date(2024, 1, 1), date(2024, 1, 31), page=1, size=50, sort=Sort.DESC
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActivitiesSignaturesByBusinessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetActivitiesSignaturesByBusinessErrorBody
```

**Async**

```python
result = await async_client.report.with_raw_response.get_activities_signatures_by_business(
    date(2024, 1, 1), date(2024, 1, 31), page=1, size=50, sort=Sort.DESC
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActivitiesSignaturesByBusinessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetActivitiesSignaturesByBusinessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start_date</code> | <code>Date</code> | Start Date to find |
| <code>end_date</code> | <code>Date</code> | End Date to find |
| <code>page</code> | <code>float \| None</code> | Page for pagination.<br>**Default**: <code>1.0</code> |
| <code>size</code> | <code>float \| None</code> | Page size for pagination.<br>**Default**: <code>25.0</code> |
| <code>sort</code> | <code>[SortOrStr](skribble/models/enums/sort.py) \| None</code> | Sort order<br>**Default**: <code>Sort.DESC</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[ActivitiesSignaturesByBusinessResponse](skribble/models/activities_signatures_by_business_response.py), [GetActivitiesSignaturesByBusinessErrorBody](skribble/errors/get_activities_signatures_by_business_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActivitiesSignaturesByBusinessResponse](skribble/models/activities_signatures_by_business_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetActivitiesSignaturesByBusinessErrorBody](skribble/errors/get_activities_signatures_by_business_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](skribble/apis/reports.py)

<details>
<summary><code>def get_reports_etsi(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetReportsEtsiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the ETSI TS 119 102-2 signature validation report as a XML

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.get_reports_etsi(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReportsEtsiErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.get_reports_etsi(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReportsEtsiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The 'id' provided by the validate operation |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [GetReportsEtsiErrorBody](skribble/errors/get_reports_etsi_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetReportsEtsiErrorBody](skribble/errors/get_reports_etsi_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 406, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_skribble_report(id_: UUID, *, lang: LangOrStr | None = Lang.EN, attach_etsi_report: bool | None = False, time_zone: str | None = "UTC", request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, GetSkribbleReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the digitally signed Skribble validation report as PDF. The report is generated once per validation ID, language, ETSI attachment flag and timezone, then cached — subsequent requests with the same parameters are served from cache and not billed. Optionally attach the ETSI TS 119 102-2 XML validation report as an embedded file in the PDF.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.reports.with_raw_response.get_skribble_report(
    UUID("00000000-0000-0000-0000-000000000000"), time_zone="Europe/Zurich"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSkribbleReportErrorBody
```

**Async**

```python
result = await async_client.reports.with_raw_response.get_skribble_report(
    UUID("00000000-0000-0000-0000-000000000000"), time_zone="Europe/Zurich"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSkribbleReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The 'id' provided by the validate operation |
| <code>lang</code> | <code>[LangOrStr](skribble/models/enums/lang.py) \| None</code> | Language of the validation report<br>**Default**: <code>Lang.EN</code> |
| <code>attach_etsi_report</code> | <code>bool \| None</code> | Attach the ETSI TS 119 102-2 XML validation report as a file attachment to the PDF. When enabled, the XML report is embedded in the PDF and a paperclip annotation is added on the last page. This registers additional usage for the ETSI report endpoint.<br>**Default**: <code>False</code> |
| <code>time_zone</code> | <code>str \| None</code> | IANA timezone name used to render timestamps in the report — the "Generated at" time and each signer's "Time of signature". Defaults to UTC, preserving the previous behaviour when omitted. The rendered zone abbreviation (e.g. `UTC`, `CET`, `PST`) reflects the chosen zone. Browser callers can pass `Intl.DateTimeFormat().resolvedOptions().timeZone`. The timezone is part of the report cache key, so each distinct timezone (per language and ETSI flag) is rendered, billed and cached once. An unknown or malformed value returns `400`.<br>**Default**: <code>"UTC"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;FileResponse, [GetSkribbleReportErrorBody](skribble/errors/get_skribble_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Signed validation report PDF

**On `Failure`**: `error` is <code>[GetSkribbleReportErrorBody](skribble/errors/get_skribble_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 406, 429, 500, 502, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Seal

> Source: [Seal](skribble/apis/seal.py)

<details>
<summary><code>def seal_document(body: CreateSealRequest | CreateSealRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateSealResponse, SealDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a document and affixes an electronic seal in a single call.

Optionally, a visual signature can also be placed on the document.

The response contains the `document_id` of the newly created sealed
document, which can be used to retrieve it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.seal.with_raw_response.seal_document(
    CreateSealRequest(content="U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==", account_name="ais_demo_seal")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateSealResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SealDocumentErrorBody
```

**Async**

```python
result = await async_client.seal.with_raw_response.seal_document(
    CreateSealRequest(content="U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==", account_name="ais_demo_seal")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateSealResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SealDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSealRequest](skribble/models/create_seal_request.py) \| [CreateSealRequestDict](skribble/models/create_seal_request.py)</code> | Content base64-encoded in a JSON object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[CreateSealResponse](skribble/models/create_seal_response.py), [SealDocumentErrorBody](skribble/errors/seal_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateSealResponse](skribble/models/create_seal_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[SealDocumentErrorBody](skribble/errors/seal_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 406, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SendTo

> Source: [SendTo](skribble/apis/send_to.py)

<details>
<summary><code>def create_send_to(title: str, content: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateSendToResponse, CreateSendToErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the signing process by uploading the PDF document `content` and
assigning it a `title`.

### Limited lifetime

> Send-To objects and their related Documents and SignatureRequests are only
> guaranteed for a **limited lifetime**.
>
> - A Send-To request that is not claimed by a user — i.e. where a user
> does not add the document to their list of documents to sign — is
> deleted automatically after one day.
>
> - All Send-To objects and their related Documents and SignatureRequest
> objects, regardless of status, are deleted automatically after 90 days.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.send_to.with_raw_response.create_send_to("Document 1", Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateSendToResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSendToErrorBody
```

**Async**

```python
result = await async_client.send_to.with_raw_response.create_send_to("Document 1", Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateSendToResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSendToErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>title</code> | <code>str</code> | Title of the document. |
| <code>content</code> | <code>FileInput</code> | PDF file to upload. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[CreateSendToResponse](skribble/models/create_send_to_response.py), [CreateSendToErrorBody](skribble/errors/create_send_to_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateSendToResponse](skribble/models/create_send_to_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[CreateSendToErrorBody](skribble/errors/create_send_to_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 406, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_send_to(send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSendToErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To call the `delete` endpoint, you must include the value of the
`access_code` field—received when creating the `Send-To` object—in the
request header `X-Accesscode`.

This call deletes the involved `Send-To`, `Document`, and `SignatureRequest`
objects regardless of the current `Send-To` state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.send_to.with_raw_response.delete_send_to(
    UUID("d98ae06a-3ae4-5cc5-c0a3-62b05901b84f"), UUID("3fa85f64-5717-4562-b3fc-2c963f66afa6")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSendToErrorBody
```

**Async**

```python
result = await async_client.send_to.with_raw_response.delete_send_to(
    UUID("d98ae06a-3ae4-5cc5-c0a3-62b05901b84f"), UUID("3fa85f64-5717-4562-b3fc-2c963f66afa6")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSendToErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>send_to_id</code> | <code>UUID</code> | Unique ID received when creating the Send-To object |
| <code>x_accesscode</code> | <code>UUID</code> | Access code received when creating the Send-To object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [DeleteSendToErrorBody](skribble/errors/delete_send_to_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSendToErrorBody](skribble/errors/delete_send_to_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_send_to(send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DownloadSendToErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To call the `download` endpoint, you must include the value of the
`access_code` field—received when creating the `Send-To` object—in the
request header `X-Accesscode`.

The response contains the originally provided PDF document in its current
state, which may be signed, declined, withdrawn, or still open for signing.
The current status can be retrieved using the `track` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.send_to.with_raw_response.download_send_to(
    UUID("d98ae06a-3ae4-5cc5-c0a3-62b05901b84f"), UUID("3fa85f64-5717-4562-b3fc-2c963f66afa6")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadSendToErrorBody
```

**Async**

```python
result = await async_client.send_to.with_raw_response.download_send_to(
    UUID("d98ae06a-3ae4-5cc5-c0a3-62b05901b84f"), UUID("3fa85f64-5717-4562-b3fc-2c963f66afa6")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadSendToErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>send_to_id</code> | <code>UUID</code> | Unique ID received when creating the Send-To object |
| <code>x_accesscode</code> | <code>UUID</code> | Access code received when creating the Send-To object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;FileResponse, [DownloadSendToErrorBody](skribble/errors/download_send_to_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- OK

**On `Failure`**: `error` is <code>[DownloadSendToErrorBody](skribble/errors/download_send_to_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def track_send_to(send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TrackSendToResponse, TrackSendToErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To call the `track` endpoint, you must include the value of the
`access_code` field—received when creating the `Send-To` object—in the
request header `X-Accesscode`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.send_to.with_raw_response.track_send_to(
    UUID("d98ae06a-3ae4-5cc5-c0a3-62b05901b84f"), UUID("3fa85f64-5717-4562-b3fc-2c963f66afa6")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackSendToResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrackSendToErrorBody
```

**Async**

```python
result = await async_client.send_to.with_raw_response.track_send_to(
    UUID("d98ae06a-3ae4-5cc5-c0a3-62b05901b84f"), UUID("3fa85f64-5717-4562-b3fc-2c963f66afa6")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackSendToResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrackSendToErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>send_to_id</code> | <code>UUID</code> | Unique ID received when creating the Send-To object |
| <code>x_accesscode</code> | <code>UUID</code> | Access code received when creating the Send-To object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[TrackSendToResponse](skribble/models/track_send_to_response.py), [TrackSendToErrorBody](skribble/errors/track_send_to_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TrackSendToResponse](skribble/models/track_send_to_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[TrackSendToErrorBody](skribble/errors/track_send_to_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Signature

> Source: [Signature](skribble/apis/signature.py)

<details>
<summary><code>def add_document_in_signature_request(sr_id: UUID, body: SignatureDocumentUpload | SignatureDocumentUploadDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AddDocumentInSignatureRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an additional document to the `SignatureRequest` while it is still in `DRAFT` status.

**Content size limits**:
Very large document content is rejected by the gateway in front of the
API before the request reaches it, returning a `403 Forbidden` response.
This currently returns a plain body instead of the standard
Problem+JSON error envelope used elsewhere in this API; a fix to align
it is planned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature.with_raw_response.add_document_in_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), SignatureDocumentUpload(content="U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddDocumentInSignatureRequestErrorBody
```

**Async**

```python
result = await async_client.signature.with_raw_response.add_document_in_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), SignatureDocumentUpload(content="U29tZUJhc2U2NEVuY29kZWRJbWFnZQ==")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddDocumentInSignatureRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>body</code> | <code>[SignatureDocumentUpload](skribble/models/signature_document_upload.py) \| [SignatureDocumentUploadDict](skribble/models/signature_document_upload.py)</code> | Request body to add a Document |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [AddDocumentInSignatureRequestErrorBody](skribble/errors/add_document_in_signature_request_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AddDocumentInSignatureRequestErrorBody](skribble/errors/add_document_in_signature_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_signature_request(body: CreateSignatureRequest | CreateSignatureRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureResponseV3, CreateSignatureRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new `SignatureRequest`, which is the primary object of the Skribble API.
A `SignatureRequest` defines who signs what and under which conditions. It specifies
the documents to be signed, the list of required signers, the desired signature quality
and legislation, and optional settings such as signing sequences, callback URLs, and
access control.

Compared to API v2, this version supports attaching multiple documents to a single
`SignatureRequest`. Additionally, the request no longer triggers invitations immediately.
Instead, the `SignatureRequest` is created with a `status_overall` of `DRAFT`.

If you specify an owner using the `creator` field, that user will find the request in
the Drafts section of their account, where they can review and complete the setup.

Once ready, call `/initiate` to start the `SignatureRequest` and send out invitations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature.with_raw_response.create_signature_request(
    CreateSignatureRequest(
        title="Example contract",
        message="Please sign this document!",
        quality=SignatureQuality.DEMO,
        documents=[SignatureDocument(id=UUID("3648f61d-4194-455c-a0bc-1c438d2cd11b"))],
        signatures=[{}],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignatureRequestErrorBody
```

**Async**

```python
result = await async_client.signature.with_raw_response.create_signature_request(
    CreateSignatureRequest(
        title="Example contract",
        message="Please sign this document!",
        quality=SignatureQuality.DEMO,
        documents=[SignatureDocument(id=UUID("3648f61d-4194-455c-a0bc-1c438d2cd11b"))],
        signatures=[{}],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignatureRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSignatureRequest](skribble/models/create_signature_request.py) \| [CreateSignatureRequestDict](skribble/models/create_signature_request.py)</code> | Request body to create a SignatureRequest object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureResponseV3](skribble/models/signature_response_v3.py), [CreateSignatureRequestErrorBody](skribble/errors/create_signature_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureResponseV3](skribble/models/signature_response_v3.py)</code> -- Created

**On `Failure`**: `error` is <code>[CreateSignatureRequestErrorBody](skribble/errors/create_signature_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_document_in_signature_request(sr_id: UUID, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteDocumentInSignatureRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the document identified by `DOC_ID` from the `SignatureRequest`
with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature.with_raw_response.delete_document_in_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDocumentInSignatureRequestErrorBody
```

**Async**

```python
result = await async_client.signature.with_raw_response.delete_document_in_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UUID("f1e2d3c4-7b8a-4e6f-9d3b-123456789abc")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDocumentInSignatureRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>doc_id</code> | <code>UUID</code> | Unique ID received when creating the Document Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [DeleteDocumentInSignatureRequestErrorBody](skribble/errors/delete_document_in_signature_request_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteDocumentInSignatureRequestErrorBody](skribble/errors/delete_document_in_signature_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_signature_request(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSignatureRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a `SignatureRequest` by its ID.

**Important:** A `SignatureRequest` can only be deleted via the API if:

1. the `SignatureRequest` has `status_overall=OPEN`, and

2. the API user has sufficient rights on the `SignatureRequest`, e.g. when
it was created by the API user.

Deleting a `SignatureRequest` does not necessarily remove it from the
system immediately.

**WITHDRAWN**

When the API user is the **owner** of the `SignatureRequest` and it is
still in `status_overall=OPEN`, the `SignatureRequest` will be
**WITHDRAWN**.

This means the `SignatureRequest` will transition to
`status_overall=WITHDRAWN` and all pending signatures will be marked with
`status_code=WITHDRAWN`. Sign and read rights for all signers will be
revoked, so invited signers can no longer read or sign the
`SignatureRequest`.

**REMOVE AS PARTICIPANT**

When the API user is a participant but not the owner of the
`SignatureRequest`, the `DELETE` request will only remove the API user as a
participant.

In this case, the system will remove the `SignatureRequest` and its related
documents once the last remaining user deletes it via the Skribble web
application.

**DELETING**

When the API user is the last user with access rights to the
`SignatureRequest` (e.g. after a **WITHDRAW**), the `SignatureRequest` and
its related documents will be permanently removed from the system.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature.with_raw_response.delete_signature_request(UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSignatureRequestErrorBody
```

**Async**

```python
result = await async_client.signature.with_raw_response.delete_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSignatureRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [DeleteSignatureRequestErrorBody](skribble/errors/delete_signature_request_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSignatureRequestErrorBody](skribble/errors/delete_signature_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signature_request_details(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureResponseV3, GetSignatureRequestDetailsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a `SignatureRequest` by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature.with_raw_response.get_signature_request_details(UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureRequestDetailsErrorBody
```

**Async**

```python
result = await async_client.signature.with_raw_response.get_signature_request_details(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureRequestDetailsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureResponseV3](skribble/models/signature_response_v3.py), [GetSignatureRequestDetailsErrorBody](skribble/errors/get_signature_request_details_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureResponseV3](skribble/models/signature_response_v3.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetSignatureRequestDetailsErrorBody](skribble/errors/get_signature_request_details_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def initiate_signature_request(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, InitiateSignatureRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the signing process for a `SignatureRequest` in `DRAFT` status.

This action sends out invitation emails and transitions `status_overall`
from `DRAFT` to `OPEN`. Once initiated, the `SignatureRequest` is no longer
visible in the Drafts section and will appear in the appropriate section
(e.g. Pending) for each participant.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature.with_raw_response.initiate_signature_request(UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InitiateSignatureRequestErrorBody
```

**Async**

```python
result = await async_client.signature.with_raw_response.initiate_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InitiateSignatureRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [InitiateSignatureRequestErrorBody](skribble/errors/initiate_signature_request_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[InitiateSignatureRequestErrorBody](skribble/errors/initiate_signature_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def withdraw_signature_request(sr_id: UUID, *, body: WithdrawSignatureRequest | WithdrawSignatureRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureResponse, WithdrawSignatureRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Withdraws a `SignatureRequest`, for example when signing becomes unnecessary
or an error occurred during the invitation process. As the inviter, you can
explicitly withdraw the `SignatureRequest`. This removes all signers and
observers as participants and notifies them with a specified `message`.

Similar to deletion, the `withdraw` action can only be executed if:

- The `SignatureRequest` has `status_overall=OPEN`

- The API user has sufficient rights on the `SignatureRequest`, such as
when it was created by the API user.

> **Note**
> We recommend using the `delete` endpoint, which automatically determines
> the appropriate action. For example, if the API user does not have
> withdrawal rights, they may instead be removed as a participant, or the
> document may be deleted directly.
>
> Use the `withdraw` endpoint specifically when you need to withdraw the
> `SignatureRequest` while keeping it in Skribble.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature.with_raw_response.withdraw_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    body=WithdrawSignatureRequest(message="The signature request is no longer required."),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WithdrawSignatureRequestErrorBody
```

**Async**

```python
result = await async_client.signature.with_raw_response.withdraw_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    body=WithdrawSignatureRequest(message="The signature request is no longer required."),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WithdrawSignatureRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>body</code> | <code>[WithdrawSignatureRequest](skribble/models/withdraw_signature_request.py) \| [WithdrawSignatureRequestDict](skribble/models/withdraw_signature_request.py) \| None</code> | Request body to withdraw a SignatureRequest object<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureResponse](skribble/models/signature_response.py), [WithdrawSignatureRequestErrorBody](skribble/errors/withdraw_signature_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureResponse](skribble/models/signature_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[WithdrawSignatureRequestErrorBody](skribble/errors/withdraw_signature_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 406, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureAttachmentApi

> Source: [SignatureAttachmentApi](skribble/apis/signature_attachment_api.py)

<details>
<summary><code>def create_signature_attachment(sr_id: UUID, body: CreateSignatureAttachmentRequest | CreateSignatureAttachmentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureResponseSkribbleSignatureAttachmentApi, CreateSignatureAttachmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to provide supplementary documents (for example, Terms &
Conditions or appendices) to participants of a `SignatureRequest`.

Attachments are delivered to participants together with the
`SignatureRequest`.

**Content type limits**:
The Skribble API accepts PDF files, image files, Microsoft Office files, and
plain text files.

Allowed content types:
- application/pdf
- application/x-tika-msoffice
- application/x-tika-ooxml
- application/msword
- application/vnd.openxmlformats-officedocument.wordprocessingml.document
- application/vnd.ms-word.document.macroEnabled.12
- application/vnd.ms-excel
- application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- application/vnd.ms-excel.sheet.macroenabled.12
- application/vnd.ms-powerpoint
- application/vnd.openxmlformats-officedocument.presentationml.presentation
- application/vnd.ms-powerpoint.presentation.macroEnabled.12
- image/gif
- image/jpeg
- image/png
- text/plain

**Content size limits**:
The maximum size of a single attachment is approximately 40 MB.
The maximum request size is 60 MB. Exceeding it is rejected by the
gateway in front of the API before the request reaches it, returning a
`403 Forbidden` response. This currently returns a plain body instead
of the standard Problem+JSON error envelope used elsewhere in this
API; a fix to align it is planned.

**Amount limits**:
There is currently no limit on the number of attachments per
SignatureRequest. Abuse of this service may result in enforced limits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_attachment_api.with_raw_response.create_signature_attachment(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    CreateSignatureAttachmentRequest(
        filename="Attachment-1.pdf", content_type="application/pdf", content="SGVsbG8gd29ybGQh"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseSkribbleSignatureAttachmentApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignatureAttachmentErrorBody
```

**Async**

```python
result = await async_client.signature_attachment_api.with_raw_response.create_signature_attachment(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    CreateSignatureAttachmentRequest(
        filename="Attachment-1.pdf", content_type="application/pdf", content="SGVsbG8gd29ybGQh"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseSkribbleSignatureAttachmentApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignatureAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>body</code> | <code>[CreateSignatureAttachmentRequest](skribble/models/create_signature_attachment_request.py) \| [CreateSignatureAttachmentRequestDict](skribble/models/create_signature_attachment_request.py)</code> | Request body to create a SignatureAttachment object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureResponseSkribbleSignatureAttachmentApi](skribble/models/signature_response_skribble_signature_attachment_api.py), [CreateSignatureAttachmentErrorBody](skribble/errors/create_signature_attachment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureResponseSkribbleSignatureAttachmentApi](skribble/models/signature_response_skribble_signature_attachment_api.py)</code> -- OK

**On `Failure`**: `error` is <code>[CreateSignatureAttachmentErrorBody](skribble/errors/create_signature_attachment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 406, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_signature_attachment(sr_id: UUID, attachment_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSignatureAttachmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the attachment identified by `ATTACHMENT_ID` from the
`SignatureRequest` with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_attachment_api.with_raw_response.delete_signature_attachment(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UUID("8ed33046-3798-8c54-0b13-0820d0d6e121")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSignatureAttachmentErrorBody
```

**Async**

```python
result = await async_client.signature_attachment_api.with_raw_response.delete_signature_attachment(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UUID("8ed33046-3798-8c54-0b13-0820d0d6e121")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSignatureAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>attachment_id</code> | <code>UUID</code> | Unique ID returned when the Signature Attachment is created. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [DeleteSignatureAttachmentErrorBody](skribble/errors/delete_signature_attachment_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSignatureAttachmentErrorBody](skribble/errors/delete_signature_attachment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signature_attachment_content(sr_id: UUID, attachment_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, GetSignatureAttachmentContentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the content of the attachment identified by `ATTACHMENT_ID`
for the `SignatureRequest` with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_attachment_api.with_raw_response.get_signature_attachment_content(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UUID("8ed33046-3798-8c54-0b13-0820d0d6e121")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureAttachmentContentErrorBody
```

**Async**

```python
result = await async_client.signature_attachment_api.with_raw_response.get_signature_attachment_content(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UUID("8ed33046-3798-8c54-0b13-0820d0d6e121")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureAttachmentContentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>attachment_id</code> | <code>UUID</code> | Unique ID returned when the Signature Attachment is created. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;FileResponse, [GetSignatureAttachmentContentErrorBody](skribble/errors/get_signature_attachment_content_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Binary attachment content.

**On `Failure`**: `error` is <code>[GetSignatureAttachmentContentErrorBody](skribble/errors/get_signature_attachment_content_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureHandling

> Source: [SignatureHandling](skribble/apis/signature_handling.py)

<details>
<summary><code>def bulk_get_signature_requests(body: list[UUID], *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[SignatureResponse], BulkGetSignatureRequestsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves multiple `SignatureRequest` objects in a single call.

Provide a JSON array of `SignatureRequest` IDs in the request body to specify which
records to fetch. The response includes only the `SignatureRequests` that were
successfully found. IDs that do not match any existing record are silently ignored.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_handling.with_raw_response.bulk_get_signature_requests(
    [
        UUID("abababab-a777-e8e8-e8e8-121212121212"),
        UUID("bbddbbdd-7788-7ee7-a22a-bfbfbfbfbfbf"),
        UUID("cccccccc-1111-2222-3333-444444444444"),
        UUID("dddddddd-dead-beef-cafe-999999999999"),
        UUID("eeeeeeee-aaaa-bbbb-cccc-dddddddddddd"),
        UUID("ffffaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"),
        UUID("abababab-1234-5678-9abc-defdefdefdef"),
        UUID("12341234-aaaa-bbbb-cccc-123412341234"),
        UUID("99999999-8888-7777-6666-555555555555"),
        UUID("abcdabcd-abcd-abcd-abcd-abcdabcdabcd"),
    ],
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SignatureResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkGetSignatureRequestsErrorBody
```

**Async**

```python
result = await async_client.signature_handling.with_raw_response.bulk_get_signature_requests(
    [
        UUID("abababab-a777-e8e8-e8e8-121212121212"),
        UUID("bbddbbdd-7788-7ee7-a22a-bfbfbfbfbfbf"),
        UUID("cccccccc-1111-2222-3333-444444444444"),
        UUID("dddddddd-dead-beef-cafe-999999999999"),
        UUID("eeeeeeee-aaaa-bbbb-cccc-dddddddddddd"),
        UUID("ffffaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"),
        UUID("abababab-1234-5678-9abc-defdefdefdef"),
        UUID("12341234-aaaa-bbbb-cccc-123412341234"),
        UUID("99999999-8888-7777-6666-555555555555"),
        UUID("abcdabcd-abcd-abcd-abcd-abcdabcdabcd"),
    ],
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SignatureResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkGetSignatureRequestsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;UUID&#93;</code> | Array of SignatureRequest IDs to retrieve. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;list&#91;[SignatureResponse](skribble/models/signature_response.py)&#93;, [BulkGetSignatureRequestsErrorBody](skribble/errors/bulk_get_signature_requests_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[SignatureResponse](skribble/models/signature_response.py)&#93;</code> -- OK

**On `Failure`**: `error` is <code>[BulkGetSignatureRequestsErrorBody](skribble/errors/bulk_get_signature_requests_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 406, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_signature_request_expires_at(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSignatureRequestExpiresAtErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**Early access.** This endpoint is available to opted-in businesses only. To request
access, contact support@skribble.com.

Clearing the expiry requires the signature-request expiry feature to be enabled
for the business. If it is not, the request fails with `403 Forbidden`
(problem type `feature-not-enabled`).

Clears the owner-set `expires_at` date from a `SignatureRequest` in
`status_overall=DRAFT`.

After this call the `SignatureRequest` no longer has an owner-set expiry.
The `auto_delete_at` retention date (if any) is unaffected.

**Constraints**

- Only allowed while `status_overall=DRAFT`. Calling this on a
non-`DRAFT` request returns `400 Bad Request`.
- Requires the same write access as updating the `SignatureRequest`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_handling.with_raw_response.delete_signature_request_expires_at(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSignatureRequestExpiresAtErrorBody
```

**Async**

```python
result = await async_client.signature_handling.with_raw_response.delete_signature_request_expires_at(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSignatureRequestExpiresAtErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [DeleteSignatureRequestExpiresAtErrorBody](skribble/errors/delete_signature_request_expires_at_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSignatureRequestExpiresAtErrorBody](skribble/errors/delete_signature_request_expires_at_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signature_report(sr_id: UUID, *, type_: TypeSkribbleSignatureHandlingApiOrStr | None = TypeSkribbleSignatureHandlingApi.PDF, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, GetSignatureReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides the signature report for a specific signature request.

By default, the report is returned as a human-readable, digitally signed
PDF document. Optionally, the report format can be changed using the
`type` query parameter (e.g. JSON or HTML).

The report contains all relevant information about the signature process,
including signatories, timestamps, and verification details. It serves as
legally valid proof of the completed signing process and can be stored or
shared for auditing, compliance, or record-keeping purposes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_handling.with_raw_response.get_signature_report(UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureReportErrorBody
```

**Async**

```python
result = await async_client.signature_handling.with_raw_response.get_signature_report(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>type_</code> | <code>[TypeSkribbleSignatureHandlingApiOrStr](skribble/models/enums/type_skribble_signature_handling_api.py) \| None</code> | Format of the Report.<br>**Default**: <code>TypeSkribbleSignatureHandlingApi.PDF</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;FileResponse, [GetSignatureReportErrorBody](skribble/errors/get_signature_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- OK

**On `Failure`**: `error` is <code>[GetSignatureReportErrorBody](skribble/errors/get_signature_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signature_request(*, account_email: EmailStr | None = None, search: str | None = None, signature_status: SignatureStatusCodeOrStr | None = None, status_overall: SignatureStatusOverallOrStr | None = None, page_number: float | None = None, page_size: float | None = 50.0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[SignatureResponseV3], GetSignatureRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all `SignatureRequest` objects that the current user has sufficient
access rights to.

**Filter**

You can optionally filter results using one or more of the optional
parameters.

Filters search for an exact match of the corresponding field value. This
means the filter is case-sensitive and will not match partial values. For
example, _account_email=john.doe@skribble.com_ will only match a
`SignatureRequest` where the `account_email` field is exactly
john.doe@skribble.com and will not match another.john.doe@skribble.com.

Exception: The `search` parameter searches for document titles that contain
the search term.

**Pagination**

The result set can be controlled using the optional pagination parameters
`page_number` and `page_size`, which helps prevent excessively large result
sets.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_handling.with_raw_response.get_signature_request(
    account_email="john.doe@skribble.com",
    search="text to find",
    signature_status=SignatureStatusCode.SIGNED,
    status_overall=SignatureStatusOverall.OPEN,
    page_number=1,
    page_size=25,
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SignatureResponseV3]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureRequestErrorBody
```

**Async**

```python
result = await async_client.signature_handling.with_raw_response.get_signature_request(
    account_email="john.doe@skribble.com",
    search="text to find",
    signature_status=SignatureStatusCode.SIGNED,
    status_overall=SignatureStatusOverall.OPEN,
    page_number=1,
    page_size=25,
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SignatureResponseV3]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_email</code> | <code>EmailStr \| None</code> | Filter on the field `signatures[].account_email`<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Filter on the field `title` to search for documents containing the serach term.<br>**Default**: <code>None</code> |
| <code>signature_status</code> | <code>[SignatureStatusCodeOrStr](skribble/models/enums/signature_status_code.py) \| None</code> | Filter on the field `signatures[].status_code` with one of the valid Signature states<br>**Default**: <code>None</code> |
| <code>status_overall</code> | <code>[SignatureStatusOverallOrStr](skribble/models/enums/signature_status_overall.py) \| None</code> | Filter on the field `status_overall` with one of the valid Signature states<br>**Default**: <code>None</code> |
| <code>page_number</code> | <code>float \| None</code> | Page number for pagination. By default pagination is disabled.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>float \| None</code> | Page size for pagination.<br>**Default**: <code>50.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;list&#91;[SignatureResponseV3](skribble/models/signature_response_v3.py)&#93;, [GetSignatureRequestErrorBody](skribble/errors/get_signature_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[SignatureResponseV3](skribble/models/signature_response_v3.py)&#93;</code> -- OK

**On `Failure`**: `error` is <code>[GetSignatureRequestErrorBody](skribble/errors/get_signature_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 406, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signature_request_callbacks_v3(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[SignatureCallbacksInResponse], GetSignatureRequestCallbacksV3ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about the callbacks associated with a
`SignatureRequest`. Use this endpoint to confirm whether a callback has been
executed or to identify errors that occurred during the callback process.

**Result**

If no callbacks have been triggered yet, the response will be an empty
array. Otherwise, it contains an array of `callback` objects that have
already been executed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_handling.with_raw_response.get_signature_request_callbacks_v3(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SignatureCallbacksInResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureRequestCallbacksV3ErrorBody
```

**Async**

```python
result = await async_client.signature_handling.with_raw_response.get_signature_request_callbacks_v3(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SignatureCallbacksInResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureRequestCallbacksV3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;list&#91;[SignatureCallbacksInResponse](skribble/models/signature_callbacks_in_response.py)&#93;, [GetSignatureRequestCallbacksV3ErrorBody](skribble/errors/get_signature_request_callbacks_v3_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[SignatureCallbacksInResponse](skribble/models/signature_callbacks_in_response.py)&#93;</code> -- OK

**On `Failure`**: `error` is <code>[GetSignatureRequestCallbacksV3ErrorBody](skribble/errors/get_signature_request_callbacks_v3_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signature_request_details2(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureResponseV3, GetSignatureRequestDetails2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a `SignatureRequest` by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_handling.with_raw_response.get_signature_request_details2(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureRequestDetails2ErrorBody
```

**Async**

```python
result = await async_client.signature_handling.with_raw_response.get_signature_request_details2(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureRequestDetails2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureResponseV3](skribble/models/signature_response_v3.py), [GetSignatureRequestDetails2ErrorBody](skribble/errors/get_signature_request_details2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureResponseV3](skribble/models/signature_response_v3.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetSignatureRequestDetails2ErrorBody](skribble/errors/get_signature_request_details2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remind_signature_request(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RemindSignatureRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

In addition to the automatic signature reminders, manual reminders can also
be initiated via the Skribble web application and also via the API.

This allows for greater flexibility in managing signature requests, ensuring
that important documents are signed promptly. By using both automatic and
manual reminders, you can tailor your approach to suit the specific needs of
your users or customers.

**Limits**

There is an hourly limit on the number of signature reminders that can be
sent. This limit ensures that reminders are used responsibly and prevents
excessive notifications. Generally, this restriction should not affect you
if you use this feature appropriately. By adhering to this limit, you can
effectively manage your signature requests without overwhelming your users
or customers with frequent reminders.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_handling.with_raw_response.remind_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemindSignatureRequestErrorBody
```

**Async**

```python
result = await async_client.signature_handling.with_raw_response.remind_signature_request(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemindSignatureRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [RemindSignatureRequestErrorBody](skribble/errors/remind_signature_request_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RemindSignatureRequestErrorBody](skribble/errors/remind_signature_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_signature_request(body: UpdateSignatureRequest | UpdateSignatureRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureResponseV3, UpdateSignatureRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing `SignatureRequest`. We recommend creating the `SignatureRequest`
with all necessary information upfront and using this endpoint only when changes are
required.

The following fields can be updated: `title`, `message`, `legislation`, `quality`,
`signatures`, `callback_success_url`, `callback_error_url`, `callback_update_url`,
`custom`, `attach_on_success`, `read_access`, and `write_access`.

Observers are managed separately via the dedicated `/observers` endpoints.

**Updating signers**

To add or remove signers, provide the complete desired state of the `signatures` array:

- To add a signer, include the new entry alongside all existing signers.
- To remove a signer, omit their entry from the array.

Alternatively, use the dedicated `/signatures` endpoints to add or remove individual
signers without having to send the full list.

> **Important:** When updating via this endpoint, any signer not present in the
`signatures` array will be removed. Changes to signers can only be made as long as
none of the signers have already completed their signature.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_handling.with_raw_response.update_signature_request(
    UpdateSignatureRequest(
        id=UUID("4f43614a-de50-bfe1-2df3-4c881fc7840e"), title="Example contract", message="Please sign this document!"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSignatureRequestErrorBody
```

**Async**

```python
result = await async_client.signature_handling.with_raw_response.update_signature_request(
    UpdateSignatureRequest(
        id=UUID("4f43614a-de50-bfe1-2df3-4c881fc7840e"), title="Example contract", message="Please sign this document!"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSignatureRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateSignatureRequest](skribble/models/update_signature_request.py) \| [UpdateSignatureRequestDict](skribble/models/update_signature_request.py)</code> | Request body to update a SignatureRequest object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureResponseV3](skribble/models/signature_response_v3.py), [UpdateSignatureRequestErrorBody](skribble/errors/update_signature_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureResponseV3](skribble/models/signature_response_v3.py)</code> -- OK

**On `Failure`**: `error` is <code>[UpdateSignatureRequestErrorBody](skribble/errors/update_signature_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureObserverApi

> Source: [SignatureObserverApi](skribble/apis/signature_observer_api.py)

<details>
<summary><code>def add_signature_observer(sr_id: UUID, body: SignatureObserver | SignatureObserverDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureObserverResponse, AddSignatureObserverErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an observer to the specified signature request.

Observers receive email notifications about signing progress and can view
documents, but cannot sign them.

Adding a **group** observer requires the group-observers feature to be enabled
for the business. If it is not, the request fails with `403 Forbidden`
(problem type `feature-not-enabled`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_observer_api.with_raw_response.add_signature_observer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UserById(user_id="123")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureObserverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddSignatureObserverErrorBody
```

**Async**

```python
result = await async_client.signature_observer_api.with_raw_response.add_signature_observer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UserById(user_id="123")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureObserverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddSignatureObserverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>body</code> | <code>[SignatureObserver](skribble/models/unions/signature_observer.py) \| [SignatureObserverDict](skribble/models/unions/signature_observer.py)</code> | Request body to create a SignatureObserver object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureObserverResponse](skribble/models/unions/signature_observer_response.py), [AddSignatureObserverErrorBody](skribble/errors/add_signature_observer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureObserverResponse](skribble/models/unions/signature_observer_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[AddSignatureObserverErrorBody](skribble/errors/add_signature_observer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_signature_observer(sr_id: UUID, observer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSignatureObserverErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the observer identified by `OBSERVER_ID` from the `SignatureRequest`
with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_observer_api.with_raw_response.delete_signature_observer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "ob_123"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSignatureObserverErrorBody
```

**Async**

```python
result = await async_client.signature_observer_api.with_raw_response.delete_signature_observer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "ob_123"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSignatureObserverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>observer_id</code> | <code>str</code> | Unique ID returned when the Signature Observer is created. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [DeleteSignatureObserverErrorBody](skribble/errors/delete_signature_observer_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSignatureObserverErrorBody](skribble/errors/delete_signature_observer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signature_observer(sr_id: UUID, observer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureObserverResponse, GetSignatureObserverErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the observer identified by `OBSERVER_ID` from the `SignatureRequest`
with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_observer_api.with_raw_response.get_signature_observer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "ob_123"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureObserverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureObserverErrorBody
```

**Async**

```python
result = await async_client.signature_observer_api.with_raw_response.get_signature_observer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), "ob_123"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureObserverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignatureObserverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>observer_id</code> | <code>str</code> | Unique ID returned when the Signature Observer is created. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureObserverResponse](skribble/models/unions/signature_observer_response.py), [GetSignatureObserverErrorBody](skribble/errors/get_signature_observer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureObserverResponse](skribble/models/unions/signature_observer_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetSignatureObserverErrorBody](skribble/errors/get_signature_observer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_signature_observers(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[SignatureObserverResponse], ListSignatureObserversErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all observers added to the `SignatureRequest` with the ID `SR_ID`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_observer_api.with_raw_response.list_signature_observers(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SignatureObserverResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSignatureObserversErrorBody
```

**Async**

```python
result = await async_client.signature_observer_api.with_raw_response.list_signature_observers(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SignatureObserverResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSignatureObserversErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;list&#91;[SignatureObserverResponse](skribble/models/unions/signature_observer_response.py)&#93;, [ListSignatureObserversErrorBody](skribble/errors/list_signature_observers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[SignatureObserverResponse](skribble/models/unions/signature_observer_response.py)&#93;</code> -- OK

**On `Failure`**: `error` is <code>[ListSignatureObserversErrorBody](skribble/errors/list_signature_observers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureSigner

> Source: [SignatureSigner](skribble/apis/signature_signer.py)

<details>
<summary><code>def add_signature_signer(sr_id: UUID, body: SignatureRecipientModel | SignatureRecipientModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureResponseV3, AddSignatureSignerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an individual signer to the `SignatureRequest` with the ID `SR_ID`.
Use `account_email` to invite a signer with an existing Skribble account,
or `signer_identity_data` to invite a No-Account-Signer (NAS).

> **Good to know**
> We recommend combining `signer_identity_data` and `account_email` when
> you are unsure whether the user has a Skribble account. If a matching
> account exists, the user will find the `SignatureRequest` in the
> **To sign** section of their account on my.skribble.com.
>
> If you invite them using only `signer_identity_data`, the document will
> not appear in their Skribble account even if one exists — they will need
> to access it via the link in their invitation email.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_signer.with_raw_response.add_signature_signer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    UserSigner(
        document_signatures=[SignerDocumentToSign(document_id=UUID("3648f61d-4194-455c-a0bc-1c438d2cd11b"))],
        account_email="single-signer@skribble.com",
        signer_identity_data=SignerIdentityData(email_address="single-signer@skribble.com"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddSignatureSignerErrorBody
```

**Async**

```python
result = await async_client.signature_signer.with_raw_response.add_signature_signer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"),
    UserSigner(
        document_signatures=[SignerDocumentToSign(document_id=UUID("3648f61d-4194-455c-a0bc-1c438d2cd11b"))],
        account_email="single-signer@skribble.com",
        signer_identity_data=SignerIdentityData(email_address="single-signer@skribble.com"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureResponseV3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddSignatureSignerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>body</code> | <code>[SignatureRecipientModel](skribble/models/unions/signature_recipient_model.py) \| [SignatureRecipientModelDict](skribble/models/unions/signature_recipient_model.py)</code> | Request body to add a Signer |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureResponseV3](skribble/models/signature_response_v3.py), [AddSignatureSignerErrorBody](skribble/errors/add_signature_signer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureResponseV3](skribble/models/signature_response_v3.py)</code> -- OK

**On `Failure`**: `error` is <code>[AddSignatureSignerErrorBody](skribble/errors/add_signature_signer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_signature_signer(sr_id: UUID, sid: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RemoveSignatureSignerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an individual signer from the `SignatureRequest`. Provide the
SignatureRequest ID `SR_ID` and the Signature ID `SID` of the signer to
remove.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signature_signer.with_raw_response.remove_signature_signer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UUID("97db18c8-7ca1-35a2-9726-0b32771e4ac6")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveSignatureSignerErrorBody
```

**Async**

```python
result = await async_client.signature_signer.with_raw_response.remove_signature_signer(
    UUID("cccccccc-4a6a-a958-a42e-6ea4172a378b"), UUID("97db18c8-7ca1-35a2-9726-0b32771e4ac6")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveSignatureSignerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sr_id</code> | <code>UUID</code> | Unique ID received when creating the Signature Request object |
| <code>sid</code> | <code>UUID</code> | Unique ID of the signer |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [RemoveSignatureSignerErrorBody](skribble/errors/remove_signature_signer_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RemoveSignatureSignerErrorBody](skribble/errors/remove_signature_signer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## User

> Source: [User](skribble/apis/user.py)

<details>
<summary><code>def get_user_signature_qualities(*, username: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UserSignatureQualitiesResponse, GetUserSignatureQualitiesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the effective signature `quality` that will be applied when the
given `username` signs a document.

The resulting quality is determined by the combination of the requested
`quality` and `legislation`, where `any` matches any legislation.

For example, if you create a `SignatureRequest` with `quality=AES_MINIMAL`
and `legislation=ZERTES`, this endpoint will indicate the final quality the
user will sign with — typically `QES`, as `AES_MINIMAL` upgrades to `QES`
when the user's settings allow it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user.with_raw_response.get_user_signature_qualities(username="john.doe@skribble.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserSignatureQualitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserSignatureQualitiesErrorBody
```

**Async**

```python
result = await async_client.user.with_raw_response.get_user_signature_qualities(username="john.doe@skribble.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserSignatureQualitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserSignatureQualitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>EmailStr \| None</code> | Username to find<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[UserSignatureQualitiesResponse](skribble/models/user_signature_qualities_response.py), [GetUserSignatureQualitiesErrorBody](skribble/errors/get_user_signature_qualities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UserSignatureQualitiesResponse](skribble/models/user_signature_qualities_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetUserSignatureQualitiesErrorBody](skribble/errors/get_user_signature_qualities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500, 503 | <code>[Problem](skribble/models/problem.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Validation

> Source: [Validation](skribble/apis/validation.py)

<details>
<summary><code>def delete_validation(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteValidationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the corresponding resource identified by {id}, universal for all
validation resources. Any resource that is not manually deleted will be
automatically deleted after 10 minutes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.validation.with_raw_response.delete_validation(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteValidationErrorBody
```

**Async**

```python
result = await async_client.validation.with_raw_response.delete_validation(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteValidationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The 'id' provided by the validate operation |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;None, [DeleteValidationErrorBody](skribble/errors/delete_validation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteValidationErrorBody](skribble/errors/delete_validation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_validate_document(content: FileInput, *, quality: QualityOrStr | None = None, long_term_validation: bool | None = None, legislation: LegislationOrStr | None = None, infos: list[InfoOrStr] | None = None, reject_visual_differences: bool | None = None, reject_undefined_changes: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocumentValidationResponse, PostValidateDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate signatures in digitally signed content, such as a PDF or XML file.
A validation ID {id} is returned that can be used to call additional
endpoints. The content to be validated is provided in the request body and
is not retained within our service. The maximum request or file size is
50MB. Request parameters can be used to set optional parameters to control
the validation

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.validation.with_raw_response.post_validate_document(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentValidationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostValidateDocumentErrorBody
```

**Async**

```python
result = await async_client.validation.with_raw_response.post_validate_document(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentValidationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostValidateDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content</code> | <code>FileInput</code> | File content to validate (PDF or XML) |
| <code>quality</code> | <code>[QualityOrStr](skribble/models/enums/quality.py) \| None</code> | Optional flag specifying the minimum signature quality required (SES, AES,<br>QES).<br>**Default**: <code>None</code> |
| <code>long_term_validation</code> | <code>bool \| None</code> | Optional flag indicating whether the signature must be long-term valid.<br>**Default**: <code>None</code> |
| <code>legislation</code> | <code>[LegislationOrStr](skribble/models/enums/legislation.py) \| None</code> | Optional jurisdiction (legal framework) the signature must satisfy:<br>`CH` = Swiss law (ZertES), `EU` = EU law (eIDAS Regulation), `CH_EU` = both<br>ZertES and eIDAS, `WORLD` = no specific jurisdiction (international). When set,<br>the validation reports whether the signature meets the selected framework.<br>**Default**: <code>None</code> |
| <code>infos</code> | <code>list&#91;[InfoOrStr](skribble/models/enums/info.py)&#93; \| None</code> | Optional flag to request additional information, such as validation, format,<br>or signer details.<br>**Default**: <code>None</code> |
| <code>reject_visual_differences</code> | <code>bool \| None</code> | Optional flag to specify if visual differences should be rejected. If 'true',<br>validation will fail due to visual differences; if 'false' or not provided,<br>visual differences will not cause validation to fail.<br>**Default**: <code>None</code> |
| <code>reject_undefined_changes</code> | <code>bool \| None</code> | Optional flag to specify if undefined changes should be rejected. If 'true',<br>validation will fail due to undefined changes; if 'false' or not provided,<br>undefined changes will not cause validation to fail.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[DocumentValidationResponse](skribble/models/document_validation_response.py), [PostValidateDocumentErrorBody](skribble/errors/post_validate_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocumentValidationResponse](skribble/models/document_validation_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[PostValidateDocumentErrorBody](skribble/errors/post_validate_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 413, 415, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_validate_signature(content: FileInput, *, quality: QualityOrStr | None = None, long_term_validation: bool | None = None, legislation: LegislationOrStr | None = None, infos: list[InfoOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignatureValidationResponse, PostValidateSignatureErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate digital signatures such as CMS and CAdES without providing the
associated signed content. A validation ID {id} is returned that can be used
to call additional endpoints. The signature to be validated is provided in
the request body. Query parameters can be used to set optional parameters to
control the validation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.validation.with_raw_response.post_validate_signature(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureValidationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostValidateSignatureErrorBody
```

**Async**

```python
result = await async_client.validation.with_raw_response.post_validate_signature(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignatureValidationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostValidateSignatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content</code> | <code>FileInput</code> | File content to validate (PDF or XML) |
| <code>quality</code> | <code>[QualityOrStr](skribble/models/enums/quality.py) \| None</code> | Optional flag specifying the minimum signature quality required (SES, AES,<br>QES).<br>**Default**: <code>None</code> |
| <code>long_term_validation</code> | <code>bool \| None</code> | Optional flag indicating whether the signature must be long-term valid.<br>**Default**: <code>None</code> |
| <code>legislation</code> | <code>[LegislationOrStr](skribble/models/enums/legislation.py) \| None</code> | Optional jurisdiction (legal framework) the signature must satisfy:<br>`CH` = Swiss law (ZertES), `EU` = EU law (eIDAS Regulation), `CH_EU` = both<br>ZertES and eIDAS, `WORLD` = no specific jurisdiction (international). When set,<br>the validation reports whether the signature meets the selected framework.<br>**Default**: <code>None</code> |
| <code>infos</code> | <code>list&#91;[InfoOrStr](skribble/models/enums/info.py)&#93; \| None</code> | Optional flag to request additional information, such as validation, format,<br>or signer details.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](skribble/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](skribble/core/results.py)&#91;[SignatureValidationResponse](skribble/models/signature_validation_response.py), [PostValidateSignatureErrorBody](skribble/errors/post_validate_signature_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignatureValidationResponse](skribble/models/signature_validation_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[PostValidateSignatureErrorBody](skribble/errors/post_validate_signature_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 415, 429, 500, 503 | <code>[ProblemSkribbleAdditionalInformationApi](skribble/models/problem_skribble_additional_information_api.py)</code> |
| anything unmapped | <code>[RawError](skribble/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

