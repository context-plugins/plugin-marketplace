# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [PaidClient](paid/client.py)

## Agents

> Source: [Agents](paid/apis/agents.py)

<details>
<summary><code>def create(authorization: str, *, body: AgentCreate | AgentCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Agent, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use POST /products instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.agents.with_raw_response.create("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents.with_raw_response.create("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[AgentCreate](paid/models/agent_create.py) \| [AgentCreateDict](paid/models/agent_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Agent](paid/models/agent.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Agent](paid/models/agent.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete(agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use DELETE /products/{productId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.agents.with_raw_response.delete("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents.with_raw_response.delete("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>agent_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use DELETE /products/external/{externalId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.agents.with_raw_response.delete_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents.with_raw_response.delete_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get(agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Agent, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use GET /products/{productId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.agents.with_raw_response.get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents.with_raw_response.get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
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
| <code>agent_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Agent](paid/models/agent.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Agent](paid/models/agent.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Agent, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use GET /products/external/{externalId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.agents.with_raw_response.get_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents.with_raw_response.get_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Agent](paid/models/agent.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Agent](paid/models/agent.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Agent], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use /products instead. Agents are now products with type='agent'.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.agents.with_raw_response.list_("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Agent]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents.with_raw_response.list_("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Agent]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;list&#91;[Agent](paid/models/agent.py)&#93;, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Agent](paid/models/agent.py)&#93;</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update(agent_id: str, authorization: str, *, body: AgentUpdate | AgentUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Agent, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use PUT /products/{productId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.agents.with_raw_response.update("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents.with_raw_response.update("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
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
| <code>agent_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[AgentUpdate](paid/models/agent_update.py) \| [AgentUpdateDict](paid/models/agent_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Agent](paid/models/agent.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Agent](paid/models/agent.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_by_external_id(external_id: str, authorization: str, *, body: AgentUpdate | AgentUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Agent, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use PUT /products/external/{externalId} instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.agents.with_raw_response.update_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.agents.with_raw_response.update_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Agent
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[AgentUpdate](paid/models/agent_update.py) \| [AgentUpdateDict](paid/models/agent_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Agent](paid/models/agent.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Agent](paid/models/agent.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Checkouts

> Source: [Checkouts](paid/apis/checkouts.py)

<details>
<summary><code>def archive_checkout(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, ArchiveCheckoutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a checkout by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checkouts.with_raw_response.archive_checkout("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArchiveCheckoutErrorBody
```

**Async**

```python
result = await async_client.checkouts.with_raw_response.archive_checkout("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArchiveCheckoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [ArchiveCheckoutErrorBody](paid/errors/archive_checkout_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- 200

**On `Failure`**: `error` is <code>[ArchiveCheckoutErrorBody](paid/errors/archive_checkout_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_checkout(authorization: str, *, body: CreateCheckoutRequest | CreateCheckoutRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Checkout, CreateCheckoutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a checkout link that generates a URL for a customer to complete a purchase

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checkouts.with_raw_response.create_checkout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Checkout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCheckoutErrorBody
```

**Async**

```python
result = await async_client.checkouts.with_raw_response.create_checkout("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Checkout
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCheckoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreateCheckoutRequest](paid/models/create_checkout_request.py) \| [CreateCheckoutRequestDict](paid/models/create_checkout_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Checkout](paid/models/checkout.py), [CreateCheckoutErrorBody](paid/errors/create_checkout_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Checkout](paid/models/checkout.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateCheckoutErrorBody](paid/errors/create_checkout_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_checkout(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckoutDetails, GetCheckoutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a checkout by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checkouts.with_raw_response.get_checkout("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutDetails
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCheckoutErrorBody
```

**Async**

```python
result = await async_client.checkouts.with_raw_response.get_checkout("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutDetails
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCheckoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CheckoutDetails](paid/models/checkout_details.py), [GetCheckoutErrorBody](paid/errors/get_checkout_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckoutDetails](paid/models/checkout_details.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCheckoutErrorBody](paid/errors/get_checkout_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_checkouts(authorization: str, *, limit: int | None = 10, offset: int | None = None, status: CheckoutsGetParametersStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckoutListResponse, ListCheckoutsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of checkouts for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checkouts.with_raw_response.list_checkouts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCheckoutsErrorBody
```

**Async**

```python
result = await async_client.checkouts.with_raw_response.list_checkouts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCheckoutsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[CheckoutsGetParametersStatusOrStr](paid/models/enums/checkouts_get_parameters_status.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CheckoutListResponse](paid/models/checkout_list_response.py), [ListCheckoutsErrorBody](paid/errors/list_checkouts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckoutListResponse](paid/models/checkout_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListCheckoutsErrorBody](paid/errors/list_checkouts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Contacts

> Source: [Contacts](paid/apis/contacts.py)

<details>
<summary><code>def create_contact(authorization: str, *, body: CreateContactRequest | CreateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact1, CreateContactErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new contact for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contacts.with_raw_response.create_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContactErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.create_contact("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreateContactRequest](paid/models/create_contact_request.py) \| [CreateContactRequestDict](paid/models/create_contact_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Contact1](paid/models/contact1.py), [CreateContactErrorBody](paid/errors/create_contact_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact1](paid/models/contact1.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateContactErrorBody](paid/errors/create_contact_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create2(authorization: str, *, body: ContactCreate | ContactCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact, RawError]</code></summary>

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
result = client.contacts.with_raw_response.create2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.create2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[ContactCreate](paid/models/contact_create.py) \| [ContactCreateDict](paid/models/contact_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Contact](paid/models/contact.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact](paid/models/contact.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_by_external_id2(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.contacts.with_raw_response.delete_by_external_id2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.delete_by_external_id2(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_contact_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteContactByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a contact by its ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contacts.with_raw_response.delete_contact_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContactByIdErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.delete_contact_by_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContactByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [DeleteContactByIdErrorBody](paid/errors/delete_contact_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- 200

**On `Failure`**: `error` is <code>[DeleteContactByIdErrorBody](paid/errors/delete_contact_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete2(contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.contacts.with_raw_response.delete2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.delete2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>contact_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_external_id2(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact, RawError]</code></summary>

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
result = client.contacts.with_raw_response.get_by_external_id2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.get_by_external_id2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Contact](paid/models/contact.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact](paid/models/contact.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact1, GetContactByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a contact by its ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contacts.with_raw_response.get_contact_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContactByIdErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.get_contact_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContactByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Contact1](paid/models/contact1.py), [GetContactByIdErrorBody](paid/errors/get_contact_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact1](paid/models/contact1.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetContactByIdErrorBody](paid/errors/get_contact_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get2(contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact, RawError]</code></summary>

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
result = client.contacts.with_raw_response.get2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.get2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact
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
| <code>contact_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Contact](paid/models/contact.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact](paid/models/contact.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contacts(authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContactListResponse, ListContactsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of contacts for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contacts.with_raw_response.list_contacts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContactsErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.list_contacts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContactListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ContactListResponse](paid/models/contact_list_response.py), [ListContactsErrorBody](paid/errors/list_contacts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContactListResponse](paid/models/contact_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListContactsErrorBody](paid/errors/list_contacts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list2(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Contact], RawError]</code></summary>

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
result = client.contacts.with_raw_response.list2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Contact]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.contacts.with_raw_response.list2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Contact]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;list&#91;[Contact](paid/models/contact.py)&#93;, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Contact](paid/models/contact.py)&#93;</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contact_by_external_id(external_id: str, authorization: str, *, body: UpdateContactRequest | UpdateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact1, UpdateContactByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a contact by its external ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contacts.with_raw_response.update_contact_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContactByExternalIdErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.update_contact_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContactByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateContactRequest](paid/models/update_contact_request.py) \| [UpdateContactRequestDict](paid/models/update_contact_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Contact1](paid/models/contact1.py), [UpdateContactByExternalIdErrorBody](paid/errors/update_contact_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact1](paid/models/contact1.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateContactByExternalIdErrorBody](paid/errors/update_contact_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contact_by_id(id_: str, authorization: str, *, body: UpdateContactRequest | UpdateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Contact1, UpdateContactByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a contact by its ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.contacts.with_raw_response.update_contact_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContactByIdErrorBody
```

**Async**

```python
result = await async_client.contacts.with_raw_response.update_contact_by_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Contact1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContactByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateContactRequest](paid/models/update_contact_request.py) \| [UpdateContactRequestDict](paid/models/update_contact_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Contact1](paid/models/contact1.py), [UpdateContactByIdErrorBody](paid/errors/update_contact_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Contact1](paid/models/contact1.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateContactByIdErrorBody](paid/errors/update_contact_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Costs

> Source: [Costs](paid/apis/costs.py)

<details>
<summary><code>def create_costs(authorization: str, *, body: CostIngestRequest | CostIngestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CostIngestResponse, CreateCostsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ingests a batch of cost records. Each record is either a pre-computed `cost` (caller supplies amount + currency) or a `usage` record (caller supplies vendor/model/token counts and Paid prices it server-side). The batch is all-or-nothing: if any record fails validation, the entire request is rejected with a 400 and nothing is persisted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.costs.with_raw_response.create_costs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CostIngestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCostsErrorBody
```

**Async**

```python
result = await async_client.costs.with_raw_response.create_costs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CostIngestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCostsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CostIngestRequest](paid/models/cost_ingest_request.py) \| [CostIngestRequestDict](paid/models/cost_ingest_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CostIngestResponse](paid/models/cost_ingest_response.py), [CreateCostsErrorBody](paid/errors/create_costs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CostIngestResponse](paid/models/cost_ingest_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[CreateCostsErrorBody](paid/errors/create_costs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Credits

> Source: [Credits](paid/apis/credits.py)

<details>
<summary><code>def create_credit_currency(authorization: str, *, body: CreateCreditCurrencyRequest | CreateCreditCurrencyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreditCurrency, CreateCreditCurrencyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a credit currency for the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.credits.with_raw_response.create_credit_currency("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditCurrency
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCreditCurrencyErrorBody
```

**Async**

```python
result = await async_client.credits.with_raw_response.create_credit_currency("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditCurrency
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCreditCurrencyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreateCreditCurrencyRequest](paid/models/create_credit_currency_request.py) \| [CreateCreditCurrencyRequestDict](paid/models/create_credit_currency_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CreditCurrency](paid/models/credit_currency.py), [CreateCreditCurrencyErrorBody](paid/errors/create_credit_currency_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreditCurrency](paid/models/credit_currency.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateCreditCurrencyErrorBody](paid/errors/create_credit_currency_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_credit_currencies(authorization: str, *, status: CreditsCurrenciesGetParametersStatusOrStr | None = CreditsCurrenciesGetParametersStatus.ALL, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreditCurrencyListResponse, ListCreditCurrenciesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List credit currencies for the organization. Includes active and archived currencies by default; use the status query parameter to filter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.credits.with_raw_response.list_credit_currencies("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditCurrencyListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCreditCurrenciesErrorBody
```

**Async**

```python
result = await async_client.credits.with_raw_response.list_credit_currencies("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditCurrencyListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCreditCurrenciesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>status</code> | <code>[CreditsCurrenciesGetParametersStatusOrStr](paid/models/enums/credits_currencies_get_parameters_status.py) \| None</code> | Filter credit currencies by status. Defaults to `all` so archived currencies remain readable after they are archived.<br>**Default**: <code>CreditsCurrenciesGetParametersStatus.ALL</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CreditCurrencyListResponse](paid/models/credit_currency_list_response.py), [ListCreditCurrenciesErrorBody](paid/errors/list_credit_currencies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreditCurrencyListResponse](paid/models/credit_currency_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListCreditCurrenciesErrorBody](paid/errors/list_credit_currencies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_credit_currency_by_id(id_: str, authorization: str, *, body: UpdateCreditCurrencyRequest | UpdateCreditCurrencyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreditCurrency, UpdateCreditCurrencyByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a credit currency description or set its active/archive status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.credits.with_raw_response.update_credit_currency_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditCurrency
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCreditCurrencyByIdErrorBody
```

**Async**

```python
result = await async_client.credits.with_raw_response.update_credit_currency_by_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditCurrency
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCreditCurrencyByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Credit currency ID. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateCreditCurrencyRequest](paid/models/update_credit_currency_request.py) \| [UpdateCreditCurrencyRequestDict](paid/models/update_credit_currency_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CreditCurrency](paid/models/credit_currency.py), [UpdateCreditCurrencyByIdErrorBody](paid/errors/update_credit_currency_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreditCurrency](paid/models/credit_currency.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateCreditCurrencyByIdErrorBody](paid/errors/update_credit_currency_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerGroups

> Source: [CustomerGroups](paid/apis/customer_groups.py)

<details>
<summary><code>def create_customer_group(authorization: str, *, body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroupDetail, CreateCustomerGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer group. Names must be unique per org.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.create_customer_group("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.create_customer_group("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreateCustomerGroupRequest](paid/models/create_customer_group_request.py) \| [CreateCustomerGroupRequestDict](paid/models/create_customer_group_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerGroupDetail](paid/models/customer_group_detail.py), [CreateCustomerGroupErrorBody](paid/errors/create_customer_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroupDetail](paid/models/customer_group_detail.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateCustomerGroupErrorBody](paid/errors/create_customer_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_customer_group_members(id_: UUID, authorization: str, *, body: MemberRequest | MemberRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AddMembersResponse, CreateCustomerGroupMembersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Additive. Adds customers to the group without removing existing members.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.create_customer_group_members(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AddMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerGroupMembersErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.create_customer_group_members(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AddMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerGroupMembersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[MemberRequest](paid/models/member_request.py) \| [MemberRequestDict](paid/models/member_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[AddMembersResponse](paid/models/add_members_response.py), [CreateCustomerGroupMembersErrorBody](paid/errors/create_customer_group_members_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AddMembersResponse](paid/models/add_members_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[CreateCustomerGroupMembersErrorBody](paid/errors/create_customer_group_members_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer_group(id_: UUID, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroupDeleteResponse, DeleteCustomerGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the group and unbinds all members. Unbound customers fall back to the base value model config.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.delete_customer_group(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupDeleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.delete_customer_group(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupDeleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerGroupDeleteResponse](paid/models/customer_group_delete_response.py), [DeleteCustomerGroupErrorBody](paid/errors/delete_customer_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroupDeleteResponse](paid/models/customer_group_delete_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[DeleteCustomerGroupErrorBody](paid/errors/delete_customer_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer_group_members(id_: UUID, authorization: str, *, body: MemberRequest | MemberRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RemoveMembersResponse, DeleteCustomerGroupMembersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes specific customers from the group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.delete_customer_group_members(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RemoveMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerGroupMembersErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.delete_customer_group_members(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RemoveMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerGroupMembersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[MemberRequest](paid/models/member_request.py) \| [MemberRequestDict](paid/models/member_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[RemoveMembersResponse](paid/models/remove_members_response.py), [DeleteCustomerGroupMembersErrorBody](paid/errors/delete_customer_group_members_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RemoveMembersResponse](paid/models/remove_members_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[DeleteCustomerGroupMembersErrorBody](paid/errors/delete_customer_group_members_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_group(id_: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroupDetail, GetCustomerGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns group details including member list (capped at 500).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.get_customer_group(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.get_customer_group(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerGroupDetail](paid/models/customer_group_detail.py), [GetCustomerGroupErrorBody](paid/errors/get_customer_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroupDetail](paid/models/customer_group_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCustomerGroupErrorBody](paid/errors/get_customer_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customer_groups(authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroupListResponse, ListCustomerGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all customer groups for the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.list_customer_groups("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerGroupsErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.list_customer_groups("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerGroupListResponse](paid/models/customer_group_list_response.py), [ListCustomerGroupsErrorBody](paid/errors/list_customer_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroupListResponse](paid/models/customer_group_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListCustomerGroupsErrorBody](paid/errors/list_customer_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer_group(id_: UUID, authorization: str, *, body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerGroupDetail, UpdateCustomerGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a customer group's name or description.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.update_customer_group(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerGroupErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.update_customer_group(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerGroupDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateCustomerGroupRequest](paid/models/update_customer_group_request.py) \| [UpdateCustomerGroupRequestDict](paid/models/update_customer_group_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerGroupDetail](paid/models/customer_group_detail.py), [UpdateCustomerGroupErrorBody](paid/errors/update_customer_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerGroupDetail](paid/models/customer_group_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateCustomerGroupErrorBody](paid/errors/update_customer_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer_group_members(id_: UUID, authorization: str, *, body: MemberRequest | MemberRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SetMembersResponse, UpdateCustomerGroupMembersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reconcile membership. The provided list is the complete desired membership. Customers not in the list are removed. Customers in the list but not currently in the group are added.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_groups.with_raw_response.update_customer_group_members(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SetMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerGroupMembersErrorBody
```

**Async**

```python
result = await async_client.customer_groups.with_raw_response.update_customer_group_members(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SetMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerGroupMembersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[MemberRequest](paid/models/member_request.py) \| [MemberRequestDict](paid/models/member_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[SetMembersResponse](paid/models/set_members_response.py), [UpdateCustomerGroupMembersErrorBody](paid/errors/update_customer_group_members_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SetMembersResponse](paid/models/set_members_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateCustomerGroupMembersErrorBody](paid/errors/update_customer_group_members_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](paid/apis/customers.py)

<details>
<summary><code>def check_entitlement(customer_id: str, event_name: str, authorization: str, *, view: CustomersCustomerIdEntitlementGetParametersViewOrStr | None = CustomersCustomerIdEntitlementGetParametersView.ACTIVE_ONLY, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomersCheckEntitlementResponse200, CheckEntitlementErrorBody]</code></summary>

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
result = client.customers.with_raw_response.check_entitlement(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomersCheckEntitlementResponse200
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckEntitlementErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.check_entitlement(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomersCheckEntitlementResponse200
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckEntitlementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | The customer ID |
| <code>event_name</code> | <code>str</code> | The name of the usage event to check entitlement for |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>view</code> | <code>[CustomersCustomerIdEntitlementGetParametersViewOrStr](paid/models/enums/customers_customer_id_entitlement_get_parameters_view.py) \| None</code> | Filter view - 'all' returns all entitlements regardless of status, 'active_only' returns only currently active entitlements with available credits<br>**Default**: <code>CustomersCustomerIdEntitlementGetParametersView.ACTIVE_ONLY</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomersCheckEntitlementResponse200](paid/models/customers_check_entitlement_response200.py), [CheckEntitlementErrorBody](paid/errors/check_entitlement_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomersCheckEntitlementResponse200](paid/models/customers_check_entitlement_response200.py)</code> -- Success response

**On `Failure`**: `error` is <code>[CheckEntitlementErrorBody](paid/errors/check_entitlement_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_customer(authorization: str, *, body: CreateCustomerRequest | CreateCustomerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer1, CreateCustomerErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.create_customer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.create_customer("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreateCustomerRequest](paid/models/create_customer_request.py) \| [CreateCustomerRequestDict](paid/models/create_customer_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Customer1](paid/models/customer1.py), [CreateCustomerErrorBody](paid/errors/create_customer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer1](paid/models/customer1.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateCustomerErrorBody](paid/errors/create_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_customer_alias(id_: str, authorization: str, *, body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerAlias, CreateCustomerAliasErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an alternate external identifier for a customer by Paid display ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.create_customer_alias("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerAlias
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerAliasErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.create_customer_alias(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerAlias
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Paid customer display id |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CustomerAliasCreateRequest](paid/models/customer_alias_create_request.py) \| [CustomerAliasCreateRequestDict](paid/models/customer_alias_create_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerAlias](paid/models/customer_alias.py), [CreateCustomerAliasErrorBody](paid/errors/create_customer_alias_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerAlias](paid/models/customer_alias.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateCustomerAliasErrorBody](paid/errors/create_customer_alias_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_customer_alias_by_external_id(external_id: str, authorization: str, *, body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerAlias, CreateCustomerAliasByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an alternate external identifier for a customer by external ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.create_customer_alias_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerAlias
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerAliasByExternalIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.create_customer_alias_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerAlias
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerAliasByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CustomerAliasCreateRequest](paid/models/customer_alias_create_request.py) \| [CustomerAliasCreateRequestDict](paid/models/customer_alias_create_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerAlias](paid/models/customer_alias.py), [CreateCustomerAliasByExternalIdErrorBody](paid/errors/create_customer_alias_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerAlias](paid/models/customer_alias.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateCustomerAliasByExternalIdErrorBody](paid/errors/create_customer_alias_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_payment_method(external_id: str, authorization: str, *, body: CustomersExternalPaymentMethodsRequest | CustomersExternalPaymentMethodsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentMethod, CreatePaymentMethodErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new payment method for a customer using a Stripe confirmation token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.create_payment_method("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentMethod
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePaymentMethodErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.create_payment_method(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentMethod
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePaymentMethodErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | The external ID of the customer |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[CustomersExternalPaymentMethodsRequest](paid/models/customers_external_payment_methods_request.py) \| [CustomersExternalPaymentMethodsRequestDict](paid/models/customers_external_payment_methods_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[PaymentMethod](paid/models/payment_method.py), [CreatePaymentMethodErrorBody](paid/errors/create_payment_method_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentMethod](paid/models/payment_method.py)</code> -- Payment method created successfully

**On `Failure`**: `error` is <code>[CreatePaymentMethodErrorBody](paid/errors/create_payment_method_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create3(authorization: str, *, body: CustomerCreate | CustomerCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer, RawError]</code></summary>

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
result = client.customers.with_raw_response.create3("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.customers.with_raw_response.create3("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[CustomerCreate](paid/models/customer_create.py) \| [CustomerCreateDict](paid/models/customer_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Customer](paid/models/customer.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer](paid/models/customer.py)</code> -- Success response - customer already exists with this externalId

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_by_external_id3(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.customers.with_raw_response.delete_by_external_id3("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.customers.with_raw_response.delete_by_external_id3(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer_alias(id_: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteCustomerAliasErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an alternate external identifier from a customer by Paid display ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.delete_customer_alias(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerAliasErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.delete_customer_alias(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Paid customer display id |
| <code>alias</code> | <code>str</code> | Customer alias value. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [DeleteCustomerAliasErrorBody](paid/errors/delete_customer_alias_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- 200

**On `Failure`**: `error` is <code>[DeleteCustomerAliasErrorBody](paid/errors/delete_customer_alias_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer_alias_by_external_id(external_id: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteCustomerAliasByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an alternate external identifier from a customer by external ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.delete_customer_alias_by_external_id(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerAliasByExternalIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.delete_customer_alias_by_external_id(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerAliasByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>alias</code> | <code>str</code> | Customer alias value. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [DeleteCustomerAliasByExternalIdErrorBody](paid/errors/delete_customer_alias_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- 200

**On `Failure`**: `error` is <code>[DeleteCustomerAliasByExternalIdErrorBody](paid/errors/delete_customer_alias_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteCustomerByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a customer by Paid display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `DELETE /api/v2/customers/external/{externalId}`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.delete_customer_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerByIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.delete_customer_by_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Paid customer display id |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [DeleteCustomerByIdErrorBody](paid/errors/delete_customer_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- 200

**On `Failure`**: `error` is <code>[DeleteCustomerByIdErrorBody](paid/errors/delete_customer_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_payment_method(external_id: str, payment_method_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeletePaymentMethodErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific payment method from a customer's account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.delete_payment_method(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePaymentMethodErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.delete_payment_method(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePaymentMethodErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | The external ID of the customer |
| <code>payment_method_id</code> | <code>str</code> | The ID of the payment method to delete |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [DeletePaymentMethodErrorBody](paid/errors/delete_payment_method_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Payment method deleted successfully

**On `Failure`**: `error` is <code>[DeletePaymentMethodErrorBody](paid/errors/delete_payment_method_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete3(customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.customers.with_raw_response.delete3("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.customers.with_raw_response.delete3("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_external_id3(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer, RawError]</code></summary>

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
result = client.customers.with_raw_response.get_by_external_id3("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_by_external_id3(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Customer](paid/models/customer.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer](paid/models/customer.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_costs_by_external_id(external_id: str, authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CostTracesResponse, GetCostsByExternalIdErrorBody]</code></summary>

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
result = client.customers.with_raw_response.get_costs_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CostTracesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCostsByExternalIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_costs_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CostTracesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCostsByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | The external ID of the customer |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | Maximum number of traces to return (1-1000)<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | Number of traces to skip for pagination<br>**Default**: <code>0</code> |
| <code>start_time</code> | <code>RFC3339DateTime \| None</code> | Filter traces starting from this time (ISO 8601 format)<br>**Default**: <code>None</code> |
| <code>end_time</code> | <code>RFC3339DateTime \| None</code> | Filter traces up to this time (ISO 8601 format)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CostTracesResponse](paid/models/cost_traces_response.py), [GetCostsByExternalIdErrorBody](paid/errors/get_costs_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CostTracesResponse](paid/models/cost_traces_response.py)</code> -- Success response

**On `Failure`**: `error` is <code>[GetCostsByExternalIdErrorBody](paid/errors/get_costs_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer1, GetCustomerByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a customer by Paid display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `GET /api/v2/customers/external/{externalId}`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.get_customer_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerByIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_customer_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Paid customer display id |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Customer1](paid/models/customer1.py), [GetCustomerByIdErrorBody](paid/errors/get_customer_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer1](paid/models/customer1.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCustomerByIdErrorBody](paid/errors/get_customer_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_credit_balances(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreditBalanceListResponse, GetCustomerCreditBalancesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current customer credit balances grouped by currency for a Paid customer display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `/api/v2/customers/external/{externalId}/credits/balances`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.get_customer_credit_balances("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditBalanceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerCreditBalancesErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_customer_credit_balances(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditBalanceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerCreditBalancesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Paid customer display id |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CreditBalanceListResponse](paid/models/credit_balance_list_response.py), [GetCustomerCreditBalancesErrorBody](paid/errors/get_customer_credit_balances_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreditBalanceListResponse](paid/models/credit_balance_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCustomerCreditBalancesErrorBody](paid/errors/get_customer_credit_balances_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_credit_balances_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreditBalanceListResponse, GetCustomerCreditBalancesByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current customer credit balances grouped by currency, looked up by external ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.get_customer_credit_balances_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditBalanceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerCreditBalancesByExternalIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_customer_credit_balances_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditBalanceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerCreditBalancesByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CreditBalanceListResponse](paid/models/credit_balance_list_response.py), [GetCustomerCreditBalancesByExternalIdErrorBody](paid/errors/get_customer_credit_balances_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreditBalanceListResponse](paid/models/credit_balance_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCustomerCreditBalancesByExternalIdErrorBody](paid/errors/get_customer_credit_balances_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_state_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerState, GetCustomerStateByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Primary integration endpoint for agents and programmatic clients using their own customer IDs. Use the value you stored on `customer.externalId`, for example `customer_123`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.get_customer_state_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerState
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerStateByExternalIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_customer_state_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerState
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerStateByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerState](paid/models/customer_state.py), [GetCustomerStateByExternalIdErrorBody](paid/errors/get_customer_state_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerState](paid/models/customer_state.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCustomerStateByExternalIdErrorBody](paid/errors/get_customer_state_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_state_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerState, GetCustomerStateByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current customer state by Paid display ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.get_customer_state_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerState
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerStateByIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_customer_state_by_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerState
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerStateByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Paid customer display id |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerState](paid/models/customer_state.py), [GetCustomerStateByIdErrorBody](paid/errors/get_customer_state_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerState](paid/models/customer_state.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCustomerStateByIdErrorBody](paid/errors/get_customer_state_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_entitlements(customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[EntitlementUsage], GetEntitlementsErrorBody]</code></summary>

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
result = client.customers.with_raw_response.get_entitlements("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EntitlementUsage]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEntitlementsErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_entitlements("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EntitlementUsage]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEntitlementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | The customer ID |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;list&#91;[EntitlementUsage](paid/models/entitlement_usage.py)&#93;, [GetEntitlementsErrorBody](paid/errors/get_entitlements_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[EntitlementUsage](paid/models/entitlement_usage.py)&#93;</code> -- Success response

**On `Failure`**: `error` is <code>[GetEntitlementsErrorBody](paid/errors/get_entitlements_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_usage_by_external_id(external_id: str, authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsageSummariesResponse, GetUsageByExternalIdErrorBody]</code></summary>

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
result = client.customers.with_raw_response.get_usage_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageSummariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUsageByExternalIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_usage_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageSummariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUsageByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | The external ID of the customer |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | Maximum number of usage summaries to return (1-1000)<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | Number of usage summaries to skip for pagination<br>**Default**: <code>0</code> |
| <code>start_time</code> | <code>RFC3339DateTime \| None</code> | Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that overlap with the time range.<br>**Default**: <code>None</code> |
| <code>end_time</code> | <code>RFC3339DateTime \| None</code> | Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with the time range.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[UsageSummariesResponse](paid/models/usage_summaries_response.py), [GetUsageByExternalIdErrorBody](paid/errors/get_usage_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsageSummariesResponse](paid/models/usage_summaries_response.py)</code> -- Success response

**On `Failure`**: `error` is <code>[GetUsageByExternalIdErrorBody](paid/errors/get_usage_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get3(customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer, RawError]</code></summary>

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
result = client.customers.with_raw_response.get3("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.customers.with_raw_response.get3("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
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
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Customer](paid/models/customer.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer](paid/models/customer.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def grant_customer_credits(id_: str, authorization: str, *, body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GrantCustomerCreditsResponse, GrantCustomerCreditsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Immediately grant credits to a customer using an active credit currency key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.grant_customer_credits("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GrantCustomerCreditsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GrantCustomerCreditsErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.grant_customer_credits(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GrantCustomerCreditsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GrantCustomerCreditsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Paid customer display id |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreditGrantCreateRequest](paid/models/credit_grant_create_request.py) \| [CreditGrantCreateRequestDict](paid/models/credit_grant_create_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[GrantCustomerCreditsResponse](paid/models/grant_customer_credits_response.py), [GrantCustomerCreditsErrorBody](paid/errors/grant_customer_credits_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GrantCustomerCreditsResponse](paid/models/grant_customer_credits_response.py)</code> -- 201

**On `Failure`**: `error` is <code>[GrantCustomerCreditsErrorBody](paid/errors/grant_customer_credits_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def grant_customer_credits_by_external_id(external_id: str, authorization: str, *, body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GrantCustomerCreditsResponse, GrantCustomerCreditsByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Immediately grant credits to a customer looked up by external ID using an active credit currency key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.grant_customer_credits_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GrantCustomerCreditsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GrantCustomerCreditsByExternalIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.grant_customer_credits_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GrantCustomerCreditsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GrantCustomerCreditsByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreditGrantCreateRequest](paid/models/credit_grant_create_request.py) \| [CreditGrantCreateRequestDict](paid/models/credit_grant_create_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[GrantCustomerCreditsResponse](paid/models/grant_customer_credits_response.py), [GrantCustomerCreditsByExternalIdErrorBody](paid/errors/grant_customer_credits_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GrantCustomerCreditsResponse](paid/models/grant_customer_credits_response.py)</code> -- 201

**On `Failure`**: `error` is <code>[GrantCustomerCreditsByExternalIdErrorBody](paid/errors/grant_customer_credits_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customer_aliases(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerAliasListResponse, ListCustomerAliasesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List alternate external identifiers that resolve to a customer by Paid display ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.list_customer_aliases("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerAliasListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerAliasesErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.list_customer_aliases(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerAliasListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerAliasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Paid customer display id |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerAliasListResponse](paid/models/customer_alias_list_response.py), [ListCustomerAliasesErrorBody](paid/errors/list_customer_aliases_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerAliasListResponse](paid/models/customer_alias_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListCustomerAliasesErrorBody](paid/errors/list_customer_aliases_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customer_aliases_by_external_id(external_id: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerAliasListResponse, ListCustomerAliasesByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List alternate external identifiers that resolve to a customer by external ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.list_customer_aliases_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerAliasListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerAliasesByExternalIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.list_customer_aliases_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerAliasListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerAliasesByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | Customer ID from the integrator's system, stored on Paid as `externalId`. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerAliasListResponse](paid/models/customer_alias_list_response.py), [ListCustomerAliasesByExternalIdErrorBody](paid/errors/list_customer_aliases_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerAliasListResponse](paid/models/customer_alias_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListCustomerAliasesByExternalIdErrorBody](paid/errors/list_customer_aliases_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customers(authorization: str, *, limit: int | None = 10, offset: int | None = None, name: str | None = None, status: CustomersGetParametersStatusOrStr | None = None, creation_state: CustomersGetParametersCreationStateOrStr | None = None, created_at_from: str | None = None, created_at_to: str | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerListResponse, ListCustomersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customers for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.list_customers("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomersErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.list_customers("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Search by customer name (case-insensitive, matches anywhere in the name).<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[CustomersGetParametersStatusOrStr](paid/models/enums/customers_get_parameters_status.py) \| None</code> | Filter by customer status. churned: customers marked as churned. active: everyone else.<br>**Default**: <code>None</code> |
| <code>creation_state</code> | <code>[CustomersGetParametersCreationStateOrStr](paid/models/enums/customers_get_parameters_creation_state.py) \| None</code> | Filter by creation state: draft or active.<br>**Default**: <code>None</code> |
| <code>created_at_from</code> | <code>str \| None</code> | Only customers created on or after this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>created_at_to</code> | <code>str \| None</code> | Only customers created on or before this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | Filter by your external customer ID (exact match).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerListResponse](paid/models/customer_list_response.py), [ListCustomersErrorBody](paid/errors/list_customers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerListResponse](paid/models/customer_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListCustomersErrorBody](paid/errors/list_customers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_payment_methods(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[PaymentMethod], ListPaymentMethodsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all payment methods associated with a customer identified by their external ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.list_payment_methods("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PaymentMethod]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPaymentMethodsErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.list_payment_methods(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PaymentMethod]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPaymentMethodsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | The external ID of the customer |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;list&#91;[PaymentMethod](paid/models/payment_method.py)&#93;, [ListPaymentMethodsErrorBody](paid/errors/list_payment_methods_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[PaymentMethod](paid/models/payment_method.py)&#93;</code> -- Success response

**On `Failure`**: `error` is <code>[ListPaymentMethodsErrorBody](paid/errors/list_payment_methods_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list3(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Customer], RawError]</code></summary>

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
result = client.customers.with_raw_response.list3("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Customer]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.customers.with_raw_response.list3("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Customer]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;list&#91;[Customer](paid/models/customer.py)&#93;, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Customer](paid/models/customer.py)&#93;</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_by_external_id2(external_id: str, authorization: str, *, body: CustomerUpdate | CustomerUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer, RawError]</code></summary>

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
result = client.customers.with_raw_response.update_by_external_id2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.customers.with_raw_response.update_by_external_id2(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[CustomerUpdate](paid/models/customer_update.py) \| [CustomerUpdateDict](paid/models/customer_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Customer](paid/models/customer.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer](paid/models/customer.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer_by_id(id_: str, authorization: str, *, body: UpdateCustomerRequest | UpdateCustomerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer1, UpdateCustomerByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a customer by Paid display ID. Use the value returned as `customer.id`, for example `cus_abc123`. If you have your own customer ID, use `PUT /api/v2/customers/external/{externalId}`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.update_customer_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerByIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.update_customer_by_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Paid customer display id |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateCustomerRequest](paid/models/update_customer_request.py) \| [UpdateCustomerRequestDict](paid/models/update_customer_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Customer1](paid/models/customer1.py), [UpdateCustomerByIdErrorBody](paid/errors/update_customer_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer1](paid/models/customer1.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateCustomerByIdErrorBody](paid/errors/update_customer_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update2(customer_id: str, authorization: str, *, body: CustomerUpdate | CustomerUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer, RawError]</code></summary>

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
result = client.customers.with_raw_response.update2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.customers.with_raw_response.update2("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
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
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[CustomerUpdate](paid/models/customer_update.py) \| [CustomerUpdateDict](paid/models/customer_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Customer](paid/models/customer.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer](paid/models/customer.py)</code> -- Customer updated successfully

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upsert_customer_user_by_external_id(customer_external_id: str, user_external_id: str, authorization: str, *, body: UpsertCustomerUserRequest | UpsertCustomerUserRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerUser, UpsertCustomerUserByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or update a customer user using customer and user external IDs

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customers.with_raw_response.upsert_customer_user_by_external_id(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpsertCustomerUserByExternalIdErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.upsert_customer_user_by_external_id(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpsertCustomerUserByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_external_id</code> | <code>str</code> | Value sent with the request. |
| <code>user_external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpsertCustomerUserRequest](paid/models/upsert_customer_user_request.py) \| [UpsertCustomerUserRequestDict](paid/models/upsert_customer_user_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerUser](paid/models/customer_user.py), [UpsertCustomerUserByExternalIdErrorBody](paid/errors/upsert_customer_user_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerUser](paid/models/customer_user.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpsertCustomerUserByExternalIdErrorBody](paid/errors/upsert_customer_user_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](paid/apis/invoices.py)

<details>
<summary><code>def get_invoice_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Invoice, GetInvoiceByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an invoice by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.get_invoice_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInvoiceByIdErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.get_invoice_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInvoiceByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Invoice](paid/models/invoice.py), [GetInvoiceByIdErrorBody](paid/errors/get_invoice_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Invoice](paid/models/invoice.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetInvoiceByIdErrorBody](paid/errors/get_invoice_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_invoice_lines(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InvoiceLinesResponse, GetInvoiceLinesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the invoice lines for an invoice by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.get_invoice_lines("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvoiceLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInvoiceLinesErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.get_invoice_lines("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvoiceLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInvoiceLinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[InvoiceLinesResponse](paid/models/invoice_lines_response.py), [GetInvoiceLinesErrorBody](paid/errors/get_invoice_lines_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InvoiceLinesResponse](paid/models/invoice_lines_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetInvoiceLinesErrorBody](paid/errors/get_invoice_lines_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_invoices(authorization: str, *, limit: int | None = 10, offset: int | None = None, customer_id: str | None = None, external_customer_id: str | None = None, order_id: str | None = None, status: InvoicesGetParametersStatusOrStr | None = None, payment_status: InvoicesGetParametersPaymentStatusOrStr | None = None, issue_date_from: str | None = None, issue_date_to: str | None = None, due_date_from: str | None = None, due_date_to: str | None = None, display_number: str | None = None, purchase_order_reference: str | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InvoiceListResponse, ListInvoicesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of invoices for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.list_invoices("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvoiceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInvoicesErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.list_invoices("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InvoiceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInvoicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>customer_id</code> | <code>str \| None</code> | Filter by customer ID.<br>**Default**: <code>None</code> |
| <code>external_customer_id</code> | <code>str \| None</code> | Filter by customer external ID.<br>**Default**: <code>None</code> |
| <code>order_id</code> | <code>str \| None</code> | Filter by the order this invoice was generated from.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[InvoicesGetParametersStatusOrStr](paid/models/enums/invoices_get_parameters_status.py) \| None</code> | Filter by invoice status.<br>**Default**: <code>None</code> |
| <code>payment_status</code> | <code>[InvoicesGetParametersPaymentStatusOrStr](paid/models/enums/invoices_get_parameters_payment_status.py) \| None</code> | Filter by payment status.<br>**Default**: <code>None</code> |
| <code>issue_date_from</code> | <code>str \| None</code> | Only invoices whose issue date is on or after this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>issue_date_to</code> | <code>str \| None</code> | Only invoices whose issue date is on or before this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>due_date_from</code> | <code>str \| None</code> | Only invoices whose due date is on or after this date. Invoices without a due date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>due_date_to</code> | <code>str \| None</code> | Only invoices whose due date is on or before this date. Invoices without a due date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>display_number</code> | <code>str \| None</code> | Filter by the invoice number shown on the invoice, whether draft or posted (exact match).<br>**Default**: <code>None</code> |
| <code>purchase_order_reference</code> | <code>str \| None</code> | Filter by purchase order reference (exact match, whitespace-sensitive).<br>**Default**: <code>None</code> |
| <code>currency</code> | <code>str \| None</code> | Filter by invoice currency code (case-insensitive, e.g. USD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[InvoiceListResponse](paid/models/invoice_list_response.py), [ListInvoicesErrorBody](paid/errors/list_invoices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InvoiceListResponse](paid/models/invoice_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListInvoicesErrorBody](paid/errors/list_invoices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_invoice_by_id(id_: str, authorization: str, *, body: UpdateInvoiceRequest | UpdateInvoiceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Invoice, UpdateInvoiceByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an invoice by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.invoices.with_raw_response.update_invoice_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateInvoiceByIdErrorBody
```

**Async**

```python
result = await async_client.invoices.with_raw_response.update_invoice_by_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Invoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateInvoiceByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateInvoiceRequest](paid/models/update_invoice_request.py) \| [UpdateInvoiceRequestDict](paid/models/update_invoice_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Invoice](paid/models/invoice.py), [UpdateInvoiceByIdErrorBody](paid/errors/update_invoice_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Invoice](paid/models/invoice.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateInvoiceByIdErrorBody](paid/errors/update_invoice_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](paid/apis/orders.py)

<details>
<summary><code>def activate(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order, RawError]</code></summary>

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
result = client.orders.with_raw_response.activate("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.orders.with_raw_response.activate("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
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
| <code>order_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order](paid/models/order.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order](paid/models/order.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def activate_and_pay(order_id: str, authorization: str, *, body: OrdersActivateAndPayRequest | OrdersActivateAndPayRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order, ActivateAndPayErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the order and processes the initial payment using the provided Stripe confirmation token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.activate_and_pay("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateAndPayErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.activate_and_pay("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateAndPayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The order ID (can be internal ID or display ID) |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[OrdersActivateAndPayRequest](paid/models/orders_activate_and_pay_request.py) \| [OrdersActivateAndPayRequestDict](paid/models/orders_activate_and_pay_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order](paid/models/order.py), [ActivateAndPayErrorBody](paid/errors/activate_and_pay_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order](paid/models/order.py)</code> -- Order activated and payment processed successfully

**On `Failure`**: `error` is <code>[ActivateAndPayErrorBody](paid/errors/activate_and_pay_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def activate_order_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order1, ActivateOrderByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate a draft order by ID. Activation starts billing for the order using the same validation and side effects as the dashboard activation flow.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.activate_order_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateOrderByIdErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.activate_order_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateOrderByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order1](paid/models/order1.py), [ActivateOrderByIdErrorBody](paid/errors/activate_order_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order1](paid/models/order1.py)</code> -- 200

**On `Failure`**: `error` is <code>[ActivateOrderByIdErrorBody](paid/errors/activate_order_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_order_seat_assignments(id_: str, authorization: str, *, body: BatchSeatAssignmentsRequest | BatchSeatAssignmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchSeatAssignmentsResponse, BatchOrderSeatAssignmentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assign or unassign seats in batch for an order

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.batch_order_seat_assignments("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchSeatAssignmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchOrderSeatAssignmentsErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.batch_order_seat_assignments(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchSeatAssignmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchOrderSeatAssignmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[BatchSeatAssignmentsRequest](paid/models/batch_seat_assignments_request.py) \| [BatchSeatAssignmentsRequestDict](paid/models/batch_seat_assignments_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[BatchSeatAssignmentsResponse](paid/models/batch_seat_assignments_response.py), [BatchOrderSeatAssignmentsErrorBody](paid/errors/batch_order_seat_assignments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchSeatAssignmentsResponse](paid/models/batch_seat_assignments_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[BatchOrderSeatAssignmentsErrorBody](paid/errors/batch_order_seat_assignments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_renewal(order_id: str, authorization: str, *, body: CancelRenewalRequest | CancelRenewalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CancelRenewalResponse, CancelRenewalErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules the cancellation of an order's renewal from a specified date. The order will remain active until the cancellation date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.cancel_renewal("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelRenewalResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelRenewalErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.cancel_renewal("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelRenewalResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelRenewalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The order ID (can be internal ID or display ID) |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[CancelRenewalRequest](paid/models/cancel_renewal_request.py) \| [CancelRenewalRequestDict](paid/models/cancel_renewal_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CancelRenewalResponse](paid/models/cancel_renewal_response.py), [CancelRenewalErrorBody](paid/errors/cancel_renewal_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CancelRenewalResponse](paid/models/cancel_renewal_response.py)</code> -- Order renewal cancelled successfully

**On `Failure`**: `error` is <code>[CancelRenewalErrorBody](paid/errors/cancel_renewal_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_order(authorization: str, *, body: CreateOrderRequest | CreateOrderRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order1, CreateOrderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new order for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.create_order("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateOrderErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.create_order("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreateOrderRequest](paid/models/create_order_request.py) \| [CreateOrderRequestDict](paid/models/create_order_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order1](paid/models/order1.py), [CreateOrderErrorBody](paid/errors/create_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order1](paid/models/order1.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateOrderErrorBody](paid/errors/create_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create4(authorization: str, *, body: OrderCreate | OrderCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order, RawError]</code></summary>

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
result = client.orders.with_raw_response.create4("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.orders.with_raw_response.create4("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[OrderCreate](paid/models/order_create.py) \| [OrderCreateDict](paid/models/order_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order](paid/models/order.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order](paid/models/order.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_order_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteOrderByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an order by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.delete_order_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteOrderByIdErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.delete_order_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteOrderByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [DeleteOrderByIdErrorBody](paid/errors/delete_order_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- 200

**On `Failure`**: `error` is <code>[DeleteOrderByIdErrorBody](paid/errors/delete_order_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete4(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.orders.with_raw_response.delete4("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.orders.with_raw_response.delete4("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>order_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_invoices(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[InvoicePaidOrdersApi], GetInvoicesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all invoices associated with a specific order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.get_invoices("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[InvoicePaidOrdersApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInvoicesErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.get_invoices("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[InvoicePaidOrdersApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInvoicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The order ID (can be internal ID or display ID) |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;list&#91;[InvoicePaidOrdersApi](paid/models/invoice_paid_orders_api.py)&#93;, [GetInvoicesErrorBody](paid/errors/get_invoices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[InvoicePaidOrdersApi](paid/models/invoice_paid_orders_api.py)&#93;</code> -- Success response

**On `Failure`**: `error` is <code>[GetInvoicesErrorBody](paid/errors/get_invoices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_order_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order1, GetOrderByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an order by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.get_order_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrderByIdErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.get_order_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrderByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order1](paid/models/order1.py), [GetOrderByIdErrorBody](paid/errors/get_order_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order1](paid/models/order1.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetOrderByIdErrorBody](paid/errors/get_order_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_order_lines(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OrderLinesResponse, GetOrderLinesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the order lines for an order by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.get_order_lines("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrderLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrderLinesErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.get_order_lines("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrderLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrderLinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[OrderLinesResponse](paid/models/order_lines_response.py), [GetOrderLinesErrorBody](paid/errors/get_order_lines_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OrderLinesResponse](paid/models/order_lines_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetOrderLinesErrorBody](paid/errors/get_order_lines_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get4(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order, RawError]</code></summary>

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
result = client.orders.with_raw_response.get4("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.orders.with_raw_response.get4("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
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
| <code>order_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order](paid/models/order.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order](paid/models/order.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_order_seats(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, product_external_id: str | None = None, status: OrdersIdSeatsGetParametersStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OrderSeatListResponse, ListOrderSeatsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List seats for an order

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.list_order_seats("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrderSeatListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOrderSeatsErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.list_order_seats("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrderSeatListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOrderSeatsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>product_external_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[OrdersIdSeatsGetParametersStatusOrStr](paid/models/enums/orders_id_seats_get_parameters_status.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[OrderSeatListResponse](paid/models/order_seat_list_response.py), [ListOrderSeatsErrorBody](paid/errors/list_order_seats_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OrderSeatListResponse](paid/models/order_seat_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListOrderSeatsErrorBody](paid/errors/list_order_seats_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_orders(authorization: str, *, limit: int | None = 10, offset: int | None = None, customer_id: str | None = None, external_customer_id: str | None = None, external_id: str | None = None, creation_state: OrdersGetParametersCreationStateOrStr | None = None, status: OrdersGetParametersStatusOrStr | None = None, start_date_from: str | None = None, start_date_to: str | None = None, end_date_from: str | None = None, end_date_to: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OrderListResponse, ListOrdersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of orders for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.list_orders("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrderListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOrdersErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.list_orders("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrderListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOrdersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>customer_id</code> | <code>str \| None</code> | Filter by customer ID.<br>**Default**: <code>None</code> |
| <code>external_customer_id</code> | <code>str \| None</code> | Filter by customer external ID.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | Filter by the order's external ID (exact match).<br>**Default**: <code>None</code> |
| <code>creation_state</code> | <code>[OrdersGetParametersCreationStateOrStr](paid/models/enums/orders_get_parameters_creation_state.py) \| None</code> | Filter by creation state: draft or active.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[OrdersGetParametersStatusOrStr](paid/models/enums/orders_get_parameters_status.py) \| None</code> | Filter by derived order status. draft: not yet activated. paused: billing is paused. ended: end date is in the past. active: activated, not paused, and not ended.<br>**Default**: <code>None</code> |
| <code>start_date_from</code> | <code>str \| None</code> | Only orders whose start date is on or after this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>start_date_to</code> | <code>str \| None</code> | Only orders whose start date is on or before this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>end_date_from</code> | <code>str \| None</code> | Only orders whose end date is on or after this date. Orders without an end date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>end_date_to</code> | <code>str \| None</code> | Only orders whose end date is on or before this date. Orders without an end date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[OrderListResponse](paid/models/order_list_response.py), [ListOrdersErrorBody](paid/errors/list_orders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OrderListResponse](paid/models/order_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListOrdersErrorBody](paid/errors/list_orders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list4(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Order], RawError]</code></summary>

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
result = client.orders.with_raw_response.list4("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Order]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.orders.with_raw_response.list4("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Order]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;list&#91;[Order](paid/models/order.py)&#93;, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Order](paid/models/order.py)&#93;</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def schedule_plan_change(order_id: str, authorization: str, *, body: ProrationUpgradeRequest | ProrationUpgradeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProrationUpgradeResponse, SchedulePlanChangeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a plan upgrade or downgrade for an order with automatic proration calculation. Credits are applied for the unused portion of the current billing period.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.schedule_plan_change("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProrationUpgradeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SchedulePlanChangeErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.schedule_plan_change("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProrationUpgradeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SchedulePlanChangeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The order ID (can be internal ID or display ID) |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[ProrationUpgradeRequest](paid/models/proration_upgrade_request.py) \| [ProrationUpgradeRequestDict](paid/models/proration_upgrade_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ProrationUpgradeResponse](paid/models/proration_upgrade_response.py), [SchedulePlanChangeErrorBody](paid/errors/schedule_plan_change_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProrationUpgradeResponse](paid/models/proration_upgrade_response.py)</code> -- Plan change scheduled successfully

**On `Failure`**: `error` is <code>[SchedulePlanChangeErrorBody](paid/errors/schedule_plan_change_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_order_by_id(id_: str, authorization: str, *, body: UpdateOrderRequest | UpdateOrderRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order1, UpdateOrderByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an order by ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.update_order_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateOrderByIdErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.update_order_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateOrderByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateOrderRequest](paid/models/update_order_request.py) \| [UpdateOrderRequestDict](paid/models/update_order_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order1](paid/models/order1.py), [UpdateOrderByIdErrorBody](paid/errors/update_order_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order1](paid/models/order1.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateOrderByIdErrorBody](paid/errors/update_order_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_order_seat_assignment(id_: str, seat_id: str, authorization: str, *, body: UpdateSeatAssignmentRequest | UpdateSeatAssignmentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OrderSeat, UpdateOrderSeatAssignmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assign or unassign a single seat on an order

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.orders.with_raw_response.update_order_seat_assignment(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrderSeat
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateOrderSeatAssignmentErrorBody
```

**Async**

```python
result = await async_client.orders.with_raw_response.update_order_seat_assignment(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrderSeat
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateOrderSeatAssignmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>seat_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateSeatAssignmentRequest](paid/models/update_seat_assignment_request.py) \| [UpdateSeatAssignmentRequestDict](paid/models/update_seat_assignment_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[OrderSeat](paid/models/order_seat.py), [UpdateOrderSeatAssignmentErrorBody](paid/errors/update_order_seat_assignment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OrderSeat](paid/models/order_seat.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateOrderSeatAssignmentErrorBody](paid/errors/update_order_seat_assignment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Plans

> Source: [Plans](paid/apis/plans.py)

<details>
<summary><code>def create_plan(authorization: str, *, body: CreatePlanRequest | CreatePlanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan1, CreatePlanErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new plan for a product.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.create_plan("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePlanErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.create_plan("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePlanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreatePlanRequest](paid/models/create_plan_request.py) \| [CreatePlanRequestDict](paid/models/create_plan_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Plan1](paid/models/plan1.py), [CreatePlanErrorBody](paid/errors/create_plan_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Plan1](paid/models/plan1.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreatePlanErrorBody](paid/errors/create_plan_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_id(plan_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan, GetByIdErrorBody]</code></summary>

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
result = client.plans.with_raw_response.get_by_id(UUID("00000000-0000-0000-0000-000000000000"), "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetByIdErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.get_by_id(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plan_id</code> | <code>UUID</code> | The ID of the plan |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Plan](paid/models/plan.py), [GetByIdErrorBody](paid/errors/get_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Plan](paid/models/plan.py)</code> -- Success response

**On `Failure`**: `error` is <code>[GetByIdErrorBody](paid/errors/get_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_current(customer_external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlansGetCurrentResponse200, GetCurrentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the currently active plan subscription for a customer by their external ID. Returns the plan details and subscription information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.get_current("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlansGetCurrentResponse200
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCurrentErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.get_current("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlansGetCurrentResponse200
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCurrentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_external_id</code> | <code>str</code> | The external ID of the customer |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[PlansGetCurrentResponse200](paid/models/plans_get_current_response200.py), [GetCurrentErrorBody](paid/errors/get_current_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlansGetCurrentResponse200](paid/models/plans_get_current_response200.py)</code> -- Success response

**On `Failure`**: `error` is <code>[GetCurrentErrorBody](paid/errors/get_current_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_by_id(plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlanGroup, GetGroupByIdErrorBody]</code></summary>

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
result = client.plans.with_raw_response.get_group_by_id(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlanGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupByIdErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.get_group_by_id(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlanGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plan_group_id</code> | <code>UUID</code> | The ID of the plan group |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[PlanGroup](paid/models/plan_group.py), [GetGroupByIdErrorBody](paid/errors/get_group_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlanGroup](paid/models/plan_group.py)</code> -- Success response

**On `Failure`**: `error` is <code>[GetGroupByIdErrorBody](paid/errors/get_group_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group_plans(plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[PlanWithFeatures], GetGroupPlansErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all plans in a plan group with their features (product-attribute pairs)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.get_group_plans(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PlanWithFeatures]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupPlansErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.get_group_plans(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[PlanWithFeatures]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupPlansErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plan_group_id</code> | <code>UUID</code> | The ID of the plan group |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;list&#91;[PlanWithFeatures](paid/models/plan_with_features.py)&#93;, [GetGroupPlansErrorBody](paid/errors/get_group_plans_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[PlanWithFeatures](paid/models/plan_with_features.py)&#93;</code> -- Success response

**On `Failure`**: `error` is <code>[GetGroupPlansErrorBody](paid/errors/get_group_plans_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_plan_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan1, GetPlanByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a plan by your external plan ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.get_plan_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlanByExternalIdErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.get_plan_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlanByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Plan1](paid/models/plan1.py), [GetPlanByExternalIdErrorBody](paid/errors/get_plan_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Plan1](paid/models/plan1.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetPlanByExternalIdErrorBody](paid/errors/get_plan_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_plan_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan1, GetPlanByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a plan by Paid plan ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.get_plan_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlanByIdErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.get_plan_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPlanByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Plan1](paid/models/plan1.py), [GetPlanByIdErrorBody](paid/errors/get_plan_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Plan1](paid/models/plan1.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetPlanByIdErrorBody](paid/errors/get_plan_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_usage(plan_id: UUID, external_id: str, authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsageSummariesResponse, GetUsageErrorBody]</code></summary>

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
result = client.plans.with_raw_response.get_usage(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageSummariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUsageErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.get_usage(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageSummariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plan_id</code> | <code>UUID</code> | The ID of the plan |
| <code>external_id</code> | <code>str</code> | The external ID of the customer |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | Maximum number of usage summaries to return (1-1000)<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | Number of usage summaries to skip for pagination<br>**Default**: <code>0</code> |
| <code>start_time</code> | <code>RFC3339DateTime \| None</code> | Filter usage summaries starting from this time (ISO 8601 format). Returns summaries that overlap with the time range.<br>**Default**: <code>None</code> |
| <code>end_time</code> | <code>RFC3339DateTime \| None</code> | Filter usage summaries up to this time (ISO 8601 format). Returns summaries that overlap with the time range.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[UsageSummariesResponse](paid/models/usage_summaries_response.py), [GetUsageErrorBody](paid/errors/get_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsageSummariesResponse](paid/models/usage_summaries_response.py)</code> -- Success response

**On `Failure`**: `error` is <code>[GetUsageErrorBody](paid/errors/get_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_plans(authorization: str, *, limit: int | None = 10, offset: int | None = None, product_id: str | None = None, external_product_id: str | None = None, include_archived: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlanListResponse, ListPlansErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns plans for your organization, including archived plans by default, optionally filtered to a product.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.list_plans("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlanListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlansErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.list_plans("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlanListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlansErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>product_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>external_product_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_archived</code> | <code>bool \| None</code> | Whether to include archived plans in the response. Defaults to true.<br>**Default**: <code>True</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[PlanListResponse](paid/models/plan_list_response.py), [ListPlansErrorBody](paid/errors/list_plans_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlanListResponse](paid/models/plan_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListPlansErrorBody](paid/errors/list_plans_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def subscribe(plan_id: UUID, customer_external_id: str, currency: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order, SubscribeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new order for a customer subscribing to a plan. The order will be created with the plan's products and pricing attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.subscribe(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubscribeErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.subscribe(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubscribeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plan_id</code> | <code>UUID</code> | The ID of the plan |
| <code>customer_external_id</code> | <code>str</code> | The external ID of the customer |
| <code>currency</code> | <code>str</code> | The currency code for the order (e.g., "USD", "EUR") |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order](paid/models/order.py), [SubscribeErrorBody](paid/errors/subscribe_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order](paid/models/order.py)</code> -- Customer subscribed to plan successfully

**On `Failure`**: `error` is <code>[SubscribeErrorBody](paid/errors/subscribe_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unsubscribe(plan_id: UUID, customer_external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CancelRenewalResponse, UnsubscribeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the renewal of an active order for a customer's plan subscription. The order will remain active until the cancellation date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.unsubscribe(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelRenewalResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnsubscribeErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.unsubscribe(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelRenewalResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnsubscribeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plan_id</code> | <code>UUID</code> | The ID of the plan |
| <code>customer_external_id</code> | <code>str</code> | The external ID of the customer |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CancelRenewalResponse](paid/models/cancel_renewal_response.py), [UnsubscribeErrorBody](paid/errors/unsubscribe_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CancelRenewalResponse](paid/models/cancel_renewal_response.py)</code> -- Customer unsubscribed from plan successfully

**On `Failure`**: `error` is <code>[UnsubscribeErrorBody](paid/errors/unsubscribe_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_plan_by_external_id(external_id: str, authorization: str, *, body: UpdatePlanRequest | UpdatePlanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan1, UpdatePlanByExternalIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a plan by your external plan ID. If attributes are provided, they replace the plan's existing attributes. Set status to archive or restore the plan.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.update_plan_by_external_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePlanByExternalIdErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.update_plan_by_external_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePlanByExternalIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdatePlanRequest](paid/models/update_plan_request.py) \| [UpdatePlanRequestDict](paid/models/update_plan_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Plan1](paid/models/plan1.py), [UpdatePlanByExternalIdErrorBody](paid/errors/update_plan_by_external_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Plan1](paid/models/plan1.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdatePlanByExternalIdErrorBody](paid/errors/update_plan_by_external_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_plan_by_id(id_: str, authorization: str, *, body: UpdatePlanRequest | UpdatePlanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan1, UpdatePlanByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a plan by Paid plan ID. If attributes are provided, they replace the plan's existing attributes. Set status to archive or restore the plan.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.update_plan_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePlanByIdErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.update_plan_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Plan1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePlanByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdatePlanRequest](paid/models/update_plan_request.py) \| [UpdatePlanRequestDict](paid/models/update_plan_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Plan1](paid/models/plan1.py), [UpdatePlanByIdErrorBody](paid/errors/update_plan_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Plan1](paid/models/plan1.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdatePlanByIdErrorBody](paid/errors/update_plan_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_plan_upgrade_path(authorization: str, *, body: UpdatePlanUpgradePathRequest | UpdatePlanUpgradePathRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PlanUpgradePathResponse, UpdatePlanUpgradePathErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates upgrade path ordering for plans within a product, grouped by billing frequency.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.update_plan_upgrade_path("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlanUpgradePathResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePlanUpgradePathErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.update_plan_upgrade_path("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PlanUpgradePathResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePlanUpgradePathErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdatePlanUpgradePathRequest](paid/models/update_plan_upgrade_path_request.py) \| [UpdatePlanUpgradePathRequestDict](paid/models/update_plan_upgrade_path_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[PlanUpgradePathResponse](paid/models/plan_upgrade_path_response.py), [UpdatePlanUpgradePathErrorBody](paid/errors/update_plan_upgrade_path_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PlanUpgradePathResponse](paid/models/plan_upgrade_path_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdatePlanUpgradePathErrorBody](paid/errors/update_plan_upgrade_path_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upgrade(customer_external_id: str, old_plan_id: UUID, new_plan_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProrationUpgradeResponse, UpgradeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upgrades a customer from one plan to another with automatic proration. Credits are applied for the unused portion of the current billing period, and the order is updated with the new plan's pricing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.plans.with_raw_response.upgrade(
    "some example string",
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProrationUpgradeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpgradeErrorBody
```

**Async**

```python
result = await async_client.plans.with_raw_response.upgrade(
    "some example string",
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProrationUpgradeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpgradeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_external_id</code> | <code>str</code> | The external ID of the customer |
| <code>old_plan_id</code> | <code>UUID</code> | The ID of the current plan |
| <code>new_plan_id</code> | <code>UUID</code> | The ID of the plan to upgrade to |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ProrationUpgradeResponse](paid/models/proration_upgrade_response.py), [UpgradeErrorBody](paid/errors/upgrade_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProrationUpgradeResponse](paid/models/proration_upgrade_response.py)</code> -- Plan upgrade completed successfully

**On `Failure`**: `error` is <code>[UpgradeErrorBody](paid/errors/upgrade_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PricingApi

> Source: [PricingApi](paid/apis/pricing_api.py)

<details>
<summary><code>def get_pricing(product_attribute_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PricingResponse, GetPricingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns pricing and credit benefits for a single product attribute.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.pricing_api.with_raw_response.get_pricing(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PricingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPricingErrorBody
```

**Async**

```python
result = await async_client.pricing_api.with_raw_response.get_pricing(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PricingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPricingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product_attribute_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[PricingResponse](paid/models/pricing_response.py), [GetPricingErrorBody](paid/errors/get_pricing_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PricingResponse](paid/models/pricing_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetPricingErrorBody](paid/errors/get_pricing_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pricing(product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PricingListResponse, ListPricingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns pricing for all product attributes of a product. Each entry includes the attribute's pricing configuration and credit benefits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.pricing_api.with_raw_response.list_pricing("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PricingListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPricingErrorBody
```

**Async**

```python
result = await async_client.pricing_api.with_raw_response.list_pricing("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PricingListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPricingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product_id</code> | <code>str</code> | Product display ID or UUID |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[PricingListResponse](paid/models/pricing_list_response.py), [ListPricingErrorBody](paid/errors/list_pricing_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PricingListResponse](paid/models/pricing_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListPricingErrorBody](paid/errors/list_pricing_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pricing(product_attribute_id: UUID, authorization: str, *, body: UpdatePricingRequest | UpdatePricingRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PricingResponse, UpdatePricingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates pricing on an existing product attribute. If creditBenefits is provided, it fully replaces existing benefits. If omitted, existing benefits are preserved.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.pricing_api.with_raw_response.update_pricing(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PricingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePricingErrorBody
```

**Async**

```python
result = await async_client.pricing_api.with_raw_response.update_pricing(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PricingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePricingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product_attribute_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdatePricingRequest](paid/models/update_pricing_request.py) \| [UpdatePricingRequestDict](paid/models/update_pricing_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[PricingResponse](paid/models/pricing_response.py), [UpdatePricingErrorBody](paid/errors/update_pricing_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PricingResponse](paid/models/pricing_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdatePricingErrorBody](paid/errors/update_pricing_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](paid/apis/products.py)

<details>
<summary><code>def create_product(authorization: str, *, body: CreateProductRequest | CreateProductRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Product1, CreateProductErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new product for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.products.with_raw_response.create_product("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProductErrorBody
```

**Async**

```python
result = await async_client.products.with_raw_response.create_product("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProductErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreateProductRequest](paid/models/create_product_request.py) \| [CreateProductRequestDict](paid/models/create_product_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Product1](paid/models/product1.py), [CreateProductErrorBody](paid/errors/create_product_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Product1](paid/models/product1.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateProductErrorBody](paid/errors/create_product_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create5(authorization: str, *, body: ProductCreate | ProductCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Product, RawError]</code></summary>

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
result = client.products.with_raw_response.create5("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.create5("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[ProductCreate](paid/models/product_create.py) \| [ProductCreateDict](paid/models/product_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Product](paid/models/product.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Product](paid/models/product.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_by_external_id4(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.products.with_raw_response.delete_by_external_id4("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.delete_by_external_id4(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete5(product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.products.with_raw_response.delete5("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.delete5("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>product_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_external_id4(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Product, RawError]</code></summary>

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
result = client.products.with_raw_response.get_by_external_id4("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.get_by_external_id4("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Product](paid/models/product.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Product](paid/models/product.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_product_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProductDetail, GetProductByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a product by ID, including its product attributes with pricing details

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.products.with_raw_response.get_product_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProductByIdErrorBody
```

**Async**

```python
result = await async_client.products.with_raw_response.get_product_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProductByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ProductDetail](paid/models/product_detail.py), [GetProductByIdErrorBody](paid/errors/get_product_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProductDetail](paid/models/product_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetProductByIdErrorBody](paid/errors/get_product_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get5(product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Product, RawError]</code></summary>

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
result = client.products.with_raw_response.get5("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.get5("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
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
| <code>product_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Product](paid/models/product.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Product](paid/models/product.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_products(authorization: str, *, limit: int | None = 10, offset: int | None = None, name: str | None = None, active: bool | None = None, archived: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProductListResponse, ListProductsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of products for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.products.with_raw_response.list_products("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProductsErrorBody
```

**Async**

```python
result = await async_client.products.with_raw_response.list_products("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProductsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Search by product name (case-insensitive, matches anywhere in the name).<br>**Default**: <code>None</code> |
| <code>active</code> | <code>bool \| None</code> | Filter by the product's active flag: true or false.<br>**Default**: <code>None</code> |
| <code>archived</code> | <code>bool \| None</code> | Filter by archived state: true returns only archived products, false only non-archived. Omit to include both.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ProductListResponse](paid/models/product_list_response.py), [ListProductsErrorBody](paid/errors/list_products_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProductListResponse](paid/models/product_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListProductsErrorBody](paid/errors/list_products_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list5(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Product], RawError]</code></summary>

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
result = client.products.with_raw_response.list5("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Product]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.list5("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Product]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;list&#91;[Product](paid/models/product.py)&#93;, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Product](paid/models/product.py)&#93;</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_by_external_id3(external_id: str, authorization: str, *, body: ProductUpdate | ProductUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Product, RawError]</code></summary>

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
result = client.products.with_raw_response.update_by_external_id3("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.update_by_external_id3(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[ProductUpdate](paid/models/product_update.py) \| [ProductUpdateDict](paid/models/product_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Product](paid/models/product.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Product](paid/models/product.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_product_by_id(id_: str, authorization: str, *, body: UpdateProductRequest | UpdateProductRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProductDetail, UpdateProductByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a product by ID. Optionally upsert product attributes with pricing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.products.with_raw_response.update_product_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProductByIdErrorBody
```

**Async**

```python
result = await async_client.products.with_raw_response.update_product_by_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProductDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProductByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateProductRequest](paid/models/update_product_request.py) \| [UpdateProductRequestDict](paid/models/update_product_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ProductDetail](paid/models/product_detail.py), [UpdateProductByIdErrorBody](paid/errors/update_product_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProductDetail](paid/models/product_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateProductByIdErrorBody](paid/errors/update_product_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update4(product_id: str, authorization: str, *, body: ProductUpdate | ProductUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Product, RawError]</code></summary>

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
result = client.products.with_raw_response.update4("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.products.with_raw_response.update4("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Product
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
| <code>product_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[ProductUpdate](paid/models/product_update.py) \| [ProductUpdateDict](paid/models/product_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Product](paid/models/product.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Product](paid/models/product.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Signals

> Source: [Signals](paid/apis/signals.py)

<details>
<summary><code>def create_signals(authorization: str, *, body: BulkSignalsRequest | BulkSignalsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkSignalsResponse, CreateSignalsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple signals (usage events) in a single request. Each signal must include a customer attribution (either customerId or externalCustomerId) and a product attribution (either productId or externalProductId).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.signals.with_raw_response.create_signals("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkSignalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignalsErrorBody
```

**Async**

```python
result = await async_client.signals.with_raw_response.create_signals("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkSignalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSignalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[BulkSignalsRequest](paid/models/bulk_signals_request.py) \| [BulkSignalsRequestDict](paid/models/bulk_signals_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[BulkSignalsResponse](paid/models/bulk_signals_response.py), [CreateSignalsErrorBody](paid/errors/create_signals_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkSignalsResponse](paid/models/bulk_signals_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[CreateSignalsErrorBody](paid/errors/create_signals_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Traces

> Source: [Traces](paid/apis/traces.py)

<details>
<summary><code>def get_traces(authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, external_customer_id: str | None = None, external_product_id: str | None = None, external_agent_id: str | None = None, metadata: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TracesResponse, GetTracesErrorBody]</code></summary>

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
result = client.traces.with_raw_response.get_traces("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TracesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTracesErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_traces("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TracesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTracesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>limit</code> | <code>int \| None</code> | Maximum number of traces to return (1-1000)<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | Number of traces to skip for pagination<br>**Default**: <code>0</code> |
| <code>start_time</code> | <code>RFC3339DateTime \| None</code> | Filter traces starting from this time (ISO 8601 format)<br>**Default**: <code>None</code> |
| <code>end_time</code> | <code>RFC3339DateTime \| None</code> | Filter traces up to this time (ISO 8601 format)<br>**Default**: <code>None</code> |
| <code>external_customer_id</code> | <code>str \| None</code> | Filter traces by external customer ID<br>**Default**: <code>None</code> |
| <code>external_product_id</code> | <code>str \| None</code> | Filter traces by external product ID<br>**Default**: <code>None</code> |
| <code>external_agent_id</code> | <code>str \| None</code> | DEPRECATED: Use externalProductId instead. Filter traces by external agent ID<br>**Default**: <code>None</code> |
| <code>metadata</code> | <code>str \| None</code> | Filter traces by metadata fields. Must be a valid JSON object (e.g., {"key1":"value1","key2":"value2"}). All specified fields must match (AND logic).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[TracesResponse](paid/models/traces_response.py), [GetTracesErrorBody](paid/errors/get_traces_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TracesResponse](paid/models/traces_response.py)</code> -- Success response

**On `Failure`**: `error` is <code>[GetTracesErrorBody](paid/errors/get_traces_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](paid/apis/usage.py)

<details>
<summary><code>def check_usage(authorization: str, *, body: UsageCheckUsageRequest | UsageCheckUsageRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsageCheckUsageResponse200, CheckUsageErrorBody]</code></summary>

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
result = client.usage.with_raw_response.check_usage("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageCheckUsageResponse200
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckUsageErrorBody
```

**Async**

```python
result = await async_client.usage.with_raw_response.check_usage("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageCheckUsageResponse200
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[UsageCheckUsageRequest](paid/models/usage_check_usage_request.py) \| [UsageCheckUsageRequestDict](paid/models/usage_check_usage_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[UsageCheckUsageResponse200](paid/models/usage_check_usage_response200.py), [CheckUsageErrorBody](paid/errors/check_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsageCheckUsageResponse200](paid/models/usage_check_usage_response200.py)</code> -- Usage check response

**On `Failure`**: `error` is <code>[CheckUsageErrorBody](paid/errors/check_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def record_bulk(authorization: str, *, body: UsageSignalsBulkRequest | UsageSignalsBulkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: Use POST /usage/v2/signals/bulk instead for cleaner field names.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.usage.with_raw_response.record_bulk("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.usage.with_raw_response.record_bulk("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[UsageSignalsBulkRequest](paid/models/usage_signals_bulk_request.py) \| [UsageSignalsBulkRequestDict](paid/models/usage_signals_bulk_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def usage_record_bulk_v_2(authorization: str, *, body: UsageV2SignalsBulkRequest | UsageV2SignalsBulkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, UsageRecordBulkV2ErrorBody]</code></summary>

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
result = client.usage.with_raw_response.usage_record_bulk_v_2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsageRecordBulkV2ErrorBody
```

**Async**

```python
result = await async_client.usage.with_raw_response.usage_record_bulk_v_2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsageRecordBulkV2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[UsageV2SignalsBulkRequest](paid/models/usage_v2_signals_bulk_request.py) \| [UsageV2SignalsBulkRequestDict](paid/models/usage_v2_signals_bulk_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;Any, [UsageRecordBulkV2ErrorBody](paid/errors/usage_record_bulk_v2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success response

**On `Failure`**: `error` is <code>[UsageRecordBulkV2ErrorBody](paid/errors/usage_record_bulk_v2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409 | <code>[Error](paid/models/error.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](paid/apis/webhooks_api.py)

<details>
<summary><code>def list_webhooks(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookListResponse, ListWebhooksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List customer-facing billing webhooks for the authenticated organization, along with whether the organization has generated a signing secret.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.list_webhooks("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_webhooks("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookListResponse
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
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[WebhookListResponse](paid/models/webhook_list_response.py), [ListWebhooksErrorBody](paid/errors/list_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookListResponse](paid/models/webhook_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListWebhooksErrorBody](paid/errors/list_webhooks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rotate_webhook_secret(authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RotateWebhookSecretResponse, RotateWebhookSecretErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new HMAC signing secret used by every webhook in this organization and return it exactly once. The previous secret is invalidated immediately on next delivery.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.rotate_webhook_secret("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RotateWebhookSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotateWebhookSecretErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.rotate_webhook_secret("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RotateWebhookSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotateWebhookSecretErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[RotateWebhookSecretResponse](paid/models/rotate_webhook_secret_response.py), [RotateWebhookSecretErrorBody](paid/errors/rotate_webhook_secret_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RotateWebhookSecretResponse](paid/models/rotate_webhook_secret_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[RotateWebhookSecretErrorBody](paid/errors/rotate_webhook_secret_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def test_webhook(webhook_name: WebhooksWebhookNameTestPostParametersWebhookNameOrStr, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookTestResponse, TestWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a synthetic webhook delivery to the configured destination for this webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.test_webhook(
    WebhooksWebhookNameTestPostParametersWebhookName.BILLING_INVOICE_CREATED, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookTestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.test_webhook(
    WebhooksWebhookNameTestPostParametersWebhookName.BILLING_INVOICE_CREATED, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookTestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_name</code> | <code>[WebhooksWebhookNameTestPostParametersWebhookNameOrStr](paid/models/enums/webhooks_webhook_name_test_post_parameters_webhook_name.py)</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[WebhookTestResponse](paid/models/webhook_test_response.py), [TestWebhookErrorBody](paid/errors/test_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookTestResponse](paid/models/webhook_test_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[TestWebhookErrorBody](paid/errors/test_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(webhook_name: WebhooksWebhookNamePatchParametersWebhookNameOrStr, authorization: str, *, body: UpdateWebhookRequest | UpdateWebhookRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookUpdateResponse, UpdateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable or disable a webhook and configure the destination URL for the authenticated organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.update_webhook(
    WebhooksWebhookNamePatchParametersWebhookName.BILLING_INVOICE_CREATED, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookUpdateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.update_webhook(
    WebhooksWebhookNamePatchParametersWebhookName.BILLING_INVOICE_CREATED, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookUpdateResponse
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
| <code>webhook_name</code> | <code>[WebhooksWebhookNamePatchParametersWebhookNameOrStr](paid/models/enums/webhooks_webhook_name_patch_parameters_webhook_name.py)</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateWebhookRequest](paid/models/update_webhook_request.py) \| [UpdateWebhookRequestDict](paid/models/update_webhook_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[WebhookUpdateResponse](paid/models/webhook_update_response.py), [UpdateWebhookErrorBody](paid/errors/update_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookUpdateResponse](paid/models/webhook_update_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateWebhookErrorBody](paid/errors/update_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AnalyticsExperimental

> Source: [AnalyticsExperimental](paid/apis/analytics_experimental.py)

<details>
<summary><code>def execute_analytics_query(authorization: str, *, body: AnalyticsQueryRequest | AnalyticsQueryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsQueryResponse, ExecuteAnalyticsQueryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Runs a single ClickHouse SELECT (or WITH … SELECT) against your organization's analytics views. Before writing a query, call `getAnalyticsSchema` (GET /schema) for the available views and columns, and `getSignalsMetadata` (GET /signals/metadata) for the JSON paths inside `fact_signal.data`. Results are automatically scoped to your organization — no org filter is needed or possible. Only SELECT/WITH statements are accepted.

Conventions: monetary amounts are minor units (cents — divide by 100 for the major unit); most are integers, but `fact_cost.cost_amount` is fractional cents (Decimal) since a single AI call usually costs less than a cent; 64-bit integers (counts, ids, amounts) are returned as JSON strings to preserve precision, so parse them client-side. Query signal payloads via JSON paths, e.g. `SELECT data.country::String AS country, count() FROM fact_signal GROUP BY country`.

Limits: 30 seconds of execution time and 10,000 result rows (truncation is flagged via `meta.truncated`). Prefer aggregates and a `created_at` date filter on large tables — this endpoint is for interactive analytics, not bulk export.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.analytics_experimental.with_raw_response.execute_analytics_query("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExecuteAnalyticsQueryErrorBody
```

**Async**

```python
result = await async_client.analytics_experimental.with_raw_response.execute_analytics_query("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExecuteAnalyticsQueryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[AnalyticsQueryRequest](paid/models/analytics_query_request.py) \| [AnalyticsQueryRequestDict](paid/models/analytics_query_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[AnalyticsQueryResponse](paid/models/analytics_query_response.py), [ExecuteAnalyticsQueryErrorBody](paid/errors/execute_analytics_query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsQueryResponse](paid/models/analytics_query_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ExecuteAnalyticsQueryErrorBody](paid/errors/execute_analytics_query_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 408, 429, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_analytics_schema(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsSchemaResponse, GetAnalyticsSchemaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Returns the analytics views available to POST /query, with column names, ClickHouse types, and descriptions. Dimensions (`dim_*`) describe entities; facts (`fact_*`) are event/transaction tables that join to dimensions via the `*_id` columns described in each comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.analytics_experimental.with_raw_response.get_analytics_schema("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsSchemaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAnalyticsSchemaErrorBody
```

**Async**

```python
result = await async_client.analytics_experimental.with_raw_response.get_analytics_schema("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsSchemaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAnalyticsSchemaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[AnalyticsSchemaResponse](paid/models/analytics_schema_response.py), [GetAnalyticsSchemaErrorBody](paid/errors/get_analytics_schema_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsSchemaResponse](paid/models/analytics_schema_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetAnalyticsSchemaErrorBody](paid/errors/get_analytics_schema_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signals_metadata(authorization: str, *, signal_name: str | None = None, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SignalsMetadataResponse, GetSignalsMetadataErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Lists the JSON paths (and their observed types) present in the `data` payload of your signals within a time window (default: last 30 days), grouped by signal name. Use the returned paths in queries against `fact_signal`, e.g. `WHERE data.::String = '...'`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.analytics_experimental.with_raw_response.get_signals_metadata("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignalsMetadataResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignalsMetadataErrorBody
```

**Async**

```python
result = await async_client.analytics_experimental.with_raw_response.get_signals_metadata("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SignalsMetadataResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSignalsMetadataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>signal_name</code> | <code>str \| None</code> | Restrict discovery to a single signal name.<br>**Default**: <code>None</code> |
| <code>from_date</code> | <code>RFC3339DateTime \| None</code> | Start of the discovery window. Defaults to 30 days ago.<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>RFC3339DateTime \| None</code> | End of the discovery window. Defaults to now.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[SignalsMetadataResponse](paid/models/signals_metadata_response.py), [GetSignalsMetadataErrorBody](paid/errors/get_signals_metadata_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SignalsMetadataResponse](paid/models/signals_metadata_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetSignalsMetadataErrorBody](paid/errors/get_signals_metadata_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomViewsExperimental

> Source: [CustomViewsExperimental](paid/apis/custom_views_experimental.py)

<details>
<summary><code>def create_custom_view(authorization: str, *, body: CreateCustomViewRequest | CreateCustomViewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomView, CreateCustomViewErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

⚠️ Only call this when the user has EXPLICITLY asked to save or create the view. After generating or previewing a dashboard, do NOT automatically save a draft — show it to the user and wait for them to ask you to save it. Creating saves a DRAFT only; it is NOT permission to publish — never chain a publish onto a create. After saving, hand the user the previewUrl and wait for their feedback before doing anything else. Saves named analytics queries + a self-contained HTML render bundle as a DRAFT custom view. **Call getCustomViewAuthoringGuide (GET /experimental/views/authoring-guide) first** — it returns the full guide and a copy-paste interactive template. Key rules: (1) Do NOT add a customer filter to the SQL — the database scopes every query to the viewing customer at embed time. (2) Each query's SQL must be SELECT-only; return clearly-named columns. Compute metric VALUES in SQL (e.g. (count()*2)/5 AS custom_metric) — derive a number in the render bundle only when it depends on user interaction (toggle/filter/hover) or is pure formatting of a value a query already returns. (3) The render bundle must be SELF-CONTAINED — inline all CSS/JS/charting, NO external loads or fetch (the sandbox has connect-src 'none'); it must listen for the `paid:data` message (data keyed by query id) and re-render on each one. (4) Make it INTERACTIVE — mousemove hover tooltips and at least one addEventListener-wired control that re-renders (a static chart feels broken). (5) The render bundle is the single source of truth — BEFORE saving, preview the EXACT bundle in the user's current client (call getCustomViewPreviewHarness with your bundle + sample data and render the HTML it returns) and show it to the user; that preview in the current client is how the user first sees the dashboard. Do NOT save a draft just to preview it in Paid — creating writes to the user's real account and is never a preview step. Do NOT build a separate chart, and only show numbers that come from a declared query. (6) A view is a FULL dashboard — include as many charts/KPIs as the analysis has. Keep every element derived from the single viewing customer (KPIs, trends, type mix); drop only cross-customer comparisons (rankings, share-of-total, 'N customers'). Don't simplify to one chart. (7) To make the date range adjustable (e.g. the user says 'last month'), write the date boundary as `{period_start:DateTime}` / `{period_end:DateTime}` placeholders in the SQL and pass a default `period` (relative like {kind:'relative',unit:'month',amount:1}, or absolute start/end). The org user can then change it in Paid without re-authoring. A query using the placeholders REQUIRES a period. Do NOT add your own date-range picker to the render bundle — Paid owns the timeframe and the bundle receives already-filtered data; a second in-bundle picker cannot re-run the SQL. (8) Check your draft with validateCustomView (POST /experimental/views/validate) BEFORE asking the user to save — it runs these same gates without persisting and reports every problem at once. The response returns a `previewUrl` — give it to the user so they can open the new view in Paid.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_views_experimental.with_raw_response.create_custom_view("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomView
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomViewErrorBody
```

**Async**

```python
result = await async_client.custom_views_experimental.with_raw_response.create_custom_view("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomView
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomViewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreateCustomViewRequest](paid/models/create_custom_view_request.py) \| [CreateCustomViewRequestDict](paid/models/create_custom_view_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomView](paid/models/custom_view.py), [CreateCustomViewErrorBody](paid/errors/create_custom_view_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomView](paid/models/custom_view.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateCustomViewErrorBody](paid/errors/create_custom_view_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_custom_view(display_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomViewDetail, GetCustomViewErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Returns the view's name, status, query ids, and the author render bundle for the owning organization (DRAFT or PUBLISHED). Used by the trusted preview/embed frame to render the sandbox; the per-customer data is fetched separately via /:displayId/data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_views_experimental.with_raw_response.get_custom_view(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomViewDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomViewErrorBody
```

**Async**

```python
result = await async_client.custom_views_experimental.with_raw_response.get_custom_view(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomViewDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomViewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>display_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomViewDetail](paid/models/custom_view_detail.py), [GetCustomViewErrorBody](paid/errors/get_custom_view_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomViewDetail](paid/models/custom_view_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCustomViewErrorBody](paid/errors/get_custom_view_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_custom_view_data(display_id: str, authorization: str, *, customer_id: str | None = None, period_kind: ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr | None = None, period_unit: ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr | None = None, period_amount: int | None = None, period_start: str | None = None, period_end: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ViewDataResponse, GetCustomViewDataErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Runs every stored query of the view on the read-only analytics database and returns the result sets keyed by query id. For a customer-scoped view (the default), the query is scoped to the caller's organization AND the given `customerId` (both enforced as ClickHouse row filters) — `customerId` is required. For an organization-scoped view, the data is org-wide (scoped only to the caller's organization) and `customerId` is ignored. The scope is enforced by the database — it cannot be widened by the stored SQL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_views_experimental.with_raw_response.get_custom_view_data(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ViewDataResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomViewDataErrorBody
```

**Async**

```python
result = await async_client.custom_views_experimental.with_raw_response.get_custom_view_data(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ViewDataResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomViewDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>display_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>customer_id</code> | <code>str \| None</code> | Customer to scope the data to (dev/preview only; the embed derives this from the verified token). Required for customer-scoped views; ignored for organization-scoped views (their data is org-wide).<br>**Default**: <code>None</code> |
| <code>period_kind</code> | <code>[ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr](paid/models/enums/experimental_views_display_id_data_get_parameters_period_kind.py) \| None</code> | Override the view's default date range for this request only. 'relative' = rolling window (set periodUnit + periodAmount); 'absolute' = fixed range (set periodStart + periodEnd).<br>**Default**: <code>None</code> |
| <code>period_unit</code> | <code>[ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr](paid/models/enums/experimental_views_display_id_data_get_parameters_period_unit.py) \| None</code> | relative override only: unit of the rolling window.<br>**Default**: <code>None</code> |
| <code>period_amount</code> | <code>int \| None</code> | relative override only: how many units back from today.<br>**Default**: <code>None</code> |
| <code>period_start</code> | <code>str \| None</code> | absolute override only: inclusive start date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>period_end</code> | <code>str \| None</code> | absolute override only: inclusive end date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ViewDataResponse](paid/models/view_data_response.py), [GetCustomViewDataErrorBody](paid/errors/get_custom_view_data_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ViewDataResponse](paid/models/view_data_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCustomViewDataErrorBody](paid/errors/get_custom_view_data_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 408, 429, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_custom_view_embed_token(display_id: str, customer_id: str, authorization: str, *, ttl_seconds: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomViewEmbedTokenResponse, GetCustomViewEmbedTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Mints a short-lived, customer-scoped token for embedding a published custom view. Call this from your server with your API key, then pass the returned token to the embed SDK. Organization-scoped views cannot be embedded per-customer — this returns a 400 (`ORG_SCOPED_VIEW_NOT_EMBEDDABLE`) for one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_views_experimental.with_raw_response.get_custom_view_embed_token(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomViewEmbedTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomViewEmbedTokenErrorBody
```

**Async**

```python
result = await async_client.custom_views_experimental.with_raw_response.get_custom_view_embed_token(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomViewEmbedTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomViewEmbedTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>display_id</code> | <code>str</code> | Value sent with the request. |
| <code>customer_id</code> | <code>str</code> | The customer to scope the view to: external id, Paid display id (cus_…), or internal id. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>ttl_seconds</code> | <code>int \| None</code> | Token lifetime in seconds (capped at 3600).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomViewEmbedTokenResponse](paid/models/custom_view_embed_token_response.py), [GetCustomViewEmbedTokenErrorBody](paid/errors/get_custom_view_embed_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomViewEmbedTokenResponse](paid/models/custom_view_embed_token_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCustomViewEmbedTokenErrorBody](paid/errors/get_custom_view_embed_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_custom_views(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomViewListResponse, ListCustomViewsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Lists the organization's custom views (newest first) with lightweight summary info — name, status, query count, default date range, created date. Does not return the SQL or render bundle; fetch a single view via getCustomView for those.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_views_experimental.with_raw_response.list_custom_views("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomViewListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomViewsErrorBody
```

**Async**

```python
result = await async_client.custom_views_experimental.with_raw_response.list_custom_views("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomViewListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomViewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomViewListResponse](paid/models/custom_view_list_response.py), [ListCustomViewsErrorBody](paid/errors/list_custom_views_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomViewListResponse](paid/models/custom_view_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListCustomViewsErrorBody](paid/errors/list_custom_views_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def publish_custom_view(display_id: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomView, PublishCustomViewErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

⚠️ Never publish as an automatic follow-up to creating or generating a view. Only call this after you have shown the user the built/previewed view and they have EXPLICITLY approved publishing — building and publishing are separate user decisions, and answering an earlier question (e.g. the view's scope) is NOT publish approval. Flips the view from DRAFT to PUBLISHED. Only PUBLISHED views are served on the embed data path — this is the gate that stops an unreviewed view reaching end-customers. Idempotent: publishing an already-published view is a no-op success. The response returns a `previewUrl` — give it to the user so they can open the view in Paid.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_views_experimental.with_raw_response.publish_custom_view(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomView
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishCustomViewErrorBody
```

**Async**

```python
result = await async_client.custom_views_experimental.with_raw_response.publish_custom_view(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomView
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishCustomViewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>display_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomView](paid/models/custom_view.py), [PublishCustomViewErrorBody](paid/errors/publish_custom_view_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomView](paid/models/custom_view.py)</code> -- 200

**On `Failure`**: `error` is <code>[PublishCustomViewErrorBody](paid/errors/publish_custom_view_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_custom_view(display_id: str, authorization: str, *, body: UpdateCustomViewRequest | UpdateCustomViewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomView, UpdateCustomViewErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Partially updates a view. Omitted fields are left unchanged. For REVISIONS, prefer the incremental fields — `bundleEdits` (exact search-and-replace on the stored render bundle) and `queryUpserts`/`queryRemovals` (per-query changes) — so you transmit only what changed instead of re-sending the whole payload. The full-replacement fields remain for rewrites: `renderBundle`, and `queries` (a FULL replacement of the query list — never drop queries the user didn't ask to remove). Replacement and incremental forms of the same aspect cannot be combined. The resulting SQL and bundle pass the same validation as createCustomView (SELECT-only, size cap, self-contained, paid:data listener). Works on DRAFT or PUBLISHED views — published embeds pick the change up on their next load.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_views_experimental.with_raw_response.update_custom_view(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomView
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomViewErrorBody
```

**Async**

```python
result = await async_client.custom_views_experimental.with_raw_response.update_custom_view(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomView
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomViewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>display_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateCustomViewRequest](paid/models/update_custom_view_request.py) \| [UpdateCustomViewRequestDict](paid/models/update_custom_view_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomView](paid/models/custom_view.py), [UpdateCustomViewErrorBody](paid/errors/update_custom_view_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomView](paid/models/custom_view.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateCustomViewErrorBody](paid/errors/update_custom_view_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_custom_view_period(display_id: str, authorization: str, *, body: UpdateCustomViewPeriodRequest | UpdateCustomViewPeriodRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomView, UpdateCustomViewPeriodErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject to v2 backwards-compatibility guarantees. Do not build production-critical integrations against it yet.

Updates the view's default date range (the period applied to queries that use the `{period_start:DateTime}` / `{period_end:DateTime}` placeholders). Accepts a relative rolling window (e.g. last 30 days) or a fixed start/end range. Lets the period be changed after deployment without re-authoring the SQL. Applies to DRAFT or PUBLISHED views.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_views_experimental.with_raw_response.update_custom_view_period(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomView
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomViewPeriodErrorBody
```

**Async**

```python
result = await async_client.custom_views_experimental.with_raw_response.update_custom_view_period(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomView
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomViewPeriodErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>display_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateCustomViewPeriodRequest](paid/models/update_custom_view_period_request.py) \| [UpdateCustomViewPeriodRequestDict](paid/models/update_custom_view_period_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomView](paid/models/custom_view.py), [UpdateCustomViewPeriodErrorBody](paid/errors/update_custom_view_period_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomView](paid/models/custom_view.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateCustomViewPeriodErrorBody](paid/errors/update_custom_view_period_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerPortals

> Source: [CustomerPortals](paid/apis/customer_portals.py)

<details>
<summary><code>def create_customer_portal(authorization: str, *, body: CreateCustomerPortalRequest | CreateCustomerPortalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomerPortal, CreateCustomerPortalErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a portal session for the customer. Returns a short-lived URL to the customer portal.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.customer_portals.with_raw_response.create_customer_portal("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerPortal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerPortalErrorBody
```

**Async**

```python
result = await async_client.customer_portals.with_raw_response.create_customer_portal("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomerPortal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerPortalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[CreateCustomerPortalRequest](paid/models/create_customer_portal_request.py) \| [CreateCustomerPortalRequestDict](paid/models/create_customer_portal_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[CustomerPortal](paid/models/customer_portal.py), [CreateCustomerPortalErrorBody](paid/errors/create_customer_portal_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomerPortal](paid/models/customer_portal.py)</code> -- 201

**On `Failure`**: `error` is <code>[CreateCustomerPortalErrorBody](paid/errors/create_customer_portal_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## OrdersLines

> Source: [OrdersLines](paid/apis/orders_lines.py)

<details>
<summary><code>def update3(order_id: str, authorization: str, *, body: OrdersLinesRequest | OrdersLinesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Order, RawError]</code></summary>

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
result = client.orders_lines.with_raw_response.update3("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.orders_lines.with_raw_response.update3("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Order
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
| <code>order_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[OrdersLinesRequest](paid/models/orders_lines_request.py) \| [OrdersLinesRequestDict](paid/models/orders_lines_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[Order](paid/models/order.py), [RawError](paid/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Order](paid/models/order.py)</code> -- Success response

**On `Failure`**: `error` is <code>[RawError](paid/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ValueModels

> Source: [ValueModels](paid/apis/value_models.py)

<details>
<summary><code>def get_current_value_model(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueModelDetail, GetCurrentValueModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current (latest active) value model for the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_models.with_raw_response.get_current_value_model("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueModelDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCurrentValueModelErrorBody
```

**Async**

```python
result = await async_client.value_models.with_raw_response.get_current_value_model("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueModelDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCurrentValueModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueModelDetail](paid/models/value_model_detail.py), [GetCurrentValueModelErrorBody](paid/errors/get_current_value_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueModelDetail](paid/models/value_model_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetCurrentValueModelErrorBody](paid/errors/get_current_value_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_value_model_version(version: int, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueModelDetail, GetValueModelVersionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific historical value model version by version number, including full content.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_models.with_raw_response.get_value_model_version(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueModelDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetValueModelVersionErrorBody
```

**Async**

```python
result = await async_client.value_models.with_raw_response.get_value_model_version(1, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueModelDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetValueModelVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>version</code> | <code>int</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueModelDetail](paid/models/value_model_detail.py), [GetValueModelVersionErrorBody](paid/errors/get_value_model_version_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueModelDetail](paid/models/value_model_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetValueModelVersionErrorBody](paid/errors/get_value_model_version_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_value_model_versions(authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueModelVersionListResponse, ListValueModelVersionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all value model versions sorted by version descending. Does not include the full content.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_models.with_raw_response.list_value_model_versions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueModelVersionListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListValueModelVersionsErrorBody
```

**Async**

```python
result = await async_client.value_models.with_raw_response.list_value_model_versions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueModelVersionListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListValueModelVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueModelVersionListResponse](paid/models/value_model_version_list_response.py), [ListValueModelVersionsErrorBody](paid/errors/list_value_model_versions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueModelVersionListResponse](paid/models/value_model_version_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListValueModelVersionsErrorBody](paid/errors/list_value_model_versions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refresh_value_model_backfill(authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BackfillResponse, RefreshValueModelBackfillErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manually triggers a recalculation of all ClickHouse rows against the current value model.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_models.with_raw_response.refresh_value_model_backfill("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BackfillResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshValueModelBackfillErrorBody
```

**Async**

```python
result = await async_client.value_models.with_raw_response.refresh_value_model_backfill("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BackfillResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshValueModelBackfillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[BackfillResponse](paid/models/backfill_response.py), [RefreshValueModelBackfillErrorBody](paid/errors/refresh_value_model_backfill_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BackfillResponse](paid/models/backfill_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[RefreshValueModelBackfillErrorBody](paid/errors/refresh_value_model_backfill_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_value_model(authorization: str, *, body: ValueModelUploadRequest | ValueModelUploadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueModelDetail, UpdateValueModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a new value model version. Validates the content, creates a new version, archives the previous active version, syncs to ClickHouse, and triggers a backfill of all historical signals.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_models.with_raw_response.update_value_model("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueModelDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateValueModelErrorBody
```

**Async**

```python
result = await async_client.value_models.with_raw_response.update_value_model("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueModelDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateValueModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[ValueModelUploadRequest](paid/models/value_model_upload_request.py) \| [ValueModelUploadRequestDict](paid/models/value_model_upload_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueModelDetail](paid/models/value_model_detail.py), [UpdateValueModelErrorBody](paid/errors/update_value_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueModelDetail](paid/models/value_model_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[UpdateValueModelErrorBody](paid/errors/update_value_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ValueReceipts

> Source: [ValueReceipts](paid/apis/value_receipts.py)

<details>
<summary><code>def archive_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponse, ArchiveValueReceiptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-archive a value receipt. Archived VRs are hidden from list by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_receipts.with_raw_response.archive_value_receipt("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArchiveValueReceiptErrorBody
```

**Async**

```python
result = await async_client.value_receipts.with_raw_response.archive_value_receipt(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArchiveValueReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[SuccessResponse](paid/models/success_response.py), [ArchiveValueReceiptErrorBody](paid/errors/archive_value_receipt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponse](paid/models/success_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ArchiveValueReceiptErrorBody](paid/errors/archive_value_receipt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_value_receipt_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueReceiptDetail, GetValueReceiptByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a value receipt by ID, including its publish/share state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_receipts.with_raw_response.get_value_receipt_by_id("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetValueReceiptByIdErrorBody
```

**Async**

```python
result = await async_client.value_receipts.with_raw_response.get_value_receipt_by_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetValueReceiptByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueReceiptDetail](paid/models/value_receipt_detail.py), [GetValueReceiptByIdErrorBody](paid/errors/get_value_receipt_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueReceiptDetail](paid/models/value_receipt_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[GetValueReceiptByIdErrorBody](paid/errors/get_value_receipt_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_value_receipts(authorization: str, *, limit: int | None = 50, offset: int | None = 0, customer_id: str | None = None, external_customer_id: str | None = None, order_id: str | None = None, product_id: str | None = None, archived: ValueReceiptsGetParametersArchivedOrStr | None = ValueReceiptsGetParametersArchived.FALSE, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueReceiptListResponse, ListValueReceiptsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List value receipts for the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_receipts.with_raw_response.list_value_receipts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListValueReceiptsErrorBody
```

**Async**

```python
result = await async_client.value_receipts.with_raw_response.list_value_receipts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListValueReceiptsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>customer_id</code> | <code>str \| None</code> | Filter by customer display ID.<br>**Default**: <code>None</code> |
| <code>external_customer_id</code> | <code>str \| None</code> | Filter by customer external ID.<br>**Default**: <code>None</code> |
| <code>order_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>product_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>archived</code> | <code>[ValueReceiptsGetParametersArchivedOrStr](paid/models/enums/value_receipts_get_parameters_archived.py) \| None</code> | Include archived value receipts. Defaults to false.<br>**Default**: <code>ValueReceiptsGetParametersArchived.FALSE</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueReceiptListResponse](paid/models/value_receipt_list_response.py), [ListValueReceiptsErrorBody](paid/errors/list_value_receipts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueReceiptListResponse](paid/models/value_receipt_list_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[ListValueReceiptsErrorBody](paid/errors/list_value_receipts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def publish_value_receipt(id_: str, authorization: str, *, body: PublishValueReceiptBody | PublishValueReceiptBodyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueReceiptDetail, PublishValueReceiptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make a value receipt publicly accessible via URL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_receipts.with_raw_response.publish_value_receipt("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishValueReceiptErrorBody
```

**Async**

```python
result = await async_client.value_receipts.with_raw_response.publish_value_receipt(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishValueReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[PublishValueReceiptBody](paid/models/publish_value_receipt_body.py) \| [PublishValueReceiptBodyDict](paid/models/publish_value_receipt_body.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueReceiptDetail](paid/models/value_receipt_detail.py), [PublishValueReceiptErrorBody](paid/errors/publish_value_receipt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueReceiptDetail](paid/models/value_receipt_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[PublishValueReceiptErrorBody](paid/errors/publish_value_receipt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refresh_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueReceiptSyncResponse, RefreshValueReceiptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-populate an existing draft value receipt with current data inline. Returns the slim sync response. Sealed VRs cannot be refreshed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_receipts.with_raw_response.refresh_value_receipt("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptSyncResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshValueReceiptErrorBody
```

**Async**

```python
result = await async_client.value_receipts.with_raw_response.refresh_value_receipt(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptSyncResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshValueReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueReceiptSyncResponse](paid/models/value_receipt_sync_response.py), [RefreshValueReceiptErrorBody](paid/errors/refresh_value_receipt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueReceiptSyncResponse](paid/models/value_receipt_sync_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[RefreshValueReceiptErrorBody](paid/errors/refresh_value_receipt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def seal_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponse, SealValueReceiptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transition a draft value receipt to sealed (posted) status. Sealed VRs are immutable — they cannot be updated or re-populated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_receipts.with_raw_response.seal_value_receipt("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SealValueReceiptErrorBody
```

**Async**

```python
result = await async_client.value_receipts.with_raw_response.seal_value_receipt(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SealValueReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[SuccessResponse](paid/models/success_response.py), [SealValueReceiptErrorBody](paid/errors/seal_value_receipt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponse](paid/models/success_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[SealValueReceiptErrorBody](paid/errors/seal_value_receipt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sync_value_receipt(authorization: str, *, body: SyncValueReceiptRequest | SyncValueReceiptRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueReceiptSyncResponse, SyncValueReceiptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find or create a value receipt by natural key (customer + product/order + dates), then populate it with current data inline. Returns the ID, status, and public URL. Posted (sealed) VRs are returned as-is without re-populating.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_receipts.with_raw_response.sync_value_receipt("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptSyncResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SyncValueReceiptErrorBody
```

**Async**

```python
result = await async_client.value_receipts.with_raw_response.sync_value_receipt("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptSyncResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SyncValueReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[SyncValueReceiptRequest](paid/models/sync_value_receipt_request.py) \| [SyncValueReceiptRequestDict](paid/models/sync_value_receipt_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueReceiptSyncResponse](paid/models/value_receipt_sync_response.py), [SyncValueReceiptErrorBody](paid/errors/sync_value_receipt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueReceiptSyncResponse](paid/models/value_receipt_sync_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[SyncValueReceiptErrorBody](paid/errors/sync_value_receipt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unarchive_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponse, UnarchiveValueReceiptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived value receipt.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_receipts.with_raw_response.unarchive_value_receipt("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnarchiveValueReceiptErrorBody
```

**Async**

```python
result = await async_client.value_receipts.with_raw_response.unarchive_value_receipt(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnarchiveValueReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[SuccessResponse](paid/models/success_response.py), [UnarchiveValueReceiptErrorBody](paid/errors/unarchive_value_receipt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponse](paid/models/success_response.py)</code> -- 200

**On `Failure`**: `error` is <code>[UnarchiveValueReceiptErrorBody](paid/errors/unarchive_value_receipt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unpublish_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ValueReceiptDetail, UnpublishValueReceiptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke public access to a value receipt.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.value_receipts.with_raw_response.unpublish_value_receipt("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishValueReceiptErrorBody
```

**Async**

```python
result = await async_client.value_receipts.with_raw_response.unpublish_value_receipt(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ValueReceiptDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishValueReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>Any \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](paid/core/results.py)&#91;[ValueReceiptDetail](paid/models/value_receipt_detail.py), [UnpublishValueReceiptErrorBody](paid/errors/unpublish_value_receipt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ValueReceiptDetail](paid/models/value_receipt_detail.py)</code> -- 200

**On `Failure`**: `error` is <code>[UnpublishValueReceiptErrorBody](paid/errors/unpublish_value_receipt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 500 | <code>[ErrorResponse](paid/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](paid/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

