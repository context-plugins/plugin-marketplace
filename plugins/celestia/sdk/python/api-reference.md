# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CelestiaClient](celestia/client.py)

## Blob

> Source: [Blob](celestia/apis/blob.py)

<details>
<summary><code>def post_root(body: JsonRpcRequest | JsonRpcRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> JsonRpcResponse</code></summary>

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
try:
    response = client.blob.post_root(JsonRpcRequest(id=1, method=Method.BLOB_SUBMIT, params=[{}]))
    # TODO: Handle 'response' of type JsonRpcResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.blob.post_root(JsonRpcRequest(id=1, method=Method.BLOB_SUBMIT, params=[{}]))
    # TODO: Handle 'response' of type JsonRpcResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[JsonRpcResponse](celestia/models/json_rpc_response.py)</code> -- JSON-RPC response.

**OnError**: <code>[ApiError](celestia/core/exceptions.py)&#91;[RawError](celestia/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contact

> Source: [Contact](celestia/apis/contact.py)

<details>
<summary><code>def submit_website_contact(body: ContactInput | ContactInputDict, *, request_options: RequestOptionsOrDict | None = None) -> SuccessModel</code></summary>

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
try:
    response = client.contact.submit_website_contact(
        ContactInput(
            full_name="some example string",
            company_name="some example string",
            email="user@example.com",
            interested_in="some example string",
        ),
    )
    # TODO: Handle 'response' of type SuccessModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitWebsiteContactErrorBody
```

**Async**

```python
try:
    response = await async_client.contact.submit_website_contact(
        ContactInput(
            full_name="some example string",
            company_name="some example string",
            email="user@example.com",
            interested_in="some example string",
        ),
    )
    # TODO: Handle 'response' of type SuccessModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitWebsiteContactErrorBody
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

**OnSuccess**: <code>[SuccessModel](celestia/models/success_model.py)</code> -- Submission accepted. Read any message for delivery caveats.

**OnError**: <code>[ApiError](celestia/core/exceptions.py)&#91;[SubmitWebsiteContactErrorBody](celestia/errors/submit_website_contact_error.py)&#93;</code>

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
<summary><code>def get_website_health(*, request_options: RequestOptionsOrDict | None = None) -> Health</code></summary>

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
try:
    response = client.health_api.get_website_health()
    # TODO: Handle 'response' of type Health
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebsiteHealthErrorBody
```

**Async**

```python
try:
    response = await async_client.health_api.get_website_health()
    # TODO: Handle 'response' of type Health
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebsiteHealthErrorBody
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

**OnSuccess**: <code>[Health](celestia/models/health.py)</code> -- Runtime is accepting requests.

**OnError**: <code>[ApiError](celestia/core/exceptions.py)&#91;[GetWebsiteHealthErrorBody](celestia/errors/get_website_health_error.py)&#93;</code>

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
<summary><code>def head_website_health(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.health_api.head_website_health()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.health_api.head_website_health()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](celestia/core/exceptions.py)&#91;[RawError](celestia/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscribe

> Source: [Subscribe](celestia/apis/subscribe.py)

<details>
<summary><code>def subscribe_to_website_newsletter(body: SubscriptionInput | SubscriptionInputDict, *, request_options: RequestOptionsOrDict | None = None) -> SuccessModel</code></summary>

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
try:
    response = client.subscribe.subscribe_to_website_newsletter(
        SubscriptionInput(email="user@example.com", token="some example string")
    )
    # TODO: Handle 'response' of type SuccessModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubscribeToWebsiteNewsletterErrorBody
```

**Async**

```python
try:
    response = await async_client.subscribe.subscribe_to_website_newsletter(
        SubscriptionInput(email="user@example.com", token="some example string")
    )
    # TODO: Handle 'response' of type SuccessModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubscribeToWebsiteNewsletterErrorBody
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

**OnSuccess**: <code>[SuccessModel](celestia/models/success_model.py)</code> -- Submission accepted. Read any message for delivery caveats.

**OnError**: <code>[ApiError](celestia/core/exceptions.py)&#91;[SubscribeToWebsiteNewsletterErrorBody](celestia/errors/subscribe_to_website_newsletter_error.py)&#93;</code>

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

