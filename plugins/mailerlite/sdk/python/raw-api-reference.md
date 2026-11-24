# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [MailerLiteClient](mailer_lite/client.py)

<details>
<summary><code>def create_webhook(*, limit: int | None = 100, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.with_raw_response.create_webhook()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.create_webhook()
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
| <code>limit</code> | <code>int \| None</code> | max records to return<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | number of items to skip<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mailer_lite/core/results.py)&#91;None, [RawError](mailer_lite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](mailer_lite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(webhook_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteWebhookErrorBody]</code></summary>

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
result = client.with_raw_response.delete_webhook(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.delete_webhook(1)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>webhook_id</code> | <code>int</code> | The id of the webhook to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mailer_lite/core/results.py)&#91;None, [DeleteWebhookErrorBody](mailer_lite/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](mailer_lite/errors/delete_webhook_error.py)</code>

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
<summary><code>def get_count_of_webhooks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.with_raw_response.get_count_of_webhooks()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.get_count_of_webhooks()
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mailer_lite/core/results.py)&#91;None, [RawError](mailer_lite/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](mailer_lite/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_webhooks(body: Webhook | WebhookDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostWebhooksErrorBody]</code></summary>

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
result = client.with_raw_response.post_webhooks(Webhook())
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostWebhooksErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.post_webhooks(Webhook())
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostWebhooksErrorBody
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

**Returns**: <code>[ApiResult](mailer_lite/core/results.py)&#91;None, [PostWebhooksErrorBody](mailer_lite/errors/post_webhooks_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostWebhooksErrorBody](mailer_lite/errors/post_webhooks_error.py)</code>

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
<summary><code>def show_webhook_by_id(webhook_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, ShowWebhookByIdErrorBody]</code></summary>

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
result = client.with_raw_response.show_webhook_by_id(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ShowWebhookByIdErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.show_webhook_by_id(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ShowWebhookByIdErrorBody
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

**Returns**: <code>[ApiResult](mailer_lite/core/results.py)&#91;[Webhook](mailer_lite/models/webhook.py), [ShowWebhookByIdErrorBody](mailer_lite/errors/show_webhook_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](mailer_lite/models/webhook.py)</code> -- Expected response to a valid request

**On `Failure`**: `error` is <code>[ShowWebhookByIdErrorBody](mailer_lite/errors/show_webhook_by_id_error.py)</code>

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
<summary><code>def update_webhook(webhook_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateWebhookErrorBody]</code></summary>

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
result = client.with_raw_response.update_webhook(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.update_webhook(1)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>webhook_id</code> | <code>int</code> | The id of the webhook to update |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailer_lite/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mailer_lite/core/results.py)&#91;None, [UpdateWebhookErrorBody](mailer_lite/errors/update_webhook_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateWebhookErrorBody](mailer_lite/errors/update_webhook_error.py)</code>

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

