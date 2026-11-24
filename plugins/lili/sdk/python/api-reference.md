# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [LiliClient](lili/client.py)

<details>
<summary><code>def add_webhook(body: WebhookRequestModel | WebhookRequestModelDict, *, request_options: RequestOptionsOrDict | None = None) -> WebhookCreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Create Webhook API registers a new Webhook Listener in the Lili platform.

As part of the response object, a token is returned. This token will be returned on any future webhook call to ensure webhook legitimacy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.add_webhook(WebhookRequestModel(server_url="https://example.com", status=Status2.ACTIVE))
    # TODO: Handle 'response' of type WebhookCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.add_webhook(
        WebhookRequestModel(server_url="https://example.com", status=Status2.ACTIVE)
    )
    # TODO: Handle 'response' of type WebhookCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WebhookRequestModel](lili/models/webhook_request_model.py) \| [WebhookRequestModelDict](lili/models/webhook_request_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookCreateResponse](lili/models/webhook_create_response.py)</code> -- OK

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[AddWebhookErrorBody](lili/errors/add_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[JsonErrorResponse](lili/models/json_error_response.py)</code> |
| anything unmapped | <code>[RawError](lili/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_payment_notification(customer_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a PDF containing a bank letter for a customer

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.create_payment_notification("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.create_payment_notification("some example string")
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
| <code>customer_id</code> | <code>str</code> | The customer ID, as provided in the create lead response |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[RawError](lili/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Delete Webhook API is used to completely delete a registered webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.delete_webhook("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

**Async**

```python
try:
    await async_client.delete_webhook("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | The webhook ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[DeleteWebhookErrorBody](lili/errors/delete_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[JsonErrorResponse](lili/models/json_error_response.py)</code> |
| anything unmapped | <code>[RawError](lili/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all(*, request_options: RequestOptionsOrDict | None = None) -> WebhookListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Get all webhooks returns a list of all the webhooks the platform registered in Lili

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.get_all()
    # TODO: Handle 'response' of type WebhookListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAllErrorBody
```

**Async**

```python
try:
    response = await async_client.get_all()
    # TODO: Handle 'response' of type WebhookListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAllErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookListResponse](lili/models/webhook_list_response.py)</code> -- OK

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[GetAllErrorBody](lili/errors/get_all_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[JsonErrorResponse](lili/models/json_error_response.py)</code> |
| anything unmapped | <code>[RawError](lili/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Get Webhook Details returns the details of an webhook that was registered in the Lili system.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.get_webhook("some example string")
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.get_webhook("some example string")
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | The webhook ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](lili/models/webhook_response.py)</code> -- OK

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[GetWebhookErrorBody](lili/errors/get_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[JsonErrorResponse](lili/models/json_error_response.py)</code> |
| anything unmapped | <code>[RawError](lili/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def payment_list(*, customer_id: str | None = None, receiver_account_number: str | None = None, start_date: RFC3339DateTime | None = None, end_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentListResponse</code></summary>

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
try:
    response = client.payment_list()
    # TODO: Handle 'response' of type PaymentListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.payment_list()
    # TODO: Handle 'response' of type PaymentListResponse
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
| <code>customer_id</code> | <code>str \| None</code> | The customer ID, as provided in the create lead response<br>**Default**: <code>None</code> |
| <code>receiver_account_number</code> | <code>str \| None</code> | The receiver account number<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>RFC3339DateTime \| None</code> | Start date for the payment list<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>RFC3339DateTime \| None</code> | End date for the payment list<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentListResponse](lili/models/payment_list_response.py)</code> -- List of payments related to the customer

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[RawError](lili/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_lili_api_v1_payments(*, body: PaymentRequest | PaymentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment notification in the Lili system

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.put_lili_api_v1_payments()
    # TODO: Handle 'response' of type PaymentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.put_lili_api_v1_payments()
    # TODO: Handle 'response' of type PaymentResponse
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
| <code>body</code> | <code>[PaymentRequest](lili/models/payment_request.py) \| [PaymentRequestDict](lili/models/payment_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponse](lili/models/payment_response.py)</code> -- Payment request created

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[RawError](lili/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def register_account(*, body: LeadRequest | LeadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> LeadResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Create Application API is used to create a new Application in the Lili platform.

The respon contains a UUID representing the applicant that was created in the Lili platform, and a URL that allows initializing the application process with the pre-filled information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.register_account()
    # TODO: Handle 'response' of type LeadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RegisterAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.register_account()
    # TODO: Handle 'response' of type LeadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RegisterAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LeadRequest](lili/models/lead_request.py) \| [LeadRequestDict](lili/models/lead_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LeadResponse](lili/models/lead_response.py)</code> -- Created with a URL of the onboarding link

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[RegisterAccountErrorBody](lili/errors/register_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](lili/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_lead(customer_id: str, *, body: LeadRequest | LeadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Update Lead API is used to update an existing lead in the Lili platform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.update_lead("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLeadErrorBody
```

**Async**

```python
try:
    await async_client.update_lead("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLeadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[LeadRequest](lili/models/lead_request.py) \| [LeadRequestDict](lili/models/lead_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[UpdateLeadErrorBody](lili/errors/update_lead_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](lili/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(webhook_id: str, body: WebhookRequestModel | WebhookRequestModelDict, *, request_options: RequestOptionsOrDict | None = None) -> WebhookResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Update Webhook updates a webhook that is registered in the Lili system. Usually, this is used to disable an active webhook, or reactivate it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.update_webhook(
        "some example string", WebhookRequestModel(server_url="https://example.com", status=Status2.ACTIVE)
    )
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.update_webhook(
        "some example string", WebhookRequestModel(server_url="https://example.com", status=Status2.ACTIVE)
    )
    # TODO: Handle 'response' of type WebhookResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | The webhook ID |
| <code>body</code> | <code>[WebhookRequestModel](lili/models/webhook_request_model.py) \| [WebhookRequestModelDict](lili/models/webhook_request_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](lili/models/webhook_response.py)</code> -- OK

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[UpdateWebhookErrorBody](lili/errors/update_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[JsonErrorResponse](lili/models/json_error_response.py)</code> |
| anything unmapped | <code>[RawError](lili/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_additional_doc(customer_id: str, *, body: LeadUpload | LeadUploadDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Upload Additional Document API is used to upload an additional document to the Lili platform for a given lead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.upload_additional_doc("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadAdditionalDocErrorBody
```

**Async**

```python
try:
    await async_client.upload_additional_doc("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadAdditionalDocErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[LeadUpload](lili/models/lead_upload.py) \| [LeadUploadDict](lili/models/lead_upload.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lili/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](lili/core/exceptions.py)&#91;[UploadAdditionalDocErrorBody](lili/errors/upload_additional_doc_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](lili/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

