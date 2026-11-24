# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [JuriSignClient](juri_sign/client.py)

## Account

> Source: [Account](juri_sign/apis/account.py)

<details>
<summary><code>def get_account_credits(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountCreditsResponse, GetAccountCreditsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your organization's real-time signature credit consumption. Scoped strictly to the organization of the authenticated token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.account.with_raw_response.get_account_credits()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountCreditsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountCreditsErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.get_account_credits()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountCreditsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountCreditsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[AccountCreditsResponse](juri_sign/models/account_credits_response.py), [GetAccountCreditsErrorBody](juri_sign/errors/get_account_credits_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountCreditsResponse](juri_sign/models/account_credits_response.py)</code> -- Credit balance

**On `Failure`**: `error` is <code>[GetAccountCreditsErrorBody](juri_sign/errors/get_account_credits_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthenticated1](juri_sign/models/unauthenticated1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Authentication

> Source: [Authentication](juri_sign/apis/authentication.py)

<details>
<summary><code>def create_sandbox_token(body: AuthSandboxTokenRequest | AuthSandboxTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AuthSandboxTokenResponse, CreateSandboxTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authenticate with the same email/password as POST /auth/token, but obtain a sandbox token instead (prefixed sandbox_...). Requests made with this token never send real SMS or emails (SMS are logged, emails go through the log mailer) and never deduct signature credits. Documents and signature requests created in sandbox mode are isolated from your organization's real data: they never appear in a normal (non-sandbox) request, and vice versa. A sandbox token can only be used with the sandbox_ prefix, and a normal token can never be used with it — mixing the two returns 401. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute for the calling IP.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.authentication.with_raw_response.create_sandbox_token(
    AuthSandboxTokenRequest(email="user@example.com", password="some example password")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthSandboxTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSandboxTokenErrorBody
```

**Async**

```python
result = await async_client.authentication.with_raw_response.create_sandbox_token(
    AuthSandboxTokenRequest(email="user@example.com", password="some example password")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthSandboxTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSandboxTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AuthSandboxTokenRequest](juri_sign/models/auth_sandbox_token_request.py) \| [AuthSandboxTokenRequestDict](juri_sign/models/auth_sandbox_token_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[AuthSandboxTokenResponse](juri_sign/models/auth_sandbox_token_response.py), [CreateSandboxTokenErrorBody](juri_sign/errors/create_sandbox_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AuthSandboxTokenResponse](juri_sign/models/auth_sandbox_token_response.py)</code> -- Sandbox token created successfully

**On `Failure`**: `error` is <code>[CreateSandboxTokenErrorBody](juri_sign/errors/create_sandbox_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 429 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| 422 | <code>[ValidationError1](juri_sign/models/validation_error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_token(body: AuthTokenRequest | AuthTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AuthTokenResponse, CreateTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authenticate with email/password to obtain a Bearer token, scoped to your organization. By default the token is granted all 5 available scopes (documents:read, documents:write, sign-requests:read, sign-requests:write, webhooks:manage). Pass `scopes` to request a restricted subset instead — every endpoint checks the token's abilities and returns 403 if the required scope is missing. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute for the calling IP.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.authentication.with_raw_response.create_token(
    AuthTokenRequest(email="user@example.com", password="some example password")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTokenErrorBody
```

**Async**

```python
result = await async_client.authentication.with_raw_response.create_token(
    AuthTokenRequest(email="user@example.com", password="some example password")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AuthTokenRequest](juri_sign/models/auth_token_request.py) \| [AuthTokenRequestDict](juri_sign/models/auth_token_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[AuthTokenResponse](juri_sign/models/auth_token_response.py), [CreateTokenErrorBody](juri_sign/errors/create_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AuthTokenResponse](juri_sign/models/auth_token_response.py)</code> -- Token created successfully

**On `Failure`**: `error` is <code>[CreateTokenErrorBody](juri_sign/errors/create_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 429 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| 422 | <code>[ValidationError1](juri_sign/models/validation_error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_status(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Response, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current API status and version information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.authentication.with_raw_response.get_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.authentication.with_raw_response.get_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[Response](juri_sign/models/response.py), [RawError](juri_sign/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Response](juri_sign/models/response.py)</code> -- API is operational

**On `Failure`**: `error` is <code>[RawError](juri_sign/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke_token(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, RevokeTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke the Bearer token used in this request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.authentication.with_raw_response.revoke_token()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeTokenErrorBody
```

**Async**

```python
result = await async_client.authentication.with_raw_response.revoke_token()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[MessageResponse](juri_sign/models/message_response.py), [RevokeTokenErrorBody](juri_sign/errors/revoke_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](juri_sign/models/message_response.py)</code> -- Token revoked

**On `Failure`**: `error` is <code>[RevokeTokenErrorBody](juri_sign/errors/revoke_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Bulk

> Source: [Bulk](juri_sign/apis/bulk.py)

<details>
<summary><code>def cancel_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkCampaignsCancelResponse, CancelBulkCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.cancel_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsCancelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelBulkCampaignErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.cancel_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsCancelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelBulkCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkCampaignsCancelResponse](juri_sign/models/bulk_campaigns_cancel_response.py), [CancelBulkCampaignErrorBody](juri_sign/errors/cancel_bulk_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkCampaignsCancelResponse](juri_sign/models/bulk_campaigns_cancel_response.py)</code> -- Campaign cancelled

**On `Failure`**: `error` is <code>[CancelBulkCampaignErrorBody](juri_sign/errors/cancel_bulk_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bulk_campaign(body: BulkCampaignsRequest | BulkCampaignsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkCampaignsResponse1, CreateBulkCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a bulk campaign with recipients provided directly as JSON (no Excel upload needed for API clients). Each recipient generates one individualized sign request, merged from the bulk template. Invalid rows (missing fields, invalid email, duplicate email) are skipped and reported in `skipped_recipients`, not fatal.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.create_bulk_campaign(
    BulkCampaignsRequest(
        name="some example string",
        bulk_template_id=UUID("00000000-0000-0000-0000-000000000000"),
        expiry_hours=1,
        otp_channel=OtpChannel.SMS,
        recipients=[Recipient(nom="some example string", prenom="some example string", email="user@example.com")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBulkCampaignErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.create_bulk_campaign(
    BulkCampaignsRequest(
        name="some example string",
        bulk_template_id=UUID("00000000-0000-0000-0000-000000000000"),
        expiry_hours=1,
        otp_channel=OtpChannel.SMS,
        recipients=[Recipient(nom="some example string", prenom="some example string", email="user@example.com")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBulkCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkCampaignsRequest](juri_sign/models/bulk_campaigns_request.py) \| [BulkCampaignsRequestDict](juri_sign/models/bulk_campaigns_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkCampaignsResponse1](juri_sign/models/bulk_campaigns_response1.py), [CreateBulkCampaignErrorBody](juri_sign/errors/create_bulk_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkCampaignsResponse1](juri_sign/models/bulk_campaigns_response1.py)</code> -- Campaign created (draft, not yet launched)

**On `Failure`**: `error` is <code>[CreateBulkCampaignErrorBody](juri_sign/errors/create_bulk_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| 422 | <code>[ValidationError1](juri_sign/models/validation_error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bulk_template(body: BulkTemplatesRequest | BulkTemplatesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkTemplatesResponse1, CreateBulkTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a merge-field HTML template (e.g. `
Bonjour {{prenom}} {{nom}}
`). Merge fields are auto-extracted from the content.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.create_bulk_template(
    BulkTemplatesRequest(name="some example string", html_content="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBulkTemplateErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.create_bulk_template(
    BulkTemplatesRequest(name="some example string", html_content="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBulkTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkTemplatesRequest](juri_sign/models/bulk_templates_request.py) \| [BulkTemplatesRequestDict](juri_sign/models/bulk_templates_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkTemplatesResponse1](juri_sign/models/bulk_templates_response1.py), [CreateBulkTemplateErrorBody](juri_sign/errors/create_bulk_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkTemplatesResponse1](juri_sign/models/bulk_templates_response1.py)</code> -- Bulk template created

**On `Failure`**: `error` is <code>[CreateBulkTemplateErrorBody](juri_sign/errors/create_bulk_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| 422 | <code>[ValidationError1](juri_sign/models/validation_error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteBulkCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fails with 422 if the campaign is currently processing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.delete_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBulkCampaignErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.delete_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBulkCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[MessageResponse](juri_sign/models/message_response.py), [DeleteBulkCampaignErrorBody](juri_sign/errors/delete_bulk_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](juri_sign/models/message_response.py)</code> -- Bulk campaign deleted

**On `Failure`**: `error` is <code>[DeleteBulkCampaignErrorBody](juri_sign/errors/delete_bulk_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bulk_template(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteBulkTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fails with 422 if the template is still referenced by a campaign.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.delete_bulk_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBulkTemplateErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.delete_bulk_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBulkTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[MessageResponse](juri_sign/models/message_response.py), [DeleteBulkTemplateErrorBody](juri_sign/errors/delete_bulk_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](juri_sign/models/message_response.py)</code> -- Bulk template deleted

**On `Failure`**: `error` is <code>[DeleteBulkTemplateErrorBody](juri_sign/errors/delete_bulk_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def export_bulk_campaign_results(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkCampaignsExportResponse, ExportBulkCampaignResultsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-recipient status, send/sign timestamps, and error messages.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.export_bulk_campaign_results(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportBulkCampaignResultsErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.export_bulk_campaign_results(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportBulkCampaignResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkCampaignsExportResponse](juri_sign/models/bulk_campaigns_export_response.py), [ExportBulkCampaignResultsErrorBody](juri_sign/errors/export_bulk_campaign_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkCampaignsExportResponse](juri_sign/models/bulk_campaigns_export_response.py)</code> -- Recipient results

**On `Failure`**: `error` is <code>[ExportBulkCampaignResultsErrorBody](juri_sign/errors/export_bulk_campaign_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkCampaignsResponse2, GetBulkCampaignErrorBody]</code></summary>

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
result = client.bulk.with_raw_response.get_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBulkCampaignErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.get_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBulkCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkCampaignsResponse2](juri_sign/models/bulk_campaigns_response2.py), [GetBulkCampaignErrorBody](juri_sign/errors/get_bulk_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkCampaignsResponse2](juri_sign/models/bulk_campaigns_response2.py)</code> -- Bulk campaign details

**On `Failure`**: `error` is <code>[GetBulkCampaignErrorBody](juri_sign/errors/get_bulk_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bulk_template(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkTemplatesResponse1, GetBulkTemplateErrorBody]</code></summary>

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
result = client.bulk.with_raw_response.get_bulk_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBulkTemplateErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.get_bulk_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBulkTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkTemplatesResponse1](juri_sign/models/bulk_templates_response1.py), [GetBulkTemplateErrorBody](juri_sign/errors/get_bulk_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkTemplatesResponse1](juri_sign/models/bulk_templates_response1.py)</code> -- Bulk template details

**On `Failure`**: `error` is <code>[GetBulkTemplateErrorBody](juri_sign/errors/get_bulk_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def launch_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkCampaignsLaunchResponse, LaunchBulkCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dispatches an asynchronous job that generates each recipient's document, creates their sign request, and sends it. Fails with 422 if the organization does not have enough remaining credits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.launch_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsLaunchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LaunchBulkCampaignErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.launch_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsLaunchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LaunchBulkCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkCampaignsLaunchResponse](juri_sign/models/bulk_campaigns_launch_response.py), [LaunchBulkCampaignErrorBody](juri_sign/errors/launch_bulk_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkCampaignsLaunchResponse](juri_sign/models/bulk_campaigns_launch_response.py)</code> -- Campaign launched (status: processing)

**On `Failure`**: `error` is <code>[LaunchBulkCampaignErrorBody](juri_sign/errors/launch_bulk_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bulk_campaigns(*, status: str | None = None, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkCampaignsResponse, ListBulkCampaignsErrorBody]</code></summary>

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
result = client.bulk.with_raw_response.list_bulk_campaigns()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBulkCampaignsErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.list_bulk_campaigns()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBulkCampaignsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>per_page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkCampaignsResponse](juri_sign/models/bulk_campaigns_response.py), [ListBulkCampaignsErrorBody](juri_sign/errors/list_bulk_campaigns_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkCampaignsResponse](juri_sign/models/bulk_campaigns_response.py)</code> -- Bulk campaigns list

**On `Failure`**: `error` is <code>[ListBulkCampaignsErrorBody](juri_sign/errors/list_bulk_campaigns_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bulk_templates(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkTemplatesResponse, ListBulkTemplatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve reusable merge-field HTML templates used by bulk campaigns.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.list_bulk_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBulkTemplatesErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.list_bulk_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBulkTemplatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkTemplatesResponse](juri_sign/models/bulk_templates_response.py), [ListBulkTemplatesErrorBody](juri_sign/errors/list_bulk_templates_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkTemplatesResponse](juri_sign/models/bulk_templates_response.py)</code> -- Bulk templates list

**On `Failure`**: `error` is <code>[ListBulkTemplatesErrorBody](juri_sign/errors/list_bulk_templates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retry_bulk_campaign(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkCampaignsRetryResponse, RetryBulkCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets recipients in error back to pending so the campaign can be launched again.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.retry_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsRetryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetryBulkCampaignErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.retry_bulk_campaign(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkCampaignsRetryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetryBulkCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkCampaignsRetryResponse](juri_sign/models/bulk_campaigns_retry_response.py), [RetryBulkCampaignErrorBody](juri_sign/errors/retry_bulk_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkCampaignsRetryResponse](juri_sign/models/bulk_campaigns_retry_response.py)</code> -- Failed recipients reset

**On `Failure`**: `error` is <code>[RetryBulkCampaignErrorBody](juri_sign/errors/retry_bulk_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bulk_template(id_: UUID, *, body: BulkTemplatesRequest1 | BulkTemplatesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkTemplatesResponse1, UpdateBulkTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bulk.with_raw_response.update_bulk_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBulkTemplateErrorBody
```

**Async**

```python
result = await async_client.bulk.with_raw_response.update_bulk_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkTemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBulkTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>body</code> | <code>[BulkTemplatesRequest1](juri_sign/models/bulk_templates_request1.py) \| [BulkTemplatesRequest1Dict](juri_sign/models/bulk_templates_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[BulkTemplatesResponse1](juri_sign/models/bulk_templates_response1.py), [UpdateBulkTemplateErrorBody](juri_sign/errors/update_bulk_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkTemplatesResponse1](juri_sign/models/bulk_templates_response1.py)</code> -- Bulk template updated

**On `Failure`**: `error` is <code>[UpdateBulkTemplateErrorBody](juri_sign/errors/update_bulk_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](juri_sign/apis/documents.py)

<details>
<summary><code>def delete_document(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a document. Only documents in `draft` status can be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.delete_document(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.delete_document(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
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
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[MessageResponse](juri_sign/models/message_response.py), [DeleteDocumentErrorBody](juri_sign/errors/delete_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](juri_sign/models/message_response.py)</code> -- Document deleted

**On `Failure`**: `error` is <code>[DeleteDocumentErrorBody](juri_sign/errors/delete_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_document(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DownloadDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the original PDF file.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.download_document(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.download_document(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;FileResponse, [DownloadDocumentErrorBody](juri_sign/errors/download_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- PDF file download

**On `Failure`**: `error` is <code>[DownloadDocumentErrorBody](juri_sign/errors/download_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_document(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocumentsResponse1, GetDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific document.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.get_document(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.get_document(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[DocumentsResponse1](juri_sign/models/documents_response1.py), [GetDocumentErrorBody](juri_sign/errors/get_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocumentsResponse1](juri_sign/models/documents_response1.py)</code> -- Document details

**On `Failure`**: `error` is <code>[GetDocumentErrorBody](juri_sign/errors/get_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_documents(*, status: StatusJuriSignDocumentsApiOrStr | None = None, search: str | None = None, per_page: int | None = 20, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocumentsResponse, ListDocumentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of documents belonging to your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.list_documents()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDocumentsErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.list_documents()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>[StatusJuriSignDocumentsApiOrStr](juri_sign/models/enums/status_juri_sign_documents_api.py) \| None</code> | Filter by document status<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Search by document title<br>**Default**: <code>None</code> |
| <code>per_page</code> | <code>int \| None</code> | Results per page (default: 20, max: 100)<br>**Default**: <code>20</code> |
| <code>page</code> | <code>int \| None</code> | Page number<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[DocumentsResponse](juri_sign/models/documents_response.py), [ListDocumentsErrorBody](juri_sign/errors/list_documents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocumentsResponse](juri_sign/models/documents_response.py)</code> -- Documents list

**On `Failure`**: `error` is <code>[ListDocumentsErrorBody](juri_sign/errors/list_documents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_document(file: FileInput, *, title: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocumentsResponse1, UploadDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a PDF document. Maximum file size is 20 MB.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.upload_document(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadDocumentErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.upload_document(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentsResponse1
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
| <code>file</code> | <code>FileInput</code> | PDF file to upload (max 20 MB) |
| <code>title</code> | <code>str \| None</code> | Document title (defaults to filename if omitted)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[DocumentsResponse1](juri_sign/models/documents_response1.py), [UploadDocumentErrorBody](juri_sign/errors/upload_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocumentsResponse1](juri_sign/models/documents_response1.py)</code> -- Document uploaded

**On `Failure`**: `error` is <code>[UploadDocumentErrorBody](juri_sign/errors/upload_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| 422 | <code>[ValidationError1](juri_sign/models/validation_error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PublicForms

> Source: [PublicForms](juri_sign/apis/public_forms.py)

<details>
<summary><code>def create_public_form(body: PublicFormsRequest | PublicFormsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicFormsResponse1, CreatePublicFormErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a shareable link backed by one of your sign request templates. Anyone opening the link fills in their details and becomes the signer of their own signature request, generated on the fly. The template MUST have exactly one signer and its own copy of the PDF.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.public_forms.with_raw_response.create_public_form(
    PublicFormsRequest(
        name="some example string", sign_request_template_id=UUID("00000000-0000-0000-0000-000000000000")
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePublicFormErrorBody
```

**Async**

```python
result = await async_client.public_forms.with_raw_response.create_public_form(
    PublicFormsRequest(
        name="some example string", sign_request_template_id=UUID("00000000-0000-0000-0000-000000000000")
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePublicFormErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicFormsRequest](juri_sign/models/public_forms_request.py) \| [PublicFormsRequestDict](juri_sign/models/public_forms_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[PublicFormsResponse1](juri_sign/models/public_forms_response1.py), [CreatePublicFormErrorBody](juri_sign/errors/create_public_form_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicFormsResponse1](juri_sign/models/public_forms_response1.py)</code> -- Public form created

**On `Failure`**: `error` is <code>[CreatePublicFormErrorBody](juri_sign/errors/create_public_form_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| 422 | <code>[ValidationError1](juri_sign/models/validation_error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_public_form(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeletePublicFormErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.public_forms.with_raw_response.delete_public_form(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePublicFormErrorBody
```

**Async**

```python
result = await async_client.public_forms.with_raw_response.delete_public_form(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePublicFormErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[MessageResponse](juri_sign/models/message_response.py), [DeletePublicFormErrorBody](juri_sign/errors/delete_public_form_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](juri_sign/models/message_response.py)</code> -- Public form deleted

**On `Failure`**: `error` is <code>[DeletePublicFormErrorBody](juri_sign/errors/delete_public_form_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_public_form(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicFormsResponse1, GetPublicFormErrorBody]</code></summary>

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
result = client.public_forms.with_raw_response.get_public_form(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPublicFormErrorBody
```

**Async**

```python
result = await async_client.public_forms.with_raw_response.get_public_form(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPublicFormErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[PublicFormsResponse1](juri_sign/models/public_forms_response1.py), [GetPublicFormErrorBody](juri_sign/errors/get_public_form_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicFormsResponse1](juri_sign/models/public_forms_response1.py)</code> -- Public form details

**On `Failure`**: `error` is <code>[GetPublicFormErrorBody](juri_sign/errors/get_public_form_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_public_forms(*, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicFormsResponse, ListPublicFormsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the shareable public forms (PowerForms) of your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.public_forms.with_raw_response.list_public_forms()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPublicFormsErrorBody
```

**Async**

```python
result = await async_client.public_forms.with_raw_response.list_public_forms()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPublicFormsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>per_page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[PublicFormsResponse](juri_sign/models/public_forms_response.py), [ListPublicFormsErrorBody](juri_sign/errors/list_public_forms_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicFormsResponse](juri_sign/models/public_forms_response.py)</code> -- Public forms list

**On `Failure`**: `error` is <code>[ListPublicFormsErrorBody](juri_sign/errors/list_public_forms_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rotate_public_form_token(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicFormsRotateTokenResponse, RotatePublicFormTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new public token. The previous link stops working immediately — use this if a link leaked or was shared too widely.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.public_forms.with_raw_response.rotate_public_form_token(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsRotateTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotatePublicFormTokenErrorBody
```

**Async**

```python
result = await async_client.public_forms.with_raw_response.rotate_public_form_token(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsRotateTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotatePublicFormTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[PublicFormsRotateTokenResponse](juri_sign/models/public_forms_rotate_token_response.py), [RotatePublicFormTokenErrorBody](juri_sign/errors/rotate_public_form_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicFormsRotateTokenResponse](juri_sign/models/public_forms_rotate_token_response.py)</code> -- New token generated

**On `Failure`**: `error` is <code>[RotatePublicFormTokenErrorBody](juri_sign/errors/rotate_public_form_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_public_form(id_: UUID, *, body: PublicFormsRequest1 | PublicFormsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicFormsResponse1, UpdatePublicFormErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename, pause/reactivate, change the expiry or the daily cap.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.public_forms.with_raw_response.update_public_form(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePublicFormErrorBody
```

**Async**

```python
result = await async_client.public_forms.with_raw_response.update_public_form(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicFormsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePublicFormErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>body</code> | <code>[PublicFormsRequest1](juri_sign/models/public_forms_request1.py) \| [PublicFormsRequest1Dict](juri_sign/models/public_forms_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[PublicFormsResponse1](juri_sign/models/public_forms_response1.py), [UpdatePublicFormErrorBody](juri_sign/errors/update_public_form_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicFormsResponse1](juri_sign/models/public_forms_response1.py)</code> -- Public form updated

**On `Failure`**: `error` is <code>[UpdatePublicFormErrorBody](juri_sign/errors/update_public_form_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SignRequests

> Source: [SignRequests](juri_sign/apis/sign_requests.py)

<details>
<summary><code>def cancel_sign_request(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignRequestsCancelResponse, CancelSignRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a pending signature request. Only requests in `pending` status can be cancelled.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sign_requests.with_raw_response.cancel_sign_request(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsCancelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelSignRequestErrorBody
```

**Async**

```python
result = await async_client.sign_requests.with_raw_response.cancel_sign_request(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsCancelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelSignRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[SignRequestsCancelResponse](juri_sign/models/sign_requests_cancel_response.py), [CancelSignRequestErrorBody](juri_sign/errors/cancel_sign_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignRequestsCancelResponse](juri_sign/models/sign_requests_cancel_response.py)</code> -- Request cancelled

**On `Failure`**: `error` is <code>[CancelSignRequestErrorBody](juri_sign/errors/cancel_sign_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthenticated1](juri_sign/models/unauthenticated1.py)</code> |
| 404 | <code>[NotFound1](juri_sign/models/not_found1.py)</code> |
| 422 | <code>[Error1](juri_sign/models/error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_sign_request(body: CreateSignRequestInput | CreateSignRequestInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignRequestsResponse1, CreateSignRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new signature request with one or more signers. The request is created in `draft` status and must be sent explicitly via the send endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sign_requests.with_raw_response.create_sign_request(
    CreateSignRequestInput(
        document_id=UUID("00000000-0000-0000-0000-000000000000"),
        subject="some example string",
        signing_order_type=SigningOrderType.VALUE_0,
        expiry_hours=1,
        signers=[
            Signer(
                prenom="some example string",
                nom="some example string",
                email="user@example.com",
                otp_channel=OtpChannelJuriSignSignRequestsApi.SMS,
            ),
        ],
    ),
    idempotency_key="order-4821",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignRequestErrorBody
```

**Async**

```python
result = await async_client.sign_requests.with_raw_response.create_sign_request(
    CreateSignRequestInput(
        document_id=UUID("00000000-0000-0000-0000-000000000000"),
        subject="some example string",
        signing_order_type=SigningOrderType.VALUE_0,
        expiry_hours=1,
        signers=[
            Signer(
                prenom="some example string",
                nom="some example string",
                email="user@example.com",
                otp_channel=OtpChannelJuriSignSignRequestsApi.SMS,
            ),
        ],
    ),
    idempotency_key="order-4821",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSignRequestInput](juri_sign/models/create_sign_request_input.py) \| [CreateSignRequestInputDict](juri_sign/models/create_sign_request_input.py)</code> | The request body. |
| <code>idempotency_key</code> | <code>str \| None</code> | Optional. Send a unique key (for example your own order reference) to make this call safely repeatable. If the network drops after your request reaches us but before you get the response, replay the exact same call with the same key: you receive the original response — same body, same status, with an `Idempotent-Replayed: true` header — and no second signature request is created, so no second SMS is billed. Reusing a key with a DIFFERENT body returns 409: that is an integration bug, not a retry. Keys are scoped to your organization and honoured for 24 hours. Failed responses never consume a key.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[SignRequestsResponse1](juri_sign/models/sign_requests_response1.py), [CreateSignRequestErrorBody](juri_sign/errors/create_sign_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignRequestsResponse1](juri_sign/models/sign_requests_response1.py)</code> -- Sign request created

**On `Failure`**: `error` is <code>[CreateSignRequestErrorBody](juri_sign/errors/create_sign_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthenticated1](juri_sign/models/unauthenticated1.py)</code> |
| 409 | <code>[RawError](juri_sign/core/results.py)</code> |
| 422 | <code>[ValidationError1](juri_sign/models/validation_error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_proof(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DownloadProofErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the audit proof PDF, containing a detailed log of all signing actions with timestamps and IP addresses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sign_requests.with_raw_response.download_proof(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadProofErrorBody
```

**Async**

```python
result = await async_client.sign_requests.with_raw_response.download_proof(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadProofErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;FileResponse, [DownloadProofErrorBody](juri_sign/errors/download_proof_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Audit proof PDF

**On `Failure`**: `error` is <code>[DownloadProofErrorBody](juri_sign/errors/download_proof_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthenticated1](juri_sign/models/unauthenticated1.py)</code> |
| 404 | <code>[NotFound1](juri_sign/models/not_found1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_signed_pdf(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DownloadSignedPdfErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the signed PDF document. Only available after all signers have completed signing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sign_requests.with_raw_response.download_signed_pdf(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadSignedPdfErrorBody
```

**Async**

```python
result = await async_client.sign_requests.with_raw_response.download_signed_pdf(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadSignedPdfErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;FileResponse, [DownloadSignedPdfErrorBody](juri_sign/errors/download_signed_pdf_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Signed PDF file

**On `Failure`**: `error` is <code>[DownloadSignedPdfErrorBody](juri_sign/errors/download_signed_pdf_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthenticated1](juri_sign/models/unauthenticated1.py)</code> |
| 404 | <code>[NotFound1](juri_sign/models/not_found1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sign_request(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignRequestsResponse2, GetSignRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a signature request, including signers, signature zones, and download links.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sign_requests.with_raw_response.get_sign_request(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignRequestErrorBody
```

**Async**

```python
result = await async_client.sign_requests.with_raw_response.get_sign_request(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[SignRequestsResponse2](juri_sign/models/sign_requests_response2.py), [GetSignRequestErrorBody](juri_sign/errors/get_sign_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignRequestsResponse2](juri_sign/models/sign_requests_response2.py)</code> -- Sign request details

**On `Failure`**: `error` is <code>[GetSignRequestErrorBody](juri_sign/errors/get_sign_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthenticated1](juri_sign/models/unauthenticated1.py)</code> |
| 404 | <code>[NotFound1](juri_sign/models/not_found1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sign_requests(*, status: StatusJuriSignSignRequestsApiOrStr | None = None, per_page: int | None = 20, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignRequestsResponse, ListSignRequestsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of signature requests.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sign_requests.with_raw_response.list_sign_requests()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSignRequestsErrorBody
```

**Async**

```python
result = await async_client.sign_requests.with_raw_response.list_sign_requests()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSignRequestsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>[StatusJuriSignSignRequestsApiOrStr](juri_sign/models/enums/status_juri_sign_sign_requests_api.py) \| None</code> | Filter by status<br>**Default**: <code>None</code> |
| <code>per_page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[SignRequestsResponse](juri_sign/models/sign_requests_response.py), [ListSignRequestsErrorBody](juri_sign/errors/list_sign_requests_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignRequestsResponse](juri_sign/models/sign_requests_response.py)</code> -- Sign requests list

**On `Failure`**: `error` is <code>[ListSignRequestsErrorBody](juri_sign/errors/list_sign_requests_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthenticated1](juri_sign/models/unauthenticated1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_sign_request(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignRequestsSendResponse, SendSignRequestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send the signature request to all signers. This changes the status from `draft` to `pending` and sends invitation emails.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sign_requests.with_raw_response.send_sign_request(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsSendResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendSignRequestErrorBody
```

**Async**

```python
result = await async_client.sign_requests.with_raw_response.send_sign_request(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignRequestsSendResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendSignRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[SignRequestsSendResponse](juri_sign/models/sign_requests_send_response.py), [SendSignRequestErrorBody](juri_sign/errors/send_sign_request_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignRequestsSendResponse](juri_sign/models/sign_requests_send_response.py)</code> -- Request sent to signers

**On `Failure`**: `error` is <code>[SendSignRequestErrorBody](juri_sign/errors/send_sign_request_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Unauthenticated1](juri_sign/models/unauthenticated1.py)</code> |
| 404 | <code>[NotFound1](juri_sign/models/not_found1.py)</code> |
| 422 | <code>[Error1](juri_sign/models/error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](juri_sign/apis/templates.py)

<details>
<summary><code>def create_sign_request_from_template(id_: UUID, *, body: TemplatesSignRequestsRequest | TemplatesSignRequestsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TemplatesSignRequestsResponse, CreateSignRequestFromTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a signature request from a template, reusing its signers, signature zones, and (if present) its own copy of the document. Subject, message, expiry and redirect_url can be overridden. If the template has no document of its own, `document_id` is required.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.templates.with_raw_response.create_sign_request_from_template(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TemplatesSignRequestsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignRequestFromTemplateErrorBody
```

**Async**

```python
result = await async_client.templates.with_raw_response.create_sign_request_from_template(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TemplatesSignRequestsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignRequestFromTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>body</code> | <code>[TemplatesSignRequestsRequest](juri_sign/models/templates_sign_requests_request.py) \| [TemplatesSignRequestsRequestDict](juri_sign/models/templates_sign_requests_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[TemplatesSignRequestsResponse](juri_sign/models/templates_sign_requests_response.py), [CreateSignRequestFromTemplateErrorBody](juri_sign/errors/create_sign_request_from_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TemplatesSignRequestsResponse](juri_sign/models/templates_sign_requests_response.py)</code> -- Sign request created from template

**On `Failure`**: `error` is <code>[CreateSignRequestFromTemplateErrorBody](juri_sign/errors/create_sign_request_from_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| 422 | <code>[ValidationError1](juri_sign/models/validation_error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_template(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a template and its own copy of the PDF, if any.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.templates.with_raw_response.delete_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTemplateErrorBody
```

**Async**

```python
result = await async_client.templates.with_raw_response.delete_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[MessageResponse](juri_sign/models/message_response.py), [DeleteTemplateErrorBody](juri_sign/errors/delete_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](juri_sign/models/message_response.py)</code> -- Template deleted

**On `Failure`**: `error` is <code>[DeleteTemplateErrorBody](juri_sign/errors/delete_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_template(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TemplatesResponse1, GetTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a template, including signers and signature zones.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.templates.with_raw_response.get_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTemplateErrorBody
```

**Async**

```python
result = await async_client.templates.with_raw_response.get_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TemplatesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Resource UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[TemplatesResponse1](juri_sign/models/templates_response1.py), [GetTemplateErrorBody](juri_sign/errors/get_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TemplatesResponse1](juri_sign/models/templates_response1.py)</code> -- Template details

**On `Failure`**: `error` is <code>[GetTemplateErrorBody](juri_sign/errors/get_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_templates(*, per_page: int | None = 20, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TemplatesResponse, ListTemplatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve reusable sign request templates for your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.templates.with_raw_response.list_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTemplatesErrorBody
```

**Async**

```python
result = await async_client.templates.with_raw_response.list_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTemplatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>per_page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[TemplatesResponse](juri_sign/models/templates_response.py), [ListTemplatesErrorBody](juri_sign/errors/list_templates_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TemplatesResponse](juri_sign/models/templates_response.py)</code> -- Templates list

**On `Failure`**: `error` is <code>[ListTemplatesErrorBody](juri_sign/errors/list_templates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](juri_sign/apis/webhooks_api.py)

<details>
<summary><code>def create_webhook(body: WebhooksRequest | WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhooksResponse1, CreateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a new webhook endpoint. The response includes the signing secret which is only shown once.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.create_webhook(
    WebhooksRequest(url="https://example.com", events=[Event.SIGN_REQUEST_SENT])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.create_webhook(
    WebhooksRequest(url="https://example.com", events=[Event.SIGN_REQUEST_SENT])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WebhooksRequest](juri_sign/models/webhooks_request.py) \| [WebhooksRequestDict](juri_sign/models/webhooks_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[WebhooksResponse1](juri_sign/models/webhooks_response1.py), [CreateWebhookErrorBody](juri_sign/errors/create_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhooksResponse1](juri_sign/models/webhooks_response1.py)</code> -- Webhook created (secret shown only once)

**On `Failure`**: `error` is <code>[CreateWebhookErrorBody](juri_sign/errors/create_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| 422 | <code>[ValidationError1](juri_sign/models/validation_error1.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook endpoint and all its delivery logs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.delete_webhook(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.delete_webhook(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[MessageResponse](juri_sign/models/message_response.py), [DeleteWebhookErrorBody](juri_sign/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](juri_sign/models/message_response.py)</code> -- Webhook deleted

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](juri_sign/errors/delete_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook_logs(id_: int, *, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhooksLogsResponse, GetWebhookLogsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

View delivery logs for a specific webhook endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.get_webhook_logs(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksLogsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookLogsErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhook_logs(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksLogsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookLogsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>per_page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[WebhooksLogsResponse](juri_sign/models/webhooks_logs_response.py), [GetWebhookLogsErrorBody](juri_sign/errors/get_webhook_logs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhooksLogsResponse](juri_sign/models/webhooks_logs_response.py)</code> -- Delivery logs

**On `Failure`**: `error` is <code>[GetWebhookLogsErrorBody](juri_sign/errors/get_webhook_logs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhooks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhooksResponse, ListWebhooksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all webhook endpoints for your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[WebhooksResponse](juri_sign/models/webhooks_response.py), [ListWebhooksErrorBody](juri_sign/errors/list_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhooksResponse](juri_sign/models/webhooks_response.py)</code> -- Webhook endpoints

**On `Failure`**: `error` is <code>[ListWebhooksErrorBody](juri_sign/errors/list_webhooks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def regenerate_webhook_secret(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhooksRegenerateSecretResponse, RegenerateWebhookSecretErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new signing secret for the webhook endpoint. The old secret will no longer be valid.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.regenerate_webhook_secret(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksRegenerateSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegenerateWebhookSecretErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.regenerate_webhook_secret(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksRegenerateSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegenerateWebhookSecretErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[WebhooksRegenerateSecretResponse](juri_sign/models/webhooks_regenerate_secret_response.py), [RegenerateWebhookSecretErrorBody](juri_sign/errors/regenerate_webhook_secret_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhooksRegenerateSecretResponse](juri_sign/models/webhooks_regenerate_secret_response.py)</code> -- New secret generated

**On `Failure`**: `error` is <code>[RegenerateWebhookSecretErrorBody](juri_sign/errors/regenerate_webhook_secret_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(id_: int, *, body: WebhooksRequest1 | WebhooksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhooksResponse2, UpdateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook endpoint's URL, events, or active status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.update_webhook(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.update_webhook(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>body</code> | <code>[WebhooksRequest1](juri_sign/models/webhooks_request1.py) \| [WebhooksRequest1Dict](juri_sign/models/webhooks_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](juri_sign/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](juri_sign/core/results.py)&#91;[WebhooksResponse2](juri_sign/models/webhooks_response2.py), [UpdateWebhookErrorBody](juri_sign/errors/update_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhooksResponse2](juri_sign/models/webhooks_response2.py)</code> -- Webhook updated

**On `Failure`**: `error` is <code>[UpdateWebhookErrorBody](juri_sign/errors/update_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[MessageResponse](juri_sign/models/message_response.py)</code> |
| anything unmapped | <code>[RawError](juri_sign/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

