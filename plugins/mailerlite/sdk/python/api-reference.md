# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [MailerLiteClient](mailer_lite/client.py)

<details>
<summary><code>def create_webhook(*, limit: int | None = 100, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.create_webhook()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.create_webhook()
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
| <code>limit</code> | <code>int \| None</code> | max records to return<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | number of items to skip<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](mailer_lite/core/exceptions.py)&#91;[RawError](mailer_lite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(webhook_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.delete_webhook(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

**Async**

```python
try:
    await async_client.delete_webhook(1)
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
| <code>webhook_id</code> | <code>int</code> | The id of the webhook to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](mailer_lite/core/exceptions.py)&#91;[DeleteWebhookErrorBody](mailer_lite/errors/delete_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](mailer_lite/core/results.py)</code> |
| anything unmapped | <code>[RawError](mailer_lite/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_count_of_webhooks(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.get_count_of_webhooks()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.get_count_of_webhooks()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](mailer_lite/core/exceptions.py)&#91;[RawError](mailer_lite/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_webhooks(body: Webhook | WebhookDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.post_webhooks(Webhook())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWebhooksErrorBody
```

**Async**

```python
try:
    await async_client.post_webhooks(Webhook())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Webhook](mailer_lite/models/webhook.py) \| [WebhookDict](mailer_lite/models/webhook.py)</code> | Created webhook object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](mailer_lite/core/exceptions.py)&#91;[PostWebhooksErrorBody](mailer_lite/errors/post_webhooks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](mailer_lite/core/results.py)</code> |
| anything unmapped | <code>[RawError](mailer_lite/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def show_webhook_by_id(webhook_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
    response = client.show_webhook_by_id(1)
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShowWebhookByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.show_webhook_by_id(1)
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShowWebhookByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>int</code> | The id of the webhook to retrieve |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](mailer_lite/models/webhook.py)</code> -- Expected response to a valid request

**OnError**: <code>[ApiError](mailer_lite/core/exceptions.py)&#91;[ShowWebhookByIdErrorBody](mailer_lite/errors/show_webhook_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](mailer_lite/core/results.py)</code> |
| anything unmapped | <code>[RawError](mailer_lite/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(webhook_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.update_webhook(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
```

**Async**

```python
try:
    await async_client.update_webhook(1)
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
| <code>webhook_id</code> | <code>int</code> | The id of the webhook to update |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](mailer_lite/core/exceptions.py)&#91;[UpdateWebhookErrorBody](mailer_lite/errors/update_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](mailer_lite/core/results.py)</code> |
| anything unmapped | <code>[RawError](mailer_lite/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

