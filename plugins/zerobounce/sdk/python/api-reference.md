# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [ZeroBounceClient](zero_bounce/client.py)

<details>
<summary><code>def validate(body: ValidateEmailRequest | ValidateEmailRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ValidateEmailResponse</code></summary>

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
    response = client.validate(ValidateEmailRequest(email="some example string"))
    # TODO: Handle 'response' of type ValidateEmailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.validate(ValidateEmailRequest(email="some example string"))
    # TODO: Handle 'response' of type ValidateEmailResponse
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
| <code>body</code> | <code>[ValidateEmailRequest](zero_bounce/models/validate_email_request.py) \| [ValidateEmailRequestDict](zero_bounce/models/validate_email_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zero_bounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValidateEmailResponse](zero_bounce/models/validate_email_response.py)</code> -- OK

**OnError**: <code>[ApiError](zero_bounce/core/exceptions.py)&#91;[RawError](zero_bounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def validate_batch(body: ValidateBatchRequest | ValidateBatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[ValidateEmailResponse]</code></summary>

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
    response = client.validate_batch(ValidateBatchRequest(api_key="some example string"))
    # TODO: Handle 'response' of type list[ValidateEmailResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.validate_batch(ValidateBatchRequest(api_key="some example string"))
    # TODO: Handle 'response' of type list[ValidateEmailResponse]
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
| <code>body</code> | <code>[ValidateBatchRequest](zero_bounce/models/validate_batch_request.py) \| [ValidateBatchRequestDict](zero_bounce/models/validate_batch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zero_bounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ValidateEmailResponse](zero_bounce/models/validate_email_response.py)&#93;</code> -- OK

**OnError**: <code>[ApiError](zero_bounce/core/exceptions.py)&#91;[RawError](zero_bounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

