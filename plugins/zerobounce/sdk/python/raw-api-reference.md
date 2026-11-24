# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ZeroBounceClient](zero_bounce/client.py)

<details>
<summary><code>def validate(body: ValidateEmailRequest | ValidateEmailRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValidateEmailResponse, RawError]</code></summary>

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
result = client.with_raw_response.validate(ValidateEmailRequest(email="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValidateEmailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.validate(ValidateEmailRequest(email="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValidateEmailResponse
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
| <code>body</code> | <code>[ValidateEmailRequest](zero_bounce/models/validate_email_request.py) \| [ValidateEmailRequestDict](zero_bounce/models/validate_email_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zero_bounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zero_bounce/core/results.py)&#91;[ValidateEmailResponse](zero_bounce/models/validate_email_response.py), [RawError](zero_bounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValidateEmailResponse](zero_bounce/models/validate_email_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](zero_bounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def validate_batch(body: ValidateBatchRequest | ValidateBatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ValidateEmailResponse], RawError]</code></summary>

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
result = client.with_raw_response.validate_batch(ValidateBatchRequest(api_key="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ValidateEmailResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.validate_batch(ValidateBatchRequest(api_key="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ValidateEmailResponse]
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
| <code>body</code> | <code>[ValidateBatchRequest](zero_bounce/models/validate_batch_request.py) \| [ValidateBatchRequestDict](zero_bounce/models/validate_batch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zero_bounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zero_bounce/core/results.py)&#91;list&#91;[ValidateEmailResponse](zero_bounce/models/validate_email_response.py)&#93;, [RawError](zero_bounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ValidateEmailResponse](zero_bounce/models/validate_email_response.py)&#93;</code> -- OK

**On `Failure`**: `error` is <code>[RawError](zero_bounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

