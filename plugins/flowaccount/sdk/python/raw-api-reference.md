# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [FlowAccountClient](flow_account/client.py)

## BatchImport

> Source: [BatchImport](flow_account/apis/batch_import.py)

<details>
<summary><code>def batch_import_delete_custom_template(template_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_delete_custom_template(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_delete_custom_template(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>template_id</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_generate_bacth_id_metadata(culture: str, *, file_name: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchImportMetadata, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_generate_bacth_id_metadata("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchImportMetadata
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_generate_bacth_id_metadata(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchImportMetadata
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>file_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[BatchImportMetadata](flow_account/models/batch_import_metadata.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchImportMetadata](flow_account/models/batch_import_metadata.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_get_batch_s3_data(batch_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_get_batch_s3_data(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_get_batch_s3_data(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>batch_id</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_get_custom_template(template_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_get_custom_template(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_get_custom_template(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>template_id</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_get_orgingal_file(batch_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_get_orgingal_file(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_get_orgingal_file(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>batch_id</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_get_presign(culture: str, body: BatchImportPayload | BatchImportPayloadDict, *, id_: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_get_presign("some example string", BatchImportPayload())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_get_presign(
    "some example string", BatchImportPayload()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BatchImportPayload](flow_account/models/batch_import_payload.py) \| [BatchImportPayloadDict](flow_account/models/batch_import_payload.py)</code> | The request body. |
| <code>id_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_mark_viewed(culture: str, body: int, *, user_id: int | None = None, batch_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[bool, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_mark_viewed("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type bool
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_mark_viewed("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type bool
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>int</code> | The request body. |
| <code>user_id</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>batch_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;bool, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>bool</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_query_batch(culture: str, body: str, *, status: BatchImportStatusOrInt | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchStatus, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_query_batch("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchStatus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_query_batch(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchStatus
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>str</code> | The request body. |
| <code>status</code> | <code>[BatchImportStatusOrInt](flow_account/models/enums/batch_import_status.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[BatchStatus](flow_account/models/batch_status.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchStatus](flow_account/models/batch_status.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_query_batch_history(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchHistory, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_query_batch_history("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchHistory
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_query_batch_history("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchHistory
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[BatchHistory](flow_account/models/batch_history.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchHistory](flow_account/models/batch_history.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_retry_simple_documents(culture: str, body: BatchImportRetry | BatchImportRetryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[bool, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_retry_simple_documents(
    "some example string", BatchImportRetry()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type bool
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_retry_simple_documents(
    "some example string", BatchImportRetry()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type bool
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BatchImportRetry](flow_account/models/batch_import_retry.py) \| [BatchImportRetryDict](flow_account/models/batch_import_retry.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;bool, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>bool</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_import_upsert_custom_template(culture: str, body: CustomTemplate | CustomTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.batch_import.with_raw_response.batch_import_upsert_custom_template(
    "some example string", CustomTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.batch_import.with_raw_response.batch_import_upsert_custom_template(
    "some example string", CustomTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CustomTemplate](flow_account/models/custom_template.py) \| [CustomTemplateDict](flow_account/models/custom_template.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BillingNote

> Source: [BillingNote](flow_account/apis/billing_note.py)

<details>
<summary><code>def billing_note_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.billing_note.with_raw_response.billing_note_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.billing_note.with_raw_response.billing_note_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def billing_note_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.billing_note.with_raw_response.billing_note_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.billing_note.with_raw_response.billing_note_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def billing_note_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.billing_note.with_raw_response.billing_note_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.billing_note.with_raw_response.billing_note_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def billing_note_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.billing_note.with_raw_response.billing_note_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.billing_note.with_raw_response.billing_note_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def billing_note_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.billing_note.with_raw_response.billing_note_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.billing_note.with_raw_response.billing_note_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def billing_note_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.billing_note.with_raw_response.billing_note_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.billing_note.with_raw_response.billing_note_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def billing_note_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.billing_note.with_raw_response.billing_note_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.billing_note.with_raw_response.billing_note_edit2(
    1, "some example string", InlineDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def billing_note_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.billing_note.with_raw_response.billing_note_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.billing_note.with_raw_response.billing_note_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def billing_note_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.billing_note.with_raw_response.billing_note_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.billing_note.with_raw_response.billing_note_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CashInvoice

> Source: [CashInvoice](flow_account/apis/cash_invoice.py)

<details>
<summary><code>def cash_invoice_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.cash_invoice.with_raw_response.cash_invoice_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_invoice.with_raw_response.cash_invoice_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cash_invoice_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.cash_invoice.with_raw_response.cash_invoice_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_invoice.with_raw_response.cash_invoice_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cash_invoice_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.cash_invoice.with_raw_response.cash_invoice_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_invoice.with_raw_response.cash_invoice_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cash_invoice_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.cash_invoice.with_raw_response.cash_invoice_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_invoice.with_raw_response.cash_invoice_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cash_invoice_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.cash_invoice.with_raw_response.cash_invoice_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_invoice.with_raw_response.cash_invoice_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cash_invoice_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.cash_invoice.with_raw_response.cash_invoice_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_invoice.with_raw_response.cash_invoice_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cash_invoice_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.cash_invoice.with_raw_response.cash_invoice_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_invoice.with_raw_response.cash_invoice_edit2(
    1, "some example string", InlineDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cash_invoice_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.cash_invoice.with_raw_response.cash_invoice_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_invoice.with_raw_response.cash_invoice_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cash_invoice_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.cash_invoice.with_raw_response.cash_invoice_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_invoice.with_raw_response.cash_invoice_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CompanyCurrency

> Source: [CompanyCurrency](flow_account/apis/company_currency.py)

<details>
<summary><code>def company_currency_get_company_currencies(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.company_currency.with_raw_response.company_currency_get_company_currencies("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.company_currency.with_raw_response.company_currency_get_company_currencies(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def company_currency_get_list(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.company_currency.with_raw_response.company_currency_get_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.company_currency.with_raw_response.company_currency_get_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContactApi

> Source: [ContactApi](flow_account/apis/contact_api.py)

<details>
<summary><code>def contact_create(culture: str, body: ContactResult | ContactResultDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.contact_api.with_raw_response.contact_create("some example string", ContactResult())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contact_api.with_raw_response.contact_create("some example string", ContactResult())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ContactResult](flow_account/models/contact_result.py) \| [ContactResultDict](flow_account/models/contact_result.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contact_get_contact_list(id_: int | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.contact_api.with_raw_response.contact_get_contact_list(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contact_api.with_raw_response.contact_get_contact_list(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contact_get_contact_list2(id_: int | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.contact_api.with_raw_response.contact_get_contact_list2(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contact_api.with_raw_response.contact_get_contact_list2(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contact_remove_contact(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.contact_api.with_raw_response.contact_remove_contact(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contact_api.with_raw_response.contact_remove_contact(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contact_search(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.contact_api.with_raw_response.contact_search("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contact_api.with_raw_response.contact_search("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contact_update(id_: int, culture: str, body: ContactResult | ContactResultDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.contact_api.with_raw_response.contact_update(1, "some example string", ContactResult())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contact_api.with_raw_response.contact_update(1, "some example string", ContactResult())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ContactResult](flow_account/models/contact_result.py) \| [ContactResultDict](flow_account/models/contact_result.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contact_upload_contact_qr_code(contact_id: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.contact_api.with_raw_response.contact_upload_contact_qr_code(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contact_api.with_raw_response.contact_upload_contact_qr_code(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>contact_id</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CreditNote

> Source: [CreditNote](flow_account/apis/credit_note.py)

<details>
<summary><code>def credit_note_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_note_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_note_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_note_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_note_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_note_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_note_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_note_get_cumulative_document_reference_list(culture: str, *, ids: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_get_cumulative_document_reference_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_get_cumulative_document_reference_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>ids</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_note_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def credit_note_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.credit_note.with_raw_response.credit_note_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.credit_note.with_raw_response.credit_note_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DebitNote

> Source: [DebitNote](flow_account/apis/debit_note.py)

<details>
<summary><code>def debit_note_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def debit_note_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def debit_note_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def debit_note_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def debit_note_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def debit_note_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def debit_note_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def debit_note_get_cumulative_document_reference_list(culture: str, *, ids: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_get_cumulative_document_reference_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_get_cumulative_document_reference_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>ids</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def debit_note_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def debit_note_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.debit_note.with_raw_response.debit_note_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.debit_note.with_raw_response.debit_note_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EmployeeApi

> Source: [EmployeeApi](flow_account/apis/employee_api.py)

<details>
<summary><code>def employee_count(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.employee_api.with_raw_response.employee_count()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.employee_api.with_raw_response.employee_count()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def employee_create(body: EmployeeModel | EmployeeModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.employee_api.with_raw_response.employee_create(EmployeeModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.employee_api.with_raw_response.employee_create(EmployeeModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>body</code> | <code>[EmployeeModel](flow_account/models/employee_model.py) \| [EmployeeModelDict](flow_account/models/employee_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def employee_edit(body: EmployeeModel | EmployeeModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.employee_api.with_raw_response.employee_edit(EmployeeModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.employee_api.with_raw_response.employee_edit(EmployeeModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>body</code> | <code>[EmployeeModel](flow_account/models/employee_model.py) \| [EmployeeModelDict](flow_account/models/employee_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def employee_get_by_id(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.employee_api.with_raw_response.employee_get_by_id(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.employee_api.with_raw_response.employee_get_by_id(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def employee_get_list(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.employee_api.with_raw_response.employee_get_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.employee_api.with_raw_response.employee_get_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def employee_remove(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.employee_api.with_raw_response.employee_remove(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.employee_api.with_raw_response.employee_remove(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Expense

> Source: [Expense](flow_account/apis/expense.py)

<details>
<summary><code>def expense_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_change_status_by_key(1, "some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_get_business_categories(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_get_business_categories("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_get_business_categories("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_get_business_categories_without_asset(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_get_business_categories_without_asset("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_get_business_categories_without_asset(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_get_chart_of_accounts(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_get_chart_of_accounts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_get_chart_of_accounts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_get_chart_of_accounts_without_asset(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_get_chart_of_accounts_without_asset("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_get_chart_of_accounts_without_asset("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def expense_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.expense.with_raw_response.expense_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.expense.with_raw_response.expense_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProductCategoryApi

> Source: [ProductCategoryApi](flow_account/apis/product_category_api.py)

<details>
<summary><code>def product_category_create_product_category(culture: str, body: ProductCategory | ProductCategoryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_category_api.with_raw_response.product_category_create_product_category(
    "some example string", ProductCategory()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_category_api.with_raw_response.product_category_create_product_category(
    "some example string", ProductCategory()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ProductCategory](flow_account/models/product_category.py) \| [ProductCategoryDict](flow_account/models/product_category.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def product_category_delete_product_category(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_category_api.with_raw_response.product_category_delete_product_category(
    1, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_category_api.with_raw_response.product_category_delete_product_category(
    1, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def product_category_get_product_category(culture: str, *, current_page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ProductCategory], RawError]</code></summary>

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
result = client.product_category_api.with_raw_response.product_category_get_product_category("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ProductCategory]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_category_api.with_raw_response.product_category_get_product_category(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ProductCategory]
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>current_page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;list&#91;[ProductCategory](flow_account/models/product_category.py)&#93;, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ProductCategory](flow_account/models/product_category.py)&#93;</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def product_category_update_product_category(id_: int, culture: str, body: ProductCategory | ProductCategoryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_category_api.with_raw_response.product_category_update_product_category(
    1, "some example string", ProductCategory()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_category_api.with_raw_response.product_category_update_product_category(
    1, "some example string", ProductCategory()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ProductCategory](flow_account/models/product_category.py) \| [ProductCategoryDict](flow_account/models/product_category.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProductInventory

> Source: [ProductInventory](flow_account/apis/product_inventory.py)

<details>
<summary><code>def product_inventory_adjust(culture: str, body: StockCard | StockCardDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_inventory.with_raw_response.product_inventory_adjust("some example string", StockCard())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_inventory.with_raw_response.product_inventory_adjust(
    "some example string", StockCard()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StockCard](flow_account/models/stock_card.py) \| [StockCardDict](flow_account/models/stock_card.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def product_inventory_delete_product_inventory(id_: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_inventory.with_raw_response.product_inventory_delete_product_inventory(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_inventory.with_raw_response.product_inventory_delete_product_inventory(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def product_inventory_get_list(culture: str, *, id_: int = 0, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_inventory.with_raw_response.product_inventory_get_list("some example string", id_=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_inventory.with_raw_response.product_inventory_get_list("some example string", id_=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>id_</code> | <code>int</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProductUnitApi

> Source: [ProductUnitApi](flow_account/apis/product_unit_api.py)

<details>
<summary><code>def product_unit_create_product_unit(culture: str, body: ProductUnit | ProductUnitDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_unit_api.with_raw_response.product_unit_create_product_unit(
    "some example string", ProductUnit(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_unit_api.with_raw_response.product_unit_create_product_unit(
    "some example string", ProductUnit(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ProductUnit](flow_account/models/product_unit.py) \| [ProductUnitDict](flow_account/models/product_unit.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def product_unit_delete_product_unit(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_unit_api.with_raw_response.product_unit_delete_product_unit(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_unit_api.with_raw_response.product_unit_delete_product_unit(
    1, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def product_unit_get_product_unit_list(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_unit_api.with_raw_response.product_unit_get_product_unit_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_unit_api.with_raw_response.product_unit_get_product_unit_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def product_unit_update_product_unit(id_: int, culture: str, body: ProductUnit | ProductUnitDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.product_unit_api.with_raw_response.product_unit_update_product_unit(
    1, "some example string", ProductUnit(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.product_unit_api.with_raw_response.product_unit_update_product_unit(
    1, "some example string", ProductUnit(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ProductUnit](flow_account/models/product_unit.py) \| [ProductUnitDict](flow_account/models/product_unit.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](flow_account/apis/products.py)

<details>
<summary><code>def products_create(culture: str, body: ProductResult | ProductResultDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]</code></summary>

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
result = client.products.with_raw_response.products_create("some example string", ProductResult())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.products_create("some example string", ProductResult())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ProductResult](flow_account/models/product_result.py) \| [ProductResultDict](flow_account/models/product_result.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def products_get_by_id(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]</code></summary>

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
result = client.products.with_raw_response.products_get_by_id(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.products_get_by_id(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def products_get_list(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, id_: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]</code></summary>

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
result = client.products.with_raw_response.products_get_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.products_get_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>id_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def products_remove(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiResponseOfBoolean, RawError]</code></summary>

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
result = client.products.with_raw_response.products_remove(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfBoolean
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.products_remove(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfBoolean
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[ApiResponseOfBoolean](flow_account/models/api_response_of_boolean.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiResponseOfBoolean](flow_account/models/api_response_of_boolean.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def products_search(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]</code></summary>

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
result = client.products.with_raw_response.products_search("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.products_search("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def products_update(id_: int, culture: str, body: ProductResult | ProductResultDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]</code></summary>

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
result = client.products.with_raw_response.products_update(1, "some example string", ProductResult())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.products_update(1, "some example string", ProductResult())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiResponseOfISimpleListResultOfIProductResult
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ProductResult](flow_account/models/product_result.py) \| [ProductResultDict](flow_account/models/product_result.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiResponseOfISimpleListResultOfIProductResult](flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Purchase

> Source: [Purchase](flow_account/apis/purchase.py)

<details>
<summary><code>def purchase_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase.with_raw_response.purchase_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase.with_raw_response.purchase_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.purchase.with_raw_response.purchase_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase.with_raw_response.purchase_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.purchase.with_raw_response.purchase_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase.with_raw_response.purchase_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase.with_raw_response.purchase_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase.with_raw_response.purchase_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase.with_raw_response.purchase_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase.with_raw_response.purchase_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase.with_raw_response.purchase_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase.with_raw_response.purchase_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase.with_raw_response.purchase_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase.with_raw_response.purchase_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase.with_raw_response.purchase_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase.with_raw_response.purchase_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase.with_raw_response.purchase_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase.with_raw_response.purchase_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseOrder

> Source: [PurchaseOrder](flow_account/apis/purchase_order.py)

<details>
<summary><code>def purchase_order_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase_order.with_raw_response.purchase_order_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase_order.with_raw_response.purchase_order_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_order_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.purchase_order.with_raw_response.purchase_order_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase_order.with_raw_response.purchase_order_create(
    "some example string", SimpleDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_order_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.purchase_order.with_raw_response.purchase_order_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase_order.with_raw_response.purchase_order_create2(
    "some example string", InlineDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_order_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase_order.with_raw_response.purchase_order_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase_order.with_raw_response.purchase_order_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_order_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase_order.with_raw_response.purchase_order_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase_order.with_raw_response.purchase_order_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_order_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase_order.with_raw_response.purchase_order_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase_order.with_raw_response.purchase_order_edit(
    1, "some example string", SimpleDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_order_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase_order.with_raw_response.purchase_order_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase_order.with_raw_response.purchase_order_edit2(
    1, "some example string", InlineDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_order_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase_order.with_raw_response.purchase_order_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase_order.with_raw_response.purchase_order_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_order_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.purchase_order.with_raw_response.purchase_order_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.purchase_order.with_raw_response.purchase_order_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Quotation

> Source: [Quotation](flow_account/apis/quotation.py)

<details>
<summary><code>def quotation_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_create_partial_manual_payall(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_create_partial_manual_payall(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_create_partial_manual_payall(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_partial_manual_cancel(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_partial_manual_cancel(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_partial_manual_cancel(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def quotation_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.quotation.with_raw_response.quotation_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quotation.with_raw_response.quotation_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Receipt

> Source: [Receipt](flow_account/apis/receipt.py)

<details>
<summary><code>def receipt_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_change_status_by_key(1, "some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_get_business_categories(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_get_business_categories("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_get_business_categories("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_get_chart_of_accounts(culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_get_chart_of_accounts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_get_chart_of_accounts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receipt_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receipt.with_raw_response.receipt_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receipt.with_raw_response.receipt_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ReceivableInvoiceApi

> Source: [ReceivableInvoiceApi](flow_account/apis/receivable_invoice_api.py)

<details>
<summary><code>def receivable_invoice_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receivable_invoice_api.with_raw_response.receivable_invoice_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receivable_invoice_api.with_raw_response.receivable_invoice_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receivable_invoice_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.receivable_invoice_api.with_raw_response.receivable_invoice_create(
    "some example string", SimpleDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receivable_invoice_api.with_raw_response.receivable_invoice_create(
    "some example string", SimpleDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receivable_invoice_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.receivable_invoice_api.with_raw_response.receivable_invoice_create2(
    "some example string", InlineDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receivable_invoice_api.with_raw_response.receivable_invoice_create2(
    "some example string", InlineDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receivable_invoice_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receivable_invoice_api.with_raw_response.receivable_invoice_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receivable_invoice_api.with_raw_response.receivable_invoice_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receivable_invoice_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receivable_invoice_api.with_raw_response.receivable_invoice_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receivable_invoice_api.with_raw_response.receivable_invoice_details(
    1, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receivable_invoice_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receivable_invoice_api.with_raw_response.receivable_invoice_edit(
    1, "some example string", SimpleDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receivable_invoice_api.with_raw_response.receivable_invoice_edit(
    1, "some example string", SimpleDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receivable_invoice_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receivable_invoice_api.with_raw_response.receivable_invoice_edit2(
    1, "some example string", InlineDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receivable_invoice_api.with_raw_response.receivable_invoice_edit2(
    1, "some example string", InlineDocument()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receivable_invoice_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receivable_invoice_api.with_raw_response.receivable_invoice_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receivable_invoice_api.with_raw_response.receivable_invoice_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receivable_invoice_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.receivable_invoice_api.with_raw_response.receivable_invoice_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.receivable_invoice_api.with_raw_response.receivable_invoice_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TaxInvoice

> Source: [TaxInvoice](flow_account/apis/tax_invoice.py)

<details>
<summary><code>def tax_invoice_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_change_status_by_key(
    1, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>document_id</code> | <code>int</code> | Value sent with the request. |
| <code>status_key</code> | <code>str \| None</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_invoice_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_create("some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_invoice_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageSent, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_create2("some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageSent
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;[MessageSent](flow_account/models/message_sent.py), [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageSent](flow_account/models/message_sent.py)</code>

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_invoice_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_delete(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_invoice_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_details(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Sql DocumentId |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_invoice_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_edit(1, "some example string", SimpleDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SimpleDocument](flow_account/models/simple_document.py) \| [SimpleDocumentDict](flow_account/models/simple_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_invoice_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_edit2(1, "some example string", InlineDocument())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InlineDocument](flow_account/models/inline_document.py) \| [InlineDocumentDict](flow_account/models/inline_document.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_invoice_get_cumulative_document_reference_list(culture: str, *, ids: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_get_cumulative_document_reference_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_get_cumulative_document_reference_list(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>ids</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_invoice_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_index("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>sort_by</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search_string</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>custom_document_models</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>range_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_invoice_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, RawError]</code></summary>

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
result = client.tax_invoice.with_raw_response.tax_invoice_receive_payment(1, "some example string", PaymentModel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tax_invoice.with_raw_response.tax_invoice_receive_payment(
    1, "some example string", PaymentModel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
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
| <code>id_</code> | <code>int</code> | Value sent with the request. |
| <code>culture</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PaymentModel](flow_account/models/payment_model.py) \| [PaymentModelDict](flow_account/models/payment_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](flow_account/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](flow_account/core/results.py)&#91;FileResponse, [RawError](flow_account/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read

**On `Failure`**: `error` is <code>[RawError](flow_account/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

