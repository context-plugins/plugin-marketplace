# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [CelestiaClient](celestia/client.py)

## Blob

> Source: [Blob](celestia/apis/blob.py)

<details>
<summary><code>def post_root(body: JsonRpcRequest | JsonRpcRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JsonRpcResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Single JSON-RPC entrypoint exposing the `blob.*` namespace including
`blob.Submit`, `blob.Get`, `blob.GetAll`, `blob.GetProof`, `blob.Included`,
and `blob.Subscribe`. Authenticate with a bearer token generated via
`celestia auth `.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.blob.with_raw_response.post_root(JsonRpcRequest(id=1, method=Method.BLOB_SUBMIT, params=[{}]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JsonRpcResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.blob.with_raw_response.post_root(
    JsonRpcRequest(id=1, method=Method.BLOB_SUBMIT, params=[{}])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JsonRpcResponse
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
| <code>body</code> | <code>[JsonRpcRequest](celestia/models/json_rpc_request.py) \| [JsonRpcRequestDict](celestia/models/json_rpc_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](celestia/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](celestia/core/results.py)&#91;[JsonRpcResponse](celestia/models/json_rpc_response.py), [RawError](celestia/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[JsonRpcResponse](celestia/models/json_rpc_response.py)</code> -- JSON-RPC response.

**On `Failure`**: `error` is <code>[RawError](celestia/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contact

> Source: [Contact](celestia/apis/contact.py)

<details>
<summary><code>def submit_website_contact(body: ContactInput | ContactInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessModel, SubmitWebsiteContactErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an inquiry to the configured Google Apps Script integration. No API key is required. If the integration is not configured, the existing development fallback logs the inquiry and returns success with an explicit message; that response does not confirm delivery. Submit only with user consent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contact.with_raw_response.submit_website_contact(
    ContactInput(
        full_name="some example string",
        company_name="some example string",
        email="user@example.com",
        interested_in="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitWebsiteContactErrorBody
```

**Async**

```python
result = await async_client.contact.with_raw_response.submit_website_contact(
    ContactInput(
        full_name="some example string",
        company_name="some example string",
        email="user@example.com",
        interested_in="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitWebsiteContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactInput](celestia/models/contact_input.py) \| [ContactInputDict](celestia/models/contact_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](celestia/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](celestia/core/results.py)&#91;[SuccessModel](celestia/models/success_model.py), [SubmitWebsiteContactErrorBody](celestia/errors/submit_website_contact_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessModel](celestia/models/success_model.py)</code> -- Submission accepted. Read any message for delivery caveats.

**On `Failure`**: `error` is <code>[SubmitWebsiteContactErrorBody](celestia/errors/submit_website_contact_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 405, 408, 500 | <code>[ErrorCelestiaWebsiteContactApi](celestia/models/error_celestia_website_contact_api.py)</code> |
| anything unmapped | <code>[RawError](celestia/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## HealthApi

> Source: [HealthApi](celestia/apis/health_api.py)

<details>
<summary><code>def get_website_health(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, GetWebsiteHealthErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms that the Next.js runtime can answer requests. Does not check external services. No authentication required.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.health_api.with_raw_response.get_website_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebsiteHealthErrorBody
```

**Async**

```python
result = await async_client.health_api.with_raw_response.get_website_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebsiteHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](celestia/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](celestia/core/results.py)&#91;[Health](celestia/models/health.py), [GetWebsiteHealthErrorBody](celestia/errors/get_website_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Health](celestia/models/health.py)</code> -- Runtime is accepting requests.

**On `Failure`**: `error` is <code>[GetWebsiteHealthErrorBody](celestia/errors/get_website_health_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 405 | <code>[ErrorCelestiaWebsiteContactApi](celestia/models/error_celestia_website_contact_api.py)</code> |
| anything unmapped | <code>[RawError](celestia/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def head_website_health(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The same runtime liveness signal as GET, with an empty response body.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.health_api.with_raw_response.head_website_health()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.health_api.with_raw_response.head_website_health()
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](celestia/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](celestia/core/results.py)&#91;None, [RawError](celestia/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](celestia/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscribe

> Source: [Subscribe](celestia/apis/subscribe.py)

<details>
<summary><code>def subscribe_to_website_newsletter(body: SubscriptionInput | SubscriptionInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessModel, SubscribeToWebsiteNewsletterErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribes a consenting email owner through Mailchimp after server-side reCAPTCHA verification. No API key is required from clients. Service credentials remain server-side.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.subscribe.with_raw_response.subscribe_to_website_newsletter(
    SubscriptionInput(email="user@example.com", token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubscribeToWebsiteNewsletterErrorBody
```

**Async**

```python
result = await async_client.subscribe.with_raw_response.subscribe_to_website_newsletter(
    SubscriptionInput(email="user@example.com", token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubscribeToWebsiteNewsletterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SubscriptionInput](celestia/models/subscription_input.py) \| [SubscriptionInputDict](celestia/models/subscription_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](celestia/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](celestia/core/results.py)&#91;[SuccessModel](celestia/models/success_model.py), [SubscribeToWebsiteNewsletterErrorBody](celestia/errors/subscribe_to_website_newsletter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessModel](celestia/models/success_model.py)</code> -- Submission accepted. Read any message for delivery caveats.

**On `Failure`**: `error` is <code>[SubscribeToWebsiteNewsletterErrorBody](celestia/errors/subscribe_to_website_newsletter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 405, 408, 429, 500 | <code>[ErrorCelestiaWebsiteContactApi](celestia/models/error_celestia_website_contact_api.py)</code> |
| anything unmapped | <code>[RawError](celestia/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

